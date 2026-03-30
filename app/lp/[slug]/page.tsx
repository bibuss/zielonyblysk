import { notFound } from 'next/navigation';
import { QuickLeadForm } from '@/components/LeadForm';
import { adLandingPages, company } from '@/lib/site-data';

export function generateStaticParams() { return adLandingPages.map((l) => ({ slug: l.slug })); }

export default function LandingPage({ params }: { params: { slug: string } }) {
  const lp = adLandingPages.find((x) => x.slug === params.slug);
  if (!lp) return notFound();
  return (
    <main className="section"><div className="container grid gap-8 lg:grid-cols-2"><article><h1 className="text-4xl font-bold tracking-tight">{lp.keyword} — szybki termin i darmowa wycena</h1><p className="mt-3 text-slate-700">Lokalna usługa dla klientów z intencją zakupu. Zadzwoń lub wyślij formularz, a oddzwonimy z konkretną ceną.</p><div className="mt-5 flex gap-3"><a className="btn-primary" href={company.phoneHref}>Zadzwoń: {company.phone}</a><a className="btn-secondary" href="#formularz">Darmowa wycena</a></div><div className="mt-8 card"><h2 className="font-semibold">Korzyści</h2><ul className="mt-2 space-y-1 text-sm"><li>• Szybki dojazd Tarnów + 30 km</li><li>• Doświadczone ekipy i sprzęt</li><li>• Faktura VAT</li><li>• Stała współpraca i jednorazowo</li></ul></div><div className="mt-4 card"><h2 className="font-semibold">Orientacyjny cennik</h2><p className="mt-2 text-sm">Ceny od 180 zł. Finalna wycena zależy od metrażu, stopnia zabrudzenia i częstotliwości.</p></div></article><div id="formularz"><QuickLeadForm /></div></div></main>
  );
}
