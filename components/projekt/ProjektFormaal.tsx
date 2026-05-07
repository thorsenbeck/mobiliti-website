'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const targets = [
  {
    icon: '🏠',
    title: 'Hjemmeboende ældre (65+)',
    description:
      'Borgere med risiko for eller begyndende tegn på nedsat funktionsevne, muskelsvind eller faldtendens.',
  },
  {
    icon: '🩺',
    title: 'Rekonvalescenter efter operation',
    description:
      'Hjemsendte borgere efter ortopædkirurgi (hofte-/knæalloplastik, korsbåndsrekonstruktion m.fl.) der har behov for skånsom, tidlig og kontinuerlig genoptræning.',
  },
  {
    icon: '👥',
    title: 'Privatpersoner og pårørende',
    description:
      'Voksne der efterspørger fagligt superviseret forebyggende træning hjemme — herunder voksne børn der ønsker at sikre forældre kontinuerlig fysisk aktivitet.',
  },
]

const goals = [
  {
    label: 'Forebygge',
    text: 'Fald, muskelsvind og funktionsnedsættelse hos ældre, rekonvalescenter og voksne med øget risiko for funktionstab.',
  },
  {
    label: 'Afprøve',
    text: 'En skalerbar leveringsmodel der udfylder hullet mellem kommunal genoptræning, private klinikker og kommercielle fitnesstilbud.',
  },
  {
    label: 'Generere viden',
    text: 'Om effekt, implementeringsbarrierer og skalerbarhed — der kan komme det samlede sundhedssystem til gavn.',
  },
]

export default function ProjektFormaal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 blob-3 bg-cream-100/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-200">
            <span className="w-2 h-2 rounded-full bg-sage-500" />
            Formål og målgrupper
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Tre formål — tre{' '}
            <em className="text-sage-500 not-italic">målgrupper</em>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Pilotprojektet adresserer både den enkelte borgers behov og det bredere sundhedssystems
            mangel på dokumenteret viden om forebyggende hjemmetræning.
          </p>
        </motion.div>

        {/* Formål */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white rounded-3xl p-7 border border-sage-100 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-3">
                Formål {i + 1}
              </p>
              <h3 className="text-xl font-bold text-sage-900 mb-3">{goal.label}</h3>
              <p className="text-sage-700 leading-relaxed text-sm">{goal.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Målgrupper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-sage-900 rounded-4xl p-10 md:p-14 text-white"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-300 mb-3">
            Målgrupper i pilotprojektet
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Min. 30 deltagere — fordelt på tre segmenter
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {targets.map((t) => (
              <div key={t.title} className="border border-sage-700 rounded-3xl p-6">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h4 className="font-bold text-white mb-2">{t.title}</h4>
                <p className="text-sm text-sage-200 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
