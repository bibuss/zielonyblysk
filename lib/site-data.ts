export const company = {
  name: 'Zielony Błysk',
  siteUrl: 'https://zielonyblysk.pl',
  phone: '+48 884 800 779',
  phoneHref: 'tel:+48884800779',
  email: 'kontakt@zielonyblysk.pl',
  city: 'Tarnów',
  radius: '30 km',
  address: 'ul. Braci Saków 5, 33-100 Tarnów',
  hours: 'Pon.–Sob. 7:00–20:00'
};

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  lead: string;
  buyerIntent: string;
  scope: string[];
  audience: string[];
  benefits: string[];
  process: string[];
  priceFrom: string;
  metaTitle: string;
  metaDescription: string;
  faq: FAQ[];
};

const commonFaq: FAQ[] = [
  { q: 'Czy wycena jest darmowa?', a: 'Tak. Wycena telefoniczna lub online jest bezpłatna i niezobowiązująca.' },
  { q: 'Czy działacie poza Tarnowem?', a: 'Tak, dojeżdżamy do miejscowości w promieniu do 30 km od Tarnowa.' }
];

export const services: Service[] = [
  { slug: 'sprzatanie-mieszkan-tarnow', name: 'Sprzątanie mieszkań Tarnów', short: 'Mieszkania', hero: 'Sprzątanie mieszkań w Tarnowie — regularnie lub jednorazowo.', lead: 'Dla osób prywatnych, właścicieli mieszkań na wynajem i klientów po remoncie.', buyerIntent: 'Szukasz szybkiej i konkretnej usługi z jasną ceną i terminem?', scope: ['odkurzanie i mycie podłóg', 'kuchnia i łazienka', 'kurz i powierzchnie', 'opcjonalnie: mycie okien'], audience: ['klienci indywidualni', 'wynajem krótkoterminowy', 'mieszkania na sprzedaż'], benefits: ['szybkie terminy 24–48 h', 'własny sprzęt i środki', 'stały kontakt telefoniczny'], process: ['krótki brief', 'wycena i termin', 'realizacja + kontrola'], priceFrom: 'od 180 zł', metaTitle: 'Sprzątanie mieszkań Tarnów | Zielony Błysk', metaDescription: 'Sprzątanie mieszkań w Tarnowie. Jednorazowo i cyklicznie, szybkie terminy, uczciwy cennik i darmowa wycena.', faq: [...commonFaq, { q: 'Ile kosztuje sprzątanie mieszkania w Tarnowie?', a: 'Najczęściej od 180 zł. Końcowa cena zależy od metrażu i zakresu prac.' }] },
  { slug: 'sprzatanie-domow-tarnow', name: 'Sprzątanie domów Tarnów', short: 'Domy', hero: 'Kompleksowe sprzątanie domów Tarnów i okolice.', lead: 'Sprzątanie domów jednorodzinnych, piętrowych i segmentów z elastycznym harmonogramem.', buyerIntent: 'Potrzebujesz porządku bez reorganizacji całego dnia?', scope: ['salon, sypialnie, kuchnia, łazienki', 'schody i balustrady', 'mycie przeszkleń wewnętrznych', 'usługi dodatkowe na życzenie'], audience: ['rodziny', 'seniorzy', 'zapracowane osoby'], benefits: ['stałe terminy', 'ten sam zespół przy abonamencie', 'bezpieczne środki dla dzieci i zwierząt'], process: ['konsultacja', 'dobór pakietu', 'cykliczna lub jednorazowa realizacja'], priceFrom: 'od 260 zł', metaTitle: 'Sprzątanie domów Tarnów | Zielony Błysk', metaDescription: 'Profesjonalne sprzątanie domów w Tarnowie. Jednorazowo i cyklicznie. Jasne zasady, szybki termin, darmowa wycena.', faq: commonFaq },
  { slug: 'sprzatanie-biur-tarnow', name: 'Sprzątanie biur Tarnów', short: 'Biura', hero: 'Sprzątanie biur Tarnów — bez zakłócania pracy zespołu.', lead: 'Obsługa biur, gabinetów i przestrzeni usługowych z fakturą VAT i raportem wykonania.', buyerIntent: 'Chcesz stałego standardu czystości i przewidywalnego kosztu?', scope: ['stanowiska pracy i części wspólne', 'sanitariaty i kuchnie firmowe', 'uzupełnianie środków higienicznych', 'serwis poranny lub po godzinach'], audience: ['małe i średnie firmy', 'biura rachunkowe', 'placówki usługowe'], benefits: ['umowa i SLA', 'faktura VAT', 'dedykowany opiekun'], process: ['audyt powierzchni', 'oferta i harmonogram', 'wdrożenie serwisu'], priceFrom: 'od 2,90 zł/m²', metaTitle: 'Sprzątanie biur Tarnów | Zielony Błysk', metaDescription: 'Stałe sprzątanie biur w Tarnowie. Elastyczne godziny, faktura VAT, raporty i przejrzysty cennik.', faq: [...commonFaq, { q: 'Czy obsługujecie firmy i biura?', a: 'Tak, realizujemy serwis regularny oraz zlecenia jednorazowe dla firm.' }] },
  { slug: 'sprzatanie-firm-tarnow', name: 'Sprzątanie firm Tarnów', short: 'Firmy', hero: 'Sprzątanie firm i lokali usługowych w Tarnowie.', lead: 'Dla sklepów, salonów, gabinetów i punktów usługowych.', buyerIntent: 'Potrzebujesz czystości, która wspiera sprzedaż i wizerunek lokalu?', scope: ['strefa klienta', 'zaplecze i sanitariaty', 'witryny i wejścia', 'regularny serwis'], audience: ['lokale handlowe', 'salony beauty', 'gastronomia'], benefits: ['godziny dopasowane do pracy lokalu', 'krótka ścieżka kontaktu', 'jasne pakiety abonamentowe'], process: ['rozmowa', 'zakres i harmonogram', 'realizacja + raport'], priceFrom: 'od 799 zł/mies.', metaTitle: 'Sprzątanie firm Tarnów | Zielony Błysk', metaDescription: 'Sprzątanie lokali usługowych i firm w Tarnowie. Stałe kontrakty, szybki kontakt i wycena.', faq: commonFaq },
  { slug: 'sprzatanie-wspolnot-mieszkaniowych-tarnow', name: 'Sprzątanie wspólnot mieszkaniowych Tarnów', short: 'Wspólnoty', hero: 'Sprzątanie wspólnot mieszkaniowych w Tarnowie.', lead: 'Obsługa części wspólnych, klatek, wind i otoczenia budynku.', buyerIntent: 'Szukasz wykonawcy, który dowozi jakość i terminowość dla mieszkańców?', scope: ['klatki schodowe', 'korytarze i windy', 'wejścia i teren przed budynkiem', 'sezonowe doczyszczanie'], audience: ['wspólnoty', 'spółdzielnie', 'zarządcy'], benefits: ['stałe dni serwisowe', 'raport realizacji', 'przewidywalny koszt'], process: ['wizja lokalna', 'umowa i harmonogram', 'cykliczna realizacja'], priceFrom: 'od 550 zł/mies.', metaTitle: 'Sprzątanie wspólnot Tarnów | Zielony Błysk', metaDescription: 'Regularne sprzątanie wspólnot mieszkaniowych w Tarnowie. Części wspólne, klatki, raporty i faktura VAT.', faq: [...commonFaq, { q: 'Czy obsługujecie wspólnoty i zarządców?', a: 'Tak. To jeden z naszych głównych segmentów usług.' }] },
  { slug: 'sprzatanie-klatek-schodowych-tarnow', name: 'Sprzątanie klatek schodowych Tarnów', short: 'Klatki schodowe', hero: 'Sprzątanie klatek schodowych Tarnów — regularnie i punktualnie.', lead: 'Usługa dla wspólnot, spółdzielni i zarządców nieruchomości.', buyerIntent: 'Potrzebujesz spokojnej głowy i stałego standardu?', scope: ['zamiatanie i mycie podłóg', 'poręcze, parapety, skrzynki', 'mycie drzwi wejściowych', 'dezynfekcja punktów dotyku'], audience: ['wspólnoty', 'zarządcy', 'kamienice'], benefits: ['czytelny harmonogram', 'zdjęcia po realizacji', 'możliwość serwisu interwencyjnego'], process: ['ustalenie częstotliwości', 'realizacja cykliczna', 'kontrola jakości'], priceFrom: 'od 390 zł/mies.', metaTitle: 'Sprzątanie klatek schodowych Tarnów | Zielony Błysk', metaDescription: 'Cykliczne sprzątanie klatek schodowych w Tarnowie. Stały harmonogram, raporty i przejrzysta cena.', faq: commonFaq },
  { slug: 'sprzatanie-po-remoncie-tarnow', name: 'Sprzątanie po remoncie Tarnów', short: 'Po remoncie', hero: 'Sprzątanie po remoncie Tarnów — usuwanie pyłu i zabrudzeń pobudowlanych.', lead: 'Przygotowujemy mieszkania, domy i lokale do zamieszkania lub odbioru.', buyerIntent: 'Chcesz wejść do gotowego, czystego wnętrza bez stresu?', scope: ['usuwanie pyłu budowlanego', 'doczyszczanie fug i detali', 'mycie okien i stolarki', 'odkurzanie przemysłowe'], audience: ['osoby po remoncie', 'inwestorzy', 'deweloperzy'], benefits: ['specjalistyczny sprzęt', 'duże doświadczenie po remontach', 'szybki termin'], process: ['ocena zakresu', 'wycena', 'gruntowne doczyszczenie'], priceFrom: 'od 14 zł/m²', metaTitle: 'Sprzątanie po remoncie Tarnów | Zielony Błysk', metaDescription: 'Profesjonalne sprzątanie po remoncie w Tarnowie. Usuwanie pyłu, mycie okien i przygotowanie lokalu do odbioru.', faq: commonFaq },
  { slug: 'sprzatanie-po-budowie-tarnow', name: 'Sprzątanie po budowie Tarnów', short: 'Po budowie', hero: 'Sprzątanie po budowie Tarnów dla inwestycji i odbiorów.', lead: 'Obsługa inwestycji mieszkaniowych i komercyjnych etapami.', buyerIntent: 'Potrzebujesz sprawnego sprzątania pod przekazanie lokali?', scope: ['części wspólne i lokale', 'mycie przeszkleń', 'doczyszczanie powierzchni', 'odbiór końcowy'], audience: ['deweloperzy', 'generalni wykonawcy', 'zarządcy'], benefits: ['ekipy do dużych metraży', 'etapowanie prac', 'dokumentacja'], process: ['oględziny', 'harmonogram', 'realizacja i odbiór'], priceFrom: 'od 16 zł/m²', metaTitle: 'Sprzątanie po budowie Tarnów | Zielony Błysk', metaDescription: 'Sprzątanie po budowie w Tarnowie. Obsługa inwestycji, harmonogram etapowy i przygotowanie obiektu do odbioru.', faq: commonFaq },
  { slug: 'mycie-okien-tarnow', name: 'Mycie okien Tarnów', short: 'Mycie okien', hero: 'Mycie okien Tarnów — bez smug, szybko i dokładnie.', lead: 'Mieszkania, domy, biura i witryny sklepowe.', buyerIntent: 'Potrzebujesz szybkiego efektu i czystych przeszkleń?', scope: ['mycie szyb i ram', 'mycie parapetów', 'witryny i przeszklenia', 'okna po remoncie'], audience: ['domy i mieszkania', 'biura', 'lokale usługowe'], benefits: ['profesjonalny sprzęt', 'dokładność detali', 'terminy weekendowe'], process: ['wycena', 'mycie', 'kontrola końcowa'], priceFrom: 'od 18 zł/m²', metaTitle: 'Mycie okien Tarnów | Zielony Błysk', metaDescription: 'Profesjonalne mycie okien w Tarnowie. Mieszkania, domy, biura i witryny. Darmowa wycena.', faq: commonFaq },
  { slug: 'pranie-tapicerki-tarnow', name: 'Pranie tapicerki Tarnów', short: 'Tapicerka', hero: 'Pranie tapicerki Tarnów — świeżość i odświeżony wygląd mebli.', lead: 'Pranie kanap, narożników, foteli i krzeseł metodą ekstrakcyjną.', buyerIntent: 'Chcesz odświeżyć meble bez wymiany wyposażenia?', scope: ['pranie kanap i narożników', 'usuwanie zapachów', 'pranie foteli i krzeseł', 'usługa łączona ze sprzątaniem'], audience: ['mieszkania', 'biura', 'najem'], benefits: ['dobór środków do tkaniny', 'krótki czas schnięcia', 'bezpieczne detergenty'], process: ['ocena tkaniny', 'pranie', 'suszenie i kontrola'], priceFrom: 'od 150 zł', metaTitle: 'Pranie tapicerki Tarnów | Zielony Błysk', metaDescription: 'Pranie tapicerki meblowej w Tarnowie. Kanapy, narożniki i fotele. Szybka wycena i dojazd.', faq: commonFaq },
  { slug: 'czyszczenie-kostki-brukowej-tarnow', name: 'Czyszczenie kostki brukowej Tarnów', short: 'Kostka brukowa', hero: 'Czyszczenie kostki brukowej Tarnów — podjazdy i chodniki bez nalotów.', lead: 'Usuwamy zabrudzenia, mech i osady z kostki oraz nawierzchni wokół obiektów.', buyerIntent: 'Chcesz szybko poprawić estetykę posesji?', scope: ['mycie ciśnieniowe', 'usuwanie mchu i porostów', 'doczyszczanie fug', 'opcjonalna impregnacja'], audience: ['domy jednorodzinne', 'firmy', 'wspólnoty'], benefits: ['wydajny sprzęt', 'prace sezonowe', 'elastyczne terminy'], process: ['oględziny', 'mycie', 'finalne płukanie'], priceFrom: 'od 12 zł/m²', metaTitle: 'Czyszczenie kostki brukowej Tarnów | Zielony Błysk', metaDescription: 'Profesjonalne czyszczenie kostki brukowej w Tarnowie. Podjazdy, chodniki, tereny wspólne.', faq: commonFaq },
  { slug: 'mycie-elewacji-tarnow', name: 'Mycie elewacji Tarnów', short: 'Elewacje', hero: 'Mycie elewacji Tarnów — estetyczny wygląd domu i budynku firmowego.', lead: 'Bezpieczne mycie elewacji domów, wspólnot i obiektów komercyjnych.', buyerIntent: 'Chcesz odzyskać czysty wygląd budynku bez ryzyka uszkodzeń?', scope: ['elewacje domów', 'elewacje wspólnot', 'obiekty komercyjne', 'doczyszczanie punktowe'], audience: ['domy', 'wspólnoty', 'firmy'], benefits: ['dobór metody do powierzchni', 'bezpieczna chemia', 'spójna estetyka obiektu'], process: ['dobór metody', 'mycie', 'odbiór'], priceFrom: 'od 15 zł/m²', metaTitle: 'Mycie elewacji Tarnów | Zielony Błysk', metaDescription: 'Mycie elewacji w Tarnowie i okolicy. Bezpieczne metody, szybkie terminy i bezpłatna wycena.', faq: commonFaq },
  { slug: 'mycie-paneli-fotowoltaicznych-tarnow', name: 'Mycie paneli fotowoltaicznych Tarnów', short: 'Panele PV', hero: 'Mycie paneli fotowoltaicznych Tarnów — czystsze panele, lepsza wydajność.', lead: 'Regularny serwis paneli dla domów i firm.', buyerIntent: 'Zależy Ci na utrzymaniu sprawności instalacji?', scope: ['mycie wodą demineralizowaną', 'kontrola wizualna zabrudzeń', 'serwis okresowy'], audience: ['właściciele domów', 'firmy', 'gospodarstwa'], benefits: ['bezpieczne metody', 'dokumentacja wykonania', 'serwis jednorazowy i cykliczny'], process: ['ustalenie terminu', 'mycie paneli', 'protokół'], priceFrom: 'od 10 zł/panel', metaTitle: 'Mycie paneli fotowoltaicznych Tarnów | Zielony Błysk', metaDescription: 'Mycie paneli fotowoltaicznych w Tarnowie. Bezpieczne czyszczenie i regularna obsługa.', faq: commonFaq },
  { slug: 'ozonowanie-tarnow', name: 'Ozonowanie Tarnów', short: 'Ozonowanie', hero: 'Ozonowanie Tarnów — odświeżenie pomieszczeń i neutralizacja zapachów.', lead: 'Dla mieszkań, biur i lokali po remoncie lub wynajmie.', buyerIntent: 'Chcesz szybko odświeżyć przestrzeń przed ponownym użytkowaniem?', scope: ['ozonowanie mieszkań', 'ozonowanie biur i lokali', 'neutralizacja zapachów'], audience: ['klienci indywidualni', 'firmy', 'najem'], benefits: ['szybki termin', 'czytelna procedura', 'usługa łączona ze sprzątaniem'], process: ['ocena pomieszczeń', 'ozonowanie', 'wietrzenie i odbiór'], priceFrom: 'od 120 zł', metaTitle: 'Ozonowanie Tarnów | Zielony Błysk', metaDescription: 'Ozonowanie pomieszczeń w Tarnowie. Skuteczne odświeżenie mieszkań, biur i lokali.', faq: commonFaq }
];

