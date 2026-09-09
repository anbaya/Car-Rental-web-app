import { NextRequest, NextResponse } from 'next/server';
import { getFaqs, saveFaqs } from '@/lib/cms';
import type { FaqEntry } from '@/types';

type Params = { params: Promise<{ id: string }> };

/** PUT /api/admin/faq/[id] */
export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const faqs = await getFaqs();
  const idx = faqs.findIndex((f) => f.id === id);

  if (idx === -1) {
    return NextResponse.json({ error: 'FAQ entry not found' }, { status: 404 });
  }

  const updated: FaqEntry = { ...faqs[idx], ...body, id };
  faqs[idx] = updated;
  await saveFaqs(faqs);
  return NextResponse.json(updated);
}

/** DELETE /api/admin/faq/[id] */
export async function DELETE(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const faqs = await getFaqs();
  const filtered = faqs.filter((f) => f.id !== id);

  if (filtered.length === faqs.length) {
    return NextResponse.json({ error: 'FAQ entry not found' }, { status: 404 });
  }

  // Re-order remaining entries
  const reordered = filtered.map((f, i) => ({ ...f, order: i }));
  await saveFaqs(reordered);
  return NextResponse.json({ ok: true });
}
