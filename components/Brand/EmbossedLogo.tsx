// components/Brand/EmbossedLogo.tsx
import React from 'react';
import Image from 'next/image';
import { allProductImageUrls } from '@/data/products';
import { cn } from '@/lib/utils';

// The provided RootHaus Logo text:
const LOGO_TEXT = "ROOTHAUS LEATHER";

interface EmbossedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const EmbossedLogo: React.FC<EmbossedLogoProps> = ({ size = 'md', className = '' }) => {
  const textSize = 
    size === 'sm' ? 'text-xl' : 
    size === 'lg' ? 'text-5xl' : 
    size === 'xl' ? 'text-7xl md:text-8xl' : 
    'text-3xl md:text-4xl';

  return (
    <div
      className={cn(
        `relative inline-flex flex-col items-center justify-center rounded-xl overflow-hidden 
        bg-primary/90 dark:bg-dark-bg/80`,
        className
      )}
    >
      {/* Placeholder for the Root Texture Background Overlay */}
      <Image
        src={allProductImageUrls.embossedLogoSet} // Using embossed logo as background texture
        alt="RootHaus Brand Texture"
        fill
        sizes="100vw"
        className="object-cover opacity-10 dark:opacity-5 transition-opacity duration-500"
      />

      <div
        className={cn(
          `${textSize} font-serif tracking-widest uppercase font-extrabold relative z-10`,
          // Custom effect for 'Embossed' look using Tailwind colors and gradients
          // The text color mimics leather embossed and slightly darkened/highlighted
          'text-transparent bg-clip-text bg-gradient-to-br from-secondary/80 to-primary/50 dark:from-white/90 dark:to-secondary/50',
        )}
        style={{
          // Subtle text shadow for depth (Embossed look)
          textShadow: '0 1px 2px rgba(0,0,0,0.4), 0 0 10px rgba(180, 150, 80, 0.2)',
        }}
      >
        {LOGO_TEXT}
      </div>
      <p className="text-sm md:text-lg text-primary-foreground/70 dark:text-secondary/80 mt-2 relative z-10 font-serif italic tracking-wider">
        Root & Hide Co.
      </p>
    </div>
  );
};

export default EmbossedLogo;