export const segmentPages = [
  { slug: 'dla-klientow-indywidualnych', title: 'Dla klientów indywidualnych', intro: 'Sprzątanie mieszkań i domów bez stresu. Jednorazowo i cyklicznie.', problems: ['brak czasu na porządki', 'potrzeba szybkiego terminu', 'przygotowanie mieszkania do wynajmu lub sprzedaży'], cta: 'Umów sprzątanie mieszkania lub domu' },
  { slug: 'dla-firm-i-biur', title: 'Dla firm i biur', intro: 'Czyste biuro i lokal usługowy z harmonogramem dopasowanym do godzin pracy.', problems: ['spadek standardu czystości', 'brak przewidywalnych kosztów', 'potrzeba faktury VAT i raportowania'], cta: 'Poproś o ofertę dla firmy' },
  { slug: 'dla-wspolnot-mieszkaniowych', title: 'Dla wspólnot mieszkaniowych', intro: 'Stała obsługa części wspólnych i klatek schodowych z dokumentacją.', problems: ['reklamacje mieszkańców', 'nieregularne sprzątanie', 'brak jasnych zasad współpracy'], cta: 'Zapytaj o ofertę dla wspólnoty' },
  { slug: 'dla-zarzadcow-nieruchomosci', title: 'Dla zarządców nieruchomości', intro: 'Jedna firma, wiele adresów, jeden standard jakości i przejrzysta komunikacja.', problems: ['rozproszony portfel nieruchomości', 'potrzeba raportów i SLA', 'pilne interwencje'], cta: 'Porozmawiaj o stałej obsłudze portfela' },
  { slug: 'stala-wspolpraca', title: 'Stała współpraca / abonament', intro: 'Pakiety miesięczne dla mieszkań, biur, wspólnot i lokali usługowych.', problems: ['zmienny poziom jakości', 'brak stałego terminu', 'nieczytelny koszt'], cta: 'Dobierz pakiet abonamentowy' },
  { slug: 'sprzatanie-mieszkan-na-wynajem', title: 'Sprzątanie mieszkań na wynajem', intro: 'Szybkie przygotowanie mieszkania dla kolejnego najemcy lub gościa.', problems: ['krótkie okna czasowe', 'konieczność szybkiej rotacji', 'wysokie oczekiwania gości'], cta: 'Zamów serwis pod najem' },
  { slug: 'obsluga-inwestycji-i-deweloperow', title: 'Obsługa inwestycji i deweloperów', intro: 'Etapowe sprzątanie inwestycji mieszkaniowych i komercyjnych.', problems: ['duże metraże', 'terminy odbiorów', 'koordynacja wielu etapów'], cta: 'Umów audyt inwestycji' }
];

