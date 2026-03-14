import { references } from './referencjeData';

export default function SectionReferencjeD() {
    return (
        <div className='flex h-screen flex-col items-center justify-center bg-[#1a1a1a] px-14'>
            <div className='w-full max-w-[600px]'>

                <p className='text-xs font-bold uppercase tracking-widest text-[#f7bc0a]'>Referencje</p>
                <h2 className='mt-2 mb-8 text-4xl font-extrabold text-white'>Zaufali nam</h2>

                <div className='flex flex-col gap-6'>
                    {references.map((ref, i) => (
                        <div key={ref.name} className='flex gap-4'>
                            <span className='mt-[-6px] shrink-0 text-5xl font-black leading-none text-[#f7bc0a]/30'>&ldquo;</span>
                            <div>
                                <p className='text-[14px] leading-relaxed text-white'>{ref.comment}</p>
                                <div className='mt-3 flex items-center gap-2.5'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={ref.avatar} alt={ref.name} className='h-7 w-7 rounded-full object-cover opacity-70' />
                                    <p className='text-xs font-bold text-[#f7bc0a]'>{ref.name} <span className='font-normal text-white/30'>— {ref.role}</span></p>
                                </div>
                                {i < references.length - 1 && <div className='mt-6 h-px bg-white/5' />}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
