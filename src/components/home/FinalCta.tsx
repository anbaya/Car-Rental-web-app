import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="wrap">
        <h2 className="reveal delay-1">Ready when you are.</h2>
        <div className="hero-ctas reveal delay-2" style={{ marginTop: "0" }}>
          <a href="/cars" className="btn btn-brass">Browse the fleet</a>
          <a href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
