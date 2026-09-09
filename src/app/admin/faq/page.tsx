'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import type { FaqEntry } from '@/types';

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

const CATEGORIES = ['Booking & Requirements', 'Pickup & Drop-off', 'Payments & Insurance', 'On the Road', 'General'];

function FaqModal({ faq, maxOrder, onClose, onSaved }: { faq?: FaqEntry; maxOrder: number; onClose: () => void; onSaved: (f: FaqEntry) => void }) {
  const isEdit = !!faq;
  const [form, setForm] = useState({ category: faq?.category ?? CATEGORIES[0], question: faq?.question ?? '', answer: faq?.answer ?? '', order: faq?.order ?? maxOrder });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault(); setErr(''); setSaving(true);
    const res = await fetch(isEdit ? `/api/admin/faq/${faq!.id}` : '/api/admin/faq', {
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
          <h3>{isEdit ? 'Edit FAQ Entry' : 'Add FAQ Entry'}</h3>
          <button className="adm-btn adm-btn-ghost adm-btn-icon" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="adm-modal-body">
            {err && <div className="adm-error-box" style={{ marginBottom: 14 }}>⚠️ {err}</div>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="adm-field">
                <label className="adm-label">Category</label>
                <select className="adm-select" value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="adm-field">
                <label className="adm-label">Question *</label>
                <input className="adm-input" required value={form.question} onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))} placeholder="What does the customer ask?" />
              </div>
              <div className="adm-field">
                <label className="adm-label">Answer *</label>
                <textarea className="adm-textarea" required rows={5} value={form.answer} onChange={(e) => setForm((f) => ({ ...f, answer: e.target.value }))} placeholder="The answer…" />
              </div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button type="button" className="adm-btn adm-btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="adm-btn adm-btn-primary" disabled={saving}>{saving ? 'Saving…' : isEdit ? '✓ Save Changes' : '+ Add FAQ'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function FaqAdminPage() {
  const [faqs, setFaqs] = useState<FaqEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<'add' | FaqEntry | null>(null);
  const [confirm, setConfirm] = useState<FaqEntry | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  // Drag-and-drop state
  const dragIdx = useRef<number | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/admin/faq').then((r) => r.json()).then(setFaqs).finally(() => setLoading(false));
  }, []);

  function showToast(msg: string, type: 'success' | 'error' = 'success') { setToast({ msg, type }); }

  function handleSaved(f: FaqEntry) {
    setFaqs((prev) => { const idx = prev.findIndex((x) => x.id === f.id); if (idx >= 0) { const next = [...prev]; next[idx] = f; return next; } return [...prev, f].sort((a, b) => a.order - b.order); });
    setModal(null);
    showToast(modal === 'add' ? 'FAQ entry added' : 'FAQ entry updated');
  }

  async function handleDelete(f: FaqEntry) {
    const res = await fetch(`/api/admin/faq/${f.id}`, { method: 'DELETE' });
    if (res.ok) { setFaqs((prev) => prev.filter((x) => x.id !== f.id)); showToast('FAQ entry deleted'); }
    else showToast('Failed to delete FAQ', 'error');
    setConfirm(null);
  }

  // ── Drag & Drop reorder ──────────────────────────────────────────────────
  function onDragStart(idx: number) { dragIdx.current = idx; }

  function onDrop(targetIdx: number) {
    if (dragIdx.current === null || dragIdx.current === targetIdx) return;
    const next = [...faqs];
    const [moved] = next.splice(dragIdx.current, 1);
    next.splice(targetIdx, 0, moved);
    const reordered = next.map((f, i) => ({ ...f, order: i }));
    setFaqs(reordered);
    dragIdx.current = null;
    setDragOver(null);

    // Persist the new order by saving all items
    Promise.all(
      reordered.map((f) =>
        fetch(`/api/admin/faq/${f.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ order: f.order }),
        })
      )
    ).then(() => showToast('Order saved')).catch(() => showToast('Failed to save order', 'error'));
  }

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">FAQ Management</h1>
        <div className="admin-topbar-spacer" />
        <button className="adm-btn adm-btn-primary" onClick={() => setModal('add')}>+ Add FAQ</button>
      </div>

      <div className="admin-page">
        <p style={{ fontSize: 12, color: 'var(--adm-muted)', marginBottom: 16 }}>
          💡 Drag entries to reorder them. Changes are saved automatically.
        </p>

        {loading ? (
          <div className="adm-empty"><div className="adm-empty-icon">⏳</div><h3>Loading…</h3></div>
        ) : faqs.length === 0 ? (
          <div className="adm-empty"><div className="adm-empty-icon">❓</div><h3>No FAQ entries yet</h3><p>Click "Add FAQ" to create the first entry.</p></div>
        ) : (
          <div className="admin-faq-list">
            {faqs.map((f, i) => (
              <div
                key={f.id}
                className={`admin-faq-item${dragOver === i ? ' drag-over' : ''}`}
                draggable
                onDragStart={() => onDragStart(i)}
                onDragOver={(e) => { e.preventDefault(); setDragOver(i); }}
                onDragLeave={() => setDragOver(null)}
                onDrop={() => onDrop(i)}
                onDragEnd={() => { dragIdx.current = null; setDragOver(null); }}
              >
                <div className="admin-faq-drag-handle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="9" cy="6" r="1.5" /><circle cx="15" cy="6" r="1.5" />
                    <circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" />
                    <circle cx="9" cy="18" r="1.5" /><circle cx="15" cy="18" r="1.5" />
                  </svg>
                </div>
                <div className="admin-faq-content">
                  <strong>{f.question}</strong>
                  <span>{f.category}</span>
                </div>
                <div className="admin-faq-actions">
                  <button className="adm-btn adm-btn-ghost adm-btn-icon adm-btn-sm" onClick={() => setModal(f)}>✏️</button>
                  <button className="adm-btn adm-btn-danger adm-btn-icon adm-btn-sm" onClick={() => setConfirm(f)}>🗑️</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modal && <FaqModal faq={modal === 'add' ? undefined : modal} maxOrder={faqs.length} onClose={() => setModal(null)} onSaved={handleSaved} />}
      {confirm && <ConfirmDialog message={`Delete the FAQ entry "${confirm.question}"?`} onConfirm={() => handleDelete(confirm)} onCancel={() => setConfirm(null)} />}
      {toast && <Toast msg={toast.msg} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
