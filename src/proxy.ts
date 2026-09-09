import { NextRequest, NextResponse } from 'next/server';

/**
 * Edge Middleware — Admin Auth Guard
 *
 * Protects all /admin/* and /api/admin/* routes.
 * Reads the `admin_session` cookie set by the login route.
 * Unauthenticated requests to /admin/* are redirected to /admin/login.
 * Unauthenticated requests to /api/admin/* return 401 JSON.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page and auth API through unconditionally
  if (pathname === '/admin/login' || pathname === '/api/admin/auth') {
    return NextResponse.next();
  }

  const session = request.cookies.get('admin_session');

  // Very lightweight token check — the token value is verified in the auth route
  // Here we just check for its presence to avoid doing crypto at the Edge
  if (!session?.value) {
    if (pathname.startsWith('/api/admin/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // Redirect UI requests to the login page
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
