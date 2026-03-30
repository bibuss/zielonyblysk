import { faq } from '@/lib/site-data';

export default function FaqPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">FAQ</h1>
        <div className="mt-8 space-y-4">
          {faq.map((item) => (
            <details key={item.q} className="card">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-3 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
