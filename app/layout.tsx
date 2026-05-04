import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mobiliti — Fysioterapi-baseret hjemmetræning til ældre',
  description: 'Mobiliti tilbyder professionel, fysioterapi-baseret personlig træning i dit hjem. Vi hjælper ældre med at bevare mobilitet, styrke og selvstændighed — trygt og værdigt.',
  keywords: 'hjemmetræning, ældre, fysioterapi, personlig træner, mobilitet, faldforebyggelse, selvstændighed',
  openGraph: {
    title: 'Mobiliti — Fysioterapi-baseret hjemmetræning til ældre',
    description: 'Professionel hjemmetræning baseret på fysioterapi-viden. Vi hjælper ældre med at forblive aktive, stærke og selvstændige i deres eget hjem.',
    type: 'website',
    locale: 'da_DK',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
