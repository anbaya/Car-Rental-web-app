export default function HowItWorks() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal delay-1">
          <h2>How a request becomes a rental</h2>
          <p>Three steps, and a human confirms the details before anything is final.</p>
        </div>
        <div className="steps-wrapper">
          <svg className="steps-svg reveal" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 30 50 C 150 10, 250 90, 370 50 C 480 10, 600 90, 720 50" />
          </svg>
          <div className="steps">
            <div className="step reveal delay-2">
              <div className="step-num">1</div>
              <h3>Choose your car</h3>
              <p>Filter by size, transmission, or price, and open the one that fits your trip.</p>
            </div>
            <div className="step reveal delay-3">
              <div className="step-num">2</div>
              <h3>Send a request</h3>
              <p>Fill out a quick form with your dates and pickup spot. No payment details required.</p>
            </div>
            <div className="step reveal delay-4">
              <div className="step-num">3</div>
              <h3>Confirm on WhatsApp</h3>
              <p>We'll message you back to confirm availability and lock in the total price.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
