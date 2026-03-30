import Link from 'next/link';
import { company, locations, services } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <p className="font-semibold">{company.name}</p>
          <p className="mt-2 text-sm text-slate-600">Lokalna firma sprzątająca z Tarnowa. Działamy do 30 km.</p>
        </div>
        <div>
          <p className="font-semibold">Kontakt</p>
          <p className="mt-2 text-sm">{company.phone}</p><p className="text-sm">{company.email}</p>
        </div>
        <div>
          <p className="font-semibold">Usługi</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">{services.slice(0, 6).map((s)=><li key={s.slug}><Link href={`/uslugi/${s.slug}`}>{s.short}</Link></li>)}</ul>
        </div>
        <div>
          <p className="font-semibold">Lokalizacje</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">{locations.slice(0, 6).map((l)=><li key={l.slug}><Link href={`/lokalizacje/${l.slug}`}>{l.name}</Link></li>)}</ul>
          <div className="mt-3 text-sm"><Link href="/polityka-prywatnosci">Polityka prywatności</Link> • <Link href="/regulamin">Regulamin</Link></div>
        </div>
      </div>
    </footer>
  );
}
