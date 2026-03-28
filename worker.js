/**
 * CryptoHub Cloudflare Worker v3.1
 * ================================
 * محسّن: Cache TTL أعلى لتحسين Performance
 */

// ═══════════════════════════════════════════════════
// Configuration
// ═══════════════════════════════════════════════════
const CONFIG = {
  name: 'CryptoHub',
  version: '3.1',
  domain: 'www.cryptohubcoin.com',
};

// ═══════════════════════════════════════════════════
// Cache TTLs - محسّنة للـ Cache Rate الأعلى
// ═══════════════════════════════════════════════════
const CACHE_TTL = {
  prices: 60,        // زود من 15 لـ 60 ثانية
  tickers: 60,       // زود من 20 لـ 60 ثانية
  markets: 300,      // زود من 60 لـ 5 دقايق
  fg: 3600,          // Fear & Greed: ساعة كاملة
  metals: 300,       // Metals: 5 دقايق
  cmc: 300,          // CMC: 5 دقايق
  coincap: 60,       // CoinCap: دقيقة
};

// CORS Headers
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// MIME Types
const MIME_TYPES = {
  html: 'text/html; charset=utf-8',
  css: 'text/css; charset=utf-8',
  js: 'application/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8',
  xml: 'application/xml; charset=utf-8',
  txt: 'text/plain; charset=utf-8',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  webp: 'image/webp',
  woff: 'font/woff',
  woff2: 'font/woff2',
  webmanifest: 'application/manifest+json',
};

// Binary extensions
const BINARY_EXTS = new Set(['png', 'jpg', 'jpeg', 'gif', 'ico', 'webp', 'woff', 'woff2']);

// Static files cache durations
const STATIC_CACHE = {
  html: 300,
  css: 2592000,
  js: 2592000,
  json: 3600,
  xml: 86400,
  txt: 86400,
  png: 31536000,
  jpg: 31536000,
  jpeg: 31536000,
  gif: 31536000,
  svg: 31536000,
  ico: 31536000,
  webp: 31536000,
  woff: 31536000,
  woff2: 31536000,
  webmanifest: 86400,
};

// SPA Routes
const SPA_ROUTES = new Set([
  '/crypto-analyzer',
  '/crypto-arbitrage',
  '/forex-analyzer',
  '/about',
  '/faq',
  '/glossary',
  '/privacy',
  '/terms',
  '/crypto-prediction',
  '/token-vesting',
  '/token-unlock-calendar',
  '/blog',
]);

// API Routes
const API_ROUTES = {
  '/api/binance/ticker': () => 'https://api.binance.com/api/v3/ticker/24hr',
  '/api/binance/klines': (p) => `https://api.binance.com/api/v3/klines?${p}`,
  '/api/binance/window': (p) => `https://api.binance.com/api/v3/ticker?${p}`,
  '/api/coingecko/markets': (p) => `https://api.coingecko.com/api/v3/coins/markets?${p}`,
  '/api/coingecko/tickers': (p) => `https://api.coingecko.com/api/v3/coins/${p}/tickers?depth=false&order=volume_desc&per_page=100`,
  '/api/coincap/assets': (p) => `https://api.coincap.io/v2/assets?${p}`,
  '/api/coincap/markets': (p) => `https://api.coincap.io/v2/assets/${p}/markets?limit=200`,
  '/api/mexc/ticker': () => 'https://api.mexc.com/api/v3/ticker/24hr',
  '/api/gate/tickers': () => 'https://api.gateio.ws/api/v4/spot/tickers',
  '/api/okx/tickers': () => 'https://www.okx.com/api/v5/market/tickers?instType=SPOT',
  '/api/bybit/tickers': () => 'https://api.bybit.com/v5/market/tickers?category=spot',
  '/api/kucoin/tickers': () => 'https://api.kucoin.com/api/v1/market/allTickers',
  '/api/fg': () => 'https://api.alternative.me/fng/?limit=31',
  '/api/gold': () => 'https://data-asg.goldprice.org/dbXRates/USD',
  '/api/metals/xauusd': () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD',
  '/api/metals/xagusd': () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAG/USD',
  '/api/metals/xptusd': () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPT/USD',
  '/api/metals/xpdusd': () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPD/USD',
  '/api/cmc/listing': (p) => `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?${p}`,
  '/api/cmc/pairs': (p) => `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?${p}`,
};

// ═══════════════════════════════════════════════════
// Helper Functions
// ═══════════════════════════════════════════════════

function getCacheTTL(path) {
  if (path.includes('/binance/')) return CACHE_TTL.prices;
  if (path.includes('/coingecko/')) return CACHE_TTL.markets;
  if (path.includes('/coincap/')) return CACHE_TTL.coincap;
  if (path.includes('/fg')) return CACHE_TTL.fg;
  if (path.includes('/gold') || path.includes('/metals/')) return CACHE_TTL.metals;
  if (path.includes('/cmc/')) return CACHE_TTL.cmc;
  return CACHE_TTL.tickers;
}

function getContentType(path) {
  const ext = path.split('.').pop()?.toLowerCase() || '';
  return MIME_TYPES[ext] || 'application/octet-stream';
}

function isBinary(ext) {
  return BINARY_EXTS.has(ext);
}

function isSPARoute(path) {
  if (SPA_ROUTES.has(path)) return true;
  for (const route of SPA_ROUTES) {
    if (path.startsWith(route + '/')) return true;
  }
  return false;
}

