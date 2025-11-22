'use client';
import { useCart } from '@/components/cart/useCart';
import { Button } from '@/components/ui/button';

export function AddToCart({ id }: { id: string }) {
  const { add } = useCart();
  
  return (
    <Button
      size="lg"
      className="flex-1 uppercase font-bold tracking-widest shadow-lg shadow-primary/20"
      onClick={() => add(id, 1)}
    >
      Add to Cart
    </Button>
  );
}
