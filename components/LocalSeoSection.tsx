import Link from 'next/link';
import { localSeoPages } from '@/lib/site-data';

export function LocalSeoSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Obszar działania i strony lokalne</h2>
        <p className="mt-3 text-slate-700">Każda miejscowość ma unikalny URL, treść i FAQ pod lokalne SEO.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {localSeoPages.map((l) => (
            <Link key={l.slug} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700" href={`/${l.slug}`}>
              {l.city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
