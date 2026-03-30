import { testimonials } from '@/lib/site-data';

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Opinie klientów</h1>
        <p className="mt-3 text-slate-700">Sekcja gotowa do integracji z opiniami Google (średnia ocen, liczba opinii, automatyczna synchronizacja).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{testimonials.map((r)=><article className="card" key={r.name}><p className="text-amber-500">{'★'.repeat(r.stars)}</p><p className="mt-2 text-sm">{r.text}</p><p className="mt-3 text-sm font-semibold">{r.name}</p><p className="text-xs text-slate-500">{r.role}</p></article>)}</div>
      </div>
    </main>
  );
}
