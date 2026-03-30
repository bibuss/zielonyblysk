import Link from 'next/link';

const posts = [
  {
    slug: 'ile-kosztuje-sprzatanie-biura-tarnow',
    title: 'Ile kosztuje sprzątanie biura Tarnów?'
  },
  {
    slug: 'sprzatanie-wspolnot-jak-wybrac-firme',
    title: 'Sprzątanie wspólnot – jak wybrać firmę?'
  },
  {
    slug: 'outsourcing-sprzatania-dla-firm',
    title: 'Outsourcing sprzątania dla firm – korzyści i model wdrożenia'
  }
];

export default function BlogPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Blog: porady i SEO lokalne</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article className="card" key={post.slug}>
              <h2 className="font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">Treść ekspercka dla klientów indywidualnych i B2B z Tarnowa.</p>
              <Link className="mt-4 inline-block text-sm font-semibold text-brand-700" href={`/blog#${post.slug}`}>
                Czytaj więcej
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
