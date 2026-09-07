# Marrakech Car Rental — Premium Homepage Layout & Visual Direction

## 0. Document Purpose

This document defines the **homepage structure, visual system, interaction direction, and conversion flow** for the premium Marrakech car-rental product.

The existing application already has these routes:

```text
/
 /cars
 /cars/[slug]
 /request
 /about
 /contact
 /faq
 /terms
 /privacy
```

The homepage is the primary conversion page. The rest of the application should feel like the same brand system continuing from the homepage.

The product is not a simple landing page: visitors browse a fleet, open individual vehicle pages, submit a rental request, and then continue through WhatsApp for manual availability/price confirmation.

---

# 1. Design Objective

## Target perception

The site should feel like:

- A premium Moroccan automotive brand
- A high-end travel company
- Editorial rather than template-based
- Sophisticated without looking like a generic "luxury car website"
- Local to Marrakech without becoming a cliché Moroccan tourist site
- Expensive, intentional, and highly art-directed

The target visual impression is:

> **"This company clearly invested in its brand and understands premium travel."**

The website should look like a **$50,000 custom-designed marketing site**, while remaining technically practical to build and reuse.

---

# 2. Core UX Principle

Luxury should come from:

- Composition
- Typography
- Photography
- Whitespace
- Scale
- Motion restraint
- Editorial rhythm
- Micro-details
- Consistency

Luxury should NOT come from:

- Adding gold everywhere
- Excessive gradients
- Glassmorphism on every component
- Huge animated numbers
- Random scroll animations
- Generic luxury-stock imagery
- Overly rounded cards
- Five different accent colors

The visual system should feel **designed**, not decorated.

---

# 3. Visual Direction

## 3.1 Color System

The starting palette should be inspired by Marrakech architecture, evening light, clay, leather, brass, and sand.

### Primary background

```text
Espresso / Deep Clay
#1B1512
```

Use primarily for:

- Hero
- Dark sections
- Footer
- High-impact transitions

### Primary text

```text
Warm Sand
#F4EEE3
```

Use for:

- Main display text
- Primary light-on-dark content
- Navigation on dark backgrounds

### Accent

```text
Aged Brass
#BD8A3D
```

Use sparingly for:

- Fine rules
- Small labels
- CTA emphasis
- Active states
- Hover details
- Selected indicators

### Supporting neutrals

Recommended supporting shades:

```text
Warm Off-White
#EEE7DB

Deep Brown
#241B17

Muted Clay
#6E5648

Soft Brass Highlight
#D0A461

Warm Charcoal
#100D0B
```

These should support the primary system rather than become additional "brand colors."

### Important rule

The brass accent should never dominate the page.

A premium design often becomes less premium when the accent is everywhere.

---

# 4. Typography

## Display / Editorial Typeface

Recommended:

```text
Fraunces
```

Use for:

- Hero headline
- Major section titles
- Editorial statements
- Large pull quotes

Characteristics:

- Large
- High contrast
- Elegant
- Characterful
- Slightly imperfect/organic

## UI / Body Typeface

Recommended:

```text
Manrope
```

Use for:

- Navigation
- Buttons
- Forms
- Vehicle specs
- Prices
- Supporting copy
- Labels

## Typography hierarchy

Example:

```text
Hero title:
100–150px desktop
52–72px mobile

Major section title:
64–90px desktop
42–54px mobile

Body:
16–19px

Small label:
11–13px
Wide letter spacing
Uppercase where appropriate
```

Exact values should be tuned during implementation.

The title sizes are guidelines for visual impact, not rigid requirements.

---

# 5. Overall Homepage Composition

The homepage should not feel like:

```text
Hero
Cards
Cards
Cards
Cards
Footer
```

Instead, it should feel like an editorial journey.

Recommended rhythm:

