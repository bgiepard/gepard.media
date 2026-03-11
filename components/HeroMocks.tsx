import type { ReactNode } from 'react';

function Browser({ url, children }: { url: string; children: ReactNode }) {
    return (
        <div className='overflow-hidden rounded-2xl bg-white shadow-2xl'>
            <div className='flex items-center gap-2 bg-gray-100 px-4 py-3'>
                <span className='h-3 w-3 rounded-full bg-red-400' />
                <span className='h-3 w-3 rounded-full bg-yellow-400' />
                <span className='h-3 w-3 rounded-full bg-green-400' />
                <div className='ml-3 flex-1 rounded-full bg-white px-4 py-1 text-xs text-gray-400'>{url}</div>
            </div>
            <div className='h-64 bg-gray-50 p-5'>{children}</div>
        </div>
    );
}

export function MockStrona() {
    return (
        <Browser url='twoja-strona.pl'>
            <div className='flex justify-between items-center mb-4'>
                <div className='h-2.5 w-12 rounded-full bg-gray-300' />
                <div className='flex flex-col gap-[3px]'>
                    <div className='h-[2px] w-4 rounded-full bg-gray-300' />
                    <div className='h-[2px] w-4 rounded-full bg-gray-300' />
                    <div className='h-[2px] w-2.5 rounded-full bg-gray-300' />
                </div>
            </div>
            <div className='flex items-stretch justify-center gap-6 mt-auto pt-6'>
                <div className='flex flex-col items-start gap-3'>
                    <div className='h-2.5 w-24 rounded-full bg-gray-800' />
                    <div className='h-2 w-48 rounded-full bg-gray-200' />
                    <div className='h-2 w-40 rounded-full bg-gray-200' />
                    <div className='h-2 w-44 rounded-full bg-gray-200' />
                    <div className='mt-2 h-4 w-16 rounded-full bg-[#f7bc0a]' />
                </div>
                <div className='w-24 shrink-0 rounded-xl bg-gray-100' />
            </div>
        </Browser>
    );
}

