'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  {
    period: 'Måned 1–2',
    title: 'Rekruttering og onboarding',
    detail: 'Onboarding af studerende og første deltagere. Min. 10 deltagere tilmeldt.',
  },
  {
    period: 'Måned 3',
    title: 'Fuld drift',
    detail: 'Alle deltagere i aktiv træning. Min. 20 aktive deltagere på dette tidspunkt.',
  },
  {
    period: 'Måned 6',
    title: 'Midtvejsevaluering',
    detail: 'Dokumenteret fremgang hos min. 70% af deltagerne på de validerede tests.',
  },
  {
    period: 'Måned 9',
    title: 'Udvidet rekruttering',
    detail: 'Min. 30 deltagere totalt i projektet, fordelt på de tre målgrupper.',
  },
  {
    period: 'Måned 12',
    title: 'Afsluttende evaluering',
    detail: 'Offentliggjort projektrapport på mobiliti.dk og deling med relevante aktører.',
  },
]

export default function ProjektMilepaele() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 blob-1 bg-cream-100/70 translate-x-1/3" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cream-100 text-earth-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-cream-200">
            <span className="w-2 h-2 rounded-full bg-earth-400" />
            Tidsplan
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Milepæle i pilotperioden
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Pilotprojektet løber over 12 måneder fra bevillingsdato — med klare succeskriterier ved
            hver milepæl.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-sage-200" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.period}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-0 md:left-2 top-1 w-12 h-12 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sage-200">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-1">
                  {m.period}
                </p>
                <h3 className="text-xl font-bold text-sage-900 mb-2">{m.title}</h3>
                <p className="text-sage-700 leading-relaxed">{m.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