```text
NAVBAR
↓
HERO / BRAND STATEMENT
↓
BRAND / TRUST STRIP
↓
CURATED FLEET SHOWCASE
↓
EDITORIAL BRAND STATEMENT
↓
FEATURED VEHICLE EXPERIENCE
↓
MARRAKECH / SERVICE STORY
↓
HOW THE REQUEST WORKS
↓
SOCIAL PROOF
↓
FINAL CONVERSION
↓
FOOTER
```

The sections should alternate between:

- Dense / sparse
- Dark / light
- Image-led / typography-led
- Horizontal / asymmetric
- Full-width / constrained

This prevents the homepage from feeling like a conventional template.

---

# 6. Homepage Wireframe

## High-level wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ NAVBAR                                                       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                         HERO                                 │
│                                                              │
│  MASSIVE HEADLINE              LARGE VEHICLE / ART DIRECTION │
│  Editorial copy                                    ● 01      │
│  CTAs                                               ● 02      │
│  Small location mark                               ● 03      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ LOGO / TRUST MARQUEE                                        │
│  ★ Google   ★ Tripadvisor   / partner logos / rating marks │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                  CURATED FLEET                              │
│                                                              │
│  "CHOOSE YOUR WAY THROUGH MARRAKECH"                         │
│                                                              │
│        [ Large Featured Vehicle ]                            │
│                              [ Smaller Vehicle ]             │
│                                                              │
│  ← / →                     View all cars                     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│          LARGE EDITORIAL STATEMENT                           │
│                                                              │
│      "THE ROAD TO MARRAKECH                                  │
│       SHOULD FEEL AS GOOD                                    │
│       AS THE DESTINATION."                                   │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│             FEATURED VEHICLE STORY                           │
│                                                              │
│  FULL-BLEED IMAGE                VEHICLE INFO                │
│                                  Dacia Duster               │
│                                  350 DH / day               │
│                                  Specs                      │
│                                  Description                │
│                                  [ Request this car ]       │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                  MARRAKECH STORY                             │
│                                                              │
│  IMAGE / VIDEO              TEXT + LOCAL DETAILS             │
│  Architecture               Airport                         │
│  Road / sunset              Medina                           │
│  Landscape                  Agafay / Atlas                  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    HOW IT WORKS                              │
│                                                              │
│       01               02                 03                 │
│   Choose a car     Send request       We confirm             │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    REVIEWS                                   │
│                                                              │
│          "..."                                               │
│          ★★★★★                                              │
│          Customer / Location                                 │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                   FINAL CTA                                  │
│                                                              │
│      YOUR NEXT DRIVE STARTS HERE.                            │
│      [ Browse cars ]     [ WhatsApp ]                        │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└──────────────────────────────────────────────────────────────┘
```

---

# 7. Navbar

## Desktop

The navbar should feel extremely clean.

### Structure

```text
[LOGO]          Cars   About   Contact          FR  EN  AR   [WhatsApp]
```

Do not use a large conventional navigation bar.

Use generous spacing.

### Behavior

At the top:

- Transparent / integrated with hero
- Light text over hero

On scroll:

- Compact
- Subtle background
- Slight blur only if necessary
- Thin bottom border
- Smaller vertical footprint

Avoid a dramatic sticky "floating pill" navbar. That look is overused.

---

# 8. Hero — The Signature Moment

This is the most important section.

The hero should communicate **brand + place + vehicle + action** immediately.

## 8.1 Hero concept

Instead of the common:

> "Rent a car in Marrakech"

centered over a stock photo, use a **cinematic editorial composition**.

Example:

```text
MARRAKECH / MOROCCO
CAR RENTAL

THE ROAD
IS PART OF
THE JOURNEY.

Reliable cars.
Beautifully simple booking.

[ Explore the fleet ]
[ WhatsApp us ]

                         [Vehicle image]
