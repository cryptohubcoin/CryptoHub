export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname.toLowerCase();

    // Block bots
    if (p.includes('wp-admin') || p.includes('wp-login') || p.includes('wp-content') ||
        p.includes('xmlrpc') || p.includes('phpmyadmin') || p.includes('.env') || p.includes('.git')) {
      return new Response('', { status: 403 });
    }

    // 🎯 For Pages - use ASSETS, for Worker - fetch directly
    let response;
    try {
      response = await env.ASSETS.fetch(request);
    } catch (e) {
      // Fallback if ASSETS not available
      response = await fetch(request);
    }
    
    // Clone response to modify headers
    const newHeaders = new Headers(response.headers);
    
    // Override Cache-Control based on file type
    if (p.endsWith('.css') || p.endsWith('.js')) {
      newHeaders.set('Cache-Control', 'public, max-age=3600');
    } else if (p.match(/\.(png|jpg|jpeg|svg|webp|ico|gif|woff|woff2|ttf)$/)) {
      newHeaders.set('Cache-Control', 'public, max-age=604800');
    } else if (p.endsWith('.html') || p === '/') {
      newHeaders.set('Cache-Control', 'public, max-age=300');
    }
    
    // Security headers
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
};
