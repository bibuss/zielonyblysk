import { FAQ } from '@/lib/site-data';

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="mt-6 grid gap-3">
      {items.map((item) => (
        <details key={item.q} className="card">
          <summary className="cursor-pointer font-semibold">{item.q}</summary>
          <p className="mt-2 text-sm text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
