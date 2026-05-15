'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const concerns = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    headline: 'Genoptræningen sluttede for tidligt',
    text: 'Den offentlige genoptræning slutter ofte før kroppen er klar — og du står tilbage uden den næste hjælp.',
    color: 'bg-amber-50 text-amber-500 border-amber-100',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    headline: 'Frygten for at falde holder dig tilbage',
    text: 'Hver tredje over 65 falder mindst én gang om året. Den gode nyhed: styrke og balance kan trænes — og fald kan forebygges.',
    color: 'bg-red-50 text-red-400 border-red-100',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    headline: 'Fitnesscentret er ikke for dig',
    text: 'Du har ikke lyst til at træne mellem fremmede — du har brug for nogen der møder dig hvor du er.',
    color: 'bg-blue-50 text-blue-400 border-blue-100',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    headline: 'Bekymringen for en pårørende',
    text: 'Du ser din mor eller far blive svagere — men du ved ikke hvor du skal finde den rette hjælp.',
    color: 'bg-purple-50 text-purple-400 border-purple-100',
  },
]

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 blob-2 bg-cream-100/80 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 blob-1 bg-sage-50/60 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-red-100">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            Måske kan du genkende det her
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Træning bør møde dig{' '}
            <em className="text-sage-500 not-italic">hvor du er</em>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Du er i bedring efter en operation. Du vil forebygge fald. Eller du bekymrer
            dig for en pårørende. Vi har en løsning der passer.
          </p>
        </motion.div>

        {/* Concern cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {concerns.map((concern, index) => (
            <motion.div
              key={concern.headline}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group relative bg-white border border-sage-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-sage-100/50 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border ${concern.color} mb-5`}>
                {concern.icon}
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-3">{concern.headline}</h3>
              <p className="text-sage-700 leading-relaxed">{concern.text}</p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-sage-200 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
