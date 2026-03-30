import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';

export const metadata: Metadata = {
  metadataBase: new URL('https://zielonyblysk.pl'),
  title: 'Zielony Błysk | Profesjonalne sprzątanie Tarnów + 30 km',
  description: 'Nowoczesna firma sprzątająca Tarnów i okolice. Mieszkania, biura, wspólnoty, sprzątanie po remoncie i usługi specjalistyczne.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pl"><body><Header />{children}<Footer /><StickyCTA /></body></html>;
}
