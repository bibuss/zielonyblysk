export function QuickLeadForm() {
  return (
    <form className="card grid gap-3" aria-label="Szybka wycena">
      <p className="text-lg font-semibold">Szybka wycena</p>
      <input className="input" placeholder="Imię" name="imie" />
      <input className="input" placeholder="Telefon" name="telefon" />
      <select className="input" name="usluga" defaultValue="">
        <option value="" disabled>Rodzaj usługi</option>
        <option>Sprzątanie mieszkań</option>
        <option>Sprzątanie biur</option>
        <option>Sprzątanie po remoncie</option>
        <option>Sprzątanie wspólnot</option>
      </select>
      <input className="input" placeholder="Lokalizacja" name="lokalizacja" />
      <button className="btn-primary" type="submit">Darmowa wycena</button>
    </form>
  );
}

export function FullLeadForm() {
  return (
    <form className="card grid gap-3" aria-label="Formularz pełnej wyceny">
      <p className="text-lg font-semibold">Formularz pełnej wyceny</p>
      <input className="input" placeholder="Imię i nazwisko" name="fullname" />
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder="Telefon" name="phone" />
        <input className="input" placeholder="E-mail" name="email" type="email" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <select className="input" defaultValue="" name="typ_klienta">
          <option value="" disabled>Typ klienta</option><option>Indywidualny</option><option>Firma</option><option>Wspólnota</option>
        </select>
        <input className="input" placeholder="Rodzaj usługi" name="service" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder="Metraż" name="metraz" />
        <input className="input" placeholder="Liczba pomieszczeń" name="rooms" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder="Lokalizacja" name="location" />
        <input className="input" placeholder="Preferowany termin" name="date" />
      </div>
      <textarea className="input min-h-28" placeholder="Opis zlecenia" name="desc" />
      <label className="text-sm text-slate-600"><input className="mr-2" type="checkbox" />Akceptuję politykę prywatności (RODO).</label>
      <button className="btn-primary" type="submit">Wyślij zapytanie</button>
    </form>
  );
}
