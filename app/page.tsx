import Link from 'next/link';
import { QuickLeadForm, FullLeadForm } from '@/components/LeadForm';
import { JsonLd } from '@/components/JsonLd';
import { beforeAfterCases, company, locations, pricingTables, segmentPages, services, siteFaq, testimonials } from '@/lib/site-data';

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
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Sprzątanie Tarnów: mieszkania, firmy, wspólnoty i zlecenia po remoncie</h1>
            <p className="mt-4 text-lg text-slate-700">Szybki kontakt, uczciwa wycena i czytelne warunki współpracy. Jednorazowo lub cyklicznie — dla domu, biznesu i wspólnot.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href={company.phoneHref} data-track="cta_phone_hero">Zadzwoń teraz</a>
              <a className="btn-secondary" href="#formularz" data-track="cta_quote_hero">Darmowa wycena</a>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl bg-white p-3">Faktura VAT</p>
              <p className="rounded-xl bg-white p-3">Termin 24–48 h</p>
              <p className="rounded-xl bg-white p-3">Obsługa lokalna</p>
            </div>
          </div>
          <QuickLeadForm />
        </div>
      </section>

      <section className="section" id="segmenty">
        <div className="container">
          <h2 className="h2">3 ścieżki, 3 różne potrzeby</h2>
          <p className="mt-3 max-w-3xl text-slate-700">Każdy segment klienta ma oddzielny przekaz, inne korzyści i dedykowany landing, aby skrócić drogę do decyzji i zwiększyć konwersję.</p>
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

      <section className="section bg-white" id="uslugi"><div className="container"><h2 className="h2">Usługi</h2><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((s)=><Link key={s.slug} href={`/uslugi/${s.slug}`} className="card"><p className="font-semibold">{s.name}</p><p className="mt-2 text-sm text-slate-600">{s.lead}</p><p className="mt-3 text-sm text-brand-700">Cena {s.priceFrom}</p></Link>)}</div></div></section>

      <section className="section"><div className="container"><h2 className="h2">Jak wygląda współpraca</h2><div className="mt-6 grid gap-4 md:grid-cols-4">{['Kontakt i szybki brief', 'Wycena i termin', 'Realizacja usługi', 'Potwierdzenie efektu i dalszy plan'].map((step, idx)=><div className="card" key={step}><p className="text-sm font-semibold text-brand-700">Krok {idx + 1}</p><p className="mt-2 font-medium">{step}</p></div>)}</div></div></section>

      <section className="section bg-slate-900 text-white"><div className="container"><h2 className="h2 text-white">Czytelny cennik i pakiety</h2><p className="mt-3 text-slate-200">Ceny orientacyjne „od”. Finalna wycena zależy od metrażu, zakresu, poziomu zabrudzeń i częstotliwości.</p><div className="mt-6 grid gap-4 md:grid-cols-3">{Object.entries(pricingTables).map(([k, rows])=><div key={k} className="card bg-slate-800 text-slate-100"><h3 className="font-semibold capitalize">{k === 'indywidualny' ? 'Klient indywidualny' : k === 'biznes' ? 'Biznes / biura' : 'Wspólnoty / zarządcy'}</h3><ul className="mt-3 space-y-2 text-sm">{rows.map((row)=><li key={row.pack}><strong>{row.pack}</strong> — {row.price}<br />{row.scope}</li>)}</ul><a href="#formularz" className="mt-4 inline-flex text-sm font-semibold text-brand-200">Poproś o wycenę →</a></div>)}</div></div></section>

      <section className="section bg-white"><div className="container"><h2 className="h2">Realizacje przed / po</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{beforeAfterCases.map((c)=><article className="card" key={c.id}><p className="text-sm text-brand-700">{c.service} • {c.location}</p><h3 className="mt-2 font-semibold">{c.title}</h3><p className="mt-2 text-sm"><strong>Problem:</strong> {c.problem}</p><p className="mt-2 text-sm"><strong>Zakres:</strong> {c.scope}</p><p className="mt-2 text-sm"><strong>Efekt:</strong> {c.result}</p></article>)}</div></div></section>

      <section className="section"><div className="container"><h2 className="h2">Opinie klientów</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{testimonials.map((op)=> <article className="card" key={op.name}><p className="text-amber-500">{'★'.repeat(op.stars)}</p><p className="mt-3 text-sm text-slate-700">„{op.text}”</p><p className="mt-3 text-sm font-semibold">{op.name}</p><p className="text-xs text-slate-500">{op.role}</p></article>)}</div></div></section>

      <section className="section bg-white"><div className="container"><h2 className="h2">FAQ</h2><div className="mt-6 grid gap-3">{siteFaq.map((item)=><details key={item.q} className="card"><summary className="cursor-pointer font-semibold">{item.q}</summary><p className="mt-2 text-sm text-slate-600">{item.a}</p></details>)}</div></div></section>

      <section className="section"><div className="container grid gap-8 lg:grid-cols-2"><div className="card"><h2 className="h2">Działamy w Tarnowie i do 30 km</h2><p className="mt-3 text-slate-700">Obsługujemy: {locations.map((l) => l.name).join(', ')} i kolejne miejscowości po stronie południowej i północnej Tarnowa.</p><div className="mt-4 flex flex-wrap gap-2">{locations.map((l)=><Link key={l.slug} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700" href={`/lokalizacje/${l.slug}`}>{l.name}</Link>)}</div></div><div id="formularz"><FullLeadForm /></div></div></section>

      <section className="section bg-brand-700 text-white"><div className="container text-center"><h2 className="h2 text-white">Potrzebujesz szybkiej wyceny?</h2><p className="mx-auto mt-3 max-w-2xl text-brand-100">Zadzwoń lub zostaw formularz. Otrzymasz konkretny koszt i najbliższy dostępny termin.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><a className="btn-secondary" href={company.phoneHref}>Zadzwoń teraz</a><a className="btn-primary bg-white text-brand-700 hover:bg-brand-50" href="#formularz">Darmowa wycena</a></div></div></section>
      <JsonLd data={faqSchema} />
    </main>
  );
}
