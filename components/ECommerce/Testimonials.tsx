// components/ECommerce/Testimonials.tsx
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const testimonials = [
  {
    name: "Dr. Olamide A.",
    review: "The Ade Belt is a masterpiece. The brass work is substantial, and the leather quality is simply unmatched. A true investment piece.",
    rating: 5,
  },
  {
    name: "Jane K.",
    review: "My Ngozi Handbag is elegant and holds its shape perfectly. I receive compliments every time I carry it. Luxury defined.",
    rating: 5,
  },
  {
    name: "Tunde I.",
    review: "I customized the Ifẹ́ Dopp Kit, and the RootHaus team delivered perfection. The vintage leather is exactly what I wanted. Exceptional service.",
    rating: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex space-x-0.5 text-secondary">
    {Array(count).fill(0).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-secondary" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="container py-16">
      <h2 className="text-4xl font-serif font-bold text-center mb-12 text-primary dark:text-secondary">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <Card key={index} className="border-secondary/30 dark:border-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-secondary/10">
            <CardHeader className="pb-4">
              <StarRating count={t.rating} />
              <p className="text-xl font-serif font-semibold mt-2">{t.name}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic leading-relaxed">
                &quot;{t.review}&quot;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
