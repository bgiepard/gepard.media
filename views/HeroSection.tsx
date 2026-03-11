import { useState } from 'react';
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

export default function HeroSection() {
    const [active, setActive] = useState(0);
    const Mock = tabs[active].mock;

    return (
        <section className='flex min-h-screen flex-col justify-center bg-[#f7bc0a]'>
            <NavHeader />
            <div className='mx-auto flex w-full max-w-[1200px] items-center gap-16 px-3'>

                <div className='flex-1'>
                    <h1 className='text-6xl font-extrabold leading-none text-white md:text-8xl lg:text-9xl'>
                        Twój pomysł.
                        <br />
                        Nasza prędkość.
                        <br />
                        <span className='text-black'>Wspólny sukces.</span>
                    </h1>
                    <div className='mt-10 flex gap-4'>
                        <button className='rounded-full border-2 border-black px-7 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-60'>
                            Nasi klienci
                        </button>
                        <button className='rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-80'>
                            Bezpłatna wycena
                        </button>
                    </div>
                </div>

                <div className='hidden flex-1 flex-col gap-4 md:flex'>
                    <Mock />
                    <div className='flex flex-wrap gap-3'>
                        {tabs.map((tab, i) => (
                            <button
                                key={tab.label}
                                onClick={() => setActive(i)}
                                className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-colors ${
                                    active === i
                                        ? 'border-black bg-black text-white'
                                        : 'border-black/20 text-black hover:border-black/50'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
