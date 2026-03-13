const projects = [
    { name: 'Darimed', type: 'Strona www', color: '#1a1a2e' },
    { name: 'Vegemiska', type: 'Sklep e-commerce', color: '#1a2e1a' },
    { name: 'WeekendJobs', type: 'Aplikacja webowa', color: '#2e1a1a' },
    { name: 'EcoPass', type: 'Web design', color: '#1a2a2e' },
];

export default function SectionRealizacje() {
    return (
        <div className='flex h-screen flex-col justify-center gap-10 bg-[#0d0d0d] px-14 py-24'>
            <div>
                <p className='text-xs font-bold uppercase tracking-widest text-white/30'>Realizacje</p>
                <h2 className='mt-3 text-4xl font-extrabold text-white'>Nasze projekty</h2>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {projects.map(p => (
                    <div
                        key={p.name}
                        className='flex h-40 flex-col justify-between rounded-2xl p-6'
                        style={{ backgroundColor: p.color }}
                    >
                        <span className='text-xs font-semibold text-white/40'>{p.type}</span>
                        <span className='text-lg font-bold text-white'>{p.name}</span>
                    </div>
                ))}
            </div>
            <button className='flex w-fit items-center gap-2 text-sm font-semibold text-[#f7bc0a] transition-opacity hover:opacity-70'>
                Zobacz wszystkie <span>→</span>
            </button>
        </div>
    );
}
