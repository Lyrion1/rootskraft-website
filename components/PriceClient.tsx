'use client';
import { useEffect } from 'react';

export default function PriceClient({ id, base }: { id: string; base: number }) {
  useEffect(() => {
    const el = document.querySelector(`[data-price][data-id="${id}"]`);
    if (!el) return;
    fetch(`/api/price?base=${base}`, { cache: 'no-store' })
      .then(r => r.text()).then(t => (el.textContent = t))
      .catch(() => (el.textContent = 'Price unavailable'));
  }, [id, base]);
  return null;
}
