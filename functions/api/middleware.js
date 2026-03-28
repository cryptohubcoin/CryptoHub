// functions/_middleware.js - Block bad requests

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // BLOCK SUSPICIOUS PATHS
  const blockedPaths = [
    '/wp-admin', '/wp-login', '/wp-content', '/wp-includes', 
    '/wp-json', '/xmlrpc.php', '/wordpress',
    '/.env', '/.git', '/.htaccess', '/.htpasswd',
    '/admin', '/phpmyadmin', '/pma', '/mysql',
    '/backup', '/backups', '/old', '/test', '/dev', '/staging',
    '/config', '/configuration', '/install', '/setup'
  ];
  
  const isBlocked = blockedPaths.some(p => 
    url.pathname.toLowerCase().startsWith(p)
  );

  if (isBlocked) {
    return new Response('Not Found', {
      status: 404,
      headers: { 
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store'
      }
    });
  }

  // Block bad bots
  const userAgent = request.headers.get('User-Agent') || '';
  const isBadBot = /(bot|crawler|spider|scrape|scan)/i.test(userAgent) && 
                   !/(googlebot|bingbot)/i.test(userAgent);

  if (isBadBot) {
    return new Response('Forbidden', {
      status: 403,
      headers: { 'Cache-Control': 'no-store' }
    });
  }

  // Continue to next handler
  return context.next();
}
