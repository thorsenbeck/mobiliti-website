'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const testimonials = [
  {
    quote: 'Min mor er 78 år og var ved at give op på at klare sig selv. Efter 3 måneder med Mobiliti kan hun nu selv gå på trapper, tage bad og gå ture i nærområdet. Det er intet mindre end et mirakel. Hun stråler igen.',
    name: 'Sofie Andersen',
    relation: 'Datter til klient, 74 år',
    location: 'København',
    rating: 5,
    highlight: 'Hun stråler igen',
    initials: 'SA',
    color: 'bg-sage-200',
  },
  {
    quote: 'Vi prøvede to andre løsninger, som begge slog fejl. Min far var skeptisk og ville ikke have fremmede i sit hjem. Men Mobilitis træner var så rolig, respektfuld og sjov at tale med, at far begyndte at glæde sig til besøgene. 6 måneder inde og vi er dybt taknemmelige.',
    name: 'Thomas Nielsen',
    relation: 'Søn til klient, 81 år',
    location: 'Aarhus',
    rating: 5,
    highlight: 'Far begyndte at glæde sig til besøgene',
    initials: 'TN',
    color: 'bg-earth-200',
  },
  {
    quote: 'Jeg boede 300 km fra min mor og bekymrede mig konstant. Nu ringer hun og fortæller om sine fremskridt, og træneren sender mig en kort rapport efter hver session. For første gang i år sover jeg om natten uden at tænke "hvad nu hvis".',
    name: 'Mette Larsen',
    relation: 'Datter til klient, 76 år',
    location: 'Odense',
    rating: 5,
    highlight: 'For første gang sover jeg om natten',
    initials: 'ML',
    color: 'bg-cream-300',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" className="text-amber-400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 blob-1 bg-sage-100/50" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 blob-2 bg-cream-200/60" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #7ea67e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-amber-200">
            <StarRating count={5} />
            Ægte historier fra rigtige familier
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Familier der har fundet{' '}
            <em className="text-sage-500 not-italic">ro i sindet</em>
          </h2>
          <p className="text-lg text-sage-600 leading-relaxed">
            Hør fra voksne børn der stod præcis der, hvor du måske står nu —
            og hvad der skete, da de tog det første skridt.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer bg-white rounded-4xl p-8 border transition-all duration-300 ${
                activeIndex === index
                  ? 'border-sage-300 shadow-2xl shadow-sage-100/60 scale-105'
                  : 'border-sage-100 hover:border-sage-200 hover:shadow-lg hover:shadow-sage-100/40'
              }`}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-7 text-6xl leading-none text-sage-100 font-serif select-none">
                "
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating count={testimonial.rating} />
              </div>

              {/* Highlight badge */}
              <div className="inline-block bg-sage-50 text-sage-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-sage-100">
                "{testimonial.highlight}"
              </div>

              {/* Quote */}
              <p className="text-sage-700 leading-relaxed text-sm mb-6 relative z-10">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-sage-100">
                <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-sage-700 font-bold text-sm flex-shrink-0`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sage-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-sage-500">{testimonial.relation}</p>
                  <p className="text-xs text-sage-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index ? 'w-6 h-2.5 bg-sage-500' : 'w-2.5 h-2.5 bg-sage-200 hover:bg-sage-300'
              }`}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: '500+', label: 'Tilfredse klienter' },
            { value: '4.9/5', label: 'Gennemsnitlig rating' },
            { value: '98%', label: 'Anbefaler os videre' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span
                className="text-2xl font-bold text-sage-600"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {item.value}
              </span>
              <span className="text-sm text-sage-600 mt-0.5">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
