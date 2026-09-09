import Link from 'next/link';
import { getVehicles, getReviews, getFaqs, getSiteConfig } from '@/lib/cms';

export default async function AdminDashboard() {
  const [vehicles, reviews, faqs, siteConfig] = await Promise.all([
    getVehicles(),
    getReviews(),
    getFaqs(),
    getSiteConfig(),
  ]);

  const stats = [
    { icon: '🚗', value: vehicles.length, label: 'Vehicles in Fleet', href: '/admin/vehicles' },
    { icon: '⭐', value: reviews.length, label: 'Customer Reviews', href: '/admin/reviews' },
    { icon: '❓', value: faqs.length, label: 'FAQ Entries', href: '/admin/faq' },
    { icon: '📱', value: siteConfig.whatsappNumber, label: 'WhatsApp Number', href: '/admin/site' },
  ];

  const quickActions = [
    { href: '/admin/vehicles', label: 'Add a Vehicle', desc: 'Add a new car to the fleet' },
    { href: '/admin/reviews', label: 'Add a Review', desc: 'Add a customer testimonial' },
    { href: '/admin/faq', label: 'Add an FAQ', desc: 'Add a frequently asked question' },
    { href: '/admin/site', label: 'Edit Site Config', desc: 'Update WhatsApp number & settings' },
  ];

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Dashboard</h1>
      </div>

      <div className="admin-page">
        {/* Stats */}
        <div className="admin-stats-grid">
          {stats.map((s) => (
            <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
              <div className="admin-stat-card" style={{ cursor: 'pointer', transition: 'border-color 180ms' }}>
                <div className="admin-stat-card-icon">{s.icon}</div>
                <div className="admin-stat-card-value">{s.value}</div>
                <div className="admin-stat-card-label">{s.label}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ marginBottom: 12 }}>
          <h2 style={{ fontWeight: 700, color: 'var(--adm-muted)', marginBottom: 14, letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '11px' }}>
            Quick Actions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {quickActions.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="admin-stat-card"
                style={{ textDecoration: 'none', flexDirection: 'row', alignItems: 'center', gap: 12, padding: '14px 16px' }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--adm-text)', marginBottom: 2 }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--adm-muted)' }}>{a.desc}</div>
                </div>
                <span style={{ color: 'var(--adm-accent)', fontSize: 18 }}>→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Info */}
        <div
          className="admin-stat-card"
          style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 14, marginTop: 24, padding: '18px 20px' }}
        >
          <div style={{ fontSize: 24, marginTop: 2 }}>ℹ️</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>How this CMS works</div>
            <p style={{ fontSize: 13, color: 'var(--adm-muted)', lineHeight: 1.6, margin: 0 }}>
              All content is stored in <code style={{ background: 'var(--adm-surface-2)', padding: '1px 5px', borderRadius: 4, fontSize: 12 }}>content/*.json</code> files
              on the server. Changes you make here are written to disk immediately and reflected on the
              public website. No deployment required — just save and the site updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
