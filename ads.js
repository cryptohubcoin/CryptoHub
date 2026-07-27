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
  var _adsMap = {}; // خريطة الإعلانات المفعّلة { slot: ad }

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
      '.ch-ad[data-slot="top-header"] img{width:100%;max-width:970px;max-height:120px;object-fit:contain}' +

      // ── نسخة الهيدر (ديسكتوب): جوّه الهيدر/النav بين اللوجو والأيقونات ──
      // تشتغل مع أي slot داخل عنصر .ch-ad-header (الرئيسية + كل الأدوات)
      '.ch-ad-header{flex:1 1 auto;min-width:0;max-width:600px;margin:0 20px;overflow:hidden;display:flex;justify-content:center}' +
      '.ch-ad-header .ch-ad{margin:0;width:100%;display:block}' +
      '.ch-ad-header .ch-ad img{height:40px;width:100%;max-width:100%;object-fit:cover;border-radius:6px}' +
      // تظهر على الديسكتوب فقط
      '@media(max-width:768px){.ch-ad-header{display:none!important}}' +
      // خانة top-header اللي تحت الهيدر: تختفي على الديسكتوب، تظهر على الموبايل
      '@media(min-width:769px){.ch-ad-below-header{display:none!important}}' +
      // ── موبايل: تقليل الفراغ حوالين بانر تحت-الهيدر (يلزق على ارتفاع الصورة) ──
      // البانر جوّه <main class="pt-16"> فيه padding-top كبير — نسحبه لفوق بـ margin سالب
      '@media(max-width:768px){' +
        '.ch-ad-below-header{margin:-40px 0 0 0;padding:0;line-height:0}' +
        '.ch-ad-below-header .ch-ad{margin:0 auto;line-height:0}' +
        '.ch-ad-below-header .ch-ad img{max-height:70px}' +
      '}' +

      // بانرات أعلى الأقسام (Exchanges / NFT / Stocks) — تمتد على عرض القسم
      '.ch-ad[data-slot="exchanges-top"],' +
      '.ch-ad[data-slot="stocks-top"],' +
      '.ch-ad[data-slot="nft-top"]{margin:4px auto 14px;width:100%}' +
      '.ch-ad[data-slot="exchanges-top"] img,' +
      '.ch-ad[data-slot="stocks-top"] img,' +
      '.ch-ad[data-slot="nft-top"] img{width:100%;max-width:970px;max-height:110px;object-fit:cover}' +
      // باقي البانرات العريضة (nft-inline / nft-bottom / أي -top آخر)
      '.ch-ad[data-slot="nft-inline"] img,' +
      '.ch-ad[data-slot="nft-bottom"] img,' +
      '.ch-ad[data-slot$="-top"] img{max-height:100px}' +
      // مواضع جانبية (يمين/يسار الأدوات) — محاذية للكارت، الصورة تملأ المساحة
      '.ch-card-ad .ch-ad{margin:0;width:100%;height:100%;line-height:0}' +
      '.ch-card-ad .ch-ad img{width:100%;height:100%;max-height:100%;object-fit:cover;border-radius:12px}' +
      // شريط جانبي صفحة العملة — ياخد عرض العمود كامل
      '.ch-ad[data-slot="coin-detail-sidebar"]{margin:12px 0;width:100%}' +
      '.ch-ad[data-slot="coin-detail-sidebar"] img{width:100%;max-width:100%;max-height:none;height:auto;object-fit:contain}' +
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
        _adsMap = (res && res.data) ? res.data : {};
        renderSlots();
        watchCoinDetail(); // فعّل مراقبة صفحة تفاصيل العملة
      })
      .catch(function () {
        // فشل الشبكة → نسيب الخانات فاضية بهدوء
        slots.forEach(emptySlot);
      });
  }

  // عرض كل الخانات حسب الخريطة المحمّلة
  function renderSlots() {
    var slots = document.querySelectorAll('[data-ad-slot]');
    slots.forEach(function (slotEl) {
      var slot = slotEl.getAttribute('data-ad-slot');

      // خانة تفاصيل العملة: تظهر فقط لأول 250 عملة
      if (slot === 'coin-detail-sidebar' && !coinRankAllowed()) {
        emptySlot(slotEl);
        return;
      }

      var ad = _adsMap[slot];
      if (ad && ad.imageUrl && ad.targetUrl) buildAd(slotEl, ad);
      else emptySlot(slotEl);
    });
  }

  // نقرأ رانك العملة المفتوحة من #mRank (شكله "#5" أو "#--")
  function coinRankAllowed() {
    var el = document.getElementById('mRank');
    if (!el) return false;
    var txt = (el.textContent || '').replace(/[^0-9]/g, '');
    var rank = parseInt(txt, 10);
    if (!rank || isNaN(rank)) return false; // مفيش رانك = مانعرضش
    return rank <= 250;
  }

  // نراقب تغيّر رانك العملة (لما المستخدم يفتح عملة تانية) ونعيد التقييم
  var _watching = false;
  function watchCoinDetail() {
    if (_watching) return;
    var el = document.getElementById('mRank');
    if (!el) return;
    _watching = true;
    var mo = new MutationObserver(function () {
      var slotEl = document.querySelector('[data-ad-slot="coin-detail-sidebar"]');
      if (!slotEl) return;
      if (coinRankAllowed()) {
        var ad = _adsMap['coin-detail-sidebar'];
        if (ad && ad.imageUrl && ad.targetUrl) buildAd(slotEl, ad);
        else emptySlot(slotEl);
      } else {
        emptySlot(slotEl);
      }
    });
    mo.observe(el, { childList: true, characterData: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAds);
  } else {
    loadAds();
  }

  // نتيح إعادة التحميل يدوياً لو الصفحة SPA
  window.CHAds = { reload: loadAds };
})();
