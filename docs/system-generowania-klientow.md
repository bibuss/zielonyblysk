# System generowania klientów — Zielony Błysk (Tarnów + 30 km)

## 1) Audyt obecnej strony (stan po przebudowie)

### Co jest już dobrze wdrożone
- Architektura oparta o Next.js App Router i dynamiczne trasy dla lokalizacji, usług i landingów Ads.
- Komponentowe UI (formularze, breadcrumbs, JSON-LD, sekcje CTA, FAQ, cennik, realizacje).
- Rozdzielenie segmentów klientów: indywidualni / firmy i biura / wspólnoty / zarządcy.
- Osobne strony lokalne SEO i osobne landingi Google Ads.
- Dane konfiguracyjne trzymane centralnie (`lib/site-data.ts`) i generowanie stron z jednego źródła.

### Czego brakowało do poziomu 10/10 (i co zostało domknięte)
- Brak pełnego zestawu reużywalnych komponentów pod skalowanie (dodane: `CTASection`, `ServiceCards`, `LocalSeoSection`, `Testimonials`, `PricingCards`, `FAQAccordion`, `BeforeAfterGallery`, `AreaCoverageSection`).
- Brak kompletnej struktury trackingowej (dodano bazowy moduł skryptów: GTM/GA4/Google Ads/Meta Pixel przez env).
- Za słabe uszczegółowienie sekcji „dla kogo” na stronach lokalnych (dodano `audienceSections[]`).

### Co blokowało SEO
- Ryzyko podobnych sekcji przy wielu lokalizacjach bez kontrolowanego modelu unikalności.
- Ograniczona semantyka silosów i sekcji lokalnych na części podstron.
- Za mało systemowego podejścia do internal linkingu geograficznego.

### Co blokowało Google Ads
- Brak pełnego, jawnego stacku śledzenia konwersji per CTA/formularz.
- Landingi nie były osadzone w spójnym systemie komponentów i danych.

### Co blokowało konwersję
- Nierówny poziom „above the fold” między podstronami.
- Mniej czytelne rozróżnienie intencji: szybkie zapytanie vs pełna wycena.

### Co wymagało poprawy dla B2B i wspólnot
- Potrzeba mocniejszego języka SLA/raportowania/ciągłości jakości.
- Osobny przekaz dla zarządców i wspólnot zamiast jednego wspólnego bloku.

### Co wymagało poprawy w strukturze lokalnej
- Potrzeba modelu danych gotowego pod 100+ lokalizacji z polami SEO, FAQ, dojazd, internal linking.

### Co uproszczono
- Ujednolicono sekcje strony głównej i stron lokalnych w oparciu o reużywalne komponenty.
- Uproszczono utrzymanie przez przeniesienie logiki treści i sekcji do konfiguracji danych.

---

## 2) Nowa architektura informacji (docelowa mapa)
- `/` — strona główna
- `/obszar-dzialania` — lokalny hub SEO
- `/sprzatanie-{miasto}` — strony lokalne SEO
- `/lp/{slug}` — landingi pod Google Ads
- `/uslugi/{slug}` — strony usługowe
- `/dla-klientow-indywidualnych`
- `/dla-firm-i-biur`
- `/dla-wspolnot-mieszkaniowych`
- `/dla-zarzadcow-nieruchomosci`
- `/blog/{slug}`
- `/kontakt`
- `/cennik`
- `/opinie`
- `/realizacje`
- `/faq`
- `/o-nas`

## 3) Struktura URL
- Lokalizacja: `/sprzatanie-{miasto}`
- Landing Ads: `/lp/{intencja}-{miasto}`
- Usługa: `/uslugi/{nazwa-uslugi}-{miasto}` (lub `/uslugi/{nazwa-uslugi}`)
- Segment: `/dla-{segment}`

## 4) Lista podstron lokalnych SEO (30)
TOP 10: Tarnów, Mościce, Skrzyszów, Tuchów, Żabno, Lisia Góra, Wierzchosławice, Wojnicz, Pleśna, Dąbrowa Tarnowska.

Dodatkowe: Ryglice, Szerzyny, Radłów, Olesno, Szczucin, Ciężkowice, Zakliczyn, Gromnik, Czarna, Borzęcin, Brzesko, Dębno, Wola Rzędzińska, Zgłobice, Koszyce Małe, Koszyce Wielkie, Ładna, Jodłówka‑Wałki, Pogórska Wola, Zbylitowska Góra.

