import { NextRequest, NextResponse } from 'next/server';
import { getReviews, saveReviews } from '@/lib/cms';
import type { Review } from '@/types';

/** GET /api/admin/reviews */
export async function GET() {
  const reviews = await getReviews();
  return NextResponse.json(reviews);
}

/** POST /api/admin/reviews */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || !body.quote || !body.name) {
    return NextResponse.json({ error: 'Invalid review data' }, { status: 400 });
  }

  const reviews = await getReviews();
  const newReview: Review = {
    id: `review-${Date.now()}`,
    quote: body.quote,
    name: body.name,
    country: body.country ?? '',
    initial: body.initial ?? body.name.charAt(0).toUpperCase(),
    rating: Math.min(5, Math.max(1, Number(body.rating) || 5)),
  };

  await saveReviews([...reviews, newReview]);
  return NextResponse.json(newReview, { status: 201 });
}
