import { NextRequest, NextResponse } from 'next/server';
import { getVehicles, saveVehicles } from '@/lib/cms';
import type { Vehicle } from '@/types';

/** GET /api/admin/vehicles — list all vehicles */
export async function GET() {
  const vehicles = await getVehicles();
  return NextResponse.json(vehicles);
}

/** POST /api/admin/vehicles — add a new vehicle */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || !body.id || !body.name) {
    return NextResponse.json({ error: 'Invalid vehicle data' }, { status: 400 });
  }

  const vehicles = await getVehicles();

  if (vehicles.some((v) => v.id === body.id)) {
    return NextResponse.json({ error: 'Vehicle ID already exists' }, { status: 409 });
  }

  const newVehicle: Vehicle = {
    id: body.id,
    name: body.name,
    type: body.type ?? '',
    pricePerDay: Number(body.pricePerDay) || 0,
    transmission: body.transmission === 'Manual' ? 'Manual' : 'Automatic',
    seats: Number(body.seats) || 5,
    doors: Number(body.doors) || 5,
    fuel: body.fuel ?? 'Petrol',
    hasAc: Boolean(body.hasAc),
    featured: Boolean(body.featured),
    images: Array.isArray(body.images) ? body.images : [],
    description: body.description ?? '',
    included: Array.isArray(body.included) ? body.included : [],
    conditions: Array.isArray(body.conditions) ? body.conditions : [],
  };

  await saveVehicles([...vehicles, newVehicle]);
  return NextResponse.json(newVehicle, { status: 201 });
}
