import Image from 'next/image';
import corobirobbie from '@/assets/logotypes/corobirobbie.png';
import darimed from '@/assets/logotypes/darimed.png';
import ecopass from '@/assets/logotypes/ecopass.png';
import michalporabaniec from '@/assets/logotypes/michalporabaniec.png';
import vegemiska from '@/assets/logotypes/vegemiska.png';
import vougevintage from '@/assets/logotypes/vougevintage.png';
import weekendjobs from '@/assets/logotypes/weekendjobs.png';
import zintegrowani from '@/assets/logotypes/zintegrowani.png';

const LOGOS = [corobirobbie, darimed, ecopass, michalporabaniec, vegemiska, vougevintage, weekendjobs, zintegrowani];
const LOGO_NAMES = ['Corobirobbie', 'Darimed', 'Ecopass', 'Michał Porabaniec', 'Vegemiska', 'Vogue Vintage', 'Weekend Jobs', 'Zintegrowani'];

const references = [
    {
        name: 'Anna Kowalska',
        role: 'CEO, TechStartup',
        comment: 'Współpraca z Gepard Media to czysta przyjemność. Projekt zrealizowany szybciej niż zakładaliśmy, a efekt końcowy przeszedł nasze oczekiwania. Zespół słucha, rozumie potrzeby i naprawdę angażuje się w projekt — nie tylko wykonuje zlecenie, ale aktywnie doradza i proponuje rozwiązania.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Marcin Nowak',
        role: 'Founder, eCommerce Pro',
        comment: 'Profesjonalne podejście i świetna komunikacja na każdym etapie projektu. Nasz sklep internetowy działa bez zarzutu, a konwersja wzrosła o ponad 40% w pierwszym miesiącu po wdrożeniu. Polecam każdemu, kto szuka rzetelnego partnera do budowy e-commerce.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Katarzyna Wiśniewska',
        role: 'Marketing Director, BrandHub',
        comment: 'Dostaliśmy stronę, która wyróżnia się na tle konkurencji i realnie wspiera nasze cele marketingowe. Design jest nowoczesny, czytelny i spójny z identyfikacją marki. Co ważne — cały proces przebiegł sprawnie, bez opóźnień i niepotrzebnych komplikacji.',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
        name: 'Piotr Zieliński',
        role: 'CTO, DataFlow',
        comment: 'Szybkość realizacji i dbałość o detale techniczne — dokładnie tego szukaliśmy u partnera technologicznego. Kod jest czysty, aplikacja działa stabilnie, a dokumentacja jest kompletna. Rzadko spotyka się agencję, która tak dobrze rozumie potrzeby zespołu deweloperskiego po stronie klienta.',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
];

export default function SectionReferencje() {
    return (
        <div className='flex h-screen flex-col items-center justify-center bg-[#1a1a1a] py-16'>
            <div className='w-full max-w-[600px] px-4'>
                <p className='text-xs font-bold uppercase tracking-widest text-[#f7bc0a]'>Referencje</p>
                <h2 className='mt-3 text-4xl font-extrabold text-white'>Zaufali nam</h2>

                <div className='mt-8 flex gap-4'>
                    {/* Referencje — pionowy scroll */}
                    <div className='flex flex-1 flex-col gap-3 overflow-y-auto' style={{ maxHeight: '50vh', scrollbarWidth: 'none' }}>
                        {references.map((ref) => (
                            <div key={ref.name} className='rounded-xl border-l-[3px] border-[#f7bc0a] bg-white p-5 pl-6'>
                                <p className='text-[13px] leading-relaxed text-neutral-600'>{ref.comment}</p>
                                <div className='mt-4 flex items-center gap-3 border-t border-neutral-100 pt-4'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={ref.avatar} alt={ref.name} className='h-9 w-9 rounded-full object-cover ring-2 ring-[#f7bc0a]/30' />
                                    <div>
                                        <p className='text-sm font-bold text-neutral-900'>{ref.name}</p>
                                        <p className='text-xs text-neutral-400'>{ref.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Logotypy — jedna kolumna */}
                    <div className='flex w-24 flex-col gap-3'>
                        {LOGOS.map((logo, i) => (
                            <div key={i} className='group flex flex-1 items-center justify-center rounded-xl bg-white/5 px-3 py-2 transition-colors hover:bg-white/10'>
                                <Image
                                    src={logo}
                                    alt={LOGO_NAMES[i]}
                                    height={22}
                                    className='object-contain opacity-50 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-6 flex items-center gap-3'>
                    <div className='h-px flex-1 bg-[#f7bc0a]/20' />
                    <span className='text-xs font-semibold text-[#f7bc0a]/50'>4.9 / 5.0</span>
                    <div className='h-px flex-1 bg-[#f7bc0a]/20' />
                </div>
            </div>
        </div>
    );
}
