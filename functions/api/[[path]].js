export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const search = url.search;
  
  // CORS + Security headers (من _headers القديم)
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-XSS-Protection': '1; mode=block',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // API Routes مع headers المناسبة
  const apiConfigs = {
    '/api/fg': {
      url: 'https://api.alternative.me/fng/?limit=31',
      headers: {},
      cache: 3600 // 1 hour
    },
    '/api/gold': {
      url: 'https://data-asg.goldprice.org/dbXRates/USD',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'https://www.goldprice.org',
        'Referer': 'https://www.goldprice.org/'
      },
      cache: 300 // 5 minutes
    },
    '/api/binance/ticker': {
      url: 'https://api.binance.com/api/v3/ticker/24hr',
      headers: {},
      cache: 60 // 1 minute
    },
    '/api/coincap/assets': {
      url: 'https://api.coincap.io/v2/assets' + search,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'https://www.coincap.io',
        'Referer': 'https://www.coincap.io/'
      },
      cache: 60 // 1 minute
    },
    '/api/coingecko/markets': {
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1',
      headers: {},
      cache: 120 // 2 minutes
    },
    '/api/mexc/ticker': {
      url: 'https://api.mexc.com/api/v3/ticker/24hr',
      headers: {},
      cache: 60
    },
    '/api/gate/tickers': {
      url: 'https://api.gateio.ws/api/v4/spot/tickers',
      headers: {
        'Accept': 'application/json'
      },
      cache: 60
    },
    '/api/okx/tickers': {
      url: 'https://www.okx.com/api/v5/market/tickers?instType=SPOT',
      headers: {
        'Accept': 'application/json'
      },
      cache: 60
    },
    '/api/bybit/tickers': {
      url: 'https://api.bybit.com/v5/market/tickers?category=spot',
      headers: {
        'Accept': 'application/json'
      },
      cache: 60
    },
    '/api/kucoin/tickers': {
      url: 'https://api.kucoin.com/api/v1/market/allTickers',
      headers: {
        'Accept': 'application/json'
      },
      cache: 60
    },
    '/api/metals/xauusd': {
      url: 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD',
      headers: {
        'Accept': 'application/json',
        'Origin': 'https://www.swissquote.com',
        'Referer': 'https://www.swissquote.com/'
      },
      cache: 300 // 5 minutes
    },
    '/api/metals/xagusd': {
      url: 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAG/USD',
      headers: {
        'Accept': 'application/json',
        'Origin': 'https://www.swissquote.com',
        'Referer': 'https://www.swissquote.com/'
      },
      cache: 300
    },
    '/api/metals/xptusd': {
      url: 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPT/USD',
      headers: {
        'Accept': 'application/json',
        'Origin': 'https://www.swissquote.com',
        'Referer': 'https://www.swissquote.com/'
      },
      cache: 300
    },
    '/api/metals/xpdusd': {
      url: 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPD/USD',
      headers: {
        'Accept': 'application/json',
        'Origin': 'https://www.swissquote.com',
        'Referer': 'https://www.swissquote.com/'
      },
      cache: 300
    },
  };

  // Dynamic routes
  if (path.startsWith('/api/coincap/markets/')) {
    const assetId = path.replace('/api/coincap/markets/', '');
    apiConfigs[path] = {
      url: `https://api.coincap.io/v2/assets/${assetId}/markets?limit=200`,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'https://www.coincap.io',
        'Referer': 'https://www.coincap.io/'
      },
      cache: 60
    };
  }

  if (path.startsWith('/api/coingecko/tickers/')) {
    const coinId = path.replace('/api/coingecko/tickers/', '');
    apiConfigs[path] = {
      url: `https://api.coingecko.com/api/v3/coins/${coinId}/tickers?depth=false&order=volume_desc&per_page=100`,
      headers: {},
      cache: 120
    };
  }

  if (path.startsWith('/api/cmc/')) {
    const query = search || '?start=1&limit=5000&sortBy=market_cap&sortType=desc&convert=USD';
    apiConfigs[path] = {
      url: `https://api.coinmarketcap.com/data-api/v3/cryptocurrency${path.replace('/api/cmc', '')}${query}`,
      headers: {
        'Accept': 'application/json',
        'Referer': 'https://www.cryptohubcoin.com',
        'Origin': 'https://www.cryptohubcoin.com'
      },
      cache: 120
    };
  }

  // Binance klines
  if (path.startsWith('/api/binance/klines')) {
    apiConfigs[path] = {
      url: `https://api.binance.com/api/v3/klines${search}`,
      headers: {},
      cache: 60
    };
  }

  // Binance window
  if (path.startsWith('/api/binance/window')) {
    apiConfigs[path] = {
      url: `https://api.binance.com/api/v3/ticker${search}`,
      headers: {},
      cache: 60
    };
  }

  const config = apiConfigs[path];
  
  if (!config) {
    return new Response(JSON.stringify({ error: 'Not found', path }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const fetchHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      ...config.headers
    };

    const response = await fetch(config.url, { 
      headers: fetchHeaders,
      cf: {
        cacheTtl: config.cache,
        cacheEverything: true
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ 
        error: 'Upstream error', 
        status: response.status,
        statusText: response.statusText,
        url: config.url,
        details: errorText.substring(0, 500)
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.text();
    
    return new Response(data, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': `public, max-age=${config.cache}`,
        'CDN-Cache-Control': `max-age=${config.cache}`,
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ 
      error: 'Fetch failed', 
      message: err.message,
      url: config.url,
      stack: err.stack
    }), {
      status: 502,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
