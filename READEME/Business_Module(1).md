# Marrakech Car Rental Website — Product & UX Specification

## 1. Project Goal

Build a reusable, professional car-rental website template aimed at car-rental businesses in Marrakech and Morocco.

The primary business goal is **not simply to display cars**. The website should turn visitors into qualified rental requests that the business can receive through WhatsApp and then confirm manually.

### Core customer journey

```text
Visitor
  ↓
Landing/Home page
  ↓
Browse vehicles
  ↓
Open vehicle details
  ↓
Choose rental dates / pickup information
  ↓
Submit rental request
  ↓
Open WhatsApp with pre-filled request
  ↓
Rental company receives the request
  ↓
Agent checks availability and final price
  ↓
Agent confirms the rental with the customer
```

### MVP principle

The first version should use a **human-confirmation model**.

The website collects the request, but it does **not** need to guarantee real-time vehicle availability or complete payment online.

This keeps the first product simple enough to build, sell, customize, and deploy repeatedly.

---

# 2. Product Definition

This product should be considered a:

> **Car Rental Lead-Generation & Booking Request Website**

It is more than a simple landing page because customers need to:

- Browse multiple vehicles
- Open individual vehicle details
- Select or enter rental information
- Submit a structured rental request
- Continue the conversation through WhatsApp

The website can still have a strong landing-page-style homepage focused on conversion.

---

# 3. Target Customer

## Primary niche

Car-rental companies in:

- Marrakech
- Marrakech Menara Airport area
- Tourist-heavy areas in Morocco
- Later: Agadir, Casablanca, Tangier, Fez, etc.

## Typical business

A small or medium-sized rental company with:

- A fleet of 5–100+ vehicles
- Instagram/Facebook presence
- WhatsApp as an important communication channel
- Customers arriving through Google, social media, referrals, or ads
- Little, outdated, or poorly optimized website presence

## Main business problems

The website should solve problems such as:

- Customers cannot easily see the fleet
- Customers have to ask basic questions repeatedly
- The company looks less trustworthy than competitors with professional websites
- Mobile users cannot quickly contact the company
- Vehicle information is scattered
- The company receives unstructured WhatsApp messages
- International customers struggle to understand the offer
- Google searches do not lead to a strong conversion page

---

# 4. Main Product Promise

The positioning should be based around:

> **Make it easy for tourists to find a car, understand the offer, and send a complete rental request in a few clicks.**

Avoid selling the product as only:

> "A beautiful website."

Sell the business outcome:

- More inquiries
- Better-quality inquiries
- Easier customer communication
- Better presentation of the fleet
- More trust
- Stronger mobile experience
- Better visibility in search engines

---

# 5. MVP Scope

## Must Have

### Website

- Responsive design
- Mobile-first layout
- Professional homepage
- Vehicle catalog
- Vehicle cards
- Individual vehicle detail pages
- Rental request form
- WhatsApp integration
- Click-to-call
- Google Maps / location section
- Reviews/testimonials section
- FAQ
- Contact information
- Basic SEO
- Fast loading
- French content
- English content
- Arabic-ready architecture

### Vehicle information

Each vehicle should support:

- Brand
- Model
- Year (optional)
- Vehicle type
- Price per day (optional)
- Transmission
- Fuel type
- Number of seats
- Number of doors
- Air conditioning
- Luggage/cargo information
- Images
- Description
- Included services
- Rental conditions (optional)
- Deposit information (optional)

### Rental request

The form should support:

- Selected vehicle
- Pickup date
- Pickup time
- Return date
- Return time
- Pickup location
- Return location (optional)
- Customer name
- WhatsApp/phone number
- Email (optional)
- Additional notes

### WhatsApp

The generated message should contain the important request information.

Example:

```text
🚗 New Rental Request

Vehicle: Dacia Duster
Pickup: Marrakech Airport
Pickup date: 15 September 2026
Pickup time: 10:00
Return date: 20 September 2026
Return time: 10:00

Customer: Ahmed
WhatsApp: +212XXXXXXXXX

Notes:
Airport pickup requested.
```

