'use client';

import { FormEvent, useState } from 'react';

type FormStatus = { type: 'idle' | 'ok' | 'error'; message?: string };

function pushEvent(event: string, payload: Record<string, string>) {
  if (typeof window === 'undefined') return;
  (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer || [];
  (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({ event, ...payload });
}

export function QuickLeadForm() {
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('imie') || '').trim();
    const phone = String(formData.get('telefon') || '').trim();
    const service = String(formData.get('usluga') || '').trim();
    const location = String(formData.get('lokalizacja') || '').trim();

    if (!name || !phone || !service || !location) {
      setStatus({ type: 'error', message: 'Uzupełnij wszystkie pola formularza.' });
      return;
    }

    setStatus({ type: 'ok', message: 'Dziękujemy! Oddzwonimy tak szybko, jak to możliwe.' });
    pushEvent('lead_form_submit', { form_type: 'quick', service, location });
    event.currentTarget.reset();
  };

  return (
    <form className="card grid gap-3" aria-label="Szybka wycena" onSubmit={onSubmit} noValidate>
      <p className="text-lg font-semibold">Szybka wycena</p>
      <input className="input" placeholder="Imię" name="imie" required />
      <input className="input" placeholder="Telefon" name="telefon" inputMode="tel" required />
      <select className="input" name="usluga" defaultValue="" required>
        <option value="" disabled>Rodzaj usługi</option>
        <option>Sprzątanie mieszkań</option>
        <option>Sprzątanie biur</option>
        <option>Sprzątanie po remoncie</option>
        <option>Sprzątanie wspólnot</option>
      </select>
      <input className="input" placeholder="Lokalizacja" name="lokalizacja" required />
      <button className="btn-primary" type="submit" data-track="cta_quick_estimate">Darmowa wycena</button>
      {status.type !== 'idle' && <p className={`text-sm ${status.type === 'ok' ? 'text-emerald-700' : 'text-red-700'}`}>{status.message}</p>}
    </form>
  );
}

export function FullLeadForm() {
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requiredFields = ['fullname', 'phone', 'email', 'typ_klienta', 'service', 'location'];
    const isValid = requiredFields.every((field) => String(formData.get(field) || '').trim().length > 0);

    if (!isValid || !formData.get('rodo')) {
      setStatus({ type: 'error', message: 'Uzupełnij wymagane pola i zaakceptuj zgodę RODO.' });
      return;
    }

    setStatus({ type: 'ok', message: 'Dziękujemy za zgłoszenie. Wracamy z ofertą najszybciej jak to możliwe.' });
    pushEvent('lead_form_submit', {
      form_type: 'full',
      client_type: String(formData.get('typ_klienta') || ''),
      service: String(formData.get('service') || ''),
      location: String(formData.get('location') || '')
    });
    event.currentTarget.reset();
  };

  return (
    <form className="card grid gap-3" aria-label="Formularz pełnej wyceny" onSubmit={onSubmit} noValidate>
      <p className="text-lg font-semibold">Formularz pełnej wyceny</p>
      <input className="input" placeholder="Imię i nazwisko" name="fullname" required />
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder="Telefon" name="phone" inputMode="tel" required />
        <input className="input" placeholder="E-mail" name="email" type="email" required />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <select className="input" defaultValue="" name="typ_klienta" required>
          <option value="" disabled>Typ klienta</option><option>Klient indywidualny</option><option>Firma / biuro</option><option>Wspólnota / zarządca</option>
        </select>
        <input className="input" placeholder="Rodzaj usługi" name="service" required />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder="Metraż" name="metraz" />
        <input className="input" placeholder="Liczba pomieszczeń" name="rooms" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder="Lokalizacja" name="location" required />
        <input className="input" placeholder="Preferowany termin" name="date" />
      </div>
      <textarea className="input min-h-28" placeholder="Opis zlecenia" name="desc" />
      <label className="text-sm text-slate-600"><input className="mr-2" type="checkbox" name="rodo" />Akceptuję politykę prywatności i przetwarzanie danych (RODO).</label>
      <button className="btn-primary" type="submit" data-track="cta_full_estimate">Wyślij zapytanie</button>
      {status.type !== 'idle' && <p className={`text-sm ${status.type === 'ok' ? 'text-emerald-700' : 'text-red-700'}`}>{status.message}</p>}
      <p className="text-xs text-slate-500">Formularz jest gotowy pod webhook/CRM/e-mail API.</p>
    </form>
  );
}
