import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FullLeadForm } from '@/components/LeadForm';
import { JsonLd } from '@/components/JsonLd';
import { company, locations, services, siteFaq } from '@/lib/site-data';

export function generateStaticParams() { return locations.map((l) => ({ city: l.slug })); }

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = locations.find((x) => x.slug === params.city);
  if (!city) return {};
  const title = `Sprzątanie ${city.name} | ${company.name}`;
  const description = `Firma sprzątająca ${city.name}. Mieszkania, biura, wspólnoty i sprzątanie po remoncie. Darmowa wycena.`;
  return {
    title,
    description,
    alternates: { canonical: `/lokalizacje/${city.slug}` },
    openGraph: { title, description, url: `${company.siteUrl}/lokalizacje/${city.slug}` }
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const city = locations.find((x) => x.slug === params.city);
  if (!city) return notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: company.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Lokalizacje', item: `${company.siteUrl}/obszar-dzialania` },
      { '@type': 'ListItem', position: 3, name: `Sprzątanie ${city.name}`, item: `${company.siteUrl}/lokalizacje/${city.slug}` }
    ]
  };

  return (
    <main className="section">
      <div className="container grid gap-8 lg:grid-cols-2">
        <article>
          <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Obszar działania', href: '/obszar-dzialania' }, { label: city.name }]} />
          <h1 className="h2">Sprzątanie {city.name} — lokalna firma sprzątająca</h1>
          <p className="mt-4 text-slate-700">Obsługujemy klientów indywidualnych, firmy, wspólnoty i zarządców w lokalizacji {city.name}. Realizujemy zlecenia jednorazowe oraz stałą współpracę abonamentową.</p>

          <h2 className="mt-8 h3">Najczęściej wybierane usługi w {city.name}</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">{services.slice(0,8).map((s)=><Link className="card" key={s.slug} href={`/uslugi/${s.slug}`}>{s.name}</Link>)}</div>

          <h2 className="mt-8 h3">Dlaczego klienci z {city.name} wybierają Zielony Błysk?</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>• Krótki czas reakcji i szybka wycena telefoniczna.</li>
            <li>• Uczciwe pakiety „od” i jasne zasady rozliczeń.</li>
            <li>• Możliwość współpracy jednorazowej oraz cyklicznej.</li>
          </ul>

          <h2 className="mt-8 h3">FAQ lokalne</h2>
          {siteFaq.slice(0, 5).map((f)=><details key={f.q} className="card mt-3"><summary className="font-semibold">{f.q}</summary><p className="mt-2 text-sm">{f.a}</p></details>)}
        </article>
        <div id="formularz"><FullLeadForm /></div>
      </div>
      <JsonLd data={breadcrumbSchema} />
    </main>
  );
}
