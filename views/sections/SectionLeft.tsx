interface Props {
    section: number;
    total: number;
    goTo: (i: number) => void;
}

export default function SectionLeft({ section, total, goTo }: Props) {
    return (
        <div className='fixed left-0 top-0 z-2 flex h-screen w-1/2 items-center justify-end bg-[#f7bc0a]'>
            <div className='flex flex-col justify-center pr-12 w-[600px]'>
                <h1 className='flex flex-col gap-4 leading-none text-black'>
                    <span className='text-[5rem] font-extrabold leading-[0.85]'>
                        Twój<br /><span>pomysł.</span>
                    </span>
                    <span className='text-[5rem] font-extrabold'>Nasza<br />prędkość.</span>
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
            <div className='absolute right-5 top-1/2 flex -translate-y-1/2 flex-col gap-3'>
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
