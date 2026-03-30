import Link from 'next/link';
import { email, locations, phone } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Zielony Błysk</p>
          <p className="mt-2 text-sm text-slate-600">Premium firma sprzątająca: Tarnów i okolice do 30 km.</p>
        </div>
        <div>
          <p className="font-semibold">Kontakt</p>
          <p className="mt-2 text-sm text-slate-600">tel. {phone}</p>
          <p className="text-sm text-slate-600">{email}</p>
        </div>
        <div>
          <p className="font-semibold">Lokalizacje</p>
          <p className="mt-2 text-sm text-slate-600">{locations.slice(0, 5).join(', ')} i więcej.</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link href="/blog" className="hover:text-brand-700">Blog</Link>
            <Link href="/o-nas" className="hover:text-brand-700">O nas</Link>
            <Link href="/kontakt" className="hover:text-brand-700">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
