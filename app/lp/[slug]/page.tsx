import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { QuickLeadForm } from '@/components/LeadForm';
import { adLandingPages, beforeAfterCases, company, siteFaq, testimonials } from '@/lib/site-data';

export function generateStaticParams() { return adLandingPages.map((l) => ({ slug: l.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lp = adLandingPages.find((x) => x.slug === params.slug);
  if (!lp) return {};
  const title = `${lp.keyword} | Landing Google Ads`;
  const description = `${lp.keyword} - szybka wycena, telefon above the fold i formularz leadowy.`;
  return { title, description, alternates: { canonical: `/lp/${lp.slug}` } };
}

export default function LandingPage({ params }: { params: { slug: string } }) {
  const lp = adLandingPages.find((x) => x.slug === params.slug);
  if (!lp) return notFound();

  return (
    <main className="section">
      <div className="container grid gap-8 lg:grid-cols-2">
        <article>
          <h1 className="text-4xl font-bold tracking-tight">{lp.keyword} — szybki termin i darmowa wycena</h1>
          <p className="mt-3 text-slate-700">{lp.usp} Skontaktuj się teraz, aby otrzymać orientacyjny koszt i najbliższy wolny termin.</p>
          <div className="mt-5 flex gap-3"><a className="btn-primary" href={company.phoneHref} data-track="cta_phone_lp">Zadzwoń: {company.phone}</a><a className="btn-secondary" href="#formularz" data-track="cta_quote_lp">Darmowa wycena</a></div>

          <div className="mt-8 card">
            <h2 className="font-semibold">Korzyści</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Zgodność reklama → landing → formularz.</li>
              <li>• Lokalna obsługa Tarnów + 30 km.</li>
              <li>• Jasny cennik orientacyjny i szybka odpowiedź.</li>
              <li>• Faktura VAT, współpraca jednorazowa lub cykliczna.</li>
            </ul>
          </div>
          <div className="mt-4 card"><h2 className="font-semibold">Orientacyjny cennik</h2><p className="mt-2 text-sm">Ceny zaczynają się od 180 zł. Finalna wycena zależy od metrażu, stopnia zabrudzeń, terminu i zakresu.</p></div>
          <div className="mt-4 card">
            <h2 className="font-semibold">Before / After</h2>
            {beforeAfterCases.slice(0, 2).map((item) => (
              <p key={item.id} className="mt-2 text-sm"><strong>{item.title}:</strong> {item.result}</p>
            ))}
          </div>
          <div className="mt-4 card"><h2 className="font-semibold">Sekcja lokalna</h2><p className="mt-2 text-sm">Działamy w Tarnowie, Mościcach, Skrzyszowie, Wierzchosławicach, Lisiej Górze, Żabnie, Tuchowie, Wojniczu i Pleśnej.</p></div>

          <div className="mt-4 card">
            <h2 className="font-semibold">Opinie</h2>
            {testimonials.slice(0, 2).map((op)=><p key={op.name} className="mt-2 text-sm">★ {op.text} — {op.name}</p>)}
          </div>
          <div className="mt-4 card">
            <h2 className="font-semibold">FAQ</h2>
            {siteFaq.slice(0, 3).map((item) => <p key={item.q} className="mt-2 text-sm"><strong>{item.q}</strong><br />{item.a}</p>)}
          </div>
        </article>
        <div id="formularz"><QuickLeadForm /></div>
      </div>
    </main>
  );
}
