'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import { cars } from '@/lib/data';
import { getRentalWhatsAppUrl } from '@/lib/whatsapp';
import type { RentalRequest } from '@/types';
import styles from './request.module.css';

const PICKUP_LOCATIONS = [
  'Marrakech Menara Airport',
  'Marrakech city centre',
  'Hotel / Riad delivery',
  'Other',
];

function RequestForm({ whatsappNumber }: { whatsappNumber: string }) {
  const searchParams = useSearchParams();
  const preselectedCar = searchParams.get('car') || '';

  // ── State ──────────────────────────────────────────
  const [step, setStep] = useState(1);
  const [selectedCarId, setSelectedCarId] = useState(preselectedCar || cars[0]?.id || '');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('10:00');
  const [pickupLocation, setPickupLocation] = useState(PICKUP_LOCATIONS[0]);
  const [sameReturn, setSameReturn] = useState(true);
  const [returnLocation, setReturnLocation] = useState(PICKUP_LOCATIONS[0]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedCar = useMemo(() => cars.find(c => c.id === selectedCarId), [selectedCarId]);

  // ── Calculated values ──────────────────────────────
  const rentalDays = useMemo(() => {
    if (!pickupDate || !returnDate) return 0;
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    return Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  }, [pickupDate, returnDate]);

  const estimatedTotal = selectedCar ? rentalDays * selectedCar.pricePerDay : 0;

  const todayStr = new Date().toISOString().split('T')[0];

  // ── Validation ─────────────────────────────────────
  function validateStep1(): boolean {
    const errs: Record<string, string> = {};
    if (!pickupDate) errs.pickupDate = 'Pickup date is required';
    if (!returnDate) errs.returnDate = 'Return date is required';
    if (pickupDate && pickupDate < todayStr) errs.pickupDate = 'Date cannot be in the past';
    if (pickupDate && returnDate && returnDate < pickupDate) errs.returnDate = 'Return must be after pickup';
    if (!pickupLocation) errs.pickupLocation = 'Pickup location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateStep2(): boolean {
    const errs: Record<string, string> = {};
    if (!customerName.trim()) errs.customerName = 'Your name is required';
    if (!customerPhone.trim()) errs.customerPhone = 'WhatsApp number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // ── Navigation ─────────────────────────────────────
  function goNext() {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  }

  function goBack() {
    setErrors({});
    if (step > 1) setStep(step - 1);
  }

  // ── WhatsApp URL ───────────────────────────────────
  const request: RentalRequest = {
    vehicleId: selectedCarId,
    pickupDate,
    pickupTime,
    returnDate,
    returnTime,
    pickupLocation,
    returnLocation: sameReturn ? pickupLocation : returnLocation,
    customerName,
    customerPhone,
    customerEmail: customerEmail || undefined,
    notes: notes || undefined,
  };

  const whatsappUrl = selectedCar
    ? getRentalWhatsAppUrl(whatsappNumber, request, selectedCar.name, selectedCar.pricePerDay)
    : '#';

  // ── Helper: format date for display ────────────────
  function displayDate(dateStr: string): string {
    if (!dateStr) return '—';
    try {
      return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric',
      });
    } catch { return dateStr; }
  }

  // ── Render ─────────────────────────────────────────
  return (
    <main className={styles.page}>
      <div className="wrap">

        {/* Step Indicator */}
        <div className={styles.stepIndicator}>
          {[
            { num: 1, label: 'Vehicle & Dates' },
            { num: 2, label: 'Your Details' },
            { num: 3, label: 'Review & Send' },
          ].map((s, i) => (
            <div className={styles.stepItem} key={s.num}>
              {i > 0 && (
                <div className={`${styles.stepConnector} ${step > s.num - 1 ? styles.completed : ''}`} />
              )}
              <div
                className={`${styles.stepCircle} ${step === s.num ? styles.active : ''} ${step > s.num ? styles.completed : ''}`}
              >
                {step > s.num ? '✓' : s.num}
              </div>
              <span
                className={`${styles.stepLabel} ${step >= s.num ? styles.active : ''} ${step > s.num ? styles.completed : ''}`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className={styles.formCard}>

          {/* ═══════════════ STEP 1 ═══════════════ */}
          {step === 1 && (
            <>
              <h1 className={styles.stepTitle}>Choose Your Vehicle & Dates</h1>
              <p className={styles.stepSubtitle}>Select a car and tell us when and where you need it.</p>

              {/* Vehicle preview */}
              {selectedCar && (
                <div className={styles.vehiclePreview}>
                  <div className={styles.vehicleThumb}>
                    <img src={selectedCar.images[0]} alt={selectedCar.name} />
                  </div>
                  <div className={styles.vehicleInfo}>
                    <h3>{selectedCar.name}</h3>
                    <p>{selectedCar.type} · {selectedCar.transmission} · {selectedCar.seats} seats</p>
                    <div className={styles.vehiclePrice}>{selectedCar.pricePerDay} DH / day</div>
                  </div>
                </div>
              )}

              {/* Change vehicle */}
              <div className={styles.changeVehicle}>
                <label htmlFor="vehicle-select">Change vehicle</label>
                <select
                  id="vehicle-select"
                  className={styles.field}
                  value={selectedCarId}
                  onChange={(e) => setSelectedCarId(e.target.value)}
                  style={{
                    padding: '12px 14px',
                    border: '1px solid rgba(0,0,0,0.15)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                    width: '100%',
                  }}
                >
                  {cars.map(car => (
                    <option key={car.id} value={car.id}>
                      {car.name} — {car.pricePerDay} DH/day
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates */}
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="pickup-date">Pickup date *</label>
                  <input
                    id="pickup-date"
                    type="date"
                    min={todayStr}
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className={errors.pickupDate ? styles.error : ''}
                  />
                  {errors.pickupDate && <span className={styles.fieldError}>{errors.pickupDate}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="pickup-time">Pickup time</label>
                  <input
                    id="pickup-time"
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="return-date">Return date *</label>
                  <input
                    id="return-date"
                    type="date"
                    min={pickupDate || todayStr}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className={errors.returnDate ? styles.error : ''}
                  />
                  {errors.returnDate && <span className={styles.fieldError}>{errors.returnDate}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="return-time">Return time</label>
                  <input
                    id="return-time"
                    type="time"
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                  />
                </div>
              </div>

              {/* Pickup location */}
              <div className={styles.radioGroup}>
                <label>Pickup location *</label>
                {PICKUP_LOCATIONS.map(loc => (
                  <label
                    key={loc}
                    className={`${styles.radioOption} ${pickupLocation === loc ? styles.selected : ''}`}
                  >
                    <input
                      type="radio"
                      name="pickup-location"
                      value={loc}
                      checked={pickupLocation === loc}
                      onChange={(e) => setPickupLocation(e.target.value)}
                    />
                    {loc}
                  </label>
                ))}
              </div>

              {/* Return location */}
              <div className={styles.checkboxRow}>
                <input
                  id="same-return"
                  type="checkbox"
                  checked={sameReturn}
                  onChange={(e) => setSameReturn(e.target.checked)}
                />
                <label htmlFor="same-return">Return to the same location</label>
              </div>

              {!sameReturn && (
                <div className={styles.radioGroup}>
                  <label>Return location</label>
                  {PICKUP_LOCATIONS.map(loc => (
                    <label
                      key={loc}
                      className={`${styles.radioOption} ${returnLocation === loc ? styles.selected : ''}`}
                    >
                      <input
                        type="radio"
                        name="return-location"
                        value={loc}
                        checked={returnLocation === loc}
                        onChange={(e) => setReturnLocation(e.target.value)}
                      />
                      {loc}
                    </label>
                  ))}
                </div>
              )}

              <div className={styles.actions}>
                <div />
                <button type="button" className={styles.btnNext} onClick={goNext}>
                  Continue →
                </button>
              </div>
            </>
          )}

          {/* ═══════════════ STEP 2 ═══════════════ */}
          {step === 2 && (
            <>
              <h1 className={styles.stepTitle}>Your Details</h1>
              <p className={styles.stepSubtitle}>How should we reach you to confirm the rental?</p>

              <div className={styles.field}>
                <label htmlFor="customer-name">Full name *</label>
                <input
                  id="customer-name"
                  type="text"
                  placeholder="e.g. Ahmed Benali"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={errors.customerName ? styles.error : ''}
                />
                {errors.customerName && <span className={styles.fieldError}>{errors.customerName}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="customer-phone">WhatsApp / Phone *</label>
                <input
                  id="customer-phone"
                  type="tel"
                  placeholder="e.g. +212 6XX XX XX XX"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className={errors.customerPhone ? styles.error : ''}
                />
                <span className={styles.fieldHint}>We'll confirm availability and final price on WhatsApp.</span>
                {errors.customerPhone && <span className={styles.fieldError}>{errors.customerPhone}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="customer-email">Email (optional)</label>
                <input
                  id="customer-email"
                  type="email"
                  placeholder="e.g. ahmed@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="notes">Additional requests (optional)</label>
                <textarea
                  id="notes"
                  placeholder="e.g. Child seat needed, arriving on flight RAM 402 at 22:30"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className={styles.actions}>
                <button type="button" className={styles.btnBack} onClick={goBack}>
                  ← Back
                </button>
                <button type="button" className={styles.btnNext} onClick={goNext}>
                  Review Request →
                </button>
              </div>
            </>
          )}

          {/* ═══════════════ STEP 3 ═══════════════ */}
          {step === 3 && (
            <>
              <h1 className={styles.stepTitle}>Review Your Request</h1>
              <p className={styles.stepSubtitle}>Make sure everything looks right, then send it to us via WhatsApp.</p>

              <div className={styles.summaryCard}>
                {/* Vehicle */}
                <div className={styles.summarySection}>
                  <div className={styles.summarySectionTitle}>Vehicle</div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Car</span>
                    <span className={styles.summaryValue}>{selectedCar?.name}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Type</span>
                    <span className={styles.summaryValue}>{selectedCar?.type} · {selectedCar?.transmission}</span>
                  </div>
                </div>

                {/* Dates */}
                <div className={styles.summarySection}>
                  <div className={styles.summarySectionTitle}>Rental Period</div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Pickup</span>
                    <span className={styles.summaryValue}>{displayDate(pickupDate)} at {pickupTime}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Return</span>
                    <span className={styles.summaryValue}>{displayDate(returnDate)} at {returnTime}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Duration</span>
                    <span className={styles.summaryValue}>{rentalDays} day{rentalDays > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Location */}
                <div className={styles.summarySection}>
                  <div className={styles.summarySectionTitle}>Location</div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Pickup</span>
                    <span className={styles.summaryValue}>{pickupLocation}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Return</span>
                    <span className={styles.summaryValue}>{sameReturn ? pickupLocation : returnLocation}</span>
                  </div>
                </div>

                {/* Customer */}
                <div className={styles.summarySection}>
                  <div className={styles.summarySectionTitle}>Your Information</div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Name</span>
                    <span className={styles.summaryValue}>{customerName}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>WhatsApp</span>
                    <span className={styles.summaryValue}>{customerPhone}</span>
                  </div>
                  {customerEmail && (
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Email</span>
                      <span className={styles.summaryValue}>{customerEmail}</span>
                    </div>
                  )}
                  {notes && (
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Notes</span>
                      <span className={styles.summaryValue}>{notes}</span>
                    </div>
                  )}
                </div>

                {/* Estimate */}
                <div className={styles.summarySection}>
                  <div className={styles.summarySectionTitle}>Estimated Price</div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>{rentalDays} day{rentalDays > 1 ? 's' : ''} × {selectedCar?.pricePerDay} DH</span>
                    <span className={styles.summaryValue}>{estimatedTotal} DH</span>
                  </div>
                  <p className={styles.estimateDisclaimer}>
                    Final price will be confirmed by our team on WhatsApp.
                  </p>
                </div>
              </div>

              {/* WhatsApp Send Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsApp}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Request via WhatsApp
              </a>
              <p className={styles.sentMessage}>
                This will open WhatsApp with your request details pre-filled.
              </p>

              <div className={styles.actions}>
                <button type="button" className={styles.btnBack} onClick={goBack}>
                  ← Edit Details
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

// Wrap in Suspense because useSearchParams requires it in Next.js App Router
export default function RequestClient({ whatsappNumber }: { whatsappNumber: string }) {
  return (
    <Suspense fallback={
      <main className={styles.page}>
        <div className="wrap">
          <div className={styles.formCard} style={{ textAlign: 'center', padding: '80px 40px' }}>
            <p>Loading request form...</p>
          </div>
        </div>
      </main>
    }>
      <RequestForm whatsappNumber={whatsappNumber} />
    </Suspense>
  );
}