export const locations = [
  { slug: 'tarnow', name: 'Tarnów' },
  { slug: 'moscice', name: 'Mościce' },
  { slug: 'skrzyszow', name: 'Skrzyszów' },
  { slug: 'tuchow', name: 'Tuchów' },
  { slug: 'zabno', name: 'Żabno' },
  { slug: 'lisia-gora', name: 'Lisia Góra' },
  { slug: 'wierzchoslawice', name: 'Wierzchosławice' },
  { slug: 'wojnicz', name: 'Wojnicz' },
  { slug: 'plesna', name: 'Pleśna' },
  { slug: 'dabrowa-tarnowska', name: 'Dąbrowa Tarnowska' },
  { slug: 'ryglice', name: 'Ryglice' },
  { slug: 'szerzyny', name: 'Szerzyny' },
  { slug: 'radlow', name: 'Radłów' },
  { slug: 'olesno', name: 'Olesno' },
  { slug: 'szczucin', name: 'Szczucin' },
  { slug: 'ciezkowice', name: 'Ciężkowice' },
  { slug: 'zakliczyn', name: 'Zakliczyn' },
  { slug: 'gromnik', name: 'Gromnik' },
  { slug: 'czarna', name: 'Czarna' },
  { slug: 'borzecin', name: 'Borzęcin' },
  { slug: 'brzesko', name: 'Brzesko' },
  { slug: 'debno', name: 'Dębno' },
  { slug: 'wola-rzedzinska', name: 'Wola Rzędzińska' },
  { slug: 'zglobice', name: 'Zgłobice' },
  { slug: 'koszyce-male', name: 'Koszyce Małe' },
  { slug: 'koszyce-wielkie', name: 'Koszyce Wielkie' },
  { slug: 'ladna', name: 'Ładna' },
  { slug: 'jodlowka-walki', name: 'Jodłówka-Wałki' },
  { slug: 'pogorska-wola', name: 'Pogórska Wola' },
  { slug: 'zbylitowska-gora', name: 'Zbylitowska Góra' }
];

