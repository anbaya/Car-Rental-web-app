import { NextRequest, NextResponse } from 'next/server';
import { getReviews, saveReviews } from '@/lib/cms';
import type { Review } from '@/types';

type Params = { params: Promise<{ id: string }> };

/** PUT /api/admin/reviews/[id] */
export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const reviews = await getReviews();
  const idx = reviews.findIndex((r) => r.id === id);

  if (idx === -1) {
    return NextResponse.json({ error: 'Review not found' }, { status: 404 });
  }

  const updated: Review = { ...reviews[idx], ...body, id };
  reviews[idx] = updated;
  await saveReviews(reviews);
  return NextResponse.json(updated);
}

/** DELETE /api/admin/reviews/[id] */
export async function DELETE(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const reviews = await getReviews();
  const filtered = reviews.filter((r) => r.id !== id);

  if (filtered.length === reviews.length) {
    return NextResponse.json({ error: 'Review not found' }, { status: 404 });
  }

  await saveReviews(filtered);
  return NextResponse.json({ ok: true });
}
