'use client';

import React, { useEffect } from 'react';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';

export default function ContactPage() {
  const WHATSAPP_NUMBER = "+212 600 00 00 00"; // Replace with real later
  const WHATSAPP_LINK = getGeneralWhatsAppUrl();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Page Header */}
      <section className="cars-header">
        <div className="wrap">
          <h1 className="reveal">Contact</h1>
          <p className="reveal delay-1">Reach us directly — a real person answers, usually within minutes.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-soft">
        <div className="wrap">
          <div className="contact-grid reveal delay-1">

            {/* WhatsApp — primary */}
            <a href={WHATSAPP_LINK} className="contact-card" target="_blank" rel="noopener noreferrer">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20z" />
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <p className="contact-card-detail">{WHATSAPP_NUMBER}</p>
              <p className="contact-card-sub">Fastest way to reach us. Answered daily, 7am–11pm.</p>
              <span className="contact-card-action">Open WhatsApp →</span>
            </a>

            {/* Phone */}
            <a href="tel:+212600000000" className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Phone</h3>
              <p className="contact-card-detail">{WHATSAPP_NUMBER}</p>
              <p className="contact-card-sub">Same number as WhatsApp. French, English, Arabic.</p>
              <span className="contact-card-action">Call now →</span>
            </a>

            {/* Email */}
            <a href="mailto:contact@atlasdrive.ma" className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </div>
              <h3>Email</h3>
              <p className="contact-card-detail">contact@atlasdrive.ma</p>
              <p className="contact-card-sub">For quotes, invoices, or anything formal. We reply within 24h.</p>
              <span className="contact-card-action">Send email →</span>
            </a>

            {/* Address */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3c4 3 7 6 7 10a7 7 0 0 1-14 0c0-4 3-7 7-10z" />
                </svg>
              </div>
              <h3>Location</h3>
              <p className="contact-card-detail">Route de l&apos;Aéroport, Marrakech</p>
              <p className="contact-card-sub">10 minutes from Menara Airport. We deliver to your riad, hotel, or anywhere in the city.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="stats-section">
        <div className="wrap">
          <div className="stats-row">
            <div className="stat-item reveal delay-1">
              <span className="stat-number">7am–11pm</span>
              <span className="stat-label">WhatsApp hours</span>
            </div>
            <div className="stat-divider reveal delay-2"></div>
            <div className="stat-item reveal delay-3">
              <span className="stat-number">FR · EN · AR</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat-divider reveal delay-4"></div>
            <div className="stat-item reveal delay-5">
              <span className="stat-number">~5 min</span>
              <span className="stat-label">Typical reply time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-soft">
        <div className="wrap">
          <div className="section-head reveal delay-1">
            <h2>Find us in Marrakech</h2>
            <p>Based near Menara Airport with free airport pickup on rentals of two days or more.</p>
          </div>
          <div className="map-card reveal delay-2" style={{ borderRadius: '18px', overflow: 'hidden' }}>
            <img src="/images/location.jpg" alt="Map of Marrakech" className="map-image" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2 className="reveal">Ready to book?</h2>
          <p className="reveal delay-1" style={{ marginTop: '12px', opacity: 0.78, fontSize: '18px' }}>Send us a message and we&apos;ll get back to you with availability and pricing.</p>
          <div className="hero-ctas reveal delay-2" style={{ marginTop: '24px' }}>
            <a href="/cars" className="btn btn-brass">Browse the fleet</a>
            <a href={WHATSAPP_LINK} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
