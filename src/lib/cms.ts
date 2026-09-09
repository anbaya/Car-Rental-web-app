/**
 * CMS Data Access Layer
 *
 * Reads content from `content/*.json` files at runtime.
 * Falls back gracefully to the hardcoded data in `src/lib/data.ts` and
 * `src/lib/faqData.ts` if the JSON files are absent (e.g. fresh clone).
 *
 * All exports are async server-side functions — safe to call from
 * Next.js Server Components and Route Handlers.
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { Vehicle, Review, FaqEntry, SiteConfig } from '@/types';

// ── Path helpers ──────────────────────────────────────────────────────────────

const contentDir = path.join(process.cwd(), 'content');

async function readJson<T>(filename: string): Promise<T | null> {
  try {
    const raw = await fs.readFile(path.join(contentDir, filename), 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    // File missing or malformed — caller handles fallback
    return null;
  }
}

export async function writeJson<T>(filename: string, data: T): Promise<void> {
  await fs.mkdir(contentDir, { recursive: true });
  await fs.writeFile(
    path.join(contentDir, filename),
    JSON.stringify(data, null, 2),
    'utf-8'
  );
}

// ── Vehicles ──────────────────────────────────────────────────────────────────

export async function getVehicles(): Promise<Vehicle[]> {
  const data = await readJson<Vehicle[]>('vehicles.json');
  if (data) return data;

  // Fallback to hardcoded data
  const { cars } = await import('@/lib/data');
  return cars;
}

export async function getVehicleBySlug(slug: string): Promise<Vehicle | undefined> {
  const vehicles = await getVehicles();
  return vehicles.find((v) => v.id === slug);
}

export async function saveVehicles(vehicles: Vehicle[]): Promise<void> {
  await writeJson('vehicles.json', vehicles);
}

// ── Reviews ───────────────────────────────────────────────────────────────────

export async function getReviews(): Promise<Review[]> {
  const data = await readJson<Review[]>('reviews.json');
  if (data) return data;

  // Fallback: return empty array (Reviews component handles empty state)
  return [];
}

export async function saveReviews(reviews: Review[]): Promise<void> {
  await writeJson('reviews.json', reviews);
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

export async function getFaqs(): Promise<FaqEntry[]> {
  const data = await readJson<FaqEntry[]>('faq.json');
  if (data) return [...data].sort((a, b) => a.order - b.order);

  // Fallback from faqData.ts
  const { allFaqs } = await import('@/lib/faqData');
  return allFaqs.flatMap((cat, catIdx) =>
    cat.items.map((item, itemIdx) => ({
      id: `faq-${catIdx}-${itemIdx}`,
      category: cat.category,
      question: item.question,
      answer: item.answer,
      order: catIdx * 100 + itemIdx,
    }))
  );
}

export async function saveFaqs(faqs: FaqEntry[]): Promise<void> {
  await writeJson('faq.json', faqs);
}

// ── Site Config ───────────────────────────────────────────────────────────────

export async function getSiteConfig(): Promise<SiteConfig> {
  const data = await readJson<SiteConfig>('site.json');
  if (data) return data;

  // Fallback
  return {
    name: 'Marrakech Car Rental',
    whatsappNumber: '212655690519',
    locations: ['Marrakech Airport', 'Marrakech City', 'Hotel / Riad', 'Other'],
    businessHours: '24/7',
  };
}

export async function saveSiteConfig(config: SiteConfig): Promise<void> {
  await writeJson('site.json', config);
}