The customer should be able to review the form before sending.

---

# 6. What the MVP Should NOT Have

Do not build these features in version 1 unless a real client pays for them:

- Full real-time availability engine
- Online payment
- Customer accounts
- Login/register
- Complex admin dashboard
- Booking management SaaS
- Automated invoicing
- Dynamic seasonal pricing engine
- Advanced CRM
- Automated SMS system
- Automated email campaign system
- Complex authentication
- Multi-company SaaS architecture

### Why?

The first product needs to prove:

> Can a professional website generate useful rental inquiries?

Do not spend weeks solving problems the customer has not asked you to solve.

---

# 7. Site Architecture

## Recommended pages

```text
/
├── Home
├── Cars
│   ├── Vehicle Details
│   ├── Vehicle Details
│   └── ...
├── Request / Booking
├── About
├── Contact
├── FAQ
├── Terms & Conditions
└── Privacy Policy
```

Depending on the project, some of the static pages can be sections on the homepage instead of separate routes.

---

# 8. Homepage Layout

The homepage should be treated as the main conversion page.

## Section 1 — Navbar

### Left

- Logo
- Company name

### Center/right

- Home
- Cars
- About
- Contact

### Important actions

- Language switcher
- WhatsApp button

### Mobile

Use:

- Hamburger menu
- Persistent WhatsApp CTA or floating button

---

# 9. Hero Section

The hero is one of the most important sections.

## Goal

Immediately communicate:

1. What the company does
2. Where it operates
3. Why the visitor should care
4. What the visitor should do next

### Example structure

```text
Rent a Car in Marrakech

Discover reliable vehicles at competitive prices.
Airport pickup and delivery available.

[ Browse Cars ]
[ WhatsApp Us ]

                         [Hero vehicle image]
```

### Supporting trust elements

Possible examples:

- Airport pickup
- Easy booking
- 24/7 support
- No hidden fees
- Wide selection

Do not overload the hero.

The first screen should have a clear primary CTA.

---

# 10. Quick Rental Search / Request Bar

This is optional for MVP but strongly recommended for the professional version.

Possible fields:

```text
Pickup location
Pickup date
Return date

[ Find a Car ]
```

This can later connect to filters or booking flow.

### Important

If real-time availability is not implemented, the UI should not falsely promise:

> "Your car is guaranteed available."

Instead, use language such as:

> "Check availability"

or:

> "Request this car"

---

# 11. Featured Vehicles Section

Show the most popular or recommended cars.

Example:

```text
Popular Cars

┌─────────────────────┐
│       IMAGE         │
│                     │
│ Dacia Duster        │
│ Automatic • 5 seats │
│ From 350 DH/day     │
│                     │
│ [View Details]      │
└─────────────────────┘
```

Show approximately 3–6 vehicles on desktop.

On mobile, use:

- Stacked cards
- Or a horizontal scroll/carousel if it improves usability

Avoid making the page feel like an endless catalog.

Include:

> View all cars

---

# 12. Vehicle Card Specification

Each vehicle card should contain:

### Required

- Main image
- Vehicle name
- Transmission
- Seats
- Price information
- CTA

### Optional

- Fuel
- Doors
- AC
- Vehicle type
- Badge such as "Popular" or "Automatic"

### Example

```text
Dacia Duster
SUV
Automatic • 5 seats • Diesel

From 350 DH / day

[ View Details ]
```

Do not cram every specification into the card.

The card's purpose is to get the user to open the vehicle.

---

# 13. Cars Page

Route:

```text
/cars
```

Purpose:

Give visitors a complete overview of the available fleet.

## Recommended structure

```text
Page title
Short description

[ Search ]

[ Filters ]

Vehicle grid

Pagination / Load more (if needed)
```

### Filters

Possible filters:

- Vehicle type
- Price range
- Transmission
- Seats
- Fuel
- Features

### MVP recommendation

Start with:

- Automatic / Manual
- Vehicle type
- Seats
- Price

Only add filters that are actually useful.

---

# 14. Vehicle Details Page

Route example:

