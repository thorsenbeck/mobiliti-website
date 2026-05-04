'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const concerns = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    headline: 'Frygten for et fald',
    text: 'Et fald kan ændre alt på sekunder. Du bekymrer dig konstant — hvad sker der, hvis din mor eller far falder, mens de er alene hjemme?',
    color: 'bg-red-50 text-red-400 border-red-100',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    headline: 'Tab af selvstændighed',
    text: 'At se sin forælder kæmpe med daglige opgaver — at rejse sig, gå på trapper, tage bad — er hjerteskærende. Ingen ønsker at miste deres værdighed.',
    color: 'bg-amber-50 text-amber-500 border-amber-100',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    headline: 'Bekymringen nager døgnet rundt',
    text: 'Du bor måske langt væk. Du kan ikke altid være der. Den tanke — "hvad sker der, hvis..." — forfølger dig hele dagen og om natten.',
    color: 'bg-blue-50 text-blue-400 border-blue-100',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.99 14.5a19.79 19.79 0 01-3.07-8.63A2 2 0 013.92 3.8h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 11.5a16 16 0 006.29 6.29l1.07-1.07a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    headline: 'Svært at finde den rigtige hjælp',
    text: 'Fitnesscenter er for skræmmende. Fysioterapi slutter for tidligt. Personlige trænere forstår ikke ældre kroppe. Hvad er egentlig det rigtige valg?',
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
            Du er ikke alene med disse tanker
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bekymringen for din forælder{' '}
            <em className="text-sage-500 not-italic">er reel</em>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            Aldring sker gradvist — og pludselig er det ikke længere bare "far er lidt langsom".
            Det er fald, isolation, tab af det liv han kendte. Disse bekymringer bærer tusindvis af
            voksne børn med sig hver dag.
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

        {/* Transition bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-sage-50 border border-sage-200 rounded-3xl px-8 py-6 max-w-2xl">
            <p className="text-sage-700 text-lg leading-relaxed">
              <span className="font-bold text-sage-900">Men det behøver ikke at være sådan.</span>{' '}
              Der er en vej til at give din forælder — og dig selv — ro i sindet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
