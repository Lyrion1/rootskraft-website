// app/gift-sets/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductGrid from '@/components/ECommerce/ProductGrid';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Luxury Gift Sets | RootHaus Leather',
  description: 'Curated luxury leather gift sets from RootHaus Leather. Perfect for corporate gifting or milestone celebrations. Includes the Leah Gift Set and Embossed Logo Set.',
};

export default function GiftSetsPage() {
  const giftSets = products.filter(p => p.collection === 'Gift Sets');

  return (
    <main className="container py-16">
      <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <h1 className="text-6xl font-serif font-extrabold text-secondary dark:text-primary">
          Curated Gift Sets
        </h1>
        <h2 className="text-2xl text-muted-foreground">
          The ultimate expression of RootHaus craftsmanship, beautifully packaged.
        </h2>
        <p className='text-lg leading-relaxed'>
          Our gift sets are more than just a collection of items; they are a legacy boxed. Each set is designed to introduce the recipient to the enduring quality and profound aesthetic of Root & Hide Co. Perfect for milestones and corporate gestures.
        </p>
      </header>

      <ProductGrid products={giftSets} />

      <section className='text-center pt-20 border-t border-border/50 mt-20'>
        <h2 className="text-4xl font-serif font-bold mb-4">Need a Corporate or Bespoke Gift?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          For large orders or fully customized sets, please contact our bespoke team.
        </p>
        <Button asChild size="lg" variant="secondary" className="tracking-widest">
            <Link href="/contact">
              Contact Gifting Specialist
            </Link>
          </Button>
      </section>
    </main>
  );
}
