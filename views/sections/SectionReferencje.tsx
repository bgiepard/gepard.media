const references = [
    {
        name: 'Anna Kowalska',
        role: 'CEO, TechStartup',
        comment:
            'Współpraca z Gepard Media to czysta przyjemność. Projekt zrealizowany szybciej niż zakładaliśmy.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Marcin Nowak',
        role: 'Founder, eCommerce Pro',
        comment:
            'Profesjonalne podejście i świetna komunikacja. Nasz sklep internetowy działa bez zarzutu.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Katarzyna Wiśniewska',
        role: 'Marketing Director, BrandHub',
        comment:
            'Dostaliśmy stronę, która wyróżnia się na tle konkurencji. Gorąco polecam!',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
        name: 'Piotr Zieliński',
        role: 'CTO, DataFlow',
        comment:
            'Szybkość realizacji i dbałość o detale — dokładnie tego szukaliśmy u partnera technologicznego.',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
];

export default function SectionReferencje() {
    return (
        <div className='flex h-screen flex-col items-center justify-center bg-[#1a1a1a] px-14 py-24'>
            <div className='w-full max-w-[600px]'>
                <p className='text-xs font-bold uppercase tracking-widest text-[#f7bc0a]'>
                    Referencje
                </p>
                <h2 className='mt-3 text-4xl font-extrabold text-white'>
                    Co mówią nasi klienci
                </h2>

                <div className='mt-10 grid grid-cols-2 gap-4'>
                    {references.map((ref) => (
                        <div
                            key={ref.name}
                            className='relative overflow-hidden rounded-xl border-l-[3px] border-[#f7bc0a] bg-white p-5 pl-6'
                        >
                            <p className='text-[13px] leading-relaxed text-neutral-600'>
                                {ref.comment}
                            </p>

                            <div className='mt-4 flex items-center gap-3 pt-3'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={ref.avatar}
                                    alt={ref.name}
                                    className='h-10 w-10 rounded-full object-cover ring-2 ring-[#f7bc0a]/30'
                                />
                                <div>
                                    <p className='text-sm font-bold text-neutral-900'>
                                        {ref.name}
                                    </p>
                                    <p className='text-xs text-neutral-400'>
                                        {ref.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-8 flex items-center gap-3'>
                    <div className='h-px flex-1 bg-[#f7bc0a]/20' />
                    <span className='text-xs font-semibold text-[#f7bc0a]/50'>
                        4.9 / 5.0
                    </span>
                    <div className='h-px flex-1 bg-[#f7bc0a]/20' />
                </div>
            </div>
        </div>
    );
}
