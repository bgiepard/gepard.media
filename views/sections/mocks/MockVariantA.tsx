import { Tab } from '../SectionMocks';

interface Props {
    tabs: Tab[];
    active: number;
    setActive: (i: number) => void;
    Mock: React.ComponentType;
}

export default function MockVariantA({ tabs, active, setActive, Mock }: Props) {
    return (
        <div className='flex h-full flex-col justify-center gap-5 px-14 py-24'>
            <p className='text-xs font-bold uppercase tracking-widest text-white/30'>Co robimy</p>
            <div className='h-[350px] w-full'>
                <div key={active} className='animate-slide-in h-full'>
                    <Mock />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-wrap gap-2'>
                    {tabs.map((tab, i) => (
                        <button
                            key={tab.label}
                            onClick={() => setActive(i)}
                            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                                active === i ? 'bg-black text-white' : 'text-white/35 hover:text-white/70'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <p className='text-sm leading-relaxed text-white/50'>{tabs[active].desc}</p>
            </div>
        </div>
    );
}
