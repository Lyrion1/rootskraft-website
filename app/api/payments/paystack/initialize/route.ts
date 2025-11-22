import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';
import { getMultiplier } from '@/lib/pricing';

export const runtime = 'nodejs';

type Item = { id: string; qty: number };

export async function POST(req: Request) {
  try {
    const body = await req.json() as { email: string; items: Item[] };
    if (!body?.email || !Array.isArray(body.items)) {
      return NextResponse.json({ message: 'email and items required' }, { status: 400 });
    }

    const multiplier = await getMultiplier();
    const totalNgn = body.items.reduce((sum, it) => {
      const p = PRODUCTS.find(x => x.id === it.id);
      return p ? sum + p.price * (it.qty || 1) * multiplier : sum;
    }, 0);

    if (totalNgn <= 0) return NextResponse.json({ message: 'Cart empty' }, { status: 400 });

    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) {
      return NextResponse.json({ message: 'Payment system not configured' }, { status: 500 });
    }
    const resp = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${secret}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: body.email,
        amount: Math.round(totalNgn * 100), // Kobo
        currency: 'NGN',
        channels: ['card', 'bank_transfer'],
        metadata: { source: 'roothaus', items: body.items }
      })
    });

    const data = await resp.json();
    if (!resp.ok) return NextResponse.json({ message: data?.message || 'Paystack error' }, { status: 400 });

    return NextResponse.json({
      authorization_url: data.data.authorization_url,
      access_code: data.data.access_code,
      reference: data.data.reference
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ message: 'Unexpected error', error: message }, { status: 500 });
  }
}
