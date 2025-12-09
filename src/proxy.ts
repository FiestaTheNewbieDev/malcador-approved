import ROUTES from '@routes/index';
import { NextRequest, NextResponse, ProxyConfig } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isComingSoonPage = pathname === ROUTES.comingSoon();

  if (isComingSoonPage) return NextResponse.next();

  if (process.env.NODE_ENV === 'production') {
    const redirectUrl = new URL(ROUTES.comingSoon(), request.url);
    return NextResponse.rewrite(redirectUrl);
  }

  return NextResponse.next();
}

export const config: ProxyConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|\\.well-known|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|otf)$).*)',
  ],
};
