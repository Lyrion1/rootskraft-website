import type { MetadataRoute } from 'next';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const now = new Date();

  const staticRoutes = [
    '', 'blog', 'live/lifestyle', 'subscribe'
  ].map(p => ({ url: `${base}/${p}`, lastModified: now }));

  const categoryRoutes = Object.values(CATEGORIES).map(c => ({
    url: `${base}${c.path}`, lastModified: now
  }));

  const productRoutes = PRODUCTS.map(p => ({
    url: `${base}/shop/products/${p.slug}`, lastModified: now
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
