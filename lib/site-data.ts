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
  { slug: 'wierzchoslawice', name: 'Wierzchosławice' },
  { slug: 'lisia-gora', name: 'Lisia Góra' },
  { slug: 'zabno', name: 'Żabno' },
  { slug: 'tuchow', name: 'Tuchów' },
  { slug: 'wojnicz', name: 'Wojnicz' },
  { slug: 'plesna', name: 'Pleśna' },
  { slug: 'okolice-tarnowa', name: 'Okolice Tarnowa' }
];

export const adLandingPages = [
  { slug: 'sprzatanie-mieszkan-tarnow', keyword: 'sprzątanie mieszkań Tarnów', usp: 'Lokalna ekipa, szybki termin i jasny cennik.' },
  { slug: 'sprzatanie-po-remoncie-tarnow', keyword: 'sprzątanie po remoncie Tarnów', usp: 'Usuwamy pył i zabrudzenia po ekipach remontowych.' },
  { slug: 'sprzatanie-biur-tarnow', keyword: 'sprzątanie biur Tarnów', usp: 'Stały standard czystości i faktura VAT.' },
  { slug: 'sprzatanie-wspolnot-tarnow', keyword: 'sprzątanie wspólnot Tarnów', usp: 'Regularna obsługa części wspólnych i raport wykonania.' },
  { slug: 'firma-sprzatajaca-tarnow', keyword: 'firma sprzątająca Tarnów', usp: 'Jedna firma do domu, biura i wspólnoty.' },
  { slug: 'sprzatanie-tarnow-cennik', keyword: 'sprzątanie Tarnów cennik', usp: 'Cennik od, bez ukrytych kosztów, szybka wycena.' }
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
