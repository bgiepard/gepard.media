import Image from 'next/image';
import logo from '@/assets/logo/logo.svg';
import titleWithCursor from '@/assets/logo/title_with_cursor.svg';

export function NavHeader({ dark = false, onContact }: { dark?: boolean; onContact?: () => void }) {
    return (
        <header className='fixed top-0 left-0 z-50 flex w-full items-center justify-between px-16 py-6'>

            <div className={`flex items-center gap-4 ${dark ? 'invert' : ''}`}>
                <Image src={logo} alt='Gepard Media' height={36} />
                <Image src={titleWithCursor} alt='Gepard.Media' height={30} className='-mb-2' />
            </div>

            <button onClick={onContact} className='cursor-pointer flex items-center gap-2 rounded-full border border-white/60 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10'>
                <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.61 5.61l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z' />
                </svg>
                Skontaktuj się
            </button>
        </header>
    );
}
