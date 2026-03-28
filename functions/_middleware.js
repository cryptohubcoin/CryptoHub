export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
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
      headers: { 'Cache-Control': 'no-store' }
    });
  }

  return context.next();
}