export type LocalSeoPage = {
  slug: string;
  city: string;
  travelTime: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localKeywords: string[];
  localFaq: FAQ[];
  areaCoverage: string[];
  audience: string[];
  audienceSections: { segment: string; pain: string; value: string }[];
  services: string[];
  cta: string;
  longSections: { title: string; content: string }[];
  nearbyLocations: string[];
};

const topLocations = [
  { city: 'Tarnów', slug: 'sprzatanie-tarnow', travelTime: 'do 20 minut' },
  { city: 'Mościce', slug: 'sprzatanie-moscice', travelTime: 'do 25 minut' },
  { city: 'Skrzyszów', slug: 'sprzatanie-skrzyszow', travelTime: 'do 20 minut' },
  { city: 'Tuchów', slug: 'sprzatanie-tuchow', travelTime: 'do 30 minut' },
  { city: 'Żabno', slug: 'sprzatanie-zabno', travelTime: 'do 35 minut' },
  { city: 'Lisia Góra', slug: 'sprzatanie-lisia-gora', travelTime: 'do 20 minut' },
  { city: 'Wierzchosławice', slug: 'sprzatanie-wierzchoslawice', travelTime: 'do 25 minut' },
  { city: 'Wojnicz', slug: 'sprzatanie-wojnicz', travelTime: 'do 30 minut' },
  { city: 'Pleśna', slug: 'sprzatanie-plesna', travelTime: 'do 30 minut' },
  { city: 'Dąbrowa Tarnowska', slug: 'sprzatanie-dabrowa-tarnowska', travelTime: 'do 40 minut' }
];

