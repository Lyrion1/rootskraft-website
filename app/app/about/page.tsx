// app/about/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import * as SeparatorPrimitive from "@radix-ui/react-separator"

export const metadata: Metadata = {
  title: 'About Us | RootHaus Leather',
  description: 'Learn about RootHaus Leather (Root & Hide Co.), our mission, our commitment to sustainability, and the values that drive our luxury brand.',
};

export default function AboutPage() {
  return (
    <main className="container py-16">
      <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <h1 className="text-6xl font-serif font-extrabold text-primary dark:text-secondary">
          Our Foundation
        </h1>
        <h2 className="text-xl text-muted-foreground">
          The Values of Root & Hide Co.
        </h2>
        <Separator className="w-24 h-1 mx-auto bg-secondary" />
      </header>
      
      <div className="grid md:grid-cols-3 gap-10 mb-20">
        <div className="space-y-4 text-center">
          <h3 className="text-3xl font-serif font-bold text-primary">Heritage</h3>
          <p className="text-muted-foreground">
            Drawing inspiration from Nigerian artistry and the timeless symbolism of the Iroko tree, our designs are built to connect past and present.
          </p>
        </div>
        <div className="space-y-4 text-center">
          <h3 className="text-3xl font-serif font-bold text-primary">Balance</h3>
          <p className="text-muted-foreground">
            We seek equilibrium in all things: between durability and elegance, tradition and modernity, and quality and price.
          </p>
        </div>
        <div className="space-y-4 text-center">
          <h3 className="text-3xl font-serif font-bold text-primary">Craft</h3>
          <p className="text-muted-foreground">
            Only the finest hides, ethically sourced, and meticulously worked by master artisans ensure that every piece is an heirloom, not just an accessory.
          </p>
        </div>
      </div>

      <div className="relative aspect-[16/6] rounded-xl overflow-hidden shadow-2xl dark:shadow-primary/20 mb-20">
        <Image
          src="https://placehold.co/1200x500/5e5e5e/fff?text=AI+Image+Ethical+Leather+Sourcing"
          alt="Wide-angle shot of RootHaus studio"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* FAQ Section Placeholder */}
      <FAQSection /> 
      
    </main>
  );
}

// --- Component Definitions (Included inline for self-containment) ---

// Minimal ShadCN Separator
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

// components/Page/FAQSection.tsx (Included inline for easy copy-paste)
export function FAQSection() {
    const faqItems = [
        { q: "What is vegetable-tanned leather?", a: "It's leather tanned using natural materials like bark, leaves, and fruit. The process is slow and natural, resulting in leather that develops a beautiful patina over time, making it superior to chrome-tanned leather." },
        { q: "Do you offer international shipping?", a: "Yes, we offer fully tracked and insured global shipping on all orders." },
        { q: "What is your return policy?", a: "We offer a 30-day return window for unworn items in their original packaging." },
    ];
    return (
        <section className="py-12">
            <h2 className="text-4xl font-serif font-bold text-center mb-10 text-primary dark:text-secondary">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-border/50 p-4">
                        <h4 className="flex justify-between items-center text-lg font-semibold cursor-pointer text-foreground hover:text-primary">
                            {item.q}
                            <ChevronDown className="w-5 h-5 transition-transform" />
                        </h4>
                        <p className="mt-2 text-muted-foreground leading-relaxed transition-all duration-300 max-h-40 opacity-100">
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
