import type { Review } from '@/types';
import { useTranslations } from 'next-intl';

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const t = useTranslations('HomePage.Reviews');
  return (
    <section className="bg-soft" style={{ overflow: "hidden" }}>
      <div className="review-shell">
        <div className="review-marquee reveal delay-1">
          <div className="review-marquee-track">
            {/* First Set */}
            {reviews.map((review, idx) => (
              <div className="review-card" key={`set1-${idx}`}>
                <div className="stars" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <p className="review-quote">"{review.quote}"</p>

                  <div className="review-author">
                    <div className="author-avatar">{review.initial}</div>
                    <div className="author-info">
                      <strong>{review.name}</strong>
                      <span>{review.country}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Second Set for continuous scroll */}
            {reviews.map((review, idx) => (
              <div className="review-card" key={`set2-${idx}`} aria-hidden="true">
                <div className="stars" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <p className="review-quote">"{review.quote}"</p>

                  <div className="review-author">
                    <div className="author-avatar">{review.initial}</div>
                    <div className="author-info">
                      <strong>{review.name}</strong>
                      <span>{review.country}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 0 }}>
        <div className="review-controls reveal delay-2" style={{ justifyContent: "space-between" }}>
          <p className="review-note" style={{ margin: 0, textAlign: "left" }}>{t('note')}</p>
          <a href="/" className="btn btn-brass">{t('seeMore')}</a>
        </div>
      </div>
    </section>
  );
}
