import Link from 'next/link';
import { company, locations, segmentPages, services } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <p className="font-semibold">{company.name}</p>
          <p className="mt-2 text-sm text-slate-600">Lokalna firma sprzątająca: Tarnów i okolice do 30 km.</p>
          <p className="mt-2 text-sm text-slate-600">{company.address}</p>
        </div>
        <div>
          <p className="font-semibold">Usługi</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">{services.slice(0, 7).map((s)=><li key={s.slug}><Link href={`/uslugi/${s.slug}`}>{s.name}</Link></li>)}</ul>
        </div>
        <div>
          <p className="font-semibold">Ścieżki klientów</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">{segmentPages.slice(0, 5).map((s)=><li key={s.slug}><Link href={`/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <p className="font-semibold">Kontakt i lokalizacje</p>
          <p className="mt-2 text-sm"><a href={company.phoneHref}>{company.phone}</a></p>
          <p className="text-sm"><a href={`mailto:${company.email}`}>{company.email}</a></p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">{locations.slice(0, 6).map((l)=><li key={l.slug}><Link href={`/lokalizacje/${l.slug}`}>Sprzątanie {l.name}</Link></li>)}</ul>
          <div className="mt-3 text-sm"><Link href="/polityka-prywatnosci">Polityka prywatności</Link> • <Link href="/regulamin">Regulamin</Link></div>
        </div>
      </div>
    </footer>
  );
}