export function MockSklep() {
    return (
        <Browser url='twoj-sklep.pl'>
            <div className='mb-3 flex items-center justify-between'>
                <div className='h-3 w-20 rounded-full bg-gray-300' />
                <div className='flex items-center gap-2'>
                    <div className='h-3 w-12 rounded-full bg-gray-200' />
                    <div className='h-3 w-12 rounded-full bg-gray-200' />
                    <div className='relative'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        <div className='absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#f7bc0a] text-[6px] font-bold text-black'>2</div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden'>
                <div className='grid grid-cols-3 gap-2 mb-2'>
                    {[0, 1, 2].map(i => (
                        <div key={i} className='overflow-hidden rounded-xl bg-white shadow-sm'>
                            <div className='flex h-16 items-center justify-center bg-gray-100'>
                                <div className='h-6 w-6 rounded-full bg-[#f7bc0a]/30' />
                            </div>
                            <div className='p-1.5'>
                                <div className='mb-1 h-2 w-full rounded-full bg-gray-200' />
                                <div className='flex items-center justify-between'>
                                    <div className='h-2 w-8 rounded-full bg-[#f7bc0a]/60' />
                                    <div className='h-4 w-4 rounded-full bg-[#f7bc0a]' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-3 gap-2 h-20 overflow-hidden'>
                    {[0, 1, 2].map(i => (
                        <div key={i} className='overflow-hidden rounded-xl bg-white shadow-sm'>
                            <div className='flex h-16 items-center justify-center bg-gray-100'>
                                <div className='h-6 w-6 rounded-full bg-[#f7bc0a]/30' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Browser>
    );
}

export function MockAppMobilna() {
    return (
        <div className='flex h-[300px] shrink-0 items-center justify-center gap-4'>
            {/* Telefon iOS */}
            <div className='flex flex-col items-center gap-1.5'>
                <div className='relative w-[130px] overflow-hidden rounded-[1.5rem] border-4 border-gray-300 bg-white shadow-2xl'>
                    <div className='h-[252px] bg-gray-50 p-3'>
                        <div className='mb-3 flex justify-between px-1'>
                            <div className='h-2 w-8 rounded-full bg-gray-300' />
                            <div className='flex gap-1'>
                                <div className='h-2 w-4 rounded-full bg-gray-300' />
                                <div className='h-2 w-4 rounded-full bg-gray-300' />
                            </div>
                        </div>
                        <div className='mb-3 flex h-16 items-center justify-center rounded-2xl bg-[#f7bc0a]/20'>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#f7bc0a">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                        </div>
                        <div className='mb-2 grid grid-cols-2 gap-2'>
                            {[0, 1, 2, 3].map(i => (
                                <div key={i} className='flex flex-col gap-1.5 rounded-xl bg-white p-2 shadow-sm'>
                                    <div className='h-4 w-4 rounded-md bg-[#f7bc0a]/40' />
                                    <div className='h-2 w-full rounded-full bg-gray-200' />
                                    <div className='h-2 w-2/3 rounded-full bg-gray-100' />
                                </div>
                            ))}
                        </div>
                        <div className='mt-2 flex justify-around rounded-2xl bg-white py-2 shadow-sm'>
                            {[0, 1, 2, 3].map(i => (
                                <div key={i} className={`h-4 w-4 rounded-md ${i === 0 ? 'bg-[#f7bc0a]' : 'bg-gray-200'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Tablet Android */}
            <div className='flex flex-col items-center gap-1.5'>
                <div className='relative w-[190px] overflow-hidden rounded-[1.5rem] border-4 border-gray-300 bg-white shadow-xl'>
                    <div className='h-[252px] bg-gray-50 p-3'>
                        <div className='mb-3 flex justify-between px-1'>
                            <div className='h-2 w-12 rounded-full bg-gray-300' />
                            <div className='flex gap-1.5'>
                                <div className='h-2 w-6 rounded-full bg-gray-200' />
                                <div className='h-2 w-6 rounded-full bg-gray-200' />
                            </div>
                        </div>
                        <div className='mb-3 flex h-14 items-center justify-center rounded-2xl bg-[#f7bc0a]/20'>
                            <svg width="20" height="20" viewBox="0 0 48 48" fill="#f7bc0a">
                                <path d="M12 29c0 1.1.9 2 2 2h2v7c0 1.7 1.3 3 3 3s3-1.3 3-3v-7h4v7c0 1.7 1.3 3 3 3s3-1.3 3-3v-7h2c1.1 0 2-.9 2-2V16H12v13zm-5-13c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3s3-1.3 3-3V19c0-1.7-1.3-3-3-3zm34 0c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3s3-1.3 3-3V19c0-1.7-1.3-3-3-3zM31.5 6.2l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-2.6 2.6C28.3 4.4 26.2 4 24 4s-4.3.4-5.8 1.1L15.6 2.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3C13.7 8.1 12 11.3 12 15h24c0-3.7-1.7-6.9-4.5-8.8zM21 12h-2v-2h2v2zm8 0h-2v-2h2v2z"/>
                            </svg>
                        </div>
                        <div className='mb-2 grid grid-cols-3 gap-2'>
                            {[0, 1, 2].map(i => (
                                <div key={i} className='flex flex-col gap-1.5 rounded-xl bg-white p-2 shadow-sm'>
                                    <div className='h-4 w-4 rounded-md bg-[#f7bc0a]/40' />
                                    <div className='h-2 w-full rounded-full bg-gray-200' />
                                    <div className='h-2 w-2/3 rounded-full bg-gray-100' />
                                </div>
                            ))}
                        </div>
                        <div className='h-2.5 w-full rounded-full bg-gray-200' />
                        <div className='mt-2 h-2.5 w-4/5 rounded-full bg-gray-200' />
                        <div className='mt-3 h-7 w-24 rounded-full bg-[#f7bc0a]' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MockWebDesign() {
    return (
        <Browser url='figma.com · projekt'>
            <div className='mb-3 flex items-center gap-2 rounded-xl bg-gray-800 px-3 py-2'>
                {['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-green-400'].map((c, i) => (
                    <div key={i} className={`h-4 w-4 rounded ${c}`} />
                ))}
                <div className='mx-2 h-4 w-px bg-gray-600' />
                <div className='h-3 w-16 rounded-full bg-gray-600' />
                <div className='ml-auto h-3 w-12 rounded-full bg-gray-600' />
            </div>
            <div className='relative flex gap-3'>
                <div className='flex w-20 shrink-0 flex-col gap-1.5'>
                    {['bg-[#f7bc0a]/60', 'bg-gray-300', 'bg-gray-200', 'bg-gray-200', 'bg-gray-200'].map((c, i) => (
                        <div key={i} className={`flex items-center gap-1.5 rounded-lg px-2 py-1 ${i === 0 ? 'bg-[#f7bc0a]/10' : ''}`}>
                            <div className={`h-2.5 w-2.5 shrink-0 rounded-sm ${c}`} />
                            <div className='h-1.5 w-full rounded-full bg-gray-200' />
                        </div>
                    ))}
                </div>
                <div className='flex-1 overflow-hidden rounded-xl bg-white p-3 shadow-inner'>
                    <div className='mb-2 h-5 w-3/4 rounded-lg bg-[#f7bc0a]/30' />
                    <div className='mb-2 flex gap-2'>
                        <div className='h-12 flex-1 rounded-lg bg-gray-100' />
                        <div className='h-12 flex-1 rounded-lg bg-gray-100' />
                    </div>
                    <div className='h-3 w-full rounded-full bg-gray-100' />
                    <div className='mt-1.5 h-3 w-4/5 rounded-full bg-gray-100' />
                    <div className='mt-3 h-7 w-20 rounded-full bg-[#f7bc0a]' />
                </div>
            </div>
        </Browser>
    );
}

export function MockPozycjonowanie() {
    const results = [
        { pos: 1, highlight: true },
        { pos: 2, highlight: false },
        { pos: 3, highlight: false },
    ];
    return (
        <Browser url='google.com · wyniki'>
            <div className='mb-4 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm'>
                <div className='h-3 w-3 rounded-full bg-gray-300' />
                <div className='h-3 flex-1 rounded-full bg-gray-200' />
                <div className='h-5 w-12 rounded-full bg-[#f7bc0a]' />
            </div>
            <div className='flex flex-col gap-2'>
                {results.map(({ pos, highlight }) => (
                    <div key={pos} className={`flex items-center gap-3 rounded-xl p-3 ${highlight ? 'bg-[#f7bc0a]/15 ring-2 ring-[#f7bc0a]/40' : 'bg-white shadow-sm'}`}>
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${highlight ? 'bg-[#f7bc0a] text-black' : 'bg-gray-100 text-gray-400'}`}>
                            {pos}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className={`h-2.5 w-32 rounded-full ${highlight ? 'bg-gray-800' : 'bg-gray-300'}`} />
                            <div className='h-2 w-48 rounded-full bg-gray-200' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-3 flex items-end gap-1 px-2'>
                {[30, 45, 38, 55, 50, 68, 72, 85].map((h, i) => (
                    <div key={i} className='flex-1 rounded-t-sm' style={{ height: `${h * 0.28}px`, background: i === 7 ? '#f7bc0a' : '#e5e7eb' }} />
                ))}
            </div>
        </Browser>
    );
}

export function MockSocialMedia() {
    return (
        <div className='flex h-[300px] items-center justify-center gap-4'>
            {/* Telefon */}
            <div className='relative w-[130px] overflow-hidden rounded-[1.5rem] border-4 border-gray-300 bg-white shadow-2xl'>
                <div className='h-[268px] bg-white p-2'>
                    <div className='mb-2 flex gap-1.5 overflow-hidden'>
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className={`h-8 w-8 shrink-0 rounded-full border-2 ${i === 0 ? 'border-[#f7bc0a]' : 'border-gray-200'} bg-gray-100`} />
                        ))}
                    </div>
                    {[0, 1, 2].map(i => (
                        <div key={i} className='mb-2 overflow-hidden rounded-xl bg-gray-50'>
                            <div className='flex items-center gap-1.5 p-1.5'>
                                <div className='h-4 w-4 rounded-full bg-gray-300' />
                                <div className='h-2 w-16 rounded-full bg-gray-300' />
                            </div>
                            <div className={`h-12 ${i === 0 ? 'bg-[#f7bc0a]/20' : 'bg-gray-200'}`} />
                            <div className='flex gap-2 px-2 py-1.5'>
                                <div className='h-2.5 w-2.5 rounded-full bg-red-400' />
                                <div className='h-2.5 w-2.5 rounded-full bg-gray-300' />
                                <div className='ml-auto h-2.5 w-2.5 rounded-full bg-gray-300' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Panel statystyk */}
            <div className='flex flex-col justify-center gap-3'>
                {[
                    { color: 'bg-[#f7bc0a]' },
                    { color: 'bg-pink-400' },
                    { color: 'bg-green-400' },
                ].map((stat, i) => (
                    <div key={i} className='flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm'>
                        <div className={`h-2 w-2 rounded-full ${stat.color}`} />
                        <div className='flex flex-col gap-1'>
                            <div className='h-2 w-14 rounded-full bg-gray-200' />
                            <div className='h-2.5 w-10 rounded-full bg-gray-800' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
