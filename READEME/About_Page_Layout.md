# About Page Layout — `/about`

Reuses `.page-header` (generalized from `.cars-header`), `.trust-row`/`.trust-row.reverse`, `.chip`/`.chip-row`, and `.final-cta` — no new visual language, one genuinely new component (`.stats-row`).

---

## Design plan

**Header:** you already built the right pattern for this on the Cars page — `.cars-header` (dark band, big serif h1, one line of copy, an offset decorative graphic with scroll parallax). Worth generalizing that into a shared `.page-header` class now, since About wants the exact same treatment, and Contact/FAQ likely will too later. Saves rebuilding it three times.

**Narrative sections:** `.trust-row` / `.trust-row.reverse` again — same component doing "Why people rebook with us" on the homepage. About is a story-and-values page, which is exactly what that alternating image/text layout is for.

**Content honesty:** this is a small, hands-on operation, not a large corporate fleet — the copy should lean into that as a positive ("a small fleet, personally inspected between every rental") rather than reaching for corporate-scale language ("our team of experts") that isn't true yet. Don't invent stats, headcounts, or years of operation that aren't real — the placeholders below are marked clearly so you know to swap them.

**New:** a `.stats-row` — three plain numbers with labels, hairline dividers between them, big serif numerals. No icon boxes, no cards — the restraint is the point.

---

## Section by section

### 1. Navbar
Shared, unchanged.

### 2. Page header — reuse/generalize `.cars-header` → `.page-header`
- e.g. *"About us"* + one line: *"A small fleet, and someone who actually answers the phone."*
- Same dark band, same serif treatment. The decorative wheel motif from the Cars header is optional here — About is more about the people than the cars, so it's fine to drop the graphic and let the header be quieter (text only).

### 3. Story — `.trust-row`
*"Why we started"* — the actual origin story, image on one side, narrative text on the other. This is the one section where a genuine, specific story (not generic "passion for service" copy) will do more for trust than anything else on the page.

### 4. Values — `.trust-row.reverse` + `.chip-row`
*"What we promise"* — short paragraph, then a row of `.chip` tags for the concrete commitments already established elsewhere in the site's copy: e.g. *Transparent pricing*, *No hidden fees*, *WhatsApp support*, *Airport pickup*. Reuses the exact chip styling from the car cards — same visual language, different content.

### 5. Stats — `.stats-row` (new)
Three items, plain text, big serif numerals, hairline dividers between them — no icons, no boxes. Only use numbers you can actually stand behind:
```
[  6 cars  ]  |  [  Est. 2026  ]  |  [  Marrakech-based  ]
```
Placeholder values above — swap for whatever's true when this ships.

### 6. Fleet nod — `.trust-row`
Short blurb pointing back at `/cars` — *"See what's available"* with a text link, not a repeat of the fleet grid. This page's job is trust, not browsing.

### 7. Final CTA
Reuse `.final-cta` exactly — same band, page-specific line: *"Questions before you book? Ask us directly."*

### 8. Footer
Shared, unchanged.

---

## New/changed classes

| Class | Purpose | Status |
|---|---|---|
| `.page-header` | Generalized from `.cars-header` for reuse across About/Contact/FAQ | Rename/generalize existing |
| `.trust-row`, `.trust-row.reverse` | Story + values sections | Reused as-is |
| `.chip`, `.chip-row` | Value tags | Reused as-is |
| `.stats-row` | Three-stat band, hairline dividers | New |
| `.final-cta` | Closing CTA | Reused as-is |
