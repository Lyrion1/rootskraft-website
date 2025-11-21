// components/Page/ArtisanStorySection.tsx
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function ArtisanStorySection() {
  return (
    <section className="container py-20 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Image Placeholder */}
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl dark:shadow-secondary/20">
        <Image
          src="https://placehold.co/800x1000/3e2723/fff?text=AI+Image+Artisan+Hand+Stitching"
          alt="Artisan at work, hand-stitching luxury leather"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-6">
        <h2 className="text-sm uppercase font-sans tracking-[0.3em] text-secondary font-bold">Root & Hide Co.</h2>
        <h3 className="text-5xl font-serif font-bold leading-tight">
          Where Nigerian Heritage Meets Celestial Alignment.
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The name RootHaus embodies the strength of the Iroko tree and the deep roots of Nigerian craft. Every piece we create—from the Oba Wallet to the Ngozi Handbag—is a symbol of **balance** and **justice**, meticulously crafted using ethically-sourced, luxurious hides.
        </p>
        <p className="text-lg font-serif italic text-foreground/80">
          &quot;The hide tells a story; our hands bring it to life.&quot;
        </p>
        <Button asChild size="lg" variant="outline" className="mt-4 border-primary dark:border-secondary text-primary dark:text-secondary tracking-widest hover:bg-primary/5 dark:hover:bg-secondary/10">
          <Link href="/artisan-story">
            Discover Our Full Story <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
