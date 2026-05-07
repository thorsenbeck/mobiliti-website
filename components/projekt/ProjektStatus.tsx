'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const completed = [
  'Hjemmeside og brand etableret på mobiliti.dk',
  'Komplet brugerrejse, kontaktformular og responsivt design',
  'Offentliggjort prismodel med tre transparente abonnementspakker',
  'Måleredskaber og testbatteri offentligt dokumenteret',
  'Tre-trins kundeflow defineret og publiceret',
  'GDPR-compliant kontaktinfrastruktur etableret',
  'Indledende dialog med fysioterapeutuddannelser',
  'Forretningsplan og pilotmodel udarbejdet',
]

export default function ProjektStatus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-sage-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sage-700/40"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] blob-2 bg-sage-800/60"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-sage-700/60 text-sage-200 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-600">
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
            Status pr. maj 2026
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Klar til pilotopstart{' '}
            <em className="text-sage-300 not-italic">— fra dag ét</em>
          </h2>
          <p className="text-lg text-sage-200 leading-relaxed">
            Mobiliti er ikke et koncept på papir. Modellen er allerede operationel, og det
            følgende forarbejde er gennemført uden ekstern finansiering. En støtte fra Helsefonden
            vil gå direkte til selve gennemførelsen, effektmålingen og videndelingen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 mb-14">
          {completed.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex items-start gap-3 bg-sage-800/40 backdrop-blur rounded-2xl p-4 border border-sage-700"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-500 flex items-center justify-center mt-0.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6L4.5 8.5L10 3.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sage-100 text-sm leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center bg-sage-800/40 backdrop-blur rounded-3xl p-8 md:p-10 border border-sage-700"
        >
          <p className="text-sage-200 leading-relaxed mb-6 max-w-2xl mx-auto">
            Vil du vide mere om pilotprojektet, samarbejdsmuligheder eller dokumentation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-sage-900 hover:bg-sage-50 font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Kontakt Peter Thorsen Beck
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:kontakt@mobiliti.dk"
              className="inline-flex items-center justify-center gap-2 bg-sage-700/50 hover:bg-sage-700 text-white font-semibold px-8 py-4 rounded-full text-base border border-sage-600 transition-all duration-300"
            >
              kontakt@mobiliti.dk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
