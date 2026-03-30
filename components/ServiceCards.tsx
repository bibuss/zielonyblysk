import Link from 'next/link';
import { services } from '@/lib/site-data';

export function ServiceCards() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Link key={s.slug} href={`/uslugi/${s.slug}`} className="card">
          <p className="font-semibold">{s.name}</p>
          <p className="mt-2 text-sm text-slate-600">{s.lead}</p>
          <p className="mt-3 text-sm text-brand-700">Cena {s.priceFrom}</p>
        </Link>
      ))}
    </div>
  );
}
