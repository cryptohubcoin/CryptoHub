/**
 * CryptoHub Cloudflare Worker
 * يعمل كـ proxy لكل الـ APIs ويحل مشكلة:
 * 1. الـ 4xx errors (empty requests)
 * 2. CORS issues
 * 3. Cache Rate المنخفضة
 *
 * Deploy: wrangler deploy  أو  Cloudflare Dashboard → Workers
 */

const CACHE_TTL = {
  prices:    15,   // أسعار العملات — 15 ثانية
  tickers:   20,   // Binance ticker — 20 ثانية
  markets:   60,   // CoinGecko markets — دقيقة
  fg:      1800,   // Fear & Greed — 30 دقيقة
  metals:    30,   // أسعار المعادن — 30 ثانية
  cmc:      120,   // CMC listings — دقيقتين
  coincap:   30,   // CoinCap — 30 ثانية
};

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const API_ROUTES = {
  // Binance
  '/api/binance/ticker':    () => 'https://api.binance.com/api/v3/ticker/24hr',
  '/api/binance/klines':    (p) => `https://api.binance.com/api/v3/klines?${p}`,
  '/api/binance/window':    (p) => `https://api.binance.com/api/v3/ticker?${p}`,

  // CoinGecko
  '/api/coingecko/markets': (p) => `https://api.coingecko.com/api/v3/coins/markets?${p}`,
  '/api/coingecko/tickers': (p) => `https://api.coingecko.com/api/v3/coins/${p}/tickers?depth=false&order=volume_desc&per_page=100`,

  // CoinCap
  '/api/coincap/assets':    (p) => `https://api.coincap.io/v2/assets?${p}`,
  '/api/coincap/markets':   (p) => `https://api.coincap.io/v2/assets/${p}/markets?limit=200`,

  // MEXC
  '/api/mexc/ticker':       () => 'https://api.mexc.com/api/v3/ticker/24hr',

  // Gate.io
  '/api/gate/tickers':      () => 'https://api.gateio.ws/api/v4/spot/tickers',

  // OKX
  '/api/okx/tickers':       () => 'https://www.okx.com/api/v5/market/tickers?instType=SPOT',

  // Bybit
  '/api/bybit/tickers':     () => 'https://api.bybit.com/v5/market/tickers?category=spot',

  // KuCoin
  '/api/kucoin/tickers':    () => 'https://api.kucoin.com/api/v1/market/allTickers',

  // Fear & Greed
  '/api/fg':                () => 'https://api.alternative.me/fng/?limit=31',

  // Gold Price
  '/api/gold':              () => 'https://data-asg.goldprice.org/dbXRates/USD',

  // Swissquote metals
  '/api/metals/xauusd':     () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD',
  '/api/metals/xagusd':     () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAG/USD',
  '/api/metals/xptusd':     () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPT/USD',
  '/api/metals/xpdusd':     () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPD/USD',

  // CMC
  '/api/cmc/listing':       (p) => `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?${p}`,
  '/api/cmc/pairs':         (p) => `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?${p}`,
};

function getCacheTTL(path) {
  if (path.includes('/binance/')) return CACHE_TTL.prices;
  if (path.includes('/coingecko/')) return CACHE_TTL.markets;
  if (path.includes('/coincap/')) return CACHE_TTL.coincap;
  if (path.includes('/fg')) return CACHE_TTL.fg;
  if (path.includes('/gold') || path.includes('/metals/')) return CACHE_TTL.metals;
  if (path.includes('/cmc/')) return CACHE_TTL.cmc;
  return CACHE_TTL.tickers;
}

async function proxyRequest(targetUrl, ttl) {
  const cacheKey = new Request(targetUrl);
  const cache = caches.default;

  // Check cache first
  let response = await cache.match(cacheKey);
  if (response) {
    return new Response(response.body, {
      status: 200,
      headers: {
        ...CORS,
        'Content-Type': 'application/json',
        'X-Cache': 'HIT',
        'Cache-Control': `public, max-age=${ttl}`,
      },
    });
  }

  // Fetch from origin
  try {
    const upstream = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'CryptoHub/1.0',
        'Accept': 'application/json',
      },
      cf: { cacheTtl: ttl, cacheEverything: true },
    });

    if (!upstream.ok) {
      return new Response(JSON.stringify({ error: 'upstream error', status: upstream.status }), {
        status: upstream.status,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    const data = await upstream.text();
    const resp = new Response(data, {
      status: 200,
      headers: {
        ...CORS,
        'Content-Type': 'application/json',
        'Cache-Control': `public, max-age=${ttl}`,
        'X-Cache': 'MISS',
      },
    });

    // Store in cache
    await cache.put(cacheKey, resp.clone());
    return resp;

  } catch (err) {
    return new Response(JSON.stringify({ error: 'fetch failed', message: err.message }), {
      status: 502,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const search = url.search.slice(1); // remove leading ?

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    // Health check
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok', time: Date.now() }), {
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    // Route matching
    for (const [route, buildUrl] of Object.entries(API_ROUTES)) {
      if (path === route || path.startsWith(route + '/')) {
        // Extract dynamic segment after route prefix
        const segment = path.slice(route.length).replace(/^\//, '');
        const param = segment || search;
        const targetUrl = buildUrl(param);
        const ttl = getCacheTTL(path);
        return proxyRequest(targetUrl, ttl);
      }
    }

    // 404 for unknown routes
    return new Response(JSON.stringify({ error: 'route not found', path }), {
      status: 404,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  },
};
