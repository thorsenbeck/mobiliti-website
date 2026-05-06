'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tests = [
  {
    icon: '⏱️',
    name: 'Timed Up and Go (TUG)',
    measures: 'Mobilitet & faldrisiko',
    description: 'Vi måler hvor lang tid det tager at rejse sig fra en stol, gå 3 meter, vende om og sætte sig igen. En anerkendt indikator for faldrisiko hos ældre.',
  },
  {
    icon: '💺',
    name: '30-sek. rejse-sætte-sig',
    measures: 'Benstyrke & funktion',
    description: 'Vi tæller hvor mange gange du kan rejse dig fra en stol uden brug af armene på 30 sekunder. Et af de bedste mål for funktionel benstyrke i hverdagen.',
  },
  {
    icon: '⚖️',
    name: 'Bergs Balanceskala',
    measures: 'Balance i 14 situationer',
    description: 'En 14-trins vurdering af din balance i hverdagssituationer — at rejse sig, række ud, dreje sig, stå på ét ben. Bredt anerkendt som guldstandard.',
  },
  {
    icon: '📏',
    name: 'Functional Reach Test',
    measures: 'Dynamisk balance',
    description: 'Vi måler hvor langt du kan række forover uden at miste balancen. En enkel og præcis indikator for risiko for fald i hverdagen.',
  },
  {
    icon: '🚶',
    name: '6-minutters gangtest',
    measures: 'Kondition & udholdenhed',
    description: 'Vi måler hvor langt du kan gå på 6 minutter. Et validt mål for kredsløbsudholdenhed og den fysiske kapacitet, hverdagen kræver.',
  },
  {
    icon: '📋',
    name: 'Forløbsdokumentation',
    measures: 'Hver 4. uge',
    description: 'Tests gentages hver 4. uge og dokumenteres i din digitale journal. Du ser sort på hvidt — hvor du er stærkere, mere stabil eller har mere udholdenhed.',
  },
]

export default function Assessment() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 blob-1 bg-sage-50/70 -translate-y-1/3" />
        <div className="absolute bottom-10 right-0 w-80 h-80 blob-2 bg-cream-100/70 translate-x-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-200">
            <span className="w-2 h-2 rounded-full bg-sage-500" />
            Faglige måleredskaber
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Sådan måler vi{' '}
            <em className="text-sage-500 not-italic">din fremgang</em>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Træning uden måling er gætteri. Vi bruger validerede tests fra Sundhedsstyrelsens
            anbefalinger til forebyggende hjemmebesøg — så du kan se konkret, hvor du gør
            fremskridt, og hvor vi skal sætte ind.
          </p>
        </motion.div>

        {/* Tests grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * index }}
              className="group bg-white rounded-3xl p-7 border border-sage-100 hover:border-sage-300 hover:shadow-lg hover:shadow-sage-100/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{test.icon}</div>
              <p className="text-xs font-semibold uppercase tracking-wider text-sage-500 mb-1">
                {test.measures}
              </p>
              <h3 className="text-lg font-bold text-sage-900 mb-3">{test.name}</h3>
              <p className="text-sage-700 leading-relaxed text-sm">{test.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-sage-50 border border-sage-200 rounded-3xl px-8 py-6 max-w-3xl">
            <p className="text-sage-700 leading-relaxed">
              <span className="font-bold text-sage-900">Hvorfor måle?</span>{' '}
              Forskning fra Sundhedsstyrelsen viser at struktureret måling og dokumentation af
              fysisk formåen er afgørende for at forebygge fald, fastholde selvstændighed og
              opdage funktionstab tidligt — også efter sygdom eller operation.
            </p>
            <a
              href="https://www.sst.dk/vidensbase/aeldres-sundhed-pleje-og-omsorg/forebyggelse-blandt-aeldre/forebyggende-hjemmebesoeg-hos-aeldre/forebyggende-hjemmebesoeg-hos-aeldre-under-besoeget-temaer/fysisk-formaaen-herunder-faldrisiko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm text-sage-600 hover:text-sage-800 font-semibold transition-colors"
            >
              Læs mere hos Sundhedsstyrelsen
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
