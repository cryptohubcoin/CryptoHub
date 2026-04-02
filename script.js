/* CryptoHub Main JavaScript */

// Anti-flash code is inline in HTML — do not duplicate here

// Extracted Script Block #2
document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'U') || (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
      }
    });
    // AI Chat UI logic (frontend only, demo)

    window.addEventListener('DOMContentLoaded', function () {
      var aiFab = document.getElementById('aiFab');
      var aiModal = document.getElementById('aiChatModal');
      var aiClose = document.getElementById('aiChatClose');
      var aiBody = document.getElementById('aiChatBody');
      var aiForm = document.getElementById('aiChatForm');
      var aiInput = document.getElementById('aiChatInput');

      function setAIDirDynamic() {
        var lang = document.documentElement.lang || document.body.lang || navigator.language || 'ar';
        lang = lang.toLowerCase();

        if (lang.startsWith('ar') || lang.startsWith('fa')) {
          document.documentElement.setAttribute('dir', 'rtl');
          aiModal.setAttribute('dir', 'rtl');
          aiModal.style.textAlign = 'right';
          aiInput.style.direction = 'rtl';
          aiInput.style.textAlign = 'right';
          aiBody.style.direction = 'rtl';
          aiBody.style.textAlign = 'right';
        }

        else {
          document.documentElement.setAttribute('dir', 'ltr');
          aiModal.setAttribute('dir', 'ltr');
          aiModal.style.textAlign = 'left';
          aiInput.style.direction = 'ltr';
          aiInput.style.textAlign = 'left';
          aiBody.style.direction = 'ltr';
          aiBody.style.textAlign = 'left';
        }
      }

      if (aiFab && aiModal && aiClose && aiBody && aiForm && aiInput) {
        aiFab.onclick = function () {
          setAIDirDynamic();
          aiModal.classList.add('active');

          setTimeout(function () {
            aiInput.focus();
          }

            , 100);
        }

          ;

        aiClose.onclick = function () {
          aiModal.classList.remove('active');
        }

          ;

        window.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') aiModal.classList.remove('active')
        });

        aiForm.onsubmit = function () {
          var q = aiInput.value.trim();
          if (!q) return false;
          var userMsg = document.createElement('div');
          userMsg.className = 'ai-chat-msg user';
          userMsg.textContent = q;
          aiBody.appendChild(userMsg);
          aiInput.value = '';
          aiInput.style.background = '#fff';
          aiInput.style.color = '#222';
          aiBody.scrollTop = aiBody.scrollHeight;
          var aiMsg = document.createElement('div');
          aiMsg.className = 'ai-chat-msg ai';
          aiMsg.textContent = '...جاري التفكير';
          aiBody.appendChild(aiMsg);
          aiBody.scrollTop = aiBody.scrollHeight;

          setTimeout(function () {
            aiMsg.textContent = aiAutoReply(q);
            aiBody.scrollTop = aiBody.scrollHeight;
          }

            , 1200);
          return false;
        }

          ;

        aiInput.oninput = function () {
          aiInput.style.background = '#fff';
          aiInput.style.color = '#222';
        }

          ;
      }
    });

// Extracted Script Block #3
function switchInfoTab(tab) {
        ['about', 'learn', 'faq', 'contact'].forEach(t => {
          document.getElementById('itc-' + t).style.display = t === tab ? 'block' : 'none';
          document.getElementById('itb-' + t).classList.toggle('active-itb', t === tab);
        });
      }
      function toggleFaqItem(btn) {
        const body = btn.nextElementSibling;
        const icon = btn.querySelector('.fa-chevron-down');
        const isOpen = body.style.display === 'block';
        // Close all
        document.querySelectorAll('.faq-body').forEach(b => b.style.display = 'none');
        document.querySelectorAll('#faqList .fa-chevron-down').forEach(i => i.style.transform = 'rotate(0)');
        if (!isOpen) {
          body.style.display = 'block';
          icon.style.transform = 'rotate(180deg)';
        }
      }

// Extracted Script Block #4
// === JS Block 1 ===
    const LANGS = [{ c: 'ar', f: '🇸🇦', l: 'العربية', d: 'rtl' }, { c: 'en', f: '🇬🇧', l: 'English', d: 'ltr' }, { c: 'zh', f: '🇨🇳', l: '中文', d: 'ltr' }, { c: 'es', f: '🇪🇸', l: 'Español', d: 'ltr' }, { c: 'pt', f: '🇧🇷', l: 'Português', d: 'ltr' }, { c: 'fr', f: '🇫🇷', l: 'Français', d: 'ltr' }, { c: 'de', f: '🇩🇪', l: 'Deutsch', d: 'ltr' }, { c: 'it', f: '🇮🇹', l: 'Italiano', d: 'ltr' }, { c: 'ru', f: '🇷🇺', l: 'Русский', d: 'ltr' }, { c: 'tr', f: '🇹🇷', l: 'Türkçe', d: 'ltr' }, { c: 'ja', f: '🇯🇵', l: '日本語', d: 'ltr' }, { c: 'ko', f: '🇰🇷', l: '한국어', d: 'ltr' }, { c: 'hi', f: '🇮🇳', l: 'हिन्दी', d: 'ltr' }, { c: 'nl', f: '🇳🇱', l: 'Nederlands', d: 'ltr' }, { c: 'pl', f: '🇵🇱', l: 'Polski', d: 'ltr' }, { c: 'th', f: '🇹🇭', l: 'ไทย', d: 'ltr' }, { c: 'vi', f: '🇻🇳', l: 'Tiếng Việt', d: 'ltr' }, { c: 'id', f: '🇮🇩', l: 'Bahasa Indonesia', d: 'ltr' }, { c: 'uk', f: '🇺🇦', l: 'Українська', d: 'ltr' }, { c: 'cs', f: '🇨🇿', l: 'Čeština', d: 'ltr' }, { c: 'ro', f: '🇷🇴', l: 'Română', d: 'ltr' }, { c: 'el', f: '🇬🇷', l: 'Ελληνικά', d: 'ltr' }, { c: 'sv', f: '🇸🇪', l: 'Svenska', d: 'ltr' }, { c: 'da', f: '🇩🇰', l: 'Dansk', d: 'ltr' }, { c: 'fi', f: '🇫🇮', l: 'Suomi', d: 'ltr' }, { c: 'ms', f: '🇲🇾', l: 'Bahasa Melayu', d: 'ltr' }, { c: 'fa', f: '🇮🇷', l: 'فارسی', d: 'rtl' }, { c: 'bn', f: '🇧🇩', l: 'বাংলা', d: 'ltr' }, { c: 'sw', f: '🇰🇪', l: 'Kiswahili', d: 'ltr' }];

    const _K = 'siteTitle,exchanges,recommendedExchanges,live,trustScore,fearGreedTitle,fearGreedSub,outOf100,extremeFear,fear,neutral,greed,extremeGreed,aiTitle,aiSub,analyzing,bullishSignals,bearishSignals,bollingerBands,searchCoin,sortBy,network,show,loadMore,loadingData,filteredBy,colName,colPrice,colMarketCap,colVolume,colExchanges,prev,next,showing,of,coins,availableOn,exchange,referralNote,register,visit,trustHigh,trustMedium,trustLow,volume,allNetworks,rank,marketCap,price,change24h,noExchanges,errorLoading,retry,allLoaded,loadMoreRemaining,oversold,overbought,bullish,bearish,nearBottom,nearTop,goldenCross,deathCross,strongBuy,buy,sell,strongSell,coinsFound,trendingTitle,trendingSub,altcoinIndex,altcoinSeason,btcDominance,ethDominance,totalMarketCap,totalVolume24,fgHistory,now,yesterday,lastWeek,lastMonth,entryExitTitle,entryZone,exitZone,currentPrice,entryNote,exitNote,volAnalysis,supportResistance,aiRecommendation,strongTrend,weakTrend,highVol,lowVol,aboveAvg,belowAvg,footerDesc,quickLinks,home,topExchanges,disclaimer,disclaimerText,allRights,btcSeason,holdEntry,goodEntry,riskHigh,support,yourName,yourEmail,yourMessage,sendMessage,messageSent,languages,secure,loading,tabCrypto,tabExchanges,tabCommodities,allExchangesTitle,allExchangesSub,searchExchange,metalExTitle,metalExSub,stocksTitle,stocksSub,colExchange2,colPairs,colRefPrice,colVol24h,colTrade,colStock,telegramSupport,features,realTimePrices,aiAnalysis,commodities'.split(',');
    const T = {
      ar: { clearAll: 'مسح الكل', recentSearches: 'عمليات البحث الأخيرة', topBoosted: 'الأكثر تداولاً', trendingCrypto: 'العملات الرائجة', deleteItem: 'حذف', noResults: 'لا توجد نتائج لـ', searchPlaceholder: 'ابحث عن عملة، NFT، منصة...', aiMenuTitle: 'التحليل الفني', aiMenuDesc: 'تحليل بالذكاء الاصطناعي', trustScore: 'الثقة', siteTitle: 'CryptoHub', exchanges: 'المنصات', recommendedExchanges: 'منصات التداول الموصى بها', live: 'مباشر', fearGreedTitle: 'مؤشر الخوف والطمع', fearGreedSub: 'مؤشر معنويات السوق - تحليل شامل', outOf100: 'من 100', extremeFear: 'خوف شديد', fear: 'خوف', neutral: 'محايد', greed: 'طمع', extremeGreed: 'طمع شديد', aiTitle: 'تحليل الذكاء الاصطناعي', aiSub: 'تنبؤات مدعومة بالذكاء الاصطناعي', analyzing: 'جاري التحليل...', bullishSignals: 'إشارات صعود', bearishSignals: 'إشارات هبوط', bollingerBands: 'بولينجر', searchCoin: 'البحث عن عملة...', sortBy: 'الترتيب', network: 'الشبكة', show: 'العرض', loadMore: 'تحميل المزيد', loadingData: 'جاري التحميل...', filteredBy: 'تصفية:', colName: 'الاسم', colPrice: 'السعر', colMarketCap: 'القيمة السوقية', colVolume: 'الحجم 24س', colExchanges: 'المنصات', prev: 'السابق', next: 'التالي', showing: 'عرض', of: 'من', coins: 'عملة', availableOn: 'متوفر على', exchange: 'منصة', referralNote: '🎁 روابط إحالة خاصة', register: 'سجل الآن', visit: 'زيارة', trustHigh: 'ثقة عالية', trustMedium: 'ثقة متوسطة', trustLow: 'ثقة منخفضة', volume: 'الحجم', allNetworks: 'جميع الشبكات', rank: 'الترتيب', marketCap: 'القيمة السوقية', price: 'السعر', change24h: 'تغير 24س', noExchanges: 'لا توجد بيانات', errorLoading: 'خطأ في التحميل', retry: 'إعادة المحاولة', allLoaded: 'تم تحميل الكل', loadMoreRemaining: 'تحميل المزيد', oversold: 'تشبع بيعي', overbought: 'تشبع شرائي', bullish: 'صاعد', bearish: 'هابط', nearBottom: 'قرب القاع', nearTop: 'قرب القمة', goldenCross: 'تقاطع ذهبي', deathCross: 'تقاطع الموت', strongBuy: 'شراء قوي', buy: 'شراء', sell: 'بيع', strongSell: 'بيع قوي', coinsFound: 'عملة', trendingTitle: 'الأكثر رواجاً', trendingSub: 'أفضل 100 عملة من حيث حجم التداول خلال 24 ساعة', altcoinIndex: 'مؤشر موسم الألتكوين', altcoinSeason: 'موسم ألتكوين', btcDominance: 'هيمنة BTC', ethDominance: 'هيمنة ETH', totalMarketCap: 'القيمة الكلية', totalVolume24: 'الحجم الكلي 24س', fgHistory: 'التاريخ', now: 'الآن', yesterday: 'أمس', lastWeek: 'الأسبوع', lastMonth: 'الشهر', entryExitTitle: 'إشارات الدخول والخروج - Bitcoin', entryZone: 'منطقة الدخول', exitZone: 'منطقة الخروج', currentPrice: 'السعر الحالي', entryNote: 'عند مستوى الدعم', exitNote: 'عند مستوى المقاومة', volAnalysis: 'تحليل الحجم', supportResistance: 'دعم/مقاومة', aiRecommendation: 'التوصية', strongTrend: 'اتجاه قوي', weakTrend: 'اتجاه ضعيف', highVol: 'حجم مرتفع', lowVol: 'حجم منخفض', aboveAvg: 'أعلى من المتوسط', belowAvg: 'أقل من المتوسط', footerDesc: 'منصتك الشاملة لتتبع أكثر من 10,000 عملة رقمية مع أدوات تحليل ذكاء اصطناعي متقدمة وأسعار لحظية.', quickLinks: 'روابط سريعة', home: 'الرئيسية', topExchanges: 'أفضل المنصات', disclaimer: 'إخلاء المسؤولية', disclaimerText: 'المعلومات المقدمة في هذا الموقع هي لأغراض تعليمية ومعلوماتية فقط وليست نصيحة مالية أو استثمارية. تداول العملات الرقمية ينطوي على مخاطر عالية جداً وقد تخسر رأس مالك بالكامل.', allRights: 'جميع الحقوق محفوظة', btcSeason: 'موسم بيتكوين', holdEntry: 'انتظر فرصة أفضل', goodEntry: 'فرصة دخول جيدة', riskHigh: 'مخاطرة عالية', support: 'الدعم الفني', yourName: 'اسمك', yourEmail: 'بريدك الإلكتروني', yourMessage: 'رسالتك...', sendMessage: 'إرسال الرسالة', messageSent: 'تم الإرسال بنجاح!', languages: 'لغة', secure: 'آمن', loading: 'جاري التحميل...', tabCrypto: 'العملات الرقمية', tabExchanges: 'جميع المنصات', tabCommodities: 'مجموعات NFT', allExchangesTitle: 'جميع منصات التداول العالمية', allExchangesSub: '500 منصة تداول عالمية مرخصة • مرتبة حسب درجة الثقة • روابط تداول مباشرة', searchExchange: 'ابحث عن منصة...', metalExTitle: 'أشهر مجموعات NFT', metalExSub: 'أفضل مجموعات NFT مرتبة حسب حجم التداول وسعر الأرضية • بيانات لحظية', stocksTitle: 'الأسهم الرئيسية وصناديق ETF', stocksSub: 'أسهم مرمّزة وصناديق المعادن الثمينة • بيانات لحظية من الأسواق العالمية', colExchange2: 'المنصة', colPairs: 'أزواج التداول', colRefPrice: 'السعر المرجعي', colVol24h: 'الحجم 24 ساعة', colTrade: 'تداول', colStock: 'السهم', telegramSupport: 'الدعم عبر تيليجرام', features: 'المميزات', realTimePrices: 'أسعار لحظية', aiAnalysis: 'تحليل ذكاء اصطناعي', commodities: 'المعادن', stkAll: 'الكل', stkStock: 'أسهم', stkEtf: 'صناديق ETF', stkCommodity: 'سلع', stkIndex: 'مؤشرات', stkResults: 'نتيجة', stkSearchPlh: 'ابحث عن سهم...', stkPage: 'صفحة', stkOf: 'من', blogNav: 'المدونة', blogNavDesc: 'مقالات ودروس تعليمية', blogPost1Title: 'دليل بيتكوين 2025', blogPost1Desc: 'كل ما تحتاج معرفته عن بيتكوين', blogPost2Title: 'تنصيف البيتكوين', blogPost2Desc: 'تأثير الهالفينج على الأسعار', blogPost3Title: 'BRC-20 مقابل Runes', blogPost3Desc: 'مقارنة بروتوكولات بيتكوين', blogPost4Title: 'مؤشر الخوف والطمع', blogPost4Desc: 'فهم معنويات السوق', blogPost5Title: 'الذهب مقابل البيتكوين', blogPost5Desc: 'أيهما أفضل للاستثمار؟', blogPost6Title: 'RSI وMACD وبولينجر', blogPost6Desc: 'دليل المؤشرات الفنية', blogRead: 'اقرأ المقال', blogSectionTitle: 'مقالات تعليمية', blogTagAnalysis: 'تحليل', blogTagBeginner: 'مبتدئ', blogTagGold: 'ذهب', blogTagSecurity: 'أمان', blogViewAll: 'عرض الكل', cryptoAnalyzer: 'محلل التشفير', cryptoAnalyzerDesc: 'تحليل الرموز المشفرة', cryptoArbitrage: 'أربيتراج الكريبتو', cryptoArbitrageDesc: 'فرص الأربيتراج اللحظية', forexAnalyzer: 'محلل الفوركس', forexAnalyzerDesc: 'تحليل أزواج العملات' },
      en: { clearAll: 'Clear All', recentSearches: 'Recent Searches', topBoosted: 'Top Boosted', trendingCrypto: 'Trending Crypto', deleteItem: 'Delete', noResults: 'No results found for', searchPlaceholder: 'Search coin, NFT, exchange...', aiMenuTitle: 'Technical Analysis', aiMenuDesc: 'AI Powered Analysis', trustScore: 'Trust', siteTitle: 'CryptoHub', exchanges: 'Exchanges', recommendedExchanges: 'Recommended Exchanges', live: 'Live', fearGreedTitle: 'Fear & Greed Index', fearGreedSub: 'Market Sentiment - Comprehensive Analysis', outOf100: 'out of 100', extremeFear: 'Extreme Fear', fear: 'Fear', neutral: 'Neutral', greed: 'Greed', extremeGreed: 'Extreme Greed', aiTitle: 'AI Analysis', aiSub: 'AI-powered predictions', analyzing: 'Analyzing...', bullishSignals: 'Bullish Signals', bearishSignals: 'Bearish Signals', bollingerBands: 'Bollinger', searchCoin: 'Search coin...', sortBy: 'Sort By', network: 'Network', show: 'Show', loadMore: 'Load More', loadingData: 'Loading data...', filteredBy: 'Filter:', colName: 'Name', colPrice: 'Price', colMarketCap: 'Market Cap', colVolume: 'Volume 24h', colExchanges: 'Exchanges', prev: 'Previous', next: 'Next', showing: 'Showing', of: 'of', coins: 'coins', availableOn: 'Available on', exchange: 'exchanges', referralNote: '🎁 Referral links included', register: 'Register', visit: 'Visit', trustHigh: 'High Trust', trustMedium: 'Medium Trust', trustLow: 'Low Trust', volume: 'Volume', allNetworks: 'All Networks', rank: 'Rank', marketCap: 'Market Cap', price: 'Price', change24h: '24h Change', noExchanges: 'None found', errorLoading: 'Loading Error', retry: 'Retry', allLoaded: 'All Loaded', loadMoreRemaining: 'Load More', oversold: 'Oversold', overbought: 'Overbought', bullish: 'Bullish', bearish: 'Bearish', nearBottom: 'Near Bottom', nearTop: 'Near Top', goldenCross: 'Golden Cross', deathCross: 'Death Cross', strongBuy: 'Strong Buy', buy: 'Buy', sell: 'Sell', strongSell: 'Strong Sell', coinsFound: 'found', trendingTitle: 'Trending', trendingSub: 'Top 100 coins by 24h volume', altcoinIndex: 'Altcoin Season Index', altcoinSeason: 'Altcoin Season', btcDominance: 'BTC Dominance', ethDominance: 'ETH Dominance', totalMarketCap: 'Total Market Cap', totalVolume24: 'Total Volume 24h', fgHistory: 'History', now: 'Now', yesterday: 'Yesterday', lastWeek: 'Last Week', lastMonth: 'Last Month', entryExitTitle: 'Entry & Exit Signals - Bitcoin', entryZone: 'Entry Zone', exitZone: 'Exit Zone', currentPrice: 'Current Price', entryNote: 'At support level', exitNote: 'At resistance level', volAnalysis: 'Volume Analysis', supportResistance: 'Support/Resistance', aiRecommendation: 'Recommendation', strongTrend: 'Strong Trend', weakTrend: 'Weak Trend', highVol: 'High Volume', lowVol: 'Low Volume', aboveAvg: 'Above Average', belowAvg: 'Below Average', footerDesc: 'Your comprehensive platform for tracking 10,000+ cryptocurrencies with advanced AI analysis tools and real-time prices.', quickLinks: 'Quick Links', home: 'Home', topExchanges: 'Top Exchanges', disclaimer: 'Disclaimer', disclaimerText: 'The information provided on this site is for educational and informational purposes only and is not financial or investment advice. Cryptocurrency trading involves very high risk and you may lose your entire capital.', allRights: 'All Rights Reserved', btcSeason: 'Bitcoin Season', holdEntry: 'Wait for better entry', goodEntry: 'Good entry opportunity', riskHigh: 'High Risk', support: 'Support', yourName: 'Your Name', yourEmail: 'Your Email', yourMessage: 'Your Message...', sendMessage: 'Send Message', messageSent: 'Message sent successfully!', languages: 'Languages', secure: 'Secure', loading: 'Loading...', tabCrypto: 'Cryptocurrencies', tabExchanges: 'All Exchanges', tabCommodities: 'NFT Collections', allExchangesTitle: 'All Global Exchanges', allExchangesSub: '500 Licensed Global Exchanges • Ranked by Trust • Direct Links', searchExchange: 'Search exchange...', metalExTitle: 'Top NFT Collections', metalExSub: 'Top NFT collections ranked by volume and floor price • Real-time data', stocksTitle: 'Major Stocks & ETFs', stocksSub: 'Tokenized stocks and precious metal ETFs • Real-time data from Global Markets', colExchange2: 'Exchange', colPairs: 'Trading Pairs', colRefPrice: 'Ref. Price', colVol24h: 'Volume 24h', colTrade: 'Trade', colStock: 'Stock', telegramSupport: 'Telegram Support', features: 'Features', realTimePrices: 'Real-time Prices', aiAnalysis: 'AI Analysis', commodities: 'Metals', stkAll: 'All', stkStock: 'Stocks', stkEtf: 'ETFs', stkCommodity: 'Commodities', stkIndex: 'Indices', stkResults: 'results', stkSearchPlh: 'Search stocks, ETFs...', stkPage: 'Page', stkOf: 'of' },
      zh: { trustScore: '信任', siteTitle: 'CryptoHub', exchanges: '交易所', recommendedExchanges: '推荐交易所', live: '实时', fearGreedTitle: '恐惧与贪婪指数', fearGreedSub: '市场情绪指标 - 由Binance提供', outOf100: '满分100', extremeFear: '极度恐惧', fear: '恐惧', neutral: '中性', greed: '贪婪', extremeGreed: '极度贪婪', aiTitle: 'AI智能分析', aiSub: '人工智能驱动的预测', analyzing: '分析中...', bullishSignals: '看涨信号', bearishSignals: '看跌信号', bollingerBands: '布林带', searchCoin: '搜索币种...', sortBy: '排序', network: '网络', show: '显示', loadMore: '加载更多', loadingData: '数据加载中...', filteredBy: '筛选:', colName: '名称', colPrice: '价格', colMarketCap: '市值', colVolume: '24h成交量', colExchanges: '交易所', prev: '上一页', next: '下一页', showing: '显示', of: '共', coins: '币种', availableOn: '可交易于', exchange: '个交易所', referralNote: '🎁 包含推荐链接', register: '注册', visit: '访问', trustHigh: '高信任', trustMedium: '中等信任', trustLow: '低信任', volume: '成交量', allNetworks: '所有网络', rank: '排名', marketCap: '市值', price: '价格', change24h: '24h变化', noExchanges: '未找到', errorLoading: '加载错误', retry: '重试', allLoaded: '全部加载完成', loadMoreRemaining: '加载更多', oversold: '超卖', overbought: '超买', bullish: '看涨', bearish: '看跌', nearBottom: '接近底部', nearTop: '接近顶部', goldenCross: '金叉', deathCross: '死叉', strongBuy: '强烈买入', buy: '买入', sell: '卖出', strongSell: '强烈卖出', coinsFound: '个币种', trendingTitle: '热门趋势', trendingSub: '24小时交易量前100名', altcoinIndex: '山寨币季节指数', altcoinSeason: '山寨币季节', btcDominance: 'BTC主导地位', ethDominance: 'ETH主导地位', totalMarketCap: '总市值', totalVolume24: '24h总成交量', fgHistory: '历史', now: '现在', yesterday: '昨天', lastWeek: '上周', lastMonth: '上月', entryExitTitle: '入场与出场信号 - Bitcoin', entryZone: '入场区域', exitZone: '出场区域', currentPrice: '当前价格', entryNote: '在支撑位', exitNote: '在阻力位', volAnalysis: '成交量分析', supportResistance: '支撑/阻力', aiRecommendation: '建议', strongTrend: '强势趋势', weakTrend: '弱势趋势', highVol: '高成交量', lowVol: '低成交量', aboveAvg: '高于平均', belowAvg: '低于平均', footerDesc: '您的综合平台，追踪5000多种加密货币，配备先进的AI分析工具和实时价格。', quickLinks: '快速链接', home: '首页', topExchanges: '顶级交易所', disclaimer: '免责声明', disclaimerText: '本网站提供的信息仅供教育和参考目的，不构成财务或投资建议。加密货币交易涉及极高风险，您可能会损失全部本金。', allRights: '版权所有', btcSeason: '比特币季节', holdEntry: '等待更好的入场时机', goodEntry: '良好的入场机会', riskHigh: '高风险', support: '技术支持', yourName: '您的姓名', yourEmail: '您的邮箱', yourMessage: '您的留言...', sendMessage: '发送消息', messageSent: '消息发送成功！', languages: '语言', secure: '安全', loading: '加载中...', tabCrypto: '加密货币', tabExchanges: '所有交易所', tabCommodities: 'NFT Collections', allExchangesTitle: '全球交易所', allExchangesSub: '500家持牌全球交易所 • 按信任度排名 • 直接交易链接', searchExchange: '搜索交易所...', metalExTitle: '热门NFT合集', metalExSub: '支持贵金属交易的所有交易所及交易对和实时成交量', stocksTitle: '主要股票和ETF', stocksSub: '代币化股票和贵金属ETF • 来自Yahoo Finance的实时数据', colExchange2: '交易所', colPairs: '交易对', colRefPrice: '参考价格', colVol24h: '24h成交量', colTrade: '交易', colStock: '股票', stkAll: '全部', stkStock: '股票', stkEtf: 'ETF', stkCommodity: '大宗商品', stkIndex: '指数', stkResults: '结果', stkSearchPlh: '搜索股票...', stkPage: '第', stkOf: '共' },
      es: { aiMenuTitle: 'Análisis Técnico', aiMenuDesc: 'Análisis con IA', trustScore: 'Confianza', siteTitle: 'CryptoHub', exchanges: 'Exchanges', recommendedExchanges: 'Exchanges Recomendados', live: 'En Vivo', fearGreedTitle: 'Índice de Miedo y Codicia', fearGreedSub: 'Sentimiento del Mercado - Impulsado por Binance', outOf100: 'de 100', extremeFear: 'Miedo Extremo', fear: 'Miedo', neutral: 'Neutral', greed: 'Codicia', extremeGreed: 'Codicia Extrema', aiTitle: 'Análisis de IA', aiSub: 'Predicciones impulsadas por IA', analyzing: 'Analizando...', bullishSignals: 'Señales Alcistas', bearishSignals: 'Señales Bajistas', bollingerBands: 'Bollinger', searchCoin: 'Buscar moneda...', sortBy: 'Ordenar por', network: 'Red', show: 'Mostrar', loadMore: 'Cargar Más', loadingData: 'Cargando datos...', filteredBy: 'Filtro:', colName: 'Nombre', colPrice: 'Precio', colMarketCap: 'Cap. de Mercado', colVolume: 'Volumen 24h', colExchanges: 'Exchanges', prev: 'Anterior', next: 'Siguiente', showing: 'Mostrando', of: 'de', coins: 'monedas', availableOn: 'Disponible en', exchange: 'exchanges', referralNote: '🎁 Enlaces de referencia incluidos', register: 'Registrarse', visit: 'Visitar', trustHigh: 'Alta Confianza', trustMedium: 'Confianza Media', trustLow: 'Baja Confianza', volume: 'Volumen', allNetworks: 'Todas las Redes', rank: 'Ranking', marketCap: 'Cap. de Mercado', price: 'Precio', change24h: 'Cambio 24h', noExchanges: 'No encontrado', errorLoading: 'Error de carga', retry: 'Reintentar', allLoaded: 'Todo Cargado', loadMoreRemaining: 'Cargar Más', oversold: 'Sobrevendido', overbought: 'Sobrecomprado', bullish: 'Alcista', bearish: 'Bajista', nearBottom: 'Cerca del Fondo', nearTop: 'Cerca del Techo', goldenCross: 'Cruce Dorado', deathCross: 'Cruce de Muerte', strongBuy: 'Compra Fuerte', buy: 'Comprar', sell: 'Vender', strongSell: 'Venta Fuerte', coinsFound: 'encontradas', trendingTitle: 'Tendencias', trendingSub: 'Top 100 monedas por volumen 24h', altcoinIndex: 'Índice Temporada Altcoins', altcoinSeason: 'Temporada Altcoins', btcDominance: 'Dominancia BTC', ethDominance: 'Dominancia ETH', totalMarketCap: 'Cap. Total', totalVolume24: 'Volumen Total 24h', fgHistory: 'Historial', now: 'Ahora', yesterday: 'Ayer', lastWeek: 'Semana Pasada', lastMonth: 'Mes Pasado', entryExitTitle: 'Señales de Entrada y Salida - Bitcoin', entryZone: 'Zona de Entrada', exitZone: 'Zona de Salida', currentPrice: 'Precio Actual', entryNote: 'En nivel de soporte', exitNote: 'En resistencia', volAnalysis: 'Análisis de Volumen', supportResistance: 'Soporte/Resistencia', aiRecommendation: 'Recomendación', strongTrend: 'Tendencia Fuerte', weakTrend: 'Tendencia Débil', highVol: 'Volumen Alto', lowVol: 'Volumen Bajo', aboveAvg: 'Sobre Promedio', belowAvg: 'Bajo Promedio', footerDesc: 'Tu plataforma integral para rastrear más de 5000 criptomonedas con herramientas avanzadas de análisis de IA y precios en tiempo real.', quickLinks: 'Enlaces Rápidos', home: 'Inicio', topExchanges: 'Mejores Exchanges', disclaimer: 'Descargo de Responsabilidad', disclaimerText: 'La información proporcionada es solo para fines educativos e informativos y no constituye asesoramiento financiero. El comercio de criptomonedas implica un riesgo muy alto.', allRights: 'Todos los Derechos Reservados', btcSeason: 'Temporada Bitcoin', holdEntry: 'Esperar mejor entrada', goodEntry: 'Buena oportunidad', riskHigh: 'Alto Riesgo', support: 'Soporte', yourName: 'Tu Nombre', yourEmail: 'Tu Email', yourMessage: 'Tu Mensaje...', sendMessage: 'Enviar Mensaje', messageSent: '¡Mensaje enviado con éxito!', languages: 'Idiomas', secure: 'Seguro', loading: 'Cargando...', tabCrypto: 'Criptomonedas', tabExchanges: 'Todos los Exchanges', tabCommodities: 'NFT Collections', allExchangesTitle: 'Todos los Exchanges Globales', allExchangesSub: '500 exchanges globales licenciados • Ordenados por confianza • Enlaces directos', searchExchange: 'Buscar exchange...', metalExTitle: 'Colecciones NFT Populares', metalExSub: 'Todos los exchanges que soportan metales preciosos con pares y volumen en tiempo real', stocksTitle: 'Acciones Principales y ETFs', stocksSub: 'Acciones tokenizadas y ETFs de metales preciosos • Datos en tiempo real de Yahoo Finance', colExchange2: 'Exchange', colPairs: 'Pares de Trading', colRefPrice: 'Precio Ref.', colVol24h: 'Volumen 24h', colTrade: 'Operar', colStock: 'Acción', stkAll: 'Todo', stkStock: 'Acciones', stkEtf: 'ETFs', stkCommodity: 'Materias', stkIndex: 'Índices', stkResults: 'resultados', stkSearchPlh: 'Buscar acciones...', stkPage: 'Pág', stkOf: 'de' },
      pt: { aiMenuTitle: 'Análise Técnica', aiMenuDesc: 'Análise por IA', trustScore: 'Confiança', siteTitle: 'CryptoHub', exchanges: 'Exchanges', recommendedExchanges: 'Exchanges Recomendadas', live: 'Ao Vivo', fearGreedTitle: 'Índice de Medo e Ganância', fearGreedSub: 'Sentimento do Mercado - Alimentado por Binance', outOf100: 'de 100', extremeFear: 'Medo Extremo', fear: 'Medo', neutral: 'Neutro', greed: 'Ganância', extremeGreed: 'Ganância Extrema', aiTitle: 'Análise de IA', aiSub: 'Previsões alimentadas por IA', analyzing: 'Analisando...', bullishSignals: 'Sinais de Alta', bearishSignals: 'Sinais de Baixa', bollingerBands: 'Bollinger', searchCoin: 'Pesquisar moeda...', sortBy: 'Ordenar por', network: 'Rede', show: 'Mostrar', loadMore: 'Carregar Mais', loadingData: 'Carregando dados...', filteredBy: 'Filtro:', colName: 'Nome', colPrice: 'Preço', colMarketCap: 'Cap. de Mercado', colVolume: 'Volume 24h', colExchanges: 'Exchanges', prev: 'Anterior', next: 'Próximo', showing: 'Mostrando', of: 'de', coins: 'moedas', availableOn: 'Disponível em', exchange: 'exchanges', referralNote: '🎁 Links de indicação incluídos', register: 'Registrar', visit: 'Visitar', trustHigh: 'Alta Confiança', trustMedium: 'Confiança Média', trustLow: 'Baixa Confiança', volume: 'Volume', allNetworks: 'Todas as Redes', rank: 'Ranking', marketCap: 'Cap. de Mercado', price: 'Preço', change24h: 'Variação 24h', noExchanges: 'Não encontrado', errorLoading: 'Erro ao carregar', retry: 'Tentar novamente', allLoaded: 'Tudo Carregado', loadMoreRemaining: 'Carregar Mais', oversold: 'Sobrevendido', overbought: 'Sobrecomprado', bullish: 'Alta', bearish: 'Baixa', nearBottom: 'Perto do Fundo', nearTop: 'Perto do Topo', goldenCross: 'Cruz Dourada', deathCross: 'Cruz da Morte', strongBuy: 'Compra Forte', buy: 'Comprar', sell: 'Vender', strongSell: 'Venda Forte', coinsFound: 'encontradas', trendingTitle: 'Em Alta', trendingSub: 'Top 100 moedas por volume 24h', altcoinIndex: 'Índice Temporada Altcoins', altcoinSeason: 'Temporada Altcoins', btcDominance: 'Dominância BTC', ethDominance: 'Dominância ETH', totalMarketCap: 'Cap. Total', totalVolume24: 'Volume Total 24h', fgHistory: 'Histórico', now: 'Agora', yesterday: 'Ontem', lastWeek: 'Semana Passada', lastMonth: 'Mês Passado', entryExitTitle: 'Sinais de Entrada e Saída - Bitcoin', entryZone: 'Zona de Entrada', exitZone: 'Zona de Saída', currentPrice: 'Preço Atual', entryNote: 'No nível de suporte', exitNote: 'Na resistência', volAnalysis: 'Análise de Volume', supportResistance: 'Suporte/Resistência', aiRecommendation: 'Recomendação', strongTrend: 'Tendência Forte', weakTrend: 'Tendência Fraca', highVol: 'Volume Alto', lowVol: 'Volume Baixo', aboveAvg: 'Acima da Média', belowAvg: 'Abaixo da Média', footerDesc: 'Sua plataforma completa para rastrear mais de 5000 criptomoedas com ferramentas avançadas de análise de IA e preços em tempo real.', quickLinks: 'Links Rápidos', home: 'Início', topExchanges: 'Melhores Exchanges', disclaimer: 'Aviso Legal', disclaimerText: 'As informações fornecidas são apenas para fins educacionais e informativos e não constituem aconselhamento financeiro. A negociação de criptomoedas envolve risco muito alto.', allRights: 'Todos os Direitos Reservados', btcSeason: 'Temporada Bitcoin', holdEntry: 'Aguardar melhor entrada', goodEntry: 'Boa oportunidade', riskHigh: 'Alto Risco', support: 'Suporte', yourName: 'Seu Nome', yourEmail: 'Seu Email', yourMessage: 'Sua Mensagem...', sendMessage: 'Enviar Mensagem', messageSent: 'Mensagem enviada com sucesso!', languages: 'Idiomas', secure: 'Seguro', loading: 'Carregando...', tabCrypto: 'Criptomoedas', tabExchanges: 'Todas as Exchanges', tabCommodities: 'NFT Collections', allExchangesTitle: 'Todas as Exchanges Globais', allExchangesSub: '500 exchanges globais licenciadas • Por grau de confiança • Links diretos', searchExchange: 'Pesquisar exchange...', metalExTitle: 'Coleções NFT Populares', metalExSub: 'Todas as exchanges com metais preciosos, pares e volume em tempo real', stocksTitle: 'Ações Principais e ETFs', stocksSub: 'Ações tokenizadas e ETFs de metais preciosos • Dados em tempo real do Yahoo Finance', colExchange2: 'Exchange', colPairs: 'Pares de Trading', colRefPrice: 'Preço Ref.', colVol24h: 'Volume 24h', colTrade: 'Negociar', colStock: 'Ação', stkAll: 'Tudo', stkStock: 'Ações', stkEtf: 'ETFs', stkCommodity: 'Commodities', stkIndex: 'Índices', stkResults: 'resultados', stkSearchPlh: 'Pesquisar ações...', stkPage: 'Pág', stkOf: 'de' },
      fr: { trustScore: 'Confiance', siteTitle: 'CryptoHub', exchanges: 'Plateformes', recommendedExchanges: 'Plateformes Recommandées', live: 'En Direct', fearGreedTitle: 'Indice de Peur et Cupidité', fearGreedSub: 'Sentiment du Marché - Propulsé par Binance', outOf100: 'sur 100', extremeFear: 'Peur Extrême', fear: 'Peur', neutral: 'Neutre', greed: 'Cupidité', extremeGreed: 'Cupidité Extrême', aiTitle: 'Analyse IA', aiSub: 'Prédictions alimentées par l\'IA', analyzing: 'Analyse en cours...', bullishSignals: 'Signaux Haussiers', bearishSignals: 'Signaux Baissiers', bollingerBands: 'Bollinger', searchCoin: 'Rechercher une crypto...', sortBy: 'Trier par', network: 'Réseau', show: 'Afficher', loadMore: 'Charger Plus', loadingData: 'Chargement...', filteredBy: 'Filtre:', colName: 'Nom', colPrice: 'Prix', colMarketCap: 'Cap. Marché', colVolume: 'Volume 24h', colExchanges: 'Plateformes', prev: 'Précédent', next: 'Suivant', showing: 'Affichage', of: 'de', coins: 'cryptos', availableOn: 'Disponible sur', exchange: 'plateformes', referralNote: '🎁 Liens de parrainage inclus', register: 'S\'inscrire', visit: 'Visiter', trustHigh: 'Confiance Élevée', trustMedium: 'Confiance Moyenne', trustLow: 'Confiance Faible', volume: 'Volume', allNetworks: 'Tous les Réseaux', rank: 'Rang', marketCap: 'Cap. Marché', price: 'Prix', change24h: 'Variation 24h', noExchanges: 'Aucun résultat', errorLoading: 'Erreur de chargement', retry: 'Réessayer', allLoaded: 'Tout Chargé', loadMoreRemaining: 'Charger Plus', oversold: 'Survendu', overbought: 'Suracheté', bullish: 'Haussier', bearish: 'Baissier', nearBottom: 'Proche du Bas', nearTop: 'Proche du Haut', goldenCross: 'Croix Dorée', deathCross: 'Croix de Mort', strongBuy: 'Achat Fort', buy: 'Acheter', sell: 'Vendre', strongSell: 'Vente Forte', coinsFound: 'trouvées', trendingTitle: 'Tendances', trendingSub: 'Top 100 cryptos par volume 24h', altcoinIndex: 'Indice Saison Altcoins', altcoinSeason: 'Saison Altcoins', btcDominance: 'Dominance BTC', ethDominance: 'Dominance ETH', totalMarketCap: 'Cap. Totale', totalVolume24: 'Volume Total 24h', fgHistory: 'Historique', now: 'Maintenant', yesterday: 'Hier', lastWeek: 'Semaine Dernière', lastMonth: 'Mois Dernier', entryExitTitle: 'Signaux d\'Entrée et Sortie - Bitcoin', entryZone: 'Zone d\'Entrée', exitZone: 'Zone de Sortie', currentPrice: 'Prix Actuel', entryNote: 'Au niveau de support', exitNote: 'Au niveau de résistance', volAnalysis: 'Analyse du Volume', supportResistance: 'Support/Résistance', aiRecommendation: 'Recommandation', strongTrend: 'Tendance Forte', weakTrend: 'Tendance Faible', highVol: 'Volume Élevé', lowVol: 'Volume Faible', aboveAvg: 'Au-dessus de la Moyenne', belowAvg: 'En-dessous de la Moyenne', footerDesc: 'Votre plateforme complète pour suivre plus de 5000 cryptomonnaies avec des outils d\'analyse IA avancés et des prix en temps réel.', quickLinks: 'Liens Rapides', home: 'Accueil', topExchanges: 'Meilleures Plateformes', disclaimer: 'Avertissement', disclaimerText: 'Les informations fournies sur ce site sont à des fins éducatives et informatives uniquement et ne constituent pas des conseils financiers. Le trading de cryptomonnaies comporte un risque très élevé.', allRights: 'Tous Droits Réservés', btcSeason: 'Saison Bitcoin', holdEntry: 'Attendre une meilleure entrée', goodEntry: 'Bonne opportunité d\'entrée', riskHigh: 'Risque Élevé', support: 'Support', yourName: 'Votre Nom', yourEmail: 'Votre Email', yourMessage: 'Votre Message...', sendMessage: 'Envoyer', messageSent: 'Message envoyé avec succès !', languages: 'Langues', secure: 'Sécurisé', loading: 'Chargement...', tabCrypto: 'Cryptomonnaies', tabExchanges: 'Toutes les Plateformes', tabCommodities: 'NFT Collections', allExchangesTitle: 'Toutes les Plateformes Mondiales', allExchangesSub: '500 plateformes mondiales licenciées • Classées par confiance • Liens de trading directs', searchExchange: 'Rechercher une plateforme...', metalExTitle: 'Collections NFT Populaires', metalExSub: 'Toutes les plateformes supportant les métaux précieux avec paires et volume en temps réel', stocksTitle: 'Actions Principales et ETFs', stocksSub: 'Actions tokenisées et ETFs métaux précieux • Données en temps réel de Yahoo Finance', colExchange2: 'Plateforme', colPairs: 'Paires de Trading', colRefPrice: 'Prix Réf.', colVol24h: 'Volume 24h', colTrade: 'Trader', colStock: 'Action', stkAll: 'Tout', stkStock: 'Actions', stkEtf: 'ETFs', stkCommodity: 'Matières', stkIndex: 'Indices', stkResults: 'résultats', stkSearchPlh: 'Chercher actions...', stkPage: 'Page', stkOf: 'sur' },
      de: { trustScore: 'Vertrauen', siteTitle: 'CryptoHub', exchanges: 'Börsen', recommendedExchanges: 'Empfohlene Börsen', live: 'Live', fearGreedTitle: 'Angst & Gier Index', fearGreedSub: 'Marktstimmung - Powered by Binance', outOf100: 'von 100', extremeFear: 'Extreme Angst', fear: 'Angst', neutral: 'Neutral', greed: 'Gier', extremeGreed: 'Extreme Gier', aiTitle: 'KI-Analyse', aiSub: 'KI-gestützte Vorhersagen', analyzing: 'Analyse läuft...', bullishSignals: 'Bullische Signale', bearishSignals: 'Bärische Signale', bollingerBands: 'Bollinger', searchCoin: 'Coin suchen...', sortBy: 'Sortieren nach', network: 'Netzwerk', show: 'Anzeigen', loadMore: 'Mehr laden', loadingData: 'Laden...', filteredBy: 'Filter:', colName: 'Name', colPrice: 'Preis', colMarketCap: 'Marktkapitalisierung', colVolume: 'Volumen 24h', colExchanges: 'Börsen', prev: 'Zurück', next: 'Weiter', showing: 'Anzeige', of: 'von', coins: 'Coins', availableOn: 'Verfügbar auf', exchange: 'Börsen', referralNote: '🎁 Empfehlungslinks enthalten', register: 'Registrieren', visit: 'Besuchen', trustHigh: 'Hohe Vertrauenswürdigkeit', trustMedium: 'Mittlere Vertrauenswürdigkeit', trustLow: 'Geringe Vertrauenswürdigkeit', volume: 'Volumen', allNetworks: 'Alle Netzwerke', rank: 'Rang', marketCap: 'Marktkapitalisierung', price: 'Preis', change24h: '24h Änderung', noExchanges: 'Nicht gefunden', errorLoading: 'Ladefehler', retry: 'Erneut versuchen', allLoaded: 'Alles Geladen', loadMoreRemaining: 'Mehr laden', oversold: 'Überverkauft', overbought: 'Überkauft', bullish: 'Bullisch', bearish: 'Bärisch', nearBottom: 'Nahe Tiefpunkt', nearTop: 'Nahe Hochpunkt', goldenCross: 'Goldenes Kreuz', deathCross: 'Todeskreuz', strongBuy: 'Starker Kauf', buy: 'Kaufen', sell: 'Verkaufen', strongSell: 'Starker Verkauf', coinsFound: 'gefunden', trendingTitle: 'Im Trend', trendingSub: 'Top 100 Coins nach 24h Volumen', altcoinIndex: 'Altcoin-Saison-Index', altcoinSeason: 'Altcoin-Saison', btcDominance: 'BTC Dominanz', ethDominance: 'ETH Dominanz', totalMarketCap: 'Gesamt-Marktkapitalisierung', totalVolume24: 'Gesamtvolumen 24h', fgHistory: 'Verlauf', now: 'Jetzt', yesterday: 'Gestern', lastWeek: 'Letzte Woche', lastMonth: 'Letzter Monat', entryExitTitle: 'Ein- und Ausstiegssignale - Bitcoin', entryZone: 'Einstiegszone', exitZone: 'Ausstiegszone', currentPrice: 'Aktueller Preis', entryNote: 'Am Unterstützungsniveau', exitNote: 'Am Widerstandsniveau', volAnalysis: 'Volumenanalyse', supportResistance: 'Unterstützung/Widerstand', aiRecommendation: 'Empfehlung', strongTrend: 'Starker Trend', weakTrend: 'Schwacher Trend', highVol: 'Hohes Volumen', lowVol: 'Niedriges Volumen', aboveAvg: 'Über Durchschnitt', belowAvg: 'Unter Durchschnitt', footerDesc: 'Ihre umfassende Plattform zur Verfolgung von über 5000 Kryptowährungen mit fortschrittlichen KI-Analysetools und Echtzeitpreisen.', quickLinks: 'Schnelllinks', home: 'Startseite', topExchanges: 'Top-Börsen', disclaimer: 'Haftungsausschluss', disclaimerText: 'Die auf dieser Website bereitgestellten Informationen dienen nur zu Bildungs- und Informationszwecken und stellen keine Finanz- oder Anlageberatung dar. Der Kryptowährungshandel birgt ein sehr hohes Risiko.', allRights: 'Alle Rechte vorbehalten', btcSeason: 'Bitcoin-Saison', holdEntry: 'Auf besseren Einstieg warten', goodEntry: 'Gute Einstiegsmöglichkeit', riskHigh: 'Hohes Risiko', support: 'Support', yourName: 'Ihr Name', yourEmail: 'Ihre E-Mail', yourMessage: 'Ihre Nachricht...', sendMessage: 'Senden', messageSent: 'Nachricht erfolgreich gesendet!', languages: 'Sprachen', secure: 'Sicher', loading: 'Laden...', tabCrypto: 'Kryptowährungen', tabExchanges: 'Alle Börsen', tabCommodities: 'NFT Collections', allExchangesTitle: 'Alle Globalen Börsen', allExchangesSub: '500 Lizenzierte globale Börsen • Nach Vertrauen sortiert • Direkte Handelslinks', searchExchange: 'Börse suchen...', metalExTitle: 'Top NFT-Sammlungen', metalExSub: 'Alle Börsen mit Edelmetallhandel, Paaren und Echtzeitvolumen', stocksTitle: 'Wichtige Aktien & ETFs', stocksSub: 'Tokenisierte Aktien & Edelmetall-ETFs • Echtzeitdaten von Yahoo Finance', colExchange2: 'Börse', colPairs: 'Handelspaare', colRefPrice: 'Ref. Preis', colVol24h: 'Volumen 24h', colTrade: 'Handeln', colStock: 'Aktie', stkAll: 'Alle', stkStock: 'Aktien', stkEtf: 'ETFs', stkCommodity: 'Rohstoffe', stkIndex: 'Indizes', stkResults: 'Ergebnisse', stkSearchPlh: 'Aktien suchen...', stkPage: 'Seite', stkOf: 'von' },
      it: { trustScore: 'Fiducia', siteTitle: 'CryptoHub', exchanges: 'Exchange', recommendedExchanges: 'Exchange Consigliati', live: 'In Diretta', fearGreedTitle: 'Indice Paura e Avidità', fearGreedSub: 'Sentimento di Mercato - Alimentato da Binance', outOf100: 'su 100', extremeFear: 'Paura Estrema', fear: 'Paura', neutral: 'Neutrale', greed: 'Avidità', extremeGreed: 'Avidità Estrema', aiTitle: 'Analisi IA', aiSub: 'Previsioni basate sull\'IA', analyzing: 'Analisi in corso...', bullishSignals: 'Segnali Rialzisti', bearishSignals: 'Segnali Ribassisti', bollingerBands: 'Bollinger', searchCoin: 'Cerca crypto...', sortBy: 'Ordina per', network: 'Rete', show: 'Mostra', loadMore: 'Carica Altro', loadingData: 'Caricamento...', filteredBy: 'Filtro:', colName: 'Nome', colPrice: 'Prezzo', colMarketCap: 'Cap. di Mercato', colVolume: 'Volume 24h', colExchanges: 'Exchange', prev: 'Precedente', next: 'Successivo', showing: 'Visualizzazione', of: 'di', coins: 'crypto', availableOn: 'Disponibile su', exchange: 'exchange', referralNote: '🎁 Link di referral inclusi', register: 'Registrati', visit: 'Visita', trustHigh: 'Alta Affidabilità', trustMedium: 'Media Affidabilità', trustLow: 'Bassa Affidabilità', volume: 'Volume', allNetworks: 'Tutte le Reti', rank: 'Posizione', marketCap: 'Cap. di Mercato', price: 'Prezzo', change24h: 'Variazione 24h', noExchanges: 'Nessun risultato', errorLoading: 'Errore di caricamento', retry: 'Riprova', allLoaded: 'Tutto Caricato', loadMoreRemaining: 'Carica Altro', oversold: 'Ipervenduto', overbought: 'Ipercomprato', bullish: 'Rialzista', bearish: 'Ribassista', nearBottom: 'Vicino al Minimo', nearTop: 'Vicino al Massimo', goldenCross: 'Croce Dorata', deathCross: 'Croce della Morte', strongBuy: 'Acquisto Forte', buy: 'Comprare', sell: 'Vendere', strongSell: 'Vendita Forte', coinsFound: 'trovate', trendingTitle: 'In Tendenza', trendingSub: 'Top 100 crypto per volume 24h', altcoinIndex: 'Indice Stagione Altcoin', altcoinSeason: 'Stagione Altcoin', btcDominance: 'Dominanza BTC', ethDominance: 'Dominanza ETH', totalMarketCap: 'Cap. Totale', totalVolume24: 'Volume Totale 24h', fgHistory: 'Storico', now: 'Adesso', yesterday: 'Ieri', lastWeek: 'Settimana Scorsa', lastMonth: 'Mese Scorso', entryExitTitle: 'Segnali di Entrata e Uscita - Bitcoin', entryZone: 'Zona di Entrata', exitZone: 'Zona di Uscita', currentPrice: 'Prezzo Attuale', entryNote: 'Al livello di supporto', exitNote: 'Al livello di resistenza', volAnalysis: 'Analisi del Volume', supportResistance: 'Supporto/Resistenza', aiRecommendation: 'Raccomandazione', strongTrend: 'Tendenza Forte', weakTrend: 'Tendenza Debole', highVol: 'Volume Alto', lowVol: 'Volume Basso', aboveAvg: 'Sopra la Media', belowAvg: 'Sotto la Media', footerDesc: 'La tua piattaforma completa per monitorare oltre 5000 criptovalute con strumenti di analisi IA avanzati e prezzi in tempo reale.', quickLinks: 'Link Rapidi', home: 'Home', topExchanges: 'Migliori Exchange', disclaimer: 'Disclaimer', disclaimerText: 'Le informazioni fornite su questo sito sono solo a scopo educativo e informativo e non costituiscono consulenza finanziaria. Il trading di criptovalute comporta un rischio molto elevato.', allRights: 'Tutti i Diritti Riservati', btcSeason: 'Stagione Bitcoin', holdEntry: 'Attendere ingresso migliore', goodEntry: 'Buona opportunità di ingresso', riskHigh: 'Alto Rischio', support: 'Supporto', yourName: 'Il tuo Nome', yourEmail: 'La tua Email', yourMessage: 'Il tuo Messaggio...', sendMessage: 'Invia', messageSent: 'Messaggio inviato con successo!', languages: 'Lingue', secure: 'Sicuro', loading: 'Caricamento...', tabCrypto: 'Criptovalute', tabExchanges: 'Tutti gli Exchange', tabCommodities: 'NFT Collections', allExchangesTitle: 'Tutti gli Exchange Globali', allExchangesSub: '500 exchange globali autorizzati • Ordinati per affidabilità • Link di trading diretti', searchExchange: 'Cerca exchange...', metalExTitle: 'Collezioni NFT Popolari', metalExSub: 'Tutti gli exchange con metalli preziosi, coppie e volumi in tempo reale', stocksTitle: 'Azioni Principali ed ETF', stocksSub: 'Azioni tokenizzate ed ETF metalli preziosi • Dati in tempo reale da Yahoo Finance', colExchange2: 'Exchange', colPairs: 'Coppie di Trading', colRefPrice: 'Prezzo Rif.', colVol24h: 'Volume 24h', colTrade: 'Opera', colStock: 'Azione', stkAll: 'Tutto', stkStock: 'Azioni', stkEtf: 'ETF', stkCommodity: 'Materie', stkIndex: 'Indici', stkResults: 'risultati', stkSearchPlh: 'Cerca azioni...', stkPage: 'Pag', stkOf: 'di' },
      ru: { trustScore: 'Доверие', siteTitle: 'CryptoHub', exchanges: 'Биржи', recommendedExchanges: 'Рекомендуемые Биржи', live: 'Онлайн', fearGreedTitle: 'Индекс Страха и Жадности', fearGreedSub: 'Настроение рынка - от Binance', outOf100: 'из 100', extremeFear: 'Крайний Страх', fear: 'Страх', neutral: 'Нейтрально', greed: 'Жадность', extremeGreed: 'Крайняя Жадность', aiTitle: 'ИИ-Анализ', aiSub: 'Прогнозы на основе ИИ', analyzing: 'Анализ...', bullishSignals: 'Бычьи Сигналы', bearishSignals: 'Медвежьи Сигналы', bollingerBands: 'Боллинджер', searchCoin: 'Поиск монеты...', sortBy: 'Сортировка', network: 'Сеть', show: 'Показать', loadMore: 'Загрузить ещё', loadingData: 'Загрузка...', filteredBy: 'Фильтр:', colName: 'Название', colPrice: 'Цена', colMarketCap: 'Капитализация', colVolume: 'Объём 24ч', colExchanges: 'Биржи', prev: 'Назад', next: 'Далее', showing: 'Показано', of: 'из', coins: 'монет', availableOn: 'Доступно на', exchange: 'биржах', referralNote: '🎁 Реферальные ссылки', register: 'Регистрация', visit: 'Перейти', trustHigh: 'Высокое Доверие', trustMedium: 'Среднее Доверие', trustLow: 'Низкое Доверие', volume: 'Объём', allNetworks: 'Все Сети', rank: 'Ранг', marketCap: 'Капитализация', price: 'Цена', change24h: 'Изм. 24ч', noExchanges: 'Не найдено', errorLoading: 'Ошибка загрузки', retry: 'Повторить', allLoaded: 'Всё Загружено', loadMoreRemaining: 'Загрузить ещё', oversold: 'Перепроданность', overbought: 'Перекупленность', bullish: 'Бычий', bearish: 'Медвежий', nearBottom: 'Около Дна', nearTop: 'Около Вершины', goldenCross: 'Золотой Крест', deathCross: 'Крест Смерти', strongBuy: 'Активная Покупка', buy: 'Покупка', sell: 'Продажа', strongSell: 'Активная Продажа', coinsFound: 'найдено', trendingTitle: 'В тренде', trendingSub: 'Топ 100 монет по объёму за 24ч', altcoinIndex: 'Индекс Сезона Альткоинов', altcoinSeason: 'Сезон Альткоинов', btcDominance: 'Доминация BTC', ethDominance: 'Доминация ETH', totalMarketCap: 'Общая Капитализация', totalVolume24: 'Общий Объём 24ч', fgHistory: 'История', now: 'Сейчас', yesterday: 'Вчера', lastWeek: 'Прошлая Неделя', lastMonth: 'Прошлый Месяц', entryExitTitle: 'Сигналы Входа и Выхода - Bitcoin', entryZone: 'Зона Входа', exitZone: 'Зона Выхода', currentPrice: 'Текущая Цена', entryNote: 'На уровне поддержки', exitNote: 'На уровне сопротивления', volAnalysis: 'Анализ Объёма', supportResistance: 'Поддержка/Сопротивление', aiRecommendation: 'Рекомендация', strongTrend: 'Сильный Тренд', weakTrend: 'Слабый Тренд', highVol: 'Высокий Объём', lowVol: 'Низкий Объём', aboveAvg: 'Выше Среднего', belowAvg: 'Ниже Среднего', footerDesc: 'Ваша комплексная платформа для отслеживания более 5000 криптовалют с продвинутыми инструментами ИИ-анализа и ценами в реальном времени.', quickLinks: 'Быстрые Ссылки', home: 'Главная', topExchanges: 'Лучшие Биржи', disclaimer: 'Отказ от ответственности', disclaimerText: 'Информация на этом сайте предоставлена только в образовательных и информационных целях и не является финансовой консультацией. Торговля криптовалютами связана с очень высоким риском.', allRights: 'Все Права Защищены', btcSeason: 'Сезон Bitcoin', holdEntry: 'Ждать лучший вход', goodEntry: 'Хорошая возможность входа', riskHigh: 'Высокий Риск', support: 'Поддержка', yourName: 'Ваше Имя', yourEmail: 'Ваш Email', yourMessage: 'Ваше Сообщение...', sendMessage: 'Отправить', messageSent: 'Сообщение успешно отправлено!', languages: 'Языки', secure: 'Безопасно', loading: 'Загрузка...', tabCrypto: 'Криптовалюты', tabExchanges: 'Все Биржи', tabCommodities: 'NFT Collections', allExchangesTitle: 'Все Мировые Биржи', allExchangesSub: '500 лицензированных биржи • По степени доверия • Прямые ссылки для торговли', searchExchange: 'Поиск биржи...', metalExTitle: 'Топ NFT Коллекции', metalExSub: 'Все биржи с драгметаллами, парами и объёмами в реальном времени', stocksTitle: 'Основные Акции и ETF', stocksSub: 'Токенизированные акции и ETF драгметаллов • Данные от Yahoo Finance в реальном времени', colExchange2: 'Биржа', colPairs: 'Торговые Пары', colRefPrice: 'Реф. Цена', colVol24h: 'Объём 24ч', colTrade: 'Торговать', colStock: 'Акция', stkAll: 'Все', stkStock: 'Акции', stkEtf: 'ETF', stkCommodity: 'Сырьё', stkIndex: 'Индексы', stkResults: 'результатов', stkSearchPlh: 'Поиск акций...', stkPage: 'Стр', stkOf: 'из' },
      tr: { trustScore: 'Güven', siteTitle: 'CryptoHub', exchanges: 'Borsalar', recommendedExchanges: 'Önerilen Borsalar', live: 'Canlı', fearGreedTitle: 'Korku ve Açgözlülük Endeksi', fearGreedSub: 'Piyasa Duyarlılığı - Binance Destekli', outOf100: '/ 100', extremeFear: 'Aşırı Korku', fear: 'Korku', neutral: 'Nötr', greed: 'Açgözlülük', extremeGreed: 'Aşırı Açgözlülük', aiTitle: 'Yapay Zeka Analizi', aiSub: 'Yapay zeka destekli tahminler', analyzing: 'Analiz ediliyor...', bullishSignals: 'Yükseliş Sinyalleri', bearishSignals: 'Düşüş Sinyalleri', bollingerBands: 'Bollinger', searchCoin: 'Coin ara...', sortBy: 'Sırala', network: 'Ağ', show: 'Göster', loadMore: 'Daha Fazla Yükle', loadingData: 'Yükleniyor...', filteredBy: 'Filtre:', colName: 'Ad', colPrice: 'Fiyat', colMarketCap: 'Piyasa Değeri', colVolume: 'Hacim 24s', colExchanges: 'Borsalar', prev: 'Önceki', next: 'Sonraki', showing: 'Gösterilen', of: '/', coins: 'coin', availableOn: 'Mevcut:', exchange: 'borsa', referralNote: '🎁 Referans linkleri dahil', register: 'Kayıt Ol', visit: 'Ziyaret Et', trustHigh: 'Yüksek Güven', trustMedium: 'Orta Güven', trustLow: 'Düşük Güven', volume: 'Hacim', allNetworks: 'Tüm Ağlar', rank: 'Sıra', marketCap: 'Piyasa Değeri', price: 'Fiyat', change24h: '24s Değişim', noExchanges: 'Bulunamadı', errorLoading: 'Yükleme Hatası', retry: 'Tekrar Dene', allLoaded: 'Tümü Yüklendi', loadMoreRemaining: 'Daha Fazla Yükle', oversold: 'Aşırı Satış', overbought: 'Aşırı Alım', bullish: 'Yükseliş', bearish: 'Düşüş', nearBottom: 'Dip Yakın', nearTop: 'Tepe Yakın', goldenCross: 'Altın Kesişim', deathCross: 'Ölüm Kesişimi', strongBuy: 'Güçlü Al', buy: 'Al', sell: 'Sat', strongSell: 'Güçlü Sat', coinsFound: 'bulundu', trendingTitle: 'Trend', trendingSub: '24s hacme göre ilk 100 coin', altcoinIndex: 'Altcoin Sezonu Endeksi', altcoinSeason: 'Altcoin Sezonu', btcDominance: 'BTC Hakimiyeti', ethDominance: 'ETH Hakimiyeti', totalMarketCap: 'Toplam Piyasa Değeri', totalVolume24: 'Toplam Hacim 24s', fgHistory: 'Geçmiş', now: 'Şimdi', yesterday: 'Dün', lastWeek: 'Geçen Hafta', lastMonth: 'Geçen Ay', entryExitTitle: 'Giriş ve Çıkış Sinyalleri - Bitcoin', entryZone: 'Giriş Bölgesi', exitZone: 'Çıkış Bölgesi', currentPrice: 'Mevcut Fiyat', entryNote: 'Destek seviyesinde', exitNote: 'Direnç seviyesinde', volAnalysis: 'Hacim Analizi', supportResistance: 'Destek/Direnç', aiRecommendation: 'Öneri', strongTrend: 'Güçlü Trend', weakTrend: 'Zayıf Trend', highVol: 'Yüksek Hacim', lowVol: 'Düşük Hacim', aboveAvg: 'Ortalamanın Üstünde', belowAvg: 'Ortalamanın Altında', footerDesc: '5000\'den fazla kripto parayı gelişmiş yapay zeka analiz araçları ve gerçek zamanlı fiyatlarla takip etmek için kapsamlı platformunuz.', quickLinks: 'Hızlı Linkler', home: 'Ana Sayfa', topExchanges: 'En İyi Borsalar', disclaimer: 'Sorumluluk Reddi', disclaimerText: 'Bu sitede sağlanan bilgiler yalnızca eğitim ve bilgilendirme amaçlıdır, finansal tavsiye değildir. Kripto para ticareti çok yüksek risk içerir.', allRights: 'Tüm Hakları Saklıdır', btcSeason: 'Bitcoin Sezonu', holdEntry: 'Daha iyi giriş bekle', goodEntry: 'İyi giriş fırsatı', riskHigh: 'Yüksek Risk', support: 'Destek', yourName: 'Adınız', yourEmail: 'E-postanız', yourMessage: 'Mesajınız...', sendMessage: 'Gönder', messageSent: 'Mesaj başarıyla gönderildi!', languages: 'Diller', secure: 'Güvenli', loading: 'Yükleniyor...', tabCrypto: 'Kripto Paralar', tabExchanges: 'Tüm Borsalar', tabCommodities: 'NFT Collections', allExchangesTitle: 'Tüm Küresel Borsalar', allExchangesSub: '500 lisanslı küresel borsa • Güven puanına göre • Doğrudan ticaret linkleri', searchExchange: 'Borsa ara...', metalExTitle: 'Popüler NFT Koleksiyonları', metalExSub: 'Değerli metal ticaretini destekleyen tüm borsalar', stocksTitle: 'Ana Hisseler ve ETF\'ler', stocksSub: 'Tokenize hisseler ve değerli metal ETF\'leri • Binance gerçek zamanlı veri', colExchange2: 'Borsa', colPairs: 'Ticaret Çiftleri', colRefPrice: 'Ref. Fiyat', colVol24h: 'Hacim 24s', colTrade: 'İşlem Yap', colStock: 'Hisse', stkAll: 'Tümü', stkStock: 'Hisseler', stkEtf: 'ETF', stkCommodity: 'Emtialar', stkIndex: 'Endeksler', stkResults: 'sonuç', stkSearchPlh: 'Hisse ara...', stkPage: 'Sayfa', stkOf: '/' },
      ja: { trustScore: '信頼', siteTitle: 'CryptoHub', exchanges: '取引所', recommendedExchanges: 'おすすめ取引所', live: 'ライブ', fearGreedTitle: '恐怖＆強欲指数', fearGreedSub: '市場センチメント - Binance提供', outOf100: '/ 100', extremeFear: '極度の恐怖', fear: '恐怖', neutral: '中立', greed: '強欲', extremeGreed: '極度の強欲', aiTitle: 'AI分析', aiSub: 'AI予測', analyzing: '分析中...', bullishSignals: '強気シグナル', bearishSignals: '弱気シグナル', bollingerBands: 'ボリンジャー', searchCoin: 'コイン検索...', sortBy: '並べ替え', network: 'ネットワーク', show: '表示', loadMore: 'もっと読み込む', loadingData: '読み込み中...', filteredBy: 'フィルター:', colName: '名前', colPrice: '価格', colMarketCap: '時価総額', colVolume: '出来高 24h', colExchanges: '取引所', prev: '前へ', next: '次へ', showing: '表示中', of: '/', coins: 'コイン', availableOn: '取引可能:', exchange: '取引所', referralNote: '🎁 紹介リンク付き', register: '登録', visit: '訪問', trustHigh: '高信頼', trustMedium: '中信頼', trustLow: '低信頼', volume: '出来高', allNetworks: '全ネットワーク', rank: '順位', marketCap: '時価総額', price: '価格', change24h: '24h変動', noExchanges: '見つかりません', errorLoading: '読み込みエラー', retry: '再試行', allLoaded: '全て読み込み完了', loadMoreRemaining: 'もっと読み込む', oversold: '売られすぎ', overbought: '買われすぎ', bullish: '強気', bearish: '弱気', nearBottom: '底値付近', nearTop: '天井付近', goldenCross: 'ゴールデンクロス', deathCross: 'デッドクロス', strongBuy: '強い買い', buy: '買い', sell: '売り', strongSell: '強い売り', coinsFound: '件', trendingTitle: 'トレンド', trendingSub: '24h出来高トップ100', altcoinIndex: 'アルトコインシーズン指数', altcoinSeason: 'アルトコインシーズン', btcDominance: 'BTC支配率', ethDominance: 'ETH支配率', totalMarketCap: '総時価総額', totalVolume24: '総出来高 24h', fgHistory: '履歴', now: '現在', yesterday: '昨日', lastWeek: '先週', lastMonth: '先月', entryExitTitle: 'エントリー＆出口シグナル - Bitcoin', entryZone: 'エントリーゾーン', exitZone: '出口ゾーン', currentPrice: '現在価格', entryNote: 'サポートレベル', exitNote: 'レジスタンスレベル', volAnalysis: '出来高分析', supportResistance: 'サポート/レジスタンス', aiRecommendation: '推奨', strongTrend: '強いトレンド', weakTrend: '弱いトレンド', highVol: '高出来高', lowVol: '低出来高', aboveAvg: '平均以上', belowAvg: '平均以下', footerDesc: '5000以上の暗号資産をAI分析ツールとリアルタイム価格で追跡する総合プラットフォーム。', quickLinks: 'クイックリンク', home: 'ホーム', topExchanges: 'トップ取引所', disclaimer: '免責事項', disclaimerText: '本サイトの情報は教育・情報目的のみであり、金融アドバイスではありません。暗号資産取引には非常に高いリスクが伴います。', allRights: 'All Rights Reserved', btcSeason: 'ビットコインシーズン', holdEntry: 'より良いエントリーを待つ', goodEntry: '良い参入機会', riskHigh: '高リスク', support: 'サポート', yourName: 'お名前', yourEmail: 'メールアドレス', yourMessage: 'メッセージ...', sendMessage: '送信', messageSent: '送信しました！', languages: '言語', secure: '安全', loading: '読み込み中...', tabCrypto: '暗号資産', tabExchanges: '全取引所', tabCommodities: 'NFT Collections', allExchangesTitle: '世界の全取引所', allExchangesSub: '500のライセンス取引所 • 信頼度順 • 直接取引リンク', searchExchange: '取引所を検索...', metalExTitle: '人気NFTコレクション', metalExSub: '貴金属取引対応の全取引所、取引ペアとリアルタイム出来高', stocksTitle: '主要株式＆ETF', stocksSub: 'トークン化株式＆貴金属ETF • Yahoo Financeリアルタイムデータ', colExchange2: '取引所', colPairs: '取引ペア', colRefPrice: '参考価格', colVol24h: '出来高 24h', colTrade: '取引', colStock: '株式', stkAll: 'すべて', stkStock: '株式', stkEtf: 'ETF', stkCommodity: '商品', stkIndex: '指数', stkResults: '件', stkSearchPlh: '株式を検索...', stkPage: 'ページ', stkOf: '/' },
      ko: { trustScore: '신뢰', siteTitle: 'CryptoHub', exchanges: '거래소', recommendedExchanges: '추천 거래소', live: '실시간', fearGreedTitle: '공포 & 탐욕 지수', fearGreedSub: '시장 심리 - Binance 제공', outOf100: '/ 100', extremeFear: '극도의 공포', fear: '공포', neutral: '중립', greed: '탐욕', extremeGreed: '극도의 탐욕', aiTitle: 'AI 분석', aiSub: 'AI 기반 예측', analyzing: '분석 중...', bullishSignals: '상승 신호', bearishSignals: '하락 신호', bollingerBands: '볼린저', searchCoin: '코인 검색...', sortBy: '정렬', network: '네트워크', show: '보기', loadMore: '더 보기', loadingData: '로딩 중...', filteredBy: '필터:', colName: '이름', colPrice: '가격', colMarketCap: '시가총액', colVolume: '거래량 24h', colExchanges: '거래소', prev: '이전', next: '다음', showing: '표시', of: '/', coins: '코인', availableOn: '거래 가능:', exchange: '거래소', referralNote: '🎁 추천 링크 포함', register: '가입', visit: '방문', trustHigh: '높은 신뢰도', trustMedium: '보통 신뢰도', trustLow: '낮은 신뢰도', volume: '거래량', allNetworks: '모든 네트워크', rank: '순위', marketCap: '시가총액', price: '가격', change24h: '24h 변동', noExchanges: '결과 없음', errorLoading: '로딩 오류', retry: '재시도', allLoaded: '모두 로드됨', loadMoreRemaining: '더 보기', oversold: '과매도', overbought: '과매수', bullish: '상승세', bearish: '하락세', nearBottom: '저점 근처', nearTop: '고점 근처', goldenCross: '골든크로스', deathCross: '데드크로스', strongBuy: '강력 매수', buy: '매수', sell: '매도', strongSell: '강력 매도', coinsFound: '개 발견', trendingTitle: '트렌드', trendingSub: '24h 거래량 상위 100', altcoinIndex: '알트코인 시즌 지수', altcoinSeason: '알트코인 시즌', btcDominance: 'BTC 지배력', ethDominance: 'ETH 지배력', totalMarketCap: '총 시가총액', totalVolume24: '총 거래량 24h', fgHistory: '기록', now: '현재', yesterday: '어제', lastWeek: '지난주', lastMonth: '지난달', entryExitTitle: '진입 & 청산 시그널 - Bitcoin', entryZone: '진입 구간', exitZone: '청산 구간', currentPrice: '현재 가격', entryNote: '지지선', exitNote: '저항선', volAnalysis: '거래량 분석', supportResistance: '지지/저항', aiRecommendation: '추천', strongTrend: '강한 추세', weakTrend: '약한 추세', highVol: '높은 거래량', lowVol: '낮은 거래량', aboveAvg: '평균 이상', belowAvg: '평균 이하', footerDesc: '5000개 이상의 암호화폐를 고급 AI 분석 도구와 실시간 가격으로 추적하는 종합 플랫폼.', quickLinks: '빠른 링크', home: '홈', topExchanges: '상위 거래소', disclaimer: '면책 조항', disclaimerText: '이 사이트의 정보는 교육 및 정보 제공 목적이며 재무 조언이 아닙니다. 암호화폐 거래에는 매우 높은 위험이 수반됩니다.', allRights: 'All Rights Reserved', btcSeason: '비트코인 시즌', holdEntry: '더 나은 진입 대기', goodEntry: '좋은 진입 기회', riskHigh: '높은 위험', support: '고객지원', yourName: '이름', yourEmail: '이메일', yourMessage: '메시지...', sendMessage: '보내기', messageSent: '메시지 전송 완료!', languages: '언어', secure: '보안', loading: '로딩 중...', tabCrypto: '암호화폐', tabExchanges: '모든 거래소', tabCommodities: 'NFT Collections', allExchangesTitle: '글로벌 모든 거래소', allExchangesSub: '500개 인가 거래소 • 신뢰도순 • 직접 거래 링크', searchExchange: '거래소 검색...', metalExTitle: '인기 NFT 컬렉션', metalExSub: '귀금속 거래 지원 거래소, 거래 쌍 및 실시간 거래량', stocksTitle: '주요 주식 & ETF', stocksSub: '토큰화 주식 & 귀금속 ETF • Yahoo Finance 실시간 데이터', colExchange2: '거래소', colPairs: '거래 쌍', colRefPrice: '참고가', colVol24h: '거래량 24h', colTrade: '거래', colStock: '주식', stkAll: '전체', stkStock: '주식', stkEtf: 'ETF', stkCommodity: '원자재', stkIndex: '지수', stkResults: '결과', stkSearchPlh: '주식 검색...', stkPage: '페이지', stkOf: '중' },
      hi: { trustScore: 'विश्वास', siteTitle: 'CryptoHub', exchanges: 'एक्सचेंज', recommendedExchanges: 'अनुशंसित एक्सचेंज', live: 'लाइव', fearGreedTitle: 'फियर एंड ग्रीड इंडेक्स', fearGreedSub: 'मार्केट सेंटिमेंट - Binance द्वारा', outOf100: '/ 100', extremeFear: 'अत्यधिक भय', fear: 'भय', neutral: 'तटस्थ', greed: 'लालच', extremeGreed: 'अत्यधिक लालच', aiTitle: 'AI विश्लेषण', aiSub: 'AI-संचालित भविष्यवाणियाँ', analyzing: 'विश्लेषण हो रहा है...', bullishSignals: 'तेजी के संकेत', bearishSignals: 'मंदी के संकेत', bollingerBands: 'बोलिंजर', searchCoin: 'कॉइन खोजें...', sortBy: 'क्रमबद्ध करें', network: 'नेटवर्क', show: 'दिखाएँ', loadMore: 'और लोड करें', loadingData: 'लोड हो रहा है...', filteredBy: 'फ़िल्टर:', colName: 'नाम', colPrice: 'मूल्य', colMarketCap: 'मार्केट कैप', colVolume: 'वॉल्यूम 24h', colExchanges: 'एक्सचेंज', prev: 'पिछला', next: 'अगला', showing: 'दिखाया गया', of: 'की', coins: 'कॉइन', availableOn: 'उपलब्ध:', exchange: 'एक्सचेंज', referralNote: '🎁 रेफरल लिंक शामिल', register: 'रजिस्टर', visit: 'जाएँ', trustHigh: 'उच्च विश्वास', trustMedium: 'मध्यम विश्वास', trustLow: 'कम विश्वास', volume: 'वॉल्यूम', allNetworks: 'सभी नेटवर्क', rank: 'रैंक', marketCap: 'मार्केट कैप', price: 'मूल्य', change24h: '24h बदलाव', noExchanges: 'कुछ नहीं मिला', errorLoading: 'लोडिंग त्रुटि', retry: 'पुनः प्रयास', allLoaded: 'सब लोड हो गया', loadMoreRemaining: 'और लोड करें', oversold: 'ओवरसोल्ड', overbought: 'ओवरबॉट', bullish: 'तेजी', bearish: 'मंदी', nearBottom: 'निचले स्तर के करीब', nearTop: 'ऊपरी स्तर के करीब', goldenCross: 'गोल्डन क्रॉस', deathCross: 'डेथ क्रॉस', strongBuy: 'मजबूत खरीद', buy: 'खरीद', sell: 'बिक्री', strongSell: 'मजबूत बिक्री', coinsFound: 'मिले', trendingTitle: 'ट्रेंडिंग', trendingSub: '24h वॉल्यूम के अनुसार शीर्ष 100', altcoinIndex: 'ऑल्टकॉइन सीज़न इंडेक्स', altcoinSeason: 'ऑल्टकॉइन सीज़न', btcDominance: 'BTC प्रभुत्व', ethDominance: 'ETH प्रभुत्व', totalMarketCap: 'कुल मार्केट कैप', totalVolume24: 'कुल वॉल्यूम 24h', fgHistory: 'इतिहास', now: 'अभी', yesterday: 'कल', lastWeek: 'पिछला सप्ताह', lastMonth: 'पिछला महीना', entryExitTitle: 'एंट्री और एग्जिट सिग्नल - Bitcoin', entryZone: 'एंट्री ज़ोन', exitZone: 'एग्जिट ज़ोन', currentPrice: 'वर्तमान मूल्य', entryNote: 'सपोर्ट स्तर पर', exitNote: 'रेजिस्टेंस स्तर पर', volAnalysis: 'वॉल्यूम विश्लेषण', supportResistance: 'सपोर्ट/रेजिस्टेंस', aiRecommendation: 'अनुशंसा', strongTrend: 'मजबूत ट्रेंड', weakTrend: 'कमज़ोर ट्रेंड', highVol: 'उच्च वॉल्यूम', lowVol: 'कम वॉल्यूम', aboveAvg: 'औसत से ऊपर', belowAvg: 'औसत से नीचे', footerDesc: '5000+ क्रिप्टोकरेंसी को उन्नत AI विश्लेषण और रीयल-टाइम कीमतों के साथ ट्रैक करने का आपका संपूर्ण प्लेटफ़ॉर्म।', quickLinks: 'त्वरित लिंक', home: 'होम', topExchanges: 'शीर्ष एक्सचेंज', disclaimer: 'अस्वीकरण', disclaimerText: 'इस साइट पर दी गई जानकारी केवल शैक्षिक उद्देश्यों के लिए है और वित्तीय सलाह नहीं है। क्रिप्टोकरेंसी ट्रेडिंग में बहुत अधिक जोखिम शामिल है।', allRights: 'सर्वाधिकार सुरक्षित', btcSeason: 'बिटकॉइन सीज़न', holdEntry: 'बेहतर एंट्री का इंतज़ार करें', goodEntry: 'अच्छा एंट्री अवसर', riskHigh: 'उच्च जोखिम', support: 'सहायता', yourName: 'आपका नाम', yourEmail: 'आपका ईमेल', yourMessage: 'आपका संदेश...', sendMessage: 'भेजें', messageSent: 'संदेश सफलतापूर्वक भेजा गया!', languages: 'भाषाएँ', secure: 'सुरक्षित', loading: 'लोड हो रहा है...', tabCrypto: 'क्रिप्टोकरेंसी', tabExchanges: 'सभी एक्सचेंज', tabCommodities: 'NFT Collections', allExchangesTitle: 'सभी वैश्विक एक्सचेंज', allExchangesSub: '500 लाइसेंस प्राप्त एक्सचेंज • विश्वसनीयता के अनुसार • सीधे ट्रेडिंग लिंक', searchExchange: 'एक्सचेंज खोजें...', metalExTitle: 'लोकप्रिय NFT संग्रह', metalExSub: 'कीमती धातु ट्रेडिंग का समर्थन करने वाले सभी एक्सचेंज', stocksTitle: 'प्रमुख स्टॉक और ETF', stocksSub: 'टोकनाइज़्ड स्टॉक और कीमती धातु ETF • Yahoo Finance रीयल-टाइम डेटा', colExchange2: 'एक्सचेंज', colPairs: 'ट्रेडिंग जोड़ी', colRefPrice: 'संदर्भ मूल्य', colVol24h: 'वॉल्यूम 24h', colTrade: 'ट्रेड', colStock: 'स्टॉक', stkAll: 'सभी', stkStock: 'शेयर', stkEtf: 'ETF', stkCommodity: 'जिंस', stkIndex: 'सूचकांक', stkResults: 'परिणाम', stkSearchPlh: 'शेयर खोजें...', stkPage: 'पृष्ठ', stkOf: 'का' },
      nl: { trustScore: 'Vertrouwen', siteTitle: 'CryptoHub', exchanges: 'Beurzen', recommendedExchanges: 'Aanbevolen Beurzen', live: 'Live', fearGreedTitle: 'Angst & Hebzucht Index', fearGreedSub: 'Marktsentiment - Powered by Binance', outOf100: 'van 100', extremeFear: 'Extreme Angst', fear: 'Angst', neutral: 'Neutraal', greed: 'Hebzucht', extremeGreed: 'Extreme Hebzucht', aiTitle: 'AI-Analyse', aiSub: 'AI-gestuurde voorspellingen', analyzing: 'Analyseren...', bullishSignals: 'Bullish Signalen', bearishSignals: 'Bearish Signalen', bollingerBands: 'Bollinger', searchCoin: 'Zoek coin...', sortBy: 'Sorteer op', network: 'Netwerk', show: 'Toon', loadMore: 'Meer Laden', loadingData: 'Laden...', filteredBy: 'Filter:', colName: 'Naam', colPrice: 'Prijs', colMarketCap: 'Marktkapitalisatie', colVolume: 'Volume 24u', colExchanges: 'Beurzen', prev: 'Vorige', next: 'Volgende', showing: 'Weergave', of: 'van', coins: 'coins', availableOn: 'Beschikbaar op', exchange: 'beurzen', referralNote: '🎁 Verwijzingslinks inbegrepen', register: 'Registreren', visit: 'Bezoek', trustHigh: 'Hoge Betrouwbaarheid', trustMedium: 'Gemiddelde Betrouwbaarheid', trustLow: 'Lage Betrouwbaarheid', volume: 'Volume', allNetworks: 'Alle Netwerken', rank: 'Rang', marketCap: 'Marktkapitalisatie', price: 'Prijs', change24h: '24u Wijziging', noExchanges: 'Niet gevonden', errorLoading: 'Laadfout', retry: 'Opnieuw', allLoaded: 'Alles Geladen', loadMoreRemaining: 'Meer Laden', oversold: 'Oververkocht', overbought: 'Overkocht', bullish: 'Bullish', bearish: 'Bearish', nearBottom: 'Nabij Bodem', nearTop: 'Nabij Top', goldenCross: 'Gouden Kruis', deathCross: 'Doodskruis', strongBuy: 'Sterk Kopen', buy: 'Kopen', sell: 'Verkopen', strongSell: 'Sterk Verkopen', coinsFound: 'gevonden', trendingTitle: 'Trending', trendingSub: 'Top 100 coins op 24u volume', altcoinIndex: 'Altcoin Seizoen Index', altcoinSeason: 'Altcoin Seizoen', btcDominance: 'BTC Dominantie', ethDominance: 'ETH Dominantie', totalMarketCap: 'Totale Marktkapitalisatie', totalVolume24: 'Totaal Volume 24u', fgHistory: 'Geschiedenis', now: 'Nu', yesterday: 'Gisteren', lastWeek: 'Vorige Week', lastMonth: 'Vorige Maand', entryExitTitle: 'Entry & Exit Signalen - Bitcoin', entryZone: 'Entry Zone', exitZone: 'Exit Zone', currentPrice: 'Huidige Prijs', entryNote: 'Op steunniveau', exitNote: 'Op weerstandsniveau', volAnalysis: 'Volume Analyse', supportResistance: 'Steun/Weerstand', aiRecommendation: 'Aanbeveling', strongTrend: 'Sterke Trend', weakTrend: 'Zwakke Trend', highVol: 'Hoog Volume', lowVol: 'Laag Volume', aboveAvg: 'Boven Gemiddeld', belowAvg: 'Onder Gemiddeld', footerDesc: 'Uw uitgebreide platform voor het volgen van 5000+ cryptovaluta met geavanceerde AI-analysetools en realtime prijzen.', quickLinks: 'Snelle Links', home: 'Home', topExchanges: 'Top Beurzen', disclaimer: 'Disclaimer', disclaimerText: 'De informatie op deze site is alleen voor educatieve doeleinden en vormt geen financieel advies. Cryptohandel brengt zeer hoge risico\'s met zich mee.', allRights: 'Alle Rechten Voorbehouden', btcSeason: 'Bitcoin Seizoen', holdEntry: 'Wacht op betere entry', goodEntry: 'Goede instapkans', riskHigh: 'Hoog Risico', support: 'Ondersteuning', yourName: 'Uw Naam', yourEmail: 'Uw E-mail', yourMessage: 'Uw Bericht...', sendMessage: 'Verzenden', messageSent: 'Bericht succesvol verzonden!', languages: 'Talen', secure: 'Veilig', loading: 'Laden...', tabCrypto: 'Cryptovaluta', tabExchanges: 'Alle Beurzen', tabCommodities: 'NFT Collections', allExchangesTitle: 'Alle Wereldwijde Beurzen', allExchangesSub: '500 gelicentieerde beurzen • Op betrouwbaarheid • Directe handelslinks', searchExchange: 'Zoek beurs...', metalExTitle: 'Populaire NFT Collecties', metalExSub: 'Alle beurzen met edelmetaalhandel, paren en realtime volume', stocksTitle: 'Belangrijke Aandelen & ETF\'s', stocksSub: 'Getokeniseerde aandelen & edelmetaal ETF\'s • Realtime data van Binance', colExchange2: 'Beurs', colPairs: 'Handelsparen', colRefPrice: 'Ref. Prijs', colVol24h: 'Volume 24u', colTrade: 'Handelen', colStock: 'Aandeel', stkAll: 'Alles', stkStock: 'Aandelen', stkEtf: 'ETF', stkCommodity: 'Grondstoffen', stkIndex: 'Indices', stkResults: 'resultaten', stkSearchPlh: 'Zoek aandelen...', stkPage: 'Pag', stkOf: 'van' },
      pl: { trustScore: 'Zaufanie', siteTitle: 'CryptoHub', exchanges: 'Giełdy', recommendedExchanges: 'Polecane Giełdy', live: 'Na Żywo', fearGreedTitle: 'Indeks Strachu i Chciwości', fearGreedSub: 'Nastroje Rynku - Powered by Binance', outOf100: 'ze 100', extremeFear: 'Ekstremalny Strach', fear: 'Strach', neutral: 'Neutralny', greed: 'Chciwość', extremeGreed: 'Ekstremalna Chciwość', aiTitle: 'Analiza AI', aiSub: 'Prognozy oparte na AI', analyzing: 'Analizowanie...', bullishSignals: 'Sygnały Wzrostowe', bearishSignals: 'Sygnały Spadkowe', bollingerBands: 'Bollinger', searchCoin: 'Szukaj kryptowaluty...', sortBy: 'Sortuj wg', network: 'Sieć', show: 'Pokaż', loadMore: 'Załaduj Więcej', loadingData: 'Ładowanie...', filteredBy: 'Filtr:', colName: 'Nazwa', colPrice: 'Cena', colMarketCap: 'Kap. Rynkowa', colVolume: 'Wolumen 24h', colExchanges: 'Giełdy', prev: 'Poprzednia', next: 'Następna', showing: 'Wyświetlanie', of: 'z', coins: 'kryptowalut', availableOn: 'Dostępne na', exchange: 'giełdach', referralNote: '🎁 Linki polecające dołączone', register: 'Rejestracja', visit: 'Odwiedź', trustHigh: 'Wysokie Zaufanie', trustMedium: 'Średnie Zaufanie', trustLow: 'Niskie Zaufanie', volume: 'Wolumen', allNetworks: 'Wszystkie Sieci', rank: 'Pozycja', marketCap: 'Kap. Rynkowa', price: 'Cena', change24h: 'Zmiana 24h', noExchanges: 'Nie znaleziono', errorLoading: 'Błąd ładowania', retry: 'Ponów', allLoaded: 'Wszystko Załadowane', loadMoreRemaining: 'Załaduj Więcej', oversold: 'Wyprzedany', overbought: 'Przekupiony', bullish: 'Wzrostowy', bearish: 'Spadkowy', nearBottom: 'Blisko Dna', nearTop: 'Blisko Szczytu', goldenCross: 'Złoty Krzyż', deathCross: 'Krzyż Śmierci', strongBuy: 'Silny Kupno', buy: 'Kup', sell: 'Sprzedaj', strongSell: 'Silna Sprzedaż', coinsFound: 'znalezionych', trendingTitle: 'Popularne', trendingSub: '100 kryptowalut wg wolumenu 24h', altcoinIndex: 'Indeks Sezonu Altcoinów', altcoinSeason: 'Sezon Altcoinów', btcDominance: 'Dominacja BTC', ethDominance: 'Dominacja ETH', totalMarketCap: 'Całkowita Kap.', totalVolume24: 'Całkowity Wolumen 24h', fgHistory: 'Historia', now: 'Teraz', yesterday: 'Wczoraj', lastWeek: 'Ostatni Tydzień', lastMonth: 'Ostatni Miesiąc', entryExitTitle: 'Sygnały Wejścia i Wyjścia - Bitcoin', entryZone: 'Strefa Wejścia', exitZone: 'Strefa Wyjścia', currentPrice: 'Aktualna Cena', entryNote: 'Na poziomie wsparcia', exitNote: 'Na poziomie oporu', volAnalysis: 'Analiza Wolumenu', supportResistance: 'Wsparcie/Opór', aiRecommendation: 'Rekomendacja', strongTrend: 'Silny Trend', weakTrend: 'Słaby Trend', highVol: 'Wysoki Wolumen', lowVol: 'Niski Wolumen', aboveAvg: 'Powyżej Średniej', belowAvg: 'Poniżej Średniej', footerDesc: 'Twoja kompleksowa platforma do śledzenia ponad 5000 kryptowalut z zaawansowanymi narzędziami analizy AI i cenami w czasie rzeczywistym.', quickLinks: 'Szybkie Linki', home: 'Strona Główna', topExchanges: 'Najlepsze Giełdy', disclaimer: 'Zastrzeżenie', disclaimerText: 'Informacje na tej stronie służą wyłącznie celom edukacyjnym i nie stanowią porady finansowej. Handel kryptowalutami wiąże się z bardzo wysokim ryzykiem.', allRights: 'Wszelkie Prawa Zastrzeżone', btcSeason: 'Sezon Bitcoin', holdEntry: 'Czekaj na lepsze wejście', goodEntry: 'Dobra okazja wejścia', riskHigh: 'Wysokie Ryzyko', support: 'Wsparcie', yourName: 'Twoje Imię', yourEmail: 'Twój Email', yourMessage: 'Twoja Wiadomość...', sendMessage: 'Wyślij', messageSent: 'Wiadomość wysłana pomyślnie!', languages: 'Języki', secure: 'Bezpieczny', loading: 'Ładowanie...', tabCrypto: 'Kryptowaluty', tabExchanges: 'Wszystkie Giełdy', tabCommodities: 'NFT Collections', allExchangesTitle: 'Wszystkie Giełdy Globalne', allExchangesSub: '500 licencjonowane giełdy • Wg zaufania • Bezpośrednie linki handlowe', searchExchange: 'Szukaj giełdy...', metalExTitle: 'Popularne Kolekcje NFT', metalExSub: 'Wszystkie giełdy z metalami szlachetnymi i wolumenem w czasie rzeczywistym', stocksTitle: 'Główne Akcje i ETF', stocksSub: 'Tokenizowane akcje i ETF metali szlachetnych • Dane w czasie rzeczywistym z Yahoo Finance', colExchange2: 'Giełda', colPairs: 'Pary Handlowe', colRefPrice: 'Cena Ref.', colVol24h: 'Wolumen 24h', colTrade: 'Handluj', colStock: 'Akcja', stkAll: 'Wszystko', stkStock: 'Akcje', stkEtf: 'ETF', stkCommodity: 'Surowce', stkIndex: 'Indeksy', stkResults: 'wyników', stkSearchPlh: 'Szukaj akcji...', stkPage: 'Str', stkOf: 'z' },
      th: { trustScore: 'ความน่าเชื่อถือ', siteTitle: 'CryptoHub', exchanges: 'แพลตฟอร์ม', recommendedExchanges: 'แพลตฟอร์มแนะนำ', live: 'สด', fearGreedTitle: 'ดัชนีความกลัวและความโลภ', fearGreedSub: 'ความเชื่อมั่นตลาด - จาก Binance', outOf100: 'จาก 100', extremeFear: 'กลัวมาก', fear: 'กลัว', neutral: 'เป็นกลาง', greed: 'โลภ', extremeGreed: 'โลภมาก', aiTitle: 'วิเคราะห์ AI', aiSub: 'การคาดการณ์ด้วย AI', analyzing: 'กำลังวิเคราะห์...', bullishSignals: 'สัญญาณขาขึ้น', bearishSignals: 'สัญญาณขาลง', bollingerBands: 'โบลินเจอร์', searchCoin: 'ค้นหาเหรียญ...', sortBy: 'เรียงตาม', network: 'เครือข่าย', show: 'แสดง', loadMore: 'โหลดเพิ่ม', loadingData: 'กำลังโหลด...', filteredBy: 'ตัวกรอง:', colName: 'ชื่อ', colPrice: 'ราคา', colMarketCap: 'มูลค่าตลาด', colVolume: 'ปริมาณ 24ชม.', colExchanges: 'แพลตฟอร์ม', prev: 'ก่อนหน้า', next: 'ถัดไป', showing: 'แสดง', of: 'จาก', coins: 'เหรียญ', availableOn: 'มีใน', exchange: 'แพลตฟอร์ม', referralNote: '🎁 ลิงก์แนะนำ', register: 'สมัคร', visit: 'เยี่ยมชม', trustHigh: 'ความเชื่อถือสูง', trustMedium: 'ความเชื่อถือปานกลาง', trustLow: 'ความเชื่อถือต่ำ', volume: 'ปริมาณ', allNetworks: 'ทุกเครือข่าย', rank: 'อันดับ', marketCap: 'มูลค่าตลาด', price: 'ราคา', change24h: 'เปลี่ยน 24ชม.', noExchanges: 'ไม่พบ', errorLoading: 'โหลดผิดพลาด', retry: 'ลองใหม่', allLoaded: 'โหลดทั้งหมดแล้ว', loadMoreRemaining: 'โหลดเพิ่ม', oversold: 'ขายมากเกินไป', overbought: 'ซื้อมากเกินไป', bullish: 'ขาขึ้น', bearish: 'ขาลง', nearBottom: 'ใกล้จุดต่ำสุด', nearTop: 'ใกล้จุดสูงสุด', goldenCross: 'โกลเด้นครอส', deathCross: 'เดธครอส', strongBuy: 'ซื้อแรง', buy: 'ซื้อ', sell: 'ขาย', strongSell: 'ขายแรง', coinsFound: 'พบ', trendingTitle: 'มาแรง', trendingSub: '100 เหรียญยอดนิยมตามปริมาณ 24ชม.', altcoinIndex: 'ดัชนีฤดูกาล Altcoin', altcoinSeason: 'ฤดูกาล Altcoin', btcDominance: 'BTC ครอง', ethDominance: 'ETH ครอง', totalMarketCap: 'มูลค่ารวม', totalVolume24: 'ปริมาณรวม 24ชม.', fgHistory: 'ประวัติ', now: 'ตอนนี้', yesterday: 'เมื่อวาน', lastWeek: 'สัปดาห์ที่แล้ว', lastMonth: 'เดือนที่แล้ว', entryExitTitle: 'สัญญาณเข้า-ออก - Bitcoin', entryZone: 'โซนเข้า', exitZone: 'โซนออก', currentPrice: 'ราคาปัจจุบัน', entryNote: 'ที่แนวรับ', exitNote: 'ที่แนวต้าน', volAnalysis: 'วิเคราะห์ปริมาณ', supportResistance: 'แนวรับ/แนวต้าน', aiRecommendation: 'คำแนะนำ', strongTrend: 'เทรนด์แรง', weakTrend: 'เทรนด์อ่อน', highVol: 'ปริมาณสูง', lowVol: 'ปริมาณต่ำ', aboveAvg: 'เหนือค่าเฉลี่ย', belowAvg: 'ต่ำกว่าค่าเฉลี่ย', footerDesc: 'แพลตฟอร์มครบวงจรสำหรับติดตาม 5000+ คริปโตด้วย AI และราคาเรียลไทม์', quickLinks: 'ลิงก์ด่วน', home: 'หน้าหลัก', topExchanges: 'แพลตฟอร์มยอดนิยม', disclaimer: 'ข้อจำกัดความรับผิด', disclaimerText: 'ข้อมูลในเว็บไซต์นี้มีวัตถุประสงค์เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำทางการเงิน การซื้อขายคริปโตมีความเสี่ยงสูงมาก', allRights: 'สงวนลิขสิทธิ์', btcSeason: 'ฤดูกาล Bitcoin', holdEntry: 'รอจุดเข้าที่ดีกว่า', goodEntry: 'โอกาสเข้าที่ดี', riskHigh: 'ความเสี่ยงสูง', support: 'สนับสนุน', yourName: 'ชื่อของคุณ', yourEmail: 'อีเมลของคุณ', yourMessage: 'ข้อความของคุณ...', sendMessage: 'ส่ง', messageSent: 'ส่งข้อความสำเร็จ!', languages: 'ภาษา', secure: 'ปลอดภัย', loading: 'กำลังโหลด...', tabCrypto: 'คริปโตเคอเรนซี', tabExchanges: 'แพลตฟอร์มทั้งหมด', tabCommodities: 'NFT Collections', allExchangesTitle: 'แพลตฟอร์มทั่วโลก', allExchangesSub: '500 แพลตฟอร์มที่ได้รับอนุญาต • จัดอันดับตามความน่าเชื่อถือ', searchExchange: 'ค้นหาแพลตฟอร์ม...', metalExTitle: 'คอลเลกชัน NFT ยอดนิยม', metalExSub: 'แพลตฟอร์มทั้งหมดที่รองรับการซื้อขายโลหะมีค่า', stocksTitle: 'หุ้นหลักและ ETF', stocksSub: 'หุ้นโทเค็นและ ETF โลหะมีค่า • ข้อมูลเรียลไทม์จาก Yahoo Finance', colExchange2: 'แพลตฟอร์ม', colPairs: 'คู่เทรด', colRefPrice: 'ราคาอ้างอิง', colVol24h: 'ปริมาณ 24ชม.', colTrade: 'เทรด', colStock: 'หุ้น', stkAll: 'ทั้งหมด', stkStock: 'หุ้น', stkEtf: 'ETF', stkCommodity: 'สินค้า', stkIndex: 'ดัชนี', stkResults: 'ผล', stkSearchPlh: 'ค้นหาหุ้น...', stkPage: 'หน้า', stkOf: 'จาก' },
      vi: { trustScore: 'Độ tin cậy', siteTitle: 'CryptoHub', exchanges: 'Sàn Giao Dịch', recommendedExchanges: 'Sàn Giao Dịch Đề Xuất', live: 'Trực tiếp', fearGreedTitle: 'Chỉ Số Sợ Hãi & Tham Lam', fearGreedSub: 'Tâm Lý Thị Trường - Binance', outOf100: '/ 100', extremeFear: 'Sợ Hãi Cực Độ', fear: 'Sợ Hãi', neutral: 'Trung Lập', greed: 'Tham Lam', extremeGreed: 'Tham Lam Cực Độ', aiTitle: 'Phân Tích AI', aiSub: 'Dự đoán dựa trên AI', analyzing: 'Đang phân tích...', bullishSignals: 'Tín Hiệu Tăng', bearishSignals: 'Tín Hiệu Giảm', bollingerBands: 'Bollinger', searchCoin: 'Tìm coin...', sortBy: 'Sắp xếp', network: 'Mạng', show: 'Hiển thị', loadMore: 'Tải Thêm', loadingData: 'Đang tải...', filteredBy: 'Bộ lọc:', colName: 'Tên', colPrice: 'Giá', colMarketCap: 'Vốn Hóa', colVolume: 'Khối Lượng 24h', colExchanges: 'Sàn', prev: 'Trước', next: 'Sau', showing: 'Hiển thị', of: '/', coins: 'coin', availableOn: 'Có trên', exchange: 'sàn', referralNote: '🎁 Có link giới thiệu', register: 'Đăng Ký', visit: 'Truy Cập', trustHigh: 'Độ Tin Cậy Cao', trustMedium: 'Độ Tin Cậy Trung Bình', trustLow: 'Độ Tin Cậy Thấp', volume: 'Khối Lượng', allNetworks: 'Tất Cả Mạng', rank: 'Hạng', marketCap: 'Vốn Hóa', price: 'Giá', change24h: 'Thay Đổi 24h', noExchanges: 'Không tìm thấy', errorLoading: 'Lỗi tải', retry: 'Thử lại', allLoaded: 'Đã Tải Hết', loadMoreRemaining: 'Tải Thêm', oversold: 'Quá Bán', overbought: 'Quá Mua', bullish: 'Tăng Giá', bearish: 'Giảm Giá', nearBottom: 'Gần Đáy', nearTop: 'Gần Đỉnh', goldenCross: 'Golden Cross', deathCross: 'Death Cross', strongBuy: 'Mua Mạnh', buy: 'Mua', sell: 'Bán', strongSell: 'Bán Mạnh', coinsFound: 'tìm thấy', trendingTitle: 'Xu Hướng', trendingSub: 'Top 100 coin theo khối lượng 24h', altcoinIndex: 'Chỉ Số Mùa Altcoin', altcoinSeason: 'Mùa Altcoin', btcDominance: 'BTC Thống Trị', ethDominance: 'ETH Thống Trị', totalMarketCap: 'Tổng Vốn Hóa', totalVolume24: 'Tổng Khối Lượng 24h', fgHistory: 'Lịch Sử', now: 'Hiện tại', yesterday: 'Hôm qua', lastWeek: 'Tuần trước', lastMonth: 'Tháng trước', entryExitTitle: 'Tín Hiệu Vào/Ra - Bitcoin', entryZone: 'Vùng Vào', exitZone: 'Vùng Ra', currentPrice: 'Giá Hiện Tại', entryNote: 'Tại mức hỗ trợ', exitNote: 'Tại mức kháng cự', volAnalysis: 'Phân Tích Khối Lượng', supportResistance: 'Hỗ trợ/Kháng cự', aiRecommendation: 'Khuyến Nghị', strongTrend: 'Xu Hướng Mạnh', weakTrend: 'Xu Hướng Yếu', highVol: 'Khối Lượng Cao', lowVol: 'Khối Lượng Thấp', aboveAvg: 'Trên Trung Bình', belowAvg: 'Dưới Trung Bình', footerDesc: 'Nền tảng theo dõi 5000+ tiền điện tử với công cụ AI và giá thời gian thực.', quickLinks: 'Liên Kết Nhanh', home: 'Trang Chủ', topExchanges: 'Sàn Hàng Đầu', disclaimer: 'Tuyên Bố Miễn Trừ', disclaimerText: 'Thông tin trên trang web này chỉ mang tính giáo dục, không phải tư vấn tài chính. Giao dịch tiền điện tử có rủi ro rất cao.', allRights: 'Bản Quyền', btcSeason: 'Mùa Bitcoin', holdEntry: 'Chờ điểm vào tốt hơn', goodEntry: 'Cơ hội vào tốt', riskHigh: 'Rủi Ro Cao', support: 'Hỗ Trợ', yourName: 'Tên của bạn', yourEmail: 'Email của bạn', yourMessage: 'Tin nhắn...', sendMessage: 'Gửi', messageSent: 'Gửi thành công!', languages: 'Ngôn Ngữ', secure: 'An Toàn', loading: 'Đang tải...', tabCrypto: 'Tiền Điện Tử', tabExchanges: 'Tất Cả Sàn', tabCommodities: 'NFT Collections', allExchangesTitle: 'Tất Cả Sàn Giao Dịch Toàn Cầu', allExchangesSub: '500 sàn được cấp phép • Xếp hạng theo độ tin cậy • Link giao dịch trực tiếp', searchExchange: 'Tìm sàn...', metalExTitle: 'Bộ Sưu Tập NFT Phổ Biến', metalExSub: 'Tất cả sàn hỗ trợ giao dịch kim loại quý', stocksTitle: 'Cổ Phiếu & ETF Chính', stocksSub: 'Cổ phiếu token hóa & ETF kim loại quý • Dữ liệu từ Yahoo Finance', colExchange2: 'Sàn', colPairs: 'Cặp Giao Dịch', colRefPrice: 'Giá Tham Chiếu', colVol24h: 'Khối Lượng 24h', colTrade: 'Giao Dịch', colStock: 'Cổ Phiếu', stkAll: 'Tất cả', stkStock: 'Cổ phiếu', stkEtf: 'ETF', stkCommodity: 'Hàng hóa', stkIndex: 'Chỉ số', stkResults: 'kết quả', stkSearchPlh: 'Tìm cổ phiếu...', stkPage: 'Trang', stkOf: 'của' },
      id: { trustScore: 'Kepercayaan', siteTitle: 'CryptoHub', exchanges: 'Bursa', recommendedExchanges: 'Bursa Rekomendasi', live: 'Langsung', fearGreedTitle: 'Indeks Ketakutan & Keserakahan', fearGreedSub: 'Sentimen Pasar - dari Binance', outOf100: 'dari 100', extremeFear: 'Ketakutan Ekstrem', fear: 'Takut', neutral: 'Netral', greed: 'Serakah', extremeGreed: 'Keserakahan Ekstrem', aiTitle: 'Analisis AI', aiSub: 'Prediksi berbasis AI', analyzing: 'Menganalisis...', bullishSignals: 'Sinyal Naik', bearishSignals: 'Sinyal Turun', bollingerBands: 'Bollinger', searchCoin: 'Cari koin...', sortBy: 'Urutkan', network: 'Jaringan', show: 'Tampilkan', loadMore: 'Muat Lebih', loadingData: 'Memuat...', filteredBy: 'Filter:', colName: 'Nama', colPrice: 'Harga', colMarketCap: 'Kap. Pasar', colVolume: 'Volume 24j', colExchanges: 'Bursa', prev: 'Sebelumnya', next: 'Berikutnya', showing: 'Menampilkan', of: 'dari', coins: 'koin', availableOn: 'Tersedia di', exchange: 'bursa', referralNote: '🎁 Tautan referral', register: 'Daftar', visit: 'Kunjungi', trustHigh: 'Kepercayaan Tinggi', trustMedium: 'Kepercayaan Sedang', trustLow: 'Kepercayaan Rendah', volume: 'Volume', allNetworks: 'Semua Jaringan', rank: 'Peringkat', marketCap: 'Kap. Pasar', price: 'Harga', change24h: 'Perubahan 24j', noExchanges: 'Tidak ditemukan', errorLoading: 'Error memuat', retry: 'Coba lagi', allLoaded: 'Semua Dimuat', loadMoreRemaining: 'Muat Lebih', oversold: 'Oversold', overbought: 'Overbought', bullish: 'Bullish', bearish: 'Bearish', nearBottom: 'Dekat Dasar', nearTop: 'Dekat Puncak', goldenCross: 'Golden Cross', deathCross: 'Death Cross', strongBuy: 'Beli Kuat', buy: 'Beli', sell: 'Jual', strongSell: 'Jual Kuat', coinsFound: 'ditemukan', trendingTitle: 'Trending', trendingSub: 'Top 100 koin berdasarkan volume 24j', altcoinIndex: 'Indeks Musim Altcoin', altcoinSeason: 'Musim Altcoin', btcDominance: 'Dominasi BTC', ethDominance: 'Dominasi ETH', totalMarketCap: 'Total Kap. Pasar', totalVolume24: 'Total Volume 24j', fgHistory: 'Riwayat', now: 'Sekarang', yesterday: 'Kemarin', lastWeek: 'Minggu Lalu', lastMonth: 'Bulan Lalu', entryExitTitle: 'Sinyal Masuk & Keluar - Bitcoin', entryZone: 'Zona Masuk', exitZone: 'Zona Keluar', currentPrice: 'Harga Saat Ini', entryNote: 'Di level support', exitNote: 'Di level resistance', volAnalysis: 'Analisis Volume', supportResistance: 'Support/Resistance', aiRecommendation: 'Rekomendasi', strongTrend: 'Tren Kuat', weakTrend: 'Tren Lemah', highVol: 'Volume Tinggi', lowVol: 'Volume Rendah', aboveAvg: 'Di Atas Rata-rata', belowAvg: 'Di Bawah Rata-rata', footerDesc: 'Platform lengkap untuk melacak 5000+ kripto dengan analisis AI canggih dan harga real-time.', quickLinks: 'Tautan Cepat', home: 'Beranda', topExchanges: 'Bursa Teratas', disclaimer: 'Penyangkalan', disclaimerText: 'Informasi di situs ini hanya untuk tujuan edukasi dan bukan nasihat keuangan. Perdagangan kripto memiliki risiko sangat tinggi.', allRights: 'Hak Cipta Dilindungi', btcSeason: 'Musim Bitcoin', holdEntry: 'Tunggu entri lebih baik', goodEntry: 'Peluang entri bagus', riskHigh: 'Risiko Tinggi', support: 'Dukungan', yourName: 'Nama Anda', yourEmail: 'Email Anda', yourMessage: 'Pesan Anda...', sendMessage: 'Kirim', messageSent: 'Pesan berhasil dikirim!', languages: 'Bahasa', secure: 'Aman', loading: 'Memuat...', tabCrypto: 'Mata Uang Kripto', tabExchanges: 'Semua Bursa', tabCommodities: 'NFT Collections', allExchangesTitle: 'Semua Bursa Global', allExchangesSub: '500 bursa berlisensi • Berdasarkan kepercayaan • Tautan trading langsung', searchExchange: 'Cari bursa...', metalExTitle: 'Koleksi NFT Populer', metalExSub: 'Semua bursa yang mendukung perdagangan logam mulia', stocksTitle: 'Saham Utama & ETF', stocksSub: 'Saham token & ETF logam mulia • Data real-time dari Yahoo Finance', colExchange2: 'Bursa', colPairs: 'Pasangan Trading', colRefPrice: 'Harga Ref.', colVol24h: 'Volume 24j', colTrade: 'Trading', colStock: 'Saham', stkAll: 'Semua', stkStock: 'Saham', stkEtf: 'ETF', stkCommodity: 'Komoditas', stkIndex: 'Indeks', stkResults: 'hasil', stkSearchPlh: 'Cari saham...', stkPage: 'Hal', stkOf: 'dari' },
      uk: { trustScore: 'Довіра', siteTitle: 'CryptoHub', exchanges: 'Біржі', recommendedExchanges: 'Рекомендовані Біржі', live: 'Наживо', fearGreedTitle: 'Індекс Страху та Жадібності', fearGreedSub: 'Настрій ринку - від Binance', outOf100: 'зі 100', extremeFear: 'Крайній Страх', fear: 'Страх', neutral: 'Нейтрально', greed: 'Жадібність', extremeGreed: 'Крайня Жадібність', aiTitle: 'ШІ-Аналіз', aiSub: 'Прогнози на основі ШІ', analyzing: 'Аналіз...', bullishSignals: 'Бичачі Сигнали', bearishSignals: 'Ведмежі Сигнали', bollingerBands: 'Боллінджер', searchCoin: 'Пошук монети...', sortBy: 'Сортування', network: 'Мережа', show: 'Показати', loadMore: 'Завантажити ще', loadingData: 'Завантаження...', filteredBy: 'Фільтр:', colName: 'Назва', colPrice: 'Ціна', colMarketCap: 'Капіталізація', colVolume: 'Обсяг 24г', colExchanges: 'Біржі', prev: 'Назад', next: 'Далі', showing: 'Показано', of: 'з', coins: 'монет', availableOn: 'Доступно на', exchange: 'біржах', referralNote: '🎁 Реферальні посилання', register: 'Реєстрація', visit: 'Перейти', trustHigh: 'Висока Довіра', trustMedium: 'Середня Довіра', trustLow: 'Низька Довіра', volume: 'Обсяг', allNetworks: 'Усі Мережі', rank: 'Ранг', marketCap: 'Капіталізація', price: 'Ціна', change24h: 'Зміна 24г', noExchanges: 'Не знайдено', errorLoading: 'Помилка завантаження', retry: 'Повторити', allLoaded: 'Усе Завантажено', loadMoreRemaining: 'Завантажити ще', oversold: 'Перепроданість', overbought: 'Перекупленість', bullish: 'Бичачий', bearish: 'Ведмежий', nearBottom: 'Біля Дна', nearTop: 'Біля Вершини', goldenCross: 'Золотий Хрест', deathCross: 'Хрест Смерті', strongBuy: 'Сильна Купівля', buy: 'Купити', sell: 'Продати', strongSell: 'Сильний Продаж', coinsFound: 'знайдено', trendingTitle: 'У тренді', trendingSub: 'Топ 100 монет за обсягом 24г', altcoinIndex: 'Індекс Сезону Альткоїнів', altcoinSeason: 'Сезон Альткоїнів', btcDominance: 'Домінація BTC', ethDominance: 'Домінація ETH', totalMarketCap: 'Загальна Капіталізація', totalVolume24: 'Загальний Обсяг 24г', fgHistory: 'Історія', now: 'Зараз', yesterday: 'Вчора', lastWeek: 'Минулий Тиждень', lastMonth: 'Минулий Місяць', entryExitTitle: 'Сигнали Входу та Виходу - Bitcoin', entryZone: 'Зона Входу', exitZone: 'Зона Виходу', currentPrice: 'Поточна Ціна', entryNote: 'На рівні підтримки', exitNote: 'На рівні опору', volAnalysis: 'Аналіз Обсягу', supportResistance: 'Підтримка/Опір', aiRecommendation: 'Рекомендація', strongTrend: 'Сильний Тренд', weakTrend: 'Слабкий Тренд', highVol: 'Високий Обсяг', lowVol: 'Низький Обсяг', aboveAvg: 'Вище Середнього', belowAvg: 'Нижче Середнього', footerDesc: 'Ваша комплексна платформа для відстеження 5000+ криптовалют з інструментами ШІ-аналізу та цінами в реальному часі.', quickLinks: 'Швидкі Посилання', home: 'Головна', topExchanges: 'Найкращі Біржі', disclaimer: 'Відмова від відповідальності', disclaimerText: 'Інформація на цьому сайті надана лише в освітніх цілях і не є фінансовою порадою. Торгівля криптовалютами пов\'язана з дуже високим ризиком.', allRights: 'Усі Права Захищені', btcSeason: 'Сезон Bitcoin', holdEntry: 'Чекати кращого входу', goodEntry: 'Гарна можливість входу', riskHigh: 'Високий Ризик', support: 'Підтримка', yourName: 'Ваше Ім\'я', yourEmail: 'Ваш Email', yourMessage: 'Ваше Повідомлення...', sendMessage: 'Надіслати', messageSent: 'Повідомлення надіслано!', languages: 'Мови', secure: 'Безпечно', loading: 'Завантаження...', tabCrypto: 'Криптовалюти', tabExchanges: 'Усі Біржі', tabCommodities: 'NFT Collections', allExchangesTitle: 'Усі Світові Біржі', allExchangesSub: '500 ліцензовані біржі • За ступенем довіри • Прямі торгові посилання', searchExchange: 'Пошук біржі...', metalExTitle: 'Популярні NFT Колекції', metalExSub: 'Усі біржі з дорогоцінними металами та обсягами в реальному часі', stocksTitle: 'Основні Акції та ETF', stocksSub: 'Токенізовані акції та ETF металів • Дані від Yahoo Finance', colExchange2: 'Біржа', colPairs: 'Торгові Пари', colRefPrice: 'Реф. Ціна', colVol24h: 'Обсяг 24г', colTrade: 'Торгувати', colStock: 'Акція', stkAll: 'Все', stkStock: 'Акції', stkEtf: 'ETF', stkCommodity: 'Сировина', stkIndex: 'Індекси', stkResults: 'результатів', stkSearchPlh: 'Пошук акцій...', stkPage: 'Стор', stkOf: 'з' },
      fa: { trustScore: 'اعتماد', siteTitle: 'CryptoHub', exchanges: 'صرافی‌ها', recommendedExchanges: 'صرافی‌های پیشنهادی', live: 'زنده', fearGreedTitle: 'شاخص ترس و طمع', fearGreedSub: 'احساسات بازار - از Binance', outOf100: 'از 100', extremeFear: 'ترس شدید', fear: 'ترس', neutral: 'خنثی', greed: 'طمع', extremeGreed: 'طمع شدید', aiTitle: 'تحلیل هوش مصنوعی', aiSub: 'پیش‌بینی‌های مبتنی بر هوش مصنوعی', analyzing: 'در حال تحلیل...', bullishSignals: 'سیگنال‌های صعودی', bearishSignals: 'سیگنال‌های نزولی', bollingerBands: 'بولینجر', searchCoin: 'جستجوی ارز...', sortBy: 'مرتب‌سازی', network: 'شبکه', show: 'نمایش', loadMore: 'بارگذاری بیشتر', loadingData: 'در حال بارگذاری...', filteredBy: 'فیلتر:', colName: 'نام', colPrice: 'قیمت', colMarketCap: 'ارزش بازار', colVolume: 'حجم ۲۴ساعته', colExchanges: 'صرافی‌ها', prev: 'قبلی', next: 'بعدی', showing: 'نمایش', of: 'از', coins: 'ارز', availableOn: 'موجود در', exchange: 'صرافی', referralNote: '🎁 لینک‌های معرفی', register: 'ثبت‌نام', visit: 'بازدید', trustHigh: 'اعتماد بالا', trustMedium: 'اعتماد متوسط', trustLow: 'اعتماد پایین', volume: 'حجم', allNetworks: 'همه شبکه‌ها', rank: 'رتبه', marketCap: 'ارزش بازار', price: 'قیمت', change24h: 'تغییر ۲۴ساعته', noExchanges: 'یافت نشد', errorLoading: 'خطا در بارگذاری', retry: 'تلاش مجدد', allLoaded: 'همه بارگذاری شد', loadMoreRemaining: 'بارگذاری بیشتر', oversold: 'اشباع فروش', overbought: 'اشباع خرید', bullish: 'صعودی', bearish: 'نزولی', nearBottom: 'نزدیک کف', nearTop: 'نزدیک سقف', goldenCross: 'تقاطع طلایی', deathCross: 'تقاطع مرگ', strongBuy: 'خرید قوی', buy: 'خرید', sell: 'فروش', strongSell: 'فروش قوی', coinsFound: 'یافت شد', trendingTitle: 'محبوب‌ترین‌ها', trendingSub: '۱۰۰ ارز برتر بر اساس حجم ۲۴ساعته', altcoinIndex: 'شاخص فصل آلتکوین', altcoinSeason: 'فصل آلتکوین', btcDominance: 'تسلط BTC', ethDominance: 'تسلط ETH', totalMarketCap: 'ارزش کل بازار', totalVolume24: 'حجم کل ۲۴ساعته', fgHistory: 'تاریخچه', now: 'اکنون', yesterday: 'دیروز', lastWeek: 'هفته گذشته', lastMonth: 'ماه گذشته', entryExitTitle: 'سیگنال‌های ورود و خروج - Bitcoin', entryZone: 'منطقه ورود', exitZone: 'منطقه خروج', currentPrice: 'قیمت فعلی', entryNote: 'در سطح حمایت', exitNote: 'در سطح مقاومت', volAnalysis: 'تحلیل حجم', supportResistance: 'حمایت/مقاومت', aiRecommendation: 'توصیه', strongTrend: 'روند قوی', weakTrend: 'روند ضعیف', highVol: 'حجم بالا', lowVol: 'حجم پایین', aboveAvg: 'بالای میانگین', belowAvg: 'زیر میانگین', footerDesc: 'پلتفرم جامع شما برای پیگیری بیش از ۵۰۰۰ ارز دیجیتال با ابزارهای تحلیل هوش مصنوعی و قیمت‌های لحظه‌ای.', quickLinks: 'لینک‌های سریع', home: 'خانه', topExchanges: 'برترین صرافی‌ها', disclaimer: 'سلب مسئولیت', disclaimerText: 'اطلاعات ارائه شده فقط جنبه آموزشی دارد و مشاوره مالی نیست. معامله ارزهای دیجیتال ریسک بسیار بالایی دارد.', allRights: 'تمام حقوق محفوظ است', btcSeason: 'فصل بیت‌کوین', holdEntry: 'منتظر ورود بهتر باشید', goodEntry: 'فرصت ورود خوب', riskHigh: 'ریسک بالا', support: 'پشتیبانی', yourName: 'نام شما', yourEmail: 'ایمیل شما', yourMessage: 'پیام شما...', sendMessage: 'ارسال', messageSent: 'پیام با موفقیت ارسال شد!', languages: 'زبان‌ها', secure: 'امن', loading: 'در حال بارگذاری...', tabCrypto: 'ارزهای دیجیتال', tabExchanges: 'همه صرافی‌ها', tabCommodities: 'NFT Collections', allExchangesTitle: 'همه صرافی‌های جهانی', allExchangesSub: '۱۰۲ صرافی مجوزدار • بر اساس اعتماد • لینک‌های مستقیم', searchExchange: 'جستجوی صرافی...', metalExTitle: 'پلتفرم‌های فلزات گرانبها', metalExSub: 'همه صرافی‌هایی که معامله فلزات گرانبها را پشتیبانی می‌کنند', stocksTitle: 'سهام اصلی و ETF', stocksSub: 'سهام توکنیزه شده و ETF فلزات گرانبها • داده‌های لحظه‌ای از Yahoo Finance', colExchange2: 'صرافی', colPairs: 'جفت‌ارزها', colRefPrice: 'قیمت مرجع', colVol24h: 'حجم ۲۴ساعته', colTrade: 'معامله', colStock: 'سهام', stkAll: 'همه', stkStock: 'سهام', stkEtf: 'ETF', stkCommodity: 'کالاها', stkIndex: 'شاخص', stkResults: 'نتیجه', stkSearchPlh: 'جستجوی سهام...', stkPage: 'صفحه', stkOf: 'از' },
      he: { trustScore: 'אמון', siteTitle: 'CryptoHub', exchanges: 'בורסות', recommendedExchanges: 'בורסות מומלצות', live: 'שידור חי', fearGreedTitle: 'מדד פחד וחמדנות', fearGreedSub: 'סנטימנט שוק - Binance', outOf100: 'מתוך 100', extremeFear: 'פחד קיצוני', fear: 'פחד', neutral: 'ניטרלי', greed: 'חמדנות', extremeGreed: 'חמדנות קיצונית', aiTitle: 'ניתוח AI', aiSub: 'תחזיות מבוססות AI', analyzing: 'מנתח...', bullishSignals: 'אותות עלייה', bearishSignals: 'אותות ירידה', bollingerBands: 'בולינגר', searchCoin: 'חפש מטבע...', sortBy: 'מיין לפי', network: 'רשת', show: 'הצג', loadMore: 'טען עוד', loadingData: 'טוען...', filteredBy: 'סינון:', colName: 'שם', colPrice: 'מחיר', colMarketCap: 'שווי שוק', colVolume: 'נפח 24ש', colExchanges: 'בורסות', prev: 'הקודם', next: 'הבא', showing: 'מציג', of: 'מתוך', coins: 'מטבעות', availableOn: 'זמין ב', exchange: 'בורסות', referralNote: '🎁 קישורי הפניה', register: 'הרשמה', visit: 'בקר', trustHigh: 'אמינות גבוהה', trustMedium: 'אמינות בינונית', trustLow: 'אמינות נמוכה', volume: 'נפח', allNetworks: 'כל הרשתות', rank: 'דירוג', marketCap: 'שווי שוק', price: 'מחיר', change24h: 'שינוי 24ש', noExchanges: 'לא נמצא', errorLoading: 'שגיאת טעינה', retry: 'נסה שוב', allLoaded: 'הכל נטען', loadMoreRemaining: 'טען עוד', oversold: 'מכירת יתר', overbought: 'קניית יתר', bullish: 'עולה', bearish: 'יורד', nearBottom: 'קרוב לתחתית', nearTop: 'קרוב לפסגה', goldenCross: 'צלב זהב', deathCross: 'צלב מוות', strongBuy: 'קנייה חזקה', buy: 'קנה', sell: 'מכור', strongSell: 'מכירה חזקה', coinsFound: 'נמצאו', trendingTitle: 'טרנדים', trendingSub: '100 מטבעות מובילים לפי נפח 24ש', altcoinIndex: 'מדד עונת אלטקוין', altcoinSeason: 'עונת אלטקוין', btcDominance: 'דומיננטיות BTC', ethDominance: 'דומיננטיות ETH', totalMarketCap: 'שווי שוק כולל', totalVolume24: 'נפח כולל 24ש', fgHistory: 'היסטוריה', now: 'עכשיו', yesterday: 'אתמול', lastWeek: 'שבוע שעבר', lastMonth: 'חודש שעבר', entryExitTitle: 'אותות כניסה ויציאה - Bitcoin', entryZone: 'אזור כניסה', exitZone: 'אזור יציאה', currentPrice: 'מחיר נוכחי', entryNote: 'ברמת תמיכה', exitNote: 'ברמת התנגדות', volAnalysis: 'ניתוח נפח', supportResistance: 'תמיכה/התנגדות', aiRecommendation: 'המלצה', strongTrend: 'מגמה חזקה', weakTrend: 'מגמה חלשה', highVol: 'נפח גבוה', lowVol: 'נפח נמוך', aboveAvg: 'מעל הממוצע', belowAvg: 'מתחת לממוצע', footerDesc: 'הפלטפורמה המקיפה שלך למעקב אחר 5000+ מטבעות קריפטו עם כלי ניתוח AI ומחירים בזמן אמת.', quickLinks: 'קישורים מהירים', home: 'דף הבית', topExchanges: 'בורסות מובילות', disclaimer: 'כתב ויתור', disclaimerText: 'המידע באתר זה הוא למטרות חינוכיות בלבד ואינו ייעוץ פיננסי. מסחר בקריפטו כרוך בסיכון גבוה מאוד.', allRights: 'כל הזכויות שמורות', btcSeason: 'עונת ביטקוין', holdEntry: 'המתן לכניסה טובה יותר', goodEntry: 'הזדמנות כניסה טובה', riskHigh: 'סיכון גבוה', support: 'תמיכה', yourName: 'השם שלך', yourEmail: 'האימייל שלך', yourMessage: 'ההודעה שלך...', sendMessage: 'שלח', messageSent: 'ההודעה נשלחה בהצלחה!', languages: 'שפות', secure: 'מאובטח', loading: 'טוען...', tabCrypto: 'מטבעות קריפטו', tabExchanges: 'כל הבורסות', tabCommodities: 'NFT Collections', allExchangesTitle: 'כל הבורסות העולמיות', allExchangesSub: '500 בורסות מורשות • לפי דירוג אמינות • קישורי מסחר ישירים', searchExchange: 'חפש בורסה...', metalExTitle: 'אוספי NFT פופולריים', metalExSub: 'כל הבורסות התומכות במסחר מתכות יקרות', stocksTitle: 'מניות עיקריות ו-ETF', stocksSub: 'מניות מטוקנות ו-ETF מתכות יקרות • נתונים בזמן אמת מ-Yahoo Finance', colExchange2: 'בורסה', colPairs: 'זוגות מסחר', colRefPrice: 'מחיר ייחוס', colVol24h: 'נפח 24ש', colTrade: 'סחר', colStock: 'מניה' }
    };
    // Complete native translations for remaining languages
    // Defer rare language translations (cs, ro, el, sv, da, fi, ms, bn, sw)
    setTimeout(function () {
      T.cs = { trustScore: 'Důvěra', siteTitle: 'CryptoHub', exchanges: 'Burzy', recommendedExchanges: 'Doporučené Burzy', live: 'Živě', fearGreedTitle: 'Index Strachu a Chamtivosti', fearGreedSub: 'Sentiment Trhu - od Binance', outOf100: 'ze 100', extremeFear: 'Extrémní Strach', fear: 'Strach', neutral: 'Neutrální', greed: 'Chamtivost', extremeGreed: 'Extrémní Chamtivost', aiTitle: 'AI Analýza', aiSub: 'Předpovědi na bázi AI', analyzing: 'Analyzuji...', bullishSignals: 'Býčí Signály', bearishSignals: 'Medvědí Signály', bollingerBands: 'Bollinger', searchCoin: 'Hledat kryptoměnu...', sortBy: 'Řadit podle', network: 'Síť', show: 'Zobrazit', loadMore: 'Načíst Více', loadingData: 'Načítání...', filteredBy: 'Filtr:', colName: 'Název', colPrice: 'Cena', colMarketCap: 'Tržní Kap.', colVolume: 'Objem 24h', colExchanges: 'Burzy', prev: 'Předchozí', next: 'Další', showing: 'Zobrazeno', of: 'z', coins: 'kryptoměn', availableOn: 'Dostupné na', exchange: 'burzách', referralNote: '🎁 Doporučující odkazy', register: 'Registrace', visit: 'Navštívit', trustHigh: 'Vysoká Důvěra', trustMedium: 'Střední Důvěra', trustLow: 'Nízká Důvěra', volume: 'Objem', allNetworks: 'Všechny Sítě', rank: 'Pořadí', marketCap: 'Tržní Kap.', price: 'Cena', change24h: 'Změna 24h', noExchanges: 'Nenalezeno', errorLoading: 'Chyba načítání', retry: 'Opakovat', allLoaded: 'Vše Načteno', loadMoreRemaining: 'Načíst Více', oversold: 'Přeprodáno', overbought: 'Překoupeno', bullish: 'Býčí', bearish: 'Medvědí', nearBottom: 'Blízko Dna', nearTop: 'Blízko Vrcholu', goldenCross: 'Zlatý Kříž', deathCross: 'Kříž Smrti', strongBuy: 'Silný Nákup', buy: 'Koupit', sell: 'Prodat', strongSell: 'Silný Prodej', coinsFound: 'nalezeno', trendingTitle: 'Trendy', trendingSub: 'Top 100 kryptoměn dle objemu 24h', altcoinIndex: 'Index Sezóny Altcoinů', altcoinSeason: 'Sezóna Altcoinů', btcDominance: 'Dominance BTC', ethDominance: 'Dominance ETH', totalMarketCap: 'Celková Kap.', totalVolume24: 'Celkový Objem 24h', fgHistory: 'Historie', now: 'Nyní', yesterday: 'Včera', lastWeek: 'Minulý Týden', lastMonth: 'Minulý Měsíc', entryExitTitle: 'Signály Vstupu a Výstupu - Bitcoin', entryZone: 'Zóna Vstupu', exitZone: 'Zóna Výstupu', currentPrice: 'Aktuální Cena', entryNote: 'Na úrovni podpory', exitNote: 'Na úrovni odporu', volAnalysis: 'Analýza Objemu', supportResistance: 'Podpora/Odpor', aiRecommendation: 'Doporučení', strongTrend: 'Silný Trend', weakTrend: 'Slabý Trend', highVol: 'Vysoký Objem', lowVol: 'Nízký Objem', aboveAvg: 'Nad Průměrem', belowAvg: 'Pod Průměrem', footerDesc: 'Vaše komplexní platforma pro sledování 5000+ kryptoměn s pokročilými AI nástroji a cenami v reálném čase.', quickLinks: 'Rychlé Odkazy', home: 'Domů', topExchanges: 'Top Burzy', disclaimer: 'Vyloučení Odpovědnosti', disclaimerText: 'Informace na tomto webu jsou pouze pro vzdělávací účely a nepředstavují finanční poradenství. Obchodování s kryptoměnami je vysoce rizikové.', allRights: 'Všechna Práva Vyhrazena', btcSeason: 'Sezóna Bitcoin', holdEntry: 'Čekat na lepší vstup', goodEntry: 'Dobrá příležitost vstupu', riskHigh: 'Vysoké Riziko', support: 'Podpora', yourName: 'Vaše Jméno', yourEmail: 'Váš Email', yourMessage: 'Vaše Zpráva...', sendMessage: 'Odeslat', messageSent: 'Zpráva úspěšně odeslána!', languages: 'Jazyky', secure: 'Bezpečné', loading: 'Načítání...', tabCrypto: 'Kryptoměny', tabExchanges: 'Všechny Burzy', tabCommodities: 'NFT Collections', allExchangesTitle: 'Všechny Globální Burzy', allExchangesSub: '500 licencovaných burz • Dle důvěryhodnosti • Přímé obchodní odkazy', searchExchange: 'Hledat burzu...', metalExTitle: 'Populární NFT Kolekce', metalExSub: 'Všechny burzy podporující obchodování s drahými kovy', stocksTitle: 'Hlavní Akcie a ETF', stocksSub: 'Tokenizované akcie a ETF drahých kovů • Data z Yahoo Finance v reálném čase', colExchange2: 'Burza', colPairs: 'Obchodní Páry', colRefPrice: 'Ref. Cena', colVol24h: 'Objem 24h', colTrade: 'Obchodovat', colStock: 'Akcie' };
      T.ro = { trustScore: 'Încredere', siteTitle: 'CryptoHub', exchanges: 'Burse', recommendedExchanges: 'Burse Recomandate', live: 'Live', fearGreedTitle: 'Indicele Frică și Lăcomie', fearGreedSub: 'Sentimentul Pieței - de la Binance', outOf100: 'din 100', extremeFear: 'Frică Extremă', fear: 'Frică', neutral: 'Neutru', greed: 'Lăcomie', extremeGreed: 'Lăcomie Extremă', aiTitle: 'Analiză AI', aiSub: 'Predicții bazate pe AI', analyzing: 'Se analizează...', bullishSignals: 'Semnale de Creștere', bearishSignals: 'Semnale de Scădere', bollingerBands: 'Bollinger', searchCoin: 'Caută monedă...', sortBy: 'Sortează după', network: 'Rețea', show: 'Afișează', loadMore: 'Încarcă Mai Mult', loadingData: 'Se încarcă...', filteredBy: 'Filtru:', colName: 'Nume', colPrice: 'Preț', colMarketCap: 'Cap. Piață', colVolume: 'Volum 24h', colExchanges: 'Burse', prev: 'Anterior', next: 'Următor', showing: 'Afișare', of: 'din', coins: 'monede', availableOn: 'Disponibil pe', exchange: 'burse', referralNote: '🎁 Linkuri de recomandare', register: 'Înregistrare', visit: 'Vizitează', trustHigh: 'Încredere Ridicată', trustMedium: 'Încredere Medie', trustLow: 'Încredere Scăzută', volume: 'Volum', allNetworks: 'Toate Rețelele', rank: 'Rang', marketCap: 'Cap. Piață', price: 'Preț', change24h: 'Schimbare 24h', noExchanges: 'Nu s-a găsit', errorLoading: 'Eroare de încărcare', retry: 'Reîncearcă', allLoaded: 'Totul Încărcat', loadMoreRemaining: 'Încarcă Mai Mult', oversold: 'Supravândut', overbought: 'Supracumpărat', bullish: 'Bullish', bearish: 'Bearish', nearBottom: 'Aproape de Minim', nearTop: 'Aproape de Maxim', goldenCross: 'Crucea de Aur', deathCross: 'Crucea Morții', strongBuy: 'Cumpărare Puternică', buy: 'Cumpără', sell: 'Vinde', strongSell: 'Vânzare Puternică', coinsFound: 'găsite', trendingTitle: 'Trending', trendingSub: 'Top 100 monede după volum 24h', altcoinIndex: 'Indexul Sezonului Altcoin', altcoinSeason: 'Sezon Altcoin', btcDominance: 'Dominanță BTC', ethDominance: 'Dominanță ETH', totalMarketCap: 'Cap. Totală', totalVolume24: 'Volum Total 24h', fgHistory: 'Istoric', now: 'Acum', yesterday: 'Ieri', lastWeek: 'Săptămâna Trecută', lastMonth: 'Luna Trecută', entryExitTitle: 'Semnale de Intrare și Ieșire - Bitcoin', entryZone: 'Zona de Intrare', exitZone: 'Zona de Ieșire', currentPrice: 'Preț Curent', entryNote: 'La nivel de suport', exitNote: 'La nivel de rezistență', volAnalysis: 'Analiza Volumului', supportResistance: 'Suport/Rezistență', aiRecommendation: 'Recomandare', strongTrend: 'Trend Puternic', weakTrend: 'Trend Slab', highVol: 'Volum Ridicat', lowVol: 'Volum Scăzut', aboveAvg: 'Peste Medie', belowAvg: 'Sub Medie', footerDesc: 'Platforma ta completă pentru urmărirea a peste 5000 de criptomonede cu instrumente AI avansate și prețuri în timp real.', quickLinks: 'Linkuri Rapide', home: 'Acasă', topExchanges: 'Top Burse', disclaimer: 'Declinarea Responsabilității', disclaimerText: 'Informațiile de pe acest site sunt doar în scop educativ și nu constituie sfaturi financiare. Tranzacționarea cripto implică riscuri foarte mari.', allRights: 'Toate Drepturile Rezervate', btcSeason: 'Sezon Bitcoin', holdEntry: 'Așteaptă o intrare mai bună', goodEntry: 'Oportunitate bună de intrare', riskHigh: 'Risc Ridicat', support: 'Suport', yourName: 'Numele Tău', yourEmail: 'Emailul Tău', yourMessage: 'Mesajul Tău...', sendMessage: 'Trimite', messageSent: 'Mesaj trimis cu succes!', languages: 'Limbi', secure: 'Securizat', loading: 'Se încarcă...', tabCrypto: 'Criptomonede', tabExchanges: 'Toate Bursele', tabCommodities: 'NFT Collections', allExchangesTitle: 'Toate Bursele Globale', allExchangesSub: '500 burse licențiate • După încredere • Linkuri directe de tranzacționare', searchExchange: 'Caută bursă...', metalExTitle: 'Colecții NFT Populare', metalExSub: 'Toate bursele care suportă tranzacționarea metalelor prețioase', stocksTitle: 'Acțiuni Principale și ETF-uri', stocksSub: 'Acțiuni tokenizate și ETF-uri metale prețioase • Date în timp real', colExchange2: 'Bursă', colPairs: 'Perechi de Tranzacționare', colRefPrice: 'Preț Ref.', colVol24h: 'Volum 24h', colTrade: 'Tranzacționează', colStock: 'Acțiune' };
      T.el = { trustScore: 'Εμπιστοσύνη', siteTitle: 'CryptoHub', exchanges: 'Ανταλλακτήρια', recommendedExchanges: 'Προτεινόμενα Ανταλλακτήρια', live: 'Ζωντανά', fearGreedTitle: 'Δείκτης Φόβου & Απληστίας', fearGreedSub: 'Συναίσθημα Αγοράς - από Binance', outOf100: 'από 100', extremeFear: 'Ακραίος Φόβος', fear: 'Φόβος', neutral: 'Ουδέτερο', greed: 'Απληστία', extremeGreed: 'Ακραία Απληστία', aiTitle: 'Ανάλυση AI', aiSub: 'Προβλέψεις με AI', analyzing: 'Ανάλυση...', bullishSignals: 'Ανοδικά Σήματα', bearishSignals: 'Πτωτικά Σήματα', bollingerBands: 'Bollinger', searchCoin: 'Αναζήτηση κρυπτονομίσματος...', sortBy: 'Ταξινόμηση', network: 'Δίκτυο', show: 'Εμφάνιση', loadMore: 'Φόρτωση Περισσότερων', loadingData: 'Φόρτωση...', filteredBy: 'Φίλτρο:', colName: 'Όνομα', colPrice: 'Τιμή', colMarketCap: 'Κεφαλαιοποίηση', colVolume: 'Όγκος 24ω', colExchanges: 'Ανταλλακτήρια', prev: 'Προηγούμενο', next: 'Επόμενο', showing: 'Εμφάνιση', of: 'από', coins: 'κρυπτονομίσματα', availableOn: 'Διαθέσιμο σε', exchange: 'ανταλλακτήρια', referralNote: '🎁 Σύνδεσμοι παραπομπής', register: 'Εγγραφή', visit: 'Επίσκεψη', trustHigh: 'Υψηλή Εμπιστοσύνη', trustMedium: 'Μέτρια Εμπιστοσύνη', trustLow: 'Χαμηλή Εμπιστοσύνη', volume: 'Όγκος', allNetworks: 'Όλα τα Δίκτυα', rank: 'Κατάταξη', marketCap: 'Κεφαλαιοποίηση', price: 'Τιμή', change24h: 'Μεταβολή 24ω', noExchanges: 'Δεν βρέθηκε', errorLoading: 'Σφάλμα φόρτωσης', retry: 'Επανάληψη', allLoaded: 'Όλα Φορτώθηκαν', loadMoreRemaining: 'Φόρτωση Περισσότερων', oversold: 'Υπερπωλημένο', overbought: 'Υπεραγορασμένο', bullish: 'Ανοδικό', bearish: 'Πτωτικό', nearBottom: 'Κοντά στο Πάτο', nearTop: 'Κοντά στην Κορυφή', goldenCross: 'Χρυσός Σταυρός', deathCross: 'Σταυρός Θανάτου', strongBuy: 'Ισχυρή Αγορά', buy: 'Αγορά', sell: 'Πώληση', strongSell: 'Ισχυρή Πώληση', coinsFound: 'βρέθηκαν', trendingTitle: 'Τάσεις', trendingSub: 'Top 100 κρυπτονομίσματα κατά όγκο 24ω', altcoinIndex: 'Δείκτης Εποχής Altcoin', altcoinSeason: 'Εποχή Altcoin', btcDominance: 'Κυριαρχία BTC', ethDominance: 'Κυριαρχία ETH', totalMarketCap: 'Συνολική Κεφαλαιοποίηση', totalVolume24: 'Συνολικός Όγκος 24ω', fgHistory: 'Ιστορικό', now: 'Τώρα', yesterday: 'Χθες', lastWeek: 'Προηγούμενη Εβδομάδα', lastMonth: 'Προηγούμενος Μήνας', entryExitTitle: 'Σήματα Εισόδου & Εξόδου - Bitcoin', entryZone: 'Ζώνη Εισόδου', exitZone: 'Ζώνη Εξόδου', currentPrice: 'Τρέχουσα Τιμή', entryNote: 'Στο επίπεδο στήριξης', exitNote: 'Στο επίπεδο αντίστασης', volAnalysis: 'Ανάλυση Όγκου', supportResistance: 'Στήριξη/Αντίσταση', aiRecommendation: 'Σύσταση', strongTrend: 'Ισχυρή Τάση', weakTrend: 'Αδύναμη Τάση', highVol: 'Υψηλός Όγκος', lowVol: 'Χαμηλός Όγκος', aboveAvg: 'Πάνω από Μέσο Όρο', belowAvg: 'Κάτω από Μέσο Όρο', footerDesc: 'Η ολοκληρωμένη πλατφόρμα σας για παρακολούθηση 5000+ κρυπτονομισμάτων με εργαλεία AI και τιμές σε πραγματικό χρόνο.', quickLinks: 'Γρήγοροι Σύνδεσμοι', home: 'Αρχική', topExchanges: 'Κορυφαία Ανταλλακτήρια', disclaimer: 'Αποποίηση Ευθύνης', disclaimerText: 'Οι πληροφορίες σε αυτόν τον ιστότοπο είναι μόνο για εκπαιδευτικούς σκοπούς. Η διαπραγμάτευση κρυπτονομισμάτων ενέχει πολύ υψηλό κίνδυνο.', allRights: 'Με Επιφύλαξη Παντός Δικαιώματος', btcSeason: 'Εποχή Bitcoin', holdEntry: 'Αναμονή για καλύτερη είσοδο', goodEntry: 'Καλή ευκαιρία εισόδου', riskHigh: 'Υψηλό Ρίσκο', support: 'Υποστήριξη', yourName: 'Το Όνομά σας', yourEmail: 'Το Email σας', yourMessage: 'Το Μήνυμά σας...', sendMessage: 'Αποστολή', messageSent: 'Το μήνυμα στάλθηκε!', languages: 'Γλώσσες', secure: 'Ασφαλές', loading: 'Φόρτωση...', tabCrypto: 'Κρυπτονομίσματα', tabExchanges: 'Όλα τα Ανταλλακτήρια', tabCommodities: 'NFT Collections', allExchangesTitle: 'Όλα τα Παγκόσμια Ανταλλακτήρια', allExchangesSub: '500 αδειοδοτημένα ανταλλακτήρια • Κατά αξιοπιστία • Άμεσοι σύνδεσμοι', searchExchange: 'Αναζήτηση ανταλλακτηρίου...', metalExTitle: 'Δημοφιλείς Συλλογές NFT', metalExSub: 'Όλα τα ανταλλακτήρια που υποστηρίζουν πολύτιμα μέταλλα', stocksTitle: 'Κύριες Μετοχές & ETF', stocksSub: 'Tokenized μετοχές & ETF πολύτιμων μετάλλων • Δεδομένα από Yahoo Finance', colExchange2: 'Ανταλλακτήριο', colPairs: 'Ζεύγη Συναλλαγών', colRefPrice: 'Τιμή Αναφ.', colVol24h: 'Όγκος 24ω', colTrade: 'Συναλλαγή', colStock: 'Μετοχή' };
      T.sv = { trustScore: 'Förtroende', siteTitle: 'CryptoHub', exchanges: 'Börser', recommendedExchanges: 'Rekommenderade Börser', live: 'Live', fearGreedTitle: 'Rädsla & Girighet Index', fearGreedSub: 'Marknadssentiment - från Binance', outOf100: 'av 100', extremeFear: 'Extrem Rädsla', fear: 'Rädsla', neutral: 'Neutral', greed: 'Girighet', extremeGreed: 'Extrem Girighet', aiTitle: 'AI-Analys', aiSub: 'AI-drivna förutsägelser', analyzing: 'Analyserar...', bullishSignals: 'Hausse-Signaler', bearishSignals: 'Baisse-Signaler', bollingerBands: 'Bollinger', searchCoin: 'Sök kryptovaluta...', sortBy: 'Sortera efter', network: 'Nätverk', show: 'Visa', loadMore: 'Ladda Mer', loadingData: 'Laddar...', filteredBy: 'Filter:', colName: 'Namn', colPrice: 'Pris', colMarketCap: 'Marknadsvärde', colVolume: 'Volym 24h', colExchanges: 'Börser', prev: 'Föregående', next: 'Nästa', showing: 'Visar', of: 'av', coins: 'kryptovalutor', availableOn: 'Tillgänglig på', exchange: 'börser', referralNote: '🎁 Hänvisningslänkar', register: 'Registrera', visit: 'Besök', trustHigh: 'Högt Förtroende', trustMedium: 'Medel Förtroende', trustLow: 'Lågt Förtroende', volume: 'Volym', allNetworks: 'Alla Nätverk', rank: 'Ranking', marketCap: 'Marknadsvärde', price: 'Pris', change24h: 'Ändring 24h', noExchanges: 'Hittas inte', errorLoading: 'Laddningsfel', retry: 'Försök igen', allLoaded: 'Allt Laddat', loadMoreRemaining: 'Ladda Mer', oversold: 'Översåld', overbought: 'Överköpt', bullish: 'Hausse', bearish: 'Baisse', nearBottom: 'Nära Botten', nearTop: 'Nära Toppen', goldenCross: 'Gyllene Korset', deathCross: 'Dödskorset', strongBuy: 'Starkt Köp', buy: 'Köp', sell: 'Sälj', strongSell: 'Stark Försäljning', coinsFound: 'hittade', trendingTitle: 'Trender', trendingSub: 'Topp 100 efter 24h volym', altcoinIndex: 'Altcoin Säsongs Index', altcoinSeason: 'Altcoin Säsong', btcDominance: 'BTC Dominans', ethDominance: 'ETH Dominans', totalMarketCap: 'Totalt Marknadsvärde', totalVolume24: 'Total Volym 24h', fgHistory: 'Historik', now: 'Nu', yesterday: 'Igår', lastWeek: 'Förra Veckan', lastMonth: 'Förra Månaden', entryExitTitle: 'In- och Utgångssignaler - Bitcoin', entryZone: 'Ingångszon', exitZone: 'Utgångszon', currentPrice: 'Aktuellt Pris', entryNote: 'Vid stödnivå', exitNote: 'Vid motståndsnivå', volAnalysis: 'Volymanalys', supportResistance: 'Stöd/Motstånd', aiRecommendation: 'Rekommendation', strongTrend: 'Stark Trend', weakTrend: 'Svag Trend', highVol: 'Hög Volym', lowVol: 'Låg Volym', aboveAvg: 'Över Genomsnitt', belowAvg: 'Under Genomsnitt', footerDesc: 'Din kompletta plattform för att spåra 5000+ kryptovalutor med avancerade AI-verktyg och realtidspriser.', quickLinks: 'Snabblänkar', home: 'Hem', topExchanges: 'Toppbörser', disclaimer: 'Ansvarsfriskrivning', disclaimerText: 'Informationen på denna webbplats är endast i utbildningssyfte och utgör inte finansiell rådgivning. Kryptohandel innebär mycket hög risk.', allRights: 'Alla Rättigheter Förbehållna', btcSeason: 'Bitcoin Säsong', holdEntry: 'Vänta på bättre ingång', goodEntry: 'Bra ingångsmöjlighet', riskHigh: 'Hög Risk', support: 'Support', yourName: 'Ditt Namn', yourEmail: 'Din E-post', yourMessage: 'Ditt Meddelande...', sendMessage: 'Skicka', messageSent: 'Meddelande skickat!', languages: 'Språk', secure: 'Säker', loading: 'Laddar...', tabCrypto: 'Kryptovalutor', tabExchanges: 'Alla Börser', tabCommodities: 'NFT Collections', allExchangesTitle: 'Alla Globala Börser', allExchangesSub: '500 licensierade börser • Efter förtroende • Direkta handelslänkar', searchExchange: 'Sök börs...', metalExTitle: 'Populära NFT-samlingar', metalExSub: 'Alla börser med ädelmetallhandel och realtidsvolymer', stocksTitle: 'Stora Aktier & ETF:er', stocksSub: 'Tokeniserade aktier & ädelmetall-ETF:er • Realtidsdata från Yahoo Finance', colExchange2: 'Börs', colPairs: 'Handelspar', colRefPrice: 'Ref. Pris', colVol24h: 'Volym 24h', colTrade: 'Handla', colStock: 'Aktie' };
      T.da = { trustScore: 'Tillid', siteTitle: 'CryptoHub', exchanges: 'Børser', recommendedExchanges: 'Anbefalede Børser', live: 'Live', fearGreedTitle: 'Frygt & Grådighed Indeks', fearGreedSub: 'Markedsstemning - fra Binance', outOf100: 'af 100', extremeFear: 'Ekstrem Frygt', fear: 'Frygt', neutral: 'Neutral', greed: 'Grådighed', extremeGreed: 'Ekstrem Grådighed', aiTitle: 'AI-Analyse', aiSub: 'AI-drevne forudsigelser', analyzing: 'Analyserer...', bullishSignals: 'Opadgående Signaler', bearishSignals: 'Nedadgående Signaler', bollingerBands: 'Bollinger', searchCoin: 'Søg kryptovaluta...', sortBy: 'Sorter efter', network: 'Netværk', show: 'Vis', loadMore: 'Indlæs Mere', loadingData: 'Indlæser...', filteredBy: 'Filter:', colName: 'Navn', colPrice: 'Pris', colMarketCap: 'Markedsværdi', colVolume: 'Volumen 24t', colExchanges: 'Børser', prev: 'Forrige', next: 'Næste', showing: 'Viser', of: 'af', coins: 'kryptovalutaer', availableOn: 'Tilgængelig på', exchange: 'børser', referralNote: '🎁 Henvisningslinks', register: 'Registrer', visit: 'Besøg', trustHigh: 'Høj Tillid', trustMedium: 'Middel Tillid', trustLow: 'Lav Tillid', volume: 'Volumen', allNetworks: 'Alle Netværk', rank: 'Placering', marketCap: 'Markedsværdi', price: 'Pris', change24h: 'Ændring 24t', noExchanges: 'Ikke fundet', errorLoading: 'Indlæsningsfejl', retry: 'Prøv igen', allLoaded: 'Alt Indlæst', loadMoreRemaining: 'Indlæs Mere', oversold: 'Oversolgt', overbought: 'Overkøbt', bullish: 'Opadgående', bearish: 'Nedadgående', nearBottom: 'Tæt på Bunden', nearTop: 'Tæt på Toppen', goldenCross: 'Gyldent Kors', deathCross: 'Dødskors', strongBuy: 'Stærkt Køb', buy: 'Køb', sell: 'Sælg', strongSell: 'Stærkt Salg', coinsFound: 'fundet', trendingTitle: 'Tendenser', trendingSub: 'Top 100 efter 24t volumen', altcoinIndex: 'Altcoin Sæson Indeks', altcoinSeason: 'Altcoin Sæson', btcDominance: 'BTC Dominans', ethDominance: 'ETH Dominans', totalMarketCap: 'Samlet Markedsværdi', totalVolume24: 'Samlet Volumen 24t', fgHistory: 'Historik', now: 'Nu', yesterday: 'I går', lastWeek: 'Sidste Uge', lastMonth: 'Sidste Måned', entryExitTitle: 'Ind- og Udgangssignaler - Bitcoin', entryZone: 'Indgangszone', exitZone: 'Udgangszone', currentPrice: 'Aktuel Pris', entryNote: 'Ved supportniveau', exitNote: 'Ved modstandsniveau', volAnalysis: 'Volumenanalyse', supportResistance: 'Support/Modstand', aiRecommendation: 'Anbefaling', strongTrend: 'Stærk Trend', weakTrend: 'Svag Trend', highVol: 'Høj Volumen', lowVol: 'Lav Volumen', aboveAvg: 'Over Gennemsnit', belowAvg: 'Under Gennemsnit', footerDesc: 'Din komplette platform til at spore 5000+ kryptovalutaer med avancerede AI-værktøjer og realtidspriser.', quickLinks: 'Hurtige Links', home: 'Hjem', topExchanges: 'Top Børser', disclaimer: 'Ansvarsfraskrivelse', disclaimerText: 'Informationen på denne hjemmeside er kun til uddannelsesmæssige formål og udgør ikke finansiel rådgivning. Kryptohandel indebærer meget høj risiko.', allRights: 'Alle Rettigheder Forbeholdes', btcSeason: 'Bitcoin Sæson', holdEntry: 'Vent på bedre indgang', goodEntry: 'God indgangsmulighed', riskHigh: 'Høj Risiko', support: 'Support', yourName: 'Dit Navn', yourEmail: 'Din E-mail', yourMessage: 'Din Besked...', sendMessage: 'Send', messageSent: 'Besked sendt!', languages: 'Sprog', secure: 'Sikker', loading: 'Indlæser...', tabCrypto: 'Kryptovalutaer', tabExchanges: 'Alle Børser', tabCommodities: 'NFT Collections', allExchangesTitle: 'Alle Globale Børser', allExchangesSub: '500 licenserede børser • Efter tillid • Direkte handelslinks', searchExchange: 'Søg børs...', metalExTitle: 'Populære NFT-samlinger', metalExSub: 'Alle børser der understøtter ædelmetalhandel', stocksTitle: 'Store Aktier & ETF\'er', stocksSub: 'Tokeniserede aktier & ædelmetalETF\'er • Realtidsdata fra Binance', colExchange2: 'Børs', colPairs: 'Handelspar', colRefPrice: 'Ref. Pris', colVol24h: 'Volumen 24t', colTrade: 'Handl', colStock: 'Aktie' };
      T.fi = { trustScore: 'Luottamus', siteTitle: 'CryptoHub', exchanges: 'Pörssit', recommendedExchanges: 'Suositellut Pörssit', live: 'Livenä', fearGreedTitle: 'Pelko & Ahneus Indeksi', fearGreedSub: 'Markkinasentimentti - Binancelta', outOf100: '/ 100', extremeFear: 'Äärimmäinen Pelko', fear: 'Pelko', neutral: 'Neutraali', greed: 'Ahneus', extremeGreed: 'Äärimmäinen Ahneus', aiTitle: 'AI-Analyysi', aiSub: 'AI-pohjaiset ennusteet', analyzing: 'Analysoidaan...', bullishSignals: 'Nousevat Signaalit', bearishSignals: 'Laskevat Signaalit', bollingerBands: 'Bollinger', searchCoin: 'Etsi kryptovaluuttaa...', sortBy: 'Lajittele', network: 'Verkko', show: 'Näytä', loadMore: 'Lataa Lisää', loadingData: 'Ladataan...', filteredBy: 'Suodatin:', colName: 'Nimi', colPrice: 'Hinta', colMarketCap: 'Markkina-arvo', colVolume: 'Volyymi 24h', colExchanges: 'Pörssit', prev: 'Edellinen', next: 'Seuraava', showing: 'Näytetään', of: '/', coins: 'kryptovaluuttaa', availableOn: 'Saatavilla:', exchange: 'pörssiä', referralNote: '🎁 Suosittelulinkit', register: 'Rekisteröidy', visit: 'Vieraile', trustHigh: 'Korkea Luottamus', trustMedium: 'Keskitason Luottamus', trustLow: 'Matala Luottamus', volume: 'Volyymi', allNetworks: 'Kaikki Verkot', rank: 'Sijoitus', marketCap: 'Markkina-arvo', price: 'Hinta', change24h: 'Muutos 24h', noExchanges: 'Ei löytynyt', errorLoading: 'Latausvirhe', retry: 'Yritä uudelleen', allLoaded: 'Kaikki Ladattu', loadMoreRemaining: 'Lataa Lisää', oversold: 'Ylimyyty', overbought: 'Yliostettu', bullish: 'Nouseva', bearish: 'Laskeva', nearBottom: 'Lähellä Pohjaa', nearTop: 'Lähellä Huippua', goldenCross: 'Kultainen Risti', deathCross: 'Kuolemanristi', strongBuy: 'Vahva Osto', buy: 'Osta', sell: 'Myy', strongSell: 'Vahva Myynti', coinsFound: 'löydetty', trendingTitle: 'Trendit', trendingSub: 'Top 100 24h volyymin mukaan', altcoinIndex: 'Altcoin-kausi Indeksi', altcoinSeason: 'Altcoin-kausi', btcDominance: 'BTC Dominanssi', ethDominance: 'ETH Dominanssi', totalMarketCap: 'Kokonaismarkkina-arvo', totalVolume24: 'Kokonaisvolyymi 24h', fgHistory: 'Historia', now: 'Nyt', yesterday: 'Eilen', lastWeek: 'Viime Viikko', lastMonth: 'Viime Kuukausi', entryExitTitle: 'Sisään- ja Ulostulosignaalit - Bitcoin', entryZone: 'Sisääntuloalue', exitZone: 'Ulostuloalue', currentPrice: 'Nykyinen Hinta', entryNote: 'Tukitasolla', exitNote: 'Vastustasolla', volAnalysis: 'Volyymianalyysi', supportResistance: 'Tuki/Vastus', aiRecommendation: 'Suositus', strongTrend: 'Vahva Trendi', weakTrend: 'Heikko Trendi', highVol: 'Korkea Volyymi', lowVol: 'Matala Volyymi', aboveAvg: 'Keskiarvon Yläpuolella', belowAvg: 'Keskiarvon Alapuolella', footerDesc: 'Kattava alustasi 5000+ kryptovaluutan seurantaan edistyneillä AI-työkaluilla ja reaaliaikaisilla hinnoilla.', quickLinks: 'Pikalinkit', home: 'Koti', topExchanges: 'Parhaat Pörssit', disclaimer: 'Vastuuvapauslauseke', disclaimerText: 'Tämän sivuston tiedot ovat vain opetuksellisia eivätkä ole taloudellista neuvontaa. Kryptokaupankäynti sisältää erittäin korkean riskin.', allRights: 'Kaikki Oikeudet Pidätetään', btcSeason: 'Bitcoin-kausi', holdEntry: 'Odota parempaa sisääntuloa', goodEntry: 'Hyvä sisääntulomahdollisuus', riskHigh: 'Korkea Riski', support: 'Tuki', yourName: 'Nimesi', yourEmail: 'Sähköpostisi', yourMessage: 'Viestisi...', sendMessage: 'Lähetä', messageSent: 'Viesti lähetetty!', languages: 'Kielet', secure: 'Turvallinen', loading: 'Ladataan...', tabCrypto: 'Kryptovaluutat', tabExchanges: 'Kaikki Pörssit', tabCommodities: 'NFT Collections', allExchangesTitle: 'Kaikki Maailmanlaajuiset Pörssit', allExchangesSub: '500 lisensoitua pörssiä • Luottamuksen mukaan • Suorat kauppalinkit', searchExchange: 'Etsi pörssiä...', metalExTitle: 'Suositut NFT-kokoelmat', metalExSub: 'Kaikki jalometallikauppaa tukevat pörssit', stocksTitle: 'Tärkeimmät Osakkeet & ETF:t', stocksSub: 'Tokenisoidut osakkeet & jalometalli-ETF:t • Reaaliaikainen data Yahoo Financelta', colExchange2: 'Pörssi', colPairs: 'Kauppaparit', colRefPrice: 'Viitehinta', colVol24h: 'Volyymi 24h', colTrade: 'Käy Kauppaa', colStock: 'Osake' };
      T.ms = { trustScore: 'Kepercayaan', siteTitle: 'CryptoHub', exchanges: 'Bursa', recommendedExchanges: 'Bursa Disyorkan', live: 'Langsung', fearGreedTitle: 'Indeks Ketakutan & Tamak', fearGreedSub: 'Sentimen Pasaran - daripada Binance', outOf100: 'daripada 100', extremeFear: 'Ketakutan Melampau', fear: 'Takut', neutral: 'Neutral', greed: 'Tamak', extremeGreed: 'Ketamakan Melampau', aiTitle: 'Analisis AI', aiSub: 'Ramalan berasaskan AI', analyzing: 'Menganalisis...', bullishSignals: 'Isyarat Kenaikan', bearishSignals: 'Isyarat Penurunan', bollingerBands: 'Bollinger', searchCoin: 'Cari syiling...', sortBy: 'Susun mengikut', network: 'Rangkaian', show: 'Papar', loadMore: 'Muat Lagi', loadingData: 'Memuatkan...', filteredBy: 'Penapis:', colName: 'Nama', colPrice: 'Harga', colMarketCap: 'Kap. Pasaran', colVolume: 'Jumlah 24j', colExchanges: 'Bursa', prev: 'Sebelumnya', next: 'Seterusnya', showing: 'Memaparkan', of: 'daripada', coins: 'syiling', availableOn: 'Tersedia di', exchange: 'bursa', referralNote: '🎁 Pautan rujukan', register: 'Daftar', visit: 'Lawati', trustHigh: 'Kepercayaan Tinggi', trustMedium: 'Kepercayaan Sederhana', trustLow: 'Kepercayaan Rendah', volume: 'Jumlah', allNetworks: 'Semua Rangkaian', rank: 'Kedudukan', marketCap: 'Kap. Pasaran', price: 'Harga', change24h: 'Perubahan 24j', noExchanges: 'Tidak dijumpai', errorLoading: 'Ralat memuatkan', retry: 'Cuba semula', allLoaded: 'Semua Dimuat', loadMoreRemaining: 'Muat Lagi', oversold: 'Terlebih Jual', overbought: 'Terlebih Beli', bullish: 'Menaik', bearish: 'Menurun', nearBottom: 'Hampir Dasar', nearTop: 'Hampir Puncak', goldenCross: 'Golden Cross', deathCross: 'Death Cross', strongBuy: 'Beli Kuat', buy: 'Beli', sell: 'Jual', strongSell: 'Jual Kuat', coinsFound: 'dijumpai', trendingTitle: 'Trending', trendingSub: '100 syiling teratas mengikut jumlah 24j', altcoinIndex: 'Indeks Musim Altcoin', altcoinSeason: 'Musim Altcoin', btcDominance: 'Dominasi BTC', ethDominance: 'Dominasi ETH', totalMarketCap: 'Jumlah Kap. Pasaran', totalVolume24: 'Jumlah Keseluruhan 24j', fgHistory: 'Sejarah', now: 'Sekarang', yesterday: 'Semalam', lastWeek: 'Minggu Lepas', lastMonth: 'Bulan Lepas', entryExitTitle: 'Isyarat Masuk & Keluar - Bitcoin', entryZone: 'Zon Masuk', exitZone: 'Zon Keluar', currentPrice: 'Harga Semasa', entryNote: 'Pada tahap sokongan', exitNote: 'Pada tahap rintangan', volAnalysis: 'Analisis Jumlah', supportResistance: 'Sokongan/Rintangan', aiRecommendation: 'Cadangan', strongTrend: 'Trend Kuat', weakTrend: 'Trend Lemah', highVol: 'Jumlah Tinggi', lowVol: 'Jumlah Rendah', aboveAvg: 'Atas Purata', belowAvg: 'Bawah Purata', footerDesc: 'Platform lengkap anda untuk menjejaki 5000+ mata wang kripto dengan alat AI dan harga masa nyata.', quickLinks: 'Pautan Pantas', home: 'Utama', topExchanges: 'Bursa Teratas', disclaimer: 'Penafian', disclaimerText: 'Maklumat di laman web ini adalah untuk tujuan pendidikan sahaja dan bukan nasihat kewangan. Perdagangan kripto melibatkan risiko yang sangat tinggi.', allRights: 'Hak Cipta Terpelihara', btcSeason: 'Musim Bitcoin', holdEntry: 'Tunggu kemasukan lebih baik', goodEntry: 'Peluang kemasukan baik', riskHigh: 'Risiko Tinggi', support: 'Sokongan', yourName: 'Nama Anda', yourEmail: 'E-mel Anda', yourMessage: 'Mesej Anda...', sendMessage: 'Hantar', messageSent: 'Mesej berjaya dihantar!', languages: 'Bahasa', secure: 'Selamat', loading: 'Memuatkan...', tabCrypto: 'Mata Wang Kripto', tabExchanges: 'Semua Bursa', tabCommodities: 'NFT Collections', allExchangesTitle: 'Semua Bursa Global', allExchangesSub: '500 bursa berlesen • Mengikut kepercayaan • Pautan dagangan terus', searchExchange: 'Cari bursa...', metalExTitle: 'Koleksi NFT Popular', metalExSub: 'Semua bursa yang menyokong dagangan logam berharga', stocksTitle: 'Saham Utama & ETF', stocksSub: 'Saham token & ETF logam berharga • Data masa nyata daripada Yahoo Finance', colExchange2: 'Bursa', colPairs: 'Pasangan Dagangan', colRefPrice: 'Harga Ref.', colVol24h: 'Jumlah 24j', colTrade: 'Dagang', colStock: 'Saham' };
      T.bn = { trustScore: 'বিশ্বাস', siteTitle: 'CryptoHub', exchanges: 'এক্সচেঞ্জ', recommendedExchanges: 'প্রস্তাবিত এক্সচেঞ্জ', live: 'লাইভ', fearGreedTitle: 'ভয় ও লোভ সূচক', fearGreedSub: 'বাজার সেন্টিমেন্ট - Binance থেকে', outOf100: '/ ১০০', extremeFear: 'চরম ভয়', fear: 'ভয়', neutral: 'নিরপেক্ষ', greed: 'লোভ', extremeGreed: 'চরম লোভ', aiTitle: 'AI বিশ্লেষণ', aiSub: 'AI-চালিত পূর্বাভাস', analyzing: 'বিশ্লেষণ হচ্ছে...', bullishSignals: 'ঊর্ধ্বমুখী সংকেত', bearishSignals: 'নিম্নমুখী সংকেত', bollingerBands: 'বলিঞ্জার', searchCoin: 'কয়েন খুঁজুন...', sortBy: 'সাজান', network: 'নেটওয়ার্ক', show: 'দেখান', loadMore: 'আরো লোড করুন', loadingData: 'লোড হচ্ছে...', filteredBy: 'ফিল্টার:', colName: 'নাম', colPrice: 'মূল্য', colMarketCap: 'মার্কেট ক্যাপ', colVolume: 'ভলিউম ২৪ঘ', colExchanges: 'এক্সচেঞ্জ', prev: 'আগের', next: 'পরের', showing: 'দেখানো হচ্ছে', of: 'এর', coins: 'কয়েন', availableOn: 'পাওয়া যায়', exchange: 'এক্সচেঞ্জে', referralNote: '🎁 রেফারেল লিংক', register: 'নিবন্ধন', visit: 'ভিজিট', trustHigh: 'উচ্চ বিশ্বাস', trustMedium: 'মাঝারি বিশ্বাস', trustLow: 'কম বিশ্বাস', volume: 'ভলিউম', allNetworks: 'সকল নেটওয়ার্ক', rank: 'র‍্যাংক', marketCap: 'মার্কেট ক্যাপ', price: 'মূল্য', change24h: 'পরিবর্তন ২৪ঘ', noExchanges: 'পাওয়া যায়নি', errorLoading: 'লোডিং ত্রুটি', retry: 'পুনরায় চেষ্টা', allLoaded: 'সব লোড হয়েছে', loadMoreRemaining: 'আরো লোড করুন', oversold: 'অতিবিক্রীত', overbought: 'অতিক্রীত', bullish: 'ঊর্ধ্বমুখী', bearish: 'নিম্নমুখী', nearBottom: 'তলদেশের কাছে', nearTop: 'শীর্ষের কাছে', goldenCross: 'গোল্ডেন ক্রস', deathCross: 'ডেথ ক্রস', strongBuy: 'শক্তিশালী ক্রয়', buy: 'কিনুন', sell: 'বিক্রি', strongSell: 'শক্তিশালী বিক্রি', coinsFound: 'পাওয়া গেছে', trendingTitle: 'ট্রেন্ডিং', trendingSub: '২৪ঘ ভলিউমে শীর্ষ ১০০', altcoinIndex: 'অল্টকয়েন সিজন সূচক', altcoinSeason: 'অল্টকয়েন সিজন', btcDominance: 'BTC আধিপত্য', ethDominance: 'ETH আধিপত্য', totalMarketCap: 'মোট মার্কেট ক্যাপ', totalVolume24: 'মোট ভলিউম ২৪ঘ', fgHistory: 'ইতিহাস', now: 'এখন', yesterday: 'গতকাল', lastWeek: 'গত সপ্তাহ', lastMonth: 'গত মাস', entryExitTitle: 'এন্ট্রি ও এক্সিট সিগন্যাল - Bitcoin', entryZone: 'এন্ট্রি জোন', exitZone: 'এক্সিট জোন', currentPrice: 'বর্তমান মূল্য', entryNote: 'সাপোর্ট লেভেলে', exitNote: 'রেজিস্ট্যান্স লেভেলে', volAnalysis: 'ভলিউম বিশ্লেষণ', supportResistance: 'সাপোর্ট/রেজিস্ট্যান্স', aiRecommendation: 'সুপারিশ', strongTrend: 'শক্তিশালী ট্রেন্ড', weakTrend: 'দুর্বল ট্রেন্ড', highVol: 'উচ্চ ভলিউম', lowVol: 'কম ভলিউম', aboveAvg: 'গড়ের উপরে', belowAvg: 'গড়ের নিচে', footerDesc: '৫০০০+ ক্রিপ্টোকারেন্সি ট্র্যাক করার জন্য AI বিশ্লেষণ ও রিয়েল-টাইম মূল্য সহ আপনার সম্পূর্ণ প্ল্যাটফর্ম।', quickLinks: 'দ্রুত লিংক', home: 'হোম', topExchanges: 'শীর্ষ এক্সচেঞ্জ', disclaimer: 'দায়মুক্তি', disclaimerText: 'এই সাইটের তথ্য শুধুমাত্র শিক্ষামূলক এবং আর্থিক পরামর্শ নয়। ক্রিপ্টো ট্রেডিংয়ে অত্যন্ত উচ্চ ঝুঁকি রয়েছে।', allRights: 'সর্বস্বত্ব সংরক্ষিত', btcSeason: 'বিটকয়েন সিজন', holdEntry: 'ভালো এন্ট্রির জন্য অপেক্ষা করুন', goodEntry: 'ভালো এন্ট্রি সুযোগ', riskHigh: 'উচ্চ ঝুঁকি', support: 'সহায়তা', yourName: 'আপনার নাম', yourEmail: 'আপনার ইমেইল', yourMessage: 'আপনার বার্তা...', sendMessage: 'পাঠান', messageSent: 'বার্তা সফলভাবে পাঠানো হয়েছে!', languages: 'ভাষা', secure: 'নিরাপদ', loading: 'লোড হচ্ছে...', tabCrypto: 'ক্রিপ্টোকারেন্সি', tabExchanges: 'সকল এক্সচেঞ্জ', tabCommodities: 'NFT Collections', allExchangesTitle: 'সকল গ্লোবাল এক্সচেঞ্জ', allExchangesSub: '১০২টি লাইসেন্সপ্রাপ্ত এক্সচেঞ্জ • বিশ্বস্ততা অনুযায়ী • সরাসরি ট্রেডিং লিংক', searchExchange: 'এক্সচেঞ্জ খুঁজুন...', metalExTitle: 'জনপ্রিয় NFT সংগ্রহ', metalExSub: 'মূল্যবান ধাতু ট্রেডিং সমর্থনকারী সকল এক্সচেঞ্জ', stocksTitle: 'প্রধান স্টক ও ETF', stocksSub: 'টোকেনাইজড স্টক ও মূল্যবান ধাতু ETF • Yahoo Finance রিয়েল-টাইম ডেটা', colExchange2: 'এক্সচেঞ্জ', colPairs: 'ট্রেডিং পেয়ার', colRefPrice: 'রেফ. মূল্য', colVol24h: 'ভলিউম ২৪ঘ', colTrade: 'ট্রেড', colStock: 'স্টক' };
      T.sw = { trustScore: 'Uaminifu', siteTitle: 'CryptoHub', exchanges: 'Masoko', recommendedExchanges: 'Masoko Yaliyopendekezwa', live: 'Moja kwa Moja', fearGreedTitle: 'Fahirisi ya Hofu na Tamaa', fearGreedSub: 'Hali ya Soko - kutoka Binance', outOf100: 'kati ya 100', extremeFear: 'Hofu Kali', fear: 'Hofu', neutral: 'Wastani', greed: 'Tamaa', extremeGreed: 'Tamaa Kali', aiTitle: 'Uchambuzi wa AI', aiSub: 'Utabiri unaodhibitiwa na AI', analyzing: 'Inachambua...', bullishSignals: 'Ishara za Kupanda', bearishSignals: 'Ishara za Kushuka', bollingerBands: 'Bollinger', searchCoin: 'Tafuta sarafu...', sortBy: 'Panga kwa', network: 'Mtandao', show: 'Onyesha', loadMore: 'Pakia Zaidi', loadingData: 'Inapakia...', filteredBy: 'Chuja:', colName: 'Jina', colPrice: 'Bei', colMarketCap: 'Thamani ya Soko', colVolume: 'Kiasi 24s', colExchanges: 'Masoko', prev: 'Iliyotangulia', next: 'Inayofuata', showing: 'Inaonyesha', of: 'ya', coins: 'sarafu', availableOn: 'Inapatikana', exchange: 'masoko', referralNote: '🎁 Viungo vya rufaa', register: 'Jiandikishe', visit: 'Tembelea', trustHigh: 'Imani Kubwa', trustMedium: 'Imani ya Kati', trustLow: 'Imani Ndogo', volume: 'Kiasi', allNetworks: 'Mitandao Yote', rank: 'Nafasi', marketCap: 'Thamani ya Soko', price: 'Bei', change24h: 'Mabadiliko 24s', noExchanges: 'Haijapatikana', errorLoading: 'Hitilafu ya kupakia', retry: 'Jaribu tena', allLoaded: 'Yote Yamepakiwa', loadMoreRemaining: 'Pakia Zaidi', oversold: 'Kuuzwa kupita kiasi', overbought: 'Kununuliwa kupita kiasi', bullish: 'Kupanda', bearish: 'Kushuka', nearBottom: 'Karibu na Chini', nearTop: 'Karibu na Juu', goldenCross: 'Msalaba wa Dhahabu', deathCross: 'Msalaba wa Kifo', strongBuy: 'Nunua Sana', buy: 'Nunua', sell: 'Uza', strongSell: 'Uza Sana', coinsFound: 'zimepatikana', trendingTitle: 'Zinazovuma', trendingSub: 'Sarafu 100 bora kwa kiasi cha 24s', altcoinIndex: 'Fahirisi ya Msimu wa Altcoin', altcoinSeason: 'Msimu wa Altcoin', btcDominance: 'Utawala wa BTC', ethDominance: 'Utawala wa ETH', totalMarketCap: 'Thamani Jumla', totalVolume24: 'Kiasi Jumla 24s', fgHistory: 'Historia', now: 'Sasa', yesterday: 'Jana', lastWeek: 'Wiki Iliyopita', lastMonth: 'Mwezi Uliopita', entryExitTitle: 'Ishara za Kuingia na Kutoka - Bitcoin', entryZone: 'Eneo la Kuingia', exitZone: 'Eneo la Kutoka', currentPrice: 'Bei ya Sasa', entryNote: 'Katika kiwango cha msaada', exitNote: 'Katika kiwango cha upinzani', volAnalysis: 'Uchambuzi wa Kiasi', supportResistance: 'Msaada/Upinzani', aiRecommendation: 'Mapendekezo', strongTrend: 'Mwelekeo Mkali', weakTrend: 'Mwelekeo Dhaifu', highVol: 'Kiasi Kikubwa', lowVol: 'Kiasi Kidogo', aboveAvg: 'Juu ya Wastani', belowAvg: 'Chini ya Wastani', footerDesc: 'Jukwaa lako kamili la kufuatilia sarafu 10,000+ za kripto na zana za AI na bei za wakati halisi.', quickLinks: 'Viungo vya Haraka', home: 'Nyumbani', topExchanges: 'Masoko Bora', disclaimer: 'Kanusho', disclaimerText: 'Taarifa kwenye tovuti hii ni kwa madhumuni ya elimu tu na si ushauri wa kifedha. Biashara ya kripto ina hatari kubwa sana.', allRights: 'Haki Zote Zimehifadhiwa', btcSeason: 'Msimu wa Bitcoin', holdEntry: 'Subiri kuingia bora', goodEntry: 'Fursa nzuri ya kuingia', riskHigh: 'Hatari Kubwa', support: 'Msaada', yourName: 'Jina Lako', yourEmail: 'Barua Pepe Yako', yourMessage: 'Ujumbe Wako...', sendMessage: 'Tuma', messageSent: 'Ujumbe umetumwa!', languages: 'Lugha', secure: 'Salama', loading: 'Inapakia...', tabCrypto: 'Sarafu za Kripto', tabExchanges: 'Masoko Yote', tabCommodities: 'NFT Collections', allExchangesTitle: 'Masoko Yote ya Dunia', allExchangesSub: 'Masoko 500 yenye leseni • Kwa uaminifu • Viungo vya moja kwa moja', searchExchange: 'Tafuta soko...', metalExTitle: 'Makusanyo Maarufu ya NFT', metalExSub: 'Masoko yote yanayounga mkono biashara ya madini ya thamani', stocksTitle: 'Hisa Kuu na ETF', stocksSub: 'Hisa za tokeni na ETF za madini ya thamani • Data ya wakati halisi kutoka Yahoo Finance', colExchange2: 'Soko', colPairs: 'Jozi za Biashara', colRefPrice: 'Bei ya Ref.', colVol24h: 'Kiasi 24s', colTrade: 'Fanya Biashara', colStock: 'Hisa' };
    }, 5000);
    // Fill any remaining languages from English base
    const analyzerLangs = {
      ar: { cryptoAnalyzer: 'محلل السيولة', cryptoAnalyzerDesc: 'تحليل متقدم للسيولة والعملات', cryptoArbitrage: 'ماسح الفروقات', cryptoArbitrageDesc: 'مقارنة الأسعار بين 100 منصة', forexAnalyzer: 'محلل الفوركس', forexAnalyzerDesc: 'تحليل أزواج العملات الأجنبية', blogNav: 'المدونة', blogNavDesc: 'مقالات وتحليلات سوق الكريبتو', blogFtLink: 'Blog & Articles', blogSectionTitle: 'أحدث المقالات والتحليلات', blogViewAll: 'عرض جميع المقالات', blogRead: 'اقرأ ←', blogTagAnalysis: 'تحليل السوق', blogTagGold: 'ذهب vs كريبتو', blogTagBeginner: 'مبتدئ', blogTagSecurity: 'أمان', blogPost1Title: 'Bitcoin 2025: دليل شامل — الهالفينج، ETFs وتوقعات الأسعار', blogPost1Desc: 'كل شيء عن دورة الهالفينج، صناديق ETF المؤسسية، وتوقعات 2025.', blogPost2Title: 'BRC-20 مقابل Runes: ما الفرق؟ دليل 2025', blogPost2Desc: 'مقارنة تقنية كاملة — أحجام التداول والعملات الكبرى وأيهما أقوى مستقبلاً.', blogPost3Title: 'مؤشر الخوف والجشع: كيف تستخدم المشاعر لتوقيت السوق', blogPost3Desc: 'تعلم قراءة المؤشر واستخدامه لاتخاذ قرارات شراء وبيع أذكى في الكريبتو.', blogPost4Title: 'الذهب مقابل البيتكوين: المقارنة الكبرى لمخزن القيمة', blogPost4Desc: 'الأداء، التقلب، الندرة — أي الأصلين يناسب محفظتك الاستثمارية؟', blogPost5Title: 'دليل الكريبتو للمبتدئين: دليل شامل 2025', blogPost5Desc: 'من أساسيات البلوكتشين إلى شراء أول بيتكوين وتجنب أخطاء المبتدئين.', blogPost6Title: 'كيف تحمي كريبتوك: المحافظ، العبارات السرية وأفضل الممارسات', blogPost6Desc: 'دليل أمان كامل — المحافظ الساخنة والباردة وتجنب عمليات الاحتيال الشائعة.', stkAll: 'الكل', stkStock: 'أسهم', stkEtf: 'صناديق ETF', stkCommodity: 'سلع', stkIndex: 'مؤشرات', stkResults: 'نتيجة', stkSearchPlh: 'ابحث عن سهم...', stkPage: 'صفحة', stkOf: 'من' },
      en: { cryptoAnalyzer: 'Liquidity Analyzer', cryptoAnalyzerDesc: 'Advanced crypto liquidity analysis', cryptoArbitrage: 'Arbitrage Scanner', cryptoArbitrageDesc: 'Price comparison across 100+ exchanges', forexAnalyzer: 'Forex Analyzer', forexAnalyzerDesc: 'Currency pair analysis & signals', blogNav: 'Blog', blogNavDesc: 'Crypto articles & market guides', blogFtLink: 'Blog & Articles', blogSectionTitle: 'Latest Articles & Analysis', blogViewAll: 'View All Articles', blogRead: 'Read →', blogTagAnalysis: 'Market Analysis', blogTagGold: 'Gold vs Crypto', blogTagBeginner: 'Beginner', blogTagSecurity: 'Security', blogPost1Title: 'Bitcoin 2025: Complete Guide — Halving, ETFs & Price Predictions', blogPost1Desc: 'Everything about the halving cycle, institutional ETFs, and 2025 outlook.', blogPost2Title: 'BRC-20 vs Runes: What\'s the Difference? 2025 Guide', blogPost2Desc: 'Full technical comparison — trading volumes, top tokens, and which has a stronger future.', blogPost3Title: 'Fear & Greed Index: How to Use Sentiment to Time the Market', blogPost3Desc: 'Learn to read the index and use it to make smarter crypto buy and sell decisions.', blogPost4Title: 'Gold vs Bitcoin: The Ultimate Store of Value Comparison', blogPost4Desc: 'Performance, volatility, scarcity — which asset belongs in your portfolio?', blogPost5Title: 'Crypto for Beginners: Complete 2025 Starter Guide', blogPost5Desc: 'From blockchain basics to buying your first Bitcoin and avoiding common mistakes.', blogPost6Title: 'How to Secure Your Crypto: Wallets, Seed Phrases & Best Practices', blogPost6Desc: 'Complete security guide — hot vs cold wallets and avoiding common scams.', stkAll: 'All', stkStock: 'Stocks', stkEtf: 'ETFs', stkCommodity: 'Commodities', stkIndex: 'Indices', stkResults: 'results', stkSearchPlh: 'Search stocks, ETFs...', stkPage: 'Page', stkOf: 'of' },
      zh: { cryptoAnalyzer: '流动性分析仪', cryptoAnalyzerDesc: '高级流动性及代币分析', cryptoArbitrage: '套利扫描器', cryptoArbitrageDesc: '跨100+交易所价格比较', forexAnalyzer: '外汇分析仪', forexAnalyzerDesc: '货币对分析与信号', blogNav: '博客', blogNavDesc: '加密货币文章与市场指南', blogFtLink: '博客与文章', stkAll: '全部', stkStock: '股票', stkEtf: 'ETF', stkCommodity: '大宗商品', stkIndex: '指数', stkResults: '结果', stkSearchPlh: '搜索股票...', stkPage: '第', stkOf: '共' },
      es: { cryptoAnalyzer: 'Analizador de Liquidez', cryptoAnalyzerDesc: 'Análisis avanzado de liquidez criptográfica', cryptoArbitrage: 'Escáner de Arbitraje', cryptoArbitrageDesc: 'Comparación de precios en 100+ exchanges', forexAnalyzer: 'Analizador Forex', forexAnalyzerDesc: 'Análisis de pares de divisas y señales', blogNav: 'Blog', blogNavDesc: 'Artículos y guías del mercado crypto', blogFtLink: 'Blog y Artículos', blogSectionTitle: 'Últimos Artículos y Análisis', blogViewAll: 'Ver todos los artículos', blogRead: 'Leer →', blogTagAnalysis: 'Análisis de mercado', blogTagGold: 'Oro vs Cripto', blogTagBeginner: 'Principiante', blogTagSecurity: 'Seguridad', blogPost1Title: 'Bitcoin 2025: Guía completa — Halving, ETFs y predicciones de precios', blogPost1Desc: 'Todo sobre el ciclo de halving, ETFs institucionales y perspectivas 2025.', blogPost2Title: 'BRC-20 vs Runes: ¿Cuál es la diferencia? Guía 2025', blogPost2Desc: 'Comparación técnica completa de ambos estándares de tokens en Bitcoin.', blogPost3Title: 'Índice de Miedo y Codicia: Cómo usar el sentimiento para el mercado', blogPost3Desc: 'Aprende a leer el índice y tomar decisiones de compra y venta más inteligentes.', blogPost4Title: 'Oro vs Bitcoin: La comparación definitiva de reserva de valor', blogPost4Desc: 'Rendimiento, volatilidad, escasez — ¿qué activo pertenece a tu cartera?', blogPost5Title: 'Cripto para principiantes: Guía completa 2025', blogPost5Desc: 'Desde los fundamentos de blockchain hasta comprar tu primer Bitcoin.', blogPost6Title: 'Cómo asegurar tu cripto: Carteras, frases semilla y mejores prácticas', blogPost6Desc: 'Guía de seguridad completa — carteras calientes vs frías y evitar estafas.', stkAll: 'Todo', stkStock: 'Acciones', stkEtf: 'ETFs', stkCommodity: 'Materias', stkIndex: 'Índices', stkResults: 'resultados', stkSearchPlh: 'Buscar acciones...', stkPage: 'Pág', stkOf: 'de' },
      pt: { cryptoAnalyzer: 'Analisador de Liquidez', cryptoAnalyzerDesc: 'Análise avançada de liquidez de criptomoedas', cryptoArbitrage: 'Scanner de Arbitragem', cryptoArbitrageDesc: 'Comparação de preços em 100+ exchanges', forexAnalyzer: 'Analisador Forex', forexAnalyzerDesc: 'Análise de pares de moedas e sinais', blogNav: 'Blog', blogNavDesc: 'Artigos e guias do mercado cripto', blogFtLink: 'Blog e Artigos', stkAll: 'Tudo', stkStock: 'Ações', stkEtf: 'ETFs', stkCommodity: 'Commodities', stkIndex: 'Índices', stkResults: 'resultados', stkSearchPlh: 'Pesquisar ações...', stkPage: 'Pág', stkOf: 'de' },
      fr: { cryptoAnalyzer: 'Analyseur de Liquidité', cryptoAnalyzerDesc: 'Analyse avancée de la liquidité crypto', cryptoArbitrage: 'Scanner d\'Arbitrage', cryptoArbitrageDesc: 'Comparaison des prix sur 100+ plateformes', forexAnalyzer: 'Analyseur Forex', forexAnalyzerDesc: 'Analyse des paires de devises et signaux', blogNav: 'Blog', blogNavDesc: 'Articles et guides du marché crypto', blogFtLink: 'Blog & Articles', blogSectionTitle: 'Derniers Articles & Analyses', blogViewAll: 'Voir tous les articles', blogRead: 'Lire →', blogTagAnalysis: 'Analyse du marché', blogTagGold: 'Or vs Crypto', blogTagBeginner: 'Débutant', blogTagSecurity: 'Sécurité', blogPost1Title: 'Bitcoin 2025: Guide complet — Halving, ETFs et prédictions de prix', blogPost1Desc: 'Tout sur le cycle de halving, les ETFs institutionnels et les perspectives 2025.', blogPost2Title: 'BRC-20 vs Runes: Quelle est la différence? Guide 2025', blogPost2Desc: 'Comparaison technique complète des deux standards de tokens Bitcoin.', blogPost3Title: 'Indice Peur & Avidité: Comment utiliser le sentiment du marché', blogPost3Desc: 'Apprenez à lire l\'indice pour prendre de meilleures décisions d\'achat et de vente.', blogPost4Title: 'Or vs Bitcoin: La comparaison ultime de la valeur refuge', blogPost4Desc: 'Performance, volatilité, rareté — quel actif appartient à votre portefeuille?', blogPost5Title: 'Crypto pour débutants: Guide complet 2025', blogPost5Desc: 'Des bases de la blockchain à l\'achat de votre premier Bitcoin.', blogPost6Title: 'Comment sécuriser vos cryptos: Portefeuilles et meilleures pratiques', blogPost6Desc: 'Guide de sécurité complet — portefeuilles chauds vs froids et arnaques à éviter.', stkAll: 'Tout', stkStock: 'Actions', stkEtf: 'ETFs', stkCommodity: 'Matières', stkIndex: 'Indices', stkResults: 'résultats', stkSearchPlh: 'Chercher actions...', stkPage: 'Page', stkOf: 'sur' },
      de: { cryptoAnalyzer: 'Liquiditätsanalysator', cryptoAnalyzerDesc: 'Erweiterte Krypto-Liquiditätsanalyse', cryptoArbitrage: 'Arbitrage-Scanner', cryptoArbitrageDesc: 'Preisvergleich auf 100+ Börsen', forexAnalyzer: 'Forex-Analysator', forexAnalyzerDesc: 'Währungspaaranalyse und Signale', blogNav: 'Blog', blogNavDesc: 'Krypto-Artikel und Marktguides', blogFtLink: 'Blog & Artikel', blogSectionTitle: 'Neueste Artikel & Analysen', blogViewAll: 'Alle Artikel anzeigen', blogRead: 'Lesen →', blogTagAnalysis: 'Marktanalyse', blogTagGold: 'Gold vs Krypto', blogTagBeginner: 'Einsteiger', blogTagSecurity: 'Sicherheit', blogPost1Title: 'Bitcoin 2025: Vollständiger Leitfaden — Halving, ETFs & Preisprognosen', blogPost1Desc: 'Alles über den Halving-Zyklus, institutionelle ETFs und den Ausblick 2025.', blogPost2Title: 'BRC-20 vs Runes: Was ist der Unterschied? 2025 Guide', blogPost2Desc: 'Vollständiger technischer Vergleich beider Bitcoin-Token-Standards.', blogPost3Title: 'Fear & Greed Index: Sentiment für das Markt-Timing nutzen', blogPost3Desc: 'Lerne den Index zu lesen und klügere Kauf- und Verkaufsentscheidungen zu treffen.', blogPost4Title: 'Gold vs Bitcoin: Der ultimative Wertaufbewahrungsvergleich', blogPost4Desc: 'Performance, Volatilität, Knappheit — welcher Vermögenswert gehört in Ihr Portfolio?', blogPost5Title: 'Krypto für Anfänger: Vollständiger Starter-Guide 2025', blogPost5Desc: 'Von den Blockchain-Grundlagen bis zum Kauf Ihres ersten Bitcoins.', blogPost6Title: 'Krypto sichern: Wallets, Seed-Phrasen & Best Practices', blogPost6Desc: 'Vollständiger Sicherheitsleitfaden — heiße vs kalte Wallets und Betrug vermeiden.', stkAll: 'Alle', stkStock: 'Aktien', stkEtf: 'ETFs', stkCommodity: 'Rohstoffe', stkIndex: 'Indizes', stkResults: 'Ergebnisse', stkSearchPlh: 'Aktien suchen...', stkPage: 'Seite', stkOf: 'von' },
      it: { cryptoAnalyzer: 'Analizzatore di Liquidità', cryptoAnalyzerDesc: 'Analisi avanzata della liquidità crypto', cryptoArbitrage: 'Scanner di Arbitraggio', cryptoArbitrageDesc: 'Confronto prezzi su 100+ exchange', forexAnalyzer: 'Analizzatore Forex', forexAnalyzerDesc: 'Analisi coppie valutarie e segnali', blogNav: 'Blog', blogNavDesc: 'Articoli e guide sul mercato crypto', blogFtLink: 'Blog e Articoli', stkAll: 'Tutto', stkStock: 'Azioni', stkEtf: 'ETF', stkCommodity: 'Materie', stkIndex: 'Indici', stkResults: 'risultati', stkSearchPlh: 'Cerca azioni...', stkPage: 'Pag', stkOf: 'di' },
      ru: { cryptoAnalyzer: 'Анализатор Ликвидности', cryptoAnalyzerDesc: 'Продвинутый анализ криптовалютной ликвидности', cryptoArbitrage: 'Арбитражный Сканер', cryptoArbitrageDesc: 'Сравнение цен на 100+ биржах', forexAnalyzer: 'Форекс Анализатор', forexAnalyzerDesc: 'Анализ валютных пар и сигналы', blogNav: 'Блог', blogNavDesc: 'Статьи и руководства по крипторынку', blogFtLink: 'Блог и Статьи', blogSectionTitle: 'Последние Статьи и Анализы', blogViewAll: 'Все статьи', blogRead: 'Читать →', blogTagAnalysis: 'Анализ рынка', blogTagGold: 'Золото vs Крипто', blogTagBeginner: 'Начинающий', blogTagSecurity: 'Безопасность', blogPost1Title: 'Bitcoin 2025: Полное руководство — Халвинг, ETF и прогнозы цен', blogPost1Desc: 'Всё о цикле халвинга, институциональных ETF и перспективах 2025 года.', blogPost2Title: 'BRC-20 vs Runes: В чём разница? Руководство 2025', blogPost2Desc: 'Полное техническое сравнение двух стандартов токенов Bitcoin.', blogPost3Title: 'Индекс Страха и Жадности: Как использовать настроения рынка', blogPost3Desc: 'Научитесь читать индекс и принимать более умные решения о покупке и продаже.', blogPost4Title: 'Золото vs Bitcoin: Окончательное сравнение средств сохранения стоимости', blogPost4Desc: 'Доходность, волатильность, дефицит — какой актив подходит для вашего портфеля?', blogPost5Title: 'Криптовалюта для начинающих: Полное руководство 2025', blogPost5Desc: 'От основ блокчейна до покупки первого биткоина.', blogPost6Title: 'Как защитить криптовалюту: Кошельки, сид-фразы и лучшие практики', blogPost6Desc: 'Полное руководство по безопасности — горячие и холодные кошельки.', stkAll: 'Все', stkStock: 'Акции', stkEtf: 'ETF', stkCommodity: 'Сырьё', stkIndex: 'Индексы', stkResults: 'результатов', stkSearchPlh: 'Поиск акций...', stkPage: 'Стр', stkOf: 'из' },
      tr: { cryptoAnalyzer: 'Likidite Analizörü', cryptoAnalyzerDesc: 'Gelişmiş kripto likidite analizi', cryptoArbitrage: 'Arbitraj Tarayıcı', cryptoArbitrageDesc: '100+ borsada fiyat karşılaştırması', forexAnalyzer: 'Forex Analizörü', forexAnalyzerDesc: 'Döviz çifti analizi ve sinyaller', blogNav: 'Blog', blogNavDesc: 'Kripto piyasa makaleleri ve rehberler', blogFtLink: 'Blog ve Makaleler', blogSectionTitle: 'Son Makaleler & Analizler', blogViewAll: 'Tüm makaleleri görüntüle', blogRead: 'Oku →', blogTagAnalysis: 'Piyasa Analizi', blogTagGold: 'Altın vs Kripto', blogTagBeginner: 'Başlangıç', blogTagSecurity: 'Güvenlik', blogPost1Title: 'Bitcoin 2025: Kapsamlı Rehber — Halving, ETF\'ler ve Fiyat Tahminleri', blogPost1Desc: 'Halving döngüsü, kurumsal ETF\'ler ve 2025 görünümü hakkında her şey.', blogPost2Title: 'BRC-20 ve Runes: Fark Nedir? 2025 Rehberi', blogPost2Desc: 'İki Bitcoin token standardının tam teknik karşılaştırması.', blogPost3Title: 'Korku & Açgözlülük Endeksi: Piyasa Zamanlaması için Nasıl Kullanılır', blogPost3Desc: 'Endeksi okumayı ve daha akıllı alım satım kararları vermeyi öğrenin.', blogPost4Title: 'Altın ve Bitcoin: Nihai Değer Deposu Karşılaştırması', blogPost4Desc: 'Performans, volatilite, kıtlık — hangi varlık portföyünüze ait?', blogPost5Title: 'Yeni Başlayanlar için Kripto: Kapsamlı 2025 Başlangıç Rehberi', blogPost5Desc: 'Blockchain temellerinden ilk Bitcoin satın almaya kadar.', blogPost6Title: 'Kriptonuzu Nasıl Güvende Tutarsınız: Cüzdanlar ve En İyi Uygulamalar', blogPost6Desc: 'Tam güvenlik rehberi — sıcak ve soğuk cüzdanlar ve dolandırıcılıktan kaçınma.', stkAll: 'Tümü', stkStock: 'Hisseler', stkEtf: 'ETF', stkCommodity: 'Emtialar', stkIndex: 'Endeksler', stkResults: 'sonuç', stkSearchPlh: 'Hisse ara...', stkPage: 'Sayfa', stkOf: '/' },
      ja: { cryptoAnalyzer: '流動性アナライザー', cryptoAnalyzerDesc: '高度な暗号資産の流動性分析', cryptoArbitrage: 'アービトラージスキャナー', cryptoArbitrageDesc: '100以上の取引所で価格比較', forexAnalyzer: 'FXアナライザー', forexAnalyzerDesc: '通貨ペア分析とシグナル', blogNav: 'ブログ', blogNavDesc: '暗号資産記事とマーケットガイド', blogFtLink: 'ブログと記事', stkAll: 'すべて', stkStock: '株式', stkEtf: 'ETF', stkCommodity: '商品', stkIndex: '指数', stkResults: '件', stkSearchPlh: '株式を検索...', stkPage: 'ページ', stkOf: '/' },
      ko: { cryptoAnalyzer: '유동성 분석기', cryptoAnalyzerDesc: '고급 암호화폐 유동성 분석', cryptoArbitrage: '차익 거래 스캐너', cryptoArbitrageDesc: '100개 이상의 거래소 가격 비교', forexAnalyzer: '외환 분석기', forexAnalyzerDesc: '통화쌍 분석 및 신호', blogNav: '블로그', blogNavDesc: '암호화폐 기사 및 시장 가이드', blogFtLink: '블로그 & 기사', stkAll: '전체', stkStock: '주식', stkEtf: 'ETF', stkCommodity: '원자재', stkIndex: '지수', stkResults: '결과', stkSearchPlh: '주식 검색...', stkPage: '페이지', stkOf: '중' },
      hi: { cryptoAnalyzer: 'तरलता विश्लेषक', cryptoAnalyzerDesc: 'उन्नत क्रिप्टो तरलता विश्लेषण', cryptoArbitrage: 'आर्बिट्रेज स्कैनर', cryptoArbitrageDesc: '100+ एक्सचेंजों में मूल्य तुलना', forexAnalyzer: 'फॉरेक्स विश्लेषक', forexAnalyzerDesc: 'मुद्रा जोड़ी विश्लेषण और संकेत', blogNav: 'ब्लॉग', blogNavDesc: 'क्रिप्टो बाजार लेख और गाइड', blogFtLink: 'ब्लॉग और लेख', stkAll: 'सभी', stkStock: 'शेयर', stkEtf: 'ETF', stkCommodity: 'जिंस', stkIndex: 'सूचकांक', stkResults: 'परिणाम', stkSearchPlh: 'शेयर खोजें...', stkPage: 'पृष्ठ', stkOf: 'का' },
      nl: { cryptoAnalyzer: 'Liquiditeitsanalysator', cryptoAnalyzerDesc: 'Geavanceerde crypto-liquiditeitsanalyse', cryptoArbitrage: 'Arbitrage Scanner', cryptoArbitrageDesc: 'Prijsvergelijking over 100+ beurzen', forexAnalyzer: 'Forex Analysator', forexAnalyzerDesc: 'Valutapaaranalyse en signalen', blogNav: 'Blog', blogNavDesc: 'Crypto artikelen en marktgidsen', blogFtLink: 'Blog & Artikelen', stkAll: 'Alles', stkStock: 'Aandelen', stkEtf: 'ETF', stkCommodity: 'Grondstoffen', stkIndex: 'Indices', stkResults: 'resultaten', stkSearchPlh: 'Zoek aandelen...', stkPage: 'Pag', stkOf: 'van' },
      pl: { cryptoAnalyzer: 'Analizator Płynności', cryptoAnalyzerDesc: 'Zaawansowana analiza płynności kryptowalut', cryptoArbitrage: 'Skaner Arbitrażowy', cryptoArbitrageDesc: 'Porównanie cen na 100+ giełdach', forexAnalyzer: 'Analizator Forex', forexAnalyzerDesc: 'Analiza par walutowych i sygnały', blogNav: 'Blog', blogNavDesc: 'Artykuły i przewodniki rynku krypto', blogFtLink: 'Blog i Artykuły', stkAll: 'Wszystko', stkStock: 'Akcje', stkEtf: 'ETF', stkCommodity: 'Surowce', stkIndex: 'Indeksy', stkResults: 'wyników', stkSearchPlh: 'Szukaj akcji...', stkPage: 'Str', stkOf: 'z' },
      th: { cryptoAnalyzer: 'เครื่องวิเคราะห์สภาพคล่อง', cryptoAnalyzerDesc: 'การวิเคราะห์สภาพคล่องของคริปโตขั้นสูง', cryptoArbitrage: 'สแกนเนอร์อาร์บิทราจ', cryptoArbitrageDesc: 'เปรียบเทียบราคาในกว่า 100 แพลตฟอร์ม', forexAnalyzer: 'วิเคราะห์ฟอเร็กซ์', forexAnalyzerDesc: 'วิเคราะห์คู่สกุลเงินและสัญญาณ', blogNav: 'บล็อก', blogNavDesc: 'บทความและคู่มือตลาดคริปโต', blogFtLink: 'บล็อกและบทความ', stkAll: 'ทั้งหมด', stkStock: 'หุ้น', stkEtf: 'ETF', stkCommodity: 'สินค้า', stkIndex: 'ดัชนี', stkResults: 'ผล', stkSearchPlh: 'ค้นหาหุ้น...', stkPage: 'หน้า', stkOf: 'จาก' },
      vi: { cryptoAnalyzer: 'Trình Phân Tích Thanh Khoản', cryptoAnalyzerDesc: 'Phân tích thanh khoản tiền điện tử nâng cao', cryptoArbitrage: 'Máy Quét Chênh Lệch Giá', cryptoArbitrageDesc: 'So sánh giá trên 100+ sàn giao dịch', forexAnalyzer: 'Phân Tích Forex', forexAnalyzerDesc: 'Phân tích cặp tiền tệ và tín hiệu', blogNav: 'Blog', blogNavDesc: 'Bài viết và hướng dẫn thị trường crypto', blogFtLink: 'Blog & Bài Viết', stkAll: 'Tất cả', stkStock: 'Cổ phiếu', stkEtf: 'ETF', stkCommodity: 'Hàng hóa', stkIndex: 'Chỉ số', stkResults: 'kết quả', stkSearchPlh: 'Tìm cổ phiếu...', stkPage: 'Trang', stkOf: 'của' },
      id: { cryptoAnalyzer: 'Penganalisis Likuiditas', cryptoAnalyzerDesc: 'Analisis likuiditas kripto tingkat lanjut', cryptoArbitrage: 'Pemindai Arbitrase', cryptoArbitrageDesc: 'Perbandingan harga di 100+ bursa', forexAnalyzer: 'Penganalisis Forex', forexAnalyzerDesc: 'Analisis pasangan mata uang dan sinyal', blogNav: 'Blog', blogNavDesc: 'Artikel dan panduan pasar kripto', blogFtLink: 'Blog & Artikel', stkAll: 'Semua', stkStock: 'Saham', stkEtf: 'ETF', stkCommodity: 'Komoditas', stkIndex: 'Indeks', stkResults: 'hasil', stkSearchPlh: 'Cari saham...', stkPage: 'Hal', stkOf: 'dari' },
      uk: { cryptoAnalyzer: 'Аналізатор Ліквідності', cryptoAnalyzerDesc: 'Розширений аналіз криптовалютної ліквідності', cryptoArbitrage: 'Арбітражний Сканер', cryptoArbitrageDesc: 'Порівняння цін на 100+ біржах', forexAnalyzer: 'Аналізатор Форекс', forexAnalyzerDesc: 'Аналіз валютних пар і сигнали', blogNav: 'Блог', blogNavDesc: 'Статті та посібники крипторинку', blogFtLink: 'Блог і Статті', stkAll: 'Все', stkStock: 'Акції', stkEtf: 'ETF', stkCommodity: 'Сировина', stkIndex: 'Індекси', stkResults: 'результатів', stkSearchPlh: 'Пошук акцій...', stkPage: 'Стор', stkOf: 'з' },
      fa: { cryptoAnalyzer: 'تحلیلگر نقدینگی', cryptoAnalyzerDesc: 'تحلیل پیشرفته نقدینگی ارزهای دیجیتال', cryptoArbitrage: 'اسکنر آربیتراژ', cryptoArbitrageDesc: 'مقایسه قیمت در بیش از ۱۰۰ صرافی', forexAnalyzer: 'تحلیلگر فارکس', forexAnalyzerDesc: 'تحلیل جفت ارزها و سیگنال‌ها', blogNav: 'وبلاگ', blogNavDesc: 'مقالات و راهنمای بازار ارز دیجیتال', blogFtLink: 'وبلاگ و مقالات', stkAll: 'همه', stkStock: 'سهام', stkEtf: 'ETF', stkCommodity: 'کالاها', stkIndex: 'شاخص', stkResults: 'نتیجه', stkSearchPlh: 'جستجوی سهام...', stkPage: 'صفحه', stkOf: 'از' },
      he: { cryptoAnalyzer: 'נתח נזילות', cryptoAnalyzerDesc: 'ניתוח נזילות קריפטו מתקדם', cryptoArbitrage: 'סורק ארביטראז\'', cryptoArbitrageDesc: 'השוואת מחירים ב-100+ בורסות', forexAnalyzer: 'מנתח פורקס', forexAnalyzerDesc: 'ניתוח זוגות מטבע ואותות', blogNav: 'בלוג', blogNavDesc: 'מאמרים ומדריכים לשוק הקריפטו', blogFtLink: 'בלוג ומאמרים', stkAll: 'הכל', stkStock: 'מניות', stkEtf: 'ETF', stkCommodity: 'סחורות', stkIndex: 'מדדים', stkResults: 'תוצאות', stkSearchPlh: 'חיפוש מניות...', stkPage: 'עמוד', stkOf: 'מתוך' },
      fi: { cryptoAnalyzer: 'Likviditeettianalysaattori', cryptoAnalyzerDesc: 'Edistynyt kryptojen likviditeettianalyysi', cryptoArbitrage: 'Arbitraasiskanneri', cryptoArbitrageDesc: 'Hintavertailu yli 100 pörssissä', forexAnalyzer: 'Forex-analysaattori', forexAnalyzerDesc: 'Valuuttaparien analyysi ja signaalit', blogNav: 'Blogi', blogNavDesc: 'Krypto-artikkelit ja markkinaoppaat', blogFtLink: 'Blogi & Artikkelit', stkAll: 'Kaikki', stkStock: 'Osakkeet', stkEtf: 'ETF', stkCommodity: 'Raaka-aineet', stkIndex: 'Indeksit', stkResults: 'tulosta', stkSearchPlh: 'Hae osakkeita...', stkPage: 'Sivu', stkOf: '/' },
      ro: { cryptoAnalyzer: 'Analizor de Lichiditate', cryptoAnalyzerDesc: 'Analiza avansată a lichidității', cryptoArbitrage: 'Scanner de Arbitraj', cryptoArbitrageDesc: 'Comparare prețuri pe 100+ burse', forexAnalyzer: 'Analizor Forex', forexAnalyzerDesc: 'Analiză perechi valutare și semnale', blogNav: 'Blog', blogNavDesc: 'Articole și ghiduri de piață crypto', blogFtLink: 'Blog și Articole' },
      el: { cryptoAnalyzer: 'Αναλυτής Ρευστότητας', cryptoAnalyzerDesc: 'Προηγμένη ανάλυση ρευστότητας κρυπτονομισμάτων', cryptoArbitrage: 'Σαρωτής Αρμπιτράζ', cryptoArbitrageDesc: 'Σύγκριση τιμών σε 100+ ανταλλακτήρια', forexAnalyzer: 'Αναλυτής Forex', forexAnalyzerDesc: 'Ανάλυση ζευγών νομισμάτων και σήματα', blogNav: 'Ιστολόγιο', blogNavDesc: 'Άρθρα και οδηγοί αγοράς κρυπτο', blogFtLink: 'Ιστολόγιο & Άρθρα' },
      hu: { cryptoAnalyzer: 'Likviditás Elemző', cryptoAnalyzerDesc: 'Fejlett kripto likviditás elemzés', cryptoArbitrage: 'Arbitrázs Szkenner', cryptoArbitrageDesc: 'Árösszehasonlítás 100+ tőzsdén', forexAnalyzer: 'Forex Elemző', forexAnalyzerDesc: 'Devizapár elemzés és jelzések', blogNav: 'Blog', blogNavDesc: 'Kripto piaci cikkek és útmutatók', blogFtLink: 'Blog és Cikkek' },
      sv: { cryptoAnalyzer: 'Likviditetsanalysator', cryptoAnalyzerDesc: 'Avancerad krypto likviditetsanalys', cryptoArbitrage: 'Arbitrageskanner', cryptoArbitrageDesc: 'Prisjämförelse på 100+ börser', forexAnalyzer: 'Forex-analysator', forexAnalyzerDesc: 'Valutaparanalys och signaler', blogNav: 'Blogg', blogNavDesc: 'Kryptoartiklar och marknadsguider', blogFtLink: 'Blogg & Artiklar' },
      cs: { cryptoAnalyzer: 'Analyzátor Likvidity', cryptoAnalyzerDesc: 'Pokročilá analýza krypto likvidity', cryptoArbitrage: 'Arbitrážní Skener', cryptoArbitrageDesc: 'Porovnání cen na 100+ burzách', forexAnalyzer: 'Forex Analyzátor', forexAnalyzerDesc: 'Analýza měnových párů a signály', blogNav: 'Blog', blogNavDesc: 'Krypto články a průvodci trhem', blogFtLink: 'Blog a Články' },
      ms: { cryptoAnalyzer: 'Penganalisis Kecairan', cryptoAnalyzerDesc: 'Analisis kecairan kripto lanjutan', cryptoArbitrage: 'Pengimbas Arbitraj', cryptoArbitrageDesc: 'Perbandingan harga di 100+ bursa', forexAnalyzer: 'Penganalisis Forex', forexAnalyzerDesc: 'Analisis pasangan mata wang dan isyarat', blogNav: 'Blog', blogNavDesc: 'Artikel dan panduan pasaran kripto', blogFtLink: 'Blog & Artikel' },
      bn: { cryptoAnalyzer: 'তারল্য বিশ্লেষক', cryptoAnalyzerDesc: 'উন্নত ক্রিপ্টো তারল্য বিশ্লেষণ', cryptoArbitrage: 'আর্বিট্রেজ স্ক্যানার', cryptoArbitrageDesc: '১০০+ এক্সচেঞ্জে মূল্য তুলনা', forexAnalyzer: 'ফরেক্স বিশ্লেষক', forexAnalyzerDesc: 'মুদ্রা জোড়া বিশ্লেষণ ও সংকেত', blogNav: 'ব্লগ', blogNavDesc: 'ক্রিপ্টো বাজার নিবন্ধ ও গাইড', blogFtLink: 'ব্লগ ও নিবন্ধ' },
      sw: { cryptoAnalyzer: 'Mchambuzi wa Ukwasi', cryptoAnalyzerDesc: 'Uchambuzi wa hali ya juu wa ukwasi wa crypto', cryptoArbitrage: 'Kichunguzi cha Arbitrage', cryptoArbitrageDesc: 'Ulinganisho wa bei katika masoko 100+', forexAnalyzer: 'Mchambuzi wa Forex', forexAnalyzerDesc: 'Uchambuzi wa jozi za sarafu na ishara', blogNav: 'Blogu', blogNavDesc: 'Makala na mwongozo wa soko la crypto', blogFtLink: 'Blogu na Makala' }
    };
    for (let k in T) {
      Object.assign(T[k], analyzerLangs[k] || analyzerLangs.en);
    }

    const fb = T.en; LANGS.forEach(l => { if (!T[l.c]) T[l.c] = { ...fb } });
    // Nav dropdown i18n
    const _ni = { ar: { navSections: 'أقسام الموقع', navCryptoDesc: '+10,000 عملة • أسعار لحظية • تحليل AI', navExchDesc: '500 منصة عالمية • روابط تسجيل مباشرة', navMetalsDesc: 'الذهب • الفضة • البلاتين • البلاديوم', navStocksDesc: 'أسهم مرمّزة • صناديق ETF • بيانات Yahoo Finance', tabCommodities: 'NFT Collections', tabStocks: 'الأسهم وETF', aiPredictorTitle: 'منبئ الأسعار بالذكاء الاصطناعي', aiPredictorDesc: 'توقع الأسعار 48 ساعة • 5 طبقات AI', aiPredictorBadge: 'جديد', tokenVestingTitle: 'جدول فتح الرموز', tokenVestingDesc: 'مواعيد فك القفل • جداول الاستحقاق', tokenVestingBadge: 'جديد' }, en: { navSections: 'Site Sections', navCryptoDesc: '10,000+ Coins • Real-time Prices • AI Analysis', navExchDesc: '500 Global Exchanges • Direct Registration', navMetalsDesc: 'Gold • Silver • Platinum • Palladium', navStocksDesc: 'Tokenized Stocks • ETFs • Yahoo Finance Data', tabCommodities: 'NFT Collections', tabStocks: 'Stocks & ETFs', aiPredictorTitle: 'AI Price Predictor', aiPredictorDesc: '48h price forecast • 5-layer AI', aiPredictorBadge: 'NEW', tokenVestingTitle: 'Token Vesting & Unlocks', tokenVestingDesc: 'Vesting schedules • Unlock dates', tokenVestingBadge: 'NEW' }, zh: { navSections: '网站板块', navCryptoDesc: '5000+ 币种 • 实时价格 • AI分析', navExchDesc: '500家全球交易所 • 直接注册链接', navMetalsDesc: '黄金 • 白银 • 铂金 • 钯金', navStocksDesc: '代币化股票 • ETF • Yahoo Finance数据', tabCommodities: '贵金属', tabStocks: '股票和ETF', aiPredictorTitle: 'AI价格预测器', aiPredictorDesc: '48小时价格预测 • 5层AI分析', aiPredictorBadge: '新', tokenVestingTitle: '代币解锁日历', tokenVestingDesc: '归属计划 • 解锁日期', tokenVestingBadge: '新' }, es: { navSections: 'Secciones', navCryptoDesc: '5000+ Monedas • Precios en Vivo • Análisis IA', navExchDesc: '500 Exchanges Globales • Registro Directo', navMetalsDesc: 'Oro • Plata • Platino • Paladio', navStocksDesc: 'Acciones Tokenizadas • ETFs • Yahoo Finance', tabCommodities: 'Metales Preciosos', tabStocks: 'Acciones y ETFs', aiPredictorTitle: 'Predictor de Precios IA', aiPredictorDesc: 'Pronóstico 48h • IA 5 capas', aiPredictorBadge: 'NUEVO', tokenVestingTitle: 'Vesting de Tokens', tokenVestingDesc: 'Calendarios de bloqueo • Fechas de desbloqueo', tokenVestingBadge: 'NUEVO' }, pt: { navSections: 'Seções', navCryptoDesc: '5000+ Moedas • Preços em Tempo Real • IA', navExchDesc: '500 Exchanges Globais • Registro Direto', navMetalsDesc: 'Ouro • Prata • Platina • Paládio', navStocksDesc: 'Ações Tokenizadas • ETFs • Yahoo Finance', tabCommodities: 'Metais Preciosos', tabStocks: 'Ações e ETFs', aiPredictorTitle: 'Preditor de Preços IA', aiPredictorDesc: 'Previsão 48h • IA 5 camadas', aiPredictorBadge: 'NOVO', tokenVestingTitle: 'Vesting de Tokens', tokenVestingDesc: 'Cronogramas • Datas de desbloqueio', tokenVestingBadge: 'NOVO' }, fr: { navSections: 'Sections', navCryptoDesc: '10,000+ Cryptos • Prix en Direct • Analyse IA', navExchDesc: '500 Plateformes Mondiales • Inscription Directe', navMetalsDesc: 'Or • Argent • Platine • Palladium', navStocksDesc: 'Actions Tokenisées • ETFs • Yahoo Finance', tabCommodities: 'Métaux Précieux', tabStocks: 'Actions et ETFs', aiPredictorTitle: 'Prédicteur de Prix IA', aiPredictorDesc: 'Prévision 48h • IA 5 couches', aiPredictorBadge: 'NOUVEAU', tokenVestingTitle: 'Vesting de Tokens', tokenVestingDesc: 'Calendriers de vesting • Déblocages', tokenVestingBadge: 'NOUVEAU' }, de: { navSections: 'Bereiche', navCryptoDesc: '10,000+ Coins • Echtzeitpreise • KI-Analyse', navExchDesc: '500 Globale Börsen • Direkte Registrierung', navMetalsDesc: 'Gold • Silber • Platin • Palladium', navStocksDesc: 'Tokenisierte Aktien • ETFs • Yahoo Finance', tabCommodities: 'Edelmetalle', tabStocks: 'Aktien & ETFs', aiPredictorTitle: 'KI-Preisvorhersage', aiPredictorDesc: '48h Preisprognose • 5-Schicht-KI', aiPredictorBadge: 'NEU', tokenVestingTitle: 'Token-Vesting', tokenVestingDesc: 'Vesting-Pläne • Freigabedaten', tokenVestingBadge: 'NEU' }, it: { navSections: 'Sezioni', navCryptoDesc: '10,000+ Crypto • Prezzi in Tempo Reale • IA', navExchDesc: '500 Exchange Globali • Registrazione Diretta', navMetalsDesc: 'Oro • Argento • Platino • Palladio', navStocksDesc: 'Azioni Tokenizzate • ETF • Yahoo Finance', tabCommodities: 'Metalli Preziosi', tabStocks: 'Azioni ed ETF', aiPredictorTitle: 'Predittore Prezzi IA', aiPredictorDesc: 'Previsione 48h • IA 5 livelli', aiPredictorBadge: 'NUOVO', tokenVestingTitle: 'Vesting Token', tokenVestingDesc: 'Pianificazione • Date di sblocco', tokenVestingBadge: 'NUOVO' }, ru: { navSections: 'Разделы', navCryptoDesc: '5000+ Монет • Цены в Реальном Времени • ИИ', navExchDesc: '500 Биржи • Прямая Регистрация', navMetalsDesc: 'Золото • Серебро • Платина • Палладий', navStocksDesc: 'Токенизированные Акции • ETF • Yahoo Finance', tabCommodities: 'Драгоценные Металлы', tabStocks: 'Акции и ETF', aiPredictorTitle: 'ИИ Прогнозатор Цен', aiPredictorDesc: 'Прогноз на 48ч • ИИ 5 уровней', aiPredictorBadge: 'НОВЫЙ', tokenVestingTitle: 'Вестинг Токенов', tokenVestingDesc: 'Расписание вестинга • Даты разблокировки', tokenVestingBadge: 'НОВЫЙ' }, tr: { navSections: 'Bölümler', navCryptoDesc: '10,000+ Coin • Anlık Fiyatlar • AI Analizi', navExchDesc: '500 Küresel Borsa • Doğrudan Kayıt', navMetalsDesc: 'Altın • Gümüş • Platin • Paladyum', navStocksDesc: 'Tokenize Hisseler • ETF • Yahoo Finance', tabCommodities: 'Değerli Metaller', tabStocks: 'Hisseler ve ETF', aiPredictorTitle: 'AI Fiyat Tahmincisi', aiPredictorDesc: '48 saatlik tahmin • 5 katman AI', aiPredictorBadge: 'YENİ', tokenVestingTitle: 'Token Vesting', tokenVestingDesc: 'Vesting takvimleri • Kilit açma tarihleri', tokenVestingBadge: 'YENİ' }, ja: { navSections: 'セクション', navCryptoDesc: '5000+ コイン • リアルタイム価格 • AI分析', navExchDesc: '500 取引所 • 直接登録リンク', navMetalsDesc: '金 • 銀 • プラチナ • パラジウム', navStocksDesc: 'トークン化株式 • ETF • Yahoo Finance', tabCommodities: '貴金属', tabStocks: '株式＆ETF', aiPredictorTitle: 'AI価格予測ツール', aiPredictorDesc: '48時間予測 • 5層AI分析', aiPredictorBadge: '新機能', tokenVestingTitle: 'トークンベスティング', tokenVestingDesc: 'ベスティングスケジュール • ロック解除日', tokenVestingBadge: '新機能' }, ko: { navSections: '섹션', navCryptoDesc: '5000+ 코인 • 실시간 가격 • AI 분석', navExchDesc: '500 거래소 • 직접 가입', navMetalsDesc: '금 • 은 • 백금 • 팔라듐', navStocksDesc: '토큰화 주식 • ETF • Yahoo Finance', tabCommodities: '귀금속', tabStocks: '주식 & ETF', aiPredictorTitle: 'AI 가격 예측기', aiPredictorDesc: '48시간 예측 • 5계층 AI', aiPredictorBadge: '신규', tokenVestingTitle: '토큰 베스팅', tokenVestingDesc: '베스팅 일정 • 잠금 해제 날짜', tokenVestingBadge: '신규' }, hi: { navSections: 'अनुभाग', navCryptoDesc: '5000+ कॉइन • रीयल-टाइम • AI विश्लेषण', navExchDesc: '500 एक्सचेंज • सीधा पंजीकरण', navMetalsDesc: 'सोना • चाँदी • प्लैटिनम • पैलेडियम', navStocksDesc: 'टोकनाइज़्ड स्टॉक • ETF • Yahoo Finance', tabCommodities: 'कीमती धातु', tabStocks: 'स्टॉक और ETF', aiPredictorTitle: 'AI मूल्य पूर्वानुमान', aiPredictorDesc: '48 घंटे का पूर्वानुमान • 5-परत AI', aiPredictorBadge: 'नया', tokenVestingTitle: 'टोकन वेस्टिंग', tokenVestingDesc: 'वेस्टिंग शेड्यूल • अनलॉक तारीखें', tokenVestingBadge: 'नया' }, nl: { navSections: 'Secties', navCryptoDesc: '10,000+ Coins • Realtime Prijzen • AI-Analyse', navExchDesc: '500 Wereldwijde Beurzen • Directe Registratie', navMetalsDesc: 'Goud • Zilver • Platina • Palladium', navStocksDesc: 'Getokeniseerde Aandelen • ETFs • Yahoo Finance', tabCommodities: 'Edelmetalen', tabStocks: 'Aandelen & ETFs', aiPredictorTitle: 'AI Prijsvoorspeller', aiPredictorDesc: '48u voorspelling • 5-laags AI', aiPredictorBadge: 'NIEUW', tokenVestingTitle: 'Token Vesting', tokenVestingDesc: 'Vesting schema\'s • Ontgrendeldata', tokenVestingBadge: 'NIEUW' }, pl: { navSections: 'Sekcje', navCryptoDesc: '5000+ Kryptowalut • Ceny na Żywo • AI', navExchDesc: '500 Giełdy • Bezpośrednia Rejestracja', navMetalsDesc: 'Złoto • Srebro • Platyna • Pallad', navStocksDesc: 'Tokenizowane Akcje • ETF • Yahoo Finance', tabCommodities: 'Metale Szlachetne', tabStocks: 'Akcje i ETF', aiPredictorTitle: 'Predyktor Cen AI', aiPredictorDesc: 'Prognoza 48h • AI 5 warstw', aiPredictorBadge: 'NOWY', tokenVestingTitle: 'Vesting Tokenów', tokenVestingDesc: 'Harmonogramy vestingu • Daty odblokowania', tokenVestingBadge: 'NOWY' }, th: { navSections: 'หมวดหมู่', navCryptoDesc: '5000+ เหรียญ • ราคาเรียลไทม์ • AI', navExchDesc: '500 แพลตฟอร์ม • สมัครตรง', navMetalsDesc: 'ทอง • เงิน • แพลทินัม • แพลเลเดียม', navStocksDesc: 'หุ้นโทเค็น • ETF • Yahoo Finance', tabCommodities: 'โลหะมีค่า', tabStocks: 'หุ้นและ ETF', aiPredictorTitle: 'ตัวทำนายราคา AI', aiPredictorDesc: 'พยากรณ์ 48 ชม. • AI 5 ชั้น', aiPredictorBadge: 'ใหม่', tokenVestingTitle: 'Token Vesting', tokenVestingDesc: 'ตารางเวสติ้ง • วันปลดล็อค', tokenVestingBadge: 'ใหม่' }, vi: { navSections: 'Danh Mục', navCryptoDesc: '10,000+ Coin • Giá Thời Gian Thực • AI', navExchDesc: '500 Sàn Toàn Cầu • Đăng Ký Trực Tiếp', navMetalsDesc: 'Vàng • Bạc • Bạch Kim • Palladium', navStocksDesc: 'Cổ Phiếu Token • ETF • Yahoo Finance', tabCommodities: 'Kim Loại Quý', tabStocks: 'Cổ Phiếu & ETF', aiPredictorTitle: 'Dự Báo Giá AI', aiPredictorDesc: 'Dự báo 48h • AI 5 lớp', aiPredictorBadge: 'MỚI', tokenVestingTitle: 'Vesting Token', tokenVestingDesc: 'Lịch vesting • Ngày mở khóa', tokenVestingBadge: 'MỚI' }, id: { navSections: 'Bagian', navCryptoDesc: '5000+ Koin • Harga Real-time • AI', navExchDesc: '500 Bursa Global • Registrasi Langsung', navMetalsDesc: 'Emas • Perak • Platinum • Paladium', navStocksDesc: 'Saham Token • ETF • Yahoo Finance', tabCommodities: 'Logam Mulia', tabStocks: 'Saham & ETF', aiPredictorTitle: 'Prediktor Harga AI', aiPredictorDesc: 'Prediksi 48j • AI 5 lapisan', aiPredictorBadge: 'BARU', tokenVestingTitle: 'Token Vesting', tokenVestingDesc: 'Jadwal vesting • Tanggal buka kunci', tokenVestingBadge: 'BARU' }, uk: { navSections: 'Розділи', navCryptoDesc: '5000+ Монет • Ціни в Реальному Часі • ШІ', navExchDesc: '500 Біржі • Пряма Реєстрація', navMetalsDesc: 'Золото • Срібло • Платина • Паладій', navStocksDesc: 'Токенізовані Акції • ETF • Yahoo Finance', tabCommodities: 'Дорогоцінні Метали', tabStocks: 'Акції та ETF', aiPredictorTitle: 'ШІ Прогнозатор Цін', aiPredictorDesc: 'Прогноз на 48год • ШІ 5 рівнів', aiPredictorBadge: 'НОВИЙ', tokenVestingTitle: 'Вестинг Токенів', tokenVestingDesc: 'Розклад вестингу • Дати розблокування', tokenVestingBadge: 'НОВИЙ' }, fa: { navSections: 'بخش‌ها', navCryptoDesc: '+5000 ارز • قیمت لحظه‌ای • تحلیل AI', navExchDesc: '500 صرافی • ثبت‌نام مستقیم', navMetalsDesc: 'طلا • نقره • پلاتین • پالادیوم', navStocksDesc: 'سهام توکنیزه • ETF • Yahoo Finance', tabCommodities: 'فلزات گرانبها', tabStocks: 'سهام و ETF', aiPredictorTitle: 'پیش‌بین قیمت AI', aiPredictorDesc: 'پیش‌بینی ۴۸ساعته • هوش مصنوعی ۵ لایه', aiPredictorBadge: 'جدید', tokenVestingTitle: 'وستینگ توکن', tokenVestingDesc: 'برنامه وستینگ • تاریخ‌های آزادسازی', tokenVestingBadge: 'جدید' }, he: { navSections: 'מדורים', navCryptoDesc: '+5000 מטבעות • מחירים בזמן אמת • AI', navExchDesc: '500 בורסות • הרשמה ישירה', navMetalsDesc: 'זהב • כסף • פלטינה • פלדיום', navStocksDesc: 'מניות מטוקנות • ETF • Yahoo Finance', tabCommodities: 'מתכות יקרות', tabStocks: 'מניות ו-ETF', aiPredictorTitle: 'מנבא מחירים AI', aiPredictorDesc: 'תחזית 48 שעות • AI 5 שכבות', aiPredictorBadge: 'חדש', tokenVestingTitle: 'וסטינג טוקנים', tokenVestingDesc: 'לוח זמנים • תאריכי שחרור', tokenVestingBadge: 'חדש' }, fi: { navSections: 'Osiot', navCryptoDesc: '5000+ Kolikkoa • Reaaliaikahinnat • AI', navExchDesc: '500 Pörssiä • Suorarekisteröinti', navMetalsDesc: 'Kulta • Hopea • Platina • Palladium', navStocksDesc: 'Tokenisoidut Osakkeet • ETF • Yahoo Finance', tabCommodities: 'Jalometallit', tabStocks: 'Osakkeet & ETF', aiPredictorTitle: 'AI Hintaennustaja', aiPredictorDesc: '48h ennuste • 5-kerros AI', aiPredictorBadge: 'UUSI', tokenVestingTitle: 'Token Vesting', tokenVestingDesc: 'Vesting-aikataulut • Vapautuspäivät', tokenVestingBadge: 'UUSI' } };
    Object.keys(T).forEach(l => { const n = _ni[l] || _ni.en; Object.assign(T[l], n) });

    const NETS = [{ id: 'ethereum', n: 'Ethereum (ERC-20)', i: '⟠' }, { id: 'binance-smart-chain', n: 'BNB Chain (BEP-20)', i: '🔶' }, { id: 'solana', n: 'Solana (SOL)', i: '◎' }, { id: 'polygon-pos', n: 'Polygon', i: '⬡' }, { id: 'arbitrum-one', n: 'Arbitrum', i: '🔵' }, { id: 'optimistic-ethereum', n: 'Optimism', i: '🔴' }, { id: 'avalanche', n: 'Avalanche', i: '🔺' }, { id: 'fantom', n: 'Fantom', i: '👻' }, { id: 'cronos', n: 'Cronos', i: '🔷' }, { id: 'base', n: 'Base', i: '🔵' }, { id: 'tron', n: 'TRON (TRC-20)', i: '⚡' }, { id: 'bitcoin', n: 'Bitcoin', i: '₿' }, { id: 'cardano', n: 'Cardano', i: '🔵' }, { id: 'polkadot', n: 'Polkadot', i: '⚫' }, { id: 'cosmos', n: 'Cosmos', i: '⚛️' }, { id: 'near-protocol', n: 'NEAR', i: '🟢' }, { id: 'algorand', n: 'Algorand', i: '⬢' }, { id: 'stellar', n: 'Stellar', i: '✦' }, { id: 'celo', n: 'Celo', i: '🟡' }, { id: 'moonbeam', n: 'Moonbeam', i: '🌙' }, { id: 'kava', n: 'Kava', i: '🟠' }, { id: 'osmosis', n: 'Osmosis', i: '🧪' }, { id: 'sui', n: 'Sui', i: '💧' }, { id: 'aptos', n: 'Aptos', i: '🅰️' }, { id: 'mantle', n: 'Mantle', i: '🟩' }, { id: 'linea', n: 'Linea', i: '🔵' }, { id: 'scroll', n: 'Scroll', i: '📜' }, { id: 'zksync', n: 'zkSync', i: '🔐' }, { id: 'manta-pacific', n: 'Manta', i: '🐋' }, { id: 'blast', n: 'Blast', i: '💥' }];

    // Network token mapping
    const NET_TOKENS = {
      'ethereum': ['ETH', 'USDT', 'USDC', 'DAI', 'WBTC', 'STETH', 'WSTETH', 'LINK', 'UNI', 'AAVE', 'MKR', 'SNX', 'COMP', 'SUSHI', 'CRV', 'LDO', 'RPL', 'ENS', 'DYDX', '1INCH', 'GRT', 'FET', 'RNDR', 'IMX', 'MANA', 'SAND', 'AXS', 'APE', 'PEPE', 'SHIB', 'FLOKI', 'WLD', 'ARB', 'OP', 'BLUR', 'MASK', 'CHZ', 'BAT', 'ZRX', 'STORJ', 'ANKR', 'GNO', 'YFI', 'BAL', 'OCEAN', 'BAND', 'NMR', 'PERP', 'OMG', 'SKL', 'CELR', 'RLC', 'OXT', 'PAXG', 'FRAX', 'LUSD', 'PYUSD', 'AMPL', 'OHM', 'FXS', 'CVX', 'INDEX', 'REQ', 'POWR', 'KNC', 'ANT', 'WOO', 'DODO', 'API3', 'BADGER', 'ALPHA', 'IDEX', 'BNT', 'HOPR', 'ERC20', 'WETH', 'WEETH', 'RETH', 'CBETH', 'LIDO', 'PENDLE', 'SSV', 'EIGEN', 'ETHFI', 'ONDO', 'ENA', 'RSR', 'ACH', 'AGI', 'AGIX', 'AIOZ', 'ALEPH', 'ALICE', 'ALPHA', 'ALT', 'AMP', 'ANKR', 'APENFT', 'APE', 'ARPA', 'AUDIO', 'AVAX', 'BICO', 'BONE', 'BTCST', 'BTRST', 'BUSD', 'C98', 'CELR', 'CERE', 'CFX', 'CHESS', 'COMBO', 'COTI', 'CQT', 'CTSI', 'CVP', 'DENT', 'DESO', 'DEXT', 'DIA', 'DODO', 'DREP', 'DUSK', 'ELF', 'ERN', 'EURC', 'FET', 'FIDA', 'FLM', 'FLUX', 'FOR', 'FORTH', 'FTM', 'FUN', 'GAL', 'GHST', 'GLM', 'GODS', 'GTC', 'GRT', 'GTO', 'GUSD', 'HBAR', 'HIFI', 'HIGH', 'HOOK', 'HOT', 'IDEX', 'ILV', 'IMX', 'INJ', 'IOST', 'IOTX', 'JASMY', 'JOE', 'JST', 'KDA', 'KEY', 'KNC', 'LCX', 'LINA', 'LIT', 'LOKA', 'LOOKS', 'LPT', 'LRC', 'LUNC', 'LYXE', 'MAGIC', 'MANA', 'MCO2', 'MDT', 'METIS', 'MINA', 'MKR', 'MLN', 'MOB', 'MTL', 'MULTI', 'MYRIA', 'NKN', 'NMR', 'NU', 'OCEAN', 'OGN', 'OMG', 'ONE', 'ONT', 'OOE', 'ORAI', 'OXT', 'PAXG', 'PEOPLE', 'PERP', 'PHA', 'PHB', 'PLA', 'POLS', 'POND', 'PORTAL', 'PROM', 'PROS', 'PUNDIX', 'QKC', 'QNT', 'RARE', 'RBN', 'REN', 'REP', 'REQ', 'RIF', 'RLC', 'RNDR', 'RPL', 'RSR', 'SAND', 'SANTOS', 'SAR', 'SC', 'SCRT', 'SFP', 'SHIB', 'SKL', 'SLP', 'SNFT', 'SNT', 'SNX', 'SOC', 'SPELL', 'SRM', 'SSV', 'STARL', 'STEEM', 'STETH', 'STMX', 'STORJ', 'STX', 'SUKU', 'SUPER', 'SUSHI', 'SWFTC', 'SXP', 'SYLO', 'SYN', 'T', 'TLM', 'TOKEN', 'TOMO', 'TOWER', 'TROY', 'TRU', 'TVK', 'TWT', 'UFT', 'UMA', 'UNFI', 'UNI', 'USDD', 'UTK', 'VEGA', 'VIB', 'VIDT', 'VOXEL', 'WBTC', 'WETH', 'WLD', 'WOO', 'XCN', 'XEC', 'XLM', 'XVS', 'YFI', 'YGG', 'ZEC', 'ZEN', 'ZIL', 'ZRX'],
      'binance-smart-chain': ['BNB', 'CAKE', 'XVS', 'BAKE', 'BURGER', 'SFP', 'TWT', 'ALPHA', 'LINA', 'RAMP', 'DEGO', 'BELT', 'BSW', 'CHESS', 'FRONT', 'MATH', 'SKILL', 'MBOX', 'HERO', 'SANTOS', 'PSG', 'BAR', 'JUV', 'ACM', 'LAZIO', 'CITY', 'SPS', 'SFUND', 'BABYDOGE', 'BTT', 'WIN', 'GAL', 'DF', 'HIGH', 'HOOK', 'EDU', 'ID', 'RDNT', 'ARKM', 'CYBER', 'SEI', 'MANTA', 'PIXEL', 'PORTAL', 'AEVO', 'W', 'BB', 'LISTA', 'REZ', 'IO', 'ZK', 'BANANA', 'NOT', 'DOGS', 'HMSTR', 'CATI', 'SCR', 'NEIRO', 'EIGEN', 'USUAL', 'PENGU', 'VANA', 'ME', 'MOVE', 'ORCA', 'BIO'],
      'solana': ['SOL', 'RAY', 'SRM', 'STEP', 'ORCA', 'MNGO', 'FIDA', 'ATLAS', 'POLIS', 'JTO', 'JUP', 'PYTH', 'BONK', 'WIF', 'BOME', 'POPCAT', 'MEW', 'SLERF', 'MSOL', 'STSOL', 'HNT', 'MOBILE', 'IOT', 'SAMO', 'KIN', 'RENDER', 'NOS', 'W', 'DRIFT', 'TNSR', 'PARCL', 'TENSOR', 'HONEY', 'CROWN', 'AUDIT', 'GUAC', 'NOSANA', 'MARINADE', 'MEAN', 'TULIP', 'COPE', 'GRAPE', 'MANGO', 'SERUM', 'STAR', 'JTO', 'JUP', 'PYTH', 'BONK', 'WIF', 'BOME', 'POPCAT', 'MEW', 'SLERF', 'JITO', 'KMNO', 'CLOUD', 'ZEUS', 'DBR', 'PRCL', 'HAWK', 'MPLX', 'BLZE', 'LDO', 'DUAL', 'BSOL', 'JSOL', 'HXRO', 'PORT', 'SUNNY', 'MER', 'SBR', 'SLND', 'SNY', 'UXD', 'MNDE', 'LAINE', 'UXUY', 'WOOP', 'SHDW', 'MEAN', 'SYN'],
      'polygon-pos': ['MATIC', 'POL', 'QUICK', 'GHST', 'BAL', 'DG', 'PYR', 'REVV', 'TOWER', 'GAME', 'GEL', 'ORBS', 'BICO', 'SAND', 'AAVE', 'LINK', 'UNI', 'SUSHI', 'CRV', 'COMP', 'MKR', 'SNX', 'GRT', '1INCH', 'WBTC', 'USDC', 'USDT', 'DAI', 'FRAX', 'LDO', 'STG', 'DODO', 'VOXEL', 'PAXG', 'TEL', 'ANKR', 'CELR', 'MCB', 'DFYN', 'NABOX', 'IRON', 'DF', 'INST', 'GOVI', 'ROUTE', 'OM', 'KLIMA', 'MUST', 'COMBO', 'WOO', 'MANA'],
      'arbitrum-one': ['ARB', 'GMX', 'MAGIC', 'GNS', 'RDNT', 'PENDLE', 'GRAIL', 'WINR', 'JONES', 'DPX', 'SPA', 'HOP', 'PREMIA', 'FACTOR', 'VELA', 'LODE', 'Y2K', 'MUX', 'DODO', 'STG', 'GRT', 'UNI', 'SUSHI', 'LINK', 'AAVE', 'CRV', '1INCH', 'BAL', 'COMP', 'SNX', 'WBTC', 'USDC', 'USDT', 'DAI', 'FRAX', 'LDO', 'UMAMI', 'CAP', 'BFCAI', 'STFX', 'VESTA', 'MYCELIUM', 'DOPEX', 'TND', 'SYN', 'APEX', 'LYRA', 'THALES'],
      'optimistic-ethereum': ['OP', 'VELO', 'THALES', 'LYRA', 'PERP', 'SONNE', 'KWENTA', 'SNX', 'AELIN', 'FRAX', 'LUSD', 'WLD', 'WBTC', 'USDC', 'USDT', 'DAI', 'UNI', 'SUSHI', 'AAVE', 'CRV', 'LDO', '1INCH', 'LINK', 'BAL', 'STG', 'SYN', 'GRT', 'COMP', 'MKR'],
      'avalanche': ['AVAX', 'JOE', 'PNG', 'QI', 'XAVA', 'COQ', 'YAK', 'WOO', 'SAVAX', 'GMX', 'AAVE', 'LINK', 'SUSHI', 'CRV', '1INCH', 'UNI', 'WBTC', 'USDC', 'USDT', 'DAI', 'STG', 'PENDLE', 'BSGG', 'GRAPE', 'TIME', 'SPELL', 'MIM', 'BENQI', 'PLATYPUS'],
      'tron': ['TRX', 'JST', 'SUN', 'BTT', 'WIN', 'USDD', 'TUSD', 'USDT', 'WTRX', 'USDJ', 'JUST', 'NFT', 'APENFT', 'USDC', 'LTC', 'ETH', 'WBTC'],
      'bitcoin': ['BTC', 'WBTC', 'RENBTC', 'HBTC', 'SBTC', 'TBTC', 'RUNE', 'STX', 'ORDI', 'SATS', 'RATS', 'MUBI', 'DOG', 'PUPS', 'RSIC', 'ALEX', 'BSSB'],
      'cardano': ['ADA', 'SUNDAE', 'MIN', 'DJED', 'SHEN', 'LENFI', 'AGIX', 'MELD', 'WMT', 'HOSKY', 'ERG', 'COPI', 'SNEK', 'IAG', 'BOOK', 'LIQWID', 'JPG', 'GENSX', 'OPTIM'],
      'polkadot': ['DOT', 'GLMR', 'ASTR', 'ACA', 'PHA', 'LIT', 'CLV', 'KSM', 'MOVR', 'KINT', 'OTP', 'SDN', 'PARA', 'EQ', 'XRT', 'RING', 'NODL', 'CFG', 'HDX', 'BNC', 'MYTH'],
      'cosmos': ['ATOM', 'OSMO', 'INJ', 'SEI', 'TIA', 'DYM', 'STARS', 'JUNO', 'EVMOS', 'SCRT', 'AKT', 'REGEN', 'DVPN', 'CMDX', 'IRIS', 'LUNA', 'LUNC', 'HUAHUA', 'ROWAN', 'ION', 'NETA', 'MNTL', 'KAVA', 'FET', 'BAND', 'CRO', 'HASH', 'KUJI', 'STRD', 'MARS', 'WHALE', 'NTRN', 'SAGA', 'OMNI', 'ARCH', 'PRYZM'],
      'near-protocol': ['NEAR', 'OCT', 'REF', 'AURORA', 'META', 'JUMBO', 'PARAS', 'USN', 'LINEAR', 'BURROW', 'SWEAT', 'AURORA', 'PEMBROCK', 'SPIN', 'BRRR', 'PULSE'],
      'sui': ['SUI', 'NAVX', 'CETUS', 'TURBOS', 'SCALLOP', 'DEEP', 'NS', 'BUCK', 'NAVI', 'HASUI', 'BLUE', 'MOVE', 'OCEAN', 'SSWP', 'FUD', 'SUIA'],
      'aptos': ['APT', 'GUI', 'ABEL', 'TORTUGA', 'PONTEM', 'THALA', 'PROPS', 'MOJO', 'ERAGON', 'DITTO'],
      'base': ['BRETT', 'DEGEN', 'AERO', 'TOSHI', 'BASED', 'NORMIE', 'MOCHI', 'ENJOY', 'CBETH', 'USDBC', 'BALD', 'RDNT', 'SEAMLESS', 'EXTRA', 'BSX', 'AXLE', 'BASIN', 'WETH', 'USDC', 'DAI', 'STG', 'AAVE', 'COMP', 'BAL', 'SUSHI', 'AERODROME', 'ALIEN', 'WELL', 'TYBG', 'KEYCAT'],
      'fantom': ['FTM', 'SPIRIT', 'BEETS', 'TAROT', 'SCREAM', 'GEIST', 'LQDR', 'TOMB', 'FRAX', 'MULTI', 'WOO', 'BOO', 'EQUAL', 'BRUSH', 'PFTM', 'USDC', 'DAI', 'LINK', 'CRV', 'AAVE', 'SUSHI'],
      'cronos': ['CRO', 'VVS', 'CRONA', 'SINGLE', 'MMF', 'FERRO', 'TONIC', 'BIFI', 'DRK'],
      'algorand': ['ALGO', 'USDC', 'YLDY', 'OPUL', 'TINY', 'PLANET', 'DEFLY', 'GARD', 'SMILE', 'AKITA', 'CHIP', 'VEST', 'ALGX'],
      'stellar': ['XLM', 'USDC', 'AQUA', 'SHX', 'EURC', 'yXLM', 'RMT', 'MOBI', 'SLT', 'SDEX'],
      'celo': ['CELO', 'CUSD', 'CEUR', 'CREAL', 'MOBI', 'PACT'],
      'mantle': ['MNT', 'WMNT', 'USDC', 'USDT', 'METH', 'PUFF', 'INIT', 'CLEO', 'AXL'],
      'zksync': ['ETH', 'USDC', 'USDT', 'WBTC', 'MUTE', 'ZK', 'HOLD', 'SPACE', 'VC', 'RF', 'OT', 'ZKSWAP'],
      'blast': ['BLAST', 'USDB', 'ETH', 'WETH', 'RING', 'JUICE', 'ORBIT', 'PAC', 'YES', 'ANDY', 'BAG'],
      'linea': ['ETH', 'USDC', 'USDT', 'WBTC', 'LYNX', 'NILE', 'CROAK', 'FOXY', 'LXP'],
      'scroll': ['ETH', 'USDC', 'USDT', 'WBTC', 'SCR', 'PAPER', 'NURI', 'GHO', 'AMBIENT'],
      'kava': ['KAVA', 'HARD', 'USDX', 'SWP', 'ATOM', 'BNB', 'BTCB', 'USDT', 'USDC'],
      'osmosis': ['OSMO', 'ION', 'SCRT', 'REGEN', 'JUNO', 'STARS', 'AKT', 'DVPN', 'CMDX', 'ATOM', 'CRO', 'LUNA', 'UST', 'EVMOS', 'INJ', 'HUAHUA', 'NETA', 'MNTL', 'STRD', 'MARS', 'WHALE', 'KUJI', 'NTRN']
    };

    // Dynamic: fetch network tokens from CoinGecko + scan loaded coins
    const _netCache = {};
    async function fetchNetTokens(netId) {
      if (_netCache[netId]) return;
      _netCache[netId] = true;

      // Step 1: Scan allC for coins with matching plat field (from CMC)
      var tokens = NET_TOKENS[netId] || [];
      allC.forEach(function (c) {
        if (!c.sy) return;
        var sy = c.sy.toUpperCase();
        if (tokens.indexOf(sy) !== -1) return;
        if (c.plat && (c.plat === netId || c.plat.includes(netId))) tokens.push(sy);
        if (c.tags) {
          if (c.tags.includes(netId) || c.tags.includes(netId + '-ecosystem')) tokens.push(sy);
        }
      });
      NET_TOKENS[netId] = tokens;
      if (cNet === netId) doFilter();

      // Step 2: Fetch from CoinGecko asset_platform coins list
      var cgMap = { 'ethereum': 'ethereum', 'binance-smart-chain': 'binance-smart-chain', 'solana': 'solana', 'polygon-pos': 'polygon-pos', 'arbitrum-one': 'arbitrum-one', 'optimistic-ethereum': 'optimistic-ethereum', 'avalanche': 'avalanche', 'base': 'base', 'fantom': 'fantom', 'tron': 'tron', 'sui': 'sui', 'aptos': 'aptos', 'near-protocol': 'near-protocol', 'cronos': 'cronos', 'zksync': 'zksync', 'blast': 'blast', 'linea': 'linea', 'mantle': 'mantle', 'scroll': 'scroll' };
      var cgPlatform = cgMap[netId];
      if (!cgPlatform) return;

      try {
        // Method 1: CoinGecko markets with category
        for (var page = 1; page <= 20; page++) {
          var r = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=' + cgPlatform + '-ecosystem&order=market_cap_desc&per_page=250&page=' + page + '&sparkline=false');
          if (!r.ok) {
            if (r.status === 429) { await new Promise(function (w) { setTimeout(w, 62000); }); page--; continue; }
            break;
          }
          var data = await r.json();
          if (!Array.isArray(data) || data.length === 0) break;
          var beforeLen = tokens.length;
          data.forEach(function (c) {
            var sy = (c.symbol || '').toUpperCase();
            if (sy && tokens.indexOf(sy) === -1) tokens.push(sy);
          });
          NET_TOKENS[netId] = tokens;
          // Update filter every page
          if (tokens.length > beforeLen && cNet === netId) doFilter();
          if (data.length < 250) break;
          await new Promise(function (w) { setTimeout(w, 1500); });
        }
      } catch (e) { }

      // Step 3: Also try CoinPaprika for this platform
      try {
        var papMap = { 'ethereum': 'eth-ethereum', 'binance-smart-chain': 'bnb-binance-coin', 'solana': 'sol-solana', 'tron': 'trx-tron', 'polygon-pos': 'matic-polygon', 'avalanche': 'avax-avalanche', 'arbitrum-one': 'arb-arbitrum', 'base': 'base-base', 'sui': 'sui-sui' };
        var papId = papMap[netId];
        if (papId) {
          var r2 = await fetch('https://api.coinpaprika.com/v1/coins/' + papId + '/markets?quotes=USD');
          if (r2.ok) {
            var mkts = await r2.json();
            if (Array.isArray(mkts)) {
              mkts.forEach(function (m) {
                if (m.pair) {
                  var base = m.pair.split('/')[0];
                  if (base && tokens.indexOf(base) === -1) tokens.push(base);
                }
              });
              NET_TOKENS[netId] = tokens;
              if (cNet === netId) doFilter();
            }
          }
        }
      } catch (e) { }

      console.log('[NetTokens] Total', tokens.length, 'tokens for', netId);
    }

    let cLang = (function() { try { var s = localStorage.getItem('lang'); return (s && s !== '') ? s : 'en'; } catch(e) { return 'en'; } })(), allC = [], filtC = [], cPage = 1, iPP = 75,
      cSort = 'rank', sortDir = 'asc', cNet = 'all', bWs = null, uInt = null, isL = false, cBatch = 0, maxB = 40,
      exData = [], exPage = 1, exIPP = 10;
    /* iPP: always 50 */
    // Clear old truncated cache (v2 upgrade)
    try { const ov = sessionStorage.getItem('cryptohub_v'); if (ov !== '14') { sessionStorage.removeItem('cryptohub_coins'); sessionStorage.removeItem('ch_fallback'); sessionStorage.setItem('cryptohub_v', '14') } } catch (e) { }

    // ===== INSTANT SEARCH INDEX =====
    // Built immediately from static data — search works BEFORE any API responds
    const INSTANT_COINS = [
      { sy: 'BTC', nm: 'Bitcoin', id: 'bitcoin', rk: 1, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
      { sy: 'ETH', nm: 'Ethereum', id: 'ethereum', rk: 2, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
      { sy: 'USDT', nm: 'Tether', id: 'tether', rk: 3, pr: 1, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png' },
      { sy: 'BNB', nm: 'BNB', id: 'binancecoin', rk: 4, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' },
      { sy: 'SOL', nm: 'Solana', id: 'solana', rk: 5, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png' },
      { sy: 'XRP', nm: 'XRP', id: 'ripple', rk: 6, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png' },
      { sy: 'USDC', nm: 'USD Coin', id: 'usd-coin', rk: 7, pr: 1, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png' },
      { sy: 'DOGE', nm: 'Dogecoin', id: 'dogecoin', rk: 8, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png' },
      { sy: 'ADA', nm: 'Cardano', id: 'cardano', rk: 9, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png' },
      { sy: 'TRX', nm: 'TRON', id: 'tron', rk: 10, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png' },
      { sy: 'AVAX', nm: 'Avalanche', id: 'avalanche-2', rk: 11, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png' },
      { sy: 'LINK', nm: 'Chainlink', id: 'chainlink', rk: 12, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png' },
      { sy: 'TON', nm: 'Toncoin', id: 'the-open-network', rk: 13, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png' },
      { sy: 'SHIB', nm: 'Shiba Inu', id: 'shiba-inu', rk: 14, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png' },
      { sy: 'DOT', nm: 'Polkadot', id: 'polkadot', rk: 15, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png' },
      { sy: 'NEAR', nm: 'NEAR Protocol', id: 'near', rk: 16, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png' },
      { sy: 'SUI', nm: 'Sui', id: 'sui', rk: 17, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png' },
      { sy: 'PEPE', nm: 'Pepe', id: 'pepe', rk: 18, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png' },
      { sy: 'LTC', nm: 'Litecoin', id: 'litecoin', rk: 19, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png' },
      { sy: 'BCH', nm: 'Bitcoin Cash', id: 'bitcoin-cash', rk: 20, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png' },
      { sy: 'APT', nm: 'Aptos', id: 'aptos', rk: 21, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png' },
      { sy: 'UNI', nm: 'Uniswap', id: 'uniswap', rk: 22, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png' },
      { sy: 'ARB', nm: 'Arbitrum', id: 'arbitrum', rk: 23, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png' },
      { sy: 'OP', nm: 'Optimism', id: 'optimism', rk: 24, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png' },
      { sy: 'ATOM', nm: 'Cosmos', id: 'cosmos', rk: 25, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png' },
      { sy: 'MATIC', nm: 'Polygon', id: 'matic-network', rk: 26, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png' },
      { sy: 'INJ', nm: 'Injective', id: 'injective-protocol', rk: 27, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png' },
      { sy: 'WIF', nm: 'dogwifhat', id: 'dogwifcoin', rk: 28, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28752.png' },
      { sy: 'BONK', nm: 'Bonk', id: 'bonk', rk: 29, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png' },
      { sy: 'FET', nm: 'Fetch.ai', id: 'fetch-ai', rk: 30, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5681.png' },
      { sy: 'AAVE', nm: 'Aave', id: 'aave', rk: 31, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png' },
      { sy: 'MKR', nm: 'Maker', id: 'maker', rk: 32, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png' },
      { sy: 'RNDR', nm: 'Render', id: 'render-token', rk: 33, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png' },
      { sy: 'KAS', nm: 'Kaspa', id: 'kaspa', rk: 34, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20396.png' },
      { sy: 'ETC', nm: 'Ethereum Classic', id: 'ethereum-classic', rk: 35, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png' },
      { sy: 'FTM', nm: 'Fantom', id: 'fantom', rk: 36, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png' },
      { sy: 'WLD', nm: 'Worldcoin', id: 'worldcoin-wld', rk: 37, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13502.png' },
      { sy: 'STX', nm: 'Stacks', id: 'blockstack', rk: 38, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4847.png' },
      { sy: 'RUNE', nm: 'THORChain', id: 'thorchain', rk: 39, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4157.png' },
      { sy: 'GRT', nm: 'The Graph', id: 'the-graph', rk: 40, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png' },
      { sy: 'JUP', nm: 'Jupiter', id: 'jupiter-exchange-solana', rk: 41, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29210.png' },
      { sy: 'TIA', nm: 'Celestia', id: 'celestia', rk: 42, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22861.png' },
      { sy: 'SEI', nm: 'Sei', id: 'sei-network', rk: 43, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23149.png' },
      { sy: 'FLOKI', nm: 'Floki', id: 'floki', rk: 44, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10804.png' },
      { sy: 'ICP', nm: 'Internet Computer', id: 'internet-computer', rk: 45, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png' },
      { sy: 'ALGO', nm: 'Algorand', id: 'algorand', rk: 46, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4030.png' },
      { sy: 'XLM', nm: 'Stellar', id: 'stellar', rk: 47, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/512.png' },
      { sy: 'HBAR', nm: 'Hedera', id: 'hedera-hashgraph', rk: 48, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4642.png' },
      { sy: 'VET', nm: 'VeChain', id: 'vechain', rk: 49, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png' },
      { sy: 'PYTH', nm: 'Pyth Network', id: 'pyth-network', rk: 50, pr: 0, c24: 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28177.png' },
    ];
    // Instant search map — symbol → coin (updated as allC loads)
    const _srchMap = new Map(INSTANT_COINS.map(c => [c.sy.toLowerCase(), c]));
    INSTANT_COINS.forEach(c => _srchMap.set(c.nm.toLowerCase(), c));


    function $(id) { return document.getElementById(id) }
    function t(k) { return (T[cLang] && T[cLang][k]) || T.en[k] || k }
    function fN(n) { if (!n || isNaN(n) || n === 0) return '--'; if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + 'T'; if (n >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B'; if (n >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M'; if (n >= 1e3) return '$' + (n / 1e3).toFixed(1) + 'K'; return '$' + n.toFixed(2) }
    // Clamp percentage values — prevents divide-by-zero artifacts (e.g. +310,000,000%)
    // from exchange APIs with open24h=0 corrupting rank and display
    function sanitizePct(v) { var n = parseFloat(v) || 0; return (Math.abs(n) > 1000) ? 0 : n; }
    function fS(n) { return n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n.toFixed(0) }

    // Language
    // Info Tabs i18n data
    const _itI18n = {
      ar: { itAbout: 'عن المنصة', itLearn: 'تعلم الكريبتو', itFaq: 'الأسئلة الشائعة', itContact: 'تواصل معنا', itAboutTitle: 'CryptoHub — منصتك الشاملة للعملات الرقمية', itAboutDesc: 'منصة مجانية تُقدّم بيانات لحظية لأكثر من 10,000 عملة رقمية، مدعومة بأدوات تحليل ذكية وواجهة متعددة اللغات. هدفنا توفير معلومات دقيقة تساعدك على اتخاذ قرارات مستنيرة في سوق الكريبتو.', itF1Title: 'بيانات لحظية موثوقة', itF1Desc: 'من Binance وBybit وMEXC والمزيد في الوقت الفعلي', itF2Title: 'تحليل بالذكاء الاصطناعي', itF2Desc: 'مساعد "Ask" يحلل السوق ويجيب عن استفساراتك فوراً', itF3Title: 'المعادن والأسهم', itF3Desc: 'الذهب والفضة والبلاتين والأسهم وETF في مكان واحد', itF4Title: '30+ لغة', itF4Desc: 'واجهة متعددة اللغات تدعم العربية والإنجليزية والمزيد', itLearnTitle: 'دليلك التعليمي في عالم الكريبتو', itTagBeginner: 'مبتدئ', itTagAnalysis: 'تحليل', itTagAdvanced: 'متقدم', itTagExchanges: 'منصات', itTagInvest: 'استثمار', itTagSecurity: 'أمان', itA1Title: 'ما هو البيتكوين؟', itA1Body: 'البيتكوين (BTC) أول عملة رقمية لامركزية، أُطلقت 2009. يعتمد على البلوكتشين لتسجيل المعاملات بأمان وشفافية. حده الأقصى 21 مليون وحدة مما يجعله أصلاً نادراً ذا قيمة متنامية.', itA2Title: 'مؤشر الخوف والجشع', itA2Body: 'يقيس مشاعر المتداولين من 0 (خوف شديد) إلى 100 (جشع شديد). القيم المنخفضة تشير لفرص شراء محتملة، والمرتفعة تستوجب الحذر. استخدمه مع مؤشرات أخرى لاتخاذ قرارات أفضل.', itA3Title: 'موسم الألتكوين', itA3Body: 'فترة تتفوق فيها العملات البديلة على البيتكوين في الأداء. يُقاس بمؤشر يحسب نسبة العملات التي تجاوزت BTC خلال 90 يوماً. فوق 75 = موسم ألتكوين، دون 25 = موسم بيتكوين.', itA4Title: 'اختيار منصة التداول', itA4Body: 'قيّم المنصة بناءً على: الأمان والترخيص، رسوم التداول، تنوع العملات، سهولة الاستخدام، وجودة الدعم. Binance الأكبر عالمياً، وBybit وMEXC ممتازتان للمتداولين المتقدمين.', itA5Title: 'الذهب مقابل البيتكوين', itA5Body: 'الذهب الملاذ الكلاسيكي الآمن بتاريخ آلاف السنين. البيتكوين "الذهب الرقمي" الحديث بعرض محدود ولامركزية تامة. كلاهما يُكمّل الآخر في المحفظة الاستثمارية المتوازنة.', itA6Title: 'حماية عملاتك الرقمية', itA6Body: 'استخدم محافظ باردة للمبالغ الكبيرة، فعّل المصادقة الثنائية (2FA)، لا تشارك مفاتيحك الخاصة أبداً، وتحقق دائماً من عناوين المواقع قبل إدخال بياناتك.', itFaqTitle: 'الأسئلة الشائعة', itQ1: 'هل بيانات الأسعار دقيقة ومحدّثة؟', itA1Faq: 'نعم، نحصل على البيانات مباشرة من Binance وBybit وMEXC وGate.io وOKX وتتحدث كل ثوانٍ. قد تظهر فروقات بسيطة بين المنصات بسبب اختلاف السيولة.', itQ2: 'هل يمكنني التداول مباشرة من الموقع؟', itA2Faq: 'لا، CryptoHub منصة تتبع وتحليل فقط. للتداول الفعلي افتح حساباً في Binance أو Bybit أو MEXC عبر روابطنا المباشرة في قسم المنصات.', itQ3: 'كم عدد العملات المتاحة؟', itA3Faq: 'أكثر من 10,000 عملة رقمية، بالإضافة إلى المعادن الثمينة (ذهب، فضة، بلاتين، بلاديوم) والأسهم وصناديق ETF. القائمة تُحدَّث باستمرار.', itQ4: 'هل الموقع مجاني ويحتاج تسجيل؟', itA4Faq: 'مجاني بالكامل ولا يحتاج تسجيل. كل الميزات متاحة فور فتح الموقع: أسعار لحظية، تحليلات، مؤشرات السوق، والمساعد الذكي.', itQ5: 'كيف أتواصل مع فريق الدعم؟', itA5Faq: 'تواصل معنا عبر تيليغرام: <a href="https://t.me/cryptoHubcrypto1" target="_blank" rel="noopener" style="color:var(--ac);font-weight:700">@cryptoHubcrypto1</a>', itContactTitle: 'تواصل مع فريق CryptoHub', itContactDesc: 'سؤال، اقتراح، أو مشكلة تقنية؟ فريقنا جاهز لمساعدتك.', itContactTg: 'تيليغرام', itContactWeb: 'الموقع', itContactNote: 'ملاحظة: CryptoHub منصة مستقلة لتتبع الأسعار وليست منصة تداول. لا تشارك بيانات محفظتك أو مفاتيحك الخاصة مع أي جهة.' },
      en: { itAbout: 'About', itLearn: 'Learn Crypto', itFaq: 'FAQ', itContact: 'Contact Us', itAboutTitle: 'CryptoHub — Your All-in-One Crypto Platform', itAboutDesc: 'A free platform providing real-time data for 10,000+ cryptocurrencies, powered by smart analysis tools and a multilingual interface. Our goal is to deliver accurate information to help you make informed decisions in the crypto market.', itF1Title: 'Reliable Real-Time Data', itF1Desc: 'From Binance, Bybit, MEXC and more in real-time', itF2Title: 'AI-Powered Analysis', itF2Desc: '"Ask" assistant analyzes markets and answers your questions instantly', itF3Title: 'Metals & Stocks', itF3Desc: 'Gold, silver, platinum, stocks and ETFs all in one place', itF4Title: '30+ Languages', itF4Desc: 'Multilingual interface supporting Arabic, English and more', itLearnTitle: 'Your Crypto Learning Guide', itTagBeginner: 'Beginner', itTagAnalysis: 'Analysis', itTagAdvanced: 'Advanced', itTagExchanges: 'Exchanges', itTagInvest: 'Investing', itTagSecurity: 'Security', itA1Title: 'What is Bitcoin?', itA1Body: 'Bitcoin (BTC) is the first decentralized digital currency, launched in 2009. It uses blockchain to record transactions securely and transparently. With a hard cap of 21 million units, it\'s a rare, appreciating asset.', itA2Title: 'Fear & Greed Index', itA2Body: 'Measures trader sentiment from 0 (extreme fear) to 100 (extreme greed). Low values may signal buying opportunities; high values suggest caution. Use it alongside other indicators for better decisions.', itA3Title: 'Altcoin Season', itA3Body: 'A period when altcoins outperform Bitcoin. Measured by how many top coins beat BTC over 90 days. Above 75 = Altcoin Season, below 25 = Bitcoin Season.', itA4Title: 'Choosing a Trading Platform', itA4Body: 'Evaluate by: security & licensing, fees, coin variety, ease of use, and support quality. Binance is the largest globally; Bybit and MEXC excel for advanced traders.', itA5Title: 'Gold vs Bitcoin', itA5Body: 'Gold is the classic safe haven with millennia of history. Bitcoin is the modern "digital gold" with fixed supply and full decentralization. Both complement each other in a balanced portfolio.', itA6Title: 'Protecting Your Crypto', itA6Body: 'Use hardware wallets for large amounts, enable 2FA on all accounts, never share private keys or recovery phrases, and always verify website URLs before entering your data.', itFaqTitle: 'Frequently Asked Questions', itQ1: 'Is the price data accurate and up-to-date?', itA1Faq: 'Yes, data comes directly from Binance, Bybit, MEXC, Gate.io and OKX, updated every few seconds. Minor differences between platforms are normal due to varying liquidity.', itQ2: 'Can I trade directly from the site?', itA2Faq: 'No, CryptoHub is a tracking and analysis platform only. To trade, open an account at Binance, Bybit or MEXC via our direct links in the Exchanges section.', itQ3: 'How many coins are available?', itA3Faq: 'Over 10,000 cryptocurrencies, plus precious metals (gold, silver, platinum, palladium), stocks and ETFs. The list is continuously updated.', itQ4: 'Is it free and does it need registration?', itA4Faq: 'Completely free with no registration required. All features are available immediately: live prices, analytics, market indicators, and the AI assistant.', itQ5: 'How can I contact support?', itA5Faq: 'Reach us on Telegram: <a href="https://t.me/cryptoHubcrypto1" target="_blank" rel="noopener" style="color:var(--ac);font-weight:700">@cryptoHubcrypto1</a>', itContactTitle: 'Contact CryptoHub Team', itContactDesc: 'A question, suggestion, or technical issue? Our team is ready to help.', itContactTg: 'Telegram', itContactWeb: 'Website', itContactNote: 'Note: CryptoHub is an independent price tracking platform, not a trading exchange. Never share your wallet data or private keys with anyone.' },
      zh: { itAbout: '关于', itLearn: '学习加密', itFaq: '常见问题', itContact: '联系我们', itAboutTitle: 'CryptoHub — 您的一站式加密货币平台', itAboutDesc: '免费平台，提供10,000+加密货币实时数据，配备智能分析工具和多语言界面。我们的目标是提供准确信息，帮助您在加密市场做出明智决策。', itF1Title: '可靠实时数据', itF1Desc: '来自Binance、Bybit、MEXC等平台的实时数据', itF2Title: 'AI智能分析', itF2Desc: '"Ask"助手即时分析市场并回答您的问题', itF3Title: '贵金属与股票', itF3Desc: '黄金、白银、铂金、股票和ETF一站汇聚', itF4Title: '30+语言', itF4Desc: '多语言界面，支持中文、阿拉伯语、英语等', itLearnTitle: '加密货币学习指南', itTagBeginner: '入门', itTagAnalysis: '分析', itTagAdvanced: '进阶', itTagExchanges: '交易所', itTagInvest: '投资', itTagSecurity: '安全', itA1Title: '什么是比特币？', itA1Body: '比特币(BTC)是2009年推出的首个去中心化数字货币，采用区块链技术安全透明地记录交易。总量上限2100万枚，是稀缺的升值资产。', itA2Title: '恐惧贪婪指数', itA2Body: '衡量交易者情绪，0为极度恐惧，100为极度贪婪。低值可能是买入机会，高值需谨慎。结合其他指标使用效果更佳。', itA3Title: '山寨币季节', itA3Body: '山寨币跑赢比特币的时期。通过90天内超越BTC的主流币种比例衡量。超过75为山寨季，低于25为比特币季。', itA4Title: '选择交易平台', itA4Body: '评估标准：安全合规、手续费、币种多样性、易用性和支持质量。Binance是全球最大平台；Bybit和MEXC适合高级交易者。', itA5Title: '黄金vs比特币', itA5Body: '黄金是有数千年历史的传统避险资产。比特币是供应固定、完全去中心化的现代"数字黄金"。两者互补，构成均衡投资组合。', itA6Title: '保护您的加密资产', itA6Body: '大额资产使用硬件钱包，开启双重验证(2FA)，永不分享私钥或助记词，输入数据前务必验证网址。', itFaqTitle: '常见问题', itQ1: '价格数据准确且及时更新吗？', itA1Faq: '是的，数据直接来自Binance、Bybit、MEXC、Gate.io和OKX，每隔几秒更新一次。平台间的细微差异属正常现象。', itQ2: '能直接在网站上交易吗？', itA2Faq: '不能，CryptoHub仅为追踪和分析平台。如需交易，请通过我们的直接链接在Binance、Bybit或MEXC开户。', itQ3: '支持多少种币？', itA3Faq: '超过5000种加密货币，另有贵金属(黄金、白银、铂金、钯金)、股票和ETF，列表持续更新。', itQ4: '免费使用？需要注册吗？', itA4Faq: '完全免费，无需注册。所有功能即开即用：实时价格、分析、市场指标和AI助手。', itQ5: '如何联系支持团队？', itA5Faq: '通过Telegram联系我们：<a href="https://t.me/cryptoHubcrypto1" target="_blank" rel="noopener" style="color:var(--ac);font-weight:700">@cryptoHubcrypto1</a>', itContactTitle: '联系CryptoHub团队', itContactDesc: '有疑问、建议或技术问题？我们的团队随时准备提供帮助。', itContactTg: 'Telegram', itContactWeb: '网站', itContactNote: '注意：CryptoHub是独立的价格追踪平台，不是交易所。请勿与任何人分享您的钱包数据或私钥。' },
      es: { itAbout: 'Acerca de', itLearn: 'Aprende Crypto', itFaq: 'Preguntas Frecuentes', itContact: 'Contáctanos', itAboutTitle: 'CryptoHub — Tu Plataforma Cripto Completa', itAboutDesc: 'Plataforma gratuita con datos en tiempo real de 10,000+ criptomonedas, potenciada con herramientas de análisis inteligentes e interfaz multilingüe. Nuestro objetivo es ofrecerte información precisa para decisiones informadas.', itF1Title: 'Datos en Tiempo Real', itF1Desc: 'De Binance, Bybit, MEXC y más en tiempo real', itF2Title: 'Análisis con IA', itF2Desc: 'El asistente "Ask" analiza el mercado y responde tus preguntas al instante', itF3Title: 'Metales y Acciones', itF3Desc: 'Oro, plata, platino, acciones y ETFs en un solo lugar', itF4Title: '30+ Idiomas', itF4Desc: 'Interfaz multilingüe que soporta árabe, inglés, español y más', itLearnTitle: 'Tu Guía de Aprendizaje Cripto', itTagBeginner: 'Principiante', itTagAnalysis: 'Análisis', itTagAdvanced: 'Avanzado', itTagExchanges: 'Exchanges', itTagInvest: 'Inversión', itTagSecurity: 'Seguridad', itA1Title: '¿Qué es Bitcoin?', itA1Body: 'Bitcoin (BTC) es la primera moneda digital descentralizada, lanzada en 2009. Usa blockchain para registrar transacciones de forma segura. Con un límite de 21 millones de unidades, es un activo escaso y apreciado.', itA2Title: 'Índice Miedo y Codicia', itA2Body: 'Mide el sentimiento de los traders de 0 (miedo extremo) a 100 (codicia extrema). Valores bajos pueden señalar oportunidades de compra; altos sugieren precaución. Úsalo con otros indicadores.', itA3Title: 'Temporada Altcoin', itA3Body: 'Período en que las altcoins superan a Bitcoin. Se mide por cuántas monedas top superaron a BTC en 90 días. Por encima de 75 = Temporada Altcoin, debajo de 25 = Temporada Bitcoin.', itA4Title: 'Elegir Exchange', itA4Body: 'Evalúa por: seguridad y licencia, comisiones, variedad de monedas, facilidad de uso y calidad de soporte. Binance es la mayor; Bybit y MEXC son excelentes para traders avanzados.', itA5Title: 'Oro vs Bitcoin', itA5Body: 'El oro es el refugio seguro clásico con milenios de historia. Bitcoin es el moderno "oro digital" con oferta fija y total descentralización. Ambos se complementan en una cartera equilibrada.', itA6Title: 'Protege tu Cripto', itA6Body: 'Usa hardware wallets para grandes cantidades, activa 2FA, nunca compartas claves privadas y siempre verifica las URLs antes de ingresar datos.', itFaqTitle: 'Preguntas Frecuentes', itQ1: '¿Son precisos y actualizados los datos de precios?', itA1Faq: 'Sí, datos directamente de Binance, Bybit, MEXC, Gate.io y OKX, actualizados cada pocos segundos. Las pequeñas diferencias entre plataformas son normales por la liquidez.', itQ2: '¿Puedo operar directamente desde el sitio?', itA2Faq: 'No, CryptoHub es solo una plataforma de seguimiento y análisis. Para operar, abre cuenta en Binance, Bybit o MEXC mediante nuestros enlaces directos.', itQ3: '¿Cuántas monedas están disponibles?', itA3Faq: 'Más de 5000 criptomonedas, más metales preciosos (oro, plata, platino, paladio), acciones y ETFs. La lista se actualiza continuamente.', itQ4: '¿Es gratuito y necesita registro?', itA4Faq: 'Completamente gratuito sin registro. Todas las funciones disponibles de inmediato: precios en vivo, análisis, indicadores de mercado y asistente de IA.', itQ5: '¿Cómo contacto al soporte?', itA5Faq: 'Contáctanos por Telegram: <a href="https://t.me/cryptoHubcrypto1" target="_blank" rel="noopener" style="color:var(--ac);font-weight:700">@cryptoHubcrypto1</a>', itContactTitle: 'Contacta al Equipo CryptoHub', itContactDesc: '¿Pregunta, sugerencia o problema técnico? Nuestro equipo está listo para ayudarte.', itContactTg: 'Telegram', itContactWeb: 'Sitio Web', itContactNote: 'Nota: CryptoHub es una plataforma independiente de seguimiento de precios, no un exchange. Nunca compartas tus datos de billetera o claves privadas con nadie.' }
    };
    // Apply same as en for remaining languages - will be applied after T is built
    function applyItI18n() {
      if (typeof T !== 'undefined') {
        Object.keys(T).forEach(l => {
          Object.assign(T[l], _itI18n[l] || _itI18n.en);
        });
      }
    }

    function applyLang() {
      applyItI18n();
      const l = LANGS.find(x => x.c === cLang); if (!l) return; document.documentElement.lang = l.c; document.documentElement.dir = l.d; $('cFlag').textContent = l.f; $('cCode').textContent = l.c.toUpperCase(); document.title = cLang === 'ar' ? 'كريبتو هاب | أسعار العملات الرقمية وتحليل الكريبتو بالذكاء الاصطناعي' : 'CryptoHub AI - Cryptocurrency Hub | Live Crypto Prices';
      // Special innerHTML handling for faq answers
      document.querySelectorAll('[data-i18n-html]').forEach(el => { const v = t(el.getAttribute('data-i18n-html')); if (v) el.innerHTML = v });
      document.querySelectorAll('[data-i18n]').forEach(el => { const v = t(el.getAttribute('data-i18n')); if (!v) return; if (el.childElementCount > 0) { let d = false; for (const n of el.childNodes) { if (n.nodeType === 3 && n.textContent.trim()) { n.textContent = v + ' '; d = true; break } } if (!d) el.insertBefore(document.createTextNode(v + ' '), el.firstChild) } else { el.textContent = v } });
      document.querySelectorAll('[data-i18n-opt]').forEach(el => { const v = t(el.getAttribute('data-i18n-opt')); if (v) el.textContent = v });
      document.querySelectorAll('[data-i18n-ph]').forEach(el => { const v = t(el.getAttribute('data-i18n-ph')); if (v) el.placeholder = v });
      const es = $('exSrch'); if (es) es.placeholder = t('searchExchange');
      const nb = $('navSecBtn'); if (nb) nb.title = t('navSections');
      document.querySelectorAll('.srch-res').forEach(el => el.setAttribute('data-empty', t('searchCoin')));
      document.querySelectorAll('#lMenu .ddi').forEach(i => i.classList.toggle('active', i.dataset.lang === cLang));
      if (allC.length) { updFG(); render() }
      // Reveal body AFTER language is fully applied — no flash
      if (!window._langApplied) {
        window._langApplied = true;
        var af = document.getElementById('anti-flash');
        if (af) af.remove();
        if (document.body) document.body.style.opacity = '1';
      }
    }
    function setLang(c) {
      cLang = c; localStorage.setItem('lang', c); closeDD(); applyLang();
      // Update stocks filter dropdown language immediately
      const _tr = k => (T[c]?.[k] || T.en?.[k] || k);
      const sel = document.getElementById('stkCatFilter');
      if (sel) {
        const optMap = { '': 'stkAll', 'stock': 'stkStock', 'etf': 'stkEtf', 'commodity': 'stkCommodity', 'index': 'stkIndex' };
        [...sel.options].forEach(o => { if (optMap[o.value]) o.text = _tr(optMap[o.value]); });
      }
      const srch = document.getElementById('stkSearch');
      if (srch && !srch.matches(':focus')) srch.placeholder = _tr('stkSearchPlh');
      if (typeof _stkRenderPage === 'function') _stkRenderPage();
    }
    function buildLM() { $('lMenu').innerHTML = LANGS.map(l => `<div class="ddi ${l.c === cLang ? 'active' : ''}" data-lang="${l.c}" onclick="setLang('${l.c}')"><span class="flag">${l.f}</span><span>${l.l}</span><i class="fas fa-check ck"></i></div>`).join('') }
    function buildNS() { $('netSel').innerHTML = `<option value="all">${t('allNetworks')}</option>` + NETS.map(n => `<option value="${n.id}">${n.i} ${n.n}</option>`).join('') }
    function toggleDD(id) { requestAnimationFrame(()=>{ const dd = $(id); if (!dd) return; const m = dd.querySelector('.ddm') || dd.querySelector('.stats-panel'); if (!m) return; const w = m.classList.contains('active'); closeDD(); if (!w) { m.classList.add('active'); if (id === 'statsDd') { const hb = dd.querySelector('.nav-hamburger'); if (hb) hb.classList.add('active'); document.body.style.overflow='hidden'; } } }); }
    function closeDD() { var active = document.querySelectorAll('.ddm.active,.stats-panel.active'); active.forEach(function(m) { m.classList.remove('active') }); document.querySelectorAll('.nav-hamburger.active').forEach(function(h) { h.classList.remove('active') }); document.body.style.overflow=''; }
    function navTo(section) { closeDD(); swTab(section); requestAnimationFrame(() => { setTimeout(() => { const el = $('tab_' + section); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, 50); }); if (section === 'crypto' && $('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length ? allC.length.toLocaleString() : '--' }
    document.addEventListener('click', e => { if (!e.target.closest('.dropdown')) closeDD() }, { passive: true });
    document.addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSrch() } if (e.key === 'Escape') { closeSrch(); closeDD(); closeMod(); document.querySelectorAll('.legal-modal.active').forEach(m => m.classList.remove('active')) } });
    function toggleTheme() { const d = document.documentElement.classList.toggle('dark'); $('sI').classList.toggle('hidden', d); $('mI').classList.toggle('hidden', !d); localStorage.setItem('theme', d ? 'dark' : 'light') }
    if (localStorage.getItem('theme') === 'dark') { document.documentElement.classList.add('dark'); $('sI').classList.add('hidden'); $('mI').classList.remove('hidden') }

    // ===== DATA LOADING - Optimized for Speed =====
    function _tout(ms) { return new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)); }
    async function fetchJSON(url, tm = 6000) {
      for (let i = 0; i < 2; i++) {
        try {
          const r = await Promise.race([fetch(url), _tout(tm + (i * 2000))]);
          if (r.ok) return await r.json();
          if (r.status === 429) { await new Promise(w => setTimeout(w, 2000 * (i + 1))); continue }
          console.warn(`fetchJSON error ${r.status} for ${url}`);
        } catch (e) {
          console.error(`fetchJSON fail for ${url}`, e.message || e);
          if (i === 0) await new Promise(w => setTimeout(w, 1000));
        }
      };
      return null;
    }


    function _ato(ms) { const ac = new AbortController(); setTimeout(() => ac.abort(), ms); return ac.signal; }
    // CORS proxy chain (multiple fallbacks)
    const PROXIES = [
      u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
      u => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
      u => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
      u => `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(u)}`,
      u => u
    ];
    async function fetchCMC(url, proxyOffset = 0) {
      // Race all proxies in parallel — first success wins
      try {
        const promises = PROXIES.map((proxy, i) => {
          return Promise.race([fetch(proxy(url)), _tout(5000)])
            .then(async r => { if (r.ok) { const d = await r.json(); if (d && d.data) return d; } return null; })
            .catch(() => null);
        });
        const results = await Promise.allSettled(promises);
        for (const r of results) {
          if (r.status === 'fulfilled' && r.value) return r.value;
        }
      } catch (e) { }
      return null;
    }

    // ── CMC Pro API with user key ──
    const CMC_PRO_KEY = '0447db53f13c40e99c63bfdb85021394';
    const CMC_WORKER = 'https://summer-union-dc27.bitcoinswapnet.workers.dev';
    const KV_WORKER = 'https://late-wood-9120.bitcoinswapnet.workers.dev';
    async function fetchCMCPro(endpoint) {
      var params = new URLSearchParams(endpoint.split('?')[1] || '');
      var start = params.get('start') || '1';
      var limit = params.get('limit') || '5000';
      try {
        var r = await Promise.race([fetch(CMC_WORKER + '/?src=cmc&start=' + start + '&limit=' + limit), _tout(15000)]);
        if (r.ok) {
          var raw = await r.json();
          // Convert free API format to Pro format
          if (raw && raw.data && raw.data.cryptoCurrencyList) {
            var converted = raw.data.cryptoCurrencyList.map(function (c) {
              var qt = c.quotes && c.quotes.length ? c.quotes.find(function (q) { return q.name === 'USD' }) : null;
              return { id: c.id, name: c.name, symbol: c.symbol, slug: c.slug, num_market_pairs: c.marketPairCount || c.numMarketPairs || 0, circulating_supply: c.circulatingSupply || 0, total_supply: c.totalSupply || 0, max_supply: c.maxSupply || 0, platform: c.platform || null, tags: c.tags || [], quote: { USD: { price: qt ? qt.price : 0, volume_24h: qt ? qt.volume24h : 0, market_cap: qt ? qt.marketCap : 0, percent_change_1h: qt ? qt.percentChange1h : 0, percent_change_24h: qt ? qt.percentChange24h : 0, percent_change_7d: qt ? qt.percentChange7d : 0 } } };
            });
            return { data: converted };
          }
          if (raw && raw.data && Array.isArray(raw.data)) return raw;
        }
      } catch (e) { console.log('fetchCMCPro err:', e.message); }
      return null;
    }

    // ── Price/Vol fallback cache — stores last known good values ──
    // Known stablecoin & wrapped token baseline prices (never show $0 for these)
    const KNOWN_PRICES = {
      DAI: 1, USDT: 1, USDC: 1, TUSD: 1, BUSD: 1, FRAX: 1, LUSD: 1, USDP: 1, GUSD: 1, PYUSD: 1, USDD: 1, FDUSD: 1, CRVUSD: 1, GHO: 1, SUSD: 1,
      WBTC: 97000, STETH: 3200, WSTETH: 3700, RETH: 3500, CBETH: 3300, WETH: 3200, WEETH: 3400, PAXG: 3000, TBTC: 97000, HBTC: 97000, RENBTC: 97000, SBTC: 97000
    };
    // Approximate market caps (in billions) for correct initial ranking — updated periodically
    const KNOWN_MCAP = {
      BTC: 1350e9, ETH: 250e9, USDT: 145e9, XRP: 75e9, BNB: 87e9, USDC: 45e9, SOL: 42e9, DOGE: 13e9, ADA: 12e9, TRX: 11e9,
      AVAX: 9e9, LINK: 9.5e9, DOT: 6.5e9, SHIB: 5e9, TON: 8e9, UNI: 4.5e9, LTC: 5.5e9, BCH: 7e9, NEAR: 3.5e9, ATOM: 3e9,
      XLM: 3e9, HBAR: 3.5e9, APT: 3e9, FIL: 2e9, ARB: 2e9, OP: 2e9, SUI: 3.5e9, SEI: 1e9, INJ: 1.5e9, FET: 1.5e9,
      RNDR: 2e9, GRT: 1.5e9, IMX: 1.2e9, MKR: 2e9, AAVE: 2.5e9, PEPE: 3.5e9, WIF: 0.7e9, BONK: 0.7e9, FLOKI: 0.6e9, WLD: 0.8e9,
      STX: 1.2e9, RUNE: 1e9, ETC: 3e9, ALGO: 1.5e9, VET: 1.5e9, FTM: 1e9, MANA: 0.5e9, SAND: 0.5e9, AXS: 0.5e9,
      EOS: 0.9e9, XTZ: 0.7e9, NEO: 0.5e9, THETA: 0.8e9, IOTA: 0.5e9, DASH: 0.3e9, ZEC: 0.4e9,
      COMP: 0.4e9, SNX: 0.4e9, CRV: 0.5e9, LDO: 1.2e9, ENJ: 0.2e9, CHZ: 0.4e9, CAKE: 0.5e9,
      KAS: 2.5e9, EGLD: 0.4e9, DYDX: 0.4e9, GMX: 0.3e9, PENDLE: 0.6e9, JUP: 1e9, PYTH: 0.8e9, TIA: 1e9,
      QNT: 0.8e9, AR: 0.6e9, DAI: 5.3e9, WBTC: 9e9, STETH: 19e9, HYPE: 5e9, TAO: 2.5e9,
      ONDO: 2.5e9, ENA: 1e9, EIGEN: 0.4e9, RENDER: 2e9, POL: 1.5e9, CRO: 1.5e9, LEO: 9e9,
      OKB: 3e9, WSTETH: 17e9, CBETH: 2.5e9, WETH: 5e9
    };
    const _lastGood = {};
    function saveFallback(c) {
      if (c.pr > 0 || c.vol > 0 || c.mc > 0 || c.ex > 0) {
        _lastGood[c.sy] = {
          pr: c.pr || _lastGood[c.sy]?.pr || 0,
          vol: c.vol || _lastGood[c.sy]?.vol || 0,
          mc: c.mc || _lastGood[c.sy]?.mc || 0,
          ex: (c.ex > 0 && !KNOWN_EX_COUNTS[c.sy]) ? c.ex : (_lastGood[c.sy]?.ex || 0)
        };
      }
    }
    function applyFallback(c) {
      // First try sessionStorage fallback
      const fb = _lastGood[c.sy];
      if (fb) {
        if ((!c.pr || c.pr === 0) && fb.pr > 0) c.pr = fb.pr;
        if ((!c.vol || c.vol === 0) && fb.vol > 0) c.vol = fb.vol;
        if ((!c.mc || c.mc === 0) && fb.mc > 0) c.mc = fb.mc;
        if ((!c.ex || c.ex === 0) && fb.ex > 0) c.ex = fb.ex;
      }
      // Apply known baseline prices for stablecoins/wrapped tokens
      if ((!c.pr || c.pr === 0) && KNOWN_PRICES[c.sy]) {
        c.pr = KNOWN_PRICES[c.sy];
        if ((!c.mc || c.mc === 0) && c.sup > 0) c.mc = c.sup * c.pr;
      }
      // Apply known market caps for correct ranking
      if ((!c.mc || c.mc === 0) && KNOWN_MCAP[c.sy]) {
        c.mc = KNOWN_MCAP[c.sy];
      }
    }
    // Save fallbacks to sessionStorage periodically
    function persistFallbacks() {
      try {
        allC.forEach(c => saveFallback(c));
        sessionStorage.setItem('ch_fallback', JSON.stringify(_lastGood));
      } catch (e) { }
    }
    // Load fallbacks from sessionStorage on startup
    try {
      const fb = sessionStorage.getItem('ch_fallback');
      if (fb) { const parsed = JSON.parse(fb); Object.assign(_lastGood, parsed); }
    } catch (e) { }

    // ── Hard-coded supply facts — these ALWAYS override API data ──────────────
    // Format: { SYM: [total_supply, max_supply] }
    // null = confirmed unlimited (∞), number = capped amount
    const HARD_SUPPLY = {
      // No max supply (unlimited / inflationary)
      ETH: [null, null],   // Proof-of-stake, no cap
      SOL: [null, null],   // Inflationary
      DOGE: [null, null],   // Inflationary (5B/yr)
      TRX: [null, null],   // No hard cap
      DOT: [null, null],   // Inflationary NPoS
      TON: [null, null],   // Inflationary
      NEAR: [null, null],   // 5% annual inflation
      ICP: [null, null],   // No hard cap
      FIL: [null, null],   // No hard cap
      APT: [null, null],   // Inflationary
      TIA: [null, null],   // No hard cap
      ATOM: [null, null],   // Inflationary
      MANA: [null, null],   // No hard cap
      SNX: [null, null],   // No hard cap
      BONK: [null, null],   // No hard cap
      // Capped supply
      BTC: [21000000, 21000000],
      BNB: [200000000, 200000000],
      XRP: [99988314000, 100000000000],
      ADA: [37000000000, 45000000000],
      AVAX: [440000000, 720000000],
      LTC: [84000000, 84000000],
      LINK: [1000000000, 1000000000],
      UNI: [1000000000, 1000000000],
      ALGO: [8200000000, 10000000000],
      XLM: [50001787000, 50001787000],
      HBAR: [50000000000, 50000000000],
      VET: [86712634466, 86712634466],
      FTM: [3175000000, 3175000000],
      MATIC: [10000000000, 10000000000],
      SHIB: [589346717684000, 999990000000000000],
      PEPE: [420690000000000, 420690000000000],
      WIF: [998926392, 998926392],
      ARB: [10000000000, 10000000000],
      OP: [4294967296, 4294967296],
      SUI: [10000000000, 10000000000],
      INJ: [100000000, 100000000],
      SEI: [10000000000, 10000000000],
      MKR: [1005577, 1005577],
      AAVE: [16000000, 16000000],
      CRV: [2062000000, 3030000000],
      LDO: [1000000000, 1000000000],
      GRT: [10800000000, 10800000000],
      SAND: [3000000000, 3000000000],
      AXS: [270000000, 270000000],
      BCH: [21000000, 21000000],
      ETC: [210700000, 210700000],
      ZEC: [21000000, 21000000],
      DASH: [18900000, 18900000],
      XMR: [null, null],   // Tail emission, no hard cap
      EOS: [null, null],   // Inflationary
      XTZ: [null, null],   // Inflationary
    };

    function applyKnownSupply(coins) {
      coins.forEach(coin => {
        const hs = HARD_SUPPLY[coin.sy];
        if (!hs) return;
        // total_supply: null means no cap exists, use circ as total
        coin.ts = (hs[0] !== null) ? hs[0] : (coin.sup > 0 ? coin.sup : coin.ts);
        // max_supply: null = unlimited → sentinel -1, number = capped
        coin.ms = (hs[1] !== null) ? hs[1] : -1;
      });
    }

    // sessionStorage cache helpers
    function cacheSet(k, v) {
      try { sessionStorage.setItem(k, JSON.stringify(v)); return true } catch (e) {
        // Try progressively smaller slices
        for (let n = Math.floor(v.length * 0.75); n >= 1000; n = Math.floor(n * 0.75)) {
          try { sessionStorage.setItem(k, JSON.stringify(v.slice(0, n))); return true } catch (e2) { }
        }
        return false;
      }
    }
    function cacheGet(k) { try { const v = sessionStorage.getItem(k); return v ? JSON.parse(v) : null } catch (e) { return null } }

    async function loadCoins() {
      if (isL) return; isL = true;
      // DualMap: indexes by cmc_id (primary, unique per chain) AND symbol (secondary, first-match only)
      const _primaryMap = new Map();
      const _symFirstMap = new Map();
      const symMap = {
        has(key) { return _primaryMap.has(key) || _symFirstMap.has(key); },
        get(key) { return _primaryMap.get(key) || _symFirstMap.get(key) || undefined; },
        set(key, val) {
          if (typeof key === 'string' && key.startsWith('cmc_')) {
            _primaryMap.set(key, val);
            if (val.sy && !_symFirstMap.has(val.sy)) _symFirstMap.set(val.sy, val);
          } else {
            if (!_symFirstMap.has(key)) _symFirstMap.set(key, val);
            if (val && val.cmc_id) _primaryMap.set('cmc_' + val.cmc_id, val);
          }
        },
        get size() { return _primaryMap.size + _symFirstMap.size; },
      };
      function _ck(c) { return c.cmc_id ? 'cmc_' + c.cmc_id : c.sy; }
      const MIN_VOL = 0;
      try {
        $('lProg').classList.remove('hidden');
        $('pFill').style.width = '3%'; $('pTxt').textContent = t('loadingData');

        // ===== PHASE 0: PRELOADED DATA (fetched in HTML <head> — instant) =====
        if (window._preload && window._preload.coins) {
          try {
            const preData = await window._preload.coins;
            if (preData && preData.coins && preData.coins.length > 50) {
              preData.coins.forEach(c => { if (c.c4 === undefined) c.c4 = 0; allC.push(c); symMap.set(_ck(c), c); });
              applyKnownSupply(allC);
              $('pFill').style.width = '100%';
              reRank(); assignExCounts(); cBatch = 2; filtC = [...allC]; render(); buildTrending(); buildTicker();
              $('lProg').classList.add('hidden');
              if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
              if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
              if ($('ldSt')) $('ldSt').textContent = allC.length + ' ' + t('coins') + ' ✓';
              updateGlobalFromData(); initWS();
              console.log('🚀 Preloaded:', allC.length, 'coins (fetched during HTML parse)');
              // Background: load full 10K from KV silently
              setTimeout(async () => {
                try {
                  const kvR = await Promise.race([fetch(KV_WORKER + '/api/coins?start=0&limit=10000'), _tout(10000)]);
                  if (kvR.ok) {
                    const kvData = await kvR.json();
                    const kvCoins = kvData.coins || kvData;
                    if (kvCoins && Array.isArray(kvCoins) && kvCoins.length > allC.length * 0.8) {
                      let updated = 0, added = 0;
                      kvCoins.forEach(c => {
                        const key = _ck(c);
                        const existing = symMap.get(key);
                        if (existing) {
                          if (c.pr > 0) existing.pr = c.pr;
                          if (c.c24 && c.c24 !== 0) existing.c24 = c.c24;
                          if (c.c1 && c.c1 !== 0) existing.c1 = c.c1;
                          if (c.c7 && c.c7 !== 0) existing.c7 = c.c7;
                          if (c.mc > 0) existing.mc = c.mc;
                          if (c.vol > 0) existing.vol = c.vol;
                          updated++;
                        } else {
                          if (c.c4 === undefined) c.c4 = 0;
                          allC.push(c); symMap.set(key, c);
                          added++;
                        }
                      });
                      if (added > 0) { reRank(); filtC = [...allC]; render(); buildTicker(); }
                      else if (updated > 0) { filtC = [...allC]; render(); }
                      cacheSet('cryptohub_coins', allC);
                      console.log('🔄 Full KV loaded:', updated, 'updated,', added, 'added, total:', allC.length);
                    }
                  }
                } catch (e) { console.log('Background KV skip:', e.message); }
              }, 300);
              setTimeout(refreshPrices, 800);
              setTimeout(loadMore1h7d, 5000);
              setTimeout(persistFallbacks, 20000);
              window._preload.coins = null; // clear preload
              isL = false; return;
            }
          } catch(pe) { console.log('Preload miss:', pe.message); }
        }

        // ===== PHASE 0b: SESSION CACHE (instant — 0ms) =====
        const cached = cacheGet('cryptohub_coins');
        if (cached && cached.length > 50) {
          cached.forEach(c => { allC.push(c); symMap.set(_ck(c), c); });
          applyKnownSupply(allC);
          $('pFill').style.width = '100%';
          reRank(); assignExCounts(); cBatch = 2; filtC = [...allC]; render(); buildTrending(); buildTicker();
          $('lProg').classList.add('hidden');
          if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
          if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
          if ($('ldSt')) $('ldSt').textContent = allC.length + ' ' + t('coins') + ' ✓';
          updateGlobalFromData(); initWS();
          console.log('⚡ Instant cache:', allC.length, 'coins');
          // Background: update from KV Worker silently
          setTimeout(async () => {
            try {
              const kvR = await Promise.race([fetch(KV_WORKER + '/api/coins?start=0&limit=10000'), _tout(10000)]);
              if (kvR.ok) {
                const kvData = await kvR.json();
                const kvCoins = kvData.coins || kvData;
                if (kvCoins && Array.isArray(kvCoins) && kvCoins.length > allC.length * 0.8) {
                  // Only update prices + add NEW coins — never remove existing ones
                  let updated = 0, added = 0;
                  kvCoins.forEach(c => {
                    const key = _ck(c);
                    const existing = symMap.get(key);
                    if (existing) {
                      if (c.pr > 0) existing.pr = c.pr;
                      if (c.c24 && c.c24 !== 0) existing.c24 = c.c24;
                      if (c.c1 && c.c1 !== 0) existing.c1 = c.c1;
                      if (c.c7 && c.c7 !== 0) existing.c7 = c.c7;
                      if (c.mc > 0) existing.mc = c.mc;
                      if (c.vol > 0) existing.vol = c.vol;
                      updated++;
                    } else {
                      if (c.c4 === undefined) c.c4 = 0;
                      allC.push(c); symMap.set(key, c);
                      added++;
                    }
                  });
                  if (added > 0) { reRank(); filtC = [...allC]; render(); buildTicker(); }
                  else if (updated > 0) { filtC = [...allC]; render(); }
                  cacheSet('cryptohub_coins', allC);
                  console.log('🔄 Background KV update:', updated, 'updated,', added, 'added, total:', allC.length);
                }
              }
            } catch (e) { console.log('Background KV update skip:', e.message); }
          }, 500);
          setTimeout(refreshPrices, 1000);
          setTimeout(loadMore1h7d, 6000);
          setTimeout(persistFallbacks, 25000);
          isL = false; return;
        }

        // ===== PHASE 1: KV WORKER (only if no cache — first visit) =====
        try {
          let kvCoins = null;
          try {
            const kvR = await Promise.race([fetch(KV_WORKER + '/api/coins?start=0&limit=10000'), _tout(10000)]);
            if (kvR.ok) { const kvData = await kvR.json(); kvCoins = kvData.coins || kvData; }
          } catch (e1) { console.log('KV attempt 1 failed:', e1.message); }
          if (!kvCoins || !Array.isArray(kvCoins) || kvCoins.length < 100) {
            try {
              console.log('KV retry...');
              const kvR2 = await Promise.race([fetch(KV_WORKER + '/api/coins?start=0&limit=10000'), _tout(8000)]);
              if (kvR2.ok) { const kvData2 = await kvR2.json(); kvCoins = kvData2.coins || kvData2; }
            } catch (e2) { console.log('KV retry failed:', e2.message); }
          }
          if (!kvCoins || !Array.isArray(kvCoins) || kvCoins.length < 100) {
            try {
              console.log('Trying CMC Worker fallback...');
              const cmcR = await Promise.race([fetch(CMC_WORKER + '/?src=cmc&start=1&limit=5000'), _tout(10000)]);
              if (cmcR.ok) {
                const cmcData = await cmcR.json();
                if (cmcData?.data?.cryptoCurrencyList) {
                  kvCoins = cmcData.data.cryptoCurrencyList.map(coin => {
                    const qt = coin.quotes?.find(q => q.name === 'USD');
                    return { id: coin.slug, cmc_id: coin.id, nm: coin.name, sy: coin.symbol, pr: qt?.price || 0, c1: qt?.percentChange1h || 0, c4: 0, c24: qt?.percentChange24h || 0, c7: qt?.percentChange7d || 0, mc: qt?.marketCap || 0, vol: qt?.volume24h || 0, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + coin.id + '.png', ex: coin.numMarketPairs || 0, sup: coin.circulatingSupply || 0 };
                  });
                }
              }
            } catch (e3) { console.log('CMC Worker fallback failed:', e3.message); }
          }
          if (kvCoins && Array.isArray(kvCoins) && kvCoins.length > 100) {
              kvCoins.forEach(function(c) {
                if (c.c4 === undefined) c.c4 = 0;
                allC.push(c); symMap.set(_ck(c), c);
              });
              applyKnownSupply(allC);
              $('pFill').style.width = '100%';
              reRank(); assignExCounts(); cBatch = 2; filtC = [...allC]; render(); buildTrending(); buildTicker();
              $('lProg').classList.add('hidden');
              if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
              if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
              if ($('ldSt')) $('ldSt').textContent = allC.length + ' ' + t('coins') + ' ✓';
              updateGlobalFromData(); initWS();
              cacheSet('cryptohub_coins', allC);
              console.log('⚡ KV edge snapshot:', allC.length, 'coins loaded');
              setTimeout(refreshPrices, 500);
              setTimeout(loadMore1h7d, 4000);
              setTimeout(persistFallbacks, 20000);
              isL = false; return;
            }
        } catch (kvErr) { console.log('KV snapshot miss:', kvErr.message); }

        // ===== PHASE 1: CoinGecko top 250 + Binance in PARALLEL → correct ranking + live prices =====
        try {
          const [cgTop, bData] = await Promise.all([
            Promise.race([fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'), _tout(8000)]).then(r => r.ok ? r.json() : null).catch(() => null),
            Promise.race([fetch('https://api.binance.com/api/v3/ticker/24hr'), _tout(6000)]).then(r => r.ok ? r.json() : null).catch(() => null)
          ]);

          // First: add CoinGecko top 250 (has market cap, images, correct names)
          if (cgTop && Array.isArray(cgTop)) {
            cgTop.forEach(c => {
              const sy = (c.symbol || '').toUpperCase();
              if (!sy || symMap.has(sy)) return;
              const coin = { id: c.id, rk: allC.length + 1, nm: c.name, sy: sy, pr: c.current_price || 0, c1: sanitizePct(c.price_change_percentage_1h_in_currency), c4: 0, c24: sanitizePct(c.price_change_percentage_24h), c7: sanitizePct(c.price_change_percentage_7d_in_currency), mc: c.market_cap || 0, vol: c.total_volume || 0, img: c.image || '', ex: 0, sup: c.circulating_supply || 0 };
              allC.push(coin); symMap.set(sy, coin);
            });
          }

          // Then: add Binance coins (live prices, more coins, no market cap)
          const bMap = new Map();
          if (bData && Array.isArray(bData)) {
            bData.forEach(t => {
              if (!t.symbol || !t.symbol.endsWith('USDT')) return;
              const sy = t.symbol.replace('USDT', '');
              const vol = parseFloat(t.quoteVolume) || 0;
              const pr = parseFloat(t.lastPrice) || 0;
              if (pr <= 0) return;
              bMap.set(sy, t);
              const existing = symMap.get(sy);
              if (existing) {
                // SAFETY: don't overwrite if price differs by >90% (prevents Bridged BTC $0.001 overwriting real BTC $83K)
                if (existing.pr > 0 && Math.abs(pr - existing.pr) / existing.pr > 0.9) return;
                existing.pr = pr;
                if (existing.c24 === 0) existing.c24 = sanitizePct(t.priceChangePercent);
                if (vol > 0 && (!existing.vol || existing.vol === 0)) existing.vol = vol;
                return;
              }
              const coin = { id: sy.toLowerCase(), rk: allC.length + 1, nm: COIN_NAMES[sy] || sy, sy: sy, pr: pr, c1: 0, c4: 0, c24: sanitizePct(t.priceChangePercent), c7: 0, mc: 0, vol: vol, img: cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: 0, sup: 0 };
              allC.push(coin); symMap.set(sy, coin);
            });
          }

          // FIRST RENDER — top 250 correctly ranked + 600 more from Binance!
          if (allC.length > 0) { reRank(); assignExCounts(); filtC = [...allC]; render(); buildTrending(); buildTicker() }
          console.log('Phase 1:', allC.length, 'coins - rendered!');
        } catch (e) { console.log('Phase 1 err:', e); }

        // ===== PHASE 1.5: CoinCap (fills market cap + more coins) =====
        try {
          const capPages = await Promise.allSettled([
            fetchJSON('https://api.coincap.io/v2/assets?limit=2000&offset=0', 4000),
            fetchJSON('https://api.coincap.io/v2/assets?limit=500&offset=2000', 4000)
          ]);
          capPages.forEach(r => {
            if (r.status !== 'fulfilled' || !r.value || !r.value.data) return;
            r.value.data.forEach(c => {
              const sym = c.symbol.toUpperCase();
              const vol = parseFloat(c.volumeUsd24Hr) || 0;
              const pr = parseFloat(c.priceUsd) || 0;
              const sup = parseFloat(c.supply) || 0;
              let mc = parseFloat(c.marketCapUsd) || 0;
              if (!mc && sup > 0 && pr > 0) mc = sup * pr;
              const existing = symMap.get(sym);
              if (existing) {
                if (mc > 0 && (!existing.mc || existing.mc === 0)) existing.mc = mc;
                if (sup > 0 && (!existing.sup || existing.sup === 0)) existing.sup = sup;
                if (pr > 0 && (!existing.pr || existing.pr === 0)) existing.pr = pr;
                if (!existing.img || existing.img.includes('/0.png')) existing.img = `https://assets.coincap.io/assets/icons/${c.symbol.toLowerCase()}@2x.png`;
                if (existing.nm === existing.sy && c.name) existing.nm = c.name;
                return;
              }
              const coin = { id: c.id, rk: allC.length + 1, nm: c.name, sy: sym, pr: pr, c1: 0, c4: 0, c24: sanitizePct(c.changePercent24Hr), c7: 0, mc: mc, vol: vol, img: `https://assets.coincap.io/assets/icons/${c.symbol.toLowerCase()}@2x.png`, ex: 0, sup: sup };
              allC.push(coin); symMap.set(sym, coin);
            });
          });
          // Re-render with market cap data
          if (allC.length > 0) { reRank(); filtC = [...allC]; render() }
        } catch (e) { }
        console.log('Phase 1.5 CoinCap:', allC.length, 'coins');

        // ===== PHASE 2: Binance + MEXC + Gate.io + OKX in PARALLEL =====
        // ===== PHASE 2: MEXC + Gate.io + OKX (Binance already loaded) =====
        const [mData, gData, okData] = await Promise.allSettled([
          fetchJSON('https://api.mexc.com/api/v3/ticker/24hr', 3000),
          fetchJSON('https://api.gateio.ws/api/v4/spot/tickers', 3000),
          fetchJSON('https://www.okx.com/api/v5/market/tickers?instType=SPOT', 3000)
        ]).then(r => r.map(x => x.status === 'fulfilled' ? x.value : null));
        // MEXC
        if (mData && Array.isArray(mData)) {
          mData.forEach(t => {
            if (!t.symbol || !t.symbol.endsWith('USDT')) return;
            const sy = t.symbol.replace('USDT', '');
            const vol = parseFloat(t.quoteVolume) || 0;
            const existing = symMap.get(sy);
            if (existing) {
              if (vol > 0 && (!existing.vol || existing.vol === 0)) existing.vol = vol;
              if ((!existing.pr || existing.pr === 0)) { const p = parseFloat(t.lastPrice) || 0; if (p > 0) existing.pr = p; }
              return;
            }
            const coin = { id: sy.toLowerCase(), rk: allC.length + 1, nm: COIN_NAMES[sy] || sy, sy: sy, pr: parseFloat(t.lastPrice) || 0, c1: 0, c4: 0, c24: sanitizePct(t.priceChangePercent), c7: 0, mc: 0, vol: vol, img: cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: 0, sup: 0 };
            allC.push(coin); symMap.set(sy, coin);
          });
        }
        // Gate.io
        if (gData && Array.isArray(gData)) {
          gData.forEach(t => {
            if (!t.currency_pair || !t.currency_pair.endsWith('_USDT')) return;
            const sy = t.currency_pair.replace('_USDT', '').toUpperCase();
            const vol = parseFloat(t.quote_volume) || 0;
            const existing = symMap.get(sy);
            if (existing) {
              if (vol > 0 && (!existing.vol || existing.vol === 0)) existing.vol = vol;
              if ((!existing.pr || existing.pr === 0)) { const p = parseFloat(t.last) || 0; if (p > 0) existing.pr = p; }
              return;
            }
            const coin = { id: sy.toLowerCase(), rk: allC.length + 1, nm: COIN_NAMES[sy] || sy, sy: sy, pr: parseFloat(t.last) || 0, c1: 0, c4: 0, c24: sanitizePct(t.change_percentage), c7: 0, mc: 0, vol: vol, img: cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: 0, sup: 0 };
            allC.push(coin); symMap.set(sy, coin);
          });
        }
        // OKX
        if (okData && okData.data) {
          okData.data.forEach(t => {
            if (!t.instId || !t.instId.endsWith('-USDT')) return;
            const sy = t.instId.replace('-USDT', '').toUpperCase();
            const vol = parseFloat(t.volCcy24h) || 0;
            const existing = symMap.get(sy);
            if (existing) {
              if (vol > 0 && (!existing.vol || existing.vol === 0)) existing.vol = vol;
              if ((!existing.pr || existing.pr === 0)) { const p = parseFloat(t.last) || 0; if (p > 0) existing.pr = p; }
              return;
            }
            const coin = { id: sy.toLowerCase(), rk: allC.length + 1, nm: COIN_NAMES[sy] || sy, sy: sy, pr: parseFloat(t.last) || 0, c1: 0, c4: 0, c24: t.open24h > 0 ? ((parseFloat(t.last) - parseFloat(t.open24h)) / parseFloat(t.open24h) * 100) : 0, c7: 0, mc: 0, vol: vol, img: cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: 0, sup: 0 };
            allC.push(coin); symMap.set(sy, coin);
          });
        }
        // Bybit
        try {
          const byData = await fetchJSON('https://api.bybit.com/v5/market/tickers?category=spot', 3000);
          if (byData && byData.result && byData.result.list) {
            byData.result.list.forEach(t => {
              if (!t.symbol || !t.symbol.endsWith('USDT')) return;
              const sy = t.symbol.replace('USDT', '');
              const vol = parseFloat(t.turnover24h) || 0;
              const existing = symMap.get(sy);
              if (existing) {
                if (vol > 0 && (!existing.vol || existing.vol === 0)) existing.vol = vol;
                if ((!existing.pr || existing.pr === 0)) { const p = parseFloat(t.lastPrice) || 0; if (p > 0) existing.pr = p; }
                return;
              }
              const coin = { id: sy.toLowerCase(), rk: allC.length + 1, nm: COIN_NAMES[sy] || sy, sy: sy, pr: parseFloat(t.lastPrice) || 0, c1: 0, c4: 0, c24: sanitizePct(sanitizePct(parseFloat(t.price24hPcnt) * 100)), c7: 0, mc: 0, vol: vol, img: cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: 0, sup: 0 };
              allC.push(coin); symMap.set(sy, coin);
            });
          }
        } catch (e) { }
        // KuCoin
        try {
          const kuData = await fetchJSON('https://api.kucoin.com/api/v1/market/allTickers', 3000);
          if (kuData && kuData.data && kuData.data.ticker) {
            kuData.data.ticker.forEach(t => {
              if (!t.symbol || !t.symbol.endsWith('-USDT')) return;
              const sy = t.symbol.replace('-USDT', '').toUpperCase();
              const vol = parseFloat(t.volValue) || 0;
              const existing = symMap.get(sy);
              if (existing) {
                if (vol > 0 && (!existing.vol || existing.vol === 0)) existing.vol = vol;
                if ((!existing.pr || existing.pr === 0)) { const p = parseFloat(t.last) || 0; if (p > 0) existing.pr = p; }
                return;
              }
              const coin = { id: sy.toLowerCase(), rk: allC.length + 1, nm: COIN_NAMES[sy] || sy, sy: sy, pr: parseFloat(t.last) || 0, c1: 0, c4: 0, c24: sanitizePct(parseFloat(t.changeRate) * 100), c7: 0, mc: 0, vol: vol, img: cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: 0, sup: 0 };
              allC.push(coin); symMap.set(sy, coin);
            });
          }
        } catch (e) { }
        // Binance BTC pairs (coins not available in USDT)
        try {
          if (bData && Array.isArray(bData)) {
            const btcPrice = allC.find(c => c.sy === 'BTC')?.pr || 0;
            if (btcPrice > 0) {
              bData.forEach(t => {
                if (!t.symbol || !t.symbol.endsWith('BTC') || t.symbol === 'USDTBTC') return;
                const sy = t.symbol.replace('BTC', '');
                if (symMap.has(sy)) return;
                const prBtc = parseFloat(t.lastPrice) || 0;
                const vol = (parseFloat(t.quoteVolume) || 0) * btcPrice;
                const coin = { id: sy.toLowerCase(), rk: allC.length + 1, nm: COIN_NAMES[sy] || sy, sy: sy, pr: prBtc * btcPrice, c1: 0, c4: 0, c24: sanitizePct(t.priceChangePercent), c7: 0, mc: 0, vol: vol, img: cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: 0, sup: 0 };
                allC.push(coin); symMap.set(sy, coin);
              });
            }
          }
        } catch (e) { }
        $('pFill').style.width = '70%'; $('pTxt').textContent = t('loadingData') + ` (${allC.length})`;
        console.log('Phase 2 Exchanges:', allC.length, 'coins');

        // ===== PHASE 2.5: CoinGecko extra pages (batched to avoid rate limits) =====
        try {
          // Only fetch 10 pages (2500 coins) — CoinGecko rate limits beyond this anyway
          const CG_PAGES = 10;
          const CG_BATCH = 5;
          for (let batch = 0; batch < CG_PAGES; batch += CG_BATCH) {
            const cgPages = [];
            for (let p = batch + 1; p <= Math.min(batch + CG_BATCH, CG_PAGES); p++) {
              cgPages.push(fetchJSON(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${p}&sparkline=false`, 6000));
            }
            const cgResults = await Promise.allSettled(cgPages);
            cgResults.forEach(r => {
              if (r.status !== 'fulfilled' || !r.value || !Array.isArray(r.value)) return;
              r.value.forEach(c => {
                const sy = (c.symbol || '').toUpperCase();
                if (!sy || symMap.has(sy)) return;
                const coin = { id: c.id, rk: allC.length + 1, nm: c.name, sy: sy, pr: c.current_price || 0, c1: 0, c4: 0, c24: sanitizePct(c.price_change_percentage_24h), c7: 0, mc: c.market_cap || 0, vol: c.total_volume || 0, img: c.image || '', ex: 0, sup: c.circulating_supply || 0 };
                allC.push(coin); symMap.set(sy, coin);
              });
            });
          }
          console.log('Phase 2.5 CoinGecko:', allC.length, 'coins');
        } catch (e) { console.log('CoinGecko extra err:', e) }

        // Re-rank + re-render
        allC.sort((a, b) => (b.mc || 0) - (a.mc || 0) || (b.vol || 0) - (a.vol || 0));
        allC.forEach((c, i) => c.rk = i + 1);
        reRank(); assignExCounts(); filtC = [...allC]; render(); buildTrending(); buildTicker();

        // ===== PHASE 3: CoinMarketCap background enrichment (fast & parallel) =====
        $('pFill').style.width = '80%'; $('pTxt').textContent = t('loadingData') + ` (${allC.length})`;

        (async () => {
          try {
            // Fire CMC requests in parallel (5 batches of 2000 = 10,000 coins — rest via worker)
            const allReqs = [];
            for (let start = 1; start <= 10001; start += 2000) {
              allReqs.push(fetchCMC(`https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=${start}&limit=2000&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all`, Math.floor(start / 2000) % PROXIES.length));
            }
            const results = await Promise.allSettled(allReqs);
            let added = 0;
            results.forEach(function (r) {
              if (r.status !== 'fulfilled' || !r.value) return;
              var d = r.value;
              if (!d || !d.data || !d.data.cryptoCurrencyList) return;
              d.data.cryptoCurrencyList.forEach(function (coin) {
                var qt = coin.quotes && coin.quotes.length ? coin.quotes.find(function (q) { return q.name === 'USD'; }) : null;
                if (!qt) return;
                var sym = coin.symbol;
                var cmcKey = 'cmc_' + coin.id;
                var existing = symMap.get(cmcKey);
                if (existing) {
                  if (qt.marketCap > 0 && (!existing.mc || existing.mc === 0)) existing.mc = qt.marketCap;
                  if (qt.volume24h > 0 && (!existing.vol || existing.vol === 0)) existing.vol = qt.volume24h;
                  if (qt.price > 0 && (!existing.pr || existing.pr === 0)) existing.pr = qt.price;
                  if (qt.percentChange1h && existing.c1 === 0) existing.c1 = qt.percentChange1h;
                  if (qt.percentChange7d && existing.c7 === 0) existing.c7 = qt.percentChange7d;
                  if (coin.circulatingSupply && (!existing.sup || existing.sup === 0)) existing.sup = coin.circulatingSupply;
                  if (coin.numMarketPairs > 0) existing.ex = coin.numMarketPairs;
                  if (!existing.img || existing.img.includes('/0.png')) existing.img = 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + coin.id + '.png';
                  saveFallback(existing);
                  return;
                }
                var vol = qt.volume24h || 0, mc = qt.marketCap || 0;
                var nc = { id: coin.slug || sym.toLowerCase(), cmc_id: coin.id, rk: allC.length + 1, nm: coin.name, sy: sym, pr: qt.price || 0, c1: qt.percentChange1h || 0, c4: 0, c24: qt.percentChange24h || 0, c7: qt.percentChange7d || 0, mc: mc, vol: vol, img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + coin.id + '.png', ex: coin.numMarketPairs || 0, sup: coin.circulatingSupply || 0, ts: 0, ms: 0, plat: coin.platform ? coin.platform.slug : null, tags: coin.tags || [] };
                allC.push(nc); symMap.set(cmcKey, nc); added++;
              });
            });
            if (added > 0) {
              allC.sort(function (a, b) { return (parseFloat(b.mc) || 0) - (parseFloat(a.mc) || 0) || (parseFloat(b.vol) || 0) - (parseFloat(a.vol) || 0); });
              allC.forEach(function (c, i) { c.rk = i + 1; });
              filtC = allC.slice(); doFilter();
              if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
              if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
              console.log('CMC added', added, 'coins. Total:', allC.length);
            }
          } catch (e) { console.log('CMC enrichment err:', e); }
          allC.sort(function (a, b) { return (parseFloat(b.mc) || 0) - (parseFloat(a.mc) || 0) || (parseFloat(b.vol) || 0) - (parseFloat(a.vol) || 0); });
          allC.forEach(function (c, i) { c.rk = i + 1; });
          assignExCounts(); filtC = allC.slice(); render(); buildTicker(); updateGlobalFromData();
          cacheSet('cryptohub_coins', allC);
          persistFallbacks();
          console.log('CMC enrichment done. Total:', allC.length);
        })();

        $('pFill').style.width = '100%';
        reRank(); assignExCounts(); cBatch = 2; filtC = [...allC]; render(); buildTrending(); buildTicker();
        $('lProg').classList.add('hidden');
        if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
        if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
        if ($('ldSt')) $('ldSt').textContent = allC.length + ' ' + t('coins') + ' ✓';
        updateGlobalFromData();
        initWS();
        setTimeout(loadMore1h7d, 6000);
        setTimeout(enrichMarketCap, 8000);
        // setTimeout(enrichFromCMCPro, 25000); // Worker handles this
        // setTimeout(autoLoadMore, 10000); // Worker handles this
        setTimeout(persistFallbacks, 30000);
        console.log('Visible coins:', allC.length);
      } catch (e) {
        console.error('Load err:', e);
        $('tBody').innerHTML = `<tr><td colspan="10" class="p-8 text-center text-red-500">${t('errorLoading')}<br><button onclick="location.reload()" class="mt-2 px-3 py-1.5 rounded-lg text-white text-xs" style="background:var(--ac)">${t('retry')}</button></td></tr>`;
      } isL = false
    }

    // Quick price refresh (for cached loads)
    async function refreshPrices() {
      try {
        const [bData, mData, gData, byData] = await Promise.all([
          fetchJSON('https://api.binance.com/api/v3/ticker/24hr', 3000),
          fetchJSON('https://api.mexc.com/api/v3/ticker/24hr', 3000),
          fetchJSON('https://api.gateio.ws/api/v4/spot/tickers', 3000),
          fetchJSON('https://api.bybit.com/v5/market/tickers?category=spot', 3000)
        ]);
        // Build volume/price maps from all exchanges
        const volMap = new Map(); // sy -> total volume across exchanges
        const prMap = new Map();  // sy -> best price (Binance priority)
        const chgMap = new Map(); // sy -> 24h change
        // Binance (highest priority for price)
        if (bData && Array.isArray(bData)) {
          bData.forEach(t => {
            if (!t.symbol || !t.symbol.endsWith('USDT')) return;
            const sy = t.symbol.replace('USDT', '');
            const vol = parseFloat(t.quoteVolume) || 0;
            const pr = parseFloat(t.lastPrice) || 0;
            if (pr > 0) prMap.set(sy, pr);
            if (vol > 0) volMap.set(sy, (volMap.get(sy) || 0) + vol);
            chgMap.set(sy, sanitizePct(t.priceChangePercent));
          });
        }
        // MEXC (fills gaps)
        if (mData && Array.isArray(mData)) {
          mData.forEach(t => {
            if (!t.symbol || !t.symbol.endsWith('USDT')) return;
            const sy = t.symbol.replace('USDT', '');
            const vol = parseFloat(t.quoteVolume) || 0;
            if (!prMap.has(sy)) { const pr = parseFloat(t.lastPrice) || 0; if (pr > 0) prMap.set(sy, pr); }
            if (vol > 0) volMap.set(sy, (volMap.get(sy) || 0) + vol);
            if (!chgMap.has(sy)) chgMap.set(sy, sanitizePct(t.priceChangePercent));
          });
        }
        // Gate.io (fills gaps)
        if (gData && Array.isArray(gData)) {
          gData.forEach(t => {
            if (!t.currency_pair || !t.currency_pair.endsWith('_USDT')) return;
            const sy = t.currency_pair.replace('_USDT', '').toUpperCase();
            const vol = parseFloat(t.quote_volume) || 0;
            if (!prMap.has(sy)) { const pr = parseFloat(t.last) || 0; if (pr > 0) prMap.set(sy, pr); }
            if (vol > 0) volMap.set(sy, (volMap.get(sy) || 0) + vol);
            if (!chgMap.has(sy)) chgMap.set(sy, sanitizePct(t.change_percentage));
          });
        }
        // Bybit
        if (byData && byData.result && byData.result.list) {
          byData.result.list.forEach(t => {
            if (!t.symbol || !t.symbol.endsWith('USDT')) return;
            const sy = t.symbol.replace('USDT', '');
            const vol = parseFloat(t.turnover24h) || 0;
            if (!prMap.has(sy)) { const pr = parseFloat(t.lastPrice) || 0; if (pr > 0) prMap.set(sy, pr); }
            if (vol > 0) volMap.set(sy, (volMap.get(sy) || 0) + vol);
            if (!chgMap.has(sy) && t.price24hPcnt) chgMap.set(sy, sanitizePct(parseFloat(t.price24hPcnt) * 100));
          });
        }
        // Apply to allC
        let updated = 0;
        allC.forEach(c => {
          const pr = prMap.get(c.sy);
          // SAFETY: don't overwrite if price differs by >90%
          if (pr && pr > 0) {
            if (c.pr > 0 && Math.abs(pr - c.pr) / c.pr > 0.9) { /* skip wild price change */ }
            else { c.pr = pr; updated++; }
          }
          const chg = chgMap.get(c.sy);
          if (chg !== undefined) c.c24 = chg;
          const vol = volMap.get(c.sy);
          if (vol && vol > 0 && (!c.vol || c.vol === 0)) { c.vol = vol; updated++; }
          if ((!c.mc || c.mc === 0) && c.pr > 0 && c.sup > 0) { c.mc = c.pr * c.sup; updated++; }
          applyFallback(c);
          saveFallback(c);
        });
        if (updated > 0) { filtC = [...allC]; render(); }
        console.log('[refreshPrices] Updated', updated, 'data points');
      } catch (e) { console.warn('refreshPrices err:', e); }
    }

    // Common coin names for Binance fallback
    const COIN_NAMES = { DAI: 'Dai', USDT: 'Tether', USDC: 'USD Coin', BUSD: 'Binance USD', TUSD: 'TrueUSD', FRAX: 'Frax', LUSD: 'Liquity USD', USDP: 'Pax Dollar', GUSD: 'Gemini Dollar', PYUSD: 'PayPal USD', USDD: 'USDD', FDUSD: 'First Digital USD', WBTC: 'Wrapped Bitcoin', STETH: 'Lido Staked ETH', WSTETH: 'Wrapped stETH', RETH: 'Rocket Pool ETH', CBETH: 'Coinbase Wrapped ETH', WETH: 'Wrapped Ether', WEETH: 'Wrapped eETH', PAXG: 'PAX Gold', BTC: 'Bitcoin', ETH: 'Ethereum', BNB: 'BNB', SOL: 'Solana', XRP: 'XRP', DOGE: 'Dogecoin', ADA: 'Cardano', AVAX: 'Avalanche', DOT: 'Polkadot', LINK: 'Chainlink', MATIC: 'Polygon', UNI: 'Uniswap', SHIB: 'Shiba Inu', LTC: 'Litecoin', BCH: 'Bitcoin Cash', ATOM: 'Cosmos', FIL: 'Filecoin', APT: 'Aptos', ARB: 'Arbitrum', OP: 'Optimism', SUI: 'Sui', SEI: 'Sei', TIA: 'Celestia', INJ: 'Injective', JUP: 'Jupiter', NEAR: 'NEAR', ICP: 'Internet Computer', RNDR: 'Render', FET: 'Fetch.ai', GRT: 'The Graph', IMX: 'Immutable X', MKR: 'Maker', AAVE: 'Aave', SNX: 'Synthetix', CRV: 'Curve', LDO: 'Lido', RPL: 'Rocket Pool', ENS: 'ENS', SAND: 'The Sandbox', MANA: 'Decentraland', AXS: 'Axie Infinity', APE: 'ApeCoin', PEPE: 'Pepe', FLOKI: 'Floki', WLD: 'Worldcoin', BONK: 'Bonk', WIF: 'dogwifhat', TRX: 'TRON', ETC: 'Ethereum Classic', ALGO: 'Algorand', XLM: 'Stellar', VET: 'VeChain', HBAR: 'Hedera', THETA: 'Theta', EOS: 'EOS', XTZ: 'Tezos', FLOW: 'Flow', MINA: 'Mina', NEO: 'NEO', EGLD: 'MultiversX', KAVA: 'Kava', ONE: 'Harmony', ROSE: 'Oasis', FTM: 'Fantom', CKB: 'Nervos', KAS: 'Kaspa', TON: 'Toncoin', ORDI: 'ORDI', STX: 'Stacks', RUNE: 'THORChain', BLUR: 'Blur', GMX: 'GMX', PENDLE: 'Pendle', JTO: 'Jito', PYTH: 'Pyth', RAY: 'Raydium', CAKE: 'PancakeSwap', JASMY: 'JasmyCoin', CHZ: 'Chiliz', GMT: 'STEPN', GAL: 'Galxe', CFX: 'Conflux', ACH: 'Alchemy Pay', AGLD: 'Adventure Gold', AGIX: 'SingularityNET', AI: 'Sleepless AI', ALICE: 'My Neighbor Alice', ALPHA: 'Alpha Finance', ANKR: 'Ankr', ANT: 'Aragon', AR: 'Arweave', AUDIO: 'Audius', BAND: 'Band Protocol', BAT: 'Basic Attention', BOME: 'BOOK OF MEME', CELO: 'Celo', COMP: 'Compound', DASH: 'Dash', DYDX: 'dYdX', DYM: 'Dymension', ENJ: 'Enjin', GNO: 'Gnosis', ICX: 'ICON', IOTA: 'IOTA', LINA: 'Linear', MASK: 'Mask Network', OCEAN: 'Ocean Protocol', OMG: 'OMG Network', ONT: 'Ontology', QNT: 'Quant', QTUM: 'Qtum', SC: 'Siacoin', SKL: 'SKALE', STORJ: 'Storj', SUSHI: 'SushiSwap', SXP: 'Solar', YFI: 'yearn.finance', ZEC: 'Zcash', ZIL: 'Zilliqa', ZRX: '0x', MMT: 'Momentum' };
    // CMC coin IDs for image URLs
    const CMC_IDS = {
      BTC: 1, ETH: 1027, USDT: 825, BNB: 1839, SOL: 5426, XRP: 52, USDC: 3408, DOGE: 74, ADA: 2010, TRX: 1958, AVAX: 5805, LINK: 1975, DOT: 6636, SHIB: 5994, TON: 11419, UNI: 7083, LTC: 2, BCH: 1831, NEAR: 6535, ATOM: 3794, XLM: 512, HBAR: 4642, APT: 21794, FIL: 2280, ARB: 11841, OP: 11840, SUI: 20947, SEI: 23149, INJ: 7226, FET: 5681, RNDR: 5690, GRT: 6719, IMX: 10603, MKR: 1518, AAVE: 7278, PEPE: 24478, WIF: 28752, BONK: 23095, FLOKI: 10804, WLD: 13502, STX: 4847, RUNE: 4157, ETC: 1321, ALGO: 4030, VET: 3077, FTM: 3513, MANA: 1966, SAND: 6210, AXS: 6783, APE: 18876, EOS: 1765, XTZ: 2011, NEO: 1376, THETA: 2416, IOTA: 1720, DASH: 131, ZEC: 1437, COMP: 5692, SNX: 2586, CRV: 6538, LDO: 8000, ENJ: 2130, CHZ: 4066, GMT: 18069, CAKE: 7186, SUSHI: 6758, YFI: 5864, KAS: 20396, EGLD: 6892, DYDX: 28324, GMX: 11857, PENDLE: 9481, JUP: 29210, PYTH: 28177, TIA: 22861, QNT: 3155, AR: 5632, PAXG: 4705, DAI: 4943, WBTC: 3717, STETH: 8085, KCS: 2087, CRO: 3635, GALA: 7080, FLOW: 4558, MINA: 8646, KAVA: 4846, ONE: 3945, ROSE: 7653, CKB: 4948, ORDI: 25028, SXP: 4279, BAT: 1697, ZIL: 2469, ICX: 2099, ONT: 2566, QTUM: 1684, SC: 1042, SKL: 5765, STORJ: 1772, ZRX: 1896, ANKR: 3783, BAND: 4679, CELO: 5567, CFX: 7334, JASMY: 8425, AUDIO: 7455, GNO: 1659, MASK: 8536, OMG: 1808, BLUR: 23121, RAY: 8526, ALICE: 8766, BOME: 29870, DYM: 28932, ENS: 13855, RPL: 2943, ACH: 6958, LINA: 7102, AGLD: 11568,
      // Extended coverage — top 200-400 by market cap
      PI: 31730, TAO: 22974, ONDO: 18626, FDUSD: 26081, AERO: 29270, ROBO: 30273, XUSD: 26688, A2Z: 32287, MMT: 38231,
      JTO: 29469, PYUSD: 28298, ETHFI: 29814, ENA: 30171, W: 29587, STRK: 22691, MANTA: 28301, ALT: 29737,
      PORTAL: 29971, PIXEL: 30832, WEN: 30126, MYRO: 29045, BCUT: 30564, SLERF: 30602, TRUMP: 35788, MELANIA: 35951,
      PNUT: 33575, LUCE: 34168, MOODENG: 32982, GOAT: 33960, NEIRO: 34506, ACT: 34988, CHILLGUY: 34887,
      VIRTUAL: 28850, AI16Z: 34889, GRIFFAIN: 35108, FARTCOIN: 35167, ZEREBRO: 34793, SWARMS: 35372,
      BRETT: 29743, TOSHI: 30126, DEGEN: 29660, HIGHER: 30560, PRIME: 26481, BEAM: 26450, SUPER: 6717,
      BLUR: 23121, HOOK: 22352, MAGIC: 18549, RDNT: 20414, VELA: 22017, GNS: 10726, GAINS: 20312,
      HFT: 22177, LQTY: 9640, DODO: 7224, ALPHA: 7225, PERP: 8259, BADGER: 7859, CREAM: 6892, HARVEST: 7626,
      PICKLE: 7786, COVER: 7958, VALUE: 7440, SWRV: 7654, HBTC: 7923, RENBTC: 6117,
      OCEAN: 3911, AGI: 5681, NMR: 1732, REP: 1104, MLN: 544, OXT: 2563, KEEP: 5566, NU: 6892, TBTC: 5776,
      CELR: 3829, IOTX: 2777, RSR: 3964, REN: 2539, OGN: 5117, DUSK: 4730, AERGO: 3671, ARPA: 4695,
      CTSI: 5444, DATA: 2546, RLC: 2019, TRB: 4823, NKN: 2780, FIO: 5865, DENT: 1886, MTL: 1788,
      COCOS: 3947, TFUEL: 3623, WAN: 2606, STPT: 4006, LOOM: 2588, PERL: 4705, WTC: 2396, HC: 2663,
      AE: 1700, ZEN: 1698, DCR: 1168, DGB: 109, SC: 1042, DIVI: 2567, ARDR: 1320, LSK: 1214, NAV: 811,
      STEEM: 1230, NXT: 66, XEM: 873, WAVES: 1274, GAME: 2148, GAS: 1785, IOST: 2405, ELF: 2299,
      NULS: 2092, WAN: 2606, GXC: 1576, NANO: 1567, ZRX: 1896, POLY: 3789, CELR: 3829,
      WSTETH: 12409, CBETH: 21535, RETH: 15060, WEETH: 30277, WETH: 2396, FRAX: 6952, LUSD: 9566, USDP: 3330, GUSD: 4779,
      TUSD: 2563, BUSD: 4687, USDD: 19891,
      KNC: 1982, BAND: 4679, HEGIC: 7023, UMA: 5617, BAL: 5728, MTA: 5748, CREAM: 6892, PICKLE: 7786,
      ALCX: 8613, SPELL: 11289, ICE: 10632, BTRFLY: 16749, LOOKS: 16563, X2Y2: 18679, SUDOSWAP: 21160,
      DOODLES: 18688, BAYC: 17162, AZUKI: 18385,
      METIS: 9640, BOBA: 14556, MOVR: 9285, GLMR: 14013, KLAY: 4256, OAS: 21021, TOMO: 2570,
      CANTO: 21516, EVMOS: 19899, ROSE: 7653, AURORA: 14803, KUB: 5765, FUSE: 5765, OKT: 8267,
      HT: 2502, GT: 4269, BGB: 8119, OKB: 3897, MX: 2956, LEO: 3957,
      DYDX: 28324, SNX: 2586, PERP: 8259, KWENTA: 23050, GMX: 11857, GNS: 10726, GAINS: 20312,
      VELO: 9452, THALES: 12274, LYRA: 12193, PREMIA: 8289, HEGIC: 7023, OPYN: 8243,
      FORTH: 9288, INDEX: 7981, DPI: 7982, MVI: 9531, BED: 9532, DATA2: 10016, IBTC: 9533, IMATIC: 9534,
      COMP: 5692, CREAM: 6892, IRON: 10000,
      YFII: 5957, ROOK: 10044, BIFI: 7311, BUNNY: 9739, AUTO: 9644, MDX: 9001, SWAMP: 9638, EPS: 8645,
      BSW: 10073, BABY: 9868, CHESS: 9990, NFTB: 10177, NULS: 2092, ANKR: 3783,
      LUNC: 4172, USTC: 7129, LUNA: 20314,
      AVAX: 5805, PNG: 9442, JOE: 11396, QI: 11338, XAVA: 9770,
      NEAR: 6535, AURORA: 14803, OCT: 16540, REF: 10064,
      SOL: 5426, SRM: 6187, MNGO: 10660, STEP: 9695, SUNNY: 10643, PORT: 11055, TULIP: 10771, LARIX: 11068, FIDA: 7978, MAPS: 8490, OXY: 8533,
      ALGO: 4030, YLDY: 11414,
      DOT: 6636, GLMR: 14013, MOVR: 9285, PHA: 6841, KSM: 5034,
      ATOM: 3794, OSMO: 12220, JUNO: 14299, STARS: 15271, AKT: 7431, SCRT: 5604, DVPN: 7786, CTK: 6888,
      KAVA: 4846, HARD: 8431, SWP: 9544,
      MATIC: 3890, QUICK: 8206, GHST: 7046, DFYN: 9596, FISH: 9692, BONE: 9737, LEASH: 10142, TREAT: 11029,
      FTM: 3513, BOO: 9036, ICE: 10632, ZOO: 9750, SPELL: 11289, MIM: 162, LQDR: 13456,
      ONE: 3945, VIPER: 10523, TRANQ: 10698,
      EGLD: 6892, MEX: 8425, RIDE: 10671, ITHEUM: 12935,
      CELO: 5567, UBE: 9907, MOBI: 10048, SOURCE: 11285,
      KDA: 5647,
      HBAR: 4642, HBAR: 4642,
      IOTA: 1720, ASMB: 14801,
      XDC: 2634,
      ZIL: 2469, ZWAP: 10266,
      EWT: 5268,
      VET: 3077, VTHO: 3012,
      NULS: 2092, Nuls: 2092,
      QTUM: 1684,
      THETA: 2416, TFUEL: 3623,
      ICX: 2099, CFT: 5553, OMM: 11088,
      ONT: 2566, ONG: 3217,
      IOST: 2405,
      XEM: 873, NEM: 873,
      WAVES: 1274, NSBT: 8093, VIRES: 12081, SWOP: 9465,
      LSK: 1214,
      ARDR: 1320,
      STEEM: 1230,
      NANO: 1567,
      DGB: 109,
      DCR: 1168,
      ZEN: 1698,
      XVG: 693,
      SC: 1042,
      STORJ: 1772,
      ANKR: 3783,
      RLC: 2019,
      REP: 1104,
      OXT: 2563,
      NMR: 1732,
      MLN: 544,
      KNC: 1982,
      KEEP: 5566,
      BTT: 16086, SUN: 5665, JST: 5488, WIN: 4206, NFT: 11654,
      HT: 2502, MDT: 9014,
      CRO: 3635, VVS: 18679, TONIC: 14892,
      OKB: 3897, OKT: 8267,
      GT: 4269,
      MX: 2956,
      BGB: 8119,
      LEO: 3957,
      WRX: 5161,
      NEXO: 3778,
      CEL: 2700,
      FTT: 4195
    };
    function cmcImg(sy) { var id = CMC_IDS[sy]; return id ? 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + id + '.png' : ''; }

    // Smart image fallback: tries CMC → CoinCap → letter avatar
    function coinImgWithFallback(coin) {
      // Priority 1: CMC image if we have the ID (most reliable)
      var cmcId = CMC_IDS[coin.sy];
      if (cmcId) return 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + cmcId + '.png';
      // Priority 2: existing image if valid
      if (coin.img && coin.img.length > 10 && !coin.img.includes('/0.png') && !coin.img.includes('undefined')) return coin.img;
      // Priority 3: letter avatar directly (skip unreliable CDNs)
      return letterAvatar(coin.sy, 24);
    }

    // Track failed image sources to avoid retrying
    var _imgFailed = {};

    // Cascading image onerror: tries CMC → CoinCap → letter avatar
    function imgOnerror(el, sy) {
      var key = sy || 'unknown';
      if (!_imgFailed[key]) _imgFailed[key] = 0;
      _imgFailed[key]++;

      // After 2 failures, go straight to letter avatar
      if (_imgFailed[key] >= 2) {
        el.onerror = null;
        el.src = letterAvatar(sy, 24);
        return;
      }

      var src = el.src || '';

      // Stage 1: try CMC if available
      if (!src.includes('coinmarketcap.com') && CMC_IDS[sy]) {
        el.onerror = function() { imgOnerror(el, sy); };
        el.src = 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + CMC_IDS[sy] + '.png';
        return;
      }
      // Stage 2: try CoinCap
      if (!src.includes('coincap.io')) {
        el.onerror = function() { imgOnerror(el, sy); };
        el.src = 'https://assets.coincap.io/assets/icons/' + sy.toLowerCase() + '@2x.png';
        return;
      }
      // Stage 3: letter avatar
      el.onerror = null;
      el.src = letterAvatar(sy, 24);
    }

    // Check loaded images — catch transparent/tiny placeholders that don't trigger onerror
    function imgOnload(el, sy) {
      if (el.naturalWidth < 2 || el.naturalHeight < 2) {
        el.onerror = null;
        el.onload = null;
        el.src = letterAvatar(sy, 24);
      }
    }

    // Generate SVG letter avatar for coins with no image
    function letterAvatar(sym, size) {
      if (!size || size < 1) size = 24;
      var colors = ['#3861fb', '#16c784', '#f7931a', '#ea3943', '#9c27b0', '#00bcd4', '#ff5722', '#607d8b'];
      var s = sym || '??';
      var color = colors[s.charCodeAt(0) % colors.length];
      var letter = s.slice(0, 2).toUpperCase();
      var fs = Math.round(size * 0.42);
      var r = Math.round(size / 2);
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + size + "' height='" + size + "'%3E%3Crect width='" + size + "' height='" + size + "' rx='" + r + "' fill='" + encodeURIComponent(color) + "'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial,sans-serif' font-size='" + fs + "' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='central'%3E" + letter + "%3C/text%3E%3C/svg%3E";
    }

    async function loadMore1h7d() {
      // Symbol→coin map for O(1) lookup
      const symIdx = new Map(); allC.forEach(c => symIdx.set(c.sy, c));

      // Helper: batch Binance rolling ticker (only top 500 coins for speed)
      async function batchTicker(windowSize) {
        const map = {};
        const topSyms = allC.slice(0, 500).filter(c => c.sy !== 'USDT').map(c => c.sy + 'USDT');
        // Batch in groups of 100 symbols
        for (let i = 0; i < topSyms.length; i += 100) {
          const batch = topSyms.slice(i, i + 100);
          try {
            const r = await fetch(`https://api.binance.com/api/v3/ticker?windowSize=${windowSize}&symbols=${encodeURIComponent(JSON.stringify(batch))}`);
            if (r.ok) {
              const d = await r.json();
              (Array.isArray(d) ? d : [d]).forEach(t => {
                if (t.symbol && t.symbol.endsWith('USDT')) map[t.symbol.replace('USDT', '')] = sanitizePct(t.priceChangePercent);
              });
            }
          } catch (e) { }
        }
        return map;
      }

      // Fetch 1h + 4h in parallel
      console.log('Fetching 1h% + 4h%...');
      try {
        const [m1, m4] = await Promise.all([batchTicker('1h'), batchTicker('4h')]);
        if (Object.keys(m1).length > 0) allC.forEach(c => { if (m1[c.sy] !== undefined) c.c1 = m1[c.sy] });
        if (Object.keys(m4).length > 0) allC.forEach(c => { if (m4[c.sy] !== undefined) c.c4 = m4[c.sy] });
      } catch (e) { console.log('1h/4h err:', e) }
      // 4h% klines fallback if batchTicker returned empty
      if (!allC.slice(0, 20).some(c => c.c4 !== 0)) {
        console.log('4h% fallback via klines...');
        try {
          const top = allC.slice(0, 200);
          for (let i = 0; i < top.length; i += 25) {
            await Promise.all(top.slice(i, i + 25).map(async c => {
              try {
                const r = await fetch(`https://api.binance.com/api/v3/klines?symbol=${c.sy}USDT&interval=1h&limit=5`);
                if (r.ok) { const k = await r.json(); if (k.length >= 4) { const o = parseFloat(k[0][1]), cl = parseFloat(k[k.length - 1][4]); if (o > 0) c.c4 = ((cl - o) / o) * 100 } }
              } catch (e) { }
            }))
          }
        } catch (e) { console.log('4h kline err:', e) }
      }

      filtC = [...allC]; doSortArr(); render();

      // 7d% from klines (top 100 only for speed)
      console.log('Fetching 7d%...');
      try {
        const m7 = {};
        const top = allC.slice(0, 100);
        const chunks = []; for (let i = 0; i < top.length; i += 20)chunks.push(top.slice(i, i + 20));
        for (const chunk of chunks) {
          await Promise.all(chunk.map(async c => {
            try {
              const r = await fetch(`https://api.binance.com/api/v3/klines?symbol=${c.sy}USDT&interval=1d&limit=8`);
              if (r.ok) { const k = await r.json(); if (k.length >= 2) { const old = parseFloat(k[0][1]); const cur = parseFloat(k[k.length - 1][4]); if (old > 0) m7[c.sy] = ((cur - old) / old) * 100; } }
            } catch (e) { }
          }));
        }
        if (Object.keys(m7).length > 0) allC.forEach(c => { if (m7[c.sy] !== undefined) c.c7 = m7[c.sy] });
        filtC = [...allC]; doSortArr(); render();
      } catch (e) { console.log('7d err:', e) }

      // Save updated data to cache
      cacheSet('cryptohub_coins', allC.slice(0, 15000));
    }

    // ===== ENRICH MARKET CAP & SUPPLY - CoinGecko live data =====
    async function enrichMarketCap() {
      console.log('Starting Supply enrichment from CoinGecko...');
      let totalFixed = 0;
      const symIdx = new Map(); allC.forEach(c => symIdx.set(c.sy.toUpperCase(), c));

      // SOURCE 1: CoinGecko /coins/markets — live circulating + total + max supply
      try {
        for (const page of [1, 2, 3, 4]) {
          try {
            const r = await fetch(
              `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${page}&sparkline=false`
            );
            if (!r.ok) { if (r.status === 429) await new Promise(w => setTimeout(w, 3000)); break; }
            const data = await r.json();
            if (!Array.isArray(data)) break;
            let fixed = 0;
            data.forEach(cg => {
              const sym = cg.symbol ? cg.symbol.toUpperCase() : null;
              if (!sym) return;
              const coin = symIdx.get(sym);
              if (!coin) return;
              if (cg.circulating_supply > 0) coin.sup = cg.circulating_supply;
              if (cg.total_supply > 0) coin.ts = cg.total_supply;
              if (cg.max_supply > 0) coin.ms = cg.max_supply;
              else if (cg.max_supply === null) coin.ms = -1; // -1 = confirmed unlimited
              if (cg.market_cap > 0 && (!coin.mc || coin.mc === 0)) { coin.mc = cg.market_cap; fixed++; }
              if (!coin.img || coin.img.includes('/0.png')) coin.img = cg.image;
            });
            if (fixed > 0) { totalFixed += fixed; filtC = [...allC]; doSortArr(); render(); updateGlobalFromData(); }
            console.log(`CoinGecko page ${page}: ${data.length} coins`);
            if (data.length < 250) break;
            await new Promise(w => setTimeout(w, 1200));
          } catch (e) { break; }
        }
      } catch (e) { console.warn('CoinGecko supply err:', e); }

      // SOURCE 2: CoinCap bulk — fills remaining gaps
      try {
        const r = await fetch('https://api.coincap.io/v2/assets?limit=2000&offset=0');
        if (r.ok) {
          const d = await r.json();
          if (d.data) {
            // SUPPLY_DB placeholder to fix missing entries in old code
            const SUPPLY_DB = {
              // sym: [circulating, total, max]
              BTC: [19800000, 21000000, 21000000],
              ETH: [120400000, 120400000, null],
              BNB: [145900000, 145900000, 200000000],
              SOL: [470000000, 588000000, null],
              XRP: [57200000000, 99988314000, 100000000000],
              DOGE: [147000000000, 147000000000, null],
              ADA: [35900000000, 37500000000, 45000000000],
              AVAX: [416000000, 440000000, 720000000],
              DOT: [1420000000, 1420000000, null],
              LINK: [627000000, 1000000000, 1000000000],
              MATIC: [10000000000, 10000000000, 10000000000],
              UNI: [753700000, 1000000000, 1000000000],
              SHIB: [589300000000000, 589300000000000, 999990000000000000],
              LTC: [74600000, 84000000, 84000000],
              TRX: [88700000000, 88700000000, null],
              TON: [3470000000, 5107000000, null],
              NEAR: [1190000000, 1190000000, null],
              ICP: [473000000, 473000000, null],
              FIL: [560000000, 2000000000, null],
              APT: [490000000, 1110000000, null],
              ARB: [3480000000, 10000000000, 10000000000],
              OP: [1340000000, 4294967000, 4294967000],
              SUI: [2900000000, 10000000000, 10000000000],
              SEI: [4100000000, 10000000000, 10000000000],
              TIA: [280000000, 1070000000, null],
              INJ: [93000000, 100000000, 100000000],
              ATOM: [395000000, 395000000, null],
              FTM: [2800000000, 3175000000, 3175000000],
              ALGO: [8200000000, 8200000000, 10000000000],
              XLM: [30000000000, 50001787000, 50001787000],
              VET: [72700000000, 86712634466, 86712634466],
              HBAR: [38000000000, 50000000000, 50000000000],
              THETA: [1000000000, 1000000000, 1000000000],
              EOS: [1150000000, 2099000000, null],
              XTZ: [990000000, 990000000, null],
              FLOW: [1530000000, 1530000000, null],
              MINA: [1120000000, 1120000000, null],
              NEO: [70540000, 100000000, 100000000],
              EGLD: [27000000, 31415000, null],
              KAVA: [1060000000, 1060000000, null],
              ONE: [13700000000, 13700000000, null],
              ROSE: [6800000000, 10000000000, 10000000000],
              CKB: [45000000000, 45000000000, null],
              KAS: [25000000000, 28700000000, 28700000000],
              PEPE: [420690000000000, 420690000000000, 420690000000000],
              FLOKI: [9700000000000, 10000000000000, 10000000000000],
              WIF: [999000000, 999000000, 999000000],
              BONK: [76000000000000, 93700000000000, null],
              WLD: [470000000, 10000000000, 10000000000],
              STX: [1510000000, 1818000000, 1818000000],
              RUNE: [340000000, 500000000, 500000000],
              IMX: [1600000000, 2000000000, 2000000000],
              MKR: [920000, 977631, 1005577],
              AAVE: [15100000, 16000000, 16000000],
              GRT: [9600000000, 10800000000, 10800000000],
              SAND: [2180000000, 3000000000, 3000000000],
              MANA: [1880000000, 2193000000, null],
              AXS: [147000000, 270000000, 270000000],
              CAKE: [280000000, 450000000, 750000000],
              CRV: [1350000000, 2110000000, 3030000000],
              BCH: [19700000, 21000000, 21000000],
              DASH: [11600000, 18900000, 18900000],
              DYDX: [275000000, 1000000000, 1000000000],
              ENJ: [1000000000, 1000000000, 1000000000],
              COMP: [9400000, 10000000, 10000000],
              GNO: [2600000, 3000000, null],
              ICX: [960000000, 960000000, null],
              IOTA: [3300000000, 4600000000, 4600000000],
              MASK: [100000000, 100000000, 100000000],
              OCEAN: [613000000, 1410000000, 1410000000],
              OMG: [140000000, 140000000, 140000000],
              ONT: [1230000000, 1000000000, 1000000000],
              PAXG: [80000, null, null],
              QNT: [14600000, 14612493, 14612493],
              QTUM: [105000000, 107822406, 107822406],
              SC: [57600000000, 57600000000, null],
              SKL: [7200000000, 7000000000, 7000000000],
              STORJ: [440000000, 425000000, null],
              SUSHI: [275000000, 250000000, 250000000],
              YFI: [33800, 36666, 36666],
              ZEC: [16200000, 21000000, 21000000],
              ZIL: [19000000000, 21000000000, 21000000000],
              ZRX: [1000000000, 1000000000, 1000000000],
              SNX: [328000000, 309400000, null],
              LDO: [893000000, 1000000000, 1000000000],
              RPL: [20000000, null, null],
              ENS: [31500000, 100000000, 100000000],
              APE: [610000000, 1000000000, 1000000000],
              BOME: [69000000000, 69000000000, 69000000000],
              DYM: [260000000, 1000000000, null],
              LINA: [5800000000, 10000000000, 10000000000],
              BAT: [1500000000, 1500000000, 1500000000],
              BAND: [145000000, 100000000, null],
              AR: [66500000, 66000000, 66000000],
              ANKR: [10000000000, 10000000000, 10000000000],
              CHZ: [8900000000, 8888888000, 8888888888],
              GMT: [6200000000, 6000000000, 6000000000],
              CFX: [4800000000, 5000000000, null],
              JASMY: [50000000000, 50000000000, 50000000000],
              BLUR: [3200000000, 4000000000, null],
              GMX: [9400000, 13250000, 13250000],
              PENDLE: [162000000, 258000000, null],
              JTO: [135000000, 1000000000, 1000000000],
              PYTH: [3660000000, 10000000000, 10000000000],
              RAY: [300000000, 555000000, 555000000],
              ORDI: [21000000, 21000000, 21000000],
              ETC: [146000000, 210700000, 210700000],
              RNDR: [382000000, 531000000, 531000000],
              FET: [2550000000, 2630000000, 2630000000],
              TAO: [7300000, 21000000, 21000000],
              USDT: [120000000000, 120000000000, null],
              USDC: [45000000000, 45000000000, null],
              DAI: [5400000000, 5400000000, null],
              BNB: [145900000, 145900000, 200000000],
              BUSD: [null, null, null],
              STETH: [null, null, null],
              WBTC: [null, null, 21000000],
              WETH: [null, null, null],
            }; // end SUPPLY_DB (kept for reference, overridden by live data)
            let fixed2 = 0;
            d.data.forEach(a => {
              const coin = symIdx.get(a.symbol.toUpperCase());
              if (!coin) return;
              const mc = parseFloat(a.marketCapUsd) || 0;
              if (mc > 0 && (!coin.mc || coin.mc === 0)) { coin.mc = mc; fixed2++; }
              const sup = parseFloat(a.supply) || 0;
              if (sup > 0 && (!coin.sup || coin.sup === 0)) coin.sup = sup;
            });
            if (fixed2 > 0) { totalFixed += fixed2; filtC = [...allC]; doSortArr(); render(); updateGlobalFromData(); }
            console.log('CoinCap fallback:', fixed2);
          }
        }
      } catch (e) { }

      // SOURCE 3: Volume ratio estimation for remaining
      try {
        const final = allC.filter(c => !c.mc || c.mc === 0);
        if (final.length > 0) {
          const known = allC.filter(c => c.mc > 0 && c.vol > 0);
          if (known.length > 10) {
            const ratios = known.map(c => c.mc / c.vol).sort((a, b) => a - b);
            const med = ratios[Math.floor(ratios.length / 2)];
            let fixed = 0;
            final.forEach(c => { if (c.vol > 0) { c.mc = c.vol * med; fixed++; totalFixed++; } });
            if (fixed > 0) { filtC = [...allC]; doSortArr(); render(); updateGlobalFromData(); }
          }
        }
      } catch (e) { }

      applyKnownSupply(allC); // Final correction — HARD_SUPPLY always wins
      console.log('Supply enrichment done. Fixed:', totalFixed);
      cacheSet('cryptohub_coins', allC.slice(0, 15000));
      // Bridge for token-vesting tool
      try {
        const slim = allC.slice(0, 15000).map(c => ({ sy: c.sy, id: c.id, nm: c.nm, sup: c.sup || 0, ts: c.ts || 0, ms: c.ms || 0, img: c.img || '' }));
        sessionStorage.setItem('ch_supply_bridge', JSON.stringify(slim));
      } catch (e) { }
    }

    // ── CMC Pro API enrichment — fills missing price/vol/mc for all coins ──
    async function enrichFromCMCPro() {
      console.log('[CMC Pro] Starting enrichment...');
      const symIdx = new Map(); allC.forEach(c => symIdx.set(c.sy.toUpperCase(), c));
      let totalFixed = 0;
      try {
        // Fetch top 20000 coins in batches of 5000
        for (let start = 1; start <= 20001; start += 5000) {
          const d = await fetchCMCPro(`/v1/cryptocurrency/listings/latest?start=${start}&limit=5000&convert=USD&sort=market_cap&sort_dir=desc`);
          if (!d || !d.data) { console.warn('[CMC Pro] No data for start=' + start); continue; }
          const list = Array.isArray(d.data) ? d.data : [];
          list.forEach(coin => {
            const sym = coin.symbol ? coin.symbol.toUpperCase() : null;
            if (!sym) return;
            const qt = coin.quote && coin.quote.USD ? coin.quote.USD : null;
            if (!qt) return;
            const existing = symIdx.get(sym);
            if (existing) {
              // Fill gaps only — don't overwrite good data with zeros
              if (qt.price > 0 && (!existing.pr || existing.pr === 0)) { existing.pr = qt.price; totalFixed++; }
              if (qt.volume_24h > 0 && (!existing.vol || existing.vol === 0)) { existing.vol = qt.volume_24h; totalFixed++; }
              if (qt.market_cap > 0 && (!existing.mc || existing.mc === 0)) { existing.mc = qt.market_cap; totalFixed++; }
              if (qt.percent_change_24h && existing.c24 === 0) existing.c24 = qt.percent_change_24h;
              if (qt.percent_change_1h && existing.c1 === 0) existing.c1 = qt.percent_change_1h;
              if (qt.percent_change_7d && existing.c7 === 0) existing.c7 = qt.percent_change_7d;
              if (coin.circulating_supply > 0 && (!existing.sup || existing.sup === 0)) existing.sup = coin.circulating_supply;
              if (coin.total_supply > 0 && (!existing.ts || existing.ts === 0)) existing.ts = coin.total_supply;
              if (coin.max_supply > 0 && (!existing.ms || existing.ms === 0)) existing.ms = coin.max_supply;
              // Real exchange count from API
              if (coin.num_market_pairs > 0) existing.ex = coin.num_market_pairs;
              // Fix image
              if (coin.id && (!existing.img || existing.img.includes('/0.png'))) existing.img = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`;
              // Save good values to fallback
              saveFallback(existing);
            } else {
              // New coin not in our list
              const vol = qt.volume_24h || 0; const mc = qt.market_cap || 0;
              const nc = { id: coin.slug || sym.toLowerCase(), rk: allC.length + 1, nm: coin.name, sy: sym, pr: qt.price || 0, c1: qt.percent_change_1h || 0, c4: 0, c24: qt.percent_change_24h || 0, c7: qt.percent_change_7d || 0, mc: mc, vol: vol, img: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`, ex: coin.num_market_pairs || 0, sup: coin.circulating_supply || 0, ts: coin.total_supply || 0, ms: coin.max_supply || 0 };
              allC.push(nc); symIdx.set(sym, nc);
              saveFallback(nc);
            }
          });
          console.log(`[CMC Pro] Processed ${list.length} coins from start=${start}`);
          // Update UI after each batch
          reRank(); assignExCounts(); filtC = [...allC]; render();
          if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
          if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
          await new Promise(r => setTimeout(r, 300));
        }
        reRank(); assignExCounts(); filtC = [...allC]; doSortArr(); render(); updateGlobalFromData();
        persistFallbacks();
        cacheSet('cryptohub_coins', allC);
        if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
        if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
        console.log(`[CMC Pro] Done. Total coins: ${allC.length}`);
      } catch (e) { console.warn('[CMC Pro] Enrichment error:', e); }
    }

    // ── Auto Load More: fetch from multiple free APIs in parallel ──
    async function autoLoadMore() {
      console.log('[AutoLoad] Starting... Current:', allC.length);
      var symSet = new Set();
      var symIdx = new Map();
      allC.forEach(function (c) { symSet.add(c.sy.toUpperCase()); symIdx.set(c.sy.toUpperCase(), c); });
      var added = 0;

      function addOrEnrich(sy, nm, pr, c24, mc, vol, img, sup, c1, c7, nmp) {
        sy = sy.toUpperCase();
        var existing = symIdx.get(sy);
        if (existing) {
          if (pr > 0 && (!existing.pr || existing.pr === 0)) existing.pr = pr;
          if (mc > 0 && (!existing.mc || existing.mc === 0)) existing.mc = mc;
          if (vol > 0 && (!existing.vol || existing.vol === 0)) existing.vol = vol;
          if (c24 && existing.c24 === 0) existing.c24 = c24;
          if (c1 && existing.c1 === 0) existing.c1 = c1;
          if (c7 && existing.c7 === 0) existing.c7 = c7;
          if (sup > 0 && (!existing.sup || existing.sup === 0)) existing.sup = sup;
          if (nmp > 0) existing.ex = nmp;
          if (img && img.length > 10 && (!existing.img || existing.img.includes('/0.png'))) existing.img = img;
          return;
        }
        symSet.add(sy);
        var nc = { id: sy.toLowerCase(), rk: allC.length + 1, nm: nm, sy: sy, pr: pr, c1: c1 || 0, c4: 0, c24: c24 || 0, c7: c7 || 0, mc: mc, vol: vol, img: img || cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: nmp || 0, sup: sup || 0 };
        allC.push(nc);
        symIdx.set(sy, nc);
        added++;
      }

      // === SOURCE 1 (PRIMARY): CMC via Worker proxy — up to 8,500 coins, no CORS ===
      var proxyP = (async function () {
        try {
          for (var start = 1; start <= 10001; start += 5000) {
            try {
              var r = await Promise.race([
                fetch('https://summer-union-dc27.bitcoinswapnet.workers.dev/?src=cmc&start=' + start + '&limit=5000'),
                new Promise(function (_, rej) { setTimeout(function () { rej(new Error('timeout')); }, 15000); })
              ]);
              if (!r.ok) continue;
              var raw = await r.json();
              // CMC free API format: data.cryptoCurrencyList
              var list = [];
              if (raw && raw.data && raw.data.cryptoCurrencyList) {
                list = raw.data.cryptoCurrencyList;
              } else if (raw && raw.data && Array.isArray(raw.data)) {
                list = raw.data;
              }
              if (!list.length) continue;
              list.forEach(function (coin) {
                // Handle both Pro and Free API formats
                var qt = null;
                if (coin.quote && coin.quote.USD) {
                  qt = coin.quote.USD;
                } else if (coin.quotes && coin.quotes.length) {
                  var found = coin.quotes.find(function (q) { return q.name === 'USD' });
                  if (found) qt = { price: found.price, volume_24h: found.volume24h, market_cap: found.marketCap, percent_change_1h: found.percentChange1h, percent_change_24h: found.percentChange24h, percent_change_7d: found.percentChange7d };
                }
                if (!qt) return;
                var nmp = coin.num_market_pairs || coin.marketPairCount || coin.numMarketPairs || 0;
                addOrEnrich(coin.symbol, coin.name, qt.price || 0, qt.percent_change_24h || qt.percentChange24h || 0, qt.market_cap || qt.marketCap || 0, qt.volume_24h || qt.volume24h || 0, 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + coin.id + '.png', coin.circulating_supply || coin.circulatingSupply || 0, qt.percent_change_1h || qt.percentChange1h || 0, qt.percent_change_7d || qt.percentChange7d || 0, nmp);
              });
              console.log('[AutoLoad] CMC Worker batch start=' + start + ': ' + list.length + ' coins. Total:', allC.length);
              // Update UI after each batch
              reRank(); assignExCounts(); filtC = allC.slice(); render();
              if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
              if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
            } catch (e) { console.log('[AutoLoad] CMC Worker batch err:', e.message); }
          }
          console.log('[AutoLoad] CMC Proxy ALL done. Total:', allC.length);
        } catch (e) { console.log('[AutoLoad] CMC Proxy err:', e.message); }
      })();

      // === SOURCE 2: CoinPaprika (free, no rate limit, ~2500 coins) ===
      var paprikaP = (async function () {
        try {
          var r = await fetch('https://api.coinpaprika.com/v1/tickers?quotes=USD');
          if (!r.ok) return;
          var data = await r.json();
          if (!Array.isArray(data)) return;
          data.forEach(function (c) {
            var sy = (c.symbol || '').toUpperCase();
            var qt = c.quotes && c.quotes.USD ? c.quotes.USD : null;
            if (!sy || !qt) return;
            addOrEnrich(sy, c.name, qt.price || 0, qt.percent_change_24h || 0, qt.market_cap || 0, qt.volume_24h || 0, '', 0);
          });
          console.log('[AutoLoad] CoinPaprika done. Total:', allC.length);
        } catch (e) { console.log('[AutoLoad] CoinPaprika err:', e.message); }
      })();

      // === SOURCE 3: CoinGecko (sequential, fills gaps) ===
      var geckoP = (async function () {
        for (var page = 1; page <= 60; page++) {
          try {
            var r = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=' + page + '&sparkline=false');
            if (!r.ok) {
              if (r.status === 429) { await new Promise(function (w) { setTimeout(w, 65000); }); page--; continue; }
              break;
            }
            var data = await r.json();
            if (!Array.isArray(data) || data.length === 0) break;
            data.forEach(function (c) {
              addOrEnrich((c.symbol || '').toUpperCase(), c.name, c.current_price || 0, sanitizePct(c.price_change_percentage_24h), c.market_cap || 0, c.total_volume || 0, c.image || '', c.circulating_supply || 0);
            });
            if (page % 10 === 0) {
              reRank(); assignExCounts(); filtC = allC.slice(); render();
              if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
              if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
            }
            await new Promise(function (w) { setTimeout(w, 1200); });
          } catch (e) { await new Promise(function (w) { setTimeout(w, 5000); }); }
        }
        console.log('[AutoLoad] CoinGecko done. Total:', allC.length);
      })();

      // Wait for proxy (fastest, most complete)
      await proxyP;
      // Then paprika
      await paprikaP;
      // Gecko runs in background
      await geckoP;

      // Final update
      reRank(); assignExCounts(); filtC = allC.slice(); render(); updateGlobalFromData();
      cacheSet('cryptohub_coins', allC);
      persistFallbacks();
      if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString();
      if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString();
      console.log('[AutoLoad] ALL DONE. Added', added, 'coins. Total:', allC.length);
    }

    // Realistic exchange count based on market cap and volume
    const KNOWN_EX_COUNTS = { BTC: 897, ETH: 827, USDT: 789, BNB: 412, SOL: 538, XRP: 537, USDC: 435, ADA: 398, DOGE: 445, TRX: 344, AVAX: 352, DOT: 337, LINK: 405, MATIC: 358, SHIB: 362, TON: 198, UNI: 385, LTC: 400, BCH: 356, XLM: 340, NEAR: 252, ICP: 198, APT: 215, FIL: 295, ARB: 238, OP: 218, ATOM: 310, IMX: 178, GRT: 218, ALGO: 248, FTM: 242, SAND: 198, MANA: 205, AXS: 195, AAVE: 258, CRV: 195, SNX: 175, COMP: 185, MKR: 215, LDO: 168, PEPE: 285, WIF: 145, BONK: 165, FLOKI: 172, FET: 195, RNDR: 198, INJ: 178, SEI: 165, SUI: 205, TIA: 158, JUP: 142, WLD: 155, STX: 162, RUNE: 175, EGLD: 145, THETA: 165, EOS: 312, IOTA: 178, XTZ: 215, NEO: 185, DASH: 195, ZEC: 198, ETC: 338, HBAR: 195, VET: 218, KCS: 85, CRO: 148, GALA: 175, ENJ: 165, CHZ: 178, APE: 185, DYDX: 135, GMX: 118, PENDLE: 125, PYTH: 132, STRK: 115, ZRO: 108, EIGEN: 95, ETHFI: 88, W: 82, ZK: 98, BLAST: 78, MANTA: 85, ONDO: 125, ENA: 135, NOT: 112, PEOPLE: 105, ORDI: 128, SATS: 95, PIXEL: 88, PORTAL: 75, ALT: 72, DYM: 68, BOME: 95, MEW: 78, BRETT: 65, DOG: 58, POPCAT: 72, DAI: 245, WBTC: 168, STETH: 145, WEETH: 85, RETH: 78, CBETH: 65, WETH: 125, LEO: 42, OKB: 85, GT: 65, HT: 55, MX: 48, CAKE: 165, SUSHI: 175, ONE_INCH: 155, BAL: 128, YFI: 158, LIDO: 98 };
    // 1INCH alias
    KNOWN_EX_COUNTS['1INCH'] = 155;
    function estExCount(c) {
      if (KNOWN_EX_COUNTS[c.sy]) return KNOWN_EX_COUNTS[c.sy];
      const mc = parseFloat(c.mc) || 0;
      const vol = parseFloat(c.vol) || 0;
      // Deterministic hash from symbol for consistent minor variation
      let h = 0; const s = c.sy || ''; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
      const v = Math.abs(h % 100) / 100; // 0..0.99 deterministic per symbol
      // Use the higher signal between mc and vol for better estimation
      const score = Math.max(mc, vol * 20); // vol*20 approximates equivalent mc significance
      if (score > 50e9) return Math.floor(300 + v * 200);
      if (score > 10e9) return Math.floor(180 + v * 120);
      if (score > 1e9) return Math.floor(85 + v * 95);
      if (score > 100e6) return Math.floor(35 + v * 55);
      if (score > 10e6) return Math.floor(12 + v * 25);
      if (score > 1e6) return Math.floor(5 + v * 12);
      if (vol > 100000 || mc > 500000) return Math.floor(3 + v * 7);
      if (vol > 0 || mc > 0) return Math.floor(1 + v * 4);
      return 1;
    }
    function assignExCounts() { allC.forEach(c => { applyFallback(c); saveFallback(c); if (!c.ex || c.ex === 0) c.ex = estExCount(c); }); }
    // After CMC data loads with real numMarketPairs, those values will override estimates

    function updateGlobalFromData() {
      if (!allC.length) return;
      const btc = allC.find(c => c.sy === 'BTC'); const eth = allC.find(c => c.sy === 'ETH');
      const totalMc = allC.reduce((s, c) => s + (parseFloat(c.mc) || 0), 0);
      const totalVol = allC.reduce((s, c) => s + (parseFloat(c.vol) || 0), 0);
      const btcMc = btc ? (parseFloat(btc.mc) || 0) : 0; const ethMc = eth ? (parseFloat(eth.mc) || 0) : 0;
      const bd = totalMc > 0 ? (btcMc / totalMc * 100) : 0; const ed = totalMc > 0 ? (ethMc / totalMc * 100) : 0;
      $('btcD').textContent = bd.toFixed(1) + '%';
      $('ethD').textContent = ed.toFixed(1) + '%';
      $('tMcap').textContent = fN(totalMc);
      $('tVol').textContent = fN(totalVol);
      const ai = Math.round(Math.max(0, Math.min(100, (100 - bd) * 1.5)));
      $('altV').textContent = ai; $('altP').style.left = ai + '%';
      $('altL').textContent = ai > 75 ? t('altcoinSeason') : ai < 25 ? t('btcSeason') : t('neutral');
      $('altL').style.color = ai > 75 ? 'var(--gn)' : ai < 25 ? 'var(--ac)' : 'var(--t2)';
    }

    async function loadMore() {
      if (isL) return; isL = true;
      const btn = $('lmBtn'); if (!btn) { isL = false; return; } btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + t('loading');
      $('lProg').classList.remove('hidden');
      const existSyms = new Set(allC.map(c => c.sy));
      const before = allC.length;
      const MIN_VOL = 0; // Load all coins without volume threshold
      try {
        // Load more from CoinMarketCap starting after current count (via CORS proxy)
        const cmcStart = allC.length + 1;
        for (let startBatch = cmcStart; startBatch < cmcStart + 20000; startBatch += 2000) {
          try {
            const reqs = [];
            for (let j = 0; j < 4 && (startBatch + j * 500) < cmcStart + 20000; j++) {
              const start = startBatch + j * 500;
              const url = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=${start}&limit=500&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all`;
              reqs.push(fetchCMC(url, j));
            }
            const results = await Promise.all(reqs);
            results.forEach(d => {
              if (d && d.data && d.data.cryptoCurrencyList && d.data.cryptoCurrencyList.length) {
                d.data.cryptoCurrencyList.forEach(coin => {
                  const sym = coin.symbol;
                  if (existSyms.has(sym)) return;
                  const qt = coin.quotes && coin.quotes.length ? coin.quotes.find(q => q.name === 'USD') : null;
                  if (!qt) return;
                  const vol = qt.volume24h || 0; const mc = qt.marketCap || 0;

                  existSyms.add(sym);
                  allC.push({ id: coin.slug || sym.toLowerCase(), rk: allC.length + 1, nm: coin.name, sy: sym, pr: qt.price || 0, c1: qt.percentChange1h || 0, c4: 0, c24: qt.percentChange24h || 0, c7: qt.percentChange7d || 0, mc: mc, vol: vol, img: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`, ex: coin.numMarketPairs || 0, sup: coin.circulatingSupply || 0, ts: coin.totalSupply || 0, ms: coin.maxSupply || 0, plat: coin.platform ? coin.platform.slug : null, tags: coin.tags || [] });
                });
              }
            });
          } catch (e) { }
          await new Promise(r => setTimeout(r, 150));
        }
        // Fallback: OKX for coins not already included
        try {
          const okData = await fetchJSON('https://www.okx.com/api/v5/market/tickers?instType=SPOT');
          if (okData && okData.data) {
            okData.data.forEach(t => {
              if (!t.instId || !t.instId.endsWith('-USDT')) return;
              const sy = t.instId.replace('-USDT', '').toUpperCase();
              if (existSyms.has(sy)) return;
              const vol = parseFloat(t.volCcy24h) || 0;
              existSyms.add(sy);
              allC.push({ id: sy.toLowerCase(), rk: allC.length + 1, nm: COIN_NAMES[sy] || sy, sy: sy, pr: parseFloat(t.last) || 0, c1: 0, c4: 0, c24: t.open24h > 0 ? ((parseFloat(t.last) - parseFloat(t.open24h)) / parseFloat(t.open24h) * 100) : 0, c7: 0, mc: 0, vol: vol, img: cmcImg(sy) || `https://assets.coincap.io/assets/icons/${sy.toLowerCase()}@2x.png`, ex: 0, sup: 0 });
            });
          }
        } catch (e) { }
        // Re-rank
        allC.sort((a, b) => (b.mc || 0) - (a.mc || 0) || (b.vol || 0) - (a.vol || 0));
        allC.forEach((c, i) => c.rk = i + 1);
        $('pFill').style.width = '100%';
        cBatch++; filtC = [...allC]; doFilter();
        const added = allC.length - before;
        btn.disabled = false;
        btn.innerHTML = added > 0 ? `<i class="fas fa-check-circle"></i> +${added} ${t('coins')} (${allC.length} ${t('coins')})` : `<i class="fas fa-check-circle"></i> ${t('allLoaded')} (${allC.length})`;
        updateGlobalFromData();
      } catch (e) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + t('errorLoading') }
      setTimeout(() => $('lProg').classList.add('hidden'), 800); isL = false;
      setTimeout(enrichMarketCap, 1500);
      // setTimeout(enrichFromCMCPro, 5000); // Worker handles this
      setTimeout(persistFallbacks, 8000)
    }

    // CMC Top Bar

    // Build top gainers belt
    var _tgBuilt = 0;
    function buildTicker() {
      try {
        var sorted = allC.slice().filter(function (c) { return c.c24 > 0 && c.pr > 0 }).sort(function (a, b) { return (b.c24 || 0) - (a.c24 || 0) }).slice(0, 100);
        if (sorted.length < 5) return;
        if (_tgBuilt >= 2) return; _tgBuilt++;
        var h = sorted.map(function (c, i) {
          var img = c.img ? '<img alt="icon" src="' + c.img + '" width="24" height="24" onerror="this.onerror=null;this.src=\'' + letterAvatar(c.sy, 24).replace(/'/g, "\\'") + '\'" loading="lazy">' : '<div class="tg-noimg">' + c.sy.slice(0, 2) + '</div>';
          var pr = fN(c.pr);
          return `<div class="tg-card" onclick="blockRender();showEx('${c.id}','${c.nm.replace(/'/g, "\\'")}','${c.sy}','${c.img}')"><div class="tg-rank">#${i + 1}</div>${img}<span class="tg-sym">${c.sy}</span><span class="tg-pr">${pr}</span><span class="tg-chg tg-up">+${c.c24.toFixed(1)}%</span></div>`;
        }).join('');
        var el = document.getElementById('tickerContent');
        el.innerHTML = h + h;
        el.style.animation = 'none'; void el.offsetHeight; el.style.animation = '';
      } catch (e) { console.log('buildTicker err', e) }
    }

    function buildTrending() {
      if (!allC.length) return;
      const h = [];
      const chg = (v) => `<span class="cmc-chg ${v >= 0 ? 'up' : 'dn'}"><svg width="10" height="10" viewBox="0 0 10 10"><path d="${v >= 0 ? 'M5 2L9 7H1Z' : 'M5 8L1 3H9Z'}" fill="currentColor"/></svg>${Math.abs(v).toFixed(1)}%</span>`;
      const tmc = allC.reduce((s, c) => s + (parseFloat(c.mc) || 0), 0);
      const tvl = allC.reduce((s, c) => s + (parseFloat(c.vol) || 0), 0);
      const btc = allC.find(c => c.sy === 'BTC');
      const eth = allC.find(c => c.sy === 'ETH');
      // Cryptos count
      h.push(`<span class="cmc-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--ac)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Cryptos: <span class="cmc-val">${allC.length.toLocaleString()}</span></span>`);
      h.push('<span class="cmc-sep"></span>');
      // Market Cap + 24h change
      const mcChg = btc ? btc.c24 : 0;
      h.push(`<span class="cmc-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--t2)" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>${t('totalMarketCap')}: <span class="cmc-val">${fN(tmc)}</span> ${chg(mcChg)}</span>`);
      h.push('<span class="cmc-sep"></span>');
      // 24h Volume
      h.push(`<span class="cmc-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--t2)" stroke-width="2"><rect x="3" y="10" width="4" height="11" rx="1"/><rect x="10" y="5" width="4" height="16" rx="1"/><rect x="17" y="1" width="4" height="20" rx="1"/></svg>${t('totalVolume24')}: <span class="cmc-val">${fN(tvl)}</span></span>`);
      h.push('<span class="cmc-sep"></span>');
      // BTC Dominance
      if (btc) {
        const bd = tmc > 0 ? ((btc.mc || 0) / tmc * 100).toFixed(1) : '--';
        h.push(`<span class="cmc-item"><svg viewBox="0 0 24 24" fill="#f7931a"><path d="M12.5 2c.3 0 .5.2.5.5v1c2.5.3 4 1.8 4 3.5 0 1.4-1 2.6-2.7 3.1 2 .4 3.2 1.7 3.2 3.3 0 2-1.8 3.5-4.5 3.8v1.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1.3c-2.7-.3-4.5-1.8-4.5-3.8 0-1.6 1.2-2.9 3.2-3.3C8.5 9.6 7.5 8.4 7.5 7c0-1.7 1.5-3.2 4-3.5v-1c0-.3.2-.5.5-.5z"/></svg>${t('btcDominance')}: <span class="cmc-val">${bd}%</span> ${chg(btc.c24)}</span>`)
      }
      h.push('<span class="cmc-sep"></span>');
      // ETH Dominance
      if (eth) {
        const ed = tmc > 0 ? ((eth.mc || 0) / tmc * 100).toFixed(1) : '--';
        h.push(`<span class="cmc-item"><svg viewBox="0 0 24 24" fill="#627eea"><path d="M12 1.5l-7 11.2L12 16l7-3.3L12 1.5zM12 22.5l-7-9.8L12 17l7-4.3-7 9.8z"/></svg>${t('ethDominance')}: <span class="cmc-val">${ed}%</span> ${chg(eth.c24)}</span>`)
      }
      h.push('<span class="cmc-sep"></span>');
      // Fear & Greed
      if (fgD) {
        const fc = fgC(fgD.n);
        h.push(`<span class="cmc-item"><svg viewBox="0 0 24 24" fill="${fc}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.53L12 21.35z"/></svg>Fear & Greed: <span class="cmc-badge" style="background:${fc}22;color:${fc}">${fgD.n} ${fgLabel(fgD.n)}</span></span>`)
      }
      // Altcoin Index
      const altVE = $('altV'); if (altVE && altVE.textContent !== '--') {
        h.push('<span class="cmc-sep"></span>');
        h.push(`<span class="cmc-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--ac)" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 3v9l6 3"/></svg>${t('altcoinIndex')}: <span class="cmc-val">${altVE.textContent}/100</span></span>`)
      }
      const bar = $('cmcBar');
      if (bar) bar.innerHTML = h.join('');
    }

    // WebSocket + Auto-Reconnect
    let wsR = 0, wsTmr = null, wsOk = false, wsStms = null, wsMp = null, wsLst = 0, pollOn = false;
    let _gUpd = 0; // throttle timestamp for global stats
    function _throttledGlobalUpdate() {
      const now = Date.now(); if (now - _gUpd < 3000) return; _gUpd = now;
      requestAnimationFrame(() => {
        updateGlobalFromData();
        buildTrending();
        // pulse animation on stats
        ['btcD', 'ethD', 'tMcap', 'tVol'].forEach(id => { const el = $(id); if (el) { el.style.transition = 'color .3s'; el.style.color = 'var(--ac)'; setTimeout(() => { el.style.color = '' }, 600) } });
      });
    }
    function initWS() {
      wsMp = new Map(); allC.forEach(c => wsMp.set(c.sy, c));
      // استثناء USDT من WebSocket لأنه لا يوجد زوج USDTUSDT
      wsStms = allC.slice(0, 100).map(c => {
        const s = c.sy.toLowerCase();
        return s === 'usdt' ? null : `${s}usdt@ticker`;
      }).filter(Boolean).slice(0, 50);
      if (!wsStms.length) return; doWS();
      if (!uInt) uInt = setInterval(() => { if (cPage === 1 && document.querySelector('#tab_crypto.active')) { const _upd = () => { try { updatePricesInPlace() } catch (e) { render() } }; if ('requestIdleCallback' in window) { requestIdleCallback(_upd, { timeout: 2000 }) } else { setTimeout(_upd, 0) } } }, 5000);
      setInterval(() => { if (wsOk && Date.now() - wsLst > 25000) { wsOk = false; reWS() } }, 12000);
      // Fetch accurate global market data from CoinGecko every 30s
      _fetchGlobalMarketData();
      setInterval(_fetchGlobalMarketData, 30000);
    }
    function doWS() {
      if (bWs) try { bWs.close() } catch (e) { }
      try {
        bWs = new WebSocket('wss://stream.binance.com:9443/stream?streams=' + wsStms.join('/'));
        bWs.onopen = () => { wsR = 0; wsOk = true; wsLst = Date.now() };
        bWs.onmessage = e => {
          wsLst = Date.now(); try {
            const d = JSON.parse(e.data); if (d.data) {
              const s = d.data.s.replace('USDT', ''), cObj = wsMp.get(s); if (cObj !== undefined) {
                cObj.pr = parseFloat(d.data.c); cObj.c24 = parseFloat(d.data.P); if (d.data.q) cObj.vol = parseFloat(d.data.q);
                _throttledGlobalUpdate();
              }
            }
          } catch (p) { }
        };
        bWs.onclose = ev => { wsOk = false; if (ev.code !== 1000) reWS() }; bWs.onerror = () => { wsOk = false };
      } catch (e) { reWS() }
    }
    function reWS() {
      if (wsR >= 20) { if (!pollOn) { pollOn = true; setInterval(() => refreshPrices().catch(() => { }), 15000) } return }
      wsR++; clearTimeout(wsTmr); wsTmr = setTimeout(doWS, Math.min(1500 * Math.pow(1.4, wsR), 25000))
    }
    window.addEventListener('online', () => { wsR = 0; setTimeout(() => { refreshPrices().catch(() => { }); loadFG(); calcAI(); _fetchGlobalMarketData() }, 800); if (!wsOk && wsStms) doWS() });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) { refreshPrices().catch(() => { }); _fetchGlobalMarketData(); if (!wsOk && wsStms) { wsR = 0; doWS() } } });

    // Real-time Global Market Data (CoinGecko + CoinCap fallback)
    async function _fetchGlobalMarketData() {
      try {
        const [cg, cc] = await Promise.allSettled([
          fetchJSON('https://api.coingecko.com/api/v3/global'),
          fetchJSON('https://api.coincap.io/v2/assets?limit=2')
        ]);
        let tmc = 0, tvl = 0, bd = 0, ed = 0, src = '';
        if (cg.status === 'fulfilled' && cg.value && cg.value.data) {
          const g = cg.value.data;
          tmc = g.total_market_cap && g.total_market_cap.usd ? g.total_market_cap.usd : 0;
          tvl = g.total_volume && g.total_volume.usd ? g.total_volume.usd : 0;
          bd = g.market_cap_percentage && g.market_cap_percentage.btc ? g.market_cap_percentage.btc : 0;
          ed = g.market_cap_percentage && g.market_cap_percentage.eth ? g.market_cap_percentage.eth : 0;
          src = 'CoinGecko';
        }
        if (tmc === 0 && cc.status === 'fulfilled' && cc.value && cc.value.data) {
          // CoinCap fallback for BTC/ETH dominance
          const assets = cc.value.data;
          const btcA = assets.find(a => a.id === 'bitcoin');
          const ethA = assets.find(a => a.id === 'ethereum');
          if (btcA) {
            const btcMc = parseFloat(btcA.marketCapUsd) || 0;
            const localTmc = allC.reduce((s, c) => s + c.mc, 0);
            if (localTmc > 0) { bd = btcMc / localTmc * 100; if (ethA) ed = (parseFloat(ethA.marketCapUsd) || 0) / localTmc * 100 }
            tmc = localTmc; tvl = allC.reduce((s, c) => s + c.vol, 0);
            src = 'CoinCap+local';
          }
        }
        if (tmc > 0) {
          $('btcD').textContent = bd.toFixed(1) + '%';
          $('ethD').textContent = ed.toFixed(1) + '%';
          $('tMcap').textContent = fN(tmc);
          $('tVol').textContent = fN(tvl);
          const ai = Math.round(Math.max(0, Math.min(100, (100 - bd) * 1.5)));
          $('altV').textContent = ai; $('altP').style.left = ai + '%';
          $('altL').textContent = ai > 75 ? t('altcoinSeason') : ai < 25 ? t('btcSeason') : t('neutral');
          $('altL').style.color = ai > 75 ? 'var(--gn)' : ai < 25 ? 'var(--ac)' : 'var(--t2)';
          buildTrending();
          console.log('Global stats updated from', src, '| MC:', fN(tmc), '| BTC:', bd.toFixed(1) + '%');
          // Flash animation
          ['btcD', 'ethD', 'tMcap', 'tVol'].forEach(id => { const el = $(id); if (el) { el.style.transition = 'color .3s'; el.style.color = 'var(--gn)'; setTimeout(() => { el.style.color = '' }, 800) } });
        }
      } catch (e) { console.log('Global data err:', e) }
    }

    // Fear & Greed — Alternative.me (same source as Binance/CoinMarketCap)
    let fgD = null;
    function fgC(v) { return v < 20 ? '#ef4444' : v < 40 ? '#f97316' : v < 60 ? '#eab308' : v < 80 ? '#84cc16' : '#22c55e' }
    function fgLabel(v) { const ls = [t('extremeFear'), t('fear'), t('neutral'), t('greed'), t('extremeGreed')]; return ls[v < 20 ? 0 : v < 40 ? 1 : v < 60 ? 2 : v < 80 ? 3 : 4] }

    // ── Real-time Fear & Greed Engine ──
    // Combines alternative.me daily baseline with live Binance market signals
    let _fgBase = null; // daily baseline from alternative.me

    async function calcLiveFG() {
      try {
        // 1. BTC price momentum (24h & 1h change)
        const btc = allC.find(c => c.sy === 'BTC');
        if (!btc || !btc.pr) return null;
        const btc24h = btc.c24 || 0;
        const btc1h = btc.c1 || 0;

        // 2. Market breadth — how many top 100 coins are green vs red
        const top100 = allC.slice(0, 100);
        const greenCount = top100.filter(c => c.c24 > 0).length;
        const breadth = greenCount / Math.max(top100.length, 1); // 0-1

        // 3. Volume surge — compare current vol to avg
        const totalVol = allC.slice(0, 50).reduce((s, c) => s + (parseFloat(c.vol) || 0), 0);
        const avgMc = allC.slice(0, 50).reduce((s, c) => s + (parseFloat(c.mc) || 0), 0);
        const volRatio = avgMc > 0 ? totalVol / avgMc : 0.05;

        // 4. BTC dominance shift (high dominance = fear, low = greed/altseason)
        const btcDom = avgMc > 0 ? ((parseFloat(btc.mc) || 0) / (allC.reduce((s, c) => s + (parseFloat(c.mc) || 0), 0) || 1)) * 100 : 50;

        // 5. Top gainers momentum
        const avgChange = top100.reduce((s, c) => s + (c.c24 || 0), 0) / Math.max(top100.length, 1);

        // Calculate component scores (each 0-100)
        // Momentum: BTC 24h change mapped to 0-100
        const momentumScore = Math.max(0, Math.min(100, 50 + btc24h * 3));
        // Breadth: % of green coins → 0-100
        const breadthScore = Math.max(0, Math.min(100, breadth * 100));
        // Volume: high vol during up = greed, high vol during down = fear
        const volScore = Math.max(0, Math.min(100, 50 + (volRatio > 0.08 ? (avgChange > 0 ? 20 : -20) : 0) + avgChange * 2));
        // Short-term momentum (1h)
        const shortTermScore = Math.max(0, Math.min(100, 50 + btc1h * 10));
        // BTC dominance (lower = more greed/altseason, higher = fear)
        const domScore = Math.max(0, Math.min(100, 100 - btcDom));

        // Weighted average
        const liveScore = Math.round(
          momentumScore * 0.30 +
          breadthScore * 0.25 +
          volScore * 0.15 +
          shortTermScore * 0.15 +
          domScore * 0.15
        );

        return Math.max(0, Math.min(100, liveScore));
      } catch (e) { return null; }
    }

    async function loadFG() {
      try {
        // Get daily baseline from alternative.me
        const r = await fetch('https://api.alternative.me/fng/?limit=31');
        const d = await r.json();
        const e = d.data;
        _fgBase = { n: +e[0].value, y: +e[1].value, w: +(e[6] || e[0]).value, m: +(e[29] || e[0]).value };

        // Calculate live score
        const liveScore = await calcLiveFG();

        if (liveScore !== null && _fgBase) {
          // Blend: 40% alternative.me baseline + 60% live calculation
          const blended = Math.round(_fgBase.n * 0.4 + liveScore * 0.6);
          fgD = { n: blended, y: _fgBase.y, w: _fgBase.w, m: _fgBase.m };
        } else {
          fgD = _fgBase;
        }
        updFG();
      } catch (e) {
        // Fallback: calculate purely from live data
        const liveScore = await calcLiveFG();
        if (liveScore !== null) {
          fgD = { n: liveScore, y: liveScore, w: liveScore, m: liveScore };
          updFG();
        }
        console.log('FG err:', e);
      }
    }

    // Update FG every 30 seconds with live market data
    async function refreshFG() {
      try {
        const liveScore = await calcLiveFG();
        if (liveScore !== null) {
          if (_fgBase) {
            fgD.n = Math.round(_fgBase.n * 0.4 + liveScore * 0.6);
          } else {
            fgD = { n: liveScore, y: liveScore, w: liveScore, m: liveScore };
          }
          updFG();
        }
      } catch (e) { }
    }
    setInterval(refreshFG, 30000); // Update every 30 seconds

    function updFG() {
      if (!fgD) return;
      const v = fgD.n;
      // Value & label
      $('fgV').textContent = v;
      $('fgL').textContent = fgLabel(v); $('fgL').style.color = fgC(v);

      // SVG arc fill (arc length ~377px)
      const arc = $('fgArc');
      if (arc) { const total = 377; arc.style.strokeDashoffset = total - (v / 100 * total); }

      // SVG needle rotation: 0→-90deg, 50→0deg, 100→90deg
      const nd = $('fgNeedle');
      if (nd) { const angle = -90 + (v / 100) * 180; nd.style.transform = `rotate(${angle}deg)`; }

      // History bars
      [{ b: 'fgBN', h: 'fgHN', v: fgD.n }, { b: 'fgBY', h: 'fgHY', v: fgD.y }, { b: 'fgBW', h: 'fgHW', v: fgD.w }, { b: 'fgBM', h: 'fgHM', v: fgD.m }].forEach(x => {
        const bar = $(x.b), lbl = $(x.h);
        if (bar) { bar.style.width = x.v + '%'; bar.style.background = fgC(x.v); }
        if (lbl) { lbl.textContent = x.v; lbl.style.color = fgC(x.v); }
      });
    }

    // AI Analysis (8 indicators + entry/exit) - Binance klines
    // ── RSI with proper Wilder smoothing ──
    function cRSI(p, n = 14) {
      if (p.length < n + 2) return null;
      let g = 0, l = 0;
      for (let i = 1; i <= n; i++) { const d = p[i] - p[i - 1]; if (d > 0) g += d; else l -= d; }
      let ag = g / n, al = l / n;
      for (let i = n + 1; i < p.length; i++) {
        const d = p[i] - p[i - 1];
        ag = (ag * (n - 1) + Math.max(d, 0)) / n;
        al = (al * (n - 1) + Math.max(-d, 0)) / n;
      }
      return al === 0 ? 100 : 100 - (100 / (1 + ag / al));
    }
    // ── EMA seeded with SMA(n) for accuracy ──
    function cEMA(p, n) {
      if (!p || p.length === 0) return 0;
      if (p.length < n) return p.reduce((a, b) => a + b, 0) / p.length;
      const k = 2 / (n + 1);
      let e = p.slice(0, n).reduce((a, b) => a + b, 0) / n;
      for (let i = n; i < p.length; i++) e = p[i] * k + e * (1 - k);
      return e;
    }
    // ── Stochastic %K ──
    function cStoch(p, n = 14) {
      const r = p.slice(-n), lo = Math.min(...r), hi = Math.max(...r), c = r[r.length - 1];
      return hi === lo ? 50 : ((c - lo) / (hi - lo)) * 100;
    }
    // ── MACD(12,26,9) with histogram ──
    function cMACD(p) {
      if (p.length < 35) return { macd: 0, signal: 0, hist: 0 };
      const mLine = [];
      for (let i = 34; i < p.length; i++) {
        const sl = p.slice(0, i + 1);
        mLine.push(cEMA(sl, 12) - cEMA(sl, 26));
      }
      const macd = mLine[mLine.length - 1], signal = cEMA(mLine, 9);
      return { macd, signal, hist: macd - signal };
    }
    // ── Real ADX(14) Wilder ──
    function cADX(H, L, C, n = 14) {
      if (H.length < n + 2) return 20;
      let trS = 0, pS = 0, mS = 0;
      for (let i = 1; i <= n; i++) {
        const tr = Math.max(H[i] - L[i], Math.abs(H[i] - C[i - 1]), Math.abs(L[i] - C[i - 1]));
        const dp = H[i] - H[i - 1] > L[i - 1] - L[i] ? Math.max(H[i] - H[i - 1], 0) : 0;
        const dm = L[i - 1] - L[i] > H[i] - H[i - 1] ? Math.max(L[i - 1] - L[i], 0) : 0;
        trS += tr; pS += dp; mS += dm;
      }
      for (let i = n + 1; i < H.length; i++) {
        const tr = Math.max(H[i] - L[i], Math.abs(H[i] - C[i - 1]), Math.abs(L[i] - C[i - 1]));
        const dp = H[i] - H[i - 1] > L[i - 1] - L[i] ? Math.max(H[i] - H[i - 1], 0) : 0;
        const dm = L[i - 1] - L[i] > H[i] - H[i - 1] ? Math.max(L[i - 1] - L[i], 0) : 0;
        trS = trS - trS / n + tr; pS = pS - pS / n + dp; mS = mS - mS / n + dm;
      }
      if (trS === 0) return 20;
      const diP = pS / trS * 100, diM = mS / trS * 100;
      return diP + diM === 0 ? 0 : Math.abs(diP - diM) / (diP + diM) * 100;
    }
    // calcAI accepts pre-fetched klines or fetches them itself
    async function calcAI(klines) {
      try {
        let r = klines;
        // If no data passed, fetch now
        if (!r || r.length < 30) {
          r = await fetchJSON('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=60');
        }
        if (!r || r.length < 30) { console.warn('calcAI: no klines'); return; }

        const P = r.map(k => parseFloat(k[4])); // close
        const H = r.map(k => parseFloat(k[2])); // high
        const L = r.map(k => parseFloat(k[3])); // low
        const V = r.map(k => parseFloat(k[5])); // volume
        const cur = P[P.length - 1];
        let bu = 0, be = 0, tot = 8;

        // ── 1. RSI(14) Wilder ──
        const rsi = cRSI(P);
        if (rsi !== null) {
          $('rV').textContent = rsi.toFixed(1);
          $('rBar').style.width = Math.min(rsi, 100) + '%';
          $('rBar').style.background = rsi < 30 ? 'var(--gn)' : rsi > 70 ? 'var(--rd)' : 'var(--ac)';
          if (rsi < 30) { sig('r', 'b', t('oversold')); bu++; sct('rC', 'buy') }
          else if (rsi > 70) { sig('r', 's', t('overbought')); be++; sct('rC', 'sell') }
          else { sig('r', 'n', t('neutral')); sct('rC', 'hold') }
        }

        // ── 2. MACD(12,26,9) histogram ──
        const { macd, signal: macdSig, hist } = cMACD(P);
        $('mV').textContent = macd.toFixed(0);
        if (hist > 0 && macd > macdSig) { sig('m', 'b', t('bullish')); bu++; sct('mC', 'buy') }
        else if (hist < 0) { sig('m', 's', t('bearish')); be++; sct('mC', 'sell') }
        else { sig('m', 'n', t('neutral')); sct('mC', 'hold') }

        // ── 3. Bollinger Bands(20,2) ──
        const rp20 = P.slice(-20), sma20 = rp20.reduce((a, b) => a + b, 0) / 20;
        const std20 = Math.sqrt(rp20.reduce((s, p) => s + Math.pow(p - sma20, 2), 0) / 20);
        const upper = sma20 + std20 * 2, lower = sma20 - std20 * 2;
        const bPos = upper === lower ? 50 : ((cur - lower) / (upper - lower)) * 100;
        $('bV').textContent = bPos.toFixed(0) + '%';
        if (bPos < 15) { sig('b', 'b', t('nearBottom')); bu++; sct('bC', 'buy') }
        else if (bPos > 85) { sig('b', 's', t('nearTop')); be++; sct('bC', 'sell') }
        else { sig('b', 'n', t('neutral')); sct('bC', 'hold') }

        // ── 4. EMA20 vs EMA50 ──
        const e20 = cEMA(P, 20), e50 = cEMA(P, 50);
        $('eV').textContent = '$' + e20.toFixed(0);
        if (e20 > e50) { sig('e', 'b', t('goldenCross')); bu++; sct('eC', 'buy') }
        else { sig('e', 's', t('deathCross')); be++; sct('eC', 'sell') }

        // ── 5. Stochastic(14) ──
        const st = cStoch(P, 14);
        $('stV').textContent = st.toFixed(1);
        if (st < 20) { sig('st', 'b', t('oversold')); bu++; sct('stC', 'buy') }
        else if (st > 80) { sig('st', 's', t('overbought')); be++; sct('stC', 'sell') }
        else { sig('st', 'n', t('neutral')); sct('stC', 'hold') }

        // ── 6. ADX(14) real Wilder + MACD direction ──
        const adx = cADX(H, L, P, 14);
        $('adV').textContent = adx.toFixed(1);
        if (adx > 25 && macd > 0) { sig('ad', 'b', t('strongTrend')); bu++; sct('adC', 'buy') }
        else if (adx > 25 && macd < 0) { sig('ad', 's', t('strongTrend')); be++; sct('adC', 'sell') }
        else { sig('ad', 'n', t('weakTrend')); sct('adC', 'hold') }

        // ── 7. Volume vs 20-day average + price direction ──
        const avgV20 = V.slice(-20).reduce((a, b) => a + b, 0) / 20;
        const curV = V[V.length - 1], vRatio = avgV20 > 0 ? curV / avgV20 : 1;
        $('vlV').textContent = (vRatio * 100).toFixed(0) + '%';
        const priceUp = cur > P[P.length - 2];
        if (vRatio > 1.3 && priceUp) { sig('vl', 'b', t('highVol')); bu++; sct('vlC', 'buy') }
        else if (vRatio > 1.3 && !priceUp) { sig('vl', 's', t('highVol')); be++; sct('vlC', 'sell') }
        else if (vRatio < 0.7) { sig('vl', 'n', t('lowVol')); sct('vlC', 'hold') }
        else { sig('vl', 'n', t('neutral')); sct('vlC', 'hold') }

        // ── 8. Support/Resistance 14-day ──
        const lo14 = Math.min(...P.slice(-14)), hi14 = Math.max(...P.slice(-14));
        $('srV').textContent = 'S:$' + fS(lo14) + ' R:$' + fS(hi14);
        const distS = (cur - lo14) / cur * 100, distR = (hi14 - cur) / cur * 100;
        if (distS < 1.5) { sig('sr', 'b', t('nearBottom')); bu++; sct('srC', 'buy') }
        else if (distR < 1.5) { sig('sr', 's', t('nearTop')); be++; sct('srC', 'sell') }
        else { sig('sr', 'n', t('neutral')); sct('srC', 'hold') }

        // ── Score & UI ──
        const sc = Math.round((bu / tot) * 100);
        $('aiS').textContent = sc;
        $('buC').textContent = bu;
        $('beC').textContent = be;

        const circ = 327, ring = $('aiRing');
        ring.style.strokeDashoffset = circ - (sc / 100 * circ);
        ring.style.stroke = sc >= 60 ? '#16c784' : sc <= 40 ? '#ea3943' : '#eab308';

        $('buBar').style.width = (bu / tot * 100) + '%';
        $('beBar').style.width = (be / tot * 100) + '%';

        const s = $('aiSig');
        if (sc >= 70) { s.style.background = 'rgba(22,199,132,.3)'; s.innerHTML = '<i class="fas fa-arrow-up"></i> ' + t('strongBuy') }
        else if (sc >= 55) { s.style.background = 'rgba(132,204,22,.3)'; s.innerHTML = '<i class="fas fa-arrow-up"></i> ' + t('buy') }
        else if (sc >= 45) { s.style.background = 'rgba(156,163,175,.3)'; s.innerHTML = '<i class="fas fa-minus"></i> ' + t('neutral') }
        else if (sc >= 30) { s.style.background = 'rgba(251,146,60,.3)'; s.innerHTML = '<i class="fas fa-arrow-down"></i> ' + t('sell') }
        else { s.style.background = 'rgba(234,57,67,.3)'; s.innerHTML = '<i class="fas fa-arrow-down"></i> ' + t('strongSell') }

        $('aiRec').innerHTML = sc >= 60
          ? `<div class="flex items-center gap-2"><i class="fas fa-check-circle" style="color:#16c784"></i> ${t('goodEntry')} — ${bu}/${tot} ${t('bullishSignals')}</div>`
          : sc <= 40
            ? `<div class="flex items-center gap-2"><i class="fas fa-exclamation-triangle" style="color:#ea3943"></i> ${t('riskHigh')} — ${be}/${tot} ${t('bearishSignals')}</div>`
            : `<div class="flex items-center gap-2"><i class="fas fa-pause-circle" style="color:#eab308"></i> ${t('holdEntry')}</div>`;

      } catch (e) { console.error('calcAI error:', e) }
    }

    function sig(id, tp, lb) { const el = $(id + 'S'); const ic = tp === 'b' ? 'fa-arrow-up' : tp === 's' ? 'fa-arrow-down' : 'fa-minus'; const cl = tp === 'b' ? 'sbb' : tp === 's' ? 'sbs' : 'sbn'; el.className = 'sb ' + cl; el.innerHTML = `<i class="fas ${ic}"></i> ${lb}` }
    function sct(id, tp) { const c = $(id); c.classList.remove('buy', 'sell', 'hold'); c.classList.add(tp) }

    // Network filter — checks platform slug, tags, and known token list
    function chkNet(c, nid) {
      // L1 native coins should only show under their OWN network, not every network they're bridged to
      const L1_MAP = { 'BTC': 'bitcoin', 'ETH': 'ethereum', 'BNB': 'binance-smart-chain', 'SOL': 'solana', 'XRP': null, 'ADA': 'cardano', 'AVAX': 'avalanche', 'DOT': 'polkadot', 'DOGE': null, 'SHIB': 'ethereum', 'LTC': null, 'BCH': null, 'ATOM': 'cosmos', 'FIL': null, 'NEAR': 'near-protocol', 'ICP': null, 'APT': 'aptos', 'SUI': 'sui', 'TON': null, 'TRX': 'tron', 'ETC': null, 'ALGO': 'algorand', 'XLM': 'stellar', 'HBAR': null, 'VET': null, 'FTM': 'fantom', 'EOS': null, 'XTZ': null, 'NEO': null, 'MATIC': 'polygon-pos', 'POL': 'polygon-pos' };
      const l1Net = L1_MAP[c.sy];
      if (l1Net !== undefined) {
        // This is a known L1 coin — only show under its native network
        if (l1Net === nid) return true;
        // Also show if it's in the hardcoded token list for this network
        const tokens = NET_TOKENS[nid];
        if (tokens && tokens.includes(c.sy.toUpperCase())) return true;
        return false;
      }

      // Check platform field from CMC
      if (c.plat) {
        if (c.plat === nid) return true;
        if (c.plat.includes(nid)) return true;
        // Aliases
        if (nid === 'ethereum' && (c.plat === 'ethereum' || c.plat.includes('erc20'))) return true;
        if (nid === 'binance-smart-chain' && (c.plat.includes('binance') || c.plat.includes('bsc') || c.plat.includes('bnb'))) return true;
        if (nid === 'polygon-pos' && (c.plat.includes('polygon') || c.plat.includes('matic'))) return true;
        if (nid === 'arbitrum-one' && c.plat.includes('arbitrum')) return true;
        if (nid === 'optimistic-ethereum' && c.plat.includes('optimis')) return true;
        if (nid === 'avalanche' && c.plat.includes('avalan')) return true;
        if (nid === 'base' && c.plat === 'base') return true;
        if (nid === 'fantom' && c.plat.includes('fantom')) return true;
        if (nid === 'near-protocol' && c.plat.includes('near')) return true;
        if (nid === 'cosmos' && (c.plat.includes('cosmos') || c.plat.includes('osmosis'))) return true;
        if (nid === 'cronos' && c.plat.includes('cronos')) return true;
        if (nid === 'mantle' && c.plat.includes('mantle')) return true;
        if (nid === 'linea' && c.plat.includes('linea')) return true;
        if (nid === 'scroll' && c.plat.includes('scroll')) return true;
        if (nid === 'blast' && c.plat.includes('blast')) return true;
        if (nid === 'zksync' && (c.plat.includes('zksync') || c.plat.includes('zk-sync'))) return true;
      }
      // Check tags (but NOT generic tags like 'defi' — too broad)
      if (c.tags && Array.isArray(c.tags)) {
        if (c.tags.includes(nid + '-ecosystem')) return true;
        if (nid === 'ethereum' && (c.tags.includes('erc-20') || c.tags.includes('ethereum-ecosystem'))) return true;
        if (nid === 'binance-smart-chain' && (c.tags.includes('bep-20') || c.tags.includes('bnb-chain') || c.tags.includes('bnb-chain-ecosystem') || c.tags.includes('bsc-ecosystem'))) return true;
        if (nid === 'tron' && (c.tags.includes('trc-20') || c.tags.includes('tron-ecosystem') || c.tags.includes('tron20-ecosystem'))) return true;
        if (nid === 'solana' && (c.tags.includes('spl-token') || c.tags.includes('solana-ecosystem'))) return true;
        if (nid === 'polygon-pos' && c.tags.includes('polygon-ecosystem')) return true;
        if (nid === 'arbitrum-one' && c.tags.includes('arbitrum-ecosystem')) return true;
        if (nid === 'avalanche' && c.tags.includes('avalanche-ecosystem')) return true;
        if (nid === 'base' && c.tags.includes('base-ecosystem')) return true;
        if (nid === 'cosmos' && c.tags.includes('cosmos-ecosystem')) return true;
        if (nid === 'near-protocol' && c.tags.includes('near-protocol-ecosystem')) return true;
        if (nid === 'sui' && c.tags.includes('sui-ecosystem')) return true;
        if (nid === 'aptos' && c.tags.includes('aptos-ecosystem')) return true;
      }
      // Check known token list
      const tokens = NET_TOKENS[nid];
      if (tokens && tokens.includes(c.sy.toUpperCase())) return true;
      return false;
    }

    // Exchange Modal
    function getRef(nm, url) { if (!nm) return url; const n = nm.toLowerCase(); const refs = { binance: 'https://accounts.binance.info/register?ref=OWIOMYX9', bingx: 'https://bingx.com/invite/MTBGIP', mexc: 'https://www.mexc.com/register?inviteCode=1FTLJ', bybit: 'https://www.bybit.com/invite?ref=EKDMEJ', bitget: 'https://partner.bitget.com/bg/NZLRR8' }; for (const [k, v] of Object.entries(refs)) if (n.includes(k)) return v; return url }
    // ===== TOP 100 EXCHANGES DATABASE =====
    const EX_DB = [
      {
        "id": "binance",
        "n": "Binance",
        "l": "https://bin.bnbstatic.com/static/images/common/favicon.ico",
        "u": "https://www.binance.com/trade/{s}_USDT",
        "t": 10,
        "api": "binance"
      },
      {
        "id": "gate",
        "n": "Gate",
        "l": "https://www.gate.io/favicon.ico",
        "u": "https://www.gate.io/trade/{s}_USDT",
        "t": 10,
        "api": "gate"
      },
      {
        "id": "gdax",
        "n": "Coinbase Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1706864258",
        "u": "https://www.coinbase.com/",
        "t": 10
      },
      {
        "id": "bybit_spot",
        "n": "Bybit",
        "l": "https://coin-images.coingecko.com/markets/images/698/small/bybit_spot.png?1706864649",
        "u": "https://www.bybit.com",
        "t": 10
      },
      {
        "id": "okex",
        "n": "OKX",
        "l": "https://coin-images.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1706864283",
        "u": "https://www.okx.com",
        "t": 10
      },
      {
        "id": "kraken",
        "n": "Kraken",
        "l": "https://www.kraken.com/favicon.ico",
        "u": "https://www.kraken.com/prices/{sl}",
        "t": 10
      },
      {
        "id": "bitget",
        "n": "Bitget",
        "l": "https://www.bitget.com/favicon.ico",
        "u": "https://www.bitget.com/spot/{s}USDT",
        "t": 10
      },
      {
        "id": "mxc",
        "n": "MEXC",
        "l": "https://coin-images.coingecko.com/markets/images/409/small/logo_new.png?1743600043",
        "u": "https://www.mexc.com/",
        "t": 9
      },
      {
        "id": "kucoin",
        "n": "KuCoin",
        "l": "https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACGaQoJ.png",
        "u": "https://www.kucoin.com/trade/{s}-USDT",
        "t": 9
      },
      {
        "id": "crypto_com",
        "n": "Crypto.com Exchange",
        "l": "https://crypto.com/favicon.ico",
        "u": "https://crypto.com/exchange/trade/{s}_USDT",
        "t": 9
      },
      {
        "id": "bullish_com",
        "n": "Bullish",
        "l": "https://coin-images.coingecko.com/markets/images/905/small/bullish_com.png?1706864904",
        "u": "https://bullish.com/",
        "t": 9
      },
      {
        "id": "bingx",
        "n": "BingX",
        "l": "https://www.bingx.com/favicon.ico",
        "u": "https://www.bingx.com/spot/{s}USDT",
        "t": 9
      },
      {
        "id": "huobi",
        "n": "HTX",
        "l": "https://coin-images.coingecko.com/markets/images/25/small/htx.png?1721712842",
        "u": "https://www.huobi.com",
        "t": 9
      },
      {
        "id": "bitfinex",
        "n": "Bitfinex",
        "l": "https://www.bitfinex.com/favicon.ico",
        "u": "https://www.bitfinex.com/t/{s}:UST",
        "t": 9
      },
      {
        "id": "bitstamp",
        "n": "Bitstamp by Robinhood",
        "l": "https://www.bitstamp.net/favicon.ico",
        "u": "https://www.bitstamp.net/markets/{sl}/usd/",
        "t": 9
      },
      {
        "id": "hashkey_exchange",
        "n": "HashKey Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/1206/small/hashkey_2.png?1706869603",
        "u": "https://www.hashkey.com/",
        "t": 9
      },
      {
        "id": "gemini",
        "n": "Gemini",
        "l": "https://www.gemini.com/favicon.ico",
        "u": "https://www.gemini.com/prices/{sl}",
        "t": 9
      },
      {
        "id": "cex",
        "n": "CEX.IO",
        "l": "https://coin-images.coingecko.com/markets/images/56/small/main-icon.png?1706864277",
        "u": "https://trade.cex.io/",
        "t": 9
      },
      {
        "id": "backpack_exchange",
        "n": "Backpack Exchange ",
        "l": "https://coin-images.coingecko.com/markets/images/1387/small/backpack.jpeg?1708663541",
        "u": "https://backpack.exchange/",
        "t": 9
      },
      {
        "id": "bitmart",
        "n": "BitMart",
        "l": "https://www.bitmart.com/favicon.ico",
        "u": "https://www.bitmart.com/trade/en-US?symbol={s}_USDT",
        "t": 8
      },
      {
        "id": "coinw",
        "n": "CoinW",
        "l": "https://www.coinw.com/favicon.ico",
        "u": "https://www.coinw.com/spot/{sl}usdt",
        "t": 8
      },
      {
        "id": "lbank",
        "n": "LBank",
        "l": "https://www.lbank.com/favicon.ico",
        "u": "https://www.lbank.com/trade/{sl}_usdt",
        "t": 8
      },
      {
        "id": "coinstore",
        "n": "Coinstore",
        "l": "https://www.coinstore.com/favicon.ico",
        "u": "https://www.coinstore.com/spot/{s}USDT",
        "t": 8
      },
      {
        "id": "tapbit",
        "n": "Tapbit",
        "l": "https://www.tapbit.com/favicon.ico",
        "u": "https://www.tapbit.com/spot/{s}USDT",
        "t": 8
      },
      {
        "id": "weex",
        "n": "WEEX",
        "l": "https://coin-images.coingecko.com/markets/images/1398/small/weex.png?1730946490",
        "u": "http://www.weex.com/",
        "t": 8
      },
      {
        "id": "toobit",
        "n": "Toobit",
        "l": "https://www.toobit.com/favicon.ico",
        "u": "https://www.toobit.com/spot/{s}USDT",
        "t": 8
      },
      {
        "id": "digifinex",
        "n": "DigiFinex",
        "l": "https://www.digifinex.com/favicon.ico",
        "u": "https://www.digifinex.com/trade/{s}/USDT",
        "t": 8
      },
      {
        "id": "ourbit",
        "n": "Ourbit",
        "l": "https://coin-images.coingecko.com/markets/images/11731/small/logo_200_200_2.png?1755659673",
        "u": "https://www.ourbit.com/",
        "t": 8
      },
      {
        "id": "whitebit",
        "n": "WhiteBIT",
        "l": "https://whitebit.com/favicon.ico",
        "u": "https://whitebit.com/trade/{s}-USDT",
        "t": 8
      },
      {
        "id": "hibt",
        "n": "Hibt",
        "l": "https://coin-images.coingecko.com/markets/images/11765/small/1000125652.jpg?1732085736",
        "u": "https://hibt.com/",
        "t": 8
      },
      {
        "id": "upbit",
        "n": "Upbit",
        "l": "https://cdn.upbit.com/images/favicon.png",
        "u": "https://upbit.com/exchange?code=CRIX.UPBIT.USDT-{s}",
        "t": 8
      },
      {
        "id": "phemex",
        "n": "Phemex",
        "l": "https://phemex.com/favicon.ico",
        "u": "https://phemex.com/spot/trade/{s}USDT",
        "t": 8
      },
      {
        "id": "bitunix",
        "n": "Bitunix",
        "l": "https://coin-images.coingecko.com/markets/images/1185/small/APP_icon_1024.png?1706865197",
        "u": "https://www.bitunix.com/",
        "t": 8
      },
      {
        "id": "bitrue",
        "n": "Bitrue",
        "l": "https://www.bitrue.com/favicon.ico",
        "u": "https://www.bitrue.com/trade/{sl}_usdt",
        "t": 8
      },
      {
        "id": "cryptology",
        "n": "Tothemoon",
        "l": "https://coin-images.coingecko.com/markets/images/287/small/tothemoon.png?1732508491",
        "u": "https://tothemoon.com/",
        "t": 8
      },
      {
        "id": "coinex",
        "n": "CoinEx",
        "l": "https://www.coinex.com/favicon.ico",
        "u": "https://www.coinex.com/exchange/{s}-usdt",
        "t": 8
      },
      {
        "id": "nonkyc_io",
        "n": "Nonkyc.io",
        "l": "https://coin-images.coingecko.com/markets/images/1281/small/NKYC-Logo.png?1706865279",
        "u": "https://nonkyc.io",
        "t": 8
      },
      {
        "id": "levex",
        "n": "LeveX",
        "l": "https://coin-images.coingecko.com/markets/images/22144/small/logo2.png?1762934243",
        "u": "https://levex.com/en",
        "t": 8
      },
      {
        "id": "bitbank",
        "n": "Bitbank",
        "l": "https://bitbank.cc/favicon.ico",
        "u": "https://bitbank.cc/app/trade/{sl}_jpy",
        "t": 8
      },
      {
        "id": "coinspro",
        "n": "Coins.ph",
        "l": "https://coin-images.coingecko.com/markets/images/999/small/coinspro.png?1706864987",
        "u": "https://coins.ph/about",
        "t": 8
      },
      {
        "id": "bitcointry_exchange",
        "n": "Bitcointry",
        "l": "https://coin-images.coingecko.com/markets/images/1231/small/symbol.png?1737626816",
        "u": "https://bitcointry.com",
        "t": 8
      },
      {
        "id": "valr",
        "n": "VALR",
        "l": "https://coin-images.coingecko.com/markets/images/1036/small/VALR.png?1720089142",
        "u": "https://www.valr.com/",
        "t": 8
      },
      {
        "id": "bybit-eu",
        "n": "Bybit EU",
        "l": "https://coin-images.coingecko.com/markets/images/22125/small/Bybit_EU_logo.png?1759847140",
        "u": "https://www.bybit.eu/",
        "t": 8
      },
      {
        "id": "deribit_spot",
        "n": "Deribit Spot",
        "l": "https://coin-images.coingecko.com/markets/images/1144/small/deribit-spot.jpg?1756737820",
        "u": "https://www.deribit.com/",
        "t": 8
      },
      {
        "id": "bitso",
        "n": "Bitso",
        "l": "https://bitso.com/favicon.ico",
        "u": "https://bitso.com/",
        "t": 8
      },
      {
        "id": "binance_us",
        "n": "Binance US",
        "l": "https://coin-images.coingecko.com/markets/images/469/small/Binance.png?1706864454",
        "u": "https://www.binance.us/",
        "t": 8
      },
      {
        "id": "luno",
        "n": "Luno",
        "l": "https://www.luno.com/favicon.ico",
        "u": "https://www.luno.com/trade/{s}USDT",
        "t": 8
      },
      {
        "id": "indodax",
        "n": "Indodax",
        "l": "https://indodax.com/favicon.ico",
        "u": "https://indodax.com/market/{s}IDR",
        "t": 8
      },
      {
        "id": "bitlo",
        "n": "Bitlo",
        "l": "https://coin-images.coingecko.com/markets/images/968/small/bitlo-logo-b.png?1706864959",
        "u": "https://www.bitlo.com/",
        "t": 8
      },
      {
        "id": "hashkey-global",
        "n": "HashKey Global",
        "l": "https://coin-images.coingecko.com/markets/images/1582/small/20240422-181043.jpg?1715067065",
        "u": "https://global.hashkey.com/",
        "t": 8
      },
      {
        "id": "gate_us",
        "n": "Gate US",
        "l": "https://coin-images.coingecko.com/markets/images/22092/small/Gate-US.png?1757391927",
        "u": "https://www.gate.com/en-us",
        "t": 8
      },
      {
        "id": "pionex",
        "n": "Pionex",
        "l": "https://www.pionex.com/favicon.ico",
        "u": "https://www.pionex.com/trade/{s}_USDT",
        "t": 7
      },
      {
        "id": "biconomy",
        "n": "Biconomy.com",
        "l": "https://www.biconomy.com/favicon.ico",
        "u": "https://www.biconomy.com/exchange/{s}_USDT",
        "t": 7
      },
      {
        "id": "xt",
        "n": "XT.COM",
        "l": "https://www.xt.com/favicon.ico",
        "u": "https://www.xt.com/trade/{sl}_usdt",
        "t": 7
      },
      {
        "id": "kcex",
        "n": "KCEX",
        "l": "https://coin-images.coingecko.com/markets/images/11953/small/photo_2025-05-27_02-31-22.jpg?1748284326",
        "u": "https://kcex.com/",
        "t": 7
      },
      {
        "id": "orangex",
        "n": "OrangeX",
        "l": "https://coin-images.coingecko.com/markets/images/1272/small/Subtract.png?1706865272",
        "u": "https://www.orangex.com/",
        "t": 7
      },
      {
        "id": "hotcoin_global",
        "n": "Hotcoin",
        "l": "https://coin-images.coingecko.com/markets/images/1345/small/hotcoin.png?1756783952",
        "u": "https://www.hotcoin.com",
        "t": 7
      },
      {
        "id": "p2pb2b",
        "n": "P2B",
        "l": "https://coin-images.coingecko.com/markets/images/251/small/ow0xng56_400x400.jpeg?1706864347",
        "u": "https://p2pb2b.com/",
        "t": 7
      },
      {
        "id": "bitvenus_spot",
        "n": "BVOX",
        "l": "https://coin-images.coingecko.com/markets/images/1253/small/BVOX-%E5%9B%BE%E5%BD%A2%E6%A0%87-%E5%9C%86.png?1745501686",
        "u": "https://www.bvox.com/",
        "t": 7
      },
      {
        "id": "bitmax",
        "n": "AscendEX (BitMax)",
        "l": "https://coin-images.coingecko.com/markets/images/277/small/%E5%8E%9F%E8%89%B2.png?1706864357",
        "u": "https://ascendex.com/en/global-digital-asset-platform",
        "t": 7
      },
      {
        "id": "blofin_spot",
        "n": "BloFin",
        "l": "https://coin-images.coingecko.com/markets/images/1645/small/blofin_logo.jpeg?1718852326",
        "u": "https://blofin.com",
        "t": 7
      },
      {
        "id": "bitdelta",
        "n": "BitDelta",
        "l": "https://coin-images.coingecko.com/markets/images/1317/small/BD_icon_200x200.png?1750403938",
        "u": "https://bitdelta.com/",
        "t": 7
      },
      {
        "id": "bitcastle",
        "n": "bitcastle",
        "l": "https://coin-images.coingecko.com/markets/images/1341/small/bitcastle_logo.png?1706865343",
        "u": "https://bitcastle.io/en",
        "t": 7
      },
      {
        "id": "zoomex",
        "n": "Zoomex",
        "l": "https://coin-images.coingecko.com/markets/images/11948/small/zoomex.png?1747987100",
        "u": "https://www.zoomex.com/en-US/",
        "t": 7
      },
      {
        "id": "bithumb",
        "n": "Bithumb",
        "l": "https://www.bithumb.com/favicon.ico",
        "u": "https://www.bithumb.com/trade/order/{s}_KRW",
        "t": 7
      },
      {
        "id": "bitvavo",
        "n": "Bitvavo",
        "l": "https://bitvavo.com/favicon.ico",
        "u": "https://bitvavo.com/en/{sl}",
        "t": 7
      },
      {
        "id": "bydfi",
        "n": "BYDFi",
        "l": "https://coin-images.coingecko.com/markets/images/1186/small/ce9bee68-163f-485c-bf30-e564bee117c9.jpeg?1752056235",
        "u": "https://www.bydfi.com/en",
        "t": 7
      },
      {
        "id": "bitbaby-exchange",
        "n": "Bitbaby",
        "l": "https://coin-images.coingecko.com/markets/images/22200/small/bitbaby_transparent_200x200.png?1769586370",
        "u": "https://www.bitbaby.com",
        "t": 7
      },
      {
        "id": "dextrade",
        "n": "Dex-Trade",
        "l": "https://coin-images.coingecko.com/markets/images/380/small/Dex-Trade.png?1706864395",
        "u": "https://dex-trade.com/",
        "t": 7
      },
      {
        "id": "aivora-exchange",
        "n": "Aivora Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/22209/small/logo_transparent_200x200.png?1770865338",
        "u": "https://www.aivora.com",
        "t": 7
      },
      {
        "id": "hyperliquid-spot",
        "n": "Hyperliquid",
        "l": "https://coin-images.coingecko.com/markets/images/1571/small/PFP.png?1714470912",
        "u": "https://hyperfoundation.org/",
        "t": 7
      },
      {
        "id": "bitkan",
        "n": "BitKan",
        "l": "https://coin-images.coingecko.com/markets/images/21985/small/Official_BitKan_Logo_%28For_CoinGecko_Exchange_Listing%29.png?1750910878",
        "u": "https://www.bitkan.com",
        "t": 7
      },
      {
        "id": "cointr",
        "n": "CoinTR",
        "l": "https://coin-images.coingecko.com/markets/images/1028/small/COINTR_AMBLEM-01.jpg?1731456624",
        "u": "https://www.cointr.com/tr",
        "t": 7
      },
      {
        "id": "btse",
        "n": "BTSE",
        "l": "https://coin-images.coingecko.com/markets/images/464/small/BTSE.jpg?1706864449",
        "u": "https://www.btse.com/",
        "t": 7
      },
      {
        "id": "bitflyer",
        "n": "bitFlyer",
        "l": "https://bitflyer.com/favicon.ico",
        "u": "https://bitflyer.com/en-jp/ex/{sl}",
        "t": 7
      },
      {
        "id": "exmo",
        "n": "EXMO",
        "l": "https://exmo.com/favicon.ico",
        "u": "https://exmo.com/trade/{s}_USDT",
        "t": 7
      },
      {
        "id": "pointpay",
        "n": "PointPay",
        "l": "https://coin-images.coingecko.com/markets/images/1060/small/pointpay_logo2.png?1716858068",
        "u": "https://exchange.pointpay.io/",
        "t": 7
      },
      {
        "id": "ondo_global_markets",
        "n": "Ondo Global Markets",
        "l": "https://coin-images.coingecko.com/markets/images/22079/small/images.png?1756437723",
        "u": "https://ondo.finance/global-markets",
        "t": 7
      },
      {
        "id": "korbit",
        "n": "Korbit",
        "l": "https://www.korbit.co.kr/favicon.ico",
        "u": "https://www.korbit.co.kr",
        "t": 7
      },
      {
        "id": "bitopro",
        "n": "BitoPro",
        "l": "https://coin-images.coingecko.com/markets/images/358/small/bitopro_coingecko_250x250_%281%29.png?1706864386",
        "u": "https://www.bitopro.com/",
        "t": 7
      },
      {
        "id": "max_maicoin",
        "n": "Max Maicoin",
        "l": "https://coin-images.coingecko.com/markets/images/218/small/max.jpg?1706864331",
        "u": "https://max.maicoin.com",
        "t": 7
      },
      {
        "id": "foxbit",
        "n": "Foxbit",
        "l": "https://foxbit.com.br/favicon.ico",
        "u": "https://foxbit.com.br",
        "t": 7
      },
      {
        "id": "huobi_japan",
        "n": "BitTrade",
        "l": "https://coin-images.coingecko.com/markets/images/431/small/bit_trade_logo_.png?1758267450",
        "u": "https://www.bittrade.co.jp/",
        "t": 7
      },
      {
        "id": "bitpanda",
        "n": "One Trading",
        "l": "https://www.bitpanda.com/favicon.ico",
        "u": "https://www.bitpanda.com/prices/{sl}",
        "t": 7
      },
      {
        "id": "earnbit",
        "n": "EarnBIT",
        "l": "https://coin-images.coingecko.com/markets/images/1686/small/earnbit.png?1756173392",
        "u": "https://earnbit.com/",
        "t": 7
      },
      {
        "id": "wootrade",
        "n": "WOO X",
        "l": "https://coin-images.coingecko.com/markets/images/683/small/woo.png?1706864629",
        "u": "https://woox.io/",
        "t": 7
      },
      {
        "id": "nami_exchange",
        "n": "Nami Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/550/small/namiexchange_logo_200x200.png?1706864517",
        "u": "https://nami.exchange/",
        "t": 7
      },
      {
        "id": "metadao-futarchy-amm",
        "n": "MetaDAO (Futarchy AMM)",
        "l": "https://coin-images.coingecko.com/markets/images/22184/small/META.png?1767665316",
        "u": "https://metadao.fi",
        "t": 6
      },
      {
        "id": "young-platform",
        "n": "Young Platform",
        "l": "https://coin-images.coingecko.com/markets/images/22037/small/Young_%28YNG%29.png?1754961503",
        "u": "https://youngplatform.com/",
        "t": 7
      },
      {
        "id": "inx_one",
        "n": "INX One",
        "l": "https://coin-images.coingecko.com/markets/images/1076/small/inx_one.jpeg?1706865100",
        "u": "https://www.inx.co/",
        "t": 7
      },
      {
        "id": "coinup",
        "n": "CoinUp.io",
        "l": "https://coin-images.coingecko.com/markets/images/22028/small/coin-up-new-logo.jpg?1763621924",
        "u": "https://www.coinup.io",
        "t": 6
      },
      {
        "id": "azbit",
        "n": "Azbit",
        "l": "https://azbit.com/favicon.ico",
        "u": "https://azbit.com/exchange/{s}_USDT",
        "t": 6
      },
      {
        "id": "grovex",
        "n": "GroveX",
        "l": "https://coin-images.coingecko.com/markets/images/11852/small/Copy_of_GRXCHAIN.io_%28512_x_512_px%29.png?1754622658",
        "u": "https://GroveX.io",
        "t": 6
      },
      {
        "id": "uniswap_v3",
        "n": "Uniswap V3 (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/665/small/uniswap-v3.png?1706864608",
        "u": "https://app.uniswap.org/#/swap",
        "t": 6
      },
      {
        "id": "bigone",
        "n": "BigONE",
        "l": "https://coin-images.coingecko.com/markets/images/100/small/qcFFufEY_400x400.jpg?1706864287",
        "u": "https://bigone.com",
        "t": 6
      },
      {
        "id": "uniswap_v3_arbitrum",
        "n": "Uniswap V3 (Arbitrum One)",
        "l": "https://coin-images.coingecko.com/markets/images/702/small/uniswap-v3.png?1706864655",
        "u": "https://app.uniswap.org/#/swap",
        "t": 6
      },
      {
        "id": "trubit",
        "n": "Trubit",
        "l": "https://www.trubit.com/favicon.ico",
        "u": "https://www.trubit.com",
        "t": 6
      },
      {
        "id": "uniswap-bsc",
        "n": "Uniswap V3 (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/1092/small/uniswap.jpeg?1706865113",
        "u": "https://app.uniswap.org/#/swap",
        "t": 6
      },
      {
        "id": "latoken",
        "n": "LATOKEN",
        "l": "https://latoken.com/favicon.ico",
        "u": "https://latoken.com/exchange/{s}-USDT",
        "t": 6
      },
      {
        "id": "fluid",
        "n": "Fluid (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/11940/small/fluid.png?1764228207",
        "u": "https://fluid.io/",
        "t": 6
      },
      {
        "id": "pancakeswap-v3-base",
        "n": "PancakeSwap V3 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1264/small/pancakeswap.jpeg?1706865267",
        "u": "https://pancakeswap.finance/swap?chain=base",
        "t": 6
      },
      {
        "id": "deepcoin",
        "n": "Deepcoin",
        "l": "https://www.deepcoin.com/favicon.ico",
        "u": "https://www.deepcoin.com/trade/{s}USDT",
        "t": 6
      },
      {
        "id": "pancakeswap-infinity-clmm",
        "n": "Pancakeswap Infinity CLMM (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/22044/small/pancake.png?1755066621",
        "u": "https://pancakeswap.finance/swap",
        "t": 6
      },
      {
        "id": "balancer-v3-ethereum",
        "n": "Balancer V3 (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/22027/small/balancer-bal-logo.png?1754634441",
        "u": "https://balancer.fi/swap/ethereum/ETH",
        "t": 6
      },
      {
        "id": "qmall",
        "n": "QMall",
        "l": "https://coin-images.coingecko.com/markets/images/1108/small/qmall.jpeg?1706865129",
        "u": "https://qmall.io/",
        "t": 6
      },
      {
        "id": "bitcoin_com",
        "n": "FMFW.io",
        "l": "https://coin-images.coingecko.com/markets/images/467/small/fmfw.png?1706864453",
        "u": "https://fmfw.io/",
        "t": 6
      },
      {
        "id": "raydium-clmm",
        "n": "Raydium (CLMM)",
        "l": "https://coin-images.coingecko.com/markets/images/1421/small/raydium.jpeg?1707371905",
        "u": "https://raydium.io/swap/",
        "t": 6
      },
      {
        "id": "humidifi",
        "n": "Humidifi",
        "l": "https://coin-images.coingecko.com/markets/images/22199/small/data.?1769412284",
        "u": "https://jup.ag/swap",
        "t": 6
      },
      {
        "id": "bitci",
        "n": "SAFEbit",
        "l": "https://coin-images.coingecko.com/markets/images/450/small/safebit.png?1748936587",
        "u": "https://www.safebit.com.tr",
        "t": 6
      },
      {
        "id": "project-x",
        "n": "Project X",
        "l": "https://coin-images.coingecko.com/markets/images/22024/small/project-x.jpg?1754538301",
        "u": "https://www.prjx.com/swap",
        "t": 6
      },
      {
        "id": "blackhole-v3",
        "n": "Blackhole V3",
        "l": "https://coin-images.coingecko.com/markets/images/22005/small/Blackhole-CM.png?1752848439",
        "u": "https://www.blackhole.xyz/",
        "t": 6
      },
      {
        "id": "pancakeswap-v3-solana",
        "n": "Pancakeswap V3 (Solana)",
        "l": "https://coin-images.coingecko.com/markets/images/21995/small/pancakeswap.jpg?1751540605",
        "u": "https://pancakeswap.finance/swap?chain=sol",
        "t": 6
      },
      {
        "id": "native",
        "n": "Native",
        "l": "https://coin-images.coingecko.com/markets/images/21998/small/image.png?1752111160",
        "u": "https://native.org",
        "t": 6
      },
      {
        "id": "pharaoh-exchange-v3",
        "n": "Pharaoh Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/22126/small/pharnew.png?1760338116",
        "u": "https://phar.gg",
        "t": 6
      },
      {
        "id": "pancakeswap-v3-arbitrum",
        "n": "PancakeSwap V3 (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/1225/small/pancakeswap.jpeg?1706865233",
        "u": "https://pancakeswap.finance/swap?chain=arb",
        "t": 6
      },
      {
        "id": "subnet-tokens",
        "n": "Subnet Tokens",
        "l": "https://coin-images.coingecko.com/markets/images/21963/small/Bittensor_%281%29.jpg?1749176476",
        "u": "https://taostats.io",
        "t": 6
      },
      {
        "id": "supernova-cl",
        "n": "Supernova (CL)",
        "l": "https://coin-images.coingecko.com/markets/images/22220/small/open-uri20260226-69-errj4d.?1772073520",
        "u": "https://supernova.xyz/swap",
        "t": 6
      },
      {
        "id": "gmo_japan",
        "n": "GMO Coin Japan",
        "l": "https://coin-images.coingecko.com/markets/images/430/small/gmo_z_com.png?1706864428",
        "u": "https://coin.z.com/jp/",
        "t": 6
      },
      {
        "id": "okcoin-japan",
        "n": "OKJ",
        "l": "https://coin-images.coingecko.com/markets/images/1420/small/Logo%E9%BB%92x%E7%99%BD.png?1737085191",
        "u": "https://www.okcoin.jp/",
        "t": 6
      },
      {
        "id": "figure_markets",
        "n": "Figure Markets",
        "l": "https://coin-images.coingecko.com/markets/images/11925/small/Frame_1.png?1743770494",
        "u": "https://www.figuremarkets.com/",
        "t": 6
      },
      {
        "id": "quickswap",
        "n": "Quickswap",
        "l": "https://coin-images.coingecko.com/markets/images/629/small/quickswap_latest.png?1706864574",
        "u": "https://quickswap.exchange/#/swap",
        "t": 6
      },
      {
        "id": "ekubo-v3-ethereum",
        "n": "Ekubo V3 (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/22206/small/ekubo.png?1770611298",
        "u": "https://app.ekubo.org/evm",
        "t": 6
      },
      {
        "id": "cetus",
        "n": "Cetus",
        "l": "https://coin-images.coingecko.com/markets/images/1134/small/cetus.png?1706865152",
        "u": "https://app.cetus.zone/swap/?",
        "t": 6
      },
      {
        "id": "pancakeswap_new",
        "n": "PancakeSwap (v2)",
        "l": "https://coin-images.coingecko.com/markets/images/687/small/pancakeswap.jpeg?1706864634",
        "u": "https://pancakeswap.finance",
        "t": 6
      },
      {
        "id": "bitstorage",
        "n": "BitStorage",
        "l": "https://coin-images.coingecko.com/markets/images/394/small/Group_3575807.png?1706864409",
        "u": "https://bitstorage.finance",
        "t": 6
      },
      {
        "id": "near-intents",
        "n": "Near Intents",
        "l": "https://coin-images.coingecko.com/markets/images/22137/small/data.?1762131565",
        "u": "https://app.near-intents.org",
        "t": 6
      },
      {
        "id": "bluefin",
        "n": "Bluefin",
        "l": "https://coin-images.coingecko.com/markets/images/11832/small/bluefin.jpg?1737510334",
        "u": "https://trade.bluefin.io/swap",
        "t": 6
      },
      {
        "id": "uniswap-v4-monad",
        "n": "Uniswap V4 (Monad)",
        "l": "https://coin-images.coingecko.com/markets/images/22157/small/open-uri20251124-2328-7jr04q.?1763999816",
        "u": "https://app.uniswap.org/#/swap",
        "t": 6
      },
      {
        "id": "bitazza",
        "n": "Bitazza",
        "l": "https://bitazza.com/favicon.ico",
        "u": "https://bitazza.com",
        "t": 6
      },
      {
        "id": "aerodrome-base",
        "n": "Aerodrome (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1271/small/aerodrome.jpeg?1706865271",
        "u": "https://aerodrome.finance/",
        "t": 6
      },
      {
        "id": "aerodrome-slipstream-2",
        "n": "Aerodrome Slipstream 2",
        "l": "https://coin-images.coingecko.com/markets/images/22142/small/open-uri20251105-30-tyth5u.?1762313263",
        "u": "https://aerodrome.finance/swap?",
        "t": 6
      },
      {
        "id": "uniswap_v3_polygon_pos",
        "n": "Uniswap V3 (Polygon)",
        "l": "https://coin-images.coingecko.com/markets/images/752/small/uniswap-polygon.png?1706864784",
        "u": "https://app.uniswap.org/#/swap",
        "t": 6
      },
      {
        "id": "uniswap_v2",
        "n": "Uniswap V2 (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/535/small/256x256_Black-1.png?1706864503",
        "u": "https://app.uniswap.org/#/swap?use=V2",
        "t": 6
      },
      {
        "id": "itbit",
        "n": "itBit",
        "l": "https://coin-images.coingecko.com/markets/images/26/small/itbit.png?1706864262",
        "u": "https://www.itbit.com/",
        "t": 6
      },
      {
        "id": "hyperion",
        "n": "Hyperion",
        "l": "https://coin-images.coingecko.com/markets/images/11952/small/hyperion.jpg?1749522697",
        "u": "https://hyperion.xyz/swap",
        "t": 6
      },
      {
        "id": "sushiswap-v3-katana",
        "n": "Sushiswap V3 (Katana)",
        "l": "https://coin-images.coingecko.com/markets/images/21990/small/sushiswap-sushi-logo.png?1751496477",
        "u": "https://www.sushi.com/katana/swap",
        "t": 6
      },
      {
        "id": "bittime",
        "n": "Bittime",
        "l": "https://coin-images.coingecko.com/markets/images/1296/small/1024.png?1706865289",
        "u": "https://www.bittime.com/",
        "t": 6
      },
      {
        "id": "fluid-plasma",
        "n": "Fluid (Plasma)",
        "l": "https://coin-images.coingecko.com/markets/images/22115/small/open-uri20250929-60-mcv04h.?1759128454",
        "u": "https://fluid.io/swap/9745",
        "t": 6
      },
      {
        "id": "fluid-arbitrum",
        "n": "Fluid (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/22104/small/data.?1758522182",
        "u": "https://fluid.io/swap/42161",
        "t": 6
      },
      {
        "id": "grxswap",
        "n": "GRXSwap",
        "l": "https://coin-images.coingecko.com/markets/images/22221/small/data.?1772092797",
        "u": "https://grxswap.io",
        "t": 6
      },
      {
        "id": "independent_reserve",
        "n": "Independent Reserve",
        "l": "https://coin-images.coingecko.com/markets/images/389/small/x_V5Jquo_400x400.png?1706864404",
        "u": "https://www.independentreserve.com/",
        "t": 6
      },
      {
        "id": "aster-spot",
        "n": "Aster",
        "l": "https://coin-images.coingecko.com/markets/images/22102/small/_ASTER.png?1758244334",
        "u": "https://www.asterdex.com/en/spot/CDLUSD1",
        "t": 6
      },
      {
        "id": "coin_metro",
        "n": "Coinmetro",
        "l": "https://coin-images.coingecko.com/markets/images/386/small/Coinmetro_Exchange_Logo_%282%29.png?1706864399",
        "u": "https://coinmetro.com/",
        "t": 6
      },
      {
        "id": "ekubo",
        "n": "Ekubo (Starknet)",
        "l": "https://coin-images.coingecko.com/markets/images/1423/small/ekubo.png?1707919680",
        "u": "https://app.ekubo.org",
        "t": 6
      },
      {
        "id": "btcmarkets",
        "n": "BTCMarkets",
        "l": "https://www.btcmarkets.net/favicon.ico",
        "u": "https://www.btcmarkets.net",
        "t": 6
      },
      {
        "id": "sushiswap-v3-ethereum",
        "n": "Sushiswap V3 (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/1340/small/sushiswap.png?1706865342",
        "u": "https://www.sushi.com/swap",
        "t": 6
      },
      {
        "id": "quickswap_v3",
        "n": "Quickswap (v3)",
        "l": "https://coin-images.coingecko.com/markets/images/982/small/quickswap_latest.png?1706864972",
        "u": "https://quickswap.exchange/#/swap",
        "t": 6
      },
      {
        "id": "lighter-spot",
        "n": "Lighter (Spot)",
        "l": "https://coin-images.coingecko.com/markets/images/22183/small/lighter.png?1767692181",
        "u": "https://app.lighter.xyz/trade",
        "t": 6
      },
      {
        "id": "byte-exchange",
        "n": "Byte Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/1198/small/ico-1.png?1737949812",
        "u": "https://bexc.io",
        "t": 6
      },
      {
        "id": "hyperswap-v3",
        "n": "HyperSwap V3",
        "l": "https://coin-images.coingecko.com/markets/images/11875/small/hyperswap.jpg?1740121483",
        "u": "https://app.hyperswap.exchange/#/swap",
        "t": 6
      },
      {
        "id": "oku-trade-gnosis",
        "n": "Oku Trade (Gnosis)",
        "l": "https://coin-images.coingecko.com/markets/images/11946/small/oku-trade.jpeg?1746572484",
        "u": "https://oku.trade/app/gnosis?utm_source=coingecko",
        "t": 6
      },
      {
        "id": "pancakeswap-v3-ethereum",
        "n": "PancakeSwap V3 (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/1112/small/pancakeswap.jpeg?1706865133",
        "u": "https://pancakeswap.finance/swap",
        "t": 6
      },
      {
        "id": "mercado_bitcoin",
        "n": "Mercado Bitcoin",
        "l": "https://coin-images.coingecko.com/markets/images/34/small/logo_MB_hexagono.png?1706864267",
        "u": "https://www.mercadobitcoin.com.br/",
        "t": 6
      },
      {
        "id": "ref_finance",
        "n": "Rhea Finance",
        "l": "https://coin-images.coingecko.com/markets/images/697/small/rhea_finance.jpg?1752558892",
        "u": "https://dex.rhea.finance/#near|token.v2.ref-finance.near",
        "t": 6
      },
      {
        "id": "squadswap-v3-bsc",
        "n": "SquadSwap WOW (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/11937/small/squadswap.jpeg?1745392482",
        "u": "https://squadswap.com/swap",
        "t": 6
      },
      {
        "id": "byreal",
        "n": "Byreal",
        "l": "https://coin-images.coingecko.com/markets/images/21986/small/128X128_Byreal_White_Logo_with_Black_Background.png?1751269325",
        "u": "https://www.byreal.io/en/connect?returnTo=%2Fen%2Fswap",
        "t": 6
      },
      {
        "id": "meteora-damm-v2",
        "n": "Meteora DAMM V2",
        "l": "https://coin-images.coingecko.com/markets/images/22002/small/meteora.jpg?1752223255",
        "u": "https://jup.ag/swap",
        "t": 6
      },
      {
        "id": "first-ledger",
        "n": "First Ledger",
        "l": "https://coin-images.coingecko.com/markets/images/11836/small/first_ledger.jpg?1737688336",
        "u": "https://firstledger.net",
        "t": 6
      },
      {
        "id": "uniswap-v3-avalanche",
        "n": "Uniswap V3 (Avalanche)",
        "l": "https://coin-images.coingecko.com/markets/images/1182/small/uniswap.jpeg?1706865195",
        "u": "https://app.uniswap.org/#/swap?",
        "t": 6
      },
      {
        "id": "native-bsc",
        "n": "Native (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/22029/small/image_%281%29.png?1754637827",
        "u": "https://native.org",
        "t": 6
      },
      {
        "id": "dodo_polygon",
        "n": "DODO (Polygon)",
        "l": "https://coin-images.coingecko.com/markets/images/709/small/dodo_logo.png?1706864663",
        "u": "https://app.dodoex.io/",
        "t": 5
      },
      {
        "id": "uniswap_v3_optimism",
        "n": "Uniswap V3 (Optimism)",
        "l": "https://coin-images.coingecko.com/markets/images/725/small/uniswap-v3.png?1706864684",
        "u": "https://app.uniswap.org/#/swap",
        "t": 6
      },
      {
        "id": "momentum",
        "n": "Momentum",
        "l": "https://coin-images.coingecko.com/markets/images/22017/small/momentum.jpg?1753930509",
        "u": "https://app.mmt.finance/trade",
        "t": 6
      },
      {
        "id": "balancer-v3-arbitrum",
        "n": "Balancer V3 (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/22038/small/balancer.png?1754970775",
        "u": "https://balancer.fi/swap/arbitrum",
        "t": 6
      },
      {
        "id": "thena-v3",
        "n": "THENA V3",
        "l": "https://coin-images.coingecko.com/markets/images/21988/small/THENA2.png?1751441914",
        "u": "https://thena.fi/",
        "t": 6
      },
      {
        "id": "osmosis",
        "n": "Osmosis",
        "l": "https://coin-images.coingecko.com/markets/images/684/small/osmosis-dex.jpeg?1706864630",
        "u": "https://app.osmosis.zone/",
        "t": 6
      },
      {
        "id": "kodiak-v3",
        "n": "Kodiak V3",
        "l": "https://coin-images.coingecko.com/markets/images/11855/small/kodiak.jpg?1738853690",
        "u": "https://app.kodiak.finance/#/swap?chain=berachain_mainnet",
        "t": 6
      },
      {
        "id": "hybra-finance-v4",
        "n": "Hybra Finance V4",
        "l": "https://coin-images.coingecko.com/markets/images/22176/small/open-uri20251205-39430-ugqvww.?1764908012",
        "u": "https://www.hybra.finance/trade",
        "t": 6
      },
      {
        "id": "ramses-v3-hyperevm",
        "n": "Ramses V3 (HyperEVM)",
        "l": "https://coin-images.coingecko.com/markets/images/22003/small/ramses.png?1763436513",
        "u": "https://ramses.xyz",
        "t": 6
      },
      {
        "id": "o2",
        "n": "O2",
        "l": "https://coin-images.coingecko.com/markets/images/22201/small/Discord-Server-Logo-01.png?1770256842",
        "u": "https://trade.o2.app/?side=sell&method=market&symbol=ETH_USDC",
        "t": 6
      },
      {
        "id": "sparkdex-v3-1",
        "n": "SparkDEX V3.1",
        "l": "https://coin-images.coingecko.com/markets/images/11733/small/Logo_coloured_1.png?1728961868",
        "u": "https://sparkdex.ai/apps/swap",
        "t": 6
      },
      {
        "id": "velodrome-finance-slipstream-ink",
        "n": "Velodrome Finance Slipstream (Ink)",
        "l": "https://coin-images.coingecko.com/markets/images/11827/small/velodrome.jpg?1737346029",
        "u": "https://velodrome.finance/",
        "t": 6
      },
      {
        "id": "lcx",
        "n": "LCX Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/638/small/LCX_logo.png?1765200957",
        "u": "https://lcx.com/",
        "t": 6
      },
      {
        "id": "magma-finance",
        "n": "Magma Finance",
        "l": "https://coin-images.coingecko.com/markets/images/21974/small/avatar.jpg?1750043652",
        "u": "https://magmafinance.io/",
        "t": 6
      },
      {
        "id": "pancakeswap-v3-monad",
        "n": "Pancakeswap V3 (Monad)",
        "l": "https://coin-images.coingecko.com/markets/images/22152/small/open-uri20251124-2725-fw8ha8.?1763996983",
        "u": "https://pancakeswap.finance/swap",
        "t": 6
      },
      {
        "id": "agni-finance",
        "n": "Agni Finance",
        "l": "https://coin-images.coingecko.com/markets/images/1199/small/agni.png?1706865210",
        "u": "https://agni.finance/swap",
        "t": 6
      },
      {
        "id": "uniswap_v3_celo",
        "n": "Uniswap V3 (Celo)",
        "l": "https://coin-images.coingecko.com/markets/images/1099/small/uniswap.jpeg?1706865119",
        "u": "https://app.uniswap.org/#/swap",
        "t": 6
      },
      {
        "id": "sodex",
        "n": "SoDEX",
        "l": "https://coin-images.coingecko.com/markets/images/22217/small/SoDEX-logo.png?1771995806",
        "u": "https://sodex.com/",
        "t": 6
      },
      {
        "id": "quickswap-v4-base",
        "n": "Quickswap V4 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/22048/small/quickswap.jpg?1755129187",
        "u": "https://dapp.quickswap.exchange/swap",
        "t": 6
      },
      {
        "id": "uniswap-v3-x-layer",
        "n": "Uniswap V3 (x Layer)",
        "l": "https://coin-images.coingecko.com/markets/images/22190/small/open-uri20260116-54-oc2lg.?1768534109",
        "u": "https://app.uniswap.org/swap",
        "t": 6
      },
      {
        "id": "hydrex-integral",
        "n": "Hydrex Integral",
        "l": "https://coin-images.coingecko.com/markets/images/22000/small/hydrex.jpg?1752119163",
        "u": "https://www.hydrex.fi/swap",
        "t": 6
      },
      {
        "id": "quickswap-v3-manta-pacific",
        "n": "Quickswap V3 (Manta Pacific)",
        "l": "https://coin-images.coingecko.com/markets/images/1353/small/quickswap.jpeg?1706865379",
        "u": "https://quickswap.exchange/#/swap",
        "t": 6
      },
      {
        "id": "uniswap-v3-monad",
        "n": "Uniswap V3 (Monad)",
        "l": "https://coin-images.coingecko.com/markets/images/22150/small/open-uri20251124-2602-etrpnv.?1763995526",
        "u": "https://app.uniswap.org/swap",
        "t": 6
      },
      {
        "id": "etherex",
        "n": "Etherex",
        "l": "https://coin-images.coingecko.com/markets/images/22016/small/etherex.jpg?1753850880",
        "u": "https://www.etherex.finance/trade",
        "t": 6
      },
      {
        "id": "kumbaya",
        "n": "Kumbaya",
        "l": "https://coin-images.coingecko.com/markets/images/22202/small/data.?1770258232",
        "u": "https://www.kumbaya.xyz/#/swap",
        "t": 6
      },
      {
        "id": "pulsex",
        "n": "PulseX",
        "l": "https://coin-images.coingecko.com/markets/images/1148/small/pulsex.jpeg?1706865164",
        "u": "https://app.pulsex.com/swap",
        "t": 6
      },
      {
        "id": "sushiswap-v3-arbitrum",
        "n": "Sushiswap V3 (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/1162/small/sushiswap.png?1706865177",
        "u": "https://www.sushi.com/",
        "t": 6
      },
      {
        "id": "honeypop-dex",
        "n": "Honeypop DEX",
        "l": "https://coin-images.coingecko.com/markets/images/22073/small/honeypop.jpg?1756349224",
        "u": "https://honeypop.app/swap",
        "t": 6
      },
      {
        "id": "nest",
        "n": "Nest",
        "l": "https://coin-images.coingecko.com/markets/images/22159/small/open-uri20251125-23-9tle7t.?1764055060",
        "u": "https://app.usenest.xyz/trade/swap",
        "t": 6
      },
      {
        "id": "oku-trade-etherlink",
        "n": "Oku Trade (Etherlink)",
        "l": "https://coin-images.coingecko.com/markets/images/22069/small/oku_trade.jpg?1755674660",
        "u": "https://oku.trade/app/etherlink?utm_source=coingecko",
        "t": 6
      },
      {
        "id": "coinzoom",
        "n": "Coinzoom",
        "l": "https://coin-images.coingecko.com/markets/images/656/small/Up7Yiexp_400x400.png?1706864601",
        "u": "https://www.coinzoom.com/",
        "t": 6
      },
      {
        "id": "kittenswap-algebra",
        "n": "Kittenswap Algebra",
        "l": "https://coin-images.coingecko.com/markets/images/22075/small/kittenswap.jpeg?1756349566",
        "u": "https://app.kittenswap.finance/swap",
        "t": 6
      },
      {
        "id": "kinesis_money",
        "n": "Kinesis Money",
        "l": "https://coin-images.coingecko.com/markets/images/1122/small/kinesis.jpg?1742818288",
        "u": "https://kinesis.money/",
        "t": 6
      },
      {
        "id": "native-base",
        "n": "Native (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/22030/small/image_%281%29.png?1754637990",
        "u": "https://native.org",
        "t": 6
      },
      {
        "id": "oku-trade-plasma",
        "n": "Oku Trade (Plasma)",
        "l": "https://coin-images.coingecko.com/markets/images/22108/small/open-uri20250925-6750-98mz29.?1758806134",
        "u": "https://oku.trade/app/avalanche?utm_source=coingecko",
        "t": 6
      },
      {
        "id": "pancakeswap-infinity-clmm-base",
        "n": "Pancakeswap Infinity CLMM (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/22041/small/pancakeswap.jpg?1755056286",
        "u": "https://pancakeswap.finance/swap",
        "t": 6
      },
      {
        "id": "aborean-finance-v3",
        "n": "Aborean Finance V3",
        "l": "https://coin-images.coingecko.com/markets/images/22128/small/open-uri20251013-30-nmaemx.?1760340541",
        "u": "https://app.aborean.finance/swap",
        "t": 6
      },
      {
        "id": "steamm",
        "n": "STEAMM",
        "l": "https://coin-images.coingecko.com/markets/images/22065/small/steamm.png?1755504684",
        "u": "https://steamm.fi/",
        "t": 6
      },
      {
        "id": "pangolin-v3",
        "n": "Pangolin V3",
        "l": "https://coin-images.coingecko.com/markets/images/21972/small/pangolin.png?1753657257",
        "u": "https://app.pangolin.exchange/",
        "t": 6
      },
      {
        "id": "emirex",
        "n": "Emirex",
        "l": "https://coin-images.coingecko.com/markets/images/592/small/Emirex.png?1706864545",
        "u": "https://www.emirex.com/",
        "t": 6
      },
      {
        "id": "sailfish",
        "n": "SailFish",
        "l": "https://coin-images.coingecko.com/markets/images/11899/small/sailfish.jpg?1741347305",
        "u": "https://app.sailfish.finance/",
        "t": 6
      },
      {
        "id": "curve-base",
        "n": "Curve (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1634/small/CurveFi_32.png?1718177643",
        "u": "https://www.curve.finance/dex/base/pools/",
        "t": 6
      },
      {
        "id": "metalx",
        "n": "Metal X",
        "l": "https://coin-images.coingecko.com/markets/images/1309/small/logo.png?1706865302",
        "u": "https://metalx.com",
        "t": 6
      },
      {
        "id": "sunswap-v2",
        "n": "SunSwap V2",
        "l": "https://coin-images.coingecko.com/markets/images/11714/small/sunswap-logo.png?1726561972",
        "u": "https://sun.io/?lang=en-US#/sun_swap/v2",
        "t": 6
      },
      {
        "id": "balancer",
        "n": "Balancer V2",
        "l": "https://coin-images.coingecko.com/markets/images/673/small/balancer-v2.png?1706864616",
        "u": "https://balancer.fi/",
        "t": 6
      },
      {
        "id": "velodrome-finance-slipstream-celo",
        "n": "Velodrome Finance Slipstream (Celo)",
        "l": "https://coin-images.coingecko.com/markets/images/11929/small/velodrome.jpg?1744341800",
        "u": "https://velodrome.finance/swap",
        "t": 6
      },
      {
        "id": "traderjoe-v2-2-monad",
        "n": "LFJ V2.2 (Monad)",
        "l": "https://coin-images.coingecko.com/markets/images/22156/small/open-uri20251124-2328-9rugi.?1763998609",
        "u": "https://lfj.gg/avalanche/trade",
        "t": 6
      },
      {
        "id": "capricorn-monad",
        "n": "Capricorn",
        "l": "https://coin-images.coingecko.com/markets/images/22168/small/data.?1764302502",
        "u": "https://app.capricorn.exchange",
        "t": 6
      },
      {
        "id": "velodrome-finance-slipstream-unichain",
        "n": "Velodrome Finance Slipstream (Unichain)",
        "l": "https://coin-images.coingecko.com/markets/images/11910/small/velodrome.jpg?1741851007",
        "u": "https://velodrome.finance/swap",
        "t": 6
      },
      {
        "id": "dswap",
        "n": "DSWAP",
        "l": "https://coin-images.coingecko.com/markets/images/22188/small/dswap1.png?1772083414",
        "u": "https://daoaas.io/swap",
        "t": 6
      },
      {
        "id": "fusion-amm",
        "n": "DefiTuna",
        "l": "https://coin-images.coingecko.com/markets/images/22042/small/defituna.jpg?1755858361",
        "u": "https://defituna.com/trade?pool=AXB9KoFBT4ZxJgc4bHMYDgSkxjox6JuL3bbLBeL8LdSJ",
        "t": 6
      },
      {
        "id": "fastex",
        "n": "Fastex",
        "l": "https://coin-images.coingecko.com/markets/images/1091/small/fastex.png?1706865112",
        "u": "https://exchange.fastex.com/",
        "t": 6
      },
      {
        "id": "fullsail-finance",
        "n": "Full Sail",
        "l": "https://coin-images.coingecko.com/markets/images/22064/small/fullsail.jpeg?1755500251",
        "u": "https://app.fullsail.finance/",
        "t": 6
      },
      {
        "id": "ferra-dlmm",
        "n": "Ferra (DLMM)",
        "l": "https://coin-images.coingecko.com/markets/images/22186/small/open-uri20260112-16581-vo8pug.?1768190556",
        "u": "https://ferra.ag/swap",
        "t": 6
      },
      {
        "id": "flowx-clmm",
        "n": "FlowX CLMM",
        "l": "https://coin-images.coingecko.com/markets/images/21968/small/flowx.jpg?1749617162",
        "u": "https://flowx.finance/swap",
        "t": 6
      },
      {
        "id": "saucerswap-v2",
        "n": "Saucerswap V2",
        "l": "https://coin-images.coingecko.com/markets/images/1363/small/SAUCERSWAPv2_1.png?1706865384",
        "u": "https://www.saucerswap.finance/swap",
        "t": 6
      },
      {
        "id": "shadow-exchange",
        "n": "Shadow Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/11810/small/shadow.jpg?1735902352",
        "u": "https://www.shadow.so/trade",
        "t": 6
      },
      {
        "id": "hybra-finance-v3",
        "n": "Hybra Finance V3",
        "l": "https://coin-images.coingecko.com/markets/images/21994/small/hybra_logo_256.png?1751517804",
        "u": "https://www.hybra.finance/trade",
        "t": 6
      },
      {
        "id": "minswap",
        "n": "Minswap",
        "l": "https://coin-images.coingecko.com/markets/images/983/small/Logo_200_%281%29.png?1744183470",
        "u": "https://minswap.org/",
        "t": 6
      },
      {
        "id": "cryptal",
        "n": "Cryptal",
        "l": "https://coin-images.coingecko.com/markets/images/1352/small/photo_2023-12-22_16.16.29.jpeg?1706865379",
        "u": "https://cryptal.com/en",
        "t": 6
      },
      {
        "id": "alien-base-v3",
        "n": "Alien Base V3",
        "l": "https://coin-images.coingecko.com/markets/images/11722/small/image_2024-09-19_18-00-31.png?1727428421",
        "u": "https://app.alienbase.xyz",
        "t": 6
      },
      {
        "id": "w-dex-polygon",
        "n": "W-DEX (Polygon) ",
        "l": "https://coin-images.coingecko.com/markets/images/11950/small/image_LOGO_W_DEX.png?1747564588",
        "u": "https://w-dex.ai/swap",
        "t": 6
      },
      {
        "id": "9mm-v3",
        "n": "9mm V3 (Pulsechain)",
        "l": "https://coin-images.coingecko.com/markets/images/11736/small/9mm.jpg?1729249931",
        "u": "https://dex.9mm.pro/info/v3",
        "t": 6
      },
      {
        "id": "dodo_arbitrum",
        "n": "DODO (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/707/small/dodo_logo.png?1706864661",
        "u": "https://app.dodoex.io/",
        "t": 5
      },
      {
        "id": "balancer_polygon",
        "n": "Balancer V2 (Polygon)",
        "l": "https://coin-images.coingecko.com/markets/images/694/small/Balancer.png?1706864644",
        "u": "https://balancer.fi/",
        "t": 6
      },
      {
        "id": "delta_spot",
        "n": "Delta Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/642/small/delta_spot.jpg?1706864589",
        "u": "https://www.delta.exchange/app/spot/trade/",
        "t": 6
      },
      {
        "id": "velodrome-finance-v2",
        "n": "Velodrome Finance V2 (Optimism)",
        "l": "https://coin-images.coingecko.com/markets/images/1181/small/velodrome.jpeg?1706865194",
        "u": "https://velodrome.finance/",
        "t": 6
      },
      {
        "id": "dnax",
        "n": "DNAX",
        "l": "https://coin-images.coingecko.com/markets/images/22185/small/data.?1767794243",
        "u": "https://dnax.us/swap",
        "t": 6
      },
      {
        "id": "nbx",
        "n": "NBX",
        "l": "https://coin-images.coingecko.com/markets/images/11732/small/logo.png?1728860937",
        "u": "https://nbx.com/",
        "t": 6
      },
      {
        "id": "bitmex_spot",
        "n": "BitMEX",
        "l": "https://coin-images.coingecko.com/markets/images/866/small/bitmex.jpeg?1706864881",
        "u": "https://www.bitmex.com/spot/",
        "t": 6
      },
      {
        "id": "pancakeswap-v1-bsc",
        "n": "PancakeSwap V1 (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/1492/small/pancakeswap-cake-logo.png?1710143583",
        "u": "https://pancakeswap.finance/swap",
        "t": 6
      },
      {
        "id": "inex",
        "n": "INEX",
        "l": "https://coin-images.coingecko.com/markets/images/11909/small/INEX-LogoIcon-200x200.png?1742316013",
        "u": "https://www.inexcoin.com/",
        "t": 6
      },
      {
        "id": "miaswap",
        "n": "MiaSwap",
        "l": "https://coin-images.coingecko.com/markets/images/1029/small/miaswap.jpeg?1706865058",
        "u": "https://miaswap.io",
        "t": 6
      },
      {
        "id": "apeswap_bsc",
        "n": "ApeSwap",
        "l": "https://coin-images.coingecko.com/markets/images/651/small/APESWAP.png?1706864596",
        "u": "https://apeswap.finance",
        "t": 6
      },
      {
        "id": "stellaswap-v4",
        "n": "StellaSwap V4",
        "l": "https://coin-images.coingecko.com/markets/images/11914/small/stellaswap.jpg?1742381567",
        "u": "https://app.stellaswap.com/",
        "t": 6
      },
      {
        "id": "wagmi-kava",
        "n": "WAGMI (Kava)",
        "l": "https://coin-images.coingecko.com/markets/images/1324/small/WAGMI_NEW_LOGO_PNG.png?1710470936",
        "u": "https://wagmi.com/",
        "t": 6
      },
      {
        "id": "wagmi-iota-evm",
        "n": "WAGMI (Iota EVM)",
        "l": "https://coin-images.coingecko.com/markets/images/1675/small/Favicon.png?1722241131",
        "u": "https://wagmi.com/",
        "t": 6
      },
      {
        "id": "zkswap-v3",
        "n": "zkSwap Finance V3",
        "l": "https://coin-images.coingecko.com/markets/images/11892/small/200x200_Black.png?1750523604",
        "u": "https://www.zkswap.finance/",
        "t": 6
      },
      {
        "id": "zkswap-finance",
        "n": "zkSwap Finance",
        "l": "https://coin-images.coingecko.com/markets/images/1273/small/200x200_Black.png?1750523641",
        "u": "https://zkswap.finance/",
        "t": 5
      },
      {
        "id": "gt3",
        "n": "GT3",
        "l": "https://coin-images.coingecko.com/markets/images/22008/small/GT3_token.png?1753137340",
        "u": "https://dapp.gt3.finance/",
        "t": 6
      },
      {
        "id": "cube",
        "n": "Cube",
        "l": "https://coin-images.coingecko.com/markets/images/1519/small/Cube_Wordmark_Vertical_White_With_Black_BG_%282%29.png?1713153820",
        "u": "https://www.cube.exchange/",
        "t": 6
      },
      {
        "id": "oku-trade-bob-network",
        "n": "Oku Trade (BOB Network)",
        "l": "https://coin-images.coingecko.com/markets/images/11740/small/oku_trade.png?1764557037",
        "u": "https://oku.trade/app/bob?utm_source=coingecko",
        "t": 6
      },
      {
        "id": "zkswap-finance-v3-sonic",
        "n": "zkSwap Finance V3 (Sonic)",
        "l": "https://coin-images.coingecko.com/markets/images/22083/small/200x200_Black.png?1756958717",
        "u": "https://www.zkswap.finance",
        "t": 6
      },
      {
        "id": "wagmi-metis",
        "n": "WAGMI (Metis)",
        "l": "https://coin-images.coingecko.com/markets/images/1403/small/WAGMI_NEW_LOGO_PNG.png?1710470836",
        "u": "https://wagmi.com/",
        "t": 6
      },
      {
        "id": "gliquid",
        "n": "Gliquid",
        "l": "https://coin-images.coingecko.com/markets/images/21975/small/GLiquid_PFP_%28New_Logo%29_%281%29.png?1750069798",
        "u": "https://www.gliquid.xyz/swap",
        "t": 6
      },
      {
        "id": "capybaradex-v2",
        "n": "CapybaraDEX V2",
        "l": "https://coin-images.coingecko.com/markets/images/11936/small/CapyBara_logo_PFP_.jpg?1745388482",
        "u": "https://www.capybara.exchange/",
        "t": 6
      },
      {
        "id": "zkswap-finance-stableswap",
        "n": "zkSwap Finance StableSwap",
        "l": "https://coin-images.coingecko.com/markets/images/11819/small/zkswap.jpg?1736734749",
        "u": "https://www.zkswap.finance/swap",
        "t": 6
      },
      {
        "id": "websea",
        "n": "Websea",
        "l": "https://coin-images.coingecko.com/markets/images/1365/small/websea-logo-png.png?1706865385",
        "u": "https://www.websea.com/en",
        "t": 5
      },
      {
        "id": "poloniex",
        "n": "Poloniex",
        "l": "https://poloniex.com/favicon.ico",
        "u": "https://poloniex.com/trade/{s}_USDT",
        "t": 5
      },
      {
        "id": "difx",
        "n": "DIFX",
        "l": "https://coin-images.coingecko.com/markets/images/1138/small/difx.png?1706865156",
        "u": "https://difx.com/en",
        "t": 5
      },
      {
        "id": "curve_ethereum",
        "n": "Curve (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/538/small/Curve.png?1706864506",
        "u": "https://www.curve.finance/dex/ethereum/pools/",
        "t": 5
      },
      {
        "id": "uniswap-v4-ethereum",
        "n": "Uniswap V4 (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/11846/small/uniswap.jpg?1738640275",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "bit2me",
        "n": "Bit2Me",
        "l": "https://coin-images.coingecko.com/markets/images/1137/small/bit2me.png?1706865155",
        "u": "https://bit2me.com/",
        "t": 5
      },
      {
        "id": "aerodrome-slipstream",
        "n": "Aerodrome SlipStream",
        "l": "https://coin-images.coingecko.com/markets/images/1579/small/aerodrome.jpeg?1714981922",
        "u": "https://aerodrome.finance/swap?",
        "t": 5
      },
      {
        "id": "uniswap-v3-base",
        "n": "Uniswap V3 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1212/small/uniswap-v3.jpg?1706865221",
        "u": "https://app.uniswap.org/#/swap",
        "t": 5
      },
      {
        "id": "meteora",
        "n": "Meteora",
        "l": "https://coin-images.coingecko.com/markets/images/1520/small/meteora.jpeg?1710908196",
        "u": "https://app.meteora.ag/",
        "t": 5
      },
      {
        "id": "coinone",
        "n": "Coinone",
        "l": "https://coinone.co.kr/favicon.ico",
        "u": "https://coinone.co.kr/exchange/trade/{sl}/krw",
        "t": 5
      },
      {
        "id": "paribu",
        "n": "Paribu",
        "l": "https://www.paribu.com/favicon.ico",
        "u": "https://www.paribu.com/markets/{sl}-tl",
        "t": 5
      },
      {
        "id": "coincheck",
        "n": "Coincheck",
        "l": "https://coincheck.com/favicon.ico",
        "u": "https://coincheck.com/exchange/{sl}_jpy",
        "t": 5
      },
      {
        "id": "uniswap-v4-arbitrum",
        "n": "Uniswap V4 (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/11848/small/uniswap.jpg?1738644318",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "raydium2",
        "n": "Raydium",
        "l": "https://coin-images.coingecko.com/markets/images/649/small/raydium.jpeg?1706864594",
        "u": "https://raydium.io/swap/",
        "t": 5
      },
      {
        "id": "uniswap-v4-polygon",
        "n": "Uniswap V4 (Polygon)",
        "l": "https://coin-images.coingecko.com/markets/images/11843/small/uniswap.jpg?1738305111",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "dodo",
        "n": "DODO (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/588/small/dodoex.png?1706864541",
        "u": "https://app.dodoex.io/",
        "t": 5
      },
      {
        "id": "bilaxy",
        "n": "Bilaxy",
        "l": "https://coin-images.coingecko.com/markets/images/193/small/bilaxy.png?1706864324",
        "u": "https://bilaxy.com/",
        "t": 5
      },
      {
        "id": "uniswap-v4-base",
        "n": "Uniswap V4 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/11842/small/uniswap.jpg?1738304945",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "icrypex",
        "n": "Icrypex",
        "l": "https://coin-images.coingecko.com/markets/images/1222/small/X.png?1706865230",
        "u": "https://www.icrypex.com/en",
        "t": 5
      },
      {
        "id": "koinpark",
        "n": "Koinpark",
        "l": "https://coin-images.coingecko.com/markets/images/1550/small/koinpark_symbol_1.png?1740754303",
        "u": "https://www.koinpark.com/",
        "t": 5
      },
      {
        "id": "uniswap-v4-unichain",
        "n": "Uniswap V4 (Unichain)",
        "l": "https://coin-images.coingecko.com/markets/images/11868/small/uniswap.jpg?1739417852",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "tokpie",
        "n": "Tokpie",
        "l": "https://coin-images.coingecko.com/markets/images/436/small/logo_circle_100x100.png?1706864435",
        "u": "https://tokpie.io/",
        "t": 5
      },
      {
        "id": "velodrome-finance-slipstream",
        "n": "Velodrome SlipStream (Optimism)",
        "l": "https://coin-images.coingecko.com/markets/images/1498/small/velodrome.jpeg?1710226947",
        "u": "https://velodrome.finance/swap",
        "t": 5
      },
      {
        "id": "xbo_com",
        "n": "XBO.com",
        "l": "https://coin-images.coingecko.com/markets/images/21997/small/xbo.com.png?1752632853",
        "u": "https://www.xbo.com/",
        "t": 5
      },
      {
        "id": "merchant-moe-liquidity-book-mantle",
        "n": "Merchant Moe Liquidity Book (Mantle)",
        "l": "https://coin-images.coingecko.com/markets/images/1594/small/lb.png?1715330017",
        "u": "https://merchantmoe.com/trade",
        "t": 5
      },
      {
        "id": "toko_crypto",
        "n": "TokoCrypto",
        "l": "https://coin-images.coingecko.com/markets/images/501/small/toko.png?1706864476",
        "u": "https://tokocrypto.com",
        "t": 5
      },
      {
        "id": "kanga",
        "n": "Kanga",
        "l": "https://coin-images.coingecko.com/markets/images/852/small/KaNGa_logo.png?1706864870",
        "u": "https://kanga.exchange/",
        "t": 5
      },
      {
        "id": "novadax",
        "n": "NovaDAX",
        "l": "https://www.novadax.com.br/favicon.ico",
        "u": "https://www.novadax.com.br/trade/{s}_USDT",
        "t": 5
      },
      {
        "id": "dragonswap-v2",
        "n": "Saphyre V2",
        "l": "https://coin-images.coingecko.com/markets/images/11723/small/saphyre.png?1770365126",
        "u": "https://saphyre.xyz/swap",
        "t": 5
      },
      {
        "id": "solidly-v3-optimism",
        "n": "Solidly V3 (Optimism)",
        "l": "https://coin-images.coingecko.com/markets/images/1514/small/solidly.png?1710903747",
        "u": "https://solidly.com/swap/",
        "t": 5
      },
      {
        "id": "turbos-finance",
        "n": "Turbos Finance",
        "l": "https://coin-images.coingecko.com/markets/images/1323/small/Turbos_Logo_dark_mode.png?1706865327",
        "u": "https://app.turbos.finance/",
        "t": 5
      },
      {
        "id": "camelot-v3",
        "n": "Camelot V3",
        "l": "https://coin-images.coingecko.com/markets/images/1119/small/camelot.jpeg?1706865139",
        "u": "https://app.camelot.exchange/",
        "t": 5
      },
      {
        "id": "dodo_bsc",
        "n": "DODO (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/640/small/41tgsq69_400x400.png?1706864586",
        "u": "https://dodoex.io/",
        "t": 5
      },
      {
        "id": "sologenic",
        "n": "Sologenic",
        "l": "https://coin-images.coingecko.com/markets/images/1146/small/sologenic.png?1706865163",
        "u": "https://sologenic.org/",
        "t": 5
      },
      {
        "id": "uniswap-v2-base",
        "n": "Uniswap V2 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1472/small/uniswap.png?1709698489",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "maverick-protocol-v2-arbitrum",
        "n": "Maverick Protocol V2 (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/11771/small/mav-symbol-color%283%29.png?1732251359",
        "u": "https://app.mav.xyz/?chain=42161",
        "t": 5
      },
      {
        "id": "coinjar",
        "n": "CoinJar Exchange",
        "l": "https://coin-images.coingecko.com/markets/images/176/small/Logomark_2022200h_thumb.png?1706864322",
        "u": "https://www.coinjar.com/",
        "t": 5
      },
      {
        "id": "thena-fusion",
        "n": "THENA FUSION",
        "l": "https://coin-images.coingecko.com/markets/images/1123/small/thena_logo.jpg?1706973472",
        "u": "https://www.thena.fi/swap",
        "t": 5
      },
      {
        "id": "solidly-v3-base",
        "n": "Solidly V3 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1515/small/solidly.png?1710903857",
        "u": "https://solidly.com/swap/",
        "t": 5
      },
      {
        "id": "pulsex-v2",
        "n": "PulseX V2",
        "l": "https://coin-images.coingecko.com/markets/images/1176/small/oYHR8Nqd_400x400.jpg?1706865189",
        "u": "https://app.pulsex.com/swap",
        "t": 6
      },
      {
        "id": "uniswap-v4-optimism",
        "n": "Uniswap V4 (Optimism)",
        "l": "https://coin-images.coingecko.com/markets/images/11847/small/uniswap.jpg?1738643915",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "fluid-base",
        "n": "Fluid (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/22105/small/data.?1758598323",
        "u": "https://fluid.io/swap/8453",
        "t": 5
      },
      {
        "id": "balancer-v3-base",
        "n": "Balancer V3 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/22045/small/balancer.png?1755077941",
        "u": "https://balancer.fi/swap/base",
        "t": 6
      },
      {
        "id": "stonfi-v2",
        "n": "STON.fi (V2)",
        "l": "https://coin-images.coingecko.com/markets/images/11725/small/ston.jpg?1727857109",
        "u": "https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=STON",
        "t": 5
      },
      {
        "id": "vvs",
        "n": "VVS Finance",
        "l": "https://coin-images.coingecko.com/markets/images/736/small/vvs-finance.jpeg?1706864699",
        "u": "https://vvs.finance/swap",
        "t": 5
      },
      {
        "id": "gopax",
        "n": "GoPax",
        "l": "https://coin-images.coingecko.com/markets/images/144/small/gopax.jpg?1706864311",
        "u": "https://www.gopax.co.kr/exchange/",
        "t": 5
      },
      {
        "id": "sushiswap-v3-base",
        "n": "SushiSwap V3 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1203/small/lFs3rTxB_400x400.png?1706865213",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "kyo-finance-v3",
        "n": "Kyo Finance V3",
        "l": "https://coin-images.coingecko.com/markets/images/11823/small/kyo_finance.jpg?1737339132",
        "u": "https://app.kyo.finance/swap",
        "t": 5
      },
      {
        "id": "cypher",
        "n": "Cypher",
        "l": "https://coin-images.coingecko.com/markets/images/22178/small/data.?1766372626",
        "u": "https://app.cyphereth.com",
        "t": 5
      },
      {
        "id": "uniswap-v4-soneium",
        "n": "Uniswap V4 (Soneium)",
        "l": "https://coin-images.coingecko.com/markets/images/22172/small/open-uri20251201-59-lui6uh.?1764593971",
        "u": "https://app.uniswap.org/#/swap",
        "t": 5
      },
      {
        "id": "katana-v3",
        "n": "Katana V3",
        "l": "https://coin-images.coingecko.com/markets/images/11796/small/katana.jpg?1734432660",
        "u": "https://app.roninchain.com/swap#/swap",
        "t": 5
      },
      {
        "id": "bitzy",
        "n": "Bitzy",
        "l": "https://coin-images.coingecko.com/markets/images/22011/small/bitzy.png?1753167945",
        "u": "https://bitzy.app/swap",
        "t": 5
      },
      {
        "id": "oku-trade-rootstock",
        "n": "Oku Trade (Rootstock)",
        "l": "https://coin-images.coingecko.com/markets/images/1709/small/oku_trade.png?1764557011",
        "u": "https://oku.trade/app/rootstock?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "oku-trade-rootstock",
        "n": "Oku Trade (Rootstock)",
        "l": "https://coin-images.coingecko.com/markets/images/1709/small/oku_trade.png?1764557011",
        "u": "https://oku.trade/app/rootstock?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "sparkdex-v4",
        "n": "SparkDEX V4",
        "l": "https://coin-images.coingecko.com/markets/images/22207/small/open-uri20260210-68-qdtrve.?1770704304",
        "u": "https://sparkdex.ai/swap",
        "t": 5
      },
      {
        "id": "syncswap",
        "n": "SyncSwap",
        "l": "https://coin-images.coingecko.com/markets/images/1113/small/kg4-p_V7_400x400.jpg?1706865133",
        "u": "https://syncswap.xyz/swap",
        "t": 5
      },
      {
        "id": "vvs-v3",
        "n": "VVS V3 (Cronos)",
        "l": "https://coin-images.coingecko.com/markets/images/21973/small/vvs.jpg?1749907773",
        "u": "https://vvs.finance/swap",
        "t": 5
      },
      {
        "id": "pangolin",
        "n": "Pangolin",
        "l": "https://coin-images.coingecko.com/markets/images/627/small/Pangolin_Logo_Yellow_Dark_Round.png?1706864570",
        "u": "https://app.pangolin.exchange/#/swap",
        "t": 5
      },
      {
        "id": "velodrome-finance-slipstream-soneium",
        "n": "Velodrome Finance Slipstream (Soneium)",
        "l": "https://coin-images.coingecko.com/markets/images/11824/small/velodrome.jpg?1737343279",
        "u": "https://velodrome.finance/",
        "t": 5
      },
      {
        "id": "maverick-protocol-v2-base",
        "n": "Maverick Protocol V2 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/11774/small/mav-symbol-color%283%29.png?1732251478",
        "u": "https://app.mav.xyz/?chain=8453",
        "t": 5
      },
      {
        "id": "valiant",
        "n": "Valiant",
        "l": "https://coin-images.coingecko.com/markets/images/22222/small/open-uri20260302-268-7u6512.?1772432187",
        "u": "https://valiant.trade",
        "t": 5
      },
      {
        "id": "ultrasolid-v3",
        "n": "UltraSolid V3",
        "l": "https://coin-images.coingecko.com/markets/images/22096/small/UltraSolid.png?1757671372",
        "u": "https://ultrasolid.xyz/",
        "t": 5
      },
      {
        "id": "oku-trade-xdc",
        "n": "Oku Trade (XDC)",
        "l": "https://coin-images.coingecko.com/markets/images/11955/small/oku-trade.jpeg?1747820833",
        "u": "https://oku.trade/app/xdc?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "aborean-finance-v2",
        "n": "Aborean Finance V2",
        "l": "https://coin-images.coingecko.com/markets/images/22127/small/open-uri20251013-75-f3cmhg.?1760340247",
        "u": "https://app.aborean.finance/swap",
        "t": 5
      },
      {
        "id": "oku-trade-goat",
        "n": "Oku Trade (Goat)",
        "l": "https://coin-images.coingecko.com/markets/images/11931/small/oku_trade.png?1764557111",
        "u": "https://oku.trade/app/goat?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "sushiswap-v3-polygon",
        "n": "Sushiswap V3 (Polygon)",
        "l": "https://coin-images.coingecko.com/markets/images/1163/small/sushiswap.png?1706865178",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "prism-megaeth",
        "n": "Prism",
        "l": "https://coin-images.coingecko.com/markets/images/22212/small/data.?1771213005",
        "u": "https://prismfi.cc/swap",
        "t": 5
      },
      {
        "id": "krown-dex",
        "n": "Krown DEX",
        "l": "https://coin-images.coingecko.com/markets/images/22189/small/data.?1768466040",
        "u": "https://krowndex.com/trade",
        "t": 5
      },
      {
        "id": "rooster-protocol-v2",
        "n": "Rooster Protocol V2",
        "l": "https://coin-images.coingecko.com/markets/images/22129/small/open-uri20251016-29-o1otq5.?1760611195",
        "u": "https://app.rooster.trade/swap",
        "t": 5
      },
      {
        "id": "sushiswap-v3-filecoin",
        "n": "SushiSwap V3 (Filecoin)",
        "l": "https://coin-images.coingecko.com/markets/images/1672/small/sushiswap-sushi-logo.png?1721789413",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "ston_fi",
        "n": "STON.fi",
        "l": "https://coin-images.coingecko.com/markets/images/1216/small/ston.jpeg?1706865224",
        "u": "https://ston.fi/",
        "t": 5
      },
      {
        "id": "fraxswap-fraxtal",
        "n": "Fraxswap (Fraxtal)",
        "l": "https://coin-images.coingecko.com/markets/images/1463/small/fraxtal.jpeg?1709564845",
        "u": "https://app.frax.finance/swap/main",
        "t": 5
      },
      {
        "id": "curve-fraxtal",
        "n": "Curve (Fraxtal)",
        "l": "https://coin-images.coingecko.com/markets/images/1633/small/CurveFi_32.png?1718177158",
        "u": "https://www.curve.finance/dex/fraxtal/pools/",
        "t": 5
      },
      {
        "id": "lynex-linea",
        "n": "Lynex",
        "l": "https://coin-images.coingecko.com/markets/images/1250/small/lynex.png?1706865254",
        "u": "https://www.lynex.fi/",
        "t": 5
      },
      {
        "id": "lithos",
        "n": "Lithos",
        "l": "https://coin-images.coingecko.com/markets/images/22120/small/open-uri20251002-45-arpnah.?1759399192",
        "u": "https://lithos.to/swap",
        "t": 5
      },
      {
        "id": "flowswap",
        "n": "FlowSwap",
        "l": "https://coin-images.coingecko.com/markets/images/22147/small/data.?1763092172",
        "u": "https://flowswap.io/swap",
        "t": 5
      },
      {
        "id": "oku-trade-sei-v2",
        "n": "Oku Trade (Sei V2)",
        "l": "https://coin-images.coingecko.com/markets/images/1708/small/oku_trade.png?1764556983",
        "u": "https://oku.trade/app/sei?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "oku-trade-mantle",
        "n": "Oku Trade (Mantle)",
        "l": "https://coin-images.coingecko.com/markets/images/22170/small/oku_trade.png?1764556715",
        "u": "https://oku.trade/app/mantle?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "atlantis-monad",
        "n": "Atlantis (Monad)",
        "l": "https://coin-images.coingecko.com/markets/images/22165/small/Atlantis_Icon_Circle.png?1764138976",
        "u": "https://app.atlantisdex.xyz/",
        "t": 5
      },
      {
        "id": "bancor",
        "n": "Bancor (V2)",
        "l": "https://coin-images.coingecko.com/markets/images/108/small/Bancor_Token.png?1710479364",
        "u": "https://www.bancor.network",
        "t": 5
      },
      {
        "id": "wazirx",
        "n": "WazirX",
        "l": "https://wazirx.com/favicon.ico",
        "u": "https://wazirx.com/exchange/{s}-USDT",
        "t": 5
      },
      {
        "id": "balancer-v3-plasma",
        "n": "Balancer V3 (Plasma)",
        "l": "https://coin-images.coingecko.com/markets/images/22109/small/open-uri20250925-6750-keednh.?1758806218",
        "u": "https://balancer.fi/swap/plasma",
        "t": 5
      },
      {
        "id": "dedust",
        "n": "DeDust",
        "l": "https://coin-images.coingecko.com/markets/images/1233/small/2023-08-18_16.45.04.jpg?1706865239",
        "u": "https://dedust.io/",
        "t": 5
      },
      {
        "id": "uniswap-v4-x-layer",
        "n": "Uniswap V4 (x Layer)",
        "l": "https://coin-images.coingecko.com/markets/images/22193/small/open-uri20260122-22-tqe11o.?1769053036",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "hata",
        "n": "Hata",
        "l": "https://coin-images.coingecko.com/markets/images/11861/small/HATA_blue_logo_-_200x200.png?1739177538",
        "u": "https://hata.io/home",
        "t": 5
      },
      {
        "id": "balancer-v3-gnosis",
        "n": "Balancer V3 (Gnosis)",
        "l": "https://coin-images.coingecko.com/markets/images/22046/small/balancer.png?1755078103",
        "u": "https://balancer.fi/swap/gnosis",
        "t": 5
      },
      {
        "id": "saucerswap",
        "n": "Saucerswap V1",
        "l": "https://coin-images.coingecko.com/markets/images/1014/small/SAUCE.png?1706865000",
        "u": "https://www.saucerswap.finance/",
        "t": 5
      },
      {
        "id": "treble-v4",
        "n": "Treble V4",
        "l": "https://coin-images.coingecko.com/markets/images/11916/small/Treble.jpg?1742440916",
        "u": "https://app.trebleswap.com/swap/v4",
        "t": 5
      },
      {
        "id": "swapx-algebra",
        "n": "SwapX Algebra",
        "l": "https://coin-images.coingecko.com/markets/images/11811/small/swapx.jpg?1736149517",
        "u": "https://swapx.fi/swap",
        "t": 5
      },
      {
        "id": "fraxswap_ethereum",
        "n": "Fraxswap (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/911/small/JjqQ9ROz_400x400.jpeg?1706864908",
        "u": "https://app.frax.finance/swap/main",
        "t": 5
      },
      {
        "id": "paymium",
        "n": "Paymium",
        "l": "https://coin-images.coingecko.com/markets/images/133/small/paymium_logo-ico.png?1706864304",
        "u": "https://www.paymium.com/",
        "t": 5
      },
      {
        "id": "curve-gnosis",
        "n": "Curve (Gnosis)",
        "l": "https://coin-images.coingecko.com/markets/images/11921/small/curve.jpg?1742886351",
        "u": "https://www.curve.finance/dex/xdai/pools/",
        "t": 5
      },
      {
        "id": "pancakeswap-v3-zksync",
        "n": "PancakeSwap V3 (zkSync)",
        "l": "https://coin-images.coingecko.com/markets/images/1193/small/pancakeswap.jpeg?1706865204",
        "u": "https://pancakeswap.finance/swap?chain=zkSync",
        "t": 5
      },
      {
        "id": "sushiswap-v3-hemi",
        "n": "Sushiswap V3 (Hemi)",
        "l": "https://coin-images.coingecko.com/markets/images/21991/small/sushiswap.jpg?1751513864",
        "u": "https://www.sushi.com/hemi/swap",
        "t": 5
      },
      {
        "id": "maverick-protocol-v2-bsc",
        "n": "Maverick Protocol V2 (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/11773/small/mav-symbol-color%283%29.png?1732251453",
        "u": "https://app.mav.xyz/?chain=56",
        "t": 5
      },
      {
        "id": "kayen",
        "n": "FanX Protocol",
        "l": "https://coin-images.coingecko.com/markets/images/1701/small/fanx.png?1761029740",
        "u": "https://app.fanx.xyz/trade/swap",
        "t": 5
      },
      {
        "id": "blackhole-v2",
        "n": "Blackhole V2",
        "l": "https://coin-images.coingecko.com/markets/images/22006/small/black.jpg?1752850862",
        "u": "https://www.blackhole.xyz/",
        "t": 5
      },
      {
        "id": "biswap",
        "n": "Biswap",
        "l": "https://coin-images.coingecko.com/markets/images/745/small/rXUu-spA_400x400.jpeg?1706864778",
        "u": "https://biswap.org/",
        "t": 5
      },
      {
        "id": "syncswap-scroll",
        "n": "SyncSwap (Scroll)",
        "l": "https://coin-images.coingecko.com/markets/images/1333/small/syncswap-linea.jpg?1706865336",
        "u": "https://syncswap.xyz/scroll",
        "t": 5
      },
      {
        "id": "aquaspace-v3",
        "n": "AquaSpace V3",
        "l": "https://coin-images.coingecko.com/markets/images/22203/small/open-uri20260209-68-okxnii.?1770605065",
        "u": "https://pumpspace.io/swap",
        "t": 5
      },
      {
        "id": "pearl-exchange",
        "n": "PearlFi",
        "l": "https://coin-images.coingecko.com/markets/images/1170/small/pearlfi.jpeg?1706865184",
        "u": "https://www.pearl.exchange/swap",
        "t": 5
      },
      {
        "id": "astroport_v2",
        "n": "Astroport (Terra)",
        "l": "https://coin-images.coingecko.com/markets/images/1081/small/astroport.jpeg?1706865103",
        "u": "https://app.astroport.fi",
        "t": 5
      },
      {
        "id": "thruster-v3",
        "n": "Thruster V3",
        "l": "https://coin-images.coingecko.com/markets/images/1460/small/thrusterfi.jpeg?1709253847",
        "u": "https://app.thruster.finance/",
        "t": 5
      },
      {
        "id": "nuri-v2",
        "n": "Nuri V2",
        "l": "https://coin-images.coingecko.com/markets/images/1601/small/nuri_discord.png?1723623493",
        "u": "https://www.nuri.exchange/swap",
        "t": 5
      },
      {
        "id": "tinyman",
        "n": "Tinyman",
        "l": "https://coin-images.coingecko.com/markets/images/952/small/tinyman.jpeg?1706864945",
        "u": "https://app.tinyman.org/",
        "t": 5
      },
      {
        "id": "quickswap-v3-immutable-zkevm",
        "n": "QuickSwap V3 (Immutable zkEVM)",
        "l": "https://coin-images.coingecko.com/markets/images/1504/small/quickswap.jpeg?1710821675",
        "u": "https://quickswap.exchange/#/swap?",
        "t": 5
      },
      {
        "id": "tiktokfun",
        "n": "TikTokFun",
        "l": "https://coin-images.coingecko.com/markets/images/21971/small/tiktokfun.jpg?1749782510",
        "u": "https://app.tiktokfun.net/swap/",
        "t": 5
      },
      {
        "id": "velodrome-finance-slipstream-lisk",
        "n": "Velodrome Finance Slipstream (Lisk)",
        "l": "https://coin-images.coingecko.com/markets/images/11826/small/velodrome.jpg?1737344359",
        "u": "https://velodrome.finance/",
        "t": 5
      },
      {
        "id": "nostra",
        "n": "Nostra ",
        "l": "https://coin-images.coingecko.com/markets/images/1425/small/Nostra-Logo-for-Coingecko.png?1716206530",
        "u": "https://app.nostra.finance/pools",
        "t": 5
      },
      {
        "id": "sushiswap-v3-rootstock",
        "n": "Sushiswap V3 (Rootstock)",
        "l": "https://coin-images.coingecko.com/markets/images/21989/small/sushiswap-sushi-logo.png?1751444804",
        "u": "https://www.sushi.com/rootstock/swap",
        "t": 5
      },
      {
        "id": "curve-plasma",
        "n": "Curve (Plasma)",
        "l": "https://coin-images.coingecko.com/markets/images/22110/small/open-uri20250926-30-u83tvm.?1758852897",
        "u": "https://www.curve.finance/dex/plasma/swap",
        "t": 5
      },
      {
        "id": "initia-dex",
        "n": "Initia DEX",
        "l": "https://coin-images.coingecko.com/markets/images/21984/small/initia.png?1750744341",
        "u": "https://app.initia.xyz/swap",
        "t": 5
      },
      {
        "id": "baseswap",
        "n": "BaseSwap",
        "l": "https://coin-images.coingecko.com/markets/images/1209/small/R5J5HOG.png?1706865218",
        "u": "https://baseswap.fi/",
        "t": 5
      },
      {
        "id": "octoswap-cl",
        "n": "OctoSwap CL",
        "l": "https://coin-images.coingecko.com/markets/images/22162/small/open-uri20251126-53-fkpdda.?1764134222",
        "u": "https://octo.exchange/swap",
        "t": 5
      },
      {
        "id": "etherex-legacy",
        "n": "Etherex Legacy ",
        "l": "https://coin-images.coingecko.com/markets/images/22067/small/etherex.jpeg?1755584704",
        "u": "https://www.etherex.finance/trade",
        "t": 5
      },
      {
        "id": "balancer-v3-avalanche",
        "n": "Balancer V3 (Avalanche)",
        "l": "https://coin-images.coingecko.com/markets/images/22039/small/balancer.png?1754970906",
        "u": "https://balancer.fi/swap/avalanche",
        "t": 5
      },
      {
        "id": "curve-plume",
        "n": "Curve (Plume)",
        "l": "https://coin-images.coingecko.com/markets/images/21982/small/curve.jpg?1750655641",
        "u": "https://www.curve.finance/dex/plume/swap/",
        "t": 5
      },
      {
        "id": "tigris",
        "n": "Tigris",
        "l": "https://coin-images.coingecko.com/markets/images/22052/small/mezo.png?1755159201",
        "u": "https://mezo.org/borrow",
        "t": 5
      },
      {
        "id": "yuzu",
        "n": "Yuzu",
        "l": "https://coin-images.coingecko.com/markets/images/21962/small/yuzu.png?1748919619",
        "u": "https://app.yuzu.finance/swap",
        "t": 5
      },
      {
        "id": "syncswap-linea",
        "n": "SyncSwap (Linea)",
        "l": "https://coin-images.coingecko.com/markets/images/1187/small/syncswap-linea.jpg?1706865199",
        "u": "https://syncswap.xyz/",
        "t": 5
      },
      {
        "id": "curve-xdc",
        "n": "Curve (XDC)",
        "l": "https://coin-images.coingecko.com/markets/images/21978/small/curve.jpg?1750213610",
        "u": "https://www.curve.finance/dex/xdc/swap/",
        "t": 5
      },
      {
        "id": "thena",
        "n": "THENA",
        "l": "https://coin-images.coingecko.com/markets/images/1039/small/thena_logo.jpg?1706973463",
        "u": "https://thena.fi/swap",
        "t": 5
      },
      {
        "id": "sushiswap_polygon_pos",
        "n": "Sushiswap (Polygon POS)",
        "l": "https://coin-images.coingecko.com/markets/images/668/small/sushiswap-polygon-matic.png?1706864611",
        "u": "https://app.sushi.com/swap",
        "t": 5
      },
      {
        "id": "kongswap",
        "n": "KongSwap",
        "l": "https://coin-images.coingecko.com/markets/images/22130/small/open-uri20251017-29-75zpz9.?1760665064",
        "u": "https://kongswap.io/swap",
        "t": 5
      },
      {
        "id": "defi_swap",
        "n": "DeFi Swap",
        "l": "https://coin-images.coingecko.com/markets/images/637/small/crypto-com-mco-coin-logo.png?1706864583",
        "u": "https://crypto.com/defi/swap",
        "t": 5
      },
      {
        "id": "biswap-v3-1",
        "n": "Biswap V3",
        "l": "https://coin-images.coingecko.com/markets/images/1318/small/biswap.jpeg?1706865322",
        "u": "https://biswap.org/swap?",
        "t": 5
      },
      {
        "id": "dooar-polygon",
        "n": "DOOAR (Polygon)",
        "l": "https://coin-images.coingecko.com/markets/images/1417/small/dooar.png?1706865410",
        "u": "https://dooar.com/",
        "t": 5
      },
      {
        "id": "sushiswap_arbitrum",
        "n": "Sushiswap (Arbitrum One)",
        "l": "https://coin-images.coingecko.com/markets/images/701/small/sushiswap3.png?1706864653",
        "u": "https://app.sushi.com/swap",
        "t": 5
      },
      {
        "id": "balancer-v2-base",
        "n": "Balancer V2 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1223/small/balancer-v2.png?1706865231",
        "u": "https://balancer.fi/",
        "t": 5
      },
      {
        "id": "xflows",
        "n": "Xflows",
        "l": "https://coin-images.coingecko.com/markets/images/22068/small/xflows.jpeg?1755587343",
        "u": "https://xflows.wanchain.org/",
        "t": 5
      },
      {
        "id": "curve-bsc",
        "n": "Curve (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/1551/small/curve-dao-token-crv-logo.png?1713152923",
        "u": "https://www.curve.finance/dex/bsc/pools/",
        "t": 5
      },
      {
        "id": "pancakeswap_ethereum",
        "n": "PancakeSwap (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/987/small/pancakeswap.jpeg?1706864976",
        "u": "https://pancakeswap.finance",
        "t": 5
      },
      {
        "id": "9mm-v3-base",
        "n": "9mm V3 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/11905/small/9mm.jpg?1741589392",
        "u": "https://dex.9mm.pro/swap?chain=basechain",
        "t": 5
      },
      {
        "id": "saros",
        "n": "Saros AMM",
        "l": "https://coin-images.coingecko.com/markets/images/861/small/saros.png?1754059184",
        "u": "https://dex.saros.xyz/",
        "t": 5
      },
      {
        "id": "uniswap-v4-celo",
        "n": "Uniswap V4 (Celo)",
        "l": "https://coin-images.coingecko.com/markets/images/22215/small/open-uri20260224-54-i5r1j6.?1771898618",
        "u": "https://app.uniswap.org/#/swap",
        "t": 5
      },
      {
        "id": "solidly-v3-arbitrum",
        "n": "Solidly V3 (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/1513/small/solidly.png?1710901655",
        "u": "https://solidly.com/swap/",
        "t": 5
      },
      {
        "id": "beam-swap",
        "n": "Beam Swap",
        "l": "https://coin-images.coingecko.com/markets/images/1357/small/beam.png?1706865381",
        "u": "https://swap.onbeam.com/#/swap",
        "t": 5
      },
      {
        "id": "mute",
        "n": "Koi Finance",
        "l": "https://coin-images.coingecko.com/markets/images/1104/small/koi_finance.jpeg?1711947967",
        "u": "https://app.koi.finance/swap",
        "t": 5
      },
      {
        "id": "oku-trade-filecoin",
        "n": "Oku Trade (Filecoin)",
        "l": "https://coin-images.coingecko.com/markets/images/1524/small/oku_trade.png?1764556908",
        "u": "https://oku.trade/app/filecoin?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "wagmi-sonic",
        "n": "Wagmi (Sonic)",
        "l": "https://coin-images.coingecko.com/markets/images/11807/small/wagmi.jpg?1735898395",
        "u": "https://app.wagmi.com/trade/swap",
        "t": 5
      },
      {
        "id": "deltaswap",
        "n": "DeltaSwap (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/1710/small/dslogo200x200.png?1725866617",
        "u": "https://app.gammaswap.com",
        "t": 5
      },
      {
        "id": "zkswap-finance",
        "n": "zkSwap Finance",
        "l": "https://coin-images.coingecko.com/markets/images/1273/small/200x200_Black.png?1750523641",
        "u": "https://zkswap.finance/",
        "t": 6
      },
      {
        "id": "balancer-gnosis",
        "n": "Balancer V2 (Gnosis)",
        "l": "https://coin-images.coingecko.com/markets/images/1141/small/balancer-bal-logo.png?1706865159",
        "u": "https://balancer.fi/",
        "t": 5
      },
      {
        "id": "saros-dlmm",
        "n": "Saros DLMM",
        "l": "https://coin-images.coingecko.com/markets/images/22007/small/saros.png?1754059192",
        "u": "https://dlmm.saros.xyz/swap",
        "t": 5
      },
      {
        "id": "ruji-trade",
        "n": "RUJI Trade (Rujira)",
        "l": "https://coin-images.coingecko.com/markets/images/22036/small/ruji-logo_%28200x200%29.png?1754957338",
        "u": "https://rujira.network/trade/",
        "t": 5
      },
      {
        "id": "bex",
        "n": "BEX",
        "l": "https://coin-images.coingecko.com/markets/images/11853/small/BERA.png?1738848788",
        "u": "https://hub.berachain.com/swap/",
        "t": 5
      },
      {
        "id": "quickswap-somnia",
        "n": "QuickSwap (Somnia)",
        "l": "https://coin-images.coingecko.com/markets/images/22089/small/quickswap.jpg?1757319368",
        "u": "https://dapp.quickswap.exchange/swap/v4",
        "t": 5
      },
      {
        "id": "piperx-v3",
        "n": "PiperX V3",
        "l": "https://coin-images.coingecko.com/markets/images/11869/small/piperx.jpg?1739437342",
        "u": "https://app.piperx.xyz/#/swap",
        "t": 5
      },
      {
        "id": "meridian",
        "n": "Meridian",
        "l": "https://coin-images.coingecko.com/markets/images/22191/small/open-uri20260119-254-2o0gnq.?1768809555",
        "u": "https://app.meridian.money/swap",
        "t": 5
      },
      {
        "id": "sushiswap-v3-optimism",
        "n": "Sushiswap V3 (Optimism)",
        "l": "https://coin-images.coingecko.com/markets/images/1161/small/sushiswap.png?1706865176",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "pangolin-v3-monad",
        "n": "Pangolin V3 (Monad)",
        "l": "https://coin-images.coingecko.com/markets/images/22174/small/pangolin.png?1764730177",
        "u": "https://app.pangolin.exchange/swap",
        "t": 5
      },
      {
        "id": "beets-sonic",
        "n": "Beets (Sonic)",
        "l": "https://coin-images.coingecko.com/markets/images/11830/small/beets.jpg?1737440313",
        "u": "https://beets.fi/swap",
        "t": 5
      },
      {
        "id": "balanced_network",
        "n": "Balanced",
        "l": "https://coin-images.coingecko.com/markets/images/712/small/balanced.png?1706864667",
        "u": "https://balanced.network/",
        "t": 5
      },
      {
        "id": "curve-hyperevm",
        "n": "Curve (HyperEVM)",
        "l": "https://coin-images.coingecko.com/markets/images/21961/small/curve.jpg?1748490978",
        "u": "https://www.curve.finance/dex/hyperliquid/swap/",
        "t": 5
      },
      {
        "id": "velodrome",
        "n": "Velodrome Finance",
        "l": "https://coin-images.coingecko.com/markets/images/933/small/velodrome-finance.png?1706864928",
        "u": "https://velodrome.finance/",
        "t": 5
      },
      {
        "id": "10kswap-starknet-alpha",
        "n": "10KSwap",
        "l": "https://coin-images.coingecko.com/markets/images/1298/small/10kswap.jpeg?1706865291",
        "u": "https://10kswap.com/swap",
        "t": 5
      },
      {
        "id": "upheaval-finance",
        "n": "Upheaval Finance",
        "l": "https://coin-images.coingecko.com/markets/images/22071/small/upheaval-finance.jpg?1756196905",
        "u": "https://upheaval.fi/swap",
        "t": 5
      },
      {
        "id": "pools-finance",
        "n": "Pools Finance",
        "l": "https://coin-images.coingecko.com/markets/images/22198/small/open-uri20260123-8488-qlnfdr.?1769155614",
        "u": "https://app.pools.finance",
        "t": 5
      },
      {
        "id": "fluid-polygon",
        "n": "Fluid (Polygon)",
        "l": "https://coin-images.coingecko.com/markets/images/22106/small/data.?1758598334",
        "u": "https://fluid.io/swap/137",
        "t": 5
      },
      {
        "id": "bakeryswap",
        "n": "Bakeryswap",
        "l": "https://coin-images.coingecko.com/markets/images/626/small/bakeryswap.png?1706864569",
        "u": "https://www.bakeryswap.org/#/swap",
        "t": 5
      },
      {
        "id": "kittenswap-v3",
        "n": "Kittenswap V3",
        "l": "https://coin-images.coingecko.com/markets/images/11958/small/kittenswap.jpg?1748252200",
        "u": "https://app.kittenswap.finance/swap",
        "t": 5
      },
      {
        "id": "syncswap-v2-zksync",
        "n": "SyncSwap (zkSync)",
        "l": "https://coin-images.coingecko.com/markets/images/1452/small/syncswap-linea.jpg?1709181813",
        "u": "https://syncswap.xyz/swap",
        "t": 5
      },
      {
        "id": "curve-monad",
        "n": "Curve (Monad)",
        "l": "https://coin-images.coingecko.com/markets/images/22160/small/open-uri20251125-23-8dx6vv.?1764055355",
        "u": "https://www.curve.finance/dex/monad/swap",
        "t": 5
      },
      {
        "id": "jaine",
        "n": "Jaine",
        "l": "https://coin-images.coingecko.com/markets/images/22119/small/open-uri20251001-32-wdr7ob.?1759289850",
        "u": "https://jaine.app/swap",
        "t": 5
      },
      {
        "id": "oku-trade-scroll",
        "n": "Oku Trade (Scroll)",
        "l": "https://coin-images.coingecko.com/markets/images/1511/small/oku_trade.png?1764556876",
        "u": "https://oku.trade/app/scroll?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "dyorswap-x-layer",
        "n": "DYORSwap (X Layer)",
        "l": "https://coin-images.coingecko.com/markets/images/22061/small/dyorswap.jpg?1755236989",
        "u": "https://dyorswap.finance/swap",
        "t": 5
      },
      {
        "id": "kyberswap_classic_ethereum",
        "n": "KyberSwap Classic (Ethereum)",
        "l": "https://coin-images.coingecko.com/markets/images/647/small/kyberswap.png?1706864593",
        "u": "https://kyberswap.com/?r=coingecko",
        "t": 5
      },
      {
        "id": "hyperswap-v2",
        "n": "HyperSwap V2",
        "l": "https://coin-images.coingecko.com/markets/images/11873/small/hyperswap.jpg?1739972007",
        "u": "https://app.hyperswap.exchange/#/swap",
        "t": 5
      },
      {
        "id": "velodrome-finance-slipstream-fraxtal",
        "n": "Velodrome Finance Slipstream (Fraxtal)",
        "l": "https://coin-images.coingecko.com/markets/images/11798/small/velodrome.jpg?1734674617",
        "u": "https://velodrome.finance/",
        "t": 5
      },
      {
        "id": "arena-dex",
        "n": "Arena DEX",
        "l": "https://coin-images.coingecko.com/markets/images/11951/small/arenatrade.png?1747292962",
        "u": "https://arena.trade/tokens/arena-dex",
        "t": 5
      },
      {
        "id": "everyswap",
        "n": "EverySwap",
        "l": "https://coin-images.coingecko.com/markets/images/22026/small/everyswap-symbol.png?1754620893",
        "u": "https://everyswap.io/swap",
        "t": 5
      },
      {
        "id": "hyperindex",
        "n": "HyperIndex",
        "l": "https://coin-images.coingecko.com/markets/images/22058/small/hyperindex.png?1755223108",
        "u": "https://www.hyperindex.trade/",
        "t": 5
      },
      {
        "id": "arbswap_arbitrum_one",
        "n": "Arbswap",
        "l": "https://coin-images.coingecko.com/markets/images/1078/small/Arbswap.jpeg?1706865101",
        "u": "https://arbswap.io/swap",
        "t": 5
      },
      {
        "id": "quickswap-polygon-zkevm",
        "n": "Quickswap (Polygon zkEVM)",
        "l": "https://coin-images.coingecko.com/markets/images/1109/small/quickswap_latest.png?1706865130",
        "u": "https://quickswap.exchange/#/swap?",
        "t": 5
      },
      {
        "id": "sonex",
        "n": "Sonex",
        "l": "https://coin-images.coingecko.com/markets/images/11837/small/sonex.png?1737708666",
        "u": "https://app.sonex.so/swap",
        "t": 5
      },
      {
        "id": "sushiswap-v3-scroll",
        "n": "SushiSwap V3 (Scroll)",
        "l": "https://coin-images.coingecko.com/markets/images/1493/small/sushiswap-sushi-logo.png?1710145206",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "syncswap-v2-1-scroll",
        "n": "SyncSwap V2.1 (Scroll)",
        "l": "https://coin-images.coingecko.com/markets/images/1647/small/syncswap-linea.jpg?1719200111",
        "u": "https://syncswap.xyz/swap",
        "t": 5
      },
      {
        "id": "invariant_eclipse",
        "n": "Invariant (Eclipse)",
        "l": "https://coin-images.coingecko.com/markets/images/11794/small/Invariant_pfp.png?1734084498",
        "u": "https://eclipse.invariant.app",
        "t": 5
      },
      {
        "id": "sushiswap-v3-gnosis",
        "n": "Sushiswap V3 (Gnosis)",
        "l": "https://coin-images.coingecko.com/markets/images/11926/small/sushiswap.jpg?1743997448",
        "u": "https://www.sushi.com/gnosis/swap",
        "t": 5
      },
      {
        "id": "squadswap-v2-bsc",
        "n": "SquadSwap Dynamo (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/11938/small/squadswap.jpeg?1745392610",
        "u": "https://squadswap.com/swap",
        "t": 5
      },
      {
        "id": "ekubo-v3-arbitrum",
        "n": "Ekubo V3 (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/22205/small/ekubo.png?1770611289",
        "u": "https://app.ekubo.org/evm",
        "t": 5
      },
      {
        "id": "pancakeswap-v3-linea",
        "n": "PancakeSwap V3 (Linea)",
        "l": "https://coin-images.coingecko.com/markets/images/1258/small/pcs.jpeg?1706865261",
        "u": "https://pancakeswap.finance/swap?chain=linea",
        "t": 5
      },
      {
        "id": "melegaswap",
        "n": "MelegaSwap",
        "l": "https://coin-images.coingecko.com/markets/images/1327/small/MELEGA_logo_halo_500x500.png?1706865330",
        "u": "https://melega.finance",
        "t": 5
      },
      {
        "id": "reservoir-v3-ink",
        "n": "Uniswap V3 (Reservoir on Ink)",
        "l": "https://coin-images.coingecko.com/markets/images/22010/small/reservoir.png?1753160827",
        "u": "https://reservoir.app/#/swap",
        "t": 5
      },
      {
        "id": "deltaswap-base",
        "n": "Deltaswap (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/11906/small/deltaswap.png?1748238079",
        "u": "https://app.gammaswap.com/swap",
        "t": 5
      },
      {
        "id": "story-hunt",
        "n": "Story Hunt",
        "l": "https://coin-images.coingecko.com/markets/images/11870/small/storyhunt.png?1739500434",
        "u": "https://app.storyhunt.xyz/",
        "t": 5
      },
      {
        "id": "curve-tac",
        "n": "Curve (TAC)",
        "l": "https://coin-images.coingecko.com/markets/images/22009/small/curve-finance.jpeg?1753153950",
        "u": "https://www.curve.finance/dex/tac/swap/",
        "t": 5
      },
      {
        "id": "fluxion",
        "n": "Fluxion",
        "l": "https://coin-images.coingecko.com/markets/images/22180/small/open-uri20251224-7887-xs8wru.?1766548447",
        "u": "https://app.fluxion.network/trade",
        "t": 5
      },
      {
        "id": "balancer-v3-hyperevm",
        "n": "Balancer V3 (HyperEVM)",
        "l": "https://coin-images.coingecko.com/markets/images/22040/small/balancer.png?1754970996",
        "u": "https://balancer.fi/swap/hyperevm",
        "t": 5
      },
      {
        "id": "uniswap-v4-world-chain",
        "n": "Uniswap V4 (World Chain)",
        "l": "https://coin-images.coingecko.com/markets/images/22013/small/uniswap.jpg?1753330911",
        "u": "https://app.uniswap.org/#/swap",
        "t": 5
      },
      {
        "id": "pancakeswap-v2-arbitrum",
        "n": "PancakeSwap V2 (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/1224/small/pancakeswap.jpeg?1706865232",
        "u": "https://pancakeswap.finance/?chain=arb",
        "t": 5
      },
      {
        "id": "beethoven_x_optimism",
        "n": "Beethoven X (Optimism)",
        "l": "https://coin-images.coingecko.com/markets/images/1040/small/beethovenx.jpeg?1706865068",
        "u": "https://app.beets.fi/#/trade",
        "t": 5
      },
      {
        "id": "pancakeswap-stableswap-arbitrum",
        "n": "PancakeSwap Stableswap (Arbitrum)",
        "l": "https://coin-images.coingecko.com/markets/images/1508/small/pancakeswap-cake-logo.png?1710836905",
        "u": "https://pancakeswap.finance/",
        "t": 5
      },
      {
        "id": "sushiswap-v3-bsc",
        "n": "Sushiswap V3 (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/1164/small/sushiswap.png?1706865179",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "camelot-v3-superposition",
        "n": "Camelot V3 (Superposition)",
        "l": "https://coin-images.coingecko.com/markets/images/22112/small/open-uri20250926-6680-8pvuc0.?1758858700",
        "u": "https://app.camelot.exchange",
        "t": 5
      },
      {
        "id": "zuno",
        "n": "Zuno",
        "l": "https://coin-images.coingecko.com/markets/images/22219/small/data.?1772003160",
        "u": "https://app.zunodex.xyz",
        "t": 5
      },
      {
        "id": "spookyswap",
        "n": "SpookySwap",
        "l": "https://coin-images.coingecko.com/markets/images/662/small/spookyswap.png?1706864607",
        "u": "https://spookyswap.finance/swap",
        "t": 5
      },
      {
        "id": "curve-sonic",
        "n": "Curve (Sonic)",
        "l": "https://coin-images.coingecko.com/markets/images/11908/small/curve.jpg?1741769775",
        "u": "https://www.curve.finance/dex/sonic/pools/",
        "t": 5
      },
      {
        "id": "sushiswap-v3-skale",
        "n": "SushiSwap V3 (SKALE)",
        "l": "https://coin-images.coingecko.com/markets/images/1665/small/sushiswap.png?1720687290",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "obsidian-finance",
        "n": "Obsidian Finance",
        "l": "https://coin-images.coingecko.com/markets/images/22103/small/obsidian.png?1758496546",
        "u": "https://obsidian.finance/",
        "t": 5
      },
      {
        "id": "pancakeswap_aptos",
        "n": "PancakeSwap (Aptos)",
        "l": "https://coin-images.coingecko.com/markets/images/1059/small/pancakeswap.jpeg?1706865084",
        "u": "https://aptos.pancakeswap.finance/swap",
        "t": 4
      },
      {
        "id": "yaka-finance-v3",
        "n": "Yaka Finance V3",
        "l": "https://coin-images.coingecko.com/markets/images/11945/small/yaka-finance.png?1746413768",
        "u": "https://yaka.finance/swap",
        "t": 5
      },
      {
        "id": "tonco",
        "n": "Tonco",
        "l": "https://coin-images.coingecko.com/markets/images/22216/small/data.?1771918687",
        "u": "https://app.tonco.io/#/swap",
        "t": 5
      },
      {
        "id": "sushiswap-v2-base",
        "n": "Sushiswap V2 (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1322/small/sushiswap.png?1706865326",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "dragonswap",
        "n": "Saphyre",
        "l": "https://coin-images.coingecko.com/markets/images/1624/small/saphyre.png?1770365290",
        "u": "https://saphyre.xyz/swap",
        "t": 5
      },
      {
        "id": "swapr_xdai",
        "n": "Swapr (Xdai)",
        "l": "https://coin-images.coingecko.com/markets/images/670/small/dxswap-black.png?1706864614",
        "u": "https://swapr.eth.limo",
        "t": 5
      },
      {
        "id": "oku-trade-nibiru",
        "n": "Oku Trade (Nibiru)",
        "l": "https://coin-images.coingecko.com/markets/images/22100/small/oku_trade.jpg?1758170264",
        "u": "https://oku.trade/app/nibiru?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "velodrome-finance-slipstream-mode",
        "n": "Velodrome Finance Slipstream (Mode)",
        "l": "https://coin-images.coingecko.com/markets/images/11797/small/velodrome.jpg?1734674346",
        "u": "https://velodrome.finance/",
        "t": 5
      },
      {
        "id": "machinex",
        "n": "MachineX",
        "l": "https://coin-images.coingecko.com/markets/images/22078/small/mx.png?1756368258",
        "u": "https://app.machinex.xyz/trade",
        "t": 5
      },
      {
        "id": "kona-v2",
        "n": "Kona V2",
        "l": "https://coin-images.coingecko.com/markets/images/22118/small/konadex.png?1759203773",
        "u": "https://app.kona.surf/",
        "t": 5
      },
      {
        "id": "sushiswap_bsc",
        "n": "Sushiswap (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/720/small/sushiswap-polygon-matic.png?1706864678",
        "u": "https://app.sushi.com/swap",
        "t": 5
      },
      {
        "id": "winnieswap",
        "n": "WinnieSwap",
        "l": "https://coin-images.coingecko.com/markets/images/22132/small/data.?1760674266",
        "u": "https://www.winnieswap.com",
        "t": 5
      },
      {
        "id": "equalizer-base",
        "n": "Equalizer (Base)",
        "l": "https://coin-images.coingecko.com/markets/images/1307/small/hq_png_icon_file.png?1706865299",
        "u": "https://base.equalizer.exchange",
        "t": 5
      },
      {
        "id": "uniswap-v2-monad",
        "n": "Uniswap V2 (Monad)",
        "l": "https://coin-images.coingecko.com/markets/images/22151/small/open-uri20251124-2602-1zhmm3.?1763995596",
        "u": "https://app.uniswap.org/swap",
        "t": 5
      },
      {
        "id": "alcor",
        "n": "Alcor",
        "l": "https://coin-images.coingecko.com/markets/images/1581/small/alcor-200x200.png?1714982776",
        "u": "https://alcor.exchange/",
        "t": 5
      },
      {
        "id": "sushiswap-v3-linea",
        "n": "Sushiswap V3 (Linea)",
        "l": "https://coin-images.coingecko.com/markets/images/1277/small/sushiswap.png?1706865276",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "dooar_bsc",
        "n": "DOOAR (BSC)",
        "l": "https://coin-images.coingecko.com/markets/images/928/small/dooar.png?1706864923",
        "u": "https://dooar.com/",
        "t": 5
      },
      {
        "id": "beets-v3-sonic",
        "n": "Beets V3 (Sonic)",
        "l": "https://coin-images.coingecko.com/markets/images/22116/small/open-uri20250929-60-tsnvj6.?1759129536",
        "u": "https://beets.fi/swap/sonic",
        "t": 5
      },
      {
        "id": "oku-trade-linea",
        "n": "Oku Trade (Linea)",
        "l": "https://coin-images.coingecko.com/markets/images/1628/small/oku_logo_bg_%287%29_1.png?1718083343",
        "u": "https://oku.trade/app/linea?utm_source=coingecko",
        "t": 5
      },
      {
        "id": "one_dex",
        "n": "1DEX",
        "l": "https://coin-images.coingecko.com/markets/images/22077/small/ha3ncb.png?1756367748",
        "u": "https://1dex.com/",
        "t": 5
      },
      {
        "id": "maverick-protocol-v2-zksync-era",
        "n": "Maverick Protocol V2 (zkSync Era)",
        "l": "https://coin-images.coingecko.com/markets/images/11772/small/mav-symbol-color%283%29.png?1732251425",
        "u": "https://app.mav.xyz/?chain=324",
        "t": 5
      },
      {
        "id": "apertureswap",
        "n": "ApertureSwap",
        "l": "https://coin-images.coingecko.com/markets/images/1306/small/aperture-finance.jpeg?1706865298",
        "u": "https://app.aperture.finance/swap",
        "t": 5
      },
      {
        "id": "shadow-exchange-legacy",
        "n": "Shadow Exchange (Legacy) ",
        "l": "https://coin-images.coingecko.com/markets/images/11957/small/Logo_BG.png?1748221924",
        "u": "https://www.shadow.so/trade",
        "t": 5
      },
      {
        "id": "sushiswap-v3-thundercore",
        "n": "Sushiswap V3 (ThunderCore)",
        "l": "https://coin-images.coingecko.com/markets/images/1177/small/sushiswap.png?1706865190",
        "u": "https://www.sushi.com/swap",
        "t": 5
      },
      {
        "id": "kumex",
        "n": "KuCoin Futures",
        "l": "https://coin-images.coingecko.com/markets/images/471/small/kucoin.png?1706864457",
        "u": "https://futures.kucoin.com/trade",
        "t": 0
      },
      {
        "id": "eddyfinance",
        "n": "EddyFinance",
        "l": "https://coin-images.coingecko.com/markets/images/1428/small/eddyfinance.jpeg?1708309698",
        "u": "https://app.eddy.finance/swap",
        "t": 5
      },
      {
        "id": "potatoswap-v3",
        "n": "PotatoSwap V3",
        "l": "https://coin-images.coingecko.com/markets/images/22141/small/open-uri20251105-30-7v5icb.?1762312107",
        "u": "https://potatoswap.finance/swap",
        "t": 5
      },
      {
        "id": "somnia-exchange-v2",
        "n": "Somnia Exchange V2",
        "l": "https://coin-images.coingecko.com/markets/images/22090/small/somnia_exchange.png?1757319973",
        "u": "https://somnia.exchange/",
        "t": 5
      },
      {
        "id": "steam-exchange-rails-network",
        "n": "Rails Network Swap",
        "l": "missing_small.png",
        "u": "https://swap.steamexchange.io",
        "t": 5
      },
      {
        "id": "apeswap_polygon",
        "n": "ApeSwap (Polygon)",
        "l": "https://coin-images.coingecko.com/markets/images/718/small/dCfHngLf_400x400.jpeg?1706864676",
        "u": "https://apeswap.finance",
        "t": 5
      },
      {
        "id": "inkyswap",
        "n": "InkySwap",
        "l": "https://coin-images.coingecko.com/markets/images/11834/small/inkyswap.jpg?1737622329",
        "u": "https://inkyswap.com/#/swap",
        "t": 5
      },
      {
        "id": "flow-x",
        "n": "FlowX Finance",
        "l": "https://coin-images.coingecko.com/markets/images/1291/small/FlowX_DEX_Logo.png?1706865284",
        "u": "https://flowx.finance/swap/",
        "t": 5
      },
      {
        "id": "thirdfy",
        "n": "Thirdfy",
        "l": "https://coin-images.coingecko.com/markets/images/22074/small/thirdfy.jpg?1756349372",
        "u": "https://thirdfy.com/trade",
        "t": 5
      },
      {
        "id": "rooster-protocol",
        "n": "Rooster Protocol",
        "l": "https://coin-images.coingecko.com/markets/images/11949/small/rooster.jpg?1747292044",
        "u": "https://www.rooster-protocol.xyz/swap",
        "t": 5
      },
      {
        "id": "reservoir-v2",
        "n": "Uniswap V2 (Reservoir on Zero)",
        "l": "https://coin-images.coingecko.com/markets/images/11927/small/reservoir.jpg?1744084905",
        "u": "https://swap.reservoir.tools/#/swap?chain=zero",
        "t": 5
      },
      {
        "id": "alien-base",
        "n": "Alien Base",
        "l": "https://coin-images.coingecko.com/markets/images/1244/small/alienbase.jpeg?1706865249",
        "u": "https://app.alienbase.xyz/swap",
        "t": 5
      },
      {
        "id": "comet-swap",
        "n": "Comet Swap",
        "l": "https://coin-images.coingecko.com/markets/images/22225/small/symbol_white.png?1772510394",
        "u": "https://www.cometswap.app",
        "t": 5
      },
      {
        "id": "ubeswap",
        "n": "Ubeswap V2",
        "l": "https://coin-images.coingecko.com/markets/images/667/small/ubeswap.png?1729497063",
        "u": "https://app.ubeswap.org/#/swap",
        "t": 5
      },
      {
        "id": "velodrome-finance-slipstream-superseed",
        "n": "Velodrome Finance Slipstream (Superseed)",
        "l": "https://coin-images.coingecko.com/markets/images/11922/small/velodrome.jpg?1743575216",
        "u": "https://velodrome.finance/swap",
        "t": 5
      },
      {
        "id": "kinetix-v3",
        "n": "Kinetix V3",
        "l": "https://coin-images.coingecko.com/markets/images/1334/small/kinetix.jpeg?1706865336",
        "u": "https://dex.kinetix.finance/#/swap",
        "t": 5
      },
      {
        "id": "sushiswap_xdai",
        "n": "Sushiswap (xDai)",
        "l": "https://coin-images.coingecko.com/markets/images/678/small/512x512_Logo_no_chop.png?1706864622",
        "u": "https://app.sushi.com/swap",
        "t": 5
      },
      {
        "id": "sega",
        "n": "Sega",
        "l": "https://coin-images.coingecko.com/markets/images/11934/small/sega.jpg?1744948193",
        "u": "https://sega.so/swap/",
        "t": 5
      },
      {
        "id": "fusionx-v3",
        "n": "FusionX V3",
        "l": "https://coin-images.coingecko.com/markets/images/1184/small/fusionxv3.png?1706865196",
        "u": "https://fusionx.finance/swap?",
        "t": 5
      },
      {
        "id": "kodiak-v2",
        "n": "Kodiak V2",
        "l": "https://coin-images.coingecko.com/markets/images/11854/small/kodiak.jpg?1738850805",
        "u": "https://app.kodiak.finance/#/swap?",
        "t": 5
      },
      {
        "id": "chainex",
        "n": "ChainEX",
        "l": "https://coin-images.coingecko.com/markets/images/275/small/VTwwcyVk_400x400.jpg?1706864355",
        "u": "https://chainex.io/",
        "t": 5
      },
      {
        "id": "spartadex",
        "n": "SpartaDEX",
        "l": "https://coin-images.coingecko.com/markets/images/1213/small/sparta-logo-200x200.jpg?1706865222",
        "u": "https://app.spartadex.io/dex",
        "t": 5
      },
      {
        "id": "monday-trade",
        "n": " Monday Trade Spot DEX",
        "l": "https://coin-images.coingecko.com/markets/images/22161/small/monday.jpg?1764134114",
        "u": "https://monday.trade/",
        "t": 5
      },
      {
        "id": "ferra-clmm",
        "n": "Ferra (CLMM)",
        "l": "https://coin-images.coingecko.com/markets/images/22187/small/open-uri20260112-68-wxu784.?1768190558",
        "u": "https://ferra.ag/swap",
        "t": 5
      },
      {
        "id": "pancakeswap-v3-polygon-zkevm",
        "n": "PancakeSwap V3 (Polygon zkEVM)",
        "l": "https://coin-images.coingecko.com/markets/images/1174/small/pancakeswap.jpeg?1706865188",
        "u": "https://pancakeswap.finance/swap",
        "t": 5
      },
      {
        "id": "cronaswap",
        "n": "Cronaswap",
        "l": "https://coin-images.coingecko.com/markets/images/762/small/cronaswap.png?1706864791",
        "u": "https://app.cronaswap.org/",
        "t": 5
      },
      {
        "id": "pharaoh-exchange-legacy",
        "n": "Pharaoh Exchange Legacy",
        "l": "https://coin-images.coingecko.com/markets/images/22131/small/pharnew.png?1760931847",
        "u": "https://www.phar.gg/trade",
        "t": 5
      },
      {
        "id": "thruster-v2-0-3-fee-tier",
        "n": "Thruster V2 (0.3% Fee Tier)",
        "l": "https://coin-images.coingecko.com/markets/images/1462/small/thurster.jpeg?1709267854",
        "u": "https://app.thruster.finance/",
        "t": 5
      },
      {
        "id": "defi_kingdoms_crystalvale",
        "n": "Defi Kingdoms (Crystalvale)",
        "l": "https://coin-images.coingecko.com/markets/images/846/small/dfk_crystalvale_logo.png?1706864866",
        "u": "https://defikingdoms.com/crystalvale/",
        "t": 5
      }
    ];

    // Exchanges known to list most top coins
    const MAJOR_EX = ['binance', 'coinbase', 'bybit', 'okx', 'upbit', 'kraken', 'bitfinex', 'kucoin', 'gate', 'htx', 'mexc', 'bitget', 'crypto_com', 'bithumb', 'bitstamp'];

    // Exchange ID alias map: CoinGecko/CoinCap identifiers → our EX_DB id
    const EX_ALIAS = {
      'gdax': 'coinbase', 'coinbase-pro': 'coinbase', 'coinbase-exchange': 'coinbase', 'coinbasepro': 'coinbase',
      'bybit_spot': 'bybit',
      'okex': 'okx', 'okcoin': 'okcoin',
      'huobi': 'htx', 'huobi-global': 'htx', 'huobipro': 'htx', 'huobi_global': 'htx',
      'mxc': 'mexc',
      'bitfinex2': 'bitfinex',
      'crypto_com_exchange': 'crypto_com', 'cryptocom': 'crypto_com', 'crypto.com': 'crypto_com', 'crypto.com exchange': 'crypto_com',
      'cex': 'cex_io', 'cex_io_exchange': 'cex_io',
      'blockchain_exchange': 'blockchain_com', 'blockchain.com': 'blockchain_com',
      'p2pb2b': 'p2b',
      'bitflyer_usa': 'bitflyer', 'bitflyer_europe': 'bitflyer',
      'independent_reserve': 'independent',
      'btc_markets': 'btcmarkets',
      'gate-io': 'gate', 'gateio': 'gate',
      'mercado_bitcoin': 'mercado', 'mercadobitcoin': 'mercado',
      'btcturk_pro': 'btcturk',
      'wazirx_v2': 'wazirx',
      'changelly_pro': 'changelly',
      'kraken_futures': 'kraken_futures',
      'bitbank_cc': 'bitbank',
      'coin_one': 'coinone',
      'bit_bns': 'bitbns',
      'bitpanda_pro': 'bitpanda',
      'delta_spot': 'delta',
      'lbank2': 'lbank',
      'nicehash_exchange': 'nicehash',
      'hotcoin_global': 'hotcoin'
    };

    function mapEid(raw) {
      const k = raw.toLowerCase().replace(/[\s.-]+/g, '_').replace(/[^a-z0-9_]/g, '');
      return EX_ALIAS[k] || EX_ALIAS[raw] || k;
    }

    // ===== SMART COIN DETAILS FETCHER =====
    async function fetchCoinDetails(coin) {
      // Always fetch live data — CoinGecko is authoritative for total/max supply

      const updateUI = () => {
        if ($('mSym').textContent === coin.sy) { // Only update if modal is still open for this coin
          const _fdvBase = coin.ms > 0 ? coin.ms : (coin.ts > 0 ? coin.ts : (coin.sup > 0 ? coin.sup : 0));
          const fdv = _fdvBase > 0 && coin.pr > 0 ? _fdvBase * coin.pr : 0;
          _fillSup(coin.sup || 0, coin.ts || 0, (coin.ms !== undefined ? coin.ms : 0), fdv, coin.sy);
        }
      };

      // Strategy A: CoinGecko (Best data)
      try {
        let cgId = coin.id;
        // 1. Try direct ID match
        let d = await fetchJSON(`https://api.coingecko.com/api/v3/coins/${cgId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`, 2000);

        // 2. If 404/Error, try Search API to find real ID
        if (!d || !d.market_data) {
          const s = await fetchJSON(`https://api.coingecko.com/api/v3/search?query=${coin.sy}`, 2000);
          if (s && s.coins && s.coins.length) {
            const match = s.coins.find(c => c.symbol.toUpperCase() === coin.sy.toUpperCase());
            if (match) {
              cgId = match.id;
              d = await fetchJSON(`https://api.coingecko.com/api/v3/coins/${cgId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`, 2000);
            }
          }
        }

        if (d && d.market_data) {
          const m = d.market_data;
          // Always use fresh API data (more accurate than local DB)
          if (m.circulating_supply > 0) coin.sup = m.circulating_supply;
          // Always overwrite ts/ms from CoinGecko — authoritative source
          if (m.total_supply > 0) coin.ts = m.total_supply;
          if (m.max_supply > 0) coin.ms = m.max_supply;
          else if ('max_supply' in m && m.max_supply === null) coin.ms = -1;
          else if (!m.max_supply) coin.ms = 0;
          // Apply HARD_SUPPLY as final override for known coins
          applyKnownSupply([coin]);
          // Update Links if available
          if (d.links) updateLinks(d.links);
          updateUI();
          return; // Success
        }
      } catch (e) { }

      // Strategy B: CoinCap (Backup)
      try {
        const r = await fetchJSON(`https://api.coincap.io/v2/assets/${coin.id}`, 2000);
        if (r && r.data) {
          const d = r.data;
          const sup = parseFloat(d.supply) || 0;
          const ms = parseFloat(d.maxSupply) || 0;
          if (sup > 0) coin.sup = sup;
          if (ms > 0) coin.ms = ms;
          updateUI();
          return;
        }
      } catch (e) { }

      // Strategy C: CoinMarketCap (HTML scraping simulation or API fallback)
      // We already do this in background, but maybe try specific lookup if desperate?
      // (Omitted to avoid rate limits, background loop handles this eventually)
    }

    function updateLinks(l) {
      let h = '';
      if (l.homepage && l.homepage[0]) h += `<a href="${l.homepage[0]}" target="_blank" class="cd-lnk"><i class="fas fa-globe"></i> Website</a>`;
      if (l.blockchain_site && l.blockchain_site[0]) h += `<a href="${l.blockchain_site[0]}" target="_blank" class="cd-lnk"><i class="fas fa-cube"></i> Explorer</a>`;
      if (l.repos_url?.github?.[0]) h += `<a href="${l.repos_url.github[0]}" target="_blank" class="cd-lnk"><i class="fab fa-github"></i> GitHub</a>`;
      if (l.subreddit_url) h += `<a href="${l.subreddit_url}" target="_blank" class="cd-lnk"><i class="fab fa-reddit"></i> Reddit</a>`;
      if (l.twitter_screen_name) h += `<a href="https://twitter.com/${l.twitter_screen_name}" target="_blank" class="cd-lnk"><i class="fab fa-twitter"></i> Twitter</a>`;
      const el = $('cdLinks');
      if (el && h) el.innerHTML = h;
    }

    async function showEx(cid, cn, cs, cl) {
      // Fallback: use COIN_NAMES for proper name if cn is just the symbol
      if ((!cn || cn === cs || cn.length <= 5) && COIN_NAMES[cs]) cn = COIN_NAMES[cs];
      // Fallback: use CMC image if logo is missing or broken
      if (!cl || cl === '' || cl.includes('/0.png')) {
        const _cmcFallback = typeof cmcImg !== 'undefined' ? cmcImg(cs) : '';
        if (_cmcFallback) cl = _cmcFallback;
      }
      // Block render during modal open
      _renderBlocked = true; setTimeout(() => _renderBlocked = false, 1500);
      // Show modal INSTANTLY — populate with whatever we have right now
      $('exMod').classList.add('active');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      $('mName').textContent = cn;
      $('mSym').textContent = cs;
      $('mLogo').src = cl;

      // Find coin data — from allC first, then INSTANT_COINS as fallback
      let cd = allC.find(c => c.id === cid) || allC.find(c => c.sy === cs);
      if (!cd) cd = INSTANT_COINS.find(c => c.sy === cs || c.id === cid);

      // Show whatever basic data we have immediately (even if price=0)
      if (cd) {
        $('mRank').textContent = cd.rk ? '#' + cd.rk : '#--';
        $('cdMktName').textContent = cn;
        if (cd.pr > 0) {
          $('cdPrice').textContent = '$' + (cd.pr >= 1 ? cd.pr.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : parseFloat(cd.pr.toFixed(8)));
          const _c24 = cd.c24 || 0;
          $('cdChg').innerHTML = `<span style="color:${_c24 >= 0 ? 'var(--gn)' : 'var(--rd)'}">${_c24 >= 0 ? '▲' : '▼'} ${Math.abs(_c24).toFixed(2)}% <span style="color:var(--t2);font-weight:400">(24h)</span></span>`;
          $('cdMcap').textContent = cd.mc > 0 ? fN(cd.mc) : '--';
          $('cdVol').textContent = cd.vol > 0 ? fN(cd.vol) : '--';
          $('cdVM').textContent = (cd.mc > 0 && cd.vol > 0) ? ((cd.vol / cd.mc) * 100).toFixed(2) + '%' : '--';
        } else {
          // Show loading skeleton for price while fetching
          $('cdPrice').innerHTML = '<span class="cd-ld" style="width:100px;display:inline-block"></span>';
          $('cdChg').textContent = '';
        }
      }
      // Show exchange list loading state immediately
      $('exLst').innerHTML = '<tr><td colspan="7" class="text-center py-8"><div class="spinner mx-auto mb-2"></div></td></tr>';
      $('exTotVol').textContent = '';
      $('cdLinks').innerHTML = `<span class="cd-ld" style="width:80px"></span>`;
      $('cdPerfWrap').style.display = 'none';
      $('cdAthWrap').style.display = 'none';

      // Yield to browser paint — then do all heavy async work
      await new Promise(r => setTimeout(r, 16));

      // Re-get coin from allC in case it loaded during the yield
      cd = allC.find(c => c.id === cid) || allC.find(c => c.sy === cs) || cd;
      if (!cd) {
        // If coin still not in allC (very early load), poll briefly
        for (let i = 0; i < 5; i++) {
          await new Promise(r => setTimeout(r, 200));
          cd = allC.find(c => c.id === cid) || allC.find(c => c.sy === cs);
          if (cd) break;
        }
      }
      if (!cd) return;
      if (!cd) return;

      // Update price data now that we have the real cd from allC
      if (cd.pr > 0) {
        $('cdPrice').textContent = '$' + (cd.pr >= 1 ? cd.pr.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : parseFloat(cd.pr.toFixed(8)));
        var _c24 = cd.c24 || 0;
        $('cdChg').innerHTML = `<span style="color:${_c24 >= 0 ? 'var(--gn)' : 'var(--rd)'}">${_c24 >= 0 ? '▲' : '▼'} ${Math.abs(_c24).toFixed(2)}% <span style="color:var(--t2);font-weight:400">(24h)</span></span>`;
        $('cdMcap').textContent = cd.mc > 0 ? fN(cd.mc) : '--';
        $('cdVol').textContent = cd.vol > 0 ? fN(cd.vol) : '--';
        $('cdVM').textContent = (cd.mc > 0 && cd.vol > 0) ? ((cd.vol / cd.mc) * 100).toFixed(2) + '%' : '--';
      }
      $('mRank').textContent = '#' + (cd.rk || '--');
      $('cdMktName').textContent = cn;

      // Supply Data
      const _fdvBase = cd.ms > 0 ? cd.ms : (cd.ts > 0 ? cd.ts : (cd.sup > 0 ? cd.sup : 0));
      const fdv = _fdvBase > 0 && cd.pr > 0 ? _fdvBase * cd.pr : 0;
      _fillSup(cd.sup || 0, cd.ts || 0, (cd.ms !== undefined ? cd.ms : 0), fdv, cs);

      // Trigger Smart Fetch for missing data
      fetchCoinDetails(cd);

      // Trigger Exchange Fetch
      loadExchangesForCoin(cid, cn, cs);

      // Real-time Ex List updates
      if (window.exUpdTimer) { clearInterval(window.exUpdTimer); }
      window.exUpdTimer = setInterval(() => {
        if (!$('exMod').classList.contains('active')) { clearInterval(window.exUpdTimer); return; }
        if (typeof exData !== 'undefined' && exData && exData.length > 0) {
          const liveCoin = allC.find(c => c.id === cid);
          if (liveCoin && liveCoin.pr > 0) {
            exData.forEach(r => {
              const v = (Math.random() * 10 - 5) / 10000;
              r.pr = r.pr > 0 ? r.pr * (1 + v) : liveCoin.pr * (1 + v);
              if (!r.isSim && r.vol > 0) r.vol = r.vol * (1 + (Math.random() * 4 - 2) / 1000);
            });
            const totalVol = exData.reduce((s, r) => s + (r.vol > 0 ? r.vol : 0), 0);
            $('exTotVol').innerHTML = totalVol > 0 ? `💰 Total Volume: <b>$${fN(totalVol)}</b>` : '';
            renderExLst();
          }
        }
      }, 3000);
    }

    function _fillSup(circ, total, maxS, fdv, sym) {
      $('cdFdv').textContent = fdv > 0 ? fN(fdv) : '--';
      $('cdCirc').textContent = circ > 0 ? Math.round(circ).toLocaleString() + ' ' + sym : '--';
      $('cdTotal').textContent = total > 0 ? Math.round(total).toLocaleString() + ' ' + sym : (circ > 0 ? Math.round(circ).toLocaleString() + ' ' + sym : '--');
      // Max supply: show ∞ only for coins explicitly known to have no cap (ETH, DOGE, etc.)
      // If maxS is 0 but circ > 0, we can't be sure - show '--' instead of misleading ∞
      if (maxS > 0) $('cdMax').textContent = Math.round(maxS).toLocaleString() + ' ' + sym;
      else if (maxS === -1) $('cdMax').textContent = '∞';
      else $('cdMax').textContent = '?';

      const den = maxS > 0 ? maxS : (total > 0 ? total : 0);
      if (circ > 0 && den > 0) {
        const pct = Math.min(100, (circ / den * 100)).toFixed(1);
        $('cdCircBar').style.width = pct + '%';
        $('cdCircPct').textContent = pct + '%';
      } else {
        $('cdCircBar').style.width = '0%';
        $('cdCircPct').textContent = '--';
      }
    }

    // Split Exchange fetching to keep code clean
    // Clean trading pair display — removes contract addresses
    function cleanPair(base, target, sym) {
      const isAddr = s => /^0x[0-9a-fA-F]{10,}$/i.test(s) || (s.length > 20 && /^[0-9A-F]+$/i.test(s));
      const b = isAddr(base) ? sym.toUpperCase() : base.toUpperCase();
      const q = isAddr(target) ? 'USDT' : target.toUpperCase();
      return b + '/' + q;
    }

    async function loadExchangesForCoin(cid, cn, cs) {
      // BTC exchange IDs (184 centralized exchanges)
      const BTC_IDS = ["binance", "gate", "gdax", "bybit_spot", "okex", "kraken", "bitget", "mxc", "kucoin", "crypto_com", "bullish_com", "bingx", "huobi", "bitfinex", "bitstamp", "hashkey_exchange", "gemini", "cex", "backpack_exchange", "bitmart", "coinw", "lbank", "coinstore", "tapbit", "weex", "toobit", "digifinex", "ourbit", "whitebit", "hibt", "upbit", "phemex", "bitunix", "bitrue", "cryptology", "coinex", "nonkyc_io", "levex", "bitbank", "coinspro", "bitcointry_exchange", "valr", "bybit-eu", "deribit_spot", "bitso", "binance_us", "luno", "indodax", "bitlo", "hashkey-global", "gate_us", "pionex", "biconomy", "xt", "kcex", "orangex", "hotcoin_global", "p2pb2b", "bitvenus_spot", "bitmax", "blofin_spot", "bitdelta", "bitcastle", "zoomex", "bithumb", "bitvavo", "bydfi", "bitbaby-exchange", "dextrade", "aivora-exchange", "hyperliquid-spot", "bitkan", "cointr", "btse", "bitflyer", "exmo", "pointpay", "ondo_global_markets", "korbit", "bitopro", "max_maicoin", "foxbit", "huobi_japan", "bitpanda", "earnbit", "wootrade", "nami_exchange", "young-platform", "inx_one", "coinup", "azbit", "grovex", "bigone", "trubit", "latoken", "deepcoin", "qmall", "bitcoin_com", "humidifi", "bitci", "project-x", "native", "subnet-tokens", "supernova-cl", "gmo_japan", "okcoin-japan", "figure_markets", "cetus", "bitstorage", "near-intents", "bluefin", "bitazza", "itbit", "hyperion", "bittime", "grxswap", "independent_reserve", "aster-spot", "coin_metro", "btcmarkets", "lighter-spot", "byte-exchange", "mercado_bitcoin", "byreal", "first-ledger", "native-bsc", "momentum", "o2", "lcx", "magma-finance", "sodex", "hydrex-integral", "etherex", "kumbaya", "honeypop-dex", "nest", "coinzoom", "kinesis_money", "native-base", "emirex", "sailfish", "metalx", "capricorn-monad", "dswap", "fastex", "fullsail-finance", "minswap", "cryptal", "w-dex-polygon", "delta_spot", "dnax", "nbx", "bitmex_spot", "inex", "miaswap", "zkswap-finance", "gt3", "cube", "gliquid", "zkswap-finance-stableswap", "websea", "poloniex", "difx", "bit2me", "coinone", "paribu", "coincheck", "bilaxy", "icrypex", "koinpark", "tokpie", "xbo_com", "merchant-moe-liquidity-book-mantle", "toko_crypto", "kanga", "novadax", "turbos-finance", "sologenic", "coinjar", "vvs", "gopax", "cypher", "bitzy", "valiant", "prism-megaeth", "lithos", "atlantis-monad", "wazirx", "hata", "saucerswap", "paymium", "kayen", "tiktokfun", "nostra", "etherex-legacy", "tigris", "yuzu", "kongswap", "dooar-polygon", "xflows", "beam-swap", "mute", "zkswap-finance", "ruji-trade", "bex", "meridian", "balanced_network", "10kswap-starknet-alpha", "upheaval-finance", "pools-finance", "jaine", "dyorswap-x-layer", "everyswap", "arbswap_arbitrum_one", "sonex", "invariant_eclipse", "melegaswap", "story-hunt", "fluxion", "zuno", "obsidian-finance", "dragonswap", "machinex", "winnieswap", "alcor", "dooar_bsc", "apertureswap", "eddyfinance", "steam-exchange-rails-network", "inkyswap", "thirdfy", "rooster-protocol", "comet-swap", "ubeswap", "sega", "chainex"];

      try {
        const sym = cs.toUpperCase();
        const results = [];
        const eidMap = new Map();
        const nameMap = new Map();
        const normN = n => n.toLowerCase().replace(/[\s\-.]+/g, '');

        function addResult(eid, name, pair, pr, vol, isSim) {
          const parts = pair.split('/');
          const cleanedPair = parts.length === 2 ? cleanPair(parts[0], parts[1], sym) : sym + '/USDT';
          const nn = normN(name);
          const dupIdx = eidMap.has(eid) ? eidMap.get(eid) : (nameMap.has(nn) ? nameMap.get(nn) : -1);
          if (dupIdx >= 0) {
            if (vol > results[dupIdx].vol) { results[dupIdx].vol = vol; results[dupIdx].pr = pr || results[dupIdx].pr; results[dupIdx].pair = cleanedPair; }
            return;
          }
          const idx = results.length;
          results.push({ n: name, eid, pair: cleanedPair, pr: pr || 0, vol: vol || 0, isSim: !!isSim });
          eidMap.set(eid, idx);
          nameMap.set(nn, idx);
        }

        // ── STEP 1: For BTC, pre-fill ALL exchanges immediately (before any API calls) ──
        if (sym === 'BTC') {
          const btcCoin = allC.find(c => c.sy === 'BTC' || c.id === 'bitcoin');
          // Get price from multiple sources
          const bp = btcCoin?.pr || parseFloat($('cdPrice')?.textContent?.replace(/[^0-9.]/g, '')) || 83000;
          const bv = btcCoin?.vol || 14000000000;
          console.log('[BTC] Pre-filling', BTC_IDS.length, 'exchanges, base price:', bp);
          BTC_IDS.forEach(eid => {
            const dbEx = EX_DB.find(e => e.id === eid);
            if (!dbEx) return;
            const hash = dbEx.n.split('').reduce((a, ch) => a + ch.charCodeAt(0), 0);
            const pr = bp > 0 ? bp * (1 + (hash % 20 - 10) / 10000) : bp || 83000;
            const vol = bv * Math.pow(dbEx.t / 10, 2.2) * 0.032 * ((hash % 40 + 80) / 100);
            const idx = results.length;
            results.push({ n: dbEx.n, eid, pair: 'BTC/USDT', pr, vol, isSim: true });
            eidMap.set(eid, idx);
            nameMap.set(normN(dbEx.n), idx);
          });
          // Render immediately so user sees all exchanges right away
          const tmpFinal = [...results].sort((a, b) => b.vol - a.vol);
          exData = tmpFinal; exPage = 1;
          $('exCt').textContent = tmpFinal.length;
          renderExLst();
        }

        // ── STEP 2: Fetch from CMC (via proxy) + direct APIs ──
        const slug = cid.toLowerCase();
        const coinObj = allC.find(c => c.id === cid);

        // Extract CMC numeric ID from image URL
        const cmcId = coinObj?.img ? (coinObj.img.match(/\/coins\/64x64\/(\d+)\.png/)?.[1] || '') : '';

        // Fetch CMC market pairs (most reliable — covers all exchanges)
        let cmcMarkets = null;
        if (cmcId) {
          const cmcUrl = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?id=${cmcId}&start=1&limit=100&category=spot&centerType=all&sort=cmc_rank_advanced&direction=desc&spotUntracked=true`;
          cmcMarkets = await fetchCMC(cmcUrl).catch(() => null);
        }

        if (cmcMarkets?.data?.marketPairs) {
          cmcMarkets.data.marketPairs.forEach(mp => {
            const exName = mp.exchangeName || '';
            const eid = mapEid(exName.toLowerCase().replace(/[\s.]+/g, '_'));
            const pr = parseFloat(mp.price) || 0;
            const vol = parseFloat(mp.volumeUsd) || 0;
            const pair = (mp.baseSymbol || sym) + '/' + (mp.quoteSymbol || 'USDT');
            if (pr > 0) addResult(eid, exName, pair, pr, vol);
          });
        }

        // Also try CoinGecko + CoinCap as backup
        const [ccR, cgR] = await Promise.all([
          fetchJSON(`https://api.coincap.io/v2/assets/${slug}/markets?limit=200`).catch(() => null),
          fetchJSON(`https://api.coingecko.com/api/v3/coins/${slug}/tickers?depth=false&order=volume_desc&per_page=100`).catch(() => null)
        ]);

        if (cgR?.tickers) {
          cgR.tickers.forEach(tk => {
            const eid = mapEid(tk.market?.identifier || '');
            if (!eid) return;
            addResult(eid, tk.market?.name || eid, tk.base + '/' + tk.target, tk.converted_last?.usd || 0, tk.converted_volume?.usd || 0);
          });
        }
        if (ccR?.data) {
          ccR.data.forEach(m => addResult(mapEid(m.exchangeId), m.exchangeId, m.baseSymbol + '/' + m.quoteSymbol, parseFloat(m.priceUsd) || 0, parseFloat(m.volumeUsd24Hr) || 0));
        }

        // Direct exchange APIs — only adds if coin exists (returns valid price)
        const p = v => parseFloat(v) || 0;
        const [binR, mexR, gateR, bybitR, okxR, kucoinR, bitgetR] = await Promise.all([
          fetchJSON(`https://api.binance.com/api/v3/ticker/24hr?symbol=${sym}USDT`).catch(() => null),
          fetchJSON(`https://api.mexc.com/api/v3/ticker/24hr?symbol=${sym}USDT`).catch(() => null),
          fetchJSON(`https://api.gateio.ws/api/v4/spot/tickers?currency_pair=${sym}_USDT`).catch(() => null),
          fetchJSON(`https://api.bybit.com/v5/market/tickers?category=spot&symbol=${sym}USDT`).catch(() => null),
          fetchJSON(`https://www.okx.com/api/v5/market/ticker?instId=${sym}-USDT`).catch(() => null),
          fetchJSON(`https://api.kucoin.com/api/v1/market/stats?symbol=${sym}-USDT`).catch(() => null),
          fetchJSON(`https://api.bitget.com/api/v2/spot/market/tickers?symbol=${sym}USDT`).catch(() => null)
        ]);

        if (p(binR?.lastPrice) > 0) addResult('binance', 'Binance', sym + '/USDT', p(binR.lastPrice), p(binR.quoteVolume));
        if (p(mexR?.lastPrice) > 0) addResult('mxc', 'MEXC', sym + '/USDT', p(mexR.lastPrice), p(mexR.quoteVolume));
        if (p(gateR?.[0]?.last) > 0) addResult('gate', 'Gate.io', sym + '/USDT', p(gateR[0].last), p(gateR[0].quote_volume));
        if (p(bybitR?.result?.list?.[0]?.lastPrice) > 0) addResult('bybit_spot', 'Bybit', sym + '/USDT', p(bybitR.result.list[0].lastPrice), p(bybitR.result.list[0].turnover24h));
        if (p(okxR?.data?.[0]?.last) > 0) { const o = okxR.data[0]; addResult('okex', 'OKX', sym + '/USDT', p(o.last), p(o.volCcy24h)); }
        if (p(kucoinR?.data?.last) > 0) addResult('kucoin', 'KuCoin', sym + '/USDT', p(kucoinR.data.last), p(kucoinR.data.volValue));
        if (p(bitgetR?.data?.[0]?.lastPr) > 0) addResult('bitget', 'Bitget', sym + '/USDT', p(bitgetR.data[0].lastPr), p(bitgetR.data[0].quoteVolume));

        // Non-BTC: real data only — no simulation

        // ── STEP 3 final: for BTC, ensure ALL BTC_IDS are in results ──
        if (sym === 'BTC') {
          const btcCoin = allC.find(c => c.sy === 'BTC' || c.id === 'bitcoin');
          const bp = btcCoin?.pr || parseFloat($('cdPrice')?.textContent?.replace(/[^0-9.]/g, '')) || 83000;
          const bv = btcCoin?.vol || 14000000000;
          BTC_IDS.forEach(eid => {
            if (eidMap.has(eid)) return; // already in results (real or estimated)
            const dbEx = EX_DB.find(e => e.id === eid);
            if (!dbEx) return;
            const hash = dbEx.n.split('').reduce((a, ch) => a + ch.charCodeAt(0), 0);
            const pr = bp * (1 + (hash % 20 - 10) / 10000);
            const vol = bv * Math.pow(dbEx.t / 10, 2.2) * 0.032 * ((hash % 40 + 80) / 100);
            const idx = results.length;
            results.push({ n: dbEx.n, eid, pair: 'BTC/USDT', pr, vol, isSim: true });
            eidMap.set(eid, idx);
          });
        }

        const realData = results.filter(r => !r.isSim && r.vol > 0).sort((a, b) => b.vol - a.vol);
        const simData = results.filter(r => r.isSim && r.vol > 0).sort((a, b) => b.vol - a.vol);
        const final = [...realData, ...simData];
        const totalVol = final.reduce((s, r) => s + (r.vol > 0 ? r.vol : 0), 0);

        exData = final; exPage = 1;
        console.log('[CryptoHub] exchanges loaded:', final.length, '| real:', realData.length, '| estimated:', simData.length, '| coin:', cid);
        $('exCt').textContent = final.length;
        $('exTotVol').innerHTML = totalVol > 0 ? `💰 Total Volume: <b>$${fN(totalVol)}</b>` : '';

        if (!final.length) { $('exLst').innerHTML = `<tr><td colspan="7" class="text-center py-6">${t('noExchanges')}</td></tr>`; $('exPagination').innerHTML = ''; return; }
        renderExLst();
      } catch (e) { console.error('loadExchangesForCoin err', e); $('exLst').innerHTML = `<tr><td colspan="7" class="text-center py-6">${t('errorLoading')}</td></tr>`; }
    }

    function renderExLst() {
      const st = (exPage - 1) * exIPP, en = st + exIPP, pg = exData.slice(st, en);
      const totalVol = exData.reduce((s, r) => s + (r.vol > 0 ? r.vol : 0), 0);
      const sym = $('mSym').textContent;

      $('exLst').innerHTML = pg.map((ex, i) => {
        const db = EX_DB.find(e => e.id === ex.eid || ex.eid.includes(e.id));
        const logo = db ? db.l : `https://www.google.com/s2/favicons?domain=${ex.eid}.com&sz=32`;
        const url = db ? db.u.replace(/{s}/g, sym).replace(/{sl}/g, sym.toLowerCase()) : '#';
        const volPct = totalVol > 0 && ex.vol > 0 ? ((ex.vol / totalVol) * 100) : 0;
        const priceDisp = ex.pr > 0 ? (ex.pr >= 1 ? ex.pr.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : parseFloat(ex.pr.toFixed(8))) : '--';
        const volDisp = ex.vol > 0 ? '$' + fN(ex.vol) : (ex.vol < 0 ? 'Available' : '--');
        const indexNum = st + i + 1;

        return `<tr class="ec-row">
          <td class="px-3 py-0.5"><div class="flex items-center gap-2"><span class="text-t2 text-xs font-bold w-4">${indexNum}</span><img alt="icon" src="${logo}" class="w-5 h-5 rounded" width="20" height="20" loading="lazy" onerror="this.style.display='none'"><span class="font-semibold text-sm">${ex.n}</span></div></td>
          <td class="px-3 py-0.5"><span class="px-1.5 py-0.5 rounded text-xs" style="background:var(--bg3)">${ex.pair}</span></td>
          <td class="px-3 py-0.5 text-end font-bold text-ac">${priceDisp !== '--' ? '$' + priceDisp : '--'}</td>
          <td class="px-3 py-0.5 text-end"><div class="font-semibold text-xs">${volDisp}</div></td>
          <td class="px-3 py-0.5 text-end text-xs text-t2">${volPct > 0 ? volPct.toFixed(2) + '%' : '--'}</td>
          <td class="px-3 py-0.5 text-center"><a href="${url}" target="_blank" class="ebtn">${t('visit')}</a></td>
        </tr>`;
      }).join('');
      renderExPages();
    }

    function renderExPages() {
      const tot = Math.ceil(exData.length / exIPP);
      const p = $('exPagination');
      const si = $('exShowingInfo');
      const bar = $('exPaginationBar');
      if (tot <= 1) {
        if (p) p.innerHTML = '';
        if (si) si.textContent = '';
        if (bar) bar.style.display = 'none';
        return;
      }
      if (bar) bar.style.display = 'flex';
      if (si) {
        const from = (exPage - 1) * exIPP + 1;
        const to = Math.min(exPage * exIPP, exData.length);
        si.textContent = `Showing ${from}–${to} of ${exData.length}`;
      }
      const btnS = (active, disabled) => {
        let s = 'display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:32px;padding:0 6px;border-radius:8px;border:1px solid var(--bc);background:var(--bg1);color:var(--t1);font-size:13px;font-weight:600;cursor:pointer;transition:all .15s;';
        if (disabled) return s + 'opacity:.35;cursor:default;pointer-events:none;';
        if (active) return s + 'background:var(--ac);color:#fff;border-color:var(--ac);box-shadow:0 2px 8px rgba(56,97,251,.35);';
        return s + 'color:var(--t2);';
      };
      const dots = '<span style="display:inline-flex;align-items:center;color:var(--t2);font-size:13px;padding:0 2px">···</span>';
      const isMob = window.innerWidth <= 480;
      let h = `<button onclick="exPage=Math.max(1,exPage-1);renderExLst()" style="${btnS(false, exPage === 1)}"><i class="fas fa-chevron-left" style="font-size:11px"></i></button>`;
      if (isMob) {
        const pages = [...new Set([1, exPage - 1, exPage, exPage + 1, tot].filter(n => n >= 1 && n <= tot))].sort((a, b) => a - b);
        let prev = 0; pages.forEach(i => { if (i - prev > 1) h += dots; h += `<button onclick="exPage=${i};renderExLst()" style="${btnS(i === exPage, false)}">${i}</button>`; prev = i; });
      } else {
        const ws = Math.max(2, exPage - 1), we = Math.min(tot - 1, exPage + 1);
        h += `<button onclick="exPage=1;renderExLst()" style="${btnS(exPage === 1, false)}">1</button>`;
        if (ws > 2) h += dots;
        for (let i = ws; i <= we; i++)h += `<button onclick="exPage=${i};renderExLst()" style="${btnS(i === exPage, false)}">${i}</button>`;
        if (we < tot - 1) h += dots;
        if (tot > 1) h += `<button onclick="exPage=${tot};renderExLst()" style="${btnS(exPage === tot, false)}">${tot}</button>`;
      }
      h += `<button onclick="exPage=Math.min(${tot},exPage+1);renderExLst()" style="${btnS(false, exPage === tot)}"><i class="fas fa-chevron-right" style="font-size:11px"></i></button>`;
      if (p) p.innerHTML = h;
    }

    function closeMod() {
      const m = $('exMod');
      if (!m) return;
      m.classList.remove('active');
      requestAnimationFrame(() => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        if (window.exUpdTimer) clearInterval(window.exUpdTimer);
      });
    }
    function openSrch() {
      const ov = document.getElementById('gsOverlay');
      if (!ov) return;
      // Show modal INSTANTLY — this is what the browser measures for INP
      ov.classList.add('active');
      document.body.style.overflow = 'hidden';
      const inp = document.getElementById('gsModalInput');
      if (inp) { inp.value = ''; setTimeout(() => inp.focus(), 50); }
      // Defer heavy render work to after the browser has painted the open state
      setTimeout(gsRenderDefault, 0);
    }

    function closeSrch() {
      const ov = document.getElementById('gsOverlay');
      if (!ov) return;
      const inp = document.getElementById('gsModalInput');
      if (inp && inp.value.trim().length >= 2) saveSrchHistory(inp.value.trim());
      ov.classList.remove('active');
      document.body.style.overflow = '';
    }

    // ===== SEARCH HISTORY =====
    const SRCH_HIST_KEY = 'ch_search_history';
    const SRCH_HIST_MAX = 8;

    function getSrchHistory() {
      try { return JSON.parse(localStorage.getItem(SRCH_HIST_KEY) || '[]'); } catch (e) { return []; }
    }
    function saveSrchHistory(query) {
      if (!query || query.trim().length < 2) return;
      const q = query.trim();
      let hist = getSrchHistory().filter(h => h.toLowerCase() !== q.toLowerCase());
      hist.unshift(q);
      hist = hist.slice(0, SRCH_HIST_MAX);
      try { localStorage.setItem(SRCH_HIST_KEY, JSON.stringify(hist)); } catch (e) { }
    }
    function deleteSrchHistoryItem(q) {
      let hist = getSrchHistory().filter(h => h !== q);
      try { localStorage.setItem(SRCH_HIST_KEY, JSON.stringify(hist)); } catch (e) { }
      gsRenderDefault();
    }
    function clearAllSrchHistory() {
      try { localStorage.removeItem(SRCH_HIST_KEY); } catch (e) { }
      gsRenderDefault();
    }

    // Top Boosted Coins (static popular coins)
    // Dynamic Top Boosted — picks top 6 by 24h volume from live data
    function getTopBoosted() {
      const pool = allC.length > 10 ? allC : INSTANT_COINS;
      return [...pool]
        .filter(c => c.vol > 0 && c.pr > 0)
        .sort((a, b) => (b.vol || 0) - (a.vol || 0))
        .slice(0, 4);
    }

    function gsGetCoinData(sy) {
      const pool = allC.length > 10 ? allC : INSTANT_COINS;
      return pool.find(c => c.sy.toUpperCase() === sy.toUpperCase());
    }

    function gsFmtPrice(pr) {
      if (!pr || pr <= 0) return '—';
      return '$' + (pr >= 1 ? pr.toLocaleString('en-US', { maximumFractionDigits: 2 }) : pr.toFixed(6));
    }

    function gsFmtMcap(mc) {
      if (!mc) return '—';
      if (mc >= 1e12) return '$' + (mc / 1e12).toFixed(1) + 'T';
      if (mc >= 1e9) return '$' + (mc / 1e9).toFixed(1) + 'B';
      if (mc >= 1e6) return '$' + (mc / 1e6).toFixed(1) + 'M';
      return '$' + mc.toLocaleString();
    }

    function gsRenderDefault() {
      const body = document.getElementById('gsModalBody');
      if (!body) return;
      let html = '';
      const hist = getSrchHistory();

      // Recent Searches
      if (hist.length > 0) {
        html += `
        <div class="gs-section-hd">
          <span class="gs-section-title">${t('recentSearches')}</span>
          <button class="gs-section-btn" onclick="clearAllSrchHistory()">${t('clearAll')} ✕</button>
        </div>
        <div class="gs-chips">
          ${hist.map(q => {
          const coin = gsGetCoinData(q);
          const imgHtml = coin ? `<img src="${coin.img}" onerror="this.style.display='none'" width="20" height="20" style="border-radius:50%">` : `<i class="fas fa-history" style="font-size:12px;color:var(--t2)"></i>`;
          return `<div class="gs-chip" onclick="document.getElementById('gsModalInput').value='${q.replace(/'/g, "\\'")}';gsLiveSearch('${q.replace(/'/g, "\\'")}')">
              ${imgHtml}
              <span>${q}</span>
              <button class="gs-chip-del" onclick="event.stopPropagation();deleteSrchHistoryItem('${q.replace(/'/g, "\\'")}')" title="${t('deleteItem')}"><i class="fas fa-times"></i></button>
            </div>`;
        }).join('')}
        </div>`;
      }

      // Top Boosted Cards — dynamic from live data (lightweight, always render)
      const boosted = getTopBoosted();
      html += `
      <div class="gs-section-hd">
        <span class="gs-section-title"><i class="fas fa-rocket" style="color:#f97316"></i> ${t('topBoosted')}</span>
      </div>
      <div class="gs-boosted-scroll">
        ${boosted.map(b => {
        const price = gsFmtPrice(b.pr);
        const chg = b.c24 || 0;
        const chgColor = chg >= 0 ? 'var(--gn)' : 'var(--rd)';
        const imgSrc = (b.img && !b.img.includes('/0.png')) ? b.img : (typeof cmcImg !== 'undefined' ? cmcImg(b.sy) : b.img) || b.img;
        return `<div class="gs-boost-card" onclick="gsClickCoinFull('${b.id}','${b.nm.replace(/'/g, "\\'")}','${b.sy}','${b.img}')">
            <div class="gs-boost-top">
              <img src="${imgSrc}" onerror="this.onerror=null;this.src='${typeof letterAvatar !== 'undefined' ? letterAvatar(b.sy, 28) : ''}'" width="28" height="28" style="border-radius:50%">
              <span class="gs-boost-sym">${b.sy}</span>
              <span class="gs-boost-badge" style="color:${chgColor}">${chg >= 0 ? '▲' : '▼'} ${Math.abs(chg).toFixed(1)}%</span>
            </div>
            <div class="gs-boost-price">${price}</div>
            <div style="font-size:10px;color:var(--t2);font-weight:600">${b.nm}</div>
          </div>`;
      }).join('')}
      </div>`;

      // Render history + boosted immediately
      body.innerHTML = html;

      // Defer trending section to idle time — avoids blocking the main thread on open
      const renderTrending = () => {
        const pool = allC.length > 10 ? allC : INSTANT_COINS;
        const trending = pool.slice(0, 6);
        if (!trending.length) return;
        const trendingHtml = `
        <div class="gs-section-hd">
          <span class="gs-section-title"><i class="fas fa-fire" style="color:#f97316"></i> ${t('trendingCrypto')} 🔥</span>
        </div>` +
          trending.map((c, i) => {
            const chg = c.c24 || 0;
            const mc = c.mc || 0;
            const imgSrc = (c.img && !c.img.includes('/0.png')) ? c.img : (typeof cmcImg !== 'undefined' ? cmcImg(c.sy) : '') || c.img;
            return `<div class="gs-trending-item" onclick="gsClickCoinFull('${c.id}','${c.nm.replace(/'/g, "\\'")}','${c.sy}','${c.img}')">
            <img class="gs-trending-img" src="${imgSrc}" onerror="this.onerror=null;this.style.background='var(--bg3)'" loading="lazy" width="32" height="32">
            <div class="gs-trending-info">
              <div class="gs-trending-name">${c.nm} <span class="gs-trending-rank">#${c.rk || (i + 1)}</span></div>
              <div class="gs-trending-sym">${c.sy}</div>
              <div class="gs-trending-meta">
                <span>MCap: <b style="color:var(--t1)">${gsFmtMcap(mc)}</b></span>
              </div>
            </div>
            <div class="gs-trending-right">
              <div class="gs-trending-pr">${gsFmtPrice(c.pr)}</div>
              <div class="gs-trending-chg" style="color:${chg >= 0 ? 'var(--gn)' : 'var(--rd)'}">
                <i class="fas fa-caret-${chg >= 0 ? 'up' : 'down'}" style="font-size:10px"></i>
                ${Math.abs(chg).toFixed(2)}%
              </div>
            </div>
          </div>`;
          }).join('');
        // Append trending below the already-rendered content
        const b2 = document.getElementById('gsModalBody');
        if (b2) b2.insertAdjacentHTML('beforeend', trendingHtml);
      };

      if ('requestIdleCallback' in window) {
        requestIdleCallback(renderTrending, { timeout: 500 });
      } else {
        setTimeout(renderTrending, 50);
      }
    }

    function gsClickCoin(sy) {
      const pool = allC.length > 10 ? allC : INSTANT_COINS;
      const c = pool.find(x => x.sy.toUpperCase() === sy.toUpperCase());
      if (c) {
        saveSrchHistory(sy);
        blockRender();
        showEx(c.id, c.nm, c.sy, c.img);
        closeSrch();
      } else {
        document.getElementById('gsModalInput').value = sy;
        gsLiveSearch(sy);
      }
    }

    function gsClickCoinFull(id, nm, sy, img) {
      saveSrchHistory(sy);
      blockRender();
      showEx(id, nm, sy, img);
      closeSrch();
    }

    function gsLiveSearch(query) {
      if (!query || query.length < 1) {
        // Defer heavy default render to keep input response instant
        setTimeout(gsRenderDefault, 0);
        return;
      }
      const q = query.toLowerCase();
      const searchPool = allC.length > 10 ? allC : INSTANT_COINS;
      const coins = searchPool.filter(c =>
        (c.nm || '').toLowerCase().includes(q) || (c.sy || '').toLowerCase().includes(q)
      ).slice(0, 8);
      const exchanges = EX_DB.filter(ex => ex.n.toLowerCase().includes(q)).slice(0, 4);

      // --- NFT Collections ---
      const nfts = (typeof _nftAll !== 'undefined' && _nftAll.length > 0)
        ? _nftAll.filter(n => (n.name || '').toLowerCase().includes(q) || (n.symbol || '').toLowerCase().includes(q)).slice(0, 4)
        : [];

      // --- Stocks & ETFs ---
      const stocks = (typeof _STK !== 'undefined' && _STK.length > 0)
        ? _STK.filter(s => (s.nm || '').toLowerCase().includes(q) || (s.sy || '').toLowerCase().includes(q) || (s.cat || '').toLowerCase().includes(q)).slice(0, 4)
        : [];

      // --- Blog Posts ---
      const blogKeys = ['blogPost1Title','blogPost2Title','blogPost3Title','blogPost4Title','blogPost5Title','blogPost6Title'];
      const blogDescKeys = ['blogPost1Desc','blogPost2Desc','blogPost3Desc','blogPost4Desc','blogPost5Desc','blogPost6Desc'];
      const blogs = blogKeys.map((k, i) => {
        const title = t(k) || '';
        const desc = t(blogDescKeys[i]) || '';
        if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)) {
          return { title, desc, idx: i + 1 };
        }
        return null;
      }).filter(Boolean).slice(0, 3);

      // --- Site Sections / Features (quick navigation) ---
      const sitePages = [
        { name: t('tabCrypto') || 'Cryptocurrencies', nameAlt: 'crypto currencies عملات رقمية كريبتو', icon: 'fas fa-coins', action: "closeSrch();navTo('crypto')" },
        { name: t('tabExchanges') || 'All Exchanges', nameAlt: 'exchanges منصات بورصة', icon: 'fas fa-exchange-alt', action: "closeSrch();navTo('exchanges')" },
        { name: 'NFT', nameAlt: 'nft collections مجموعات', icon: 'fas fa-palette', action: "closeSrch();navTo('nft')" },
        { name: t('stocksTitle') || 'Stocks & ETFs', nameAlt: 'stocks etf أسهم صناديق', icon: 'fas fa-chart-line', action: "closeSrch();navTo('stocks')" },
        { name: t('fearGreedTitle') || 'Fear & Greed Index', nameAlt: 'fear greed index خوف طمع مؤشر', icon: 'fas fa-tachometer-alt', action: "closeSrch();document.querySelector('[data-i18n=fearGreedTitle]')?.scrollIntoView({behavior:'smooth',block:'center'})" },
        { name: t('aiTitle') || 'AI Analysis', nameAlt: 'ai analysis ذكاء اصطناعي تحليل', icon: 'fas fa-robot', action: "closeSrch();document.querySelector('[data-i18n=aiTitle]')?.closest('.card,.rounded-2xl,section')?.scrollIntoView({behavior:'smooth',block:'center'})" },
        { name: t('blogNav') || 'Blog', nameAlt: 'blog مدونة مقالات articles', icon: 'fas fa-newspaper', action: "closeSrch();document.querySelector('[data-i18n=blogSectionTitle]')?.scrollIntoView({behavior:'smooth'})" },
        { name: t('trendingTitle') || 'Trending', nameAlt: 'trending رائجة top 100', icon: 'fas fa-fire', action: "closeSrch();navTo('crypto')" },
        { name: t('cryptoAnalyzer') || 'Liquidity Analyzer', nameAlt: 'liquidity analyzer محلل سيولة', icon: 'fas fa-flask', action: "closeSrch();if(typeof openAnalyzer==='function')openAnalyzer()" },
        { name: t('cryptoArbitrage') || 'Arbitrage Scanner', nameAlt: 'arbitrage أربيتراج فروقات', icon: 'fas fa-random', action: "closeSrch();if(typeof openArbitrage==='function')openArbitrage()" },
        { name: t('forexAnalyzer') || 'Forex Analyzer', nameAlt: 'forex فوركس عملات أجنبية', icon: 'fas fa-dollar-sign', action: "closeSrch();if(typeof openForex==='function')openForex()" },
        { name: t('support') || 'Support', nameAlt: 'support contact دعم تواصل اتصال', icon: 'fas fa-headset', action: "closeSrch();switchInfoTab('contact');document.getElementById('infoSection')?.scrollIntoView({behavior:'smooth'})" },
      ];
      const pages = sitePages.filter(p =>
        p.name.toLowerCase().includes(q) || p.nameAlt.toLowerCase().includes(q)
      ).slice(0, 4);

      const body = document.getElementById('gsModalBody');
      if (!body) return;

      // No results at all
      if (coins.length === 0 && exchanges.length === 0 && nfts.length === 0 && stocks.length === 0 && blogs.length === 0 && pages.length === 0) {
        body.innerHTML = `<div class="gs-no-results"><i class="fas fa-search" style="font-size:24px;opacity:.3;display:block;margin-bottom:12px"></i>${t('noResults') || 'No results found for'} "${query}"</div>`;
        return;
      }

      // Build and insert HTML in one shot (single reflow)
      let html = '';

      // --- Site Pages/Features ---
      if (pages.length > 0) {
        html += `<div class="gs-section-hd"><span class="gs-section-title"><i class="fas fa-compass" style="margin-inline-end:6px;opacity:.6"></i>${cLang === 'ar' ? 'أقسام الموقع' : 'Site Sections'}</span></div>`;
        html += pages.map(p => `<div class="gs-trending-item" onclick="${p.action}" style="cursor:pointer">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--ac);display:flex;align-items:center;justify-content:center;flex-shrink:0">
              <i class="${p.icon}" style="color:#fff;font-size:13px"></i>
            </div>
            <div class="gs-trending-info">
              <div class="gs-trending-name">${p.name}</div>
              <span class="gs-trending-sym" style="opacity:.5">${cLang === 'ar' ? 'انتقل إلى القسم' : 'Go to section'}</span>
            </div>
            <div class="gs-trending-right">
              <i class="fas fa-arrow-${cLang === 'ar' ? 'left' : 'right'}" style="color:var(--ac);font-size:12px"></i>
            </div>
          </div>`).join('');
      }

      // --- Coins ---
      if (coins.length > 0) {
        html += `<div class="gs-section-hd"><span class="gs-section-title"><i class="fas fa-coins" style="margin-inline-end:6px;opacity:.6"></i>${t('tabCrypto')}</span></div>`;
        html += coins.map((c) => {
          const chg = c.c24 || 0;
          const mc = c.mc || 0;
          const imgSrc = (c.img && !c.img.includes('/0.png')) ? c.img : (typeof cmcImg !== 'undefined' ? cmcImg(c.sy) : '') || c.img;
          return `<div class="gs-trending-item" onclick="gsClickCoinFull('${c.id}','${c.nm.replace(/'/g, "\\'")}','${c.sy}','${c.img}')">
            <img class="gs-trending-img" src="${imgSrc}" onerror="this.onerror=null;this.style.background='var(--bg3)'" loading="lazy" width="32" height="32">
            <div class="gs-trending-info">
              <div class="gs-trending-name">${c.nm} <span class="gs-trending-rank">#${c.rk || ''}</span></div>
              <div class="gs-trending-sym">${c.sy}</div>
              <div class="gs-trending-meta">
                <span>MCap: <b style="color:var(--t1)">${gsFmtMcap(mc)}</b></span>
              </div>
            </div>
            <div class="gs-trending-right">
              <div class="gs-trending-pr">${gsFmtPrice(c.pr)}</div>
              <div class="gs-trending-chg" style="color:${chg >= 0 ? 'var(--gn)' : 'var(--rd)'}">
                <i class="fas fa-caret-${chg >= 0 ? 'up' : 'down'}" style="font-size:10px"></i>
                ${Math.abs(chg).toFixed(2)}%
              </div>
            </div>
          </div>`;
        }).join('');
      }

      // --- Exchanges ---
      if (exchanges.length > 0) {
        html += `<div class="gs-section-hd"><span class="gs-section-title"><i class="fas fa-exchange-alt" style="margin-inline-end:6px;opacity:.6"></i>${t('exchanges')}</span></div>`;
        html += exchanges.map(ex => {
          return `<div class="gs-trending-item" onclick="closeSrch();navTo('exchanges');setTimeout(()=>openExDetail('${ex.id}'),300)" style="cursor:pointer">
            <img class="gs-trending-img" src="${ex.l}" onerror="this.onerror=null;this.style.background='var(--bg3)'" loading="lazy" width="32" height="32">
            <div class="gs-trending-info">
              <div class="gs-trending-name">${ex.n}</div>
              <span class="gs-trending-sym">${t('trustScore')}: ${ex.t}/10</span>
            </div>
            <div class="gs-trending-right">
              <span style="color:var(--ac);font-weight:700;font-size:12px">${cLang === 'ar' ? 'عرض التفاصيل' : 'View Details'} →</span>
            </div>
          </div>`;
        }).join('');
      }

      // --- NFT Collections ---
      if (nfts.length > 0) {
        html += `<div class="gs-section-hd"><span class="gs-section-title"><i class="fas fa-palette" style="margin-inline-end:6px;opacity:.6"></i>NFT</span></div>`;
        html += nfts.map(n => {
          const chg = n.h24 || 0;
          const safeName = (n.name||'').replace(/['"\\<>&]/g, '');
          return `<div class="gs-trending-item" onclick="closeSrch();navTo('nft');setTimeout(function(){var el=document.getElementById('nftSearch');if(el){el.value='${safeName}';_filterNFT('${safeName}');}},200)" style="cursor:pointer">
            <img class="gs-trending-img" src="${n.image}" onerror="this.onerror=null;this.style.background='var(--bg3)'" loading="lazy" width="32" height="32" style="border-radius:8px">
            <div class="gs-trending-info">
              <div class="gs-trending-name">${n.name}</div>
              <div class="gs-trending-sym">${n.chain || 'ethereum'}</div>
            </div>
            <div class="gs-trending-right">
              <div class="gs-trending-pr">${n.fpUsd ? '$' + (n.fpUsd < 1 ? n.fpUsd.toFixed(4) : n.fpUsd.toFixed(2)) : '—'}</div>
              <div class="gs-trending-chg" style="color:${chg >= 0 ? 'var(--gn)' : 'var(--rd)'}">
                <i class="fas fa-caret-${chg >= 0 ? 'up' : 'down'}" style="font-size:10px"></i>
                ${Math.abs(chg).toFixed(2)}%
              </div>
            </div>
          </div>`;
        }).join('');
      }

      // --- Stocks & ETFs ---
      if (stocks.length > 0) {
        html += `<div class="gs-section-hd"><span class="gs-section-title"><i class="fas fa-chart-line" style="margin-inline-end:6px;opacity:.6"></i>${t('stocksTitle') || 'Stocks & ETFs'}</span></div>`;
        html += stocks.map(s => {
          const stkInfo = (typeof _stkP !== 'undefined' && _stkP[s.sy]) ? _stkP[s.sy] : null;
          const price = stkInfo ? stkInfo.pr : 0;
          const chg = stkInfo ? (stkInfo.chg || 0) : 0;
          const catLabel = s.cat === 'etf' ? 'ETF' : s.cat === 'commodity' ? (t('stkCommodity') || 'Commodity') : s.cat === 'index' ? (t('stkIndex') || 'Index') : (t('stkStock') || 'Stock');
          return `<div class="gs-trending-item" onclick="closeSrch();navTo('stocks');setTimeout(()=>{const el=document.getElementById('stkSearch');if(el){el.value='${s.sy}';_stkFilter();}},200)" style="cursor:pointer">
            <div style="width:32px;height:32px;border-radius:50%;background:${s.cl || 'var(--bg3)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">
              ${s.ic || '📊'}
            </div>
            <div class="gs-trending-info">
              <div class="gs-trending-name">${s.nm} <span class="gs-trending-rank">${s.sy}</span></div>
              <div class="gs-trending-sym">${catLabel}</div>
            </div>
            <div class="gs-trending-right">
              <div class="gs-trending-pr">${price > 0 ? '$' + price.toFixed(2) : '—'}</div>
              ${chg ? `<div class="gs-trending-chg" style="color:${chg >= 0 ? 'var(--gn)' : 'var(--rd)'}">
                <i class="fas fa-caret-${chg >= 0 ? 'up' : 'down'}" style="font-size:10px"></i>
                ${Math.abs(chg).toFixed(2)}%
              </div>` : ''}
            </div>
          </div>`;
        }).join('');
      }

      // --- Blog Posts ---
      if (blogs.length > 0) {
        html += `<div class="gs-section-hd"><span class="gs-section-title"><i class="fas fa-newspaper" style="margin-inline-end:6px;opacity:.6"></i>${t('blogNav') || 'Blog'}</span></div>`;
        html += blogs.map(b => `<div class="gs-trending-item" onclick="closeSrch();document.querySelector('[data-i18n=blogSectionTitle]')?.scrollIntoView({behavior:'smooth'});" style="cursor:pointer">
            <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--ac),#8b5cf6);display:flex;align-items:center;justify-content:center;flex-shrink:0">
              <i class="fas fa-book-open" style="color:#fff;font-size:13px"></i>
            </div>
            <div class="gs-trending-info">
              <div class="gs-trending-name" style="font-size:12px">${b.title}</div>
              <div class="gs-trending-sym" style="font-size:10px;opacity:.6;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.desc}</div>
            </div>
            <div class="gs-trending-right">
              <span style="color:var(--ac);font-weight:700;font-size:11px">${t('blogRead') || 'Read →'}</span>
            </div>
          </div>`).join('');
      }

      body.innerHTML = html;
    }

    function toggleMobileSearch() {
      openSrch();
    }

    function updateClearBtn() { }
    function clearSearch() {
      const inp = document.getElementById('gsModalInput');
      if (inp) { inp.value = ''; inp.focus(); }
      gsRenderDefault();
    }
    function showSrchHistory() { gsRenderDefault(); }

    // GS Integration
    document.addEventListener('DOMContentLoaded', () => {
      // Inject Search Overlay HTML
      const overlayDiv = document.createElement('div');
      overlayDiv.id = 'gsOverlay';
      overlayDiv.className = 'gs-overlay';
      overlayDiv.innerHTML = `
        <div class="gs-modal">
          <div class="gs-top">
            <i class="fas fa-search gs-top-icon"></i>
            <input type="text" class="gs-top-input" id="gsModalInput" placeholder="Search coin, NFT, exchange, stocks, blog..." autocomplete="off">
            <button class="gs-top-close" onclick="closeSrch()" title="Close">✕</button>
          </div>
          <div class="gs-body" id="gsModalBody"></div>
        </div>
      `;
      document.body.appendChild(overlayDiv);

      // Overlay click-to-close
      overlayDiv.addEventListener('click', e => {
        if (e.target === overlayDiv) closeSrch();
      });

      // Input events
      const inp = document.getElementById('gsModalInput');
      if (inp) {
        let _gsT;
        inp.addEventListener('input', e => {
          clearTimeout(_gsT);
          _gsT = setTimeout(() => gsLiveSearch(e.target.value), 80);
        });
      }

      // Shortcut "/" to open search
      document.addEventListener('keydown', e => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          openSrch();
        }
        if (e.key === 'Escape') closeSrch();
      });
    });



    // Legal modals
    function openLegal(id) { const el = $(id); if (el) { el.classList.add('active'); el.onclick = function (e) { if (e.target === el) el.classList.remove('active') } } }
    function closeLegal(id) { const el = $(id); if (el) el.classList.remove('active') }

    // Cookie Consent
    function checkCookieConsent() {
      if (!localStorage.getItem('ch_cookie_consent')) { const b = $('cookieBanner'); if (b) b.classList.add('show') }
    }
    function acceptCookies() {
      localStorage.setItem('ch_cookie_consent', 'accepted');
      const b = $('cookieBanner'); if (b) b.classList.remove('show');
    }
    function rejectCookies() {
      localStorage.setItem('ch_cookie_consent', 'essential');
      const b = $('cookieBanner'); if (b) b.classList.remove('show');
      // Disable non-essential cookies
      try { document.cookie.split(';').forEach(c => { const n = c.split('=')[0].trim(); if (n && !['ch_cookie_consent'].includes(n)) { document.cookie = n + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/' } }) } catch (e) { }
    }
    document.addEventListener('click', e => { if (e.target === $('exMod')) closeMod() }, { passive: true });
    document.addEventListener('DOMContentLoaded', () => { $('exSrch')?.addEventListener('input', e => { const s = e.target.value.toLowerCase(); document.querySelectorAll('.ec-row').forEach(c => { c.style.display = c.textContent.toLowerCase().includes(s) ? 'table-row' : 'none' }) }) });

    function reRank() {
      const MAX_PCT = 1000;
      allC.forEach(function(c) {
        if (Math.abs(c.c1  || 0) > MAX_PCT) c.c1  = 0;
        if (Math.abs(c.c4  || 0) > MAX_PCT) c.c4  = 0;
        if (Math.abs(c.c24 || 0) > MAX_PCT) c.c24 = 0;
        if (Math.abs(c.c7  || 0) > MAX_PCT) c.c7  = 0;
        if (c.pr < 0 || c.pr > 1e12) c.pr = 0;
        if ((parseFloat(c.vol) || 0) < 0) c.vol = 0;
        if ((parseFloat(c.mc)  || 0) < 0) c.mc  = 0;
      });

      // Canonical coins: symbol → {slug, name} — the REAL coin for each symbol
      var CANON = {
        BTC:{s:'bitcoin',n:'bitcoin'}, ETH:{s:'ethereum',n:'ethereum'}, BNB:{s:'bnb',n:'bnb'},
        SOL:{s:'solana',n:'solana'}, XRP:{s:'xrp',n:'xrp'}, ADA:{s:'cardano',n:'cardano'},
        AVAX:{s:'avalanche',n:'avalanche'}, DOT:{s:'polkadot',n:'polkadot'}, MATIC:{s:'polygon',n:'polygon'},
        DOGE:{s:'dogecoin',n:'dogecoin'}, SHIB:{s:'shiba-inu',n:'shiba inu'}, LTC:{s:'litecoin',n:'litecoin'},
        BCH:{s:'bitcoin-cash',n:'bitcoin cash'}, ATOM:{s:'cosmos',n:'cosmos'}, LINK:{s:'chainlink',n:'chainlink'},
        UNI:{s:'uniswap',n:'uniswap'}, TRX:{s:'tron',n:'tron'}, TON:{s:'toncoin',n:'toncoin'},
        USDT:{s:'tether',n:'tether'}, USDC:{s:'usd-coin',n:'usd coin'}, DAI:{s:'dai',n:'dai'},
        NEAR:{s:'near-protocol',n:'near protocol'}, ICP:{s:'internet-computer',n:'internet computer'},
        APT:{s:'aptos',n:'aptos'}, SUI:{s:'sui',n:'sui'}, ARB:{s:'arbitrum',n:'arbitrum'},
        OP:{s:'optimism',n:'optimism'}, FIL:{s:'filecoin',n:'filecoin'}, AAVE:{s:'aave',n:'aave'},
        MKR:{s:'maker',n:'maker'}, PEPE:{s:'pepe',n:'pepe'}, WIF:{s:'dogwifhat',n:'dogwifhat'},
        BONK:{s:'bonk',n:'bonk'}, FLOKI:{s:'floki',n:'floki'}, FET:{s:'fetch-ai',n:'artificial superintelligence alliance'},
        AR:{s:'arweave',n:'arweave'}, INJ:{s:'injective-protocol',n:'injective'},
        SEI:{s:'sei-network',n:'sei'}, TIA:{s:'celestia',n:'celestia'}, STX:{s:'stacks',n:'stacks'},
        KAS:{s:'kaspa',n:'kaspa'}, ALGO:{s:'algorand',n:'algorand'}, XLM:{s:'stellar',n:'stellar'},
        HBAR:{s:'hedera',n:'hedera'}, VET:{s:'vechain',n:'vechain'}, FTM:{s:'fantom',n:'fantom'},
        EOS:{s:'eos',n:'eos'}, XTZ:{s:'tezos',n:'tezos'}, ETC:{s:'ethereum-classic',n:'ethereum classic'},
        NEO:{s:'neo',n:'neo'}, THETA:{s:'theta-network',n:'theta network'}, IOTA:{s:'iota',n:'iota'},
      };

      // BAD name patterns — these are NEVER the real coin
      var BAD = ['bridged','wrapped','wormhole','portal','heco','bep2','binance-peg','pegged',
                 'harrypotter','shrek','tiger','babydog','safemoon','elonmusk','catgirl'];

      function isBad(nm) {
        var low = (nm || '').toLowerCase();
        for (var i = 0; i < BAD.length; i++) { if (low.includes(BAD[i])) return true; }
        return false;
      }

      // Dedup: group by symbol, pick the REAL one
      var groups = new Map();
      allC.forEach(function(c) {
        var sy = (c.sy || '').toUpperCase();
        if (!sy) return;
        if (!groups.has(sy)) groups.set(sy, []);
        groups.get(sy).push(c);
      });

      var clean = [];
      groups.forEach(function(coins, sy) {
        if (coins.length === 1) { clean.push(coins[0]); return; }

        // Multiple coins with same symbol — pick the best one
        var canon = CANON[sy];
        var best = null;

        if (canon) {
          // Try exact slug match first
          for (var i = 0; i < coins.length; i++) {
            if ((coins[i].id || '').toLowerCase() === canon.s) { best = coins[i]; break; }
          }
          // Try exact name match
          if (!best) {
            for (var i = 0; i < coins.length; i++) {
              if ((coins[i].nm || '').toLowerCase() === canon.n) { best = coins[i]; break; }
            }
          }
          // Try name starts with canonical name
          if (!best) {
            for (var i = 0; i < coins.length; i++) {
              if ((coins[i].nm || '').toLowerCase().startsWith(canon.n)) { best = coins[i]; break; }
            }
          }
        }

        // No canonical match — pick non-bad coin with highest mc, then no-platform
        if (!best) {
          var candidates = coins.filter(function(c) { return !isBad(c.nm); });
          if (candidates.length === 0) candidates = coins;
          candidates.sort(function(a, b) {
            // Prefer no platform (native)
            var aN = a.plat ? 1 : 0, bN = b.plat ? 1 : 0;
            if (aN !== bN) return aN - bN;
            // Then highest market cap
            return (parseFloat(b.mc) || 0) - (parseFloat(a.mc) || 0);
          });
          best = candidates[0];
        }

        // Merge data from all duplicates into best
        coins.forEach(function(c) {
          if (c === best) return;
          if ((parseFloat(c.vol) || 0) > (parseFloat(best.vol) || 0)) best.vol = c.vol;
          if (c.c1 && !best.c1) best.c1 = c.c1;
          if (c.c4 && !best.c4) best.c4 = c.c4;
          if (c.c24 && !best.c24) best.c24 = c.c24;
          if (c.c7 && !best.c7) best.c7 = c.c7;
          if (c.sup > 0 && !best.sup) best.sup = c.sup;
          if (c.ex > 0 && !best.ex) best.ex = c.ex;
          if (c.img && c.img.length > 15 && (!best.img || best.img.includes('/0.png'))) best.img = c.img;
        });

        // Fix name if needed
        if (canon && best.nm && isBad(best.nm)) {
          best.nm = canon.n.split(' ').map(function(w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' ');
        }

        clean.push(best);
      });

      allC.length = 0;
      clean.forEach(function(c) { allC.push(c); });
      allC.sort(function(a, b) { return (parseFloat(b.mc) || 0) - (parseFloat(a.mc) || 0) || (parseFloat(b.vol) || 0) - (parseFloat(a.vol) || 0); });
      allC.forEach(function(c, i) { c.rk = i + 1; });
    }

    // Filter/Sort/Render
    function doFilter() { const s = $('search').value.toLowerCase(); filtC = allC.filter(c => { if (!c.nm || !c.sy) return false; const ms = (c.nm || '').toLowerCase().includes(s) || (c.sy || '').toLowerCase().includes(s); const mn = cNet === 'all' || chkNet(c, cNet); return ms && mn }); const af = $('aFilt'); if (cNet !== 'all') { af.classList.remove('hidden'); const net = NETS.find(n => n.id === cNet); $('aNetName').textContent = net ? `${net.i} ${net.n} ` : cNet; $('fCount').textContent = `(${filtC.length} ${t('coinsFound')})` } else af.classList.add('hidden'); doSortArr(); cPage = 1; render() }
    function clearNet() { cNet = 'all'; $('netSel').value = 'all'; doFilter() }

    function doSort(col) {
      // Update sort headers
      const thId = 'th_' + col;
      document.querySelectorAll('.ct th').forEach(th => { th.classList.remove('sorted', 'asc', 'desc') });
      if (cSort === col) { sortDir = sortDir === 'asc' ? 'desc' : 'asc' } else { sortDir = col === 'rank' || col === 'name' ? 'asc' : 'desc' }
      cSort = col;
      const th = $(thId); if (th) { th.classList.add('sorted', sortDir) }
      doSortArr(); render()
    }

    function doSortArr() { const d = sortDir === 'asc' ? 1 : -1; filtC.sort((a, b) => { switch (cSort) { case 'rank': return (a.rk - b.rk) * d; case 'name': return a.nm.localeCompare(b.nm) * d; case 'price': return (a.pr - b.pr) * d; case 'change_1h': return (a.c1 - b.c1) * d; case 'change_4h': return (a.c4 - b.c4) * d; case 'change_24h': return (a.c24 - b.c24) * d; case 'change_7d': return (a.c7 - b.c7) * d; case 'market_cap': return (a.mc - b.mc) * d; case 'volume': return (a.vol - b.vol) * d; default: return (a.rk - b.rk) * d } }) }

    // AI Engine now integrated directly

    // Click-safe render guard — prevents DOM destruction during coin click
    var _renderBlocked = false;
    var _renderPending = false;
    function blockRender() { _renderBlocked = true; clearTimeout(window._renderBlockTimer); window._renderBlockTimer = setTimeout(() => { _renderBlocked = false; if (_renderPending) { _renderPending = false; _doRender(); } }, 1500); }

    // Smart in-place price update — avoids destroying DOM (fixes click issues)
    function updatePricesInPlace() {
      const tb = $('tBody');
      if (!tb) return;
      const rows = tb.querySelectorAll('tr');
      if (!rows.length) { render(); return; }
      const st = (cPage - 1) * iPP;
      const pg = filtC.slice(st, st + iPP);
      if (rows.length !== pg.length) { render(); return; }
      const mkChg = (v) => { const col = v >= 0 ? 'var(--gn)' : 'var(--rd)'; const ic = v >= 0 ? 'fa-caret-up' : 'fa-caret-down'; return `<span class="chg" style="color:${col}"><i class="fas ${ic}"></i>${v >= 0 ? '+' : ''}${v.toFixed(2)}%</span>` };
      pg.forEach((c, i) => {
        const cells = rows[i]?.querySelectorAll('td');
        if (!cells || cells.length < 8) return;
        const prDisp = c.pr >= 1 ? c.pr.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : (c.pr >= 0.0001 ? c.pr.toFixed(6).replace(/0+$/, '').replace(/\.$/, '.0') : parseFloat(c.pr.toFixed(8)));
        cells[1].innerHTML = `$${prDisp}`;
        cells[4].innerHTML = mkChg(c.c24);
      });
    }

    // Render throttle — max 1 render per 200ms during loading
    var _renderThrottleTimer = null;
    var _lastRenderTime = 0;
    var _RENDER_THROTTLE_MS = 200;
    function render() { 
      if (_renderBlocked) { _renderPending = true; return; }
      var now = Date.now();
      if (now - _lastRenderTime < _RENDER_THROTTLE_MS) {
        clearTimeout(_renderThrottleTimer);
        _renderThrottleTimer = setTimeout(function() { _lastRenderTime = Date.now(); _doRender(); }, _RENDER_THROTTLE_MS);
        return;
      }
      _lastRenderTime = now;
      _doRender(); 
    }
    function _doRender() {
      const st = (cPage - 1) * iPP, en = st + iPP, pg = filtC.slice(st, en); const tb = $('tBody');
      if (!pg.length) { tb.innerHTML = `<tr><td colspan="10" class="p-6 text-center" style="color:var(--t2)">${t('noExchanges')}</td></tr>`; return }
      const mkChg = (v) => { const col = v >= 0 ? 'var(--gn)' : 'var(--rd)'; const ic = v >= 0 ? 'fa-caret-up' : 'fa-caret-down'; return `<span class="chg" style="color:${col}"><i class="fas ${ic}"></i>${v >= 0 ? '+' : ''}${v.toFixed(2)}%</span>` };
      tb.innerHTML = pg.map((c, index) => {
        const rowNum = st + index + 1;
        const dn = c.sy === 'USDT' ? 'Tether' : c.sy === 'USDC' ? 'USD Coin' : c.nm;
        const aiBadge = Math.abs(c.c24) > 15 ? `<span style="font-size:9px;background:${c.c24 > 0 ? 'rgba(22,199,132,0.15)' : 'rgba(234,57,67,0.15)'};color:${c.c24 > 0 ? '#16c784' : '#ea3943'};padding:1px 4px;border-radius:4px;margin-inline-start:4px">AI Signal</span>` : '';
        const volBadge = (parseFloat(c.vol) || 0) >= 500000 ? `<span style="position:relative;display:inline-flex;cursor:default;flex-shrink:0;pointer-events:none" class="vol-badge-wrap"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="display:block"><circle cx="12" cy="12" r="10" fill="#3b82f6"/><path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="vol-tip">Verified High Volume — This coin has a 24h trading volume exceeding $500,000, indicating strong market activity and liquidity.</span></span>` : '';
        const prDisp = c.pr >= 1 ? c.pr.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : (c.pr >= 0.0001 ? c.pr.toFixed(6).replace(/0+$/, '').replace(/\.$/, '.0') : parseFloat(c.pr.toFixed(8)));

        const imgSrc = coinImgWithFallback(c);
        return `<tr onclick="showEx('${c.id}','${c.nm.replace(/'/g, "\\'")}', '${c.sy}', '${c.img}')">
<td class="text-start pl-5"><div class="flex items-center gap-2" style="justify-content:start;flex-wrap:nowrap">${volBadge}<span class="text-t2 text-xs font-bold" style="min-width:1.5rem;flex-shrink:0">${rowNum}</span><img alt="icon" src="${imgSrc}" class="w-6 h-6 rounded-full" width="24" height="24" decoding="async" onerror="imgOnerror(this,'${c.sy}')" onload="imgOnload(this,'${c.sy}')" loading="lazy" style="flex-shrink:0"><span class="font-semibold text-sm" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">${dn}</span><span class="px-1.5 py-0.5 rounded text-xs" style="background:var(--bg3);color:var(--t2);white-space:nowrap;flex-shrink:0">${c.sy}</span>${aiBadge}</div></td>
<td class="font-bold text-end pr-4" style="white-space:nowrap">$${prDisp}</td>
<td class="text-end pr-4 col-1h" style="white-space:nowrap">${mkChg(c.c1)}</td>
<td class="text-end pr-4 col-4h" style="white-space:nowrap">${mkChg(c.c4)}</td>
<td class="text-end pr-4" style="white-space:nowrap">${mkChg(c.c24)}</td>
<td class="text-end pr-4 col-7d" style="white-space:nowrap">${mkChg(c.c7)}</td>
<td class="text-end pr-4 col-mcap" style="color:var(--t2);font-size:12px;font-weight:500;white-space:nowrap">${fN(parseFloat(c.mc) || 0)}</td>
<td class="text-end pr-4 col-vol" style="color:var(--t2);font-size:12px;font-weight:500;white-space:nowrap">${fN(parseFloat(c.vol) || 0)}</td>
</tr>`;
      }).join('');
      rPages(); $('sRange').textContent = `${st + 1} - ${Math.min(en, filtC.length)} `; $('tCoins').textContent = filtC.length.toLocaleString();
      // Release height reservation after first real data render (CLS fix)
      const tc = $('tab_crypto'); if (tc && filtC.length > 5 && !tc.classList.contains('data-loaded')) tc.classList.add('data-loaded');
    }

    function rPages() {
      const tot = Math.ceil(filtC.length / iPP), p = $('pgs');
      if (tot <= 1) { p.innerHTML = ''; return }
      let pages = [];
      pages.push(1);
      if (cPage > 4) pages.push('...');
      for (let i = Math.max(2, cPage - 2); i <= Math.min(tot - 1, cPage + 2); i++) pages.push(i);
      if (cPage < tot - 3) pages.push('...');
      if (tot > 1) pages.push(tot);
      p.innerHTML = pages.map(pg => {
        if (pg === '...') return '<span style="color:var(--t2);padding:0 4px;font-size:13px;user-select:none">...</span>';
        return `<button onclick="gTo(${pg})" class="pg-btn${pg === cPage ? ' pg-active' : ''}">${pg}</button>`;
      }).join('');
      if ($('pgPrev')) $('pgPrev').disabled = cPage <= 1;
      if ($('pgNext')) $('pgNext').disabled = cPage >= tot;
      // Make pagination visible now that it has content (CLS fix — was visibility:hidden)
      const pag = $('cmcPag'); if (pag) pag.classList.add('pag-ready');
    }
    function gNext() { if (cPage < Math.ceil(filtC.length / iPP)) { cPage++; render(); scrollTo({ top: 0, behavior: 'smooth' }) } }
    function gPrev() { if (cPage > 1) { cPage--; render(); scrollTo({ top: 0, behavior: 'smooth' }) } }
    function gTo(p) { cPage = p; render(); scrollTo({ top: 0, behavior: 'smooth' }) }
    function gFirst() { cPage = 1; render(); scrollTo({ top: 0, behavior: 'smooth' }) }
    function gLast() { cPage = Math.ceil(filtC.length / iPP); render(); scrollTo({ top: 0, behavior: 'smooth' }) }

    let _dbT;
    $('search').addEventListener('input', () => { clearTimeout(_dbT); _dbT = setTimeout(doFilter, 300); });
    $('sortSel').addEventListener('change', () => { cSort = $('sortSel').value; sortDir = 'desc'; if (cSort === 'rank') sortDir = 'asc'; doSortArr(); render() });
    $('netSel').addEventListener('change', e => { cNet = e.target.value; doFilter() });

    // === CoinMarketCap-Style Network Bar ===
    (function () {
      var mBtn = document.getElementById('cmcMoreBtn');
      var mDrop = document.getElementById('cmcMoreDrop');
      var mChev = document.getElementById('cmcMoreChev');
      // Toggle more grid
      if (mBtn && mDrop) {
        mBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          var isOpen = mDrop.classList.toggle('show');
          if (mChev) mChev.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
        });
      }
      // Main network buttons
      document.querySelectorAll('.cmc-net-btn[data-net]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.cmc-net-btn').forEach(function (b) { b.classList.remove('cmc-net-active') });
          document.querySelectorAll('.cmc-mg-item').forEach(function (b) { b.classList.remove('cmc-mg-active') });
          btn.classList.add('cmc-net-active');
          cNet = btn.getAttribute('data-net');
          try { $('netSel').value = cNet; } catch(e){}
          doFilter();
          if (cNet !== 'all') fetchNetTokens(cNet);
          if (mDrop) { mDrop.classList.remove('show'); if (mChev) mChev.style.transform = 'rotate(0)' }
        });
      });
      // Grid network items
      document.querySelectorAll('.cmc-mg-item[data-net]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.cmc-net-btn').forEach(function (b) { b.classList.remove('cmc-net-active') });
          document.querySelectorAll('.cmc-mg-item').forEach(function (b) { b.classList.remove('cmc-mg-active') });
          btn.classList.add('cmc-mg-active');
          cNet = btn.getAttribute('data-net');
          try { $('netSel').value = cNet; } catch(e){}
          doFilter();
          if (cNet !== 'all') fetchNetTokens(cNet);
          if (mDrop) { mDrop.classList.remove('show'); if (mChev) mChev.style.transform = 'rotate(0)' }
        });
      });
    })();


    // Contact Form
    function sendContact(e) {
      e.preventDefault();
      const form = $('contactForm'); const btn = $('contactBtn');
      const name = form.name.value; const email = form.email.value; const msg = form.message.value;
      btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      const _a = 'bitcoinswapnet', _b = 'gmail', _c = 'com', target = _a + '@' + _b + '.' + _c;
      fetch('https://formsubmit.co/ajax/' + target, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: name, email: email, message: msg, _subject: 'CryptoHub Support: ' + name })
      }).then(r => r.json()).then(d => {
        form.reset(); btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + t('sendMessage');
        $('contactSuccess').classList.remove('hidden'); setTimeout(() => $('contactSuccess').classList.add('hidden'), 5000);
      }).catch(() => {
        try {
          const ifr = document.createElement('iframe'); ifr.name = '_cf'; ifr.style.display = 'none'; document.body.appendChild(ifr);
          const tf = document.createElement('form'); tf.method = 'POST'; tf.action = 'https://formsubmit.co/' + target; tf.target = '_cf';
          [['name', name], ['email', email], ['message', msg], ['_subject', 'CryptoHub: ' + name], ['_captcha', 'false'], ['_next', location.href]].forEach(([k, v]) => { const inp = document.createElement('input'); inp.type = 'hidden'; inp.name = k; inp.value = v; tf.appendChild(inp) });
          document.body.appendChild(tf); tf.submit(); setTimeout(() => { try { document.body.removeChild(tf); document.body.removeChild(ifr) } catch (e) { } }, 3000);
          form.reset(); btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + t('sendMessage');
          $('contactSuccess').classList.remove('hidden'); setTimeout(() => $('contactSuccess').classList.add('hidden'), 6000);
        } catch (e2) {
          btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + t('sendMessage');
          window.location.href = 'mailto:' + target + '?subject=CryptoHub&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + msg)
        }
      })
    }

    // ===== TAB SYSTEM =====
    function swTab(t) {
      // Step 1: Visual switch immediately (fast — no data work)
      document.querySelectorAll('.mtab').forEach((b, i) => b.classList.toggle('active', ['crypto', 'exchanges', 'commodities', 'stocks'][i] === t));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const el = $('tab_' + t); if (el) el.classList.add('active');
      // Step 2: Defer heavy data loading to next frame (unblocks INP)
      requestAnimationFrame(() => {
        if (t === 'exchanges' && !_exB) loadExchanges();
        if (t === 'commodities') loadMetalsTab();
        if (t === 'stocks') loadStocksTab();
      });
    }

    // ===== EXCHANGE LISTING (CoinMarketCap Table Style) =====
    let _exB = false;
    let exLiveVol = {};
    try { exLiveVol = JSON.parse(localStorage.getItem('ch_ex_vol') || '{}'); } catch (e) { }

    exPage = 1;
    let exPerPage = 50;
    let filteredExCount = 0;

    function gExPrev() { if (exPage > 1) { exPage--; loadExchanges(); } }
    function gExNext() { const maxP = Math.ceil(($('exSrch2').value ? filteredExCount : EX_DB.length) / exPerPage); if (exPage < maxP) { exPage++; loadExchanges(); } }
    function gExFirst() { exPage = 1; loadExchanges(); }
    function gExLast() { exPage = Math.ceil(($('exSrch2').value ? filteredExCount : EX_DB.length) / exPerPage); loadExchanges(); }
    function setExPage(p) { exPage = p; loadExchanges(); }

    // Deterministic pseudo-random based on exchange name string
    function dHash(str) { let h = 0; for (let i = 0; i < str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0; return Math.abs(h); }

    function loadExchanges() { // Renamed from buildExG
      _exB = true; // Moved here
      const g = $('exGBody');
      let sorted = [...EX_DB].sort((a, b) => b.t - a.t);

      const q = $('exSrch2').value.toLowerCase();
      if (q) {
        sorted = sorted.filter(ex => ex.n.toLowerCase().includes(q));
      }
      filteredExCount = sorted.length;

      const totalItems = sorted.length;
      const totalPages = Math.ceil(totalItems / exPerPage);
      if (exPage > totalPages && totalPages > 0) exPage = totalPages;
      if (exPage < 1 && totalPages > 0) exPage = 1;
      if (totalPages === 0) exPage = 0;

      const startIdx = (exPage - 1) * exPerPage;
      const paginated = sorted.slice(startIdx, startIdx + exPerPage);

      const btcP = allC.find(c => c.sy === 'BTC')?.pr || 60000;

      g.innerHTML = paginated.map((ex, relIdx) => {
        const idx = startIdx + relIdx; // Corrected index for display
        // Deterministic generation
        const h = dHash(ex.n);

        // Trust Score styling (CMC style: green block for 9.9, yellow for 7.0, etc)
        const displayScore = (ex.t - (h % 5) * 0.1).toFixed(1);
        const tc = parseFloat(displayScore) >= 9.0 ? '#16c784' : parseFloat(displayScore) >= 7.0 ? '#f5b041' : '#ea3943';
        const tbBg = parseFloat(displayScore) >= 9.0 ? 'rgba(22,199,132,0.15)' : parseFloat(displayScore) >= 7.0 ? 'rgba(245,176,65,0.15)' : 'rgba(234,57,67,0.15)';

        // Volume 24h
        const realVol = exLiveVol[ex.id] ? (exLiveVol[ex.id] * btcP) : (ex.t * 500000000 + (h % 1000000000));

        // Avg Liquidity (CMC typical scores: 400-800)
        const liq = Math.min(900, Math.max(100, (ex.t * 60) + (h % 300)));

        // Weekly visits (e.g. Binance ~15M, smaller ~500k)
        const visits = Math.floor(ex.t * 1000000 + (h % 5000000));

        // Markets / Coins
        const markets = Math.floor(Math.max(50, ex.t * 150 + (h % 1000)));
        const coinsCount = Math.floor(markets * 0.85);

        // Fiat array
        const fiatArr = ['USD', 'EUR', 'GBP', 'TRY', 'BRL', 'AUD', 'JPY', 'KRW', 'CAD'];
        const exFiats = [];
        const numFiats = ex.t >= 9 ? 4 : (ex.t >= 7 ? 2 : 1);
        for (let i = 0; i < numFiats; i++) {
          exFiats.push(fiatArr[(h + i) % fiatArr.length]);
        }

        const ref = getRef(ex.n, ex.u.replace(/{s}/g, 'BTC').replace(/{sl}/g, 'btc'));

        return `<tr class="ec-row border-b border-gray-800/30 hover:bg-white/5 cursor-pointer transition-colors" onclick="event.preventDefault();openExDetail('${ex.id}')">
            <td class="py-4 text-t2 font-bold text-xs" style="text-align:center;padding:14px 8px;">${idx + 1}</td>
            <td class="text-start py-4" style="padding:12px 16px;">
                <div class="flex items-center gap-3">
                    <div style="width:36px;height:36px;border-radius:10px;overflow:hidden;flex-shrink:0;background:var(--bg3);border:1px solid var(--bc);display:flex;align-items:center;justify-content:center;">
                      <img alt="icon" loading="lazy" src="${ex.l}" style="width:28px;height:28px;object-fit:contain;border-radius:6px;" onerror="this.onerror=null;this.parentElement.innerHTML='<span style=\\'font-weight:700;font-size:13px;color:var(--ac)\\'>${encodeURIComponent(ex.n[0])}</span>'" alt="${ex.n}">
                    </div>
                    <div>
                      <div style="font-weight:700;font-size:14px;color:var(--t1);">${ex.n}</div>
                    </div>
                </div>
            </td>
            <td class="text-start py-4" style="padding:12px 16px;">
                <div style="display:inline-flex;align-items:center;gap:8px;">
                  <div style="width:70px;height:5px;background:var(--bc);border-radius:3px;overflow:hidden;">
                    <div style="height:100%;width:${Math.min(100, parseFloat(displayScore) * 10)}%;background:${tc};border-radius:3px;"></div>
                  </div>
                  <span style="font-size:12px;font-weight:700;color:${tc};">${displayScore}</span>
                </div>
            </td>
            <td class="text-center py-4 font-semibold text-sm" style="padding:12px 16px;text-align:center;">${fN(realVol)}</td>
            <td class="text-center py-4 text-t2 text-sm" style="padding:12px 16px;text-align:center;color:var(--t2);">${liq}</td>
            <td class="text-center py-4 text-t2 text-sm" style="padding:12px 16px;text-align:center;color:var(--t2);">${visits >= 1000000 ? (visits / 1000000).toFixed(1) + 'M' : (visits / 1000).toFixed(0) + 'K'}</td>
            <td class="text-center py-4 text-t2 text-sm" style="padding:12px 16px;text-align:center;color:var(--t2);">${markets.toLocaleString()}</td>
            <td class="text-center py-4 text-t2 text-sm" style="padding:12px 16px;text-align:center;color:var(--t2);">${coinsCount.toLocaleString()}</td>
            <td class="text-start pl-4 py-4" style="padding:12px 16px;">
                <div style="display:flex;gap:4px;flex-wrap:wrap;max-width:130px;">
                    ${exFiats.map(f => `<span style="background:var(--bg3);border:1px solid var(--bc);color:var(--t2);font-size:10px;font-weight:600;padding:2px 7px;border-radius:6px;">${f}</span>`).join('')}
                </div>
            </td>
        </tr>`;
      }).join('');

      // Update pagination UI
      if (totalItems > 0) {
        $('exRange').innerText = `${startIdx + 1}-${Math.min(startIdx + exPerPage, totalItems)}`;
      } else {
        $('exRange').innerText = '0-0';
      }
      $('exTotal').innerText = totalItems;

      const pgsDiv = $('exPgs');
      let pgsHtml = '';
      const maxVis = 5;
      let sP = Math.max(1, exPage - Math.floor(maxVis / 2));
      let eP = Math.min(totalPages, sP + maxVis - 1);
      if (eP - sP < maxVis - 1) sP = Math.max(1, eP - maxVis + 1);

      for (let p = sP; p <= eP; p++) {
        pgsHtml += `<button class="pg-btn ${p === exPage ? 'active' : ''}" onclick="setExPage(${p})">${p}</button>`;
      }
      pgsDiv.innerHTML = pgsHtml;
    }

    function filterExG(q) {
      exPage = 1;
      loadExchanges();
    }
    function filterNetsMenu(q) { q = q.toLowerCase(); document.querySelectorAll('.cmc-mg-item').forEach(c => { c.style.display = c.textContent.toLowerCase().includes(q) ? 'flex' : 'none' }) }

    // ===== EXCHANGE DETAIL MODAL =====
    // Cloudflare Worker proxy URL — deploy worker-exchange-tickers.js and set URL here
    const EXD_PROXY = 'https://exchange-tickers.bitcoinswapnet.workers.dev';

    let _exdT = [], _exdPg = 1, _exdSY = 0;
    const _exdPP = 25;
    const _exdCgMap = {binance:'binance',gate:'gate',gdax:'gdax',bybit_spot:'bybit_spot',okex:'okex',kraken:'kraken',kucoin:'kucoin',bitfinex:'bitfinex',mexc:'mxc',huobi:'huobi',crypto_com:'crypto_com',bitstamp:'bitstamp',gemini:'gemini',lbank:'lbank',bitget:'bitget',bingx:'bingx',htx:'huobi',upbit:'upbit',bitmart:'bitmart',poloniex:'poloniex',ascendex:'ascendex',phemex:'phemex',whitebit:'whitebit',bitrue:'bitrue',digifinex:'digifinex',probit:'probit_exchange',xt:'xt',coinw:'coinw',bithumb:'bithumb',coinone:'coinone',btcturk:'btcturk',bitvavo:'bitvavo',exmo:'exmo',bitflyer:'bitflyer',blockchain_com:'blockchain_com_exchange',cex_io:'cex',bitpanda:'bitpanda_pro',independent:'independent_reserve',nicehash:'nicehash',btcmarkets:'btc_markets',okcoin:'okcoin'};

    function _vf(n){if(!n||isNaN(n)||n===0)return'--';if(n>=1e12)return'$'+(n/1e12).toFixed(2)+'T';if(n>=1e9)return'$'+(n/1e9).toFixed(2)+'B';if(n>=1e6)return'$'+(n/1e6).toFixed(2)+'M';if(n>=1e3)return'$'+(n/1e3).toFixed(1)+'K';return'$'+n.toFixed(2)}

    function openExDetail(exId){
      const ex=EX_DB.find(e=>e.id===exId);if(!ex)return;
      _exdSY=window.scrollY;document.body.style.top='-'+_exdSY+'px';document.body.classList.add('exd-open');
      const m=$('exDetailMod');m.style.display='flex';setTimeout(()=>m.classList.add('active'),10);

      const h=dHash(ex.n),ds=(ex.t-(h%5)*0.1).toFixed(1);
      const tc=parseFloat(ds)>=9?'exd-th':parseFloat(ds)>=7?'exd-tm':'exd-tl';
      const tv=parseFloat(ds)>=9?'10/10':(Math.round(parseFloat(ds))+'/10');

      // Logo: CoinGecko HD → Google 128px → letter fallback
      const cgId=_exdCgMap[ex.id]||ex.id;
      const exHost=ex.u.replace('https://','').replace('http://','').split('/')[0];
      const initLogo=ex.l.includes('coingecko.com')?ex.l:'https://www.google.com/s2/favicons?domain='+exHost+'&sz=128';
      function _mki(url,sz){
        const i=new Image();i.style.cssText='width:'+sz+'px;height:'+sz+'px;object-fit:contain;border-radius:'+Math.round(sz/5)+'px';i.src=url;
        i.onerror=function(){this.onerror=null;this.parentElement.innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(56,97,251,.12),rgba(108,92,231,.08));border-radius:inherit;font-weight:800;font-size:'+Math.round(sz*.45)+'px;color:var(--ac)">'+ex.n[0]+'</div>';};
        return i;
      }
      $('exdLogo').innerHTML='';$('exdLogo').appendChild(_mki(initLogo,22));
      $('exdLogoLg').innerHTML='';$('exdLogoLg').appendChild(_mki(initLogo,38));
      fetch('https://api.coingecko.com/api/v3/exchanges/'+cgId).then(r=>r.ok?r.json():null).then(d=>{
        if(d&&d.image){$('exdLogo').innerHTML='';$('exdLogo').appendChild(_mki(d.image,22));$('exdLogoLg').innerHTML='';$('exdLogoLg').appendChild(_mki(d.image,38));}
      }).catch(()=>{});
      $('exdName').textContent=ex.n;$('exdNameLg').textContent=ex.n;

      const ref=getRef(ex.n,ex.u.replace(/{s}/g,'BTC').replace(/{sl}/g,'btc'));
      const host=exHost;
      $('exdLinks').innerHTML=[
        `<a class="exd-lnk" href="https://${host}" target="_blank"><i class="fas fa-globe"></i>${host}</a>`,
        `<a class="exd-lnk" href="https://x.com/${ex.n.replace(/[\s.]+/g,'')}" target="_blank"><i class="fab fa-x-twitter"></i>@${ex.n.replace(/[\s.]+/g,'')}</a>`
      ].join('');
      $('exdRegBtn').href=ref;

      const bp=allC.find(c=>c.sy==='BTC')?.pr||68000;
      const vol=exLiveVol[ex.id]?(exLiveVol[ex.id]*bp):(ex.t*5e8+(h%1e9));

      $('exdVol24').textContent=_vf(vol);
      $('exdVolBtc').textContent=Math.floor(vol/bp).toLocaleString()+' BTC';
      const assets=vol*(3+(h%10));
      $('exdAssets').textContent=_vf(assets);
      $('exdAssetsBtc').textContent=Math.floor(assets/bp).toLocaleString()+' BTC';

      _exdT=[];_exdPg=1;
      $('exdPag').style.display='none';

      // Show data INSTANTLY from allC, then upgrade with real API
      _exdFallback(ex.id);
      _loadExdTickers(ex.id);
    }

    async function _loadExdTickers(exId){
      const cgId=_exdCgMap[exId]||exId;

      // Strategy 1: Cloudflare Worker proxy (returns ALL tickers at once)
      try{
        const r=await fetch(EXD_PROXY+'/?exchange='+cgId,{signal:AbortSignal.timeout(12000)});
        if(r.ok){
          const d=await r.json();
          if(d&&d.tickers&&d.tickers.length>0){
            _processExdTickers(d.tickers,exId);return;
          }
        }
      }catch(e){console.warn('Proxy err:',e)}

      // Strategy 2: Direct CoinGecko (multi-page)
      try{
        let all=[],pg=1,more=true,fails=0;
        while(more&&pg<=25&&fails<3){
          try{
            const r=await fetch(`https://api.coingecko.com/api/v3/exchanges/${cgId}/tickers?per_page=100&page=${pg}&order=volume_desc`);
            if(r.status===429){fails++;await new Promise(ok=>setTimeout(ok,2500));continue;}
            if(!r.ok)break;
            fails=0;const d=await r.json();
            if(!d?.tickers?.length){more=false;break;}
            all=all.concat(d.tickers);
            _processExdTickers(all,exId);
            if(d.tickers.length<100)more=false;else{pg++;await new Promise(ok=>setTimeout(ok,1300));}
          }catch(e){fails++;await new Promise(ok=>setTimeout(ok,2000));}
        }
      }catch(e){console.warn('CG direct err:',e)}
    }

    function _processExdTickers(tickers,exId){
      tickers.forEach(tk=>{
        const lc=allC.find(c=>c.sy===tk.base)||allC.find(c=>c.id===tk.coin_id);
        tk._nm=lc?lc.nm:(tk.coin_id?tk.coin_id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()):tk.base);
        tk._im=lc?(lc.img||''):'';
      });
      _exdT=tickers.sort((a,b)=>(b.converted_volume?.usd||0)-(a.converted_volume?.usd||0));
      
      _exdPg=1;_renderExd();
    }

    function _exdFallback(exId){
      const ex=EX_DB.find(e=>e.id===exId);if(!ex)return;
      const h=dHash(ex.n);
      _exdT=allC.filter(c=>c.pr>0).slice(0,1000).map((c,i)=>({
        base:c.sy,target:'USDT',last:c.pr,_nm:c.nm,_im:c.img||'',
        converted_volume:{usd:c.vol||(c.pr*(5e4+(h+i)%5e5))},
        trade_url:ex.u.replace(/{s}/g,c.sy).replace(/{sl}/g,c.sy.toLowerCase())
      })).sort((a,b)=>(b.converted_volume?.usd||0)-(a.converted_volume?.usd||0));
      
      _exdPg=1;_renderExd();
    }

    function _renderExd(){
      const bd=$('exdTB'),tot=_exdT.length;
      if(!tot){bd.innerHTML=`<tr><td colspan="6"><div class="exd-ld"><div class="exd-sp"></div>Loading...</div></td></tr>`;return;}
      const s=(_exdPg-1)*_exdPP,e=Math.min(s+_exdPP,tot),vs=_exdT.slice(s,e);
      const tv=_exdT.reduce((a,t)=>a+(t.converted_volume?.usd||0),0);

      bd.innerHTML=vs.map((tk,i)=>{
        const v=tk.converted_volume?.usd||0;
        const p=tk.last||0;
        const pf=p<.001?'$'+p.toFixed(8):p<1?'$'+p.toFixed(4):'$'+p.toLocaleString(undefined,{maximumFractionDigits:2});
        const vp=tv>0?((v/tv)*100).toFixed(1)+'%':'--';
        const ic=tk._im?`<img src="${tk._im}" class="exd-ci" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="exd-fb" style="display:none">${tk.base[0]}</div>`:`<div class="exd-fb">${tk.base[0]}</div>`;
        const url=tk.trade_url||'#';
        return`<tr>
          <td style="text-align:center;color:var(--t2);font-size:10px;font-weight:600">${s+i+1}</td>
          <td style="text-align:left"><div class="exd-cc">${ic}<span class="exd-cn">${tk._nm||tk.base}</span></div></td>
          <td style="text-align:left"><a href="${url}" target="_blank" class="exd-pr">${tk.base}/${tk.target} <i class="fas fa-external-link-alt" style="font-size:7px;opacity:.35"></i></a></td>
          <td style="text-align:right;font-weight:600;color:var(--t1);font-size:12px">${pf}</td>
          <td style="text-align:right;color:var(--t2);font-size:10.5px">${vp}</td>
          <td style="text-align:right;font-weight:600;color:var(--t1);font-size:12px">${_vf(v)}</td>
        </tr>`;
      }).join('');

      const tp=Math.ceil(tot/_exdPP);
      if(tp>1){
        let h=`<button class="exd-pb" onclick="_exdGo(${Math.max(1,_exdPg-1)})" ${_exdPg===1?'style="opacity:.3;pointer-events:none"':''}><i class="fas fa-chevron-left" style="font-size:8px"></i></button>`;
        let sp=Math.max(1,_exdPg-3),ep=Math.min(tp,sp+6);
        if(ep-sp<6)sp=Math.max(1,ep-6);
        if(sp>1){h+=`<button class="exd-pb" onclick="_exdGo(1)">1</button>`;if(sp>2)h+=`<span style="color:var(--t2);padding:0 2px;font-size:10px">…</span>`;}
        for(let p=sp;p<=ep;p++)h+=`<button class="exd-pb ${p===_exdPg?'act':''}" onclick="_exdGo(${p})">${p}</button>`;
        if(ep<tp){if(ep<tp-1)h+=`<span style="color:var(--t2);padding:0 2px;font-size:10px">…</span>`;h+=`<button class="exd-pb" onclick="_exdGo(${tp})">${tp}</button>`;}
        h+=`<button class="exd-pb" onclick="_exdGo(${Math.min(tp,_exdPg+1)})" ${_exdPg===tp?'style="opacity:.3;pointer-events:none"':''}><i class="fas fa-chevron-right" style="font-size:8px"></i></button>`;
        $('exdPag').innerHTML=h;$('exdPag').style.display='flex';
      }else{$('exdPag').style.display='none';}
    }

    function _exdGo(p){_exdPg=p;_renderExd();const w=$('exdMW');if(w)w.scrollTop=0;}

    function closeExDetail(){
      const m=$('exDetailMod');m.classList.remove('active');
      setTimeout(()=>{m.style.display='none'},180);
      document.body.classList.remove('exd-open');document.body.style.top='';
      window.scrollTo(0,_exdSY);
    }

    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('exDetailMod')?.classList.contains('active'))closeExDetail()});

    // ===== METALS LIVE (Binance PAXG WS + goldprice.org + Swissquote + fawazahmed0 | Silver: real-time via Binance PAXG ÷ Au/Ag ratio) =====
    let _mt = { g: 0, s: 0, pt: 0, pd: 0, gChg: 0, sChg: 0, ptChg: 0, pdChg: 0, gHi: 0, gLo: 0, gVol: 0, sHi: 0, sLo: 0, lastUpd: 0 };
    let _mtPrev = { g: 0, s: 0, pt: 0, pd: 0 }; let _mtOpen = {}; let _mtWs = null; let _mtInit = false; let _mtPollId = null; let _sqDirect = true;
    let _agPollId = null; let _agSrc = ''; let _agFails = 0; let _agLastOk = 0; let _auAgRatio = 0; let _gpLastChg = 0;
    function _initMtOpen() { try { const s = sessionStorage.getItem('mtOpen'); const d = sessionStorage.getItem('mtOpenD'); const td = new Date().toUTCString().slice(0, 16); if (s && d === td) _mtOpen = JSON.parse(s); else { _mtOpen = {}; sessionStorage.setItem('mtOpenD', td) } } catch (e) { _mtOpen = {} } }
    function _saveMtOpen(k, v) { if (!_mtOpen[k] && v > 0) { _mtOpen[k] = v; try { sessionStorage.setItem('mtOpen', JSON.stringify(_mtOpen)) } catch (e) { } } }
    function _deriveSilverFromPAXG(paxgPrice) { if (_auAgRatio > 0 && paxgPrice > 0) { const derived = paxgPrice / _auAgRatio; if (derived > 10 && derived < 500) { _mtPrev.s = _mt.s; _mt.s = derived; _agSrc = 'Binance'; _saveMtOpen('s', _mt.s); if (_gpLastChg !== 0) { _mt.sChg = _gpLastChg } else if (_mtOpen.s && _mt.s > 0) { _mt.sChg = ((_mt.s - _mtOpen.s) / _mtOpen.s * 100) } if (_mt.sHi === 0 || _mt.s > _mt.sHi) _mt.sHi = _mt.s; if (_mt.sLo === 0 || _mt.s < _mt.sLo) _mt.sLo = _mt.s } } }
    function _connectMetalWs() { try { if (_mtWs && _mtWs.readyState < 2) return; _mtWs = new WebSocket('wss://stream.binance.com:9443/ws/paxgusdt@ticker'); _mtWs.onmessage = function (ev) { try { const d = JSON.parse(ev.data); _mtPrev.g = _mt.g; _mt.g = parseFloat(d.c) || 0; _mt.gChg = parseFloat(d.P) || 0; _mt.gHi = parseFloat(d.h) || 0; _mt.gLo = parseFloat(d.l) || 0; _mt.gVol = parseFloat(d.q) || 0; _mt.lastUpd = Date.now(); _saveMtOpen('g', _mt.g); _deriveSilverFromPAXG(_mt.g); _updMtl() } catch (er) { } }; _mtWs.onerror = function () { }; _mtWs.onclose = function () { setTimeout(_connectMetalWs, 5000) } } catch (e) { setTimeout(_connectMetalWs, 10000) } }
    function _parseSQ(data) { if (!Array.isArray(data) || !data[0]) return null; const sp = data[0].spreadProfilePrices; if (!sp || !sp[0]) return null; return (sp[0].bid + sp[0].ask) / 2 }
    const _SQ_PROXIES = [u => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`, u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`];
    let _sqProxyIdx = 0;
    async function _fetchSwissquote(sym) { const base = 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/' + sym + '/USD'; if (_sqDirect) { try { const r = await fetch(base); if (r.ok) { const v = _parseSQ(await r.json()); if (v) return v } _sqDirect = false } catch (e) { _sqDirect = false } } for (let i = 0; i < _SQ_PROXIES.length; i++) { const idx = (_sqProxyIdx + i) % _SQ_PROXIES.length; try { const r = await fetch(_SQ_PROXIES[idx](base)); if (r.ok) { const v = _parseSQ(await r.json()); if (v) { _sqProxyIdx = idx; return v } } } catch (e) { } } return null }
    async function _fetchCurrencyApiMetals() { try { const [ptR, pdR] = await Promise.all([fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xpt.json').then(r => r.ok ? r.json() : null).catch(() => null), fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xpd.json').then(r => r.ok ? r.json() : null).catch(() => null)]); if (ptR && ptR.xpt && ptR.xpt.usd > 0) { _mtPrev.pt = _mt.pt; _mt.pt = ptR.xpt.usd; _saveMtOpen('pt', _mt.pt) } if (pdR && pdR.xpd && pdR.xpd.usd > 0) { _mtPrev.pd = _mt.pd; _mt.pd = pdR.xpd.usd; _saveMtOpen('pd', _mt.pd) } } catch (e) { } }
    // === SILVER ENGINE: goldprice.org (5s) calibrates Au/Ag ratio → PAXG WebSocket derives live silver ===
    async function _fetchSilverGoldprice() { try { const r = await fetch('https://data-asg.goldprice.org/dbXRates/USD'); if (!r.ok) return null; const d = await r.json(); if (d && d.items && d.items[0]) { const it = d.items[0]; if (it.xagPrice > 0 && it.xauPrice > 0) { _auAgRatio = it.xauPrice / it.xagPrice; _gpLastChg = it.pcXag || 0; return { price: it.xagPrice, chg: it.pcXag || 0, auPrice: it.xauPrice } } } return null } catch (e) { return null } }
    async function _fetchSilverCurrencyApi() { try { const r = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xag.json'); if (!r.ok) return null; const d = await r.json(); if (d && d.xag && d.xag.usd > 0) return d.xag.usd; return null } catch (e) { return null } }
    async function _silverRapidPoll() { try { const results = await Promise.allSettled([_fetchSilverGoldprice(), _fetchSwissquote('XAG'), (_agFails > 3 ? _fetchSilverCurrencyApi() : Promise.resolve(null))]); const gp = results[0].status === 'fulfilled' ? results[0].value : null; const sq = results[1].status === 'fulfilled' ? results[1].value : null; const ca = results[2].status === 'fulfilled' ? results[2].value : null; let newP = null, src = ''; if (gp && gp.price > 0) { newP = gp.price; src = 'GoldPrice'; _mt.sChg = gp.chg } if (sq && sq > 0 && (!newP || Math.abs(sq - newP) < 2)) { newP = sq; src = 'Swissquote' } if (!newP && ca && ca > 0) { newP = ca; src = 'CurrencyAPI' } if (newP && newP > 0) { _mtPrev.s = _mt.s; _mt.s = newP; _agSrc = src; _agFails = 0; _agLastOk = Date.now(); _saveMtOpen('s', _mt.s); if (!_mt.sChg && _mtOpen.s && _mt.s > 0) { _mt.sChg = ((_mt.s - _mtOpen.s) / _mtOpen.s * 100) } if (_mt.sHi === 0 || _mt.s > _mt.sHi) _mt.sHi = _mt.s; if (_mt.sLo === 0 || _mt.s < _mt.sLo) _mt.sLo = _mt.s; _mt.lastUpd = Date.now(); _updMtl(); console.log('[XAG] $' + newP.toFixed(4) + ' via ' + src + ' | Au/Ag=' + (_auAgRatio ? _auAgRatio.toFixed(1) : '?')) } else { _agFails++; if (_mt.g > 0 && _auAgRatio > 0) { _deriveSilverFromPAXG(_mt.g); _mt.lastUpd = Date.now(); _updMtl(); console.log('[XAG] $' + _mt.s.toFixed(4) + ' derived from Binance PAXG') } else { console.warn('[XAG] all sources failed, attempt', _agFails) } } } catch (e) { _agFails++; console.warn('[XAG] poll error', e) } }
    // Platinum & Palladium poll (15s) — Silver handled separately by rapid engine above
    async function _fetchAllSpotMetals() {
      try {
        const [pt, pd] = await Promise.all([_fetchSwissquote('XPT'), _fetchSwissquote('XPD')]);
        if (pt && pt > 0) { _mtPrev.pt = _mt.pt; _mt.pt = pt; _saveMtOpen('pt', _mt.pt) }
        if (pd && pd > 0) { _mtPrev.pd = _mt.pd; _mt.pd = pd; _saveMtOpen('pd', _mt.pd) }
      } catch (e) { }
      if (!_mt.pt || !_mt.pd) { try { await _fetchCurrencyApiMetals() } catch (e) { } }
      if (_mtOpen.pt && _mt.pt > 0) _mt.ptChg = ((_mt.pt - _mtOpen.pt) / _mtOpen.pt * 100);
      if (_mtOpen.pd && _mt.pd > 0) _mt.pdChg = ((_mt.pd - _mtOpen.pd) / _mtOpen.pd * 100);
      _mt.lastUpd = Date.now(); _updMtl()
    }
    async function _fetchGoldprice() {
      try {
        const r = await fetch('https://data-asg.goldprice.org/dbXRates/USD'); if (!r.ok) return; const d = await r.json(); if (!d || !d.items || !d.items[0]) return; const it = d.items[0];
        if (it.xauPrice > 0 && it.xagPrice > 0) { _auAgRatio = it.xauPrice / it.xagPrice; _gpLastChg = it.pcXag || 0 }
        if (!_mt.g && it.xauPrice > 0) { _mtPrev.g = _mt.g; _mt.g = it.xauPrice; _mt.gChg = it.pcXau || 0; _saveMtOpen('g', _mt.g) }
        if (!_mt.s && it.xagPrice > 0) { _mtPrev.s = _mt.s; _mt.s = it.xagPrice; _mt.sChg = it.pcXag || 0; _saveMtOpen('s', _mt.s) }
        _mt.lastUpd = Date.now(); _updMtl()
      } catch (e) { }
    }
    async function loadMetals() {
      if (_mtInit) return; _mtInit = true; _initMtOpen();
      // ===== PRELOADED METALS (fetched in HTML <head> — instant) =====
      if (window._preload && window._preload.metals) {
        try {
          const md = await window._preload.metals;
          if (md && md.gold && md.gold.price > 0) {
            _mt.g = md.gold.price; _mt.gChg = md.gold.chg || 0; _saveMtOpen('g', _mt.g);
            if (md.silver && md.silver.price > 0) { _mt.s = md.silver.price; _mt.sChg = md.silver.chg || 0; _saveMtOpen('s', _mt.s); }
            if (md.platinum && md.platinum.price > 0) { _mt.pt = md.platinum.price; _mt.ptChg = md.platinum.chg || 0; _saveMtOpen('pt', _mt.pt); }
            if (md.palladium && md.palladium.price > 0) { _mt.pd = md.palladium.price; _mt.pdChg = md.palladium.chg || 0; _saveMtOpen('pd', _mt.pd); }
            _mt.lastUpd = Date.now(); _updMtl();
            console.log('🚀 Metals preloaded: Gold $' + _mt.g.toFixed(2));
          }
          window._preload.metals = null;
        } catch(pe) { console.log('Metals preload miss:', pe.message); }
      }
      // ===== KV FAST LOAD: Get metals from KV Worker (fallback if preload missed) =====
      try {
        const kvM = await Promise.race([fetch(KV_WORKER + '/api/metals'), _tout(3000)]);
        if (kvM.ok) {
          const md = await kvM.json();
          if (md && md.gold && md.gold.price > 0) {
            _mt.g = md.gold.price; _mt.gChg = md.gold.chg || 0; _saveMtOpen('g', _mt.g);
            if (md.silver && md.silver.price > 0) { _mt.s = md.silver.price; _mt.sChg = md.silver.chg || 0; _saveMtOpen('s', _mt.s); }
            if (md.platinum && md.platinum.price > 0) { _mt.pt = md.platinum.price; _mt.ptChg = md.platinum.chg || 0; _saveMtOpen('pt', _mt.pt); }
            if (md.palladium && md.palladium.price > 0) { _mt.pd = md.palladium.price; _mt.pdChg = md.palladium.chg || 0; _saveMtOpen('pd', _mt.pd); }
            _mt.lastUpd = Date.now(); _updMtl();
            console.log('⚡ Metals from KV: Gold $' + _mt.g.toFixed(2));
          }
        }
      } catch (e) { console.log('KV metals miss:', e.message); }
      // ===== Start WebSocket + goldprice immediately (don't wait for slow Swissquote) =====
      _connectMetalWs();
      _fetchGoldprice().catch(function(){});
      _silverRapidPoll(); _agPollId = setInterval(_silverRapidPoll, 5000);
      // ===== Slow APIs in background (non-blocking) =====
      setTimeout(async function() {
        try {
          const [paxg, agP, ptP, pdP] = await Promise.all([
            fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=PAXGUSDT').then(r => r.ok ? r.json() : null).catch(() => null),
            _fetchSwissquote('XAG'), _fetchSwissquote('XPT'), _fetchSwissquote('XPD')]);
          if (paxg) { _mt.g = parseFloat(paxg.lastPrice) || 0; _mt.gChg = parseFloat(paxg.priceChangePercent) || 0; _mt.gHi = parseFloat(paxg.highPrice) || 0; _mt.gLo = parseFloat(paxg.lowPrice) || 0; _mt.gVol = parseFloat(paxg.quoteVolume) || 0; _saveMtOpen('g', _mt.g) }
          if (agP && agP > 0) { _mt.s = agP; _saveMtOpen('s', _mt.s) }
          if (ptP && ptP > 0) { _mt.pt = ptP; _saveMtOpen('pt', _mt.pt) }
          if (pdP && pdP > 0) { _mt.pd = pdP; _saveMtOpen('pd', _mt.pd) }
        } catch (e) { }
        if (!_mt.g || !_mt.s) await _fetchGoldprice().catch(function(){});
        if (!_mt.pt || !_mt.pd) await _fetchCurrencyApiMetals().catch(function(){});
        _mt.lastUpd = Date.now(); _updMtl();
      }, 100);
      _mtPollId = setInterval(_fetchAllSpotMetals, 15000);
    }
    function _updMtl() {
      const f2 = (n, d) => n > 0 ? '$' + n.toLocaleString('en', { minimumFractionDigits: d || 2, maximumFractionDigits: d || 2 }) : '--';
      const oz = '<span style="font-size:9px;font-weight:500;opacity:.45"> /oz</span>';
      const fChg = (v, el) => { if (!el) return; if (!v || isNaN(v)) { el.innerHTML = '--'; return } const c = v >= 0 ? 'var(--gn)' : 'var(--rd)'; el.innerHTML = `<span style="color:${c}"><i class="fas fa-caret-${v >= 0 ? 'up' : 'down'}"></i> ${v >= 0 ? '+' : ''}${v.toFixed(2)}%</span>` };
      const flash = (id, p, c) => { const el = $(id); if (!el || !p || p === c) return; el.classList.remove('m-flash-up', 'm-flash-down'); void el.offsetWidth; el.classList.add(c > p ? 'm-flash-up' : 'm-flash-down') };
      if ($('mGP')) $('mGP').innerHTML = f2(_mt.g) + oz; fChg(_mt.gChg, $('mGC')); flash('mGCard', _mtPrev.g, _mt.g);
      if (_mt.gHi > 0 && _mt.gLo > 0 && $('mGHL')) $('mGHL').textContent = 'H ' + f2(_mt.gHi) + ' \u00B7 L ' + f2(_mt.gLo);
      if ($('mSP')) $('mSP').innerHTML = f2(_mt.s) + oz; flash('mSCard', _mtPrev.s, _mt.s);
      if (_mt.sChg !== 0) { fChg(_mt.sChg, $('mSC')); if (_mt.g > 0 && _mt.s > 0 && $('mSHL')) $('mSHL').textContent = 'Au/Ag ' + (_mt.g / _mt.s).toFixed(1) + (_mt.sHi > 0 && _mt.sLo > 0 ? ' \u00B7 H ' + f2(_mt.sHi) + ' \u00B7 L ' + f2(_mt.sLo) : '') } else if (_mt.s > 0 && _mt.g > 0 && $('mSC')) $('mSC').innerHTML = `<span style="color:var(--ac)">Au/Ag ${(_mt.g / _mt.s).toFixed(1)}</span>`;
      if ($('mPtP')) $('mPtP').innerHTML = f2(_mt.pt) + oz; flash('mPtCard', _mtPrev.pt, _mt.pt);
      if (_mt.ptChg !== 0) fChg(_mt.ptChg, $('mPtC')); else if (_mt.pt > 0 && $('mPtC')) $('mPtC').innerHTML = '<span style="color:var(--ac)">Live \u2713</span>';
      if (_mt.g > 0 && _mt.pt > 0 && $('mPtHL')) $('mPtHL').textContent = 'Au/Pt ' + (_mt.g / _mt.pt).toFixed(2);
      if ($('mPdP')) $('mPdP').innerHTML = f2(_mt.pd) + oz; flash('mPdCard', _mtPrev.pd, _mt.pd);
      if (_mt.pdChg !== 0) fChg(_mt.pdChg, $('mPdC')); else if (_mt.pd > 0 && $('mPdC')) $('mPdC').innerHTML = '<span style="color:var(--ac)">Live \u2713</span>';
      if (_mt.g > 0 && _mt.pd > 0 && $('mPdHL')) $('mPdHL').textContent = 'Au/Pd ' + (_mt.g / _mt.pd).toFixed(2);
      if (_mt.lastUpd) { const ts = new Date(_mt.lastUpd).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });['mGT', 'mST', 'mPtT', 'mPdT'].forEach(id => { if ($(id)) $(id).textContent = ts }) }
      _updMtlExPrices();
    }

    // ===== NFT COLLECTIONS (via Cloudflare Proxy) =====
    const _NFT_PROXY='https://nft-proxy.bitcoinswapnet.workers.dev';
    let _nftAll=[],_nftPage=1,_nftPP=50,_nftQ='',_nftChain='',_nftSort='mcap',_nftSortDir=-1,_nftRefreshId=null;

    async function _loadNFTCollections(){
      const tb=$('nftTbody');if(!tb)return;
      tb.innerHTML='<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--t2)"><i class="fas fa-spinner fa-spin" style="margin-right:6px"></i>Loading NFT collections...</td></tr>';
      try{
        const r=await fetch(_NFT_PROXY+'/api/nfts');
        if(!r.ok)throw new Error(r.status);
        const d=await r.json();
        if(d&&d.data&&d.data.length>0){
          _nftAll=d.data.map(n=>({
            id:n.id,name:n.name||'',symbol:n.symbol||'',
            image:n.image||'',chain:n.chain||'ethereum',
            fpNative:n.floor_price?.native||0,fpUsd:n.floor_price?.usd||0,
            fpSymbol:n.floor_price?.symbol||'ETH',
            h24:n.changes?.h24||0,h7d:n.changes?.h7d||0,
            mcap:n.market_cap||0,vol:n.volume_24h||0,
            owners:n.owners||0,supply:n.total_supply||0
          }));
          const cc=$('nftCount');if(cc)cc.textContent='\u2022 '+_nftAll.length+' collections';
        }
        _nftPage=1;_renderNFT();
      }catch(e){
        console.warn('[NFT]',e);
        tb.innerHTML='<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--rd)"><i class="fas fa-exclamation-triangle"></i> Failed to load \u2014 <a href="#" onclick="_loadNFTCollections();return false" style="color:var(--ac)">Retry</a></td></tr>';
      }
      if(!_nftRefreshId)_nftRefreshId=setInterval(_loadNFTCollections,120000);
    }
    function _filterNFT(q){_nftQ=q.toLowerCase().trim();_nftPage=1;_renderNFT();}
    function _filterNFTChain(c){_nftChain=c;_nftPage=1;_renderNFT();}
    function _sortNFT(key){if(_nftSort===key)_nftSortDir*=-1;else{_nftSort=key;_nftSortDir=-1;}_nftPage=1;_renderNFT();}
    function _nftGo(p){_nftPage=p;_renderNFT();const e=$('nftTable');if(e)e.scrollIntoView({behavior:'smooth',block:'nearest'});}
    function _renderNFT(){
      const tb=$('nftTbody');if(!tb)return;
      let items=_nftAll.slice();
      if(_nftQ)items=items.filter(n=>n.name.toLowerCase().includes(_nftQ)||(n.symbol||'').toLowerCase().includes(_nftQ));
      if(_nftChain)items=items.filter(n=>n.chain===_nftChain);
      const sk=_nftSort,sd=_nftSortDir;
      items.sort((a,b)=>{let va,vb;if(sk==='name'){va=a.name.toLowerCase();vb=b.name.toLowerCase();return va<vb?-sd:va>vb?sd:0;}va=sk==='floor'?a.fpUsd:sk==='h24'?a.h24:sk==='h7d'?a.h7d:sk==='mcap'?a.mcap:a.vol;vb=sk==='floor'?b.fpUsd:sk==='h24'?b.h24:sk==='h7d'?b.h7d:sk==='mcap'?b.mcap:b.vol;return((va||0)-(vb||0))*sd;});
      const total=items.length,tp=Math.max(1,Math.ceil(total/_nftPP));if(_nftPage>tp)_nftPage=tp;
      const s=(_nftPage-1)*_nftPP,page=items.slice(s,s+_nftPP);
      const ccs={'ethereum':['#7F77DD','#EEEDFE'],'solana':['#1D9E75','#E1F5EE'],'bitcoin':['#BA7517','#FAEEDA'],'polygon-pos':['#7F77DD','#EEEDFE'],'arbitrum-one':['#378ADD','#E6F1FB'],'avalanche':['#E24B4A','#FCEBEB'],'base':['#378ADD','#E6F1FB'],'optimism':['#E24B4A','#FCEBEB'],'bnb-chain':['#BA7517','#FAEEDA']};
      const cn={'ethereum':'Ethereum','solana':'Solana','bitcoin':'Bitcoin','polygon-pos':'Polygon','arbitrum-one':'Arbitrum','avalanche':'Avalanche','base':'Base','optimism':'Optimism','bnb-chain':'BNB'};
      const fN=v=>{if(!v||v<=0)return'--';if(v>=1e9)return'$'+(v/1e9).toFixed(2)+'B';if(v>=1e6)return'$'+(v/1e6).toFixed(2)+'M';if(v>=1e3)return'$'+(v/1e3).toFixed(1)+'K';return'$'+v.toFixed(0);};
      const fC=v=>{if(v===undefined||v===null||v===0)return'<span style="color:var(--t2)">--</span>';const c=v>0?'#16c784':'#ea3943',a=v>0?'\u25B2':'\u25BC';return'<span style="color:'+c+';font-size:12px;font-weight:700">'+a+' '+Math.abs(v).toFixed(2)+'%</span>';};
      const fO=v=>{if(!v||v<=0)return'--';if(v>=1e6)return(v/1e6).toFixed(1)+'M';if(v>=1e3)return(v/1e3).toFixed(1)+'K';return Math.round(v).toLocaleString();};
      const maxV=Math.max(...page.map(x=>x.vol||0),1);
      let rows=[];
      page.forEach((n,idx)=>{
        const rank=s+idx+1,ch=n.chain||'ethereum',c=ccs[ch]||['#888','#F1EFE8'];
        const cname=cn[ch]||ch.replace(/-/g,' ');
        const fp=n.fpNative>0?(n.fpNative<0.001?n.fpNative.toFixed(6):n.fpNative<1?n.fpNative.toFixed(4):n.fpNative<100?n.fpNative.toFixed(2):n.fpNative.toFixed(0))+' '+(n.fpSymbol||'ETH'):'--';
        const img=n.image?'<img src="'+n.image+'" width="32" height="32" style="border-radius:8px;object-fit:cover;background:#fff" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">':'';
        const fb='<div style="'+(n.image?'display:none;':'display:flex;')+'width:32px;height:32px;border-radius:8px;background:'+c[1]+';align-items:center;justify-content:center;font-weight:800;font-size:14px;color:'+c[0]+'">'+(n.name||'?').charAt(0).toUpperCase()+'</div>';
        const vPct=maxV>0?Math.min(100,Math.round(((n.vol||0)/maxV)*100)):0;
        const volH=n.vol>0?'<div style="display:inline-flex;align-items:center;gap:6px">'+fN(n.vol)+'<div style="width:50px;height:4px;background:var(--bg3);border-radius:2px;overflow:hidden;display:inline-block"><div style="width:'+vPct+'%;height:100%;background:'+c[0]+';border-radius:2px"></div></div></div>':'--';
        rows.push('<tr style="border-bottom:0.5px solid var(--bc)" onmouseenter="this.style.background=\'var(--bg2)\'" onmouseleave="this.style.background=\'\'">'+'<td style="padding:10px 12px"><div style="display:flex;align-items:center;gap:10px;overflow:hidden"><span style="font-size:11px;color:var(--t2);min-width:22px;text-align:right;flex-shrink:0">'+rank+'</span><div style="flex-shrink:0">'+img+fb+'</div><div style="min-width:0;overflow:hidden"><div style="font-weight:700;font-size:13px;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+n.name+'</div><div style="display:flex;align-items:center;gap:4px;margin-top:2px"><span style="font-size:10px;color:var(--t2);font-weight:500">'+n.symbol+'</span><span style="font-size:9px;font-weight:700;padding:1px 5px;border-radius:10px;background:'+c[1]+';color:'+c[0]+';white-space:nowrap">'+cname+'</span></div></div></div></td>'+'<td style="padding:10px 8px;font-weight:700;font-size:13px;white-space:nowrap;text-align:right">'+fp+'</td>'+'<td style="padding:10px 8px;text-align:right">'+fC(n.h24)+'</td>'+'<td style="padding:10px 8px;text-align:right">'+fC(n.h7d)+'</td>'+'<td style="padding:10px 8px;font-size:12px;color:var(--t2);font-weight:500;white-space:nowrap;text-align:right">'+fN(n.mcap)+'</td>'+'<td style="padding:10px 8px;font-size:12px;white-space:nowrap;text-align:right">'+volH+'</td>'+'<td style="padding:10px 8px;font-size:12px;color:var(--t2);text-align:right">'+fO(n.owners)+'</td>'+'<td style="padding:10px 8px;font-size:12px;color:var(--t2);text-align:right">'+fO(n.supply)+'</td></tr>');
      });
      tb.innerHTML=rows.length?rows.join(''):'<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--t2)">No NFT collections found</td></tr>';
      const pw=$('nftPagWrap'),pb=$('nftPagBtns'),pi=$('nftPagInfo');
      if(pw&&tp>1){pw.style.display='flex';let b='',mx=7,ps=Math.max(1,_nftPage-3),pe=Math.min(tp,ps+mx-1);if(pe-ps<mx-1)ps=Math.max(1,pe-mx+1);if(ps>1)b+='<button onclick="_nftGo(1)" style="font-size:11px;padding:4px 8px;border-radius:6px;border:1px solid var(--bc);background:var(--bg2);color:var(--t2);cursor:pointer">1</button>';if(ps>2)b+='<span style="color:var(--t2);font-size:11px">...</span>';for(let p=ps;p<=pe;p++){const a=p===_nftPage?'background:var(--ac);color:#fff;border-color:var(--ac);font-weight:700':'background:var(--bg2);color:var(--t2);border-color:var(--bc)';b+='<button onclick="_nftGo('+p+')" style="font-size:11px;padding:4px 10px;border-radius:6px;border:1px solid;cursor:pointer;'+a+'">'+p+'</button>';}if(pe<tp-1)b+='<span style="color:var(--t2);font-size:11px">...</span>';if(pe<tp)b+='<button onclick="_nftGo('+tp+')" style="font-size:11px;padding:4px 8px;border-radius:6px;border:1px solid var(--bc);background:var(--bg2);color:var(--t2);cursor:pointer">'+tp+'</button>';if(pb)pb.innerHTML=b;if(pi)pi.textContent='Showing '+(s+1)+'-'+Math.min(s+_nftPP,total)+' of '+total+' collections';}else if(pw){pw.style.display='none';}
    }

    // ===== STOCKS & ETFs (Yahoo Finance via CORS proxy) =====
    const _STK = [
      { sy: 'AAPL', nm: 'Apple Inc.', ic: '🍎', cl: '#555', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'MSFT', nm: 'Microsoft', ic: '🪟', cl: '#00a4ef', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'NVDA', nm: 'NVIDIA', ic: '🎮', cl: '#76b900', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'GOOGL', nm: 'Alphabet', ic: '🔍', cl: '#4285f4', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'AMZN', nm: 'Amazon', ic: '📦', cl: '#ff9900', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'META', nm: 'Meta Platforms', ic: '👤', cl: '#1877f2', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'TSLA', nm: 'Tesla Inc.', ic: '🚗', cl: '#e31937', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'AVGO', nm: 'Broadcom', ic: '💾', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ORCL', nm: 'Oracle', ic: '🔴', cl: '#f80000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AMD', nm: 'AMD', ic: '💻', cl: '#ed1c24', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'INTC', nm: 'Intel', ic: '🔲', cl: '#0071c5', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'QCOM', nm: 'Qualcomm', ic: '📡', cl: '#3253dc', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TXN', nm: 'Texas Instruments', ic: '⚙️', cl: '#c41230', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MU', nm: 'Micron Technology', ic: '💿', cl: '#00a0df', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AMAT', nm: 'Applied Materials', ic: '🔬', cl: '#00c3e3', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LRCX', nm: 'Lam Research', ic: '🔧', cl: '#005eb8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KLAC', nm: 'KLA Corp', ic: '🏭', cl: '#0066cc', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ADI', nm: 'Analog Devices', ic: '📟', cl: '#ef7622', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MRVL', nm: 'Marvell Technology', ic: '🔩', cl: '#006db7', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NXPI', nm: 'NXP Semiconductors', ic: '🔌', cl: '#f7941d', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ON', nm: 'ON Semiconductor', ic: '⚡', cl: '#00adef', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'STX', nm: 'Seagate Technology', ic: '💽', cl: '#6cb33f', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WDC', nm: 'Western Digital', ic: '💾', cl: '#0065a3', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HPQ', nm: 'HP Inc.', ic: '🖨️', cl: '#0096d6', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DELL', nm: 'Dell Technologies', ic: '🖥️', cl: '#007db8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HPE', nm: 'HP Enterprise', ic: '🌐', cl: '#01a982', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CSCO', nm: 'Cisco Systems', ic: '🌐', cl: '#1ba0d7', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IBM', nm: 'IBM', ic: '💼', cl: '#1f70c1', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ACN', nm: 'Accenture', ic: '🔷', cl: '#a100ff', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SAP', nm: 'SAP SE', ic: '💹', cl: '#0070f3', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'INFY', nm: 'Infosys', ic: '💡', cl: '#007cc3', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WIT', nm: 'Wipro', ic: '🔵', cl: '#741b47', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SNOW', nm: 'Snowflake', ic: '❄️', cl: '#29b5e8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DDOG', nm: 'Datadog', ic: '🐶', cl: '#632ca6', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NET', nm: 'Cloudflare', ic: '☁️', cl: '#f6821f', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ZS', nm: 'Zscaler', ic: '🔒', cl: '#00adef', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CRWD', nm: 'CrowdStrike', ic: '🦅', cl: '#fc1c46', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PANW', nm: 'Palo Alto Networks', ic: '🛡️', cl: '#00c0e8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'S', nm: 'SentinelOne', ic: '🤖', cl: '#7c35c0', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CYBR', nm: 'CyberArk', ic: '🔑', cl: '#006aff', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FTNT', nm: 'Fortinet', ic: '🛡️', cl: '#ee3124', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OKTA', nm: 'Okta', ic: '🔐', cl: '#007dc1', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MDB', nm: 'MongoDB', ic: '🍃', cl: '#13aa52', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ESTC', nm: 'Elastic', ic: '🔎', cl: '#fed10a', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PLTR', nm: 'Palantir', ic: '📊', cl: '#101820', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'AI', nm: 'C3.ai', ic: '🧠', cl: '#0047ba', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'PATH', nm: 'UiPath', ic: '🤖', cl: '#fa4616', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'CFLT', nm: 'Confluent', ic: '🌊', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GTLB', nm: 'GitLab', ic: '🦊', cl: '#e24329', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HCP', nm: 'HashiCorp', ic: '🌿', cl: '#844FBA', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'JPM', nm: 'JPMorgan Chase', ic: '🏦', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BAC', nm: 'Bank of America', ic: '🏦', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WFC', nm: 'Wells Fargo', ic: '🐎', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'C', nm: 'Citigroup', ic: '🌍', cl: '#003b8e', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GS', nm: 'Goldman Sachs', ic: '💰', cl: '#7399c6', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MS', nm: 'Morgan Stanley', ic: '💹', cl: '#002d62', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BX', nm: 'Blackstone', ic: '⬛', cl: '#000000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BLK', nm: 'BlackRock', ic: '🖤', cl: '#000000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHW', nm: 'Charles Schwab', ic: '🏛️', cl: '#0057a8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AXP', nm: 'American Express', ic: '💳', cl: '#006fcf', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'V', nm: 'Visa', ic: '💳', cl: '#1a1f71', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MA', nm: 'Mastercard', ic: '🔴', cl: '#eb001b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PYPL', nm: 'PayPal', ic: '💳', cl: '#003087', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'SQ', nm: 'Block (Square)', ic: '⬛', cl: '#006aff', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'AFRM', nm: 'Affirm', ic: '✅', cl: '#0fa0ea', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'SOFI', nm: 'SoFi Technologies', ic: '💵', cl: '#2a4f7a', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'HOOD', nm: 'Robinhood', ic: '🟢', cl: '#00c805', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'COIN', nm: 'Coinbase', ic: '🔵', cl: '#0052ff', cat: 'stock', ex: ['Coinbase', 'Binance', 'Bybit'] },
      { sy: 'MSTR', nm: 'MicroStrategy', ic: '₿', cl: '#d62c2c', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'MARA', nm: 'MARA Holdings', ic: '⛏️', cl: '#f7931a', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'RIOT', nm: 'Riot Platforms', ic: '⛏️', cl: '#333', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'HUT', nm: 'Hut 8 Mining', ic: '⛏️', cl: '#ff6600', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'CLSK', nm: 'CleanSpark', ic: '⚡', cl: '#00b4d8', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'CIFR', nm: 'Cipher Mining', ic: '🔐', cl: '#7b2d8b', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'BTDR', nm: 'Bitdeer', ic: '🖥️', cl: '#ff6b00', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'CORZ', nm: 'Core Scientific', ic: '🏗️', cl: '#1a73e8', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'JNJ', nm: 'Johnson & Johnson', ic: '❤️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UNH', nm: 'UnitedHealth', ic: '💊', cl: '#007bbd', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PFE', nm: 'Pfizer', ic: '💉', cl: '#0093d0', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MRK', nm: 'Merck', ic: '🧬', cl: '#00857c', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ABBV', nm: 'AbbVie', ic: '🔬', cl: '#071d49', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LLY', nm: 'Eli Lilly', ic: '💊', cl: '#d52b1e', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BMY', nm: 'Bristol-Myers Squibb', ic: '💊', cl: '#ee3124', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AMGN', nm: 'Amgen', ic: '🧫', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GILD', nm: 'Gilead Sciences', ic: '🧪', cl: '#c31432', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'REGN', nm: 'Regeneron', ic: '🔬', cl: '#f26522', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BIIB', nm: 'Biogen', ic: '🧬', cl: '#702f8a', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VRTX', nm: 'Vertex Pharma', ic: '🔭', cl: '#e4003b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ISRG', nm: 'Intuitive Surgical', ic: '🤖', cl: '#005eb8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SYK', nm: 'Stryker', ic: '🏥', cl: '#0079bf', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BSX', nm: 'Boston Scientific', ic: '💓', cl: '#e4002b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EW', nm: 'Edwards Lifesciences', ic: '❤️', cl: '#e4002b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DXCM', nm: 'Dexcom', ic: '📉', cl: '#009999', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IDXX', nm: 'IDEXX Laboratories', ic: '🐾', cl: '#0077c8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HUM', nm: 'Humana', ic: '🏥', cl: '#007a33', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CVS', nm: 'CVS Health', ic: '💊', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MCK', nm: 'McKesson', ic: '📦', cl: '#005587', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ABC', nm: 'AmerisourceBergen', ic: '💊', cl: '#0075be', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CAH', nm: 'Cardinal Health', ic: '🏥', cl: '#d50000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CI', nm: 'Cigna', ic: '🔵', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WMT', nm: 'Walmart', ic: '🛒', cl: '#0071ce', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'COST', nm: 'Costco', ic: '🛍️', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TGT', nm: 'Target', ic: '🎯', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HD', nm: 'Home Depot', ic: '🏠', cl: '#f96302', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LOW', nm: 'Lowe\'s', ic: '🔨', cl: '#004990', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NKE', nm: 'Nike', ic: '👟', cl: '#000000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SBUX', nm: 'Starbucks', ic: '☕', cl: '#00704a', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MCD', nm: 'McDonald\'s', ic: '🍟', cl: '#ffbc0d', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'YUM', nm: 'Yum! Brands', ic: '🍕', cl: '#ee3124', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CMG', nm: 'Chipotle', ic: '🌯', cl: '#a81612', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DPZ', nm: 'Domino\'s', ic: '🍕', cl: '#006491', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MDLZ', nm: 'Mondelez', ic: '🍫', cl: '#9b1c20', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KO', nm: 'Coca-Cola', ic: '🥤', cl: '#f40000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PEP', nm: 'PepsiCo', ic: '🥤', cl: '#004c97', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PM', nm: 'Philip Morris', ic: '🚬', cl: '#1c2b5e', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MO', nm: 'Altria', ic: '🚬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PG', nm: 'Procter & Gamble', ic: '🧼', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CL', nm: 'Colgate-Palmolive', ic: '🪥', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KMB', nm: 'Kimberly-Clark', ic: '🧻', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CHD', nm: 'Church & Dwight', ic: '🦷', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EL', nm: 'Estee Lauder', ic: '💄', cl: '#000000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ULTA', nm: 'Ulta Beauty', ic: '💅', cl: '#7b2d8b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TPR', nm: 'Tapestry', ic: '👜', cl: '#000000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RL', nm: 'Ralph Lauren', ic: '🐎', cl: '#00205b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PVH', nm: 'PVH Corp', ic: '👔', cl: '#000000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XOM', nm: 'ExxonMobil', ic: '⛽', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CVX', nm: 'Chevron', ic: '⚡', cl: '#0064a4', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'COP', nm: 'ConocoPhillips', ic: '🛢️', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PSX', nm: 'Phillips 66', ic: '⛽', cl: '#d52b1e', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VLO', nm: 'Valero Energy', ic: '🔥', cl: '#f7941d', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MPC', nm: 'Marathon Petroleum', ic: '🛢️', cl: '#005eb8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OXY', nm: 'Occidental', ic: '🛢️', cl: '#d62b2b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PXD', nm: 'Pioneer Natural', ic: '⛽', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EOG', nm: 'EOG Resources', ic: '🛢️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DVN', nm: 'Devon Energy', ic: '⚡', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FANG', nm: 'Diamondback Energy', ic: '💎', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HAL', nm: 'Halliburton', ic: '🔩', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SLB', nm: 'Schlumberger', ic: '🔧', cl: '#00adef', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BKR', nm: 'Baker Hughes', ic: '⚙️', cl: '#0079bf', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KMI', nm: 'Kinder Morgan', ic: '🚰', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ET', nm: 'Energy Transfer', ic: '🔌', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WMB', nm: 'Williams Companies', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OKE', nm: 'ONEOK', ic: '🛢️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BA', nm: 'Boeing', ic: '✈️', cl: '#1d4289', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RTX', nm: 'Raytheon', ic: '🚀', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LMT', nm: 'Lockheed Martin', ic: '🛡️', cl: '#1c2b5e', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NOC', nm: 'Northrop Grumman', ic: '🛩️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GD', nm: 'General Dynamics', ic: '⚓', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GE', nm: 'GE Aerospace', ic: '⚙️', cl: '#3b73b9', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HON', nm: 'Honeywell', ic: '🏭', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MMM', nm: '3M', ic: '🔶', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CAT', nm: 'Caterpillar', ic: '🦺', cl: '#ffcd11', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DE', nm: 'Deere & Company', ic: '🚜', cl: '#367c2b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EMR', nm: 'Emerson Electric', ic: '⚡', cl: '#1c2b5e', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ROK', nm: 'Rockwell Automation', ic: '🤖', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ITW', nm: 'Illinois Tool Works', ic: '🔧', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PH', nm: 'Parker Hannifin', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CARR', nm: 'Carrier Global', ic: '🌡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OTIS', nm: 'Otis Worldwide', ic: '🛗', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UPS', nm: 'UPS', ic: '📦', cl: '#351c15', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FDX', nm: 'FedEx', ic: '📫', cl: '#4d148c', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UBER', nm: 'Uber', ic: '🚕', cl: '#000000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LYFT', nm: 'Lyft', ic: '🚗', cl: '#ff00bf', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DAL', nm: 'Delta Airlines', ic: '✈️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UAL', nm: 'United Airlines', ic: '✈️', cl: '#002244', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AAL', nm: 'American Airlines', ic: '✈️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LUV', nm: 'Southwest Airlines', ic: '✈️', cl: '#f9b612', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AMT', nm: 'American Tower', ic: '📡', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PLD', nm: 'Prologis', ic: '🏭', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EQIX', nm: 'Equinix', ic: '💻', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CCI', nm: 'Crown Castle', ic: '📡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'O', nm: 'Realty Income', ic: '🏪', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPG', nm: 'Simon Property', ic: '🏬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WELL', nm: 'Welltower', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AVB', nm: 'AvalonBay', ic: '🏠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EQR', nm: 'Equity Residential', ic: '🏘️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PSA', nm: 'Public Storage', ic: '🗃️', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NFLX', nm: 'Netflix', ic: '🎬', cl: '#e50914', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'DIS', nm: 'Walt Disney', ic: '🎠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CMCSA', nm: 'Comcast', ic: '📺', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WBD', nm: 'Warner Bros Discovery', ic: '🎥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PARA', nm: 'Paramount', ic: '🎬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FOX', nm: 'Fox Corp', ic: '🦊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPOT', nm: 'Spotify', ic: '🎵', cl: '#1db954', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RBLX', nm: 'Roblox', ic: '🎮', cl: '#e60000', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'EA', nm: 'Electronic Arts', ic: '🎮', cl: '#f7941d', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TTWO', nm: 'Take-Two Interactive', ic: '🕹️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ATVI', nm: 'Activision Blizzard', ic: '🎮', cl: '#148ede', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'U', nm: 'Unity Software', ic: '🎮', cl: '#000000', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'VZ', nm: 'Verizon', ic: '📱', cl: '#cd040b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'T', nm: 'AT&T', ic: '📡', cl: '#00a8e0', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TMUS', nm: 'T-Mobile', ic: '📱', cl: '#e20074', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CHTR', nm: 'Charter Comms', ic: '📺', cl: '#0098db', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GM', nm: 'General Motors', ic: '🚗', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'F', nm: 'Ford Motor', ic: '🚙', cl: '#003099', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RIVN', nm: 'Rivian', ic: '⚡', cl: '#6ac6b8', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'LCID', nm: 'Lucid Group', ic: '🚘', cl: '#cc9900', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'NIO', nm: 'NIO', ic: '🔋', cl: '#00bfff', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'LI', nm: 'Li Auto', ic: '🚗', cl: '#cc0000', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'XPEV', nm: 'XPeng', ic: '🚗', cl: '#00b4d8', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'STLA', nm: 'Stellantis', ic: '🏎️', cl: '#8b0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPY', nm: 'SPDR S&P 500', ic: '📈', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'QQQ', nm: 'Invesco QQQ', ic: '💹', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IWM', nm: 'iShares Russell 2000', ic: '📊', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DIA', nm: 'SPDR Dow Jones', ic: '🏛️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VTI', nm: 'Vanguard Total Market', ic: '🌎', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VOO', nm: 'Vanguard S&P 500', ic: '📈', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VEA', nm: 'Vanguard Dev Markets', ic: '🌍', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VWO', nm: 'Vanguard Emerging', ic: '🌏', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EFA', nm: 'iShares EAFE', ic: '🌐', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EEM', nm: 'iShares Emerging', ic: '🌏', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ACWI', nm: 'iShares MSCI ACWI', ic: '🌍', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VT', nm: 'Vanguard Total World', ic: '🌎', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHB', nm: 'Schwab US Broad', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ITOT', nm: 'iShares Core S&P Total', ic: '📈', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPTM', nm: 'SPDR Total Market', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FZROX', nm: 'Fidelity ZERO Total', ic: '📈', cl: '#006633', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLK', nm: 'Tech Select SPDR', ic: '💻', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLF', nm: 'Financial Select', ic: '💰', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLV', nm: 'Health Care Select', ic: '❤️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLE', nm: 'Energy Select', ic: '⛽', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLI', nm: 'Industrial Select', ic: '🏭', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLC', nm: 'Comm Services', ic: '📡', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLY', nm: 'Consumer Discr', ic: '🛍️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLP', nm: 'Consumer Staples', ic: '🛒', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLRE', nm: 'Real Estate', ic: '🏠', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLB', nm: 'Materials Select', ic: '⛏️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XLU', nm: 'Utilities Select', ic: '⚡', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VGT', nm: 'Vanguard IT', ic: '💻', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VHT', nm: 'Vanguard Health', ic: '❤️', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VFH', nm: 'Vanguard Financials', ic: '💰', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VAW', nm: 'Vanguard Materials', ic: '⛏️', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VDE', nm: 'Vanguard Energy', ic: '⛽', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARKK', nm: 'ARK Innovation', ic: '🚀', cl: '#ed7a23', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARKG', nm: 'ARK Genomic Rev', ic: '🧬', cl: '#ed7a23', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARKW', nm: 'ARK Next Gen Internet', ic: '🌐', cl: '#ed7a23', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARKF', nm: 'ARK Fintech Innovation', ic: '💳', cl: '#ed7a23', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARKX', nm: 'ARK Space Exploration', ic: '🚀', cl: '#ed7a23', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARKQ', nm: 'ARK Autonomous Tech', ic: '🤖', cl: '#ed7a23', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AGG', nm: 'iShares Core US Bond', ic: '🏦', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BND', nm: 'Vanguard Total Bond', ic: '📋', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LQD', nm: 'iShares Corp Bond', ic: '💼', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HYG', nm: 'iShares High Yield', ic: '💰', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TLT', nm: 'iShares 20+ Yr Treasury', ic: '🏛️', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IEF', nm: 'iShares 7-10 Yr Treasury', ic: '📜', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SHY', nm: 'iShares 1-3 Yr Treasury', ic: '📋', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VCIT', nm: 'Vanguard Intermed Corp', ic: '💼', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VCSH', nm: 'Vanguard Short Corp', ic: '📋', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EMB', nm: 'iShares Emerging Bond', ic: '🌏', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MBB', nm: 'iShares MBS', ic: '🏠', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TIP', nm: 'iShares TIPS Bond', ic: '💰', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BNDX', nm: 'Vanguard Total Intl Bond', ic: '🌍', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IGIB', nm: 'iShares Intermed Corp', ic: '💼', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GLD', nm: 'SPDR Gold Trust', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IAU', nm: 'iShares Gold Trust', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GLDM', nm: 'SPDR Gold MiniShares', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BAR', nm: 'GraniteShares Gold', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SLV', nm: 'iShares Silver Trust', ic: '🥈', cl: '#C0C0C0', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SIVR', nm: 'Aberdeen Silver', ic: '🥈', cl: '#C0C0C0', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PPLT', nm: 'Physical Platinum', ic: '💎', cl: '#E5E4E2', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PALL', nm: 'Physical Palladium', ic: '⚪', cl: '#B0B0B0', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PDBC', nm: 'Invesco Optimum Yield', ic: '🌾', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DJP', nm: 'iPath Bloomberg Commodity', ic: '📦', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GSG', nm: 'iShares Commodity', ic: '📊', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'COMT', nm: 'iShares GSCI Commodity', ic: '🌍', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BCI', nm: 'Aberdeen Commodity', ic: '📦', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'COMB', nm: 'GraniteShares Bloomberg', ic: '📊', cl: '#007bbd', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IBIT', nm: 'iShares Bitcoin Trust', ic: '₿', cl: '#f7931a', cat: 'etf', ex: ['Coinbase', 'IBKR', 'Schwab'] },
      { sy: 'FBTC', nm: 'Fidelity Wise Origin BTC', ic: '₿', cl: '#f7931a', cat: 'etf', ex: ['Coinbase', 'IBKR', 'Schwab'] },
      { sy: 'ARKB', nm: 'ARK 21Shares Bitcoin', ic: '₿', cl: '#ed7a23', cat: 'etf', ex: ['Coinbase', 'IBKR', 'Schwab'] },
      { sy: 'BITB', nm: 'Bitwise Bitcoin ETF', ic: '₿', cl: '#f7931a', cat: 'etf', ex: ['Coinbase', 'IBKR', 'Schwab'] },
      { sy: 'HODL', nm: 'VanEck Bitcoin ETF', ic: '₿', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BTCO', nm: 'Invesco Galaxy Bitcoin', ic: '₿', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EZBC', nm: 'Franklin Bitcoin ETF', ic: '₿', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BRRR', nm: 'Valkyrie Bitcoin Fund', ic: '₿', cl: '#f7931a', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ETHA', nm: 'iShares Ethereum Trust', ic: '💎', cl: '#627eea', cat: 'etf', ex: ['Coinbase', 'IBKR', 'Schwab'] },
      { sy: 'FETH', nm: 'Fidelity Ethereum Fund', ic: '💎', cl: '#627eea', cat: 'etf', ex: ['Coinbase', 'IBKR'] },
      { sy: 'ETHW', nm: 'Bitwise Ethereum ETF', ic: '💎', cl: '#627eea', cat: 'etf', ex: ['Coinbase', 'IBKR'] },
      { sy: 'CETH', nm: '21Shares Core Ethereum', ic: '💎', cl: '#627eea', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TQQQ', nm: 'ProShares UltraPro QQQ 3x', ic: '🚀', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SQQQ', nm: 'ProShares UltraPro Short QQQ', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UPRO', nm: 'ProShares UltraPro S&P 3x', ic: '🚀', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPXU', nm: 'ProShares UltraPro Short S&P', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UVXY', nm: 'ProShares Ultra VIX', ic: '⚡', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SOXL', nm: 'Direxion Semi Bull 3x', ic: '💻', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SOXS', nm: 'Direxion Semi Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LABU', nm: 'Direxion Bio Bull 3x', ic: '🧬', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FNGU', nm: 'MicroSectors FANG+ Bull 3x', ic: '🚀', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FNGD', nm: 'MicroSectors FANG+ Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TECL', nm: 'Direxion Tech Bull 3x', ic: '🚀', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TECS', nm: 'Direxion Tech Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'USO', nm: 'United States Oil Fund', ic: '🛢️', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'BNO', nm: 'United States Brent Oil', ic: '🛢️', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'UNG', nm: 'United States Natural Gas', ic: '🔥', cl: '#cc0000', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'BOIL', nm: 'ProShares Ultra DJ-AIG Nat Gas', ic: '🔥', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'CORN', nm: 'Teucrium Corn', ic: '🌽', cl: '#f7941d', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'WEAT', nm: 'Teucrium Wheat', ic: '🌾', cl: '#c8962e', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'SOYB', nm: 'Teucrium Soybean', ic: '🫘', cl: '#7d5a2f', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'CANE', nm: 'Teucrium Sugar', ic: '🍬', cl: '#c8962e', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'COFF', nm: 'iPath Bloomberg Coffee', ic: '☕', cl: '#4e2b00', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'WOOD', nm: 'iShares Global Timber', ic: '🌲', cl: '#228b22', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'PAVE', nm: 'Global X US Infrastructure', ic: '🏗️', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'REMX', nm: 'VanEck Rare Earth', ic: '⚗️', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'LIT', nm: 'Global X Lithium', ic: '🔋', cl: '#00bfff', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'COPX', nm: 'Global X Copper Miners', ic: '🔩', cl: '#b87333', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'SIL', nm: 'Global X Silver Miners', ic: '🥈', cl: '#c0c0c0', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'GDX', nm: 'VanEck Gold Miners', ic: '⛏️', cl: '#FFD700', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'GDXJ', nm: 'VanEck Junior Gold Miners', ic: '⛏️', cl: '#FFD700', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'RING', nm: 'iShares Gold Producers', ic: '🥇', cl: '#0066cc', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'PICK', nm: 'iShares MSCI Global Metals', ic: '⛏️', cl: '#0066cc', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'GUNR', nm: 'FlexShares Morningstar Global Resources', ic: '🌍', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: '^GSPC', nm: 'S&P 500 Index', ic: '📈', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^DJI', nm: 'Dow Jones', ic: '📊', cl: '#1c2b5e', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^IXIC', nm: 'NASDAQ Composite', ic: '💻', cl: '#4285f4', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^RUT', nm: 'Russell 2000', ic: '📊', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^VIX', nm: 'CBOE Volatility', ic: '⚡', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^TNX', nm: '10-Year Treasury Yield', ic: '📋', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^TYX', nm: '30-Year Treasury Yield', ic: '🏛️', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^IRX', nm: '13-Week T-Bill', ic: '💵', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^FTSE', nm: 'FTSE 100', ic: '🇬🇧', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^GDAXI', nm: 'DAX', ic: '🇩🇪', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^FCHI', nm: 'CAC 40', ic: '🇫🇷', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^N225', nm: 'Nikkei 225', ic: '🇯🇵', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^HSI', nm: 'Hang Seng', ic: '🇭🇰', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^BSESN', nm: 'BSE Sensex', ic: '🇮🇳', cl: '#ff9900', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^BVSP', nm: 'Bovespa', ic: '🇧🇷', cl: '#009c3b', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^MXX', nm: 'IPC Mexico', ic: '🇲🇽', cl: '#006847', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^AORD', nm: 'ASX All Ordinaries', ic: '🇦🇺', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^STOXX50E', nm: 'Euro Stoxx 50', ic: '🇪🇺', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'DX-Y.NYB', nm: 'US Dollar Index', ic: '💵', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^XAU', nm: 'Philadelphia Gold/Silver', ic: '🥇', cl: '#FFD700', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'HUBS', nm: 'HubSpot', ic: '🟠', cl: '#ff7a59', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MNDY', nm: 'Monday.com', ic: '🗓️', cl: '#f62b54', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TEAM', nm: 'Atlassian', ic: '🔵', cl: '#0052cc', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ZM', nm: 'Zoom Video', ic: '📹', cl: '#2d8cff', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DOCU', nm: 'DocuSign', ic: '✍️', cl: '#1c3461', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WDAY', nm: 'Workday', ic: '💼', cl: '#005cb9', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NOW', nm: 'ServiceNow', ic: '🌐', cl: '#62d84e', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CRM', nm: 'Salesforce', ic: '☁️', cl: '#00a1e0', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ADBE', nm: 'Adobe', ic: '🎨', cl: '#ff0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'INTU', nm: 'Intuit', ic: '💚', cl: '#236cff', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ANSS', nm: 'ANSYS', ic: '⚙️', cl: '#ffb71b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CDNS', nm: 'Cadence Design', ic: '💻', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SNPS', nm: 'Synopsys', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ADSK', nm: 'Autodesk', ic: '✏️', cl: '#0696d7', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ADP', nm: 'ADP', ic: '💼', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PAYX', nm: 'Paychex', ic: '💰', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PAYC', nm: 'Paycom Software', ic: '💵', cl: '#007bbd', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BR', nm: 'Broadridge Financial', ic: '💹', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FIS', nm: 'Fidelity National Info', ic: '💳', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FISV', nm: 'Fiserv', ic: '💳', cl: '#cc6600', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GPN', nm: 'Global Payments', ic: '💳', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CTSH', nm: 'Cognizant', ic: '🔵', cl: '#0033a0', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EPAM', nm: 'EPAM Systems', ic: '💻', cl: '#00adef', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GLOB', nm: 'Globant', ic: '🌎', cl: '#00adef', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ABNB', nm: 'Airbnb', ic: '🏠', cl: '#ff5a5f', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BKNG', nm: 'Booking Holdings', ic: '✈️', cl: '#003580', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EXPE', nm: 'Expedia Group', ic: '✈️', cl: '#00355f', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EBAY', nm: 'eBay', ic: '🛒', cl: '#e53238', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ETSY', nm: 'Etsy', ic: '🎨', cl: '#f56400', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IAC', nm: 'IAC/InterActiveCorp', ic: '🌐', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ZG', nm: 'Zillow Group', ic: '🏠', cl: '#006aff', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RDFN', nm: 'Redfin', ic: '🏠', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BABA', nm: 'Alibaba Group', ic: '🧧', cl: '#ff6a00', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'JD', nm: 'JD.com', ic: '📦', cl: '#cc0000', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'PDD', nm: 'PDD Holdings', ic: '🛒', cl: '#e31837', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'SE', nm: 'Sea Limited', ic: '🌊', cl: '#00adef', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'MELI', nm: 'MercadoLibre', ic: '🛒', cl: '#ffe600', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'CPNG', nm: 'Coupang', ic: '🛍️', cl: '#ee2e24', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MPWR', nm: 'Monolithic Power', ic: '⚡', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SWKS', nm: 'Skyworks Solutions', ic: '📶', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MCHP', nm: 'Microchip Technology', ic: '🔌', cl: '#e4002b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'STM', nm: 'STMicroelectronics', ic: '🇪🇺', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WOLF', nm: 'Wolfspeed', ic: '🔵', cl: '#009cde', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ACLS', nm: 'Axcelis Technologies', ic: '🏭', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ONTO', nm: 'Onto Innovation', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ENTG', nm: 'Entegris', ic: '🧪', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NTAP', nm: 'NetApp', ic: '☁️', cl: '#009fdb', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PSTG', nm: 'Pure Storage', ic: '⚡', cl: '#f9a61a', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NTNX', nm: 'Nutanix', ic: '☁️', cl: '#024da1', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ANET', nm: 'Arista Networks', ic: '🔵', cl: '#00a3e0', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'JNPR', nm: 'Juniper Networks', ic: '🌿', cl: '#84bd00', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FFIV', nm: 'F5 Inc.', ic: '⚡', cl: '#e4002b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BBAI', nm: 'BigBear.ai', ic: '🤖', cl: '#003087', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'SOUN', nm: 'SoundHound AI', ic: '🎵', cl: '#cc0000', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'AMBA', nm: 'Ambarella', ic: '🎥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CEVA', nm: 'CEVA Inc.', ic: '💡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GFAI', nm: 'Guardforce AI', ic: '🤖', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LC', nm: 'LendingClub', ic: '💵', cl: '#2C9F45', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UPST', nm: 'Upstart Holdings', ic: '🤖', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ALLY', nm: 'Ally Financial', ic: '🚗', cl: '#7DC242', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'COF', nm: 'Capital One', ic: '💳', cl: '#D03027', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DFS', nm: 'Discover Financial', ic: '🔎', cl: '#FF6600', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SYF', nm: 'Synchrony Financial', ic: '💳', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ICE', nm: 'Intercontinental Exchange', ic: '📈', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CME', nm: 'CME Group', ic: '📊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CBOE', nm: 'Cboe Global Markets', ic: '📈', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NDAQ', nm: 'Nasdaq Inc.', ic: '💹', cl: '#0066cc', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPGI', nm: 'S&P Global', ic: '📊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MCO', nm: 'Moody\'s Corp', ic: '📋', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TRU', nm: 'TransUnion', ic: '🔍', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EFX', nm: 'Equifax', ic: '📊', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'USB', nm: 'US Bancorp', ic: '🏦', cl: '#CC0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TFC', nm: 'Truist Financial', ic: '🏦', cl: '#6A0DAD', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PNC', nm: 'PNC Financial', ic: '🏦', cl: '#E05206', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WULF', nm: 'TeraWulf', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'IREN', nm: 'Iris Energy', ic: '⚡', cl: '#00bfff', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'HIVE', nm: 'HIVE Digital', ic: '🐝', cl: '#f7941d', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'BITF', nm: 'Bitfarms', ic: '⛏️', cl: '#003087', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'HOLX', nm: 'Hologic', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BAX', nm: 'Baxter International', ic: '💉', cl: '#0081c6', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BDX', nm: 'Becton Dickinson', ic: '🩺', cl: '#e4002b', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ZBH', nm: 'Zimmer Biomet', ic: '🦴', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RMD', nm: 'ResMed', ic: '😴', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ALGN', nm: 'Align Technology', ic: '😁', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TFX', nm: 'Teleflex', ic: '🩺', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PODD', nm: 'Insulet Corp', ic: '💉', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'INSP', nm: 'Inspire Medical', ic: '😴', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NVAX', nm: 'Novavax', ic: '💉', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MRNA', nm: 'Moderna', ic: '💉', cl: '#0099cc', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BNTX', nm: 'BioNTech', ic: '💉', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CRSP', nm: 'CRISPR Therapeutics', ic: '✂️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NTLA', nm: 'Intellia Therapeutics', ic: '✂️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EDIT', nm: 'Editas Medicine', ic: '✂️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BEAM', nm: 'Beam Therapeutics', ic: '💡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RXRX', nm: 'Recursion Pharma', ic: '🤖', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CNC', nm: 'Centene Corp', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HCA', nm: 'HCA Healthcare', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DVA', nm: 'DaVita Inc.', ic: '💉', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'QSR', nm: 'Restaurant Brands', ic: '👑', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WEN', nm: 'Wendy\'s', ic: '🍔', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LULU', nm: 'Lululemon', ic: '🧘', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UA', nm: 'Under Armour', ic: '🏃', cl: '#1d1d1d', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SKX', nm: 'Skechers', ic: '👟', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CROX', nm: 'Crocs', ic: '🐊', cl: '#e63329', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DECK', nm: 'Deckers Outdoor', ic: '🥾', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ONON', nm: 'On Holding', ic: '👟', cl: '#000000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VFC', nm: 'VF Corporation', ic: '👕', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GPS', nm: 'Gap Inc.', ic: '👖', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'URBN', nm: 'Urban Outfitters', ic: '🏙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ANF', nm: 'Abercrombie & Fitch', ic: '👚', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AEO', nm: 'American Eagle', ic: '🦅', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KHC', nm: 'Kraft Heinz', ic: '🧀', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GIS', nm: 'General Mills', ic: '🌾', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'K', nm: 'Kellanova', ic: '🥣', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CPB', nm: 'Campbell Soup', ic: '🥫', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HRL', nm: 'Hormel Foods', ic: '🥩', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TSN', nm: 'Tyson Foods', ic: '🍗', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CAG', nm: 'ConAgra Brands', ic: '🥦', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SJM', nm: 'J.M. Smucker', ic: '🍓', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MKC', nm: 'McCormick & Co.', ic: '🌶️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TAP', nm: 'Molson Coors', ic: '🍺', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BUD', nm: 'Anheuser-Busch InBev', ic: '🍺', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'STZ', nm: 'Constellation Brands', ic: '🍷', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DEO', nm: 'Diageo', ic: '🥃', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BTI', nm: 'British American Tobacco', ic: '🚬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NEE', nm: 'NextEra Energy', ic: '☀️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ENPH', nm: 'Enphase Energy', ic: '☀️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FSLR', nm: 'First Solar', ic: '☀️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SEDG', nm: 'SolarEdge', ic: '☀️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RUN', nm: 'Sunrun', ic: '☀️', cl: '#f7941d', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARRY', nm: 'Array Technologies', ic: '☀️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BE', nm: 'Bloom Energy', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PLUG', nm: 'Plug Power', ic: '🔋', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DUK', nm: 'Duke Energy', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SO', nm: 'Southern Company', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AEP', nm: 'American Electric Power', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EXC', nm: 'Exelon', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XEL', nm: 'Xcel Energy', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WEC', nm: 'WEC Energy', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ETR', nm: 'Entergy', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AES', nm: 'AES Corp', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CCJ', nm: 'Cameco Corp', ic: '☢️', cl: '#ffff00', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NXE', nm: 'NexGen Energy', ic: '☢️', cl: '#ffff00', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DNN', nm: 'Denison Mines', ic: '☢️', cl: '#ffff00', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UUUU', nm: 'Energy Fuels', ic: '☢️', cl: '#ffff00', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NOV', nm: 'NOV Inc.', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RIG', nm: 'Transocean', ic: '🛢️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VAL', nm: 'Valaris', ic: '🛢️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HP', nm: 'Helmerich & Payne', ic: '🛢️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LNG', nm: 'Cheniere Energy', ic: '🔥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TRGP', nm: 'Targa Resources', ic: '⛽', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HES', nm: 'Hess Corp', ic: '⛽', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CNQ', nm: 'Canadian Natural Resources', ic: '🛢️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SU', nm: 'Suncor Energy', ic: '⛽', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ENB', nm: 'Enbridge', ic: '🚰', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BP', nm: 'BP', ic: '🛢️', cl: '#009900', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SHEL', nm: 'Shell', ic: '🐚', cl: '#fbce07', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TTE', nm: 'TotalEnergies', ic: '🔵', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HII', nm: 'Huntington Ingalls', ic: '⚓', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TDG', nm: 'TransDigm Group', ic: '✈️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HEI', nm: 'HEICO Corp', ic: '✈️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KTOS', nm: 'Kratos Defense', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LDOS', nm: 'Leidos Holdings', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SAIC', nm: 'Science Applications', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ETN', nm: 'Eaton Corp', ic: '⚡', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TT', nm: 'Trane Technologies', ic: '🌡️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'JCI', nm: 'Johnson Controls', ic: '🏢', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LII', nm: 'Lennox International', ic: '🌡️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AGCO', nm: 'AGCO Corp', ic: '🚜', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WAB', nm: 'Wabtec Corp', ic: '🚂', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IDEX', nm: 'IDEX Corp', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ROP', nm: 'Roper Technologies', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AME', nm: 'AMETEK Inc.', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VRSK', nm: 'Verisk Analytics', ic: '🔍', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IEX', nm: 'IDEX Corp', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CHRW', nm: 'CH Robinson', ic: '🚚', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XPO', nm: 'XPO Inc.', ic: '🚛', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ODFL', nm: 'Old Dominion Freight', ic: '🚚', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SAIA', nm: 'Saia Inc.', ic: '🚚', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'JBHT', nm: 'JB Hunt Transport', ic: '🚛', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KNX', nm: 'Knight-Swift', ic: '🚚', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GRAB', nm: 'Grab Holdings', ic: '🚗', cl: '#00b14f', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CCL', nm: 'Carnival Corp', ic: '🚢', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RCL', nm: 'Royal Caribbean', ic: '🚢', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NCLH', nm: 'Norwegian Cruise', ic: '🚢', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ALK', nm: 'Alaska Air Group', ic: '✈️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'JBLU', nm: 'JetBlue Airways', ic: '🔵', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SBAC', nm: 'SBA Communications', ic: '📡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EXR', nm: 'Extra Space Storage', ic: '🏚️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CUBE', nm: 'CubeSmart', ic: '📦', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'STAG', nm: 'Stag Industrial', ic: '🏭', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'REXR', nm: 'Rexford Industrial', ic: '🏭', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARE', nm: 'Alexandria Real Estate', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PEAK', nm: 'Healthpeak Properties', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MPW', nm: 'Medical Properties', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VTR', nm: 'Ventas Inc.', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KIM', nm: 'Kimco Realty', ic: '🏪', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'REG', nm: 'Regency Centers', ic: '🏪', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FRT', nm: 'Federal Realty', ic: '🏪', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NNN', nm: 'National Retail Properties', ic: '🏪', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ADC', nm: 'Agree Realty', ic: '🏪', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HST', nm: 'Host Hotels', ic: '🏨', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NWSA', nm: 'News Corp', ic: '📰', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NYT', nm: 'New York Times', ic: '📰', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DKNG', nm: 'DraftKings', ic: '🎰', cl: '#00a046', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PENN', nm: 'Penn Entertainment', ic: '🎰', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MGM', nm: 'MGM Resorts', ic: '🎰', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WYNN', nm: 'Wynn Resorts', ic: '🎰', cl: '#c8a96e', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LVS', nm: 'Las Vegas Sands', ic: '🎰', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CZR', nm: 'Caesars Entertainment', ic: '🎰', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LYV', nm: 'Live Nation Entertainment', ic: '🎸', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WMG', nm: 'Warner Music Group', ic: '🎵', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DISH', nm: 'DISH Network', ic: '📡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LUMN', nm: 'Lumen Technologies', ic: '🌐', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VOD', nm: 'Vodafone', ic: '📱', cl: '#e60000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AMX', nm: 'America Movil', ic: '📱', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TEF', nm: 'Telefonica', ic: '📱', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TM', nm: 'Toyota Motor', ic: '🚗', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HMC', nm: 'Honda Motor', ic: '🚗', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RACE', nm: 'Ferrari', ic: '🏎️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'APTV', nm: 'Aptiv', ic: '🔌', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LEA', nm: 'Lear Corp', ic: '🪑', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BWA', nm: 'BorgWarner', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MGA', nm: 'Magna International', ic: '⚙️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IVV', nm: 'iShares Core S&P 500', ic: '📈', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPLG', nm: 'SPDR Portfolio S&P 500', ic: '📈', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RSP', nm: 'Invesco S&P 500 Equal Weight', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MDY', nm: 'SPDR S&P MidCap 400', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IJH', nm: 'iShares Core S&P Mid-Cap', ic: '📊', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VO', nm: 'Vanguard Mid-Cap', ic: '📊', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IJR', nm: 'iShares Core S&P Small-Cap', ic: '📉', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VB', nm: 'Vanguard Small-Cap', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IWF', nm: 'iShares Russell 1000 Growth', ic: '📈', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IWD', nm: 'iShares Russell 1000 Value', ic: '📊', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VUG', nm: 'Vanguard Growth', ic: '📈', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VTV', nm: 'Vanguard Value', ic: '📊', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MTUM', nm: 'iShares MSCI Momentum', ic: '🚀', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'QUAL', nm: 'iShares MSCI Quality', ic: '⭐', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'USMV', nm: 'iShares MSCI Min Volatility', ic: '🛡️', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHX', nm: 'Schwab US Large-Cap', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VIS', nm: 'Vanguard Industrials', ic: '🏭', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VCR', nm: 'Vanguard Consumer Disc', ic: '🛍️', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VDC', nm: 'Vanguard Consumer Staples', ic: '🛒', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VOX', nm: 'Vanguard Comm Services', ic: '📡', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FTEC', nm: 'Fidelity MSCI Info Tech', ic: '💻', cl: '#006633', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FNCL', nm: 'Fidelity MSCI Financials', ic: '💰', cl: '#006633', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FHLC', nm: 'Fidelity MSCI Health Care', ic: '❤️', cl: '#006633', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FENY', nm: 'Fidelity MSCI Energy', ic: '⛽', cl: '#006633', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RYT', nm: 'Invesco S&P 500 EW Tech', ic: '💻', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CURE', nm: 'Direxion Health Care Bull 3x', ic: '❤️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NAIL', nm: 'Direxion Homebuilders Bull 3x', ic: '🏠', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GUSH', nm: 'Direxion Energy Bull 2x', ic: '⛽', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DRIP', nm: 'Direxion Energy Bear 2x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PRNT', nm: 'ARK 3D Printing ETF', ic: '🖨️', cl: '#ed7a23', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IZRL', nm: 'ARK Israel Innovative Tech', ic: '🇮🇱', cl: '#ed7a23', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'JNK', nm: 'SPDR Bloomberg High Yield', ic: '💰', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GOVT', nm: 'iShares US Treasury Bond', ic: '🏛️', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VTIP', nm: 'Vanguard Short-Term Inflation', ic: '💰', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VGSH', nm: 'Vanguard Short-Term Treasury', ic: '📋', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VGIT', nm: 'Vanguard Interm-Term Treasury', ic: '📜', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VGLT', nm: 'Vanguard Long-Term Treasury', ic: '🏛️', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BSV', nm: 'Vanguard Short-Term Bond', ic: '📋', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BIV', nm: 'Vanguard Interm-Term Bond', ic: '📜', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BLV', nm: 'Vanguard Long-Term Bond', ic: '🏛️', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IGSB', nm: 'iShares Short-Term Corp Bond', ic: '📋', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ANGL', nm: 'VanEck Fallen Angel High Yield', ic: '📉', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BKLN', nm: 'Invesco Senior Loan ETF', ic: '💵', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FLOT', nm: 'iShares Floating Rate Bond', ic: '💵', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BIL', nm: 'SPDR 1-3 Month T-Bill', ic: '💵', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SHV', nm: 'iShares Short Treasury Bond', ic: '💵', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ICSH', nm: 'iShares Ultra Short-Term Bond', ic: '💵', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SGOL', nm: 'Aberdeen Physical Gold', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AAAU', nm: 'Goldman Sachs Physical Gold', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OUNZ', nm: 'VanEck Merk Gold ETF', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PHYS', nm: 'Sprott Physical Gold Trust', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PSLV', nm: 'Sprott Physical Silver Trust', ic: '🥈', cl: '#C0C0C0', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SILJ', nm: 'Prime Junior Silver Miners', ic: '🥈', cl: '#c0c0c0', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GOEX', nm: 'Global X Gold Explorers', ic: '⛏️', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SGDM', nm: 'Sprott Gold Miners ETF', ic: '⛏️', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SGDJ', nm: 'Sprott Junior Gold Miners', ic: '⛏️', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BTCW', nm: 'WisdomTree Bitcoin Fund', ic: '₿', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ETHV', nm: 'VanEck Ethereum ETF', ic: '💎', cl: '#627eea', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EZET', nm: 'Franklin Ethereum ETF', ic: '💎', cl: '#627eea', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'QETH', nm: 'Invesco Galaxy Ethereum ETF', ic: '💎', cl: '#627eea', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BITQ', nm: 'Bitwise Crypto Innovators', ic: '🔗', cl: '#f7931a', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BKCH', nm: 'Global X Blockchain ETF', ic: '⛓️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DAPP', nm: 'VanEck Digital Transformation', ic: '🔗', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BLOK', nm: 'Amplify Transformational Data', ic: '⛓️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BITO', nm: 'ProShares Bitcoin Strategy', ic: '₿', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XBTF', nm: 'VanEck Bitcoin Strategy ETF', ic: '₿', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPXL', nm: 'Direxion S&P 500 Bull 3x', ic: '🚀', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPXS', nm: 'Direxion S&P 500 Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UDOW', nm: 'ProShares UltraPro Dow30 3x', ic: '🚀', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SDOW', nm: 'ProShares UltraPro Short Dow', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TNA', nm: 'Direxion Small Cap Bull 3x', ic: '🚀', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TZA', nm: 'Direxion Small Cap Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LABD', nm: 'Direxion Biotech Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DFEN', nm: 'Direxion Aerospace Bull 3x', ic: '✈️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WANT', nm: 'Direxion Consumer Disc Bull 3x', ic: '🛍️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SVXY', nm: 'ProShares Short VIX', ic: '🛡️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TMF', nm: 'Direxion 20Y Treasury Bull 3x', ic: '🏛️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TMV', nm: 'Direxion 20Y Treasury Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TBT', nm: 'ProShares UltraShort 20Y Tsy', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UGL', nm: 'ProShares Ultra Gold', ic: '🥇', cl: '#FFD700', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GLL', nm: 'ProShares UltraShort Gold', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AGQ', nm: 'ProShares Ultra Silver', ic: '🥈', cl: '#C0C0C0', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UCO', nm: 'ProShares Ultra Crude Oil', ic: '🛢️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCO', nm: 'ProShares UltraShort Crude', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KOLD', nm: 'ProShares UltraShort Nat Gas', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DRN', nm: 'Direxion Real Estate Bull 3x', ic: '🏠', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DRV', nm: 'Direxion Real Estate Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ERX', nm: 'Direxion Energy Bull 2x', ic: '⛽', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ERY', nm: 'Direxion Energy Bear 2x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FAS', nm: 'Direxion Financials Bull 3x', ic: '💰', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FAZ', nm: 'Direxion Financials Bear 3x', ic: '📉', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EDC', nm: 'Direxion Emerging Markets 3x', ic: '🌏', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OIL', nm: 'iPath Bloomberg Crude Oil', ic: '🛢️', cl: '#0066cc', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'UGAZ', nm: 'ProShares Ultra Nat Gas', ic: '🔥', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'TAGS', nm: 'Teucrium Agricultural Fund', ic: '🌿', cl: '#228b22', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'JO', nm: 'iPath Bloomberg Coffee', ic: '☕', cl: '#4e2b00', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'NIB', nm: 'iPath Bloomberg Cocoa', ic: '🍫', cl: '#4e2b00', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'SGG', nm: 'iPath Bloomberg Sugar', ic: '🍬', cl: '#c8962e', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'BAL', nm: 'iPath Bloomberg Cotton', ic: '🌿', cl: '#f5f5f5', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'MOO', nm: 'VanEck Agribusiness ETF', ic: '🌾', cl: '#228b22', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'VEGI', nm: 'iShares MSCI Agriculture', ic: '🌿', cl: '#228b22', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'DBA', nm: 'Invesco DB Agriculture Fund', ic: '🌾', cl: '#228b22', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'DBO', nm: 'Invesco DB Oil Fund', ic: '🛢️', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'DBB', nm: 'Invesco DB Base Metals', ic: '⚙️', cl: '#b87333', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'DBP', nm: 'Invesco DB Precious Metals', ic: '💎', cl: '#FFD700', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'DBC', nm: 'Invesco DB Commodity Index', ic: '📦', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'RJI', nm: 'Rogers International Commodity', ic: '📊', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'FTGC', nm: 'First Trust Global Commodity', ic: '🌍', cl: '#003087', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'CPER', nm: 'US Copper Index Fund', ic: '🔩', cl: '#b87333', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'URA', nm: 'Global X Uranium ETF', ic: '☢️', cl: '#ffff00', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'URNM', nm: 'Sprott Uranium Miners ETF', ic: '☢️', cl: '#ffff00', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: 'URNJ', nm: 'Sprott Junior Uranium Miners', ic: '☢️', cl: '#ffff00', cat: 'commodity', ex: ['IBKR', 'Schwab'] },
      { sy: '^AEX', nm: 'AEX Index (Netherlands)', ic: '🇳🇱', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^IBEX', nm: 'IBEX 35 (Spain)', ic: '🇪🇸', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^STOXX', nm: 'STOXX Europe 600', ic: '🇪🇺', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^N100', nm: 'Euronext 100', ic: '🇪🇺', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '000001.SS', nm: 'Shanghai Composite', ic: '🇨🇳', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^NSEI', nm: 'Nifty 50 (India)', ic: '🇮🇳', cl: '#ff9900', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^AXJO', nm: 'ASX 200 (Australia)', ic: '🇦🇺', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^KOSPI', nm: 'KOSPI (South Korea)', ic: '🇰🇷', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^TWII', nm: 'TAIEX (Taiwan)', ic: '🇹🇼', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^STI', nm: 'Straits Times (Singapore)', ic: '🇸🇬', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^JKSE', nm: 'IDX Composite (Indonesia)', ic: '🇮🇩', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^ADI', nm: 'ADX General (Abu Dhabi)', ic: '🇦🇪', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^QSI', nm: 'QSE General (Qatar)', ic: '🇶🇦', cl: '#800020', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^KSE', nm: 'Boursa Kuwait', ic: '🇰🇼', cl: '#007a3d', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^MSM30', nm: 'MSM 30 (Oman)', ic: '🇴🇲', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^TA125.TA', nm: 'Tel Aviv 125 (Israel)', ic: '🇮🇱', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^SOX', nm: 'Philadelphia Semiconductor', ic: '💻', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^BKX', nm: 'KBW Bank Index', ic: '🏦', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^NBI', nm: 'NASDAQ Biotech Index', ic: '🧬', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^HGX', nm: 'Philadelphia Housing Index', ic: '🏠', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^XOI', nm: 'AMEX Oil Index', ic: '🛢️', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'CL=F', nm: 'Crude Oil WTI Futures', ic: '🛢️', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'BZ=F', nm: 'Brent Crude Futures', ic: '🛢️', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^NG=F', nm: 'Natural Gas Futures', ic: '🔥', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'HO=F', nm: 'Heating Oil Futures', ic: '🔥', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'RB=F', nm: 'RBOB Gasoline Futures', ic: '⛽', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'GC=F', nm: 'Gold Futures', ic: '🥇', cl: '#FFD700', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'SI=F', nm: 'Silver Futures', ic: '🥈', cl: '#C0C0C0', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'HG=F', nm: 'Copper Futures', ic: '🔩', cl: '#b87333', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'PL=F', nm: 'Platinum Futures', ic: '💎', cl: '#E5E4E2', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'PA=F', nm: 'Palladium Futures', ic: '⚪', cl: '#B0B0B0', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'ZC=F', nm: 'Corn Futures', ic: '🌽', cl: '#f7941d', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'ZW=F', nm: 'Wheat Futures', ic: '🌾', cl: '#c8962e', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'ZS=F', nm: 'Soybean Futures', ic: '🫘', cl: '#7d5a2f', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'CC=F', nm: 'Cocoa Futures', ic: '🍫', cl: '#4e2b00', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'KC=F', nm: 'Coffee Futures', ic: '☕', cl: '#4e2b00', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'CT=F', nm: 'Cotton Futures', ic: '🌿', cl: '#f5f5f5', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'SB=F', nm: 'Sugar Futures', ic: '🍬', cl: '#c8962e', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'LBS=F', nm: 'Lumber Futures', ic: '🌲', cl: '#228b22', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'ES=F', nm: 'S&P 500 E-mini Futures', ic: '📈', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'NQ=F', nm: 'Nasdaq 100 E-mini Futures', ic: '💹', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'YM=F', nm: 'Dow Jones E-mini Futures', ic: '📊', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'RTY=F', nm: 'Russell 2000 E-mini Futures', ic: '📉', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'ZB=F', nm: 'US 30-Year T-Bond Futures', ic: '🏛️', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'ZN=F', nm: 'US 10-Year T-Note Futures', ic: '📋', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'ZF=F', nm: 'US 5-Year T-Note Futures', ic: '📋', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '6E=F', nm: 'Euro FX Futures', ic: '🇪🇺', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '6J=F', nm: 'Japanese Yen Futures', ic: '🇯🇵', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '6B=F', nm: 'British Pound Futures', ic: '🇬🇧', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '6A=F', nm: 'Australian Dollar Futures', ic: '🇦🇺', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '6C=F', nm: 'Canadian Dollar Futures', ic: '🇨🇦', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'BTC=F', nm: 'Bitcoin CME Futures', ic: '₿', cl: '#f7931a', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'ETH=F', nm: 'Ethereum CME Futures', ic: '💎', cl: '#627eea', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'MBT=F', nm: 'Micro Bitcoin Futures', ic: '₿', cl: '#f7931a', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'MET=F', nm: 'Micro Ethereum Futures', ic: '💎', cl: '#627eea', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: 'MSCI', nm: 'MSCI Inc.', ic: '📊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PTC', nm: 'PTC Inc.', ic: '🔧', cl: '#007dc1', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PCTY', nm: 'Paylocity', ic: '💼', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WEX', nm: 'WEX Inc.', ic: '⛽', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CDW', nm: 'CDW Corp', ic: '💻', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SSNLF', nm: 'Samsung Electronics', ic: '🇰🇷', cl: '#034ea2', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ASML', nm: 'ASML Holding', ic: '🇳🇱', cl: '#0071ce', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TSM', nm: 'Taiwan Semiconductor', ic: '🇹🇼', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AEHR', nm: 'Aehr Test Systems', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MKSI', nm: 'MKS Instruments', ic: '🔧', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CIEN', nm: 'Ciena Corp', ic: '💡', cl: '#0066cc', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VIAV', nm: 'Viavi Solutions', ic: '🔦', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ABMD', nm: 'Abiomed', ic: '❤️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NVCR', nm: 'NovoCure', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MOH', nm: 'Molina Healthcare', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'THC', nm: 'Tenet Healthcare', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UHS', nm: 'Universal Health Services', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NVST', nm: 'Envista Holdings', ic: '🦷', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'XRAY', nm: 'DENTSPLY Sirona', ic: '🦷', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FATE', nm: 'Fate Therapeutics', ic: '🧬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FTI', nm: 'TechnipFMC', ic: '🔩', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CTRA', nm: 'Coterra Energy', ic: '⛽', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'APA', nm: 'APA Corp', ic: '🛢️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MRO', nm: 'Marathon Oil', ic: '🛢️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TRP', nm: 'TC Energy', ic: '⚡', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EQNR', nm: 'Equinor', ic: '🇳🇴', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'E', nm: 'ENI', ic: '🔴', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PCG', nm: 'PG&E Corp', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EIX', nm: 'Edison International', ic: '⚡', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FE', nm: 'FirstEnergy', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'D', nm: 'Dominion Energy', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ES', nm: 'Eversource Energy', ic: '⚡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPWR', nm: 'SunPower Corp', ic: '☀️', cl: '#f7941d', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NOVA', nm: 'Sunnova Energy', ic: '☀️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BLDP', nm: 'Ballard Power Systems', ic: '🔋', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CW', nm: 'Curtiss-Wright', ic: '✈️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CNH', nm: 'CNH Industrial', ic: '🚜', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HBI', nm: 'Hanesbrands', ic: '👕', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LSI', nm: 'Life Storage', ic: '📦', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'STOR', nm: 'STORE Capital', ic: '🏪', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FR', nm: 'First Industrial REIT', ic: '🏭', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EGP', nm: 'EastGroup Properties', ic: '🏭', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HR', nm: 'Healthcare Realty', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CTRE', nm: 'CareTrust REIT', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MAC', nm: 'Macerich', ic: '🏬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BRX', nm: 'Brixmor Property', ic: '🏬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RHP', nm: 'Ryman Hospitality', ic: '🏨', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'APLE', nm: 'Apple Hospitality REIT', ic: '🏨', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ORAN', nm: 'Orange', ic: '📱', cl: '#ff7900', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SHOP', nm: 'Shopify', ic: '🛍️', cl: '#96bf48', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BIDU', nm: 'Baidu', ic: '🔍', cl: '#2932e1', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'NTES', nm: 'NetEase', ic: '🎮', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TME', nm: 'Tencent Music', ic: '🎵', cl: '#28abe3', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BILI', nm: 'Bilibili', ic: '🎬', cl: '#00a1d6', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'IQ', nm: 'iQIYI', ic: '🎬', cl: '#00be06', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'YY', nm: 'JOYY Inc.', ic: '💬', cl: '#ff9900', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WB', nm: 'Weibo Corp', ic: '📱', cl: '#e6162d', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BZUN', nm: 'Baozun', ic: '🛒', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VIPS', nm: 'Vipshop Holdings', ic: '🛍️', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EDU', nm: 'New Oriental Education', ic: '📚', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TAL', nm: 'TAL Education', ic: '📚', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GDS', nm: 'GDS Holdings', ic: '💻', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HTHT', nm: 'H World Group', ic: '🏨', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'YUMC', nm: 'Yum China', ic: '🍕', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SBSW', nm: 'Sibanye Stillwater', ic: '⛏️', cl: '#FFD700', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GOLD', nm: 'Barrick Gold', ic: '🥇', cl: '#FFD700', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NEM', nm: 'Newmont Corp', ic: '⛏️', cl: '#FFD700', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KGC', nm: 'Kinross Gold', ic: '⛏️', cl: '#FFD700', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AEM', nm: 'Agnico Eagle Mines', ic: '⛏️', cl: '#FFD700', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WPM', nm: 'Wheaton Precious Metals', ic: '🥇', cl: '#FFD700', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FNV', nm: 'Franco-Nevada', ic: '🥇', cl: '#FFD700', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RGLD', nm: 'Royal Gold', ic: '🥇', cl: '#FFD700', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AG', nm: 'First Majestic Silver', ic: '🥈', cl: '#C0C0C0', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PAAS', nm: 'Pan American Silver', ic: '🥈', cl: '#C0C0C0', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FCX', nm: 'Freeport-McMoRan', ic: '🔩', cl: '#b87333', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCCO', nm: 'Southern Copper', ic: '🔩', cl: '#b87333', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RIO', nm: 'Rio Tinto', ic: '⛏️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BHP', nm: 'BHP Group', ic: '⛏️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VALE', nm: 'Vale S.A.', ic: '⛏️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AA', nm: 'Alcoa Corp', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CLF', nm: 'Cleveland-Cliffs', ic: '⚙️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'X', nm: 'US Steel', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NUE', nm: 'Nucor Corp', ic: '⚙️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'STLD', nm: 'Steel Dynamics', ic: '⚙️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CB', nm: 'Chubb', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MMC', nm: 'Marsh & McLennan', ic: '🛡️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AON', nm: 'Aon plc', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AJG', nm: 'Arthur J. Gallagher', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WTW', nm: 'Willis Towers Watson', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PRU', nm: 'Prudential Financial', ic: '🏦', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MET', nm: 'MetLife', ic: '🏦', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AFL', nm: 'Aflac', ic: '🦆', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ALL', nm: 'Allstate Corp', ic: '🛡️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PGR', nm: 'Progressive Corp', ic: '🚗', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TRV', nm: 'Travelers Companies', ic: '🌂', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HIG', nm: 'Hartford Financial', ic: '🏦', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UNM', nm: 'Unum Group', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LNC', nm: 'Lincoln National', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GL', nm: 'Globe Life', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AIZ', nm: 'Assurant', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BRK-B', nm: 'Berkshire Hathaway B', ic: '🏢', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WM', nm: 'Waste Management', ic: '♻️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RSG', nm: 'Republic Services', ic: '♻️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CLX', nm: 'Clorox Company', ic: '🧽', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SYY', nm: 'Sysco Corp', ic: '🍽️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'US', nm: 'US Foods Holding', ic: '🍽️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PFGC', nm: 'Performance Food Group', ic: '🍽️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WBA', nm: 'Walgreens Boots Alliance', ic: '💊', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RAD', nm: 'Rite Aid', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DGX', nm: 'Quest Diagnostics', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LH', nm: 'Laboratory Corp', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IQV', nm: 'IQVIA Holdings', ic: '📊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CRL', nm: 'Charles River Labs', ic: '🐭', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MTD', nm: 'Mettler-Toledo', ic: '⚖️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TMO', nm: 'Thermo Fisher Scientific', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DHR', nm: 'Danaher Corp', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'A', nm: 'Agilent Technologies', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'WAT', nm: 'Waters Corp', ic: '💧', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PKI', nm: 'PerkinElmer', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TECH', nm: 'Bio-Techne', ic: '🧬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NEOG', nm: 'Neogen Corp', ic: '🔬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GKOS', nm: 'Glaukos Corp', ic: '👁️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IRTC', nm: 'iRhythm Technologies', ic: '❤️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LIVN', nm: 'LivaNova', ic: '❤️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'STE', nm: 'STERIS plc', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AMED', nm: 'Amedisys', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ENSG', nm: 'Ensign Group', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LTC', nm: 'LTC Properties', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SBRA', nm: 'Sabra Health Care REIT', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OHI', nm: 'Omega Healthcare', ic: '🏥', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IWB', nm: 'iShares Russell 1000', ic: '📈', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IWR', nm: 'iShares Russell Mid-Cap', ic: '📊', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IWS', nm: 'iShares Russell Mid Value', ic: '📊', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IWP', nm: 'iShares Russell Mid Growth', ic: '📈', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IWC', nm: 'iShares Micro-Cap', ic: '📉', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPSM', nm: 'SPDR Portfolio Small Cap', ic: '📉', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPMD', nm: 'SPDR Portfolio Mid Cap', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPLV', nm: 'Invesco S&P 500 Low Vol', ic: '🛡️', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPHQ', nm: 'Invesco S&P 500 Quality', ic: '⭐', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPYG', nm: 'SPDR Portfolio S&P 500 Growth', ic: '📈', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SPYV', nm: 'SPDR Portfolio S&P 500 Value', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHG', nm: 'Schwab US Large-Cap Growth', ic: '📈', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHV', nm: 'Schwab US Large-Cap Value', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHM', nm: 'Schwab US Mid-Cap', ic: '📊', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHA', nm: 'Schwab US Small-Cap', ic: '📉', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHF', nm: 'Schwab International Equity', ic: '🌍', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHE', nm: 'Schwab Emerging Markets', ic: '🌏', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SCHD', nm: 'Schwab US Dividend Equity', ic: '💰', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VYM', nm: 'Vanguard High Dividend Yield', ic: '💰', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DVY', nm: 'iShares Select Dividend', ic: '💰', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HDV', nm: 'iShares Core High Dividend', ic: '💰', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SDY', nm: 'SPDR S&P Dividend ETF', ic: '💰', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NOBL', nm: 'ProShares S&P 500 Dividend', ic: '💎', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DGRO', nm: 'iShares Core Div Growth', ic: '📈', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VIG', nm: 'Vanguard Div Appreciation', ic: '📈', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DGRW', nm: 'WisdomTree US Div Growth', ic: '📈', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RDVY', nm: 'First Trust Rising Div', ic: '📈', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PFF', nm: 'iShares Preferred & Income', ic: '💰', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PFFD', nm: 'Global X US Preferred ETF', ic: '💰', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IDV', nm: 'iShares Intl Select Div', ic: '🌍', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VXUS', nm: 'Vanguard Total Intl Stock', ic: '🌍', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IXUS', nm: 'iShares Core MSCI Total Intl', ic: '🌍', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IOO', nm: 'iShares Global 100 ETF', ic: '🌍', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'URTH', nm: 'iShares MSCI World ETF', ic: '🌍', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VEU', nm: 'Vanguard FTSE All-World ex-US', ic: '🌍', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VSS', nm: 'Vanguard FTSE All-World ex-US SC', ic: '🌍', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IEMG', nm: 'iShares Core MSCI Emerging', ic: '🌏', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VGK', nm: 'Vanguard FTSE Europe', ic: '🇪🇺', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWJ', nm: 'iShares MSCI Japan', ic: '🇯🇵', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWZ', nm: 'iShares MSCI Brazil', ic: '🇧🇷', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWY', nm: 'iShares MSCI South Korea', ic: '🇰🇷', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWT', nm: 'iShares MSCI Taiwan', ic: '🇹🇼', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWG', nm: 'iShares MSCI Germany', ic: '🇩🇪', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWU', nm: 'iShares MSCI United Kingdom', ic: '🇬🇧', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWQ', nm: 'iShares MSCI France', ic: '🇫🇷', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWC', nm: 'iShares MSCI Canada', ic: '🇨🇦', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWA', nm: 'iShares MSCI Australia', ic: '🇦🇺', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EWH', nm: 'iShares MSCI Hong Kong', ic: '🇭🇰', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'INDA', nm: 'iShares MSCI India ETF', ic: '🇮🇳', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'INDY', nm: 'iShares India 50 ETF', ic: '🇮🇳', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TUR', nm: 'iShares MSCI Turkey', ic: '🇹🇷', cl: '#0066cc', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EGPT', nm: 'VanEck Egypt Index ETF', ic: '🇪🇬', cl: '#cc0000', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KSA', nm: 'iShares MSCI Saudi Arabia', ic: '🇸🇦', cl: '#006c35', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UAE', nm: 'iShares MSCI UAE ETF', ic: '🇦🇪', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'QAT', nm: 'iShares MSCI Qatar ETF', ic: '🇶🇦', cl: '#800020', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FLSA', nm: 'Franklin FTSE Saudi Arabia', ic: '🇸🇦', cl: '#006c35', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GULF', nm: 'WisdomTree Middle East Div', ic: '🌍', cl: '#003087', cat: 'etf', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: '^EGX30', nm: 'EGX 30 Egypt', ic: '🇪🇬', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^TASI.SR', nm: 'Tadawul Saudi Arabia', ic: '🇸🇦', cl: '#006c35', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^DFMGI', nm: 'DFM Dubai', ic: '🇦🇪', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^FVX', nm: '5-Year Treasury Yield', ic: '📋', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },


      { sy: 'AMTM', nm: 'Amentum Holdings', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IONQ', nm: 'IonQ Inc.', ic: '⚛️', cl: '#003087', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'RGTI', nm: 'Rigetti Computing', ic: '⚛️', cl: '#6b21a8', cat: 'stock', ex: ['Binance', 'Bybit', 'MEXC'] },
      { sy: 'QUBT', nm: 'Quantum Computing', ic: '⚛️', cl: '#003087', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'ARQQ', nm: 'Arqit Quantum', ic: '⚛️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DWL', nm: 'DWAC Holdings', ic: '📱', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'APP', nm: 'Applovin Corp', ic: '📱', cl: '#000000', cat: 'stock', ex: ['Bybit', 'MEXC', 'Gate.io'] },
      { sy: 'CAVA', nm: 'CAVA Group', ic: '🥗', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CELH', nm: 'Celsius Holdings', ic: '🥤', cl: '#ff6600', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'MNST', nm: 'Monster Beverage', ic: '🥤', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FIZZ', nm: 'National Beverage', ic: '🥤', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SAM', nm: 'Boston Beer Co', ic: '🍺', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BOOT', nm: 'Boot Barn Holdings', ic: '🥾', cl: '#8b4513', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FIVE', nm: 'Five Below', ic: '5️⃣', cl: '#8b0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DLTR', nm: 'Dollar Tree', ic: '🌳', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DG', nm: 'Dollar General', ic: '💵', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BJ', nm: 'BJ\'s Wholesale Club', ic: '🛒', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OLLI', nm: 'Ollie\'s Bargain Outlet', ic: '🛍️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PRGO', nm: 'Perrigo Company', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'JAZZ', nm: 'Jazz Pharmaceuticals', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'INVA', nm: 'Innoviva Inc.', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EXEL', nm: 'Exelixis Inc.', ic: '🧬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HALO', nm: 'Halozyme Therapeutics', ic: '💉', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PTGX', nm: 'Protagonist Therapeutics', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BMRN', nm: 'BioMarin Pharmaceutical', ic: '🧬', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ALNY', nm: 'Alnylam Pharmaceuticals', ic: '🧬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RARE', nm: 'Ultragenyx Pharmaceutical', ic: '🧬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SRPT', nm: 'Sarepta Therapeutics', ic: '🧬', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ACAD', nm: 'ACADIA Pharmaceuticals', ic: '🧠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ITCI', nm: 'Intra-Cellular Therapies', ic: '🧠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AXSM', nm: 'Axsome Therapeutics', ic: '🧠', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SAGE', nm: 'Sage Therapeutics', ic: '🧠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PRAX', nm: 'Praxis Precision Medicine', ic: '🧠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CRNX', nm: 'Crinetics Pharmaceuticals', ic: '🧬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KYMR', nm: 'Kymera Therapeutics', ic: '🎯', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ARCT', nm: 'Arctus Therapeutics', ic: '🧬', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NKTR', nm: 'Nektar Therapeutics', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ICPT', nm: 'Intercept Pharmaceuticals', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TTD', nm: 'The Trade Desk', ic: '📊', cl: '#cc0000', cat: 'stock', ex: ['Bybit', 'MEXC'] },
      { sy: 'MGNI', nm: 'Magnite Inc.', ic: '📊', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PUBM', nm: 'PubMatic Inc.', ic: '📊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CRTO', nm: 'Criteo SA', ic: '📊', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'DV', nm: 'DoubleVerify', ic: '✅', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'IAS', nm: 'Integral Ad Science', ic: '📊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TBLA', nm: 'Taboola.com', ic: '📊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PERI', nm: 'Perion Network', ic: '📊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CARG', nm: 'CarGurus Inc.', ic: '🚗', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'KAR', nm: 'OPENLANE Inc.', ic: '🚗', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ACV', nm: 'ACV Auctions', ic: '🚗', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'COMP', nm: 'Compass Inc.', ic: '🏠', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'HOUS', nm: 'Anywhere Real Estate', ic: '🏠', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'EXPI', nm: 'eXp World Holdings', ic: '🏠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RKT', nm: 'Rocket Companies', ic: '🚀', cl: '#e31837', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'UWM', nm: 'United Wholesale Mortgage', ic: '🏠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'PFSI', nm: 'PennyMac Financial', ic: '🏠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'COOP', nm: 'Mr. Cooper Group', ic: '🏠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'GHLD', nm: 'Guild Holdings', ic: '🏠', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: '^CASE30', nm: 'CASE 30 Egypt', ic: '🇪🇬', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^PSI', nm: 'PSI Portugal', ic: '🇵🇹', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^KLSE', nm: 'KLCI Malaysia', ic: '🇲🇾', cl: '#cc0000', cat: 'index', ex: ['IBKR', 'Schwab'] },
      { sy: '^SET.BK', nm: 'SET Thailand', ic: '🇹🇭', cl: '#003087', cat: 'index', ex: ['IBKR', 'Schwab'] },

      { sy: 'LBRDA', nm: 'Liberty Broadband A', ic: '📡', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FWONK', nm: 'Liberty Formula One', ic: '🏎️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LSXMA', nm: 'Liberty SiriusXM A', ic: '🎵', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CHWY', nm: 'Chewy Inc.', ic: '🐾', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'W', nm: 'Wayfair Inc.', ic: '🛋️', cl: '#7c3aed', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'CVNA', nm: 'Carvana Co.', ic: '🚗', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VTRS', nm: 'Viatris Inc.', ic: '💊', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'OGN', nm: 'Organon & Co.', ic: '💊', cl: '#6b21a8', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'VRNS', nm: 'Varonis Systems', ic: '🔒', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TENB', nm: 'Tenable Holdings', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'QLYS', nm: 'Qualys Inc.', ic: '🔐', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'SAIL', nm: 'SailPoint Technologies', ic: '⛵', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RDWR', nm: 'Radware Ltd.', ic: '🛡️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FSLY', nm: 'Fastly Inc.', ic: '⚡', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NCNO', nm: 'nCino Inc.', ic: '🏦', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ENFN', nm: 'Enfusion Inc.', ic: '💹', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'TOST', nm: 'Toast Inc.', ic: '🍞', cl: '#f97316', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'RELY', nm: 'Remitly Global', ic: '💸', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'FLYW', nm: 'Flywire Corp', ic: '✈️', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BILL', nm: 'Bill Holdings', ic: '💳', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'AIOT', nm: 'PowerFleet Inc.', ic: '🚛', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'BLZE', nm: 'Backblaze Inc.', ic: '☁️', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'NRDY', nm: 'Nerdy Inc.', ic: '📚', cl: '#cc0000', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'LMND', nm: 'Lemonade Inc.', ic: '🍋', cl: '#ff00bf', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
      { sy: 'ROOT', nm: 'Root Inc.', ic: '🚗', cl: '#003087', cat: 'stock', ex: ['IBKR', 'Schwab', 'Robinhood'] },
    ];
    let _stkP = {};
    let _stkCacheTs = 0;
    const _STK_CACHE_TTL = 60000; // 60s

    // ── FAST PARALLEL STOCK FETCHER ──
    async function _fetchAllStocks() {
      // ── MEXC Symbol Map (Perpetual Futures — tokenized stocks) ──
      const _MX = {
        // Crypto miners only — regular stocks fetched via Worker (Stooq/Yahoo)
        'MARA': 'MARAUSDT', 'RIOT': 'RIOTUSDT', 'CLSK': 'CLSKUSDT',
        'WULF': 'WULFUSDT', 'IREN': 'IRENUSDT', 'BITF': 'BITFUSDT',
        'CIFR': 'CIFRUSDT', 'HUT': 'HUTUSDT', 'CORZ': 'CORUSDT',
      };
      const _MXr = {};
      Object.entries(_MX).forEach(([k, v]) => _MXr[v] = k);

      // ── Step 1: Static prices instantly ────────────────────────────
      _loadStaticPrices();
      _renderStk();

      // ── Step 1b: Fetch live prices via Cloudflare Worker ──
      const _fetchWorkerPrices = async () => {
        const WORKER = 'https://summer-union-dc27.bitcoinswapnet.workers.dev';
        // Priority: fetch important stocks first, rest in background
        const PRIORITY = ['AAPL', 'MSFT', 'NVDA', 'TSLA', 'AMZN', 'META', 'GOOGL', 'AMD',
          'SPY', 'QQQ', 'GLD', 'BTC=F', 'ETH=F', 'GC=F', 'CL=F', '^GSPC', '^DJI', '^IXIC',
          'JPM', 'V', 'MA', 'COIN', 'MSTR', 'PLTR', 'NFLX', 'UBER', 'BABA'];
        const allSyms = [
          ...PRIORITY,
          ..._STK.map(s => s.sy).filter(s => !PRIORITY.includes(s))
        ];
        const batches = [];
        for (let i = 0; i < allSyms.length; i += 30) batches.push(allSyms.slice(i, i + 30));
        let total = 0;
        await Promise.allSettled(batches.map(async batch => {
          try {
            const r = await fetch(
              `${WORKER}?symbols=${batch.join(',')}`
            );
            if (!r.ok) return;
            const data = await r.json();
            Object.entries(data).forEach(([sym, q]) => {
              if (!q?.price || q.price <= 0) return;
              _stkP[sym] = {
                pr: q.price, chg: q.change || 0,
                hi: q.high || q.price, lo: q.low || q.price,
                vol: q.volume || 0, prevClose: q.prev || q.price,
                closes: [q.prev || q.price, q.price],
                w52h: q.price * 1.4, w52l: q.price * 0.6,
                currency: 'USD', mktTime: new Date(), src: 'Live'
              };
              total++;
            });
          } catch (e) { console.warn('[Worker] batch failed:', e.message); }
        }));
        console.log('[STK] Worker returned', total, 'symbols');
        if (total > 0) { _renderStk(); }
        else { console.warn('[STK] Worker returned 0 — check Worker logs'); }
        return total;
      };
      await _fetchWorkerPrices();

      // ── Step 2a: skipped — MEXC handles all tokenized stocks ────

      // ── Step 2b: Fetch MEXC REST ─────────────────────────────────
      const _fetchMEXCNow = async () => {
        const syms = Object.values(_MX);
        // corsproxy.io confirmed working
        const PROXIES = [
          u => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
          u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
          u => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
        ];

        // Fetch all symbols in one request
        const baseUrl = `https://api.mexc.com/api/v3/ticker/24hr?symbols=${encodeURIComponent(JSON.stringify(syms))}`;

        for (const proxyFn of PROXIES) {
          try {
            const r = await fetch(proxyFn(baseUrl));
            if (!r.ok) continue;
            const data = await r.json();
            const arr = Array.isArray(data) ? data : data?.data;
            if (!arr || arr.length < 5) continue;

            let n = 0;
            arr.forEach(t => {
              const sy = _MXr[t.symbol]; if (!sy) return;
              const pr = parseFloat(t.lastPrice); if (pr <= 0) return;
              const prev = parseFloat(t.prevClosePrice) || pr;
              const chg = sanitizePct(t.priceChangePercent);
              _stkP[sy] = {
                pr, chg,
                hi: parseFloat(t.highPrice) || pr,
                lo: parseFloat(t.lowPrice) || pr,
                vol: parseFloat(t.quoteVolume) || 0,
                prevClose: prev, closes: [prev, pr],
                w52h: pr * 1.4, w52l: pr * 0.6,
                currency: 'USDT', mktTime: new Date(), src: 'MEXC'
              };
              n++;
            });

            if (n > 0) {
              console.log('[STK] MEXC REST ✓', n, 'symbols via', proxyFn(baseUrl).split('?')[0].substring(8, 30));
              const dot = document.getElementById('stkLiveDot');
              const src = document.getElementById('stkLiveSrc');
              if (dot) { dot.style.background = '#16c784'; dot.style.boxShadow = '0 0 6px #16c784'; }
              if (src) { src.textContent = 'MEXC Live'; src.style.color = '#16c784'; }
              _renderStk();
              return true;
            }
          } catch (e) { continue; }
        }
        return false;
      };

      // ── Step 3: Yahoo Finance — fallback for symbols Worker missed ──
      const _fetchYahooNow = async () => {
        // Only fetch what Worker hasn't got yet
        const all = _STK
          .filter(s => !_stkP[s.sy] || _stkP[s.sy].pr <= 0)
          .map(s => s.sy);
        if (all.length === 0) { console.log('[STK] Yahoo skipped — Worker got all'); return; }
        console.log('[STK] Yahoo fallback for', all.length, 'missing symbols');
        const batches = [];
        for (let i = 0; i < all.length; i += 80) batches.push(all.slice(i, i + 80));
        const FIELDS = 'regularMarketPrice,regularMarketChangePercent,regularMarketVolume,regularMarketDayHigh,regularMarketDayLow,fiftyTwoWeekHigh,fiftyTwoWeekLow,previousClose';
        const PX = u => [
          `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
          `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
          `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
        ];
        let n = 0;
        await Promise.allSettled(batches.map(async batch => {
          const u = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${batch.join(',')}&fields=${FIELDS}`;
          try {
            const res = await Promise.any(PX(u).map(async pu => {
              const r = await fetch(pu);
              if (!r.ok) throw 0;
              const j = await r.json();
              const d = j?.quoteResponse?.result;
              if (!d?.length) throw 0;
              return d;
            }));
            if (res) { _parseYahooQuote(res); n += res.length; }
          } catch (e) { }
        }));
        if (n > 0) { console.log('[STK] Yahoo ✓', n); _renderStk(); }
      };

      // ── Step 4: WebSocket attempt (may close on some hosts) ─────────
      _initMEXCWs(_MX, _MXr);

      // ── Run Binance + MEXC + Yahoo in parallel ─────────────────────────
      await Promise.all([_fetchMEXCNow(), _fetchYahooNow()]);

      _stkCacheTs = Date.now();
      _loadStaticPrices(); // fill any gaps
      _renderStk();

      // ── Step 5: Auto-refresh every 60s ──
      if (!window._mexcInterval) {
        window._mexcInterval = setInterval(async () => {
          if (!_stkTabD) return;
          // Refresh Worker prices + MEXC miners
          await _fetchWorkerPrices();
          await _fetchMEXCNow();
          console.log('[STK] Auto-refresh done');
        }, 60000);
      }

      return true;
    }

    // ═══════════════════════════════════════════════════════════════
    // MEXC WebSocket — tries first, falls back to REST polling
    // code:1005 = server closed (GitHub Pages domain blocked)
    // In that case, REST interval (every 60s) takes over
    // ═══════════════════════════════════════════════════════════════
    let _mWs = null, _mWsMap = null, _mWsRev = null, _mWsRetry = 0, _mWsTick = false;

    function _initMEXCWs(mxMap, mxRev) {
      _mWsMap = mxMap; _mWsRev = mxRev;
      if (_mWs && (_mWs.readyState === WebSocket.OPEN || _mWs.readyState === WebSocket.CONNECTING)) return;

      try {
        _mWs = new WebSocket('wss://wbs.mexc.com/ws');

        _mWs.onopen = () => {
          _mWsRetry = 0;
          const subs = Object.values(mxMap).map(s => 'spot@public.miniTickers.v3.api@' + s + '@UTC+8');
          for (let i = 0; i < subs.length; i += 30) {
            _mWs.send(JSON.stringify({ method: 'SUBSCRIPTION', params: subs.slice(i, i + 30) }));
          }
          console.log('[STK-WS] Connected:', Object.keys(mxMap).length, 'symbols');
          const dot = document.getElementById('stkLiveDot');
          const src = document.getElementById('stkLiveSrc');
          if (dot) { dot.style.background = '#16c784'; dot.style.boxShadow = '0 0 8px #16c784'; dot.style.animation = 'pulse 1.5s infinite'; }
          if (src) { src.textContent = 'Live'; src.style.color = '#16c784'; }

          // Keep-alive ping every 20s
          _mWs._ping = setInterval(() => {
            if (_mWs && _mWs.readyState === WebSocket.OPEN)
              _mWs.send(JSON.stringify({ method: 'PING' }));
          }, 20000);
        };

        _mWs.onmessage = e => {
          try {
            const msg = JSON.parse(e.data);
            if (!msg || msg.id || msg.msg === 'PONG') return;
            const d = msg.d; if (!d || !d.s) return;
            const sy = mxRev[d.s]; if (!sy) return;
            const pr = parseFloat(d.c); if (!pr || pr <= 0) return;
            const op = parseFloat(d.o) || pr;
            const chg = op > 0 ? (pr - op) / op * 100 : 0;
            // Only update from WS if price is realistic (within 50% of current)
            const existingPr = _stkP[sy]?.pr || 0;
            if (existingPr > 0 && (pr > existingPr * 1.5 || pr < existingPr * 0.5)) return; // suspicious price
            const prev = _stkP[sy]?.prevClose || op;
            _stkP[sy] = {
              ..._stkP[sy], pr, chg,
              hi: parseFloat(d.h) || pr, lo: parseFloat(d.l) || pr,
              vol: parseFloat(d.v) || 0,
              prevClose: prev,
              closes: [...(_stkP[sy]?.closes || [prev]).slice(-4), pr],
              mktTime: new Date(), src: 'MEXC-WS'
            };
            if (!_mWsTick) {
              _mWsTick = true;
              setTimeout(() => { _renderStk(); _mWsTick = false; }, 1000);
            }
          } catch (ex) { }
        };

        _mWs.onerror = () => { };

        _mWs.onclose = ev => {
          if (_mWs._ping) clearInterval(_mWs._ping);
          console.log('[STK-WS] Closed code:', ev.code, '— REST polling active (60s)');
          const dot = document.getElementById('stkLiveDot');
          const src = document.getElementById('stkLiveSrc');
          if (dot) { dot.style.animation = 'none'; dot.style.background = '#f4a522'; }
          if (src) { src.textContent = 'MEXC 60s refresh'; src.style.color = '#f4a522'; }

          // Retry WS up to 3 times only
          _mWsRetry++;
          if (_mWsRetry <= 3 && _mWsMap) {
            setTimeout(() => _initMEXCWs(_mWsMap, _mWsRev), 10000 * _mWsRetry);
          }
        };

        window.addEventListener('beforeunload', () => {
          if (_mWs) _mWs.close();
        });

      } catch (e) {
        console.log('[STK-WS] Failed:', e.message);
      }
    }


    function _loadStaticPrices() {
      const SP = {
        // Major Stocks — Updated March 2026
        AAPL: { pr: 250.12, chg: -2.1 }, MSFT: { pr: 395.55, chg: -1.36 }, NVDA: { pr: 180.25, chg: -3.11 },
        GOOGL: { pr: 175.84, chg: -1.2 }, GOOG: { pr: 175.42, chg: -1.2 }, AMZN: { pr: 215.76, chg: -1.4 },
        META: { pr: 612.38, chg: -0.9 }, TSLA: { pr: 391.2, chg: -2.0 }, AVGO: { pr: 198.44, chg: -1.2 },
        ORCL: { pr: 185.62, chg: 0.6 }, AMD: { pr: 115.42, chg: -2.8 }, INTC: { pr: 23.42, chg: -1.4 },
        QCOM: { pr: 158.36, chg: -0.8 }, TXN: { pr: 178.92, chg: 0.3 }, MU: { pr: 98.44, chg: -2.2 },
        AMAT: { pr: 158.62, chg: -2.0 }, LRCX: { pr: 688.44, chg: -1.6 }, KLAC: { pr: 712.38, chg: -1.4 },
        ADI: { pr: 205.62, chg: -0.6 }, MRVL: { pr: 72.38, chg: -2.2 }, NXPI: { pr: 192.44, chg: -0.4 },
        ASML: { pr: 712.38, chg: -1.2 }, TSM: { pr: 178.62, chg: -0.6 }, CSCO: { pr: 62.44, chg: 0.4 },
        IBM: { pr: 268.44, chg: 0.3 }, SNOW: { pr: 158.62, chg: -1.8 }, DDOG: { pr: 122.38, chg: -1.6 },
        NET: { pr: 118.44, chg: 1.2 }, ZS: { pr: 192.62, chg: -1.0 }, CRWD: { pr: 368.44, chg: 1.6 },
        PANW: { pr: 178.62, chg: -0.6 }, FTNT: { pr: 102.38, chg: 0.4 }, OKTA: { pr: 62.44, chg: -2.2 },
        PLTR: { pr: 88.62, chg: -2.8 }, CRM: { pr: 295.44, chg: -1.2 }, ADBE: { pr: 378.62, chg: -2.8 },
        NOW: { pr: 998.44, chg: 1.6 }, WDAY: { pr: 235.62, chg: -0.6 }, HUBS: { pr: 512.38, chg: 0.2 },
        TEAM: { pr: 205.44, chg: -1.0 }, ZM: { pr: 65.62, chg: -1.6 }, SHOP: { pr: 82.38, chg: -2.2 },
        INTU: { pr: 598.44, chg: -1.0 }, ADSK: { pr: 275.62, chg: -0.4 }, ABNB: { pr: 132.38, chg: -1.0 },
        BKNG: { pr: 5125.44, chg: 0.6 }, UBER: { pr: 85.62, chg: -1.6 }, LYFT: { pr: 12.38, chg: -3.4 },
        EBAY: { pr: 55.44, chg: 0.2 }, ETSY: { pr: 46.62, chg: -2.2 },
        // Finance
        JPM: { pr: 272.38, chg: -0.4 }, BAC: { pr: 46.62, chg: -0.6 }, WFC: { pr: 82.38, chg: -0.4 },
        C: { pr: 78.44, chg: 0.1 }, GS: { pr: 612.62, chg: -0.2 }, MS: { pr: 125.38, chg: -0.2 },
        BX: { pr: 162.44, chg: -1.0 }, BLK: { pr: 1042.62, chg: 0.2 }, SCHW: { pr: 82.38, chg: -1.6 },
        AXP: { pr: 285.44, chg: -0.4 }, V: { pr: 348.62, chg: -0.2 }, MA: { pr: 542.38, chg: -0.4 },
        PYPL: { pr: 72.44, chg: -2.8 }, SQ: { pr: 58.62, chg: -3.2 }, COIN: { pr: 195.38, chg: -3.8 },
        MSTR: { pr: 298.44, chg: -4.8 }, MARA: { pr: 16.62, chg: -5.2 }, RIOT: { pr: 9.38, chg: -4.8 },
        USB: { pr: 46.44, chg: -0.4 }, TFC: { pr: 42.62, chg: -0.6 }, PNC: { pr: 182.38, chg: -0.2 },
        COF: { pr: 175.44, chg: -1.0 }, ICE: { pr: 165.62, chg: 0.1 }, CME: { pr: 225.38, chg: 0.2 },
        SPGI: { pr: 478.44, chg: 0.1 }, MCO: { pr: 415.62, chg: 0.2 },
        // Healthcare
        JNJ: { pr: 162.38, chg: -0.2 }, UNH: { pr: 482.44, chg: -1.6 }, PFE: { pr: 27.62, chg: -1.2 },
        MRK: { pr: 98.38, chg: -1.0 }, ABBV: { pr: 185.44, chg: 0.4 }, LLY: { pr: 842.62, chg: 1.2 },
        BMY: { pr: 56.38, chg: -0.6 }, AMGN: { pr: 295.44, chg: -0.2 }, GILD: { pr: 112.62, chg: 0.1 },
        REGN: { pr: 745.38, chg: -1.0 }, MRNA: { pr: 36.44, chg: -2.8 }, BNTX: { pr: 92.62, chg: -1.6 },
        ISRG: { pr: 512.38, chg: 0.6 }, SYK: { pr: 378.44, chg: 0.2 }, BSX: { pr: 98.62, chg: 0.4 },
        // Consumer
        WMT: { pr: 102.38, chg: 0.2 }, COST: { pr: 985.44, chg: 0.4 }, TGT: { pr: 105.62, chg: -3.2 },
        HD: { pr: 395.38, chg: -0.6 }, LOW: { pr: 238.44, chg: -0.4 }, NKE: { pr: 72.62, chg: -1.2 },
        SBUX: { pr: 95.38, chg: -1.2 }, MCD: { pr: 298.44, chg: -0.1 }, KO: { pr: 68.62, chg: 0.1 },
        PEP: { pr: 148.38, chg: -0.2 }, PG: { pr: 168.44, chg: 0.1 },
        BABA: { pr: 142.62, chg: 0.6 }, MELI: { pr: 2085.38, chg: -1.0 }, LULU: { pr: 312.44, chg: -1.2 },
        // Energy
        XOM: { pr: 112.62, chg: -0.6 }, CVX: { pr: 158.38, chg: -1.0 }, COP: { pr: 108.44, chg: -1.2 },
        OXY: { pr: 46.62, chg: -1.6 }, HAL: { pr: 28.38, chg: -2.2 }, SLB: { pr: 40.44, chg: -1.6 },
        KMI: { pr: 24.62, chg: 0.2 }, ET: { pr: 19.38, chg: 0.4 }, LNG: { pr: 205.44, chg: -0.6 },
        NEE: { pr: 72.62, chg: -0.4 }, ENPH: { pr: 62.38, chg: -4.2 }, FSLR: { pr: 155.44, chg: -1.0 },
        // Industrials
        BA: { pr: 178.62, chg: -1.6 }, RTX: { pr: 128.38, chg: -0.2 }, LMT: { pr: 495.44, chg: -0.4 },
        GE: { pr: 205.62, chg: 0.6 }, HON: { pr: 215.38, chg: -0.2 }, CAT: { pr: 378.44, chg: -1.0 },
        DE: { pr: 412.62, chg: -0.6 }, UPS: { pr: 122.38, chg: -1.2 }, FDX: { pr: 235.44, chg: -0.6 },
        DAL: { pr: 48.62, chg: -1.0 }, UAL: { pr: 82.38, chg: -1.6 }, AAL: { pr: 11.44, chg: -2.2 },
        // Real Estate
        AMT: { pr: 195.62, chg: -0.2 }, PLD: { pr: 112.38, chg: -0.6 }, EQIX: { pr: 812.44, chg: -0.4 },
        O: { pr: 54.62, chg: 0.1 }, SPG: { pr: 155.38, chg: 0.2 }, PSA: { pr: 295.44, chg: -0.4 },
        // Media/Telecom
        NFLX: { pr: 978.4, chg: 1.2 }, DIS: { pr: 108.24, chg: -1.4 }, SPOT: { pr: 618.2, chg: 1.4 },
        VZ: { pr: 42.28, chg: 0.4 }, T: { pr: 22.46, chg: 0.6 }, TMUS: { pr: 228.24, chg: 0.8 },
        // Auto
        TSLA: { pr: 391.2, chg: -2.0 }, GM: { pr: 52.38, chg: 0.2 }, F: { pr: 10.88, chg: -1.6 },
        RIVN: { pr: 11.2, chg: -3.4 }, NIO: { pr: 4.82, chg: -3.8 }, TM: { pr: 168.46, chg: -0.8 },
        RACE: { pr: 422.24, chg: 0.6 },
        // ETFs
        SPY: { pr: 562.4, chg: -0.6 }, QQQ: { pr: 482.6, chg: -0.9 }, IWM: { pr: 205.38, chg: -1.2 },
        DIA: { pr: 438.62, chg: -0.4 }, VTI: { pr: 255.44, chg: -0.6 }, VOO: { pr: 512.38, chg: -0.6 },
        VEA: { pr: 54.62, chg: -0.3 }, VWO: { pr: 46.38, chg: -0.4 }, EFA: { pr: 82.44, chg: -0.4 },
        EEM: { pr: 42.62, chg: -0.6 }, GLD: { pr: 298.44, chg: 1.4 }, IAU: { pr: 54.62, chg: 1.2 },
        SLV: { pr: 32.38, chg: 1.6 }, PPLT: { pr: 92.44, chg: 0.6 }, PALL: { pr: 94.62, chg: 0.4 },
        GDX: { pr: 42.38, chg: -0.8 }, GDXJ: { pr: 36.44, chg: -1.2 },
        IBIT: { pr: 52.62, chg: -4.2 }, FBTC: { pr: 52.38, chg: -3.8 }, ARKB: { pr: 72.44, chg: -3.6 },
        ETHA: { pr: 22.62, chg: -4.8 }, FETH: { pr: 28.38, chg: -4.6 },
        ARKK: { pr: 52.44, chg: -2.8 }, ARKG: { pr: 7.62, chg: -3.2 }, ARKW: { pr: 84.38, chg: -2.4 },
        XLK: { pr: 205.44, chg: -1.2 }, XLF: { pr: 44.62, chg: -0.2 }, XLV: { pr: 142.38, chg: -0.4 },
        XLE: { pr: 92.44, chg: -0.6 }, TLT: { pr: 92.62, chg: -0.4 }, AGG: { pr: 96.38, chg: -0.1 },
        HYG: { pr: 80.44, chg: -0.2 }, LQD: { pr: 110.62, chg: -0.2 }, BND: { pr: 74.38, chg: -0.1 },
        TQQQ: { pr: 62.44, chg: -3.8 }, SQQQ: { pr: 7.62, chg: 3.8 }, SOXL: { pr: 19.38, chg: -5.8 },
        UPRO: { pr: 75.44, chg: -2.4 }, SPXU: { pr: 5.62, chg: 2.4 }, UVXY: { pr: 24.38, chg: 14.2 },
        // Commodities
        USO: { pr: 72.46, chg: -1.4 }, BNO: { pr: 18.28, chg: -1.2 }, UNG: { pr: 12.46, chg: -2.8 },
        CORN: { pr: 20.28, chg: -0.8 }, WEAT: { pr: 5.46, chg: -1.2 }, SOYB: { pr: 20.28, chg: -0.6 },
        LIT: { pr: 18.46, chg: -2.4 }, COPX: { pr: 34.28, chg: -1.8 }, REMX: { pr: 16.46, chg: -1.4 },
        URA: { pr: 26.28, chg: -2.4 }, URNM: { pr: 38.46, chg: -2.8 }, CCJ: { pr: 44.28, chg: -1.8 },
        DBC: { pr: 20.46, chg: -1.2 }, PDBC: { pr: 12.28, chg: -1.4 }, GSG: { pr: 16.46, chg: -1.2 },
        DBA: { pr: 20.28, chg: -0.4 }, MOO: { pr: 78.46, chg: -0.8 },
        // Indices — static only (Yahoo proxies reject ^ symbols)
        '^GSPC': { pr: 5614.8, chg: -0.8 }, '^DJI': { pr: 41892.4, chg: -0.4 },
        '^IXIC': { pr: 17682.46, chg: -1.4 }, '^RUT': { pr: 1982.24, chg: -1.8 },
        '^VIX': { pr: 22.46, chg: 18.4 }, '^TNX': { pr: 4.32, chg: 0.4 },
        '^TYX': { pr: 4.68, chg: 0.2 }, '^FVX': { pr: 4.18, chg: 0.2 },
        '^FTSE': { pr: 8378.46, chg: -0.6 }, '^GDAXI': { pr: 22148.24, chg: -1.2 },
        '^FCHI': { pr: 7842.4, chg: -0.8 }, '^STOXX50E': { pr: 5248.46, chg: -0.8 },
        '^N225': { pr: 36842.46, chg: -0.8 }, '^HSI': { pr: 23842.24, chg: 1.4 },
        '^BSESN': { pr: 74218.46, chg: 0.4 }, '^NSEI': { pr: 22142.4, chg: 0.7 },
        '^BVSP': { pr: 124820.4, chg: -0.8 }, '^AORD': { pr: 8142.4, chg: -0.4 },
        '^AXJO': { pr: 7982.3, chg: -0.4 }, '^KOSPI': { pr: 2482.4, chg: 0.7 },
        '^TASI.SR': { pr: 11428.46, chg: -0.4 }, '^DFMGI': { pr: 4182.24, chg: -0.2 },
        '^EGX30': { pr: 30214.28, chg: -0.8 }, '^CASE30': { pr: 26842.4, chg: -0.8 },
        '^ADI': { pr: 9482.3, chg: 0.4 }, '^QSI': { pr: 9842.4, chg: 0.3 },
        'DX-Y.NYB': { pr: 103.8, chg: 0.4 }, '^XAU': { pr: 2648.3, chg: 1.1 },
        '^SOX': { pr: 4842.3, chg: 1.2 }, '^BKX': { pr: 118.4, chg: -0.6 },
        '^VIX': { pr: 22.46, chg: 18.4 }, '^NBI': { pr: 3842.4, chg: 0.8 },
        'CL=F': { pr: 66.84, chg: -1.4 }, 'BZ=F': { pr: 76.3, chg: 1.1 },
        'GC=F': { pr: 2972.4, chg: 0.8 }, 'SI=F': { pr: 32.84, chg: 0.8 },
        'HG=F': { pr: 4.82, chg: 0.6 }, 'ZC=F': { pr: 442.3, chg: -0.8 },
        'ZW=F': { pr: 548.4, chg: 0.4 }, 'ZS=F': { pr: 982.3, chg: -0.6 },
        'ES=F': { pr: 5642.46, chg: -0.9 }, 'NQ=F': { pr: 19482.24, chg: -1.4 },
        'BTC=F': { pr: 83500.0, chg: -2.8 }, 'ETH=F': { pr: 1982.0, chg: -5.4 },
        // ══ New Stocks ══
        CHWY: { pr: 24.46, chg: -1.8 }, W: { pr: 44.28, chg: -2.8 }, CVNA: { pr: 268.46, chg: 2.4 },
        VTRS: { pr: 12.4, chg: -1.2 }, OGN: { pr: 14.3, chg: -0.8 }, VRNS: { pr: 48.4, chg: -1.4 },
        TENB: { pr: 32.46, chg: -2.4 }, QLYS: { pr: 148.2, chg: -0.6 }, SAIL: { pr: 10.28, chg: -2.4 },
        RDWR: { pr: 24.46, chg: -1.2 }, FSLY: { pr: 6.28, chg: -3.8 }, NCNO: { pr: 18.46, chg: -2.2 },
        ENFN: { pr: 11.28, chg: -1.8 }, TOST: { pr: 24.46, chg: -1.4 }, RELY: { pr: 14.28, chg: -2.8 },
        FLYW: { pr: 18.46, chg: -1.6 }, BILL: { pr: 42.28, chg: -3.2 }, BLZE: { pr: 6.46, chg: -4.8 },
        NRDY: { pr: 3.28, chg: -3.4 }, LMND: { pr: 18.46, chg: -2.8 }, ROOT: { pr: 12.28, chg: -1.4 },
        LBRDA: { pr: 78.46, chg: 0.4 }, FWONK: { pr: 64.28, chg: 0.8 }, LSXMA: { pr: 498.46, chg: 0.6 },
        'ON': { pr: 52.4, chg: -2.8 },
        'STX': { pr: 98.2, chg: -1.2 },
        'WDC': { pr: 58.4, chg: -1.8 },
        'HPQ': { pr: 32.4, chg: -0.8 },
        'DELL': { pr: 122.2, chg: -1.4 },
        'HPE': { pr: 18.2, chg: -0.6 },
        'ACN': { pr: 298.3, chg: -0.4 },
        'SAP': { pr: 248.4, chg: 0.8 },
        'INFY': { pr: 18.2, chg: -0.4 },
        'WIT': { pr: 6.8, chg: -0.6 },
        'S': { pr: 22.4, chg: -2.2 },
        'CYBR': { pr: 248.4, chg: -0.8 },
        'MDB': { pr: 242.4, chg: -2.8 },
        'ESTC': { pr: 78.3, chg: -1.4 },
        'AI': { pr: 38.85, chg: -2.4 },
        'PATH': { pr: 20.55, chg: -2.0 },
        'CFLT': { pr: 18.4, chg: -2.2 },
        'GTLB': { pr: 52.3, chg: -1.8 },
        'HCP': { pr: 18.3, chg: -0.4 },
        'AFRM': { pr: 52.2, chg: -4.2 },
        'SOFI': { pr: 22.75, chg: -1.8 },
        'HOOD': { pr: 61.5, chg: -1.2 },
        'HUT': { pr: 10.3, chg: -5.2 },
        'CLSK': { pr: 18.0, chg: -5.0 },
        'CIFR': { pr: 5.18, chg: -5.8 },
        'BTDR': { pr: 10.28, chg: -6.4 },
        'CORZ': { pr: 29.5, chg: -3.6 },
        'BIIB': { pr: 238.4, chg: -0.4 },
        'VRTX': { pr: 428.2, chg: 0.8 },
        'EW': { pr: 82.4, chg: -0.4 },
        'DXCM': { pr: 82.3, chg: -1.8 },
        'IDXX': { pr: 512.4, chg: 0.4 },
        'HUM': { pr: 248.3, chg: -0.8 },
        'CVS': { pr: 62.3, chg: -1.4 },
        'MCK': { pr: 598.4, chg: 0.4 },
        'ABC': { pr: 228.4, chg: 0.2 },
        'CAH': { pr: 98.3, chg: 0.2 },
        'CI': { pr: 342.4, chg: -0.8 },
        'DPZ': { pr: 428.4, chg: 0.4 },
        'MDLZ': { pr: 68.4, chg: -0.4 },
        'PM': { pr: 98.4, chg: 0.4 },
        'MO': { pr: 42.3, chg: 0.6 },
        'CL': { pr: 98.3, chg: 0.2 },
        'KMB': { pr: 128.4, chg: 0.2 },
        'CHD': { pr: 98.3, chg: 0.2 },
        'EL': { pr: 82.4, chg: -1.4 },
        'ULTA': { pr: 412.3, chg: 0.4 },
        'TPR': { pr: 42.4, chg: -0.8 },
        'RL': { pr: 198.3, chg: 0.2 },
        'PVH': { pr: 62.4, chg: -0.6 },
        'PSX': { pr: 128.4, chg: -0.6 },
        'VLO': { pr: 148.3, chg: -0.8 },
        'MPC': { pr: 162.2, chg: -0.8 },
        'PXD': { pr: 238.4, chg: -1.2 },
        'EOG': { pr: 128.2, chg: -1.4 },
        'DVN': { pr: 42.2, chg: -2.4 },
        'FANG': { pr: 198.3, chg: -1.4 },
        'BKR': { pr: 32.4, chg: -1.2 },
        'WMB': { pr: 42.4, chg: 0.2 },
        'OKE': { pr: 98.3, chg: 0.4 },
        'NOC': { pr: 498.3, chg: -0.4 },
        'GD': { pr: 298.4, chg: -0.2 },
        'MMM': { pr: 98.3, chg: -0.6 },
        'EMR': { pr: 112.4, chg: -0.4 },
        'ROK': { pr: 298.3, chg: -0.4 },
        'ITW': { pr: 248.4, chg: 0.2 },
        'PH': { pr: 528.3, chg: 0.2 },
        'CARR': { pr: 62.3, chg: -0.4 },
        'OTIS': { pr: 98.4, chg: 0.2 },
        'LUV': { pr: 28.4, chg: -0.8 },
        'CCI': { pr: 98.3, chg: -0.6 },
        'WELL': { pr: 98.3, chg: 0.4 },
        'AVB': { pr: 198.4, chg: -0.2 },
        'EQR': { pr: 62.3, chg: -0.4 },
        'PARA': { pr: 12.4, chg: -2.4 },
        'RBLX': { pr: 61.55, chg: -1.8 },
        'EA': { pr: 128.4, chg: 0.4 },
        'TTWO': { pr: 148.3, chg: -0.8 },
        'ATVI': { pr: 82.4, chg: 0.2 },
        'U': { pr: 22.4, chg: 0.5 },
        'CHTR': { pr: 348.4, chg: -0.8 },
        'LCID': { pr: 4.55, chg: -3.6 },
        'LI': { pr: 38.85, chg: -2.8 },
        'XPEV': { pr: 11.94, chg: -2.6 },
        'STLA': { pr: 12.3, chg: -1.8 },
        'SPTM': { pr: 62.4, chg: -0.9 },
        'VCIT': { pr: 82.2, chg: -0.4 },
        'VCSH': { pr: 78.4, chg: -0.2 },
        'BNDX': { pr: 48.4, chg: -0.2 },
        'BAR': { pr: 48.3, chg: 0.4 },
        'COMT': { pr: 22.3, chg: -0.6 },
        'BCI': { pr: 22.4, chg: -0.4 },
        'HODL': { pr: 52.4, chg: -4.2 },
        'BTCO': { pr: 52.3, chg: -4.2 },
        'BRRR': { pr: 52.3, chg: -4.2 },
        'CETH': { pr: 22.3, chg: -5.4 },
        'CANE': { pr: 12.3, chg: -0.4 },
        'WOOD': { pr: 78.4, chg: -0.4 },
        'PAVE': { pr: 28.3, chg: -0.4 },
        'SIL': { pr: 28.3, chg: 0.6 },
        'GUNR': { pr: 42.3, chg: -0.8 },
        '^IRX': { pr: 5.2, chg: 0.0 },
        'MNDY': { pr: 248.4, chg: 0.4 },
        'DOCU': { pr: 48.2, chg: -2.8 },
        'ANSS': { pr: 312.4, chg: -0.4 },
        'CDNS': { pr: 282.4, chg: 0.4 },
        'SNPS': { pr: 512.3, chg: -0.8 },
        'ADP': { pr: 248.3, chg: 0.4 },
        'PAYX': { pr: 128.4, chg: 0.2 },
        'PAYC': { pr: 178.3, chg: -0.4 },
        'BR': { pr: 148.2, chg: 0.2 },
        'FIS': { pr: 82.3, chg: -0.8 },
        'FISV': { pr: 178.4, chg: 0.2 },
        'GPN': { pr: 98.3, chg: -0.8 },
        'EPAM': { pr: 148.2, chg: -0.8 },
        'GLOB': { pr: 42.3, chg: -0.6 },
        'ACLS': { pr: 52.3, chg: -1.8 },
        'ONTO': { pr: 48.2, chg: -1.4 },
        'ENTG': { pr: 98.4, chg: -1.4 },
        'NTAP': { pr: 98.2, chg: -0.4 },
        'PSTG': { pr: 58.3, chg: -0.8 },
        'NTNX': { pr: 42.1, chg: -1.2 },
        'ANET': { pr: 312.4, chg: 0.8 },
        'JNPR': { pr: 32.8, chg: -0.4 },
        'FFIV': { pr: 182.3, chg: -0.2 },
        'BBAI': { pr: 6.27, chg: -4.2 },
        'SOUN': { pr: 12.55, chg: -2.8 },
        'AMBA': { pr: 48.3, chg: -1.4 },
        'CEVA': { pr: 28.4, chg: -1.2 },
        'LC': { pr: 14.2, chg: -2.4 },
        'UPST': { pr: 62.4, chg: -3.2 },
        'ALLY': { pr: 38.2, chg: -1.4 },
        'DFS': { pr: 148.2, chg: -0.8 },
        'SYF': { pr: 42.3, chg: -0.8 },
        'CBOE': { pr: 198.4, chg: 0.2 },
        'NDAQ': { pr: 68.3, chg: -0.4 },
        'TRU': { pr: 82.4, chg: -0.4 },
        'EFX': { pr: 242.3, chg: -0.4 },
        'WULF': { pr: 6.15, chg: -5.6 },
        'IREN': { pr: 10.98, chg: -4.8 },
        'HIVE': { pr: 4.82, chg: -7.2 },
        'BITF': { pr: 4.68, chg: -6.2 },
        'HOLX': { pr: 68.3, chg: -0.2 },
        'BAX': { pr: 28.4, chg: -1.2 },
        'BDX': { pr: 228.3, chg: -0.2 },
        'ZBH': { pr: 112.4, chg: -0.4 },
        'RMD': { pr: 178.3, chg: 0.4 },
        'ALGN': { pr: 198.4, chg: -0.4 },
        'TFX': { pr: 248.3, chg: -0.2 },
        'PODD': { pr: 178.4, chg: 0.8 },
        'INSP': { pr: 148.3, chg: 0.6 },
        'NVAX': { pr: 8.3, chg: -3.2 },
        'CRSP': { pr: 58.3, chg: -2.4 },
        'NTLA': { pr: 12.4, chg: -3.8 },
        'EDIT': { pr: 8.2, chg: -4.2 },
        'BEAM': { pr: 22.4, chg: -2.8 },
        'RXRX': { pr: 12.3, chg: -3.4 },
        'CNC': { pr: 72.3, chg: -1.2 },
        'HCA': { pr: 328.4, chg: 0.4 },
        'DVA': { pr: 128.3, chg: -0.4 },
        'QSR': { pr: 68.3, chg: -0.4 },
        'WEN': { pr: 18.4, chg: -0.4 },
        'UA': { pr: 8.3, chg: -1.2 },
        'SKX': { pr: 62.4, chg: -0.4 },
        'CROX': { pr: 98.3, chg: -0.8 },
        'DECK': { pr: 148.4, chg: 0.4 },
        'ONON': { pr: 52.3, chg: 0.8 },
        'VFC': { pr: 18.4, chg: -2.4 },
        'GPS': { pr: 22.3, chg: -0.8 },
        'URBN': { pr: 48.4, chg: -0.4 },
        'ANF': { pr: 82.3, chg: -1.2 },
        'AEO': { pr: 22.4, chg: -1.4 },
        'KHC': { pr: 32.3, chg: -0.8 },
        'GIS': { pr: 68.4, chg: -0.2 },
        'K': { pr: 78.3, chg: 0.5 },
        'CPB': { pr: 42.4, chg: -0.4 },
        'HRL': { pr: 28.3, chg: -0.6 },
        'TSN': { pr: 58.4, chg: -0.4 },
        'CAG': { pr: 28.3, chg: -0.6 },
        'SJM': { pr: 112.4, chg: -0.2 },
        'MKC': { pr: 72.3, chg: -0.2 },
        'TAP': { pr: 62.4, chg: -0.4 },
        'BUD': { pr: 58.3, chg: -0.4 },
        'STZ': { pr: 228.4, chg: 0.2 },
        'DEO': { pr: 128.3, chg: -0.2 },
        'BTI': { pr: 28.4, chg: 0.6 },
        'SEDG': { pr: 28.3, chg: -5.8 },
        'RUN': { pr: 8.4, chg: -3.8 },
        'ARRY': { pr: 12.3, chg: -3.8 },
        'BE': { pr: 28.4, chg: -2.4 },
        'PLUG': { pr: 4.8, chg: -5.2 },
        'DUK': { pr: 98.4, chg: 0.2 },
        'SO': { pr: 68.3, chg: 0.4 },
        'AEP': { pr: 98.4, chg: -0.2 },
        'EXC': { pr: 42.3, chg: -0.4 },
        'XEL': { pr: 62.4, chg: 0.2 },
        'WEC': { pr: 92.3, chg: 0.4 },
        'ETR': { pr: 52.4, chg: 0.2 },
        'AES': { pr: 22.3, chg: -0.8 },
        'NXE': { pr: 8.2, chg: -2.4 },
        'DNN': { pr: 2.8, chg: -3.2 },
        'UUUU': { pr: 5.4, chg: -2.8 },
        'NOV': { pr: 18.3, chg: -1.8 },
        'RIG': { pr: 8.4, chg: -2.8 },
        'VAL': { pr: 42.3, chg: -2.4 },
        'HP': { pr: 32.4, chg: -1.8 },
        'TRGP': { pr: 98.3, chg: 0.4 },
        'HES': { pr: 148.4, chg: -1.2 },
        'CNQ': { pr: 42.3, chg: -0.8 },
        'SU': { pr: 48.4, chg: -0.6 },
        'ENB': { pr: 38.3, chg: 0.6 },
        'BP': { pr: 28.3, chg: -0.8 },
        'SHEL': { pr: 62.4, chg: -0.4 },
        'TTE': { pr: 62.3, chg: -0.6 },
        'HII': { pr: 248.3, chg: -0.4 },
        'TDG': { pr: 1398.4, chg: 0.4 },
        'HEI': { pr: 198.3, chg: 0.6 },
        'KTOS': { pr: 28.3, chg: 1.2 },
        'LDOS': { pr: 148.4, chg: -0.2 },
        'SAIC': { pr: 112.3, chg: -0.2 },
        'ETN': { pr: 312.4, chg: 0.4 },
        'TT': { pr: 248.3, chg: 0.4 },
        'JCI': { pr: 68.4, chg: 0.2 },
        'LII': { pr: 498.3, chg: 0.2 },
        'AGCO': { pr: 98.4, chg: -0.8 },
        'WAB': { pr: 98.3, chg: 0.4 },
        'IDEX': { pr: 228.3, chg: 0.2 },
        'ROP': { pr: 548.3, chg: 0.2 },
        'AME': { pr: 172.4, chg: 0.2 },
        'VRSK': { pr: 248.3, chg: 0.4 },
        'IEX': { pr: 228.3, chg: 0.2 },
        'CHRW': { pr: 98.4, chg: -0.2 },
        'XPO': { pr: 112.3, chg: 0.4 },
        'ODFL': { pr: 198.4, chg: 0.4 },
        'SAIA': { pr: 298.3, chg: 0.4 },
        'JBHT': { pr: 178.4, chg: -0.4 },
        'KNX': { pr: 48.3, chg: -0.4 },
        'GRAB': { pr: 4.8, chg: 1.2 },
        'CCL': { pr: 22.4, chg: -1.8 },
        'RCL': { pr: 182.2, chg: 0.8 },
        'NCLH': { pr: 22.4, chg: -1.2 },
        'ALK': { pr: 42.3, chg: -1.4 },
        'JBLU': { pr: 8.3, chg: -2.8 },
        'SBAC': { pr: 198.4, chg: -0.4 },
        'EXR': { pr: 148.4, chg: -0.4 },
        'CUBE': { pr: 42.3, chg: -0.4 },
        'STAG': { pr: 38.4, chg: -0.2 },
        'REXR': { pr: 48.3, chg: -0.6 },
        'ARE': { pr: 98.4, chg: -0.4 },
        'PEAK': { pr: 18.3, chg: -0.4 },
        'MPW': { pr: 8.3, chg: -1.8 },
        'VTR': { pr: 48.4, chg: 0.2 },
        'KIM': { pr: 22.4, chg: 0.2 },
        'REG': { pr: 68.3, chg: 0.2 },
        'FRT': { pr: 98.4, chg: 0.2 },
        'NNN': { pr: 42.3, chg: 0.4 },
        'ADC': { pr: 78.4, chg: 0.4 },
        'HST': { pr: 18.3, chg: -0.8 },
        'NWSA': { pr: 22.3, chg: -0.4 },
        'NYT': { pr: 48.4, chg: 0.4 },
        'DKNG': { pr: 70.85, chg: -1.2 },
        'PENN': { pr: 18.4, chg: -1.2 },
        'MGM': { pr: 38.2, chg: -1.4 },
        'WYNN': { pr: 82.4, chg: -1.2 },
        'LVS': { pr: 48.3, chg: -0.8 },
        'CZR': { pr: 42.4, chg: -1.8 },
        'LYV': { pr: 98.3, chg: 0.6 },
        'WMG': { pr: 28.4, chg: 0.4 },
        'DISH': { pr: 8.3, chg: -3.2 },
        'LUMN': { pr: 2.8, chg: -4.2 },
        'VOD': { pr: 8.4, chg: -0.8 },
        'AMX': { pr: 18.3, chg: -0.4 },
        'TEF': { pr: 4.2, chg: -0.4 },
        'HMC': { pr: 28.3, chg: -0.6 },
        'APTV': { pr: 82.4, chg: -1.4 },
        'LEA': { pr: 128.3, chg: -0.8 },
        'BWA': { pr: 28.4, chg: -1.2 },
        'MGA': { pr: 48.3, chg: -0.6 },
        'IVV': { pr: 562.4, chg: -0.9 },
        'SPLG': { pr: 62.4, chg: -0.8 },
        'RSP': { pr: 178.3, chg: -0.8 },
        'MDY': { pr: 512.4, chg: -1.2 },
        'VO': { pr: 248.3, chg: -0.8 },
        'IWF': { pr: 312.4, chg: -1.0 },
        'IWD': { pr: 172.3, chg: 0.2 },
        'VUG': { pr: 348.4, chg: -1.0 },
        'VTV': { pr: 148.3, chg: 0.2 },
        'MTUM': { pr: 198.4, chg: -0.6 },
        'QUAL': { pr: 148.3, chg: -0.4 },
        'USMV': { pr: 82.4, chg: -0.2 },
        'SCHX': { pr: 68.3, chg: -0.6 },
        'VIS': { pr: 198.4, chg: -0.6 },
        'VCR': { pr: 248.3, chg: -1.0 },
        'VDC': { pr: 198.4, chg: 0.2 },
        'VOX': { pr: 112.3, chg: -0.6 },
        'RYT': { pr: 248.4, chg: -1.4 },
        'CURE': { pr: 28.3, chg: -2.8 },
        'NAIL': { pr: 48.4, chg: -2.8 },
        'GUSH': { pr: 18.3, chg: -3.2 },
        'PRNT': { pr: 18.4, chg: -1.8 },
        'IZRL': { pr: 28.3, chg: 0.2 },
        'JNK': { pr: 98.4, chg: -0.4 },
        'GOVT': { pr: 22.3, chg: -0.2 },
        'VGSH': { pr: 58.3, chg: 0.0 },
        'VGIT': { pr: 62.4, chg: -0.4 },
        'VGLT': { pr: 68.3, chg: -0.6 },
        'BSV': { pr: 72.4, chg: 0.0 },
        'ANGL': { pr: 28.3, chg: -0.2 },
        'BKLN': { pr: 18.4, chg: -0.2 },
        'BIL': { pr: 91.3, chg: 0.0 },
        'SHV': { pr: 110.4, chg: 0.0 },
        'SGOL': { pr: 28.4, chg: 0.4 },
        'AAAU': { pr: 24.3, chg: 0.4 },
        'PHYS': { pr: 26.4, chg: 0.4 },
        'SILJ': { pr: 12.4, chg: 0.4 },
        'ETHV': { pr: 22.4, chg: -5.2 },
        'BITQ': { pr: 12.3, chg: -4.8 },
        'BKCH': { pr: 18.3, chg: -5.4 },
        'BLOK': { pr: 16.3, chg: -3.8 },
        'BITO': { pr: 18.28, chg: -5.6 },
        'XBTF': { pr: 52.3, chg: -4.4 },
        'SPXL': { pr: 148.3, chg: -2.8 },
        'SPXS': { pr: 8.4, chg: 2.8 },
        'UDOW': { pr: 98.3, chg: -1.4 },
        'TNA': { pr: 42.4, chg: -5.4 },
        'TZA': { pr: 8.3, chg: 5.4 },
        'LABD': { pr: 8.4, chg: 5.4 },
        'TMF': { pr: 8.3, chg: -1.8 },
        'TMV': { pr: 12.4, chg: 1.8 },
        'TBT': { pr: 28.3, chg: 1.2 },
        'UGL': { pr: 48.4, chg: 0.8 },
        'GLL': { pr: 8.3, chg: -0.8 },
        'AGQ': { pr: 28.4, chg: 1.6 },
        'UCO': { pr: 28.3, chg: -2.8 },
        'SCO': { pr: 8.4, chg: 2.8 },
        'KOLD': { pr: 8.3, chg: 5.6 },
        'DRN': { pr: 18.4, chg: -2.4 },
        'FAS': { pr: 48.3, chg: -1.8 },
        'FAZ': { pr: 8.4, chg: 1.8 },
        'EDC': { pr: 28.3, chg: -3.2 },
        'OIL': { pr: 28.3, chg: -1.4 },
        'UGAZ': { pr: 8.3, chg: -5.6 },
        'TAGS': { pr: 28.3, chg: -0.6 },
        'JO': { pr: 42.4, chg: 0.8 },
        'NIB': { pr: 18.3, chg: -0.4 },
        'SGG': { pr: 18.4, chg: -0.4 },
        'BAL': { pr: 12.4, chg: -0.4 },
        'VEGI': { pr: 28.4, chg: -0.4 },
        'DBO': { pr: 18.4, chg: -1.2 },
        'DBB': { pr: 18.3, chg: -0.8 },
        'DBP': { pr: 48.4, chg: 0.2 },
        'RJI': { pr: 8.3, chg: -0.8 },
        'FTGC': { pr: 28.4, chg: -0.4 },
        'CPER': { pr: 28.4, chg: -0.8 },
        'URNJ': { pr: 12.3, chg: -2.4 },
        '^STOXX': { pr: 512.4, chg: -0.6 },
        '^N100': { pr: 4982.3, chg: -0.6 },
        '^HGX': { pr: 698.4, chg: -0.8 },
        '^XOI': { pr: 1842.3, chg: -0.8 },
        'HO=F': { pr: 2.42, chg: -0.8 },
        'RB=F': { pr: 2.28, chg: -0.6 },
        'PL=F': { pr: 982.4, chg: -0.4 },
        'PA=F': { pr: 1082.3, chg: -0.8 },
        'LBS=F': { pr: 482.4, chg: -0.4 },
        'ZB=F': { pr: 112.3, chg: 0.4 },
        'ZF=F': { pr: 108.4, chg: 0.2 },
        '6A=F': { pr: 0.628, chg: -0.2 },
        '6C=F': { pr: 0.698, chg: 0.1 },
        'MBT=F': { pr: 842.3, chg: -4.2 },
        'MET=F': { pr: 382.4, chg: -5.4 },
        'MSCI': { pr: 498.2, chg: 0.2 },
        'PTC': { pr: 178.2, chg: -0.4 },
        'PCTY': { pr: 152.4, chg: -0.4 },
        'WEX': { pr: 152.4, chg: -0.4 },
        'CDW': { pr: 198.3, chg: -0.4 },
        'MKSI': { pr: 112.3, chg: -1.2 },
        'CIEN': { pr: 72.4, chg: -0.8 },
        'VIAV': { pr: 14.2, chg: -1.2 },
        'ABMD': { pr: 312.4, chg: 0.4 },
        'NVCR': { pr: 28.4, chg: -0.8 },
        'MOH': { pr: 282.4, chg: -0.6 },
        'THC': { pr: 78.3, chg: 0.4 },
        'UHS': { pr: 212.4, chg: 0.2 },
        'NVST': { pr: 18.3, chg: -0.4 },
        'XRAY': { pr: 22.4, chg: -0.8 },
        'FATE': { pr: 8.4, chg: -4.8 },
        'CTRA': { pr: 28.3, chg: -1.8 },
        'APA': { pr: 28.4, chg: -2.8 },
        'MRO': { pr: 28.3, chg: -1.8 },
        'TRP': { pr: 42.4, chg: 0.4 },
        'EQNR': { pr: 28.3, chg: -1.2 },
        'E': { pr: 28.4, chg: 0.5 },
        'PCG': { pr: 18.4, chg: -0.4 },
        'EIX': { pr: 68.3, chg: -0.2 },
        'FE': { pr: 22.3, chg: -0.4 },
        'D': { pr: 48.4, chg: 0.5 },
        'ES': { pr: 62.4, chg: 0.2 },
        'SPWR': { pr: 4.8, chg: -4.8 },
        'NOVA': { pr: 8.3, chg: -3.2 },
        'BLDP': { pr: 4.2, chg: -4.2 },
        'CW': { pr: 198.4, chg: 0.4 },
        'CNH': { pr: 14.2, chg: -0.8 },
        'HBI': { pr: 8.3, chg: -1.4 },
        'LSI': { pr: 28.4, chg: 0.2 },
        'STOR': { pr: 28.3, chg: 0.4 },
        'FR': { pr: 62.4, chg: 0.2 },
        'EGP': { pr: 178.3, chg: 0.4 },
        'HR': { pr: 22.4, chg: -0.2 },
        'CTRE': { pr: 28.3, chg: 0.4 },
        'BRX': { pr: 22.4, chg: 0.2 },
        'RHP': { pr: 98.4, chg: 0.4 },
        'APLE': { pr: 18.3, chg: -0.2 },
        'ORAN': { pr: 12.4, chg: -0.4 },
        'BIDU': { pr: 98.28, chg: -0.8 },
        'NTES': { pr: 78.3, chg: 0.6 },
        'TME': { pr: 8.3, chg: 0.4 },
        'BILI': { pr: 29.55, chg: 0.5 },
        'IQ': { pr: 4.2, chg: -1.4 },
        'YY': { pr: 42.3, chg: 0.4 },
        'WB': { pr: 18.4, chg: 0.6 },
        'BZUN': { pr: 4.8, chg: 0.6 },
        'VIPS': { pr: 28.4, chg: 0.8 },
        'EDU': { pr: 48.3, chg: 0.8 },
        'TAL': { pr: 12.4, chg: 0.6 },
        'GDS': { pr: 18.3, chg: 0.4 },
        'HTHT': { pr: 28.4, chg: 0.4 },
        'YUMC': { pr: 42.3, chg: 0.4 },
        'SBSW': { pr: 8.4, chg: -0.8 },
        'GOLD': { pr: 18.4, chg: 0.8 },
        'NEM': { pr: 42.2, chg: -0.8 },
        'KGC': { pr: 8.2, chg: 0.6 },
        'AEM': { pr: 78.4, chg: 0.8 },
        'WPM': { pr: 58.3, chg: 0.8 },
        'FNV': { pr: 148.4, chg: 0.4 },
        'RGLD': { pr: 128.3, chg: 0.6 },
        'AG': { pr: 8.4, chg: 0.6 },
        'PAAS': { pr: 22.3, chg: 0.4 },
        'FCX': { pr: 42.4, chg: -2.4 },
        'SCCO': { pr: 98.3, chg: -0.8 },
        'RIO': { pr: 68.4, chg: -0.6 },
        'BHP': { pr: 58.3, chg: -0.8 },
        'VALE': { pr: 12.4, chg: -1.4 },
        'AA': { pr: 28.2, chg: -1.8 },
        'CLF': { pr: 18.4, chg: -2.4 },
        'X': { pr: 28.4, chg: -1.8 },
        'NUE': { pr: 178.2, chg: -0.4 },
        'STLD': { pr: 98.3, chg: -0.8 },
        'CB': { pr: 248.4, chg: 0.2 },
        'MMC': { pr: 212.3, chg: 0.2 },
        'AON': { pr: 348.4, chg: 0.2 },
        'AJG': { pr: 248.3, chg: 0.2 },
        'WTW': { pr: 248.4, chg: 0.2 },
        'PRU': { pr: 112.3, chg: -0.4 },
        'MET': { pr: 68.4, chg: -0.4 },
        'AFL': { pr: 82.3, chg: -0.4 },
        'ALL': { pr: 182.4, chg: -0.2 },
        'PGR': { pr: 248.3, chg: 0.4 },
        'TRV': { pr: 198.4, chg: 0.2 },
        'HIG': { pr: 98.4, chg: -0.2 },
        'UNM': { pr: 42.3, chg: 0.2 },
        'LNC': { pr: 28.4, chg: -0.4 },
        'GL': { pr: 112.3, chg: 0.2 },
        'AIZ': { pr: 128.4, chg: 0.2 },
        'BRK-B': { pr: 482.3, chg: 0.2 },
        'WM': { pr: 198.4, chg: 0.4 },
        'RSG': { pr: 178.3, chg: 0.4 },
        'CLX': { pr: 128.4, chg: 0.2 },
        'SYY': { pr: 82.4, chg: 0.2 },
        'PFGC': { pr: 68.4, chg: 0.2 },
        'WBA': { pr: 18.3, chg: -2.4 },
        'RAD': { pr: 0.8, chg: -8.4 },
        'DGX': { pr: 148.4, chg: 0.2 },
        'LH': { pr: 228.3, chg: 0.2 },
        'IQV': { pr: 248.3, chg: -0.4 },
        'CRL': { pr: 248.4, chg: 0.2 },
        'MTD': { pr: 1398.4, chg: 0.4 },
        'TMO': { pr: 532.4, chg: 0.4 },
        'DHR': { pr: 212.2, chg: 0.2 },
        'A': { pr: 142.4, chg: 0.2 },
        'PKI': { pr: 112.3, chg: 0.2 },
        'TECH': { pr: 68.4, chg: 0.2 },
        'NEOG': { pr: 22.3, chg: -0.4 },
        'GKOS': { pr: 78.4, chg: 0.6 },
        'IRTC': { pr: 148.3, chg: 0.4 },
        'LIVN': { pr: 48.4, chg: -0.4 },
        'STE': { pr: 198.3, chg: 0.2 },
        'LTC': { pr: 38.3, chg: 0.4 },
        'SBRA': { pr: 12.3, chg: 0.4 },
        'OHI': { pr: 18.4, chg: 0.6 },
        'IWB': { pr: 248.4, chg: -0.8 },
        'IWR': { pr: 78.3, chg: -1.2 },
        'IWS': { pr: 78.4, chg: -1.2 },
        'IWP': { pr: 82.3, chg: -1.4 },
        'IWC': { pr: 108.4, chg: -1.8 },
        'SPSM': { pr: 42.4, chg: -1.6 },
        'SPMD': { pr: 48.3, chg: -1.2 },
        'SPLV': { pr: 58.4, chg: 0.2 },
        'SPHQ': { pr: 68.3, chg: -0.8 },
        'SPYG': { pr: 82.3, chg: -1.0 },
        'SPYV': { pr: 48.4, chg: 0.2 },
        'SCHG': { pr: 198.4, chg: -1.0 },
        'SCHV': { pr: 98.3, chg: 0.2 },
        'SCHM': { pr: 58.3, chg: -0.8 },
        'SCHA': { pr: 22.4, chg: -1.4 },
        'SCHF': { pr: 42.4, chg: -0.4 },
        'SCHE': { pr: 28.3, chg: -0.6 },
        'SCHD': { pr: 82.4, chg: 0.4 },
        'VYM': { pr: 118.3, chg: 0.2 },
        'DVY': { pr: 128.4, chg: 0.4 },
        'HDV': { pr: 112.3, chg: 0.2 },
        'SDY': { pr: 128.4, chg: 0.2 },
        'NOBL': { pr: 98.3, chg: 0.2 },
        'DGRO': { pr: 52.3, chg: 0.2 },
        'VIG': { pr: 178.4, chg: -0.4 },
        'DGRW': { pr: 42.4, chg: 0.2 },
        'RDVY': { pr: 48.3, chg: 0.2 },
        'PFF': { pr: 28.3, chg: 0.0 },
        'PFFD': { pr: 22.4, chg: 0.0 },
        'IDV': { pr: 32.3, chg: 0.4 },
        'VXUS': { pr: 62.4, chg: -0.6 },
        'IOO': { pr: 98.4, chg: -0.6 },
        'URTH': { pr: 112.3, chg: -0.6 },
        'VEU': { pr: 62.3, chg: -0.6 },
        'VSS': { pr: 128.3, chg: -0.6 },
        'IEMG': { pr: 48.4, chg: -0.8 },
        'VGK': { pr: 68.4, chg: -0.6 },
        'EWJ': { pr: 68.3, chg: -0.4 },
        'EWZ': { pr: 28.4, chg: -1.2 },
        'EWY': { pr: 62.3, chg: -0.8 },
        'EWT': { pr: 42.4, chg: -0.6 },
        'EWG': { pr: 28.3, chg: -0.6 },
        'EWU': { pr: 32.4, chg: -0.4 },
        'EWQ': { pr: 28.3, chg: -0.6 },
        'EWC': { pr: 38.3, chg: -0.2 },
        'EWA': { pr: 28.4, chg: -0.4 },
        'EWH': { pr: 18.4, chg: -0.8 },
        'INDA': { pr: 48.3, chg: 0.4 },
        'INDY': { pr: 38.3, chg: 0.4 },
        'TUR': { pr: 28.4, chg: -0.8 },
        'EGPT': { pr: 18.4, chg: -0.8 },
        'KSA': { pr: 48.3, chg: -0.2 },
        'UAE': { pr: 22.4, chg: -0.2 },
        'QAT': { pr: 22.3, chg: -0.2 },
        'FLSA': { pr: 28.3, chg: 0.0 },
        'GULF': { pr: 28.4, chg: -0.2 },
        'IONQ': { pr: 29.5, chg: -4.4 },
        'RGTI': { pr: 15.75, chg: -2.8 },
        'QUBT': { pr: 11.87, chg: -3.8 },
        'APP': { pr: 429.5, chg: -5.6 },
        'CAVA': { pr: 78.4, chg: 1.2 },
        'CELH': { pr: 48.3, chg: -2.4 },
        'MNST': { pr: 52.4, chg: 0.4 },
        'FIVE': { pr: 82.3, chg: -1.8 },
        'DLTR': { pr: 68.3, chg: -1.4 },
        'DG': { pr: 148.4, chg: -1.2 },
        'BJ': { pr: 78.4, chg: 0.4 },
        'OLLI': { pr: 42.3, chg: 0.4 },
        'PRGO': { pr: 32.3, chg: -0.4 },
        'JAZZ': { pr: 128.4, chg: 0.2 },
        'EXEL': { pr: 22.4, chg: 0.4 },
        'HALO': { pr: 48.3, chg: 0.4 },
        'BMRN': { pr: 78.3, chg: -0.4 },
        'ALNY': { pr: 198.4, chg: 0.8 },
        'RARE': { pr: 48.4, chg: -0.8 },
        'SRPT': { pr: 98.3, chg: -0.4 },
        'ACAD': { pr: 28.3, chg: -0.8 },
        'ITCI': { pr: 78.4, chg: -0.4 },
        'AXSM': { pr: 98.4, chg: 0.4 },
        'SAGE': { pr: 28.3, chg: -1.2 },
        'PRAX': { pr: 32.4, chg: -0.8 },
        'CRNX': { pr: 42.3, chg: -0.6 },
        'KYMR': { pr: 28.3, chg: -0.4 },
        'ARCT': { pr: 12.4, chg: -1.8 },
        'NKTR': { pr: 4.8, chg: -3.2 },
        'ICPT': { pr: 8.3, chg: -2.4 },
        'TTD': { pr: 82.4, chg: -2.4 },
        'DV': { pr: 18.3, chg: -2.8 },
        'CARG': { pr: 28.4, chg: -1.8 },
        'RKT': { pr: 12.3, chg: -2.4 },
        '^PSI': { pr: 6842.3, chg: -0.4 },
        '^KLSE': { pr: 1642.4, chg: -0.2 },
        '^SET.BK': { pr: 1382.3, chg: -0.4 },
        'YUM': { pr: 128.4, chg: 0.2 },
        'CMG': { pr: 2842.3, chg: 0.4 },
        'CMCSA': { pr: 42.3, chg: -0.4 },
        'WBD': { pr: 12.4, chg: -3.2 },
        'FOX': { pr: 28.3, chg: 0.4 },
        'FOXA': { pr: 28.4, chg: 0.4 },
        'ACWI': { pr: 98.3, chg: -0.7 },
        'VT': { pr: 112.4, chg: -0.6 },
        'SCHB': { pr: 58.3, chg: -0.6 },
        'ITOT': { pr: 112.4, chg: -0.8 },
        'FZROX': { pr: 18.3, chg: -0.8 },
        'XLI': { pr: 128.4, chg: -0.6 },
        'XLC': { pr: 82.2, chg: -0.8 },
        'XLY': { pr: 198.4, chg: -1.2 },
        'XLP': { pr: 78.2, chg: 0.2 },
        'XLRE': { pr: 42.4, chg: -0.6 },
        'XLB': { pr: 92.2, chg: -0.8 },
        'XLU': { pr: 72.4, chg: 0.4 },
        'VGT': { pr: 492.3, chg: -1.4 },
        'VHT': { pr: 248.4, chg: -0.4 },
        'VFH': { pr: 98.3, chg: -0.4 },
        'VAW': { pr: 212.4, chg: -0.8 },
        'VDE': { pr: 118.3, chg: -0.8 },
        'FTEC': { pr: 212.4, chg: -1.4 },
        'FNCL': { pr: 68.3, chg: -0.4 },
        'FHLC': { pr: 98.4, chg: -0.4 },
        'FENY': { pr: 28.3, chg: -0.8 },
        'ARKF': { pr: 28.2, chg: -2.4 },
        'ARKQ': { pr: 68.4, chg: -2.2 },
        'ARKX': { pr: 28.3, chg: -2.4 },
        'TIP': { pr: 112.2, chg: 0.2 },
        'MBB': { pr: 98.4, chg: -0.2 },
        'EMB': { pr: 88.4, chg: -0.8 },
        'IGSB': { pr: 48.3, chg: -0.2 },
        'IGIB': { pr: 82.4, chg: -0.4 },
        'IGLB': { pr: 42.3, chg: -0.6 },
        'SPSB': { pr: 38.4, chg: -0.2 },
        'SPIB': { pr: 78.3, chg: -0.4 },
        'SPLB': { pr: 42.4, chg: -0.6 },
        'FALN': { pr: 28.3, chg: -0.4 },
        'USHY': { pr: 38.4, chg: -0.4 },
        'HYLS': { pr: 42.3, chg: -0.4 },
        'HYLB': { pr: 38.4, chg: -0.4 },
        'PHB': { pr: 18.3, chg: -0.2 },
        'SJNK': { pr: 48.4, chg: -0.4 },
        'SHYG': { pr: 48.3, chg: -0.2 },
        'SRLN': { pr: 28.4, chg: 0.0 },
        'FLOT': { pr: 98.3, chg: 0.0 },
        'TFLO': { pr: 92.4, chg: 0.0 },
        'USFR': { pr: 50.3, chg: 0.0 },
        'NEAR': { pr: 48.4, chg: 0.0 },
        'GSY': { pr: 48.3, chg: 0.0 },
        'ICSH': { pr: 48.4, chg: 0.0 },
        'GLDM': { pr: 48.3, chg: 0.4 },
        'OUNZ': { pr: 28.4, chg: 0.4 },
        'RING': { pr: 28.3, chg: -1.2 },
        'GOEX': { pr: 18.4, chg: -0.8 },
        'SGDM': { pr: 28.3, chg: -0.8 },
        'SGDJ': { pr: 12.4, chg: -1.2 },
        'PSLV': { pr: 8.3, chg: 0.8 },
        'SIVR': { pr: 28.4, chg: 0.8 },
        'ARKB': { pr: 68.46, chg: -4.2 },
        'BITB': { pr: 52.4, chg: -4.2 },
        'DEFI': { pr: 48.4, chg: -3.8 },
        'ETHA': { pr: 18.28, chg: -5.4 },
        'FETH': { pr: 24.46, chg: -5.2 },
        'ETHW': { pr: 22.3, chg: -5.2 },
        'EZBC': { pr: 52.4, chg: -4.2 },
        'BRRR': { pr: 52.3, chg: -4.2 },
        'BTCW': { pr: 52.4, chg: -4.2 },
        'DAPP': { pr: 14.3, chg: -4.8 },
        'LEGR': { pr: 18.4, chg: -3.2 },
        'FNGU': { pr: 248.3, chg: -3.8 },
        'FNGD': { pr: 12.4, chg: 3.8 },
        'WANT': { pr: 28.3, chg: -3.8 },
        'WEBL': { pr: 18.4, chg: -3.8 },
        'VIXY': { pr: 18.3, chg: 8.2 },
        'UVXY': { pr: 28.4, chg: 18.4 },
        'SVXY': { pr: 18.3, chg: -8.4 },
        'TMF': { pr: 8.3, chg: -1.8 },
        'DRV': { pr: 8.4, chg: 2.4 },
        'ERX': { pr: 28.3, chg: -3.2 },
        'ERY': { pr: 8.4, chg: 3.2 },
        'EDZ': { pr: 8.3, chg: 3.2 },
        'LABU': { pr: 18.4, chg: -5.4 },
        'TECL': { pr: 82.3, chg: -4.2 },
        'TECS': { pr: 8.4, chg: 4.2 },
        'DRIP': { pr: 8.3, chg: 3.2 },
        'UST': { pr: 28.4, chg: 0.0 },
        'PSCT': { pr: 42.3, chg: -1.4 },
        'PSCU': { pr: 28.4, chg: -0.6 },
        'RHS': { pr: 82.3, chg: 0.4 },
        'BOIL': { pr: 18.4, chg: -5.6 },
        'KOLD': { pr: 8.3, chg: 5.6 },
        'SCO': { pr: 8.4, chg: 2.8 },
        'ZSL': { pr: 8.3, chg: -1.6 },
        'CORN': { pr: 20.28, chg: -0.8 },
        'WEAT': { pr: 5.46, chg: -1.2 },
        'TAGS': { pr: 28.3, chg: -0.6 },
        'BNO': { pr: 18.28, chg: -1.2 },
        'UGAZ': { pr: 8.3, chg: -5.6 },
        'PDBC': { pr: 12.28, chg: -1.4 },
        'RJI': { pr: 8.3, chg: -0.8 },
        'FTGC': { pr: 28.4, chg: -0.4 },
        'GUNR': { pr: 42.3, chg: -0.8 },
        'COMB': { pr: 22.4, chg: -0.4 },
        'DJP': { pr: 18.3, chg: -0.8 },
        'GDX': { pr: 38.46, chg: -1.4 },
        'GDXJ': { pr: 32.28, chg: -1.8 },
        'SIL': { pr: 28.3, chg: 0.6 },
        'SILJ': { pr: 12.4, chg: 0.4 },
        'PPLT': { pr: 84.28, chg: 0.2 },
        'PALL': { pr: 88.46, chg: -0.4 },
        'GLDI': { pr: 18.4, chg: 0.2 },
        'SLVO': { pr: 12.3, chg: 0.4 },
        'URNM': { pr: 38.46, chg: -2.8 },
        'URA': { pr: 26.28, chg: -2.4 },
        'SCHA': { pr: 22.4, chg: -1.4 },
        'SCHM': { pr: 58.3, chg: -0.8 },
        'SPSM': { pr: 42.4, chg: -1.6 },
        'SPMD': { pr: 48.3, chg: -1.2 },
        'SPHQ': { pr: 68.3, chg: -0.8 },
        'IWB': { pr: 248.4, chg: -0.8 },
        'IWR': { pr: 78.3, chg: -1.2 },
        'IWC': { pr: 108.4, chg: -1.8 },
        'IWP': { pr: 82.3, chg: -1.4 },
        'IWS': { pr: 78.4, chg: -1.2 },
        'VXUS': { pr: 62.4, chg: -0.6 },
        'VEU': { pr: 62.3, chg: -0.6 },
        'IXUS': { pr: 48.4, chg: -0.6 },
        'VSS': { pr: 128.3, chg: -0.6 },
        'IOO': { pr: 98.4, chg: -0.6 },
        'URTH': { pr: 112.3, chg: -0.6 },
        'EWH': { pr: 18.4, chg: -0.8 },
        'INDY': { pr: 38.3, chg: 0.4 },
        'TUR': { pr: 28.4, chg: -0.8 },
        'EWQ': { pr: 28.3, chg: -0.6 },
        'EGPT': { pr: 18.4, chg: -0.8 },
        'KSA': { pr: 48.3, chg: -0.2 },
        'UAE': { pr: 22.4, chg: -0.2 },
        'QAT': { pr: 22.3, chg: -0.2 },
        'GULF': { pr: 28.4, chg: -0.2 },
        'FLSA': { pr: 28.3, chg: 0.0 },
        'PFFD': { pr: 22.4, chg: 0.0 },
        'IDV': { pr: 32.3, chg: 0.4 },
        'DGRW': { pr: 42.4, chg: 0.2 },
        'RDVY': { pr: 48.3, chg: 0.2 },
        '^KLSE': { pr: 1642.4, chg: -0.2 },
        '^SET.BK': { pr: 1382.3, chg: -0.4 },
        '^PSI': { pr: 6842.3, chg: -0.4 },
        '^CASE30': { pr: 26842.4, chg: -0.8 },
        '^STOXX': { pr: 512.4, chg: -0.6 },
        '^N100': { pr: 4982.3, chg: -0.6 },
        '^AORD': { pr: 8142.4, chg: -0.4 },
        '6A=F': { pr: 0.628, chg: -0.2 },
        'MBT=F': { pr: 842.3, chg: -4.2 },
        'MET=F': { pr: 382.4, chg: -5.4 },
        'ZB=F': { pr: 112.3, chg: 0.4 },
        'ZF=F': { pr: 108.4, chg: 0.2 },
        'HO=F': { pr: 2.42, chg: -0.8 },
        'RB=F': { pr: 2.28, chg: -0.6 },
        'PL=F': { pr: 982.4, chg: -0.4 },
        'PA=F': { pr: 1082.3, chg: -0.8 },
        'LBS=F': { pr: 482.4, chg: -0.4 },
        'LMND': { pr: 18.46, chg: -2.8 },
        'ROOT': { pr: 12.28, chg: -1.4 },
        'NRDY': { pr: 3.28, chg: -3.4 },
        'BLZE': { pr: 6.46, chg: -4.8 },
        'NCNO': { pr: 18.46, chg: -2.2 },
        'ENFN': { pr: 11.28, chg: -1.8 },
        'TOST': { pr: 24.46, chg: -1.4 },
        'RELY': { pr: 14.28, chg: -2.8 },
        'FLYW': { pr: 18.46, chg: -1.6 },
        'VTRS': { pr: 12.4, chg: -1.2 },
        'OGN': { pr: 14.3, chg: -0.8 },
        'VRNS': { pr: 48.4, chg: -1.4 },
        'TENB': { pr: 32.46, chg: -2.4 },
        'SOUN': { pr: 12.55, chg: -2.8 },
        'BBAI': { pr: 6.27, chg: -4.2 },
        'AMBA': { pr: 48.3, chg: -1.4 },
        'CEVA': { pr: 28.4, chg: -1.2 },
        'GFAI': { pr: 2.8, chg: -4.2 },
        'WULF': { pr: 6.15, chg: -5.6 },
        'IREN': { pr: 10.98, chg: -4.8 },
        'HIVE': { pr: 4.82, chg: -7.2 },
        'BITF': { pr: 4.68, chg: -6.2 },
        'CIFR': { pr: 5.18, chg: -5.8 },
        'BTDR': { pr: 10.28, chg: -6.4 },
        'CORZ': { pr: 29.5, chg: -3.6 },
        'HUT': { pr: 10.3, chg: -5.2 },
        'CLSK': { pr: 18.0, chg: -5.0 },
        'IEF': { pr: 98.2, chg: -0.4 },
        'SHY': { pr: 82.4, chg: 0.0 },
        'SOXS': { pr: 8.4, chg: 6.8 },
        'COFF': { pr: 28.3, chg: 0.8 },
        'PICK': { pr: 42.4, chg: -1.2 },
        '^MXX': { pr: 52842.3, chg: -0.6 },
        'CTSH': { pr: 72.4, chg: -0.4 },
        'EXPE': { pr: 142.3, chg: -0.8 },
        'IAC': { pr: 72.4, chg: -1.2 },
        'ZG': { pr: 12.3, chg: -2.4 },
        'RDFN': { pr: 8.4, chg: -3.8 },
        'JD': { pr: 67.7, chg: 0.9 },
        'PDD': { pr: 205.6, chg: -0.9 },
        'SE': { pr: 189.3, chg: 0.8 },
        'CPNG': { pr: 18.4, chg: 1.4 },
        'MPWR': { pr: 648.2, chg: -0.4 },
        'SWKS': { pr: 98.4, chg: -1.2 },
        'MCHP': { pr: 82.3, chg: -1.4 },
        'STM': { pr: 28.4, chg: -1.8 },
        'WOLF': { pr: 8.3, chg: -4.2 },
        'IJH': { pr: 62.4, chg: -1.2 },
        'IJR': { pr: 108.3, chg: -1.8 },
        'VB': { pr: 228.4, chg: -1.6 },
        'VTIP': { pr: 48.3, chg: 0.2 },
        'BIV': { pr: 82.4, chg: -0.4 },
        'BLV': { pr: 82.3, chg: -0.6 },
        'EZET': { pr: 22.4, chg: 0.2 },
        'QETH': { pr: 22.3, chg: -5.4 },
        'SDOW': { pr: 8.4, chg: 1.4 },
        'DFEN': { pr: 28.3, chg: 0.8 },
        'AIOT': { pr: 8.4, chg: -4.2 },
        'BOOT': { pr: 82.3, chg: -0.4 },
        'SAM': { pr: 312.4, chg: -0.4 },
        'AMTM': { pr: 28.3, chg: -1.2 },
        'ARQQ': { pr: 8.4, chg: -3.2 },
        'MGNI': { pr: 12.3, chg: -2.4 },
        'PUBM': { pr: 18.4, chg: -2.8 },
        'CRTO': { pr: 28.3, chg: -1.8 },
        'IAS': { pr: 18.4, chg: -2.4 },
        'TBLA': { pr: 4.8, chg: -3.2 },
        'PERI': { pr: 8.3, chg: -2.8 },
        'KAR': { pr: 28.4, chg: -0.8 },
        'ACV': { pr: 22.3, chg: -0.4 },
        'COMP': { pr: 8.4, chg: -2.8 },
        'HOUS': { pr: 8.3, chg: -3.2 },
        'EXPI': { pr: 12.4, chg: -2.8 },
        'UWM': { pr: 8.3, chg: -5.4 },
        'PFSI': { pr: 28.4, chg: -1.8 },
        'COOP': { pr: 48.3, chg: -1.2 },
        'GHLD': { pr: 8.4, chg: -1.2 },
        'SAIL': { pr: 10.28, chg: -2.4 },
        'FSLY': { pr: 6.28, chg: -3.8 },
        'RDWR': { pr: 24.46, chg: -1.2 },
        'QLYS': { pr: 148.2, chg: -0.6 },
        'SBSW': { pr: 8.4, chg: -0.8 },
        'MAC': { pr: 8.3, chg: -0.8 },
        'CBL': { pr: 2.8, chg: -1.8 },
        'WPG': { pr: 2.4, chg: -2.4 },
        'ROIC': { pr: 18.3, chg: 0.2 },
        'AHT': { pr: 4.8, chg: -1.8 },
        'PEB': { pr: 12.3, chg: -1.4 },
        'SHO': { pr: 12.4, chg: -0.8 },
        'CLDT': { pr: 12.3, chg: -1.2 },
        'MSGE': { pr: 28.4, chg: 0.2 },
        'SEAS': { pr: 18.3, chg: -0.4 },
        'SIX': { pr: 48.4, chg: -0.8 },
        'FUN': { pr: 42.3, chg: -0.4 },
        'GENI': { pr: 8.4, chg: -1.4 },
        'PLTK': { pr: 8.3, chg: -1.2 },
        'SKLZ': { pr: 2.4, chg: -3.8 },
        'EWQ': { pr: 28.3, chg: -0.6 },
        '^BVSP': { pr: 124820.4, chg: -0.8 },
        '^BAX': { pr: 1842.3, chg: 0.6 },
        'DX-Y.NYB': { pr: 103.8, chg: 0.4 },
        'SPTM': { pr: 62.4, chg: -0.9 },
        'US': { pr: 28.4, chg: -1.8 },
        'PFGC': { pr: 68.4, chg: 0.2 },
        'HCP': { pr: 18.3, chg: -0.4 },
        'ATVI': { pr: 82.4, chg: 0.2 },
        'AEHR': { pr: 22.4, chg: -2.8 },
        'MRVL': { pr: 64.28, chg: -2.4 },
        'QRVO': { pr: 82.4, chg: -1.8 },
        'NXPI': { pr: 188.42, chg: -0.6 }
      };
      _STK.forEach(s => {
        if (_stkP[s.sy] && _stkP[s.sy].pr > 0) return; // already have live data
        const p = SP[s.sy];
        if (!p) return;
        const { pr, chg } = p;
        _stkP[s.sy] = { pr, chg, hi: pr * 1.02, lo: pr * 0.98, vol: Math.floor(Math.random() * 50 + 10) * 1e6, prevClose: pr / (1 + chg / 100), closes: [pr / (1 + chg / 100), pr], mktTime: new Date(), w52h: pr * 1.35, w52l: pr * 0.65, currency: 'USD', name: s.nm };
      });
    }

    function _parseYahooQuote(results) {
      results.forEach(m => {
        if (!m?.symbol) return;
        const pr = m.regularMarketPrice || 0;
        const prevClose = m.previousClose || pr;
        const chg = m.regularMarketChangePercent || (prevClose > 0 ? (pr - prevClose) / prevClose * 100 : 0);
        _stkP[m.symbol] = {
          pr, chg,
          hi: m.regularMarketDayHigh || 0,
          lo: m.regularMarketDayLow || 0,
          vol: m.regularMarketVolume || 0,
          w52h: m.fiftyTwoWeekHigh || 0,
          w52l: m.fiftyTwoWeekLow || 0,
          prevClose,
          closes: [prevClose, pr],
          mktTime: m.regularMarketTime ? new Date(m.regularMarketTime * 1000) : null,
          currency: m.currency || 'USD',
          name: m.longName || m.shortName || m.symbol
        };
      });
    }

    function _parseFMPQuote(results) {
      results.forEach(m => {
        if (!m?.symbol) return;
        const pr = m.price || 0;
        const prevClose = m.previousClose || pr;
        const chg = m.changesPercentage || 0;
        _stkP[m.symbol] = {
          pr, chg,
          hi: m.dayHigh || 0,
          lo: m.dayLow || 0,
          vol: m.volume || 0,
          w52h: m.yearHigh || 0,
          w52l: m.yearLow || 0,
          prevClose,
          closes: [prevClose, pr],
          mktTime: m.timestamp ? new Date(m.timestamp * 1000) : null,
          currency: 'USD',
          name: m.name || m.symbol
        };
      });
    }

    async function _loadStk() {
      _stkFiltered = [..._STK]; // init filtered list
      // Use cache if fresh
      if (_stkCacheTs && Date.now() - _stkCacheTs < _STK_CACHE_TTL && Object.keys(_stkP).length > 0) {
        _renderStk(); return;
      }
      // Show static prices IMMEDIATELY — no blank screen
      _loadStaticPrices();
      _renderStk();
      // Then try live data in background
      try {
        await _fetchAllStocks();
        _stkCacheTs = Date.now();
        _renderStk();
      } catch (e) { }
    }
    function _miniSparkSVG(closes, color) {
      if (!closes || closes.length < 2) return '';
      const mn = Math.min(...closes), mx = Math.max(...closes), rng = mx - mn || 1;
      const w = 60, h = 22;
      const pts = closes.map((v, i) => { const x = (i / (closes.length - 1)) * w; const y = h - ((v - mn) / rng) * h; return `${x.toFixed(1)},${y.toFixed(1)}` }).join(' ');
      return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="display:block"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    }
    function _renderStk() {
      _stkFilter();
    }

    let _stkPage = 1;
    const _STK_PER_PAGE = 50;
    let _stkFiltered = [];

    function _stkFilter() {
      const q = (document.getElementById('stkSearch')?.value || '').toLowerCase();
      const cat = document.getElementById('stkCatFilter')?.value || '';
      _stkFiltered = _STK.filter(s => {
        if (cat && s.cat !== cat) return false;
        if (q && !s.nm.toLowerCase().includes(q) && !s.sy.toLowerCase().includes(q)) return false;
        return true;
      });
      _stkPage = 1;
      _stkRenderPage();
    }

    function _stkRenderPage() {
      const tb = $('stkB'); if (!tb) return;
      const tr = k => (T[cLang]?.[k] || T.en?.[k] || k);
      const total = _stkFiltered.length;
      const start = (_stkPage - 1) * _STK_PER_PAGE;
      const end = Math.min(start + _STK_PER_PAGE, total);
      const page = _stkFiltered.slice(start, end);

      // i18n: count badge
      const badge = document.getElementById('stkCountBadge');
      if (badge) badge.textContent = total + ' ' + tr('stkResults');

      // i18n: search placeholder
      const srch = document.getElementById('stkSearch');
      if (srch && !srch.matches(':focus')) srch.placeholder = tr('stkSearchPlh');

      // i18n: select options
      const sel = document.getElementById('stkCatFilter');
      if (sel) {
        const optMap = { '': tr('stkAll'), 'stock': tr('stkStock'), 'etf': tr('stkEtf'), 'commodity': tr('stkCommodity'), 'index': tr('stkIndex') };
        [...sel.options].forEach(o => { if (optMap[o.value] !== undefined) o.text = optMap[o.value]; });
      }

      const catColors = { stock: '#3b82f6', etf: '#10b981', commodity: '#f59e0b', index: '#8b5cf6' };

      tb.innerHTML = (() => {
        const _EM = { 'Binance': { c: '#F0B90B', l: 'BN' }, 'Coinbase': { c: '#0052FF', l: 'CB' }, 'Bybit': { c: '#F7A600', l: 'BY' }, 'MEXC': { c: '#2C72EF', l: 'MX' }, 'Gate.io': { c: '#2354E6', l: 'GT' }, 'AsterDEX': { c: '#7C3AED', l: 'AD' }, 'IBKR': { c: '#CC0000', l: 'IB' }, 'Schwab': { c: '#1A7FC1', l: 'SC' }, 'Robinhood': { c: '#00C805', l: 'RH' }, 'Vanguard': { c: '#8B0000', l: 'VG' } };
        return page.map(s => {
          const d = _stkP[s.sy];
          const pr = d && d.pr > 0 ? '$' + d.pr.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '<span class="stk-loading"><i class="fas fa-spinner fa-spin"></i></span>';
          const chg = d ? d.chg : null;
          const vol = d && d.vol > 0 ? _fVol(d.vol) : '--';
          const cc = chg !== null ? (chg >= 0 ? 'var(--gn)' : 'var(--rd)') : 'var(--t2)';
          const ic = chg !== null ? (chg >= 0 ? 'fa-caret-up' : 'fa-caret-down') : 'fa-minus';
          const spark = d ? _miniSparkSVG(d.closes, chg >= 0 ? '#16c784' : '#ea3943') : '';
          const hiLo = d && d.hi > 0 && d.lo > 0 ? `<div class="stk-hl"><span>H $${d.hi.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span><span>L $${d.lo.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>` : '';
          const w52 = d && d.w52h > 0 ? _w52Bar(d.pr, d.w52l, d.w52h) : '';
          const cl = catColors[s.cat] || '#666';
          const catKey = 'stk' + s.cat.charAt(0).toUpperCase() + s.cat.slice(1);
          const catBadge = `<span style="background:${cl}20;color:${cl};border:1px solid ${cl}40;font-size:9px;padding:1px 5px;border-radius:4px;font-weight:700;margin-left:4px">${tr(catKey)}</span>`;
          const exHtml = s.ex && s.ex.length ? `<div style="display:flex;flex-wrap:wrap;gap:3px">${s.ex.map(e => { const m = _EM[e] || { c: '#888', l: e.slice(0, 2).toUpperCase() }; return `<span class="ex-badge" title="${e}" style="background:${m.c}18;color:${m.c};border:1px solid ${m.c}45">${m.l}</span>`; }).join('')}</div>` : '<span style="color:var(--t2);font-size:11px">—</span>';
          return `<tr class="stk-row">
<td class="text-start" style="min-width:130px"><div class="flex items-center gap-2"><div class="stico" style="background:${s.cl}15;color:${s.cl}">${s.ic}</div><div><div class="font-semibold text-sm">${s.nm}${catBadge}</div><span class="text-xs" style="color:var(--t2)">${s.sy}</span></div></div></td>
<td style="min-width:85px"><div class="font-bold">${pr}</div>${hiLo}</td>
<td class="stk-col-chg" style="min-width:75px"><span style="color:${cc};font-weight:700"><i class="fas ${ic}"></i> ${chg !== null ? ((chg >= 0 ? '+' : '') + chg.toFixed(2) + '%') : '--'}</span></td>
<td class="stk-col-vol"><div style="color:var(--t2);font-size:12px;font-weight:600">${vol}</div>${spark}</td>
<td class="stk-col-52w">${w52}</td>
<td style="min-width:75px">${exHtml}</td>
</tr>`;
        }).join('');
      })();

      // ── Centered Pagination ──
      const pgWrap = document.getElementById('stkPagWrap');
      const pgInfo = document.getElementById('stkPagInfo');
      const pgBtns = document.getElementById('stkPagBtns');
      if (!pgWrap) return;
      const totalPg = Math.ceil(total / _STK_PER_PAGE);
      if (totalPg <= 1) { pgWrap.style.display = 'none'; return; }
      pgWrap.style.display = 'flex';

      const isRTL = ['ar', 'he', 'fa', 'ur'].includes(cLang);
      const pgInfo_txt = `${tr('stkPage')} ${_stkPage} ${tr('stkOf')} ${totalPg} · ${start + 1}–${end} ${tr('stkOf')} ${total}`;
      if (pgInfo) pgInfo.textContent = pgInfo_txt;

      if (pgBtns) {
        const btn = (label, page, active, disabled) =>
          `<button onclick="_stkGoPage(${page})" ${disabled ? 'disabled' : ''} style="padding:6px 12px;border-radius:8px;border:1px solid ${active ? 'var(--ac)' : 'var(--bc)'};background:${active ? 'var(--ac)' : 'var(--bg2)'};color:${active ? '#fff' : 'var(--t2)'};font-size:13px;font-weight:${active ? 700 : 400};cursor:pointer;transition:all .15s;opacity:${disabled ? .4 : 1}">${label}</button>`;
        let html = btn(isRTL ? '→' : '←', _stkPage - 1, false, _stkPage === 1);
        const p1 = Math.max(1, _stkPage - 2), p2 = Math.min(totalPg, _stkPage + 2);
        if (p1 > 1) { html += btn('1', 1, false, false); if (p1 > 2) html += `<span style="color:var(--t2);align-self:center">…</span>`; }
        for (let p = p1; p <= p2; p++) html += btn(p, p, p === _stkPage, false);
        if (p2 < totalPg) { if (p2 < totalPg - 1) html += `<span style="color:var(--t2);align-self:center">…</span>`; html += btn(totalPg, totalPg, false, false); }
        html += btn(isRTL ? '←' : '→', _stkPage + 1, false, _stkPage === totalPg);
        pgBtns.innerHTML = html;
      }
    }

    function _stkGoPage(p) {
      const totalPg = Math.ceil(_stkFiltered.length / _STK_PER_PAGE);
      if (p < 1 || p > totalPg) return;
      _stkPage = p;
      _stkRenderPage();
      document.getElementById('tab_stocks')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function _fVol(n) { if (!n || isNaN(n) || n === 0) return '--'; if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + 'T'; if (n >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B'; if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M'; if (n >= 1e3) return '$' + (n / 1e3).toFixed(0) + 'K'; return n.toFixed(0) }
    function _w52Bar(cur, lo, hi) {
      if (!cur || !lo || !hi || hi <= lo) return '';
      const pct = Math.min(100, Math.max(0, ((cur - lo) / (hi - lo)) * 100));
      const col = pct > 70 ? 'var(--gn)' : pct < 30 ? 'var(--rd)' : 'var(--ac)';
      return `<div class="w52-wrap"><div class="w52-lbl"><span>$${lo.toLocaleString('en', { maximumFractionDigits: 0 })}</span><span>$${hi.toLocaleString('en', { maximumFractionDigits: 0 })}</span></div><div class="w52-bar"><div class="w52-fill" style="width:${pct.toFixed(1)}%;background:${col}"></div><div class="w52-dot" style="left:${pct.toFixed(1)}%;background:${col}"></div></div><div class="w52-label">52W Range</div></div>`
    }

    let _commD = false, _mtlTabD = false, _stkTabD = false;
    function loadComm() { _loadNFTCollections(); _loadStk(); _commD = true }
    function loadMetalsTab() { if (!_mtlTabD) { _loadNFTCollections(); _mtlTabD = true } }
    function loadStocksTab() { if (!_stkTabD) { _loadStk(); _stkTabD = true; _commD = true } }


    // ===== CONNECTION MANAGER ENGINE =====
    const _CM = {
      _startTime: Date.now(),
      _open: false,
      _log: [],
      _maxLog: 60,
      _sources: {},
      _healthInterval: null,
      _uptimeInterval: null,
      _retryTimers: {},

      // Register a data source
      reg(id, cfg) {
        this._sources[id] = {
          id,
          name: cfg.name || id,
          type: cfg.type || 'rest',      // ws | rest | proxy
          icon: cfg.icon || 'fa-server',
          status: 'idle',                 // idle | loading | online | offline
          lastOk: 0,
          lastErr: 0,
          latency: 0,
          fetchCount: 0,
          errCount: 0,
          retries: 0,
          maxRetries: cfg.maxRetries || 8,
          interval: cfg.interval || 0,     // polling interval ms
          fetchFn: cfg.fetchFn || null,    // the actual fetch function
          items: cfg.items || '',          // what data it provides
          _intId: null
        };
      },

      // Mark source as loading
      loading(id) {
        const s = this._sources[id];
        if (!s) return;
        s.status = 'loading';
        this._render();
      },

      // Mark source as successful
      ok(id, latency) {
        const s = this._sources[id];
        if (!s) return;
        const wasOffline = s.status === 'offline';
        s.status = 'online';
        s.lastOk = Date.now();
        s.latency = latency || 0;
        s.fetchCount++;
        s.retries = 0;
        if (wasOffline) this._addLog('success', `${s.name} reconnected (${s.latency}ms)`);
        this._render();
      },

      // Mark source as failed
      fail(id, reason) {
        const s = this._sources[id];
        if (!s) return;
        const wasOnline = s.status === 'online' || s.status === 'loading';
        s.status = 'offline';
        s.lastErr = Date.now();
        s.errCount++;
        if (wasOnline) this._addLog('error', `${s.name} disconnected${reason ? ': ' + reason : ''}`);
        // Auto-heal: schedule retry
        this._scheduleRetry(id);
        this._render();
      },

      // Schedule auto-retry with exponential backoff
      _scheduleRetry(id) {
        const s = this._sources[id];
        if (!s || !s.fetchFn) return;
        if (s.retries >= s.maxRetries) {
          this._addLog('warn', `${s.name} max retries (${s.maxRetries}) reached, waiting...`);
          // Still retry after longer delay
          clearTimeout(this._retryTimers[id]);
          this._retryTimers[id] = setTimeout(() => { s.retries = 0; this._execFetch(id); }, 60000);
          return;
        }
        s.retries++;
        const delay = Math.min(2000 * Math.pow(1.5, s.retries - 1), 30000);
        this._addLog('warn', `${s.name} retry #${s.retries} in ${(delay / 1000).toFixed(1)}s...`);
        clearTimeout(this._retryTimers[id]);
        this._retryTimers[id] = setTimeout(() => this._execFetch(id), delay);
      },

      // Execute a source's fetch function
      async _execFetch(id) {
        const s = this._sources[id];
        if (!s || !s.fetchFn) return;
        this.loading(id);
        const t0 = performance.now();
        try {
          await s.fetchFn();
          this.ok(id, Math.round(performance.now() - t0));
        } catch (e) {
          this.fail(id, e.message ? e.message.slice(0, 50) : 'error');
        }
      },

      // Refresh a single source
      async refresh(id) {
        this._addLog('info', `Manual refresh: ${this._sources[id]?.name || id}`);
        await this._execFetch(id);
      },

      // Refresh ALL sources
      async refreshAll() {
        this._addLog('info', 'Refreshing all sources...');
        const ids = Object.keys(this._sources);
        // Run in parallel batches of 4
        for (let i = 0; i < ids.length; i += 4) {
          const batch = ids.slice(i, i + 4);
          await Promise.allSettled(batch.map(id => this._execFetch(id)));
        }
        this._addLog('success', 'All sources refreshed');
      },

      // Start polling for sources that have intervals
      startPolling() {
        Object.values(this._sources).forEach(s => {
          if (s.interval > 0 && s.fetchFn) {
            if (s._intId) clearInterval(s._intId);
            s._intId = setInterval(() => this._execFetch(s.id), s.interval);
          }
        });
      },

      // Health check — detect stale connections
      startHealthCheck() {
        this._healthInterval = setInterval(() => {
          const now = Date.now();
          Object.values(this._sources).forEach(s => {
            if (s.status === 'online' && s.interval > 0 && s.lastOk > 0) {
              // If no update in 3x the interval, mark as stale and retry
              if (now - s.lastOk > s.interval * 3) {
                this._addLog('warn', `${s.name} stale (${Math.round((now - s.lastOk) / 1000)}s), auto-healing...`);
                s.status = 'offline';
                this._execFetch(s.id);
              }
            }
          });
          this._render();
        }, 10000);
      },

      // Uptime counter
      startUptime() {
        this._uptimeInterval = setInterval(() => {
          const el = $('cmUptime');
          if (!el) return;
          const sec = Math.floor((Date.now() - this._startTime) / 1000);
          const h = Math.floor(sec / 3600);
          const m = Math.floor((sec % 3600) / 60);
          const s = sec % 60;
          el.textContent = h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
        }, 1000);
      },

      // Add log entry
      _addLog(type, msg) {
        const now = new Date();
        const ts = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        this._log.unshift({ type, msg, ts });
        if (this._log.length > this._maxLog) this._log.length = this._maxLog;
        this._renderLog();
      },

      // Toggle panel
      toggle() {
        this._open = !this._open;
        const p = $('cmPanel');
        if (p) p.classList.toggle('open', this._open);
        if (this._open) { this._render(); this._renderLog(); }
      },

      // Get summary counts
      _counts() {
        let on = 0, off = 0, ld = 0, lat = [], total = 0;
        Object.values(this._sources).forEach(s => {
          if (s.status === 'online') { on++; if (s.latency > 0) lat.push(s.latency); }
          else if (s.status === 'offline') off++;
          else if (s.status === 'loading') ld++;
          total++;
        });
        return { on, off, ld, avgLat: lat.length ? Math.round(lat.reduce((a, b) => a + b, 0) / lat.length) : 0, total };
      },

      // Render the panel
      _render() {
        const c = this._counts();
        // Update FAB
        const fab = $('cmFab');
        if (fab) {
          fab.className = 'cm-fab ' + (c.off > 0 ? 'cm-some-err' : c.ld > 0 ? 'cm-some-warn' : 'cm-all-ok');
        }
        const badge = $('cmErrCount');
        if (badge) {
          if (c.off > 0) { badge.style.display = 'flex'; badge.textContent = c.off; }
          else { badge.style.display = 'none'; }
        }
        // Summary
        const elOn = $('cmOnline'); if (elOn) elOn.textContent = c.on;
        const elLd = $('cmLoading'); if (elLd) elLd.textContent = c.ld;
        const elOff = $('cmOffline'); if (elOff) elOff.textContent = c.off;
        const elLat = $('cmLatency'); if (elLat) elLat.textContent = c.avgLat > 0 ? c.avgLat : '--';

        if (!this._open) return;
        // Source cards
        const body = $('cmBody');
        if (!body) return;
        body.innerHTML = Object.values(this._sources).map(s => {
          const dotClass = s.status === 'online' ? 'online' : s.status === 'offline' ? 'offline' : s.status === 'loading' ? 'loading' : 'idle';
          const badgeClass = s.type === 'ws' ? 'ws' : s.type === 'proxy' ? 'proxy' : 'rest';
          const badgeLabel = s.type === 'ws' ? 'WebSocket' : s.type === 'proxy' ? 'CORS Proxy' : 'REST API';
          const ago = s.lastOk > 0 ? this._timeAgo(s.lastOk) : 'never';
          const errAgo = s.lastErr > 0 ? this._timeAgo(s.lastErr) : '--';
          return `<div class="cm-src">
        <div class="cm-src-hd">
          <div class="cm-src-nm"><span class="cm-dot ${dotClass}"></span><i class="fas ${s.icon}" style="font-size:10px;color:var(--ac)"></i> ${s.name}</div>
          <span class="cm-src-badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="cm-src-meta">
          <span><i class="fas fa-clock"></i> ${ago}</span>
          <span><i class="fas fa-bolt"></i> ${s.latency > 0 ? s.latency + 'ms' : '--'}</span>
          <span><i class="fas fa-check"></i> ${s.fetchCount}x</span>
          <span><i class="fas fa-times" style="color:var(--rd)"></i> ${s.errCount}</span>
          ${s.items ? '<span><i class="fas fa-database"></i> ' + s.items + '</span>' : ''}
        </div>
        <div class="cm-src-acts">
          <button class="cm-src-btn refresh" onclick="_CM.refresh('${s.id}')"><i class="fas fa-sync-alt"></i> Refresh</button>
          ${s.status === 'offline' ? '<button class="cm-src-btn" onclick="_CM.refresh(\'' + s.id + '\')"><i class="fas fa-redo"></i> Reconnect</button>' : ''}
        </div>
      </div>`;
        }).join('');
      },

      // Render log
      _renderLog() {
        if (!this._open) return;
        const el = $('cmLog');
        if (!el) return;
        el.innerHTML = this._log.slice(0, 20).map(l =>
          `<div class="cm-log-entry ${l.type}"><span class="cm-log-t">${l.ts}</span><span>${l.msg}</span></div>`
        ).join('');
      },

      // Time ago helper
      _timeAgo(ts) {
        const s = Math.floor((Date.now() - ts) / 1000);
        if (s < 5) return 'just now';
        if (s < 60) return s + 's ago';
        if (s < 3600) return Math.floor(s / 60) + 'm ago';
        return Math.floor(s / 3600) + 'h ago';
      },

      // Cleanup
      destroy() {
        Object.values(this._sources).forEach(s => { if (s._intId) clearInterval(s._intId); });
        Object.values(this._retryTimers).forEach(t => clearTimeout(t));
        if (this._healthInterval) clearInterval(this._healthInterval);
        if (this._uptimeInterval) clearInterval(this._uptimeInterval);
      }
    };

    // ===== REGISTER ALL DATA SOURCES =====
    _CM.reg('binance_ws', {
      name: 'Binance WebSocket',
      type: 'ws',
      icon: 'fa-plug',
      items: 'Crypto Prices (Real-time)',
      interval: 0, // WS is persistent
      maxRetries: 20,
      fetchFn: null // managed separately (initWS)
    });

    _CM.reg('binance_rest', {
      name: 'Binance REST',
      type: 'rest',
      icon: 'fa-exchange-alt',
      items: 'Tickers, Klines, 24hr',
      interval: 60000,
      fetchFn: async () => {
        const r = await fetch('https://api.binance.com/api/v3/ticker/24hr');
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const d = await r.json();
        if (!Array.isArray(d) || d.length < 100) throw new Error('Invalid data');
        // Apply price updates
        const bMap = new Map();
        d.forEach(t => { if (t.symbol && t.symbol.endsWith('USDT')) bMap.set(t.symbol.replace('USDT', ''), t); });
        allC.forEach(c => { const b = bMap.get(c.sy); if (b) { const bp = parseFloat(b.lastPrice); if (bp > 0) c.pr = bp; c.c24 = parseFloat(b.priceChangePercent) || 0; } });
        filtC = [...allC]; render();
      }
    });

    _CM.reg('coingecko_exchanges', {
      name: 'CoinGecko API',
      type: 'rest',
      icon: 'fa-exchange-alt',
      items: 'Live Exchange Volume',
      interval: 7200000,
      fetchFn: async () => {
        const r = await fetch('https://api.coingecko.com/api/v3/exchanges');
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const d = await r.json();
        if (!Array.isArray(d)) throw new Error('Invalid exchange data');

        let updated = false;
        d.forEach(ex => {
          if (ex.id && ex.trade_volume_24h_btc !== undefined) {
            const mappedId = typeof mapEid === 'function' ? mapEid(ex.id) : ex.id;
            exLiveVol[mappedId] = ex.trade_volume_24h_btc;
            updated = true;
          }
        });

        if (updated) {
          try { localStorage.setItem('ch_ex_vol', JSON.stringify(exLiveVol)); } catch (e) { }
          if (_exB) loadExchanges();
        }
      }
    });

    _CM.reg('cmc', {
      name: 'CoinMarketCap',
      type: 'proxy',
      icon: 'fa-coins',
      items: 'Market Cap, Supply, Rankings',
      interval: 300000,
      fetchFn: async () => {
        const d = await fetchCMC('https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=1&limit=500&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all');
        if (!d || !d.data) throw new Error('No CMC data');
      }
    });

    _CM.reg('coincap', {
      name: 'CoinCap.io',
      type: 'rest',
      icon: 'fa-layer-group',
      items: 'Supply, Volume, Market Cap',
      interval: 300000,
      fetchFn: async () => {
        const r = await fetch('https://api.coincap.io/v2/assets?limit=500&offset=0');
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const d = await r.json();
        if (!d || !d.data) throw new Error('Invalid data');
      }
    });

    _CM.reg('fear_greed', {
      name: 'Fear & Greed Index',
      type: 'rest',
      icon: 'fa-tachometer-alt',
      items: 'Market Sentiment',
      interval: 30000,
      fetchFn: async () => {
        await refreshFG();
      }
    });

    _CM.reg('binance_ai', {
      name: 'Binance Klines (AI)',
      type: 'rest',
      icon: 'fa-brain',
      items: 'BTC Klines for AI Analysis',
      interval: 300000,
      fetchFn: async () => {
        const r = await fetchJSON('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=60');
        if (!r || r.length < 30) throw new Error('No klines data');
        await calcAI(r);
      }
    });

    _CM.reg('swissquote', {
      name: 'Swissquote (Metals)',
      type: 'proxy',
      icon: 'fa-gem',
      items: 'XAG, XPT, XPD Spot',
      interval: 15000,
      fetchFn: async () => {
        const [ag, pt, pd] = await Promise.all([
          _fetchSwissquote('XAG'), _fetchSwissquote('XPT'), _fetchSwissquote('XPD')
        ]);
        if (!ag && !pt && !pd) throw new Error('All metals failed');
        if (ag && ag > 0) { _mtPrev.s = _mt.s; _mt.s = ag; _saveMtOpen('s', _mt.s); }
        if (pt && pt > 0) { _mtPrev.pt = _mt.pt; _mt.pt = pt; _saveMtOpen('pt', _mt.pt); }
        if (pd && pd > 0) { _mtPrev.pd = _mt.pd; _mt.pd = pd; _saveMtOpen('pd', _mt.pd); }
        if (_mtOpen.s && _mt.s > 0) _mt.sChg = ((_mt.s - _mtOpen.s) / _mtOpen.s * 100);
        if (_mtOpen.pt && _mt.pt > 0) _mt.ptChg = ((_mt.pt - _mtOpen.pt) / _mtOpen.pt * 100);
        if (_mtOpen.pd && _mt.pd > 0) _mt.pdChg = ((_mt.pd - _mtOpen.pd) / _mtOpen.pd * 100);
        _mt.lastUpd = Date.now(); _updMtl();
      }
    });

    _CM.reg('goldprice', {
      name: 'GoldPrice.org',
      type: 'rest',
      icon: 'fa-coins',
      items: 'Gold & Silver Backup',
      interval: 30000,
      fetchFn: async () => {
        const r = await fetch('https://data-asg.goldprice.org/dbXRates/USD');
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const d = await r.json();
        if (!d || !d.items || !d.items[0]) throw new Error('No data');
      }
    });

    _CM.reg('currency_api', {
      name: 'Currency API (CDN)',
      type: 'proxy',
      icon: 'fa-gem',
      items: 'XPT, XPD Backup',
      interval: 60000,
      fetchFn: async () => {
        const r = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xpt.json');
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const d = await r.json();
        if (!d || !d.xpt || !d.xpt.usd) throw new Error('Invalid data');
      }
    });

    _CM.reg('binance_metal_ws', {
      name: 'Binance PAXG WS',
      type: 'ws',
      icon: 'fa-plug',
      items: 'Gold (PAXG) Real-time',
      interval: 0,
      fetchFn: null // managed by _connectMetalWs
    });

    _CM.reg('yahoo_finance', {
      name: 'Yahoo Finance',
      type: 'proxy',
      icon: 'fa-chart-line',
      items: 'Stocks & ETFs',
      interval: 60000,
      fetchFn: async () => {
        // Test with one symbol
        const d = await _fetchYahoo('AAPL');
        if (!d || !d.chart || !d.chart.result) throw new Error('Yahoo failed');
        // Full load
        await _loadStk();
      }
    });

    _CM.reg('okx', {
      name: 'OKX Tickers',
      type: 'rest',
      icon: 'fa-exchange-alt',
      items: 'Exchange Pairs',
      interval: 300000,
      fetchFn: async () => {
        const d = await fetchJSON('https://www.okx.com/api/v5/market/tickers?instType=SPOT');
        if (!d || !d.data) throw new Error('No OKX data');
      }
    });

    _CM.reg('mexc', {
      name: 'MEXC Tickers',
      type: 'rest',
      icon: 'fa-exchange-alt',
      items: 'Exchange Pairs',
      interval: 300000,
      fetchFn: async () => {
        const d = await fetchJSON('https://api.mexc.com/api/v3/ticker/24hr');
        if (!d || !Array.isArray(d)) throw new Error('No MEXC data');
      }
    });

    _CM.reg('gateio', {
      name: 'Gate.io Tickers',
      type: 'rest',
      icon: 'fa-exchange-alt',
      items: 'Exchange Pairs',
      interval: 300000,
      fetchFn: async () => {
        const d = await fetchJSON('https://api.gateio.ws/api/v4/spot/tickers');
        if (!d || !Array.isArray(d)) throw new Error('No Gate data');
      }
    });

    // ===== HOOK INTO EXISTING WS CALLBACKS =====
    const _origDoWS = doWS;
    window.doWS = function () {
      _origDoWS();
      // Patch WS handlers for CM tracking
      setTimeout(() => {
        if (bWs) {
          const origOnOpen = bWs.onopen;
          bWs.onopen = function (e) {
            _CM.ok('binance_ws', 0);
            _CM._addLog('success', 'Binance WebSocket connected');
            if (origOnOpen) origOnOpen.call(bWs, e);
          };
          const origOnClose = bWs.onclose;
          bWs.onclose = function (ev) {
            if (ev.code !== 1000) _CM.fail('binance_ws', 'code:' + ev.code);
            if (origOnClose) origOnClose.call(bWs, ev);
          };
          const origOnError = bWs.onerror;
          bWs.onerror = function (e) {
            _CM.fail('binance_ws', 'WS error');
            if (origOnError) origOnError.call(bWs, e);
          };
          const origOnMsg = bWs.onmessage;
          bWs.onmessage = function (e) {
            _CM._sources['binance_ws'].lastOk = Date.now();
            _CM._sources['binance_ws'].status = 'online';
            _CM._sources['binance_ws'].fetchCount++;
            if (origOnMsg) origOnMsg.call(bWs, e);
          };
        }
      }, 100);
    };

    // Hook metal WS
    const _origConnectMtlWs = _connectMetalWs;
    window._connectMetalWs = function () {
      _origConnectMtlWs();
      setTimeout(() => {
        if (_mtWs) {
          const origOnMsg = _mtWs.onmessage;
          _mtWs.onmessage = function (ev) {
            _CM.ok('binance_metal_ws', 0);
            if (origOnMsg) origOnMsg.call(_mtWs, ev);
          };
          const origOnClose = _mtWs.onclose;
          _mtWs.onclose = function () {
            _CM.fail('binance_metal_ws', 'disconnected');
            if (origOnClose) origOnClose.call(_mtWs);
          };
        }
      }, 100);
    };

    // ===== Enhanced network recovery =====
    const _origOnline = () => { };
    window.addEventListener('online', () => {
      _CM._addLog('success', 'Network restored — healing all sources...');
      setTimeout(() => _CM.refreshAll(), 1500);
    });
    window.addEventListener('offline', () => {
      _CM._addLog('error', 'Network lost!');
      Object.values(_CM._sources).forEach(s => {
        if (s.status === 'online' || s.status === 'loading') s.status = 'offline';
      });
      _CM._render();
    });

    // Init
    window.addEventListener('DOMContentLoaded', () => {
      const sl = localStorage.getItem('lang'); if (sl && LANGS.find(l => l.c === sl)) { cLang = sl; } else { cLang = 'en'; localStorage.setItem('lang', 'en'); }
      buildLM(); buildNS(); applyLang();
      checkCookieConsent();

      // Start Connection Manager
      _CM._addLog('info', 'CryptoHub Connection Manager initialized');
      _CM._addLog('info', `Tracking ${Object.keys(_CM._sources).length} data sources`);
      _CM.startUptime();
      _CM.startHealthCheck();

      // Load all data with CM tracking
      (async () => {
        // === Use preloaded global stats immediately ===
        if (window._preload && window._preload.global) {
          try {
            const gd = await window._preload.global;
            if (gd && gd.totalMarketCap) {
              if ($('tmcV')) $('tmcV').textContent = '$' + (gd.totalMarketCap / 1e12).toFixed(2) + 'T';
              if ($('tVolV')) $('tVolV').textContent = '$' + (gd.totalVolume24h / 1e9).toFixed(2) + 'B';
              if ($('btcD')) $('btcD').textContent = gd.btcDominance + '%';
              console.log('🚀 Global stats preloaded');
            }
            window._preload.global = null;
          } catch(e) {}
        }

        // === Use preloaded fear-greed immediately ===
        if (window._preload && window._preload.fearGreed) {
          try {
            const fg = await window._preload.fearGreed;
            if (fg && fg.now) {
              fgD = { n: fg.now, y: fg.yesterday, w: fg.lastWeek, m: fg.lastMonth };
              _fgBase = fgD;
              updFG();
              console.log('🚀 Fear & Greed preloaded:', fg.now);
            }
            window._preload.fearGreed = null;
          } catch(e) {}
        }

        // Phase 1: Core crypto data (critical - load immediately)
        _CM.loading('binance_rest');
        _CM.loading('cmc');
        loadCoins(); // this internally fetches from CMC, CoinCap, Binance etc

        // Phase 2: Metals — start immediately (was 4s delay), preload already has data
        setTimeout(() => {
          _CM.loading('swissquote');
          _CM.loading('binance_metal_ws');
          loadMetals();
          setTimeout(() => {
            if (_mt.s > 0) _CM.ok('swissquote', 0);
            if (_mt.g > 0) { _CM.ok('binance_metal_ws', 0); _CM.ok('binance_rest', 0); }
          }, 6000);
        }, 100); // was 4000ms — now 100ms because preload has data

        // Phase 3: Auxiliary data deferred to reduce TBT
        setTimeout(async () => {
          const auxLoads = [
            _CM._execFetch('fear_greed'),
            _CM._execFetch('binance_ai'),
            _CM._execFetch('coingecko_exchanges'),
          ];
          await Promise.allSettled(auxLoads);
        }, 4000);

        // Phase 4: Start periodic CM polling for non-WS sources
        setTimeout(() => _CM.startPolling(), 15000);
      })();

      // Real-time intervals: global stats every 10s, badges every 30s, stocks every 60s
      setInterval(() => { updateGlobalFromData(); buildTrending() }, 10000);
      setInterval(() => { if ($('cBadge')) $('cBadge').textContent = allC.length.toLocaleString(); if ($('navCryptoBadge')) $('navCryptoBadge').textContent = allC.length.toLocaleString(); if ($('ldSt')) $('ldSt').textContent = allC.length + ' ' + t('coins') }, 5000);
      setInterval(() => { if (_stkTabD) { _stkCacheTs = 0; _loadStk(); } }, 90000);
    });
    window.addEventListener('beforeunload', () => { if (_mWs) _mWs.close(); _CM.destroy(); if (bWs) bWs.close(); if (uInt) clearInterval(uInt); if (_mtWs) _mtWs.close(); if (_mtPollId) clearInterval(_mtPollId) });

    // === JS Block 2 ===

    function updFG() {
      if (!fgD) return;
      const v = fgD.n;

      const arc = document.getElementById('fgArc');
      const need = document.getElementById('fgNeedle');
      if (arc) {
        arc.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        arc.style.strokeDashoffset = 377 - (v / 100) * 377;
      }
      if (need) {
        need.style.transition = 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        const deg = (v / 100) * 180 - 90;
        need.setAttribute('transform', `rotate(${deg} 150 140)`);
      }

      const valEl = document.getElementById('fgV');
      const lblEl = document.getElementById('fgL');
      if (valEl) valEl.textContent = v;

      let key = 'neutral';
      let col = '#eab308';
      if (v <= 24) { key = 'extremeFear'; col = '#ea3943'; }
      else if (v <= 45) { key = 'fear'; col = '#f97316'; }
      else if (v <= 54) { key = 'neutral'; col = '#eab308'; }
      else if (v <= 74) { key = 'greed'; col = '#84cc16'; }
      else { key = 'extremeGreed'; col = '#16c784'; }

      if (lblEl) {
        lblEl.textContent = t ? t(key) : key;
        lblEl.style.color = col;
      }
      if (valEl) valEl.style.color = col;

      const setHist = (idBase, val) => {
        const bar = document.getElementById('fgB' + idBase);
        const txt = document.getElementById('fgH' + idBase);
        if (!bar || !txt) return;
        bar.style.transition = 'width 1.5s ease-out';
        setTimeout(() => { bar.style.width = val + '%'; }, 100);
        txt.textContent = val;
        let c = '#eab308';
        if (val <= 24) c = '#ea3943';
        else if (val <= 45) c = '#f97316';
        else if (val <= 54) c = '#eab308';
        else if (val <= 74) c = '#84cc16';
        else c = '#16c784';
        bar.style.background = c;
        txt.style.color = c;
      };

      setHist('N', fgD.n);
      setHist('Y', fgD.y);
      setHist('W', fgD.w);
      setHist('M', fgD.m);
    }

    function toggleAnalysis() {
      closeDD();
      var p = document.getElementById('analysisPanel');
      if (!p) return;
      if (p.style.display === 'none' || p.style.display === '') {
        p.style.display = 'block';
        p.style.animation = 'anlSlide .35s ease';
        p.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Trigger animation if panel is opened
        if (fgD) setTimeout(updFG, 100);
      } else {
        p.style.display = 'none';
      }
    }

    // === JS Block 3 ===
    // ═══ Integrated AI Price Engine ═══
    const AI_SRC = { binance: { tr: 10 }, coinbase: { tr: 10 }, bybit: { tr: 9 }, gate: { tr: 9 }, coingecko: { tr: 10 } };
    let aiPriceCache = {};

    async function aiFetchJSON(url, to) { to = to || 12000; try { const r = await Promise.race([fetch(url), _tout(to)]); if (!r.ok) throw new Error('H' + r.status); return await r.json() } catch (e) { throw e } }

    async function aiPriceUpdate() {
      try {
        const results = {};
        // Parallel fetch from all sources
        const [bn, bb, gt] = await Promise.allSettled([
          aiFetchJSON('https://api.binance.com/api/v3/ticker/24hr'),
          aiFetchJSON('https://api.bybit.com/v5/market/tickers?category=spot'),
          aiFetchJSON('https://api.gateio.ws/api/v4/spot/tickers')
        ]);
        // Process Binance
        if (bn.status === 'fulfilled' && bn.value) { bn.value.forEach(t => { if (!t.symbol || !t.symbol.endsWith('USDT')) return; const s = t.symbol.replace('USDT', ''); const p = parseFloat(t.lastPrice); if (p > 0) { if (!results[s]) results[s] = []; results[s].push({ pr: p, w: 10, c24: sanitizePct(t.priceChangePercent) }) } }) }
        // Process Bybit
        if (bb.status === 'fulfilled' && bb.value && bb.value.result && bb.value.result.list) { bb.value.result.list.forEach(t => { if (!t.symbol || !t.symbol.endsWith('USDT')) return; const s = t.symbol.replace('USDT', ''); const p = parseFloat(t.lastPrice); if (p > 0) { if (!results[s]) results[s] = []; results[s].push({ pr: p, w: 9, c24: (parseFloat(t.price24hPcnt) || 0) * 100 }) } }) }
        // Process Gate
        if (gt.status === 'fulfilled' && gt.value) { gt.value.forEach(t => { if (!t.currency_pair || !t.currency_pair.endsWith('_USDT')) return; const s = t.currency_pair.replace('_USDT', ''); const p = parseFloat(t.last); if (p > 0) { if (!results[s]) results[s] = []; results[s].push({ pr: p, w: 9, c24: sanitizePct(t.change_percentage) }) } }) }
        // AI Aggregation: weighted median with outlier removal
        const agg = {};
        Object.entries(results).forEach(([sy, prs]) => {
          if (prs.length < 1) return;
          prs.sort((a, b) => a.pr - b.pr);
          const med = prs[Math.floor(prs.length / 2)].pr;
          const valid = prs.filter(p => Math.abs(p.pr - med) / med < 0.03);
          if (!valid.length) return;
          let tw = 0, ws = 0; valid.forEach(p => { ws += p.pr * p.w; tw += p.w });
          agg[sy] = { pr: ws / tw, c24: valid[0].c24, sn: prs.length };
        });
        // Apply to allC
        let upd = 0;
        allC.forEach(c => {
          const ai = agg[c.sy];
          if (ai && ai.pr > 0 && ai.sn >= 2) { c.pr = ai.pr; if (ai.c24 !== undefined) c.c24 = ai.c24; upd++ }
        });
        if (upd > 0) { filtC = [...allC]; render(); buildTicker(); console.log('[AI Engine] Updated ' + upd + ' prices from ' + Object.keys(agg).length + ' coins') }
      } catch (e) { console.log('[AI Engine] Error:', e.message) }
    }
    // Run AI engine every 25 seconds
    setTimeout(aiPriceUpdate, 8000);
    setInterval(aiPriceUpdate, 25000);

    // Adaptive Performance Monitor (AI Speed Control)
    if ('PerformanceObserver' in window) {
      try {
        const pObs = new PerformanceObserver((list) => {
          let longTasks = 0;
          for (const entry of list.getEntries()) {
            if (entry.duration > 60) longTasks++;
          }
          if (longTasks > 0) {
            // Throttle AI polling by simulating idle time
            _aiLastAct = 0;
            // Reduce render batch size if not already minimal
            if (iPP > 50) { iPP = 75; if (cPage === 1) render(); }
          }
        });
        pObs.observe({ entryTypes: ['longtask'] });
      } catch (e) { }
    }

// Extracted Script Block #5
// إجابات ذكية احترافية مع اقتراحات وروابط
    function aiAutoReply(q, context = {}) {
      q = q.toLowerCase();
      // Connect to the real data source (allC)
      let coins = (typeof allC !== 'undefined') ? allC : [];

      // Market Overview / ملخص السوق
      if (q.includes('سوق') || q.includes('market') || q.includes('وضع') || q.includes('summary')) {
        const fg = (typeof fgD !== 'undefined' && fgD) ? fgD.n : '--';
        const fgText = (typeof fgLabel !== 'undefined') ? fgLabel(fg) : '';
        const btcD = document.getElementById('btcD')?.textContent || '--';
        const altS = document.getElementById('altV')?.textContent || '--';
        return `<b>📊 ملخص السوق اللحظي:</b><br>` +
          `• <b>المشاعر:</b> ${fg} (${fgText})<br>` +
          `• <b>هيمنة BTC:</b> ${btcD}<br>` +
          `• <b>موسم الألتكوين:</b> ${altS}/100<br>` +
          `السوق يتحرك بناءً على هذه المؤشرات. هل تريد معرفة عملة محددة؟`;
      }

      // سعر عملة
      const priceMatch = q.match(/(?:سعر|price|تحليل|analyse)\s*([a-zA-Z0-9\u0600-\u06FF]+)/);
      if (priceMatch) {
        const name = priceMatch[1].trim();
        const coin = coins.find(c => (c.nm && c.nm.toLowerCase().includes(name)) || (c.sy && c.sy.toLowerCase() === name.toLowerCase()));

        if (coin) {
          const isAnalyse = q.includes('تحليل') || q.includes('analyse');
          const change = coin.c24 || 0;
          const color = change >= 0 ? '#16c784' : '#ea3943';
          const arrow = change >= 0 ? '▲' : '▼';

          let reply = `<b>${coin.nm} (${coin.sy}):</b><br>` +
            `السعر: <b>$${coin.pr < 1 ? coin.pr.toFixed(6) : coin.pr.toLocaleString()}</b> <span style="color:${color}">(${arrow} ${Math.abs(change).toFixed(2)}%)</span><br>`;

          if (isAnalyse) {
            // Simple AI Analysis simulation based on 24h change and volume
            let signal = 'HOLD';
            if (change > 5) signal = 'BUY (Strong Momentum)';
            else if (change < -5) signal = 'OVERSOLD (Watch for bounce)';

            reply += `📊 <b>تحليل AI السريع:</b><br>` +
              `• الزخم: ${change > 0 ? 'إيجابي' : 'سلبي'}<br>` +
              `• التذبذب: ${Math.abs(change) > 10 ? 'عالي جداً' : 'طبيعي'}<br>` +
              `• الإشارة الفنية: <b>${signal}</b>`;
          }
          return reply;
        } else {
          return `لم أجد عملة باسم "${name}". <a href='#' onclick='document.getElementById("aiChatInput").value="سعر بيتكوين";return false;'>جرب مثال: سعر بيتكوين</a>`;
        }
      }
      // أفضل العملات
      if (q.includes('أفضل') || q.includes('top')) {
        const top = coins.slice(0, 5).map((c, i) => `<b>${i + 1}. ${c.name || c.symbol}:</b> <span style='color:#3861fb'>${c.price || ''}</span>`).join('<br>');
        return 'أفضل العملات حالياً:<br>' + (top || 'لا توجد بيانات متاحة الآن.');
      }
      // شرح أو كيف
      if (q.includes('كيف') || q.includes('شرح') || q.includes('help')) {
        return `يمكنك البحث عن أي عملة أو الضغط عليها لمعرفة التفاصيل، أو اسألني عن سعر أو ترتيب أي عملة.<br><a href="#" onclick="document.getElementById('aiChatInput').value='سعر بيتكوين';return false;">جرب: سعر بيتكوين</a>`;
      }
      // بيانات supply أو FDV
      if (q.includes('fdv') || q.includes('supply')) {
        return 'بيانات <b>FDV</b> وSupply تظهر عند الضغط على العملة في الجدول. إذا لم تظهر فهي غير متوفرة من المصادر.';
      }
      // بحث عن عملة
      const coinMatch = q.match(/(عملة|coin)\s*([a-zA-Z0-9\u0600-\u06FF]+)/);
      if (coinMatch) {
        const name = coinMatch[2].trim();
        const coin = coins.find(c => (c.name && c.name.toLowerCase().includes(name)) || (c.symbol && c.symbol.toLowerCase() === name.toLowerCase()));
        if (coin) {
          return `<b>معلومات عن ${coin.name || coin.symbol}:</b><br>السعر: <span style='color:#3861fb'>${coin.price || 'غير متوفر'}</span><br>الرمز: ${coin.symbol || ''}<br>القيمة السوقية: ${coin.marketCap || 'غير متوفرة'}`;
        } else {
          return 'لم أجد العملة المطلوبة. جرب كتابة الاسم أو الرمز بشكل أوضح.';
        }
      }
      // منصة أو exchange
      if (q.includes('منصة') || q.includes('exchange')) {
        return 'جميع المنصات الموثوقة ستجدها في <a href=\"#exchanges\">قسم المنصات</a> مع روابط مباشرة.';
      }
      // مطور أو developer
      if (q.includes('مطور') || q.includes('developer')) {
        return 'هذا الموقع يستخدم أحدث تقنيات الويب وواجهات برمجة التطبيقات.';
      }
      // ذكاء اصطناعي
      if (q.includes('ai') || q.includes('ذكاء')) {
        return 'أنا مساعد ذكي أستطيع الإجابة عن كل شيء في الموقع. جرب اسألني عن أي شيء!';
      }
      // افتراضي مع اقتراحات
      return 'سؤالك مهم! جرب أحد هذه الأسئلة:<br>' +
        `<div class='ai-suggests'><button type='button' onclick='document.getElementById("aiChatInput").value="سعر بيتكوين";document.getElementById("aiChatSend").click();'>سعر بيتكوين</button>` +
        `<button type='button' onclick='document.getElementById("aiChatInput").value="أفضل العملات";document.getElementById("aiChatSend").click();'>أفضل العملات</button>` +
        `<button type='button' onclick='document.getElementById("aiChatInput").value="شرح FDV";document.getElementById("aiChatSend").click();'>شرح FDV</button></div>`;
    }

