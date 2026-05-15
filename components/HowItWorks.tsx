'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Gratis samtale',
    description: 'Vi mødes hjemme hos dig eller på video. Vi taler om dine mål — gratis og uforpligtende.',
    details: ['Gratis og uforpligtende', 'Pårørende er velkomne'],
    color: 'from-sage-400 to-sage-500',
    bgLight: 'bg-sage-50',
    accentColor: 'text-sage-700',
    borderColor: 'border-sage-200',
  },
  {
    number: '02',
    title: 'Din faste træner',
    description: 'Du får én fast træner der kender dig. Samme ansigt hver gang — det giver tryghed.',
    details: ['Samme træner hver gang', 'Tavshedspligt og GDPR-sikret'],
    color: 'from-earth-400 to-earth-500',
    bgLight: 'bg-earth-50',
    accentColor: 'text-earth-600',
    borderColor: 'border-earth-200',
  },
  {
    number: '03',
    title: 'Vi kommer hjem til dig',
    description: '45 minutters træning hos dig, 1–3 gange om ugen. Programmet justeres så du hele tiden gør fremskridt.',
    details: ['45 min pr. besøg', 'Ingen binding — 14 dages opsigelse'],
    color: 'from-warm-400 to-warm-500',
    bgLight: 'bg-warm-50',
    accentColor: 'text-warm-600',
    borderColor: 'border-warm-200',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-8 w-64 h-64 blob-2 bg-cream-100/70" />
        <div className="absolute bottom-20 left-0 w-48 h-48 blob-3 bg-sage-50/80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-earth-50 text-earth-600 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-earth-200">
            <span className="w-2 h-2 rounded-full bg-earth-400" />
            Simpelt og trygt
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Tre enkle trin til et bedre liv
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Sådan kommer du i gang — nemt og uden forpligtelser.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * index }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 -translate-x-4 z-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + 0.15 * index }}
                    className="h-0.5 bg-gradient-to-r from-sage-300 to-sage-200 origin-left"
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sage-300" />
                </div>
              )}

              <div className={`relative ${step.bgLight} rounded-4xl p-8 border ${step.borderColor} h-full group hover:shadow-xl transition-all duration-400 hover:-translate-y-1`}>
                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                  <motion.div
                    animate={isInView ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: index * 2 }}
                    className={`w-8 h-8 rounded-full border-2 border-dashed ${step.borderColor} opacity-50`}
                  />
                </div>

                <h3 className="text-xl font-bold text-sage-900 mb-3">{step.title}</h3>
                <p className="text-sage-700 leading-relaxed mb-6 text-sm">{step.description}</p>

                {/* Detail list */}
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2.5 text-sm text-sage-700">
                      <span className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3 5.5L6.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-sage-200 hover:-translate-y-1"
          >
            Start med en gratis konsultation
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm text-sage-500 mt-3">Ingen forpligtelse. Gratis. Uden pres.</p>
        </motion.div>
      </div>
    </section>
  )
}
