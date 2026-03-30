import Link from 'next/link';
import { blogPosts } from '@/lib/site-data';

export default function BlogPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Blog: poradniki sprzątania w Tarnowie</h1>
        <p className="mt-3 max-w-3xl text-slate-700">Treści wspierające decyzję zakupową klientów indywidualnych, firm i wspólnot. Każdy artykuł jest przygotowany pod lokalne SEO.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article className="card" key={post.slug}>
              <h2 className="font-semibold"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
