import { Tab } from '../SectionMocks';

interface Props {
    tabs: Tab[];
    active: number;
    setActive: (i: number) => void;
    Mock: React.ComponentType;
}

// Wariant C: mock fullscreen z overlayem
export default function MockVariantC({ tabs, active, setActive, Mock }: Props) {
    return (
        <div className='relative flex h-full flex-col'>

            {/* Mock na całą wysokość */}
            <div className='flex flex-1 items-center px-10 pt-16 pb-6'>
                <div className='h-[400px] w-full'>
                    <div key={active} className='animate-slide-in h-full'>
                        <Mock />
                    </div>
                </div>
            </div>

            {/* Overlay dolny: nazwa + taby */}
            <div className='flex items-end justify-between gap-6 border-t border-white/10 px-10 py-6'>
                <div>
                    <p className='text-xs font-bold uppercase tracking-widest text-white/20'>Co robimy</p>
                    <h3 className='mt-1 text-xl font-extrabold text-white'>{tabs[active].label}</h3>
                    <p className='mt-1 max-w-xs text-xs leading-relaxed text-white/40'>{tabs[active].desc}</p>
                </div>
                <div className='flex flex-shrink-0 flex-col gap-1.5'>
                    {tabs.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`rounded-full transition-all duration-300 ${
                                active === i ? 'h-2 w-6 bg-[#f7bc0a]' : 'h-2 w-2 bg-white/20 hover:bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}
