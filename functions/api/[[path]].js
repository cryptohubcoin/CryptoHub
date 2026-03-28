export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const search = url.search;
  
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Static files → let Pages handle it (return 404 to trigger fallback)
  if (!path.startsWith('/api/')) {
    return new Response('Not found', { status: 404 });
  }

  // APIs → redirect to old Worker
  const workerUrl = `https://cryptohub.bitcoinswapnet.workers.dev${path}${search}`;
  
  return Response.redirect(workerUrl, 307);
}
