'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send the data to a backend
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-sage-800 via-sage-700 to-sage-900">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sage-600/30"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, -4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 blob-2 bg-sage-900/40"
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Decorative leaf shapes */}
        <svg className="absolute top-12 left-12 opacity-10 w-32 h-32" viewBox="0 0 100 100" fill="white">
          <path d="M50 10 C30 10, 10 30, 10 50 C10 70, 30 90, 50 90 C70 90, 90 70, 90 50 C90 30, 70 10, 50 10 Z" />
        </svg>
        <svg className="absolute bottom-12 right-12 opacity-10 w-48 h-48 rotate-45" viewBox="0 0 100 100" fill="white">
          <ellipse cx="50" cy="50" rx="30" ry="48" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-sage-600/50 text-sage-100 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-500/50">
              <span className="w-2 h-2 rounded-full bg-sage-300 animate-pulse" />
              Gratis og uforpligtende
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Tag det første skridt —{' '}
              <em className="text-sage-300 not-italic">i dag</em>
            </h2>

            <p className="text-sage-200 text-lg leading-relaxed mb-8">
              En gratis konsultation koster ingenting — men den kan betyde alt.
              Vi lytter, besvarer dine spørgsmål og hjælper dig med at finde ud af,
              om Mobiliti er det rigtige for din familie.
            </p>

            {/* What to expect */}
            <div className="space-y-4 mb-10">
              <p className="text-sage-300 text-sm font-semibold uppercase tracking-wider">Hvad sker der, når du skriver til os?</p>
              {[
                { step: '1', text: 'Vi kontakter dig inden for 24 timer' },
                { step: '2', text: 'Vi aftaler en gratis telefonsamtale (30 min)' },
                { step: '3', text: 'Ingen forpligtelse — du bestemmer selv' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-sage-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <p className="text-sage-200">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Contact alternatives */}
            <div className="flex flex-col gap-3">
              <p className="text-sage-300 text-sm font-semibold">Eller kontakt os direkte:</p>
              <a href="tel:+4512345678" className="flex items-center gap-3 text-sage-100 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-sage-600/60 flex items-center justify-center group-hover:bg-sage-500 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.99 14.5a19.79 19.79 0 01-3.07-8.63A2 2 0 013.92 3.8h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 11.5a16 16 0 006.29 6.29l1.07-1.07a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <span>+45 12 34 56 78</span>
              </a>
              <a href="mailto:hej@mobiliti.dk" className="flex items-center gap-3 text-sage-100 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-sage-600/60 flex items-center justify-center group-hover:bg-sage-500 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span>hej@mobiliti.dk</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-4xl p-8 md:p-10 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5d8a5d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold text-sage-900 mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Tak — vi kontakter dig snart!
                  </h3>
                  <p className="text-sage-700">
                    Vi har modtaget din besked og vender tilbage inden for 24 timer.
                    Glæd dig — et bedre liv for din forælder begynder her.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="text-2xl font-bold text-sage-900 mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Book gratis konsultation
                  </h3>
                  <p className="text-sage-500 text-sm mb-6">
                    Udfyld formularen — vi vender tilbage inden for 24 timer.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-sage-700 mb-1.5" htmlFor="name">
                          Dit navn *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Fx. Anders Jensen"
                          className="w-full px-4 py-3 rounded-2xl border border-sage-200 text-sage-900 placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all bg-sage-50/50 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-sage-700 mb-1.5" htmlFor="phone">
                          Telefon *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+45 12 34 56 78"
                          className="w-full px-4 py-3 rounded-2xl border border-sage-200 text-sage-900 placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all bg-sage-50/50 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-sage-700 mb-1.5" htmlFor="email">
                        E-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="din@email.dk"
                        className="w-full px-4 py-3 rounded-2xl border border-sage-200 text-sage-900 placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all bg-sage-50/50 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-sage-700 mb-1.5" htmlFor="message">
                        Fortæl os lidt om situationen
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Fx. Min mor er 77 år og har svært ved balance. Vi bor 200 km fra hinanden og er bekymrede for..."
                        className="w-full px-4 py-3 rounded-2xl border border-sage-200 text-sage-900 placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all bg-sage-50/50 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-sage-500 hover:bg-sage-600 text-white font-semibold py-4 rounded-2xl text-base transition-all duration-300 hover:shadow-lg hover:shadow-sage-200 hover:-translate-y-0.5"
                    >
                      Send — jeg vil gerne booke en konsultation
                    </button>

                    <p className="text-center text-xs text-sage-400">
                      Ingen spam. Dine oplysninger behandles fortroligt og slettes efter 30 dage
                      hvis vi ikke indgår et samarbejde.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
