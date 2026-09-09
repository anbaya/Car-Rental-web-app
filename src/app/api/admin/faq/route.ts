import { NextRequest, NextResponse } from 'next/server';
import { getFaqs, saveFaqs } from '@/lib/cms';
import type { FaqEntry } from '@/types';

/** GET /api/admin/faq */
export async function GET() {
  const faqs = await getFaqs();
  return NextResponse.json(faqs);
}

/** POST /api/admin/faq */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || !body.question || !body.answer) {
    return NextResponse.json({ error: 'Invalid FAQ data' }, { status: 400 });
  }

  const faqs = await getFaqs();
  const newEntry: FaqEntry = {
    id: `faq-${Date.now()}`,
    category: body.category ?? 'General',
    question: body.question,
    answer: body.answer,
    order: body.order ?? faqs.length,
  };

  await saveFaqs([...faqs, newEntry]);
  return NextResponse.json(newEntry, { status: 201 });
}
