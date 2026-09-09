import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const SESSION_TOKEN = 'cms-authenticated';

/**
 * POST /api/admin/auth
 * Validates the admin password and sets a session cookie.
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { password } = body as { password?: string };

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json(
      { error: 'Server misconfiguration: ADMIN_PASSWORD not set' },
      { status: 500 }
    );
  }

  if (!password || password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set('admin_session', SESSION_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return NextResponse.json({ ok: true });
}

/**
 * DELETE /api/admin/auth
 * Clears the session cookie (logout).
 */
export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.set('admin_session', '', {
    httpOnly: true,
    maxAge: 0,
    path: '/',
  });
  return NextResponse.json({ ok: true });
}
