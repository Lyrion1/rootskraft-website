// app/custom-orders/page.tsx
import { Metadata } from 'next';
import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Mail, Zap, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Orders | RootHaus Bespoke Leather',
  description: 'Design your own bespoke luxury leather goods with RootHaus. Start your custom order for unique wallets, bags, belts, and more.',
};

export default function CustomOrdersPage() {
  return (
    <main className="container py-16">
      <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <h1 className="text-6xl font-serif font-extrabold text-secondary dark:text-primary">
          Bespoke Commission
        </h1>
        <h2 className="text-2xl text-muted-foreground">
          Your Vision. Our Hide. Crafted for Your Legacy.
        </h2>
        <Separator className="w-24 h-1 mx-auto bg-secondary" />
      </header>
      
      <section className="max-w-4xl mx-auto space-y-12">
        <p className="text-xl leading-relaxed text-center font-serif italic text-foreground/90">
          RootHaus is proud to offer a bespoke service for clients seeking a truly unique piece. We translate your personal narrative, corporate identity, or aesthetic vision into an enduring work of luxury leather craft.
        </p>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
          <div className="space-y-3 p-6 border rounded-xl shadow-md">
            <Compass className="w-10 h-10 mx-auto text-primary mb-2" />
            <h3 className="text-2xl font-serif font-bold">1. Concept & Alignment</h3>
            <p className="text-sm text-muted-foreground">Share your idea, material preferences (cognac, black, embossed), and desired dimensions with our lead artisan.</p>
          </div>
          <div className="space-y-3 p-6 border rounded-xl shadow-md">
            <Zap className="w-10 h-10 mx-auto text-secondary mb-2" />
            <h3 className="text-2xl font-serif font-bold">2. Design & Prototype</h3>
            <p className="text-sm text-muted-foreground">We develop a digital rendering and select the perfect hide and solid brass/gold hardware for your approval.</p>
          </div>
          <div className="space-y-3 p-6 border rounded-xl shadow-md">
            <Mail className="w-10 h-10 mx-auto text-primary mb-2" />
            <h3 className="text-2xl font-serif font-bold">3. Craft & Delivery</h3>
            <p className="text-sm text-muted-foreground">The piece is hand-crafted, meticulously checked, and shipped to you with an authenticated certificate.</p>
          </div>
        </div>

        {/* CTA Form */}
        <div className="pt-12 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Start Your Commission Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The journey begins with a conversation. Fill out the form below or email us directly.
          </p>
          
          <Button asChild size="lg" variant="default" className="tracking-widest shadow-xl shadow-primary/20">
            <a href="mailto:bespoke@rootskraft.com">
              <Mail className='w-5 h-5 mr-2' /> Email Our Bespoke Team
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
