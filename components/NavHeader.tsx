import Image from 'next/image';
import logo from '@/assets/logo/logo.svg';
import titleWithCursor from '@/assets/logo/title_with_cursor.svg';

export function NavHeader({ dark = false }: { dark?: boolean }) {
    return (
        <header className='fixed top-0 left-0 z-50 flex w-full items-center justify-between px-16 py-6'>

            <div className={`flex items-center gap-4 ${dark ? 'invert' : ''}`}>
                <Image src={logo} alt='Gepard Media' height={36} />
                <Image src={titleWithCursor} alt='Gepard.Media' height={30} className='-mb-2' />
            </div>

            <button aria-label='Otwórz menu' className='flex flex-col gap-1.5 cursor-pointer'>
                <span className={`block h-0.5 w-7 ${dark ? 'bg-white' : 'bg-black'}`} />
                <span className={`block h-0.5 w-7 ${dark ? 'bg-white' : 'bg-black'}`} />
                <span className={`block h-0.5 w-5 ${dark ? 'bg-white' : 'bg-black'}`} />
            </button>
        </header>
    );
}
