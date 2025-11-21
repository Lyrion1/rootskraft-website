// components/Core/Header.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import EmbossedLogo from '../Brand/EmbossedLogo';

const navItems = [
  { href: '/shop', label: 'Shop' },
  { href: '/gift-sets', label: 'Gift Sets' },
  { href: '/lookbook', label: 'Lookbook' },
  { href: '/artisan-story', label: 'Brand Story' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        
        {/* Logo and Home Link */}
        <Link href="/" className="flex items-center space-x-2">
          <EmbossedLogo size="sm" className="p-2"/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-lg font-serif uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/custom-orders" 
            className="text-lg font-serif uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300 font-bold"
          >
            Custom Orders
          </Link>
        </nav>

        {/* Actions and Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="w-6 h-6 text-primary" />
          </Button>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col space-y-3 p-4 bg-background/95">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif tracking-wide py-2 border-b border-border/50 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/custom-orders" 
            onClick={() => setIsOpen(false)}
            className="text-xl font-serif tracking-wide py-2 text-secondary font-bold hover:text-primary transition-colors"
          >
            Custom Orders
          </Link>
        </nav>
      </div>
    </header>
  );
}
