import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

/**
 * Edge Middleware — Admin Auth Guard & i18n
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Admin Auth Guard ---
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    if (pathname === '/admin/login' || pathname === '/api/admin/auth') {
      return NextResponse.next();
    }
    const session = request.cookies.get('admin_session');
    if (!session?.value) {
      if (pathname.startsWith('/api/admin/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // --- next-intl Routing ---
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Admin routes
    '/admin/:path*', '/api/admin/:path*',
    // i18n routes
    '/', '/(ar|en|fr)/:path*',
    // Protect other routes
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ],
};