const additionalLocations = [
  { city: 'Ryglice', slug: 'sprzatanie-ryglice', travelTime: 'do 35 minut' },
  { city: 'Szerzyny', slug: 'sprzatanie-szerzyny', travelTime: 'do 45 minut' },
  { city: 'Radłów', slug: 'sprzatanie-radlow', travelTime: 'do 30 minut' },
  { city: 'Olesno', slug: 'sprzatanie-olesno', travelTime: 'do 30 minut' },
  { city: 'Szczucin', slug: 'sprzatanie-szczucin', travelTime: 'do 50 minut' },
  { city: 'Ciężkowice', slug: 'sprzatanie-ciezkowice', travelTime: 'do 45 minut' },
  { city: 'Zakliczyn', slug: 'sprzatanie-zakliczyn', travelTime: 'do 40 minut' },
  { city: 'Gromnik', slug: 'sprzatanie-gromnik', travelTime: 'do 35 minut' },
  { city: 'Czarna', slug: 'sprzatanie-czarna', travelTime: 'do 30 minut' },
  { city: 'Borzęcin', slug: 'sprzatanie-borzecin', travelTime: 'do 45 minut' },
  { city: 'Brzesko', slug: 'sprzatanie-brzesko', travelTime: 'do 45 minut' },
  { city: 'Dębno', slug: 'sprzatanie-debno', travelTime: 'do 50 minut' },
  { city: 'Wola Rzędzińska', slug: 'sprzatanie-wola-rzedzinska', travelTime: 'do 20 minut' },
  { city: 'Zgłobice', slug: 'sprzatanie-zglobice', travelTime: 'do 20 minut' },
  { city: 'Koszyce Małe', slug: 'sprzatanie-koszyce-male', travelTime: 'do 20 minut' },
  { city: 'Koszyce Wielkie', slug: 'sprzatanie-koszyce-wielkie', travelTime: 'do 20 minut' },
  { city: 'Ładna', slug: 'sprzatanie-ladna', travelTime: 'do 20 minut' },
  { city: 'Jodłówka-Wałki', slug: 'sprzatanie-jodlowka-walki', travelTime: 'do 25 minut' },
  { city: 'Pogórska Wola', slug: 'sprzatanie-pogorska-wola', travelTime: 'do 30 minut' },
  { city: 'Zbylitowska Góra', slug: 'sprzatanie-zbylitowska-gora', travelTime: 'do 20 minut' }
];

