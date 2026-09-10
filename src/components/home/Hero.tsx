'use client';
import { useEffect, useState } from 'react';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { useTranslations } from 'next-intl';

export default function Hero({ whatsappNumber }: { whatsappNumber: string }) {
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations('Hero');

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
          <span className="line-1">{t('line1')}</span>
          <span className="line-2">{t('line2')}</span>
        </h1>
        <p className="hero-sub">
          {t('subtitle')}
        </p>
        <div className="hero-ctas">
          <a href="/cars" className="btn btn-brass">{t('browseFleet')}</a>
          <a href={getGeneralWhatsAppUrl(whatsappNumber)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {t('messageWhatsapp')}
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
