/* Gewon Music — máy chủ cho index.html (cửa hàng) và staff.html (khu vực nhân viên).
   Không cần cài thư viện nào: chỉ cần Node.js 18 trở lên.
   Dữ liệu lưu trong data/db.json. */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

/* ---------------------------------------------------------------- tiện ích */
class HttpError extends Error { constructor(status, message) { super(message); this.status = status; } }
const fail = (status, message) => { throw new HttpError(status, message); };
const now = () => new Date().toISOString().slice(0, 19); // UTC, dạng 2026-10-23T08:30:00
const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
const digits = s => String(s || '').replace(/\D/g, '').replace(/^84(?=\d{9}$)/, '0');
const money = n => new Intl.NumberFormat('vi-VN').format(Number(n || 0)) + '₫';
const rand = (n, alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789') => Array.from(crypto.randomBytes(n), b => alphabet[b % alphabet.length]).join('');
const clip = (s, n) => String(s == null ? '' : s).trim().slice(0, n);
const safeEqual = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); };

const STATUS = { pending: 'Chờ xác nhận', confirmed: 'Đã xác nhận', preparing: 'Đang chuẩn bị', shipped: 'Đang giao', delivered: 'Đã giao', cancelled: 'Đã hủy' };
const CATEGORIES = { piano: 'Piano & keyboard', guitar: 'Guitar & bass', drums: 'Trống & gõ', strings: 'Đàn vĩ cầm', woodwind: 'Nhạc cụ hơi', accessories: 'Phụ kiện âm thanh' };

/* ---------------------------------------------------------------- dữ liệu */
const IMG = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
const SEED_PRODUCTS = [
  [1, 'Piano điện Harmony P-88', 'piano', 12800000, 'photo-1546058256-47154de4046c', 'Piano điện · 88 phím'],
  [2, 'Guitar acoustic Mộc 40', 'guitar', 3650000, 'photo-1607513272385-b4f42e08fb16', 'Guitar acoustic'],
  [3, 'Bộ trống Studio Beat 5', 'drums', 14900000, 'photo-1461784121038-f088ca1e7714', 'Bộ trống acoustic'],
  [4, 'Violin Classic V-01', 'strings', 2850000, 'photo-1612225330812-01a9c6b355ec', 'Violin · Size 4/4'],
  [5, 'Tai nghe phòng thu Monitor One', 'accessories', 1290000, 'photo-1484704849700-f032a568e944', 'Tai nghe'],
  [6, 'Guitar điện Pulse S-Style', 'guitar', 7950000, 'photo-1564186763535-ebb21ef5277f', 'Guitar điện'],
  [7, 'Keyboard Stage Key 61', 'piano', 4250000, 'photo-1599494009395-5b43c783a2d5', 'Keyboard · 61 phím'],
  [8, 'Sáo flute Silver S-01', 'woodwind', 1850000, 'photo-1701748421258-e8e5a544180a', 'Sáo flute · nhạc cụ hơi'],
  [9, 'Micro thu âm Studio M-7', 'accessories', 2150000, 'photo-1527261834078-9b37d35a4a32', 'Micro thu âm']
].map(([id, name, category, price, img, meta]) => ({
  id, name, brand: '', category, price, stock: null, description: '', warranty: '',
  imageUrl: IMG(img), meta, active: true, isSample: true
}));

function emptyDb() {
  return { nextIds: { product: 10, order: 1, handoff: 1, review: 1 }, products: SEED_PRODUCTS, orders: [], handoffs: [], reviews: [], accounts: [] };
}
let db;
function loadDb() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  try { db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); }
  catch (e) {
    if (e.code !== 'ENOENT') { fs.copyFileSync(DB_FILE, DB_FILE + '.loi-' + Date.now()); console.error('db.json bị lỗi, đã sao lưu và tạo mới:', e.message); }
    db = emptyDb(); saveDb();
  }
  const base = emptyDb();
  for (const k of Object.keys(base)) if (db[k] === undefined) db[k] = base[k];
}
function saveDb() {
  const tmp = DB_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(db, null, 2));
  fs.renameSync(tmp, DB_FILE);
}