## 5) Gotowe treści dla TOP 10 lokalizacji
Pełne treści 800–1200+ słów są publikowane na:
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

Każda strona zawiera: unikalny URL/H1/title/meta, intro lokalne, usługi, sekcję „dla kogo”, dojazd, FAQ lokalne, CTA, internal linking i „obsługujemy również okolice”.

## 6) Template pod 100+ lokalizacji
`localSeoPages` zawiera pola:
- `slug`
- `city`
- `travelTime`
- `h1`
- `metaTitle`
- `metaDescription`
- `intro`
- `localKeywords[]`
- `services[]`
- `audienceSections[]`
- `localFaq[]`
- `areaCoverage[]`
- `longSections[]`
- `nearbyLocations[]`

### Strategia unikalności
- Każda lokalizacja ma własny zestaw `meta`, `faq`, `dojazdu`, klastrów miejscowości i wariantów sekcji.
- Treści są budowane blokowo (sekcje o intencji zakupowej + lokalnym kontekście), a nie przez ślepą kopię.
- Internal linking między sąsiadującymi lokalizacjami ogranicza kanibalizację i wzmacnia silosy.

## 7) Landingi Google Ads
- `/lp/sprzatanie-mieszkan-tarnow`
- `/lp/sprzatanie-po-remoncie-tarnow`
- `/lp/sprzatanie-biur-tarnow`
- `/lp/sprzatanie-wspolnot-tarnow`
- `/lp/firma-sprzatajaca-tarnow`

Każdy landing ma: nagłówek intencyjny, telefon + CTA above the fold, formularz leadowy, korzyści, zakres, cennik orientacyjny, realizacje before/after, opinie, FAQ, sekcję lokalną i finalne CTA.

## 8) Komponenty systemowe
- `Breadcrumbs`
- `QuickLeadForm`
- `FullLeadForm`
- `JsonLd`
- `CTASection`
- `ServiceCards`
- `LocalSeoSection`
- `Testimonials`
- `PricingCards`
- `FAQAccordion`
- `BeforeAfterGallery`
- `AreaCoverageSection`

## 9) Rekomendacje SEO technicznego
- Każda strona: title, meta description, canonical, OG.
- Schema: Organization + LocalBusiness + CleaningService + Service + FAQPage + BreadcrumbList.
- Silosy: lokalizacje / usługi / segmenty / LP Ads.
- Semantyczny HTML + internal linking między klastrami.
- Rozwijać lokalne case studies przypisane do konkretnych miast i usług.

## 10) Rekomendacje Google Ads
- Kampanie osobno dla: mieszkania, po remoncie, biura, wspólnoty, firma sprzątająca.
- Zasada: 1 intencja = 1 grupa reklam = 1 landing.
- Rozszerzenia: połączenie, formularz, lokalizacja, objaśnienia.
- Sygnały jakości: spójność keyword → nagłówek LP → formularz → CTA.

## 11) Struktura śledzenia konwersji
### Wdrożenia
- GTM (`NEXT_PUBLIC_GTM_ID`)
- GA4 (`NEXT_PUBLIC_GA4_ID`)
- Google Ads (`NEXT_PUBLIC_GOOGLE_ADS_ID`)
- Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`)

### Eventy rekomendowane
- `lead_form_submit` (parametry: `form_type`, `service`, `location`, `client_type`)
- `cta_phone_hero`, `cta_phone_lp`, `cta_phone_section`
- `cta_quote_hero`, `cta_quote_lp`, `cta_quote_section`
- kliknięcia numeru telefonu (`tel:`)
- wysyłki formularza szybkiego i pełnego

## 12) Checklist wdrożenia
- [ ] Uzupełnić ENV z identyfikatorami trackingowymi.
- [ ] Podpiąć backend formularza (webhook/CRM/mail API).
- [ ] Uzupełnić realne case studies i opinie z geolokalizacją.
- [ ] Wysłać sitemap do Google Search Console.
- [ ] Odpalić kampanie Ads per landing i zweryfikować zdarzenia konwersji.
- [ ] Rozwinąć kolejne strony long-tail: „sprzątanie biur + miasto”, „po remoncie + miasto”.

## 13) Stack i wdrożenie
- Next.js 14 + App Router
- TypeScript
- Tailwind CSS
- SSG/SSR wg typu podstrony
- Architektura oparta o dane konfiguracyjne, gotowa do skalowania 100+ stron lokalnych
