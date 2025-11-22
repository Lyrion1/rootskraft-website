'use client';
import { useEffect, useState } from 'react';

export type CartItem = { id: string; qty: number };
const KEY = 'roothaus_cart';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem(KEY) || '[]')); }
    catch { setItems([]); }
  }, []);

  const persist = (next: CartItem[]) => {
    setItems(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  return {
    items,
    add: (id: string, qty = 1) => {
      const existing = items.find(i => i.id === id);
      const next = existing
        ? items.map(i => i.id === id ? { ...i, qty: i.qty + qty } : i)
        : [...items, { id, qty }];
      persist(next);
    },
    remove: (id: string) => persist(items.filter(i => i.id !== id)),
    setQty: (id: string, qty: number) =>
      persist(items.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
    clear: () => persist([]),
  };
}
