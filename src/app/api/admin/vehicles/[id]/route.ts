import { NextRequest, NextResponse } from 'next/server';
import { getVehicles, saveVehicles } from '@/lib/cms';
import type { Vehicle } from '@/types';

type Params = { params: Promise<{ id: string }> };

/** PUT /api/admin/vehicles/[id] — update a vehicle */
export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const vehicles = await getVehicles();
  const idx = vehicles.findIndex((v) => v.id === id);

  if (idx === -1) {
    return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 });
  }

  const updated: Vehicle = {
    ...vehicles[idx],
    ...body,
    id, // id is immutable
    pricePerDay: Number(body.pricePerDay ?? vehicles[idx].pricePerDay),
    seats: Number(body.seats ?? vehicles[idx].seats),
    doors: Number(body.doors ?? vehicles[idx].doors),
  };

  vehicles[idx] = updated;
  await saveVehicles(vehicles);
  return NextResponse.json(updated);
}

/** DELETE /api/admin/vehicles/[id] — remove a vehicle */
export async function DELETE(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const vehicles = await getVehicles();
  const filtered = vehicles.filter((v) => v.id !== id);

  if (filtered.length === vehicles.length) {
    return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 });
  }

  await saveVehicles(filtered);
  return NextResponse.json({ ok: true });
}
