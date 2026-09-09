import React from 'react';
import type { FaqItem } from '@/lib/faqData';

interface FaqAccordionProps {
  items: FaqItem[];
  openFirst?: boolean;
}

export default function FaqAccordion({ items, openFirst = false }: FaqAccordionProps) {
  return (
    <div className="faq-list">
      {items.map((item, idx) => (
        <details className="faq-item" key={idx} open={openFirst && idx === 0}>
          <summary>
            {item.question}
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