```text
/cars/dacia-duster
```

This page is extremely important because it is where the visitor decides:

> "I want this car."

## Recommended layout

### Top area

```text
Large image gallery          Vehicle information

                             Dacia Duster
                             SUV

                             350 DH / day

                             Automatic
                             5 seats
                             Diesel
                             AC

                             [ Request This Car ]
```

## Image gallery

Support:

- Main image
- Additional images
- Thumbnail navigation
- Fullscreen/lightbox if desired

### Vehicle specs

Display them clearly using icons or compact cards.

Example:

```text
Transmission   Automatic
Seats          5
Doors          5
Fuel           Diesel
Air conditioning   Yes
```

### Description

Include a concise description.

### Included

Example:

```text
✓ Basic insurance
✓ Unlimited mileage
✓ Airport pickup (according to company policy)
```

The actual content must come from the client.

Do not invent legal or insurance claims.

### Rental conditions

Possible information:

- Minimum rental period
- Deposit
- Required documents
- Driver age
- Mileage limits
- Cancellation policy

These should be configurable.

### Final CTA

Use a large CTA:

> **Request this car**

The selected vehicle must be carried into the request flow.

---

# 15. Rental Request Form

Route example:

```text
/request
```

Or:

```text
/book?car=dacia-duster
```

## Goal

Collect enough information for a rental agent to respond efficiently.

Do not ask for unnecessary information.

## Section A — Vehicle

Display:

```text
Selected vehicle:
Dacia Duster
```

Allow the user to change the vehicle if necessary.

---

## Section B — Rental dates

Fields:

- Pickup date
- Pickup time
- Return date
- Return time

Validation:

- Return should not be before pickup
- Dates should be valid
- Time should be required where appropriate

---

# 16. Pickup / Return Location

Possible options:

```text
Pickup location
○ Marrakech Airport
○ Marrakech City
○ Hotel / Riad
○ Other
```

The exact options should be configurable per client.

Return location can be:

- Same as pickup
- Different
- Other

---

# 17. Customer Information

Recommended fields:

- Full name
- WhatsApp / phone
- Email (optional)
- Country (optional)

Keep it simple.

The customer should not feel like they are filling out a long application.

---

# 18. Notes

Optional field:

```text
Additional requests

Example:
"Child seat required"
"Airport arrival at 22:30"
"Need delivery to hotel"
```

This is useful because rental requests often contain special requirements.

---

# 19. Form Confirmation

Before sending:

Show a summary.

Example:

```text
Your request

Vehicle
Dacia Duster

Pickup
Marrakech Airport
15 Sep 2026 — 10:00

Return
Marrakech Airport
20 Sep 2026 — 10:00

Customer
Ahmed

Phone
+212XXXXXXXXX
```

Then:

```text
[ Send Request via WhatsApp ]
```

This reduces mistakes.

---

# 20. WhatsApp Integration

## Core behavior

The website generates a WhatsApp message containing the form data.

### Example

```text
Hello, I would like to request a rental:

Vehicle: Dacia Duster
Pickup location: Marrakech Airport
Pickup: 15/09/2026 at 10:00
Return: 20/09/2026 at 10:00

Name: Ahmed
WhatsApp: +212XXXXXXXXX
Notes: Airport pickup requested.
```

The number receiving the message belongs to the rental company.

### Important

The website should not claim:

> "Your booking is confirmed."

Use:

> "Your request has been sent."

The business still needs to confirm:

- Availability
- Final price
- Terms
- Pickup details
- Deposit/payment
- Booking status

---

# 21. Floating WhatsApp CTA

A WhatsApp button should be accessible throughout the site.

Possible behavior:

- Floating button on mobile
- Floating button on desktop
- Sticky bottom CTA on mobile

Possible labels:

> WhatsApp Us

or:

> Ask About Availability

The CTA should not block important content.

---

# 22. How It Works Section

A simple 3-step explanation helps first-time visitors.

```text
1. Choose your car
Browse the fleet and select a vehicle.

2. Send your request
Enter your dates and contact information.

3. Get confirmation
Our team checks availability and confirms the details.
```

