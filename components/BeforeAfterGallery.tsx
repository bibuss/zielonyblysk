import { beforeAfterCases } from '@/lib/site-data';

export function BeforeAfterGallery() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {beforeAfterCases.map((c) => (
        <article className="card" key={c.id}>
          <p className="text-sm text-brand-700">{c.service} • {c.location}</p>
          <h3 className="mt-2 font-semibold">{c.title}</h3>
          <p className="mt-2 text-sm"><strong>Problem:</strong> {c.problem}</p>
          <p className="mt-2 text-sm"><strong>Zakres:</strong> {c.scope}</p>
          <p className="mt-2 text-sm"><strong>Efekt:</strong> {c.result}</p>
        </article>
      ))}
    </div>
  );
}
