// components/Page/FAQSection.tsx
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const faqItems = [
    {
      q: 'What is vegetable-tanned leather?',
      a: "It's leather tanned using natural materials like bark, leaves, and fruit. The process is slow and natural, resulting in leather that develops a beautiful patina over time, making it superior to chrome-tanned leather.",
    },
    {
      q: 'Do you offer international shipping?',
      a: 'Yes, we offer fully tracked and insured global shipping on all orders.',
    },
    {
      q: 'What is your return policy?',
      a: 'We offer a 30-day return window for unworn items in their original packaging.',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-4xl font-serif font-bold text-center mb-10 text-primary dark:text-secondary">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-border/50 p-4">
            <h4 className="flex justify-between items-center text-lg font-semibold cursor-pointer text-foreground hover:text-primary">
              {item.q}
              <ChevronDown className="w-5 h-5 transition-transform" />
            </h4>
            <p className="mt-2 text-muted-foreground leading-relaxed transition-all duration-300 max-h-40 opacity-100">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
