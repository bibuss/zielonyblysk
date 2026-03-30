import { notFound } from 'next/navigation';
import { FullLeadForm } from '@/components/LeadForm';
import { segmentPages } from '@/lib/site-data';

export function SegmentPage({ slug }: { slug: string }) {
  const segment = segmentPages.find((s) => s.slug === slug);
  if (!segment) return notFound();

  return (
    <main className="section">
      <div className="container grid gap-8 lg:grid-cols-2">
        <article>
          <h1 className="h2">{segment.title}</h1>
          <p className="mt-4 text-slate-700">{segment.intro}</p>
          <h2 className="mt-8 h3">Najczęstsze problemy klienta</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">{segment.problems.map((p) => <li key={p}>• {p}</li>)}</ul>
          <div className="mt-8 rounded-2xl bg-brand-50 p-5">
            <p className="text-sm font-semibold text-brand-800">{segment.cta}</p>
            <p className="mt-2 text-sm text-slate-700">Wycena i termin bez zobowiązań. Szybka odpowiedź telefoniczna.</p>
          </div>
        </article>
        <div id="formularz"><FullLeadForm /></div>
      </div>
    </main>
  );
}
