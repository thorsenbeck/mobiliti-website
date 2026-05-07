'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProjektForankring() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-200">
            <span className="w-2 h-2 rounded-full bg-sage-500" />
            Forankring og fremtid
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Viden der{' '}
            <em className="text-sage-500 not-italic">ikke forsvinder</em>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Mobiliti drives som et selvbærende projekt og forankres i en driftsorganisation, der
            kan videreudvikle og skalere indsatsen efter projektets afslutning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-sage-50 rounded-3xl p-8 border border-sage-100"
          >
            <div className="text-3xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold text-sage-900 mb-3">Kommunalt samarbejde</h3>
            <p className="text-sage-700 leading-relaxed text-sm">
              Resultaterne kan informere kommunale beslutninger om fremtidige rehabiliteringstilbud
              og indgå som grundlag for samarbejde med kommuner om forebyggende hjemmebesøg.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-cream-100 rounded-3xl p-8 border border-cream-200"
          >
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-sage-900 mb-3">Uddannelsessamarbejde</h3>
            <p className="text-sage-700 leading-relaxed text-sm">
              Mobiliti ønsker at etablere formaliseret samarbejde med fysioterapeutuddannelser,
              så praktikophold hos Mobiliti bliver en anerkendt del af uddannelsesforløbet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-sage-200"
          >
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-sage-900 mb-3">Åben videndeling</h3>
            <p className="text-sage-700 leading-relaxed text-sm">
              Den afsluttende projektrapport stilles frit tilgængelig, og aggregerede effekttal
              offentliggøres løbende på mobiliti.dk efter projektets afslutning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-sage-900 text-white rounded-3xl p-8"
          >
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-3">Bæredygtig drift</h3>
            <p className="text-sage-200 leading-relaxed text-sm">
              Den afprøvede leveringsmodel — fysioterapeutstuderende under supervision —
              skaber økonomisk grundlag for at drive Mobiliti videre uden løbende fondsstøtte
              efter pilotperioden.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
