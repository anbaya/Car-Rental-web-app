'use client';
import { useEffect, useState } from 'react';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';

export default function Hero({ whatsappNumber }: { whatsappNumber: string }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-editorial">
        <h1 className="hero-title">
          <span className="line-1">Marrakech,</span>
          <span className="line-2">Uncompromised.</span>
        </h1>
        <p className="hero-sub">
          Premium fleet. Transparent pricing. Delivered to your Riad.
          Browse a fleet that's actually maintained, get a real price over WhatsApp, and pick your car
          up at the airport, your riad, or right in the medina.
        </p>
        <div className="hero-ctas">
          <a href="/cars" className="btn btn-brass">Browse the fleet</a>
          <a href={getGeneralWhatsAppUrl(whatsappNumber)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Message us on WhatsApp
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div style={{ transform: `translateX(-${scrollY * 0.5}px)`, transition: 'transform 0.1s ease-out', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <img 
            src="/images/wheel.png" 
            alt="Premium Alloy Wheel" 
            className="hero-vehicle" 
          />
        </div>
      </div>
    </section>
  );
}