/* ---------------------------------------------------------------- mật khẩu & phiên */
function hashPassword(pw) { const salt = crypto.randomBytes(16); return salt.toString('hex') + ':' + crypto.scryptSync(pw, salt, 64).toString('hex'); }
function checkPassword(pw, stored) {
  const [s, h] = String(stored || '').split(':'); if (!s || !h) return false;
  return safeEqual(crypto.scryptSync(pw, Buffer.from(s, 'hex'), 64).toString('hex'), h);
}
const SESSION_TTL = 12 * 3600 * 1000;
const sessions = new Map();
setInterval(() => { const t = Date.now(); for (const [k, v] of sessions) if (v.exp < t) sessions.delete(k); }, 600000).unref();
function parseCookies(req) {
  const out = {}; String(req.headers.cookie || '').split(';').forEach(p => { const i = p.indexOf('='); if (i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return out;
}
const loginFails = new Map(); // khóa tạm khi nhập sai mật khẩu nhiều lần
function lockKey(ip, user) { return ip + '|' + user; }

/* ---------------------------------------------------------------- nghiệp vụ */
const publicStaff = a => ({ username: a.username, name: a.name, role: a.role });
function productView(p) { return { ...p }; }
function stockText(p) { return p.stock === null || p.stock === undefined ? 'Tồn kho chưa xác nhận' : p.stock === 0 ? 'Tạm hết hàng' : 'Còn: ' + p.stock; }
function orderView(o) { return { ...o, statusLabel: STATUS[o.status] || o.status }; }
function customerOrderView(o) { const v = orderView(o); delete v.requestKey; return v; }

function parseProductInput(b, existing) {
  const out = {};
  const has = k => b[k] !== undefined;
  if (has('name')) { out.name = clip(b.name, 160); if (!out.name) fail(400, 'Tên sản phẩm không được để trống.'); }
  if (has('brand')) out.brand = clip(b.brand, 80);
  if (has('category')) { if (!CATEGORIES[b.category]) fail(400, 'Danh mục không hợp lệ.'); out.category = b.category; }
  if (has('price')) { const p = Number(String(b.price).replace(/[^\d.]/g, '')); if (!Number.isFinite(p) || p < 0 || p > 1e10) fail(400, 'Giá không hợp lệ.'); out.price = Math.round(p); }
  if (has('stock')) {
    if (b.stock === '' || b.stock === null) out.stock = null;
    else { const s = Number(b.stock); if (!Number.isInteger(s) || s < 0 || s > 1e6) fail(400, 'Tồn kho phải là số nguyên từ 0 trở lên (hoặc để trống nếu chưa xác nhận).'); out.stock = s; }
  }
  if (has('description')) out.description = clip(b.description, 1600);
  if (has('warranty')) out.warranty = clip(b.warranty, 500);
  if (has('imageUrl')) {
    const u = clip(b.imageUrl, 1000);
    if (u && !/^https:\/\//i.test(u) && !/^images\//i.test(u)) fail(400, 'URL ảnh phải bắt đầu bằng https:// hoặc images/.');
    out.imageUrl = u;
  }
  if (has('active')) out.active = b.active === true || b.active === 'true' || b.active === 'on';
  if (has('isSample')) out.isSample = b.isSample === true || b.isSample === 'true' || b.isSample === 'on';
  if (!existing) {
    if (!out.name) fail(400, 'Hãy nhập tên sản phẩm.');
    if (out.price === undefined) fail(400, 'Hãy nhập giá sản phẩm.');
    if (!out.category) out.category = 'accessories';
  }
  return out;
}

function adjustStock(order, direction) { // direction: -1 trừ kho, +1 hoàn kho
  for (const it of order.items) {
    const p = db.products.find(x => x.id === it.productId);
    if (p && p.stock !== null && p.stock !== undefined) p.stock = Math.max(0, p.stock + direction * it.quantity);
  }
}
function canDeduct(order) {
  return order.items.every(it => { const p = db.products.find(x => x.id === it.productId); return !p || p.stock === null || p.stock === undefined || p.stock >= it.quantity; });
}

function findProductByName(name) {
  const n = norm(name);
  return db.products.find(p => norm(p.name) === n) || db.products.find(p => norm(p.name).includes(n) || n.includes(norm(p.name)));
}

function createOrder(b) {
  const phone = clip(b.phone, 30);
  if (digits(phone).length < 8 || digits(phone).length > 13) fail(400, 'Hãy nhập số điện thoại hợp lệ để cửa hàng liên hệ.');
  if (!Array.isArray(b.items) || !b.items.length) fail(400, 'Giỏ hàng đang trống.');
  if (b.items.length > 30) fail(400, 'Đơn có quá nhiều sản phẩm.');
  const requestKey = clip(b.requestKey, 80);
  if (requestKey) { const dup = db.orders.find(o => o.requestKey === requestKey); if (dup) return { order: dup, duplicate: true }; }
  const merged = new Map();
  for (const raw of b.items) {
    const p = findProductByName(raw && raw.name);
    if (!p) fail(400, `Không tìm thấy sản phẩm “${clip(raw && raw.name, 80)}” trong danh mục.`);
    if (!p.active) fail(400, `Sản phẩm “${p.name}” hiện không bán.`);
    const q = Number(raw.quantity);
    if (!Number.isInteger(q) || q < 1 || q > 99) fail(400, `Số lượng của “${p.name}” không hợp lệ.`);
    merged.set(p.id, (merged.get(p.id) || 0) + q);
  }
  const items = [];
  for (const [id, quantity] of merged) {
    const p = db.products.find(x => x.id === id);
    if (p.stock !== null && p.stock !== undefined && p.stock < quantity) fail(400, p.stock === 0 ? `“${p.name}” đã hết hàng.` : `“${p.name}” chỉ còn ${p.stock} sản phẩm.`);
    items.push({ productId: p.id, name: p.name, quantity, unitPrice: p.price });
  }
  const lat = Number(b.latitude), lng = Number(b.longitude);
  const d = new Date();
  let code; do { code = `GM-${String(d.getUTCFullYear()).slice(2)}${String(d.getUTCMonth() + 1).padStart(2, '0')}${String(d.getUTCDate()).padStart(2, '0')}-${rand(6, 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789')}`; } while (db.orders.some(o => o.code === code));
  const order = {
    id: db.nextIds.order++, code, customerName: clip(b.customerName, 120) || 'Khách hàng', phone,
    address: clip(b.address, 500) || 'Chưa cung cấp (nhân viên sẽ liên hệ xác nhận)',
    latitude: Number.isFinite(lat) && b.latitude !== null && b.latitude !== '' ? lat : null,
    longitude: Number.isFinite(lng) && b.longitude !== null && b.longitude !== '' ? lng : null,
    note: clip(b.note, 800), items, total: items.reduce((s, i) => s + i.unitPrice * i.quantity, 0),
    status: 'pending', isSample: items.some(i => (db.products.find(p => p.id === i.productId) || {}).isSample),
    requestKey, createdAt: now(), updatedAt: now()
  };
  adjustStock(order, -1);
  db.orders.unshift(order);
  saveDb();
  return { order, duplicate: false };
}

/* ---------------------------------------------------------------- trợ lý chat (trả lời theo danh mục cửa hàng) */
function parseBudget(n) {
  const m = n.match(/(\d+(?:[.,]\d+)?)\s*(trieu|tr\b|m\b|k\b|nghin|ngan)/);
  if (!m) return null;
  const v = parseFloat(m[1].replace(',', '.')); const u = m[2];
  return Math.round(/^(trieu|tr|m)$/.test(u) ? v * 1e6 : v * 1e3);
}
function productCard(p) {
  return { type: 'product', id: p.id, name: p.name, price: p.price, image: p.imageUrl, category: CATEGORIES[p.category] || '', meta: p.meta || '', stock: p.stock, stockText: stockText(p) };
}
function chatReply(messages) {
  const last = [...(Array.isArray(messages) ? messages : [])].reverse().find(m => m && m.role === 'user');
  const text = clip(last && last.content, 500); const n = norm(text);
  const active = db.products.filter(p => p.active);
  const note = ' Giá và tồn kho do cửa hàng xác nhận khi bạn đặt hàng.';
  const chips = { type: 'chips', items: ['Mình mới học nhạc', 'Gợi ý theo ngân sách', 'Kiểm tra đơn hàng', 'Gặp nhân viên'] };
  if (!n) return { answer: 'Bạn muốn mình tư vấn nhạc cụ nào ạ?', mode: 'local', cards: [chips] };

  if (/nhan vien|gap nguoi|tu van vien|nguoi that|staff|human/.test(n))
    return { answer: 'Mình sẽ nối bạn với nhân viên. Bạn để lại số điện thoại, Zalo hoặc email, nhân viên sẽ trả lời ngay tại khung chat này.', mode: 'local', cards: [{ type: 'handoff' }] };

  const named = active.filter(p => n.includes(norm(p.name)) || n.includes(norm(p.name.split(/\s+/).slice(-2).join(' '))));
  if (named.length) {
    const p = named[0]; const extra = [];
    if (p.description) extra.push(p.description);
    if (/bao hanh/.test(n)) extra.push(p.warranty ? 'Bảo hành: ' + p.warranty : 'Thông tin bảo hành của sản phẩm này cửa hàng chưa cập nhật, nhân viên sẽ xác nhận khi bạn đặt hàng.');
    return { answer: `${p.name} có giá ${money(p.price)}. ${stockText(p)}.` + (extra.length ? ' ' + extra.join(' ') : '') + note, mode: 'local', cards: named.slice(0, 3).map(productCard) };
  }

  const budget = parseBudget(n);
  const catMap = [[/piano|keyboard|organ/, 'piano'], [/guitar|ukulele|bass/, 'guitar'], [/trong|drum/, 'drums'], [/violin|cello|dan vi cam/, 'strings'], [/sao|flute|sax|ken\b|nhac cu hoi/, 'woodwind'], [/micro|tai nghe|thu am|phu kien/, 'accessories']];
  const cat = (catMap.find(([re]) => re.test(n)) || [])[1];
  const beginner = /moi hoc|nguoi moi|bat dau|moi tap|beginner/.test(n);

  if (budget || cat || beginner) {
    let list = active.slice();
    if (cat) list = list.filter(p => p.category === cat);
    if (budget) list = list.filter(p => p.price <= budget);
    list.sort((a, b) => budget ? b.price - a.price : a.price - b.price);
    list = list.slice(0, 3);
    if (!list.length) return { answer: (budget ? `Hiện danh mục chưa có sản phẩm${cat ? ' ' + CATEGORIES[cat].toLowerCase() : ''} trong mức ${money(budget)}.` : 'Hiện danh mục chưa có sản phẩm phù hợp.') + ' Bạn có thể tăng ngân sách một chút hoặc nhắn “Gặp nhân viên” để được tư vấn thêm.', mode: 'local', cards: [chips] };
    const head = beginner ? 'Với người mới bắt đầu, bạn có thể tham khảo các mẫu giá dễ tiếp cận này:' : budget ? `Trong mức ${money(budget)}, mình gợi ý:` : `Một vài lựa chọn ${CATEGORIES[cat].toLowerCase()}:`;
    return { answer: head + note, mode: 'local', cards: list.map(productCard) };
  }

  if (/giao hang|van chuyen|ship|thanh toan|tra gop|doi tra|bao hanh/.test(n))
    return { answer: 'Phí giao hàng, hình thức thanh toán và chính sách bảo hành/đổi trả sẽ được nhân viên xác nhận riêng sau khi bạn đặt đơn. Bạn cần mình nối với nhân viên để hỏi kỹ hơn không?', mode: 'local', cards: [{ type: 'handoff' }] };

  if (/xin chao|chao|hello|hi\b|hey/.test(n))
    return { answer: 'Xin chào! Mình có thể gợi ý nhạc cụ theo ngân sách, theo loại đàn, hoặc giúp bạn kiểm tra đơn hàng. Bạn quan tâm nhạc cụ nào ạ?', mode: 'local', cards: [chips] };

  return { answer: 'Mình chưa hiểu rõ ý bạn. Bạn thử nói loại nhạc cụ (ví dụ “guitar”, “piano”), ngân sách (ví dụ “dưới 5 triệu”), hoặc nhắn “Gặp nhân viên” để được hỗ trợ trực tiếp nhé.', mode: 'local', cards: [chips] };
}

/* ---------------------------------------------------------------- các tuyến API */
const routes = [];
const route = (method, pattern, handler, opts = {}) => routes.push({ method, re: new RegExp('^' + pattern.replace(/:(\w+)/g, '(?<$1>[^/]+)') + '$'), handler, opts });

route('GET', '/api/health', () => ({ ok: true, mode: 'server', aiConfigured: false, mapsConfigured: false }));
route('GET', '/api/config', () => ({ mapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '' }));
route('GET', '/api/session', c => ({ csrfToken: c.session.csrf, staff: c.session.staff }));

route('GET', '/api/products', () => ({ products: db.products.filter(p => p.active).map(productView) }));
route('GET', '/api/reviews', () => ({ reviews: db.reviews.slice().reverse().slice(0, 60) }));
route('POST', '/api/reviews', c => {
  const b = c.body; const code = clip(b.orderCode, 40).toUpperCase();
  const order = db.orders.find(o => o.code === code);
  if (!order || digits(order.phone) !== digits(b.phone)) fail(404, 'Không tìm thấy đơn hàng với mã và số điện thoại này.');
  if (order.status !== 'delivered') fail(400, 'Chỉ đơn đã giao mới được đánh giá.');
  const productId = Number(b.productId); const item = order.items.find(i => i.productId === productId);
  if (!item) fail(400, 'Sản phẩm này không có trong đơn hàng của bạn.');
  const rating = Number(b.rating); if (!Number.isInteger(rating) || rating < 1 || rating > 5) fail(400, 'Hãy chọn số sao từ 1 đến 5.');
  const comment = clip(b.comment, 1000); if (comment.length < 3) fail(400, 'Hãy viết vài dòng nhận xét.');
  if (db.reviews.some(r => r.orderCode === code && r.productId === productId)) fail(400, 'Bạn đã đánh giá sản phẩm này cho đơn này rồi.');
  db.reviews.push({ id: db.nextIds.review++, orderCode: code, productId, productName: item.name, rating, comment, reviewerName: clip(b.reviewerName, 80) || order.customerName, createdAt: now() });
  saveDb();
  return { message: 'Cảm ơn bạn đã đánh giá!' };
});

route('POST', '/api/chat', c => chatReply(c.body.messages));

route('POST', '/api/orders', c => {
  const { order } = createOrder(c.body);
  return { order: customerOrderView(order), message: 'Nhân viên sẽ liên hệ qua số điện thoại bạn để xác nhận đơn, phí giao hàng và thời gian nhận hàng.' };
});
function ownOrder(code, phone) {
  const o = db.orders.find(x => x.code === String(code).toUpperCase());
  if (!o || !digits(phone) || digits(o.phone) !== digits(phone)) fail(404, 'Không tìm thấy đơn hàng với mã và số điện thoại này.');
  return o;
}
route('GET', '/api/orders/:code', c => ({ order: customerOrderView(ownOrder(decodeURIComponent(c.params.code), c.query.phone)) }));
route('POST', '/api/orders/:code/cancel', c => {
  const o = ownOrder(decodeURIComponent(c.params.code), c.body.phone);
  if (o.status === 'cancelled') fail(400, 'Đơn này đã được hủy trước đó.');
  if (!['pending', 'confirmed', 'preparing'].includes(o.status)) fail(400, o.status === 'delivered' ? 'Đơn đã giao nên không thể hủy.' : 'Đơn đang trên đường giao, vui lòng liên hệ cửa hàng để được hỗ trợ.');
  o.status = 'cancelled'; o.updatedAt = now(); adjustStock(o, +1); saveDb();
  return { order: customerOrderView(o), message: 'Đơn hàng đã được hủy.' };
});

/* ---- chat trực tiếp với nhân viên (khách) ---- */
route('POST', '/api/handoff', c => {
  const contact = clip(c.body.contact, 120); if (contact.length < 5) fail(400, 'Hãy nhập số điện thoại, Zalo hoặc email để nhân viên liên hệ.');
  const note = clip(c.body.note, 500);
  const h = { id: db.nextIds.handoff++, token: crypto.randomBytes(18).toString('hex'), contact, note, status: 'open', createdAt: now(), messages: [] };
  if (note) h.messages.push({ from: 'customer', text: note, at: now() });
  h.messages.push({ from: 'auto', text: 'Mình đã chuyển yêu cầu đến nhân viên. Bạn cứ nhắn tiếp ở đây, nhân viên sẽ trả lời khi có mặt nhé.', at: now() });
  db.handoffs.unshift(h); saveDb();
  return { id: h.id, token: h.token, message: 'Đã gửi yêu cầu. Nhân viên sẽ trả lời bạn tại đây.', messages: h.messages.map((m, i) => ({ ...m, i })) };
});
function ownHandoff(id, token) {
  const h = db.handoffs.find(x => x.id === Number(id));
  if (!h || !safeEqual(h.token, token || '')) fail(404, 'Không tìm thấy cuộc trò chuyện.');
  return h;
}
route('GET', '/api/handoff/:id/messages', c => {
  const h = ownHandoff(c.params.id, c.query.token); const since = Math.max(0, Number(c.query.since) || 0);
  return { status: h.status, messages: h.messages.map((m, i) => ({ ...m, i })).filter(m => m.i >= since) };
});
route('POST', '/api/handoff/:id/messages', c => {
  const h = ownHandoff(c.params.id, c.body.token); if (h.status !== 'open') fail(400, 'Cuộc trò chuyện đã đóng. Hãy gửi yêu cầu mới.');
  const text = clip(c.body.text, 1000); if (!text) fail(400, 'Tin nhắn trống.');
  if (h.messages.length > 500) fail(400, 'Cuộc trò chuyện quá dài, hãy gửi yêu cầu mới.');
  h.messages.push({ from: 'customer', text, at: now() }); saveDb();
  return { ok: true };
});

/* ---- nhân viên: đăng nhập ---- */
route('GET', '/api/staff/status', () => ({ needsSetup: db.accounts.length === 0 }), { staff: false });
function validateNewAccount(b) {
  const username = clip(b.username, 32).toLowerCase();
  if (!/^[a-z0-9._-]{3,32}$/.test(username)) fail(400, 'Tên đăng nhập gồm 3–32 ký tự: chữ không dấu, số, dấu chấm, gạch dưới hoặc gạch ngang.');
  const password = String(b.password || ''); if (password.length < 8) fail(400, 'Mật khẩu tối thiểu 8 ký tự.');
  if (password.length > 200) fail(400, 'Mật khẩu quá dài.');
  if (db.accounts.some(a => a.username === username)) fail(400, 'Tên đăng nhập này đã tồn tại.');
  return { username, password, name: clip(b.name, 80) || username };
}
route('POST', '/api/staff/setup', c => {
  if (db.accounts.length) fail(403, 'Hệ thống đã được thiết lập. Hãy đăng nhập.');
  const v = validateNewAccount(c.body);
  const acc = { username: v.username, name: v.name, role: 'admin', passHash: hashPassword(v.password), createdAt: now() };
  db.accounts.push(acc); saveDb();
  const s = c.newSession(publicStaff(acc)); return { csrfToken: s.csrf, staff: s.staff };
}, { staff: false });
route('POST', '/api/staff/login', c => {
  const username = clip(c.body.username, 64).toLowerCase(), password = String(c.body.password || '');
  if (!username || !password) fail(400, 'Hãy nhập tên đăng nhập và mật khẩu.');
  const key = lockKey(c.ip, username), f = loginFails.get(key);
  if (f && f.until > Date.now()) fail(429, 'Nhập sai quá nhiều lần. Hãy thử lại sau vài phút.');
  const acc = db.accounts.find(a => a.username === username);
  const ok = acc ? checkPassword(password, acc.passHash) : (checkPassword(password, hashPassword('x')), false);
  if (!ok) {
    const n = (f && !(f.until && f.until <= Date.now()) ? f.n : 0) + 1;
    loginFails.set(key, { n, until: n >= 5 ? Date.now() + 10 * 60000 : 0 });
    fail(401, 'Sai tên đăng nhập hoặc mật khẩu.');
  }
  loginFails.delete(key);
  const s = c.newSession(publicStaff(acc)); return { csrfToken: s.csrf, staff: s.staff };
}, { staff: false });
route('POST', '/api/staff/logout', c => { c.destroySession(); return { ok: true }; }, { staff: false });

/* ---- nhân viên: tổng quan, đơn hàng ---- */
route('GET', '/api/staff/summary', () => ({
  totalOrders: db.orders.length,
  pendingOrders: db.orders.filter(o => o.status === 'pending').length,
  cancelledOrders: db.orders.filter(o => o.status === 'cancelled').length,
  sampleProducts: db.products.filter(p => p.isSample).length,
  openHandoffs: db.handoffs.filter(h => h.status === 'open').length
}));
route('GET', '/api/staff/orders', () => ({ orders: db.orders.slice(0, 300).map(orderView) }));
route('PATCH', '/api/staff/orders/:id/status', c => {
  const o = db.orders.find(x => x.id === Number(c.params.id)); if (!o) fail(404, 'Không tìm thấy đơn hàng.');
  const status = c.body.status; if (!STATUS[status]) fail(400, 'Trạng thái không hợp lệ.');
  if (o.status !== status) {
    if (status === 'cancelled') adjustStock(o, +1);
    else if (o.status === 'cancelled') { if (!canDeduct(o)) fail(400, 'Không đủ tồn kho để mở lại đơn này.'); adjustStock(o, -1); }
    o.status = status; o.updatedAt = now(); saveDb();
  }
  return { order: orderView(o) };
});
const isFinal = o => o.status === 'delivered' || o.status === 'cancelled';
route('DELETE', '/api/staff/orders/:id', c => {
  const i = db.orders.findIndex(x => x.id === Number(c.params.id)); if (i < 0) fail(404, 'Không tìm thấy đơn hàng.');
  if (!isFinal(db.orders[i])) fail(400, 'Chỉ xóa được đơn đã giao hoặc đã hủy.');
  db.orders.splice(i, 1); saveDb(); return { ok: true };
});
route('DELETE', '/api/staff/orders', () => { const before = db.orders.length; db.orders = db.orders.filter(o => !isFinal(o)); saveDb(); return { removed: before - db.orders.length }; });

/* ---- nhân viên: chat với khách ---- */
route('GET', '/api/staff/handoffs', () => ({ handoffs: db.handoffs.map(({ token, ...h }) => h) }));
route('POST', '/api/staff/handoffs/:id/reply', c => {
  const h = db.handoffs.find(x => x.id === Number(c.params.id)); if (!h) fail(404, 'Không tìm thấy cuộc trò chuyện.');
  const text = clip(c.body.text, 1000); if (!text) fail(400, 'Tin nhắn trống.');
  h.messages.push({ from: 'staff', name: c.session.staff.name, text, at: now() }); saveDb(); return { ok: true };
});
route('PATCH', '/api/staff/handoffs/:id', c => {
  const h = db.handoffs.find(x => x.id === Number(c.params.id)); if (!h) fail(404, 'Không tìm thấy cuộc trò chuyện.');
  if (!['open', 'done'].includes(c.body.status)) fail(400, 'Trạng thái không hợp lệ.');
  h.status = c.body.status; saveDb(); return { ok: true };
});
route('DELETE', '/api/staff/handoffs/:id', c => {
  const i = db.handoffs.findIndex(x => x.id === Number(c.params.id)); if (i < 0) fail(404, 'Không tìm thấy cuộc trò chuyện.');
  db.handoffs.splice(i, 1); saveDb(); return { ok: true };
});
route('DELETE', '/api/staff/handoffs', () => { const before = db.handoffs.length; db.handoffs = db.handoffs.filter(h => h.status !== 'done'); saveDb(); return { removed: before - db.handoffs.length }; });

/* ---- nhân viên: sản phẩm ---- */
route('GET', '/api/staff/products', () => ({ products: db.products.map(productView) }));
route('POST', '/api/staff/products', c => {
  const v = parseProductInput(c.body, null);
  const p = { id: db.nextIds.product++, brand: '', stock: null, description: '', warranty: '', imageUrl: '', meta: '', active: true, isSample: false, ...v };
  db.products.push(p); saveDb(); return { product: productView(p) };
});
route('PATCH', '/api/staff/products/:id', c => {
  const p = db.products.find(x => x.id === Number(c.params.id)); if (!p) fail(404, 'Không tìm thấy sản phẩm.');
  Object.assign(p, parseProductInput(c.body, p)); saveDb(); return { product: productView(p) };
});

/* ---- nhân viên: tài khoản (chỉ Quản lý) ---- */
const adminOnly = c => { if (c.session.staff.role !== 'admin') fail(403, 'Chỉ tài khoản Quản lý mới thực hiện được thao tác này.'); };
route('GET', '/api/staff/accounts', c => { adminOnly(c); return { accounts: db.accounts.map(publicStaff) }; });
route('POST', '/api/staff/accounts', c => {
  adminOnly(c); const v = validateNewAccount(c.body);
  db.accounts.push({ username: v.username, name: v.name, role: c.body.role === 'admin' ? 'admin' : 'staff', passHash: hashPassword(v.password), createdAt: now() }); saveDb();
  return { message: 'Đã tạo tài khoản ' + v.username + '.' };
});
route('DELETE', '/api/staff/accounts', c => {
  adminOnly(c); const u = clip(c.body.username, 64).toLowerCase();
  if (u === c.session.staff.username) fail(400, 'Bạn không thể xóa chính mình.');
  const i = db.accounts.findIndex(a => a.username === u); if (i < 0) fail(404, 'Không tìm thấy tài khoản.');
  if (db.accounts[i].role === 'admin' && db.accounts.filter(a => a.role === 'admin').length < 2) fail(400, 'Phải còn ít nhất một tài khoản Quản lý.');
  db.accounts.splice(i, 1); saveDb();
  for (const [k, s] of sessions) if (s.staff && s.staff.username === u) sessions.delete(k);
  return { ok: true };
});

/* ---------------------------------------------------------------- máy chủ HTTP */
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg', '.mp4': 'video/mp4', '.txt': 'text/plain; charset=utf-8' };
const SECURITY_HEADERS = { 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'same-origin', 'X-Frame-Options': 'SAMEORIGIN' };

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on('data', d => { size += d.length; if (size > 300000) { reject(new HttpError(413, 'Dữ liệu gửi lên quá lớn.')); req.destroy(); } else chunks.push(d); });
    req.on('end', () => { if (!chunks.length) return resolve({}); try { const v = JSON.parse(Buffer.concat(chunks).toString('utf8')); resolve(v && typeof v === 'object' ? v : {}); } catch (_) { reject(new HttpError(400, 'Dữ liệu gửi lên không hợp lệ.')); } });
    req.on('error', reject);
  });
}
function sendJson(res, status, obj, extra = {}) {
  const body = JSON.stringify(obj);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body), 'Cache-Control': 'no-store', ...SECURITY_HEADERS, ...extra });
  res.end(body);
}

