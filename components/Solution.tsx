'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: 'Hjemme hos dig',
    description: 'Ingen transport, ingen fremmede miljøer. Du træner i kendte og trygge omgivelser.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Trygt og fagligt',
    description: 'Alle programmer er udviklet og superviseret af en autoriseret fysioterapeut.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 10-16 0" />
      </svg>
    ),
    title: 'Lavet til dig',
    description: 'Vi bygger et program der passer til din krop, dine mål og dit tempo — ikke til alle andres.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
    title: 'Du kan mærke fremgang',
    description: 'Vi måler regelmæssigt, så du selv kan se hvor du bliver stærkere og mere stabil.',
  },
]

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-sage-50 to-cream-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-0 w-80 h-80 blob-1 bg-sage-100/50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 blob-3 bg-cream-200/60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-200">
            <span className="w-2 h-2 rounded-full bg-sage-500" />
            Sådan gør vi det
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Personlig træning —{' '}
            <span className="text-sage-500">på dine præmisser</span>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Vi kombinerer faglig viden med personlig omsorg — og kommer direkte hjem til dig.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * index }}
              className="group bg-white rounded-3xl p-7 border border-sage-100 hover:border-sage-300 hover:shadow-lg hover:shadow-sage-100/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center mb-5 group-hover:bg-sage-500 group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-sage-900 mb-3">{benefit.title}</h3>
              <p className="text-sage-700 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
