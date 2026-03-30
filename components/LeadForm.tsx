export function LeadForm() {
  return (
    <form className="card grid gap-4" aria-label="Formularz wyceny">
      <p className="h3">Wycena w 1 minutę</p>
      <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Imię i nazwisko" />
      <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Telefon" />
      <select className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="">
        <option value="" disabled>
          Typ klienta
        </option>
        <option>Klient indywidualny</option>
        <option>Firma</option>
        <option>Wspólnota</option>
      </select>
      <textarea className="min-h-28 rounded-xl border border-slate-300 px-4 py-3" placeholder="Zakres usługi, metraż, lokalizacja" />
      <button className="btn-primary" type="submit">
        Wyślij prośbę o wycenę
      </button>
    </form>
  );
}
