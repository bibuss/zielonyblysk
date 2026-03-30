import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { audienceSections, faq, locations, pricing, services } from '@/lib/site-data';

const reviews = [
  { name: 'Anna, Tarnów', text: 'Super organizacja, punktualność i perfekcyjna czystość. Polecam do stałej współpracy.' },
  { name: 'Biuro rachunkowe, Mościce', text: 'Od pół roku obsługa biura bez zarzutu. Elastyczny grafik i pełen profesjonalizm.' },
  { name: 'Zarządca nieruchomości', text: 'Klatki i części wspólne utrzymane wzorowo, z raportami po każdej realizacji.' }
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'CleaningService'],
  name: 'Zielony Błysk',
  areaServed: 'Tarnów i okolice do 30 km',
  telephone: '+48600000000',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tarnów',
    addressCountry: 'PL'
  }
};

export default function HomePage() {
  return (
    <main>
      <section className="section bg-gradient-to-b from-brand-50 to-white">
        <div className="container grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              Tarnów + 30 km • szybki dojazd • elastyczne terminy
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Premium sprzątanie w Tarnowie i okolicach</h1>
            <p className="mt-4 text-lg text-slate-700">
              Pomagamy klientom indywidualnym, firmom, wspólnotom i inwestorom utrzymać idealną czystość. Szybka wycena,
              jasne zasady i jakość premium.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+48600000000" className="btn-primary">
                Zadzwoń teraz
              </a>
              <a href="#formularz" className="btn-secondary">
                Wycena online
              </a>
            </div>
          </div>
          <div className="card bg-slate-900 text-white">
            <p className="text-sm uppercase tracking-wide text-brand-100">Dlaczego Zielony Błysk</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              <li>✔ Obsługa klientów indywidualnych, B2B i wspólnot mieszkaniowych.</li>
              <li>✔ Stałe kontrakty, faktury VAT i indywidualne harmonogramy.</li>
              <li>✔ Kompleksowe usługi: mieszkania, biura, wspólnoty, po remoncie, okna, tapicerka.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="uslugi">
        <div className="container">
          <h2 className="h2">Usługi, które konwertują na realny porządek</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link href={`/uslugi/${service.slug}`} key={service.slug} className="card transition hover:-translate-y-1">
                <p className="font-semibold">{service.name}</p>
                <p className="mt-2 text-sm text-slate-600">SEO: {service.name.toLowerCase()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="h2">Dla kogo pracujemy</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {audienceSections.map((audience) => (
              <article key={audience.title} className="card">
                <h3 className="h3">{audience.title}</h3>
                <p className="mt-3 text-slate-700">{audience.text}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {audience.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          <div className="card"><h3 className="h3">Jak to działa</h3><p className="mt-3 text-sm text-slate-700">1) Kontakt • 2) Wycena • 3) Realizacja • 4) Raport i stała opieka.</p></div>
          <div className="card"><h3 className="h3">Cennik skrócony</h3><p className="mt-3 text-sm text-slate-700">Mieszkania od 180 zł, biura od 2,90 zł/m², wspólnoty od 550 zł/mies.</p></div>
          <div className="card"><h3 className="h3">Stała współpraca</h3><p className="mt-3 text-sm text-slate-700">Kontrakty B2B i dla wspólnot z gwarancją terminów, opiekunem i fakturą VAT.</p></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="h2">Opinie klientów</h2>
            <div className="mt-6 space-y-4">
              {reviews.map((review) => (
                <blockquote key={review.name} className="card">
                  <p>„{review.text}”</p>
                  <footer className="mt-2 text-sm font-semibold text-brand-700">{review.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div>
            <h2 className="h2">FAQ</h2>
            <div className="mt-6 space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="card">
                  <summary className="cursor-pointer font-semibold">{item.q}</summary>
                  <p className="mt-3 text-sm text-slate-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="card">
            <h2 className="h2">Działamy w Tarnowie i okolicach do 30 km</h2>
            <p className="mt-4 text-slate-700">
              Obsługujemy Tarnów, Mościce, Skrzyszów, Wierzchosławice, Lisią Górę, Żabno, Tuchów, Dąbrowę Tarnowską oraz
              inne miejscowości w promieniu 30 km. Zapewniamy szybki dojazd i elastyczne okna czasowe.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {locations.map((location) => (
                <span key={location} className="rounded-full bg-brand-50 px-3 py-1 text-brand-700 ring-1 ring-brand-100">
                  {location}
                </span>
              ))}
            </div>
          </div>
          <div id="formularz">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section bg-slate-900 text-white">
        <div className="container">
          <h2 className="h2 text-white">Szybki cennik orientacyjny</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="card bg-slate-800 text-slate-100"><h3 className="h3">Klient indywidualny</h3><ul className="mt-3 space-y-2 text-sm">{pricing.indywidualni.map((item)=><li key={item}>• {item}</li>)}</ul></div>
            <div className="card bg-slate-800 text-slate-100"><h3 className="h3">Biznes / biura</h3><ul className="mt-3 space-y-2 text-sm">{pricing.biznes.map((item)=><li key={item}>• {item}</li>)}</ul></div>
            <div className="card bg-slate-800 text-slate-100"><h3 className="h3">Wspólnoty</h3><ul className="mt-3 space-y-2 text-sm">{pricing.wspolnoty.map((item)=><li key={item}>• {item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Review',
            itemReviewed: { '@type': 'CleaningService', name: 'Zielony Błysk' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            author: { '@type': 'Person', name: 'Klient z Tarnowa' },
            reviewBody: 'Rzetelna firma sprzątająca z szybkim terminem i świetną jakością.'
          })
        }}
      />
    </main>
  );
}
