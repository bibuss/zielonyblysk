import { FullLeadForm } from '@/components/LeadForm';

export default function DlaBiznesuPage() {
  return (
    <main className="section"><div className="container grid gap-8 lg:grid-cols-2"><div><h1 className="h2">Oferta dla biznesu i wspólnot</h1><p className="mt-4 text-slate-700">To skrót oferty. Pełne podstrony znajdziesz w sekcjach „Dla firm i biur” oraz „Dla wspólnot mieszkaniowych”.</p></div><FullLeadForm /></div></main>
  );
}
