import { FullLeadForm } from '@/components/LeadForm';
import { pricingTables } from '@/lib/site-data';

export default function PricingPage() {
  return (
    <main className="section">
      <div className="container grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="h2">Cennik usług sprzątania — Tarnów i okolice</h1>
          <p className="mt-4 text-slate-700">Poniżej znajdziesz orientacyjne ceny „od”. Finalna wycena zależy od metrażu, zakresu prac, poziomu zabrudzeń i częstotliwości współpracy.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="card"><h2 className="font-semibold">Klient indywidualny</h2><ul className="mt-2 space-y-2 text-sm">{pricingTables.indywidualny.map((p)=><li key={p.pack}><strong>{p.pack}</strong> — {p.price}<br />{p.scope}</li>)}</ul></div>
            <div className="card"><h2 className="font-semibold">Biznes / biura</h2><ul className="mt-2 space-y-2 text-sm">{pricingTables.biznes.map((p)=><li key={p.pack}><strong>{p.pack}</strong> — {p.price}<br />{p.scope}</li>)}</ul></div>
            <div className="card"><h2 className="font-semibold">Wspólnoty / zarządcy</h2><ul className="mt-2 space-y-2 text-sm">{pricingTables.wspolnoty.map((p)=><li key={p.pack}><strong>{p.pack}</strong> — {p.price}<br />{p.scope}</li>)}</ul></div>
          </div>
          <p className="mt-4 text-sm text-slate-600">Dodatkowo wyceniamy usługi specjalistyczne: mycie okien, pranie tapicerki, elewacje, kostka brukowa, panele PV i ozonowanie.</p>
        </div>
        <div id="formularz"><FullLeadForm /></div>
      </div>
    </main>
  );
}
