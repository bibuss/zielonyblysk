import { notFound } from 'next/navigation';
import { services } from '@/lib/site-data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function UslugaPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return notFound();

  return (
    <main className="section">
      <div className="container max-w-4xl">
        <h1 className="h2">{service.name}</h1>
        <p className="mt-4 text-slate-700">
          Usługa {service.name.toLowerCase()} realizowana przez zespół Zielony Błysk. Działamy lokalnie: Tarnów i okolice do
          30 km, z szybkim dojazdem i elastycznymi terminami.
        </p>
        <div className="mt-6 card">
          <h2 className="h3">Co zyskujesz?</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Profesjonalny zespół i procedury jakości premium.</li>
            <li>• Przejrzystą wycenę i opcję stałej współpracy.</li>
            <li>• Rozliczenie B2C i B2B (faktury VAT).</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
