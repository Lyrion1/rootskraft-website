// data/categories.ts
export const CATEGORIES = {
  men: { path: '/collections/men', name: 'Men', collection: 'Men' },
  women: { path: '/collections/women', name: 'Women', collection: 'Women' },
  pets: { path: '/collections/pets', name: 'Pets (Dogs & Cats)', collection: 'Pets' },
  'accessories-homeware': { path: '/collections/accessories-homeware', name: 'Accessories & Homeware', collection: null },
} as const;
