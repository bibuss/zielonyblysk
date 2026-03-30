import { FullLeadForm } from '@/components/LeadForm';
import { pricingTables } from '@/lib/site-data';

export default function CennikPage() {
  return (
    <main className="section"><div className="container grid gap-8 lg:grid-cols-3"><div className="lg:col-span-2"><h1 className="h2">Cennik usług sprzątania — Tarnów i okolice</h1><p className="mt-4 text-slate-700">Podane ceny są orientacyjne. Finalna wycena zależy od metrażu, stopnia zabrudzenia, częstotliwości i rodzaju usługi.</p><div className="mt-6 grid gap-4 md:grid-cols-3"><div className="card"><h2 className="font-semibold">Klient indywidualny</h2><ul className="mt-2 space-y-1 text-sm">{pricingTables.indywidualny.map((p)=><li key={p}>• {p}</li>)}</ul></div><div className="card"><h2 className="font-semibold">Biznes / biura</h2><ul className="mt-2 space-y-1 text-sm">{pricingTables.biznes.map((p)=><li key={p}>• {p}</li>)}</ul></div><div className="card"><h2 className="font-semibold">Wspólnoty / zarządcy</h2><ul className="mt-2 space-y-1 text-sm">{pricingTables.wspolnoty.map((p)=><li key={p}>• {p}</li>)}</ul></div></div></div><div id="formularz"><FullLeadForm /></div></div></main>
  );
}
