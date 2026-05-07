'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const elements = [
  {
    title: 'Aktiv træning',
    duration: 'ca. 30 min.',
    description:
      'Individuelt tilpassede styrke-, balance- og mobilitetsøvelser, justeret efter borgerens funktionsniveau og dagsform.',
  },
  {
    title: 'Information',
    duration: 'ca. 10 min.',
    description:
      'Vejledning i hverdagsaktivitet, sikkerhed i hjemmet og egenomsorg — så træningen forankres ud over selve besøget.',
  },
  {
    title: 'Statusopdatering',
    duration: 'ca. 5 min.',
    description:
      'Dokumentation af fremskridt i digital journal og løbende justering af træningsprogrammet.',
  },
]

export default function ProjektMetode() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 blob-2 bg-sage-50/70 -translate-x-1/4" />
        <div className="absolute bottom-10 right-10 w-56 h-56 blob-3 bg-earth-50/80" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-earth-50 text-earth-600 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-earth-200">
            <span className="w-2 h-2 rounded-full bg-earth-400" />
            Metode
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Mobiliti-modellen
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Hvert besøg varer 45 minutter og består af tre integrerede elementer. Alle programmer
            udarbejdes og godkendes af en autoriseret fysioterapeut (supervisor) inden opstart, og
            evalueres månedligt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {elements.map((el, i) => (
            <motion.div
              key={el.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-sage-50 rounded-3xl p-7 border border-sage-100"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span
                  className="text-3xl font-bold text-sage-700"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  0{i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-sage-500">
                  {el.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold text-sage-900 mb-3">{el.title}</h3>
              <p className="text-sage-700 leading-relaxed text-sm">{el.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Supervision og uddannelse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-3xl p-8 border border-sage-200">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-sage-900 mb-3">Fysioterapeutstuderende</h3>
            <p className="text-sage-700 leading-relaxed text-sm">
              Indskrevet på fysioterapeutuddannelsen (3. semester eller derover) med beståede
              kliniske moduler. Ansat på timekontrakt og oplært i Mobiliti-metoden gennem
              formaliseret introduktionsforløb — herunder kvalitetstjek, GDPR og sikkerhedsprocedurer.
            </p>
          </div>
          <div className="bg-sage-900 text-white rounded-3xl p-8">
            <div className="text-3xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-3">Autoriseret fysioterapeut</h3>
            <p className="text-sage-200 leading-relaxed text-sm">
              Supervisor godkender alle træningsprogrammer inden opstart, gennemfører månedlige
              evalueringer, justerer programmer og modtager incidentrapporter ved behov. Sikrer
              faglig kvalitet i hele projektets levetid.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
