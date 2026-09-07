# CSS Issues — `globals.css`

Two separate bugs, both sitewide. Neither is visible in the JSX — they live entirely in `globals.css`.

---

## 1. Duplicate `:root` blocks with broken color values

There are **two** `:root { ... }` blocks in the file — one starting around **line 3**, another starting around **line 242**. Since they're equal specificity, the second one wins the cascade. Both currently hold the same values, and those values are wrong: the variable *names* match the intended warm/brass luxury palette, but the *values* have been flattened to black/white/gray — likely an invert or grayscale pass that got applied at some point without the names being reconnected to real colors afterward.

### Current vs. correct values

| Variable | Current (broken) | Should be | Why |
|---|---|---|---|
| `--ink` (used as body background) | `#FFFFFF` | `#1B1512` | Site is rendering on a white ground instead of the dark espresso base |
| `--parchment` (used as body text) | `#000000` | `#F4EEE3` | Text is pure black instead of warm sand |
| `--bone` (`.on-bone`, `.bg-bone`) | `#000000` | `#F4EEE3` | Any section/page using `bone` (e.g. the Cars page's `bg-bone`) renders solid black instead of cream |
| `--bone-deep` | `#111111` | `#EFE6D8` | Stacked light panels render near-black instead of a deeper cream |
| `--ink-on-bone` (text on `.on-bone` sections) | `#FFFFFF` | `#241C17` | White text on what should be a light cream background — invisible/inverted |
| `--brass` | `#222222` | `#C79A4B` | Every brass-accented element (buttons, borders, prices, icon strokes — 61 usages) renders dark gray instead of gold |
| `--brass-light` | `#555555` | `#D6AC5E` | Hover/lighter accent state, same issue |
| `--line-on-ink` (hairline on dark backgrounds) | `rgba(0,0,0,0.15)` | `rgba(244,238,227,0.14)` | Black line on a dark background is invisible |
| `--line-on-bone` (hairline on light backgrounds) | `rgba(255,255,255,0.15)` | `rgba(36,28,23,0.14)` | White line on a light background is invisible |
| `--teal` | `#EEEEEE` | *unclear — see note below* | Used once, in a gradient (line ~1328) |

`--teal` only appears once, in `background: linear-gradient(180deg, var(--ink) 0%, var(--ink) 40%, var(--teal) 100%);`. It's not clear what visual effect this was meant to produce — worth checking that section specifically and giving it an intentional value (or removing it if it's leftover).

### Ready-to-paste corrected block

```css
:root {
  --ink: #1B1512;
  --ink-soft: #241C17;
  --bone: #F4EEE3;
  --bone-deep: #EFE6D8;
  --parchment: #F4EEE3;
  --ink-on-bone: #241C17;
  --brass: #C79A4B;
  --brass-light: #D6AC5E;
  --teal: #EEEEEE; /* unresolved — see note above */
  --line-on-ink: rgba(244, 238, 227, 0.14);
  --line-on-bone: rgba(36, 28, 23, 0.14);
  --serif: 'Fraunces', Georgia, serif;
  --sans: 'Manrope', -apple-system, sans-serif;
  --wrap: 1180px;
}
```

**Action:** replace the block at line ~242 (the one that actually wins) with this, then either sync or delete the duplicate at line ~3 so there's only one source of truth going forward.

---

## 2. Wrong font on every major heading

`@import url('...Black+Ops+One...')` at the top of the file loads a bold, blocky display font, and it's applied via `font-family: var(--font-blackops)` in three places — overriding the intended `var(--serif)` (Fraunces) on the site's most prominent text:

| Selector | Approx. line | What it affects |
|---|---|---|
| `.hero h1` | ~568 | The homepage hero headline |
| `.section-head h2` | ~823 | Every section heading sitewide (shared component) |
| `.cars-header h1` | ~1603 | "The Fleet" title on the Cars page |

**Action:** delete the `font-family: var(--font-blackops);` line in each of these three rules. They'll fall through to the base `h1, h2, h3, .display { font-family: var(--serif); }` rule already defined earlier in the file, which is what was intended. If `--font-blackops` and the `.black-ops-one-regular` utility class aren't used anywhere else in the codebase, the `@import` and both can be removed entirely.

---

## Net effect if left as-is

Backgrounds render white or solid black instead of espresso/cream, brass accents render as dark gray, hairline dividers are invisible against their own background, and the three most prominent headline elements sitewide use a mismatched gaming font instead of Fraunces. Fixing the `:root` block and the three font overrides should restore the intended look everywhere at once, since everything else in the CSS is already correctly wired to these same variables.
