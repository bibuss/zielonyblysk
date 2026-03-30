import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FullLeadForm } from '@/components/LeadForm';
import { JsonLd } from '@/components/JsonLd';
import { AreaCoverageSection } from '@/components/AreaCoverageSection';
import { company, localSeoPages, top10SeoLocations } from '@/lib/site-data';

export function generateStaticParams() {
  return localSeoPages.map((page) => ({ localSlug: page.slug }));
}

export function generateMetadata({ params }: { params: { localSlug: string } }): Metadata {
  const page = localSeoPages.find((item) => item.slug === params.localSlug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${company.siteUrl}/${page.slug}`
    }
  };
}

export default function LocalSeoPage({ params }: { params: { localSlug: string } }) {
  const page = localSeoPages.find((item) => item.slug === params.localSlug);
  if (!page) return notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: company.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Lokalizacje', item: `${company.siteUrl}/obszar-dzialania` },
      { '@type': 'ListItem', position: 3, name: page.city, item: `${company.siteUrl}/${page.slug}` }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.localFaq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    telephone: company.phone,
    address: { '@type': 'PostalAddress', streetAddress: company.address, addressLocality: 'Tarnów', addressCountry: 'PL' },
    areaServed: [page.city, ...page.areaCoverage],
    url: `${company.siteUrl}/${page.slug}`
  };

  return (
    <main className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <article>
          <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Obszar działania', href: '/obszar-dzialania' }, { label: page.city }]} />
          <p className="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Lokalna strona SEO • {page.city}</p>
          <h1 className="h2 mt-4">{page.h1}</h1>
          <p className="mt-4 text-slate-700">{page.intro}</p>

          <section className="mt-8">
            <h2 className="h3">Frazy lokalne</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {page.localKeywords.map((keyword) => (
                <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{keyword}</span>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card">
              <h2 className="font-semibold">Jakie usługi wykonujemy</h2>
              <ul className="mt-2 space-y-1 text-sm">{page.services.map((service) => <li key={service}>• {service}</li>)}</ul>
            </div>
            <div className="card">
              <h2 className="font-semibold">Dla kogo</h2>
              <ul className="mt-2 space-y-1 text-sm">{page.audience.map((audience) => <li key={audience}>• {audience}</li>)}</ul>
            </div>
            <div className="card">
              <h2 className="font-semibold">Jak szybko dojeżdżamy</h2>
              <p className="mt-2 text-sm">Standardowy dojazd do {page.city}: <strong>{page.travelTime}</strong>.</p>
            </div>
            <div className="card">
              <h2 className="font-semibold">CTA</h2>
              <p className="mt-2 text-sm">{page.cta}. Zadzwoń lub zostaw formularz i odbierz wycenę jeszcze dziś.</p>
            </div>
          </section>


          <section className="mt-8">
            <h2 className="h3">Dla kogo jest usługa w {page.city}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {page.audienceSections.map((item) => (
                <article className="card" key={item.segment}>
                  <h3 className="font-semibold">{item.segment}</h3>
                  <p className="mt-2 text-sm text-slate-700"><strong>Problem:</strong> {item.pain}</p>
                  <p className="mt-2 text-sm text-slate-700"><strong>Korzyść:</strong> {item.value}</p>
                </article>
              ))}
            </div>
          </section>

          {page.longSections.map((section) => (
            <section key={section.title} className="mt-10">
              <h2 className="h3">{section.title}</h2>
              <p className="mt-3 whitespace-pre-line leading-8 text-slate-700">{section.content}</p>
            </section>
          ))}

          <section className="mt-10">
            <h2 className="h3">FAQ lokalne</h2>
            {page.localFaq.map((faq) => (
              <details className="card mt-3" key={faq.q}>
                <summary className="font-semibold">{faq.q}</summary>
                <p className="mt-2 text-sm text-slate-700">{faq.a}</p>
              </details>
            ))}
          </section>

          <AreaCoverageSection city={page.city} around={page.areaCoverage} />

          <section className="mt-10">
            <h2 className="h3">Inne lokalizacje</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {localSeoPages.filter((item) => item.slug !== page.slug).slice(0, 18).map((item) => (
                <Link key={item.slug} href={`/${item.slug}`} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700">
                  {item.city}
                </Link>
              ))}
            </div>
          </section>

          {top10SeoLocations.includes(page.slug) && (
            <section className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-5">
              <h2 className="font-semibold text-brand-800">TOP 10 lokalizacji — gotowy artykuł SEO</h2>
              <p className="mt-2 text-sm text-brand-900">Ta strona zawiera pełny artykuł lokalny 800+ słów zoptymalizowany pod SEO i konwersję dla fraz transakcyjnych.</p>
            </section>
          )}
        </article>

        <aside id="formularz" className="lg:sticky lg:top-24 lg:self-start">
          <FullLeadForm />
        </aside>
      </div>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />
    </main>
  );
}
