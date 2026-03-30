import Link from 'next/link';
import { company } from '@/lib/site-data';

const links = [
  ['Usługi', '/#uslugi'],
  ['Dla kogo', '/#segmenty'],
  ['Cennik', '/cennik'],
  ['Opinie', '/opinie'],
  ['Realizacje', '/realizacje'],
  ['Blog', '/blog'],
  ['Kontakt', '/kontakt']
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link href="/" className="text-base font-bold tracking-tight text-brand-700 sm:text-lg">{company.name}</Link>
        <nav className="hidden gap-4 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-700 hover:text-brand-700">{label}</Link>)}
        </nav>
        <a href={company.phoneHref} className="btn-primary px-4 py-2 text-sm" data-track="cta_phone_header">Zadzwoń: {company.phone}</a>
      </div>
    </header>
  );
}
