import { NextRequest, NextResponse } from 'next/server';
import { getSiteConfig, saveSiteConfig } from '@/lib/cms';
import type { SiteConfig } from '@/types';

/** GET /api/admin/site */
export async function GET() {
  const config = await getSiteConfig();
  return NextResponse.json(config);
}

/** PUT /api/admin/site */
export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const current = await getSiteConfig();
  const updated: SiteConfig = {
    name: String(body.name ?? current.name),
    email: String(body.email ?? current.email),
    whatsappNumber: String(body.whatsappNumber ?? current.whatsappNumber),
    phoneNumber: String(body.phoneNumber ?? current.phoneNumber ?? current.whatsappNumber),
    address: String(body.address ?? current.address ?? "Route de l'Aéroport, Marrakech"),
    locationUrl: String(body.locationUrl ?? current.locationUrl ?? "https://maps.google.com"),
    locations: Array.isArray(body.locations) ? body.locations : current.locations,
    businessHours: String(body.businessHours ?? current.businessHours),
  };

  await saveSiteConfig(updated);
  return NextResponse.json(updated);
}
