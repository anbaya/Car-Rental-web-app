# Pages & Layout Reference — Marrakech Car Rental Website

9 pages total. `/cars/[slug]` is dynamic — one route generates a page per vehicle, not a hand-built file per car.

Two elements appear on **every** page and aren't listed separately below: the **Navbar** (logo, nav links, language switcher, WhatsApp button) and the **Floating WhatsApp CTA** (sticky, mobile + desktop, doesn't block content).

---

## 1. Home — `/`

The main conversion page. Section order, top to bottom:

1. **Navbar**
2. **Hero** — company name, location, one-line value prop, primary CTAs (`Browse Cars`, `WhatsApp Us`), hero vehicle image. One clear CTA on first screen — don't overload it.
3. **Quick Search / Request Bar** *(optional but recommended)* — pickup location, pickup date, return date, `Find a Car`. Never claim guaranteed availability here — use "Check availability" / "Request this car," not "Your car is guaranteed available."
4. **Featured Vehicles** — 3–6 vehicle cards (desktop), stacked or carousel (mobile), `View all cars` link.
5. **Why Choose Us** — real differentiators only (airport pickup, pricing, support, fleet condition) — only claims the client can actually back up.
6. **How It Works** — 3 steps: Choose your car → Send your request → Get confirmation. Reinforces the request/confirmation model (not instant booking).
7. **Reviews** — real testimonials only, star rating, customer name, link to Google reviews if available. Never invent testimonials.
8. **Location** — service area, Marrakech/airport coverage, embedded Google Map.
9. **FAQ** — 3–5 of the most common questions (full list lives on the dedicated FAQ page/section).
10. **Final CTA** — one more push toward Cars or WhatsApp.
11. **Footer**

---

## 2. Cars — `/cars`

Full fleet browse page.

```
Page title + short description
[ Search ]
[ Filters ]
Vehicle grid
Pagination / Load more (if needed)
```

**MVP filters:** Automatic/Manual, vehicle type, seats, price. (Fuel and features are optional/later.)

**Vehicle card** (repeated in the grid): image, name, transmission • seats • fuel, price/day, `View Details` CTA. Keep it minimal — the card's only job is to get the visitor to click through.

---

## 3. Vehicle Details — `/cars/[slug]`

The page where the visitor decides "I want this car." Layout:

**Top area** — image gallery (left) + vehicle info block (right): name, type, price/day, key specs, `Request This Car` CTA.

- **Image gallery:** main image, additional images, thumbnail nav, optional lightbox.
- **Specs block:** transmission, seats, doors, fuel, AC — shown as compact icons/cards.
- **Description:** short, concise copy.
- **Included:** e.g. basic insurance, unlimited mileage, airport pickup — must come from the client, never invented.
- **Rental conditions:** minimum rental period, deposit, required documents, driver age, mileage limits, cancellation policy — all configurable per client.
- **Final CTA:** large `Request This Car` — carries the selected vehicle into the Request page.

---

## 4. Request — `/request` (or `/request?car=[slug]`)

Goal: collect just enough for an agent to respond — don't over-ask.

1. **Vehicle** — shows the selected vehicle, editable if the visitor wants to change it.
2. **Rental dates** — pickup date/time, return date/time. Validate: return can't be before pickup, both dates valid, time required where relevant.
3. **Pickup/return location** — radio options (Airport / City / Hotel-Riad / Other), configurable per client. Return location: same as pickup / different / other.
4. **Customer info** — full name, WhatsApp/phone, email (optional), country (optional). Keep it short — this shouldn't feel like an application form.
5. **Notes** — optional free text for special requests (child seat, late arrival, delivery to hotel, etc.).
6. **Confirmation summary** — recap of vehicle, pickup, return, customer, phone — shown before sending, to catch mistakes.
7. **Send via WhatsApp** — generates a pre-filled WhatsApp message to the company's number and opens WhatsApp.

**Language rule:** never say "Your booking is confirmed" — always "Your request has been sent." The business still confirms availability, price, terms, and deposit manually.

---

## 5. About — `/about`

Company story, mission, fleet overview, why customers should trust this operator. *(Section 7 note: can be a homepage section instead of a standalone route for a leaner MVP — split it out once there's enough content to justify its own page.)*

---

## 6. Contact — `/contact`

Phone, WhatsApp, email, address, opening/support hours, embedded map. *(Same note as About — foldable into the homepage Location section for MVP.)*

---

## 7. FAQ — `/faq`

Full question list (homepage shows a short excerpt). Typical questions: required documents, airport pickup availability, deposit, one-day rentals, automatic availability, hotel delivery, insurance coverage. All answers must be client-confirmed — never invent legal/insurance claims. *(Foldable into homepage for MVP, same as About/Contact.)*

---

## 8. Terms & Conditions — `/terms`

Standalone legal page regardless of MVP scope — rental terms, liability, cancellation policy, as provided by the client.

---

## 9. Privacy Policy — `/privacy`

Standalone legal page — data handling, WhatsApp data use, contact info storage.

---

## Shared elements (all pages)

- **Footer:** logo, company name, phone, WhatsApp, email, address, hours, social links, map link, Cars/About/Contact/FAQ links, Terms/Privacy links, copyright.
- **Mobile UX baseline:** large tap targets, sticky WhatsApp CTA, fast image loading, simple forms, no horizontal overflow, easy date/time pickers. The core mobile path — Open site → See cars → Open a car → Request it → Send WhatsApp — should work without friction on every page above.