// ═══════════════════════════════════════════════════
// API Proxy - محسّن للـ Caching
// ═══════════════════════════════════════════════════
async function proxyRequest(targetUrl, ttl) {
  const cacheKey = new Request(targetUrl);
  const cache = caches.default;

  // Check cache first
  let response = await cache.match(cacheKey);
  if (response) {
    return new Response(response.body, {
      status: 200,
      headers: {
        ...CORS_HEADERS,
        'Content-Type': 'application/json',
        'X-Cache': 'HIT',
        'Cache-Control': `public, max-age=${ttl}`,
        'CDN-Cache-Control': `max-age=${ttl}`,
      },
    });
  }

  try {
    const upstream = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'CryptoHub/3.1',
        'Accept': 'application/json',
      },
      cf: { 
        cacheTtl: ttl, 
        cacheEverything: true,
      },
    });

    if (!upstream.ok) {
      return new Response(
        JSON.stringify({ error: 'upstream error', status: upstream.status }),
        {
          status: upstream.status,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await upstream.text();
    response = new Response(data, {
      status: 200,
      headers: {
        ...CORS_HEADERS,
        'Content-Type': 'application/json',
        'Cache-Control': `public, max-age=${ttl}`,
        'CDN-Cache-Control': `max-age=${ttl}`,
        'X-Cache': 'MISS',
      },
    });

    await cache.put(cacheKey, response.clone());
    return response;
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'fetch failed', message: err.message }),
      {
        status: 502,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      }
    );
  }
}

// ═══════════════════════════════════════════════════
// Static File Handler (من KV)
// ═══════════════════════════════════════════════════
async function serveStatic(request, path, env, ctx) {
  if (!env?.STATIC_ASSETS) {
    return null;
  }

  let key = path === '/' ? 'index.html' : path.replace(/^\//, '');

  if (isSPARoute(path)) {
    key = 'index.html';
  }

  if (!key.includes('.') && key !== 'index.html') {
    key = 'index.html';
  }

  const ext = key.split('.').pop().toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const binary = isBinary(ext);
  const cacheDuration = STATIC_CACHE[ext] || 3600;

  // Check edge cache
  const cache = caches.default;
  const cacheKey = new Request(request.url);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const value = await env.STATIC_ASSETS.get(key, binary ? 'arrayBuffer' : 'text');

    if (value === null) {
      if (!key.includes('.') || isSPARoute(path)) {
        const fallback = await env.STATIC_ASSETS.get('index.html', 'text');
        if (fallback) {
          return new Response(fallback, {
            status: 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'public, max-age=300, s-maxage=3600',
            },
          });
        }
      }
      return null;
    }

    const headers = new Headers({
      'Content-Type': contentType,
      'X-Content-Type-Options': 'nosniff',
      'Vary': 'Accept-Encoding',
    });

    if (ext === 'html') {
      headers.set('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400');
      headers.set('X-Frame-Options', 'SAMEORIGIN');
      headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    } else if (binary || ext === 'css' || ext === 'js') {
      headers.set('Cache-Control', `public, max-age=${cacheDuration}, s-maxage=${cacheDuration}, immutable`);
    } else {
      headers.set('Cache-Control', `public, max-age=${cacheDuration}, s-maxage=${cacheDuration}`);
    }

    const response = new Response(value, { status: 200, headers });
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (e) {
    console.error('KV Error:', e);
    return null;
  }
}

// ═══════════════════════════════════════════════════
// Main Handler
// ═══════════════════════════════════════════════════
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const search = url.search.slice(1);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // www redirect
    if (url.hostname === 'cryptohubcoin.com') {
      return Response.redirect(`https://www.cryptohubcoin.com${path}${url.search}`, 301);
    }

    // Health check
    if (path === '/health' || path === '/api/health') {
      return new Response(
        JSON.stringify({
          status: 'ok',
          version: CONFIG.version,
          kv_connected: !!env?.STATIC_ASSETS,
          timestamp: Date.now(),
        }),
        {
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        }
      );
    }

    // ─── API Routes ───
    if (path.startsWith('/api/')) {
      for (const [route, buildUrl] of Object.entries(API_ROUTES)) {
        if (path === route || path.startsWith(route + '/')) {
          const segment = path.slice(route.length).replace(/^\//, '');
          const param = segment || search;
          const targetUrl = buildUrl(param);
          const ttl = getCacheTTL(path);
          return proxyRequest(targetUrl, ttl);
        }
      }
      return new Response(
        JSON.stringify({ error: 'API route not found', path }),
        {
          status: 404,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        }
      );
    }

    // ─── Legacy CMC proxy (?src=cmc) ───
    if (url.searchParams.get('src') === 'cmc') {
      const start = url.searchParams.get('start') || '1';
      const limit = url.searchParams.get('limit') || '5000';
      const targetUrl = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=${start}&limit=${limit}&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all`;
      return proxyRequest(targetUrl, CACHE_TTL.cmc);
    }

    // ─── Static Files from KV ───
    const staticResponse = await serveStatic(request, path, env, ctx);
    if (staticResponse) return staticResponse;

    // ─── Backward Compatible: API Info ───
    if (!env?.STATIC_ASSETS) {
      return new Response(
        JSON.stringify({
          name: CONFIG.name,
          version: CONFIG.version,
          mode: 'API-only',
          note: 'Add STATIC_ASSETS KV binding to enable static file serving',
          endpoints: Object.keys(API_ROUTES),
          health: '/health',
        }),
        {
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        }
      );
    }

    // ─── 404 Not Found ───
    return new Response(
      JSON.stringify({
        error: 'Not Found',
        path: path,
        message: 'Static file not found in KV',
      }),
      {
        status: 404,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      }
    );
  },
};