This section also makes it clear that the website uses a request/confirmation model.

---

# 23. Why Choose Us

This section should focus on actual differentiators.

Possible items:

- Airport pickup
- Competitive prices
- 24/7 customer support
- Well-maintained vehicles
- Flexible pickup
- Multilingual assistance

Only use claims that the client can actually support.

---

# 24. Reviews Section

Display real customer reviews when possible.

Example:

```text
★★★★★

"Great service and easy airport pickup."

— Customer Name
```

### Rules

- Ask the business for real reviews
- Do not invent testimonials
- Link to Google reviews where appropriate

---

# 25. Marrakech / Location Section

Useful content:

- Marrakech location
- Airport location
- Service area
- Google Maps
- Pickup options

Example:

```text
Serving Marrakech and Marrakech Menara Airport

[ Google Map ]
```

This is useful for both customers and local SEO.

---

# 26. FAQ Section

Possible questions:

### What documents do I need?

Client-specific answer.

### Is airport pickup available?

Client-specific answer.

### Is there a deposit?

Client-specific answer.

### Can I rent for one day?

Client-specific answer.

### Are automatic cars available?

Client-specific answer.

### Can I deliver the car to my hotel?

Client-specific answer.

### Is insurance included?

Client-specific answer.

Do not write legal/insurance claims without client confirmation.

---

# 27. Footer

Include:

- Logo
- Company name
- Phone
- WhatsApp
- Email
- Address
- Opening/support hours
- Social links
- Google Maps
- Terms
- Privacy

Example:

```text
[Logo]

Rent a car in Marrakech with ease.

WhatsApp
Phone
Email
Address

Cars | About | Contact | FAQ

Terms & Conditions | Privacy Policy

© 2026 Company Name
```

---

# 28. Mobile UX Requirements

Mobile should be treated as a first-class experience.

## Important requirements

- Large tap targets
- Sticky or easy-to-find WhatsApp CTA
- Fast image loading
- Simple forms
- Readable vehicle specs
- No horizontal overflow
- No giant desktop-only layouts
- Easy date/time selection
- Easy navigation back to cars

### Mobile priority

A user should be able to:

```text
Open site
↓
See cars
↓
Open a car
↓
Request it
↓
Send WhatsApp
```

without fighting the interface.

---

# 29. Multilingual Architecture

The product should be designed for:

- French
- English
- Arabic

Recommended architecture should allow translations without duplicating entire components.

Conceptually:

```text
/components
/pages
/locales
    fr
    en
    ar
```

The exact implementation can be chosen later.

### Arabic considerations

Support:

- RTL
- Correct text alignment
- Proper spacing
- Correct form layout
- Navigation behavior
- Mixed Arabic/Latin content
- Vehicle names and numbers

Do not simply translate the French page mechanically and assume the UI will still work.

---

# 30. SEO Requirements

The site should be designed with local SEO in mind.

## Example keyword targets

Potential client-specific pages/content may target phrases such as:

- car rental Marrakech
- rent a car Marrakech
- Marrakech airport car rental
- location voiture Marrakech
- location voiture aéroport Marrakech
- تأجير السيارات مراكش

Do proper keyword research for the actual business and market.

## On-page basics

Each page should have:

- Unique title
- Meta description
- One clear H1
- Logical heading hierarchy
- Descriptive image alt text
- Internal links
- Clean URLs
- Fast loading
- Mobile-friendly design
- Structured local business information where appropriate

Do not stuff keywords unnaturally.

---

# 31. Performance Requirements

The site should feel fast.

## Priorities

- Optimized images
- Lazy-load non-critical images
- Responsive image sizes
- Avoid unnecessary JavaScript
- Minimize third-party scripts
- Use caching/CDN through the deployment platform
- Avoid giant video backgrounds unless justified

For a car-rental site, high-quality images are important, but unoptimized photos can destroy performance.

---

# 32. Design Direction

The design should communicate:

- Trust
- Tourism
- Reliability
- Convenience
- Quality

## Recommended visual characteristics

