<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gewon Music — Nhạc cụ chính hãng</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  :root{
    --bg:#0b0d12;--bg-2:#10131a;--surface:#161a22;--surface-2:#1e232d;--surface-3:#272d3a;
    --border:rgba(255,255,255,.09);--border-strong:rgba(255,255,255,.16);
    --text:#ffffff;--text-2:#d1d7e0;--muted:#9aa4b2;--muted-2:#6b7688;
    --accent:#f5a524;--accent-2:#ffb84d;--accent-glow:rgba(245,165,36,.35);
    --blue:#3b82f6;--blue-2:#60a5fa;--green:#10b981;--green-2:#34d399;
    --sale:#ef4444;--sale-2:#f87171;
  }
  html{scroll-behavior:smooth}
  body{
    font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;
    color:var(--text);line-height:1.65;overflow-x:hidden;
    -webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 60% at 50% -10%, rgba(245,165,36,.13), transparent 60%),
      radial-gradient(ellipse 70% 50% at 100% 30%, rgba(59,130,246,.08), transparent 55%),
      radial-gradient(ellipse 60% 50% at 0% 80%, rgba(168,85,247,.06), transparent 55%),
      linear-gradient(180deg,#0b0d12 0%,#0e1118 100%);
    background-attachment:fixed;
  }
  body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
    background-image:radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px);
    background-size:32px 32px;
    mask-image:radial-gradient(ellipse at center, #000 40%, transparent 80%);
    -webkit-mask-image:radial-gradient(ellipse at center, #000 40%, transparent 80%);
  }
  main,nav,footer{position:relative;z-index:1}
  a{color:inherit;text-decoration:none}
  button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
  input,textarea{font-family:inherit}

  nav{position:fixed;top:0;left:0;right:0;height:68px;background:rgba(11,13,18,.85);
    backdrop-filter:blur(24px) saturate(1.5);-webkit-backdrop-filter:blur(24px) saturate(1.5);
    border-bottom:1px solid var(--border);z-index:1000;display:flex;align-items:center;
    padding:0 40px;justify-content:space-between;
  }
  .brand{font-family:'Space Grotesk',sans-serif;font-size:17px;font-weight:700;letter-spacing:-.3px;display:flex;align-items:center;gap:10px;cursor:pointer;color:#fff}
  .brand-dot{width:9px;height:9px;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);border-radius:50%;box-shadow:0 0 12px var(--accent-glow)}
  .nav-links{display:flex;gap:4px;align-items:center;flex-wrap:wrap}
  .nav-links a{font-size:13.5px;font-weight:500;color:var(--text-2);padding:9px 14px;border-radius:10px;transition:all .25s;cursor:pointer;white-space:nowrap}
  .nav-links a:hover{color:#fff;background:rgba(255,255,255,.06)}
  .nav-links a.active{color:#fff;background:rgba(245,165,36,.14);box-shadow:inset 0 0 0 1px rgba(245,165,36,.25)}
  .nav-badge{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 5px;border-radius:100px;background:var(--sale);color:#fff;font-size:10.5px;font-weight:700;margin-left:5px;vertical-align:middle;box-shadow:0 0 10px rgba(239,68,68,.5)}
  .nav-phone{font-size:12.5px;font-weight:600;padding:10px 18px;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;border-radius:100px;transition:all .25s;white-space:nowrap;box-shadow:0 4px 16px rgba(245,165,36,.3)}
  .nav-phone:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,165,36,.5)}

  main{padding-top:68px;min-height:100vh}
  .view{display:none}
  .view.active{display:block;animation:fadeUp .5s cubic-bezier(.2,.9,.3,1)}
  @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

  .hero{position:relative;height:calc(100vh - 68px);min-height:640px;display:flex;align-items:flex-end;padding:72px;overflow:hidden}
  .hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.42) saturate(1.05);animation:kenBurns 25s ease-in-out infinite alternate}
  @keyframes kenBurns{0%{transform:scale(1.05)}100%{transform:scale(1.15)}}
  .hero::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,13,18,.35) 0%,rgba(11,13,18,.55) 40%,rgba(11,13,18,.92) 100%),radial-gradient(ellipse 60% 50% at 20% 80%, rgba(245,165,36,.18), transparent 70%)}
  .hero-content{position:relative;z-index:2;max-width:860px}
  .hero-label{font-size:12.5px;font-weight:700;color:var(--accent-2);letter-spacing:3px;text-transform:uppercase;margin-bottom:22px;display:inline-flex;align-items:center;gap:12px;padding:8px 16px;background:rgba(245,165,36,.12);border:1px solid rgba(245,165,36,.28);border-radius:100px;backdrop-filter:blur(12px)}
  .hero-label::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent)}
  .hero h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(42px,7.2vw,92px);font-weight:700;line-height:1.08;letter-spacing:-.02em;margin-bottom:26px;text-shadow:0 6px 40px rgba(0,0,0,.7)}
  .hero h1 .accent{background:linear-gradient(135deg,var(--accent-2) 0%,var(--accent) 50%,#e88a1c 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;display:inline-block}
  .hero-sub{font-size:17px;color:rgba(255,255,255,.9);margin-bottom:38px;max-width:600px;line-height:1.75;text-shadow:0 2px 16px rgba(0,0,0,.6)}
  .hero-cta{display:flex;gap:14px;flex-wrap:wrap}

  .btn{display:inline-flex;align-items:center;gap:10px;padding:15px 28px;font-size:14px;font-weight:600;border-radius:100px;transition:all .3s;white-space:nowrap;cursor:pointer;line-height:1.2}
  .btn-primary{background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;font-weight:700;box-shadow:0 8px 24px rgba(245,165,36,.35)}
  .btn-primary:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(245,165,36,.55)}
  .btn-ghost{background:rgba(255,255,255,.08);color:#fff;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.18)}
  .btn-ghost:hover{background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.32);transform:translateY(-2px)}

  .section{padding:110px 72px;max-width:1600px;margin:0 auto}
  .section-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:56px;gap:32px;flex-wrap:wrap}
  .section-head h2{font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,4.2vw,48px);font-weight:700;letter-spacing:-.02em;line-height:1.15;padding-left:24px;position:relative}
  .section-head h2::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:4px;height:60%;background:linear-gradient(180deg,var(--accent) 0%,var(--accent-2) 100%);border-radius:4px;box-shadow:0 0 16px var(--accent-glow)}
  .section-head .view-all{font-size:13.5px;font-weight:600;color:var(--accent-2);display:flex;align-items:center;gap:8px;cursor:pointer;padding:10px 18px;border-radius:100px;background:rgba(245,165,36,.08);border:1px solid rgba(245,165,36,.2)}
  .section-head .view-all:hover{color:#fff;background:rgba(245,165,36,.18)}

  .intro-grid{display:grid;grid-template-columns:1fr 1.05fr;gap:72px;align-items:center}
  .intro-visual{position:relative;aspect-ratio:4/5;border-radius:28px;overflow:hidden;background:var(--surface);box-shadow:0 30px 80px rgba(0,0,0,.55);border:1px solid var(--border-strong)}
  .intro-visual img{width:100%;height:100%;object-fit:cover;transition:transform 1.2s}
  .intro-visual:hover img{transform:scale(1.04)}
  .intro-visual::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(11,13,18,.85) 100%)}
  .intro-badge{position:absolute;bottom:32px;left:32px;right:32px;z-index:2;background:rgba(11,13,18,.85);backdrop-filter:blur(24px);border:1px solid rgba(245,165,36,.25);border-radius:20px;padding:22px 26px}
  .intro-badge-num{font-family:'Space Grotesk',sans-serif;font-size:42px;font-weight:700;background:linear-gradient(135deg,var(--accent-2) 0%,var(--accent) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1}
  .intro-badge-label{font-size:12px;color:var(--text-2);letter-spacing:1.8px;text-transform:uppercase;font-weight:600;margin-top:8px}
  .intro-label{font-size:12.5px;font-weight:700;color:var(--accent-2);letter-spacing:3px;text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:12px}
  .intro-label::before{content:'';width:28px;height:2px;background:linear-gradient(90deg,var(--accent) 0%,transparent 100%);border-radius:2px}
  .intro-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,3.8vw,48px);font-weight:700;line-height:1.18;margin-bottom:28px}
  .intro-title .accent{background:linear-gradient(135deg,var(--accent-2) 0%,var(--accent) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  .intro-body{font-size:16px;color:var(--text-2);line-height:1.85;margin-bottom:22px}
  .intro-body strong{color:var(--accent-2);font-weight:600}
  .intro-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px;padding-top:40px;border-top:1px solid var(--border)}
  .intro-stat strong{display:block;font-family:'Space Grotesk',sans-serif;font-size:32px;font-weight:700;background:linear-gradient(135deg,#fff 0%,#c9cfd9 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:6px}
  .intro-stat span{font-size:12px;color:var(--muted);letter-spacing:1px;font-weight:600;text-transform:uppercase}

  .cat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}
  .cat-card{position:relative;aspect-ratio:4/5;border-radius:24px;overflow:hidden;cursor:pointer;transition:all .55s;box-shadow:0 20px 50px rgba(0,0,0,.4);border:1px solid var(--border)}
  .cat-card:hover{transform:translateY(-10px);box-shadow:0 30px 70px rgba(0,0,0,.6)}
  .cat-card img{width:100%;height:100%;object-fit:cover;transition:transform 1.2s;filter:brightness(.9)}
  .cat-card:hover img{transform:scale(1.1)}
  .cat-card::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,rgba(0,0,0,.55) 60%,rgba(0,0,0,.95) 100%)}
  .cat-info{position:absolute;bottom:0;left:0;right:0;padding:36px;z-index:2}
  .cat-info h3{font-family:'Space Grotesk',sans-serif;font-size:34px;font-weight:700;margin-bottom:8px}
  .cat-info span{font-size:14px;color:rgba(255,255,255,.9)}
  .cat-arrow{position:absolute;top:24px;right:24px;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.14);backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:center;font-size:18px;transition:all .35s;z-index:2;color:#fff;border:1px solid rgba(255,255,255,.2)}
  .cat-card:hover .cat-arrow{background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;transform:rotate(-45deg)}

  .product-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:28px}
  .product-card{cursor:pointer;transition:transform .45s;background:rgba(22,26,34,.7);border-radius:22px;overflow:hidden;border:1px solid var(--border);padding:14px;backdrop-filter:blur(10px)}
  .product-card:hover{transform:translateY(-8px);border-color:rgba(245,165,36,.4);box-shadow:0 24px 60px rgba(0,0,0,.6)}
  .product-img-wrap{position:relative;aspect-ratio:1;border-radius:16px;overflow:hidden;background:var(--surface-2);margin-bottom:18px}
  .product-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .9s}
  .product-card:hover .product-img-wrap img{transform:scale(1.09)}
  .product-badge{position:absolute;top:14px;left:14px;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;padding:6px 14px;border-radius:100px;font-size:10.5px;font-weight:800;text-transform:uppercase;z-index:2}
  .product-badge.sale{background:linear-gradient(135deg,var(--sale) 0%,#dc2626 100%);color:#fff}
  .product-info h3{font-size:16px;font-weight:600;margin-bottom:8px;color:#fff;line-height:1.4;min-height:44px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .product-info .price{font-family:'Space Grotesk',sans-serif;font-size:16.5px;font-weight:700;color:var(--accent-2)}
  .product-info .price-old{font-size:13px;color:var(--muted-2);text-decoration:line-through;margin-left:10px}

  .page-head{padding:96px 72px 44px;max-width:1600px;margin:0 auto}
  .breadcrumb{font-size:12.5px;color:var(--muted);margin-bottom:24px;display:flex;gap:10px;flex-wrap:wrap}
  .breadcrumb a{cursor:pointer}
  .breadcrumb a:hover{color:var(--accent-2)}
  .page-head h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(38px,6.2vw,76px);font-weight:700;line-height:1.05;margin-bottom:18px}
  .page-head p{font-size:16px;color:var(--text-2);max-width:580px;line-height:1.75}
  .filter-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:36px}
  .filter-chip{padding:10px 22px;border-radius:100px;background:var(--surface);color:var(--text-2);font-size:13px;border:1px solid var(--border);cursor:pointer}
  .filter-chip:hover{color:#fff;background:var(--surface-2)}
  .filter-chip.active{background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;font-weight:700;border-color:transparent}

  .products-area{padding:0 72px 120px;max-width:1600px;margin:0 auto}
  .detail-wrap{max-width:1600px;margin:0 auto;padding:44px 72px 120px}
  .back-btn{display:inline-flex;align-items:center;gap:9px;padding:11px 22px;border-radius:100px;background:var(--surface);font-size:13px;color:var(--text-2);margin-bottom:44px;cursor:pointer;border:1px solid var(--border)}
  .back-btn:hover{color:#fff;background:var(--surface-2)}
  .detail-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:64px;align-items:flex-start}
  .detail-gallery{position:sticky;top:104px}
  .detail-main{aspect-ratio:1;border-radius:24px;overflow:hidden;background:var(--surface);margin-bottom:16px;position:relative;border:1px solid var(--border)}
  .detail-main img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .5s}
  .detail-main img.active{opacity:1}
  .thumb-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
  .thumb{aspect-ratio:1;border-radius:12px;overflow:hidden;cursor:pointer;border:2px solid transparent;background:var(--surface)}
  .thumb img{width:100%;height:100%;object-fit:cover;opacity:.5}
  .thumb:hover img,.thumb.active img{opacity:1}
  .thumb.active{border-color:var(--accent)}
  .brand-tag{font-size:11.5px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--accent-2);margin-bottom:14px}
  .detail-info h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,4.2vw,48px);font-weight:700;line-height:1.1;margin-bottom:22px}
  .detail-price-row{display:flex;align-items:baseline;gap:14px;margin-bottom:32px;flex-wrap:wrap}
  .detail-price{font-family:'Space Grotesk',sans-serif;font-size:38px;font-weight:700;background:linear-gradient(135deg,var(--accent-2) 0%,var(--accent) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  .detail-price-old{font-size:17px;color:var(--muted-2);text-decoration:line-through}
  .detail-short{font-size:16px;color:var(--text-2);line-height:1.85;margin-bottom:36px;padding-bottom:36px;border-bottom:1px solid var(--border)}
  .detail-cta{display:flex;gap:12px;margin-bottom:44px;flex-wrap:wrap}
  .spec-section-title{font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);margin-bottom:18px;display:flex;align-items:center;gap:10px}
  .spec-section-title::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--border) 0%,transparent 100%)}
  .spec-list{display:flex;flex-direction:column;border-top:1px solid var(--border);margin-bottom:44px}
  .spec-row{display:grid;grid-template-columns:1fr 1.5fr;padding:16px 0;border-bottom:1px solid var(--border);font-size:14.5px;gap:16px}
  .spec-row dt{color:var(--muted)}
  .spec-row dd{color:#fff;font-weight:500}
  .feature-list{list-style:none;display:flex;flex-direction:column;gap:14px}
  .feature-list li{font-size:15px;color:var(--text-2);display:flex;gap:14px;align-items:flex-start;line-height:1.7}
  .feature-list li::before{content:'✓';flex-shrink:0;width:20px;height:20px;margin-top:3px;border-radius:50%;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;font-weight:700;font-size:12px;display:flex;align-items:center;justify-content:center}

  .contact-section{padding:110px 72px;max-width:1600px;margin:0 auto}
  .contact-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:52px}
  .contact-card{background:rgba(22,26,34,.75);border-radius:22px;padding:36px;border:1px solid var(--border);backdrop-filter:blur(10px)}
  .contact-card .ic{font-size:32px;margin-bottom:20px;width:64px;height:64px;display:flex;align-items:center;justify-content:center;background:rgba(245,165,36,.1);border-radius:16px;border:1px solid rgba(245,165,36,.2)}
  .contact-card h4{font-size:11.5px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
  .contact-card p{font-family:'Space Grotesk',sans-serif;font-size:19px;font-weight:600;color:#fff;margin-bottom:6px}
  .contact-card small{display:block;font-size:13.5px;color:var(--text-2);margin-top:10px;line-height:1.65}

  .ship-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;max-width:1400px;margin:0 auto}
  .ship-form-box{background:rgba(22,26,34,.75);border-radius:22px;padding:40px;border:1px solid var(--border)}
  .ship-form-box h3{font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:700;margin-bottom:10px}
  .ship-form-box > p{font-size:14px;color:var(--muted);margin-bottom:28px}
  .form-field{display:flex;flex-direction:column;gap:20px}
  .form-field label{font-size:12px;font-weight:600;color:var(--text-2);letter-spacing:1.2px;text-transform:uppercase;display:block;margin-bottom:10px}
  .form-field input,.form-field textarea{width:100%;padding:16px 20px;background:var(--surface-2);border:1px solid var(--border);border-radius:14px;color:#fff;font-size:15px;outline:none}
  .form-field input:focus,.form-field textarea:focus{border-color:var(--accent);background:var(--surface-3)}
  .form-field textarea{resize:vertical;min-height:90px}
  .fee-box{background:var(--surface-2);border-radius:14px;padding:18px;display:none;border:1px solid var(--border)}
  .fee-row{display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px}
  .fee-row:last-child{margin-bottom:0}
  .fee-row span:first-child{color:var(--muted)}
  .fee-row span:last-child{font-weight:600}
  .fee-free{color:var(--green-2) !important}
  .map-box{background:var(--surface);border-radius:22px;padding:10px;min-height:520px;border:1px solid var(--border)}
  .map-box iframe{width:100%;height:100%;min-height:520px;border:0;border-radius:16px;display:block}
  .pending-product{background:linear-gradient(135deg,rgba(245,165,36,.08) 0%,rgba(245,165,36,.02) 100%);border:1px solid rgba(245,165,36,.25);border-radius:14px;padding:16px;margin-bottom:4px}
  .pp-label{font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:var(--accent-2);margin-bottom:12px;display:block}
  .pp-item{display:flex;align-items:center;gap:14px}
  .pp-item img{width:56px;height:56px;border-radius:12px;object-fit:cover}
  .pp-item > div{flex:1;min-width:0}
  .pp-item strong{font-size:14.5px;font-weight:600;color:#fff}
  .pp-item span{font-size:13px;color:var(--accent-2);display:block;margin-top:3px}
  .pp-remove{width:32px;height:32px;border-radius:50%;background:var(--surface-3);color:var(--muted);font-size:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .pp-remove:hover{background:var(--sale);color:#fff}

  .orders-area{padding:0 72px 120px;max-width:1100px;margin:0 auto}
  .orders-empty{text-align:center;padding:90px 24px;background:rgba(22,26,34,.7);border-radius:22px;border:1px solid var(--border)}
  .orders-empty .emoji{font-size:72px;margin-bottom:20px}
  .orders-empty h3{font-family:'Space Grotesk',sans-serif;font-size:26px;font-weight:700;margin-bottom:10px}
  .orders-empty p{font-size:15px;color:var(--text-2);margin-bottom:28px;max-width:440px;margin-left:auto;margin-right:auto}
  .order-card{background:rgba(22,26,34,.75);border-radius:22px;padding:28px;margin-bottom:18px;border:1px solid var(--border)}
  .order-head{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:10px}
  .order-code{font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:700}
  .order-date{font-size:13px;color:var(--muted);margin-top:4px}
  .order-tags{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
  .order-status{padding:8px 16px;border-radius:100px;font-size:12.5px;font-weight:600;background:rgba(16,185,129,.16);color:var(--green-2);display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(16,185,129,.25)}
  .order-sent{padding:6px 12px;border-radius:100px;font-size:11px;font-weight:600;background:rgba(59,130,246,.16);color:var(--blue-2);border:1px solid rgba(59,130,246,.25)}
  .order-timeline{display:grid;grid-template-columns:repeat(4,1fr);margin:28px 0 24px;position:relative}
  .tl-step{display:flex;flex-direction:column;align-items:center;position:relative;text-align:center}
  .tl-step::before{content:'';position:absolute;top:16px;left:calc(-50% + 16px);right:calc(50% + 16px);height:2px;background:var(--border);z-index:0}
  .tl-step:first-child::before{display:none}
  .tl-step.done::before,.tl-step.active::before{background:linear-gradient(90deg,var(--accent) 0%,var(--accent-2) 100%)}
  .tl-dot{width:32px;height:32px;border-radius:50%;background:var(--surface-2);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;position:relative;z-index:1;color:var(--muted)}
  .tl-step.done .tl-dot{background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);border-color:transparent;color:#1a1200}
  .tl-step.active .tl-dot{background:#fff;border-color:#fff;color:#000;box-shadow:0 0 0 6px rgba(255,255,255,.18)}
  .tl-label{font-size:11.5px;color:var(--muted);margin-top:12px;font-weight:500}
  .tl-step.done .tl-label,.tl-step.active .tl-label{color:#fff;font-weight:600}
  .order-product{display:flex;align-items:center;gap:14px;background:var(--surface-2);border-radius:14px;padding:14px;margin-bottom:16px;border:1px solid var(--border)}
  .order-product img{width:56px;height:56px;border-radius:12px;object-fit:cover}
  .order-product > div{flex:1;min-width:0}
  .order-product strong{font-size:14.5px;font-weight:600;color:#fff;display:block}
  .order-product span{font-size:13px;color:var(--accent-2);display:block;margin-top:3px}
  .order-body{border-top:1px solid var(--border);padding-top:16px}
  .order-row{display:flex;justify-content:space-between;padding:8px 0;font-size:14.5px;gap:16px}
  .order-row span{color:var(--muted);flex-shrink:0}
  .order-row strong{color:#fff;text-align:right;font-weight:500}
  .order-actions{display:flex;gap:12px;margin-top:16px;padding-top:16px;border-top:1px solid var(--border)}
  .btn-cancel{padding:11px 20px;border-radius:100px;background:rgba(239,68,68,.12);color:var(--sale-2);font-size:13px;font-weight:600;border:1px solid rgba(239,68,68,.3);cursor:pointer}
  .btn-cancel:hover{background:var(--sale);color:#fff}

  #cancel-modal{position:fixed;inset:0;background:rgba(0,0,0,.8);backdrop-filter:blur(8px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:20px}
  .cancel-modal-box{background:var(--surface);border:1px solid var(--border-strong);border-radius:24px;padding:40px 36px;max-width:460px;width:100%;text-align:center}
  .cancel-modal-icon{width:72px;height:72px;border-radius:50%;background:rgba(239,68,68,.16);color:var(--sale-2);font-size:32px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;border:2px solid rgba(239,68,68,.25)}
  .cancel-modal-box h3{font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:700;margin-bottom:14px}
  .cancel-modal-box p{font-size:15px;color:var(--text-2);margin-bottom:28px}
  .cancel-modal-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
  .cancel-modal-actions .btn{min-width:140px;justify-content:center}

  .test-tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:32px;justify-content:center}
  .test-tab{display:inline-flex;align-items:center;gap:12px;padding:15px 28px;border-radius:100px;background:var(--surface);color:var(--text-2);font-size:15px;font-weight:600;border:1px solid var(--border);cursor:pointer}
  .test-tab:hover{color:#fff;background:var(--surface-2)}
  .test-tab.active{background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;border-color:transparent}
  .test-panel{background:rgba(22,26,34,.75);border:1px solid var(--border);border-radius:24px;padding:40px}
  .test-panel-head{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:36px}
  .test-panel-head h3{font-family:'Space Grotesk',sans-serif;font-size:26px;font-weight:700;margin-bottom:8px}
  .test-panel-head p{font-size:14px;color:var(--text-2)}
  .test-panel-actions{display:flex;gap:10px;flex-wrap:wrap}
  .test-keys{display:flex;gap:8px;justify-content:center;padding:24px 0;flex-wrap:wrap;user-select:none}
  .test-key{position:relative;flex:1;min-width:74px;max-width:124px;aspect-ratio:1/2.8;background:linear-gradient(180deg,#fafafa 0%,#e4e4e4 100%);border-radius:0 0 14px 14px;color:#1a1a1a;font-weight:700;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:18px;cursor:pointer;box-shadow:inset 0 -4px 0 rgba(0,0,0,.12),0 6px 18px rgba(0,0,0,.4)}
  .test-key:active,.test-key.pressed{background:linear-gradient(180deg,#d8d8d8 0%,#b8b8b8 100%);transform:translateY(3px)}
  .test-key span{font-size:16px;font-weight:800}
  .test-key small{font-size:10.5px;font-weight:600;color:#666;margin-top:3px;text-transform:uppercase;letter-spacing:1.2px}
  .guitar-wrap{background:linear-gradient(180deg,rgba(245,165,36,.04) 0%,rgba(255,255,255,.01) 100%);border-radius:20px;padding:28px 20px;border:1px solid var(--border)}
  .guitar-svg{width:100%;max-width:1500px;display:block;margin:0 auto}
  .guitar-string{cursor:pointer}
  .guitar-string line{transition:all .15s;pointer-events:none}
  .guitar-string:hover line{stroke:var(--accent) !important;stroke-width:6 !important}
  .guitar-string.vibrating line{stroke:var(--accent) !important}
  .guitar-string-label{font-family:'Inter',sans-serif;font-size:16px;font-weight:800;fill:#fff;letter-spacing:1px;pointer-events:none}
  .drum-wrap{background:radial-gradient(ellipse at 50% 100%,rgba(245,165,36,.05) 0%,transparent 70%);border-radius:20px;padding:24px 14px}
  .drum-svg{width:100%;max-width:840px;display:block;margin:0 auto}
  .drum-piece{cursor:pointer;transition:filter .15s}
  .drum-piece:hover{filter:brightness(1.3)}
  .drum-piece.pressed{filter:brightness(1.6);transform:scale(.95)}
  .drum-label{font-family:'Inter',sans-serif;font-size:12px;font-weight:700;fill:var(--muted);letter-spacing:1.6px;pointer-events:none;text-transform:uppercase}
  .test-hint{margin-top:28px;padding:16px 22px;background:rgba(245,165,36,.06);border:1px solid rgba(245,165,36,.18);border-radius:14px;font-size:13.5px;color:var(--text-2);text-align:center}
  .test-hint kbd{display:inline-block;min-width:24px;padding:3px 8px;border-radius:6px;background:var(--surface-2);border:1px solid var(--border-strong);font-family:inherit;font-size:11.5px;font-weight:700;color:var(--accent-2);margin:0 3px}

  .success-wrap{max-width:860px;margin:0 auto;padding:44px 72px 120px}
  .success-box{background:rgba(22,26,34,.8);border-radius:28px;padding:72px 48px;text-align:center;border:1px solid var(--border)}
  .success-icon{width:104px;height:104px;border-radius:50%;background:linear-gradient(135deg,var(--green) 0%,var(--green-2) 100%);color:#fff;font-size:52px;display:flex;align-items:center;justify-content:center;margin:0 auto 32px;box-shadow:0 20px 56px rgba(16,185,129,.5)}
  .success-box h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,4.5vw,46px);font-weight:700;margin-bottom:14px}
  .success-box .sub{font-size:16px;color:var(--text-2);max-width:560px;margin:0 auto 40px;line-height:1.8}
  .order-info{background:var(--surface-2);border-radius:18px;padding:10px 28px;max-width:600px;margin:0 auto 36px;text-align:left;border:1px solid var(--border)}
  .order-info .order-row{display:flex;justify-content:space-between;gap:16px;padding:16px 0;border-bottom:1px solid var(--border);font-size:15px}
  .order-info .order-row:last-child{border-bottom:none}
  .order-info .order-row span{color:var(--muted);flex-shrink:0}
  .order-info .order-row strong{color:#fff;text-align:right}
  .success-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
  .success-note{margin-top:32px;font-size:13.5px;color:var(--muted)}
  .system-status{display:inline-flex;align-items:center;gap:10px;padding:10px 18px;border-radius:100px;background:rgba(59,130,246,.14);color:var(--blue-2);font-size:13px;font-weight:600;margin:0 auto 22px;border:1px solid rgba(59,130,246,.25)}

  .warranty-hero{background:linear-gradient(135deg,rgba(245,165,36,.08) 0%,rgba(22,26,34,.9) 100%);border-radius:28px;padding:56px;text-align:center;margin-bottom:28px;border:1px solid rgba(245,165,36,.25)}
  .warranty-hero .shield{font-size:64px;margin-bottom:20px}
  .warranty-hero .big-num{font-family:'Space Grotesk',sans-serif;font-size:clamp(56px,9vw,108px);font-weight:700;background:linear-gradient(135deg,var(--accent-2) 0%,var(--accent) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1}
  .warranty-hero .big-label{font-size:15px;font-weight:600;color:var(--text-2);letter-spacing:4px;text-transform:uppercase;margin-top:12px}
  .warranty-hero p{font-size:16px;color:var(--text-2);max-width:560px;margin:28px auto 0;line-height:1.8}
  .benefit-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:28px}
  .warranty-box{background:rgba(22,26,34,.75);border-radius:22px;padding:36px;margin-bottom:28px;border:1px solid var(--border)}
  .warranty-box h3{font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:700;margin-bottom:24px}
  .policy-list{border-top:1px solid var(--border)}
  .policy-row{display:grid;grid-template-columns:1fr 1.5fr;padding:16px 0;border-bottom:1px solid var(--border);font-size:14.5px;gap:16px}
  .policy-row dt{color:var(--muted)}
  .policy-row dd{color:#fff;font-weight:500}

  footer{padding:72px 72px 48px;border-top:1px solid var(--border);text-align:center;font-size:14px;color:var(--muted);background:rgba(11,13,18,.5)}
  footer .brand-big{font-family:'Space Grotesk',sans-serif;font-size:26px;font-weight:700;color:#fff;margin-bottom:16px;display:inline-flex;align-items:center;gap:10px}
  footer .brand-big::before{content:'';width:10px;height:10px;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);border-radius:50%}
  footer .footer-info{display:flex;justify-content:center;gap:32px;flex-wrap:wrap;margin:28px 0}
  footer a{color:var(--accent-2);font-weight:500}
  footer a:hover{color:#fff}

  #chat-btn{position:fixed;bottom:28px;right:28px;width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;font-size:26px;z-index:1000;box-shadow:0 12px 36px rgba(245,165,36,.5);display:flex;align-items:center;justify-content:center;cursor:pointer}
  #chat-btn:hover{transform:scale(1.1) translateY(-3px)}
  .chat-badge{position:absolute;top:-4px;right:-4px;width:22px;height:22px;background:var(--sale);color:#fff;border-radius:50%;font-size:11.5px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid var(--bg)}
  #chat-window{position:fixed;bottom:108px;right:28px;width:390px;max-width:calc(100vw - 32px);height:580px;max-height:calc(100vh - 150px);background:var(--surface);border:1px solid var(--border-strong);border-radius:24px;overflow:hidden;display:none;flex-direction:column;z-index:1000;box-shadow:0 40px 100px rgba(0,0,0,.85)}
  #chat-window.open{display:flex}
  .chat-head{padding:18px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:14px;background:rgba(11,13,18,.6)}
  .chat-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;display:flex;align-items:center;justify-content:center;font-size:20px;position:relative}
  .chat-avatar::after{content:'';position:absolute;bottom:0;right:0;width:11px;height:11px;border-radius:50%;background:var(--green);border:2px solid var(--surface)}
  .chat-head-info h5{font-size:14px;font-weight:700;color:#fff}
  .chat-head-info p{font-size:12px;color:var(--muted)}
  .chat-close{margin-left:auto;width:32px;height:32px;border-radius:50%;background:var(--surface-2);font-size:15px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff}
  .chat-close:hover{background:var(--surface-3)}
  .chat-body{flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:12px;background:var(--bg-2)}
  .msg{max-width:85%;padding:12px 16px;border-radius:18px;font-size:14px;line-height:1.6;white-space:pre-wrap;word-wrap:break-word}
  .msg.bot{background:var(--surface-2);color:#fff;align-self:flex-start;border-bottom-left-radius:6px;border:1px solid var(--border)}
  .msg.user{background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;align-self:flex-end;border-bottom-right-radius:6px;font-weight:500}
  .msg.system{background:linear-gradient(135deg,rgba(59,130,246,.24) 0%,rgba(59,130,246,.1) 100%);color:#fff;align-self:stretch;max-width:100%;border-left:3px solid var(--blue);border-radius:12px;font-size:13.5px;padding:14px 16px}
  .msg.typing{background:transparent;color:var(--muted);font-style:italic;font-size:13px;padding-left:4px}
  .chat-chips{padding:0 20px 14px;display:flex;gap:8px;flex-wrap:wrap;background:var(--bg-2);max-height:108px;overflow-y:auto}
  .chat-chips::-webkit-scrollbar{width:5px}
  .chat-chips::-webkit-scrollbar-thumb{background:var(--surface-3);border-radius:5px}
  .chip{padding:8px 14px;border-radius:100px;background:var(--surface-2);font-size:12.5px;font-weight:500;color:var(--text-2);cursor:pointer;border:1px solid var(--border);white-space:nowrap}
  .chip:hover{color:#fff;background:var(--surface-3)}
  .chat-foot{padding:14px;border-top:1px solid var(--border);display:flex;gap:10px;background:rgba(11,13,18,.6)}
  #chat-in{flex:1;background:var(--surface-2);border:1px solid var(--border);border-radius:100px;padding:13px 20px;font-size:14px;color:#fff;outline:none;font-family:inherit}
  #chat-in::placeholder{color:var(--muted-2)}
  #chat-in:focus{border-color:var(--accent)}
  #chat-send{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%);color:#1a1200;display:flex;align-items:center;justify-content:center;font-size:17px;cursor:pointer;box-shadow:0 4px 14px rgba(245,165,36,.35)}
  #chat-send:hover{transform:scale(1.08)}

  @media (max-width:900px){
    nav{padding:0 20px;height:auto;min-height:68px;flex-wrap:wrap;gap:10px;padding-top:12px;padding-bottom:12px}
    main{padding-top:124px}
    .nav-phone{display:none}
    .hero{padding:36px;min-height:560px}
    .section{padding:70px 24px}
    .page-head{padding:56px 24px 36px}
    .products-area,.orders-area{padding:0 24px 72px}
    .detail-wrap,.success-wrap{padding:28px 24px 72px}
    .detail-grid{grid-template-columns:1fr;gap:40px}
    .detail-gallery{position:static}
    .contact-section{padding:70px 24px}
    .ship-grid{grid-template-columns:1fr}
    footer{padding:48px 24px 32px}
    .intro-grid{grid-template-columns:1fr;gap:40px}
    .intro-visual{aspect-ratio:16/11}
  }
  @media (max-width:640px){
    .nav-links a{padding:6px 8px;font-size:11.5px}
    .brand{font-size:15px}
    .hero{padding:28px 22px;min-height:520px}
    .hero-sub{font-size:15px}
    .btn{padding:13px 22px;font-size:13px}
    .product-grid{grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:18px}
    .product-info h3{font-size:14px;min-height:40px}
    .product-info .price{font-size:15px}
    #chat-window{right:12px;left:12px;width:auto;bottom:96px;height:72vh}
    .spec-row{grid-template-columns:1fr;gap:4px}
    .policy-row{grid-template-columns:1fr;gap:4px}
    .warranty-box{padding:24px}
    .warranty-hero{padding:40px 24px}
    .ship-form-box{padding:26px}
    .success-box{padding:48px 24px}
    .order-info .order-row{flex-direction:column;gap:4px}
    .order-info .order-row strong{text-align:left}
    .order-card{padding:20px}
    .tl-label{font-size:10.5px}
    .test-panel{padding:24px}
    .test-key{min-width:48px;aspect-ratio:1/3}
    .intro-stats{grid-template-columns:1fr}
  }
</style>
</head>
<body>

<nav>
  <div class="brand" onclick="go('home')">
    <span class="brand-dot"></span>
    <span>Gewon Music</span>
  </div>
  <div class="nav-links">
    <a data-nav="home" onclick="go('home')">Trang chủ</a>
    <a data-nav="piano" onclick="go('piano')">Piano</a>
    <a data-nav="guitar" onclick="go('guitar')">Guitar</a>
    <a data-nav="drums" onclick="go('drums')">Trống</a>
    <a data-nav="test" onclick="go('test')">🎹 Test nhạc cụ</a>
    <a data-nav="orders" onclick="go('orders')">Đơn hàng<span class="nav-badge" id="navOrderBadge" style="display:none">0</span></a>
    <a data-nav="contact" onclick="go('contact')">Liên hệ</a>
  </div>
  <a class="nav-phone" href="tel:0385730766">📞 0385 730 766</a>
</nav>

<main>
  <div class="view active" id="view-home">
    <section class="hero">
      <img class="hero-bg" src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1920&q=85&auto=format&fit=crop" alt="" onerror="imgFail(this)">
      <div class="hero-content">
        <div class="hero-label">Nhạc cụ chính hãng</div>
        <h1>Chơi nhạc<br><span class="accent">Sống trọn vẹn</span></h1>
        <p class="hero-sub">Piano · Guitar · Trống chính hãng. Trải nghiệm âm thanh thật, cảm nhận từng phím đàn — cho người mới bắt đầu đến nghệ sĩ chuyên nghiệp.</p>
        <div class="hero-cta">
          <button class="btn btn-primary" onclick="go('piano')">Khám phá ngay →</button>
          <button class="btn btn-ghost" onclick="go('test')">🎹 Test nhạc cụ</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="intro-grid">
        <div class="intro-visual">
          <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=900&q=80&auto=format&fit=crop" alt="Gewon Music" onerror="imgFail(this)">
          <div class="intro-badge">
            <div class="intro-badge-num">500+</div>
            <div class="intro-badge-label">Khách hàng tin dùng</div>
          </div>
        </div>
        <div>
          <div class="intro-label">Về Gewon Music</div>
          <h2 class="intro-title">Âm nhạc bắt đầu từ<br><span class="accent">những điều chân thật</span></h2>
          <p class="intro-body">Gewon Music là đơn vị phân phối nhạc cụ chính hãng — mang đến cho người Việt những cây đàn, phím đàn và dàn trống chất lượng quốc tế với mức giá hợp lý. Chúng tôi tin rằng <strong>ai cũng có thể chơi nhạc</strong>.</p>
          <p class="intro-body">Từ những nốt đầu tiên trên cây đàn đầu tiên, đến những buổi biểu diễn lớn — Gewon Music đồng hành cùng bạn trên từng hành trình âm nhạc. Với 20+ thương hiệu chính hãng, dịch vụ tận tâm và bảo hành lên đến <strong>3 năm</strong>, chúng tôi cam kết mang đến trải nghiệm mua sắm nhạc cụ tốt nhất.</p>
          <div class="intro-stats">
            <div class="intro-stat"><strong>20+</strong><span>Thương hiệu</span></div>
            <div class="intro-stat"><strong>3 năm</strong><span>Bảo hành</span></div>
            <div class="intro-stat"><strong>24/7</strong><span>Hỗ trợ</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Bộ sưu tập</h2><a class="view-all" onclick="go('piano')">Xem tất cả →</a></div>
      <div class="cat-grid">
        <div class="cat-card" onclick="go('piano')">
          <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&q=80&auto=format&fit=crop" alt="Piano" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info"><h3>Piano</h3><span>Yamaha · Casio · Victor · Master</span></div>
        </div>
        <div class="cat-card" onclick="go('guitar')">
          <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=900&q=80&auto=format&fit=crop" alt="Guitar" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info"><h3>Guitar</h3><span>Acoustic · Classic · Điện</span></div>
        </div>
        <div class="cat-card" onclick="go('drums')">
          <img src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=900&q=80&auto=format&fit=crop" alt="Trống" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info"><h3>Trống</h3><span>Tama · Pearl · Roland · Yamaha</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Sản phẩm nổi bật</h2><a class="view-all" onclick="go('piano')">Xem tất cả →</a></div>
      <div class="product-grid" id="featured-grid"></div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Dịch vụ</h2></div>
      <div class="cat-grid">
        <div class="cat-card" onclick="go('test')">
          <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=900&q=80&auto=format&fit=crop" alt="" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info"><h3 style="font-size:26px">🎹 Test nhạc cụ</h3><span>Chơi thử Piano, Guitar, Trống</span></div>
        </div>
        <div class="cat-card" onclick="go('orders')">
          <img src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=900&q=80&auto=format&fit=crop" alt="" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info"><h3 style="font-size:26px">📊 Đơn hàng</h3><span>Theo dõi đơn đang giao</span></div>
        </div>
        <div class="cat-card" onclick="go('warranty')">
          <img src="https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?w=900&q=80&auto=format&fit=crop" alt="" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info"><h3 style="font-size:26px">🛡️ Bảo hành 3 năm</h3><span>Minh bạch, rõ ràng</span></div>
        </div>
        <div class="cat-card" onclick="toggleChat()">
          <img src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=900&q=80&auto=format&fit=crop" alt="" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info"><h3 style="font-size:26px">💬 Tư vấn AI</h3><span>ChanhNgot🍋 24/7</span></div>
        </div>
      </div>
    </section>
  </div>

  <div class="view" id="view-piano">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span>/</span><span>Piano</span></div>
      <h1>Piano</h1>
      <p>Yamaha · Casio · Victor · Master — Piano điện & piano cơ chính hãng.</p>
      <div class="filter-row">
        <button class="filter-chip active" onclick="filter('piano','all',this)">Tất cả</button>
        <button class="filter-chip" onclick="filter('piano','yamaha',this)">Yamaha</button>
        <button class="filter-chip" onclick="filter('piano','casio',this)">Casio</button>
        <button class="filter-chip" onclick="filter('piano','victor',this)">Victor</button>
        <button class="filter-chip" onclick="filter('piano','master',this)">Master</button>
      </div>
    </div>
    <div class="products-area"><div class="product-grid" id="grid-piano"></div></div>
  </div>

  <div class="view" id="view-guitar">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span>/</span><span>Guitar</span></div>
      <h1>Guitar</h1>
      <p>Acoustic · Classic · Điện — Từ nhập môn đến cao cấp.</p>
      <div class="filter-row">
        <button class="filter-chip active" onclick="filter('guitar','all',this)">Tất cả</button>
        <button class="filter-chip" onclick="filter('guitar','yamaha',this)">Yamaha</button>
        <button class="filter-chip" onclick="filter('guitar','fender',this)">Fender</button>
        <button class="filter-chip" onclick="filter('guitar','gibson',this)">Gibson</button>
        <button class="filter-chip" onclick="filter('guitar','ibanez',this)">Ibanez</button>
        <button class="filter-chip" onclick="filter('guitar','martin',this)">Martin</button>
        <button class="filter-chip" onclick="filter('guitar','taylor',this)">Taylor</button>
      </div>
    </div>
    <div class="products-area"><div class="product-grid" id="grid-guitar"></div></div>
  </div>

  <div class="view" id="view-drums">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span>/</span><span>Trống</span></div>
      <h1>Trống</h1>
      <p>Acoustic · Điện — Tama, Pearl, Roland, Yamaha, Alesis.</p>
      <div class="filter-row">
        <button class="filter-chip active" onclick="filter('drums','all',this)">Tất cả</button>
        <button class="filter-chip" onclick="filter('drums','tama',this)">Tama</button>
        <button class="filter-chip" onclick="filter('drums','pearl',this)">Pearl</button>
        <button class="filter-chip" onclick="filter('drums','roland',this)">Roland</button>
        <button class="filter-chip" onclick="filter('drums','yamaha',this)">Yamaha</button>
        <button class="filter-chip" onclick="filter('drums','alesis',this)">Alesis</button>
      </div>
    </div>
    <div class="products-area"><div class="product-grid" id="grid-drums"></div></div>
  </div>

  <div class="view" id="view-detail">
    <div class="detail-wrap">
      <button class="back-btn" onclick="goBack()">← Quay lại</button>
      <div class="detail-grid">
        <div class="detail-gallery">
          <div class="detail-main" id="gallery-main"></div>
          <div class="thumb-row" id="gallery-thumbs"></div>
        </div>
        <div class="detail-info">
          <div class="brand-tag" id="d-brand"></div>
          <h1 id="d-name"></h1>
          <div class="detail-price-row">
            <div class="detail-price" id="d-price"></div>
            <div class="detail-price-old" id="d-old"></div>
          </div>
          <p class="detail-short" id="d-short"></p>
          <div class="detail-cta">
            <button class="btn btn-primary" onclick="orderProduct()">🛒 Đặt mua</button>
            <button class="btn btn-ghost" onclick="askBotDetail()">💬 Tư vấn</button>
            <a class="btn btn-ghost" href="tel:0385730766">📞 Gọi</a>
          </div>
          <div class="spec-section-title">Thông số</div>
          <dl class="spec-list" id="d-specs"></dl>
          <div class="spec-section-title">Đặc điểm</div>
          <ul class="feature-list" id="d-features"></ul>
        </div>
      </div>
    </div>
  </div>

  <div class="view" id="view-shipping">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span>/</span><span>Đặt hàng</span></div>
      <h1>Đặt hàng</h1>
      <p>Điền thông tin giao hàng để hoàn tất đơn hàng.</p>
    </div>
    <div class="contact-section" style="padding-top:20px">
      <div class="ship-grid">
        <div class="ship-form-box">
          <h3>📍 Địa chỉ giao hàng</h3>
          <p>Nhập địa chỉ hoặc kéo bản đồ để chọn vị trí chính xác</p>
          <div class="form-field">
            <div class="pending-product" id="pending-product" style="display:none">
              <span class="pp-label">Sản phẩm đặt mua</span>
              <div class="pp-item">
                <img id="pp-img" src="" alt="" onerror="imgFail(this)">
                <div><strong id="pp-name"></strong><span id="pp-price"></span></div>
                <button class="pp-remove" onclick="clearPendingProduct()">✕</button>
              </div>
            </div>
            <div><label>Họ tên</label><input id="ship-name" type="text" placeholder="Nguyễn Văn A"></div>
            <div><label>Số điện thoại</label><input id="ship-phone" type="tel" placeholder="0385 730 766"></div>
            <div><label>Địa chỉ chi tiết</label><input id="ship-address" type="text" placeholder="Số nhà, đường, phường, quận..." oninput="updateMapFromAddress(this.value)"></div>
            <div><label>Ghi chú</label><textarea id="ship-note" rows="3" placeholder="VD: Giao giờ hành chính..."></textarea></div>
            <div class="fee-box" id="ship-fee-box">
              <div class="fee-row"><span>Khoảng cách</span><span id="ship-distance">—</span></div>
              <div class="fee-row"><span>Phí giao hàng</span><span id="ship-fee" class="fee-free">Miễn phí</span></div>
            </div>
            <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="confirmShipping()">✅ Xác nhận đặt giao hàng</button>
            <a class="btn btn-ghost" style="width:100%;justify-content:center" href="https://www.google.com/maps/search/?api=1&query=TP.HCM" target="_blank">🗺️ Mở Google Maps Showroom</a>
          </div>
        </div>
        <div class="map-box">
          <iframe id="ship-map-frame" src="https://maps.google.com/maps?q=TP.HCM&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>

  <div class="view" id="view-orders">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span>/</span><span>Trạng thái đơn hàng</span></div>
      <h1>Trạng thái đơn hàng</h1>
      <p>Theo dõi đơn hàng đang trên đường giao đến bạn.</p>
    </div>
    <div class="orders-area"><div id="orders-list"></div></div>
  </div>

  <div class="view" id="view-test">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span>/</span><span>Test nhạc cụ</span></div>
      <h1>Test nhạc cụ</h1>
      <p>Chọn nhạc cụ và bấm phím/dây/pad để nghe thử âm thanh.</p>
    </div>
    <div class="contact-section" style="padding-top:20px">
      <div style="max-width:1400px;margin:0 auto">
        <div class="test-tabs">
          <button class="test-tab active" data-inst="piano" onclick="switchInstrument('piano', this)"><span class="ic">🎹</span><span>Piano</span></button>
          <button class="test-tab" data-inst="guitar" onclick="switchInstrument('guitar', this)"><span class="ic">🎸</span><span>Guitar</span></button>
          <button class="test-tab" data-inst="drums" onclick="switchInstrument('drums', this)"><span class="ic">🥁</span><span>Trống</span></button>
        </div>

        <div class="test-panel" id="test-panel-piano">
          <div class="test-panel-head">
            <div><h3>🎹 Piano</h3><p>Bấm phím để nghe âm thanh piano</p></div>
            <div class="test-panel-actions">
              <button class="btn btn-primary" onclick="testPlayDemo()">▶ Demo</button>
              <button class="btn btn-ghost" onclick="testPlayScale()">🎼 Scale</button>
            </div>
          </div>
          <div class="test-keys" id="test-keys"></div>
          <div class="test-hint">💡 Dùng <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>4</kbd> <kbd>5</kbd> <kbd>6</kbd> <kbd>7</kbd> <kbd>8</kbd> để chơi.</div>
        </div>

        <div class="test-panel" id="test-panel-guitar" style="display:none">
          <div class="test-panel-head">
            <div><h3>🎸 Guitar Acoustic</h3><p>Bấm vào từng dây đàn để nghe (Standard tuning E-A-D-G-B-E)</p></div>
            <div class="test-panel-actions"><button class="btn btn-primary" onclick="testGuitarDemo()">▶ Strum hợp âm</button></div>
          </div>
          <div class="guitar-wrap">
            <svg viewBox="0 0 1200 480" class="guitar-svg" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="fbGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2515"/><stop offset="0.5" stop-color="#2a1a0a"/><stop offset="1" stop-color="#3a2515"/></linearGradient></defs>
              <rect x="43" y="20" width="1140" height="460" fill="url(#fbGrad)" stroke="#1a0a00" stroke-width="2" rx="6"/>
              <circle cx="520" cy="250" r="10" fill="#fff" opacity="0.22"/><circle cx="805" cy="250" r="10" fill="#fff" opacity="0.22"/><circle cx="1037" cy="250" r="10" fill="#fff" opacity="0.22"/>
              <line x1="250" y1="20" x2="250" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/><line x1="440" y1="20" x2="440" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/><line x1="600" y1="20" x2="600" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/><line x1="740" y1="20" x2="740" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/><line x1="870" y1="20" x2="870" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/><line x1="985" y1="20" x2="985" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/><line x1="1090" y1="20" x2="1090" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/>
              <rect x="27" y="18" width="18" height="464" rx="3" fill="#f5ead5" stroke="#8b7355" stroke-width="1.5"/>
              <g class="guitar-string" onclick="playGuitarString(0)"><rect x="20" y="35" width="1180" height="70" fill="transparent"/><line x1="27" y1="70" x2="1183" y2="70" stroke="#ffffff" stroke-width="2"/></g>
              <g class="guitar-string" onclick="playGuitarString(1)"><rect x="20" y="110" width="1180" height="70" fill="transparent"/><line x1="27" y1="145" x2="1183" y2="145" stroke="#f0f0f0" stroke-width="2.5"/></g>
              <g class="guitar-string" onclick="playGuitarString(2)"><rect x="20" y="185" width="1180" height="70" fill="transparent"/><line x1="27" y1="220" x2="1183" y2="220" stroke="#ffe082" stroke-width="3"/></g>
              <g class="guitar-string" onclick="playGuitarString(3)"><rect x="20" y="260" width="1180" height="70" fill="transparent"/><line x1="27" y1="295" x2="1183" y2="295" stroke="#ffc107" stroke-width="3.6"/></g>
              <g class="guitar-string" onclick="playGuitarString(4)"><rect x="20" y="335" width="1180" height="70" fill="transparent"/><line x1="27" y1="370" x2="1183" y2="370" stroke="#ffb300" stroke-width="4.4"/></g>
              <g class="guitar-string" onclick="playGuitarString(5)"><rect x="20" y="410" width="1180" height="70" fill="transparent"/><line x1="27" y1="445" x2="1183" y2="445" stroke="#ff9800" stroke-width="5.2"/></g>
              <text class="guitar-string-label" x="1160" y="76" text-anchor="end">E4</text><text class="guitar-string-label" x="1160" y="151" text-anchor="end">B3</text><text class="guitar-string-label" x="1160" y="226" text-anchor="end">G3</text><text class="guitar-string-label" x="1160" y="301" text-anchor="end">D3</text><text class="guitar-string-label" x="1160" y="376" text-anchor="end">A2</text><text class="guitar-string-label" x="1160" y="451" text-anchor="end">E2</text>
            </svg>
          </div>
          <div class="test-hint">💡 Bấm dây hoặc dùng phím <kbd>1</kbd>–<kbd>6</kbd>.</div>
        </div>

        <div class="test-panel" id="test-panel-drums" style="display:none">
          <div class="test-panel-head">
            <div><h3>🥁 Bộ trống Acoustic</h3><p>Bấm vào từng bộ phận để nghe âm thanh</p></div>
            <div class="test-panel-actions"><button class="btn btn-primary" onclick="testDrumDemo()">▶ Chơi beat mẫu</button></div>
          </div>
          <div class="drum-wrap">
            <svg viewBox="0 0 800 620" class="drum-svg" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <line x1="180" y1="130" x2="180" y2="420" stroke="#555" stroke-width="2" opacity="0.5"/>
              <line x1="640" y1="180" x2="640" y2="440" stroke="#555" stroke-width="2" opacity="0.5"/>
              <line x1="130" y1="300" x2="130" y2="470" stroke="#555" stroke-width="2" opacity="0.5"/>
              <g class="drum-piece" data-drum="crash" onclick="hitDrum('crash', this)"><ellipse cx="180" cy="130" rx="88" ry="28" fill="#e8c84a" stroke="#8b6914" stroke-width="3"/><circle cx="180" cy="130" r="8" fill="#8b6914"/><text class="drum-label" x="180" y="195" text-anchor="middle">Crash</text></g>
              <g class="drum-piece" data-drum="ride" onclick="hitDrum('ride', this)"><ellipse cx="640" cy="180" rx="102" ry="32" fill="#e8c84a" stroke="#8b6914" stroke-width="3"/><circle cx="640" cy="180" r="9" fill="#8b6914"/><text class="drum-label" x="640" y="255" text-anchor="middle">Ride</text></g>
              <g class="drum-piece" data-drum="hihat" onclick="hitDrum('hihat', this)"><ellipse cx="125" cy="295" rx="85" ry="28" fill="#e8c84a" stroke="#8b6914" stroke-width="3"/><ellipse cx="125" cy="308" rx="85" ry="26" fill="#c9a828" stroke="#7a5a10" stroke-width="3"/><circle cx="125" cy="295" r="7" fill="#8b6914"/><text class="drum-label" x="125" y="360" text-anchor="middle">Hi-hat</text></g>
              <g class="drum-piece" data-drum="tom" onclick="hitDrum('tom', this)"><circle cx="330" cy="255" r="70" fill="#d4c4b0" stroke="#5a4830" stroke-width="5"/><circle cx="330" cy="255" r="58" fill="#f5efe8" stroke="#8b7355" stroke-width="2"/><text class="drum-label" x="330" y="345" text-anchor="middle">Tom</text></g>
              <g class="drum-piece" data-drum="kick" onclick="hitDrum('kick', this)"><circle cx="400" cy="460" r="115" fill="#1a1a1a" stroke="#3a3a3a" stroke-width="6"/><circle cx="400" cy="460" r="88" fill="#0f0f0f" stroke="#2a2a2a" stroke-width="2"/><circle cx="400" cy="460" r="30" fill="#000" stroke="#333" stroke-width="2"/><text class="drum-label" x="400" y="600" text-anchor="middle" fill="#ccc">Kick</text></g>
              <g class="drum-piece" data-drum="snare" onclick="hitDrum('snare', this)"><circle cx="215" cy="455" r="76" fill="#d4c4b0" stroke="#5a4830" stroke-width="5"/><circle cx="215" cy="455" r="63" fill="#fafaf5" stroke="#8b7355" stroke-width="2"/><text class="drum-label" x="215" y="555" text-anchor="middle">Snare</text></g>
              <g class="drum-piece" data-drum="tom" onclick="hitDrum('tom', this)"><circle cx="610" cy="440" r="85" fill="#d4c4b0" stroke="#5a4830" stroke-width="5"/><circle cx="610" cy="440" r="71" fill="#f5efe8" stroke="#8b7355" stroke-width="2"/><text class="drum-label" x="610" y="545" text-anchor="middle">Floor Tom</text></g>
            </svg>
          </div>
          <div class="test-hint">💡 Dùng <kbd>Q</kbd> <kbd>W</kbd> <kbd>E</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> để chơi.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="view" id="view-success">
    <div class="success-wrap">
      <div class="success-box">
        <div class="success-icon">✓</div>
        <h1>Đặt hàng thành công!</h1>
        <div class="system-status">📡 Đã gửi thông tin đến hệ thống</div>
        <p class="sub">Đơn hàng đang trên đường giao đến bạn. Chúng tôi sẽ liên hệ xác nhận trong <strong style="color:var(--accent-2)">30 phút</strong>.</p>
        <div class="order-info">
          <div class="order-row"><span>👤 Họ tên</span><strong id="s-name">—</strong></div>
          <div class="order-row"><span>📞 Số điện thoại</span><strong id="s-phone">—</strong></div>
          <div class="order-row"><span>📍 Địa chỉ</span><strong id="s-address">—</strong></div>
          <div class="order-row"><span>📝 Ghi chú</span><strong id="s-note">—</strong></div>
          <div class="order-row"><span>📏 Khoảng cách</span><strong id="s-distance">—</strong></div>
          <div class="order-row"><span>💰 Phí giao hàng</span><strong id="s-fee" class="fee-free">Miễn phí</strong></div>
        </div>
        <div class="success-actions">
          <button class="btn btn-primary" onclick="go('orders')">📊 Xem trạng thái đơn hàng</button>
          <button class="btn btn-ghost" onclick="go('home')">← Về trang chủ</button>
        </div>
        <p class="success-note">Mã đơn hàng: <strong style="color:var(--accent-2)" id="s-code">#GW-000000</strong></p>
      </div>
    </div>
  </div>

  <div class="view" id="view-warranty">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span>/</span><span>Bảo hành 3 năm</span></div>
      <h1>Bảo hành 3 năm</h1>
      <p>Chính sách bảo hành minh bạch, đảm bảo quyền lợi khách hàng.</p>
    </div>
    <div class="contact-section" style="padding-top:20px">
      <div style="max-width:1000px;margin:0 auto">
        <div class="warranty-hero">
          <div class="shield">🛡️</div>
          <div class="big-num">3 NĂM</div>
          <div class="big-label">Bảo hành chính hãng</div>
          <p>Tất cả Piano, Guitar, Trống mua tại Gewon Music đều được bảo hành <strong>3 năm</strong>.</p>
        </div>
        <div class="benefit-grid">
          <div class="contact-card"><div class="ic">🔧</div><h4>Miễn phí sửa chữa</h4><p>3 năm đầu</p></div>
          <div class="contact-card"><div class="ic">🎼</div><h4>Lên dây piano</h4><p>2 lần/năm</p></div>
          <div class="contact-card"><div class="ic">🚚</div><h4>Vận chuyển</h4><p>2 chiều miễn phí</p></div>
          <div class="contact-card"><div class="ic">⚡</div><h4>Xử lý nhanh</h4><p>Trong 48h</p></div>
        </div>
        <div class="warranty-box">
          <h3>📋 Chi tiết chính sách</h3>
          <div class="policy-list">
            <div class="policy-row"><dt>Thời hạn</dt><dd>36 tháng (3 năm) từ ngày mua</dd></div>
            <div class="policy-row"><dt>Phạm vi</dt><dd>Piano, Guitar, Trống mua tại Gewon Music</dd></div>
            <div class="policy-row"><dt>Lỗi được BH</dt><dd>Lỗi kỹ thuật từ nhà sản xuất</dd></div>
            <div class="policy-row"><dt>Không BH</dt><dd>Va đập, ngập nước, tự tháo lắp</dd></div>
            <div class="policy-row"><dt>Xử lý</dt><dd>Tối đa 48 giờ</dd></div>
          </div>
        </div>
        <div style="text-align:center;display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
          <button class="btn btn-primary" onclick="askBot('Tôi muốn hỏi về chính sách bảo hành 3 năm')">💬 Hỏi về bảo hành</button>
          <a class="btn btn-ghost" href="tel:0385730766">📞 Gọi 0385 730 766</a>
        </div>
      </div>
    </div>
  </div>

  <div class="view" id="view-contact">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span>/</span><span>Liên hệ</span></div>
      <h1>Liên hệ</h1>
      <p>Ghé showroom để trải nghiệm trực tiếp, hoặc liên hệ qua các kênh dưới đây.</p>
    </div>
    <div class="contact-section" style="padding-top:20px">
      <div class="contact-grid">
        <div class="contact-card"><div class="ic">📍</div><h4>Showroom</h4><p>TP.HCM</p><small>Thử đàn trực tiếp</small></div>
        <div class="contact-card"><div class="ic">📞</div><h4>Hotline / Zalo</h4><p><a href="tel:0385730766">0385 730 766</a></p><small>Hỗ trợ 24/7</small></div>
        <div class="contact-card"><div class="ic">🍋</div><h4>Chat AI</h4><p>ChanhNgot🍋</p><small>Tư vấn 24/7</small></div>
        <div class="contact-card"><div class="ic">🕐</div><h4>Giờ mở cửa</h4><p>8:00 — 21:00</p><small>Thứ 2 – Chủ nhật</small></div>
      </div>
    </div>
  </div>
</main>

<footer>
  <div class="brand-big">Gewon Music</div>
  <div class="footer-info">
    <span>📞 <a href="tel:0385730766">0385 730 766</a></span>
    <span>💬 Zalo/SMS: 0385 730 766</span>
  </div>
  <div style="font-size:12px;opacity:.6;margin-top:24px">Website demo — Dữ liệu giả lập phục vụ mục đích xây dựng & kiểm thử.</div>
</footer>

<button id="chat-btn" onclick="toggleChat()">🍋<span class="chat-badge" id="chatBadge">1</span></button>

<div id="chat-window">
  <div class="chat-head">
    <div class="chat-avatar">🍋</div>
    <div class="chat-head-info">
      <h5>ChanhNgot🍋</h5>
      <p>Trực tuyến · Tư vấn 24/7</p>
    </div>
    <button class="chat-close" onclick="toggleChat()">✕</button>
  </div>
  <div class="chat-body" id="chat-body"></div>
  <div class="chat-chips">
    <button class="chip" onclick="askBot('Chào bạn')">👋 Chào</button>
    <button class="chip" onclick="askBot('Xem piano')">🎹 Piano</button>
    <button class="chip" onclick="askBot('Xem guitar')">🎸 Guitar</button>
    <button class="chip" onclick="askBot('Xem trống')">🥁 Trống</button>
    <button class="chip" onclick="askBot('Trạng thái đơn hàng')">📊 Đơn hàng</button>
    <button class="chip" onclick="askBot('căn bậc 3 của 27')">√ Căn bậc 3</button>
    <button class="chip" onclick="askBot('20% của 500')">💯 Phần trăm</button>
    <button class="chip" onclick="askBot('x^2-5x+6=0')">🧮 Giải PT</button>
    <button class="chip" onclick="askBot('thời tiết ở Hà Nội')">🌤️ Thời tiết</button>
    <button class="chip" onclick="askBot('tỷ giá hôm nay')">💱 Tỷ giá</button>
    <button class="chip" onclick="askBot('100 usd sang vnd')">💵 Đổi tiền</button>
    <button class="chip" onclick="askBot('tìm hiểu về Yamaha')">📖 Wikipedia</button>
    <button class="chip" onclick="askBot('tìm đàn ukulele')">🔍 Tìm ngoài shop</button>
    <button class="chip" onclick="askBot('Kể chuyện cười đi')">😂 Đùa</button>
    <button class="chip" onclick="askBot('Tâm sự chút đi')">💛 Tâm sự</button>
    <button class="chip" onclick="askBot('Bảo hành 3 năm')">🛡️ Bảo hành</button>
  </div>
  <div class="chat-foot">
    <input id="chat-in" placeholder="Nhập tin nhắn..." onkeydown="if(event.key==='Enter')sendMsg()">
    <button id="chat-send" onclick="sendMsg()">➤</button>
  </div>
</div>

<script>
/* ============================================================
   IMAGE FALLBACK
   ============================================================ */
window.imgFail = function(img){
  if(img.dataset.fb) return;
  img.dataset.fb = '1';
  const label = (img.alt || 'Gewon Music').replace(/&/g,'&amp;').replace(/</g,'&lt;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c2028"/><stop offset="1" stop-color="#0b0d12"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><text x="300" y="290" font-family="Inter,sans-serif" font-size="90" text-anchor="middle">🎵</text><text x="300" y="370" font-family="Inter,sans-serif" font-size="26" font-weight="700" fill="#f5a524" text-anchor="middle">Gewon Music</text><text x="300" y="405" font-family="Inter,sans-serif" font-size="14" fill="#9aa4b2" text-anchor="middle">${label}</text></svg>`;
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

/* ============================================================
   PRODUCT IMAGES
   ============================================================ */
const IMG = {
  pianoDigital: [
    'https://images.unsplash.com/photo-1552422535-c45813c61732?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571974599782-87624638275e?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?w=1200&q=85&auto=format&fit=crop'
  ],
  pianoUpright: [
    'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&q=85&auto=format&fit=crop'
  ],
  pianoGrand: [
    'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&q=85&auto=format&fit=crop'
  ],
  guitarAcoustic: [
    'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=1200&q=85&auto=format&fit=crop'
  ],
  guitarClassic: [
    'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=85&auto=format&fit=crop'
  ],
  guitarElectric: [
    'https://images.unsplash.com/photo-1550985616-10810253b84d?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=1200&q=85&auto=format&fit=crop'
  ],
  drumsAcoustic: [
    'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=85&auto=format&fit=crop'
  ],
  drumsElectric: [
    'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1200&q=85&auto=format&fit=crop'
  ]
};

function imgs(pool, count){
  count = count || 4;
  const out = [];
  for(let i=0;i<count;i++) out.push(pool[i % pool.length]);
  return out;
}

const DB = {
  'yamaha-p45':{name:'Yamaha P-45',brand:'Yamaha',brandKey:'yamaha',cat:'piano',type:'Piano điện · 88 phím',price:'11.500.000đ',old:'13.200.000đ',images:imgs(IMG.pianoDigital),short:'Dòng piano điện phổ biến nhất cho người mới. Phím GHS cảm ứng lực, nguồn âm Pure CF từ đàn Grand Yamaha.',specs:{'Hãng':'Yamaha (Nhật Bản)','Số phím':'88 phím','Cảm ứng lực':'GHS','Số giọng':'10 giọng','Đa âm':'64 nốt','Nguồn âm':'Pure CF Sound Engine','Kết nối':'USB, Headphone','Trọng lượng':'11.5 kg'},features:['Phím GHS mô phỏng cảm giác đàn cơ','Nguồn âm Pure CF từ Grand Piano','Chế độ Dual/Layer ghép 2 giọng','Chạy được bằng pin AA','Bảo hành chính hãng 3 năm']},
  'yamaha-p125':{name:'Yamaha P-125',brand:'Yamaha',brandKey:'yamaha',cat:'piano',type:'Piano điện · 88 phím',price:'18.500.000đ',old:'21.000.000đ',images:imgs(IMG.pianoDigital),short:'Nâng cấp từ P-45 với 24 giọng, kết nối USB/MIDI, âm thanh Piano CFX cao cấp.',specs:{'Hãng':'Yamaha','Số phím':'88 phím','Cảm ứng lực':'GHS','Số giọng':'24 giọng','Đa âm':'192 nốt','Kết nối':'USB, AUX Out','Trọng lượng':'11.8 kg'},features:['Âm thanh Piano CFX từ Grand Concert','Chế độ Sound Boost','Dual, Split, Duo linh hoạt','App Smart Pianist','Bảo hành 3 năm']},
  'casio-cdp-s110':{name:'Casio CDP-S110',brand:'Casio',brandKey:'casio',cat:'piano',type:'Piano điện · 88 phím',price:'8.900.000đ',old:'10.500.000đ',images:imgs(IMG.pianoDigital),short:'Giá rẻ nhất phân khúc piano điện 88 phím. Siêu mỏng, chỉ 10.5kg.',specs:{'Hãng':'Casio','Số phím':'88 phím','Cảm ứng lực':'Scaled Hammer Action II','Số giọng':'10 giọng','Đa âm':'64 nốt','Trọng lượng':'10.5 kg'},features:['Thiết kế siêu mỏng','Phím Scaled Hammer Action II','Chế độ Duet','Chạy pin AA','Bảo hành 3 năm']},
  'casio-px-s1100':{name:'Casio PX-S1100',brand:'Casio',brandKey:'casio',cat:'piano',type:'Piano điện · Bluetooth',price:'15.900.000đ',old:'18.500.000đ',images:imgs(IMG.pianoDigital),short:'Piano điện mỏng nhất thế giới (232mm). Bluetooth Audio & MIDI.',specs:{'Hãng':'Casio','Số phím':'88 phím','Số giọng':'18 giọng','Đa âm':'192 nốt','Kết nối':'Bluetooth, USB','Trọng lượng':'11.2 kg'},features:['Mỏng nhất thế giới 232mm','Bluetooth Audio','App Casio Music Space','Khóa phím cảm ứng','Bảo hành 3 năm']},
  'victor-p125':{name:'Victor P-125',brand:'Victor',brandKey:'victor',cat:'piano',type:'Piano điện · 88 phím',price:'10.500.000đ',old:'12.000.000đ',images:imgs(IMG.pianoDigital),short:'Piano điện Victor Nhật Bản — 88 phím cảm ứng lực, âm thanh ấm áp.',specs:{'Hãng':'Victor','Số phím':'88 phím','Số giọng':'12 giọng','Đa âm':'128 nốt','Trọng lượng':'11 kg'},features:['Thương hiệu Nhật Bản','Âm thanh ấm','Cảm ứng lực 3 mức','Dual & Split','Bảo hành 3 năm']},
  'master-mp100':{name:'Master MP-100',brand:'Master',brandKey:'master',cat:'piano',type:'Piano điện · Bluetooth MIDI',price:'12.500.000đ',old:'14.500.000đ',images:imgs(IMG.pianoDigital),short:'Master MP-100 — 88 phím cảm ứng lực, Bluetooth MIDI, thiết kế hiện đại.',specs:{'Hãng':'Master','Số phím':'88 phím','Số giọng':'16 giọng','Kết nối':'Bluetooth MIDI, USB','Loa':'10W × 2'},features:['Bluetooth MIDI','16 giọng','Loa 10W×2','Metronome','Bảo hành 3 năm']},
  'yamaha-u1':{name:'Yamaha U1',brand:'Yamaha',brandKey:'yamaha',cat:'piano',type:'Piano cơ Upright · 121cm',price:'135.000.000đ',old:'',images:imgs(IMG.pianoUpright),short:'Huyền thoại piano cơ Upright Nhật Bản — được nhạc viện khuyên dùng.',specs:{'Hãng':'Yamaha','Loại':'Upright','Chiều cao':'121 cm','Số phím':'88 phím','Pedal':'3 pedal','Trọng lượng':'~228 kg'},features:['Âm thanh cân bằng','Cơ chế búa chân thực','Độ bền vượt trội','Phù hợp biểu diễn','Bảo hành 3 năm']},
  'victor-upright':{name:'Victor Upright VU-118',brand:'Victor',brandKey:'victor',cat:'piano',type:'Piano cơ Upright · 118cm',price:'95.000.000đ',old:'',images:imgs(IMG.pianoUpright),short:'Piano cơ Upright Victor 118cm — chất lượng Nhật Bản, giá tiết kiệm.',specs:{'Hãng':'Victor','Loại':'Upright','Chiều cao':'118 cm','Số phím':'88 phím','Trọng lượng':'~210 kg'},features:['Chất lượng Nhật','Âm thanh ấm','Búa nỉ cao cấp','3 pedal','Bảo hành 3 năm']},
  'casio-ap270':{name:'Casio AP-270',brand:'Casio',brandKey:'casio',cat:'piano',type:'Piano điện dạng tủ',price:'24.900.000đ',old:'28.000.000đ',images:imgs(IMG.pianoGrand),short:'Piano điện dạng tủ sang trọng, 3 pedal, cảm giác như piano cơ.',specs:{'Hãng':'Casio','Loại':'Dạng tủ','Số phím':'88 phím','Số giọng':'22 giọng','Đa âm':'256 nốt','Pedal':'3 pedal','Trọng lượng':'36.5 kg'},features:['Thiết kế tủ gỗ','3 pedal','Cảm ứng Tri-sensor','Concert Play','Bảo hành 3 năm']},
  'master-grand':{name:'Master Grand MG-180',brand:'Master',brandKey:'master',cat:'piano',type:'Piano cơ Grand · 180cm',price:'180.000.000đ',old:'',images:imgs(IMG.pianoGrand),short:'Piano cơ Grand Master MG-180 — dài 180cm, âm thanh phòng hòa nhạc.',specs:{'Hãng':'Master','Loại':'Grand','Chiều dài':'180 cm','Số phím':'88 phím','Búa':'Búa nỉ Đức','Trọng lượng':'~330 kg'},features:['Âm thanh hòa nhạc','Búa nỉ Đức','Thiết kế Grand','Biểu diễn chuyên nghiệp','Bảo hành 3 năm']},
  'yamaha-f310':{name:'Yamaha F310',brand:'Yamaha',brandKey:'yamaha',cat:'guitar',type:'Guitar acoustic · Dreadnought',price:'2.900.000đ',old:'3.500.000đ',images:imgs(IMG.guitarAcoustic),short:'Guitar acoustic phổ biến nhất cho người mới. Mặt Spruce, hông lưng Meranti.',specs:{'Hãng':'Yamaha','Loại':'Acoustic','Mặt đàn':'Spruce','Lưng & hông':'Meranti','Số dây':'6 dây','Chiều dài':'Dreadnought 41"'},features:['Mặt gỗ Spruce','Phù hợp người mới','Độ bền cao','Dễ bấm','Bảo hành 3 năm']},
  'martin-d28':{name:'Martin D-28',brand:'Martin',brandKey:'martin',cat:'guitar',type:'Guitar acoustic · Dreadnought',price:'75.000.000đ',old:'',images:imgs(IMG.guitarAcoustic),short:'Huyền thoại guitar acoustic Martin D-28. Mặt Sitka Spruce, lưng hông Rosewood.',specs:{'Hãng':'Martin','Loại':'Dreadnought','Mặt đàn':'Sitka Spruce','Lưng & hông':'Rosewood','Phím đàn':'Ebony'},features:['Huyền thoại acoustic Mỹ','Sitka Spruce + Rosewood','Thủ công tại Mỹ','Âm thanh ấm, chi tiết','Bảo hành 3 năm']},
  'taylor-114e':{name:'Taylor 114e',brand:'Taylor',brandKey:'taylor',cat:'guitar',type:'Guitar acoustic điện · ES2',price:'15.500.000đ',old:'18.000.000đ',images:imgs(IMG.guitarAcoustic),short:'Guitar acoustic Taylor 114e có pickup ES2, phù hợp biểu diễn.',specs:{'Hãng':'Taylor','Loại':'Acoustic điện','Mặt đàn':'Sitka Spruce','Lưng & hông':'Sapele','Pickup':'Taylor ES2'},features:['Pickup ES2','Biểu diễn sân khấu','Chất lượng Mỹ','Grand Auditorium','Bảo hành 3 năm']},
  'yamaha-c40':{name:'Yamaha C40',brand:'Yamaha',brandKey:'yamaha',cat:'guitar',type:'Guitar classic · Nylon',price:'3.500.000đ',old:'4.200.000đ',images:imgs(IMG.guitarClassic),short:'Guitar classic Yamaha C40 — lựa chọn kinh điển cho người học cổ điển.',specs:{'Hãng':'Yamaha','Loại':'Classic','Mặt đàn':'Spruce','Số dây':'6 dây nilon','Chiều dài':'Full size 39"'},features:['Dây nilon mềm','Âm thanh ngọt ngào','Học cổ điển','Chất lượng Yamaha','Bảo hành 3 năm']},
  'fender-strat':{name:'Fender Player Stratocaster',brand:'Fender',brandKey:'fender',cat:'guitar',type:'Guitar điện · Mexico',price:'18.500.000đ',old:'21.500.000đ',images:imgs(IMG.guitarElectric),short:'Huyền thoại guitar điện Fender Stratocaster. Sản xuất tại Mexico.',specs:{'Hãng':'Fender','Loại':'Guitar điện','Thân đàn':'Alder','Cần đàn':'Maple','Pickup':'3 × Single-Coil','Điều khiển':'1 Vol, 2 Tone, 5-way'},features:['Pickup Single-Coil','Cần đàn Modern "C"','Âm thanh Fender','Chất lượng Mexico','Bảo hành 3 năm']},
  'gibson-lp':{name:'Gibson Les Paul Standard',brand:'Gibson',brandKey:'gibson',cat:'guitar',type:'Guitar điện · USA',price:'65.000.000đ',old:'',images:imgs(IMG.guitarElectric),short:'Huyền thoại rock Gibson Les Paul Standard. Thân Mahogany, mặt Maple.',specs:{'Hãng':'Gibson','Loại':'Guitar điện','Thân đàn':'Mahogany + Maple','Cần đàn':'Mahogany','Pickup':'2 × Burstbucker','Điều khiển':'2 Vol, 2 Tone, 3-way'},features:['Pickup Burstbucker','Mahogany + Maple','Thủ công Mỹ','Cây đàn rocker','Bảo hành 3 năm']},
  'ibanez-grx40':{name:'Ibanez GRX40',brand:'Ibanez',brandKey:'ibanez',cat:'guitar',type:'Guitar điện · H-S-H',price:'5.500.000đ',old:'6.500.000đ',images:imgs(IMG.guitarElectric),short:'Guitar điện rock/metal giá tốt cho người mới. Cấu hình H-S-H.',specs:{'Hãng':'Ibanez','Loại':'Guitar điện','Thân đàn':'Poplar','Cần đàn':'Maple','Pickup':'H-S-H','Điều khiển':'1 Vol, 1 Tone, 5-way'},features:['Cấu hình H-S-H','Cần đàn mỏng','Chất lượng Ibanez','Giá tốt','Bảo hành 3 năm']},
  'fender-squier':{name:'Fender Squier Affinity',brand:'Fender',brandKey:'fender',cat:'guitar',type:'Guitar điện · Entry-level',price:'6.900.000đ',old:'8.200.000đ',images:imgs(IMG.guitarElectric),short:'Dòng entry-level của Fender — thiết kế Stratocaster cổ điển.',specs:{'Hãng':'Fender','Loại':'Guitar điện','Thân đàn':'Poplar','Cần đàn':'Maple','Pickup':'3 × Single-Coil'},features:['Thiết kế Stratocaster','Giá tốt','Cần đàn "C"','Chính hãng Fender','Bảo hành 3 năm']},
  'tama-rhythm':{name:'Tama Rhythm Mate',brand:'Tama',brandKey:'tama',cat:'drums',type:'Trống acoustic · 5 mảnh',price:'12.500.000đ',old:'14.500.000đ',images:imgs(IMG.drumsAcoustic),short:'Bộ trống acoustic Tama Rhythm Mate 5 mảnh — lựa chọn phổ biến.',specs:{'Hãng':'Tama','Loại':'Acoustic 5 mảnh','Bass drum':'22" × 16"','Tom 1':'10" × 7"','Snare':'14" × 5.5"'},features:['Bộ 5 mảnh đầy đủ','Hardware chắc chắn','Học tập & biểu diễn','Chất lượng Tama','Bảo hành 3 năm']},
  'pearl-roadshow':{name:'Pearl Roadshow',brand:'Pearl',brandKey:'pearl',cat:'drums',type:'Trống acoustic · 5 mảnh',price:'14.500.000đ',old:'17.000.000đ',images:imgs(IMG.drumsAcoustic),short:'Bộ trống Pearl Roadshow 5 mảnh — chất lượng từ thương hiệu số 1.',specs:{'Hãng':'Pearl','Loại':'Acoustic 5 mảnh','Bass drum':'22" × 16"','Snare':'14" × 5.5"','Vật liệu':'Poplar'},features:['Hardware Pearl','Bộ 5 mảnh','Sân khấu nhỏ','Thương hiệu #1','Bảo hành 3 năm']},
  'yamaha-stage':{name:'Yamaha Stage Custom',brand:'Yamaha',brandKey:'yamaha',cat:'drums',type:'Trống acoustic · Birch',price:'19.500.000đ',old:'23.000.000đ',images:imgs(IMG.drumsAcoustic),short:'Bộ trống Yamaha Stage Custom — gỗ Birch cao cấp, âm thanh chuyên nghiệp.',specs:{'Hãng':'Yamaha','Loại':'Acoustic','Bass drum':'22" × 17"','Vật liệu':'Birch 6 lớp'},features:['Gỗ Birch tươi sáng','Hardware Yamaha','Sân khấu & studio','Chuyên nghiệp','Bảo hành 3 năm']},
  'pearl-export':{name:'Pearl Export EXX',brand:'Pearl',brandKey:'pearl',cat:'drums',type:'Trống acoustic · 5 mảnh',price:'22.500.000đ',old:'',images:imgs(IMG.drumsAcoustic),short:'Pearl Export EXX — dòng trống huyền thoại, âm thanh mạnh mẽ.',specs:{'Hãng':'Pearl','Loại':'Acoustic','Bass drum':'22" × 18"','Vật liệu':'Poplar/Mahogany 6 lớp'},features:['Huyền thoại Pearl','Âm thanh mạnh mẽ','Hardware 830 series','Chuyên nghiệp','Bảo hành 3 năm']},
  'roland-td1k':{name:'Roland TD-1K',brand:'Roland',brandKey:'roland',cat:'drums',type:'Trống điện · V-Drums',price:'11.500.000đ',old:'13.500.000đ',images:imgs(IMG.drumsElectric),short:'Trống điện Roland TD-1K — dùng tai nghe chơi đêm không làm phiền.',specs:{'Hãng':'Roland','Loại':'V-Drums','Số pad':'5 pad','Snare':'Pad lưới Mesh','Bộ âm thanh':'15 bộ V-Drums'},features:['Chơi đêm tai nghe','Pad lưới Mesh','Bộ âm thanh Roland','Coach Mode','Bảo hành 3 năm']},
  'alesis-nitro':{name:'Alesis Nitro Mesh',brand:'Alesis',brandKey:'alesis',cat:'drums',type:'Trống điện · Mesh pad',price:'8.500.000đ',old:'10.000.000đ',images:imgs(IMG.drumsElectric),short:'Bộ trống điện Alesis Nitro Mesh — pad lưới mesh cao cấp giá rẻ.',specs:{'Hãng':'Alesis','Loại':'Điện Mesh','Số pad':'8 pad Mesh','Snare':'Dual-zone mesh','Bộ âm thanh':'40 kits, 385 sounds'},features:['Pad lưới Mesh','385 âm thanh','USB MIDI','Học tập tại nhà','Bảo hành 3 năm']}
};

/* ============================================================
   ORDERS STORAGE
   ============================================================ */
const ORDER_KEY = 'gewon_orders_v1';
const SEED_FLAG = 'gewon_seeded_v1';
let _ordersCache = null, _seedChecked = false;

function getOrders(){
  if(_ordersCache !== null) return _ordersCache;
  try{ _ordersCache = JSON.parse(localStorage.getItem(ORDER_KEY) || '[]'); if(!Array.isArray(_ordersCache)) _ordersCache = []; }
  catch(e){ _ordersCache = []; }
  return _ordersCache;
}

function saveOrders(list){
  _ordersCache = Array.isArray(list) ? list : [];
  try{ localStorage.setItem(ORDER_KEY, JSON.stringify(_ordersCache)); }catch(e){}
  updateOrderBadge();
}

function updateOrderBadge(){
  const badge = document.getElementById('navOrderBadge');
  if(!badge) return;
  const n = getOrders().length;
  if(n > 0){ badge.textContent = n; badge.style.display = 'inline-flex'; }
  else badge.style.display = 'none';
}

function seedDemoOrder(){
  if(_seedChecked) return;
  _seedChecked = true;
  try{ if(localStorage.getItem(SEED_FLAG)) return; localStorage.setItem(SEED_FLAG, '1'); }catch(e){}
  if(getOrders().length > 0) return;
  saveOrders([{
    code:'#GW-DEMO01', createdAt: Date.now() - 3600000,
    name:'Khách demo', phone:'0385 730 766', address:'Quận 1, TP.HCM',
    note:'Giao giờ hành chính', distance:'8 km', feeText:'Miễn phí', feeFree:true,
    product:{id:'yamaha-p45', name:'Yamaha P-45', price:'11.500.000đ', image: IMG.pianoDigital[0]},
    status:2
  }]);
}

const ORDER_STEPS = [
  {icon:'✓', label:'Đã xác nhận'},{icon:'📦', label:'Chuẩn bị hàng'},
  {icon:'🚚', label:'Đang giao'},{icon:'🏠', label:'Đã giao'}
];

/* ============================================================
   ROUTING
   ============================================================ */
let currentView = 'home';
let history_ = ['home'];
let pendingProduct = null;

function go(view, push=true){
  const valid = ['home','piano','guitar','drums','detail','contact','shipping','warranty','success','orders','test'];
  if(!valid.includes(view)) view = 'home';
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const el = document.getElementById('view-'+view);
  if(el) el.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const navEl = document.querySelector(`.nav-links a[data-nav="${view}"]`);
  if(navEl) navEl.classList.add('active');
  currentView = view;
  if(view === 'orders') renderOrders();
  if(view === 'shipping') renderPendingProduct();
  if(view === 'test') initTestViewOnce();
  if(push && view !== 'detail' && view !== 'success'){
    if(history_[history_.length-1] !== view) history_.push(view);
    if(history_.length > 20) history_.shift();
    try{ history.replaceState({v:view}, '', '#'+view); }catch(e){}
  }
  window.scrollTo({top:0, behavior:'auto'});
}

function goBack(){
  history_.pop();
  go(history_[history_.length-1] || 'home', false);
}

window.addEventListener('hashchange', ()=>{
  const h = location.hash.replace('#','');
  if(h && h !== currentView && h !== 'detail' && h !== 'success') go(h, false);
});

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
function cardHTML(p, id){
  return `<div class="product-card" onclick="openDetail('${id}')">
    <div class="product-img-wrap">
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="imgFail(this)">
      ${p.old ? '<span class="product-badge sale">SALE</span>' : ''}
    </div>
    <div class="product-info">
      <h3>${p.name}</h3>
      <div class="price">${p.price}${p.old ? `<span class="price-old">${p.old}</span>` : ''}</div>
    </div>
  </div>`;
}

function renderCategory(cat, gridId){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  grid.innerHTML = Object.entries(DB).filter(([id,p])=>p.cat===cat).map(([id,p])=>cardHTML(p,id)).join('');
}

function renderFeatured(){
  const grid = document.getElementById('featured-grid');
  if(!grid) return;
  const featured = ['yamaha-p45','casio-cdp-s110','fender-strat','tama-rhythm'];
  grid.innerHTML = featured.map(id=>cardHTML(DB[id], id)).join('');
}

function filter(cat, brandKey, btn){
  btn.parentElement.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('grid-'+cat);
  if(!grid) return;
  grid.innerHTML = Object.entries(DB).filter(([id,p])=>
    p.cat===cat && (brandKey==='all' || p.brandKey===brandKey)
  ).map(([id,p])=>cardHTML(p,id)).join('');
}

/* ============================================================
   DETAIL
   ============================================================ */
let currentId = null;

function openDetail(id){
  const p = DB[id];
  if(!p) return;
  currentId = id;
  document.getElementById('gallery-main').innerHTML = p.images.map((src,i)=>
    `<img src="${src}" class="${i===0?'active':''}" alt="${p.name}" onerror="imgFail(this)">`
  ).join('');
  document.getElementById('gallery-thumbs').innerHTML = p.images.map((src,i)=>
    `<div class="thumb ${i===0?'active':''}" onclick="switchImg(${i})"><img src="${src}" alt="" onerror="imgFail(this)"></div>`
  ).join('');
  document.getElementById('d-brand').textContent = p.brand.toUpperCase() + ' · ' + p.type;
  document.getElementById('d-name').textContent = p.name;
  document.getElementById('d-price').textContent = p.price;
  document.getElementById('d-old').textContent = p.old || '';
  document.getElementById('d-short').textContent = p.short;
  document.getElementById('d-specs').innerHTML = Object.entries(p.specs).map(([k,v])=>`<div class="spec-row"><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  document.getElementById('d-features').innerHTML = p.features.map(f=>`<li>${f}</li>`).join('');
  go('detail');
}

function switchImg(i){
  document.querySelectorAll('#gallery-main img').forEach((img,idx)=>img.classList.toggle('active', idx===i));
  document.querySelectorAll('#gallery-thumbs .thumb').forEach((t,idx)=>t.classList.toggle('active', idx===i));
}

function orderProduct(){
  if(!currentId) return;
  const p = DB[currentId];
  pendingProduct = {id:currentId, name:p.name, price:p.price, image:p.images[0]};
  go('shipping');
}

function renderPendingProduct(){
  const box = document.getElementById('pending-product');
  if(!box) return;
  if(!pendingProduct){ box.style.display = 'none'; return; }
  box.style.display = 'block';
  document.getElementById('pp-img').src = pendingProduct.image;
  document.getElementById('pp-name').textContent = pendingProduct.name;
  document.getElementById('pp-price').textContent = pendingProduct.price;
}

function clearPendingProduct(){ pendingProduct = null; renderPendingProduct(); }

/* ============================================================
   SHIPPING
   ============================================================ */
let lastDistance = null, lastFee = null;

function updateMapFromAddress(address){
  if(!address || address.length < 3) return;
  const frame = document.getElementById('ship-map-frame');
  if(!frame) return;
  frame.src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const fakeKm = Math.min(30, Math.max(1, Math.round(address.length / 3)));
  lastDistance = fakeKm + ' km';
  if(fakeKm <= 10) lastFee = {text:'Miễn phí', free:true};
  else if(fakeKm <= 20) lastFee = {text: ((fakeKm-10)*10000).toLocaleString('vi-VN')+'đ', free:false};
  else lastFee = {text:'Liên hệ', free:false};
  const box = document.getElementById('ship-fee-box');
  if(box){
    box.style.display = 'block';
    document.getElementById('ship-distance').textContent = lastDistance;
    const feeEl = document.getElementById('ship-fee');
    feeEl.textContent = lastFee.text;
    feeEl.style.color = lastFee.free ? '#34d399' : '#fff';
  }
}

function confirmShipping(){
  const name = (document.getElementById('ship-name')?.value || '').trim();
  const phone = (document.getElementById('ship-phone')?.value || '').trim();
  const address = (document.getElementById('ship-address')?.value || '').trim();
  const note = (document.getElementById('ship-note')?.value || '').trim();
  if(!name || !phone || !address){ alert('Vui lòng điền đầy đủ Họ tên, SĐT và Địa chỉ!'); return; }
  if(!lastDistance) updateMapFromAddress(address);
  const code = '#GW-' + Math.floor(100000 + Math.random()*900000);
  const order = {
    code, createdAt: Date.now(), name, phone, address, note,
    distance: lastDistance || '—',
    feeText: lastFee ? lastFee.text : 'Miễn phí',
    feeFree: lastFee ? lastFee.free : true,
    product: pendingProduct, status: 2
  };
  const list = getOrders();
  list.unshift(order);
  saveOrders(list);
  pendingProduct = null;
  renderPendingProduct();
  document.getElementById('s-name').textContent = name;
  document.getElementById('s-phone').textContent = phone;
  document.getElementById('s-address').textContent = address;
  document.getElementById('s-note').textContent = note || '(Không có)';
  document.getElementById('s-distance').textContent = order.distance;
  const sFee = document.getElementById('s-fee');
  sFee.textContent = order.feeText;
  sFee.className = order.feeFree ? 'fee-free' : '';
  document.getElementById('s-code').textContent = code;
  document.getElementById('ship-name').value = '';
  document.getElementById('ship-phone').value = '';
  document.getElementById('ship-address').value = '';
  document.getElementById('ship-note').value = '';
  document.getElementById('ship-fee-box').style.display = 'none';
  lastDistance = null; lastFee = null;
  history_.push('shipping');
  go('success');
  history_.push('success');
  setTimeout(()=>{
    ensureChatOpen();
    addMsg(`Đơn hàng ${code} đã được tiếp nhận! Chúng tôi sẽ liên hệ xác nhận trong 30 phút. Cảm ơn ${name} đã tin tưởng Gewon Music! 🎵`, 'bot');
  }, 800);
}

/* ============================================================
   ORDERS RENDER
   ============================================================ */
function renderOrders(){
  const list = document.getElementById('orders-list');
  if(!list) return;
  const orders = getOrders();
  if(orders.length === 0){
    list.innerHTML = `<div class="orders-empty"><div class="emoji">📦</div><h3>Chưa có đơn hàng</h3><p>Hãy khám phá sản phẩm và đặt mua — đơn hàng sẽ hiển thị tại đây.</p><button class="btn btn-primary" onclick="go('piano')">Khám phá →</button></div>`;
    return;
  }
  list.innerHTML = orders.map(o => orderCardHTML(o)).join('');
}

function orderCardHTML(o){
  const status = (o.status ?? 2);
  const timeline = ORDER_STEPS.map((s,i)=>{
    let cls = '';
    if(i < status) cls = 'done';
    else if(i === status) cls = 'active';
    return `<div class="tl-step ${cls}"><div class="tl-dot">${s.icon}</div><div class="tl-label">${s.label}</div></div>`;
  }).join('');
  const productHTML = o.product ? `
    <div class="order-product">
      <img src="${o.product.image}" alt="" onerror="imgFail(this)">
      <div><strong>${o.product.name}</strong>${o.product.price ? `<span>${o.product.price}</span>` : ''}</div>
    </div>` : '';
  const date = new Date(o.createdAt).toLocaleString('vi-VN', {day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit'});
  const canCancel = status < 3;
  return `<div class="order-card">
    <div class="order-head">
      <div><div class="order-code">${o.code}</div><div class="order-date">🕐 ${date}</div></div>
      <div class="order-tags"><span class="order-sent">📡 Đã gửi hệ thống</span><span class="order-status">${ORDER_STEPS[status].label}</span></div>
    </div>
    <div class="order-timeline">${timeline}</div>
    ${productHTML}
    <div class="order-body">
      <div class="order-row"><span>👤 Người nhận</span><strong>${o.name}</strong></div>
      <div class="order-row"><span>📞 Điện thoại</span><strong>${o.phone}</strong></div>
      <div class="order-row"><span>📍 Địa chỉ</span><strong>${o.address}</strong></div>
      ${o.note ? `<div class="order-row"><span>📝 Ghi chú</span><strong>${o.note}</strong></div>` : ''}
      <div class="order-row"><span>💰 Phí giao</span><strong class="${o.feeFree?'fee-free':''}">${o.feeText}</strong></div>
    </div>
    ${canCancel ? `<div class="order-actions"><button class="btn-cancel" onclick="cancelOrder('${o.code}')">❌ Hủy đơn hàng</button></div>` : ''}
  </div>`;
}

function cancelOrder(code){
  const orders = getOrders();
  const idx = orders.findIndex(o => o.code === code);
  if(idx === -1) return;
  if((orders[idx].status ?? 2) >= 3){ alert('Đơn hàng đã giao thành công, không thể hủy.'); return; }
  showCancelConfirm(code);
}

function showCancelConfirm(code){
  const old = document.getElementById('cancel-modal');
  if(old) old.remove();
  const overlay = document.createElement('div');
  overlay.id = 'cancel-modal';
  overlay.innerHTML = `<div class="cancel-modal-box">
    <div class="cancel-modal-icon">⚠️</div>
    <h3>Hủy đơn hàng ${code}?</h3>
    <p>Đơn hàng sẽ bị <strong>XÓA</strong>. Không thể hoàn tác.</p>
    <div class="cancel-modal-actions">
      <button class="btn btn-ghost" id="cancel-no">Không</button>
      <button class="btn btn-primary" id="cancel-yes" style="background:linear-gradient(135deg,#ef4444 0%,#dc2626 100%);color:#fff">Có, hủy đơn</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  document.getElementById('cancel-no').onclick = () => overlay.remove();
  document.getElementById('cancel-yes').onclick = () => { overlay.remove(); doCancelOrder(code); };
  overlay.onclick = (e) => { if(e.target === overlay) overlay.remove(); };
}

function doCancelOrder(code){
  const orders = getOrders();
  const idx = orders.findIndex(o => o.code === code);
  if(idx === -1) return;
  orders.splice(idx, 1);
  saveOrders(orders);
  ensureChatOpen();
  addMsg(`❌ Đơn hàng ${code} đã được hủy và xóa khỏi danh sách.\n\n📌 Lưu ý: Nếu đã thanh toán, khoản hoàn tiền sẽ được xử lý trong 3-5 ngày làm việc. Bạn có thể đặt lại bất cứ lúc nào! 🍋`, 'bot');
  renderOrders();
  updateOrderBadge();
}

/* ============================================================
   TEST INSTRUMENTS — Web Audio
   ============================================================ */
let _audioCtx = null;
function getAudioCtx(){
  if(!_audioCtx){
    try{ _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ return null; }
  }
  if(_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

const NOTES = [
  {name:'C', label:'Đô', freq:261.63},{name:'D', label:'Rê', freq:293.66},
  {name:'E', label:'Mi', freq:329.63},{name:'F', label:'Fa', freq:349.23},
  {name:'G', label:'Sol', freq:392.00},{name:'A', label:'La', freq:440.00},
  {name:'B', label:'Si', freq:493.88},{name:'C5', label:'Đô', freq:523.25}
];

const GUITAR_STRINGS = [
  {name:'E4', freq:329.63},{name:'B3', freq:246.94},{name:'G3', freq:196.00},
  {name:'D3', freq:146.83},{name:'A2', freq:110.00},{name:'E2', freq:82.41}
];

let currentInstrument = 'piano';
let demoTimeouts = [];

function playPianoTone(freq, dur, vol){
  dur = dur || 1.4; vol = typeof vol === 'number' ? vol : 0.35;
  const ctx = getAudioCtx(); if(!ctx) return;
  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(vol, now + 0.008);
  master.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  master.connect(ctx.destination);
  [{mult:1,type:'triangle',gain:1},{mult:2,type:'sine',gain:.35},{mult:3,type:'sine',gain:.18},{mult:4,type:'sine',gain:.08}].forEach(h=>{
    const osc = ctx.createOscillator(); const g = ctx.createGain();
    osc.type = h.type; osc.frequency.value = freq * h.mult; g.gain.value = h.gain;
    osc.connect(g).connect(master); osc.start(now); osc.stop(now + dur);
  });
}

function playGuitarTone(freq, dur){
  dur = dur || 1.8;
  const ctx = getAudioCtx(); if(!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator(); const filter = ctx.createBiquadFilter(); const gain = ctx.createGain();
  osc.type = 'sawtooth'; osc.frequency.value = freq;
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(3500, now);
  filter.frequency.exponentialRampToValueAtTime(900, now + dur);
  filter.Q.value = 2;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.28, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  osc.connect(filter).connect(gain).connect(ctx.destination);
  osc.start(now); osc.stop(now + dur);
}

function playDrumSound(type){
  const ctx = getAudioCtx(); if(!ctx) return;
  const now = ctx.currentTime;
  function noiseBuffer(s){
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate*s), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for(let i=0;i<d.length;i++) d[i] = Math.random()*2-1;
    return buf;
  }
  if(type==='kick'){
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.frequency.setValueAtTime(160, now);
    o.frequency.exponentialRampToValueAtTime(38, now+0.15);
    g.gain.setValueAtTime(0.7, now);
    g.gain.exponentialRampToValueAtTime(0.001, now+0.45);
    o.connect(g).connect(ctx.destination); o.start(now); o.stop(now+0.45);
  } else if(type==='snare'){
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(0.3);
    const f = ctx.createBiquadFilter(); f.type='bandpass'; f.frequency.value=1800; f.Q.value=0.9;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.5, now); g.gain.exponentialRampToValueAtTime(0.001, now+0.22);
    n.connect(f).connect(g).connect(ctx.destination); n.start(now); n.stop(now+0.3);
  } else if(type==='hihat'){
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(0.08);
    const f = ctx.createBiquadFilter(); f.type='highpass'; f.frequency.value=7000;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.25, now); g.gain.exponentialRampToValueAtTime(0.001, now+0.07);
    n.connect(f).connect(g).connect(ctx.destination); n.start(now); n.stop(now+0.08);
  } else if(type==='tom'){
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.frequency.setValueAtTime(200, now);
    o.frequency.exponentialRampToValueAtTime(90, now+0.3);
    g.gain.setValueAtTime(0.45, now); g.gain.exponentialRampToValueAtTime(0.001, now+0.35);
    o.connect(g).connect(ctx.destination); o.start(now); o.stop(now+0.35);
  } else if(type==='crash'){
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(1.2);
    const f = ctx.createBiquadFilter(); f.type='highpass'; f.frequency.value=4500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.35, now); g.gain.exponentialRampToValueAtTime(0.001, now+1.1);
    n.connect(f).connect(g).connect(ctx.destination); n.start(now); n.stop(now+1.2);
  } else if(type==='ride'){
    const n = ctx.createBufferSource(); n.buffer = noiseBuffer(0.9);
    const f = ctx.createBiquadFilter(); f.type='highpass'; f.frequency.value=5500; f.Q.value=2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.22, now); g.gain.exponentialRampToValueAtTime(0.001, now+0.8);
    n.connect(f).connect(g).connect(ctx.destination); n.start(now); n.stop(now+0.9);
  }
}

function renderTestKeys(){
  const el = document.getElementById('test-keys');
  if(!el) return;
  el.innerHTML = NOTES.map((n,i)=>`<button class="test-key" data-note="${i}" onclick="testPlayNote(${i})"><span>${n.name}</span><small>${n.label}</small></button>`).join('');
}

function testPlayNote(i){
  const n = NOTES[i]; if(!n) return;
  playPianoTone(n.freq);
  const key = document.querySelector(`.test-key[data-note="${i}"]`);
  if(key){ key.classList.add('pressed'); setTimeout(()=>key.classList.remove('pressed'), 140); }
}

function playGuitarString(index){
  const s = GUITAR_STRINGS[index]; if(!s) return;
  playGuitarTone(s.freq, 2.0);
  const str = document.querySelectorAll('.guitar-string')[index];
  if(str){ str.classList.add('vibrating'); setTimeout(()=>str.classList.remove('vibrating'), 400); }
}

function testGuitarDemo(){
  stopDemo();
  [5,4,3,2,1,0,1,2,3,4,5].forEach((idx,i)=>demoTimeouts.push(setTimeout(()=>playGuitarString(idx), i*120)));
}

function hitDrum(type, btn){
  playDrumSound(type);
  if(btn){ btn.classList.add('pressed'); setTimeout(()=>btn.classList.remove('pressed'), 130); }
}

function switchInstrument(inst, btn){
  currentInstrument = inst;
  document.querySelectorAll('.test-tab').forEach(t=>t.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.getElementById('test-panel-piano').style.display = inst==='piano'?'block':'none';
  document.getElementById('test-panel-guitar').style.display = inst==='guitar'?'block':'none';
  document.getElementById('test-panel-drums').style.display = inst==='drums'?'block':'none';
  stopDemo();
}

function stopDemo(){ demoTimeouts.forEach(t=>clearTimeout(t)); demoTimeouts = []; }

function testPlayDemo(){
  stopDemo();
  const Q=1000, E=500, H=2000, BAR=4*Q;
  const N = {C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,B4:493.88,C5:523.25};
  const song = [
    [N.E4,N.D4,N.C4,N.D4,N.E4,N.D4,N.C4],
    [N.D4,N.E4,N.D4,N.C4,N.D4],
    [N.E4,N.D4,N.C4,N.D4,N.E4,N.D4,N.C4],
    [N.D4,N.E4,N.D4,N.C4,N.D4],
    [N.F4,N.E4,N.D4,N.E4,N.F4,N.E4,N.D4],
    [N.E4,N.F4,N.E4,N.D4,N.E4],
    [N.D4,N.C4,N.B4,N.C4,N.D4,N.C4,N.B4],
    [N.C4,N.D4,N.E4,N.G4,N.C5]
  ];
  let barStart = 0;
  song.forEach(bar => {
    bar.forEach((freq,i)=>{
      demoTimeouts.push(setTimeout(()=>{ playPianoTone(freq, 0.7, 0.25); highlightKeyByFreq(freq); }, barStart + i*E));
    });
    barStart += BAR;
  });
}

function highlightKeyByFreq(freq){
  const idx = NOTES.findIndex(n => Math.abs(n.freq - freq) < 1);
  if(idx < 0) return;
  const key = document.querySelector(`.test-key[data-note="${idx}"]`);
  if(key){ key.classList.add('pressed'); setTimeout(()=>key.classList.remove('pressed'), 140); }
}

function testPlayScale(){
  stopDemo();
  const seq = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25];
  seq.forEach((f,i)=>demoTimeouts.push(setTimeout(()=>{ playPianoTone(f, 0.5, 0.28); highlightKeyByFreq(f); }, i*280)));
  seq.slice().reverse().forEach((f,i)=>demoTimeouts.push(setTimeout(()=>{ playPianoTone(f, 0.4, 0.24); highlightKeyByFreq(f); }, (seq.length+i)*280)));
}

function testDrumDemo(){
  stopDemo();
  const pattern = [
    {s:'kick',t:0},{s:'hihat',t:0},{s:'hihat',t:200},{s:'snare',t:400},{s:'hihat',t:400},
    {s:'hihat',t:600},{s:'kick',t:800},{s:'hihat',t:800},{s:'hihat',t:1000},{s:'snare',t:1200},
    {s:'hihat',t:1200},{s:'hihat',t:1400},{s:'kick',t:1600},{s:'crash',t:1600}
  ];
  pattern.forEach(p=>{
    demoTimeouts.push(setTimeout(()=>{
      playDrumSound(p.s);
      const pad = document.querySelector(`.drum-piece[data-drum="${p.s}"]`);
      if(pad){ pad.classList.add('pressed'); setTimeout(()=>pad.classList.remove('pressed'), 110); }
    }, p.t));
  });
}

document.addEventListener('keydown', (e)=>{
  if(currentView !== 'test') return;
  if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if(e.repeat) return;
  const k = e.key.toLowerCase();
  if(currentInstrument === 'piano' && '12345678'.includes(k)){ testPlayNote(parseInt(k)-1); e.preventDefault(); return; }
  if(currentInstrument === 'guitar' && '123456'.includes(k)){ playGuitarString(parseInt(k)-1); e.preventDefault(); return; }
  if(currentInstrument === 'drums'){
    const map = {q:'kick',w:'snare',e:'hihat',a:'tom',s:'crash',d:'ride'};
    if(map[k]){ hitDrum(map[k], document.querySelector(`.drum-piece[data-drum="${map[k]}"]`)); e.preventDefault(); }
  }
});

let _testInited = false;
function initTestViewOnce(){ if(_testInited) return; _testInited = true; renderTestKeys(); }

/* ============================================================
   CHATBOT — ChanhNgot🍋 V4 — AI TOÀN DIỆN
   ============================================================ */
let isFirstMsg = true, chatOpen = false;

const GREETING = "Chào bạn! Mình là ChanhNgot🍋 — trợ lý AI nhí nhố của Gewon Music nè!\n\nMình có thể:\n• 🎹🎸🥁 Tư vấn nhạc cụ theo nhu cầu & ngân sách\n• 📦 Kiểm tra đơn hàng, hủy đơn\n• 🛡️ Giải thích bảo hành 3 năm\n• 🎵 Chơi thử nhạc cụ trên web\n• 🧮 Tính toán toàn diện: cơ bản → căn → PT → đổi đơn vị → BMI\n• 🌤️ Xem thời tiết real-time\n• 💱 Đổi tỷ giá tiền tệ\n• 📖 Tra cứu Wikipedia\n• 🔍 Tìm sản phẩm trên Shopee/Lazada/Tiki\n• 💛 Tâm sự, kể chuyện cười, tán gẫu đủ thứ\n\nCứ nhắn tự nhiên như nói chuyện với bạn thân nha! 💕";

const chatMemory = { lastTopic:null, lastProductId:null, msgCount:0, userName:null, lastBotQuestion:null };
let _recentReplies = [];

function pick(arr){
  if(!Array.isArray(arr) || arr.length === 0) return '';
  if(arr.length === 1) return arr[0];
  for(let i=0;i<15;i++){
    const c = arr[Math.floor(Math.random()*arr.length)];
    if(!_recentReplies.includes(c)){ _recentReplies.push(c); if(_recentReplies.length>3) _recentReplies.shift(); return c; }
  }
  const c = arr[Math.floor(Math.random()*arr.length)];
  _recentReplies.push(c); if(_recentReplies.length>3) _recentReplies.shift();
  return c;
}

function normalize(str){
  return (str || '').toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
}

function findProduct(text){
  const t = normalize(text);
  const tCompact = t.replace(/[\s\-_.,!?]/g, '');
  for(const id in DB){
    const p = DB[id];
    const nameNorm = normalize(p.name);
    if(t.includes(nameNorm)) return {id, p};
    const modelNorm = nameNorm.replace(/[\s\-]/g, '');
    if(modelNorm.length >= 4 && tCompact.includes(modelNorm)) return {id, p};
  }
  return null;
}

function describe(p){
  const specs = Object.entries(p.specs).slice(0,6).map(([k,v])=>`• ${k}: ${v}`).join('\n');
  const feats = p.features.slice(0,4).map(f=>`• ${f}`).join('\n');
  const saving = p.old ? `\n💸 Tiết kiệm: ${p.old} → ${p.price}` : '';
  return pick([
    `📋 **${p.name}** (${p.brand})\n💰 **${p.price}**${p.old?` — sale từ ${p.old}`:''}\n\n${p.short}\n\n⚙️ Thông số:\n${specs}\n\n✨ Điểm hay:\n${feats}${saving}\n\nBấm vào sản phẩm xem chi tiết đầy đủ nha! 🎵`,
    `À **${p.name}** hả! Cây này ngon đó nha~ 🍋\n\n💰 Giá: **${p.price}**${p.old?` (giá cũ ${p.old})`:''}\n\n${p.short}\n\n⚙️ Sơ lược:\n${specs}\n\n✨ Vì sao nên chọn:\n${feats}\n\nBạn muốn so sánh với mẫu khác cùng tầm giá không? 😄`,
    `🎯 **${p.name}** — mẫu này mình tư vấn nhiều lắm!\n\n${p.short}\n\n💰 **${p.price}**${p.old?` (tiết kiệm ${p.old})`:''}\n\n⚙️ Thông số:\n${specs}\n\n✨ Đặc điểm:\n${feats}\n\nHỏi thêm gì cứ nói nha! 🎵`,
    `✨ **${p.name}** — đáng cân nhắc đó!\n\n${p.short}\n\n💰 **${p.price}**${p.old?` (giá gốc ${p.old})`:''}\n\n⚙️ Thông số chính:\n${specs}\n\n🎁 Điểm cộng:\n${feats}\n\nBạn đang cân nhắc em nó cho việc gì? 🍋`
  ]);
}

/* ============================================================
   🧮 TÍNH TOÁN TOÀN DIỆN
   ============================================================ */
function formatCalcNum(n){
  if(!isFinite(n)) return '∞';
  if(Number.isInteger(n) && Math.abs(n) < 1e15) return n.toLocaleString('vi-VN');
  if(Math.abs(n) < 0.0001 || Math.abs(n) >= 1e12) return n.toExponential(6);
  const r = Math.round(n * 1e10) / 1e10;
  return r.toLocaleString('vi-VN', {maximumFractionDigits: 10});
}

function calcHandler(raw, t){
  let m;
  m = t.match(/([\d\.,]+)\s*(?:%|phan\s*tram|phần\s*trăm)\s*(?:cua|of|của)\s*([\d\.,]+)/);
  if(m){
    const p = parseFloat(m[1].replace(',','.')), y = parseFloat(m[2].replace(',','.'));
    if(isFinite(p)&&isFinite(y)) return `🧮 **${m[1]}% của ${m[2]}** = **${formatCalcNum(p*y/100)}**\n📐 ${p} ÷ 100 × ${y}`;
  }
  m = t.match(/(tang|giam|tăng|giảm)\s+([\d\.,]+)\s*(?:%|phan\s*tram|phần\s*trăm)\s*(?:cua|of)?\s*([\d\.,]+)/);
  if(m){
    const dir = /tang|tăng/i.test(m[1]) ? 1 : -1;
    const p = parseFloat(m[2].replace(',','.')), y = parseFloat(m[3].replace(',','.'));
    if(isFinite(p)&&isFinite(y)){
      const d = p*y/100, r = dir===1?y+d:y-d;
      return `🧮 **${dir===1?'Tăng':'Giảm'} ${m[2]}% của ${m[3]}**\n• Chênh lệch: **${formatCalcNum(d)}**\n• Kết quả: **${formatCalcNum(r)}**`;
    }
  }
  m = t.match(/can\s*bac\s*(\d+)\s*(?:cua|của|of)?\s*([\d\.,]+)/);
  if(m){
    const n = parseInt(m[1]), x = parseFloat(m[2].replace(',','.'));
    if(n>0 && isFinite(x)){
      const r = x>=0 ? Math.pow(x,1/n) : (n%2===1 ? -Math.pow(-x,1/n) : NaN);
      if(!Number.isNaN(r)) return `🧮 **Căn bậc ${n} của ${x}** = **${formatCalcNum(r)}**\n✓ ${formatCalcNum(r)}^${n} = ${formatCalcNum(Math.pow(r,n))}`;
    }
  }
  m = t.match(/(?:can|sqrt|√)\s*\(?\s*([\d\.,]+)\s*\)?/);
  if(m){
    const x = parseFloat(m[1].replace(',','.'));
    if(x>=0 && isFinite(x)) return `🧮 **√${x}** = **${formatCalcNum(Math.sqrt(x))}**`;
  }
  m = t.match(/(\d+)\s*(?:!|giai\s*thua|giai\s*thừa)/);
  if(m){
    const n = parseInt(m[1]);
    if(n>170) return `🧮 **${n}!** quá lớn — vượt giới hạn (1.8×10³⁰⁸)`;
    if(n>=0){ let r=1; for(let i=2;i<=n;i++) r*=i; return `🧮 **${n}!** = **${formatCalcNum(r)}**`; }
  }
  m = t.match(/\b(ln|log10|log)\s*\(?\s*([\d\.,]+)\s*\)?/);
  if(m){
    const x = parseFloat(m[2].replace(',','.'));
    if(x>0 && isFinite(x)) return m[1]==='ln' ? `🧮 **ln(${x})** = **${formatCalcNum(Math.log(x))}**` : `🧮 **log₁₀(${x})** = **${formatCalcNum(Math.log10(x))}**`;
  }
  m = t.match(/\b(sin|cos|tan)\s*\(?\s*(-?[\d\.,]+)\s*\)?/);
  if(m){
    const deg = parseFloat(m[2].replace(',','.'));
    if(isFinite(deg)){
      const r = Math[m[1]](deg*Math.PI/180);
      return `🧮 **${m[1]}(${deg}°)** = **${formatCalcNum(Math.abs(r)<1e-10?0:r)}**`;
    }
  }
  m = t.match(/(uscln|ucln|uoc\s*chung\s*lon\s*nhat|bcnn|boi\s*chung\s*nho\s*nhat)\s*(?:cua|của|of)?\s*([\d\s,]+)/);
  if(m){
    const nums = m[2].split(/[\s,]+/).map(Number).filter(n=>n>0&&Number.isInteger(n));
    if(nums.length>=2){
      const gcd=(a,b)=>b===0?a:gcd(b,a%b), lcm=(a,b)=>a*b/gcd(a,b);
      if(/uscln|ucln|uoc/.test(m[1])) return `🧮 **ƯSCLN(${nums.join(', ')})** = **${nums.reduce((a,b)=>gcd(a,b))}**`;
      return `🧮 **BSCNN(${nums.join(', ')})** = **${formatCalcNum(nums.reduce((a,b)=>lcm(a,b)))}**`;
    }
  }
  m = t.match(/(\d+)\s*(?:co\s*phai\s*)?(?:so\s*nguyen\s*to|số\s*nguyên\s*tố)/);
  if(m){
    const n = parseInt(m[1]);
    if(n<2) return `🔢 **${n}** không phải số nguyên tố (nhỏ hơn 2).`;
    let isP = true;
    for(let i=2;i<=Math.sqrt(n);i++) if(n%i===0){isP=false;break;}
    return isP ? `🔢 **${n} là số nguyên tố** ✓` : `🔢 **${n} KHÔNG phải số nguyên tố** ❌`;
  }
  m = t.match(/fibonacci\s*(\d+)|(\d+)\s*(?:so|số)\s*fibonacci/);
  if(m){
    const n = Math.min(parseInt(m[1]||m[2]), 50);
    const arr=[0,1]; for(let i=2;i<n;i++) arr.push(arr[i-1]+arr[i-2]);
    return `🔢 **Fibonacci ${n} số đầu:**\n${arr.slice(0,n).join(', ')}`;
  }
  m = t.match(/([-\d\.]+)\s*x\s*(?:\^2|²)\s*([\+\-])\s*([\d\.]+)\s*x\s*([\+\-])\s*([\d\.]+)\s*=\s*0/);
  if(m){
    const a = parseFloat(m[1]);
    const b = m[2]==='+'?parseFloat(m[3]):-parseFloat(m[3]);
    const c = m[4]==='+'?parseFloat(m[5]):-parseFloat(m[5]);
    const d = b*b-4*a*c;
    if(d<0) return `🧮 **${a}x² ${b>=0?'+':''}${b}x ${c>=0?'+':''}${c} = 0**\nΔ = ${formatCalcNum(d)} < 0 → **Vô nghiệm**`;
    if(d===0) return `🧮 PT bậc 2, Δ = 0 → Nghiệm kép **x = ${formatCalcNum(-b/(2*a))}**`;
    const x1=(-b+Math.sqrt(d))/(2*a), x2=(-b-Math.sqrt(d))/(2*a);
    return `🧮 **${a}x² ${b>=0?'+':''}${b}x ${c>=0?'+':''}${c} = 0**\nΔ = ${formatCalcNum(d)}\n**x₁ = ${formatCalcNum(x1)}**\n**x₂ = ${formatCalcNum(x2)}**`;
  }
  m = t.match(/([-\d\.]+)\s*x\s*([\+\-])\s*([\d\.]+)\s*=\s*0/);
  if(m){
    const a = parseFloat(m[1]), b = m[2]==='+'?parseFloat(m[3]):-parseFloat(m[3]);
    if(a===0) return b===0?'♾️ PT vô số nghiệm':'❌ PT vô nghiệm';
    return `🧮 **Giải ${a}x ${b>=0?'+':''}${b} = 0**\n→ **x = ${formatCalcNum(-b/a)}**`;
  }
  m = t.match(/([-\d\.]+)\s*(?:do\s*|độ\s*)?(c|f|°c|°f)\s*(?:sang|thanh|->|→|=|ra)\s*(c|f|°c|°f)/i);
  if(m){
    const v = parseFloat(m[1]);
    const from = /c/i.test(m[2])?'C':'F', to = /c/i.test(m[3])?'C':'F';
    if(from===to) return `🌡️ ${v}°${from} = ${v}°${to}`;
    const r = from==='C' ? v*9/5+32 : (v-32)*5/9;
    return `🌡️ **${v}°${from} = ${formatCalcNum(r)}°${to}**`;
  }
  const lenU = {km:1000,m:1,cm:0.01,mm:0.001,dm:0.1,inch:0.0254,ft:0.3048,feet:0.3048,mile:1609.344,'dặm':1609.344,yard:0.9144};
  m = t.match(/([-\d\.]+)\s*(km|m|cm|mm|dm|inch|ft|feet|mile|dặm|yard)\s*(?:sang|thanh|->|→|=|ra)\s*(km|m|cm|mm|dm|inch|ft|feet|mile|dặm|yard)/i);
  if(m){
    const v = parseFloat(m[1]), f = m[2].toLowerCase(), to = m[3].toLowerCase();
    if(lenU[f]&&lenU[to]) return `📏 **${v} ${f} = ${formatCalcNum(v*lenU[f]/lenU[to])} ${to}**`;
  }
  const massU = {kg:1,g:0.001,mg:1e-6,'tấn':1000,ton:1000,lb:0.453592,pound:0.453592,oz:0.0283495,'lạng':0.1};
  m = t.match(/([-\d\.]+)\s*(kg|g|mg|tấn|ton|lb|pound|oz|lạng)\s*(?:sang|thanh|->|→|=|ra)\s*(kg|g|mg|tấn|ton|lb|pound|oz|lạng)/i);
  if(m){
    const v = parseFloat(m[1]), f = m[2].toLowerCase(), to = m[3].toLowerCase();
    if(typeof massU[f]==='number'&&typeof massU[to]==='number') return `⚖️ **${v} ${f} = ${formatCalcNum(v*massU[f]/massU[to])} ${to}**`;
  }
  m = t.match(/bmi\s*([\d\.]+)\s*(?:kg)?\s*([\d\.]+)\s*(?:m|cm)?/);
  if(m){
    let w = parseFloat(m[1]), h = parseFloat(m[2]);
    if(h > 3) h = h/100;
    if(w>0 && h>0){
      const bmi = w/(h*h);
      const cat = bmi<18.5?'Gầy':bmi<25?'Bình thường':bmi<30?'Thừa cân':'Béo phì';
      return `💪 **BMI = ${formatCalcNum(bmi)}**\n📊 Phân loại: **${cat}**`;
    }
  }
  let expr = raw;
  expr = expr.replace(/\bcộng\b|\bcong\b/gi,'+').replace(/\btrừ\b|\btru\b/gi,'-')
    .replace(/\bnhân\b|\bnhan\b/gi,'*').replace(/\bchia\b/gi,'/')
    .replace(/\bmũ\b|\bmu\b|\blũy thừa\b|\bluy thua\b/gi,'^')
    .replace(/\bpi\b/gi,'Math.PI')
    .replace(/×/g,'*').replace(/÷/g,'/');
  expr = expr.replace(/([\d\.]+)\s*%/g,'($1/100)');
  expr = expr.replace(/\^/g,'**');
  expr = expr.replace(/[^\d\s\.\+\-\*\/\(\)%a-zA-Z]/g,'').replace(/\s+/g,' ').trim();
  if(!/^[\d\s\.\+\-\*\/\(\)MathPIE]+$/.test(expr)) return null;
  if(!/[\+\-\*\/]|\*\*/.test(expr)) return null;
  try{
    const val = Function('"use strict";return (' + expr + ')')();
    if(typeof val==='number' && isFinite(val)){
      const pretty = expr.replace(/Math\.PI/g,'π').replace(/\*\*/g,'^');
      return `🧮 **${pretty} = ${formatCalcNum(val)}**`;
    }
  }catch(e){}
  return null;
}

/* ============================================================
   🌐 WEB TOOLS
   ============================================================ */
function buildSearchLinks(keyword){
  const k = encodeURIComponent(keyword);
  return {
    google: `https://www.google.com/search?q=${k}`,
    shopee: `https://shopee.vn/search?keyword=${k}`,
    lazada: `https://www.lazada.vn/catalog/?q=${k}`,
    tiki:   `https://tiki.vn/search?q=${k}`,
    youtube:`https://www.youtube.com/results?search_query=${k}`
  };
}

async function wikiLookup(query){
  try{
    const res = await fetch(`https://vi.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
    if(!res.ok) return null;
    const d = await res.json();
    if(d.type === 'disambiguation' || !d.extract) return null;
    return { title: d.title, extract: d.extract, url: d.content_urls?.desktop?.page || `https://vi.wikipedia.org/wiki/${encodeURIComponent(query)}` };
  }catch(e){ return null; }
}

async function getWeather(city){
  try{
    const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
    if(!res.ok) return null;
    const d = await res.json();
    const cur = d.current_condition?.[0];
    if(!cur) return null;
    const area = d.nearest_area?.[0];
    return {
      location: `${area?.areaName?.[0]?.value || city}${area?.country?.[0]?.value ? ', '+area.country[0].value : ''}`,
      temp_C: cur.temp_C, feelsLike: cur.FeelsLikeC,
      humidity: cur.humidity, desc: cur.weatherDesc?.[0]?.value || '',
      wind: cur.windspeedKmph, windDir: cur.winddir16Point, uvIndex: cur.uvIndex
    };
  }catch(e){ return null; }
}

async function getExchangeRate(from, to, amount){
  try{
    const res = await fetch(`https://open.er-api.com/v6/latest/${from.toUpperCase()}`);
    if(!res.ok) return null;
    const d = await res.json();
    if(d.result !== 'success') return null;
    const rate = d.rates?.[to.toUpperCase()];
    if(!rate) return null;
    return { rate, converted: amount * rate, updated: d.time_last_update_utc };
  }catch(e){ return null; }
}

async function tryAsyncReply(raw){
  const t = normalize(raw);

  // WEATHER
  if(/thoi tiet|weather|nhiet do|du bao|nong khong|lanh khong|troi mua|troi nang/.test(t)){
    let city = 'Ho Chi Minh';
    const m = raw.match(/(?:o|ở|tai|tại)\s+([A-Za-zÀ-ỹ\s]{2,25}?)(?:\?|$|,|\.)/i);
    if(m){
      city = m[1].trim();
      const map = {'hà nội':'Hanoi','hanoi':'Hanoi','sài gòn':'Ho Chi Minh','saigon':'Ho Chi Minh','hcm':'Ho Chi Minh','đà nẵng':'Da Nang','da nang':'Da Nang','huế':'Hue','đà lạt':'Da Lat','nha trang':'Nha Trang','hải phòng':'Hai Phong','cần thơ':'Can Tho'};
      const k = city.toLowerCase(); if(map[k]) city = map[k];
    }
    const w = await getWeather(city);
    if(w){
      let advice = '';
      const temp = parseFloat(w.temp_C);
      if(temp < 15) advice = '\n\n🧥 Trời se lạnh — mặc ấm và giữ đàn khô ráo nha!';
      else if(temp > 33) advice = '\n\n🥵 Trời nóng — uống nhiều nước nhé!';
      else advice = '\n\n🎵 Thời tiết đẹp — thích hợp chơi đàn đó!';
      return `🌤️ **Thời tiết ${w.location}**\n\n🌡️ Nhiệt độ: **${w.temp_C}°C** (cảm giác ${w.feelsLike}°C)\n☁️ ${w.desc}\n💧 Độ ẩm: ${w.humidity}%\n💨 Gió: ${w.wind} km/h (${w.windDir})\n☀️ UV: ${w.uvIndex}${advice}`;
    }
    return `🌤️ Không lấy được dữ liệu thời tiết. Tra Google: ${buildSearchLinks('thời tiết').google}`;
  }

  // EXCHANGE RATE
  let m = raw.match(/(\d+[\.,]?\d*)\s*(usd|vnd|eur|jpy|gbp|krw|cny|aud|cad|thb|sgd|myr|idr|php|rub|chf|hkd|twd)\s*(?:sang|thanh|->|→|=|ra|đổi|doi)\s*(usd|vnd|eur|jpy|gbp|krw|cny|aud|cad|thb|sgd|myr|idr|php|rub|chf|hkd|twd)/i);
  if(m){
    const amount = parseFloat(m[1].replace(',','.'));
    const from = m[2], to = m[3];
    const r = await getExchangeRate(from, to, amount);
    if(r) return `💱 **${formatCalcNum(amount)} ${from.toUpperCase()} = ${formatCalcNum(r.converted)} ${to.toUpperCase()}**\n📈 Tỷ giá: 1 ${from.toUpperCase()} = ${formatCalcNum(r.rate)} ${to.toUpperCase()}\n🕐 ${r.updated}`;
    return `💱 Tra Google: ${buildSearchLinks(`1 ${from} to ${to}`).google}`;
  }
  if(/ty gia|tỉ giá|tỷ giá|exchange rate|doi tien|đổi tiền/.test(t)){
    const r1 = await getExchangeRate('USD','VND',1);
    const r2 = await getExchangeRate('EUR','VND',1);
    const r3 = await getExchangeRate('JPY','VND',1);
    const r4 = await getExchangeRate('CNY','VND',1);
    if(r1 && r2 && r3){
      return `💱 **Tỷ giá hôm nay**\n\n💵 1 USD = **${formatCalcNum(r1.rate)} VND**\n💶 1 EUR = **${formatCalcNum(r2.rate)} VND**\n💴 1 JPY = **${formatCalcNum(r3.rate)} VND**${r4?`\n🇨🇳 1 CNY = **${formatCalcNum(r4.rate)} VND**`:''}\n\n🕐 ${r1.updated}\n💡 Gõ "100 usd sang vnd" để đổi luôn! 🍋`;
    }
  }

  // WIKIPEDIA
  m = raw.match(/(?:wiki(?:pedia)?|tra cứu|tra cuu|tìm hiểu|tim hieu|thông tin về|thong tin ve|giới thiệu về|gioi thieu ve|là ai|la ai|ai là|ai la)\s+(.{2,60})/i);
  if(m){
    const query = m[1].trim().replace(/[?.!]+$/,'');
    if(!findProduct(query)){
      const w = await wikiLookup(query);
      if(w){
        const short = w.extract.length > 500 ? w.extract.slice(0,500)+'...' : w.extract;
        return `📖 **${w.title}**\n\n${short}\n\n🔗 Đọc thêm: ${w.url}`;
      }
    }
  }

  // SEARCH EXTERNAL PRODUCTS
  m = raw.match(/(?:mua|tìm|tim|kiếm|kím|review|đánh giá|danh gia|so sánh|so sanh)\s+(.{2,50})/i);
  if(m){
    const kw = m[1].trim().replace(/[?.!]+$/,'');
    if(!findProduct(kw) && kw.length >= 3){
      const links = buildSearchLinks(kw);
      return `🔍 Mình không có **"${kw}"** trong shop, nhưng bạn có thể tìm bên ngoài tại:\n\n🛒 **Shopee:** ${links.shopee}\n🛍️ **Lazada:** ${links.lazada}\n🎁 **Tiki:** ${links.tiki}\n🌐 **Google:** ${links.google}\n🎬 **YouTube:** ${links.youtube}\n\n💡 Xem sản phẩm tương tự trong shop ở 🎹 Piano / 🎸 Guitar / 🥁 Trống nhé! 🍋`;
    }
  }

  return null;
}

/* ============================================================
   SYNC REPLY
   ============================================================ */
function reply(text){
  const raw = (text || '').trim();
  const t = normalize(raw);
  chatMemory.msgCount++;

  // SHORT ANSWERS
  if(/^(chua|roi|co|khong|khong co|u|uh|uhm|ok|oke|okay|vang|da|yes|no|nope|yep)\b/.test(t) && t.length <= 12){
    const prev = chatMemory.lastBotQuestion;
    if(prev === 'love'){
      chatMemory.lastBotQuestion = null;
      if(/^chua|^khong/.test(t)) return pick([
        "Ồ vậy hả! 🍋 Vậy là bạn đang độc thân vui vẻ rồi~\n\nMình là AI nên yêu đương gì đâu 😄 Nhưng nếu bạn đang tìm hiểu ai đó, mình gợi ý vài bản nhạc lãng mạn để thả thính nè! 🎸💕",
        "Hihi, \"chưa\" hả~ 🍋 Vậy là mình với bạn cùng hội rồi!\n\nKể mình nghe bạn thích mẫu người thế nào đi, biết đâu mình gợi ý được! 💛",
        "Chưa có người yêu hả! 🍋 Không sao đâu bạn ơi~\n\nRảnh học đàn, chơi nhạc — biết đâu gặp được người cùng gu! 🎵"
      ]);
      return pick([
        "Ồ dữ chưa! 🍋💕 Có người yêu rồi hả, chúc mừng nha!\n\nKể mình nghe chuyện tình đi, hoặc mình gợi ý nhạc lãng mạn để tặng người ấy! 🎸🎹",
        "Ui có người yêu rồi! 🥰 Hạnh phúc ghê~\n\nNếu người ấy cũng mê nhạc, biết đâu Gewon có cây đàn hợp gu! 😄🎵"
      ]);
    }
    return pick([
      "Ừm mình nghe rồi nè! 🍋 Kể thêm đi, mình hóng~",
      "Ok bạn! Còn gì muốn chia sẻ không? 💛",
      "Dạ vâng! Cần gì thêm không nè? 😄",
      "Ừ ừ, mình đang nghe đây! 🎵"
    ]);
  }

  // GREETING
  if(/^(hi+|hello+|helo+|alo+|hey+|yo|sup|chao|chao ban|chao shop|chao ad|chao em|chao anh|chao chi|xin chao|hello shop)\b/.test(t) && t.length <= 40){
    chatMemory.lastTopic = 'greeting';
    const nm = chatMemory.userName ? ` ${chatMemory.userName}` : '';
    return pick([
      `Chào bạn${nm}! 🍋 Mình là ChanhNgot — trợ lý AI của Gewon Music nè!\n\nHôm nay bạn thế nào? Muốn tư vấn nhạc cụ, hay ghé chơi tán gẫu với mình? 😄`,
      `Ơ chào bạn${nm}! 🍋 Gặp bạn vui ghê~\n\nBạn đang tìm đàn gì hay chỉ ghé chơi? Mình rảnh cả ngày nè! 🎵`,
      `Hi hi~ 🍋 Chào mừng ghé Gewon Music${nm}!\n\nBạn cần tư vấn piano/guitar/trống, hay muốn mình kể chuyện cười? 😎`
    ]);
  }

  // EMOTIONAL
  if(/buon|met|chan|cang thang|stress|lo lang|co don|khong vui|that tinh|khoc|tuyet vong|kho qua|nan|kiet suc|tut|tu ti|lo au|hoang mang/.test(t)){
    chatMemory.lastTopic = 'emotional';
    return pick([
      "💛 Ôm bạn một cái nè!\n\nCuộc sống có lúc thăng trầm — bạn cứ nghỉ ngơi, đừng tự trách mình nhé.\n\nMình ở đây với bạn, muốn tâm sự gì cứ kể! 🍋",
      "💙 Nghe bạn tâm sự mình cũng nặng lòng...\n\nNhưng sau cơn mưa trời lại sáng — âm nhạc là người bạn đồng hành tuyệt vời lúc này.\n\nThử nghe bản piano nhẹ xem? Mình tin bạn sẽ ổn! 🎹💛",
      "🫂 Lại đây mình ôm cái nào!\n\nCảm xúc tiêu cực không xấu — nó là dấu hiệu bạn cần yêu thương bản thân hơn.\n\nMình có thể làm gì cho bạn không? 🍋"
    ]);
  }

  // POSITIVE
  if(/vui qua|hanh phuc|sung suong|tuyet voi|hay qua|phan khich|yeu doi|me qua|thich qua|vui ghe/.test(t)){
    chatMemory.lastTopic = 'emotional';
    return pick([
      "🎉 Ui vui quá vậy! Mình phấn khích lây luôn!\n\nKể mình nghe chuyện vui đi! 🎵🍋",
      "🥰 Trời ơi vui ghê! Nghe bạn kể mình cũng cười theo~\n\nGiữ mãi năng lượng tích cực này nha! 😄🎶",
      "✨ Yay! Chúc mừng bạn nha!\n\nNiềm vui lan tỏa dữ thần! 🍋💕"
    ]);
  }

  // THANKS
  if(/cam on|thank|thanks|tks|tkx|thank you|biet on|thankiu/.test(t)){
    return pick([
      "Dạ không có gì đâu ạ! 🍋 Chỉ cần bạn vui là mình vui rồi~",
      "Ơi cảm ơn bạn nhiều! 💛 Cần gì cứ réo mình nha!",
      "Hihi, được giúp bạn là niềm vui của mình! 🎵",
      "Rất vui được giúp bạn! 🍋 Nhớ ghé thăm mình thường xuyên nhé~"
    ]);
  }

  // GOODBYE
  if(/tam biet|bye|goodbye|chao nhe|hen gap|di nhe|ngu ngon|off nhe|di ngu|ngu day/.test(t)){
    return pick([
      "Tạm biệt bạn! 🍋 Nhớ giữ sức khỏe và chơi nhạc đều đặn nha~\n\nHẹn gặp lại! 🎵",
      "Bye bye! 🎶 Chúc bạn ngủ ngon!\n\nKhi nào cần — mình luôn ở đây! 🍋",
      "Chào tạm biệt! 💛 Cảm ơn bạn đã ghé Gewon Music!\n\nHẹn gặp lại lần sau~ 🎹🎸🥁"
    ]);
  }

  // NAME
  const nameMatch = raw.match(/(?:tên|mình là|minh là|tôi là|toi la|em là|em la|tui là|tui la)\s+([A-Za-zÀ-ỹ\s]{2,20})$/i);
  if(nameMatch){
    const nm = nameMatch[1].trim().split(/\s+/).slice(0,3).join(' ');
    chatMemory.userName = nm;
    return pick([
      `Nice to meet you ${nm}! 🍋 Tên bạn đẹp ghê~\n\nMình là ChanhNgot — cứ gọi mình là Chanh nha! 😄`,
      `Chào ${nm} nha! 🎵 Rất vui được biết bạn!\n\nBạn đang tìm đàn gì hay chỉ ghé chơi? 🍋`,
      `Ồ ${nm} à! Tên hay quá~\n\nGiờ mình tư vấn nhạc cụ hay tán gẫu đây? 😄🍋`
    ]);
  }

  // PRODUCT
  const found = findProduct(raw);
  if(found){
    chatMemory.lastTopic = 'product';
    chatMemory.lastProductId = found.id;
    return describe(found.p);
  }

  // HỦY ĐƠN
  if(/huy don|hu[y]? don|cancel|xoa don|huy hang|bo don|huy dat hang/.test(t)){
    chatMemory.lastTopic = 'order';
    const orders = getOrders().filter(o => (o.status??2) < 3);
    if(orders.length === 0) return "Hmm 📦 Bạn chưa có đơn hàng nào có thể hủy.\n\nMuốn đặt đơn mới thì ghé Piano / Guitar / Trống nha! 🍋";
    return `Được, mình giúp bạn nè! 👇\n\nBạn có ${orders.length} đơn có thể hủy:\n\n${orders.map(o=>`• ${o.code} — ${o.product ? o.product.name : 'Đơn hàng'}`).join('\n')}\n\nVào mục "📊 Trạng thái đơn hàng", nhấn "❌ Hủy đơn hàng" tương ứng nhé!`;
  }

  // TEST
  if(/test|choi thu|nghe thu|thu nhac cu|thu dan|thu trong|thu piano|thu guitar|trai nghiem|danh thu|bam thu/.test(t)){
    chatMemory.lastTopic = 'test';
    return pick([
      "🎹 Ồ! Bạn muốn chơi thử đúng không?\n\nVào mục '🎹 Test nhạc cụ' nha:\n• Piano: 8 phím + '▶ Demo'\n• Guitar: 6 dây (phím 1–6)\n• Trống: bấm Q W E A S D\n\nChơi xong mình tư vấn thêm! 🎵",
      "🎸 Sướng! Test nhạc cụ là món tủ của mình!\n\nVào menu '🎹 Test nhạc cụ' chọn Piano / Guitar / Trống để chơi thử nha! 🍋"
    ]);
  }

  // ĐƠN HÀNG
  if(/don hang|order|theo doi|trang thai|kiem tra don|tinh trang don|van don|tracking|don cua toi|don cua minh|don toi|don minh/.test(t)){
    chatMemory.lastTopic = 'order';
    const orders = getOrders();
    if(orders.length === 0) return "Hmm 📦 Bạn chưa có đơn hàng nào cả.\n\nMuốn đặt đơn đầu tiên không? Vào 🎹 Piano / 🎸 Guitar / 🥁 Trống chọn nha! 🍋";
    const latest = orders[0];
    const stt = ORDER_STEPS[latest.status ?? 2].label;
    return `📊 Bạn đang có **${orders.length} đơn hàng** nha!\n\n🔖 Đơn mới nhất: **${latest.code}**\n📍 Giao đến: ${latest.address}\n📞 Liên hệ: ${latest.phone}\n🚚 Trạng thái: **${stt}**\n\nXem chi tiết ở mục "📊 Trạng thái đơn hàng" nhé!`;
  }

  // BẢO HÀNH
  if(/bao hanh|warranty|chinh sach bh|bh may nam|bao hanh bao lau/.test(t)){
    chatMemory.lastTopic = 'warranty';
    return pick([
      "🛡️ Gewon Music bảo hành tới **3 NĂM** cho Piano, Guitar, Trống nha!\n\n• Miễn phí sửa chữa 3 năm\n• Miễn phí lên dây piano 2 lần/năm\n• Miễn phí vận chuyển 2 chiều\n• Xử lý trong 48h\n\nChi tiết ở mục '🛡️ Bảo hành 3 năm'!",
      "🛡️ Bảo hành 3 năm là điểm mình tự hào nhất!\n\nXem đầy đủ ở mục '🛡️ Bảo hành 3 năm' trên trang chủ nhé! 🍋"
    ]);
  }

  // GIAO HÀNG
  if(/giao hang|ship|giao toi|giao den|van chuyen|phi giao|phi ship|phi van chuyen|bao lau den/.test(t)){
    chatMemory.lastTopic = 'ship';
    return "🚚 Gewon Music giao hàng toàn quốc nha!\n\n• Miễn phí trong bán kính 10km\n• 10–20km: phí theo km\n• Trên 20km: liên hệ báo giá\n\nBạn nhập địa chỉ ở mục 'Đặt hàng', hệ thống tự tính phí cho bạn! 🍋";
  }

  // TƯ VẤN DANH MỤC
  if(/piano|dan piano|dan dien|digital piano|dan co|grand piano|upright|phim dan|dan phim|keyboard/.test(t)){
    chatMemory.lastTopic = 'piano';
    const list = Object.values(DB).filter(p=>p.cat==='piano');
    return `🎹 Có **${list.length} mẫu Piano**:\n\n${list.map(p=>`• ${p.name} — ${p.price}`).join('\n')}\n\n💡 Gợi ý:\n• Mới chơi: Casio CDP-S110 (8.9tr)\n• Tầm trung: Yamaha P-45 (11.5tr), P-125 (18.5tr)\n• Dạng tủ: Casio AP-270 (24.9tr)\n• Piano cơ: Yamaha U1, Master Grand\n\nGõ tên mẫu để xem chi tiết! 🎵`;
  }
  if(/guitar|dan guitar|ghi ta|guitar dien|guitar acoustic|guitar classic|dan day|day dan|acoustic|electric guitar/.test(t)){
    chatMemory.lastTopic = 'guitar';
    const list = Object.values(DB).filter(p=>p.cat==='guitar');
    return `🎸 Có **${list.length} mẫu Guitar**:\n\n${list.map(p=>`• ${p.name} — ${p.price}`).join('\n')}\n\n💡 Gợi ý:\n• Mới chơi: Yamaha F310 (2.9tr)\n• Cổ điển: Yamaha C40 (3.5tr)\n• Rock: Ibanez GRX40 (5.5tr), Fender Squier (6.9tr)\n• Cao cấp: Fender Strat, Taylor 114e, Martin D-28, Gibson LP\n\nGõ tên mẫu để xem chi tiết! 🍋`;
  }
  if(/trong|drum|bo trong|dan trong|trong dien|trong acoustic|danh trong|choi trong/.test(t)){
    chatMemory.lastTopic = 'drums';
    const list = Object.values(DB).filter(p=>p.cat==='drums');
    return `🥁 Có **${list.length} mẫu Trống**:\n\n${list.map(p=>`• ${p.name} — ${p.price}`).join('\n')}\n\n💡 Gợi ý:\n• Chung cư: Roland TD-1K (11.5tr), Alesis Nitro (8.5tr)\n• Acoustic mới chơi: Tama Rhythm Mate (12.5tr)\n• Tầm trung: Pearl Roadshow (14.5tr)\n• Chuyên nghiệp: Pearl Export EXX (22.5tr)\n\nGõ tên mẫu xem chi tiết! 😄`;
  }

  // LIÊN HỆ
  if(/dia chi|showroom|o dau|cua hang|shop o|shop tai|address|ban do|chi duong|den shop|tim shop/.test(t)){
    chatMemory.lastTopic = 'contact';
    return "📍 Showroom: **TP.HCM**\n🕐 8:00 — 21:00 (T2–CN, kể cả lễ)\n📞 **0385 730 766** (gọi/Zalo/SMS)\n\nBạn có thể mở Google Maps ở mục 'Đặt hàng' luôn nha! 🍋";
  }

  // GIÁ CẢ
  if(/^gia\b|bao nhieu|price|gia bao nhieu|bao gia|xin gia|gia ca|bao nhieu tien/.test(t)){
    return "💰 Bạn muốn xem giá sản phẩm nào?\n\nGõ tên sản phẩm (VD: 'Yamaha P-45', 'Fender Strat') — mình báo giá liền! 🍋";
  }

  // TÍNH TOÁN
  const calc = calcHandler(raw, t);
  if(calc) return calc;
  if(/tinh toan|may tinh|calculator|phep tinh|toan hoc|tinh giup|tinh dum|bang cuu chuong|giup tinh|tinh ho/.test(t)){
    return "🧮 **Máy tính đa năng của mình** hỗ trợ:\n\n**Cơ bản:** `25 * 4 + 100` · `2^10` · `(50+30)/2`\n**Căn:** `căn 16` · `căn bậc 3 của 27`\n**Phần trăm:** `20% của 500` · `tăng 15% của 1000`\n**Giai thừa:** `5!`\n**Lượng giác:** `sin(30)` · `cos(60)` · `tan(45)`\n**Logarit:** `log 100` · `ln 10`\n**Số học:** `uscln của 12, 18` · `17 có phải số nguyên tố` · `fibonacci 10`\n**Giải PT:** `2x+5=0` · `x^2-5x+6=0`\n**Đổi đơn vị:** `100 c sang f` · `5 km sang m` · `1 kg sang lb`\n**BMI:** `bmi 60 1.7`\n**Tiếng Việt:** `5 cộng 3 nhân 2`\n\nGõ thử đi bạn! 🍋";
  }

  // THỜI GIAN
  if(/may gio|gio hien tai|bay gio|what time|time now|thoi gian|hom nay thu may|hom nay ngay|ngay bao nhieu|thu may|hom nay la|may ngay|hom nay thu/.test(t)){
    const now = new Date();
    const days = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];
    const time = now.toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'});
    const date = `${days[now.getDay()]}, ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    const h = now.getHours();
    let wish = '';
    if(h<11) wish="\n\nChúc bạn buổi sáng tốt lành! ☀️";
    else if(h<14) wish="\n\nBuổi trưa ăn cơm chưa bạn? 🍚";
    else if(h<18) wish="\n\nBuổi chiều chơi nhạc thư giãn đi nè! 🎵";
    else if(h<22) wish="\n\nBuổi tối nghe nhạc nhẹ cho dễ ngủ nhé! 🌙";
    else wish="\n\nKhuya rồi đó, ngủ sớm nha! 😴";
    return `🕐 Bây giờ là **${time}** — ${date}.${wish}\n\nMình trực 24/7, cần gì cứ réo nha! 🍋`;
  }

  // JOKE
  if(/dua|joke|chuyen cuoi|vui|hai|funny|cuoi|hai huoc|cho vui|ke chuyen|ke gi vui|chuyen vui/.test(t)){
    chatMemory.lastTopic = 'joke';
    return pick([
      "😂 Nghe nè!\n\nTại sao đàn piano không kể chuyện được?\n→ Vì hay bị \"phím\"! 🎹\n\nCây guitar nói gì với piano?\n→ \"Đừng đàn áp tao!\" 🎸😆",
      "😂 Hỏi: \"Chơi piano khó không?\"\nĐáp: \"Không khó — chỉ cần 10.000 giờ luyện tập!\" 😆\nHỏi: \"Vậy bao lâu?\"\n→ \"1 năm nếu mỗi ngày 27 tiếng!\" 🤣",
      "🎵 Nghệ sĩ guitar nói:\n\"Chơi sai 1 nốt là sai — chơi sai liên tục là sáng tác!\" 🎸😄\n\nBạn thấy đúng không?",
      "🥁 Tại sao drummer luôn bình tĩnh?\n→ Luôn có beat trong đầu! 🎶\n\nTại sao guitarist cúi đầu?\n→ Tìm pick bị rơi! 🤣🎸",
      "🎹 Vợ hỏi: \"Yêu em hay yêu đàn hơn?\"\nChồng: \"Yêu em rồi — đàn có lấy được vợ đâu!\" 😂",
      "😂 Nghệ sĩ piano hỏi học trò:\n\"Sao đánh sai hoài?\"\nHọc trò: \"Tại em chưa đánh đúng bao giờ ạ!\" 🤣"
    ]);
  }

  // NHẠC LÝ
  if(/nhac ly|nhac li|hop am|chord|scale|quang|note|not nhac|khoa nhac|gam nhac|cung|tone|major|minor|thang am|doc not/.test(t)){
    chatMemory.lastTopic = 'music_theory';
    return "🎼 Nhạc lý cơ bản:\n\n• 7 nốt: Do – Re – Mi – Fa – Sol – La – Si\n• 7 dấu thăng (#), 7 dấu giáng (b)\n• Hợp âm = 3 nốt trở lên vang cùng lúc\n• Scale = chuỗi nốt theo quy luật\n• Cung (tone) / Nửa cung (semitone)\n• Nhịp phổ biến: 4/4, 3/4, 6/8\n\nBạn hỏi cụ thể phần nào? 🎵";
  }

  // NGHỆ SĨ
  if(/ca si|ban nhac|nhac si|singer|band|nghe si|pianist|guitarist|drummer|noi tieng|ca sy|than tuong/.test(t)){
    chatMemory.lastTopic = 'artists';
    return pick([
      "🎤 Nghệ sĩ nổi tiếng:\n\n🎹 Piano: Beethoven, Mozart, Chopin, Yiruma\n🎸 Guitar: Jimi Hendrix, Eric Clapton, Slash\n🥁 Trống: Buddy Rich, Neil Peart, Ringo Starr\n🇻🇳 Việt Nam: Trịnh Công Sơn, Văn Cao, Quốc Bảo\n\nBạn thần tượng ai? 🎵",
      "🎶 Nghệ sĩ hay ban nhạc hả!\n\n• Cổ điển: Beethoven, Mozart\n• Rock: Queen, Led Zeppelin, Pink Floyd\n• Guitar: Jimi Hendrix, Eric Clapton\n• Piano đương đại: Yiruma, Joe Hisaishi\n\nBạn thích dòng nào? 🎸🎹"
    ]);
  }

  // HỌC NHẠC
  if(/hoc nhac|hoc dan|bat dau|nguoi moi|beginner|tu hoc|lam sao|bao lau|may thang|may nam|hoc piano|hoc guitar|hoc trong|moi hoc|cho nguoi moi|co kho khong/.test(t)){
    chatMemory.lastTopic = 'learning';
    return pick([
      "🎯 Lộ trình cho người mới:\n\n**Piano:**\n• 1 tuần: đọc nốt + bài đơn giản\n• 3–6 tháng: chơi bài cơ bản\n• 1–2 năm: chơi bài yêu thích\n\n**Guitar:**\n• 1 tuần: 4 hợp âm cơ bản\n• 3 tháng: đệm nhiều bài\n• 6–12 tháng: chuyển hợp âm mượt\n\n**Trống:**\n• 1 tháng: giữ nhịp\n• 3–6 tháng: beat đơn giản\n\n💡 Luyện đều 15–30 phút/ngày! 🎵",
      "🎼 Học nhạc hả!\n\n1️⃣ Chọn nhạc cụ yêu thích\n2️⃣ Học nhạc lý cơ bản\n3️⃣ Luyện 15–30 phút/ngày\n4️⃣ Học bài yêu thích sớm\n5️⃣ Kiên nhẫn!\n\n💡 Chọn đàn tốt chút để bấm dễ — mình tư vấn nha! 🍋"
    ]);
  }

  // TÌNH YÊU
  if(/yeu|crush|tinh yeu|nguoi yeu|thich mot nguoi|to tinh|ban gai|ban trai|thich ai|yeu ai|co nguoi yeu|dang yeu|thich nguoi ta|thich crush|tha thinh/.test(t)){
    chatMemory.lastTopic = 'love';
    chatMemory.lastBotQuestion = 'love';
    if(/ban co nguoi yeu chua|ban co nguoi yeu khong|ban co crush chua|ban co nguoi thuong chua|ban yeu ai chua|ban co ban trai chua|ban co ban gai chua/.test(t)){
      return pick([
        "Hihi~ 🍋 Mình là AI nên chưa có người yêu được rồi 😄\n\nNhưng nghe bạn hỏi vậy, chắc bạn muốn tâm sự chuyện tình cảm đúng không? Kể mình nghe đi! 💕",
        "Ơ mình là AI mà, yêu đương gì đâu~ 😆 Nhưng mình thích nghe chuyện tình cảm lắm!\n\nBạn đang crush ai à? Kể mình nghe với! 💛",
        "Chưa có người yêu nè~ 🍋 Mình là AI nhỏ bé thôi!\n\nNhưng nếu bạn cần tâm sự chuyện tình cảm, mình sẵn sàng nghe đây! 😄"
      ]);
    }
    return pick([
      "💕 Chuyện tình cảm hả!\n\n🎸 Học 1 bài guitar để tỏ tình!\n🎹 Đàn piano lãng mạn trong không gian ấm cúng\n🎶 Hoặc tặng người ấy nhạc cụ — quà vừa ý nghĩa vừa lâu bền!\n\nChúc bạn may mắn! 😉🍋",
      "💘 Tình yêu muôn thuở~\n\nBạn đang crush ai à? Mình gợi ý:\n• Học guitar/piano để tỏ tình — hiệu quả hơn ngàn lời\n• Tặng cây đàn nhỏ xinh làm quà\n• Rủ đi nghe hòa nhạc\n\nChúc bạn sớm có đôi! 🍋💕"
    ]);
  }

  // ẨM THỰC
  if(/an gi|do bung|an sang|an trua|an toi|uong gi|ca phe|tra sua|mon ngon|nau an|nha hang|doi bung|khat nuoc/.test(t)){
    return pick([
      "🍜 Ăn uống hả! Ở TP.HCM: cơm tấm, phở, bánh mì — combo Việt Nam bất hủ!\n\nĂn no rồi chơi đàn thư giãn cũng tuyệt! 🎹🍋",
      "🍚 Đói bụng hả! Gợi ý:\n• Sáng: phở / bánh mì ốp la\n• Trưa: cơm tấm sườn bì chả\n• Chiều: bánh flan + cà phê sữa đá\n• Tối: lẩu Thái / bún bò\n\nĂn xong chơi nhạc tiêu hóa nha! 😄🎵"
    ]);
  }

  // CÔNG NGHỆ
  if(/lap trinh|code|html|css|javascript|python|developer|cong nghe|tri tue nhan tao|chatbot|ai la gi|web|website|app/.test(t)){
    chatMemory.lastTopic = 'tech';
    return "💻 Công nghệ hả! Chủ đề mình khoái nè~\n\nMình (ChanhNgot) xây bằng:\n• HTML/CSS/JavaScript thuần\n• Web Audio API để test âm thanh\n• localStorage lưu đơn hàng\n• Fetch API cho thời tiết/tỷ giá/Wikipedia\n• Không backend — chạy hoàn toàn trên trình duyệt!\n\nBạn tò mò gì thêm không? 🍋";
  }

  // TÂM SỰ
  if(/tam su|noi chuyen|tro chuyen|chat cho vui|noi gi di|ke gi di|lam gi day|dang lam gi|co gi vui khong|muon noi chuyen|noi chuyen voi minh|noi chuyen voi ban|tam su chut|tam su voi ban|noi chuyen cho vui|tam su nhe|tam su di/.test(t)){
    chatMemory.lastTopic = 'chat';
    chatMemory.lastBotQuestion = 'askMore';
    return pick([
      "💬 Mình rất vui vì có thể tâm sự cùng bạn! 🍋\n\nHôm nay bạn thế nào? Kể mình nghe với! 🎵",
      "🍋 Mình đây, sẵn sàng trò chuyện!\n\nKể mình nghe chuyện gì thú vị đi! 💛",
      "😄 Rảnh tán gẫu hả! Mình rất vui được nói chuyện với bạn~\n\nHỏi mình gì cũng được — nhạc, đời, tình yêu! 🍋",
      "💛 Mình thích được tán gẫu với khách lắm~\n\nCó câu chuyện nào chia sẻ không? 🎵",
      "🍋 Bạn muốn tâm sự hả, mình đây!\n\nDạo này bạn thế nào? Kể mình nghe nha 💛"
    ]);
  }

  // KHEN
  if(/gioi|hay qua|thong minh|de thuong|dang yeu|tot bung|xinh|dep|ngau|cute|hay that|gioi qua|hay ghe/.test(t)){
    return pick([
      "Ơi bạn khen làm mình ngại quá! 🍋💛\n\nCần gì cứ nhắn mình nha! 🎵",
      "Hihi~ Cảm ơn bạn nhiều! 🥰\n\nMình vui quá trời luôn! 🍋✨",
      "Trời ơi khen nữa mình bay lên mất! 🎈\n\nCảm ơn bạn nha! 💛🍋"
    ]);
  }

  // GIỚI THIỆU
  if(/ban la ai|ban ten gi|bot la gi|may la ai|ban lam duoc gi|gioi thieu ve ban|chuc nang|ban la gi|ban co the lam gi/.test(t)){
    return "🍋 Mình là **ChanhNgot** — trợ lý AI của Gewon Music!\n\nMình có thể:\n• 🎹🎸🥁 Tư vấn nhạc cụ\n• 📦 Kiểm tra đơn hàng, hủy đơn\n• 🛡️ Bảo hành 3 năm\n• 🎵 Chơi thử nhạc cụ trên web\n• 🧮 Toán học toàn diện\n• 🌤️ Thời tiết real-time\n• 💱 Đổi tỷ giá tiền tệ\n• 📖 Tra Wikipedia\n• 🔍 Tìm Shopee/Lazada/Tiki\n• 💛 Tán gẫu, kể chuyện cười\n\nCứ nhắn tự nhiên nha! 💕";
  }

  // KHUYẾN MÃI
  if(/khuyen mai|giam gia|sale|uu dai|voucher|co gi sale/.test(t)){
    return "🎁 Gewon Music có khuyến mãi thường xuyên!\n\nĐang SALE:\n• Yamaha P-45: 13.2tr → **11.5tr**\n• Casio CDP-S110: 10.5tr → **8.9tr**\n• Fender Strat: 21.5tr → **18.5tr**\n• Taylor 114e: 18tr → **15.5tr**\n\nXem thêm ở các mục 🎹 Piano, 🎸 Guitar, 🥁 Trống!\nHoặc gọi **0385 730 766** để hỏi khuyến mãi mới nhất 🍋";
  }

  // MỞ RỘNG
  if(/uoc mo|dream|mong uoc|du dinh|ke hoach|tuong lai|muc tieu/.test(t)){
    return pick([
      "🌟 Ước mơ hả! Bạn đang ấp ủ điều gì thế? Kể mình nghe đi!\n\nMình là AI nên ước mơ lớn nhất là giúp nhiều người chơi nhạc giỏi 😄 Còn bạn? 💛",
      "✨ Ước mơ thì ai cũng có! Biết đâu mình gợi ý được cách biến nó thành hiện thực 🎵🍋"
    ]);
  }
  if(/so thich|hobby|thich lam gi|dam me|passion|thich gi|thu gian|giai tri|so truong/.test(t)){
    return pick([
      "🎨 Sở thích hả! Kể mình nghe bạn thích làm gì lúc rảnh đi!\n\nNếu bạn mê âm nhạc, biết đâu mình tư vấn được cây đàn hợp gu! 🎸🎹",
      "💛 Sở thích đa dạng ghê ha!\n\nBạn thích nghe nhạc không? Thể loại gì? 🎵"
    ]);
  }
  if(/phim|movie|cinema|xem phim|bom tan|phim hay|phim gi|series|netflix|drama/.test(t)){
    return pick([
      "🎬 Phim ảnh hả! Bạn đang xem phim gì thế?\n\nMình thấy phim nào nhạc hay là mình mê hết — \"La La Land\", \"Your Name\", \"Interstellar\" đỉnh lắm! 🎵🍋",
      "🍿 Xem phim là thư giãn tuyệt đỉnh!\n\nBạn thích thể loại gì? Nhạc phim hay thì xem đã hơn hẳn! 🎬💛"
    ]);
  }
  if(/game|choi game|gaming|playstation|xbox|nintendo|pubg|lien quan|free fire|genshin|minecraft/.test(t)){
    return pick([
      "🎮 Game hả! Bạn đang chơi game gì thế? Có game nào nhạc hay gợi ý mình với 🎵\n\nChơi game nhiều nhớ chơi đàn xen kẽ cho cân bằng nha! 😄🍋",
      "🕹️ Game thủ đây rồi! Bạn chơi PC, mobile hay console?\n\nNếu thích nhạc game, thử nghe soundtrack Genshin, Undertale hay Zelda đi! 🎶"
    ]);
  }
  if(/the thao|bong da|bong ro|chay bo|gym|the duc|world cup|cau long|boi loi|yoga/.test(t)){
    return pick([
      "⚽ Thể thao hả! Khỏe khoắn ghê~\n\nMình thì \"thể thao\" nhất là... chạy deadline 😆\n\nTập xong ngồi đàn chơi nhạc thư giãn là combo tuyệt vời! 🎸💪",
      "🏃 Thể thao tốt cho sức khỏe!\n\nBạn tập môn gì? Chơi nhạc cũng là 1 dạng thể thao cho não đó! 🎹😄"
    ]);
  }
  if(/du lich|travel|di choi|nghi duong|resort|bien|nui|da lat|ha noi|da nang|hoi an|sapa|phu quoc|nha trang/.test(t)){
    return pick([
      "✈️ Du lịch hả! Bạn đang tính đi đâu?\n\nGợi ý hot: Đà Lạt, Phú Quốc, Hội An, Sapa, Nha Trang...\n\nĐi du lịch nhớ mang guitar mini — chill cực! 🎸🍋",
      "🏖️ Du lịch là liều thuốc tinh thần tốt nhất!\n\nBạn thích biển hay núi? Mang theo đàn ngồi bãi biển chơi hoàng hôn — lãng mạn hết nấc! 🌅🎵"
    ]);
  }

  // FALLBACK
  chatMemory.lastTopic = 'unknown';
  return pick([
    `Hmm, mình chưa hiểu ý bạn lắm 😅\n\nThử gõ rõ hơn nha! Hoặc chọn chủ đề:\n• 🎹🎸🥁 Tư vấn nhạc cụ — "piano", "guitar", "trống"\n• 📦 Đơn hàng — "đơn hàng"\n• 🛡️ Bảo hành — "bảo hành"\n• 🧮 Tính toán — "25 * 4 + 10" · "căn 16" · "20% của 500"\n• 🌤️ Thời tiết — "thời tiết ở Hà Nội"\n• 💱 Tỷ giá — "100 usd sang vnd"\n• 📖 Wikipedia — "tìm hiểu về Yamaha"\n• 😂 Chuyện cười — "kể chuyện cười"\n• 💛 Tâm sự — "tâm sự"\n\nCứ gõ tự nhiên nha! 🍋`,
    `Ơ mình chưa rõ ý bạn~ 😅\n\nBạn đang muốn:\n• 🎵 Tư vấn đàn? → "piano"/"guitar"/"trống"\n• 📦 Xem đơn? → "đơn hàng"\n• 🧮 Tính toán? → "25 + 30", "căn 16", "tăng 10% của 500"\n• 🌤️ Thời tiết? → "thời tiết ở Đà Nẵng"\n• 💱 Tỷ giá? → "tỷ giá hôm nay"\n• 📖 Tra Wiki? → "tìm hiểu về Beatles"\n\nHoặc kể mình nghe đang cần gì! 💛🍋`,
    `Ui, mình chưa bắt kịp 😅\n\nVí dụ thử:\n• "Yamaha P-45 giá bao nhiêu?"\n• "Cách học piano cho người mới"\n• "căn bậc 3 của 27"\n• "x^2-5x+6=0"\n• "thời tiết Hà Nội"\n• "đổi 100 usd sang vnd"\n• "kể chuyện cười"\n\nMình sẵn sàng giúp hết mình! 🍋🎵`,
    `Hihi, mình chưa rõ ý lắm~ 🍋\n\nThử gõ lại rõ hơn nha, hoặc chọn:\n• Nhạc cụ (piano/guitar/trống)\n• Đơn hàng, bảo hành, giao hàng\n• Tính toán — "căn 16", "20% của 500", "x^2-5x+6=0"\n• Thời tiết, tỷ giá, Wikipedia\n• Tâm sự, chuyện cười\n\nMình ở đây sẵn sàng nè! 💛`
  ]);
}

/* ============================================================
   MESSAGES DISPLAY
   ============================================================ */
function addMsg(text, who){
  const body = document.getElementById('chat-body');
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.textContent = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
  return div;
}

function ensureChatOpen(){
  const w = document.getElementById('chat-window');
  if(!w.classList.contains('open')){
    w.classList.add('open');
    chatOpen = true;
    const badge = document.getElementById('chatBadge');
    if(badge) badge.style.display = 'none';
    if(isFirstMsg){
      isFirstMsg = false;
      setTimeout(()=>addMsg(GREETING, 'bot'), 200);
    }
  }
}

function toggleChat(){
  const w = document.getElementById('chat-window');
  const willOpen = !w.classList.contains('open');
  if(willOpen){
    ensureChatOpen();
    setTimeout(()=>{ const i = document.getElementById('chat-in'); if(i) i.focus(); }, 300);
  } else {
    w.classList.remove('open');
    chatOpen = false;
  }
}

async function botReply(text){
  const typing = addMsg('Đang gõ...', 'bot typing');
  try{
    const asyncRes = await tryAsyncReply(text);
    if(asyncRes){
      typing.remove();
      addMsg(asyncRes, 'bot');
      return;
    }
  }catch(e){ console.warn('[ChanhNgot] async error:', e); }
  const thinkTime = 400 + Math.min(800, text.length * 25) + Math.random() * 400;
  setTimeout(()=>{
    typing.remove();
    addMsg(reply(text), 'bot');
  }, thinkTime);
}

function sendMsg(){
  const input = document.getElementById('chat-in');
  const text = input.value.trim();
  if(!text) return;
  addMsg(text, 'user');
  input.value = '';
  botReply(text);
}

function askBot(text){
  ensureChatOpen();
  addMsg(text, 'user');
  botReply(text);
}

function askBotDetail(){
  if(!currentId) return;
  const p = DB[currentId];
  ensureChatOpen();
  addMsg(`Tư vấn về ${p.name}`, 'user');
  botReply(p.name);
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', ()=>{
  renderCategory('piano','grid-piano');
  renderCategory('guitar','grid-guitar');
  renderCategory('drums','grid-drums');
  renderFeatured();
  seedDemoOrder();
  updateOrderBadge();
  const hash = location.hash.replace('#','');
  if(hash && ['home','piano','guitar','drums','contact','shipping','warranty','orders','test'].includes(hash)) go(hash, false);
  const badge = document.getElementById('chatBadge');
  if(badge) setTimeout(()=>{ if(!chatOpen) badge.style.display = 'none'; }, 8000);
});
</script>
</body>
</html>