const longSectionTemplate = (city: string, travelTime: string) => ([
  {
    title: `Sprzątanie ${city}: dlaczego lokalna firma daje realną przewagę`,
    content: `Jeżeli wpisujesz w Google frazę „sprzątanie ${city}”, najpewniej nie szukasz przypadkowej ekipy, ale partnera, który dojedzie o umówionej godzinie, wykona usługę bez chaosu organizacyjnego i zostawi po sobie efekt, który od razu widać. Zielony Błysk działa w Tarnowie i okolicy do około 30 km, dlatego organizujemy pracę tak, aby klient nie tracił czasu na wielokrotne telefony i niejasne ustalenia. W praktyce oznacza to krótki proces: zgłoszenie, szybki kontakt zwrotny, konkretny zakres i termin, a potem realizacja. Dla mieszkańców ${city} ważna jest przewidywalność — kiedy ekipa ma dojazd ${travelTime}, łatwiej zaplanować sprzątanie mieszkania przed wynajmem, przygotowanie domu na święta, serwis biura po godzinach czy gruntowne czyszczenie po remoncie. Pracujemy na profesjonalnych środkach i sprzęcie, ale najważniejsze jest to, że myślimy procesowo: inna kolejność działań dla lokalu po remoncie, inna dla biura z ruchem klientów i inna dla wspólnoty mieszkaniowej. Dzięki temu nie płacisz za „ogólne porządki”, tylko za efekt dopasowany do konkretnego celu biznesowego lub prywatnego.`
  },
  {
    title: `Jakie usługi wykonujemy w ${city}`,
    content: `Najczęściej realizujemy cztery grupy zleceń. Po pierwsze sprzątanie mieszkań i domów: od odkurzania, mycia podłóg i łazienek po doczyszczanie kuchni, sprzętów AGD oraz stref trudnych, gdzie gromadzi się tłuszcz i kurz. Po drugie sprzątanie biur i lokali usługowych: stanowiska pracy, zaplecza socjalne, sanitariaty, witryny, wejścia i strefy obsługi klienta. Po trzecie sprzątanie po remoncie i po budowie, czyli usuwanie pyłu pobudowlanego, mycie stolarki, doczyszczanie fug, listew i detali wykończeniowych. Po czwarte obsługa wspólnot i zarządców: klatki schodowe, korytarze, windy, wejścia, garaże oraz otoczenie budynków. W ${city} łączymy te usługi w pakiety jednorazowe i abonamentowe, bo część klientów potrzebuje szybkiego „resetu” przestrzeni, a część stałego standardu tydzień po tygodniu. Każdy pakiet można rozszerzyć o mycie okien, pranie tapicerki, czyszczenie kostki lub ozonowanie. To istotne zwłaszcza wtedy, gdy liczy się czas i chcesz zamknąć temat porządków w jednej współpracy, bez kontaktu z kilkoma wykonawcami.`
  },
  {
    title: `Dla kogo pracujemy: dom, firma, wspólnota`,
    content: `W segmencie klientów indywidualnych obsługujemy osoby zapracowane, rodziny z dziećmi, seniorów oraz właścicieli mieszkań na wynajem. W tym modelu liczy się wygoda: krótki formularz, szybka wycena i termin dopasowany do rytmu dnia. Dla firm kluczowe są inne parametry: punktualność, elastyczne godziny serwisu, możliwość pracy poza godzinami operacyjnymi, faktura VAT i stała jakość niezależnie od pory roku. Dlatego w biurach i lokalach usługowych wdrażamy checklisty i powtarzalne standardy. Z kolei wspólnoty i zarządcy potrzebują przewidywalności, bo odpowiadają przed mieszkańcami za estetykę części wspólnych oraz bezpieczeństwo użytkowania przestrzeni. W ${city} realizujemy harmonogramy tygodniowe i miesięczne, z raportowaniem wykonania i możliwością interwencji. Ten podział na segmenty nie jest marketingowym hasłem — to sposób na szybszą decyzję klienta i wyższą konwersję, ponieważ każda grupa trafia na podstronę ze swoim językiem korzyści, inną ofertą i osobnym CTA.`
  },
  {
    title: `Jak szybko dojeżdżamy do ${city} i jak wygląda organizacja`,
    content: `Dojazd do ${city} zajmuje nam zwykle ${travelTime}. Dzięki temu możemy obsługiwać zarówno zaplanowane serwisy cykliczne, jak i zlecenia pilne: mieszkanie do oddania najemcy, lokal po zakończonym remoncie, biuro przed wizytą klienta lub część wspólną po intensywnym weekendzie. Na etapie zgłoszenia zbieramy tylko dane, które realnie wpływają na koszt i harmonogram: metraż, rodzaj obiektu, poziom zabrudzeń, oczekiwany termin i zakres usługi. Następnie dostajesz propozycję wariantu podstawowego oraz opcjonalnych rozszerzeń, aby decyzja była szybka i transparentna. W dniu realizacji pracujemy według kolejności minimalizującej ryzyko poprawek, a po zakończeniu potwierdzamy wykonanie. Taki model sprawdza się w lokalnym SEO, bo użytkownik otrzymuje od razu konkretną odpowiedź na pytania zakupowe: czy dojeżdżacie, kiedy możecie wejść, ile to kosztuje i co dokładnie obejmuje usługa.`
  },
  {
    title: `Sprzątanie po remoncie ${city} — usługa wysokiej intencji zakupowej`,
    content: `Fraza „sprzątanie po remoncie ${city}” ma jedną z najwyższych intencji transakcyjnych, ponieważ klient zwykle potrzebuje pomocy natychmiast i chce osiągnąć gotowość lokalu do użytkowania. Właśnie dlatego ta usługa ma osobny landing i osobny przekaz. W praktyce zaczynamy od usunięcia pyłu z powierzchni poziomych i pionowych, następnie przechodzimy do stolarki, osprzętu, fug, listew oraz elementów wymagających pracy detalicznej. Osobno traktujemy przeszklenia i łazienki, gdzie po remoncie często zostają osady po materiałach budowlanych. Dla klientów z ${city} ważne jest, że potrafimy pracować etapowo: najpierw porządki po ekipach, potem dopracowanie przed odbiorem i finalny serwis przygotowujący wnętrze do zamieszkania lub uruchomienia działalności. Dzięki lokalnej logistyce skracamy czas między końcem remontu a wejściem użytkownika, co przekłada się bezpośrednio na oszczędność i komfort.`
  },
  {
    title: `Cennik, wycena i model współpracy`,
    content: `Wycena w Zielonym Błysku jest bezpłatna i niezobowiązująca. Dla klientów z ${city} pokazujemy stawki „od”, bo końcowa cena zależy od metrażu, częstotliwości, poziomu zabrudzeń i dodatkowych usług. Najważniejsze jest jednak to, że każda wycena ma czytelny zakres: klient wie, co jest w pakiecie, co można dokupić i w jakiej cenie. Przy współpracy cyklicznej proponujemy model abonamentowy, który stabilizuje koszt i ułatwia planowanie. W segmencie firm i wspólnot największą wartością jest przewidywalność budżetu oraz jakość utrzymywana miesiąc po miesiącu. W segmencie mieszkań i domów dominują zlecenia jednorazowe połączone z opcją powrotu w ustalonym rytmie. Taki układ wspiera konwersję, ponieważ usuwa główne bariery zakupowe: obawę przed ukrytymi kosztami, niepewność co do zakresu oraz brak jasnej ścieżki kontaktu.`
  },
  {
    title: `SEO lokalne dla ${city}: jak budujemy widoczność i leady`,
    content: `Ta podstrona jest częścią większego systemu stron lokalnych przygotowanego pod frazy: „sprzątanie ${city}”, „firma sprzątająca ${city}”, „sprzątanie po remoncie ${city}” i „sprzątanie biur ${city}”. Każda lokalizacja ma unikalny nagłówek, treść sprzedażową, lokalne FAQ, sekcję obszaru działania i siatkę linków wewnętrznych do sąsiednich miejscowości. Dzięki temu Google lepiej rozumie kontekst geograficzny, a użytkownik łatwiej przechodzi między podstronami i usługami. Dodatkowo stosujemy dane strukturalne LocalBusiness, FAQ i BreadcrumbList, aby zwiększyć czytelność strony dla wyszukiwarki i poprawić CTR w wynikach. Treść została zaprojektowana tak, by odpowiadać jednocześnie na pytania informacyjne i transakcyjne: kto świadczy usługę, jaki jest zakres, ile trwa dojazd, dla kogo to rozwiązanie i jak szybko można zacząć. To fundament systemu generowania klientów, a nie tylko wizytówki firmy.`
  },
  {
    title: `Dlaczego klienci z ${city} wracają`,
    content: `Na rynku usług porządkowych wygrywa nie najtańsza oferta, ale powtarzalność efektu i dobra komunikacja. Dlatego w ${city} skupiamy się na punktualności, przewidywalnym standardzie i szybkim reagowaniu. Klienci wracają, bo wiedzą, że po zleceniu nie zostają z listą poprawek. Dla osób prywatnych oznacza to więcej czasu i mniej stresu. Dla firm — lepsze doświadczenie pracowników oraz klientów odwiedzających biuro czy lokal usługowy. Dla wspólnot i zarządców — mniejszą liczbę zgłoszeń i spokojniejsze utrzymanie nieruchomości. Jeżeli potrzebujesz jednorazowego mocnego wejścia, wykonamy usługę od A do Z. Jeżeli szukasz długofalowej współpracy, ustawimy harmonogram i standardy, które można skalować na wiele adresów. W obu przypadkach celem jest ten sam rezultat: czysta przestrzeń, która pracuje na Twój komfort, wizerunek i wyniki.`
  },
  {
    title: `Umów sprzątanie w ${city} — szybkie CTA`,
    content: `Jeśli interesuje Cię skuteczne i terminowe sprzątanie ${city}, zadzwoń lub wyślij formularz. Otrzymasz szybką odpowiedź, orientacyjną wycenę i najbliższy możliwy termin realizacji. Obsługujemy mieszkania, domy, biura, wspólnoty i obiekty po remoncie. Działamy lokalnie, więc nie tracisz czasu na długie oczekiwanie i wieloetapowe ustalenia. Możesz zamówić jednorazowe sprzątanie lub stałą współpracę abonamentową. Jeżeli zależy Ci na porównaniu opcji, przygotujemy dwa warianty: podstawowy i rozszerzony, aby łatwo dopasować usługę do budżetu. Zostaw kontakt już teraz — oddzwonimy i przeprowadzimy Cię przez cały proces krok po kroku.`
  }
]);

