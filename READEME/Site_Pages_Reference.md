# Site Pages & Routes Reference — Marrakech Car Rental Website

9 routes total. Every page below shares two persistent elements not listed per-page: the **Navbar** and the **Floating WhatsApp CTA**.

## Route map

| Route | Page | Type |
|---|---|---|
| `/` | Home | Static |
| `/cars` | Cars Catalog | Static |
| `/cars/[slug]` | Vehicle Details | Dynamic (one route, generated per vehicle) |
| `/request` | Rental Request | Static |
| `/about` | About | Static |
| `/contact` | Contact | Static |
| `/faq` | FAQ | Static |
| `/terms` | Terms & Conditions | Static |
| `/privacy` | Privacy Policy | Static |

All nine currently exist as standalone routes — About, Contact, and FAQ are not folded into the homepage.

---

## `/` — Home

The main conversion page. Section order, top to bottom:

1. Navbar
2. Hero — company name, location, one-line value prop, primary CTAs (`Browse Cars`, `WhatsApp Us`), hero vehicle image. One clear CTA on the first screen.
3. Quick Search / Request Bar *(optional)* — pickup location, pickup date, return date, `Find a Car`. Never implies guaranteed availability — "Check availability" / "Request this car," not "Your car is guaranteed available."
4. Featured Vehicles — 3–6 vehicle cards (desktop), stacked or carousel (mobile), `View all cars` link.
5. Why Choose Us — real, client-confirmed differentiators only.
6. How It Works — 3 steps: Choose your car → Send your request → Get confirmation. Reinforces the request/confirmation model, not instant booking.
7. Reviews — real testimonials only, star rating, customer name, link to Google reviews if available.
8. Location — service area, Marrakech/airport coverage, embedded map.
9. FAQ — 3–5 of the most common questions (full list lives on `/faq`).
10. Final CTA — one more push toward Cars or WhatsApp.
11. Footer

---

## `/cars` — Cars Catalog

Full fleet browse page.

```text
Page title + short description
[ Search ]
[ Filters ]
Vehicle grid
Pagination / Load more (if needed)
```

**MVP filters:** Automatic/Manual, vehicle type, seats, price. Fuel and features are optional/later.

**Vehicle card:** image, name, transmission, seats, fuel, price/day, `View Details` CTA. The card's only job is to get the visitor to click through.

---

## `/cars/[slug]` — Vehicle Details

The page where the visitor decides "I want this car." Dynamic route — one template, one page per vehicle.

- **Top area:** image gallery (left) + vehicle info block (right) — name, type, price/day, key specs, `Request This Car` CTA.
- **Image gallery:** main image, additional images, thumbnail nav, optional lightbox.
- **Specs block:** transmission, seats, doors, fuel, AC — compact icons/cards.
- **Description:** short, concise copy.
- **Included:** e.g. basic insurance, unlimited mileage, airport pickup — must come from the client, never invented.
- **Rental conditions:** minimum rental period, deposit, required documents, driver age, mileage limits, cancellation policy — configurable per client.
- **Final CTA:** large `Request This Car`, carries the selected vehicle into `/request`.

---

## `/request` — Rental Request

Goal: collect just enough for an agent to respond — don't over-ask.

1. **Vehicle** — selected vehicle shown, editable.
2. **Rental dates** — pickup date/time, return date/time. Validate: return can't be before pickup, both dates valid, time required where relevant.
3. **Pickup/return location** — radio options (Airport / City / Hotel-Riad / Other), configurable per client. Return: same as pickup / different / other.
4. **Customer info** — full name, WhatsApp/phone, email (optional), country (optional). Short — not an application form.
5. **Notes** — optional free text (child seat, late arrival, delivery to hotel, etc.).
6. **Confirmation summary** — recap of vehicle, pickup, return, customer, phone, shown before sending.
7. **Send via WhatsApp** — generates a pre-filled WhatsApp message to the company's number and opens WhatsApp.

**Language rule:** never "Your booking is confirmed" — always "Your request has been sent." The business confirms availability, price, terms, and deposit manually.

---

## `/about` — About

Company story, mission, fleet overview, why customers should trust this operator.

---

## `/contact` — Contact

Phone, WhatsApp, email, address, opening/support hours, embedded map.

---

## `/faq` — FAQ

Full question list (the homepage shows a short excerpt). Typical topics: required documents, airport pickup availability, deposit, one-day rentals, automatic availability, hotel delivery, insurance coverage. All answers must be client-confirmed — never invent legal/insurance claims.

---

## `/terms` — Terms & Conditions

Rental terms, liability, cancellation policy, as provided by the client.

---

## `/privacy` — Privacy Policy

Data handling, WhatsApp data use, contact info storage.

---

## Shared elements (every route)

- **Navbar:** logo, nav links, language switcher, WhatsApp button.
- **Floating WhatsApp CTA:** sticky, mobile + desktop, never blocks content.
- **Footer:** logo, company name, phone, WhatsApp, email, address, hours, social links, map link, Cars/About/Contact/FAQ links, Terms/Privacy links, copyright.
- **Mobile UX baseline:** large tap targets, sticky WhatsApp CTA, fast image loading, simple forms, no horizontal overflow, easy date/time pickers. The core path — Open site → See cars → Open a car → Request it → Send WhatsApp — should work without friction on every page above.
