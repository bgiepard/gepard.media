'use client';

import { useState } from 'react';

// ─── Dane ────────────────────────────────────────────────────────────────────

const SERVICES = [
    { id: 'wizytowka', label: 'Strona wizytówkowa', base: 2000, icon: '🌐', desc: 'Prosta, elegancka strona dla Twojej firmy' },
    { id: 'firmowa',   label: 'Strona firmowa',     base: 5000, icon: '🏢', desc: 'Rozbudowana strona z wieloma podstronami' },
    { id: 'sklep',     label: 'Sklep e-commerce',   base: 8000, icon: '🛒', desc: 'Pełnoprawny sklep internetowy' },
    { id: 'app',       label: 'Aplikacja mobilna',  base: 20000, icon: '📱', desc: 'iOS i Android — React Native' },
    { id: 'design',    label: 'Web Design',          base: 3500, icon: '🎨', desc: 'Projekt graficzny UI/UX' },
    { id: 'seo',       label: 'Pozycjonowanie SEO',  base: 900,  icon: '📈', desc: 'Miesięczna opieka SEO', monthly: true },
    { id: 'social',    label: 'Social Media',        base: 1200, icon: '💬', desc: 'Prowadzenie social media', monthly: true },
] as const;

type ServiceId = typeof SERVICES[number]['id'];

const EXTRAS: Record<string, { label: string; price: number }[]> = {
    wizytowka: [
        { label: 'Blog',                  price: 800 },
        { label: 'Wielojęzyczność',       price: 1500 },
        { label: 'Animacje premium',      price: 1500 },
        { label: 'Formularz kontaktowy',  price: 400 },
        { label: 'Chat na żywo',          price: 800 },
    ],
    firmowa: [
        { label: 'Blog',                  price: 800 },
        { label: 'Wielojęzyczność',       price: 1500 },
        { label: 'Integracja z CRM',      price: 2000 },
        { label: 'Panel administracyjny', price: 1200 },
        { label: 'Animacje premium',      price: 1500 },
        { label: 'Chat na żywo',          price: 800 },
    ],
    sklep: [
        { label: 'Do 500 produktów',          price: 1500 },
        { label: 'Powyżej 500 produktów',     price: 3000 },
        { label: 'Integracja z magazynem',    price: 2000 },
        { label: 'Program lojalnościowy',     price: 2500 },
        { label: 'Wielojęzyczność',           price: 1500 },
        { label: 'Integracja z CRM',          price: 2000 },
    ],
    app: [
        { label: 'Backend / API',             price: 5000 },
        { label: 'Panel administracyjny',     price: 3000 },
        { label: 'Powiadomienia push',        price: 1200 },
        { label: 'Płatności in-app',          price: 2000 },
        { label: 'Wielojęzyczność',           price: 1500 },
    ],
    design: [
        { label: 'Design system',             price: 2000 },
        { label: 'Animacje / micro-interakcje', price: 1500 },
        { label: 'Prototype w Figmie',        price: 1000 },
    ],
    seo: [
        { label: 'Audyt SEO',                 price: 800 },
        { label: 'Copywriting (4 artykuły/msc)', price: 1200 },
        { label: 'Raportowanie miesięczne',   price: 300 },
    ],
    social: [
        { label: '2 platformy',               price: 600 },
        { label: 'Reklamy płatne (Ads)',      price: 1000 },
        { label: 'Grafiki na zamówienie',     price: 800 },
        { label: 'Reels / krótkie wideo',     price: 1500 },
    ],
};

const TIMELINES = [
    { id: 'standard',   label: 'Standardowy',   desc: '6–8 tygodni', mult: 1 },
    { id: 'fast',       label: 'Przyspieszony', desc: '3–4 tygodnie', mult: 1.3 },
    { id: 'express',    label: 'Ekspresowy',    desc: '1–2 tygodnie', mult: 1.6 },
] as const;