- Strong typography
- Large vehicle photography
- Clean cards
- Clear pricing
- Generous spacing
- High-contrast CTAs
- Minimal clutter
- Premium but approachable feel

Avoid:

- Excessive animations
- Huge text everywhere
- Too many gradients
- Fake luxury design
- Overly complicated menus
- Too many popups

The website should feel like a real rental company, not a template demo.

---

# 33. Reusable Design System

The product should be built as a reusable system.

## Components

```text
Navbar
LanguageSwitcher
WhatsAppButton
Hero
SearchBar
VehicleCard
VehicleGrid
VehicleGallery
VehicleSpecs
FeatureCard
HowItWorks
ReviewCard
FAQItem
LocationSection
CTASection
Footer
RentalForm
RentalSummary
```

The goal is:

> Build once, customize many times.

---

# 34. Data Model — Initial Version

A simple vehicle object can be enough initially.

Example:

```ts
type Vehicle = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  pricePerDay?: number;
  currency: string;
  transmission: "manual" | "automatic";
  fuel?: string;
  seats: number;
  doors?: number;
  airConditioning?: boolean;
  images: string[];
  description: string;
  features?: string[];
};
```

The exact model can evolve.

Do not over-engineer it.

---

# 35. Initial Technical Stack

Recommended starting stack:

```text
Frontend:
Next.js
TypeScript
Tailwind CSS

Version control:
Git
GitHub

Deployment:
Vercel

Communication:
WhatsApp

Database:
None for MVP

Backend:
None for MVP unless needed

Images:
Optimized local/CDN-hosted assets

Analytics:
Add later if client needs it
```

## Important

Do not choose technology only because it is technically impressive.

The stack should optimize for:

- Fast development
- Reusability
- Good performance
- Easy deployment
- Easy maintenance
- Ability to add a backend later

## Confirmed — this stack fits the MVP

Next.js + TypeScript + Tailwind + Vercel, with no backend/DB for MVP, is the right choice for this specific product (fast, low-traffic, per-client marketing/lead-gen sites):

- Next.js SSG/ISR gives SEO and speed (Section 30–31) with no infra to manage per client
- Tailwind makes "build once, customize many times" (Section 33) cheap — re-skinning a client is a config change
- TypeScript catches data-shape mistakes when the same codebase is duplicated across many clients
- Vercel's free tier and image CDN are enough for low-traffic SME sites
- Skipping a database/backend avoids DevOps overhead that would eat the margin on a 2,000–7,000 DH sale

Keep this stack. Do not add a backend/DB until a real client need requires it.

## Content Management (Post-MVP)

The current data model (Section 34) is a hardcoded file — no CMS. This is fine for the first 1–2 clients, but does not scale (see Section 46).

Once past 2–3 clients, add a lightweight, Git-based content layer so content updates don't bottleneck on a developer:

- Options: Decap CMS (free, Git-based) or Sanity.io free tier
- Goal: let a non-technical person (you, an assistant, or eventually the client) update vehicle prices/photos without a code change or manual redeploy
- This is an addition to the stack, not a replacement — Next.js/TS/Tailwind/Vercel stay as-is

## Hosting/Domain Ownership

Decide per client whether their site lives under your own Vercel/domain account or a dedicated account for them (see Client Customization Checklist, Section 47). Deciding this upfront avoids becoming a single point of failure/cost as the client count grows.

---

# 36. First Version Architecture

A possible structure:

```text
app/
├── page.tsx
├── cars/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── request/
│   └── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── faq/
│   └── page.tsx
├── terms/
│   └── page.tsx
└── privacy/
    └── page.tsx

components/
├── Navbar.tsx
├── Hero.tsx
├── VehicleCard.tsx
├── VehicleGrid.tsx
├── VehicleGallery.tsx
├── VehicleSpecs.tsx
├── RentalForm.tsx
├── RentalSummary.tsx
├── WhatsAppButton.tsx
├── ReviewCard.tsx
├── FAQ.tsx
├── LocationSection.tsx
└── Footer.tsx

data/
└── vehicles.ts

public/
└── images/
```

