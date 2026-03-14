import { StaticImageData } from 'next/image';
import corobirobbie from '@/assets/logotypes/corobirobbie.png';
import darimed from '@/assets/logotypes/darimed.png';
import ecopass from '@/assets/logotypes/ecopass.png';
import michalporabaniec from '@/assets/logotypes/michalporabaniec.png';
import vegemiska from '@/assets/logotypes/vegemiska.png';
import vougevintage from '@/assets/logotypes/vougevintage.png';
import weekendjobs from '@/assets/logotypes/weekendjobs.png';
import zintegrowani from '@/assets/logotypes/zintegrowani.png';

export const LOGOS: { src: StaticImageData; name: string }[] = [
    { src: corobirobbie,     name: 'Corobirobbie' },
    { src: darimed,          name: 'Darimed' },
    { src: ecopass,          name: 'Ecopass' },
    { src: michalporabaniec, name: 'Michał Porabaniec' },
    { src: vegemiska,        name: 'Vegemiska' },
    { src: vougevintage,     name: 'Vogue Vintage' },
    { src: weekendjobs,      name: 'Weekend Jobs' },
    { src: zintegrowani,     name: 'Zintegrowani' },
];

export const references = [
    {
        name: 'Anna Kowalska',
        role: 'CEO, TechStartup',
        comment: 'Współpraca z Gepard Media to czysta przyjemność. Projekt zrealizowany szybciej niż zakładaliśmy, a efekt końcowy przeszedł nasze oczekiwania. Zespół słucha, rozumie potrzeby i naprawdę angażuje się w projekt — nie tylko wykonuje zlecenie, ale aktywnie doradza i proponuje rozwiązania.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Marcin Nowak',
        role: 'Founder, eCommerce Pro',
        comment: 'Profesjonalne podejście i świetna komunikacja na każdym etapie projektu. Nasz sklep internetowy działa bez zarzutu, a konwersja wzrosła o ponad 40% w pierwszym miesiącu po wdrożeniu. Polecam każdemu, kto szuka rzetelnego partnera do budowy e-commerce.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Katarzyna Wiśniewska',
        role: 'Marketing Director, BrandHub',
        comment: 'Dostaliśmy stronę, która wyróżnia się na tle konkurencji i realnie wspiera nasze cele marketingowe. Design jest nowoczesny, czytelny i spójny z identyfikacją marki. Co ważne — cały proces przebiegł sprawnie, bez opóźnień i niepotrzebnych komplikacji.',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
        name: 'Piotr Zieliński',
        role: 'CTO, DataFlow',
        comment: 'Szybkość realizacji i dbałość o detale techniczne — dokładnie tego szukaliśmy u partnera technologicznego. Kod jest czysty, aplikacja działa stabilnie, a dokumentacja jest kompletna. Rzadko spotyka się agencję, która tak dobrze rozumie potrzeby zespołu deweloperskiego po stronie klienta.',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
];
