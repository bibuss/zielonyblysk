export const company = {
  name: 'Zielony Błysk',
  siteUrl: 'https://zielonyblysk.pl',
  phone: '+48 600 000 000',
  phoneHref: 'tel:+48600000000',
  email: 'kontakt@zielonyblysk.pl',
  city: 'Tarnów',
  radius: '30 km',
  address: 'Tarnów, małopolskie'
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  lead: string;
  audience: string[];
  benefits: string[];
  process: string[];
  priceFrom: string;
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  { slug: 'sprzatanie-mieszkan-tarnow', name: 'Sprzątanie mieszkań Tarnów', short: 'Mieszkania', hero: 'Sprzątanie mieszkań w Tarnowie — szybko, dokładnie i bez stresu.', lead: 'Jednorazowo lub cyklicznie. Obsługujemy mieszkania prywatne, najem oraz przygotowanie lokalu do sprzedaży.', audience: ['Rodziny i zapracowane osoby', 'Właściciele mieszkań na wynajem', 'Klienci po remoncie'], benefits: ['Własny sprzęt i środki', 'Szybkie terminy nawet 24–48 h', 'Kontrola jakości po realizacji'], process: ['Krótki kontakt i zakres prac', 'Orientacyjna wycena i termin', 'Realizacja + checklista'], priceFrom: 'od 180 zł', faq: [{ q: 'Ile kosztuje sprzątanie mieszkania?', a: 'Standardowe zlecenia zaczynają się od 180 zł, a finalna cena zależy od metrażu i zakresu.' }] },
  { slug: 'sprzatanie-domow-tarnow', name: 'Sprzątanie domów Tarnów', short: 'Domy', hero: 'Kompleksowe sprzątanie domów w Tarnowie i okolicy.', lead: 'Sprzątamy domy parterowe i piętrowe, także z myciem okien i prasowaniem na życzenie.', audience: ['Właściciele domów', 'Seniorzy', 'Rodziny z dziećmi'], benefits: ['Bezpieczne środki', 'Elastyczne godziny', 'Pakiety abonamentowe'], process: ['Brief telefoniczny', 'Plan stref i pomieszczeń', 'Regularny harmonogram'], priceFrom: 'od 260 zł', faq: [{ q: 'Czy przyjeżdżacie poza Tarnów?', a: 'Tak, działamy w promieniu do 30 km od Tarnowa.' }] },
  { slug: 'sprzatanie-biur-tarnow', name: 'Sprzątanie biur Tarnów', short: 'Biura', hero: 'Sprzątanie biur Tarnów — punktualny serwis dla zespołów i klientów.', lead: 'Pracujemy przed otwarciem, po godzinach lub w trybie dziennym. Umowy SLA, faktura VAT.', audience: ['Biura rachunkowe i kancelarie', 'Gabinetty i placówki medyczne', 'Firmy usługowe'], benefits: ['Stały opiekun kontraktu', 'Checklista stref biurowych', 'Raportowanie realizacji'], process: ['Audyt powierzchni', 'Oferta i harmonogram', 'Wdrożenie serwisu'], priceFrom: 'od 2,90 zł/m²', faq: [{ q: 'Czy wystawiacie faktury VAT?', a: 'Tak, wszystkie usługi dla firm realizujemy z fakturą VAT.' }] },
  { slug: 'sprzatanie-firm-tarnow', name: 'Sprzątanie firm i lokali usługowych Tarnów', short: 'Firmy i lokale', hero: 'Stałe sprzątanie firm i lokali usługowych w Tarnowie.', lead: 'Dla sklepów, salonów, punktów usługowych i obiektów handlowych. Bez przestojów dla biznesu.', audience: ['Lokale handlowe', 'Salony usługowe', 'Punkty gastronomiczne'], benefits: ['Godziny dopasowane do pracy lokalu', 'Pakiety miesięczne', 'Serwis interwencyjny'], process: ['Rozmowa i audyt', 'Oferta abonamentowa', 'Start i monitoring'], priceFrom: 'od 799 zł/mies.', faq: [{ q: 'Czy można zamówić stałą współpracę?', a: 'Tak, przygotowujemy kontrakty abonamentowe i harmonogramy tygodniowe.' }] },
  { slug: 'sprzatanie-wspolnot-mieszkaniowych-tarnow', name: 'Sprzątanie wspólnot mieszkaniowych Tarnów', short: 'Wspólnoty', hero: 'Czyste części wspólne i spokojny zarząd — obsługa wspólnot w Tarnowie.', lead: 'Sprzątanie klatek, wind, garaży i terenów wspólnych z raportem realizacji.', audience: ['Wspólnoty mieszkaniowe', 'Spółdzielnie', 'Zarządcy'], benefits: ['Stałe dni serwisowe', 'Raport zdjęciowy', 'Przewidywalny koszt'], process: ['Wizja lokalna', 'Umowa i SLA', 'Realizacja zgodnie z checklistą'], priceFrom: 'od 550 zł/mies.', faq: [{ q: 'Czy obsługujecie zarządców nieruchomości?', a: 'Tak, realizujemy zlecenia dla zarządców i wspólnot mieszkaniowych.' }] },
  { slug: 'sprzatanie-klatek-schodowych-tarnow', name: 'Sprzątanie klatek schodowych Tarnów', short: 'Klatki schodowe', hero: 'Sprzątanie klatek schodowych Tarnów z harmonogramem i dokumentacją.', lead: 'Regularne mycie podłóg, poręczy, wejść oraz dezynfekcja punktów styku.', audience: ['Wspólnoty', 'Kamienice', 'Zarządcy'], benefits: ['Regularność i punktualność', 'Prace dodatkowe sezonowe', 'Raporty dla zarządcy'], process: ['Ustalenie częstotliwości', 'Serwis cykliczny', 'Raportowanie'], priceFrom: 'od 390 zł/mies.', faq: [{ q: 'Jak często można sprzątać klatki?', a: 'Najczęściej 1–3 razy w tygodniu lub codziennie przy dużym ruchu.' }] },
  { slug: 'sprzatanie-po-remoncie-tarnow', name: 'Sprzątanie po remoncie Tarnów', short: 'Po remoncie', hero: 'Sprzątanie po remoncie w Tarnowie — usuwamy pył, folię i zabrudzenia budowlane.', lead: 'Dokładne doczyszczanie powierzchni, okien, fug i detali po ekipach remontowych.', audience: ['Klienci indywidualni', 'Inwestorzy', 'Deweloperzy'], benefits: ['Specjalistyczna chemia', 'Szybka gotowość lokalu', 'Pakiety pod odbiory'], process: ['Wycena po metrażu', 'Przygotowanie zespołu', 'Doczyszczanie końcowe'], priceFrom: 'od 14 zł/m²', faq: [{ q: 'Czy sprzątacie po generalnym remoncie?', a: 'Tak, realizujemy sprzątanie po ciężkich pracach remontowych i budowlanych.' }] },
  { slug: 'sprzatanie-po-budowie-tarnow', name: 'Sprzątanie po budowie Tarnów', short: 'Po budowie', hero: 'Sprzątanie po budowie Tarnów dla inwestorów i wykonawców.', lead: 'Przygotowujemy lokale i części wspólne do odbiorów technicznych i przekazania klientom.', audience: ['Deweloperzy', 'Generalni wykonawcy', 'Zarządcy'], benefits: ['Duże metraże', 'Szybkie ekipy', 'Pełna dokumentacja'], process: ['Oględziny', 'Harmonogram etapowy', 'Odbiór'], priceFrom: 'od 16 zł/m²', faq: [{ q: 'Czy realizujecie duże inwestycje?', a: 'Tak, obsługujemy obiekty mieszkaniowe i usługowe etapami.' }] },
  { slug: 'mycie-okien-tarnow', name: 'Mycie okien Tarnów', short: 'Mycie okien', hero: 'Mycie okien Tarnów — bez smug, z dojazdem do klienta.', lead: 'Myjemy okna, witryny i przeszklenia w mieszkaniach, biurach i lokalach.', audience: ['Domy i mieszkania', 'Biura', 'Lokale usługowe'], benefits: ['Profesjonalne akcesoria', 'Praca bez zacieków', 'Terminy weekendowe'], process: ['Wycena wg powierzchni', 'Mycie ram i szyb', 'Kontrola jakości'], priceFrom: 'od 18 zł/m²', faq: [{ q: 'Czy myjecie duże witryny?', a: 'Tak, realizujemy mycie witryn sklepowych i przeszkleń biurowych.' }] },
  { slug: 'pranie-tapicerki-tarnow', name: 'Pranie tapicerki Tarnów', short: 'Tapicerka', hero: 'Pranie tapicerki Tarnów — odświeżenie kanap, narożników i foteli.', lead: 'Usuwamy zabrudzenia, neutralizujemy zapachy i przywracamy świeżość tkanin.', audience: ['Mieszkania', 'Biura', 'Wynajem krótkoterminowy'], benefits: ['Bezpieczne środki', 'Szybkie schnięcie', 'Pakiety łączone ze sprzątaniem'], process: ['Ocena tkaniny', 'Pranie ekstrakcyjne', 'Suszenie i finalne czyszczenie'], priceFrom: 'od 150 zł', faq: [{ q: 'Czy tapicerka długo schnie?', a: 'Najczęściej 4–8 godzin, zależnie od materiału i wentylacji.' }] },
  { slug: 'czyszczenie-kostki-brukowej-tarnow', name: 'Czyszczenie kostki brukowej Tarnów', short: 'Kostka brukowa', hero: 'Czyszczenie kostki brukowej Tarnów — usuwanie nalotów i zabrudzeń.', lead: 'Mycie ciśnieniowe podjazdów, chodników i terenów wspólnych.', audience: ['Właściciele domów', 'Wspólnoty', 'Firmy'], benefits: ['Mocny sprzęt', 'Prace sezonowe', 'Możliwość impregnacji'], process: ['Oględziny nawierzchni', 'Mycie strefowe', 'Finalne płukanie'], priceFrom: 'od 12 zł/m²', faq: [{ q: 'Czy usuwacie mech i porosty?', a: 'Tak, dobieramy środki do typu kostki i stopnia zabrudzenia.' }] },
  { slug: 'mycie-elewacji-tarnow', name: 'Mycie elewacji Tarnów', short: 'Elewacje', hero: 'Mycie elewacji Tarnów dla domów, biur i wspólnot.', lead: 'Przywracamy estetykę budynków bezpiecznymi metodami czyszczenia.', audience: ['Domy jednorodzinne', 'Wspólnoty', 'Obiekty komercyjne'], benefits: ['Bezpieczna chemia', 'Skuteczne usuwanie zabrudzeń', 'Prace planowane pogodowo'], process: ['Dobór metody', 'Mycie i doczyszczanie', 'Odbiór'], priceFrom: 'od 15 zł/m²', faq: [{ q: 'Czy mycie elewacji jest bezpieczne?', a: 'Tak, dobieramy ciśnienie i środki do rodzaju elewacji.' }] },
  { slug: 'mycie-paneli-fotowoltaicznych-tarnow', name: 'Mycie paneli fotowoltaicznych Tarnów', short: 'Panele PV', hero: 'Mycie paneli fotowoltaicznych Tarnów — większa wydajność instalacji.', lead: 'Regularne mycie paneli to realny wpływ na uzysk energii.', audience: ['Właściciele domów', 'Firmy', 'Gospodarstwa'], benefits: ['Demineralizowana woda', 'Prace zgodne z zaleceniami', 'Protokoły realizacji'], process: ['Ustalenie terminu', 'Mycie paneli', 'Raport'], priceFrom: 'od 10 zł/panel', faq: [{ q: 'Jak często myć panele?', a: 'Najczęściej 1–2 razy rocznie lub częściej przy dużym zapyleniu.' }] },
  { slug: 'ozonowanie-tarnow', name: 'Ozonowanie Tarnów', short: 'Ozonowanie', hero: 'Ozonowanie Tarnów — neutralizacja zapachów i odświeżenie pomieszczeń.', lead: 'Usługa dla mieszkań, biur, lokali usługowych i nieruchomości po remoncie.', audience: ['Klienci indywidualni', 'Biura', 'Wynajem'], benefits: ['Szybka interwencja', 'Skuteczna neutralizacja zapachów', 'Usługa łączona ze sprzątaniem'], process: ['Ocena pomieszczeń', 'Proces ozonowania', 'Wietrzenie i odbiór'], priceFrom: 'od 120 zł', faq: [{ q: 'Kiedy warto wykonać ozonowanie?', a: 'Po remoncie, po wynajmie, po zalaniu lub przy uporczywych zapachach.' }] }
];

