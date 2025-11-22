// components/Page/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

export default function HeroSection({ title, subtitle, ctaText, ctaLink, imageUrl }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <Image
        src={imageUrl}
        alt="Luxury Leather Craftsmanship Hero"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />
      
      {/* Overlay for contrast and luxury feel */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center p-4">
        <div className="max-w-4xl text-white space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-sans tracking-wide leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 transition-transform hover:scale-[1.02]">
            <Link href={ctaLink}>
              {ctaText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
