// app/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/Page/HeroSection';
import ProductGrid from '@/components/ECommerce/ProductGrid';
import ArtisanStorySection from '@/components/Page/ArtisanStorySection';
import Testimonials from '@/components/ECommerce/Testimonials';
import { products, allProductImageUrls } from '@/data/products';
import EmbossedLogo from '@/components/Brand/EmbossedLogo';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'RootHaus Leather | Rooted in Craftsmanship. Aligned with Excellence.',
  description: 'RootHaus Leather - Rooted in Craftsmanship. Explore our luxury collection of wallets, belts, and handbags inspired by Nigerian heritage and celestial balance.',
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 4); // Show first 4 products 

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection
        title="Rooted in Craftsmanship. Aligned with Excellence."
        subtitle="Luxury leather goods inspired by Nigerian heritage and the celestial quest for balance and justice."
        ctaText="Shop The Collections"
        ctaLink="/shop"
        imageUrl={allProductImageUrls.heroImage}
      />

      <div className="container py-16 space-y-28 md:space-y-40">
        
        {/* 2. Featured Products */}
        <section>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-center mb-16 text-primary dark:text-secondary">
            Featured Masterpieces
          </h2>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary dark:border-secondary text-primary dark:text-secondary tracking-widest hover:bg-primary/5 dark:hover:bg-secondary/10">
              <Link href="/shop">
                View All Collections
              </Link>
            </Button>
          </div>
        </section>

        {/* 3. Artisan Story Section */}
        <ArtisanStorySection />

        {/* 4. Brand Identity / Embossed Logo */}
        <section className="flex justify-center py-16">
          <div className="text-center space-y-6 max-w-2xl">
            <h3 className="text-3xl font-serif font-semibold">The Sign of True Craftsmanship</h3>
            <EmbossedLogo size="xl" />
            <p className="text-lg text-muted-foreground mx-auto">
              Our embossed mark is a tribute to the celestial alignment and the deep-seated root symbols of our heritage. Look for the sign of RootHaus.
            </p>
          </div>
        </section>

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. Call to Action for Custom Orders */}
        <section className="text-center p-16 md:p-24 bg-primary dark:bg-card text-primary-foreground dark:text-foreground rounded-xl shadow-2xl shadow-primary/30 dark:shadow-secondary/10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Your Vision, Our Hide.</h2>
          <p className="text-xl mb-8 opacity-90">
            Begin the journey to your bespoke, one-of-a-kind leather creation, tailored to your personal alignment.
          </p>
          <Button asChild variant="secondary" size="lg" className="uppercase font-bold tracking-widest text-primary hover:scale-[1.05]">
            <Link href="/custom-orders">
              Start a Custom Order
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
