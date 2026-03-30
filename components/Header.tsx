import Link from 'next/link';
import { company } from '@/lib/site-data';

const links = [
  ['Usługi', '/#uslugi'],
  ['Cennik', '/cennik'],
  ['Realizacje', '/realizacje'],
  ['Opinie', '/opinie'],
  ['FAQ', '/faq'],
  ['Kontakt', '/kontakt']
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-brand-700">{company.name}</Link>
        <nav className="hidden gap-4 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-700 hover:text-brand-700">{label}</Link>)}
        </nav>
        <a href={company.phoneHref} className="btn-primary px-4 py-2 text-sm">{company.phone}</a>
      </div>
    </header>
  );
}
