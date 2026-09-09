export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  items: FaqItem[];
};

export const homepageFaqs: FaqItem[] = [
  {
    question: "What documents do I need to rent a car?",
    answer: "A valid driver's licence held for at least one year, your passport, and a card or cash deposit at pickup."
  },
  {
    question: "Is airport pickup really available at any hour?",
    answer: "Yes — send your flight number in the request and someone will be waiting at arrivals, whatever time you land."
  },
  {
    question: "Can I rent for just one day?",
    answer: "Yes, single-day rentals are available on most of the fleet, though a few vehicles carry a two-day minimum."
  },
  {
    question: "What happens to my deposit?",
    answer: "It's held as a hold on your card or in cash, and released in full at drop-off once the car's checked over."
  }
];

export const allFaqs: FaqCategory[] = [
  {
    category: "Booking & Requirements",
    items: [
      {
        question: "What documents do I need to rent a car?",
        answer: "A valid driver's licence held for at least one year, your passport, and a credit/debit card or cash for the security deposit at pickup."
      },
      {
        question: "Is there a minimum age requirement to rent?",
        answer: "Yes, drivers must be at least 21 years old for economy and compact cars, and 23 years old for SUVs and premium vehicles. You must also have held your licence for a minimum of one year."
      },
      {
        question: "Can I rent for just one day?",
        answer: "Yes, single-day rentals are available on most of the fleet, though a few premium vehicles may carry a two-day minimum during peak seasons."
      },
      {
        question: "Do I need an International Driving Permit (IDP)?",
        answer: "If your driving licence is printed in Latin/Roman alphabet (like English, French, Spanish), you do not need an IDP to drive in Morocco. Otherwise, an IDP is required."
      }
    ]
  },
  {
    category: "Pickup & Drop-off",
    items: [
      {
        question: "Is airport pickup really available at any hour?",
        answer: "Yes! If you provide your flight number when requesting your booking, our agent will monitor your flight and be waiting for you at Marrakech Menara Airport arrivals, no matter what time you land or if you are delayed."
      },
      {
        question: "Can I pick up the car at my hotel instead?",
        answer: "Absolutely. We offer free delivery to any hotel or riad within the central Marrakech area for rentals of 3 days or more."
      },
      {
        question: "What if my flight is delayed?",
        answer: "Don't worry. We track all incoming flights based on the flight number you provide. We will wait for you without any late fees."
      }
    ]
  },
  {
    category: "Payments & Insurance",
    items: [
      {
        question: "What happens to my deposit?",
        answer: "The deposit is taken as a pre-authorization hold on your credit card (or in cash). It is fully released/returned at drop-off immediately after the vehicle is inspected and found to be in its original condition."
      },
      {
        question: "What type of insurance is included?",
        answer: "All our rentals include basic comprehensive insurance with a deductible (which matches your deposit amount). This covers third-party liability, theft, and fire."
      },
      {
        question: "Can I pay in cash?",
        answer: "Yes, you can pay the rental fee and leave the security deposit in cash (Euros, USD, GBP, or Moroccan Dirhams)."
      }
    ]
  },
  {
    category: "On the Road",
    items: [
      {
        question: "Are there any mileage limits?",
        answer: "No, all our rentals come with unlimited mileage. You are free to explore Morocco as much as you like without worrying about extra per-kilometer charges."
      },
      {
        question: "Can I drive the car outside of Morocco?",
        answer: "No. Our insurance strictly covers driving within the borders of Morocco. Taking the vehicle outside the country is prohibited."
      },
      {
        question: "What happens if I get a flat tire or break down?",
        answer: "We provide 24/7 roadside assistance anywhere in Morocco. If the car cannot be fixed on the spot, we will provide a replacement vehicle."
      }
    ]
  }
];
