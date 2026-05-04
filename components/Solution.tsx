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
    title: 'I trygge, kendte omgivelser',
    description: 'Træning sker i jeres eget hjem — ingen farlige ture til fitnesscentret, ingen fremmed environment. Din forælder er tryg og afslappet.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Fysioterapi-baseret tilgang',
    description: 'Vores metoder er baseret på fysioterapi-viden. Hvert program er designet til at styrke, ikke belaste — tilpasset din forælders præcise behov og begrænsninger.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 10-16 0" />
      </svg>
    ),
    title: '100% personligt program',
    description: 'Ingen standardprogrammer. Vi starter med en grundig vurdering og bygger et program specifikt til din forælder — med mål der giver mening for dem.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
    title: 'Målbar fremgang',
    description: 'Vi følger fremgangen løbende. Du og din forælder kan se den konkrete forbedring i styrke, balance og hverdagsfunktion uge for uge.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Faldforebyggelse som prioritet',
    description: 'Fald er den største trussel mod ældres selvstændighed. Vores programmer inkluderer altid balancetræning og faldforebyggelse som kerneelementet.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Værdighed og glæde',
    description: 'Vi møder din forælder, hvor de er — med respekt, humor og tålmodighed. Træning skal være noget at se frem til, ikke noget man frygter.',
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
            Løsningen du har ledt efter
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Professionel træning —{' '}
            <span className="text-sage-500">i hjemmet, på din forælders præmisser</span>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Mobiliti kombinerer fysioterapi-viden med personlig træning og leverer det direkte i
            dit forælders hjem. Resultatet: Mere styrke, bedre balance, færre bekymringer —
            og et liv der leves fuldt ud.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Visual proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 bg-white rounded-4xl border border-sage-100 p-8 md:p-10"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Tilfredse klienter', sub: 'og deres familier' },
              { number: '98%', label: 'Tilfredshedsscore', sub: 'efter 3 måneder' },
              { number: '73%', label: 'Færre fald', sub: 'hos aktive klienter' },
              { number: '5★', label: 'Gennemsnitlig bedømmelse', sub: 'på tværs af platforme' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
                className="flex flex-col items-center"
              >
                <span
                  className="text-4xl font-bold text-sage-600 mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {stat.number}
                </span>
                <span className="text-sm font-semibold text-sage-900">{stat.label}</span>
                <span className="text-xs text-sage-500 mt-0.5">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
