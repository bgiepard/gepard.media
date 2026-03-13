import DotGrid from '@/components/DotGrid';
import MetaBalls from '@/components/MetaBalls';

interface Props {
    section: number;
    total: number;
    goTo: (i: number) => void;
}

export default function SectionLeft({ section, total, goTo }: Props) {
    return (
        <div className='fixed left-0 top-0 z-2 flex h-screen w-1/2 items-center justify-end bg-[#f7bc0a]'>
            <div className='absolute inset-0'>
                <DotGrid
                    dotSize={4}
                    gap={20}
                    baseColor='rgba(0,0,0,0.05)'
                    proximity={50}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>
            <div className='absolute inset-0'>
                <MetaBalls
                    color='#000000'
                    cursorBallColor='#000000'
                    cursorBallSize={3}
                    ballCount={16}
                    animationSize={30}
                    enableTransparency={true}
                    clumpFactor={2.5}
                    speed={0.05}
                />
            </div>
            <div className='relative z-10 flex w-[600px] flex-col justify-center pr-12'>
                <h1 className='flex flex-col gap-4 leading-none text-black'>
                    <span
                        className='text-[5rem] font-extrabold leading-[0.85]'
                        style={{ WebkitTextStroke: '2px #f7bc0a' }}
                    >
                        Twój<br /><span>pomysł.</span>
                    </span>
                    <span
                        className='text-[5rem] font-extrabold'
                        style={{ WebkitTextStroke: '2px #f7bc0a' }}
                    >Nasza<br />prędkość.</span>
                    <span className='text-[5rem] font-extrabold text-white'>Wspólny<br />sukces.</span>
                </h1>
                <div className='mt-12 flex items-center gap-6'>
                    <button className='rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-75'>
                        Bezpłatna wycena
                    </button>
                    <button className='flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-50'>
                        Nasi klienci <span>→</span>
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
