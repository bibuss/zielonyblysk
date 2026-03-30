import { LeadForm } from '@/components/LeadForm';
import { phone, email } from '@/lib/site-data';

export default function KontaktPage() {
  return (
    <main className="section">
      <div className="container grid gap-8 lg:grid-cols-2">
        <div className="card">
          <h1 className="h2">Kontakt</h1>
          <p className="mt-4 text-slate-700">Telefon: {phone}</p>
          <p className="text-slate-700">Email: {email}</p>
          <p className="mt-4 text-slate-700">Działamy: Tarnów i okolice do 30 km.</p>
        </div>
        <LeadForm />
      </div>
    </main>
  );
}
