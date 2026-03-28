
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // API Routes
  const routes = {
    '/api/fg': 'https://api.alternative.me/fng/?limit=31',
    '/api/gold': 'https://data-asg.goldprice.org/dbXRates/USD',
    '/api/binance/ticker': 'https://api.binance.com/api/v3/ticker/24hr',
    '/api/coincap/assets': 'https://api.coincap.io/v2/assets',
    '/api/coingecko/markets': 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1',
    '/api/metals/xauusd': 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD',
    '/api/metals/xagusd': 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAG/USD',
    '/api/metals/xptusd': 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPT/USD',
    '/api/metals/xpdusd': 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XPD/USD',
  };

  const targetUrl = routes[path];
  
  if (!targetUrl) {
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'CryptoHub/3.1',
        'Accept': 'application/json',
      },
    });

    const data = await response.text();
    
    return new Response(data, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 502,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
