'use client';

import { useState, useEffect, FormEvent } from 'react';
import type { SiteConfig } from '@/types';

function Toast({ msg, type, onDone }: { msg: string; type: 'success' | 'error'; onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 2800); return () => clearTimeout(t); }, [onDone]);
  return <div className={`adm-toast ${type}`}>{type === 'success' ? '✓' : '✗'} {msg}</div>;
}

export default function SiteConfigPage() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [form, setForm] = useState({ name: '', email: '', whatsappNumber: '', phoneNumber: '', address: '', locationUrl: '', locationsStr: '', businessHours: '' });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetch('/api/admin/site').then((r) => r.json()).then((c: SiteConfig) => {
      setConfig(c);
      setForm({ name: c.name, email: c.email || '', whatsappNumber: c.whatsappNumber, phoneNumber: c.phoneNumber || c.whatsappNumber, address: c.address || '', locationUrl: c.locationUrl || '', locationsStr: c.locations.join('\n'), businessHours: c.businessHours });
    });
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch('/api/admin/site', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        whatsappNumber: form.whatsappNumber.replace(/\D/g, ''),
        phoneNumber: form.phoneNumber.replace(/\D/g, ''),
        address: form.address,
        locationUrl: form.locationUrl,
        locations: form.locationsStr.split('\n').map((s) => s.trim()).filter(Boolean),
        businessHours: form.businessHours,
      }),
    });
    setSaving(false);
    if (res.ok) { setToast({ msg: 'Site config saved!', type: 'success' }); }
    else setToast({ msg: 'Failed to save config', type: 'error' });
  }

  if (!config) {
    return (
      <>
        <div className="admin-topbar"><h1 className="admin-topbar-title">Site Configuration</h1></div>
        <div className="admin-page"><div className="adm-empty"><div className="adm-empty-icon">⏳</div><h3>Loading…</h3></div></div>
      </>
    );
  }

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Site Configuration</h1>
      </div>

      <div className="admin-page">
        <form onSubmit={handleSubmit}>
          <div style={{ background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 10, overflow: 'hidden', maxWidth: 640 }}>
            <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid var(--adm-border)' }}>
              <h2 style={{ fontSize: 15, fontWeight: 700 }}>Business Details</h2>
              <p style={{ fontSize: 12, color: 'var(--adm-muted)', marginTop: 2 }}>Changes take effect immediately on the live site.</p>
            </div>

            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div className="adm-field">
                <label className="adm-label">Business Name</label>
                <input className="adm-input" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Marrakech Car Rental" />
              </div>

              <div className="adm-field">
                <label className="adm-label">Email Address</label>
                <input className="adm-input" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="hello@atlasdrive.ma" />
              </div>

              <div className="adm-field">
                <label className="adm-label">WhatsApp Number</label>
                <input className="adm-input" value={form.whatsappNumber} onChange={(e) => setForm((f) => ({ ...f, whatsappNumber: e.target.value }))} placeholder="212600000000" />
                <span style={{ fontSize: 11, color: 'var(--adm-muted)', marginTop: 2 }}>
                  International format without spaces or dashes (e.g. 212655690519). Non-numeric characters are stripped on save.
                </span>
              </div>

              <div className="adm-field">
                <label className="adm-label">Phone Number</label>
                <input className="adm-input" value={form.phoneNumber} onChange={(e) => setForm((f) => ({ ...f, phoneNumber: e.target.value }))} placeholder="212600000000" />
                <span style={{ fontSize: 11, color: 'var(--adm-muted)', marginTop: 2 }}>
                  International format without spaces or dashes. Leave same as WhatsApp if applicable.
                </span>
              </div>

              <div className="adm-field">
                <label className="adm-label">Business Address</label>
                <input className="adm-input" value={form.address} onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} placeholder="Route de l'Aéroport, Marrakech" />
              </div>

              <div className="adm-field">
                <label className="adm-label">Google Maps Link</label>
                <input className="adm-input" value={form.locationUrl} onChange={(e) => setForm((f) => ({ ...f, locationUrl: e.target.value }))} placeholder="https://maps.google.com/..." />
                <span style={{ fontSize: 11, color: 'var(--adm-muted)', marginTop: 2 }}>
                  Used for location links in the footer and contact pages.
                </span>
              </div>

              <div className="adm-field">
                <label className="adm-label">Pickup / Drop-off Locations (one per line)</label>
                <textarea
                  className="adm-textarea"
                  rows={5}
                  value={form.locationsStr}
                  onChange={(e) => setForm((f) => ({ ...f, locationsStr: e.target.value }))}
                  placeholder={"Marrakech Airport\nMarrakech City\nHotel / Riad\nOther"}
                />
                <span style={{ fontSize: 11, color: 'var(--adm-muted)', marginTop: 2 }}>
                  These appear in the rental request form dropdowns.
                </span>
              </div>

              <div className="adm-field">
                <label className="adm-label">Business Hours</label>
                <input className="adm-input" value={form.businessHours} onChange={(e) => setForm((f) => ({ ...f, businessHours: e.target.value }))} placeholder="24/7" />
              </div>
            </div>

            <div style={{ padding: '14px 24px', borderTop: '1px solid var(--adm-border)', display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" className="adm-btn adm-btn-primary" disabled={saving}>
                {saving ? 'Saving…' : '✓ Save Configuration'}
              </button>
            </div>
          </div>
        </form>

        {/* Live preview */}
        <div style={{ marginTop: 24, maxWidth: 640 }}>
          <div className="admin-stat-card" style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start', padding: '16px 20px' }}>
            <div style={{ fontSize: 22 }}>📱</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>WhatsApp Link Preview</div>
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, color: 'var(--adm-accent)', wordBreak: 'break-all' }}
              >
                https://wa.me/{config.whatsappNumber}
              </a>
              <p style={{ fontSize: 11, color: 'var(--adm-muted)', marginTop: 4, margin: '4px 0 0' }}>
                This is the URL your customers will be sent to when they submit a rental request.
              </p>
            </div>
          </div>
        </div>
      </div>

      {toast && <Toast msg={toast.msg} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
