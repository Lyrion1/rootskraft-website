// components/Core/Header.tsx
import Link from 'next/link';
import * as React from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import EmbossedLogo from '../Brand/EmbossedLogo';

const navItems = [
  // Shop/Collections is now a submenu item
  { href: '/gift-sets', label: 'Gift Sets' },
  { href: '/lookbook', label: 'Lookbook' },
  { href: '/artisan-story', label: 'Brand Story' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const collectionLinks = [
  { href: '/shop/men', label: 'Men' },
  { href: '/shop/women', label: 'Women' },
  { href: '/shop/pets', label: 'Pets (Dogs & Cats)' },
  { href: '/shop/extras', label: 'Accessories & Homeware' },
];

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        
        {/* Logo and Home Link */}
        <Link href="/" className="flex items-center space-x-2 p-0">
          <EmbossedLogo size="sm" className="p-2"/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center"> 
          
          {/* COLLECTIONS DROPDOWN MENU */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCollectionsOpen(true)}
            onMouseLeave={() => setIsCollectionsOpen(false)}
          >
            <button 
              className="flex items-center text-lg font-serif uppercase tracking-widest cursor-pointer text-foreground hover:text-primary transition-colors duration-300 bg-transparent border-0 p-0"
              aria-expanded={isCollectionsOpen}
              aria-haspopup="true"
            >
              Collections <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200" />
            </button>
            {isCollectionsOpen && (
              <div className="absolute top-full left-0 z-50 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl p-2">
                {collectionLinks.map(link => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="block p-3 text-sm font-sans text-foreground hover:bg-muted/50 rounded-md transition-colors"
                    onClick={() => setIsCollectionsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* OTHER NAV LINKS (Spacing reduced to space-x-6) */}
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
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col space-y-3 p-4 bg-background/95">
          {/* Collections Submenu for Mobile */}
          <h4 className="text-xl font-serif tracking-wide pt-2 border-t border-border/50 text-foreground">Collections</h4>
          {collectionLinks.map(link => (
             <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMobileOpen(false)}
                className="pl-4 text-lg font-sans py-1 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
          ))}

          {/* Other Links for Mobile */}
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsMobileOpen(false)}
              className="text-xl font-serif tracking-wide py-2 border-b border-border/50 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/custom-orders" 
            onClick={() => setIsMobileOpen(false)}
            className="text-xl font-serif tracking-wide py-2 text-secondary font-bold hover:text-primary transition-colors"
          >
            Custom Orders
          </Link>
        </nav>
      </div>
    </header>
  );
}