```

The wording can be changed for the actual client; the important part is the composition.

---

# 9. Hero Layout

## Desktop

Use an asymmetric grid.

Approximately:

```text
40% text
60% visual
```

But allow the vehicle image to visually escape its grid.

### Suggested composition

```text
┌──────────────────────────────────────────────────────────────┐
│ MARRAKECH / MOROCCO                     01 / 03             │
│                                                              │
│ THE ROAD                    ┌─────────────────────────────┐ │
│ IS PART OF                   │                             │ │
│ THE JOURNEY.                 │      VEHICLE IMAGE         │ │
│                              │                             │ │
│ Supporting copy              │                             │ │
│                              └─────────────────────────────┘ │
│ [Explore] [WhatsApp]                                         │
│                                                              │
│                         MARRAKECH · MENARA · ATLAS           │
└──────────────────────────────────────────────────────────────┘
```

Do not vertically center everything.

The headline should sit intentionally high or low relative to the image.

---

# 10. Hero Visual Treatment

## Preferred direction

Use **premium real vehicle photography** for the actual commercial version.

The demo can use high-quality licensed imagery or purpose-created visuals.

Image direction:

- Marrakech dusk
- Deep shadows
- Warm sunlight
- Long road lines
- Architecture used subtly
- Premium vehicle photographed dynamically
- Strong negative space
- Avoid cliché tourist postcard compositions

## Avoid

- Generic supercar imagery unrelated to the fleet
- Obvious AI-looking cars
- Stock images with visible logos
- Overly saturated sunset
- Fake luxury effects
- Unrelated Dubai-style imagery

---

# 11. Hero Motion

Use one orchestrated entrance sequence.

Suggested sequence:

```text
0.00s — Background establishes
0.15s — Small location label appears
0.30s — Main headline reveals
0.55s — Supporting copy appears
0.70s — CTA appears
0.90s — Vehicle image finishes its subtle reveal
1.10s — Hero becomes static
```

Motion should then stop.

This gives the site a cinematic entrance without becoming annoying.

---

# 12. Hero Interaction

The hero should include a subtle progress indicator if multiple featured vehicles/slides are used.

Example:

```text
01 ━━━━━
02 ━━━━━
03 ━━━━━
```

### Slide behavior

Recommended:

- User-controlled navigation
- Optional slow autoplay
- Pause on hover/focus
- Keyboard accessible
- Swipe on mobile

Do NOT create a rapidly rotating carousel.

The vehicle slide should feel like an editorial cover changing, not an advertisement banner rotating every two seconds.

---

# 13. Trust / Logo Marquee

Immediately after the hero, use a slim trust strip.

Possible content:

- Google rating
- Tripadvisor
- Partner logos
- Hotel partnerships
- Tourism brands
- Airport / service badges where legitimately applicable
- "Rated 4.9/5" style proof only if real

## Visual treatment

Dark-on-dark or light-on-light depending on surrounding background.

The marquee should move continuously but slowly.

Example:

```text
★★★★★ Google     Tripadvisor     Partner     ★★★★★ Google
```

### Motion

Continuous horizontal loop.

Requirements:

- Seamless loop
- Slow speed
- No abrupt reset
- Pause on hover if useful
- Reduced-motion support

### Important

Only use real brands/partners for a real client.

For the demo, use neutral mock marks or clearly fictional partner names.

---

# 14. Fleet Showcase

This should be one of the most visually impressive sections.

Do NOT simply show a standard 3-column grid.

## Recommended concept

Create a **curated horizontal fleet stage**.

```text
            OUR FLEET

THE RIGHT CAR
CHANGES THE WAY
YOU EXPERIENCE
MARRAKECH.

 ┌──────────────────────────────────────┐
 │                                      │
 │            FEATURED VEHICLE          │
 │                                      │
 └──────────────────────────────────────┘

        ┌──────────────────┐
        │ SECOND VEHICLE   │
        └──────────────────┘
```

The featured vehicle should dominate.

---

# 15. Fleet Carousel

## Interaction

Desktop:

- Large active vehicle
- Small adjacent preview
- Arrow navigation
- Progress indicator

Mobile:

- Swipeable horizontal cards
- One main vehicle
- Partial next card visible

Each card should show:

```text
Dacia Duster
SUV · Automatic · 5 seats

