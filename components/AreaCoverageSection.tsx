import Link from 'next/link';
import { localSeoPages } from '@/lib/site-data';

export function AreaCoverageSection({ city, around }: { city: string; around: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="h3">Obsługujemy również okolice {city}</h2>
      <p className="mt-3 text-slate-700">Regularnie dojeżdżamy też do: {around.join(', ')}.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {localSeoPages.filter((item) => item.city !== city).slice(0, 8).map((item) => (
          <Link key={item.slug} href={`/${item.slug}`} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700">
            {item.city}
          </Link>
        ))}
      </div>
    </section>
  );
}
