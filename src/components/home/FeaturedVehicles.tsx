'use client';
import { useRef, useState, MouseEvent } from 'react';
import type { Vehicle } from '@/types';
import { useTranslations } from 'next-intl';

export default function FeaturedVehicles({ vehicles }: { vehicles: Vehicle[] }) {
  const t = useTranslations('HomePage.FeaturedVehicles');
  const CATEGORIES = [t('catAll'), t('catSUV'), t('catEconomy'), t('catCompact')];
  const trackRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState(t('catAll'));
  
  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  // Drag handlers
  const onMouseDown = (e: MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // Filter logic
  const filteredCars = vehicles.filter((car) => {
    if (filter === t('catAll')) return true;
    if (filter === t('catSUV')) return car.type.includes('SUV');
    if (filter === t('catEconomy')) return car.type.includes('Economy') || car.type.includes('City');
    if (filter === t('catCompact')) return car.type.includes('Compact');
    return true;
  });

  return (
    <section id="fleet">
      <div className="wrap">
        <div className="fleet-head">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <h2>{t('title')}</h2>
            <p>{t('sub')}</p>
          </div>
          
          <div className="fleet-controls">
            <div className="category-tabs">
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  className={`category-tab ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
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
        </div>

        <div 
          className={`car-track ${isDragging ? 'is-dragging' : ''}`} 
          id="carTrack" 
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {filteredCars.map((car, idx) => (
            <article className={`car-card reveal delay-${(idx % 5) + 1} active`} key={car.id}>
              <div className="car-media">
                <img src={car.images[0]} alt={car.name} draggable={false} />
              </div>
              <div className="car-body">
                <h3>{car.name}</h3>
                <p className="car-type">{car.type}</p>
                <div className="chip-row">
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
          ))}
        </div>

        <div className="section-foot">
          <a href="/cars" className="btn btn-outline">{t('viewAll')}</a>
        </div>
      </div>
    </section>
  );
}
