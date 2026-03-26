/**
 * CryptoHub Cloudflare Worker v2.1
 * ================================
 * يعمل كـ proxy لكل الـ APIs + يقدم Static Files من KV
 * 
 * التحسينات:
 * 1. Static file serving من KV (logo.png, manifest.json, sitemap.xml, robots.txt, index.html)
 * 2. Cache Headers محسّنة على كل response
 * 3. SPA routing لكل صفحات الموقع
 * 4. Security headers
 *
 * ==================== الإعداد ====================
 * 1. أنشئ KV Namespace:
 *    npx wrangler kv namespace create STATIC_ASSETS
 *
 * 2. أضف في wrangler.toml:
 *    [[kv_namespaces]]
 *    binding = "STATIC_ASSETS"
 *    id = "YOUR_ID_HERE"
 *
 * 3. ارفع الملفات:
 *    npx wrangler kv key put "index.html" --path ./index.html --namespace-id YOUR_ID
 *    npx wrangler kv key put "logo.png" --path ./logo.png --namespace-id YOUR_ID
 *    npx wrangler kv key put "manifest.json" --path ./manifest.json --namespace-id YOUR_ID
 *    npx wrangler kv key put "sitemap.xml" --path ./sitemap.xml --namespace-id YOUR_ID
 *    npx wrangler kv key put "robots.txt" --path ./robots.txt --namespace-id YOUR_ID
 *
 * 4. npx wrangler deploy
 * ====================================================
 */

// ═══════════════════════════════════════════════════
// Cache TTLs (API)
// ═══════════════════════════════════════════════════
const CACHE_TTL = {
  prices:    15,
  tickers:   20,
  markets:   60,
  fg:      1800,
  metals:    30,
  cmc:      120,
  coincap:   30,
};

// ═══════════════════════════════════════════════════
// CORS Headers
// ═══════════════════════════════════════════════════
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// ═══════════════════════════════════════════════════
// MIME Types for Static Files
// ═══════════════════════════════════════════════════
const MIME = {
  html: 'text/html; charset=utf-8',
  css:  'text/css; charset=utf-8',
  js:   'application/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8',
  xml:  'application/xml; charset=utf-8',
  txt:  'text/plain; charset=utf-8',
  png:  'image/png',
  jpg:  'image/jpeg',
  jpeg: 'image/jpeg',
  gif:  'image/gif',
  svg:  'image/svg+xml',
  ico:  'image/x-icon',
  webp: 'image/webp',
  woff: 'font/woff',
  woff2:'font/woff2',
  webmanifest: 'application/manifest+json',
};

const BINARY_EXTS = new Set(['png','jpg','jpeg','gif','ico','webp','woff','woff2','svg']);

const STATIC_CACHE = {
  html: 300,
  css:  2592000,
  js:   2592000,
  json: 3600,
  xml:  86400,
  txt:  86400,
  png:  31536000,
  jpg:  31536000,
  jpeg: 31536000,
  gif:  31536000,
  svg:  31536000,
  ico:  31536000,
  webp: 31536000,
  woff: 31536000,
  woff2:31536000,
  webmanifest: 86400,
};

// ═══════════════════════════════════════════════════
// SPA Routes → serve index.html
// ═══════════════════════════════════════════════════
const SPA_ROUTES = new Set([
  '/crypto-analyzer', '/crypto-arbitrage', '/forex-analyzer',
  '/about', '/faq', '/glossary', '/privacy', '/terms',
  '/crypto-prediction', '/token-vesting', '/token-unlock-calendar',
]);

function isSPARoute(path) {
  if (SPA_ROUTES.has(path)) return true;
  if (path.startsWith('/blog')) return true;
  return false;
}

