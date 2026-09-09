'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '◈', exact: true },
  { href: '/admin/vehicles', label: 'Fleet', icon: '🚗' },
  { href: '/admin/reviews', label: 'Reviews', icon: '⭐' },
  { href: '/admin/faq', label: 'FAQ', icon: '❓' },
  { href: '/admin/site', label: 'Site Config', icon: '⚙️' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  }

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    startTransition(() => router.push('/admin/login'));
  }

  return (
    <aside className="admin-sidebar">
      <Link href="/admin" className="admin-sidebar-logo">
        <div className="admin-sidebar-logo-icon">🔑</div>
        <div>
          <div className="admin-sidebar-logo-text">CMS Admin</div>
          <div className="admin-sidebar-logo-sub">Marrakech Car Rental</div>
        </div>
      </Link>

      <nav className="admin-nav">
        <div className="admin-nav-label">Navigation</div>
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href, item.exact) ? 'active' : ''}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}

        <div className="admin-nav-label" style={{ marginTop: 'auto' }}>Site</div>
        <Link href="/" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View Public Site
        </Link>
      </nav>

      <div className="admin-sidebar-footer">
        <button
          className="adm-btn adm-btn-ghost"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={handleLogout}
          disabled={isPending}
        >
          🚪 {isPending ? 'Logging out…' : 'Log out'}
        </button>
      </div>
    </aside>
  );
}
