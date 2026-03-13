import { NavHeader } from '@/components/NavHeader';
import { useFullPageScroll } from '@/hooks/useFullPageScroll';
import SectionLeft from '@/views/sections/SectionLeft';
import SectionMocks from '@/views/sections/SectionMocks';
import SectionRealizacje from '@/views/sections/SectionRealizacje';
import SectionReferencje from '@/views/sections/SectionReferencje';
import SectionProces from '@/views/sections/SectionProces';
import SectionCta from '@/views/sections/SectionCta';

const SECTIONS = 5;

export default function HeroVariantC() {
    const { current: section, goTo, duration } = useFullPageScroll(SECTIONS);

    return (
        <>
            <NavHeader />
            <SectionLeft section={section} total={SECTIONS} goTo={goTo} />

            {/* Prawa strona: slider */}
            <div className='fixed right-0 top-0 h-screen w-1/2 overflow-hidden'>
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
