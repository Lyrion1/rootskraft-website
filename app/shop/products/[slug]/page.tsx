// app/shop/products/[slug]/page.tsx
import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Truck, Gem, CheckCircle, Zap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductGrid from '@/components/ECommerce/ProductGrid';
import { AddToCart } from '@/components/ECommerce/AddToCart';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate Static Params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate Metadata for SEO
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | RootHaus Luxury Leather`,
    description: product.description,
    keywords: `luxury leather, ${product.name}, RootHaus, ${product.collection} collection, bespoke leather`,
    openGraph: { images: [product.imageUrl] },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) notFound();

  return (
    <main className="container py-16">
      <section className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl dark:shadow-primary/20 bg-muted/50">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <p className="text-sm uppercase font-sans tracking-[0.2em] text-muted-foreground">
            {product.collection} Collection
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-foreground">
            {product.name}
          </h1>

          <p className="text-4xl font-serif font-bold text-secondary">
            ₦{product.price.toLocaleString()}
          </p>

          <Separator className="bg-border/50" />

          <p className="text-lg leading-relaxed">{product.description}</p>

          {/* Add to Cart / Buy Now */}
          <div className="flex space-x-4 pt-4">
            <AddToCart id={product.id} />
            <Button
              size="lg"
              variant="secondary"
              className="flex-1 uppercase font-bold tracking-widest"
            >
              <Zap className="w-4 h-4 mr-2" /> Buy Now
            </Button>
          </div>

          <Separator className="bg-border/50" />

          {/* Commitment Features */}
          <div className="space-y-4 pt-4 text-sm">
            <div className="flex items-center space-x-4">
              <Truck className="w-5 h-5 text-primary dark:text-secondary" />
              <p>Free, Insured Shipping Worldwide</p>
            </div>
            <div className="flex items-center space-x-4">
              <Gem className="w-5 h-5 text-primary dark:text-secondary" />
              <p>10-Year Craftsmanship Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section (Description, Details, FAQ) */}
      <section className="pt-20">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50 dark:bg-card">
            <TabsTrigger
              value="description"
              className="text-base font-serif tracking-wider"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="text-base font-serif tracking-wider"
            >
              Materials & Details
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="text-base font-serif tracking-wider"
            >
              Shipping
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6">
            <h3 className="text-2xl font-serif mb-4">
              The Legacy of {product.name}
            </h3>
            <p className="leading-relaxed">
              {product.description}. RootHaus ensures every product reflects the
              highest standards of luxury and ethical sourcing.
            </p>
          </TabsContent>
          <TabsContent value="details" className="pt-6">
            <ul className="space-y-3 text-lg">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-secondary dark:text-primary" />
                  {detail}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="shipping" className="pt-6">
            <h3 className="text-2xl font-serif mb-4">
              Worldwide Delivery and Protection
            </h3>
            <p className="leading-relaxed">
              All RootHaus items are dispatched with fully insured, tracked
              global courier services. Standard delivery takes 5-7 business
              days. Custom orders require an additional 2-4 weeks for production
              before shipping.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Placeholder for Related Products (using ProductGrid) */}
      <section className="mt-24">
        <h2 className="text-4xl font-serif font-bold mb-10 text-center">
          More from the {product.collection} Collection
        </h2>
        <ProductGrid
          products={products
            .filter(
              (p) => p.collection === product.collection && p.id !== product.id
            )
            .slice(0, 4)}
        />
      </section>
    </main>
  );
}
