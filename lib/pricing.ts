'use server';
import { cookies } from 'next/headers';

// Temporary fallback exchange rates (base currency: NGN)
// These will be replaced by scheduled FX updates in a future iteration
const FALLBACK_RATES: Record<string, number> = {
  USD: 0.0010, EUR: 0.00093, GBP: 0.00078, CAD: 0.0013, AUD: 0.0015,
  SGD: 0.00135, JPY: 0.16, CHF: 0.0009, AED: 0.0037, HKD: 0.0078,
  ZAR: 0.018, NGN: 1
};

export async function formatPrice(baseNgn: number) {
  const c = await cookies();
  const currency = c.get('roothaus.currency')?.value ?? 'NGN';
  const mult = Number(c.get('roothaus.multiplier')?.value ?? '1');
  const rate = FALLBACK_RATES[currency] ?? 1;
  const value = Math.round(baseNgn * mult * rate);
  return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(value);
}

export async function getMultiplier() {
  const c = await cookies();
  return Number(c.get('roothaus.multiplier')?.value ?? '1');
}
