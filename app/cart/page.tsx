'use client';

import { useMemo, useState } from 'react';
import * as React from 'react';
import Link from 'next/link';
import { useCart } from '@/components/cart/useCart';
import { PRODUCTS } from '@/data/products';

function Price({ id, base }: { id: string; base: number }) {
  // tiny inline version to avoid extra imports; okay to keep
  const [val, setVal] = useState('Loading…');
  React.useEffect(() => {
    let mounted = true;
    fetch(`/api/price?base=${base}`, { cache: 'no-store' })
      .then(r => r.text())
      .then(t => { if (mounted) setVal(t); })
      .catch(() => { if (mounted) setVal(''); });
    return () => { mounted = false; };
  }, [base]);
  return <span data-price data-id={id}>{val}</span>;
}

export default function CartPage() {
  const { items, setQty, remove, clear } = useCart();
  const [email, setEmail] = useState('');

  const lines = useMemo(() => items.map(it => {
    const p = PRODUCTS.find(x => x.id === it.id);
    return p ? { ...p, qty: it.qty } : null;
  }).filter(Boolean) as (typeof PRODUCTS[number] & { qty: number })[], [items]);

  const subtotalBase = lines.reduce((s, l) => s + l.price * l.qty, 0);

  const checkout = async () => {
    const r = await fetch('/api/payments/paystack/initialize', {
      method: 'POST', headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ email, items })
    });
    const data = await r.json();
    if (!r.ok) { alert(data?.message || 'Unable to start checkout'); return; }
    window.location.href = data.authorization_url;
  };

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {!lines.length ? (
        <div>
          <p>Your cart is empty.</p>
          <Link href="/collections/accessories-homeware" className="underline">Browse products</Link>
        </div>
      ) : (
        <div className="space-y-6">
          <ul className="divide-y">
            {lines.map(l => (
              <li key={l.id} className="py-4 flex items-center gap-4">
                <img src={l.imageUrl} alt={l.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-medium">{l.name}</div>
                  <div className="opacity-80 text-sm">
                    <Price id={`line-${l.id}`} base={l.price} />
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-sm">Qty</label>
                    <input
                      type="number"
                      min={1}
                      value={l.qty}
                      onChange={e => setQty(l.id, Math.max(1, Number(e.target.value) || 1))}
                      className="w-16 border rounded px-2 py-1"
                    />
                    <button onClick={() => remove(l.id)} className="text-sm underline">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center">
            <div className="text-lg">
              Subtotal: <Price id="cart-subtotal" base={subtotalBase} />
            </div>
            <button onClick={clear} className="underline">Clear cart</button>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="email" placeholder="Email for receipt"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              className="border rounded px-3 py-2 flex-1"
            />
            <button onClick={checkout} className="px-4 py-2 rounded bg-black text-white">
              Checkout with Paystack
            </button>
          </div>

          <p className="text-xs opacity-70">
            Prices shown in your local currency; charges are processed in NGN using the same locked subtotal.
          </p>
        </div>
      )}
    </main>
  );
}
