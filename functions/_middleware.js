// ============================================================
//  CryptoHub — SEO Middleware (Cloudflare Pages Functions)
//  الوظيفة: 301 لأي URL فيه ?lang= / ?ref= / ?utm_*
//  + تأمين non-www → www كطبقة احتياطية
//  أي طلب تاني بيعدي عادي من غير أي تأثير (context.next)
// ============================================================

const STRIP_PARAMS = ['lang', 'ref'];

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // 0) متلمسش الـ API proxy خالص
  if (url.pathname.startsWith('/api/')) {
    return context.next();
  }

  let changed = false;

  // 1) non-www → www (طبقة احتياطية فوق _redirects)
  if (url.hostname === 'cryptohubcoin.com') {
    url.hostname = 'www.cryptohubcoin.com';
    changed = true;
  }

  // 2) امسح lang / ref / utm_* من الـ query string
  for (const key of [...url.searchParams.keys()]) {
    if (STRIP_PARAMS.includes(key) || key.startsWith('utm_')) {
      url.searchParams.delete(key);
      changed = true;
    }
  }

  if (changed) {
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
