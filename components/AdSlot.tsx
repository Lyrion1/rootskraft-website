'use client';
import { useEffect } from 'react';

declare global { interface Window { adsbygoogle: unknown[] } }

export default function AdSlot({ slotId }: { slotId?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client || !slotId) return; // no envs → no-op
    const existing = document.querySelector('script[data-adsbygoogle]');
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + client;
      s.setAttribute('crossorigin', 'anonymous');
      s.setAttribute('async', '');
      s.setAttribute('data-adsbygoogle', 'true');
      document.head.appendChild(s);
    }
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, [client, slotId]);

  if (!client || !slotId) return null;

  return (
    <ins className="adsbygoogle block my-6"
      style={{ display: 'block' }}
      data-ad-client={client}
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
