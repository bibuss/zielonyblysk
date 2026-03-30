import Link from 'next/link';
import { QuickLeadForm, FullLeadForm } from '@/components/LeadForm';
import { adLandingPages, blogPosts, company, faq, locations, pricingTables, segmentPages, services } from '@/lib/site-data';

export default function HomePage() {
  return (
    <main>
      <section className="section bg-gradient-to-b from-brand-50 to-white">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200">Tarnów + 30 km • Klienci indywidualni, firmy i wspólnoty</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Sprzątanie mieszkań, biur i po remoncie — Tarnów + 30 km</h1>
            <p className="mt-4 text-lg text-slate-700">Nowoczesna firma sprzątająca nastawiona na szybki kontakt, konkretne terminy i przewidywalny efekt. Obsługa jednorazowa i stała.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a className="btn-primary" href={company.phoneHref}>Zadzwoń teraz</a><a className="btn-secondary" href="#formularz">Darmowa wycena</a></div>
          </div>
          <QuickLeadForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Dla kogo jest Zielony Błysk?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{segmentPages.slice(0, 3).map((s) => <Link key={s.slug} href={`/${s.slug}`} className="card"><h3 className="font-semibold">{s.title}</h3><p className="mt-2 text-sm text-slate-600">{s.intro}</p></Link>)}</div>
        </div>
      </section>

      <section className="section bg-white" id="uslugi"><div className="container"><h2 className="h2">Usługi</h2><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((s)=><Link key={s.slug} href={`/uslugi/${s.slug}`} className="card"><p className="font-semibold">{s.name}</p><p className="mt-2 text-sm text-slate-600">{s.lead}</p></Link>)}</div></div></section>

      <section className="section"><div className="container grid gap-4 md:grid-cols-3"><div className="card"><h3 className="h3">Jak wygląda współpraca</h3><p className="mt-3 text-sm">1. Kontakt 2. Wycena 3. Realizacja 4. Stała opieka lub zamknięcie zlecenia.</p></div><div className="card"><h3 className="h3">Dlaczego my</h3><ul className="mt-3 space-y-2 text-sm"><li>• Szybkie terminy</li><li>• Dojazd Tarnów + 30 km</li><li>• Sprzęt i środki po naszej stronie</li><li>• Faktura VAT</li></ul></div><div className="card"><h3 className="h3">Google Ads ready</h3><p className="mt-3 text-sm">Osobne landing page z mocnym H1, formularzem i sekcją FAQ pod intencję zakupu.</p></div></div></section>

      <section className="section bg-slate-900 text-white"><div className="container"><h2 className="h2 text-white">Cennik orientacyjny</h2><div className="mt-6 grid gap-4 md:grid-cols-3"><div className="card bg-slate-800 text-slate-100"><h3 className="font-semibold">Klient indywidualny</h3><ul className="mt-2 space-y-1 text-sm">{pricingTables.indywidualny.map((p)=><li key={p}>• {p}</li>)}</ul></div><div className="card bg-slate-800 text-slate-100"><h3 className="font-semibold">Biznes / biura</h3><ul className="mt-2 space-y-1 text-sm">{pricingTables.biznes.map((p)=><li key={p}>• {p}</li>)}</ul></div><div className="card bg-slate-800 text-slate-100"><h3 className="font-semibold">Wspólnoty / zarządcy</h3><ul className="mt-2 space-y-1 text-sm">{pricingTables.wspolnoty.map((p)=><li key={p}>• {p}</li>)}</ul></div></div></div></section>

      <section className="section bg-white"><div className="container"><h2 className="h2">FAQ</h2><div className="mt-6 grid gap-3">{faq.map((item)=><details key={item.q} className="card"><summary className="cursor-pointer font-semibold">{item.q}</summary><p className="mt-2 text-sm text-slate-600">{item.a}</p></details>)}</div></div></section>

      <section className="section"><div className="container grid gap-8 lg:grid-cols-2"><div className="card"><h2 className="h2">Obszar działania</h2><p className="mt-3 text-slate-700">Działamy lokalnie: {locations.map((l) => l.name).join(', ')}.</p><div className="mt-4 flex flex-wrap gap-2">{locations.map((l)=><Link key={l.slug} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700" href={`/lokalizacje/${l.slug}`}>{l.name}</Link>)}</div></div><div id="formularz"><FullLeadForm /></div></div></section>

      <section className="section bg-white"><div className="container"><h2 className="h2">Landing pages pod Google Ads</h2><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{adLandingPages.map((lp)=><Link key={lp.slug} href={`/lp/${lp.slug}`} className="card"><p className="font-semibold">{lp.keyword}</p><p className="mt-2 text-sm text-slate-600">Wysoka zgodność reklama → landing → formularz.</p></Link>)}</div></div></section>

      <section className="section"><div className="container"><h2 className="h2">Blog pod SEO</h2><ul className="mt-6 grid gap-3 md:grid-cols-2">{blogPosts.map((p)=><li className="card" key={p}>{p}</li>)}</ul></div></section>
    </main>
  );
}
