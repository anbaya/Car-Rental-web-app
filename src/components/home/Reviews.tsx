const REVIEWS = [
  {
    quote: "We landed at midnight and the car was already waiting at arrivals. No paperwork drama, no upselling — exactly what was agreed on WhatsApp.",
    name: "Camille",
    country: "France",
    initial: "C"
  },
  {
    quote: "Renting a car in Morocco seemed daunting, but this was the smoothest experience ever. The Dacia Duster was perfect for the Atlas mountains.",
    name: "Marcus",
    country: "UK",
    initial: "M"
  },
  {
    quote: "The car was spotless and new. They even provided a child seat at no extra cost. Will definitely use them again for our next Marrakech trip.",
    name: "Sarah",
    country: "USA",
    initial: "S"
  },
  {
    quote: "The convenience of having the car dropped off right outside our Riad in the Medina was incredible. 5-star service from start to finish.",
    name: "Youssef",
    country: "UAE",
    initial: "Y"
  },
  {
    quote: "Communication on WhatsApp was instant. No hidden fees, the price quoted was exactly what I paid when they handed me the keys. Highly recommended.",
    name: "Elena",
    country: "Spain",
    initial: "E"
  },
  {
    quote: "We rented a premium SUV for our trip to the Agafay desert. The vehicle was immaculate and the air conditioning was an absolute lifesaver.",
    name: "James",
    country: "Australia",
    initial: "J"
  },
  {
    quote: "Absolutely brilliant. I had a slight issue with a flat tire near Essaouira and their support team coordinated a quick fix within the hour.",
    name: "Thomas",
    country: "Germany",
    initial: "T"
  },
  {
    quote: "Skip the big international agencies at the airport. These guys meet you at the arrivals gate, hand you the keys, and you're off in 5 minutes.",
    name: "Lucas",
    country: "Netherlands",
    initial: "L"
  },
  {
    quote: "Such a premium experience! They sent a video walkthrough of the car's condition before my arrival, which built immediate trust.",
    name: "Amira",
    country: "Qatar",
    initial: "A"
  },
  {
    quote: "Rented an automatic Hyundai for 10 days. The car performed beautifully on the winding Tizi n'Tichka mountain pass. Will 100% book again.",
    name: "Matteo",
    country: "Italy",
    initial: "M"
  }
];

export default function Reviews() {
  return (
    <section className="bg-soft" style={{ overflow: "hidden" }}>
      <div className="review-shell">
        <div className="review-marquee reveal delay-1">
          <div className="review-marquee-track">
            {/* First Set */}
            {REVIEWS.map((review, idx) => (
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
            {REVIEWS.map((review, idx) => (
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
          <p className="review-note" style={{ margin: 0, textAlign: "left" }}>Real testimonials from verified clients.</p>
          <a href="/" className="btn btn-brass">See more on Google</a>
        </div>
      </div>
    </section>
  );
}