This is only a starting point; adapt as implementation evolves.

---

# 37. Booking Logic — MVP

The MVP should work like this:

```text
User opens /cars
        ↓
Clicks vehicle
        ↓
/cars/[slug]
        ↓
Clicks "Request this car"
        ↓
/request?car=[slug]
        ↓
Vehicle is preselected
        ↓
User fills form
        ↓
Validation
        ↓
Show summary
        ↓
Generate WhatsApp message
        ↓
Open WhatsApp
```

No reservation is considered confirmed by the website.

---

# 38. Validation Rules

At minimum:

### Vehicle

- Valid vehicle must exist

### Dates

- Pickup date required
- Return date required
- Return date >= pickup date

### Contact

- Name required
- Phone/WhatsApp required

### Location

- Pickup location required

### Notes

- Optional
- Set reasonable length limit

Display useful validation messages.

Do not make the form frustrating.

---

# 39. Error States

Design for errors before they happen.

Examples:

### Invalid vehicle

```text
This vehicle could not be found.
[Browse all cars]
```

### Form validation

```text
Please enter your pickup date.
```

### WhatsApp issue

Provide fallback:

```text
Unable to open WhatsApp?

Copy your request or contact us directly:
+212...
```

This is important because the website should not depend on a single action working perfectly.

---

# 40. Security / Privacy Basics

The MVP does not require a large backend, but still protect user data.

Consider:

- Avoid exposing unnecessary personal data
- Do not log sensitive information unnecessarily
- Use HTTPS
- Validate all user input
- Avoid dangerous injection into rendered content
- Use safe URL construction for WhatsApp links
- Have Privacy Policy and Terms pages when appropriate

Do not collect information you do not need.

---

# 41. Future Version — Admin Dashboard

Only build after the basic product is selling.

Potential features:

```text
Dashboard
├── Vehicles
│   ├── Add vehicle
│   ├── Edit vehicle
│   └── Delete vehicle
│
├── Bookings / Requests
│   ├── New
│   ├── Pending
│   ├── Confirmed
│   └── Cancelled
│
├── Availability
│   └── Calendar
│
└── Settings
    ├── WhatsApp number
    ├── Company info
    └── Locations
```

## Infrastructure Note

