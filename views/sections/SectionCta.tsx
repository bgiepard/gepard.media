export default function SectionCta() {
    return (
        <div className='flex h-screen flex-col justify-center gap-10 bg-[#f7bc0a] px-14 py-24'>
            <div>
                <p className='text-xs font-bold uppercase tracking-widest text-black/40'>Zacznijmy</p>
                <h2 className='mt-3 text-4xl font-extrabold text-black'>Masz projekt?<br />Pogadajmy.</h2>
                <p className='mt-4 text-base text-black/60'>Bezpłatna wycena w 24h. Bez zobowiązań.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <button className='w-fit rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-75'>
                    Napisz do nas
                </button>
                <a href='mailto:hello@gepard.media' className='text-sm font-semibold text-black/50 transition-opacity hover:opacity-70'>
                    hello@gepard.media
                </a>
            </div>
        </div>
    );
}