export const segmentPages = [
  { slug: 'dla-klientow-indywidualnych', title: 'Dla klientów indywidualnych', intro: 'Stałe i jednorazowe sprzątanie mieszkań oraz domów. Elastyczny grafik i szybki kontakt.', cta: 'Umów sprzątanie domu lub mieszkania.' },
  { slug: 'dla-firm-i-biur', title: 'Dla firm i biur', intro: 'Usługi abonamentowe dla biur, lokali i obiektów komercyjnych z fakturą VAT.', cta: 'Zapytaj o ofertę kontraktową dla firmy.' },
  { slug: 'dla-wspolnot-mieszkaniowych', title: 'Dla wspólnot mieszkaniowych', intro: 'Obsługa klatek, części wspólnych, garaży i terenu wokół budynków.', cta: 'Sprawdź ofertę dla wspólnoty.' },
  { slug: 'dla-zarzadcow-nieruchomosci', title: 'Dla zarządców nieruchomości', intro: 'Dedykowana współpraca z raportowaniem i jasnym SLA dla portfela nieruchomości.', cta: 'Porozmawiaj o stałej opiece nad obiektami.' },
  { slug: 'stala-wspolpraca', title: 'Stała współpraca / abonament / kontrakty', intro: 'Pakiety miesięczne i kontrakty długoterminowe dla klientów indywidualnych i biznesowych.', cta: 'Poproś o propozycję abonamentu.' }
];