// ═══════════════════════════════════════════════════
// API Route Definitions (100% unchanged from your original)
// ═══════════════════════════════════════════════════
const API_ROUTES = {
  '/api/binance/ticker':    () => 'https://api.binance.com/api/v3/ticker/24hr',
  '/api/binance/klines':    (p) => `https://api.binance.com/api/v3/klines?${p}`,
  '/api/binance/window':    (p) => `https://api.binance.com/api/v3/ticker?${p}`,
  '/api/coingecko/markets': (p) => `https://api.coingecko.com/api/v3/coins/markets?${p}`,
  '/api/coingecko/tickers': (p) => `https://api.coingecko.com/api/v3/coins/${p}/tickers?depth=false&order=volume_desc&per_page=100`,
  '/api/coincap/assets':    (p) => `https://api.coincap.io/v2/assets?${p}`,
  '/api/coincap/markets':   (p) => `https://api.coincap.io/v2/assets/${p}/markets?limit=200`,
  '/api/mexc/ticker':       () => 'https://api.mexc.com/api/v3/ticker/24hr',
  '/api/gate/tickers':      () => 'https://api.gateio.ws/api/v4/spot/tickers',
  '/api/okx/tickers':       () => 'https://www.okx.com/api/v5/market/tickers?instType=SPOT',
  '/api/bybit/tickers':     () => 'https://api.bybit.com/v5/market/tickers?category=spot',
  '/api/kucoin/tickers':    () => 'https://api.kucoin.com/api/v1/market/allTickers',
  '/api/fg':                () => 'https://api.alternative.me/fng/?limit=31',
  '/api/gold':              () => 'https://data-asg.goldprice.org/dbXRates/USD',
  '/api/metals/xauusd':     () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD',
  '/api/metals/xagusd':     () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAG/USD',
  '/api/metals/xptusd':     () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPT/USD',
  '/api/metals/xpdusd':     () => 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPD/USD',
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

// ═══════════════════════════════════════════════════
// API Proxy (unchanged)
// ═══════════════════════════════════════════════════
async function proxyRequest(targetUrl, ttl) {
  const cacheKey = new Request(targetUrl);
  const cache = caches.default;

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

    await cache.put(cacheKey, resp.clone());
    return resp;

  } catch (err) {
    return new Response(JSON.stringify({ error: 'fetch failed', message: err.message }), {
      status: 502,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }
}

// ═══════════════════════════════════════════════════
// Static File Handler (NEW — serves from KV)
// ═══════════════════════════════════════════════════
async function serveStatic(request, path, env, ctx) {
  let key = path === '/' ? 'index.html' : path.replace(/^\//, '');

  if (isSPARoute(path)) key = 'index.html';
  if (!key.includes('.') && key !== 'index.html') key = 'index.html';

  const ext = key.split('.').pop().toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';
  const isBinary = BINARY_EXTS.has(ext);
  const cacheDuration = STATIC_CACHE[ext] || 3600;

  // Check edge cache
  const cache = caches.default;
  const cacheKey = new Request(request.url);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  // Fetch from KV
  try {
    const value = await env.STATIC_ASSETS.get(key, isBinary ? 'arrayBuffer' : 'text');

    if (value === null) {
      // Try SPA fallback
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
    } else if (BINARY_EXTS.has(ext) || ext === 'css' || ext === 'js') {
      headers.set('Cache-Control', `public, max-age=${cacheDuration}, s-maxage=${cacheDuration}, immutable`);
    } else {
      headers.set('Cache-Control', `public, max-age=${cacheDuration}, s-maxage=${cacheDuration}`);
    }

    const response = new Response(value, { status: 200, headers });
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;

  } catch (e) {
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
      return new Response(null, { status: 204, headers: CORS });
    }

    // www redirect
    if (url.hostname === 'cryptohubcoin.com') {
      return Response.redirect(`https://www.cryptohubcoin.com${path}${url.search}`, 301);
    }

    // Health check
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok', time: Date.now() }), {
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
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
      return new Response(JSON.stringify({ error: 'API route not found', path }), {
        status: 404,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    // ─── Legacy CMC proxy (?src=cmc) ───
    if (url.searchParams.get('src') === 'cmc') {
      const start = url.searchParams.get('start') || '1';
      const limit = url.searchParams.get('limit') || '5000';
      const targetUrl = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=${start}&limit=${limit}&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all`;
      return proxyRequest(targetUrl, CACHE_TTL.cmc);
    }

    // ─── Static Files from KV ───
    if (env.STATIC_ASSETS) {
      const staticResponse = await serveStatic(request, path, env, ctx);
      if (staticResponse) return staticResponse;
    }

    // ─── No KV: show API info (backward compatible) ───
    if (!env.STATIC_ASSETS) {
      return new Response(JSON.stringify({
        name: 'CryptoHub API',
        version: '2.1',
        note: 'Add STATIC_ASSETS KV binding to enable static file serving.',
        endpoints: Object.keys(API_ROUTES),
      }), {
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    // 404
    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'no-cache' },
    });
  },
};
