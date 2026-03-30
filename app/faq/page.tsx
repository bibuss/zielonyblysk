import { siteFaq } from '@/lib/site-data';

export default function FaqPage() {
  return (
    <main className="section">
      <div className="container max-w-4xl">
        <h1 className="h2">FAQ — najczęstsze pytania</h1>
        <div className="mt-6 space-y-3">{siteFaq.map((f)=><details key={f.q} className="card"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-2 text-slate-700">{f.a}</p></details>)}</div>
      </div>
    </main>
  );
}
