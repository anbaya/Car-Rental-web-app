'use client';

import { useState, useEffect, FormEvent } from 'react';
import type { Vehicle } from '@/types';

// ── Toast helper ──────────────────────────────────────────────────────────────
function Toast({ msg, type, onDone }: { msg: string; type: 'success' | 'error'; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2800);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className={`adm-toast ${type}`}>{type === 'success' ? '✓' : '✗'} {msg}</div>;
}

// ── Confirm Dialog ─────────────────────────────────────────────────────────────
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

// ── Default form values ────────────────────────────────────────────────────────
function defaultForm(): Partial<Vehicle> {
  return {
    id: '', name: '', type: '', pricePerDay: 200,
    transmission: 'Manual', seats: 5, doors: 5,
    fuel: 'Petrol', hasAc: true, featured: false,
    images: ['/images/cars/'],
    description: '', included: [], conditions: [],
  };
}

// ── Vehicle Form Modal ─────────────────────────────────────────────────────────
function VehicleModal({
  vehicle,
  onClose,
  onSaved,
}: {
  vehicle?: Vehicle;
  onClose: () => void;
  onSaved: (v: Vehicle) => void;
}) {
  const isEdit = !!vehicle;
  const [form, setForm] = useState<Partial<Vehicle>>(vehicle ?? defaultForm());
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  function set(field: keyof Vehicle, val: unknown) {
    setForm((f) => ({ ...f, [field]: val }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErr('');
    setSaving(true);

    const payload = {
      ...form,
      images: typeof form.images === 'string'
        ? (form.images as string).split('\n').map((s) => s.trim()).filter(Boolean)
        : form.images,
      included: typeof form.included === 'string'
        ? (form.included as string).split('\n').map((s) => s.trim()).filter(Boolean)
        : form.included,
      conditions: typeof form.conditions === 'string'
        ? (form.conditions as string).split('\n').map((s) => s.trim()).filter(Boolean)
        : form.conditions,
    };

    const res = await fetch(
      isEdit ? `/api/admin/vehicles/${vehicle!.id}` : '/api/admin/vehicles',
      {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    setSaving(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setErr(data.error ?? 'Failed to save vehicle');
      return;
    }

    onSaved(await res.json());
  }

  const imagesStr = Array.isArray(form.images) ? form.images.join('\n') : (form.images ?? '');
  const includedStr = Array.isArray(form.included) ? form.included.join('\n') : (form.included ?? '');
  const conditionsStr = Array.isArray(form.conditions) ? form.conditions.join('\n') : (form.conditions ?? '');

  return (
    <div className="adm-modal-overlay">
      <div className="adm-modal">
        <div className="adm-modal-header">
          <h3>{isEdit ? `Edit: ${vehicle!.name}` : 'Add Vehicle'}</h3>
          <button className="adm-btn adm-btn-ghost adm-btn-icon" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="adm-modal-body">
            {err && <div className="adm-error-box" style={{ marginBottom: 14 }}>⚠️ {err}</div>}

            <div className="adm-form-grid">
              <div className="adm-field">
                <label className="adm-label">ID / Slug *</label>
                <input className="adm-input" required value={form.id ?? ''} onChange={(e) => set('id', e.target.value.toLowerCase().replace(/\s+/g, '-'))} placeholder="e.g. toyota-rav4" disabled={isEdit} />
              </div>
              <div className="adm-field">
                <label className="adm-label">Name *</label>
                <input className="adm-input" required value={form.name ?? ''} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Toyota RAV4" />
              </div>
              <div className="adm-field">
                <label className="adm-label">Type *</label>
                <input className="adm-input" required value={form.type ?? ''} onChange={(e) => set('type', e.target.value)} placeholder="e.g. Premium SUV" />
              </div>
              <div className="adm-field">
                <label className="adm-label">Price / Day (DH) *</label>
                <input className="adm-input" type="number" required min={1} value={form.pricePerDay ?? ''} onChange={(e) => set('pricePerDay', Number(e.target.value))} />
              </div>
              <div className="adm-field">
                <label className="adm-label">Transmission</label>
                <select className="adm-select" value={form.transmission} onChange={(e) => set('transmission', e.target.value)}>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>
              <div className="adm-field">
                <label className="adm-label">Fuel</label>
                <select className="adm-select" value={form.fuel ?? 'Petrol'} onChange={(e) => set('fuel', e.target.value)}>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div className="adm-field">
                <label className="adm-label">Seats</label>
                <input className="adm-input" type="number" min={2} max={9} value={form.seats ?? 5} onChange={(e) => set('seats', Number(e.target.value))} />
              </div>
              <div className="adm-field">
                <label className="adm-label">Doors</label>
                <input className="adm-input" type="number" min={2} max={5} value={form.doors ?? 5} onChange={(e) => set('doors', Number(e.target.value))} />
              </div>
              <div className="adm-field adm-full" style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <label className="adm-check-label">
                  <input type="checkbox" checked={form.hasAc ?? true} onChange={(e) => set('hasAc', e.target.checked)} />
                  Air Conditioning
                </label>
                <label className="adm-check-label">
                  <input type="checkbox" checked={form.featured ?? false} onChange={(e) => set('featured', e.target.checked)} />
                  Featured on Homepage
                </label>
              </div>
              <div className="adm-field adm-full">
                <label className="adm-label">Image Paths (one per line)</label>
                <textarea className="adm-textarea" value={imagesStr} onChange={(e) => set('images', e.target.value)} placeholder="/images/cars/vehicle-01.png" rows={2} />
              </div>
              <div className="adm-field adm-full">
                <label className="adm-label">Description *</label>
                <textarea className="adm-textarea" required value={form.description ?? ''} onChange={(e) => set('description', e.target.value)} rows={3} />
              </div>
              <div className="adm-field adm-full">
                <label className="adm-label">Included (one per line)</label>
                <textarea className="adm-textarea" value={includedStr} onChange={(e) => set('included', e.target.value)} placeholder="Basic insurance&#10;Unlimited mileage" rows={3} />
              </div>
              <div className="adm-field adm-full">
                <label className="adm-label">Conditions (one per line)</label>
                <textarea className="adm-textarea" value={conditionsStr} onChange={(e) => set('conditions', e.target.value)} placeholder="Minimum rental period: 1 day&#10;Security deposit: 2,000 DH" rows={3} />
              </div>
            </div>
          </div>

          <div className="adm-modal-footer">
            <button type="button" className="adm-btn adm-btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="adm-btn adm-btn-primary" disabled={saving}>
              {saving ? 'Saving…' : isEdit ? '✓ Save Changes' : '+ Add Vehicle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function VehiclesAdminPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<'add' | Vehicle | null>(null);
  const [confirm, setConfirm] = useState<Vehicle | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetch('/api/admin/vehicles')
      .then((r) => r.json())
      .then(setVehicles)
      .finally(() => setLoading(false));
  }, []);

  function showToast(msg: string, type: 'success' | 'error' = 'success') {
    setToast({ msg, type });
  }

  function handleSaved(v: Vehicle) {
    setVehicles((prev) => {
      const idx = prev.findIndex((x) => x.id === v.id);
      if (idx >= 0) { const next = [...prev]; next[idx] = v; return next; }
      return [...prev, v];
    });
    setModal(null);
    showToast(modal === 'add' ? `"${v.name}" added to fleet` : `"${v.name}" updated`);
  }

  async function handleDelete(v: Vehicle) {
    const res = await fetch(`/api/admin/vehicles/${v.id}`, { method: 'DELETE' });
    if (res.ok) {
      setVehicles((prev) => prev.filter((x) => x.id !== v.id));
      showToast(`"${v.name}" removed from fleet`);
    } else {
      showToast('Failed to delete vehicle', 'error');
    }
    setConfirm(null);
  }

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Fleet Management</h1>
        <div className="admin-topbar-spacer" />
        <button className="adm-btn adm-btn-primary" onClick={() => setModal('add')}>
          + Add Vehicle
        </button>
      </div>

      <div className="admin-page">
        {loading ? (
          <div className="adm-empty"><div className="adm-empty-icon">⏳</div><h3>Loading…</h3></div>
        ) : vehicles.length === 0 ? (
          <div className="adm-empty">
            <div className="adm-empty-icon">🚗</div>
            <h3>No vehicles yet</h3>
            <p>Click "Add Vehicle" to add the first car to your fleet.</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Type</th>
                  <th>Price / Day</th>
                  <th>Specs</th>
                  <th>Featured</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((v) => (
                  <tr key={v.id}>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--adm-text)' }}>{v.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--adm-muted)' }}>{v.id}</div>
                    </td>
                    <td>{v.type}</td>
                    <td>
                      <span className="adm-badge adm-badge-gold">{v.pricePerDay} DH</span>
                    </td>
                    <td style={{ fontSize: 12, color: 'var(--adm-muted)' }}>
                      {v.transmission} · {v.fuel} · {v.seats} seats
                    </td>
                    <td>
                      {v.featured
                        ? <span className="adm-badge adm-badge-gold">⭐ Featured</span>
                        : <span className="adm-badge adm-badge-muted">—</span>}
                    </td>
                    <td>
                      <div className="admin-table-actions" style={{ justifyContent: 'flex-end' }}>
                        <button
                          className="adm-btn adm-btn-ghost adm-btn-sm"
                          onClick={() => setModal(v)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="adm-btn adm-btn-danger adm-btn-sm"
                          onClick={() => setConfirm(v)}
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modal && (
        <VehicleModal
          vehicle={modal === 'add' ? undefined : modal}
          onClose={() => setModal(null)}
          onSaved={handleSaved}
        />
      )}

      {confirm && (
        <ConfirmDialog
          message={`Are you sure you want to remove "${confirm.name}" from the fleet? This cannot be undone.`}
          onConfirm={() => handleDelete(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}

      {toast && (
        <Toast msg={toast.msg} type={toast.type} onDone={() => setToast(null)} />
      )}
    </>
  );
}
