'use client'

import { motion } from 'framer-motion'

export default function ProjektHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50 pt-32 pb-20">
      {/* Background organic shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-sage-100/60"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1], rotate: [0, -4, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -left-32 w-[520px] h-[520px] blob-2 bg-cream-300/50"
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #a8c4a8 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-sage-200"
        >
          <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
          Pilotprojekt · 12 måneder · Klar til opstart
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-900 leading-tight mb-6 text-balance"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Forebyggende hjemmetræning —{' '}
          <span className="text-sage-600">afprøvet, dokumenteret, delt</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-sage-700 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Mobiliti afprøver en ny model for fagligt funderet hjemmetræning til ældre,
          rekonvalescenter og privatpersoner — leveret af fysioterapeutstuderende under
          supervision af autoriseret fysioterapeut, og dokumenteret med validerede
          måleredskaber anbefalet af Sundhedsstyrelsen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { label: 'Min. 30 deltagere', sub: 'i pilotperioden' },
            { label: '6 validerede tests', sub: 'målt hver 4. uge' },
            { label: 'Offentlig rapport', sub: 'ved projektafslutning' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/70 backdrop-blur rounded-2xl p-4 border border-sage-100"
            >
              <p className="font-bold text-sage-900 text-sm">{item.label}</p>
              <p className="text-xs text-sage-600 mt-1">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
