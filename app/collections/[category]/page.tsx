import { products, ProductCategory } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import Link from 'next/link';
import PriceClient from '@/components/PriceClient';

type Params = { params: { category: keyof typeof CATEGORIES } };

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export default function CollectionPage({ params }: Params) {
  const key = params.category;
  const categoryData = CATEGORIES[key];
  if (!categoryData) return (<div className="p-10">Category not found.</div>);

  // Filter products by the category field which matches the URL slug
  const items = products.filter(p => p.category === key as ProductCategory);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-semibold mb-6">{categoryData.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => (
          <Link key={p.id} href={`/product/${p.slug}`} className="block border rounded-lg overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.imageUrl} alt={p.name} className="w-full h-56 object-cover"/>
            <div className="p-4">
              <div className="font-medium">{p.name}</div>
              <div data-price data-id={p.id} className="text-sm opacity-80">Loading price…</div>
            </div>
            <PriceClient id={p.id} base={p.price} />
          </Link>
        ))}
      </div>
    </main>
  );
}