async function handleApi(req, res, u) {
  const cookies = parseCookies(req); const secure = req.headers['x-forwarded-proto'] === 'https';
  let sid = cookies.gw_sid; let session = sid && sessions.get(sid);
  const cookieHeader = id => `gw_sid=${id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_TTL / 1000}` + (secure ? '; Secure' : '');
  let setCookie = null;
  const create = staff => { const id = crypto.randomBytes(24).toString('hex'); const s = { csrf: crypto.randomBytes(18).toString('hex'), staff: staff || null, exp: Date.now() + SESSION_TTL }; sessions.set(id, s); sid = id; session = s; setCookie = cookieHeader(id); return s; };
  if (!session || session.exp < Date.now()) create(null); else session.exp = Date.now() + SESSION_TTL;

  const ctx = {
    req, res, query: Object.fromEntries(u.searchParams), body: {}, params: {}, ip: req.socket.remoteAddress || '',
    get session() { return session; },
    newSession: staff => { if (sid) sessions.delete(sid); return create(staff); },
    destroySession: () => { if (sid) sessions.delete(sid); create(null); }
  };
  try {
    const r = routes.find(x => x.method === req.method && x.re.test(u.pathname));
    if (!r) {
      if (routes.some(x => x.re.test(u.pathname))) fail(405, 'Phương thức không được hỗ trợ.');
      fail(404, 'Không tìm thấy đường dẫn API.');
    }
    ctx.params = r.re.exec(u.pathname).groups || {};
    if (req.method !== 'GET') ctx.body = await readBody(req);
    if (u.pathname.startsWith('/api/staff/') && r.opts.staff !== false) {
      if (!session.staff) fail(401, 'Bạn cần đăng nhập nhân viên.');
      if (req.method !== 'GET' && !safeEqual(req.headers['x-csrf-token'] || '', session.csrf)) fail(403, 'Phiên làm việc không hợp lệ. Hãy tải lại trang rồi thử lại.');
    }
    const out = await r.handler(ctx);
    sendJson(res, 200, out === undefined ? { ok: true } : out, setCookie ? { 'Set-Cookie': setCookie } : {});
  } catch (e) {
    if (!(e instanceof HttpError)) console.error(e);
    sendJson(res, e.status || 500, { error: e instanceof HttpError ? e.message : 'Lỗi máy chủ. Hãy thử lại.' }, setCookie ? { 'Set-Cookie': setCookie } : {});
  }
}

