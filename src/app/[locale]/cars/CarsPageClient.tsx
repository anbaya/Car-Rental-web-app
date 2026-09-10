'use client';

import React, { useEffect, useState } from 'react';
import type { Vehicle } from '@/types';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { useLocale, useTranslations } from 'next-intl';

interface CarsPageClientProps {
  cars: Vehicle[];
  whatsappNumber: string;
}

export default function CarsPageClient({ cars, whatsappNumber }: CarsPageClientProps) {
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations('Cars');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
      <section className="cars-header" style={{ overflow: 'hidden' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="reveal">{t('headerTitle')}</h1>
            <p className="reveal delay-1">{t('headerSub')}</p>
          </div>
          <div className="reveal delay-2" style={{ position: 'absolute', insetInlineEnd: '-100px', top: '50%', transform: `translateY(-50%) translateX(${isRtl ? scrollY * 0.6 : -scrollY * 0.6}px)`, opacity: 1, zIndex: 1, pointerEvents: 'none', transition: 'transform 0.1s ease-out' }}>
            <div className="roll-in-animation">
              <img src="/images/wheel.png" alt="" className="spin-wheel" style={{ width: '550px', height: '550px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BANNER */}
      <div className="brands-marquee" style={{ background: 'var(--bone)', color: 'var(--ink)', paddingBottom: '0px', paddingTop: '0px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
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
              <label htmlFor="filter-type">{t('filterType')}</label>
              <select id="filter-type">
                <option value="all">{t('filterAllTypes')}</option>
                <option value="economy">{t('filterEconomy')}</option>
                <option value="suv">{t('filterSUV')}</option>
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="filter-trans">{t('filterTrans')}</label>
              <select id="filter-trans">
                <option value="all">{t('filterAllTrans')}</option>
                <option value="auto">{t('filterAuto')}</option>
                <option value="manual">{t('filterManual')}</option>
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="filter-seats">{t('filterSeats')}</label>
              <select id="filter-seats">
                <option value="all">{t('filterAnySeats')}</option>
                <option value="4">{t('filter4Seats')}</option>
                <option value="5">{t('filter5Seats')}</option>
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="filter-price">{t('filterPrice')}</label>
              <select id="filter-price">
                <option value="all">{t('filterAnyPrice')}</option>
                <option value="low">{t('filterLowPrice')}</option>
                <option value="high">{t('filterHighPrice')}</option>
              </select>
            </div>
          </div>
          <button className="clear-filters">{t('clearFilters')}</button>
        </div>
      </div>

      <section className="cars-catalog">
        <div className="wrap">
          <div className="results-bar">
            <span>{cars.length === 1 ? t('available', { count: cars.length }) : t('availablePlural', { count: cars.length })}</span>
            <div className="sort-select">
              <label htmlFor="sort">{t('sort')}</label>
              <select id="sort">
                <option value="recommended">{t('sortRec')}</option>
                <option value="price-low">{t('sortLow')}</option>
                <option value="price-high">{t('sortHigh')}</option>
              </select>
            </div>
          </div>

          <div className="cars-editorial-grid">
            {cars.map((car, idx) => {
              // Assign grid classes dynamically based on index to retain layout style
              const gridClass = idx === 0 ? 'masterpiece' : (idx === 1 || idx === 2 ? 'large' : 'standard');
              return (
                <article className={`car-card ${gridClass} reveal`} key={car.id} style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}>
                  <div className="car-media">
                    <img src={car.images[0]} alt={car.name} />
                  </div>
                  <div className="car-body">
                    <h3>{car.name}</h3>
                    <p className="car-type">{car.type}</p>
                    
                    {gridClass === 'masterpiece' && (
                      <p className="car-desc" style={{ marginTop: '16px', opacity: 0.8, lineHeight: 1.5 }}>
                        {car.description}
                      </p>
                    )}

                    <div className="chip-row" style={{ marginTop: 'auto', paddingTop: '24px' }}>
                      <span className="chip">{car.transmission}</span>
                      <span className="chip">{t('seats', { count: car.seats })}</span>
                      <span className="chip">{car.fuel}</span>
                    </div>
                    <div className="car-foot">
                      <span className="car-price">{t('fromPrice', { price: car.pricePerDay })}</span>
                      <a href={`/cars/${car.id}`} className="car-link">{t('viewDetails')}</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="pagination">
            <a href="#load-more" className="car-link">{t('loadMore')}</a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>{t('ctaTitle')}</h2>
          <p style={{ marginTop: '16px', opacity: 0.8, fontSize: '18px', maxWidth: '40ch' }}>{t('ctaSub')}</p>
          <div className="hero-ctas" style={{ marginTop: '32px' }}>
            <a href={getGeneralWhatsAppUrl(whatsappNumber)} target="_blank" rel="noopener noreferrer" className="btn btn-brass">{t('ctaBtn')}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
