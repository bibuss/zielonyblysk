import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/site-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((x) => x.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="section">
      <article className="container max-w-3xl">
        <h1 className="h2">{post.title}</h1>
        <p className="mt-4 text-slate-700">{post.excerpt}</p>
        <h2 className="mt-8 h3">Co wpływa na koszt i jakość usługi?</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• Metraż i stopień zabrudzeń.</li>
          <li>• Zakres usługi (jednorazowo/cyklicznie).</li>
          <li>• Termin realizacji i lokalizacja.</li>
          <li>• Usługi dodatkowe (okna, tapicerka, ozonowanie).</li>
        </ul>
        <p className="mt-6 text-slate-700">Potrzebujesz konkretnej wyceny? Skontaktuj się z nami telefonicznie — przygotujemy ofertę pod Twój przypadek.</p>
      </article>
    </main>
  );
}
