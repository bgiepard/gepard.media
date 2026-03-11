import { useState, useEffect, useRef } from 'react';
import { NavHeader } from '@/components/NavHeader';
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

export default function HeroSection() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const pausedRef = useRef(false);
    const Mock = tabs[active].mock;

    useEffect(() => {
        pausedRef.current = paused;
    }, [paused]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!pausedRef.current) {
                setActive(i => (i + 1) % tabs.length);
            }
        }, INTERVAL);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className='flex min-h-screen flex-col justify-center bg-[#f7bc0a]'>
            <NavHeader />
            <div className='mx-auto flex w-full max-w-[1200px] items-center gap-16 px-3'>

                <div className='w-1/2 flex-1'>
                    <h1 className='text-8xl font-extrabold text-black flex flex-col gap-8'>
                        <span>Twój pomysł.</span>
                        <span>Nasza prędkość.</span>
                        <span className='text-white'>Wspólny sukces.</span>
                    </h1>
                    <div className='mt-10 flex gap-4'>
                        <button className='rounded-full border-2 border-black px-7 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-60'>
                            Nasi klienci
                        </button>
                        <button className='rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-80'>
                            Bezpłatna wycenaa
                        </button>
                    </div>
                </div>

                <div
                    className='w-1/2 hidden flex-1 flex-col gap-4 md:flex'
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div className='h-[350px]'>
                        <div key={active} className='animate-slide-in h-full'>
                            <Mock />
                        </div>
                    </div>
                    <div className='overflow-hidden [mask-image:linear-gradient(to_right,black_60%,transparent_100%)]'>
                        <div className='flex gap-3'>
                            {[...tabs.slice(active), ...tabs.slice(0, active), ...tabs.slice(active), ...tabs.slice(0, active)].map((tab, i) => {
                                const originalIndex = tabs.indexOf(tab);
                                return (
                                    <button
                                        key={i === 0 ? `${tab.label}-${active}` : `${tab.label}-${i}`}
                                        onClick={() => setActive(originalIndex)}
                                        className={`shrink-0 rounded-full border-2 px-5 py-2 text-sm font-semibold transition-colors ${
                                            i === 0
                                                ? 'animate-slide-in border-black bg-black text-white'
                                                : 'border-black/20 text-black hover:border-black/50'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
