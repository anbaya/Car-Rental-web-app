'use client';
import { useRef } from 'react';

export default function HomePage() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -332, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 332, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero/hero.png" alt="Marrakech Luxury Car Rental Background" />
          <div className="hero-overlay"></div>
        </div>
        <div className="wrap">
          <div className="hero-in">
            <h1><span>Arrive in Marrakech.</span><span>Leave in style.</span></h1>
            <p className="hero-sub">Browse a fleet that's actually maintained, get a real price over WhatsApp, and pick your car
              up at the airport, your riad, or right in the medina.</p>
            <div className="hero-ctas">
              <a href="#fleet" className="btn btn-brass">Browse the fleet</a>
              <a href="/" className="btn btn-outline">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20z" />
                </svg>
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  SEARCH CARD  */}
      <div className="search-card">
        <div className="wrap">
          <form className="search-inner">
            <div className="field">
              <label htmlFor="pickup-loc">Pickup location</label>
              <select id="pickup-loc">
                <option>Marrakech Menara Airport</option>
                <option>Marrakech city centre</option>
                <option>Hotel / Riad delivery</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="pickup-date">Pickup date</label>
              <input id="pickup-date" type="date" />
            </div>
            <div className="field">
              <label htmlFor="return-date">Return date</label>
              <input id="return-date" type="date" />
            </div>
            <button type="submit" className="btn btn-brass">Check availability</button>
          </form>
        </div>
      </div>

      {/*  FLEET BRAND MARQUEE  */}
      <div className="marquee-section">
        <div className="wrap">
          <p className="marquee-label">The fleet includes</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            <span>DACIA</span><span>RENAULT</span><span>HYUNDAI</span><span>KIA</span><span>PEUGEOT</span><span>VOLKSWAGEN</span><span>FIAT</span><span>TOYOTA</span>
            <span>DACIA</span><span>RENAULT</span><span>HYUNDAI</span><span>KIA</span><span>PEUGEOT</span><span>VOLKSWAGEN</span><span>FIAT</span><span>TOYOTA</span>
          </div>
        </div>
      </div>

      {/*  FEATURED VEHICLES  */}
      <section id="fleet">
        <div className="wrap">
          <div className="fleet-head">
            <div className="section-head" style={{ "marginBottom": "0" }}>
              <h2>Cars people actually ask for</h2>
              <p>A working cross-section of the fleet — from city runabouts to airport-ready SUVs.</p>
            </div>
            <div className="carousel-nav">
              <button id="carPrev" onClick={scrollPrev} aria-label="Previous vehicles">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button id="carNext" onClick={scrollNext} aria-label="Next vehicles">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="car-track" id="carTrack" ref={trackRef}>
            <article className="car-card">
              <div className="car-media">
                <img src="/images/cars/duster.png" alt="Dacia Duster" />
              </div>
              <div className="car-body">
                <h3>Dacia Duster</h3>
                <p className="car-type">SUV · crossover</p>
                <div className="chip-row"><span className="chip">Automatic</span><span className="chip">5 seats</span><span
                  className="chip">Diesel</span></div>
                <div className="car-foot"><span className="car-price">From 350 DH/day</span><a href="/" className="car-link">View
                  details</a></div>
              </div>
            </article>

            <article className="car-card">
              <div className="car-media">
                <img src="/images/cars/clio.png" alt="Renault Clio" />
              </div>
              <div className="car-body">
                <h3>Renault Clio</h3>
                <p className="car-type">Compact hatchback</p>
                <div className="chip-row"><span className="chip">Manual</span><span className="chip">5 seats</span><span
                  className="chip">Petrol</span></div>
                <div className="car-foot"><span className="car-price">From 220 DH/day</span><a href="/" className="car-link">View
                  details</a></div>
              </div>
            </article>

            <article className="car-card">
              <div className="car-media">
                <img src="/images/cars/Hyundai Tucson.png" alt="Hyundai Tucson" />
              </div>
              <div className="car-body">
                <h3>Hyundai Tucson</h3>
                <p className="car-type">SUV</p>
                <div className="chip-row"><span className="chip">Automatic</span><span className="chip">5 seats</span><span
                  className="chip">Diesel</span></div>
                <div className="car-foot"><span className="car-price">From 420 DH/day</span><a href="/" className="car-link">View
                  details</a></div>
              </div>
            </article>

            <article className="car-card">
              <div className="car-media">
                <img src="/images/cars/sandero.png" alt="Dacia Sandero" />
              </div>
              <div className="car-body">
                <h3>Dacia Sandero</h3>
                <p className="car-type">Economy</p>
                <div className="chip-row"><span className="chip">Manual</span><span className="chip">5 seats</span><span
                  className="chip">Petrol</span></div>
                <div className="car-foot"><span className="car-price">From 190 DH/day</span><a href="/" className="car-link">View
                  details</a></div>
              </div>
            </article>

            <article className="car-card">
              <div className="car-media">
                <img src="/images/cars/picanto.png" alt="Kia Picanto" />
              </div>
              <div className="car-body">
                <h3>Kia Picanto</h3>
                <p className="car-type">City car</p>
                <div className="chip-row"><span className="chip">Manual</span><span className="chip">4 seats</span><span
                  className="chip">Petrol</span></div>
                <div className="car-foot"><span className="car-price">From 170 DH/day</span><a href="/" className="car-link">View
                  details</a></div>
              </div>
            </article>
          </div>

          <div className="section-foot">
            <a href="/" className="btn btn-outline">View all cars</a>
          </div>
        </div>
      </section>

      {/*  WHY CHOOSE US  */}
      <section className="on-bone" id="about">
        <div className="wrap">
          <div className="section-head">
            <h2>Why people rebook with us</h2>
            <p>Four things we can actually stand behind — not a wall of generic checkmarks.</p>
          </div>

          <div className="trust-row">
            <div className="trust-media">
              <img src="/images/trust/trust1.png" alt="Real prices" />
            </div>
            <div className="trust-text">
              <h3>Real prices, no surprises</h3>
              <p>The price you're quoted on WhatsApp is the price you pay at pickup. Deposit and terms are explained before
                you confirm, not after.</p>
            </div>
          </div>

          <div className="trust-row reverse">
            <div className="trust-media">
              <img src="/images/trust/trust2.png" alt="Always on WhatsApp" />
            </div>
            <div className="trust-text">
              <h3>Always on WhatsApp</h3>
              <p>A person answers, in French, English, or Arabic — usually within minutes, not a chatbot reading from a
                script.</p>
            </div>
          </div>

          <div className="trust-row">
            <div className="trust-media">
              <img src="/images/trust/trust3.png" alt="Airport, city, or riad pickup" />
            </div>
            <div className="trust-text">
              <h3>Airport, city, or riad pickup</h3>
              <p>Land at Menara, walk out of your medina riad, or meet us in Gueliz — we come to wherever your trip actually
                starts.</p>
            </div>
          </div>

          <div className="trust-row reverse">
            <div className="trust-media">
              <img src="/images/trust/trust4.png" alt="Maintained fleet" />
            </div>
            <div className="trust-text">
              <h3>A fleet that's actually maintained</h3>
              <p>Every car is serviced and inspected between rentals — no rolling into your holiday with a check-engine
                light already on.</p>
            </div>
          </div>
        </div>
      </section>

      {/*  HOW IT WORKS  */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>How a request becomes a rental</h2>
            <p>Three steps, and a human confirms the details before anything is final.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Choose your car</h3>
              <p>Filter by size, transmission, or price, and open the one that fits your trip.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Send your request</h3>
              <p>Pick your dates and pickup point, review the summary, then send it straight to WhatsApp.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Get confirmation</h3>
              <p>We confirm availability, final price, and deposit with you directly before you arrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/*  REVIEWS  */}
      <section className="on-bone">
        <div className="wrap review-shell">
          <div className="stars" aria-hidden="true">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
            </svg>
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
            </svg>
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
            </svg>
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
            </svg>
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
            </svg>
          </div>

          <div id="reviewSlot">
            <p className="review-quote" data-review="true">"We landed at midnight and the car was already waiting at arrivals. No
              paperwork drama, no upselling — exactly what was agreed on WhatsApp."</p>
            <p className="review-who" data-review="true">Camille · France</p>
          </div>

          <div className="review-controls">
            <div className="review-dots" id="reviewDots">
              <button aria-current="true" aria-label="Review 1"></button>
              <button aria-label="Review 2"></button>
              <button aria-label="Review 3"></button>
            </div>
            <div className="review-arrows">
              <button id="revPrev" aria-label="Previous review">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button id="revNext" aria-label="Next review">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
            <a href="/" className="btn btn-outline on-bone" style={{ "marginLeft": "8px" }}>See more on Google</a>
          </div>

          <p className="review-note">Sample reviews for this layout — swap in real, verified testimonials before launch.</p>
        </div>
      </section>

      {/*  LOCATION  */}
      <section className="location-section" id="location">
        <div className="wrap location-grid">
          <div>
            <div className="section-head" style={{ "marginBottom": "26px" }}>
              <h2>Based in Marrakech, ready at the airport</h2>
              <p>City pickups, Menara Airport meet-and-greet, and hotel/riad delivery across the medina and Gueliz.</p>
            </div>
            <div className="loc-list">
              <div className="loc-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 5h16v11H9l-5 4V5z" />
                </svg>
                <p>+212 6XX XX XX XX — WhatsApp answered daily, 7am–11pm</p>
              </div>
              <div className="loc-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3c4 3 7 6 7 10a7 7 0 0 1-14 0c0-4 3-7 7-10z" />
                </svg>
                <p>Route de l'Aéroport, Marrakech — 10 minutes from Menara</p>
              </div>
              <div className="loc-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20z" />
                </svg>
                <p>Airport pickup is free after a two-day minimum rental</p>
              </div>
            </div>
          </div>
          <div className="map-card">
            <img src="/images/location.jpg" alt="Map of Marrakech" className="map-image" />
          </div>
        </div>
      </section>

      {/*  FAQ  */}
      <section className="on-bone">
        <div className="wrap">
          <div className="section-head">
            <h2>Common questions</h2>
            <p>The short version — the full list lives on the FAQ page.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>What documents do I need to rent a car?<svg className="icon" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.6">
                <path d="M12 5v14M5 12h14" />
              </svg></summary>
              <p>A valid driver's licence held for at least one year, your passport, and a card or cash deposit at pickup.
              </p>
            </details>
            <details className="faq-item">
              <summary>Is airport pickup really available at any hour?<svg className="icon" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.6">
                <path d="M12 5v14M5 12h14" />
              </svg></summary>
              <p>Yes — send your flight number in the request and someone will be waiting at arrivals, whatever time you
                land.</p>
            </details>
            <details className="faq-item">
              <summary>Can I rent for just one day?<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.6">
                <path d="M12 5v14M5 12h14" />
              </svg></summary>
              <p>Yes, single-day rentals are available on most of the fleet, though a few vehicles carry a two-day minimum.
              </p>
            </details>
            <details className="faq-item">
              <summary>What happens to my deposit?<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.6">
                <path d="M12 5v14M5 12h14" />
              </svg></summary>
              <p>It's held as a hold on your card or in cash, and released in full at drop-off once the car's checked over.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/*  FINAL CTA  */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Ready when you are.</h2>
          <div className="hero-ctas" style={{ "marginTop": "0" }}>
            <a href="#fleet" className="btn btn-brass">Browse the fleet</a>
            <a href="/" className="btn btn-outline">Message us on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
