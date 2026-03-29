'use client'

import { useEffect, useRef, useState } from 'react'

const teamPhotos = [
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
]

const sentence =
  'We deliver personalized dental treatments with modern technology and gentle care ensuring healthy confident smiles for every patient.'

const words = sentence.split(' ')

// Words to highlight in teal
const tealWords = ['modern', 'technology']

export default function About() {
  const [visibleStats, setVisibleStats] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Stats reveal
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true)
          statsObserver.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (statsRef.current) statsObserver.observe(statsRef.current)

    // Scroll-based word reveal
    const handleScroll = () => {
      if (!textRef.current) return
      const rect = textRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Start revealing when top of element hits 80% of viewport
      // Fully revealed when top hits 60% of viewport
      const start = windowHeight * 0.85
      const end = windowHeight * 0.6

      const progress = Math.min(
        Math.max((start - rect.top) / (start - end), 0),
        1
      )
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
      statsObserver.disconnect()
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Animated Text */}
          <div>
            <span className="inline-block text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">
              About Us
            </span>

            <p
              ref={textRef}
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.25] tracking-tight"
              aria-label={sentence}
            >
              {words.map((word, i) => {
                const wordThreshold = i / words.length
                const revealed = scrollProgress >= wordThreshold
                const isTeal = tealWords.includes(word.replace(/[^a-zA-Z]/g, ''))

                return (
                  <span
                    key={i}
                    className="inline-block mr-[0.3em] transition-all duration-500"
                    style={{
                      color: revealed
                        ? isTeal
                          ? '#2BBCD4'
                          : '#1a1a1a'
                        : '#d1d5db',
                      transform: revealed ? 'translateY(0)' : 'translateY(6px)',
                      transitionDelay: `${i * 20}ms`,
                    }}
                  >
                    {word}
                  </span>
                )
              })}
            </p>

            {/* Team avatars */}
            <div className="flex items-center gap-3 mt-10">
              <div className="flex -space-x-3">
                {teamPhotos.map((src, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-xl border-2 border-white overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-200"
                    style={{ zIndex: i }}
                  >
                    <img src={src} alt="Team member" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="ml-2">
                <p className="text-sm font-semibold text-gray-900">Our Expert Team</p>
                <p className="text-xs text-gray-500">Dedicated to your smile</p>
              </div>
            </div>
          </div>

          {/* Right — Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '98%', label: 'Satisfaction Rate', delay: 0 },
              { number: '2k+', label: 'Smiles Transformed', delay: 100 },
              { number: '4.9★', label: 'Customer Rating', delay: 200 },
              { number: '40', label: 'Mins Avg Treatment', delay: 300 },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`bg-gray-50 rounded-2xl p-6 hover:bg-[#2BBCD4] group transition-all duration-500 hover:shadow-lg hover:shadow-[#2BBCD4]/20 cursor-default ${
                  visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <p className="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors mb-1">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
