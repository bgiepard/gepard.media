import { useState, useEffect, useRef } from 'react';
import {
    MockStrona,
    MockSklep,
    MockAppMobilna,
    MockWebDesign,
    MockPozycjonowanie,
    MockSocialMedia,
} from '@/components/HeroMocks';
import MockVariantB from './mocks/MockVariantB';

export type Tab = {
    label: string;
    mock: React.ComponentType;
    desc: string;
};

const tabs: Tab[] = [
    { label: 'Strony www', mock: MockStrona, desc: 'Projektujemy i wdrażamy szybkie, nowoczesne strony dopasowane do Twojej marki i celów biznesowych. Każda strona jest w pełni responsywna i zoptymalizowana pod kątem SEO. Dbamy o to, żeby nie tylko dobrze wyglądała, ale przede wszystkim konwertowała.' },
    { label: 'Sklepy e-commerce', mock: MockSklep, desc: 'Tworzymy sklepy internetowe z intuicyjnym UX, który prowadzi klienta prosto do kasy. Integrujemy popularne bramki płatności, systemy magazynowe i narzędzia analityczne. Twój sklep będzie gotowy na sprzedaż od pierwszego dnia.' },
    { label: 'Aplikacje mobilne', mock: MockAppMobilna, desc: 'Budujemy natywne i hybrydowe aplikacje na iOS i Android – od pomysłu przez projekt aż po wdrożenie w App Store i Google Play. Stawiamy na wydajność, intuicyjność i spójny design. Tworzymy aplikacje, z których ludzie chcą korzystać.' },
    { label: 'Web design', mock: MockWebDesign, desc: 'Projektujemy interfejsy w Figma – makiety, interaktywne prototypy i kompletne systemy designu spójne z Twoją marką. Każdy projekt poprzedzamy analizą potrzeb użytkowników i warsztatami z klientem. Efekt? Design, który wygląda świetnie i działa jeszcze lepiej.' },
    { label: 'Pozycjonowanie', mock: MockPozycjonowanie, desc: 'Przeprowadzamy szczegółowe audyty SEO i wdrażamy optymalizację techniczną, która realnie wpływa na pozycje w Google. Łączymy działania on-site z content marketingiem, który przyciąga wartościowy ruch. Stawiamy na długoterminowe efekty, nie sztuczki.' },
    { label: 'Social media', mock: MockSocialMedia, desc: 'Budujemy strategię obecności w mediach społecznościowych dopasowaną do Twojej grupy docelowej i celów marki. Tworzymy angażujące treści, grafiki i kampanie na Instagramie, Facebooku i LinkedIn. Ty skupiasz się na biznesie – my dbamy o zasięgi i społeczność.' },
];

const INTERVAL = 4000;

export default function SectionMocks() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const pausedRef = useRef(false);
    const Mock = tabs[active].mock;

    useEffect(() => { pausedRef.current = paused; }, [paused]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!pausedRef.current) setActive(i => (i + 1) % tabs.length);
        }, INTERVAL);
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className='h-screen bg-[#111111]'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <MockVariantB tabs={tabs} active={active} setActive={setActive} Mock={Mock} />
        </div>
    );
}
