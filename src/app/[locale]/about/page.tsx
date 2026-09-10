'use client';

import React, { useEffect } from 'react';

export default function AboutPage() {
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
          <h1 className="reveal">About us</h1>
          <p className="reveal delay-1">A small fleet, and someone who actually answers the phone.</p>
        </div>
      </section>

      {/* Story — Why we started */}
      <section className="on-bone">
        <div className="wrap">
          <div className="trust-row reveal delay-1">
            <div className="trust-media">
              <img src="/images/trust/trust1.png" alt="Our story" />
            </div>
            <div className="trust-text">
              <h3>Why we started</h3>
              <p>We landed in Marrakech as tourists, rented a car from one of the big agencies at the airport, and got exactly the experience everyone warns you about — hidden charges, a vehicle that didn't match the listing, and a support line that rang out when a dashboard light came on outside Essaouira.</p>
              <p style={{ marginTop: '16px' }}>So we started this. A small, personally run operation where every car is inspected between rentals, the price you're quoted is the price you pay, and a real person picks up the phone — in French, English, or Arabic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values — What we promise */}
      <section>
        <div className="wrap">
          <div className="trust-row reverse reveal delay-1">
            <div className="trust-media">
              <img src="/images/trust/trust2.png" alt="What we promise" />
            </div>
            <div className="trust-text">
              <h3>What we promise</h3>
              <p>We don't have a 200-car fleet or a corporate headquarters. What we have is a handful of well-maintained vehicles and the ability to actually stand behind what we tell you.</p>
              <div className="chip-row" style={{ marginTop: '20px' }}>
                <span className="chip">Transparent pricing</span>
                <span className="chip">No hidden fees</span>
                <span className="chip">WhatsApp support</span>
                <span className="chip">Airport pickup</span>
                <span className="chip">Riad delivery</span>
                <span className="chip">Inspected between rentals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="stats-section">
        <div className="wrap">
          <div className="stats-row reveal delay-1">
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Cars in the fleet</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2026</span>
              <span className="stat-label">Established</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Marrakech</span>
              <span className="stat-label">Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Nod */}
      <section className="on-bone">
        <div className="wrap">
          <div className="trust-row reveal delay-1">
            <div className="trust-media">
              <img src="/images/trust/trust3.png" alt="Our fleet" />
            </div>
            <div className="trust-text">
              <h3>The cars</h3>
              <p>Every vehicle in the fleet is chosen for a reason — reliable on mountain passes, comfortable for long coast runs, and fuel-efficient enough that the petrol bill doesn't ruin your holiday budget.</p>
              <p style={{ marginTop: '16px' }}>We keep the selection small on purpose. Fewer cars means each one gets properly serviced, cleaned, and checked before it goes out again.</p>
              <a href="/cars" className="btn btn-brass" style={{ marginTop: '24px', display: 'inline-flex' }}>See what&apos;s available</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2 className="reveal">Questions before you book?</h2>
          <p className="reveal delay-1" style={{ marginTop: '12px', opacity: 0.78, fontSize: '18px' }}>Ask us directly — a real person answers.</p>
          <div className="hero-ctas reveal delay-2" style={{ marginTop: '24px' }}>
            <a href="/cars" className="btn btn-brass">Browse the fleet</a>
            <a href="/" className="btn btn-outline">Message us on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
