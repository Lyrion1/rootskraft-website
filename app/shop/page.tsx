// app/shop/page.tsx
import { redirect } from 'next/navigation';

// This is the main /shop landing page. Since we have collections, 
// we immediately redirect the user to the default collection (Men's).

export default function ShopLandingPage() {
  // Redirect to the Men's Collection
  redirect('/shop/men');
}

// Optional: Metadata for SEO before redirecting
export const metadata = {
  title: 'Shop All Collections | RootHaus Leather',
  description: 'Explore the full range of luxury leather collections from RootHaus: Men, Women, and Pets.',
};
