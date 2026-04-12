export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;

    // Non-API → static assets
    if (!p.startsWith('/api/')) {
      const lp = p.toLowerCase();
      // Block bot probing with 403
      if (lp.includes('wp-admin') || lp.includes('wp-login') || lp.includes('wp-content') ||
          lp.includes('xmlrpc') || lp.includes('phpmyadmin') || lp.includes('.env') || lp.includes('.git')) {
        return new Response('', { status: 403, headers: { 'Cache-Control': 'public, max-age=86400' } });
      }
      
      // Static assets with Cache Headers
      const response = await env.ASSETS.fetch(request);
      
      // Add cache headers
      const newHeaders = new Headers(response.headers);
      
      // Cache CSS/JS/Images for 1 hour, HTML for 5 minutes
      if (p.endsWith('.css') || p.endsWith('.js')) {
        newHeaders.set('Cache-Control', 'public, max-age=3600');
        newHeaders.set('CDN-Cache-Control', 'public, max-age=7200');
      } else if (p.endsWith('.png') || p.endsWith('.jpg') || p.endsWith('.jpeg') || p.endsWith('.svg') || p.endsWith('.webp')) {
        newHeaders.set('Cache-Control', 'public, max-age=604800'); // 7 days for images
        newHeaders.set('CDN-Cache-Control', 'public, max-age=604800');
      } else if (p.endsWith('.woff2') || p.endsWith('.woff') || p.endsWith('.ttf')) {
        newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year for fonts
      } else {
        // HTML and others
        newHeaders.set('Cache-Control', 'public, max-age=300'); // 5 minutes
        newHeaders.set('CDN-Cache-Control', 'public, max-age=3600');
      }
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    }

    // API routes (لو عندك)
    return new Response('API route', { status: 200 });
  }
};
