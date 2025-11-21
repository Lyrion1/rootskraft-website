// components/Core/Footer.tsx
import Link from 'next/link';
import EmbossedLogo from '../Brand/EmbossedLogo';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Brand Identity */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <EmbossedLogo size="sm" className="p-2 border-none bg-primary/20" />
          <p className="text-sm leading-relaxed max-w-xs">
            Root & Hide Co. is a luxury leather house rooted in Nigerian
            heritage, dedicated to crafting goods of balance and celestial
            elegance.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-secondary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-secondary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-secondary transition-colors" />
            </Link>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div className="space-y-4">
          <h4 className="text-xl font-serif font-bold mb-3 tracking-widest">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/shop/men"
                className="hover:text-secondary transition-colors"
              >
                Men&apos;s Collection
              </Link>
            </li>
            <li>
              <Link
                href="/shop/women"
                className="hover:text-secondary transition-colors"
              >
                Women&apos;s Collection
              </Link>
            </li>
            <li>
              <Link
                href="/shop/pets"
                className="hover:text-secondary transition-colors"
              >
                Pet Collection
              </Link>
            </li>
            <li>
              <Link
                href="/gift-sets"
                className="hover:text-secondary transition-colors"
              >
                Gift Sets
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: RootHaus */}
        <div className="space-y-4">
          <h4 className="text-xl font-serif font-bold mb-3 tracking-widest">
            RootHaus
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/artisan-story"
                className="hover:text-secondary transition-colors"
              >
                Our Craft
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-secondary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/lookbook"
                className="hover:text-secondary transition-colors"
              >
                Lookbook
              </Link>
            </li>
            <li>
              <Link
                href="/custom-orders"
                className="hover:text-secondary transition-colors"
              >
                Bespoke Orders
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div className="space-y-4">
          <h4 className="text-xl font-serif font-bold mb-3 tracking-widest">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/contact"
                className="hover:text-secondary transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-primary-foreground/30 py-4 text-center">
        <p className="text-xs opacity-70">
          &copy; {currentYear} Root & Hide Co. All rights reserved.
          rootskraft.com
        </p>
      </div>
    </footer>
  );
}
