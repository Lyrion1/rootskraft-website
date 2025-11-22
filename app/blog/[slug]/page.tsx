// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AdSlot from '@/components/AdSlot';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug} | Blog | Root & Hide Co.`,
    description: 'Blog post from Root & Hide Co.',
  };
}

export default function BlogPost({ params }: Props) {
  // Placeholder for blog post content
  // In a real implementation, you would fetch the post data here
  const { slug } = params;

  // For now, just show a placeholder
  // In production, you'd fetch real post data and handle 404s properly
  if (!slug) {
    notFound();
  }

  const slotMain = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_MAIN;
  const slotFooter = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_FOOTER;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h1>
          <div className="text-sm opacity-70">
            <time>Coming Soon</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>This blog post is coming soon. Check back later for updates.</p>
        </div>

        {slotMain && <AdSlot slotId={slotMain} />}

        <div className="prose prose-lg max-w-none mt-8">
          <p>More content will be added here.</p>
        </div>

        {slotFooter && <AdSlot slotId={slotFooter} />}
      </article>
    </main>
  );
}
