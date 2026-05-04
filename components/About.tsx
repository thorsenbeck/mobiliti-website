'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    icon: '🎯',
    title: 'Mission',
    text: 'At gøre faglig hjemmetræning tilgængelig for alle — uanset alder, geografi eller ressourcer.',
  },
  {
    icon: '🌟',
    title: 'Vision',
    text: 'At blive Danmarks foretrukne leverandør af fysioterapeutisk hjemmetræning og et anerkendt karrierespring for fysioterapeutstuderende.',
  },
  {
    icon: '❤️',
    title: 'Hvorfor Mobiliti?',
    text: 'Vi så igen og igen, hvad der skete når ældre kom til klinikken for sent. Mobiliti opstod af ønsket om at møde folk, inden krisen rammer — direkte i det hjem, hvor livet leves.',
  },
]

const values = [
  { icon: '🔬', label: 'Faglighed', text: 'Alle programmer superviseres af autoriserede fysioterapeuter' },
  { icon: '🤝', label: 'Tryghed', text: 'Borgeren møder altid den samme terapeut' },
  { icon: '🏠', label: 'Tilgængelighed', text: 'Vi kommer til dig — ikke omvendt' },
  { icon: '💬', label: 'Transparens', text: 'Pårørende holdes løbende informeret' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 blob-1 bg-sage-100/50 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 blob-2 bg-cream-200/80 -translate-x-1/4 translate-y-1/4" />
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
            Om Mobiliti
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Bevægelse er ikke en luksus —{' '}
            <em className="text-sage-500 not-italic">det er en rettighed</em>
          </h2>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto leading-relaxed">
            Mobiliti er grundlagt af en uddannet fysioterapeut med én overbevisning: at alle ældre
            fortjener professionel, tryg og tilgængelig træning — i deres eget hjem.
          </p>
        </motion.div>

        {/* Mission / Vision / Hvorfor */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-3xl p-8 border border-sage-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3
                className="text-xl font-bold text-sage-900 mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-sage-700 leading-relaxed text-sm">{pillar.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-sage-900 rounded-4xl p-10 md:p-14"
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-white mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Vores kerneværdier
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={val.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl mb-3">{val.icon}</div>
                <p className="text-white font-bold text-base mb-2">{val.label}</p>
                <p className="text-sage-300 text-sm leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
