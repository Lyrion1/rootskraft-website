// app/faq/page.tsx
import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | RootHaus Leather',
  description: 'Frequently Asked Questions about RootHaus Leather products, shipping, returns, and custom orders.',
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: 'Product & Materials',
      items: [
        {
          q: 'What is vegetable-tanned leather?',
          a: "It's leather tanned using natural materials like bark, leaves, and fruit. The process is slow and natural, resulting in leather that develops a beautiful patina over time, making it superior to chrome-tanned leather.",
        },
        {
          q: 'How should I care for my RootHaus leather goods?',
          a: 'Use a soft, dry cloth to wipe off dust. For conditioning, apply leather conditioner sparingly every 3-6 months. Avoid excessive water and direct sunlight. Each product comes with a care guide.',
        },
        {
          q: 'Will my leather product develop a patina?',
          a: 'Yes! Our vegetable-tanned leather develops a rich, unique patina over time, making each piece truly one-of-a-kind. This is a hallmark of quality leather.',
        },
        {
          q: 'What makes RootHaus leather different?',
          a: 'We use premium full-grain vegetable-tanned leather, ethically sourced and hand-crafted by master artisans. Each piece features solid brass hardware and is inspired by Nigerian heritage.',
        },
      ],
    },
    {
      category: 'Orders & Shipping',
      items: [
        {
          q: 'Do you offer international shipping?',
          a: 'Yes, we offer fully tracked and insured global shipping on all orders. Shipping times vary by destination but typically range from 5-14 business days.',
        },
        {
          q: 'How long does it take to process my order?',
          a: 'Standard items ship within 2-3 business days. Custom and bespoke orders take 4-8 weeks depending on complexity.',
        },
        {
          q: 'Can I track my order?',
          a: 'Yes! You will receive a tracking number via email once your order ships. You can track it directly from our website or the carrier\'s site.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards, PayPal, and bank transfers for larger orders. All transactions are secure and encrypted.',
        },
      ],
    },
    {
      category: 'Returns & Exchanges',
      items: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return window for unworn items in their original packaging. Custom and personalized items are non-returnable.',
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact our customer support team at info@rootskraft.com with your order number. We will provide you with a return authorization and shipping label.',
        },
        {
          q: 'Do you offer exchanges?',
          a: 'Yes! If you need a different size or color, contact us within 30 days. We will arrange an exchange at no additional cost (within the same product line).',
        },
      ],
    },
    {
      category: 'Custom & Bespoke Orders',
      items: [
        {
          q: 'Can I customize my order?',
          a: 'Absolutely! We offer monogramming, custom colors, and hardware options. Visit our Custom Orders page to begin your bespoke journey.',
        },
        {
          q: 'How long do custom orders take?',
          a: 'Custom orders typically take 4-8 weeks, depending on the complexity of the design and current workshop capacity.',
        },
        {
          q: 'Can I request a completely unique design?',
          a: 'Yes! For fully bespoke pieces, please contact our design team. We will work with you to create a one-of-a-kind leather good that reflects your vision.',
        },
        {
          q: 'Are custom orders refundable?',
          a: 'Due to the personalized nature of custom and bespoke orders, they are non-refundable. However, we work closely with you throughout the process to ensure complete satisfaction.',
        },
      ],
    },
  ];

  return (
    <main className="container py-16">
      <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <h1 className="text-6xl font-serif font-extrabold text-primary dark:text-secondary">
          Frequently Asked Questions
        </h1>
        <h2 className="text-2xl text-muted-foreground">
          Everything you need to know about RootHaus Leather
        </h2>
        <Separator className="w-24 h-1 mx-auto bg-primary" />
      </header>

      <div className="max-w-4xl mx-auto space-y-12">
        {faqCategories.map((category, catIndex) => (
          <section key={catIndex} className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-primary dark:text-secondary border-b border-border/50 pb-3">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((item, index) => (
                <div key={index} className="border-b border-border/30 pb-4">
                  <h4 className="flex justify-between items-start text-lg font-semibold text-foreground mb-2">
                    <span className="pr-4">{item.q}</span>
                    <ChevronDown className="w-5 h-5 flex-shrink-0 mt-1 text-muted-foreground" />
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 max-w-4xl mx-auto text-center p-8 bg-primary/5 dark:bg-card rounded-xl">
        <h3 className="text-2xl font-serif font-bold mb-4">Still have questions?</h3>
        <p className="text-muted-foreground mb-6">
          Can&apos;t find the answer you&apos;re looking for? Our customer support team is here to help.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
