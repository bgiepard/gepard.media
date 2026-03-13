import { Tab } from '../SectionMocks';

interface Props {
    tabs: Tab[];
    active: number;
    setActive: (i: number) => void;
    Mock: React.ComponentType;
}

export default function MockVariantB({ tabs, active, setActive, Mock }: Props) {
    return (
        <div className='flex h-full flex-col justify-center px-14 py-16'>
            <div className='flex w-full max-w-[600px] flex-col gap-8'>

                {/* Nagłówek sekcji */}
                <div>
                    <p className='text-xs font-bold uppercase tracking-widest text-white/20'>Co robimy</p>
                    <h2 className='mt-1 text-2xl font-extrabold text-white'>Tworzymy cyfrowe produkty,<br />które działają.</h2>
                </div>

                {/* Górny rząd: zakładki po lewej + mock po prawej */}
                <div className='flex gap-6'>

                    {/* Zakładki */}
                    <div className='flex w-40 flex-shrink-0 flex-col gap-1 pt-1'>
                            {tabs.map((tab, i) => (
                            <button
                                key={tab.label}
                                onClick={() => setActive(i)}
                                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-semibold transition-all ${
                                    active === i
                                        ? 'bg-white/10 text-white'
                                        : 'text-white/30 hover:text-white/55'
                                }`}
                            >
                                <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all ${
                                    active === i ? 'bg-[#f7bc0a]' : 'bg-white/15'
                                }`} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Mock */}
                    <div className='flex flex-1 items-center'>
                        <div className='h-[300px] w-full'>
                            <div key={active} className='animate-slide-in h-full'>
                                <Mock />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Opis pod mockiem – stała wysokość żeby nie przesuwać layoutu */}
                <p className='line-clamp-2 min-h-[2.5rem] text-xs leading-relaxed text-white/35'>
                    {tabs[active].desc}
                </p>

            </div>
        </div>
    );
}
