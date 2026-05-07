'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const facts = [
  {
    stat: '1 ud af 3',
    label: 'over 65 år falder',
    sub: 'mindst én gang årligt',
    source: 'Sundhedsstyrelsen',
  },
  {
    stat: 'Op til 30%',
    label: 'tab af muskelmasse',
    sub: 'efter blot 2 ugers immobilitet',
    source: 'Cochrane Review, 2019',
  },
  {
    stat: '23–40%',
    label: 'lavere faldrisiko',
    sub: 'med superviseret styrke- og balancetræning',
    source: 'Sherrington et al., 2019',
  },
]

export default function ProjektBaggrund() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-72 h-72 blob-1 bg-sage-50/70 translate-x-1/4" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cream-100 text-earth-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-cream-200">
            <span className="w-2 h-2 rounded-full bg-earth-400" />
            Baggrund og problemstilling
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Et hul mellem{' '}
            <em className="text-sage-500 not-italic">kommune og klinik</em>
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed mb-5">
            Den kommunale genoptræning er under pres: ventetider er lange, forløbene er
            tidsbegrænsede, og mange af de mest sårbare borgere modtager ikke den løbende,
            forebyggende indsats der skal til for at fastholde funktionsevnen.
          </p>
          <p className="text-lg text-sage-700 leading-relaxed">
            Samtidig er private klinikker utilgængelige for borgere med transportudfordringer,
            og fitnesscentre opleves ofte som utrygge eller fagligt utilstrækkelige af målgruppen.
            Mobiliti udfylder dette hul med fagligt superviseret hjemmetræning — der hvor
            borgeren er.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.stat}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-sage-50 border border-sage-100 rounded-3xl p-7 hover:shadow-lg hover:shadow-sage-100/60 transition-all duration-300 hover:-translate-y-1"
            >
              <p
                className="text-4xl md:text-5xl font-bold text-sage-700 mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {fact.stat}
              </p>
              <p className="font-bold text-sage-900 mb-1">{fact.label}</p>
              <p className="text-sm text-sage-600 mb-4">{fact.sub}</p>
              <p className="text-xs text-sage-500 italic border-t border-sage-100 pt-3">
                Kilde: {fact.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
