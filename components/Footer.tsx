'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const footerLinks = {
  navigation: [
    { label: 'Om os', href: '#about' },
    { label: 'Sådan virker det', href: '#how-it-works' },
    { label: 'Priser', href: '#pricing' },
    { label: 'Book konsultation', href: '#contact' },
  ],
  legal: [
    { label: 'Privatlivspolitik', href: '#' },
    { label: 'Cookiepolitik', href: '#' },
    { label: 'Handelsbetingelser', href: '#' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-sage-900 text-sage-300 overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-sage-800 to-transparent opacity-50" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 blob-1 bg-sage-800/60 translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-0 left-0 w-48 h-48 blob-2 bg-sage-800/40 -translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="inline-block mb-5 group">
              <Image
                src="/mobiliti_logo.png"
                alt="Mobiliti"
                width={240}
                height={85}
                className="h-20 w-auto brightness-0 invert opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </a>

            <p className="text-sage-400 leading-relaxed mb-6 max-w-xs text-sm">
              Fysioterapi-baseret hjemmetræning til genoptræning, forebyggelse og vedligehold —
              trygt, fagligt og hjemme hos dig.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <a href="tel:+4561467657" className="flex items-center gap-2.5 text-sm text-sage-400 hover:text-sage-200 transition-colors group">
                <div className="w-7 h-7 rounded-full bg-sage-700 flex items-center justify-center group-hover:bg-sage-600 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.99 14.5a19.79 19.79 0 01-3.07-8.63A2 2 0 013.92 3.8h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 11.5a16 16 0 006.29 6.29l1.07-1.07a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                +45 61 46 76 57
              </a>
              <a href="mailto:kontakt@mobiliti.dk" className="flex items-center gap-2.5 text-sm text-sage-400 hover:text-sage-200 transition-colors group">
                <div className="w-7 h-7 rounded-full bg-sage-700 flex items-center justify-center group-hover:bg-sage-600 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                kontakt@mobiliti.dk
              </a>
              <div className="flex items-center gap-2.5 text-sm text-sage-400">
                <div className="w-7 h-7 rounded-full bg-sage-700 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                København & omegn — vi kommer til dig
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-sage-400 hover:text-sage-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Kom i gang</h4>
            <p className="text-sage-400 text-sm leading-relaxed mb-5">
              Book en gratis, uforpligtende konsultation og hør hvad vi kan gøre for dig eller din pårørende.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-400 text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Book gratis konsultation
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sage-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sage-500 text-sm text-center md:text-left">
              © {currentYear} Mobiliti ApS. Alle rettigheder forbeholdes.
            </p>

            {/* Legal links */}
            <div className="flex flex-wrap gap-6 justify-center">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-sage-500 hover:text-sage-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-6 text-center">
            <p className="text-sage-600 text-xs italic">
              "Bevægelse er ikke en luksus — det er en rettighed."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