When this stage is reached, this is a good place to introduce a backend (Section 35's "ability to add a backend later"). Consider self-hosting this piece (e.g. Docker + EC2, similar to the DeSeller pipeline) rather than defaulting to more third-party SaaS:

- Protects margin on the Advanced package instead of paying recurring SaaS fees per client
- Doubles as a concrete DevOps/cloud portfolio piece

Only worth doing once the Advanced package has real demand — do not build this speculatively.

---

# 42. Future Version — Real Availability

Eventually, a real booking system can support:

```text
Vehicle
    ↓
Availability calendar
    ↓
Blocked/rented dates
    ↓
Booking request
    ↓
Availability check
    ↓
Confirmation
```

This requires persistent data and proper business logic.

Do not pretend the MVP has live availability if it does not.

---

# 43. Future Version — Online Payment

Potential later features:

- Deposit payment
- Full payment
- Payment status
- Online invoice
- Refund/cancellation handling

Only build this when there is a clear business need and a payment provider appropriate for the client's market.

---

# 44. Future Version — Admin / SaaS Product

If the same system is eventually sold to many rental companies, the architecture could evolve into:

```text
Platform
├── Company A
│   ├── Vehicles
│   ├── Requests
│   └── Settings
│
├── Company B
│   ├── Vehicles
│   ├── Requests
│   └── Settings
│
└── Company C
    ├── Vehicles
    ├── Requests
    └── Settings
```

This is a very different product.

Do not build this before validating the simpler service.

---

# 45. Product Packages

Potential commercial packages:

## Package 1 — Starter

Approximate positioning:

> Professional car-rental website with fleet catalog and WhatsApp inquiries.

Features:

- Homepage
- Cars page
- Vehicle details
- Rental request form
- WhatsApp
- Mobile optimization
- Contact information

Suggested starting price:

```text
2,000–3,000 DH
```

---

## Package 2 — Professional

Positioning:

> Complete multilingual car-rental website designed for generating rental inquiries.

Possible features:

- Everything in Starter
- French + English + Arabic
- Advanced vehicle filtering
- Better SEO structure
- Google Maps
- Reviews
- FAQ
- More customized design
- Better inquiry flow
- Analytics

Suggested starting price:

```text
4,000–7,000 DH
```

---

## Package 3 — Advanced

Positioning:

> Car-rental booking system with management tools.

Possible features:

- Everything in Professional
- Availability calendar
- Admin dashboard
- Booking management
- Automated notifications
- Optional payment
- Advanced SEO
- Analytics
- Custom integrations

Suggested starting range:

```text
8,000–15,000+ DH
```

Pricing should ultimately be based on scope, business value, and client requirements.

## Important — Validate the Price Point First

These prices are untested assumptions, not proven numbers.

Before building Package 2 or Package 3 for anyone:

- Land one real, paying pilot client on Package 1 (a discount is fine for the first client)
- Treat this as a test of **willingness to pay**, not just a design/portfolio exercise
- Only invest time building out Professional/Advanced features once a real client has paid for Starter

Do not assume the market will pay these numbers just because the packages are well scoped.

---

# 46. Recurring Services

Possible recurring services:

## Maintenance

```text
150–500 DH/month
```

Could include:

- Small content updates
- Technical maintenance
- Monitoring
- Backups
- Minor fixes
- Image updates

### Important — This does not scale yet

In the MVP stack, vehicle data lives in a hardcoded file (see Section 35). There is no CMS.

This means every "small content update" (a new price, a new car, a swapped photo) currently requires a code change and a redeploy by you personally.

Until a CMS layer exists (see Section 35):

- Scope the maintenance retainer narrowly (e.g. a capped number of updates per month), or
- Price it high enough to cover your dev time per update
- Do not promise fast/unlimited content updates to more than a couple of clients on this stack

## SEO / Local presence

Separate or bundled service:

- Local SEO
- Google Business optimization
- Content updates
- Search performance monitoring

Do not promise specific Google rankings.

---

# 47. Client Customization Checklist

Before starting a real client project, collect:

### Company

- Company name
- Logo
- Brand colors
- WhatsApp number
- Phone
- Email
- Address
- Opening/support hours
- Hosting/domain ownership: decide whether the site lives under your own Vercel/domain account or a dedicated account for this client — decide before launch, not after several clients are live

### Vehicles

- Vehicle list
- Prices
- Photos
- Specs
- Features
- Rental conditions

### Business

- Pickup areas
- Airport pickup policy
- Delivery policy
- Deposit
- Driver requirements
- Insurance information
- Mileage rules
- Cancellation policy

### Marketing

- Reviews
- Social links
- Google Business link
- Existing website
- Existing ads/social campaigns

### Languages

- French
- English
- Arabic

---

# 48. Portfolio Strategy

Before approaching businesses, create a polished demo.

## Demo company

Do not use another company's branding or content without permission.

Create a fictional brand.

Example:

> Atlas Drive Marrakech

Use it to demonstrate:

- Home
- Cars
- Car detail
- Request form
- WhatsApp flow
- Mobile design
- Multilingual structure

The demo should look like a real company could actually use it.

---

# 49. Prospecting Strategy

Once the demo is ready:

## Find businesses

Look for companies with:

- No website
- Outdated website
- Weak mobile experience
- No proper vehicle catalog
- No clear WhatsApp flow
- Poor multilingual support
- Weak CTA
- Poor SEO presence

Track them in a spreadsheet.

Example:

| Business | Website | Mobile | WhatsApp | Main Problem | Contacted | Response |
|---|---|---|---|---|---|---|
| Company A | No | — | Yes | No website | Yes | — |
| Company B | Yes | Poor | Yes | Weak fleet page | Yes | Interested |
| Company C | Yes | Good | No | Weak contact flow | No | — |

## Recommended primary channels

Cold outreach (DMs, cold calls) to small business owners tends to convert slowly. Prioritize instead:

- In-person visits to rental clusters near Marrakech Menara Airport and the medina, where you can show the demo on your phone directly to the owner
- Referral chains: once one client is happy, ask them to introduce you to other owners in their network (rental operators in the same area typically know each other)

Treat cold outreach as a supplement to these, not the primary channel.

---

# 50. Outreach Principle

Do not lead with:

> "I am a web developer and I make websites."

Lead with the business problem.

Example concept:

> I noticed your business has a strong fleet and social presence, but customers currently need to contact you before they can easily browse the vehicles online. I created a demo showing how a customer could choose a car and send a complete rental request through WhatsApp.

The point is:

**Show the improvement.**

---

# 51. MVP Development Order

Build in this order:

## Phase 1 — Foundation

- Create GitHub repository
- Set up Next.js
- Set up TypeScript
- Set up Tailwind
- Create base layout
- Configure fonts
- Establish design tokens

## Phase 2 — Main UI

- Navbar
- Hero
- Vehicle cards
- Vehicle grid
- Features
- How it works
- Reviews
- FAQ
- Location
- Footer

## Phase 3 — Vehicle flow

- Cars page
- Dynamic vehicle details
- Image gallery
- Vehicle specs
- Request CTA

## Phase 4 — Request flow

- Rental form
- Validation
- Request summary
- WhatsApp message generator

## Phase 5 — Quality

- Mobile polish
- Accessibility
- SEO
- Image optimization
- Error states
- Loading states
- 404 page

## Phase 6 — Deployment

- GitHub
- Vercel
- Test production build
- Test WhatsApp on phone
- Test all routes
- Test mobile

---

# 52. Definition of Done for the Demo

The first demo is complete when a visitor can:

```text
1. Land on homepage
2. Understand the company immediately
3. Browse cars
4. Open a specific car
5. Read the specifications
6. Request that specific car
7. Enter dates and contact details
8. Review the request
9. Open WhatsApp with the request prepared
10. Use the site comfortably on mobile
```

And the business owner can understand:

> "A customer can now come to my site and send me a complete rental request."

---

# 53. Things to Decide Before Coding

Before writing a large amount of code, decide:

### Business

- Brand name
- Target market
- Main CTA
- Pricing display strategy
- Pickup locations
- Languages

### UX

- Exact homepage sections
- Vehicle card design
- Vehicle detail layout
- Request flow
- Mobile navigation
- WhatsApp placement

### Content

- Vehicle data
- Images
- Copy
- Reviews
- FAQs
- Policies

### Technical

- Routing
- Data structure
- Translation approach
- Image strategy
- Deployment
- Analytics plan

Do not try to solve every future feature now.

---

# 54. Recommended Immediate Next Step

Before implementation, produce **three artifacts**:

## Artifact 1 — Sitemap

```text
Home
Cars
    └── Vehicle Details
Request
About
Contact
FAQ
Terms
Privacy
```

## Artifact 2 — Customer Flow

```text
Home
 ↓
Cars
 ↓
Vehicle
 ↓
Request
 ↓
Summary
 ↓
WhatsApp
```

## Artifact 3 — Homepage Wireframe

```text
Navbar
↓
Hero
↓
Quick Search / CTA
↓
Featured Cars
↓
Why Choose Us
↓
How It Works
↓
Reviews
↓
Location
↓
FAQ
↓
Final CTA
↓
Footer
```

Once those three are clear, implementation becomes much easier.

---

# 55. Final Product Philosophy

The product should follow these rules:

1. **Conversion before decoration**
2. **Mobile before desktop polish**
3. **Simple booking request before complex booking engine**
4. **Reusable components before client-specific hacks**
5. **Real business requirements before unnecessary features**
6. **Human confirmation before pretending to have live availability**
7. **Fast pages before heavy visual effects**
8. **Real content before filler**
9. **A strong CTA on every important page**
10. **Build once, customize many times**

The long-term goal is not to repeatedly build random websites from scratch.

The goal is to create a **reusable car-rental website system** that can be customized for multiple businesses while improving with every project.
