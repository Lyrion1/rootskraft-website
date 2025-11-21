// components/ECommerce/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl dark:hover:shadow-secondary/50 border-border/50">
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          quality={80}
        />
      </Link>
      <CardHeader className="p-4 pb-1">
        <h3 className="text-xl font-serif tracking-wider truncate text-primary dark:text-secondary">
          {product.name}
        </h3>
        <p className="text-xs uppercase text-muted-foreground">{product.collection}</p>
      </CardHeader>
      <CardContent className="p-4 pt-1 flex-grow">
        <p className="text-2xl font-bold font-serif">₦{product.price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild size="default" className="w-full tracking-widest">
          <Link href={`/products/${product.slug}`}>View & Order</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
