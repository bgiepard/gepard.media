const steps = [
    { n: '01', title: 'Briefing', desc: 'Poznajemy Twój biznes, cele i grupę docelową. Ustalamy zakres i harmonogram projektu.' },
    { n: '02', title: 'Projekt', desc: 'Tworzymy makiety i projekt graficzny. Pokazujemy Ci jak będzie wyglądać efekt końcowy.' },
    { n: '03', title: 'Wdrożenie', desc: 'Kodujemy i wdrażamy projekt. Dbamy o wydajność, SEO i responsywność na każdym urządzeniu.' },
    { n: '04', title: 'Wsparcie', desc: 'Po wdrożeniu jesteśmy do dyspozycji. Rozwijamy projekt i reagujemy na potrzeby.' },
];

export default function SectionProces() {
    return (
        <div className='flex h-screen flex-col justify-center gap-10 bg-[#111111] px-14 py-24'>
            <div>
                <p className='text-xs font-bold uppercase tracking-widest text-white/30'>Jak działamy</p>
                <h2 className='mt-3 text-4xl font-extrabold text-white'>Prosty proces,<br />konkretny efekt.</h2>
            </div>
            <div className='flex flex-col gap-8'>
                {steps.map(step => (
                    <div key={step.n} className='flex gap-6'>
                        <span className='mt-0.5 font-mono text-sm font-bold text-[#f7bc0a]'>{step.n}</span>
                        <div>
                            <p className='font-bold text-white'>{step.title}</p>
                            <p className='mt-1 text-sm leading-relaxed text-white/50'>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
