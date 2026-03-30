import Link from 'next/link';
import { QuickLeadForm, FullLeadForm } from '@/components/LeadForm';
import { JsonLd } from '@/components/JsonLd';
import { CTASection } from '@/components/CTASection';
import { ServiceCards } from '@/components/ServiceCards';
import { Testimonials } from '@/components/Testimonials';
import { PricingCards } from '@/components/PricingCards';
import { FAQAccordion } from '@/components/FAQAccordion';
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery';
import { LocalSeoSection } from '@/components/LocalSeoSection';
import { company, segmentPages, siteFaq } from '@/lib/site-data';

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteFaq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <main>
      <section className="section bg-gradient-to-b from-brand-50 to-white">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200">Lokalna firma sprzątająca • Tarnów i okolice do 30 km</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Sprzątanie Tarnów + 30 km: mieszkania, firmy, wspólnoty i zlecenia po remoncie</h1>
            <p className="mt-4 text-lg text-slate-700">Szybki kontakt, uczciwa wycena i czytelne warunki współpracy. Jednorazowo lub cyklicznie — dla domu, biznesu i wspólnot.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href={company.phoneHref} data-track="cta_phone_hero">Zadzwoń teraz</a>
              <a className="btn-secondary" href="#formularz" data-track="cta_quote_hero">Darmowa wycena</a>
            </div>
          </div>
          <QuickLeadForm />
        </div>
      </section>

      <section className="section" id="segmenty">
        <div className="container">
          <h2 className="h2">3 ścieżki, 3 różne potrzeby</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {segmentPages.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="card">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.intro}</p>
                <p className="mt-4 text-sm font-semibold text-brand-700">{s.cta} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="uslugi"><div className="container"><h2 className="h2">Usługi</h2><ServiceCards /></div></section>

      <section className="section bg-slate-900 text-white"><div className="container"><h2 className="h2 text-white">Czytelny cennik i pakiety</h2><PricingCards /></div></section>
      <section className="section bg-white"><div className="container"><h2 className="h2">Realizacje przed / po</h2><BeforeAfterGallery /></div></section>
      <section className="section"><div className="container"><h2 className="h2">Opinie klientów</h2><Testimonials /></div></section>
      <section className="section bg-white"><div className="container"><h2 className="h2">FAQ</h2><FAQAccordion items={siteFaq} /></div></section>

      <LocalSeoSection />

      <section className="section"><div className="container" id="formularz"><FullLeadForm /></div></section>
      <CTASection title="Potrzebujesz szybkiej wyceny?" body="Zadzwoń lub zostaw formularz. Otrzymasz konkretny koszt i najbliższy dostępny termin." />
      <JsonLd data={faqSchema} />
    </main>
  );
}
