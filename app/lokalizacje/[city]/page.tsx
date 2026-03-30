import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FullLeadForm } from '@/components/LeadForm';
import { company, locations, services } from '@/lib/site-data';

export function generateStaticParams() { return locations.map((l) => ({ city: l.slug })); }
export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = locations.find((x) => x.slug === params.city);
  return city ? { title: `Sprzątanie ${city.name} | ${company.name}`, description: `Firma sprzątająca ${city.name}. Mieszkania, biura, wspólnoty, po remoncie. Darmowa wycena.` } : {};
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const city = locations.find((x) => x.slug === params.city);
  if (!city) return notFound();
  return (
    <main className="section"><div className="container grid gap-8 lg:grid-cols-2"><article><h1 className="h2">Sprzątanie {city.name} — firma sprzątająca Tarnów + 30 km</h1><p className="mt-4 text-slate-700">Obsługujemy klientów indywidualnych, firmy, wspólnoty i zarządców w lokalizacji {city.name}. Realizujemy jednorazowe zlecenia oraz kontrakty abonamentowe.</p><h2 className="mt-8 h3">Najczęściej wybierane usługi w {city.name}</h2><div className="mt-4 grid gap-3 md:grid-cols-2">{services.slice(0,6).map((s)=><Link className="card" key={s.slug} href={`/uslugi/${s.slug}`}>{s.name}</Link>)}</div><p className="mt-6 text-sm text-slate-600">Lokalne SEO: sprzątanie {city.name}, firma sprzątająca {city.name}, sprzątanie mieszkań {city.name} cena.</p></article><div id="formularz"><FullLeadForm /></div></div></main>
  );
}
