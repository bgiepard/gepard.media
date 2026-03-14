import { Tab } from '../SectionMocks';

interface Props {
    tabs: Tab[];
    active: number;
    setActive: (i: number) => void;
    Mock: React.ComponentType;
}

// B3 — mock po lewej, taby po prawej
export default function MockVariantB3({ tabs, active, setActive, Mock }: Props) {
    return (
        <div className='flex h-full flex-col items-center justify-center px-14 py-24'>
            <div className='flex w-full max-w-[600px] flex-col gap-8'>

                <div>
                    <p className='text-xs font-bold uppercase tracking-widest text-white/30'>Usługi</p>
                    <h2 className='mt-3 text-4xl font-extrabold text-white'>Przyspiesz z nami<br /><span className='text-[#f7bc0a]'>Twój</span> biznes.</h2>
                </div>

                <div className='flex gap-6'>
                    {/* Mock po lewej */}
                    <div className='flex flex-1 items-center'>
                        <div className='h-[300px] w-full'>
                            <div key={active} className='animate-slide-in h-full'>
                                <Mock />
                            </div>
                        </div>
                    </div>

                    {/* Zakładki po prawej */}
                    <div className='flex w-40 flex-shrink-0 flex-col gap-1 pt-1'>
                        {tabs.map((tab, i) => (
                            <button
                                key={tab.label}
                                onClick={() => setActive(i)}
                                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-semibold transition-all ${
                                    active === i ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/55'
                                }`}
                            >
                                <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all ${active === i ? 'bg-[#f7bc0a]' : 'bg-white/15'}`} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <p className='line-clamp-2 min-h-[2.5rem] text-xs leading-relaxed text-white/35'>
                    {tabs[active].desc}
                </p>

            </div>
        </div>
    );
}
