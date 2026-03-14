import DotGrid from '@/components/DotGrid';
import MetaBalls from '@/components/MetaBalls';
import { theme } from '@/lib/theme';

interface Props {
    section: number;
    total: number;
    goTo: (i: number) => void;
    onContact: () => void;
}

export default function SectionLeft({ section, total, goTo, onContact }: Props) {
    return (
        <div className='fixed left-0 top-0 z-2 flex h-screen w-1/2 items-center justify-end bg-primary'>
            <div className='absolute inset-0'>
                <DotGrid {...theme.dotGrid} />
            </div>
            <div className='absolute inset-0'>
                <MetaBalls {...theme.metaBalls} enableTransparency={true} />
            </div>
            <div className='relative z-10 flex w-[600px] flex-col items-start justify-center mr-12 pointer-events-none'>
                <h1 className='flex flex-col gap-6 leading-none text-black'>
                    <span
                        className='text-[5rem] font-extrabold leading-[0.85]'
                        style={{ WebkitTextStroke: `2px ${theme.colors.primary}` }}
                    >
                        Twój<br /><span>pomysł.</span>
                    </span>
                    <span
                        className='text-[5rem] font-extrabold'
                        style={{ WebkitTextStroke: `2px ${theme.colors.primary}` }}
                    >Nasza<br />prędkość.</span>
                    <span className='text-[5rem] font-extrabold text-white'>Wspólny<br />sukces.</span>
                </h1>
                <div className='mt-12 flex items-center gap-6 pointer-events-auto'>
                    <button onClick={onContact} className='rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-75'>
                        Darmowa wycena projektu
                    </button>
                </div>
            </div>

            {/* Dots nawigacyjne */}
            <div className='absolute bottom-10 right-5 z-10 flex flex-col gap-3'>
                {Array.from({ length: total }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`rounded-full transition-all duration-300 ${
                            section === i
                                ? 'h-6 w-2 bg-black'
                                : 'h-2 w-2 bg-black/25 hover:bg-black/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
