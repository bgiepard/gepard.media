'use client';

import { useEffect, useState } from 'react';

const SERVICES = [
    {
        label: 'Strony www', price: 'od 2 200 zł',
        icon: <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/></svg>,
    },
    {
        label: 'Sklepy e-commerce', price: 'od 6 100 zł',
        icon: <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'/><line x1='3' y1='6' x2='21' y2='6'/><path d='M16 10a4 4 0 0 1-8 0'/></svg>,
    },
    {
        label: 'Aplikacje mobilne', price: 'od 14 800 zł',
        icon: <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><rect x='5' y='2' width='14' height='20' rx='2' ry='2'/><line x1='12' y1='18' x2='12.01' y2='18'/></svg>,
    },
    {
        label: 'Web design', price: 'od 3 300 zł',
        icon: <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M12 20h9'/><path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'/></svg>,
    },
    {
        label: 'Pozycjonowanie', price: 'od 850 zł / msc',
        icon: <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='22 12 18 12 15 21 9 3 6 12 2 12'/></svg>,
    },
    {
        label: 'Social media', price: 'od 1 150 zł / msc',
        icon: <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/></svg>,
    },
];

interface Props {
    onClose: () => void;
}

function Field({
    label, error, value, hasError, children
}: {
    label: string;
    error: string | false | undefined;
    value: string;
    hasError: boolean;
    children: (cls: string) => React.ReactNode;
}) {
    const filled = value.length > 0;
    return (
        <div className='relative w-full'>
            <div className='relative'>
                {children(
                    `w-full rounded-xl border bg-white/80 px-4 pt-5 pb-2 text-sm font-medium text-black outline-none transition-all duration-150 ${
                        hasError ? 'border-red-400 focus:border-red-500' : 'border-black/10 focus:border-black/40'
                    }`
                )}
                <label className={`pointer-events-none absolute left-4 font-medium transition-all duration-150 ${
                    filled
                        ? 'top-1.5 text-[9px] text-black/40'
                        : 'top-3.5 text-sm text-black/30'
                }`}>
                    {label}
                </label>
            </div>
            {error && <p className='mt-1 text-[10px] text-red-600 font-medium'>{error}</p>}
        </div>
    );
}

const validators = {
    name:  (v: string) => v.trim().length >= 2 ? '' : 'Wpisz imię i nazwisko',
    email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Nieprawidłowy adres e-mail',
    phone: (v: string) => /^[\d\s\-+]{9,}$/.test(v.trim()) ? '' : 'Nieprawidłowy numer telefonu',
    desc:  (v: string) => v.trim().length >= 10 ? '' : 'Opisz projekt (min. 10 znaków)',
};

