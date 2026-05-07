'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tests = [
  { icon: '⏱️', name: 'Timed Up and Go (TUG)', measures: 'Mobilitet & faldrisiko' },
  { icon: '💺', name: '30-sek. rejse-sætte-sig', measures: 'Funktionel benstyrke' },
  { icon: '⚖️', name: 'Bergs Balanceskala', measures: 'Balance i 14 situationer' },
  { icon: '📏', name: 'Functional Reach Test', measures: 'Dynamisk balance' },
  { icon: '🚶', name: '6-minutters gangtest', measures: 'Kondition & udholdenhed' },
  { icon: '❤️', name: 'EQ-5D livskvalitet', measures: 'Borgerrapporteret livskvalitet' },
]

export default function ProjektMaaling() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-white to-cream-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-200">
            <span className="w-2 h-2 rounded-full bg-sage-500" />
            Dokumentation og effektmåling
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Validerede måleredskaber{' '}
            <em className="text-sage-500 not-italic">— hver 4. uge</em>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Træning uden måling er gætteri. Mobiliti anvender en testpakke baseret på
            Sundhedsstyrelsens anbefalinger til forebyggende hjemmebesøg. Tests gennemføres ved
            opstart og gentages hver 4. uge gennem hele forløbet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {tests.map((test, i) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="bg-white rounded-3xl p-6 border border-sage-100 flex items-start gap-4"
            >
              <div className="text-3xl flex-shrink-0">{test.icon}</div>
              <div>
                <h3 className="font-bold text-sage-900 text-base mb-1">{test.name}</h3>
                <p className="text-sm text-sage-600">{test.measures}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-sage-50 border border-sage-200 rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-xl font-bold text-sage-900 mb-4">
            Løbende registrering ud over tests
          </h3>
          <ul className="space-y-3 text-sage-700">
            {[
              'Fald, skader og hospitalsbesøg under hele projektperioden',
              'Antal gennemførte besøg og evt. afbud/sygdom',
              'Borgerens og pårørendes egne erfaringer (kvalitative interviews ved afslutning)',
              'Studerendes refleksioner og erfaringer med Mobiliti-metoden',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sage-500 flex items-center justify-center mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L4.5 8.5L10 3.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://www.sst.dk/vidensbase/aeldres-sundhed-pleje-og-omsorg/forebyggelse-blandt-aeldre/forebyggende-hjemmebesoeg-hos-aeldre/forebyggende-hjemmebesoeg-hos-aeldre-under-besoeget-temaer/fysisk-formaaen-herunder-faldrisiko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-6 text-sm text-sage-600 hover:text-sage-800 font-semibold transition-colors"
          >
            Læs Sundhedsstyrelsens anbefalinger
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
