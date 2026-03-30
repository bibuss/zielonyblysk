import { LeadForm } from '@/components/LeadForm';

export default function DlaBiznesuPage() {
  return (
    <main className="section">
      <div className="container grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="h2">Oferta dla biznesu i wspólnot mieszkaniowych</h1>
          <p className="mt-4 text-slate-700">
            Tworzymy stabilne kontrakty dla firm, biur, lokali handlowych, wspólnot i zarządców nieruchomości w Tarnowie i
            okolicy do 30 km.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Stała współpraca: codziennie, kilka razy w tygodniu lub harmonogram mieszany.</li>
            <li>• Elastyczne godziny: serwis przed otwarciem, po zamknięciu lub w trybie dziennym.</li>
            <li>• Faktury VAT, opiekun kontraktu, checklisty, raporty i zdjęcia realizacji.</li>
            <li>• Dodatkowe usługi: ozonowanie, mycie elewacji, kostki brukowej i paneli fotowoltaicznych.</li>
          </ul>
        </div>
        <LeadForm />
      </div>
    </main>
  );
}
