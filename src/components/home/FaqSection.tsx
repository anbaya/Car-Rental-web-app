import type { FaqEntry } from '@/types';
import FaqAccordion from '@/components/ui/FaqAccordion';

export default function FaqSection({ faqs }: { faqs: FaqEntry[] }) {
  // Show up to 4 entries on the homepage — user can see the rest on /faq
  const previewFaqs = faqs.slice(0, 4).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <section className="on-bone">
      <div className="wrap">
        <div className="section-head reveal delay-1">
          <h2>Common questions</h2>
          <p>
            The short version — the full list lives on the{' '}
            <a href="/faq" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              FAQ page
            </a>
            .
          </p>
        </div>
        <div className="reveal delay-2">
          <FaqAccordion items={previewFaqs} openFirst={true} />
        </div>
      </div>
    </section>
  );
}

