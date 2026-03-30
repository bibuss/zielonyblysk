import { pricingTables } from '@/lib/site-data';

export function PricingCards() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {Object.entries(pricingTables).map(([k, rows]) => (
        <div key={k} className="card bg-slate-800 text-slate-100">
          <h3 className="font-semibold capitalize">{k === 'indywidualny' ? 'Klient indywidualny' : k === 'biznes' ? 'Biznes / biura' : 'Wspólnoty / zarządcy'}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {rows.map((row) => (
              <li key={row.pack}><strong>{row.pack}</strong> — {row.price}<br />{row.scope}</li>
            ))}
          </ul>
          <a href="#formularz" className="mt-4 inline-flex text-sm font-semibold text-brand-200">Poproś o wycenę →</a>
        </div>
      ))}
    </div>
  );
}
