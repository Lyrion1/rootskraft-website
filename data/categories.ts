export type CategoryKey =

| 'men' | 'women'
| 'pets' // Pets focuses on Dogs & Cats
| 'accessories-homeware'
| 'boys' | 'girls';

export const CATEGORIES: Record<CategoryKey, { name: string; path: string }> = {
men: { name: 'Men', path: '/collections/men' },
women: { name: 'Women', path: '/collections/women' },
pets: { name: 'Pets (Dogs & Cats)', path: '/collections/pets' },
'accessories-homeware': { name: 'Accessories & Homeware', path: '/collections/accessories-homeware' },
boys: { name: 'Boys', path: '/collections/boys' },
girls: { name: 'Girls', path: '/collections/girls' }
};
