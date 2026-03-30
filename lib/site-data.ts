export const phone = '+48 600 000 000';
export const email = 'kontakt@zielonyblysk.pl';

export const locations = [
  'Tarnów',
  'Mościce',
  'Skrzyszów',
  'Wierzchosławice',
  'Lisia Góra',
  'Żabno',
  'Tuchów',
  'Dąbrowa Tarnowska',
  'okolice Tarnowa do 30 km'
];

export const services = [
  { slug: 'sprzatanie-mieszkan-tarnow', name: 'Sprzątanie mieszkań Tarnów', segment: 'indywidualni' },
  { slug: 'sprzatanie-domow-tarnow', name: 'Sprzątanie domów Tarnów', segment: 'indywidualni' },
  { slug: 'sprzatanie-biur-tarnow', name: 'Sprzątanie biur Tarnów', segment: 'biznes' },
  { slug: 'sprzatanie-firm-tarnow', name: 'Sprzątanie firm Tarnów', segment: 'biznes' },
  { slug: 'sprzatanie-wspolnot-mieszkaniowych-tarnow', name: 'Sprzątanie wspólnot mieszkaniowych Tarnów', segment: 'wspolnoty' },
  { slug: 'sprzatanie-po-remoncie-tarnow', name: 'Sprzątanie po remoncie Tarnów', segment: 'inwestycje' },
  { slug: 'mycie-okien-tarnow', name: 'Mycie okien Tarnów', segment: 'dodatkowe' },
  { slug: 'pranie-tapicerki-tarnow', name: 'Pranie tapicerki Tarnów', segment: 'dodatkowe' }
];

export const audienceSections = [
  {
    title: 'Klienci indywidualni',
    text: 'Regularne i jednorazowe sprzątanie mieszkań i domów w Tarnowie oraz okolicach. Idealne dla zabieganych rodzin, seniorów i osób pracujących zdalnie.',
    points: ['Elastyczne terminy 7 dni w tygodniu', 'Bezpieczne środki i checklisty jakości', 'Stały zespół i szybka wycena online']
  },
  {
    title: 'Firmy i biura',
    text: 'Stała obsługa biur, lokali usługowych i przestrzeni handlowych. Pracujemy po godzinach działania firmy, by nie zakłócać pracy zespołu.',
    points: ['Harmonogram dzienny, tygodniowy lub hybrydowy', 'Faktury VAT i opiekun kontraktu', 'Procedury BHP i SLA']
  },
  {
    title: 'Wspólnoty i zarządcy nieruchomości',
    text: 'Kompleksowe utrzymanie części wspólnych, klatek, wind, garaży i otoczenia budynku.',
    points: ['Raporty realizacji i zdjęcia', 'Dyspozycyjność w nagłych sytuacjach', 'Stabilne ceny przy stałej umowie']
  },
  {
    title: 'Klienci po remoncie / inwestycje',
    text: 'Doczyszczanie pyłu budowlanego, usuwanie zabrudzeń poremontowych i przygotowanie lokalu do odbioru lub wynajmu.',
    points: ['Specjalistyczna chemia i sprzęt', 'Krótki czas realizacji', 'Pakiety dla deweloperów']
  },
  {
    title: 'Najemcy i właściciele mieszkań na wynajem',
    text: 'Sprzątanie między najemcami, przygotowanie lokalu do sesji zdjęciowej i przekazania kluczy.',
    points: ['Szybkie terminy „na już”', 'Mycie okien i pranie tapicerki', 'Zestawy startowe pod Airbnb i najem długoterminowy']
  }
];

export const faq = [
  {
    q: 'Czy obsługujecie firmy i biura?',
    a: 'Tak. Realizujemy stałe kontrakty dla biur, lokali usługowych i obiektów handlowych w Tarnowie i okolicach.'
  },
  {
    q: 'Czy oferujecie sprzątanie wspólnot mieszkaniowych?',
    a: 'Tak. Sprzątamy klatki schodowe, windy, części wspólne, garaże i teren zewnętrzny.'
  },
  {
    q: 'Czy możliwa jest stała współpraca?',
    a: 'Tak, przygotowujemy indywidualne harmonogramy i warunki SLA dla klientów biznesowych oraz wspólnot.'
  },
  {
    q: 'Jaki jest zasięg działania?',
    a: 'Działamy w Tarnowie oraz w promieniu do 30 km, w tym m.in. Mościce, Skrzyszów, Wierzchosławice, Żabno i Tuchów.'
  },
  {
    q: 'Czy działacie poza Tarnowem?',
    a: 'Tak. Obsługujemy okolice Tarnowa do 30 km. Przy większych zleceniach ustalamy dojazd indywidualnie.'
  }
];

export const pricing = {
  indywidualni: [
    'Sprzątanie mieszkania od 180 zł',
    'Sprzątanie domu od 260 zł',
    'Mycie okien od 18 zł/m²'
  ],
  biznes: ['Sprzątanie biura od 2,90 zł/m²', 'Pakiet firma+okna od 799 zł/mies.', 'Serwis dzienny od 1490 zł/mies.'],
  wspolnoty: ['Klatki schodowe od 550 zł/mies.', 'Części wspólne premium od 890 zł/mies.', 'Pakiet wspólnota+teren od 1290 zł/mies.']
};
