# Cars Page Layout — `/cars`

Built to sit inside the same site as `page.tsx` (the homepage you've already coded) — reuses its classes and tokens rather than inventing a second design language. Where a component already exists (`.marquee-section`, `.car-card`, `.final-cta`, `.reveal`...), this doc says "reuse," not "rebuild."

---

## Design plan

**Color & type** — no new palette. Same warm dark ground / brass accent / "on-bone" cream alternation already in `page.tsx`, same serif-for-headlines-sans-for-body pairing as the hero (`<h1>`, `.section-head h2`).

**Layout** — the homepage sells the fleet; this page is where someone finds a specific car fast. That's a different job, so premium here comes from **restraint**, not decoration: one spotlight moment, the existing sliding marquee, an elevated (not boxed) filter row — not a uniform grid of identically-decorated cards.

**Principle for this page specifically** — a catalog is inherently list-like and functional. The mistake would be forcing homepage flourishes (carousels, big reveal animations) onto every row of a 20+ car grid — that reads as generic SaaS filtering, not luxury. Instead: spend the one "bold" move on a single spotlight card, keep the rest of the grid quiet and fast to scan, and let the filter bar feel like an editorial index rather than a checkbox sidebar.

**Wireframe (desktop)**

```
┌─────────────────────────────────────────────┐
│ Navbar                                       │
├─────────────────────────────────────────────┤
│  CARS HERO — big serif headline, fleet stat  │
├─────────────────────────────────────────────┤
│  ░ sliding brand marquee ░ (reused)          │
├─────────────────────────────────────────────┤
│  Filter bar (sticky, hairline, inline)       │
│  32 cars available            Sort: ▾        │
├───────────────────┬───────────────────────── ┤
│                                               │
│   SPOTLIGHT CARD (2-col span, larger image)  │
│                                               │
├───────────┬───────────┬─────────────────────-┤
│ car-card  │ car-card  │ car-card              │
├───────────┼───────────┼─────────────────────-┤
│ car-card  │ car-card  │ car-card              │
├───────────┴───────────┴─────────────────────-┤
│              Load more →                     │
├─────────────────────────────────────────────┤
│  Closing CTA band (reused .final-cta)        │
├─────────────────────────────────────────────┤
│  Footer                                      │
└─────────────────────────────────────────────┘
```

---

## Section by section

### 1. Navbar
Shared, unchanged.

### 2. Cars hero — `.cars-hero` (new, variant of `.hero`)
- Big serif headline, e.g. *"Every car we rent, in one place."*
- One line of support copy + a live stat: *"32 cars, from city runabouts to airport-ready SUVs."*
- No CTA button here — the whole page below is the CTA. Shorter height than the homepage `.hero` (this is a wayfinding page, not the landing page), and doesn't need the video background — a static warm-gradient panel is enough.
- Reuse `.reveal` on the headline only (one orchestrated load-in), not on anything below.

### 3. Brand marquee — reuse `.marquee-section` exactly as built
Same "The fleet includes" sliding logo strip from the homepage. Don't rebuild it — same component, same track, unchanged. This is the "sliding logos" moment on this page.

### 4. Filter bar — `.filter-bar`, `.filter-field` (new)
- A single horizontal row, not a boxed sidebar card: hairline bottom border, `position: sticky` under the navbar so it stays reachable while scrolling a long grid, background solidifies on scroll (same pattern as the navbar's own scroll behavior).
- Fields (MVP, per the site's filter scope): **Vehicle type**, **Transmission** (Automatic/Manual), **Seats**, **Price range**. Style each with the same `label` + `select` pairing already used in `.search-card .field` on the homepage — same look, just laid out inline instead of stacked.
- A plain text "Clear filters" link at the end, not a button.

### 5. Results bar — `.results-bar`, `.sort-select` (new)
- Left: live count, e.g. *"32 cars available."*
- Right: a minimal sort dropdown — Recommended / Price: low to high / Price: high to low.
- Plain text row, no card, no icons beyond the dropdown chevron.

### 6. Spotlight + grid
- **Spotlight card** — `.car-card.spotlight` (modifier on the existing `.car-card`): spans 2 grid columns, larger `.car-media`, same `.car-body`/`.chip-row`/`.car-foot` structure as every other card. Use it for whichever car the business wants to lead with (most requested, newest, or highest margin) — this is the one deliberate "boldness" spend on the page.
- **Everything else** — the exact `.car-card` / `.car-media` / `.car-body` / `.car-type` / `.chip-row` / `.chip` / `.car-foot` / `.car-price` / `.car-link` markup already built for the homepage's featured carousel, just laid out in a static responsive grid instead of a horizontal `.car-track`: 3 columns desktop, 2 tablet, 1 mobile.
- Don't add `.reveal` to every card in the grid — staggered fade-ins on a 20+ item grid reads as busy, not premium. Reserve `.reveal` for the hero headline and the spotlight card only.

### 7. Pagination — `.pagination` (new)
- A plain "Load more cars" brass text link (matches `.car-link` styling), or if numbered pagination is preferred: hairline-underline numerals with a light-brass active state — not filled circular page-number buttons.

### 8. Closing CTA — reuse `.final-cta` exactly
Same band component as the homepage, page-specific copy: *"Can't decide? Send us your dates and we'll match you to a car."* → WhatsApp button.

### 9. Footer
Shared, unchanged.

---

## New classes needed (everything else already exists in `page.tsx`)

| Class | Purpose |
|---|---|
| `.cars-hero` | Shorter hero variant, no video, one headline + stat line |
| `.filter-bar`, `.filter-field` | Sticky inline filter row, reuses `.field` label/select look |
| `.results-bar`, `.sort-select` | Count + sort, plain text row |
| `.car-card.spotlight` | Modifier: 2-column span, larger media, on one card only |
| `.pagination` | Hairline numeral links or a single "Load more" text link |
