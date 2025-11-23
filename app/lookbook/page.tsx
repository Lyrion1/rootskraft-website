// app/lookbook/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { allProductImageUrls } from '@/data/products';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Lookbook | RootHaus Leather Style Gallery',
  description: 'View the latest RootHaus Leather Lookbook, showcasing our luxury belts, handbags, and accessories in high-fashion settings.',
};

const lookbookImages = [
  { url: allProductImageUrls.lookbookImage, caption: "Ade Belt: The statement piece for celestial balance." },
  { url: allProductImageUrls.ngoziHandbag, caption: "Ngozi Handbag: Elegance rooted in tradition." },
  { url: allProductImageUrls.obaWallet, caption: "Oba Wallet: Power and precision in the palm of your hand." },
  { url: allProductImageUrls.ayoTwinningSet, caption: "Ayo Twinning Set: Shared joy, shared style." },
];

export default function LookbookPage() {
  return (
    <main className="container py-16">
      <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <h1 className="text-6xl font-serif font-extrabold text-primary dark:text-secondary">
          The RootHaus Lookbook
        </h1>
        <h2 className="text-2xl text-muted-foreground">
          A visual journey into the rooted elegance of Root & Hide Co.
        </h2>
        <Separator className="w-24 h-1 mx-auto bg-primary" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lookbookImages.map((item, index) => (
          <figure key={index} className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl dark:shadow-secondary/20 group">
            <Image
              src={item.url}
              alt={item.caption}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-serif italic text-lg">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      
      <div className="text-center pt-20">
        <p className="text-lg italic text-muted-foreground">
          All images are high-fashion concepts and are subject to change.
        </p>
      </div>
    </main>
  );
}
