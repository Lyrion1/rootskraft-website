import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const secret = process.env.PAYSTACK_SECRET_KEY!;
  const payload = await req.text(); // raw body
  const sig = req.headers.get('x-paystack-signature') || '';
  const expected = createHmac('sha512', secret).update(payload).digest('hex');

  if (sig !== expected) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
  }

  const event = JSON.parse(payload);

  // TODO: Look up order by event.data.reference and mark as paid in your DB/CMS
  if (event?.event === 'charge.success') {
    console.log('Paystack success:', event?.data?.reference, event?.data?.amount);
  }

  return NextResponse.json({ received: true });
}
