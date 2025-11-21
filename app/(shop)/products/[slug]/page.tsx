// app/(shop)/products/[slug]/page.tsx
import { products, Product } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Truck, Gem, CheckCircle, Zap } from 'lucide-react';

// ShadCN Imports
// Note: These minimal ShadCN components are included at the bottom of this file 
// for simplicity, rather than creating separate files for each.
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; 

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
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
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
          <p className="text-sm uppercase font-sans tracking-[0.2em] text-muted-foreground">{product.collection} Collection</p>
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-foreground">{product.name}</h1>
          
          <p className="text-4xl font-serif font-bold text-secondary">
            ₦{product.price.toLocaleString()}
          </p>

          <Separator className="bg-border/50" />

          <p className="text-lg leading-relaxed">{product.description}</p>

          {/* Add to Cart / Buy Now */}
          <div className="flex space-x-4 pt-4">
            <Button size="lg" className="flex-1 uppercase font-bold tracking-widest shadow-lg shadow-primary/20">
              Add to Cart
            </Button>
            <Button size="lg" variant="secondary" className="flex-1 uppercase font-bold tracking-widest">
              <Zap className='w-4 h-4 mr-2' /> Buy Now
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
      <section className='pt-20'>
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50 dark:bg-card">
            <TabsTrigger value="description" className='text-base font-serif tracking-wider'>Description</TabsTrigger>
            <TabsTrigger value="details" className='text-base font-serif tracking-wider'>Materials & Details</TabsTrigger>
            <TabsTrigger value="shipping" className='text-base font-serif tracking-wider'>Shipping</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className='pt-6'>
            <h3 className='text-2xl font-serif mb-4'>The Legacy of {product.name}</h3>
            <p className='leading-relaxed'>{product.description}. RootHaus ensures every product reflects the highest standards of luxury and ethical sourcing.</p>
          </TabsContent>
          <TabsContent value="details" className='pt-6'>
            <ul className="space-y-3 text-lg">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-secondary dark:text-primary" />
                  {detail}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="shipping" className='pt-6'>
            <h3 className='text-2xl font-serif mb-4'>Worldwide Delivery and Protection</h3>
            <p className='leading-relaxed'>All RootHaus items are dispatched with fully insured, tracked global courier services. Standard delivery takes 5-7 business days. Custom orders require an additional 2-4 weeks for production before shipping.</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Placeholder for Related Products (using ProductGrid) */}
      <section className="mt-24">
        <h2 className="text-4xl font-serif font-bold mb-10 text-center">More from the {product.collection} Collection</h2>
        <ProductGrid products={products.filter(p => p.collection === product.collection && p.id !== product.id).slice(0, 4)} />
      </section>
    </main>
  );
}

// Minimal ShadCN Components for structure
// These are placed here to avoid creating separate component files for each
import * as React from 'react';
import { cn } from '@/lib/utils';
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import ProductGrid from '@/components/ECommerce/ProductGrid'; 

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator };
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
