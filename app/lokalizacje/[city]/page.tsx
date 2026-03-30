import { notFound } from 'next/navigation';

const cities = ['tarnow', 'moscice', 'skrzyszow', 'wierzchoslawice', 'lisia-gora', 'zabno', 'tuchow', 'dabrowa-tarnowska'];

export function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export default function CityPage({ params }: { params: { city: string } }) {
  if (!cities.includes(params.city)) return notFound();

  const cityLabel = params.city.replace('-', ' ');

  return (
    <main className="section">
      <div className="container max-w-4xl">
        <h1 className="h2">Firma sprzątająca {cityLabel}</h1>
        <p className="mt-4 text-slate-700">
          Zielony Błysk świadczy usługi sprzątania w lokalizacji {cityLabel} oraz w okolicach Tarnowa. Obsługujemy mieszkania,
          domy, biura, wspólnoty i obiekty usługowe.
        </p>
      </div>
    </main>
  );
}