export const localSeoPages: LocalSeoPage[] = [...topLocations, ...additionalLocations].map((loc, index, all) => {
  const related = all.filter((x) => x.slug !== loc.slug).slice(index % 6, (index % 6) + 6).map((x) => x.city);
  return {
    slug: loc.slug,
    city: loc.city,
    travelTime: loc.travelTime,
    h1: `Sprzątanie ${loc.city} — firma sprzątająca dla domu, biura i wspólnot`,
    metaTitle: `Sprzątanie ${loc.city} | Firma sprzątająca Zielony Błysk`,
    metaDescription: `Sprzątanie ${loc.city}: mieszkania, biura, wspólnoty i sprzątanie po remoncie. Dojazd ${loc.travelTime}, szybka wycena i wolne terminy.`,
    intro: `Realizujemy sprzątanie w ${loc.city} i okolicach. Obsługujemy klientów indywidualnych, firmy oraz wspólnoty mieszkaniowe w modelu jednorazowym i abonamentowym.`,
    localKeywords: [`sprzątanie ${loc.city}`, `firma sprzątająca ${loc.city}`, `sprzątanie po remoncie ${loc.city}`, `sprzątanie biur ${loc.city}`],
    localFaq: [
      { q: `Ile kosztuje sprzątanie w ${loc.city}?`, a: 'Wycena zależy od metrażu i zakresu. Wysyłamy jasną ofertę z cenami „od” i zakresem pakietu.' },
      { q: `Czy dojeżdżacie szybko do ${loc.city}?`, a: `Tak, standardowy czas dojazdu to ${loc.travelTime}.` },
      { q: `Czy obsługujecie firmy i wspólnoty w ${loc.city}?`, a: 'Tak, prowadzimy zarówno zlecenia jednorazowe, jak i kontrakty cykliczne z fakturą VAT.' }
    ],
    areaCoverage: related,
    audience: ['Dom i mieszkanie', 'Firma i biuro', 'Wspólnota i zarządca'],
    audienceSections: [
      { segment: 'Dom / mieszkanie', pain: `Brak czasu na porządki i potrzeba szybkiego efektu w ${loc.city}.`, value: 'Jeden kontakt, jasna wycena i wygodny termin.' },
      { segment: 'Firma / biuro', pain: `Nierówny standard czystości i ryzyko gorszego odbioru marki w ${loc.city}.`, value: 'Stały harmonogram, raportowanie i faktura VAT.' },
      { segment: 'Wspólnota / zarządca', pain: `Skargi mieszkańców na części wspólne i brak regularności serwisu w ${loc.city}.`, value: 'Powtarzalny standard, zdjęcia po realizacji i interwencje.' }
    ],
    services: ['sprzątanie mieszkań', 'sprzątanie po remoncie', 'sprzątanie biur', 'sprzątanie wspólnot'],
    cta: `Umów sprzątanie w ${loc.city}`,
    longSections: longSectionTemplate(loc.city, loc.travelTime),
    nearbyLocations: related
  };
});

export const top10SeoLocations = topLocations.map((loc) => loc.slug);

export const adLandingPages = [
  { slug: 'sprzatanie-mieszkan-tarnow', keyword: 'sprzątanie mieszkań Tarnów', usp: 'Lokalna ekipa, szybki termin i jasny cennik.' },
  { slug: 'sprzatanie-po-remoncie-tarnow', keyword: 'sprzątanie po remoncie Tarnów', usp: 'Usuwamy pył i zabrudzenia po ekipach remontowych.' },
  { slug: 'sprzatanie-biur-tarnow', keyword: 'sprzątanie biur Tarnów', usp: 'Stały standard czystości i faktura VAT.' },
  { slug: 'sprzatanie-wspolnot-tarnow', keyword: 'sprzątanie wspólnot Tarnów', usp: 'Regularna obsługa części wspólnych i raport wykonania.' },
  { slug: 'firma-sprzatajaca-tarnow', keyword: 'firma sprzątająca Tarnów', usp: 'Jedna firma do domu, biura i wspólnoty.' },
];

export const siteFaq: FAQ[] = [
  { q: 'Ile kosztuje sprzątanie w Tarnowie?', a: 'Ceny orientacyjne: od 180 zł (mieszkania), od 2,90 zł/m² (biura), od 550 zł/mies. (wspólnoty).' },
  { q: 'Czy działacie poza Tarnowem?', a: 'Tak, działamy w promieniu do 30 km od Tarnowa.' },
  { q: 'Jaki jest zasięg działania?', a: 'Obsługujemy m.in. Mościce, Skrzyszów, Wierzchosławice, Lisią Górę, Żabno, Tuchów, Wojnicz i Pleśną.' },
  { q: 'Czy obsługujecie firmy?', a: 'Tak, realizujemy usługi jednorazowe i abonamentowe dla firm i biur.' },
  { q: 'Czy obsługujecie wspólnoty mieszkaniowe?', a: 'Tak, sprzątamy klatki, części wspólne, garaże i otoczenie budynków.' },
  { q: 'Czy wystawiacie faktury VAT?', a: 'Tak, do każdej usługi wystawiamy fakturę VAT.' },
  { q: 'Czy można zamówić stałą współpracę?', a: 'Tak, przygotowujemy pakiety abonamentowe dopasowane do potrzeb.' },
  { q: 'Jak szybko można umówić termin?', a: 'W wielu przypadkach możliwy jest termin w ciągu 24–48 godzin.' },
  { q: 'Czy przyjeżdżacie z własnymi środkami?', a: 'Tak, pracujemy na własnym sprzęcie i profesjonalnych środkach czystości.' },
  { q: 'Czy wykonujecie sprzątanie po remoncie?', a: 'Tak, to jedna z naszych kluczowych usług.' },
  { q: 'Czy wycena jest darmowa?', a: 'Tak, wycena jest bezpłatna i niezobowiązująca.' }
];

