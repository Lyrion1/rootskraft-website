import { NextResponse } from 'next/server';
import { formatPrice } from '@/lib/pricing';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const base = Number(searchParams.get('base') ?? '0');
  return new NextResponse(formatPrice(base), { headers: { 'cache-control': 'no-store' } });
}
