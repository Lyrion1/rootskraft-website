// app/contact/page.tsx
import { Metadata } from 'next';
import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';


export const metadata: Metadata = {
  title: 'Contact Us | RootHaus Leather',
  description: 'Get in touch with RootHaus Leather (Root & Hide Co.). Contact details for general inquiries, support, and bespoke commissions.',
};

export default function ContactPage() {
  return (
    <main className="container py-16">
      <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <h1 className="text-6xl font-serif font-extrabold text-primary dark:text-secondary">
          Contact RootHaus
        </h1>
        <h2 className="text-2xl text-muted-foreground">
          We are Rooted to Serve You.
        </h2>
        <Separator className="w-24 h-1 mx-auto bg-primary" />
      </header>
      
      <section className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        
        <div className="space-y-4 p-8 border rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow">
          <Mail className="w-10 h-10 mx-auto text-secondary mb-2" />
          <h3 className="text-2xl font-serif font-bold">General Inquiries</h3>
          <p className="text-lg text-muted-foreground">For press, partnerships, and general information.</p>
          <a href="mailto:info@rootskraft.com" className="block text-primary font-semibold hover:text-secondary">info@rootskraft.com</a>
        </div>
        
        <div className="space-y-4 p-8 border rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow">
          <Phone className="w-10 h-10 mx-auto text-secondary mb-2" />
          <h3 className="text-2xl font-serif font-bold">Customer Support</h3>
          <p className="text-lg text-muted-foreground">For order tracking, returns, and product support.</p>
          <a href="tel:+15550123456" className="block text-primary font-semibold hover:text-secondary">+1 (555) 012-3456</a>
        </div>
        
        <div className="space-y-4 p-8 border rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow">
          <MapPin className="w-10 h-10 mx-auto text-secondary mb-2" />
          <h3 className="text-2xl font-serif font-bold">Root & Hide Studio</h3>
          <p className="text-lg text-muted-foreground">Main Workshop & Showroom (By Appointment Only).</p>
          <p className="block text-primary font-semibold">Lagos, Nigeria</p>
        </div>

      </section>

      <section className='mt-20 pt-10 border-t border-border/50 max-w-4xl mx-auto'>
          {/* Map/Contact Form Placeholder */}
          <h2 className="text-4xl font-serif font-bold text-center mb-8">Visit Us (Virtual Tour)</h2>
          <div className="relative aspect-[16/9] bg-muted rounded-xl">
             <p className='absolute inset-0 flex items-center justify-center text-xl text-muted-foreground'>
                [AI Image Placeholder: Elegant Lagos Studio Interior]
             </p>
          </div>
      </section>
    </main>
  );
}
