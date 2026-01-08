import { DEFAULT_LOCALE, LOCALES } from '@/i18n/config';
import { NODE_ENV } from '@lib/env';
import ROUTES from '@routes/index';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse, ProxyConfig } from 'next/server';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
});

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isComingSoonPage = pathname === ROUTES.app.comingSoon();

  if (isComingSoonPage) return NextResponse.next();

  if (NODE_ENV === 'production') {
    const redirectUrl = new URL(ROUTES.app.comingSoon(), request.url);
    return NextResponse.rewrite(redirectUrl);
  }

  return NextResponse.next();
}

export const config: ProxyConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|\\.well-known|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|otf)$).*)',
  ],
};