From 350 DH / day

[ View vehicle ]
```

The card should not display 15 specifications.

---

# 16. Fleet Section Micro-Interaction

When changing vehicle:

- Image changes
- Vehicle name changes
- Specs change
- Price changes
- Small index updates

Use a quick editorial transition.

Example:

```text
01 / 06
```

The entire page should not animate.

Only the changing content should move.

---

# 17. Editorial Statement Section

This section breaks the traditional website pattern.

Use massive typography and very little content.

Example:

```text
THE ROAD TO
MARRAKECH
SHOULD FEEL
LIKE PART OF
THE JOURNEY.
```

Small supporting text underneath:

```text
From the airport to the Atlas,
choose a vehicle that fits the way
you want to experience Morocco.
```

### Design

- Very large headline
- Generous vertical space
- Minimal UI
- No cards
- No stock imagery required

This gives the page an expensive editorial feeling.

---

# 18. Featured Vehicle Story Section

Choose one flagship vehicle.

The layout should resemble a luxury automotive editorial spread.

```text
┌───────────────────────────────┬──────────────────────────────┐
│                               │  Dacia Duster                │
│                               │  SUV / AUTOMATIC             │
│                               │                              │
│                               │  FROM                        │
│       LARGE IMAGE             │  350 DH / DAY                │
│                               │                              │
│                               │  5 seats                     │
│                               │  Automatic                   │
│                               │  Diesel                      │
│                               │  AC                          │
│                               │                              │
│                               │  Short description           │
│                               │                              │
│                               │  [ Request this car ]        │
└───────────────────────────────┴──────────────────────────────┘
```

Use asymmetry rather than equal columns.

---

# 19. Marrakech Editorial Story

This section makes the website feel local without resorting to clichés.

## Purpose

Connect the rental experience to the destination.

Possible narrative:

```text
MARRAKECH
FROM ANOTHER ANGLE.

Airport mornings.
Medina evenings.
Atlas roads.
Agafay horizons.

Your car is the link between them.
```

### Visual direction

Use:

- Road imagery
- Architecture details
- Shadows
- Sand textures
- Atlas landscapes
- Vehicle detail shots

Avoid using only tourist landmark pictures.

The location should feel **lived-in and cinematic**.

---

# 20. Service / Pickup Story

A smaller information section can communicate practical benefits.

Potential features:

```text
01
MARRAKECH MENARA AIRPORT

02
HOTEL / RIAD DELIVERY

03
CITY PICKUP

04
24/7 WHATSAPP SUPPORT
```

Only display services the actual rental company offers.

---

# 21. How It Works

This section should explain the actual business model.

Do not make it look like instant online booking.

## Three steps

```text
01
CHOOSE YOUR CAR

Browse the fleet and select
the vehicle that fits your trip.

02
SEND YOUR REQUEST

Choose your dates, pickup details
and contact information.

03
GET CONFIRMATION

Our team checks availability,
confirms the price and finalizes
your rental.
```

This is consistent with the current product flow where the business manually confirms availability and final price.

---

# 22. How It Works Visual Design

Avoid three generic circular icons.

Use:

- Large numbers
- Thin rules
- Editorial typography
- Horizontal progression

Example:

```text
01 ───────────── 02 ───────────── 03

CHOOSE           REQUEST          CONFIRM
YOUR CAR         YOUR RENTAL      YOUR DRIVE
```

A small animated line can progress between items.

---

# 23. Social Proof / Reviews

This section should feel like a magazine quote rather than a review widget.

Large quote:

```text
"Everything was simple from
airport pickup to return."

★★★★★
Sarah M.
France
```

Possible supporting proof:

```text
4.9 / 5
Google Reviews
```

Only show actual ratings/reviews for a real client.

---

# 24. Review Carousel

Use a controlled carousel.

Desktop:

- One large quote
- Small previous/next indicators

Mobile:

- Swipe
- One quote at a time

Do not show six tiny cards.

One strong quote is more premium than six cramped testimonials.

---

# 25. FAQ Preview

The homepage only needs a small FAQ preview.

Show approximately 3–5 questions.

Example:

```text
FREQUENT QUESTIONS

