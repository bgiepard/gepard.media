import { useState } from 'react';
import { NavHeader } from '@/components/NavHeader';
import { useFullPageScroll } from '@/hooks/useFullPageScroll';
import SectionLeft from '@/views/sections/SectionLeft';
import SectionMocks from '@/views/sections/SectionMocks';
import SectionReferencje from '@/views/sections/SectionReferencjeD';
import SectionRealizacje from '@/views/sections/SectionRealizacje';
import SectionProces from '@/views/sections/SectionProces';
import SectionCta from '@/views/sections/SectionCta';
import ContactModal from '@/components/ContactModal';

const SECTIONS = 5;

const ArrowUp = () => (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
        <polyline points='18 15 12 9 6 15' />
    </svg>
);
const ArrowDown = () => (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
        <polyline points='6 9 12 15 18 9' />
    </svg>
);

export default function HeroVariantC() {
    const { current: section, goTo, duration } = useFullPageScroll(SECTIONS);
    const [modalOpen, setModalOpen] = useState(false);
    const canUp   = section > 0;
    const canDown = section < SECTIONS - 1;

    return (
        <>
            <NavHeader onContact={() => setModalOpen(true)} />
            <SectionLeft section={section} total={SECTIONS} goTo={goTo} onContact={() => setModalOpen(true)} />
            {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}

            {/* Prawa strona: slider */}
            <div className='fixed right-0 top-0 h-screen w-1/2 overflow-hidden'>

                {/* Scroll down — środek dolny */}
                {canDown && (
                    <button
                        onClick={() => goTo(section + 1)}
                        className='absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors duration-300'
                        aria-label='Następna sekcja'
                    >
                        <span className='text-xs font-medium tracking-widest uppercase'>Zobacz więcej</span>
                        <svg className='animate-bounce' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                            <polyline points='6 9 12 15 18 9' />
                        </svg>
                    </button>
                )}

                {/* Strzałki nawigacyjne — lewy dolny róg, wariant 5 */}
                <div className='absolute bottom-10 left-5 z-20 flex flex-col gap-2'>
                    <button onClick={() => goTo(section - 1)} disabled={!canUp} className={`flex h-8 w-8 items-center justify-center rounded-full transition-all disabled:cursor-not-allowed ${canUp ? 'bg-[#f7bc0a] text-black hover:opacity-80' : 'border border-white/15 text-white/20 opacity-20'}`}>
                        <ArrowUp />
                    </button>
                    <button onClick={() => goTo(section + 1)} disabled={!canDown} className={`flex h-8 w-8 items-center justify-center rounded-full transition-all disabled:cursor-not-allowed ${canDown ? 'bg-[#f7bc0a] text-black hover:opacity-80' : 'border border-white/15 text-white/20 opacity-20'}`}>
                        <ArrowDown />
                    </button>
                </div>

                <div
                    style={{
                        transform: `translateY(-${section * 100}vh)`,
                        transition: `transform ${duration}ms cubic-bezier(0.86, 0, 0.07, 1)`,
                        willChange: 'transform',
                    }}
                >
                    <SectionMocks />
                    <SectionReferencje />
                    <SectionRealizacje />
                    <SectionProces />
                    <SectionCta />
                </div>
            </div>
        </>
    );
}
