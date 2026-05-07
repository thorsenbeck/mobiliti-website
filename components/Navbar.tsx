'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Om os', href: '/#about' },
    { label: 'Sådan virker det', href: '/#how-it-works' },
    { label: 'Priser', href: '/#pricing' },
    { label: 'Projekt', href: '/projekt' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-sage-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <Image
              src="/mobiliti_logo.png"
              alt="Mobiliti"
              width={320}
              height={110}
              className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sage-700 hover:text-sage-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-sage-200 hover:-translate-y-0.5"
            >
              Book gratis konsultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-sage-700 hover:bg-sage-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream-50/98 backdrop-blur-md border-t border-sage-100"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-sage-700 py-2 hover:text-sage-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-sage-500 hover:bg-sage-600 text-white font-semibold px-5 py-3 rounded-full transition-all duration-300"
              >
                Book gratis konsultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
