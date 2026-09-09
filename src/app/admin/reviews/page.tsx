'use client';

import { useState, useEffect, FormEvent } from 'react';
import type { Review } from '@/types';

function Toast({ msg, type, onDone }: { msg: string; type: 'success' | 'error'; onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 2800); return () => clearTimeout(t); }, [onDone]);
  return <div className={`adm-toast ${type}`}>{type === 'success' ? '✓' : '✗'} {msg}</div>;
}

function ConfirmDialog({ message, onConfirm, onCancel }: { message: string; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="adm-confirm-overlay">
      <div className="adm-confirm-box">
        <div style={{ fontSize: 36 }}>🗑️</div>
        <h4>Confirm Delete</h4>
        <p>{message}</p>
        <div className="adm-confirm-actions">
          <button className="adm-btn adm-btn-ghost" onClick={onCancel}>Cancel</button>
          <button className="adm-btn adm-btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

function ReviewModal({ review, onClose, onSaved }: { review?: Review; onClose: () => void; onSaved: (r: Review) => void }) {
  const isEdit = !!review;
  const [form, setForm] = useState({ quote: review?.quote ?? '', name: review?.name ?? '', country: review?.country ?? '', initial: review?.initial ?? '', rating: review?.rating ?? 5 });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  // Auto-derive initial from name
  function setName(val: string) {
    setForm((f) => ({ ...f, name: val, initial: val.charAt(0).toUpperCase() || f.initial }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErr('');
    setSaving(true);
    const res = await fetch(isEdit ? `/api/admin/reviews/${review!.id}` : '/api/admin/reviews', {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setSaving(false);
    if (!res.ok) { setErr((await res.json().catch(() => ({}))).error ?? 'Failed to save'); return; }
    onSaved(await res.json());
  }

  return (
    <div className="adm-modal-overlay">
      <div className="adm-modal">
        <div className="adm-modal-header">
          <h3>{isEdit ? 'Edit Review' : 'Add Review'}</h3>
          <button className="adm-btn adm-btn-ghost adm-btn-icon" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="adm-modal-body">
            {err && <div className="adm-error-box" style={{ marginBottom: 14 }}>⚠️ {err}</div>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="adm-field">
                <label className="adm-label">Quote *</label>
                <textarea className="adm-textarea" required rows={4} value={form.quote} onChange={(e) => setForm((f) => ({ ...f, quote: e.target.value }))} placeholder="What the customer said…" />
              </div>
              <div className="adm-form-grid">
                <div className="adm-field">
                  <label className="adm-label">Customer Name *</label>
                  <input className="adm-input" required value={form.name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Sarah" />
                </div>
                <div className="adm-field">
                  <label className="adm-label">Country</label>
                  <input className="adm-input" value={form.country} onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))} placeholder="e.g. France" />
                </div>
                <div className="adm-field">
                  <label className="adm-label">Avatar Initial</label>
                  <input className="adm-input" maxLength={1} value={form.initial} onChange={(e) => setForm((f) => ({ ...f, initial: e.target.value.toUpperCase() }))} placeholder="S" />
                </div>
                <div className="adm-field">
                  <label className="adm-label">Rating (1–5)</label>
                  <input className="adm-input" type="number" min={1} max={5} value={form.rating} onChange={(e) => setForm((f) => ({ ...f, rating: Number(e.target.value) }))} />
                </div>
              </div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button type="button" className="adm-btn adm-btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="adm-btn adm-btn-primary" disabled={saving}>{saving ? 'Saving…' : isEdit ? '✓ Save Changes' : '+ Add Review'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ReviewsAdminPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<'add' | Review | null>(null);
  const [confirm, setConfirm] = useState<Review | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetch('/api/admin/reviews').then((r) => r.json()).then(setReviews).finally(() => setLoading(false));
  }, []);

  function showToast(msg: string, type: 'success' | 'error' = 'success') { setToast({ msg, type }); }

  function handleSaved(r: Review) {
    setReviews((prev) => { const idx = prev.findIndex((x) => x.id === r.id); if (idx >= 0) { const next = [...prev]; next[idx] = r; return next; } return [...prev, r]; });
    setModal(null);
    showToast(modal === 'add' ? `Review from "${r.name}" added` : `Review updated`);
  }

  async function handleDelete(r: Review) {
    const res = await fetch(`/api/admin/reviews/${r.id}`, { method: 'DELETE' });
    if (res.ok) { setReviews((prev) => prev.filter((x) => x.id !== r.id)); showToast(`Review from "${r.name}" deleted`); }
    else showToast('Failed to delete review', 'error');
    setConfirm(null);
  }

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Customer Reviews</h1>
        <div className="admin-topbar-spacer" />
        <button className="adm-btn adm-btn-primary" onClick={() => setModal('add')}>+ Add Review</button>
      </div>

      <div className="admin-page">
        {loading ? (
          <div className="adm-empty"><div className="adm-empty-icon">⏳</div><h3>Loading…</h3></div>
        ) : reviews.length === 0 ? (
          <div className="adm-empty"><div className="adm-empty-icon">⭐</div><h3>No reviews yet</h3><p>Add the first testimonial.</p></div>
        ) : (
          <div className="admin-reviews-grid">
            {reviews.map((r) => (
              <div key={r.id} className="admin-review-card">
                <div className="admin-review-stars">
                  {[...Array(r.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" /></svg>
                  ))}
                </div>
                <p className="admin-review-quote">"{r.quote}"</p>
                <div className="admin-review-meta">
                  <div className="admin-review-avatar">{r.initial}</div>
                  <div className="admin-review-info">
                    <strong>{r.name}</strong>
                    <span>{r.country}</span>
                  </div>
                  <div className="admin-review-actions">
                    <button className="adm-btn adm-btn-ghost adm-btn-icon adm-btn-sm" onClick={() => setModal(r)}>✏️</button>
                    <button className="adm-btn adm-btn-danger adm-btn-icon adm-btn-sm" onClick={() => setConfirm(r)}>🗑️</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modal && <ReviewModal review={modal === 'add' ? undefined : modal} onClose={() => setModal(null)} onSaved={handleSaved} />}
      {confirm && <ConfirmDialog message={`Delete review from "${confirm.name}"?`} onConfirm={() => handleDelete(confirm)} onCancel={() => setConfirm(null)} />}
      {toast && <Toast msg={toast.msg} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
