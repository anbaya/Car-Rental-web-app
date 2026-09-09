'use client';
import React, { useEffect } from 'react';
import { allFaqs } from '@/lib/faqData';
import FaqAccordion from '@/components/ui/FaqAccordion';

export default function FaqPage() {
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
    <main className="bg-bone" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <section className="cars-header">
        <div className="wrap">
          <h1 className="reveal">FAQ</h1>
          <p className="reveal delay-1">
            Everything you need to know about renting a car with us in Marrakech.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section style={{ padding: '80px 0', background: 'var(--ink)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          {allFaqs.map((category, index) => (
            <div key={index} style={{ marginBottom: '64px' }} className="reveal">
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '28px',
                  marginBottom: '24px',
                  color: 'var(--bone)',
                  borderBottom: '1px solid var(--line-on-ink)',
                  paddingBottom: '12px'
                }}
              >
                {category.category}
              </h2>
              <FaqAccordion items={category.items} openFirst={index === 0} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
