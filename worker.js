// للتحكم الكامل في الكاش وإصلاح الأخطاء
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // كاش للـ static files
    if (url.pathname.match(/\.(js|css|png|jpg|svg|woff|woff2)$/)) {
      const response = await fetch(request);
      const newResponse = new Response(response.body, response);
      newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      return newResponse;
    }
    
    // API error handling
    if (url.pathname.startsWith('/api/')) {
      try {
        const response = await fetch(request);
        if (!response.ok) {
          // Log error for monitoring
          console.error(`API Error: ${response.status} - ${url.pathname}`);
        }
        return response;
      } catch (error) {
        return new Response('Service Unavailable', { status: 503 });
      }
    }
    
    return fetch(request);
  }
};
