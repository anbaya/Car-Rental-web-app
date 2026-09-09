'use client';

import { useState, useTransition, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import '../admin.css';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      startTransition(() => router.push('/admin'));
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? 'Invalid password. Please try again.');
    }
  }

  return (
    <div className="admin-login-root">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <div className="admin-login-logo-icon">🔑</div>
          <h1>CMS Admin</h1>
          <p>Marrakech Car Rental · Content Management</p>
        </div>

        {error && <div className="adm-error-box">⚠️ {error}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="adm-field">
            <label htmlFor="admin-password" className="adm-label">Admin Password</label>
            <input
              id="admin-password"
              type="password"
              className="adm-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password…"
              required
              autoFocus
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="adm-btn adm-btn-primary"
            disabled={isPending || !password}
            style={{ justifyContent: 'center', padding: '11px 16px', fontSize: 14 }}
          >
            {isPending ? 'Signing in…' : '→ Sign In'}
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--adm-muted)' }}>
          This panel is for authorised operators only.
        </p>
      </div>
    </div>
  );
}