export const pricingTables = {
  indywidualny: [
    { pack: 'Standard', price: 'od 180 zł', scope: 'Mieszkanie do 50 m²: podłogi, łazienka, kuchnia, kurze.' },
    { pack: 'Premium', price: 'od 260 zł', scope: 'Dom/mieszkanie do 120 m² + usługi dodatkowe.' },
    { pack: 'Abonament', price: 'od 540 zł/mies.', scope: 'Cykliczne sprzątanie 2–4 razy miesięcznie.' }
  ],
  biznes: [
    { pack: 'Start', price: 'od 799 zł/mies.', scope: 'Małe biura i lokale usługowe, stały harmonogram.' },
    { pack: 'Biuro', price: 'od 2,90 zł/m²', scope: 'Kompleksowa obsługa biura z fakturą VAT.' },
    { pack: 'Premium', price: 'od 1490 zł/mies.', scope: 'Większe powierzchnie, wiele stref, raportowanie.' }
  ],
  wspolnoty: [
    { pack: 'Klatki', price: 'od 550 zł/mies.', scope: 'Klatki schodowe i wejścia, serwis cykliczny.' },
    { pack: 'Standard', price: 'od 890 zł/mies.', scope: 'Części wspólne + garaże/otoczenie.' },
    { pack: 'Premium', price: 'od 1290 zł/mies.', scope: 'Rozszerzony zakres i częstsza realizacja.' }
  ]
};

export const beforeAfterCases = [
  { id: 'ba1', title: 'Mieszkanie po najemcy', service: 'sprzątanie mieszkań', location: 'Tarnów', problem: 'Silne zabrudzenia kuchni i łazienki po wyprowadzce najemcy.', scope: 'Gruntowne mycie kuchni, łazienki i podłóg, odświeżenie całości.', result: 'Mieszkanie gotowe do sesji zdjęciowej i kolejnego wynajmu.' },
  { id: 'ba2', title: 'Biuro po modernizacji', service: 'sprzątanie po remoncie', location: 'Mościce', problem: 'Pył budowlany i zabrudzone przeszklenia po pracach fit-out.', scope: 'Odkurzanie przemysłowe, doczyszczanie stref pracy, mycie przeszkleń.', result: 'Gotowość biura do powrotu zespołu następnego dnia.' },
  { id: 'ba3', title: 'Klatka schodowa wspólnoty', service: 'sprzątanie klatek', location: 'Wierzchosławice', problem: 'Nieregularne utrzymanie i narastające zabrudzenia.', scope: 'Wdrożenie serwisu 2x tygodniowo i miesięczne doczyszczanie.', result: 'Stały standard i mniej zgłoszeń od mieszkańców.' }
];

export const testimonials = [
  { name: 'Anna, Tarnów', role: 'managerka biura', stars: 5, text: 'Szybki kontakt, konkretna wycena i bardzo dobra jakość. Współpracujemy na stałe.' },
  { name: 'Julia, Mościce', role: 'właścicielka mieszkania', stars: 5, text: 'Mieszkanie po sprzątaniu wyglądało jak nowe. Plus za punktualność i kulturę pracy.' },
  { name: 'Michał, Tarnów', role: 'właściciel firmy', stars: 5, text: 'Sprzątanie po remoncie wykonane terminowo, bez poprawek. Polecam do zadań specjalnych.' }
];

export const blogPosts = [
  { slug: 'ile-kosztuje-sprzatanie-mieszkania-w-tarnowie', title: 'Ile kosztuje sprzątanie mieszkania w Tarnowie?', excerpt: 'Przegląd cen, od czego zależy koszt i jak przygotować mieszkanie do wyceny.' },
  { slug: 'ile-kosztuje-sprzatanie-po-remoncie-w-tarnowie', title: 'Ile kosztuje sprzątanie po remoncie w Tarnowie?', excerpt: 'Najczęstsze widełki cenowe i zakres usługi po pracach remontowych.' },
  { slug: 'jak-wybrac-firme-sprzatajaca-w-tarnowie', title: 'Jak wybrać firmę sprzątającą w Tarnowie?', excerpt: 'Lista kontrolna dla klientów indywidualnych, firm i wspólnot.' },
  { slug: 'sprzatanie-biur-tarnow-na-co-zwrocic-uwage', title: 'Sprzątanie biur Tarnów – na co zwrócić uwagę?', excerpt: 'Wskaźniki jakości, SLA i organizacja serwisu bez zakłóceń pracy.' },
  { slug: 'sprzatanie-wspolnot-jak-wybrac-wykonawce', title: 'Sprzątanie wspólnot – jak wybrać wykonawcę?', excerpt: 'Jak porównać oferty i zapisać jasne zasady współpracy w umowie.' },
  { slug: 'jak-przygotowac-mieszkanie-do-sprzedazy', title: 'Jak przygotować mieszkanie do sprzedaży?', excerpt: 'Praktyczny plan sprzątania i przygotowania nieruchomości do prezentacji.' },
  { slug: 'gdzie-dzialamy-w-okolicach-tarnowa', title: 'Gdzie działamy w okolicach Tarnowa?', excerpt: 'Aktualny obszar działania i zasady dojazdu do klientów.' }
];
