'use client';
// components/Core/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { CATEGORIES } from '@/data/categories';
import NavLink from '@/components/NavLink';
import { PRIMARY_NAV } from '@/data/nav';

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-10 py-4">
        
        {/* Logo Patch in Top-Left */}
        <Link href="/" className="flex items-center mr-8">
          <div 
            className="rounded px-3.5 py-2 shadow-md"
            style={{
              backgroundColor: '#a6692c',
              borderRadius: '4px',
              padding: '8px 14px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            <Image
              src="https://res.cloudinary.com/dycotblov/image/upload/v1763859183/6DEFC432-FB86-41D4-912C-94ED93A737FF_dekn4z.png"
              alt="RootHaus Leather logo"
              width={100}
              height={56}
              style={{
                height: '56px',
                width: 'auto'
              }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-6">
            {PRIMARY_NAV.map(item => (
              item.label === 'COLLECTIONS'
                ? (
                  <li key={item.label} className="relative">
                    {/* COLLECTIONS DROPDOWN MENU */}
                    <div 
                      onMouseEnter={() => setIsCollectionsOpen(true)}
                      onMouseLeave={() => setIsCollectionsOpen(false)}
                    >
                      <button 
                        className="flex items-center text-lg font-serif uppercase tracking-widest cursor-pointer text-foreground hover:text-primary transition-colors duration-300 bg-transparent border-0 p-0"
                        aria-expanded={isCollectionsOpen}
                        aria-haspopup="true"
                      >
                        COLLECTIONS <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200" />
                      </button>
                      {isCollectionsOpen && (
                        <div className="absolute top-full left-0 z-[60] mt-0 w-56 bg-card border border-border rounded-lg shadow-xl p-2">
                          <ul>
                            {Object.values(CATEGORIES).map(c => (
                              <li key={c.path} className="px-3 py-2">
                                <NavLink href={c.path}>{c.name}</NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                )
                : item.label === 'CUSTOM ORDERS'
                ? (
                  <li key={item.label}>
                    <NavLink 
                      href={item.href}
                      className="text-lg font-serif uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300 font-bold"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
                : (
                  <li key={item.label}>
                    <NavLink 
                      href={item.href}
                      className="text-lg font-serif uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
            ))}
          </ul>
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
          {Object.values(CATEGORIES).map(c => (
            <NavLink 
              key={c.path} 
              href={c.path}
              onClick={() => setIsMobileOpen(false)}
              className="pl-4 text-lg font-sans py-1 hover:text-primary transition-colors block"
            >
              {c.name}
            </NavLink>
          ))}

          {/* Other Links for Mobile */}
          {PRIMARY_NAV.filter(item => item.label !== 'COLLECTIONS').map((item) => (
            <NavLink 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsMobileOpen(false)}
              className={`text-xl font-serif tracking-wide py-2 border-b border-border/50 hover:text-primary transition-colors ${
                item.label === 'CUSTOM ORDERS' ? 'text-secondary font-bold' : ''
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
