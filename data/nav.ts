// data/nav.ts
export type NavItem = { label: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: 'COLLECTIONS', href: '/collections' },
  { label: 'GIFT SETS', href: '/gift-sets' },
  { label: 'LOOKBOOK', href: '/lookbook' },
  { label: 'BRAND STORY', href: '/artisan-story' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'CUSTOM ORDERS', href: '/custom-orders' },
  { label: 'BLOG', href: '/blog' }, // keep Blog in header
  // Intentionally NO 'Subscribe' or 'Live' here
];