export default function ContactModal({ onClose }: Props) {
    const [selected, setSelected] = useState<number | null>(null);
    const [name,  setName]  = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [desc,  setDesc]  = useState('');
    const [touched, setTouched] = useState({ name: false, email: false, phone: false, desc: false });

    const errors = {
        name:  validators.name(name),
        email: validators.email(email),
        phone: validators.phone(phone),
        desc:  validators.desc(desc),
    };

    const canSubmit = !Object.values(errors).some(Boolean) && selected !== null;
    const [sending, setSending] = useState(false);
    const [sent, setSent]       = useState(false);
    const [sendError, setSendError] = useState('');

    const touch = (field: keyof typeof touched) => setTouched(t => ({ ...t, [field]: true }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return;
        setSending(true);
        setSendError('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name, email, phone, desc,
                    service: selected !== null ? SERVICES[selected].label : '',
                }),
            });
            if (!res.ok) throw new Error();
            setSent(true);
        } catch {
            setSendError('Coś poszło nie tak. Spróbuj ponownie.');
        } finally {
            setSending(false);
        }
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div
            className='fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md animate-modal-backdrop'
            onClick={onClose}
        >
            <div
                className='relative flex w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl animate-modal-panel'
                onClick={e => e.stopPropagation()}
            >
                {/* Lewa kolumna — czarna, dane kontaktowe */}
                <div className='flex w-2/5 flex-col justify-between bg-white p-10'>
                    <div>
                        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-black/30'>Kontakt</p>
                        <h2 className='mt-3 text-3xl font-extrabold leading-tight text-black'>Porozmawiajmy<br />o projekcie.</h2>
                    </div>

                    <ul className='flex flex-col gap-5 my-8'>
                        <li>
                            <p className='mb-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/30'>Strona</p>
                            <a href='https://gepard.media' className='flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-primary'>
                                <svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='opacity-50'>
                                    <circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/>
                                </svg>
                                gepard.media
                            </a>
                        </li>
                        <li>
                            <p className='mb-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/30'>Adres</p>
                            <p className='flex items-center gap-2 text-sm font-bold text-black'>
                                <svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='opacity-50 shrink-0'>
                                    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'/><circle cx='12' cy='10' r='3'/>
                                </svg>
                                Kielce, ul. Warszawska 34/314
                            </p>
                        </li>
                        <li>
                            <p className='mb-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/30'>Telefon</p>
                            <a href='tel:669443669' className='flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-primary'>
                                <svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='opacity-50'>
                                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.61 5.61l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z'/>
                                </svg>
                                669-443-669
                            </a>
                        </li>
                        <li>
                            <p className='mb-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/30'>E-mail</p>
                            <a href='mailto:biuro@gepard.media' className='flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-primary'>
                                <svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='opacity-50'>
                                    <rect x='2' y='4' width='20' height='16' rx='2'/><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'/>
                                </svg>
                                biuro@gepard.media
                            </a>
                        </li>
                    </ul>

                    <p className='text-xs text-black/30 leading-relaxed'>Odpowiadamy w ciągu 24h.</p>
                </div>

                {/* Prawa kolumna — żółta, formularz */}
                <div className='flex flex-1 flex-col bg-primary p-10'>
                    <button
                        onClick={onClose}
                        className='absolute right-5 top-5 text-black/20 hover:text-black transition-colors'
                        aria-label='Zamknij'
                    >
                        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                            <line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/>
                        </svg>
                    </button>

                    <p className='text-xs font-semibold uppercase tracking-[0.2em] text-black/40'>Wycena</p>
                    <h3 className='mt-1 mb-4 text-2xl font-extrabold text-black'>Opisz swój projekt</h3>

                    <div className='grid grid-cols-3 gap-2 mb-4'>
                        {SERVICES.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setSelected(selected === i ? null : i)}
                                className={`relative rounded-xl px-3 pt-6 pb-2.5 text-left text-xs font-semibold transition-all duration-150 border-2 ${
                                    selected === i
                                        ? 'border-black bg-black text-white'
                                        : 'border-transparent bg-black/10 hover:bg-black/20 text-black'
                                }`}
                            >
                                <span className={`absolute top-2 right-2.5 text-[9px] font-medium ${selected === i ? 'text-white/50' : 'text-black/30'}`}>
                                    {s.price}
                                </span>
                                <span className='mb-1.5 block opacity-60'>{s.icon}</span>
                                {s.label}
                            </button>
                        ))}
                    </div>

                    {sent ? (
                        <div className='flex flex-1 flex-col items-center justify-center gap-3 text-center'>
                            <div className='flex h-14 w-14 items-center justify-center rounded-full bg-black text-2xl text-white'>✓</div>
                            <p className='text-lg font-extrabold text-black'>Wysłano!</p>
                            <p className='text-sm text-black/50'>Odezwiemy się w ciągu 24h.</p>
                        </div>
                    ) : (
                        <form className='flex flex-col gap-2.5' onSubmit={handleSubmit}>
                            <div className='flex gap-2.5'>
                                <Field label='Imię i nazwisko' error={touched.name && errors.name} value={name} hasError={touched.name && !!errors.name}>
                                    {cls => <input type='text' value={name} onChange={e => setName(e.target.value)} onBlur={() => touch('name')} className={cls} />}
                                </Field>
                                <Field label='E-mail' error={touched.email && errors.email} value={email} hasError={touched.email && !!errors.email}>
                                    {cls => <input type='email' value={email} onChange={e => setEmail(e.target.value)} onBlur={() => touch('email')} className={cls} />}
                                </Field>
                            </div>
                            <Field label='Telefon' error={touched.phone && errors.phone} value={phone} hasError={touched.phone && !!errors.phone}>
                                {cls => <input type='tel' value={phone} onChange={e => setPhone(e.target.value)} onBlur={() => touch('phone')} className={cls} />}
                            </Field>
                            <Field label='Opis projektu' error={touched.desc && errors.desc} value={desc} hasError={touched.desc && !!errors.desc}>
                                {cls => <textarea rows={3} value={desc} onChange={e => setDesc(e.target.value)} onBlur={() => touch('desc')} className={`resize-none ${cls}`} />}
                            </Field>
                            {sendError && <p className='text-xs text-red-600'>{sendError}</p>}
                            <button
                                type='submit'
                                disabled={!canSubmit || sending}
                                className='mt-1 w-full rounded-full bg-black py-3 text-sm font-semibold text-white transition-opacity hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed'
                            >
                                {sending ? 'Wysyłanie...' : 'Wyślij zapytanie →'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
