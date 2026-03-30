import Link from 'next/link';
import { locations } from '@/lib/site-data';

export default function AreaPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Obszar działania: Tarnów + 30 km</h1>
        <p className="mt-4 text-slate-700">Działamy na terenie Tarnowa i miejscowości do 30 km. Jeśli Twojej lokalizacji nie ma na liście, wyślij zapytanie — potwierdzimy dostępność terminu.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">{locations.map((l)=><Link href={`/lokalizacje/${l.slug}`} key={l.slug} className="card">Sprzątanie {l.name}</Link>)}</div>
      </div>
    </main>
  );
}
