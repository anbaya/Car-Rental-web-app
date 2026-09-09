import { homepageFaqs } from '@/lib/faqData';
import FaqAccordion from '@/components/ui/FaqAccordion';

export default function FaqSection() {
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
          <FaqAccordion items={homepageFaqs} openFirst={true} />
        </div>
      </div>
    </section>
  );
}
