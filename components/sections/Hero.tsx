'use client'

import { useEffect, useRef, useState } from 'react'

const serviceTags = ['General Checkup', 'Emergency Care', 'Diagnostics', 'Pharmacy', 'Specialist Care']

const PHONE_NUMBER = '9953070999'
const WHATSAPP_NUMBER = '919953070999'
const WHATSAPP_MESSAGE = 'Hello! I would like to book an appointment at Mukta Medicare.'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [activeTag, setActiveTag] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false)
    }
    if (showModal) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [showModal])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <>
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80')`,
            opacity: 0.45,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16 min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
                <span className="text-xs text-white/60 font-medium tracking-widest uppercase">Your Health Our Priority</span>
              </div>

              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
                Family-Friendly<br />
                <span className="text-[#2BBCD4]">Healthcare</span>
              </h1>

              <p className={`text-white/70 text-base sm:text-lg max-w-md mb-10 leading-relaxed transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
                The care you need. The compassion you deserve
              </p>

              <div className={`flex flex-wrap items-center gap-4 mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
                <button
                  onClick={() => setShowModal(true)}
                  className="group flex items-center gap-3 px-6 py-3.5 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-[#2BBCD4] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#2BBCD4]/40 hover:shadow-xl"
                >
                  Book an Appointment
                  <span className="w-7 h-7 rounded-full bg-[#2BBCD4] group-hover:bg-white flex items-center justify-center text-white group-hover:text-[#2BBCD4] transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>

              <div className={`inline-flex items-start gap-4 rounded-2xl p-4 max-w-xs transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.3)' }}>
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-700">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=200&q=80"
                    alt="Healthcare"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Providing complete care for your family's health and well-being.</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-xs text-gray-600 font-medium">4.9 [Rating]</span>
                    <span className="ml-1 text-gray-400">↗</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-3">
              <div className="flex flex-col gap-2.5">
                {serviceTags.map((tag, i) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(i)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTag === i
                        ? 'bg-white text-gray-900 shadow-lg scale-105'
                        : 'bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm'
                    } ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }} onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

            <div className="bg-[#2BBCD4] px-6 pt-8 pb-10 relative overflow-hidden">

              <div className="relative z-10 flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                  <span className="text-[#2BBCD4] font-black text-xl">M</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Mukta Medicare</p>
                  <p className="text-white/80 text-xs">Mukta Medicare – Family-Friendly Hospital</p>
                </div>
              </div>

            </div>

            <div className="px-6 pb-6">
              <p className="text-sm font-semibold text-gray-500 mb-3 text-center">Choose how to reach us</p>

              <div className="flex flex-col gap-3">
                <a href={whatsappUrl} target="_blank" className="px-5 py-4 bg-[#25D366] text-white rounded-2xl">WhatsApp</a>
                <a href={`tel:${PHONE_NUMBER}`} className="px-5 py-4 bg-[#2BBCD4] text-white rounded-2xl">Call</a>
                <a href="mailto:contact@muktamedicare.com" className="px-5 py-4 bg-gray-100 rounded-2xl">Email</a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}