import { beforeAfterCases } from '@/lib/site-data';

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Realizacje / przed i po</h1>
        <p className="mt-3 text-slate-700">Sekcja oparta o case studies. Możliwość filtrowania: usługa / lokalizacja / typ klienta.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{beforeAfterCases.map((c)=><article className="card" key={c.id}><p className="text-xs text-brand-700">{c.service} • {c.location}</p><h2 className="mt-2 font-semibold">{c.title}</h2><p className="mt-2 text-sm"><strong>Problem:</strong> {c.problem}</p><p className="text-sm"><strong>Zakres:</strong> {c.scope}</p><p className="text-sm"><strong>Efekt:</strong> {c.result}</p></article>)}</div>
      </div>
    </main>
  );
}
