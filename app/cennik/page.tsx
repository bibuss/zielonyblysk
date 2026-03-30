import { pricing } from '@/lib/site-data';

export default function CennikPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Cennik orientacyjny – Tarnów i okolice</h1>
        <p className="mt-3 text-slate-700">Każda wycena jest indywidualna. Podane kwoty mają charakter orientacyjny.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="card"><h2 className="h3">Klient indywidualny</h2><ul className="mt-3 space-y-2 text-sm">{pricing.indywidualni.map((i)=><li key={i}>• {i}</li>)}</ul></div>
          <div className="card"><h2 className="h3">Biznes / biura</h2><ul className="mt-3 space-y-2 text-sm">{pricing.biznes.map((i)=><li key={i}>• {i}</li>)}</ul></div>
          <div className="card"><h2 className="h3">Wspólnoty</h2><ul className="mt-3 space-y-2 text-sm">{pricing.wspolnoty.map((i)=><li key={i}>• {i}</li>)}</ul></div>
        </div>
      </div>
    </main>
  );
}
