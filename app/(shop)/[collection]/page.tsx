// app/(shop)/[collection]/page.tsx
import { products, collections, Product } from '@/data/products';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductGrid from '@/components/ECommerce/ProductGrid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CollectionPageProps {
  params: {
    collection: string;
  };
}

// Generate Static Params for collections
export async function generateStaticParams() {
  return collections.map((c) => ({
    collection: c.toLowerCase().replace(' ', '-'),
  }));
}

// Utility to convert slug back to Title case Collection name
const slugToTitle = (slug: string) => 
  slug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

// Generate Metadata for SEO
export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const collectionName = slugToTitle(params.collection);
  
  // Check if the collection name exists in the product data (ignoring Extras which is a subset)
  if (!collections.includes(collectionName as Product['collection']) && collectionName !== 'Extras') {
     return { title: 'Collection Not Found' };
  }

  return {
    title: `${collectionName} Collection | RootHaus Leather`,
    description: `Explore the luxury ${collectionName} collection from RootHaus Leather, featuring bespoke leather accessories and handcrafted goods.`,
    keywords: `luxury leather, ${collectionName}, RootHaus, Nigerian fashion`,
  };
}


export default function CollectionPage({ params }: CollectionPageProps) {
  const collectionName = slugToTitle(params.collection);
  
  // Cast to Product['collection'] safely after checking
  const collectionKey = collectionName as Product['collection'];
  
  if (!collections.includes(collectionKey) && collectionKey !== 'Extras') {
    notFound();
  }

  const filteredProducts = products.filter(p => p.collection === collectionKey);
  const collectionDescription = {
    Men: "The Ade, Oba, and Ifẹ́ collections. Rooted in power and designed for the modern patriarch. Masculine forms, enduring structure.",
    Women: "The Ngozi, Ezinne, and Chika designs. Embodying grace, strength, and celestial femininity. Soft curves, powerful presence.",
    Pets: "The Odogwu and Temi series. Luxury and comfort for your most cherished companion. Unmatched quality for the rooted relationship.",
    'Gift Sets': "Curated bundles of RootHaus essentials, packaged in bespoke, luxury presentation boxes. The ultimate statement of quality.",
    Extras: "Accessories and unique pieces, including custom dog tags and small leather goods. Perfect additions to your RootHaus collection.",
  }[collectionKey] || "Explore our premium selection of leather goods.";


  return (
    <main className="container py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <h1 className="text-6xl font-serif font-extrabold tracking-tight text-primary dark:text-secondary mb-4">
          The {collectionName} Collection
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {collectionDescription}
        </p>
      </header>

      <ProductGrid products={filteredProducts} />

      {/* CTA to Custom Orders */}
      <section className='text-center pt-20'>
        <h2 className="text-3xl font-serif mb-4">Can&apos;t find what you need?</h2>
        <Button asChild size="lg" variant="default" className="tracking-widest">
            <Link href="/custom-orders">
              Start a Bespoke Order
            </Link>
          </Button>
      </section>
    </main>
  );
}