export const locations = [
  { slug: 'tarnow', name: 'Tarnów' },
  { slug: 'moscice', name: 'Mościce' },
  { slug: 'skrzyszow', name: 'Skrzyszów' },
  { slug: 'wierzchoslawice', name: 'Wierzchosławice' },
  { slug: 'lisia-gora', name: 'Lisia Góra' },
  { slug: 'zabno', name: 'Żabno' },
  { slug: 'tuchow', name: 'Tuchów' },
  { slug: 'dabrowa-tarnowska', name: 'Dąbrowa Tarnowska' },
  { slug: 'okolice-tarnowa', name: 'Okolice Tarnowa' }
];

export const adLandingPages = [
  { slug: 'sprzatanie-mieszkan-tarnow', keyword: 'sprzątanie mieszkań Tarnów' },
  { slug: 'sprzatanie-po-remoncie-tarnow', keyword: 'sprzątanie po remoncie Tarnów' },
  { slug: 'sprzatanie-biur-tarnow', keyword: 'sprzątanie biur Tarnów' },
  { slug: 'sprzatanie-wspolnot-tarnow', keyword: 'sprzątanie wspólnot Tarnów' },
  { slug: 'firma-sprzatajaca-tarnow', keyword: 'firma sprzątająca Tarnów' },
  { slug: 'sprzatanie-tarnow-cena', keyword: 'sprzątanie Tarnów cena' }
];

