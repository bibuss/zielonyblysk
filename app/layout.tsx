import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';

export const metadata: Metadata = {
  metadataBase: new URL('https://zielonyblysk.pl'),
  title: 'Zielony Błysk | Firma sprzątająca Tarnów i okolice',
  description:
    'Nowoczesna firma sprzątająca Tarnów. Sprzątanie mieszkań, biur, wspólnot i po remoncie. Działamy w Tarnowie i okolicach do 30 km.',
  keywords: [
    'sprzątanie Tarnów',
    'firma sprzątająca Tarnów',
    'sprzątanie biur Tarnów',
    'sprzątanie wspólnot Tarnów',
    'sprzątanie po remoncie Tarnów',
    'sprzątanie mieszkań Tarnów cena',
    'sprzątanie okolice Tarnowa'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
