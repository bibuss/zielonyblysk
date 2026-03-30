import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';
import { JsonLd } from '@/components/JsonLd';
import { company } from '@/lib/site-data';

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | Profesjonalne sprzątanie Tarnów i okolice`,
    template: `%s | ${company.name}`
  },
  description: 'Profesjonalna firma sprzątająca: Tarnów i okolice do 30 km. Klienci indywidualni, firmy, wspólnoty i zarządcy nieruchomości.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${company.name} — sprzątanie Tarnów`,
    description: 'Mieszkania, domy, biura, wspólnoty i sprzątanie po remoncie. Szybka wycena i lokalna obsługa.',
    locale: 'pl_PL',
    url: company.siteUrl,
    siteName: company.name
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'CleaningService'],
  name: company.name,
  url: company.siteUrl,
  telephone: company.phone,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Braci Saków 5',
    addressLocality: 'Tarnów',
    postalCode: '33-100',
    addressCountry: 'PL'
  },
  areaServed: 'Tarnów + 30 km'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Script id="analytics-readiness" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; window.__tracking_ready = true;`}
        </Script>
        <Header />
        {children}
        <Footer />
        <StickyCTA />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
