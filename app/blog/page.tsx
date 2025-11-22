// app/blog/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Root & Hide Co.',
  description: 'Insights, stories, and updates from Root & Hide Co.',
};

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Blog</h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Insights, stories, and updates from Root & Hide Co.
        </p>
      </header>

      {/* Placeholder for blog posts grid */}
      <section className="mb-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded mb-4"></div>
            <h2 className="text-xl font-serif font-semibold mb-2">Coming Soon</h2>
            <p className="text-sm opacity-70">Blog posts will be published here soon.</p>
          </div>
        </div>
      </section>

      {/* Optional inline link to the Live feed (kept, not in header) */}
      <div className="mt-10 p-4 rounded border">
        <div className="font-medium mb-1">Roothaus Live</div>
        <p className="text-sm opacity-70">
          Quick drops from the studio & field tests.{' '}
          <Link href="/live/lifestyle" className="underline">See live updates</Link>
        </p>
      </div>

      {/* Subscribe lives on the Blog page only */}
      <section id="subscribe" className="mt-10 p-6 rounded border">
        <h2 className="text-xl font-semibold mb-2">Subscribe for new posts & launches</h2>
        <p className="text-sm opacity-70 mb-4">No spam. Just the good stuff from Roothaus.</p>
        <form name="subscribe" method="POST" data-netlify="true" action="/thank-you" className="flex gap-3 flex-col sm:flex-row">
          <input type="hidden" name="form-name" value="subscribe" />
          <input
            type="email" name="email" required placeholder="you@example.com"
            className="border rounded px-3 py-2 flex-1"
          />
          <button className="px-4 py-2 bg-black text-white rounded" type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}
