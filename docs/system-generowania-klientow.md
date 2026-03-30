# System generowania klientów — zielonyblysk.pl

## 1) Mapa strony (nowa architektura)
- `/` — strona główna (sprzątanie Tarnów + 30 km)
- `/obszar-dzialania` — hub lokalny
- `/{slug-lokalizacji}` — strony lokalne SEO (np. `/sprzatanie-tuchow`)
- `/lp/{slug}` — landingi pod Google Ads
- `/uslugi/{slug}` — silos usługowy
- `/dla-klientow-indywidualnych`
- `/dla-firm-i-biur`
- `/dla-wspolnot-mieszkaniowych`
- `/dla-zarzadcow-nieruchomosci`
- `/blog/{slug}`

## 2) Struktura URL
- Lokalizacja: `/sprzatanie-{miasto}`
- Google Ads: `/lp/{intencja}-{miasto}`
- Usługi: `/uslugi/{nazwa-uslugi}-{miasto}`
- Segmenty: `/dla-{segment}`

## 3) Lista podstron lokalnych (31)
- Tarnów, Mościce, Skrzyszów, Tuchów, Żabno, Lisia Góra, Wierzchosławice, Wojnicz, Pleśna, Dąbrowa Tarnowska
- Ryglice, Szerzyny, Radłów, Olesno, Szczucin, Ciężkowice, Zakliczyn, Gromnik, Czarna, Borzęcin
- Brzesko, Dębno, Wola Rzędzińska, Zgłobice, Koszyce Małe, Koszyce Wielkie, Ładna, Jodłówka-Wałki, Pogórska Wola, Zbylitowska Góra

## 4) Gotowe teksty TOP 10 lokalizacji
- Artykuły 800+ słów są publikowane bezpośrednio na stronach:
  - `/sprzatanie-tarnow`
  - `/sprzatanie-moscice`
  - `/sprzatanie-skrzyszow`
  - `/sprzatanie-tuchow`
  - `/sprzatanie-zabno`
  - `/sprzatanie-lisia-gora`
  - `/sprzatanie-wierzchoslawice`
  - `/sprzatanie-wojnicz`
  - `/sprzatanie-plesna`
  - `/sprzatanie-dabrowa-tarnowska`

## 5) Template pod 100+ lokalizacji
Wzór danych (`localSeoPages`) zawiera:
- `slug`, `city`, `travelTime`
- `h1`, `metaTitle`, `metaDescription`
- `intro`, `localKeywords[]`
- sekcje: usługi, dla kogo, dojazd, CTA
- `localFaq[]`, `areaCoverage[]`, internal linking
- `longSections[]` (9 sekcji treści sprzedażowo-SEO)

## 6) Komponenty wykorzystywane przez system
- `Breadcrumbs`
- `FullLeadForm` / `QuickLeadForm`
- `JsonLd` (FAQ, LocalBusiness, BreadcrumbList)

## 7) Landing pages Google Ads
- `/lp/sprzatanie-mieszkan-tarnow`
- `/lp/sprzatanie-po-remoncie-tarnow`
- `/lp/sprzatanie-biur-tarnow`
- `/lp/sprzatanie-wspolnot-tarnow`
- `/lp/firma-sprzatajaca-tarnow`

Każdy landing zawiera: mocny nagłówek, CTA telefoniczne, formularz, cennik, social proof, FAQ i sekcję lokalną.

## 8) Rekomendacje SEO (operacyjnie)
- Utrzymuj 1 strona = 1 główna intencja + 1 lokalizacja.
- Rozszerzaj long-tail: `sprzątanie biur {miasto}`, `sprzątanie po remoncie {miasto}`.
- Linkowanie wewnętrzne w klastrach geograficznych.
- Dodawaj lokalne case studies i opinie przypisane do miejscowości.
- Publikuj 4–8 wpisów blogowych miesięcznie pod pytania zakupowe.

## 9) Rekomendacje Google Ads
- Kampanie oddzielnie dla: mieszkania, po remoncie, biura, wspólnoty, firma sprzątająca.
- Struktura adgroup = 1 usługa + 1 intencja.
- Dopasowanie ścisłe + do wyrażenia na frazy transakcyjne.
- Rozszerzenia połączeń, formularza i lokalizacji.
- Import konwersji offline (telefon + formularz + podpisana umowa).
