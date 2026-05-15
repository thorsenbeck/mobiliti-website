'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    name: 'Basis',
    tag: null,
    price: '2.490',
    visits: '4 besøg',
    frequency: 'pr. måned',
    features: [
      '1 × 45 min per uge',
      'Fast personlig træner',
      'Individuelt tilpasset program',
      'Digital journalføring',
    ],
    cta: 'Book gratis konsultation',
    highlight: false,
  },
  {
    name: 'Anbefalet',
    tag: 'Mest valgte',
    price: '3.990',
    visits: '8 besøg',
    frequency: 'pr. måned',
    features: [
      '2 × 45 min per uge',
      'Fast personlig træner',
      'Individuelt program + løbende justering',
      'Digital journalføring',
      'Opfølgning pr. telefon',
    ],
    cta: 'Book gratis konsultation',
    highlight: true,
  },
  {
    name: 'Luksus',
    tag: '3 × Ugentlig',
    price: '5.490',
    visits: '12 besøg',
    frequency: 'pr. måned',
    features: [
      '3 × 45 min per uge',
      'Fast personlig træner',
      'Ugentlig rapport til pårørende',
      'Prioriteret terapeut-matching',
      'Telefonisk støtte mellem sessioner',
    ],
    cta: 'Book gratis konsultation',
    highlight: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sage-50/60 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 blob-2 bg-cream-100/80 translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-200">
            <span className="w-2 h-2 rounded-full bg-sage-500" />
            Priser & pakker
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Enkel, gennemsigtig{' '}
            <em className="text-sage-500 not-italic">prissætning</em>
          </h2>

          <p className="text-lg text-sage-700 max-w-xl mx-auto leading-relaxed">
            Ingen skjulte gebyrer. Ingen binding. Vælg det der passer dig.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-sage-900 text-white shadow-2xl shadow-sage-900/20 md:-mt-4 md:mb-4'
                  : 'bg-white border border-sage-100 shadow-lg shadow-sage-100/40'
              }`}
            >
              {/* Popular badge */}
              {plan.tag && plan.highlight && (
                <div className="absolute -top-4 left-6 bg-sage-500 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase shadow-md">
                  {plan.tag}
                </div>
              )}
              {plan.tag && !plan.highlight && (
                <div className="inline-flex self-start bg-sage-100 text-sage-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  {plan.tag}
                </div>
              )}

              {/* Plan name */}
              <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${
                plan.highlight ? 'text-sage-300' : 'text-sage-500'
              }`}>
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span
                  className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-sage-900'}`}
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {plan.price}
                </span>
                <span className={`text-lg font-medium ml-1 ${plan.highlight ? 'text-sage-300' : 'text-sage-500'}`}>
                  kr
                </span>
              </div>
              <p className={`text-sm mb-8 ${plan.highlight ? 'text-sage-400' : 'text-sage-500'}`}>
                {plan.frequency} · {plan.visits}
              </p>

              {/* Divider */}
              <div className={`h-px mb-8 ${plan.highlight ? 'bg-sage-700' : 'bg-sage-100'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.highlight ? 'bg-sage-500' : 'bg-sage-100'
                    }`}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6L4.5 8.5L10 3.5"
                          stroke={plan.highlight ? 'white' : '#1e4f6d'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className={`text-sm leading-relaxed ${
                      plan.highlight ? 'text-sage-200' : 'text-sage-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.highlight
                    ? 'bg-white text-sage-900 hover:bg-sage-50 shadow-lg'
                    : 'bg-sage-500 hover:bg-sage-600 text-white shadow-md hover:shadow-lg hover:shadow-sage-200'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sage-500 text-sm mt-10"
        >
          Individuelt program · Ingen binding · 14 dages opsigelse · 📍 København & omegn
        </motion.p>
      </div>
    </section>
  )
}