What documents do I need?             +
Is airport pickup available?          +
Is a deposit required?                +
Can I rent for one day?               +
Are automatic cars available?         +
```

Use a minimalist accordion.

Link:

> View all questions

Answers must be client-confirmed.

---

# 26. Final CTA

The final CTA should feel like a conclusion to the story.

Avoid:

> Contact us today!

Use a more direct action.

Possible concept:

```text
YOUR NEXT DRIVE
STARTS HERE.

Choose a car.
Send your dates.
We'll take it from there.

[ EXPLORE THE FLEET ]
[ WHATSAPP US ]
```

Use a strong image or a dark cinematic background.

---

# 27. Footer

The footer should feel intentionally designed.

### Layout

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│ LOGO                         MARRAKECH                        │
│                              MOROCCO                         │
│                                                              │
│ Cars          Company         Contact         Social         │
│ Vehicles      About           WhatsApp        Instagram      │
│ FAQ           Terms           Phone           Google         │
│                                                              │
│ ──────────────────────────────────────────────────────────── │
│                                                              │
│ © 2026 Company Name                       FR · EN · AR       │
└──────────────────────────────────────────────────────────────┘
```

Use very large negative space.

The footer should not look like a standard SaaS footer.

---

# 28. Floating WhatsApp CTA

This exists across all pages.

## Desktop

A subtle floating action in the lower-right area.

## Mobile

A larger but compact sticky action.

Possible label:

```text
WhatsApp us
```

or:

```text
Check availability
```

The button should remain visually connected to the brand.

Avoid generic bright-green oversized floating widgets.

A green WhatsApp icon can be included, but the overall component should still feel premium.

---

# 29. Motion System

The site should feel alive but controlled.

## Use

### 1. Hero entrance

One orchestrated sequence.

### 2. Logo marquee

Continuous, slow.

### 3. Fleet carousel

User-controlled with smooth transitions.

### 4. Review carousel

User-controlled.

### 5. Micro-interactions

Buttons, image hover, arrows, link underlines.

### 6. Subtle image movement

Small parallax/scale can be used where it genuinely improves a hero image.

## Avoid

- Every section fading in
- Every card sliding in independently
- Continuous parallax everywhere
- Excessive mouse-follow effects
- Cursor gimmicks
- Heavy page transitions
- Unnecessary loaders

The luxury comes from restraint.

---

# 30. Page Transitions

Optional.

If implemented:

- Keep them under roughly 400–600ms
- Use subtle opacity/transform
- Never block navigation unnecessarily
- Respect reduced-motion preferences

The website should feel fast first.

---

# 31. Button System

Buttons should be simple and precise.

## Primary

```text
EXPLORE THE FLEET →
```

Filled or outlined depending on the section.

## Secondary

```text
WHATSAPP US
```

## Tertiary

Text link:

```text
VIEW DETAILS →
```

Use uppercase sparingly.

Button labels should describe the action.

---

# 32. Image Direction

## Vehicle photography

Preferred:

- 3/4 front angle
- Side profile
- Interior
- Wheel/detail
- Dashboard
- Cargo area
- Multiple angles

Use consistent photography for all vehicles.

## Environment

Use:

- Marrakech streets
- Airport surroundings
- Road to Atlas
- Agafay
- Desert road
- Medina edges
- Hotel entrances
- Golden-hour roads

## Consistency

If one vehicle has a clean premium studio aesthetic and another has a random phone photo, the catalog loses its premium feeling.

Image consistency is therefore a **business requirement**, not only a design detail.

---

# 33. Background Texture

Optional subtle texture can be used in some dark sections.

Possible direction:

- Fine paper/grain
- Very subtle clay texture
- Light film grain

Keep it extremely subtle.

Do not make the entire page noisy.

---

