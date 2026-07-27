/* ═══════════════════════════════════════════════════════════════
   CryptoHubCoin — Ads Loader (ads.js)
   ─────────────────────────────────────────────────────────────
   محمّل الإعلانات الذاتية. يشتغل في أي صفحة.

   الاستخدام:
     1) ضيف السطر ده مرة واحدة قبل نهاية <body>:
          <script src="ads.js" defer></script>
        (أو الرابط الكامل: https://cryptohubcoin.com/ads.js)

     2) في أي مكان عايز إعلان، حط:
          <div data-ad-slot="predictor-top"></div>

   الأماكن المتاحة (لازم تطابق اللوحة):
     top-header, coin-detail-sidebar,
     predictor-top/right/left, arbitrage-top/right/left,
     liquidity-top/right/left, forex-top/right/left,
     whale-top/right/left, vesting-top/right/left,
     nft-top/inline/bottom
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var API = 'https://api.cryptohubcoin.com';

  // ستايل الخانة — يتحقن مرة واحدة
  function injectStyle() {
    if (document.getElementById('ch-ads-style')) return;
    var css =
      // الحاوية
      '.ch-ad{display:block;line-height:0;text-align:center;margin:8px auto;max-width:100%}' +
      // الصورة: تتظبط جوّه الخانة من غير تشويه، بسقف ارتفاع افتراضي
      '.ch-ad img{max-width:100%;max-height:90px;width:auto;height:auto;object-fit:contain;border-radius:8px;display:inline-block;vertical-align:middle}' +
      // بانر الهيدر العريض — يمتد على عرض الخانة (بحد أقصى 970px زي القياسي)
      '.ch-ad[data-slot="top-header"]{margin:10px auto}' +
      '.ch-ad[data-slot="top-header"] img{width:100%;max-width:970px;max-height:120px;object-fit:cover}' +

      // ── نسخة الهيدر (ديسكتوب): جوّه الهيدر بين اللوجو والأيقونات ──
      '.ch-ad-header{flex:1 1 auto;min-width:0;max-width:600px;margin:0 20px;overflow:hidden;display:flex;justify-content:center}' +
      '.ch-ad-header .ch-ad{margin:0;width:100%;display:block}' +
      '.ch-ad-header .ch-ad img{height:40px;width:100%;max-width:100%;object-fit:cover;border-radius:6px}' +
      // تظهر على الديسكتوب فقط
      '@media(max-width:768px){.ch-ad-header{display:none!important}}' +
      // خانة top-header اللي تحت الهيدر: تختفي على الديسكتوب، تظهر على الموبايل
      '@media(min-width:769px){.ch-ad-below-header{display:none!important}}' +

      // باقي البانرات العريضة (أعلى الأقسام / NFT)
      '.ch-ad[data-slot="nft-top"] img,' +
      '.ch-ad[data-slot="nft-inline"] img,' +
      '.ch-ad[data-slot="nft-bottom"] img,' +
      '.ch-ad[data-slot$="-top"] img{max-height:100px}' +
      // مواضع جانبية (يمين/يسار الأدوات) — أضيق وأطول
      '.ch-ad[data-slot$="-right"] img,' +
      '.ch-ad[data-slot$="-left"] img{max-height:250px}' +
      // شريط جانبي صفحة العملة
      '.ch-ad[data-slot="coin-detail-sidebar"] img{max-height:200px}' +
      '.ch-ad--empty{display:none!important}';
    var s = document.createElement('style');
    s.id = 'ch-ads-style';
    s.textContent = css;
    document.head.appendChild(s);
  }

  // بناء عنصر الإعلان (صورة داخل رابط)
  function buildAd(slotEl, ad) {
    var a = document.createElement('a');
    a.className = 'ch-ad';
    a.href = ad.targetUrl;
    a.target = '_blank';
    a.rel = 'nofollow sponsored noopener';
    a.setAttribute('data-ad-id', ad.id);
    a.setAttribute('data-slot', slotEl.getAttribute('data-ad-slot') || '');

    var img = document.createElement('img');
    img.src = ad.imageUrl;
    img.alt = ad.advertiser || 'Ad';
    img.loading = 'lazy';
    a.appendChild(img);

    slotEl.innerHTML = '';
    slotEl.appendChild(a);
    slotEl.classList.remove('ch-ad--empty');
  }

  // إفراغ الخانة (مفيش إعلان أو متوقف)
  function emptySlot(slotEl) {
    slotEl.innerHTML = '';
    slotEl.classList.add('ch-ad--empty');
  }

  function loadAds() {
    var slots = document.querySelectorAll('[data-ad-slot]');
    if (!slots.length) return;

    injectStyle();

    // نجيب كل الإعلانات المفعّلة دفعة واحدة (نداء واحد للصفحة كلها)
    fetch(API + '/api/v1/ads/all', { credentials: 'omit' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (res) {
        var map = (res && res.data) ? res.data : {};
        slots.forEach(function (slotEl) {
          var slot = slotEl.getAttribute('data-ad-slot');
          var ad = map[slot];
          if (ad && ad.imageUrl && ad.targetUrl) buildAd(slotEl, ad);
          else emptySlot(slotEl);
        });
      })
      .catch(function () {
        // فشل الشبكة → نسيب الخانات فاضية بهدوء
        slots.forEach(emptySlot);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAds);
  } else {
    loadAds();
  }

  // نتيح إعادة التحميل يدوياً لو الصفحة SPA
  window.CHAds = { reload: loadAds };
})();
