import { NextResponse } from 'next/server';
import { formatPrice } from '@/lib/pricing';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const base = Number(searchParams.get('base') ?? '0');
  
  if (isNaN(base) || base < 0) {
    return new NextResponse('Invalid price', { status: 400 });
  }
  
  return new NextResponse(await formatPrice(base), { headers: { 'cache-control': 'no-store' } });
}