export const faq = [
  { q: 'Ile kosztuje sprzątanie w Tarnowie?', a: 'Ceny zaczynają się od 180 zł za mieszkanie, od 2,90 zł/m² dla biur i od 550 zł/mies. dla wspólnot.' },
  { q: 'Czy działacie poza Tarnowem?', a: 'Tak, obsługujemy Tarnów i miejscowości w promieniu do 30 km.' },
  { q: 'Jaki jest zasięg działania?', a: 'Dojeżdżamy m.in. do Mościc, Skrzyszowa, Wierzchosławic, Lisiej Góry, Żabna, Tuchowa i Dąbrowy Tarnowskiej.' },
  { q: 'Czy obsługujecie firmy?', a: 'Tak, realizujemy jednorazowe i stałe usługi dla firm, biur i lokali usługowych.' },
  { q: 'Czy sprzątacie biura?', a: 'Tak. Oferujemy harmonogram dzienny, tygodniowy i serwis po godzinach.' },
  { q: 'Czy obsługujecie wspólnoty mieszkaniowe?', a: 'Tak, realizujemy cykliczne sprzątanie klatek i części wspólnych z raportami.' },
  { q: 'Czy wystawiacie faktury VAT?', a: 'Tak, wystawiamy faktury VAT dla firm, wspólnot i klientów indywidualnych.' },
  { q: 'Czy można zamówić stałą współpracę?', a: 'Tak, przygotowujemy pakiety abonamentowe i kontrakty.' },
  { q: 'Czy wykonujecie sprzątanie po remoncie?', a: 'Tak, to jedna z naszych głównych usług w Tarnowie i okolicy.' },
  { q: 'Czy przyjeżdżacie z własnymi środkami?', a: 'Tak, przywozimy kompletny sprzęt i profesjonalne środki czystości.' },
  { q: 'Jak szybko można umówić termin?', a: 'Często jesteśmy dostępni nawet w 24–48 godzin od kontaktu.' },
  { q: 'Czy wycena jest darmowa?', a: 'Tak, przygotowanie wyceny jest bezpłatne i niezobowiązujące.' }
];

export const pricingTables = {
  indywidualny: ['Standard: od 180 zł', 'Premium: od 260 zł', 'Abonament: od 540 zł/mies.'],
  biznes: ['Pakiet Biznes Start: od 799 zł/mies.', 'Serwis biurowy: od 2,90 zł/m²', 'Pakiet Biznes Premium: od 1490 zł/mies.'],
  wspolnoty: ['Klatki schodowe: od 550 zł/mies.', 'Wspólnoty Standard: od 890 zł/mies.', 'Wspólnoty Premium: od 1290 zł/mies.']
};

export const blogPosts = [
  'Ile kosztuje sprzątanie mieszkania w Tarnowie?',
  'Ile kosztuje sprzątanie po remoncie w Tarnowie?',
  'Jak wybrać firmę sprzątającą w Tarnowie?',
  'Sprzątanie biur w Tarnowie – na co zwrócić uwagę?',
  'Sprzątanie wspólnot mieszkaniowych – co powinna obejmować usługa?',
  'Czy warto zlecić sprzątanie po remoncie?',
  'Jak często sprzątać biuro?',
  'Tarnów i okolice – gdzie działamy?'
];