function serveStatic(req, res, u) {
  if (req.method !== 'GET' && req.method !== 'HEAD') return sendJson(res, 405, { error: 'Phương thức không được hỗ trợ.' });
  let rel; try { rel = decodeURIComponent(u.pathname); } catch (_) { return sendJson(res, 400, { error: 'Đường dẫn không hợp lệ.' }); }
  if (rel === '/') rel = '/index.html'; else if (rel === '/staff') rel = '/staff.html';
  const file = path.normalize(path.join(PUBLIC_DIR, rel));
  if (!file.startsWith(PUBLIC_DIR + path.sep)) return sendJson(res, 403, { error: 'Không được phép.' });
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', ...SECURITY_HEADERS }); return res.end('Không tìm thấy trang này.'); }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Content-Length': st.size, 'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600', ...SECURITY_HEADERS });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  });
}

loadDb();
const server = http.createServer((req, res) => {
  let u; try { u = new URL(req.url, 'http://localhost'); } catch (_) { res.writeHead(400); return res.end(); }
  if (u.pathname.startsWith('/api/')) handleApi(req, res, u); else serveStatic(req, res, u);
});
server.listen(PORT, HOST, () => {
  console.log('\nGewon Music đang chạy.');
  console.log('  Cửa hàng:   http://localhost:' + PORT + '/');
  console.log('  Nhân viên:  http://localhost:' + PORT + '/staff.html');
  if (!db.accounts.length) console.log('\nLần đầu: mở trang nhân viên để tạo tài khoản Quản lý đầu tiên.');
  console.log('\nNhấn Ctrl+C để dừng.\n');
});
process.on('SIGINT', () => process.exit(0));
