<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gewon Music — Nhạc cụ chính hãng</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  :root{
    --bg:#0a0a0a;--surface:#141414;--surface-2:#1c1c1c;
    --border:rgba(255,255,255,.08);--text:#fff;--muted:#8a8a8a;
    --sale:#ff3b30;--green:#30d158;--blue:#0a84ff;
  }
  html{scroll-behavior:smooth}
  body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:var(--bg);color:var(--text);line-height:1.5;overflow-x:hidden;-webkit-font-smoothing:antialiased}
  a{color:inherit;text-decoration:none}
  button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
  input,textarea{font-family:inherit}

  nav{position:fixed;top:0;left:0;right:0;height:64px;background:rgba(10,10,10,.72);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--border);z-index:1000;display:flex;align-items:center;padding:0 32px;justify-content:space-between}
  .brand{font-size:15px;font-weight:800;letter-spacing:-.3px;display:flex;align-items:center;gap:8px;cursor:pointer}
  .brand-dot{width:8px;height:8px;background:#fff;border-radius:50%}
  .nav-links{display:flex;gap:4px;align-items:center;flex-wrap:wrap}
  .nav-links a{font-size:13px;font-weight:500;color:var(--muted);padding:8px 12px;border-radius:8px;transition:all .2s;cursor:pointer;white-space:nowrap;position:relative}
  .nav-links a:hover{color:#fff;background:rgba(255,255,255,.05)}
  .nav-links a.active{color:#fff;background:rgba(255,255,255,.08)}
  .nav-badge{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;border-radius:100px;background:var(--sale);color:#fff;font-size:10px;font-weight:700;margin-left:4px;vertical-align:middle}
  .nav-phone{font-size:12px;font-weight:600;color:#fff;padding:8px 16px;border:1px solid var(--border);border-radius:20px;transition:all .2s;white-space:nowrap}
  .nav-phone:hover{background:#fff;color:#000;border-color:#fff}

  main{padding-top:64px;min-height:100vh}
  .view{display:none}
  .view.active{display:block;animation:fadeUp .5s cubic-bezier(.2,.9,.3,1)}
  @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

  .hero{position:relative;height:calc(100vh - 64px);min-height:600px;display:flex;align-items:flex-end;padding:64px;overflow:hidden}
  .hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.35) saturate(.9);animation:kenBurns 25s ease-in-out infinite alternate}
  @keyframes kenBurns{0%{transform:scale(1.05)}100%{transform:scale(1.15)}}
  .hero::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,10,.3) 0%,rgba(10,10,10,.85) 100%)}
  .hero-content{position:relative;z-index:2;max-width:820px}
  .hero-label{font-size:12px;font-weight:600;color:rgba(255,255,255,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:10px}
  .hero-label::before{content:'';width:24px;height:1px;background:currentColor}
  .hero h1{font-size:clamp(40px,7vw,88px);font-weight:800;line-height:1;letter-spacing:-3px;margin-bottom:24px}
  .hero h1 .accent{background:linear-gradient(135deg,#fff 0%,#888 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  .hero-sub{font-size:16px;color:rgba(255,255,255,.7);margin-bottom:36px;max-width:520px}
  .hero-cta{display:flex;gap:12px;flex-wrap:wrap}
  .btn{display:inline-flex;align-items:center;gap:8px;padding:14px 26px;font-size:13.5px;font-weight:600;border-radius:100px;transition:all .25s;white-space:nowrap;cursor:pointer}
  .btn-primary{background:#fff;color:#000}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(255,255,255,.2)}
  .btn-ghost{background:rgba(255,255,255,.08);color:#fff;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.12)}
  .btn-ghost:hover{background:rgba(255,255,255,.15)}

  .section{padding:100px 64px;max-width:1600px;margin:0 auto}
  .section-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:50px;gap:32px;flex-wrap:wrap}
  .section-head h2{font-size:clamp(28px,4vw,44px);font-weight:800;letter-spacing:-1.5px;line-height:1.1}
  .section-head .view-all{font-size:13px;font-weight:600;color:var(--muted);display:flex;align-items:center;gap:6px;transition:color .2s;cursor:pointer}
  .section-head .view-all:hover{color:#fff}

  .cat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}
  .cat-card{position:relative;aspect-ratio:4/5;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform .5s cubic-bezier(.2,.9,.3,1)}
  .cat-card:hover{transform:translateY(-8px)}
  .cat-card img{width:100%;height:100%;object-fit:cover;transition:transform 1s cubic-bezier(.2,.9,.3,1)}
  .cat-card:hover img{transform:scale(1.08)}
  .cat-card::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,.9) 100%)}
  .cat-info{position:absolute;bottom:0;left:0;right:0;padding:32px;z-index:2}
  .cat-info h3{font-size:32px;font-weight:800;letter-spacing:-1px;margin-bottom:4px}
  .cat-info span{font-size:13px;color:rgba(255,255,255,.6)}
  .cat-arrow{position:absolute;top:24px;right:24px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.15);backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .3s;z-index:2}
  .cat-card:hover .cat-arrow{background:#fff;color:#000;transform:rotate(-45deg)}

  .product-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:24px}
  .product-card{cursor:pointer;transition:transform .4s cubic-bezier(.2,.9,.3,1)}
  .product-card:hover{transform:translateY(-6px)}
  .product-img-wrap{position:relative;aspect-ratio:1;border-radius:16px;overflow:hidden;background:var(--surface);margin-bottom:16px}
  .product-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.9,.3,1)}
  .product-card:hover .product-img-wrap img{transform:scale(1.08)}
  .product-badge{position:absolute;top:14px;left:14px;background:#fff;color:#000;padding:5px 12px;border-radius:100px;font-size:10.5px;font-weight:700;letter-spacing:.5px;text-transform:uppercase}
  .product-badge.sale{background:var(--sale);color:#fff}
  .product-info h3{font-size:15px;font-weight:600;letter-spacing:-.2px;margin-bottom:4px}
  .product-info .price{font-size:14.5px;font-weight:700;color:#fff}
  .product-info .price-old{font-size:12px;color:var(--muted);text-decoration:line-through;margin-left:8px;font-weight:400}

  .page-head{padding:80px 64px 40px;max-width:1600px;margin:0 auto}
  .page-head .breadcrumb{font-size:12px;color:var(--muted);margin-bottom:20px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
  .page-head .breadcrumb a{cursor:pointer;transition:color .2s}
  .page-head .breadcrumb a:hover{color:#fff}
  .page-head .breadcrumb .sep{opacity:.4}
  .page-head h1{font-size:clamp(36px,6vw,72px);font-weight:800;letter-spacing:-2.5px;line-height:1;margin-bottom:16px}
  .page-head p{font-size:15px;color:var(--muted);max-width:560px}
  .filter-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:32px}
  .filter-chip{padding:9px 18px;border-radius:100px;background:var(--surface);color:var(--muted);font-size:12.5px;font-weight:500;border:1px solid transparent;transition:all .2s;cursor:pointer}
  .filter-chip:hover{color:#fff;background:var(--surface-2)}
  .filter-chip.active{background:#fff;color:#000;font-weight:600}

  .products-area{padding:0 64px 100px;max-width:1600px;margin:0 auto}

  .detail-wrap{max-width:1600px;margin:0 auto;padding:40px 64px 100px}
  .back-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:100px;background:var(--surface);font-size:12.5px;font-weight:500;color:var(--muted);margin-bottom:40px;transition:all .2s;cursor:pointer}
  .back-btn:hover{color:#fff;background:var(--surface-2)}
  .detail-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:60px;align-items:flex-start}
  .detail-gallery{position:sticky;top:100px}
  .detail-main{aspect-ratio:1;border-radius:20px;overflow:hidden;background:var(--surface);margin-bottom:12px;position:relative}
  .detail-main img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .4s}
  .detail-main img.active{opacity:1}
  .thumb-row{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
  .thumb{aspect-ratio:1;border-radius:10px;overflow:hidden;cursor:pointer;border:2px solid transparent;transition:all .2s;background:var(--surface)}
  .thumb img{width:100%;height:100%;object-fit:cover;opacity:.6;transition:opacity .2s}
  .thumb:hover img,.thumb.active img{opacity:1}
  .thumb.active{border-color:#fff}
  .detail-info .brand-tag{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
  .detail-info h1{font-size:clamp(28px,4vw,44px);font-weight:800;letter-spacing:-1.5px;line-height:1.1;margin-bottom:20px}
  .detail-price-row{display:flex;align-items:baseline;gap:12px;margin-bottom:28px;flex-wrap:wrap}
  .detail-price{font-size:32px;font-weight:800;letter-spacing:-1px}
  .detail-price-old{font-size:16px;color:var(--muted);text-decoration:line-through}
  .detail-short{font-size:15px;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:32px;padding-bottom:32px;border-bottom:1px solid var(--border)}
  .detail-cta{display:flex;gap:10px;margin-bottom:40px;flex-wrap:wrap}
  .spec-section-title{font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:16px}
  .spec-list{display:flex;flex-direction:column;border-top:1px solid var(--border);margin-bottom:36px}
  .spec-row{display:grid;grid-template-columns:1fr 1.5fr;padding:14px 0;border-bottom:1px solid var(--border);font-size:13.5px}
  .spec-row dt{color:var(--muted);font-weight:500}
  .spec-row dd{color:#fff;font-weight:500}
  .feature-list{display:flex;flex-direction:column;gap:10px;list-style:none}
  .feature-list li{font-size:14px;color:rgba(255,255,255,.8);display:flex;gap:12px;align-items:flex-start;line-height:1.5}
  .feature-list li::before{content:'';flex-shrink:0;width:16px;height:16px;margin-top:3px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") center/contain no-repeat}

  .contact-section{padding:100px 64px;max-width:1600px;margin:0 auto}
  .contact-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:50px}
  .contact-card{background:var(--surface);border-radius:20px;padding:32px;transition:all .3s}
  .contact-card:hover{background:var(--surface-2);transform:translateY(-4px)}
  .contact-card .ic{font-size:28px;margin-bottom:16px}
  .contact-card h4{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
  .contact-card p{font-size:17px;font-weight:600;line-height:1.4}
  .contact-card small{display:block;font-size:12px;color:var(--muted);font-weight:400;margin-top:8px;line-height:1.5}

  .ship-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:1400px;margin:0 auto}
  .ship-form-box{background:var(--surface);border-radius:20px;padding:32px}
  .ship-form-box h3{font-size:20px;font-weight:700;margin-bottom:8px}
  .ship-form-box > p{font-size:13px;color:var(--muted);margin-bottom:24px}
  .form-field{display:flex;flex-direction:column;gap:16px}
  .form-field label{font-size:12px;font-weight:600;color:var(--muted);letter-spacing:1px;text-transform:uppercase;display:block;margin-bottom:8px}
  .form-field input,.form-field textarea{width:100%;padding:14px 18px;background:var(--surface-2);border:1px solid var(--border);border-radius:12px;color:#fff;font-size:14px;outline:none;transition:border-color .2s}
  .form-field input:focus,.form-field textarea:focus{border-color:#444}
  .form-field input::placeholder,.form-field textarea::placeholder{color:#555}
  .form-field textarea{resize:vertical;min-height:80px}
  .fee-box{background:var(--surface-2);border-radius:12px;padding:16px;display:none}
  .fee-row{display:flex;justify-content:space-between;margin-bottom:6px}
  .fee-row:last-child{margin-bottom:0}
  .fee-row span:first-child{font-size:13px;color:var(--muted)}
  .fee-row span:last-child{font-size:14px;font-weight:600}
  .fee-free{color:var(--green)}
  .map-box{background:var(--surface);border-radius:20px;padding:8px;min-height:500px}
  .map-box iframe{width:100%;height:100%;min-height:500px;border:0;border-radius:14px;display:block}
  .pending-product{background:linear-gradient(135deg,rgba(255,255,255,.05) 0%,rgba(255,255,255,.02) 100%);border:1px solid var(--border);border-radius:14px;padding:14px;margin-bottom:4px}
  .pp-label{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:10px;display:block}
  .pp-item{display:flex;align-items:center;gap:12px}
  .pp-item img{width:52px;height:52px;border-radius:10px;object-fit:cover;background:var(--surface-2);flex-shrink:0}
  .pp-item > div{flex:1;min-width:0}
  .pp-item strong{font-size:13.5px;font-weight:600;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .pp-item span{font-size:12.5px;color:var(--muted);display:block;margin-top:2px}
  .pp-remove{width:28px;height:28px;border-radius:50%;background:var(--surface-2);color:var(--muted);font-size:13px;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0}
  .pp-remove:hover{background:#333;color:#fff}

  .orders-area{padding:0 64px 100px;max-width:1100px;margin:0 auto}
  .orders-empty{text-align:center;padding:80px 20px;background:var(--surface);border-radius:20px;border:1px solid var(--border)}
  .orders-empty .emoji{font-size:64px;margin-bottom:16px}
  .orders-empty h3{font-size:22px;font-weight:700;margin-bottom:8px}
  .orders-empty p{font-size:14px;color:var(--muted);margin-bottom:24px;max-width:400px;margin-left:auto;margin-right:auto}
  .order-card{background:var(--surface);border-radius:20px;padding:24px;margin-bottom:16px;border:1px solid var(--border);animation:fadeUp .5s cubic-bezier(.2,.9,.3,1)}
  .order-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;margin-bottom:8px}
  .order-code{font-size:16px;font-weight:800;letter-spacing:-.3px}
  .order-date{font-size:12px;color:var(--muted);margin-top:2px}
  .order-tags{display:flex;gap:6px;flex-wrap:wrap;align-items:center}
  .order-status{padding:7px 14px;border-radius:100px;font-size:12px;font-weight:600;background:rgba(48,209,88,.15);color:var(--green);display:inline-flex;align-items:center;gap:8px;white-space:nowrap}
  .order-status::before{content:'';width:8px;height:8px;border-radius:50%;background:currentColor;animation:pulse 1.5s infinite;box-shadow:0 0 8px currentColor}
  @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.55;transform:scale(1.15)}}
  .order-sent{padding:5px 10px;border-radius:100px;font-size:10.5px;font-weight:600;background:rgba(10,132,255,.15);color:#4da3ff;display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
  .order-timeline{display:grid;grid-template-columns:repeat(4,1fr);margin:24px 0 20px;position:relative}
  .tl-step{display:flex;flex-direction:column;align-items:center;position:relative;text-align:center}
  .tl-step::before{content:'';position:absolute;top:14px;left:calc(-50% + 14px);right:calc(50% + 14px);height:2px;background:var(--border);z-index:0}
  .tl-step:first-child::before{display:none}
  .tl-step.done::before,.tl-step.active::before{background:var(--green)}
  .tl-dot{width:28px;height:28px;border-radius:50%;background:var(--surface-2);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;position:relative;z-index:1;color:var(--muted);transition:all .3s}
  .tl-step.done .tl-dot{background:var(--green);border-color:var(--green);color:#fff}
  .tl-step.active .tl-dot{background:#fff;border-color:#fff;color:#000;box-shadow:0 0 0 5px rgba(255,255,255,.15);animation:activeDot 2s infinite}
  @keyframes activeDot{0%,100%{box-shadow:0 0 0 5px rgba(255,255,255,.15)}50%{box-shadow:0 0 0 9px rgba(255,255,255,.06)}}
  .tl-label{font-size:11px;color:var(--muted);margin-top:10px;font-weight:500;line-height:1.3;padding:0 4px}
  .tl-step.done .tl-label,.tl-step.active .tl-label{color:#fff;font-weight:600}
  .order-product{display:flex;align-items:center;gap:12px;background:var(--surface-2);border-radius:12px;padding:12px;margin-bottom:14px}
  .order-product img{width:48px;height:48px;border-radius:10px;object-fit:cover;background:var(--surface);flex-shrink:0}
  .order-product > div{flex:1;min-width:0}
  .order-product strong{font-size:13.5px;font-weight:600;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .order-product span{font-size:12.5px;color:var(--muted);display:block;margin-top:2px}
  .order-body{border-top:1px solid var(--border);padding-top:14px}
  .order-row{display:flex;justify-content:space-between;padding:7px 0;font-size:13.5px;gap:16px}
  .order-row span{color:var(--muted);flex-shrink:0}
  .order-row strong{color:#fff;text-align:right;font-weight:500;word-break:break-word;min-width:0}
  .order-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;padding-top:14px;border-top:1px solid var(--border)}
  .btn-cancel{padding:10px 18px;border-radius:100px;background:rgba(255,59,48,.1);color:#ff6b60;font-size:12.5px;font-weight:600;border:1px solid rgba(255,59,48,.25);transition:all .2s;display:inline-flex;align-items:center;gap:6px;cursor:pointer}
  .btn-cancel:hover{background:rgba(255,59,48,.2);color:#fff;border-color:rgba(255,59,48,.5)}

  #cancel-modal{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:20px;animation:cmFade .2s ease}
  @keyframes cmFade{from{opacity:0}to{opacity:1}}
  .cancel-modal-box{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:36px 32px;max-width:440px;width:100%;text-align:center;animation:cmPop .3s cubic-bezier(.2,.9,.3,1);box-shadow:0 30px 80px rgba(0,0,0,.8)}
  @keyframes cmPop{from{opacity:0;transform:scale(.92) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}
  .cancel-modal-icon{width:64px;height:64px;border-radius:50%;background:rgba(255,59,48,.15);color:var(--sale);font-size:30px;display:flex;align-items:center;justify-content:center;margin:0 auto 18px}
  .cancel-modal-box h3{font-size:20px;font-weight:800;letter-spacing:-.5px;margin-bottom:12px}
  .cancel-modal-box p{font-size:14px;color:var(--muted);line-height:1.6;margin-bottom:26px}
  .cancel-modal-box p strong{color:#fff}
  .cancel-modal-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
  .cancel-modal-actions .btn{min-width:130px;justify-content:center}

  /* ===== TEST INSTRUMENTS ===== */
  .test-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px;justify-content:center}
  .test-tab{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:100px;background:var(--surface);color:var(--muted);font-size:14px;font-weight:600;border:1px solid var(--border);transition:all .25s;cursor:pointer}
  .test-tab .ic{font-size:18px}
  .test-tab:hover{color:#fff;background:var(--surface-2);transform:translateY(-2px)}
  .test-tab.active{background:#fff;color:#000;border-color:#fff;box-shadow:0 8px 24px rgba(255,255,255,.15)}

  .test-panel{background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:36px;animation:fadeUp .4s cubic-bezier(.2,.9,.3,1)}
  .test-panel-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap;margin-bottom:32px}
  .test-panel-head h3{font-size:24px;font-weight:800;letter-spacing:-.5px;margin-bottom:6px}
  .test-panel-head p{font-size:13.5px;color:var(--muted)}
  .test-panel-actions{display:flex;gap:10px;flex-wrap:wrap}

  /* Piano keys */
  .test-keys{display:flex;gap:6px;justify-content:center;padding:20px 0;flex-wrap:wrap;user-select:none}
  .test-key{position:relative;flex:1;min-width:70px;max-width:120px;aspect-ratio:1/2.8;background:linear-gradient(180deg,#f5f5f5 0%,#e0e0e0 100%);border-radius:0 0 12px 12px;color:#222;font-weight:700;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:16px;transition:all .1s;cursor:pointer;box-shadow:inset 0 -3px 0 rgba(0,0,0,.1),0 4px 12px rgba(0,0,0,.3);border:none}
  .test-key:hover{background:linear-gradient(180deg,#fff 0%,#eaeaea 100%)}
  .test-key:active,.test-key.pressed{background:linear-gradient(180deg,#d8d8d8 0%,#c0c0c0 100%);transform:translateY(2px);box-shadow:inset 0 -1px 0 rgba(0,0,0,.1),0 2px 6px rgba(0,0,0,.3)}
  .test-key span{font-size:15px;font-weight:800;letter-spacing:-.5px}
  .test-key small{font-size:10px;font-weight:500;color:#666;margin-top:2px;text-transform:uppercase;letter-spacing:1px}

  /* Guitar */
  .guitar-wrap{
    background:linear-gradient(180deg,rgba(255,255,255,.03) 0%,rgba(255,255,255,.01) 100%);
    border-radius:20px;
    padding:24px 16px;
    overflow:hidden;
    border:1px solid var(--border);
  }
  .guitar-svg{
    width:100%;
    height:auto;
    max-width:1500px;
    display:block;
    margin:0 auto;
    filter:drop-shadow(0 14px 36px rgba(0,0,0,.6));
    border-radius:10px;
  }
  .guitar-string{cursor:pointer}
  .guitar-string rect{transition:fill .15s}
  .guitar-string:hover rect{fill:rgba(255,255,255,.08)}
  .guitar-string line{
    transition:stroke .15s,filter .15s,stroke-width .15s;
    pointer-events:none;
    filter:drop-shadow(0 1px 2px rgba(0,0,0,.9)) drop-shadow(0 0 4px rgba(255,255,255,.45));
  }
  .guitar-string:hover line{stroke:#fff !important;filter:drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 16px rgba(255,255,255,.8));stroke-width:5 !important}
  .guitar-string.vibrating line{stroke:#fff !important;filter:drop-shadow(0 0 10px rgba(255,255,255,1));animation:strum .4s ease}
  @keyframes strum{
    0%{transform:translateY(0)}
    25%{transform:translateY(-2px)}
    50%{transform:translateY(2px)}
    75%{transform:translateY(-1.2px)}
    100%{transform:translateY(0)}
  }
  .guitar-string-label{font-family:'Inter',sans-serif;font-size:15px;font-weight:800;fill:#fff;letter-spacing:1px;pointer-events:none;text-shadow:0 2px 6px rgba(0,0,0,.9)}

  /* Drums */
  .drum-wrap{background:radial-gradient(ellipse at 50% 100%,rgba(255,255,255,.04) 0%,transparent 70%);border-radius:20px;padding:20px 10px;overflow:hidden}
  .drum-svg{width:100%;height:auto;max-width:820px;display:block;margin:0 auto;filter:drop-shadow(0 12px 30px rgba(0,0,0,.5))}
  .drum-piece{cursor:pointer;transform-box:fill-box;transform-origin:center;transition:filter .15s,transform .15s}
  .drum-piece:hover{filter:brightness(1.25) drop-shadow(0 0 12px rgba(255,255,255,.4))}
  .drum-piece.pressed{filter:brightness(1.6) drop-shadow(0 0 20px rgba(255,255,255,.7));transform:scale(.96)}
  .drum-label{font-family:'Inter',sans-serif;font-size:12px;font-weight:700;fill:#888;letter-spacing:1.5px;pointer-events:none;text-transform:uppercase}

  .test-hint{margin-top:24px;padding:14px 18px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;font-size:12.5px;color:var(--muted);text-align:center}
  .test-hint kbd{display:inline-block;min-width:22px;padding:2px 6px;border-radius:5px;background:var(--surface-2);border:1px solid var(--border);font-family:inherit;font-size:11px;font-weight:700;color:#fff;margin:0 2px}

  .success-wrap{max-width:820px;margin:0 auto;padding:40px 64px 100px}
  .success-box{background:var(--surface);border-radius:24px;padding:60px 40px;text-align:center;border:1px solid var(--border);position:relative;overflow:hidden}
  .success-box::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at center,rgba(48,209,88,.12) 0%,transparent 50%);pointer-events:none}
  .success-icon{position:relative;width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#30d158 0%,#28a745 100%);color:#fff;font-size:48px;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 28px;box-shadow:0 16px 48px rgba(48,209,88,.35);animation:popIn .6s cubic-bezier(.2,.9,.3,1)}
  @keyframes popIn{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
  .success-box h1{font-size:clamp(28px,4vw,40px);font-weight:800;letter-spacing:-1.5px;margin-bottom:12px;position:relative}
  .success-box .sub{font-size:15px;color:var(--muted);max-width:520px;margin:0 auto 36px;line-height:1.7;position:relative}
  .order-info{background:var(--surface-2);border-radius:16px;padding:8px 24px;max-width:560px;margin:0 auto 32px;text-align:left;position:relative}
  .order-info .order-row{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding:14px 0;border-bottom:1px solid var(--border);font-size:14px}
  .order-info .order-row:last-child{border-bottom:none}
  .order-info .order-row span{color:var(--muted);flex-shrink:0}
  .order-info .order-row strong{color:#fff;font-weight:600;text-align:right;word-break:break-word}
  .success-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;position:relative}
  .success-note{margin-top:28px;font-size:12.5px;color:var(--muted);line-height:1.6;position:relative}
  .system-status{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:100px;background:rgba(10,132,255,.15);color:#4da3ff;font-size:12px;font-weight:600;margin:0 auto 20px;position:relative}
  .system-status::before{content:'';width:8px;height:8px;border-radius:50%;background:currentColor;animation:pulse 1.5s infinite}

  .warranty-hero{background:linear-gradient(135deg,#141414 0%,#1c1c1c 100%);border-radius:24px;padding:48px;text-align:center;margin-bottom:24px;border:1px solid var(--border)}
  .warranty-hero .shield{font-size:56px;margin-bottom:16px}
  .warranty-hero .big-num{font-size:clamp(48px,8vw,96px);font-weight:900;letter-spacing:-4px;background:linear-gradient(135deg,#fff 0%,#666 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
  .warranty-hero .big-label{font-size:14px;font-weight:600;color:var(--muted);letter-spacing:3px;text-transform:uppercase;margin-top:8px}
  .warranty-hero p{font-size:15px;color:rgba(255,255,255,.7);max-width:500px;margin:24px auto 0;line-height:1.7}
  .warranty-hero p strong{color:#fff}
  .benefit-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:24px}
  .warranty-box{background:var(--surface);border-radius:20px;padding:32px;margin-bottom:24px}
  .warranty-box h3{font-size:18px;font-weight:700;margin-bottom:20px}
  .policy-list{display:flex;flex-direction:column;border-top:1px solid var(--border)}
  .policy-row{display:grid;grid-template-columns:1fr 1.5fr;padding:14px 0;border-bottom:1px solid var(--border);font-size:13.5px}
  .policy-row dt{color:var(--muted);font-weight:500}
  .policy-row dd{color:#fff;font-weight:500}

  footer{padding:60px 64px 40px;border-top:1px solid var(--border);text-align:center;font-size:13px;color:var(--muted)}
  footer .brand-big{font-size:22px;font-weight:800;color:#fff;letter-spacing:-1px;margin-bottom:12px}
  footer .footer-info{display:flex;justify-content:center;gap:24px;flex-wrap:wrap;margin:24px 0}
  footer a{transition:color .2s}
  footer a:hover{color:#fff}

  #chat-btn{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;background:#fff;color:#000;font-size:24px;z-index:1000;box-shadow:0 8px 32px rgba(0,0,0,.5);transition:transform .25s;display:flex;align-items:center;justify-content:center;cursor:pointer}
  #chat-btn:hover{transform:scale(1.1)}
  .chat-badge{position:absolute;top:-4px;right:-4px;width:20px;height:20px;background:var(--sale);color:#fff;border-radius:50%;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid var(--bg)}
  #chat-window{position:fixed;bottom:100px;right:24px;width:380px;max-width:calc(100vw - 32px);height:560px;max-height:calc(100vh - 140px);background:var(--surface);border:1px solid var(--border);border-radius:20px;overflow:hidden;display:none;flex-direction:column;z-index:1000;box-shadow:0 30px 80px rgba(0,0,0,.8)}
  #chat-window.open{display:flex;animation:chatIn .3s cubic-bezier(.2,.9,.3,1)}
  @keyframes chatIn{from{opacity:0;transform:translateY(20px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
  .chat-head{padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px;background:var(--bg)}
  .chat-avatar{width:36px;height:36px;border-radius:50%;background:#fff;color:#000;display:flex;align-items:center;justify-content:center;font-size:18px;position:relative}
  .chat-avatar::after{content:'';position:absolute;bottom:0;right:0;width:10px;height:10px;border-radius:50%;background:var(--green);border:2px solid var(--bg)}
  .chat-head-info h5{font-size:13px;font-weight:700;letter-spacing:-.2px}
  .chat-head-info p{font-size:11px;color:var(--muted)}
  .chat-close{margin-left:auto;width:28px;height:28px;border-radius:50%;background:var(--surface-2);font-size:14px;display:flex;align-items:center;justify-content:center;transition:background .2s;cursor:pointer}
  .chat-close:hover{background:#333}
  .chat-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}
  .msg{max-width:85%;padding:11px 14px;border-radius:16px;font-size:13.5px;line-height:1.5;white-space:pre-wrap;word-wrap:break-word;animation:msgIn .3s}
  @keyframes msgIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
  .msg.bot{background:var(--surface-2);align-self:flex-start;border-bottom-left-radius:4px}
  .msg.user{background:#fff;color:#000;align-self:flex-end;border-bottom-right-radius:4px;font-weight:500}
  .msg.system{background:linear-gradient(135deg,rgba(10,132,255,.2) 0%,rgba(10,132,255,.1) 100%);color:#fff;align-self:stretch;max-width:100%;border-left:3px solid var(--blue);border-radius:12px;font-size:13px;padding:12px 14px}
  .msg.typing{background:transparent;color:var(--muted);font-style:italic;font-size:12.5px;padding-left:4px}
  .chat-chips{padding:0 16px 12px;display:flex;gap:6px;flex-wrap:wrap}
  .chip{padding:6px 12px;border-radius:100px;background:var(--surface-2);font-size:11.5px;font-weight:500;color:var(--muted);transition:all .2s;cursor:pointer}
  .chip:hover{color:#fff;background:#333}
  .chat-foot{padding:12px;border-top:1px solid var(--border);display:flex;gap:8px;background:var(--bg)}
  #chat-in{flex:1;background:var(--surface-2);border:1px solid transparent;border-radius:100px;padding:12px 18px;font-size:13.5px;color:#fff;outline:none;font-family:inherit;transition:border-color .2s}
  #chat-in::placeholder{color:var(--muted)}
  #chat-in:focus{border-color:#333}
  #chat-send{width:44px;height:44px;border-radius:50%;background:#fff;color:#000;display:flex;align-items:center;justify-content:center;font-size:16px;transition:transform .2s;cursor:pointer}
  #chat-send:hover{transform:scale(1.08)}

  @media (max-width:1100px){.nav-links a{padding:6px 8px;font-size:12px}}
  @media (max-width:900px){
    nav{padding:0 16px;height:auto;min-height:64px;flex-wrap:wrap;gap:8px;padding-top:10px;padding-bottom:10px}
    main{padding-top:120px}
    .nav-phone{display:none}
    .hero{padding:32px;min-height:520px}
    .hero h1{letter-spacing:-2px}
    .section{padding:60px 20px}
    .page-head{padding:50px 20px 30px}
    .products-area{padding:0 20px 60px}
    .orders-area{padding:0 20px 60px}
    .detail-wrap{padding:24px 20px 60px}
    .success-wrap{padding:24px 20px 60px}
    .detail-grid{grid-template-columns:1fr;gap:36px}
    .detail-gallery{position:static}
    .contact-section{padding:60px 20px}
    .ship-grid{grid-template-columns:1fr}
    footer{padding:40px 20px 30px}
    .section-head{margin-bottom:32px}
  }
  @media (max-width:640px){
    .nav-links a{padding:5px 7px;font-size:11px}
    .brand{font-size:13px}
    .hero{padding:24px;min-height:480px}
    .hero-sub{font-size:14px}
    .btn{padding:12px 20px;font-size:12.5px}
    .cat-info h3{font-size:24px}
    .cat-info{padding:20px}
    .product-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px}
    #chat-window{right:12px;left:12px;width:auto;bottom:88px;height:70vh}
    .spec-row{grid-template-columns:1fr;gap:2px;padding:12px 0}
    .spec-row dt{font-size:11px}
    .policy-row{grid-template-columns:1fr;gap:2px;padding:12px 0}
    .warranty-box{padding:20px}
    .warranty-hero{padding:32px 20px}
    .ship-form-box{padding:22px}
    .success-box{padding:40px 20px}
    .order-info .order-row{flex-direction:column;gap:4px}
    .order-info .order-row strong{text-align:left}
    .order-card{padding:18px}
    .tl-label{font-size:10px}
    .tl-dot{width:24px;height:24px;font-size:11px}
    .tl-step::before{top:12px;left:calc(-50% + 12px);right:calc(50% + 12px)}
    .order-row{font-size:12.5px}
    .cancel-modal-box{padding:28px 20px}
    .cancel-modal-actions .btn{flex:1;min-width:0}
    .test-panel{padding:20px}
    .test-tabs{gap:6px}
    .test-tab{padding:10px 16px;font-size:12.5px}
    .test-key{min-width:44px;aspect-ratio:1/3}
    .test-key span{font-size:12px}
    .test-key small{font-size:9px}
    .guitar-wrap{padding:12px 6px}
  }
</style>
</head>
<body>

<!-- ====== NAV ====== -->
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

  <!-- ============ HOME ============ -->
  <div class="view active" id="view-home">
    <section class="hero">
      <img class="hero-bg" src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=1920&q=85&auto=format&fit=crop" alt="" onerror="imgFail(this)">
      <div class="hero-content">
        <div class="hero-label">Nhạc cụ chính hãng</div>
        <h1>Chơi nhạc.<br><span class="accent">Sống trọn vẹn.</span></h1>
        <p class="hero-sub">Piano · Guitar · Trống chính hãng tại TP.HCM.</p>
        <div class="hero-cta">
          <button class="btn btn-primary" onclick="go('piano')">Khám phá ngay →</button>
          <button class="btn btn-ghost" onclick="go('test')">🎹 Test nhạc cụ</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Bộ sưu tập</h2>
        <a class="view-all" onclick="go('piano')">Xem tất cả →</a>
      </div>
      <div class="cat-grid">
        <div class="cat-card" onclick="go('piano')">
          <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=900&q=80&auto=format&fit=crop" alt="Piano" onerror="imgFail(this)">
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
      <div class="section-head">
        <h2>Sản phẩm nổi bật</h2>
        <a class="view-all" onclick="go('piano')">Xem tất cả →</a>
      </div>
      <div class="product-grid" id="featured-grid"></div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Dịch vụ</h2>
      </div>
      <div class="cat-grid">
        <div class="cat-card" onclick="go('test')">
          <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&q=80&auto=format&fit=crop" alt="Test nhạc cụ" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info">
            <h3 style="font-size:24px">🎹 Test nhạc cụ</h3>
            <span>Chơi thử Piano, Guitar, Trống ngay trên web</span>
          </div>
        </div>
        <div class="cat-card" onclick="go('orders')">
          <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80&auto=format&fit=crop" alt="Trạng thái đơn hàng" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info">
            <h3 style="font-size:24px">📊 Trạng thái đơn hàng</h3>
            <span>Xem đơn hàng đang giao đến bạn</span>
          </div>
        </div>
        <div class="cat-card" onclick="go('warranty')">
          <img src="https://images.unsplash.com/photo-1573871669414-010dbf73ca84?w=900&q=80&auto=format&fit=crop" alt="Bảo hành" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info">
            <h3 style="font-size:24px">🛡️ Bảo hành 3 năm</h3>
            <span>Chính sách minh bạch, rõ ràng</span>
          </div>
        </div>
        <div class="cat-card" onclick="toggleChat()">
          <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=900&q=80&auto=format&fit=crop" alt="Tư vấn AI" onerror="imgFail(this)">
          <div class="cat-arrow">→</div>
          <div class="cat-info">
            <h3 style="font-size:24px">💬 Tư vấn AI</h3>
            <span>ChanhNgot🍋 tư vấn 24/7</span>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- ============ PIANO ============ -->
  <div class="view" id="view-piano">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span class="sep">/</span><span>Piano</span></div>
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

  <!-- ============ GUITAR ============ -->
  <div class="view" id="view-guitar">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span class="sep">/</span><span>Guitar</span></div>
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

  <!-- ============ DRUMS ============ -->
  <div class="view" id="view-drums">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span class="sep">/</span><span>Trống</span></div>
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

  <!-- ============ DETAIL ============ -->
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

  <!-- ============ SHIPPING ============ -->
  <div class="view" id="view-shipping">
    <div class="page-head">
      <div class="breadcrumb">
        <a onclick="go('home')">Trang chủ</a><span class="sep">/</span><span>Đặt hàng</span>
      </div>
      <h1>Đặt hàng</h1>
      <p>Điền thông tin giao hàng để hoàn tất đơn hàng của bạn.</p>
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
                <div>
                  <strong id="pp-name"></strong>
                  <span id="pp-price"></span>
                </div>
                <button class="pp-remove" onclick="clearPendingProduct()" title="Bỏ chọn">✕</button>
              </div>
            </div>

            <div>
              <label>Họ tên</label>
              <input id="ship-name" type="text" placeholder="Nguyễn Văn A">
            </div>
            <div>
              <label>Số điện thoại</label>
              <input id="ship-phone" type="tel" placeholder="0385 730 766">
            </div>
            <div>
              <label>Địa chỉ chi tiết</label>
              <input id="ship-address" type="text" placeholder="Số nhà, đường, phường, quận..."
                oninput="updateMapFromAddress(this.value)">
            </div>
            <div>
              <label>Ghi chú</label>
              <textarea id="ship-note" rows="3" placeholder="VD: Giao giờ hành chính, gọi trước khi đến..."></textarea>
            </div>

            <div class="fee-box" id="ship-fee-box">
              <div class="fee-row"><span>Khoảng cách</span><span id="ship-distance">—</span></div>
              <div class="fee-row"><span>Phí giao hàng</span><span id="ship-fee" class="fee-free">Miễn phí</span></div>
            </div>

            <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="confirmShipping()">
              ✅ Xác nhận đặt giao hàng
            </button>

            <a class="btn btn-ghost" style="width:100%;justify-content:center" 
               href="https://www.google.com/maps/search/?api=1&query=TP.HCM" target="_blank">
              🗺️ Mở Google Maps chỉ đường đến Showroom
            </a>
          </div>
        </div>

        <div class="map-box">
          <iframe
            id="ship-map-frame"
            src="https://maps.google.com/maps?q=TP.HCM&t=&z=12&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>

  <!-- ============ ORDERS ============ -->
  <div class="view" id="view-orders">
    <div class="page-head">
      <div class="breadcrumb">
        <a onclick="go('home')">Trang chủ</a><span class="sep">/</span><span>Trạng thái đơn hàng</span>
      </div>
      <h1>Trạng thái đơn hàng</h1>
      <p>Theo dõi đơn hàng đang trên đường giao đến bạn.</p>
    </div>
    <div class="orders-area">
      <div id="orders-list"></div>
    </div>
  </div>

  <!-- ============ TEST INSTRUMENTS ============ -->
  <div class="view" id="view-test">
    <div class="page-head">
      <div class="breadcrumb">
        <a onclick="go('home')">Trang chủ</a><span class="sep">/</span><span>Test nhạc cụ</span>
      </div>
      <h1>Test nhạc cụ</h1>
      <p>Chọn nhạc cụ và bấm phím/dây/pad để nghe thử âm thanh — hoặc bấm ▶ để nghe đoạn nhạc mẫu.</p>
    </div>

    <div class="contact-section" style="padding-top:20px">
      <div style="max-width:1400px;margin:0 auto">

        <div class="test-tabs">
          <button class="test-tab active" data-inst="piano" onclick="switchInstrument('piano', this)">
            <span class="ic">🎹</span><span>Piano</span>
          </button>
          <button class="test-tab" data-inst="guitar" onclick="switchInstrument('guitar', this)">
            <span class="ic">🎸</span><span>Guitar</span>
          </button>
          <button class="test-tab" data-inst="drums" onclick="switchInstrument('drums', this)">
            <span class="ic">🥁</span><span>Trống</span>
          </button>
        </div>

        <!-- Panel: Piano -->
        <div class="test-panel" id="test-panel-piano">
          <div class="test-panel-head">
            <div>
              <h3>🎹 Piano</h3>
              <p>Bấm phím để nghe âm thanh piano — hoặc bấm "▶ Demo" để nghe đoạn nhạc mẫu</p>
            </div>
            <div class="test-panel-actions">
              <button class="btn btn-primary" onclick="testPlayDemo()">▶ Demo</button>
              <button class="btn btn-ghost" onclick="testPlayScale()">🎼 Scale</button>
            </div>
          </div>

          <div class="test-keys" id="test-keys"></div>

          <div class="test-hint">
            💡 Mẹo: Dùng <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>4</kbd> <kbd>5</kbd> <kbd>6</kbd> <kbd>7</kbd> <kbd>8</kbd> để chơi bằng bàn phím máy tính.
          </div>
        </div>

        <!-- Panel: Guitar (dây đàn đã đổi màu nổi bật) -->
        <div class="test-panel" id="test-panel-guitar" style="display:none">
          <div class="test-panel-head">
            <div>
              <h3>🎸 Guitar Acoustic</h3>
              <p>Bấm vào từng dây đàn để nghe âm thanh (Standard tuning E-A-D-G-B-E)</p>
            </div>
            <div class="test-panel-actions">
              <button class="btn btn-primary" onclick="testGuitarDemo()">▶ Strum hợp âm</button>
            </div>
          </div>

          <div class="guitar-wrap">
            <svg viewBox="0 0 1200 480" class="guitar-svg" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="fbGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="#3a2515"/>
                  <stop offset="0.5" stop-color="#2a1a0a"/>
                  <stop offset="1" stop-color="#3a2515"/>
                </linearGradient>
              </defs>

              <!-- Fretboard nền -->
              <rect x="43" y="20" width="1140" height="460" fill="url(#fbGrad)" stroke="#1a0a00" stroke-width="2" rx="6"/>

              <!-- Inlay dots -->
              <circle cx="520" cy="250" r="10" fill="#fff" opacity="0.22"/>
              <circle cx="805" cy="250" r="10" fill="#fff" opacity="0.22"/>
              <circle cx="1037" cy="250" r="10" fill="#fff" opacity="0.22"/>

              <!-- Frets -->
              <line x1="250" y1="20" x2="250" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/>
              <line x1="440" y1="20" x2="440" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/>
              <line x1="600" y1="20" x2="600" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/>
              <line x1="740" y1="20" x2="740" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/>
              <line x1="870" y1="20" x2="870" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/>
              <line x1="985" y1="20" x2="985" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/>
              <line x1="1090" y1="20" x2="1090" y2="480" stroke="#c8b8a0" stroke-width="3" opacity="0.85"/>

              <!-- Số fret -->
              <text x="345" y="472" fill="#777" font-size="12" text-anchor="middle" font-family="Inter,sans-serif" font-weight="600">1</text>
              <text x="520" y="472" fill="#777" font-size="12" text-anchor="middle" font-family="Inter,sans-serif" font-weight="600">2</text>
              <text x="670" y="472" fill="#777" font-size="12" text-anchor="middle" font-family="Inter,sans-serif" font-weight="600">3</text>
              <text x="805" y="472" fill="#777" font-size="12" text-anchor="middle" font-family="Inter,sans-serif" font-weight="600">4</text>
              <text x="927" y="472" fill="#777" font-size="12" text-anchor="middle" font-family="Inter,sans-serif" font-weight="600">5</text>
              <text x="1037" y="472" fill="#777" font-size="12" text-anchor="middle" font-family="Inter,sans-serif" font-weight="600">6</text>

              <!-- Nut -->
              <rect x="27" y="18" width="18" height="464" rx="3" fill="#f5ead5" stroke="#8b7355" stroke-width="1.5"/>

              <!-- Dây 1 — E4 (mỏng nhất, bạc trắng) -->
              <g class="guitar-string" onclick="playGuitarString(0)">
                <rect x="20" y="35" width="1180" height="70" fill="transparent"/>
                <line x1="27" y1="70" x2="1183" y2="70" stroke="#ffffff" stroke-width="2"/>
              </g>

              <!-- Dây 2 — B3 (bạc sáng) -->
              <g class="guitar-string" onclick="playGuitarString(1)">
                <rect x="20" y="110" width="1180" height="70" fill="transparent"/>
                <line x1="27" y1="145" x2="1183" y2="145" stroke="#f0f0f0" stroke-width="2.5"/>
              </g>

              <!-- Dây 3 — G3 (bạc pha vàng nhạt) -->
              <g class="guitar-string" onclick="playGuitarString(2)">
                <rect x="20" y="185" width="1180" height="70" fill="transparent"/>
                <line x1="27" y1="220" x2="1183" y2="220" stroke="#ffe082" stroke-width="3"/>
              </g>

              <!-- Dây 4 — D3 (vàng gold sáng) -->
              <g class="guitar-string" onclick="playGuitarString(3)">
                <rect x="20" y="260" width="1180" height="70" fill="transparent"/>
                <line x1="27" y1="295" x2="1183" y2="295" stroke="#ffc107" stroke-width="3.6"/>
              </g>

              <!-- Dây 5 — A2 (vàng gold đậm hơn) -->
              <g class="guitar-string" onclick="playGuitarString(4)">
                <rect x="20" y="335" width="1180" height="70" fill="transparent"/>
                <line x1="27" y1="370" x2="1183" y2="370" stroke="#ffb300" stroke-width="4.4"/>
              </g>

              <!-- Dây 6 — E2 (dày nhất, vàng cam) -->
              <g class="guitar-string" onclick="playGuitarString(5)">
                <rect x="20" y="410" width="1180" height="70" fill="transparent"/>
                <line x1="27" y1="445" x2="1183" y2="445" stroke="#ff9800" stroke-width="5.2"/>
              </g>

              <!-- Tên nốt -->
              <text class="guitar-string-label" x="1160" y="76" text-anchor="end">E4</text>
              <text class="guitar-string-label" x="1160" y="151" text-anchor="end">B3</text>
              <text class="guitar-string-label" x="1160" y="226" text-anchor="end">G3</text>
              <text class="guitar-string-label" x="1160" y="301" text-anchor="end">D3</text>
              <text class="guitar-string-label" x="1160" y="376" text-anchor="end">A2</text>
              <text class="guitar-string-label" x="1160" y="451" text-anchor="end">E2</text>
            </svg>
          </div>

          <div class="test-hint">
            💡 Standard tuning: <kbd>E</kbd> <kbd>B</kbd> <kbd>G</kbd> <kbd>D</kbd> <kbd>A</kbd> <kbd>E</kbd> — Bấm vào từng dây để nghe, hoặc bấm phím số <kbd>1</kbd>–<kbd>6</kbd>.
          </div>
        </div>

        <!-- Panel: Drums -->
        <div class="test-panel" id="test-panel-drums" style="display:none">
          <div class="test-panel-head">
            <div>
              <h3>🥁 Bộ trống Acoustic</h3>
              <p>Bấm vào từng bộ phận của dàn trống để nghe âm thanh</p>
            </div>
            <div class="test-panel-actions">
              <button class="btn btn-primary" onclick="testDrumDemo()">▶ Chơi beat mẫu</button>
            </div>
          </div>

          <div class="drum-wrap">
            <svg viewBox="0 0 800 620" class="drum-svg" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <line x1="180" y1="130" x2="180" y2="420" stroke="#555" stroke-width="2" opacity="0.5"/>
              <line x1="640" y1="180" x2="640" y2="440" stroke="#555" stroke-width="2" opacity="0.5"/>
              <line x1="130" y1="300" x2="130" y2="470" stroke="#555" stroke-width="2" opacity="0.5"/>

              <g class="drum-piece" data-drum="crash" onclick="hitDrum('crash', this)">
                <ellipse cx="180" cy="130" rx="88" ry="28" fill="#e8c84a" stroke="#8b6914" stroke-width="3"/>
                <ellipse cx="180" cy="130" rx="70" ry="22" fill="none" stroke="#a37e1c" stroke-width="1.2" opacity="0.7"/>
                <ellipse cx="180" cy="130" rx="50" ry="15" fill="none" stroke="#a37e1c" stroke-width="1" opacity="0.6"/>
                <ellipse cx="180" cy="130" rx="30" ry="9" fill="none" stroke="#a37e1c" stroke-width="1" opacity="0.5"/>
                <circle cx="180" cy="130" r="8" fill="#8b6914"/>
                <circle cx="180" cy="130" r="4" fill="#fff" opacity="0.5"/>
                <text class="drum-label" x="180" y="195" text-anchor="middle">Crash</text>
              </g>

              <g class="drum-piece" data-drum="ride" onclick="hitDrum('ride', this)">
                <ellipse cx="640" cy="180" rx="102" ry="32" fill="#e8c84a" stroke="#8b6914" stroke-width="3"/>
                <ellipse cx="640" cy="180" rx="82" ry="25" fill="none" stroke="#a37e1c" stroke-width="1.2" opacity="0.7"/>
                <ellipse cx="640" cy="180" rx="60" ry="18" fill="none" stroke="#a37e1c" stroke-width="1" opacity="0.6"/>
                <ellipse cx="640" cy="180" rx="38" ry="11" fill="none" stroke="#a37e1c" stroke-width="1" opacity="0.5"/>
                <circle cx="640" cy="180" r="9" fill="#8b6914"/>
                <circle cx="640" cy="180" r="4.5" fill="#fff" opacity="0.5"/>
                <text class="drum-label" x="640" y="255" text-anchor="middle">Ride</text>
              </g>

              <g class="drum-piece" data-drum="hihat" onclick="hitDrum('hihat', this)">
                <ellipse cx="125" cy="295" rx="85" ry="28" fill="#e8c84a" stroke="#8b6914" stroke-width="3"/>
                <ellipse cx="125" cy="295" rx="65" ry="21" fill="none" stroke="#a37e1c" stroke-width="1.2" opacity="0.7"/>
                <ellipse cx="125" cy="295" rx="45" ry="14" fill="none" stroke="#a37e1c" stroke-width="1" opacity="0.6"/>
                <ellipse cx="125" cy="308" rx="85" ry="26" fill="#c9a828" stroke="#7a5a10" stroke-width="3"/>
                <ellipse cx="125" cy="308" rx="60" ry="18" fill="none" stroke="#8b6914" stroke-width="1" opacity="0.6"/>
                <circle cx="125" cy="295" r="7" fill="#8b6914"/>
                <text class="drum-label" x="125" y="360" text-anchor="middle">Hi-hat</text>
              </g>

              <g class="drum-piece" data-drum="tom" onclick="hitDrum('tom', this)">
                <circle cx="330" cy="255" r="70" fill="#d4c4b0" stroke="#5a4830" stroke-width="5"/>
                <circle cx="330" cy="255" r="58" fill="#f5efe8" stroke="#8b7355" stroke-width="2"/>
                <circle cx="330" cy="255" r="45" fill="none" stroke="#b8a890" stroke-width="1.2" opacity="0.7"/>
                <circle cx="330" cy="255" r="32" fill="none" stroke="#b8a890" stroke-width="1" opacity="0.5"/>
                <circle cx="330" cy="255" r="15" fill="none" stroke="#b8a890" stroke-width="1" opacity="0.4"/>
                <circle cx="330" cy="200" r="3" fill="#888"/>
                <circle cx="330" cy="310" r="3" fill="#888"/>
                <circle cx="275" cy="255" r="3" fill="#888"/>
                <circle cx="385" cy="255" r="3" fill="#888"/>
                <text class="drum-label" x="330" y="345" text-anchor="middle">Tom</text>
              </g>

              <g class="drum-piece" data-drum="kick" onclick="hitDrum('kick', this)">
                <circle cx="400" cy="460" r="115" fill="#1a1a1a" stroke="#3a3a3a" stroke-width="6"/>
                <circle cx="400" cy="460" r="102" fill="#2a2a2a" stroke="#4a4a4a" stroke-width="2"/>
                <circle cx="400" cy="460" r="88" fill="#0f0f0f" stroke="#2a2a2a" stroke-width="2"/>
                <circle cx="400" cy="460" r="30" fill="#000" stroke="#333" stroke-width="2"/>
                <circle cx="400" cy="460" r="8" fill="#444"/>
                <circle cx="400" cy="365" r="4" fill="#666"/>
                <circle cx="400" cy="555" r="4" fill="#666"/>
                <circle cx="305" cy="460" r="4" fill="#666"/>
                <circle cx="495" cy="460" r="4" fill="#666"/>
                <circle cx="333" cy="393" r="3" fill="#555"/>
                <circle cx="467" cy="393" r="3" fill="#555"/>
                <circle cx="333" cy="527" r="3" fill="#555"/>
                <circle cx="467" cy="527" r="3" fill="#555"/>
                <text class="drum-label" x="400" y="600" text-anchor="middle" fill="#ccc">Kick</text>
              </g>

              <g class="drum-piece" data-drum="snare" onclick="hitDrum('snare', this)">
                <circle cx="215" cy="455" r="76" fill="#d4c4b0" stroke="#5a4830" stroke-width="5"/>
                <circle cx="215" cy="455" r="63" fill="#fafaf5" stroke="#8b7355" stroke-width="2"/>
                <circle cx="215" cy="455" r="50" fill="none" stroke="#b8a890" stroke-width="1.2" opacity="0.7"/>
                <circle cx="215" cy="455" r="36" fill="none" stroke="#b8a890" stroke-width="1" opacity="0.5"/>
                <circle cx="215" cy="455" r="18" fill="none" stroke="#b8a890" stroke-width="1" opacity="0.4"/>
                <circle cx="215" cy="392" r="3" fill="#888"/>
                <circle cx="215" cy="518" r="3" fill="#888"/>
                <circle cx="152" cy="455" r="3" fill="#888"/>
                <circle cx="278" cy="455" r="3" fill="#888"/>
                <text class="drum-label" x="215" y="555" text-anchor="middle">Snare</text>
              </g>

              <g class="drum-piece" data-drum="tom" onclick="hitDrum('tom', this)">
                <circle cx="610" cy="440" r="85" fill="#d4c4b0" stroke="#5a4830" stroke-width="5"/>
                <circle cx="610" cy="440" r="71" fill="#f5efe8" stroke="#8b7355" stroke-width="2"/>
                <circle cx="610" cy="440" r="56" fill="none" stroke="#b8a890" stroke-width="1.2" opacity="0.7"/>
                <circle cx="610" cy="440" r="40" fill="none" stroke="#b8a890" stroke-width="1" opacity="0.5"/>
                <circle cx="610" cy="440" r="22" fill="none" stroke="#b8a890" stroke-width="1" opacity="0.4"/>
                <circle cx="610" cy="370" r="3" fill="#888"/>
                <circle cx="610" cy="510" r="3" fill="#888"/>
                <circle cx="540" cy="440" r="3" fill="#888"/>
                <circle cx="680" cy="440" r="3" fill="#888"/>
                <text class="drum-label" x="610" y="545" text-anchor="middle">Floor Tom</text>
              </g>
            </svg>
          </div>

          <div class="test-hint">
            💡 Mẹo: Dùng <kbd>Q</kbd> <kbd>W</kbd> <kbd>E</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> để chơi bằng bàn phím máy tính.
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ============ SUCCESS ============ -->
  <div class="view" id="view-success">
    <div class="success-wrap">
      <div class="success-box">
        <div class="success-icon">✓</div>
        <h1>Đặt hàng thành công!</h1>
        <div class="system-status">📡 Đã gửi thông tin đến hệ thống</div>
        <p class="sub">Thông tin đơn hàng của bạn đã được gửi đến hệ thống Gewon Music. Đơn hàng đang trên đường giao đến bạn. Chúng tôi sẽ liên hệ xác nhận trong <strong style="color:#fff">30 phút</strong>.</p>

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

        <p class="success-note">Mã đơn hàng: <strong style="color:#fff" id="s-code">#GW-000000</strong> — Vui lòng giữ điện thoại để nhận cuộc gọi xác nhận.</p>
      </div>
    </div>
  </div>

  <!-- ============ WARRANTY ============ -->
  <div class="view" id="view-warranty">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span class="sep">/</span><span>Bảo hành 3 năm</span></div>
      <h1>Bảo hành 3 năm</h1>
      <p>Chính sách bảo hành minh bạch, đảm bảo quyền lợi khách hàng.</p>
    </div>

    <div class="contact-section" style="padding-top:20px">
      <div style="max-width:1000px;margin:0 auto">
        <div class="warranty-hero">
          <div class="shield">🛡️</div>
          <div class="big-num">3 NĂM</div>
          <div class="big-label">Bảo hành chính hãng</div>
          <p>Tất cả sản phẩm Piano, Guitar, Trống mua tại Gewon Music đều được bảo hành <strong>3 năm</strong> — vượt trội so với mức 1–2 năm thông thường.</p>
        </div>

        <div class="benefit-grid">
          <div class="contact-card"><div class="ic">🔧</div><h4>Miễn phí sửa chữa</h4><p>3 năm đầu</p><small>Mọi lỗi kỹ thuật từ nhà sản xuất — miễn phí 100%</small></div>
          <div class="contact-card"><div class="ic">🎼</div><h4>Lên dây piano</h4><p>2 lần/năm</p><small>Miễn phí cho piano cơ trong suốt thời gian bảo hành</small></div>
          <div class="contact-card"><div class="ic">🚚</div><h4>Vận chuyển</h4><p>2 chiều</p><small>Miễn phí vận chuyển cả đi và về khi bảo hành</small></div>
          <div class="contact-card"><div class="ic">⚡</div><h4>Xử lý nhanh</h4><p>Trong 48h</p><small>Tiếp nhận và xử lý yêu cầu bảo hành trong 2 ngày</small></div>
        </div>

        <div class="warranty-box">
          <h3>📋 Chi tiết chính sách</h3>
          <div class="policy-list">
            <div class="policy-row"><dt>Thời hạn bảo hành</dt><dd>36 tháng (3 năm) kể từ ngày mua</dd></div>
            <div class="policy-row"><dt>Phạm vi áp dụng</dt><dd>Piano, Guitar, Trống mua tại Gewon Music</dd></div>
            <div class="policy-row"><dt>Lỗi được bảo hành</dt><dd>Lỗi kỹ thuật từ nhà sản xuất, linh kiện hỏng do NSX</dd></div>
            <div class="policy-row"><dt>Không bảo hành</dt><dd>Hư hỏng do va đập, ngập nước, tự tháo lắp</dd></div>
            <div class="policy-row"><dt>Thời gian xử lý</dt><dd>Tối đa 48 giờ từ khi tiếp nhận</dd></div>
            <div class="policy-row"><dt>Hình thức</dt><dd>Sửa chữa miễn phí tại cửa hàng hoặc tận nơi</dd></div>
            <div class="policy-row"><dt>Chứng từ cần</dt><dd>Hóa đơn mua hàng hoặc phiếu bảo hành</dd></div>
          </div>
        </div>

        <div class="warranty-box">
          <h3>⚖️ Điều khoản bảo hành</h3>
          <ul class="feature-list">
            <li>Sản phẩm còn trong thời hạn bảo hành, có hóa đơn chứng minh</li>
            <li>Tem niêm phong và số serial còn nguyên vẹn</li>
            <li>Không có dấu hiệu tự tháo, sửa chữa bởi đơn vị khác</li>
            <li>Không hư hỏng do va đập, rơi vỡ, ngập nước, hỏa hoạn</li>
            <li>Sử dụng đúng mục đích và điều kiện tiêu chuẩn của NSX</li>
            <li>Trường hợp hết linh kiện thay thế, Gewon Music hỗ trợ đổi mới tương đương</li>
          </ul>
        </div>

        <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
          <button class="btn btn-primary" onclick="askBot('Tôi muốn hỏi về chính sách bảo hành 3 năm')">💬 Hỏi về bảo hành</button>
          <a class="btn btn-ghost" href="tel:0385730766">📞 Gọi 0385 730 766</a>
        </div>
      </div>
    </div>
  </div>

  <!-- ============ CONTACT ============ -->
  <div class="view" id="view-contact">
    <div class="page-head">
      <div class="breadcrumb"><a onclick="go('home')">Trang chủ</a><span class="sep">/</span><span>Liên hệ</span></div>
      <h1>Liên hệ</h1>
      <p>Ghé showroom để trải nghiệm trực tiếp, hoặc liên hệ qua các kênh dưới đây.</p>
    </div>
    <div class="contact-section" style="padding-top:20px">
      <div class="contact-grid">
        <div class="contact-card">
          <div class="ic">📍</div>
          <h4>Showroom</h4>
          <p>TP.HCM</p>
          <small>Thử đàn trực tiếp, tư vấn bởi đội ngũ am hiểu</small>
        </div>
        <div class="contact-card">
          <div class="ic">📞</div>
          <h4>Hotline / Zalo</h4>
          <p><a href="tel:0385730766">0385 730 766</a></p>
          <small>Gọi trực tiếp hoặc nhắn tin Zalo/SMS tuỳ ý — hỗ trợ 24/7</small>
        </div>
        <div class="contact-card">
          <div class="ic">🍋</div>
          <h4>Chat AI</h4>
          <p>ChanhNgot🍋</p>
          <small>Tư vấn 24/7, mô tả chi tiết sản phẩm, kiểm tra đơn hàng</small>
        </div>
        <div class="contact-card">
          <div class="ic">🕐</div>
          <h4>Giờ mở cửa</h4>
          <p>8:00 — 21:00</p>
          <small>Thứ 2 — Chủ nhật, kể cả ngày lễ</small>
        </div>
      </div>
    </div>
  </div>

</main>

<footer>
  <div class="brand-big">Gewon Music</div>
  <div class="footer-info">
    <span>📍 TP.HCM</span>
    <span>📞 <a href="tel:0385730766">0385 730 766</a></span>
    <span>💬 Zalo/SMS: 0385 730 766</span>
  </div>
  <div style="font-size:11px;opacity:.5;margin-top:20px">
    Website demo — Dữ liệu giả lập phục vụ mục đích xây dựng & kiểm thử.
  </div>
</footer>

<button id="chat-btn" onclick="toggleChat()">
  🍋
  <span class="chat-badge" id="chatBadge">1</span>
</button>

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
    <button class="chip" onclick="askBot('Tôi muốn hủy đơn hàng')">❌ Hủy đơn</button>
    <button class="chip" onclick="askBot('Test nhạc cụ')">🎹 Test</button>
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
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c1c1c"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>
    <rect width="600" height="600" fill="url(#g)"/>
    <text x="300" y="290" font-family="Inter,system-ui,sans-serif" font-size="90" text-anchor="middle">🎵</text>
    <text x="300" y="370" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="700" fill="#666" text-anchor="middle">Gewon Music</text>
    <text x="300" y="405" font-family="Inter,system-ui,sans-serif" font-size="14" fill="#444" text-anchor="middle">${label}</text>
  </svg>`;
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

/* ============================================================
   PRODUCT DATABASE
   ============================================================ */
const IMG = {
  piano: [
    'https://images.unsplash.com/photo-1552422535-c45813c61732?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573871669414-010dbf73ca84?w=1200&q=85&auto=format&fit=crop'
  ],
  guitar: [
    'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550985616-10810253b84d?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=1200&q=85&auto=format&fit=crop'
  ],
  drums: [
    'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1200&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=85&auto=format&fit=crop'
  ]
};

function pickImages(pool, offset){
  const out = [];
  for(let i=0;i<4;i++) out.push(pool[(offset+i) % pool.length]);
  return out;
}

const DB = {
  'yamaha-p45':{name:'Yamaha P-45',brand:'Yamaha',brandKey:'yamaha',cat:'piano',type:'Piano điện · 88 phím',price:'11.500.000đ',old:'13.200.000đ',images:pickImages(IMG.piano,0),short:'Dòng piano điện phổ biến nhất cho người mới. Phím GHS cảm ứng lực, nguồn âm Pure CF từ đàn Grand Yamaha.',specs:{'Hãng':'Yamaha (Nhật Bản)','Số phím':'88 phím','Cảm ứng lực':'GHS','Số giọng':'10 giọng','Đa âm':'64 nốt','Nguồn âm':'Pure CF Sound Engine','Kết nối':'USB to Host, Headphone','Trọng lượng':'11.5 kg'},features:['Phím GHS mô phỏng cảm giác đàn cơ','Nguồn âm Pure CF từ Grand Piano CFIIIS','Chế độ Dual/Layer ghép 2 giọng','Chạy được bằng pin AA','Bảo hành chính hãng 3 năm']},
  'yamaha-p125':{name:'Yamaha P-125',brand:'Yamaha',brandKey:'yamaha',cat:'piano',type:'Piano điện · 88 phím',price:'18.500.000đ',old:'21.000.000đ',images:pickImages(IMG.piano,1),short:'Nâng cấp từ P-45 với 24 giọng, kết nối USB/MIDI, âm thanh Piano CFX cao cấp và loa 7W x 2 mạnh mẽ.',specs:{'Hãng':'Yamaha (Nhật Bản)','Số phím':'88 phím','Cảm ứng lực':'GHS','Số giọng':'24 giọng','Đa âm':'192 nốt','Nguồn âm':'Pure CF Sound Engine','Kết nối':'USB, AUX Out, Headphone','Trọng lượng':'11.8 kg'},features:['Âm thanh Piano CFX từ Grand Concert','Chế độ Sound Boost âm lượng lớn hơn','Dual, Split, Duo linh hoạt','App Smart Pianist qua USB','Bảo hành chính hãng 3 năm']},
  'yamaha-u1':{name:'Yamaha U1',brand:'Yamaha',brandKey:'yamaha',cat:'piano',type:'Piano cơ Upright · 121cm',price:'135.000.000đ',old:'',images:pickImages(IMG.piano,2),short:'Huyền thoại piano cơ Upright Nhật Bản — được nhạc viện và giáo viên khuyên dùng. Bền bỉ hàng chục năm.',specs:{'Hãng':'Yamaha (Nhật Bản)','Loại':'Piano cơ Upright','Chiều cao':'121 cm','Số phím':'88 phím','Búa':'Búa nỉ đặc biệt','Pedal':'3 pedal đầy đủ','Kích thước':'153 × 121 × 62 cm','Trọng lượng':'~228 kg'},features:['Âm thanh cân bằng ở mọi dải','Cơ chế búa cho cảm giác chân thực','Độ bền vượt trội, giữ giá tốt','Phù hợp học tập & biểu diễn','Bảo hành chính hãng 3 năm']},
  'casio-cdp-s110':{name:'Casio CDP-S110',brand:'Casio',brandKey:'casio',cat:'piano',type:'Piano điện · 88 phím',price:'8.900.000đ',old:'10.500.000đ',images:pickImages(IMG.piano,0),short:'Giá rẻ nhất phân khúc piano điện 88 phím. Thiết kế siêu mỏng chỉ 10.5kg.',specs:{'Hãng':'Casio (Nhật Bản)','Số phím':'88 phím','Cảm ứng lực':'Scaled Hammer Action II','Số giọng':'10 giọng','Đa âm':'64 nốt','Kết nối':'USB, Headphone','Trọng lượng':'10.5 kg','Pin':'Chạy được 6 pin AA'},features:['Thiết kế siêu mỏng, dễ mang đi','Phím Scaled Hammer Action II','Chế độ Duet cho 2 người chơi','Chạy pin, chơi ngoài trời','Bảo hành chính hãng 3 năm']},
  'casio-px-s1100':{name:'Casio PX-S1100',brand:'Casio',brandKey:'casio',cat:'piano',type:'Piano điện · Bluetooth',price:'15.900.000đ',old:'18.500.000đ',images:pickImages(IMG.piano,1),short:'Piano điện mỏng nhất thế giới (232mm). Bluetooth Audio & MIDI, kết nối app Casio Music Space.',specs:{'Hãng':'Casio (Nhật Bản)','Số phím':'88 phím','Cảm ứng lực':'Smart Scaled Hammer Action','Số giọng':'18 giọng','Đa âm':'192 nốt','Kết nối':'Bluetooth Audio/MIDI, USB','Trọng lượng':'11.2 kg','Độ sâu':'232 mm'},features:['Mỏng nhất thế giới chỉ 232mm','Bluetooth Audio phát nhạc từ điện thoại','App Casio Music Space','Khóa phím cảm ứng hiện đại','Bảo hành chính hãng 3 năm']},
  'casio-ap270':{name:'Casio AP-270',brand:'Casio',brandKey:'casio',cat:'piano',type:'Piano điện dạng tủ',price:'24.900.000đ',old:'28.000.000đ',images:pickImages(IMG.piano,2),short:'Piano điện dạng tủ sang trọng, 3 pedal, cảm giác chơi như piano cơ. Phù hợp phòng khách.',specs:{'Hãng':'Casio (Nhật Bản)','Loại':'Piano điện dạng tủ','Số phím':'88 phím','Cảm ứng lực':'Tri-sensor Scaled Hammer','Số giọng':'22 giọng','Đa âm':'256 nốt','Pedal':'3 pedal đầy đủ','Trọng lượng':'36.5 kg'},features:['Thiết kế tủ gỗ sang trọng','3 pedal như piano cơ','Cảm ứng lực Tri-sensor chân thực','Chế độ Concert Play','Bảo hành chính hãng 3 năm']},
  'victor-p125':{name:'Victor P-125',brand:'Victor',brandKey:'victor',cat:'piano',type:'Piano điện · 88 phím',price:'10.500.000đ',old:'12.000.000đ',images:pickImages(IMG.piano,0),short:'Piano điện Victor Nhật Bản — 88 phím cảm ứng lực, âm thanh ấm áp kiểu châu Âu.',specs:{'Hãng':'Victor (Nhật Bản)','Số phím':'88 phím','Cảm ứng lực':'Hammer Action 3 mức','Số giọng':'12 giọng','Đa âm':'128 nốt','Kết nối':'USB, MIDI, Headphone','Trọng lượng':'11 kg','Kích thước':'1320 × 260 × 150 mm'},features:['Thương hiệu Victor Nhật Bản','Âm thanh piano ấm kiểu châu Âu','Cảm ứng lực 3 mức','Chế độ Dual & Split','Bảo hành chính hãng 3 năm']},
  'victor-upright':{name:'Victor Upright VU-118',brand:'Victor',brandKey:'victor',cat:'piano',type:'Piano cơ Upright · 118cm',price:'95.000.000đ',old:'',images:pickImages(IMG.piano,1),short:'Piano cơ Upright Victor 118cm — chất lượng Nhật Bản, giá tiết kiệm hơn Yamaha U1.',specs:{'Hãng':'Victor (Nhật Bản)','Loại':'Piano cơ Upright','Chiều cao':'118 cm','Số phím':'88 phím','Búa':'Búa nỉ Nhật Bản','Dây':'Dây đồng Roslau','Pedal':'3 pedal đầy đủ','Trọng lượng':'~210 kg'},features:['Chất lượng Nhật, giá Việt','Âm thanh ấm, hợp đệm hát','Búa nỉ cao cấp bền bỉ','3 pedal đầy đủ','Bảo hành chính hãng 3 năm']},
  'master-mp100':{name:'Master MP-100',brand:'Master',brandKey:'master',cat:'piano',type:'Piano điện · Bluetooth MIDI',price:'12.500.000đ',old:'14.500.000đ',images:pickImages(IMG.piano,2),short:'Master MP-100 — 88 phím cảm ứng lực, Bluetooth MIDI, thiết kế hiện đại cho mọi không gian.',specs:{'Hãng':'Master','Số phím':'88 phím','Cảm ứng lực':'Hammer Action 3 mức','Số giọng':'16 giọng','Đa âm':'128 nốt','Kết nối':'Bluetooth MIDI, USB','Loa':'10W × 2','Trọng lượng':'12 kg'},features:['Bluetooth MIDI kết nối app học đàn','16 giọng phong phú','Loa 10W×2 âm thanh lớn','Metronome & Recorder tích hợp','Bảo hành chính hãng 3 năm']},
  'master-grand':{name:'Master Grand MG-180',brand:'Master',brandKey:'master',cat:'piano',type:'Piano cơ Grand · 180cm',price:'180.000.000đ',old:'',images:pickImages(IMG.piano,0),short:'Piano cơ Grand Master MG-180 — dài 180cm, âm thanh phòng hòa nhạc, phù hợp biểu diễn chuyên nghiệp.',specs:{'Hãng':'Master','Loại':'Piano cơ Grand','Chiều dài':'180 cm','Số phím':'88 phím','Búa':'Búa nỉ Đức','Dây':'Dây đồng Đức','Pedal':'3 pedal','Trọng lượng':'~330 kg'},features:['Âm thanh phòng hòa nhạc','Búa nỉ Đức cao cấp','Thiết kế Grand sang trọng','Phù hợp biểu diễn & thu âm','Bảo hành chính hãng 3 năm']},
  'yamaha-f310':{name:'Yamaha F310',brand:'Yamaha',brandKey:'yamaha',cat:'guitar',type:'Guitar acoustic · Dreadnought',price:'2.900.000đ',old:'3.500.000đ',images:pickImages(IMG.guitar,0),short:'Guitar acoustic phổ biến nhất cho người mới. Mặt Spruce, hông lưng Meranti, âm thanh ấm và cân bằng.',specs:{'Hãng':'Yamaha (Nhật Bản)','Loại':'Guitar acoustic','Mặt đàn':'Spruce','Lưng & hông':'Meranti','Số dây':'6 dây','Chiều dài':'Dreadnought 41"','Phù hợp':'Người mới, đệm hát','Bảo hành':'3 năm'},features:['Mặt gỗ Spruce vang ấm','Phù hợp người mới bắt đầu','Độ bền cao, ổn định','Setup chuẩn, dễ bấm','Bảo hành chính hãng 3 năm']},
  'yamaha-c40':{name:'Yamaha C40',brand:'Yamaha',brandKey:'yamaha',cat:'guitar',type:'Guitar classic · Nylon',price:'3.500.000đ',old:'4.200.000đ',images:pickImages(IMG.guitar,2),short:'Guitar classic Yamaha C40 — lựa chọn kinh điển cho người học guitar cổ điển. Dây nilon mềm mại.',specs:{'Hãng':'Yamaha (Nhật Bản)','Loại':'Guitar classic','Mặt đàn':'Spruce','Lưng & hông':'Meranti','Số dây':'6 dây nilon','Chiều dài':'Full size 39"','Phù hợp':'Học cổ điển, đệm hát','Bảo hành':'3 năm'},features:['Dây nilon mềm, dễ bấm','Âm thanh ngọt ngào ấm áp','Thích hợp học guitar cổ điển','Chất lượng Yamaha bền bỉ','Bảo hành chính hãng 3 năm']},
  'fender-strat':{name:'Fender Player Stratocaster',brand:'Fender',brandKey:'fender',cat:'guitar',type:'Guitar điện · Mexico',price:'18.500.000đ',old:'21.500.000đ',images:pickImages(IMG.guitar,1),short:'Huyền thoại guitar điện Fender Stratocaster. Sản xuất tại Mexico, 3 pickup single-coil.',specs:{'Hãng':'Fender (Mexico)','Loại':'Guitar điện','Thân đàn':'Alder','Cần đàn':'Maple, Modern "C"','Phím đàn':'Pau Ferro, 22 phím','Pickup':'3 × Single-Coil','Điều khiển':'1 Vol, 2 Tone, 5-way','Bảo hành':'3 năm'},features:['Pickup Player Series Single-Coil','Cần đàn Modern "C" dễ chơi','Khóa đàn & bridge chất lượng','Âm thanh Fender huyền thoại','Bảo hành chính hãng 3 năm']},
  'gibson-lp':{name:'Gibson Les Paul Standard',brand:'Gibson',brandKey:'gibson',cat:'guitar',type:'Guitar điện · USA',price:'65.000.000đ',old:'',images:pickImages(IMG.guitar,3),short:'Huyền thoại rock Gibson Les Paul Standard. Thân Mahogany, mặt Maple, pickup Burstbucker.',specs:{'Hãng':'Gibson (Mỹ)','Loại':'Guitar điện','Thân đàn':'Mahogany + Maple','Cần đàn':'Mahogany, Slim Taper','Phím đàn':'Rosewood, 22 phím','Pickup':'2 × Burstbucker','Điều khiển':'2 Vol, 2 Tone, 3-way','Bảo hành':'3 năm'},features:['Pickup Burstbucker Gibson USA','Thân Mahogany + Maple âm thanh dày','Chất lượng thủ công tại Mỹ','Cây đàn trong mơ của rocker','Bảo hành chính hãng 3 năm']},
  'ibanez-grx40':{name:'Ibanez GRX40',brand:'Ibanez',brandKey:'ibanez',cat:'guitar',type:'Guitar điện · H-S-H',price:'5.500.000đ',old:'6.500.000đ',images:pickImages(IMG.guitar,4),short:'Guitar điện rock/metal giá tốt cho người mới. Cấu hình H-S-H linh hoạt.',specs:{'Hãng':'Ibanez (Nhật Bản)','Loại':'Guitar điện','Thân đàn':'Poplar','Cần đàn':'Maple','Phím đàn':'Rosewood, 22 phím','Pickup':'H-S-H','Điều khiển':'1 Vol, 1 Tone, 5-way','Bảo hành':'3 năm'},features:['Cấu hình H-S-H linh hoạt','Cần đàn mỏng dễ chơi','Chất lượng Ibanez bền bỉ','Giá tốt trong phân khúc','Bảo hành chính hãng 3 năm']},
  'fender-squier':{name:'Fender Squier Affinity',brand:'Fender',brandKey:'fender',cat:'guitar',type:'Guitar điện · Entry-level',price:'6.900.000đ',old:'8.200.000đ',images:pickImages(IMG.guitar,2),short:'Dòng entry-level của Fender — thiết kế Stratocaster cổ điển, giá hợp lý cho người mới.',specs:{'Hãng':'Fender (Indonesia)','Loại':'Guitar điện','Thân đàn':'Poplar','Cần đàn':'Maple, "C" shape','Phím đàn':'Indian Laurel, 21 phím','Pickup':'3 × Single-Coil','Điều khiển':'1 Vol, 2 Tone, 5-way','Bảo hành':'3 năm'},features:['Thiết kế Stratocaster kinh điển','Giá tốt cho người mới','Cần đàn "C" shape dễ chơi','Thương hiệu Fender chính hãng','Bảo hành chính hãng 3 năm']},
  'martin-d28':{name:'Martin D-28',brand:'Martin',brandKey:'martin',cat:'guitar',type:'Guitar acoustic · Dreadnought',price:'75.000.000đ',old:'',images:pickImages(IMG.guitar,0),short:'Huyền thoại guitar acoustic Martin D-28. Mặt Sitka Spruce, lưng hông Rosewood.',specs:{'Hãng':'Martin (Mỹ)','Loại':'Guitar acoustic Dreadnought','Mặt đàn':'Sitka Spruce','Lưng & hông':'East Indian Rosewood','Cần đàn':'Select Hardwood','Phím đàn':'Ebony, 20 phím','Chiều dài':'Dreadnought 41"','Bảo hành':'3 năm'},features:['Huyền thoại acoustic nước Mỹ','Sitka Spruce + Rosewood cao cấp','Thủ công tại Mỹ','Âm thanh ấm, vang, chi tiết','Bảo hành chính hãng 3 năm']},
  'taylor-114e':{name:'Taylor 114e',brand:'Taylor',brandKey:'taylor',cat:'guitar',type:'Guitar acoustic điện · ES2',price:'15.500.000đ',old:'18.000.000đ',images:pickImages(IMG.guitar,1),short:'Guitar acoustic Taylor 114e có pickup ES2, phù hợp biểu diễn và thu âm.',specs:{'Hãng':'Taylor (Mỹ)','Loại':'Guitar acoustic điện','Mặt đàn':'Sitka Spruce','Lưng & hông':'Sapele','Cần đàn':'Maple','Phím đàn':'Ebony, 20 phím','Pickup':'Taylor ES2','Bảo hành':'3 năm'},features:['Pickup ES2 chính hãng Taylor','Biểu diễn sân khấu trực tiếp','Chất lượng Mỹ tinh xảo','Grand Auditorium cân bằng','Bảo hành chính hãng 3 năm']},
  'tama-rhythm':{name:'Tama Rhythm Mate',brand:'Tama',brandKey:'tama',cat:'drums',type:'Trống acoustic · 5 mảnh',price:'12.500.000đ',old:'14.500.000đ',images:pickImages(IMG.drums,0),short:'Bộ trống acoustic Tama Rhythm Mate 5 mảnh — lựa chọn phổ biến cho người mới.',specs:{'Hãng':'Tama (Nhật Bản)','Loại':'Trống acoustic 5 mảnh','Bass drum':'22" × 16"','Tom 1':'10" × 7"','Tom 2':'12" × 8"','Floor tom':'16" × 15"','Snare':'14" × 5.5"','Vật liệu':'Poplar'},features:['Bộ 5 mảnh đầy đủ cho người mới','Hardware chắc chắn, bền bỉ','Học tập và biểu diễn nhỏ','Chất lượng Tama Nhật Bản','Bảo hành chính hãng 3 năm']},
  'pearl-roadshow':{name:'Pearl Roadshow',brand:'Pearl',brandKey:'pearl',cat:'drums',type:'Trống acoustic · 5 mảnh',price:'14.500.000đ',old:'17.000.000đ',images:pickImages(IMG.drums,1),short:'Bộ trống Pearl Roadshow 5 mảnh — chất lượng ổn định từ thương hiệu trống số 1 thế giới.',specs:{'Hãng':'Pearl (Nhật Bản)','Loại':'Trống acoustic 5 mảnh','Bass drum':'22" × 16"','Tom 1':'10" × 8"','Tom 2':'12" × 9"','Floor tom':'16" × 16"','Snare':'14" × 5.5"','Vật liệu':'Poplar'},features:['Hardware Pearl chắc chắn','Bộ 5 mảnh đầy đủ','Biểu diễn sân khấu nhỏ','Thương hiệu trống số 1 thế giới','Bảo hành chính hãng 3 năm']},
  'roland-td1k':{name:'Roland TD-1K',brand:'Roland',brandKey:'roland',cat:'drums',type:'Trống điện · V-Drums',price:'11.500.000đ',old:'13.500.000đ',images:pickImages(IMG.drums,0),short:'Trống điện Roland TD-1K — dùng tai nghe chơi đêm không làm phiền hàng xóm.',specs:{'Hãng':'Roland (Nhật Bản)','Loại':'Trống điện V-Drums','Số pad':'5 pad','Snare':'Pad lưới Mesh','Hi-hat':'Pedal điều khiển','Bộ âm thanh':'15 bộ V-Drums','Kết nối':'Headphone, AUX, MIDI','Phù hợp':'Người mới, chung cư'},features:['Chơi đêm với tai nghe','Pad lưới snare cảm ứng tốt','Nhiều bộ âm thanh Roland','Coach Mode học trống','Bảo hành chính hãng 3 năm']},
  'yamaha-stage':{name:'Yamaha Stage Custom',brand:'Yamaha',brandKey:'yamaha',cat:'drums',type:'Trống acoustic · Birch',price:'19.500.000đ',old:'23.000.000đ',images:pickImages(IMG.drums,1),short:'Bộ trống Yamaha Stage Custom — gỗ Birch cao cấp, âm thanh chuyên nghiệp cho biểu diễn và thu âm.',specs:{'Hãng':'Yamaha (Nhật Bản)','Loại':'Trống acoustic 5 mảnh','Bass drum':'22" × 17"','Tom 1':'10" × 7"','Tom 2':'12" × 8"','Floor tom':'16" × 15"','Snare':'14" × 5.5"','Vật liệu':'Birch 6 lớp'},features:['Gỗ Birch âm thanh tươi sáng','Hardware Yamaha chắc chắn','Sân khấu và phòng thu','Chất lượng chuyên nghiệp','Bảo hành chính hãng 3 năm']},
  'alesis-nitro':{name:'Alesis Nitro Mesh',brand:'Alesis',brandKey:'alesis',cat:'drums',type:'Trống điện · Mesh pad',price:'8.500.000đ',old:'10.000.000đ',images:pickImages(IMG.drums,0),short:'Bộ trống điện Alesis Nitro Mesh — pad lưới mesh cao cấp giá rẻ nhất phân khúc.',specs:{'Hãng':'Alesis (Mỹ)','Loại':'Trống điện Mesh','Số pad':'8 pad (tất cả Mesh)','Snare':'Dual-zone mesh','Bộ âm thanh':'40 kits, 385 sounds','Kết nối':'USB MIDI, Headphone','Phù hợp':'Học tập tại nhà','Bảo hành':'3 năm'},features:['Toàn bộ pad lưới Mesh cao cấp','385 âm thanh, 40 bộ kit','Kết nối USB MIDI với máy tính','Chế độ học tập & Metronome','Bảo hành chính hãng 3 năm']},
  'pearl-export':{name:'Pearl Export EXX',brand:'Pearl',brandKey:'pearl',cat:'drums',type:'Trống acoustic · 5 mảnh',price:'22.500.000đ',old:'',images:pickImages(IMG.drums,1),short:'Pearl Export EXX — dòng trống huyền thoại, âm thanh mạnh mẽ, chuyên nghiệp.',specs:{'Hãng':'Pearl (Nhật Bản)','Loại':'Trống acoustic 5 mảnh','Bass drum':'22" × 18"','Tom 1':'10" × 7"','Tom 2':'12" × 8"','Floor tom':'16" × 16"','Snare':'14" × 5.5"','Vật liệu':'Poplar/Mahogany 6 lớp'},features:['Dòng trống huyền thoại Pearl','Âm thanh mạnh mẽ, uy lực','Hardware 830 series','Biểu diễn chuyên nghiệp','Bảo hành chính hãng 3 năm']}
};

/* ============================================================
   ORDER STORAGE
   ============================================================ */
const ORDER_KEY = 'gewon_orders_v1';
const LOG_KEY = 'gewon_system_logs';
const SEED_FLAG = 'gewon_seeded_v1';

let _ordersCache = null;
let _seedChecked = false;

function getOrders(){
  if(_ordersCache !== null) return _ordersCache;
  try{
    _ordersCache = JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');
    if(!Array.isArray(_ordersCache)) _ordersCache = [];
  }catch(e){
    _ordersCache = [];
  }
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
  else { badge.style.display = 'none'; }
}

function seedDemoOrder(){
  if(_seedChecked) return;
  _seedChecked = true;

  try{
    if(localStorage.getItem(SEED_FLAG)) return;
    localStorage.setItem(SEED_FLAG, '1');
  }catch(e){}

  if(getOrders().length > 0) return;

  const demo = {
    code: '#GW-DEMO01',
    createdAt: Date.now() - 3600000,
    name: 'Khách hàng demo',
    phone: '0385 730 766',
    address: 'Quận 1, TP.HCM',
    note: 'Giao giờ hành chính',
    distance: '8 km',
    feeText: 'Miễn phí',
    feeFree: true,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Quận+1,+TP.HCM',
    product: {
      id: 'yamaha-p45',
      name: 'Yamaha P-45',
      price: '11.500.000đ',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=1200&q=85&auto=format&fit=crop'
    },
    status: 2
  };
  saveOrders([demo]);
}

const ORDER_STEPS = [
  {icon:'✓', label:'Đã xác nhận'},
  {icon:'📦', label:'Chuẩn bị hàng'},
  {icon:'🚚', label:'Đang giao đến bạn'},
  {icon:'🏠', label:'Đã giao thành công'}
];

/* ============================================================
   SYSTEM WEBHOOK
   ============================================================ */
const SYSTEM_WEBHOOK = 'https://example.com/api/gewon/orders';

function sendOrderToSystem(order){
  const payload = {
    order_code: order.code,
    customer: { name: order.name, phone: order.phone, address: order.address, note: order.note || '' },
    product: order.product ? { id: order.product.id, name: order.product.name, price: order.product.price } : null,
    shipping: { distance: order.distance, fee: order.feeText, free: order.feeFree },
    status: 'Đang giao đến bạn',
    channel: 'website',
    source: 'Gewon Music Web Demo',
    created_at: new Date(order.createdAt).toISOString(),
    sent_at: new Date().toISOString()
  };

  console.log('%c[Gewon System] 📤 Đã gửi đơn hàng về hệ thống:', 'color:#4da3ff;font-weight:700', payload);

  try {
    const logs = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    logs.unshift(payload);
    localStorage.setItem(LOG_KEY, JSON.stringify(logs.slice(0, 50)));
  } catch(e){}

  try {
    fetch(SYSTEM_WEBHOOK, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    }).then(res => console.log('[Gewon System] Webhook status:', res.status))
      .catch(err => console.warn('[Gewon System] Webhook không khả dụng (bình thường trong demo):', err.message));
  } catch(e){
    console.warn('[Gewon System] fetch không khả dụng:', e);
  }
  return payload;
}

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
  const prev = history_[history_.length-1] || 'home';
  go(prev, false);
}

window.addEventListener('hashchange', ()=>{
  const h = location.hash.replace('#','');
  if(h && h !== currentView && h !== 'detail' && h !== 'success'){
    go(h, false);
  }
});

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
function cardHTML(p, id){
  return `
    <div class="product-card" onclick="openDetail('${id}')">
      <div class="product-img-wrap">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="imgFail(this)">
        ${p.old ? '<span class="product-badge sale">SALE</span>' : ''}
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">${p.price}${p.old ? `<span class="price-old">${p.old}</span>` : ''}</div>
      </div>
    </div>
  `;
}

function renderCategory(cat, gridId){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  const list = Object.entries(DB).filter(([id,p])=>p.cat===cat);
  grid.innerHTML = list.map(([id,p])=>cardHTML(p,id)).join('');
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
  const list = Object.entries(DB).filter(([id,p])=>{
    if(p.cat !== cat) return false;
    return brandKey === 'all' || p.brandKey === brandKey;
  });
  grid.innerHTML = list.map(([id,p])=>cardHTML(p,id)).join('');
}

/* ============================================================
   DETAIL
   ============================================================ */
let currentId = null;

function openDetail(id){
  const p = DB[id];
  if(!p) return;
  currentId = id;

  const main = document.getElementById('gallery-main');
  main.innerHTML = p.images.map((src,i)=>
    `<img src="${src}" class="${i===0?'active':''}" alt="${p.name}" onerror="imgFail(this)">`
  ).join('');
  const thumbs = document.getElementById('gallery-thumbs');
  thumbs.innerHTML = p.images.map((src,i)=>
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

/* ============================================================
   PENDING PRODUCT
   ============================================================ */
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

function clearPendingProduct(){
  pendingProduct = null;
  renderPendingProduct();
}

/* ============================================================
   SHIPPING
   ============================================================ */
let lastDistance = null;
let lastFee = null;

function updateMapFromAddress(address){
  if(!address || address.length < 3) return;
  const frame = document.getElementById('ship-map-frame');
  if(!frame) return;
  const query = encodeURIComponent(address);
  frame.src = `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const fakeKm = Math.min(30, Math.max(1, Math.round(address.length / 3)));
  const feeBox = document.getElementById('ship-fee-box');
  const feeEl = document.getElementById('ship-fee');
  const distEl = document.getElementById('ship-distance');

  lastDistance = fakeKm + ' km';
  if(fakeKm <= 10){
    lastFee = {text:'Miễn phí', free:true};
  } else if(fakeKm <= 20){
    const fee = (fakeKm - 10) * 10000;
    lastFee = {text: fee.toLocaleString('vi-VN') + 'đ', free:false};
  } else {
    lastFee = {text:'Liên hệ', free:false};
  }

  if(feeBox && feeEl && distEl){
    feeBox.style.display = 'block';
    distEl.textContent = lastDistance;
    feeEl.textContent = lastFee.text;
    feeEl.style.color = lastFee.free ? '#30d158' : '#fff';
  }
}

function confirmShipping(){
  const name = (document.getElementById('ship-name')?.value || '').trim();
  const phone = (document.getElementById('ship-phone')?.value || '').trim();
  const address = (document.getElementById('ship-address')?.value || '').trim();
  const note = (document.getElementById('ship-note')?.value || '').trim();

  if(!name || !phone || !address){
    alert('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ!');
    return;
  }

  if(!lastDistance) updateMapFromAddress(address);

  const coordsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const code = '#GW-' + Math.floor(100000 + Math.random()*900000);

  const order = {
    code, createdAt: Date.now(),
    name, phone, address, note,
    distance: lastDistance || '—',
    feeText: lastFee ? lastFee.text : 'Miễn phí',
    feeFree: lastFee ? lastFee.free : true,
    mapUrl: coordsUrl,
    product: pendingProduct,
    status: 2
  };

  const list = getOrders();
  list.unshift(order);
  saveOrders(list);

  sendOrderToSystem(order);

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

  setTimeout(()=>notifyCustomerOrderReceived(order), 500);
}

function notifyCustomerOrderReceived(order){
  ensureChatOpen();
  const body = document.getElementById('chat-body');

  const sys = document.createElement('div');
  sys.className = 'msg system';
  sys.textContent = `📡 Thông tin đơn hàng ${order.code} đã được gửi đến hệ thống Gewon Music.`;
  body.appendChild(sys);
  body.scrollTop = body.scrollHeight;

  setTimeout(()=>{
    const typing = addMsg('Đang xử lý...', 'bot typing');
    setTimeout(()=>{
      typing.remove();
      const txt =
`✅ Đơn hàng ${order.code} đã được tiếp nhận!

Cảm ơn ${order.name} đã tin tưởng Gewon Music 🎵

📞 Chúng tôi sẽ liên hệ với bạn qua số ${order.phone} trong vòng 30 phút để xác nhận đơn hàng.
📊 Trạng thái hiện tại: Đang giao đến bạn.
📍 Giao đến: ${order.address}

Bạn có thể yên tâm — đơn hàng đang được xử lý. Theo dõi trạng thái bất cứ lúc nào bằng cách nhấn vào mục "📊 Trạng thái đơn hàng" trên thanh menu nhé!`;
      addMsg(txt, 'bot');
    }, 900);
  }, 400);
}

/* ============================================================
   ORDERS
   ============================================================ */
function renderOrders(){
  const list = document.getElementById('orders-list');
  if(!list) return;
  const orders = getOrders();

  if(orders.length === 0){
    list.innerHTML = `
      <div class="orders-empty">
        <div class="emoji">📦</div>
        <h3>Chưa có đơn hàng nào</h3>
        <p>Bạn chưa có đơn hàng nào. Hãy khám phá sản phẩm và đặt mua — đơn hàng sẽ hiển thị tại đây để bạn theo dõi.</p>
        <button class="btn btn-primary" onclick="go('piano')">Khám phá sản phẩm →</button>
      </div>`;
    return;
  }

  list.innerHTML = orders.map(o => orderCardHTML(o)).join('');
}

function orderCardHTML(o){
  const status = (o.status ?? 2);
  const statusText = ORDER_STEPS[status].label;

  const timeline = ORDER_STEPS.map((s,i)=>{
    let cls = '';
    if(i < status) cls = 'done';
    else if(i === status) cls = 'active';
    return `<div class="tl-step ${cls}">
      <div class="tl-dot">${s.icon}</div>
      <div class="tl-label">${s.label}</div>
    </div>`;
  }).join('');

  const productHTML = o.product ? `
    <div class="order-product">
      <img src="${o.product.image}" alt="" onerror="imgFail(this)">
      <div>
        <strong>${o.product.name}</strong>
        ${o.product.price ? `<span>${o.product.price}</span>` : ''}
      </div>
    </div>` : '';

  const date = new Date(o.createdAt).toLocaleString('vi-VN', {
    day:'2-digit', month:'2-digit', year:'numeric',
    hour:'2-digit', minute:'2-digit'
  });

  const canCancel = status < 3;
  const actionsHTML = canCancel ? `
    <div class="order-actions">
      <button class="btn-cancel" onclick="cancelOrder('${o.code}')">❌ Hủy đơn hàng</button>
    </div>` : '';

  return `
    <div class="order-card">
      <div class="order-head">
        <div>
          <div class="order-code">${o.code}</div>
          <div class="order-date">🕐 Đặt lúc ${date}</div>
        </div>
        <div class="order-tags">
          <span class="order-sent">📡 Đã gửi hệ thống</span>
          <span class="order-status">${statusText}</span>
        </div>
      </div>
      <div class="order-timeline">${timeline}</div>
      ${productHTML}
      <div class="order-body">
        <div class="order-row"><span>👤 Người nhận</span><strong>${o.name}</strong></div>
        <div class="order-row"><span>📞 Điện thoại</span><strong>${o.phone}</strong></div>
        <div class="order-row"><span>📍 Địa chỉ</span><strong>${o.address}</strong></div>
        ${o.note ? `<div class="order-row"><span>📝 Ghi chú</span><strong>${o.note}</strong></div>` : ''}
        ${o.distance ? `<div class="order-row"><span>📏 Khoảng cách</span><strong>${o.distance}</strong></div>` : ''}
        <div class="order-row"><span>💰 Phí giao</span><strong class="${o.feeFree?'fee-free':''}">${o.feeText}</strong></div>
      </div>
      ${actionsHTML}
    </div>
  `;
}

function cancelOrder(code){
  console.log('%c[Gewon] 🗑️ cancelOrder() — mã:', 'color:#ff8a82;font-weight:700', code);

  const orders = getOrders();
  const idx = orders.findIndex(o => o.code === code);
  if(idx === -1){
    console.warn('[Gewon] Không tìm thấy đơn:', code);
    return;
  }
  const o = orders[idx];

  if((o.status ?? 2) >= 3){
    alert('Đơn hàng đã giao thành công, không thể hủy.');
    return;
  }

  showCancelConfirm(code);
}

function showCancelConfirm(code){
  const old = document.getElementById('cancel-modal');
  if(old) old.remove();

  const overlay = document.createElement('div');
  overlay.id = 'cancel-modal';
  overlay.innerHTML = `
    <div class="cancel-modal-box">
      <div class="cancel-modal-icon">⚠️</div>
      <h3>Hủy đơn hàng ${code}?</h3>
      <p>Đơn hàng sẽ bị <strong>XÓA</strong> khỏi danh sách.<br>Hành động này không thể hoàn tác.</p>
      <div class="cancel-modal-actions">
        <button class="btn btn-ghost" id="cancel-no">Không, giữ lại</button>
        <button class="btn btn-primary" id="cancel-yes" style="background:#ff3b30;color:#fff">Có, hủy đơn</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById('cancel-no').onclick = () => overlay.remove();
  document.getElementById('cancel-yes').onclick = () => {
    overlay.remove();
    doCancelOrder(code);
  };
  overlay.onclick = (e) => { if(e.target === overlay) overlay.remove(); };
}

function doCancelOrder(code){
  const orders = getOrders();
  const idx = orders.findIndex(o => o.code === code);
  if(idx === -1) return;
  const o = orders[idx];

  orders.splice(idx, 1);
  saveOrders(orders);
  console.log('%c[Gewon] ✅ Đã xóa đơn khỏi danh sách. Còn lại:', 'color:#30d158;font-weight:700', orders.length, 'đơn');

  try {
    fetch(SYSTEM_WEBHOOK, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        order_code: o.code,
        action: 'cancel',
        customer: { name: o.name, phone: o.phone },
        product: o.product ? { id: o.product.id, name: o.product.name } : null,
        cancelled_at: new Date().toISOString()
      })
    }).catch(()=>{});
  } catch(e){}

  ensureChatOpen();
  addMsg(`Tôi muốn hủy đơn hàng ${code}`, 'user');
  const typing = addMsg('Đang xử lý...', 'bot typing');
  setTimeout(()=>{
    typing.remove();
    const remain = getOrders().length;
    const tail = remain === 0
      ? `\n\n📭 Hiện tại bạn không còn đơn hàng nào trong hệ thống.`
      : `\n\n📦 Bạn còn ${remain} đơn hàng khác.`;
    addMsg(`❌ Đơn hàng ${code} đã được hủy và xóa khỏi danh sách đơn hàng.\n\n📌 Lưu ý:\n• Đơn hàng đã dừng giao\n• Nếu đã thanh toán, khoản hoàn tiền sẽ được xử lý trong 3-5 ngày làm việc\n• Bạn có thể đặt lại bất cứ lúc nào${tail}\n\nCảm ơn bạn đã thông báo sớm! 🍋`, 'bot');
  }, 700);

  renderOrders();
  updateOrderBadge();
}

/* ============================================================
   TEST INSTRUMENTS — Web Audio API
   ============================================================ */
let _audioCtx = null;
function getAudioCtx(){
  if(!_audioCtx){
    try{ _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e){ console.warn('[Test] Web Audio không khả dụng:', e); return null; }
  }
  if(_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

const NOTES = [
  {name:'C',  label:'Đô',  freq:261.63},
  {name:'D',  label:'Rê',  freq:293.66},
  {name:'E',  label:'Mi',  freq:329.63},
  {name:'F',  label:'Fa',  freq:349.23},
  {name:'G',  label:'Sol', freq:392.00},
  {name:'A',  label:'La',  freq:440.00},
  {name:'B',  label:'Si',  freq:493.88},
  {name:'C5', label:'Đô',  freq:523.25}
];

const GUITAR_STRINGS = [
  {name:'E4', freq:329.63},
  {name:'B3', freq:246.94},
  {name:'G3', freq:196.00},
  {name:'D3', freq:146.83},
  {name:'A2', freq:110.00},
  {name:'E2', freq:82.41}
];

let currentInstrument = 'piano';
let demoTimeouts = [];

function playPianoTone(freq, dur, vol){
  dur = dur || 1.4;
  vol = (typeof vol === 'number') ? vol : 0.35;
  const ctx = getAudioCtx(); if(!ctx) return;
  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(vol, now + 0.008);
  master.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  master.connect(ctx.destination);

  const harmonics = [
    {mult:1, type:'triangle', gain:1.0},
    {mult:2, type:'sine',     gain:0.35},
    {mult:3, type:'sine',     gain:0.18},
    {mult:4, type:'sine',     gain:0.08}
  ];
  harmonics.forEach(h=>{
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = h.type;
    osc.frequency.value = freq * h.mult;
    g.gain.value = h.gain;
    osc.connect(g).connect(master);
    osc.start(now);
    osc.stop(now + dur);
  });
}

function playBassTone(freq, dur, vol){
  dur = dur || 2.0;
  vol = (typeof vol === 'number') ? vol : 0.16;
  const ctx = getAudioCtx(); if(!ctx) return;
  const now = ctx.currentTime;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(vol, now + 0.015);
  master.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  master.connect(ctx.destination);

  const osc = ctx.createOscillator();
  osc.type = 'triangle';
  osc.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.value = 1.0;
  osc.connect(g).connect(master);
  osc.start(now); osc.stop(now + dur);

  const osc2 = ctx.createOscillator();
  osc2.type = 'sine';
  osc2.frequency.value = freq * 2;
  const g2 = ctx.createGain();
  g2.gain.value = 0.25;
  osc2.connect(g2).connect(master);
  osc2.start(now); osc2.stop(now + dur);
}

function playGuitarTone(freq, dur){
  dur = dur || 1.8;
  const ctx = getAudioCtx(); if(!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.value = freq;
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(3500, now);
  filter.frequency.exponentialRampToValueAtTime(900, now + dur);
  filter.Q.value = 2;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.28, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  osc.connect(filter).connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + dur);

  const osc2 = ctx.createOscillator();
  const g2 = ctx.createGain();
  osc2.type = 'sine';
  osc2.frequency.value = freq * 2;
  g2.gain.setValueAtTime(0.0001, now);
  g2.gain.exponentialRampToValueAtTime(0.06, now + 0.005);
  g2.gain.exponentialRampToValueAtTime(0.0001, now + dur * 0.7);
  osc2.connect(g2).connect(ctx.destination);
  osc2.start(now); osc2.stop(now + dur);
}

function playDrumSound(type){
  const ctx = getAudioCtx(); if(!ctx) return;
  const now = ctx.currentTime;

  function noiseBuffer(seconds){
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for(let i=0;i<d.length;i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  if(type === 'kick'){
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.15);
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.45);
  }
  else if(type === 'snare'){
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer(0.3);
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800;
    filter.Q.value = 0.9;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    noise.connect(filter).connect(gain).connect(ctx.destination);
    noise.start(now); noise.stop(now + 0.3);

    const osc = ctx.createOscillator();
    const g2 = ctx.createGain();
    osc.frequency.value = 190;
    g2.gain.setValueAtTime(0.25, now);
    g2.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(g2).connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.15);
  }
  else if(type === 'hihat'){
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer(0.08);
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7000;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    noise.connect(filter).connect(gain).connect(ctx.destination);
    noise.start(now); noise.stop(now + 0.08);
  }
  else if(type === 'tom'){
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.3);
    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.35);
  }
  else if(type === 'crash'){
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer(1.2);
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 4500;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
    noise.connect(filter).connect(gain).connect(ctx.destination);
    noise.start(now); noise.stop(now + 1.2);
  }
  else if(type === 'ride'){
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer(0.9);
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 5500;
    filter.Q.value = 2;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    noise.connect(filter).connect(gain).connect(ctx.destination);
    noise.start(now); noise.stop(now + 0.9);
  }
}

function renderTestKeys(){
  const el = document.getElementById('test-keys');
  if(!el) return;
  el.innerHTML = NOTES.map((n,i)=>`
    <button class="test-key" data-note="${i}" onclick="testPlayNote(${i})">
      <span>${n.name}</span>
      <small>${n.label}</small>
    </button>
  `).join('');
}

function testPlayNote(i){
  const n = NOTES[i];
  if(!n) return;
  playPianoTone(n.freq);

  const key = document.querySelector(`.test-key[data-note="${i}"]`);
  if(key){
    key.classList.add('pressed');
    setTimeout(()=>key.classList.remove('pressed'), 140);
  }
}

function playGuitarString(index){
  const s = GUITAR_STRINGS[index];
  if(!s) return;
  playGuitarTone(s.freq, 2.0);

  const str = document.querySelectorAll('.guitar-string')[index];
  if(str){
    str.classList.add('vibrating');
    setTimeout(()=>str.classList.remove('vibrating'), 400);
  }
}

function testGuitarDemo(){
  stopDemo();
  const order = [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5];
  order.forEach((idx, i) => {
    demoTimeouts.push(setTimeout(()=>playGuitarString(idx), i * 120));
  });
}

function hitDrum(type, btn){
  playDrumSound(type);
  if(btn){
    btn.classList.add('pressed');
    setTimeout(()=>btn.classList.remove('pressed'), 130);
  }
}

function switchInstrument(inst, btn){
  currentInstrument = inst;

  document.querySelectorAll('.test-tab').forEach(t=>t.classList.remove('active'));
  if(btn) btn.classList.add('active');

  const panelPiano  = document.getElementById('test-panel-piano');
  const panelGuitar = document.getElementById('test-panel-guitar');
  const panelDrums  = document.getElementById('test-panel-drums');

  panelPiano.style.display  = inst === 'piano'  ? 'block' : 'none';
  panelGuitar.style.display = inst === 'guitar' ? 'block' : 'none';
  panelDrums.style.display  = inst === 'drums'  ? 'block' : 'none';

  stopDemo();
}

function stopDemo(){
  demoTimeouts.forEach(t => clearTimeout(t));
  demoTimeouts = [];
}

/* ============================================================
   DEMO PIANO — giai điệu mẫu (verse + chorus + kết bài)
   Tone: C major · ♩ = 60 · 4/4
   ============================================================ */
function testPlayDemo(){
  stopDemo();

  const Q = 1000;
  const E = 500;
  const H = 2000;
  const DH = 3000;
  const BAR = 4 * Q;

  const N = {
    C3:130.81, D3:146.83, E3:164.81, F3:174.61, G3:196.00, A3:220.00, B3:246.94,
    C4:261.63, D4:293.66, E4:329.63, F4:349.23, G4:392.00, A4:440.00, B4:493.88,
    C5:523.25, D5:587.33, E5:659.25
  };

  const song = [
    {melody:[[0,N.E4,E],[E,N.D4,E],[2*E,N.C4,E],[3*E,N.D4,E],[2*Q,N.E4,Q],[3*Q,N.D4,E],[3*Q+E,N.C4,E]],bass:[[0,N.C3,H],[H,N.G3,H]]},
    {melody:[[0,N.D4,E],[E,N.E4,E],[2*E,N.D4,E],[3*E,N.C4,E],[2*Q,N.D4,DH]],bass:[[0,N.B3,H],[H,N.D3,H]]},
    {melody:[[0,N.E4,E],[E,N.D4,E],[2*E,N.C4,E],[3*E,N.D4,E],[2*Q,N.E4,Q],[3*Q,N.D4,E],[3*Q+E,N.C4,E]],bass:[[0,N.A3,H],[H,N.E3,H]]},
    {melody:[[0,N.D4,E],[E,N.E4,E],[2*E,N.D4,E],[3*E,N.C4,E],[2*Q,N.D4,DH]],bass:[[0,N.G3,H],[H,N.B3,H]]},
    {melody:[[0,N.F4,E],[E,N.E4,E],[2*E,N.D4,E],[3*E,N.E4,E],[2*Q,N.F4,Q],[3*Q,N.E4,E],[3*Q+E,N.D4,E]],bass:[[0,N.F3,H],[H,N.C3,H]]},
    {melody:[[0,N.E4,E],[E,N.F4,E],[2*E,N.E4,E],[3*E,N.D4,E],[2*Q,N.E4,DH]],bass:[[0,N.E3,H],[H,N.G3,H]]},
    {melody:[[0,N.D4,E],[E,N.C4,E],[2*E,N.B3,E],[3*E,N.C4,E],[2*Q,N.D4,Q],[3*Q,N.C4,E],[3*Q+E,N.B3,E]],bass:[[0,N.D3,H],[H,N.A3,H]]},
    {melody:[[0,N.B3,E],[E,N.C4,E],[2*E,N.D4,E],[3*E,N.E4,E],[2*Q,N.G4,Q],[3*Q,N.B3,E],[3*Q+E,N.C4,E]],bass:[[0,N.G3,H],[H,N.D3,H]]},
    {melody:[[0,N.G4,E],[E,N.A4,E],[2*E,N.G4,E],[3*E,N.E4,E],[2*Q,N.G4,Q],[3*Q,N.A4,E],[3*Q+E,N.G4,E]],bass:[[0,N.C3,H],[H,N.G3,H]]},
    {melody:[[0,N.F4,E],[E,N.E4,E],[2*E,N.D4,E],[3*E,N.E4,E],[2*Q,N.F4,Q],[3*Q,N.G4,E],[3*Q+E,N.A4,E]],bass:[[0,N.G3,H],[H,N.D3,H]]},
    {melody:[[0,N.A4,E],[E,N.G4,E],[2*E,N.E4,E],[3*E,N.G4,E],[2*Q,N.A4,Q],[3*Q,N.G4,E],[3*Q+E,N.E4,E]],bass:[[0,N.A3,H],[H,N.E3,H]]},
    {melody:[[0,N.E4,E],[E,N.D4,E],[2*E,N.C4,E],[3*E,N.D4,E],[2*Q,N.E4,H]],bass:[[0,N.E3,H],[H,N.B3,H]]},
    {melody:[[0,N.F4,E],[E,N.G4,E],[2*E,N.A4,E],[3*E,N.G4,E],[2*Q,N.F4,Q],[3*Q,N.E4,E],[3*Q+E,N.D4,E]],bass:[[0,N.F3,H],[H,N.C3,H]]},
    {melody:[[0,N.E4,E],[E,N.F4,E],[2*E,N.G4,E],[3*E,N.A4,E],[2*Q,N.G4,Q],[3*Q,N.E4,E],[3*Q+E,N.C4,E]],bass:[[0,N.C3,H],[H,N.E3,H]]},
    {melody:[[0,N.D4,E],[E,N.E4,E],[2*E,N.F4,E],[3*E,N.E4,E],[2*Q,N.D4,Q],[3*Q,N.C4,E],[3*Q+E,N.B3,E]],bass:[[0,N.D3,H],[H,N.A3,H]]},
    {melody:[[0,N.G4,E],[E,N.A4,E],[2*E,N.B4,E],[3*E,N.C5,H],[3*Q+E,N.C5,E]],bass:[[0,N.G3,Q],[Q,N.B3,Q],[2*Q,N.C3,H]]}
  ];

  let barStart = 0;
  song.forEach(bar => {
    bar.melody.forEach(([off, freq, dur]) => {
      demoTimeouts.push(setTimeout(() => {
        playPianoTone(freq, dur/1000 + 0.35, 0.22);
        highlightKeyByFreq(freq);
      }, barStart + off));
    });
    bar.bass.forEach(([off, freq, dur]) => {
      demoTimeouts.push(setTimeout(() => {
        playBassTone(freq, dur/1000 + 0.5, 0.15);
      }, barStart + off));
    });
    barStart += BAR;
  });

  demoTimeouts.push(setTimeout(() => {
    [N.C3, N.C4, N.E4, N.G4, N.C5].forEach(f => {
      playPianoTone(f, 4.5, 0.13);
    });
    playBassTone(N.C3, 4.5, 0.18);
  }, barStart + 300));
}

function highlightKeyByFreq(freq){
  const idx = NOTES.findIndex(n => Math.abs(n.freq - freq) < 1);
  if(idx < 0) return;
  const key = document.querySelector(`.test-key[data-note="${idx}"]`);
  if(key){
    key.classList.add('pressed');
    setTimeout(()=>key.classList.remove('pressed'), 140);
  }
}

function testPlayScale(){
  stopDemo();
  const seq = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
  seq.forEach((f, i) => {
    demoTimeouts.push(setTimeout(() => {
      playPianoTone(f, 0.5, 0.28);
      highlightKeyByFreq(f);
    }, i * 280));
  });
  seq.slice().reverse().forEach((f, i) => {
    demoTimeouts.push(setTimeout(() => {
      playPianoTone(f, 0.4, 0.24);
      highlightKeyByFreq(f);
    }, (seq.length + i) * 280));
  });
}

function testDrumDemo(){
  stopDemo();
  const pattern = [
    {s:'kick',  t:0},   {s:'hihat', t:0},
    {s:'hihat', t:200}, {s:'snare', t:400}, {s:'hihat', t:400},
    {s:'hihat', t:600}, {s:'kick',  t:800}, {s:'hihat', t:800},
    {s:'hihat', t:1000},{s:'snare', t:1200},{s:'hihat', t:1200},
    {s:'hihat', t:1400},{s:'kick',  t:1600},{s:'crash', t:1600}
  ];
  pattern.forEach(p=>{
    demoTimeouts.push(setTimeout(()=>{
      playDrumSound(p.s);
      const pad = document.querySelector(`.drum-piece[data-drum="${p.s}"]`);
      if(pad){
        pad.classList.add('pressed');
        setTimeout(()=>pad.classList.remove('pressed'), 110);
      }
    }, p.t));
  });
}

document.addEventListener('keydown', (e)=>{
  if(currentView !== 'test') return;
  if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if(e.repeat) return;

  const k = e.key.toLowerCase();

  if(currentInstrument === 'piano' && '12345678'.includes(k)){
    const idx = parseInt(k,10) - 1;
    testPlayNote(idx);
    e.preventDefault();
    return;
  }
  if(currentInstrument === 'guitar' && '123456'.includes(k)){
    const idx = parseInt(k,10) - 1;
    playGuitarString(idx);
    e.preventDefault();
    return;
  }
  if(currentInstrument === 'drums'){
    const map = {q:'kick', w:'snare', e:'hihat', a:'tom', s:'crash', d:'ride'};
    if(map[k]){
      const type = map[k];
      const pad = document.querySelector(`.drum-piece[data-drum="${type}"]`);
      hitDrum(type, pad);
      e.preventDefault();
    }
  }
});

let _testInited = false;
function initTestViewOnce(){
  if(_testInited) return;
  _testInited = true;
  renderTestKeys();
}

/* ============================================================
   CHATBOT
   ============================================================ */
let isFirstMsg = true, chatOpen = false;

const GREETING = "Chào bạn, mình là ChanhNgot🍋 — trợ lý của Gewon Music.\n\nMình có thể:\n• Mô tả chi tiết sản phẩm\n• Tư vấn theo nhu cầu\n• Kiểm tra trạng thái đơn hàng\n• Giải thích chính sách bảo hành 3 năm\n\nBạn cần gì ạ?";

function findProduct(text){
  const t = text.toLowerCase();
  for(const id in DB){
    const p = DB[id];
    if(t.includes(p.name.toLowerCase())) return {id, p};
  }
  return null;
}

function describe(p){
  const specs = Object.entries(p.specs).slice(0,6).map(([k,v])=>`• ${k}: ${v}`).join('\n');
  const feats = p.features.slice(0,4).map(f=>`• ${f}`).join('\n');
  return `📋 ${p.name} (${p.brand})\n💰 ${p.price}${p.old?` (cũ: ${p.old})`:''}\n\n${p.short}\n\n⚙️ Thông số:\n${specs}\n\n✨ Đặc điểm:\n${feats}\n\nXem chi tiết đầy đủ bằng cách nhấn vào sản phẩm nhé!`;
}

function reply(text){
  const t = text.toLowerCase().trim();

  if(/(hi|hello|chào|alo|hey)/.test(t) && t.length < 20){
    return "Chào bạn! 🍋 Mình có thể tư vấn Piano, Guitar, Trống hoặc kiểm tra trạng thái đơn hàng. Bạn cần gì ạ?";
  }

  const found = findProduct(t);
  if(found) return describe(found.p);

  if(t.includes('hủy đơn') || t.includes('huỷ đơn') || t.includes('cancel')){
    const orders = getOrders().filter(o => (o.status??2) < 3);
    if(orders.length === 0) return "📦 Bạn không có đơn hàng nào có thể hủy.";
    return `❌ Bạn có ${orders.length} đơn có thể hủy:\n\n${orders.map(o=>`• ${o.code} — ${o.product ? o.product.name : 'Đơn hàng'}`).join('\n')}\n\nVào mục "📊 Trạng thái đơn hàng" trên menu và nhấn nút "❌ Hủy đơn hàng" tương ứng nhé!`;
  }

  if(t.includes('test') || t.includes('chơi thử') || t.includes('nghe thử') || t.includes('thử nhạc cụ')){
    return "🎹 Bạn có thể chơi thử Piano, Guitar, Trống ngay trên web!\n\nVào mục '🎹 Test nhạc cụ' trên menu:\n• Piano: bàn phím 8 nốt + nút '▶ Demo' để nghe đoạn nhạc mẫu\n• Guitar: cần đàn 6 dây (click từng dây hoặc bấm 1-6)\n• Trống: mô phỏng bộ trống thực tế (click pad hoặc Q W E A S D)\n\nMỗi nhạc cụ đều có nút 'Demo' để nghe mẫu! 🎵";
  }

  if(t.includes('đơn hàng') || t.includes('order') || t.includes('theo dõi') || t.includes('trạng thái') || t.includes('kiểm tra đơn')){
    const orders = getOrders();
    if(orders.length === 0){
      return "📦 Bạn chưa có đơn hàng nào. Vào mục 🎹 Piano, 🎸 Guitar hoặc 🥁 Trống để đặt mua nhé!";
    }
    const latest = orders[0];
    const stt = ORDER_STEPS[latest.status ?? 2].label;
    return `📊 Bạn đang có ${orders.length} đơn hàng.\n\n🔖 Đơn mới nhất: ${latest.code}\n📍 Giao đến: ${latest.address}\n📞 Liên hệ: ${latest.phone}\n🚚 Trạng thái: ${stt}\n\nĐể xem chi tiết timeline đơn hàng, bạn nhấn vào mục "📊 Trạng thái đơn hàng" trên thanh menu nhé!`;
  }

  if(t.includes('bảo hành') || t.includes('warranty')){
    return "🛡️ Gewon Music bảo hành 3 NĂM cho tất cả sản phẩm Piano, Guitar, Trống.\n\nQuyền lợi:\n• Miễn phí sửa chữa 3 năm đầu\n• Miễn phí lên dây piano 2 lần/năm\n• Miễn phí vận chuyển 2 chiều\n• Xử lý trong 48h\n\nXem chi tiết đầy đủ tại mục 'Bảo hành 3 năm' trong phần Dịch vụ ở trang chủ nhé!";
  }
  if(t.includes('giao hàng') || t.includes('ship')){
    return "🚚 Gewon Music giao hàng toàn quốc.\n\n• Miễn phí trong bán kính 10km\n• 10-20km: phí theo km\n• Trên 20km: liên hệ báo giá";
  }
  if(t.includes('piano')){
    const list = Object.values(DB).filter(p=>p.cat==='piano');
    return `🎹 Có ${list.length} mẫu Piano:\n\n${list.map(p=>`• ${p.name} — ${p.price}`).join('\n')}\n\nGõ tên sản phẩm để xem chi tiết.`;
  }
  if(t.includes('guitar')){
    const list = Object.values(DB).filter(p=>p.cat==='guitar');
    return `🎸 Có ${list.length} mẫu Guitar:\n\n${list.map(p=>`• ${p.name} — ${p.price}`).join('\n')}\n\nGõ tên để xem chi tiết.`;
  }
  if(t.includes('trống') || t.includes('drum')){
    const list = Object.values(DB).filter(p=>p.cat==='drums');
    return `🥁 Có ${list.length} mẫu Trống:\n\n${list.map(p=>`• ${p.name} — ${p.price}`).join('\n')}`;
  }
  if(t.includes('địa chỉ') || t.includes('ở đâu')){
    return "📍 Showroom: TP.HCM\n🕐 8:00 — 21:00 (T2-CN)\n📞 0385 730 766 (gọi hoặc nhắn tin)";
  }
  if(t.includes('giá') || t.includes('bao nhiêu')){
    return "Bạn muốn xem giá sản phẩm nào? Gõ tên sản phẩm giúp mình nhé (VD: 'Yamaha P-45').";
  }
  if(t.includes('cảm ơn') || t.includes('thank')){
    return "Cảm ơn bạn! 🍋 Cần gì thêm cứ nhắn mình nhé!";
  }

  return "Mình chưa rõ ý bạn lắm 😅 Bạn có thể:\n• Gõ tên sản phẩm (VD: 'Yamaha P-45')\n• Hỏi 'piano', 'guitar', 'trống'\n• Hỏi 'trạng thái đơn hàng', 'bảo hành', 'giao hàng', 'hủy đơn'\n• Hỏi 'test nhạc cụ' để chơi thử\n\nBạn cần gì ạ?";
}

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

function botReply(text){
  const typing = addMsg('Đang trả lời...', 'bot typing');
  setTimeout(()=>{
    typing.remove();
    addMsg(reply(text), 'bot');
  }, 450 + Math.random()*400);
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
  if(hash && ['home','piano','guitar','drums','contact','shipping','warranty','orders','test'].includes(hash)){
    go(hash, false);
  }

  const badge = document.getElementById('chatBadge');
  if(badge) setTimeout(()=>{ if(!chatOpen) badge.style.display = 'none'; }, 8000);
});
</script>
</body>
</html>