# 34. Decorative Graphic Language

Instead of generic icons everywhere, create a small graphic language:

- Thin brass rules
- Small index numbers
- Fine circles
- Editorial markers
- Thin map/route lines
- Minimal vehicle silhouette
- Small destination coordinates

Example:

```text
31.6295° N
7.9811° W
MARRAKECH
```

Use geographic/location details carefully and accurately.

These elements can make the design feel custom.

---

# 35. Avoiding the "Moroccan Template" Problem

Do NOT rely heavily on:

- Moroccan tile patterns everywhere
- Arches as UI containers
- Lantern illustrations
- Palm trees
- Excessive red/green national colors
- Generic desert backgrounds

Instead, reference Marrakech through:

- Color
- Light
- Materials
- Architecture
- Road imagery
- Typography
- Subtle coordinate/location cues

The objective is:

> **Inspired by Marrakech, not decorated with Marrakech.**

---

# 36. Responsive Strategy

## Desktop

The full art direction can breathe.

Use:

- Large typography
- Asymmetric layouts
- Large image crops
- Wide whitespace
- Horizontal carousels

## Tablet

Reduce:

- Headline size
- Image overlap
- Navigation density

Keep the overall composition.

## Mobile

Do not simply stack the desktop sections mechanically.

Recompose them.

### Mobile hero

```text
MARRAKECH / MOROCCO

THE ROAD
IS PART OF
THE JOURNEY.

[Vehicle image]

[Explore the fleet]
[WhatsApp us]
```

### Mobile fleet

One vehicle at a time with swipe.

### Mobile editorial section

Large headline but shorter line lengths.

### Mobile final CTA

Two strong actions with comfortable tap areas.

---

# 37. Accessibility & Motion Safety

Premium design must still be usable.

Requirements:

- Keyboard navigation
- Visible focus states
- Semantic headings
- Accessible buttons
- Accessible carousel controls
- Form labels
- Sufficient text contrast
- `prefers-reduced-motion` support
- Avoid autoplay that cannot be paused
- Never communicate essential information only through animation

---

# 38. Conversion Architecture

The homepage should repeatedly lead toward two actions:

## Primary

```text
Browse Cars
```

This takes users toward `/cars`.

## Secondary

```text
WhatsApp Us
```

This starts direct contact.

For a visitor who is ready to rent:

```text
Home
↓
Featured vehicle
↓
Vehicle details
↓
Request
↓
WhatsApp
```

For a visitor who is browsing:

```text
Home
↓
Cars
↓
Vehicle
↓
Request
↓
WhatsApp
```

Both paths should be obvious.

---

# 39. Homepage CTA Map

| Section | Primary CTA | Secondary CTA |
|---|---|---|
| Navbar | Cars | WhatsApp |
| Hero | Browse Cars | WhatsApp |
| Quick Search | Check Availability | — |
| Featured Fleet | View Vehicle | View All Cars |
| Featured Vehicle | Request This Car | View Details |
| How It Works | Browse Cars | — |
| Reviews | Browse Cars | WhatsApp |
| FAQ | View FAQ | WhatsApp |
| Final CTA | Explore Fleet | WhatsApp |

Do not put multiple competing CTAs in the same visual hierarchy.

---

# 40. Homepage Content Hierarchy

Every section should answer one question.

```text
Hero
"What is this company and what can I do?"

Fleet
"What cars can I rent?"

Featured vehicle
"What does the rental experience look like?"

Marrakech story
"Why does this company feel connected to the destination?"

How it works
"How does the request process work?"

Reviews
"Can I trust them?"

FAQ
"What do I still need to know?"

Final CTA
"What should I do now?"
```

This keeps the page purposeful instead of decorative.

---

# 41. Recommended Homepage Section Order

Final recommended order:

```text
01. Navbar
02. Hero
03. Trust / logo marquee
04. Fleet showcase
05. Editorial statement
06. Featured vehicle story
07. Marrakech / location story
08. Service / pickup highlights
09. How it works
10. Reviews / social proof
11. FAQ preview
12. Final CTA
13. Footer
```

