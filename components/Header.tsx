import Link from 'next/link';
import { phone } from '@/lib/site-data';

const links = [
  ['Usługi', '/#uslugi'],
  ['Dla biznesu', '/dla-biznesu'],
  ['Cennik', '/cennik'],
  ['Opinie', '/opinie'],
  ['FAQ', '/faq'],
  ['Kontakt', '/kontakt']
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-brand-700">
          Zielony Błysk
        </Link>
        <nav className="hidden gap-5 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-700 hover:text-brand-700">
              {label}
            </Link>
          ))}
        </nav>
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="btn-primary px-4 py-2 text-sm">
          Zadzwoń
        </a>
      </div>
    </header>
  );
}
