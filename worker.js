export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // ✅ API فقط - كل حاجة تانية تروح Pages
    if (url.pathname.startsWith('/api/')) {
      return handleAPI(request, env);
    }
    
    // ❌ لا تتدخل في Static Files
    return fetch(request);
  }
};

async function handleAPI(request, env) {
  const url = new URL(request.url);
  const method = request.method;
  
  // CORS Headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json'
  };
  
  // Preflight
  if (method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  // ===== هنا حط كل API endpoints بتاعتك =====
  
  // مثال 1: جلب بيانات
  if (url.pathname === '/api/data' && method === 'GET') {
    return new Response(JSON.stringify({
      status: 'success',
      timestamp: new Date().toISOString(),
      data: {
        message: 'API is working!',
        version: '1.0'
      }
    }), { headers: corsHeaders });
  }
  
  // مثال 2: Proxy لـ API خارجي (لو عندك)
  if (url.pathname.startsWith('/api/external/')) {
    const externalUrl = 'https://api.external-service.com' + 
                       url.pathname.replace('/api/external', '');
    
    try {
      const response = await fetch(externalUrl, {
        method: method,
        headers: {
          'Authorization': env.EXTERNAL_API_KEY || '',
          'Content-Type': 'application/json'
        },
        body: method !== 'GET' ? await request.text() : undefined
      });
      
      const data = await response.text();
      return new Response(data, {
        status: response.status,
        headers: corsHeaders
      });
      
    } catch (error) {
      return new Response(JSON.stringify({
        status: 'error',
        message: error.message
      }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  }
  
  // 404 للـ API مش موجود
  return new Response(JSON.stringify({
    status: 'error',
    message: 'API endpoint not found'
  }), { 
    status: 404, 
    headers: corsHeaders 
  });
}
