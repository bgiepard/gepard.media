import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('[contact] method:', req.method);
    if (req.method !== 'POST') return res.status(405).end();

    const { name, email, phone, desc, service } = req.body;
    console.log('[contact] body:', { name, email, phone, desc, service });
    console.log('[contact] RESEND_API_KEY present:', !!process.env.RESEND_API_KEY);

    if (!name || !email || !phone || !desc) {
        return res.status(400).json({ error: 'Brakujące pola' });
    }

    try {
        const result = await resend.emails.send({
            from: 'Formularz <onboarding@resend.dev>',
            to: 'test@eiteniferi.resend.app',
            subject: `Nowe zapytanie — ${service || 'brak usługi'} od ${name}`,
            html: `
                <h2>Nowe zapytanie z formularza</h2>
                <table>
                    <tr><td><strong>Imię:</strong></td><td>${name}</td></tr>
                    <tr><td><strong>E-mail:</strong></td><td>${email}</td></tr>
                    <tr><td><strong>Telefon:</strong></td><td>${phone}</td></tr>
                    <tr><td><strong>Usługa:</strong></td><td>${service || '—'}</td></tr>
                    <tr><td><strong>Opis:</strong></td><td>${desc}</td></tr>
                </table>
            `,
        });
        console.log('[contact] resend result:', JSON.stringify(result));

        res.status(200).json({ ok: true });
    } catch (err) {
        console.error('[contact] resend error:', err);
        res.status(500).json({ error: 'Błąd wysyłki' });
    }
}
