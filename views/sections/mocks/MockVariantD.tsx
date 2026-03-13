import { Tab } from '../SectionMocks';

interface Props {
    tabs: Tab[];
    active: number;
    setActive: (i: number) => void;
    Mock: React.ComponentType;
}

// Wariant D: bold – duża nazwa usługi na górze, mock poniżej
export default function MockVariantD({ tabs, active, setActive, Mock }: Props) {
    return (
        <div className='flex h-full flex-col px-14 py-12'>

            {/* Góra: nazwa + opis */}
            <div className='flex items-start justify-between gap-8'>
                <div>
                    <p className='text-xs font-bold uppercase tracking-widest text-white/20'>Co robimy</p>
                    <h2 className='mt-2 text-4xl font-extrabold leading-none text-white'>
                        {tabs[active].label}
                    </h2>
                </div>
                <p className='mt-1 max-w-[220px] text-right text-xs leading-relaxed text-white/40'>
                    {tabs[active].desc}
                </p>
            </div>

            {/* Mock */}
            <div className='flex flex-1 items-center py-6'>
                <div className='h-[320px] w-full'>
                    <div key={active} className='animate-slide-in h-full'>
                        <Mock />
                    </div>
                </div>
            </div>

            {/* Dół: taby z numerami */}
            <div className='flex gap-5 border-t border-white/10 pt-6'>
                {tabs.map((tab, i) => (
                    <button
                        key={tab.label}
                        onClick={() => setActive(i)}
                        className={`flex flex-col items-start gap-1 transition-all ${
                            active === i ? 'opacity-100' : 'opacity-25 hover:opacity-50'
                        }`}
                    >
                        <span className='font-mono text-[10px] text-[#f7bc0a]'>{String(i + 1).padStart(2, '0')}</span>
                        <span className='text-xs font-semibold text-white'>{tab.label}</span>
                        {active === i && <span className='h-px w-full bg-[#f7bc0a]' />}
                    </button>
                ))}
            </div>

        </div>
    );
}
