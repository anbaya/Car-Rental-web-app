'use client';

import React, { useEffect } from 'react';

const CARS = [
  {
    id: 'tucson',
    name: 'Hyundai Tucson',
    type: 'Premium SUV',
    image: '/images/cars/Hyundai Tucson.png',
    transmission: 'Automatic',
    seats: '5 seats',
    fuel: 'Diesel',
    price: '420',
    description: 'A masterpiece of modern engineering. The Hyundai Tucson provides a luxurious ride with unmatched reliability, perfect for navigating the Atlas mountains or cruising the Medina.',
    gridClass: 'masterpiece'
  },
  {
    id: 'duster',
    name: 'Dacia Duster',
    type: 'SUV · crossover',
    image: '/images/cars/duster.png',
    transmission: 'Automatic',
    seats: '5 seats',
    fuel: 'Diesel',
    price: '350',
    gridClass: 'large'
  },
  {
    id: 'clio',
    name: 'Renault Clio',
    type: 'Compact hatchback',
    image: '/images/cars/clio.png',
    transmission: 'Manual',
    seats: '5 seats',
    fuel: 'Petrol',
    price: '220',
    gridClass: 'large'
  },
  {
    id: 'sandero',
    name: 'Dacia Sandero',
    type: 'Economy',
    image: '/images/cars/sandero.png',
    transmission: 'Manual',
    seats: '5 seats',
    fuel: 'Petrol',
    price: '190',
    gridClass: 'standard'
  },
  {
    id: 'picanto',
    name: 'Kia Picanto',
    type: 'City car',
    image: '/images/cars/picanto.png',
    transmission: 'Manual',
    seats: '4 seats',
    fuel: 'Petrol',
    price: '170',
    gridClass: 'standard'
  },
  {
    id: 'duster2',
    name: 'Dacia Duster',
    type: 'SUV · crossover',
    image: '/images/cars/duster.png',
    transmission: 'Manual',
    seats: '5 seats',
    fuel: 'Diesel',
    price: '320',
    gridClass: 'standard'
  }
];

export default function CarsPage() {
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
    <main className="bg-bone">
      {/* Quiet Luxury Header */}
      <section className="cars-header">
        <div className="wrap">
          <h1 className="reveal">The Fleet</h1>
          <p className="reveal delay-1">Explore our curated collection of well-maintained vehicles.</p>
        </div>
      </section>

      {/* MARQUEE BANNER */}
      <div className="brands-marquee" style={{ background: 'var(--bone)', color: 'var(--ink)', paddingBottom: '16px', paddingTop: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="marquee">
          <div className="marquee-track">
            <span>MERCEDES-BENZ</span>
            <span>BMW</span>
            <span>AUDI</span>
            <span>PORSCHE</span>
            <span>LAND ROVER</span>
            <span>FERRARI</span>
            <span>LAMBORGHINI</span>
            <span>ROLLS ROYCE</span>
            {/* Duplicated for seamless scrolling */}
            <span>MERCEDES-BENZ</span>
            <span>BMW</span>
            <span>AUDI</span>
            <span>PORSCHE</span>
            <span>LAND ROVER</span>
            <span>FERRARI</span>
            <span>LAMBORGHINI</span>
            <span>ROLLS ROYCE</span>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="wrap filter-inner">
          <div className="filter-group">
            <div className="filter-field">
              <label htmlFor="filter-type">Vehicle type</label>
              <select id="filter-type">
                <option value="all">All types</option>
                <option value="economy">Economy</option>
                <option value="suv">SUV</option>
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="filter-trans">Transmission</label>
              <select id="filter-trans">
                <option value="all">All</option>
                <option value="auto">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="filter-seats">Seats</label>
              <select id="filter-seats">
                <option value="all">Any</option>
                <option value="4">4 seats</option>
                <option value="5">5+ seats</option>
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="filter-price">Price range</label>
              <select id="filter-price">
                <option value="all">Any price</option>
                <option value="low">Under 250 DH</option>
                <option value="high">250 DH +</option>
              </select>
            </div>
          </div>
          <button className="clear-filters">Clear filters</button>
        </div>
      </div>

      <section className="cars-catalog">
        <div className="wrap">
          <div className="results-bar">
            <span>32 cars available</span>
            <div className="sort-select">
              <label htmlFor="sort">Sort:</label>
              <select id="sort">
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </div>
          </div>

          <div className="cars-editorial-grid">
            {CARS.map((car, idx) => (
              <article className={`car-card ${car.gridClass} reveal`} key={idx} style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}>
                <div className="car-media">
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="car-body">
                  <h3>{car.name}</h3>
                  <p className="car-type">{car.type}</p>
                  
                  {car.gridClass === 'masterpiece' && (
                    <p className="car-desc" style={{ marginTop: '16px', opacity: 0.8, lineHeight: 1.5 }}>
                      {car.description}
                    </p>
                  )}

                  <div className="chip-row" style={{ marginTop: 'auto', paddingTop: '24px' }}>
                    <span className="chip">{car.transmission}</span>
                    <span className="chip">{car.seats}</span>
                    <span className="chip">{car.fuel}</span>
                  </div>
                  <div className="car-foot">
                    <span className="car-price">From {car.price} DH/day</span>
                    <a href={`/cars/${car.id}`} className="car-link">View details</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="pagination">
            <a href="#load-more" className="car-link">Load more cars &rarr;</a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Can't decide?</h2>
          <p style={{ marginTop: '16px', opacity: 0.8, fontSize: '18px', maxWidth: '40ch' }}>Send us your dates and we'll match you to a car.</p>
          <div className="hero-ctas" style={{ marginTop: '32px' }}>
            <a href="/" className="btn btn-brass">Message us on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
