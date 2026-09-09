# Car Rental Web App - Implementation Tasks

Based on the provided Full Repository Review & Implementation Specification, here is the structured TODO list organized by priority.

## P0: Critical Path (MVP Blockers)
- [x] Consolidate vehicle data into a single source of truth (e.g., `src/lib/data.ts` or `src/data/vehicles.ts`).
- [x] Fix missing image references and standardize asset paths/names (e.g., `dacia-duster-01.webp`).
- [x] Implement dynamic vehicle route (`/cars/[slug]`) and handle invalid vehicles gracefully.
- [x] Implement the full request flow (`/request` form + confirmation summary).
- [x] Consolidate WhatsApp logic (`src/lib/whatsapp.ts`) and ensure clean message generation.
- [x] Fix all fake/dead CTA links across the app (ensure CTAs route to valid pages like `/cars` or `/request`).
- [x] Remove duplicated/conflicting design tokens (CSS variables) in `globals.css`.
- [x] Remove conflicting font imports (e.g., `Black Ops One`) and enforce the use of `Fraunces` & `Manrope`.
- [x] Fix Navbar `aria-expanded` state synchronization.

## P1: Core Experience & Architecture
- [x] Componentize the homepage (move away from a massive `page.tsx` client component into focused child components).
- [x] Remove global continuous scroll state dependency (`use client` scroll event) from the homepage.
- [x] Build the interactive fleet showcase (user-controlled carousel).
- [x] Rebuild premium hero art direction (asymmetric layout, editorial typography, vehicle-focused).
- [x] Perform full responsive mobile QA (menus, inputs, carousels).
- [x] Improve accessibility (keyboard navigation, respect reduced motion).
- [x] Apply SEO best practices (metadata and content hierarchy).

## P2 - P4: Future Considerations (Post-MVP)
- [ ] **P2**: Implement CMS (Only after repeated content bottlenecks).
- [ ] **P2**: Implement real availability system (Only after client demand).
- [ ] **P3**: Build an Admin Dashboard (Only after real booking operations begin).
- [ ] **P3**: Implement Online Payments (Only when commercially required).
- [ ] **P4**: Build SaaS multi-client platform (Only after service-market validation).
