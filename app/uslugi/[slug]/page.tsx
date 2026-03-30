import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FullLeadForm } from '@/components/LeadForm';
import { company, services } from '@/lib/site-data';

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  return s ? { title: `${s.name} | ${company.name}`, description: `${s.name}. Szybki termin, darmowa wycena i dojazd w promieniu 30 km od Tarnowa.` } : {};
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((x) => x.slug === params.slug);
  if (!service) return notFound();
  return (
    <main className="section"><div className="container grid gap-8 lg:grid-cols-2"><article><h1 className="h2">{service.hero}</h1><p className="mt-3 text-slate-700">{service.lead}</p><p className="mt-4 font-semibold">Cena orientacyjna: {service.priceFrom}</p><h2 className="mt-8 h3">Dla kogo?</h2><ul className="mt-3 space-y-2 text-sm">{service.audience.map((a)=><li key={a}>• {a}</li>)}</ul><h2 className="mt-8 h3">Korzyści</h2><ul className="mt-3 space-y-2 text-sm">{service.benefits.map((b)=><li key={b}>• {b}</li>)}</ul><h2 className="mt-8 h3">Jak realizujemy usługę</h2><ol className="mt-3 space-y-2 text-sm">{service.process.map((p)=><li key={p}>{p}</li>)}</ol><h2 className="mt-8 h3">FAQ</h2>{service.faq.map((f)=><details key={f.q} className="card mt-3"><summary className="font-semibold">{f.q}</summary><p className="mt-2 text-sm">{f.a}</p></details>)}</article><div id="formularz"><FullLeadForm /></div></div></main>
  );
}