This is an intentionally richer homepage than the initial MVP outline because the requested positioning is premium and editorial.

The homepage still retains the original product logic: fleet → vehicle → request → WhatsApp.

---

# 42. Relationship to Existing Routes

The homepage should link naturally to the current routes.

## `/`

Main brand and conversion experience.

## `/cars`

Full fleet catalog.

## `/cars/[slug]`

Vehicle-specific decision page.

## `/request`

Structured request form followed by WhatsApp.

## `/about`

Expanded company story.

## `/contact`

Full contact details.

## `/faq`

Full FAQ.

## `/terms`

Legal rental terms.

## `/privacy`

Privacy/data handling.

The homepage should not duplicate the entire content of these pages.

It should **tease and route**.

---

# 43. Components Needed for the Homepage

Suggested reusable component architecture:

```text
components/
├── Navigation/
│   ├── Navbar
│   └── LanguageSwitcher
│
├── Hero/
│   ├── Hero
│   ├── HeroSlide
│   └── HeroProgress
│
├── Trust/
│   └── LogoMarquee
│
├── Fleet/
│   ├── FleetShowcase
│   ├── FleetCarousel
│   ├── VehiclePreview
│   └── VehicleMiniCard
│
├── Editorial/
│   └── EditorialStatement
│
├── FeaturedVehicle/
│   └── FeaturedVehicleStory
│
├── Location/
│   ├── MarrakechStory
│   └── ServiceHighlights
│
├── Process/
│   └── HowItWorks
│
├── Reviews/
│   └── ReviewCarousel
│
├── FAQ/
│   └── FAQPreview
│
├── CTA/
│   └── FinalCTA
│
├── WhatsApp/
│   └── FloatingWhatsApp
│
└── Footer/
    └── Footer
```

The exact folder organization can change during implementation.

---

# 44. Data Needed for the Homepage

The homepage should not hardcode everything directly into JSX.

Example:

```ts
const heroSlides = [...]
const featuredVehicles = [...]
const reviews = [...]
const faqs = [...]
const serviceHighlights = [...]
```

For the MVP, these can live in local TypeScript/JSON data.

Later, a CMS can be introduced.

---

# 45. Home Page Data Model

Possible hero data:

```ts
type HeroSlide = {
  title: string[];
  eyebrow: string;
  description: string;
  image: string;
  vehicleSlug?: string;
};
```

Possible feature data:

```ts
type Feature = {
  number: string;
  title: string;
  description: string;
};
```

Possible review:

```ts
type Review = {
  quote: string;
  name: string;
  country?: string;
  rating: number;
  source?: string;
};
```

Keep content models simple.

---

# 46. Performance Rules for the Premium Design

Premium visual design must not mean a slow website.

## Rules

- Use responsive image sizing
- Compress large vehicle images
- Use modern formats where possible
- Lazy-load images below the fold
- Do not load every hero/carousel image at full size immediately
- Avoid unnecessary animation libraries
- Avoid huge video files
- Avoid excessive third-party scripts

The hero gets priority.

The rest loads progressively.

---

# 47. SEO Rules for the Homepage

The homepage should have:

### Title

Something like:

```text
Premium Car Rental in Marrakech | Company Name
```

### Description

A concise description focused on:

- Marrakech
- Car rental
- Airport pickup if applicable
- Main value proposition

### H1

One strong H1 only.

Example:

```text
The road is part of the journey.
```

Supporting context can establish:

```text
Premium car rental in Marrakech.
```

The exact SEO copy should be researched per real client.

---

# 48. What Makes This "Non-Templated"

The design should have distinctive assets and decisions that are hard to find in a generic template:

1. Custom art direction
2. Editorial typography
3. Asymmetric section layouts
4. Large-scale type
5. Marrakech-specific visual language
6. Custom vehicle showcase interaction
7. Controlled motion language
8. Custom trust marquee
9. Custom graphic markers
10. Non-standard footer
11. Photography treated as art direction
12. Strong vertical rhythm

