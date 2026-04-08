'use client'

import { useEffect, useRef, useState } from 'react'
import logopath from "../../assets/logo-mukta-medicare.jpg"
const serviceTags = ['General Checkup', 'Emergency Care', 'Diagnostics', 'Pharmacy', 'Specialist Care']

// Updated with Mukta Medicare specifics
const PHONE_NUMBER = '+918851662423'
const WHATSAPP_NUMBER = '918851662423'
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

      {/* Appointment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }} onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">

            {/* Modal Header */}
            <div className="bg-[#2BBCD4] px-6 pt-8 pb-8 relative overflow-hidden">
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
                  <img src={logopath.src} alt="" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Mukta Medicare</p>
                  <p className="text-white/80 text-xs">Family-Friendly Hospital</p>
                </div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6">
              
              {/* Hospital Info Box */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                <div className="flex gap-3 mb-3">
                  <div className="text-[#2BBCD4] mt-0.5 flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="n21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    P-64, opp. Keshav Vatika Park, Sector-91, Surya Nagar, Part 2, Sector 91, Faridabad, Haryana 121013
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-[#2BBCD4] mt-0.5 flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    Tue – Sun: 10 AM – 2 PM & 5 – 8:30 PM
                  </p>
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-500 mb-4 text-center uppercase tracking-wider">Choose how to reach us</p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-white rounded-xl hover:bg-[#20bd5a] transition-colors font-medium shadow-sm hover:shadow-md"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                
                <a 
                  href={`tel:${PHONE_NUMBER}`} 
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#2BBCD4] text-white rounded-xl hover:bg-[#1da5bc] transition-colors font-medium shadow-sm hover:shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call +91 8851662423
                </a>
                
                <a 
                  href="mailto:mukta@medicare.com" 
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  mukta@medicare.com
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}