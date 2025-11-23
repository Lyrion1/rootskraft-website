// app/artisan-story/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import EmbossedLogo from '@/components/Brand/EmbossedLogo';

export const metadata: Metadata = {
  title: 'Artisan Story | RootHaus Leather Craftsmanship',
  description: 'The story behind RootHaus Leather. Our commitment to Nigerian cultural heritage, ethical sourcing, and the balance of traditional craft with modern luxury.',
};

export default function ArtisanStoryPage() {
  return (
    <main className="container py-16">
      <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <h1 className="text-6xl font-serif font-extrabold text-primary dark:text-secondary">
          Rooted in Craft
        </h1>
        <h2 className="text-2xl text-muted-foreground">
          The Nigerian Soul of RootHaus Leather
        </h2>
        <Separator className="w-24 h-1 mx-auto bg-secondary" />
      </header>

      {/* Full Artisan Story Content */}
      <section className="space-y-16">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/800x600/1e1e1e/fff?text=Image+Root+Symbol+Engraving"
              alt="Root symbol engraved on leather"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className='space-y-6'>
            <h3 className="text-4xl font-serif font-bold">The Meaning of RootHaus</h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              The name RootHaus—Root & Hide Co.—is a synthesis of global luxury
              and profound cultural significance. &apos;Root&apos; honors the
              resilient Iroko tree, a symbol of strength and longevity in West
              Africa, representing our deep connection to heritage.
              &apos;Haus&apos; speaks to the house of craft, where every hide is
              transformed into an heirloom. Our brand is built on the philosophy
              of <strong>balance</strong> and <strong>justice</strong>, mirroring
              the celestial alignment and the equilibrium of nature.
            </p>
          </div>
        </div>

        <Separator className="bg-border/50" />
        
        {/* Craftsmanship Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-4xl font-serif font-bold">
              The Art of the Cognac Hide
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              We exclusively use vegetable-tanned leather, a process that takes
              months but ensures unmatched durability and a patina that deepens
              with character. Our artisans, trained in generations of Nigerian
              leatherwork, apply precise hand-stitching (often utilizing the
              saddle-stitch technique) and finish each edge with hand-painted
              precision. The resulting cognac hue, paired with solid brass
              hardware, defines the RootHaus look.
            </p>
            <p className="text-lg italic font-serif text-secondary">
              &quot;We don&apos;t just craft leather; we sculpt future
              heirlooms.&quot;
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
            <Image
              src="https://placehold.co/800x600/3e2723/fff?text=Image+Solid+Brass+Buckle+Detail"
              alt="Close-up of solid brass buckle"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

      </section>

      <footer className="mt-20 pt-10 text-center border-t border-border/50">
        <EmbossedLogo size="lg" className="mx-auto" />
        <p className="mt-8 text-xl font-serif text-muted-foreground">
          Rooted in Craftsmanship. Aligned with Excellence.
        </p>
      </footer>
    </main>
  );
}