type TimelineId = typeof TIMELINES[number]['id'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(n: number) {
    return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(n);
}

// ─── Komponenty kroków ────────────────────────────────────────────────────────

function Step1({ selected, onSelect }: { selected: ServiceId | null; onSelect: (id: ServiceId) => void }) {
    return (
        <div className='flex flex-col gap-3 flex-1'>
            <div className='grid grid-cols-2 gap-2'>
                {SERVICES.map(s => (
                    <button
                        key={s.id}
                        onClick={() => onSelect(s.id)}
                        className={`flex items-start gap-3 rounded-2xl p-3 text-left transition-all duration-150 border-2 ${
                            selected === s.id
                                ? 'border-black bg-black text-white'
                                : 'border-transparent bg-black/10 hover:bg-black/15 text-black'
                        }`}
                    >
                        <span className='text-xl leading-none mt-0.5'>{s.icon}</span>
                        <div>
                            <p className='text-xs font-bold leading-tight'>{s.label}</p>
                            <p className={`text-[10px] mt-0.5 leading-tight ${selected === s.id ? 'text-white/60' : 'text-black/40'}`}>{s.desc}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

function Step2({ serviceId, selected, onToggle }: { serviceId: ServiceId; selected: string[]; onToggle: (label: string) => void }) {
    const extras = EXTRAS[serviceId] ?? [];
    return (
        <div className='flex flex-col gap-2 flex-1'>
            {extras.map(e => {
                const active = selected.includes(e.label);
                return (
                    <button
                        key={e.label}
                        onClick={() => onToggle(e.label)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-150 border-2 ${
                            active
                                ? 'border-black bg-black text-white'
                                : 'border-transparent bg-black/10 hover:bg-black/15 text-black'
                        }`}
                    >
                        <span className='text-xs font-semibold'>{e.label}</span>
                        <span className={`text-xs font-bold ${active ? 'text-white/70' : 'text-black/40'}`}>+{formatPrice(e.price)}</span>
                    </button>
                );
            })}
        </div>
    );
}

function Step3({
    timeline, onTimeline, name, setName, email, setEmail, phone, setPhone, totalPrice, monthly, onSubmit
}: {
    timeline: TimelineId; onTimeline: (id: TimelineId) => void;
    name: string; setName: (v: string) => void;
    email: string; setEmail: (v: string) => void;
    phone: string; setPhone: (v: string) => void;
    totalPrice: number; monthly: boolean;
    onSubmit: () => void;
}) {
    const inputCls = 'rounded-xl bg-black/10 px-4 py-2.5 text-sm font-medium text-black placeholder-black/40 outline-none focus:bg-black/15 transition-colors w-full';
    return (
        <div className='flex flex-col gap-4 flex-1'>
            {!monthly && (
                <div className='flex gap-2'>
                    {TIMELINES.map(t => (
                        <button
                            key={t.id}
                            onClick={() => onTimeline(t.id)}
                            className={`flex-1 rounded-2xl px-2 py-2.5 text-center border-2 transition-all duration-150 ${
                                timeline === t.id
                                    ? 'border-black bg-black text-white'
                                    : 'border-transparent bg-black/10 hover:bg-black/15 text-black'
                            }`}
                        >
                            <p className='text-xs font-bold'>{t.label}</p>
                            <p className={`text-[10px] ${timeline === t.id ? 'text-white/60' : 'text-black/40'}`}>{t.desc}</p>
                        </button>
                    ))}
                </div>
            )}

            <div className='rounded-2xl bg-black/10 px-5 py-4 flex items-center justify-between'>
                <div>
                    <p className='text-[10px] font-semibold uppercase tracking-wider text-black/40'>Szacunkowa wycena</p>
                    <p className='text-2xl font-extrabold text-black'>{formatPrice(totalPrice)}</p>
                </div>
                <p className='text-xs text-black/40 text-right leading-relaxed'>
                    {monthly ? 'miesięcznie' : 'netto'}<br />
                    <span className='text-[10px]'>Ostateczna cena po konsultacji</span>
                </p>
            </div>

            <div className='flex flex-col gap-2'>
                <input type='text'    placeholder='Imię i nazwisko' value={name}  onChange={e => setName(e.target.value)}  className={inputCls} />
                <input type='email'   placeholder='E-mail'           value={email} onChange={e => setEmail(e.target.value)} className={inputCls} />
                <input type='tel'     placeholder='Telefon'           value={phone} onChange={e => setPhone(e.target.value)} className={inputCls} />
            </div>

            <button
                onClick={onSubmit}
                disabled={!name || !email}
                className='w-full rounded-full bg-black py-3 text-sm font-semibold text-white transition-opacity hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed'
            >
                Wyślij zapytanie →
            </button>
        </div>
    );
}

function StepDone() {
    return (
        <div className='flex flex-1 flex-col items-center justify-center gap-4 text-center'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black text-3xl'>✓</div>
            <div>
                <p className='text-lg font-extrabold text-black'>Wysłano!</p>
                <p className='mt-1 text-sm text-black/50'>Odezwiemy się w ciągu 24h.</p>
            </div>
        </div>
    );
}

// ─── Główny komponent ─────────────────────────────────────────────────────────

export default function QuoteForm() {
    const [step, setStep] = useState(1);
    const [service, setService] = useState<ServiceId | null>(null);
    const [extras, setExtras] = useState<string[]>([]);
    const [timeline, setTimeline] = useState<TimelineId>('standard');
    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [done, setDone]   = useState(false);

    const serviceData = SERVICES.find(s => s.id === service);
    const extrasPrice = service
        ? (EXTRAS[service] ?? []).filter(e => extras.includes(e.label)).reduce((s, e) => s + e.price, 0)
        : 0;
    const timelineMult = TIMELINES.find(t => t.id === timeline)?.mult ?? 1;
    const totalPrice = Math.round(((serviceData?.base ?? 0) + extrasPrice) * (serviceData?.monthly ? 1 : timelineMult));
    const monthly = serviceData?.monthly ?? false;

    const toggleExtra = (label: string) =>
        setExtras(prev => prev.includes(label) ? prev.filter(e => e !== label) : [...prev, label]);

    const titles = ['Wybierz usługę', 'Opcje dodatkowe', 'Twoje dane'];

    if (done) return <StepDone />;

    return (
        <div className='flex flex-1 flex-col' style={{ minHeight: 0 }}>
            {/* Nagłówek + kroki */}
            <div className='mb-5'>
                <div className='flex items-center justify-between mb-1'>
                    <p className='text-xs font-semibold uppercase tracking-[0.2em] text-black/40'>Wycena projektu</p>
                    <p className='text-[10px] text-black/30 font-medium'>Krok {step} / 3</p>
                </div>
                <h3 className='text-2xl font-extrabold text-black'>{titles[step - 1]}</h3>
                <div className='mt-3 flex gap-1.5'>
                    {[1, 2, 3].map(n => (
                        <div key={n} className={`h-1 flex-1 rounded-full transition-all duration-300 ${n <= step ? 'bg-black' : 'bg-black/15'}`} />
                    ))}
                </div>
            </div>

            {/* Zawartość kroku */}
            <div className='flex-1 overflow-y-auto pr-1' style={{ scrollbarWidth: 'none' }}>
                {step === 1 && <Step1 selected={service} onSelect={id => { setService(id); setExtras([]); }} />}
                {step === 2 && service && <Step2 serviceId={service} selected={extras} onToggle={toggleExtra} />}
                {step === 3 && (
                    <Step3
                        timeline={timeline} onTimeline={setTimeline}
                        name={name} setName={setName}
                        email={email} setEmail={setEmail}
                        phone={phone} setPhone={setPhone}
                        totalPrice={totalPrice} monthly={monthly}
                        onSubmit={() => setDone(true)}
                    />
                )}
            </div>

            {/* Nawigacja */}
            {step < 3 && (
                <div className='mt-4 flex justify-between'>
                    {step > 1
                        ? <button onClick={() => setStep(s => s - 1)} className='text-sm font-semibold text-black/40 hover:text-black transition-colors'>← Wróć</button>
                        : <span />
                    }
                    <button
                        onClick={() => setStep(s => s + 1)}
                        disabled={step === 1 && !service}
                        className='rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed'
                    >
                        Dalej →
                    </button>
                </div>
            )}
        </div>
    );
}