The result should still be reusable technically, but each client's brand should feel unique.

---

# 49. Template Reusability Strategy

The underlying system should be reusable.

What changes per client:

```text
Brand
Logo
Colors
Typography
Vehicle fleet
Vehicle images
Prices
WhatsApp number
Services
Locations
Reviews
FAQ
Languages
Photography
Copy
```

What remains structurally reusable:

```text
Hero system
Fleet system
Vehicle details
Request system
WhatsApp flow
CTA system
Navigation
Footer
SEO structure
```

This is how the product can become a **productized service** instead of a collection of unrelated websites.

---

# 50. Prototype Priority

Do not code every section immediately.

Prototype in this order:

## Stage 1 — Art Direction

Build only:

```text
Navbar
Hero
```

The first screen must already feel premium.

## Stage 2 — Fleet

Add:

```text
Trust marquee
Fleet showcase
```

## Stage 3 — Editorial

Add:

```text
Editorial statement
Featured vehicle story
```

## Stage 4 — Conversion

Add:

```text
How it works
Reviews
FAQ
Final CTA
```

## Stage 5 — Polish

Add:

```text
Micro-interactions
Responsive refinement
Reduced motion
Performance
SEO
Accessibility
```

This avoids building 12 average sections before knowing whether the visual direction works.

---

# 51. Design Acceptance Criteria

The homepage should pass these tests:

### Brand

- Does it look like a specific company rather than a template?
- Does Marrakech influence the design without becoming a cliché?
- Does the visual language remain consistent?

### Conversion

- Can a new visitor understand the business in 5 seconds?
- Can they reach the fleet quickly?
- Can they request a specific vehicle quickly?
- Is WhatsApp always easy to find?

### Visual

- Does the hero feel memorable?
- Is typography doing real design work?
- Are sections varied enough?
- Is whitespace intentional?
- Is brass used with restraint?

### Product

- Does the homepage connect cleanly to `/cars`?
- Do vehicle CTAs preserve the selected car?
- Does `/request` lead to a correctly formatted WhatsApp request?
- Is the site truthful about manual confirmation rather than pretending to have real-time booking?

### Technical

- Works on mobile
- Fast image loading
- Keyboard accessible
- Reduced-motion support
- No horizontal overflow
- No broken routes
- No console errors in production

---

# 52. Things to Avoid During Implementation

Do not let the design drift into:

```text
Generic SaaS template
        ↓
Dark background
        ↓
Gold gradient
        ↓
Rounded glass cards
        ↓
Huge "Luxury Car Rental" heading
        ↓
Three generic icon cards
        ↓
Stock review cards
        ↓
Footer
```

That would directly contradict the design goal.

Also avoid:

- Copying an existing premium website too literally
- Using a template without changing its visual logic
- Filling empty sections with meaningless content
- Adding animations just because the library supports them
- Building backend features before validating the product
- Using fake reviews/ratings/partners
- Claiming guaranteed availability when there is none

---

# 53. Immediate Implementation Brief

The first coded mockup should contain only:

```text
Navbar
Hero
Trust Marquee
Fleet Showcase
Editorial Statement
Featured Vehicle
```

The goal of this first mockup is to answer one question:

> **Does the website already look and feel expensive before the lower sections exist?**

If the answer is no, fix the design system before adding more sections.

If the answer is yes, continue with:

```text
Marrakech Story
Service Highlights
How It Works
Reviews
FAQ
Final CTA
Footer
```

---

# 54. Final Visual North Star

The finished homepage should feel like a combination of:

```text
Luxury automotive editorial
        +
Marrakech travel brand
        +
Modern booking experience
        +
High-end magazine art direction
```

Not:

```text
Car rental template
        +
Gold color
        +
Random animations
```

The core idea is:

> **The website should make renting the car feel like the beginning of the Marrakech experience—not like filling out a generic booking form.**
