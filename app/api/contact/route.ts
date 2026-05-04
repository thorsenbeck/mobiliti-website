import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'hej@mobiliti.dk'
const FROM_ADDRESS = process.env.RESEND_FROM || 'Mobiliti <onboarding@resend.dev>'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json(
        { error: 'Server is not configured to send mail.' },
        { status: 500 }
      )
    }

    const body = await request.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const name = String(body.name ?? '').trim()
    const phone = String(body.phone ?? '').trim()
    const email = String(body.email ?? '').trim()
    const message = String(body.message ?? '').trim()

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Navn, telefon og e-mail er påkrævet.' },
        { status: 400 }
      )
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Ugyldig e-mailadresse.' },
        { status: 400 }
      )
    }

    if (name.length > 200 || phone.length > 50 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Felterne er for lange.' }, { status: 400 })
    }

    const safe = {
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      message: escapeHtml(message || '(ingen besked)'),
    }

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #293c2d;">
        <h2 style="font-family: Georgia, serif; color: #293c2d; margin: 0 0 8px;">Ny henvendelse fra mobiliti.dk</h2>
        <p style="color: #4a7050; margin: 0 0 24px;">Modtaget via kontaktformularen</p>
        <table style="width: 100%; border-collapse: collapse; background: #f4f7f4; border-radius: 12px; overflow: hidden;">
          <tr><td style="padding: 12px 16px; font-weight: 600; width: 120px; color: #324936;">Navn</td><td style="padding: 12px 16px;">${safe.name}</td></tr>
          <tr><td style="padding: 12px 16px; font-weight: 600; color: #324936; border-top: 1px solid #cddccd;">Telefon</td><td style="padding: 12px 16px; border-top: 1px solid #cddccd;"><a href="tel:${safe.phone}" style="color: #5d8a5d;">${safe.phone}</a></td></tr>
          <tr><td style="padding: 12px 16px; font-weight: 600; color: #324936; border-top: 1px solid #cddccd;">E-mail</td><td style="padding: 12px 16px; border-top: 1px solid #cddccd;"><a href="mailto:${safe.email}" style="color: #5d8a5d;">${safe.email}</a></td></tr>
        </table>
        <h3 style="margin: 24px 0 8px; color: #324936;">Besked</h3>
        <div style="background: #f4f7f4; padding: 16px; border-radius: 12px; white-space: pre-wrap; line-height: 1.6;">${safe.message}</div>
        <p style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #cddccd; font-size: 12px; color: #7ea67e;">
          Send gerne et svar inden for 24 timer. Du kan svare direkte på denne mail — det går til ${safe.email}.
        </p>
      </div>
    `

    const text = `Ny henvendelse fra mobiliti.dk

Navn:    ${name}
Telefon: ${phone}
E-mail:  ${email}

Besked:
${message || '(ingen besked)'}
`

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      html,
      text,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Mailen kunne ikke afsendes. Prøv igen senere.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json(
      { error: 'Der skete en uventet fejl.' },
      { status: 500 }
    )
  }
}
