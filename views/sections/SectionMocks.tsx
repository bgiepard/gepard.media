import { useState, useEffect, useRef } from 'react';
import {
    MockStrona,
    MockSklep,
    MockAppMobilna,
    MockWebDesign,
    MockPozycjonowanie,
    MockSocialMedia,
} from '@/components/HeroMocks';

const tabs = [
    { label: 'Strony www', mock: MockStrona },
    { label: 'Sklepy e-commerce', mock: MockSklep },
    { label: 'Aplikacje mobilne', mock: MockAppMobilna },
    { label: 'Web design', mock: MockWebDesign },
    { label: 'Pozycjonowanie', mock: MockPozycjonowanie },
    { label: 'Social media', mock: MockSocialMedia },
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
            className='flex h-screen flex-col justify-center gap-5 bg-[#111111] px-14 py-24'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <p className='text-xs font-bold uppercase tracking-widest text-white/30'>Co robimy</p>
            <div className='h-[350px] w-[600px]'>
                <div key={active} className='animate-slide-in h-full'>
                    <Mock />
                </div>
            </div>
            <div className='flex flex-wrap gap-2 w-[600px] '>
                {tabs.map((tab, i) => (
                    <button
                        key={tab.label}
                        onClick={() => setActive(i)}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                            active === i
                                ? 'bg-black text-white'
                                : 'text-white/35 hover:text-white/70'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
