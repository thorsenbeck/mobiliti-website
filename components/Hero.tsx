'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50 pt-20">
      {/* Background organic shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sage-100/60"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, -4, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] blob-2 bg-cream-300/50"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-1/4 w-32 h-32 blob-3 bg-earth-100/40"
        />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #a8c4a8 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex justify-center lg:justify-start mb-6"
          >
            <Image
              src="/mobiliti_logo.png"
              alt="Mobiliti"
              width={680}
              height={240}
              className="h-44 md:h-56 w-auto"
              priority
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            Fysioterapi-baseret hjemmetræning
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-900 leading-tight mb-6 text-balance"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Giv din mor eller far{' '}
            <span className="relative">
              <span className="text-sage-600">friheden</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-1 left-0 right-0 h-1 bg-sage-200 rounded-full origin-left"
              />
            </span>{' '}
            til at leve livet fuldt ud
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-sage-700 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Professionel, skræddersyet træning i hjemmet — baseret på fysioterapi-viden.
            Vi hjælper ældre med at bevare mobilitet, styrke og selvstændighed.
            Trygt, værdigt og effektivt.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-sage-200 hover:-translate-y-1"
            >
              Book gratis konsultation
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-sage-700 font-semibold px-8 py-4 rounded-full text-lg border border-sage-200 transition-all duration-300 hover:shadow-md"
            >
              Se hvordan det virker
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start mt-12"
          >
            {[
              { icon: '🏥', label: 'Fysioterapi-uddannet' },
              { icon: '🏠', label: 'I dit eget hjem' },
              { icon: '✨', label: 'Gratis første konsultation' },
              { icon: '📍', label: 'København & omegn' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm text-sage-700">
                <span className="text-base">{badge.icon}</span>
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Main circular image placeholder */}
          <div className="relative w-[420px] h-[420px]">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-sage-200"
            />

            {/* Main blob */}
            <div className="absolute inset-8 blob-1 bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center overflow-hidden">
              {/* Illustrated scene placeholder */}
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-sage-400/30 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" className="text-sage-700">
                    {/* Simple person silhouette */}
                    <circle cx="32" cy="14" r="8" fill="currentColor" fillOpacity="0.6"/>
                    <path d="M18 42c0-7.7 6.3-14 14-14s14 6.3 14 14v8H18v-8z" fill="currentColor" fillOpacity="0.5"/>
                    <path d="M22 42l-6 10M42 42l6 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M26 36l-8 8M38 36l8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-sage-700 font-semibold text-sm">Personlig træner</p>
                <p className="text-sage-700 text-xs mt-1">I dit hjem</p>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-sage-100"
            >
              <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sm">💪</div>
              <div>
                <p className="text-xs font-semibold text-sage-900">Styrke & balance</p>
                <p className="text-xs text-sage-500">Tilpasset program</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-6 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-sage-100"
            >
              <div className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-sm">🛡️</div>
              <div>
                <p className="text-xs font-semibold text-sage-900">Faldforebyggelse</p>
                <p className="text-xs text-sage-500">Evidensbaseret</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/2 -right-10 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-sage-100"
            >
              <div className="w-8 h-8 rounded-full bg-earth-100 flex items-center justify-center text-sm">❤️</div>
              <div>
                <p className="text-xs font-semibold text-sage-900">98% tilfredshed</p>
                <p className="text-xs text-sage-500">Hos klienter</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sage-400"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-sage-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-sage-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
