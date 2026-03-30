import { testimonials } from '@/lib/site-data';

export function Testimonials() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {testimonials.map((op) => (
        <article className="card" key={op.name}>
          <p className="text-amber-500">{'★'.repeat(op.stars)}</p>
          <p className="mt-3 text-sm text-slate-700">„{op.text}”</p>
          <p className="mt-3 text-sm font-semibold">{op.name}</p>
          <p className="text-xs text-slate-500">{op.role}</p>
        </article>
      ))}
    </div>
  );
}
