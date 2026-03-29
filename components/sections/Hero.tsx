'use client'

import { useEffect, useRef, useState } from 'react'

const serviceTags = ['Dental Checkup', 'Teeth Cleaning', 'Tooth Filling', 'Gum Treatment', 'Retainers']

const PHONE_NUMBER = '9953070999'
const WHATSAPP_NUMBER = '919953070999'
const WHATSAPP_MESSAGE = 'Hello! I would like to book a dental appointment at Dentora Clinic.'

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
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80')`,
            opacity: 0.45,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16 min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div
                className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.1s' }}
              >
                <span className="text-xs text-white/60 font-medium tracking-widest uppercase">Your Teeth Our Science</span>
              </div>

              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.2s' }}
              >
                Family-Friendly<br />
                <span className="text-[#2BBCD4]">Dental Care</span>
              </h1>

              <p
                className={`text-white/70 text-base sm:text-lg max-w-md mb-10 leading-relaxed transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.3s' }}
              >
                Permanent natural-looking solutions to replace missing teeth and restore confident healthy smiles.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap items-center gap-4 mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.4s' }}
              >
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

              {/* Video Card */}
              <div
                className={`inline-flex items-start gap-4 rounded-2xl p-4 max-w-xs transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: '0.5s',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-700">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=200&q=80"
                    alt="Dental procedure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-7 h-7 rounded-full bg-[#2BBCD4] flex items-center justify-center">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                        <path d="M0 0l10 6-10 6V0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Restore natural healthy confident dental growth.</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-xs text-gray-600 font-medium">4.9 [Rating]</span>
                    <span className="ml-1 text-gray-400">↗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Service Pills */}
            <div className="hidden lg:flex flex-col items-end gap-3">
              <div className="flex items-center gap-3 mb-6 text-white/50 text-sm">
                <span>Preview</span>
                <span className="text-white font-medium">01 / 08</span>
                <button className="text-white/70 hover:text-white transition-colors">Next</button>
                <div className="ml-4 text-right text-xs text-white/40 uppercase tracking-wider">Scroll for More</div>
              </div>
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── BOOKING MODAL ─────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            style={{ animation: 'modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
          >
            {/* Top teal banner */}
            <div className="bg-[#2BBCD4] px-6 pt-8 pb-10 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/10" />

              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Clinic identity */}
              <div className="relative z-10 flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                  <span className="text-[#2BBCD4] font-black text-xl">D</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Dr. Raj Dental Clinic</p>
                  <p className="text-white/80 text-xs">Family-Friendly Dental Care</p>
                </div>
              </div>

              {/* Rating + patients */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1">
                  <span className="text-yellow-300 text-sm">★</span>
                  <span className="text-white text-sm font-semibold">4.9</span>
                  <span className="text-white/70 text-xs">(45+ reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1">
                  <span className="text-white text-xs font-medium">✓ 2k+ Patients</span>
                </div>
              </div>
            </div>

            {/* White body */}
            <div className="px-6 pb-6 -mt-4">
              {/* Floating info card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-5">
                <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">Clinic Info</p>
                <div className="space-y-2.5">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#2BBCD4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2BBCD4" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Address</p>
                      <p className="text-sm font-medium text-gray-800">Sector - 91, Opposite Government school, Sehatpur, Haryana, Faridabad</p>
                    </div>
                  </div>
                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#2BBCD4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2BBCD4" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Working Hours</p>
                      <p className="text-sm font-medium text-gray-800">Mon – Sat: 9:00 AM – 7:00 PM</p>
                      <p className="text-xs text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#2BBCD4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2BBCD4" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="text-sm font-medium text-gray-800">{PHONE_NUMBER}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section title */}
              <p className="text-sm font-semibold text-gray-500 mb-3 text-center">Choose how to reach us</p>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl transition-all duration-300 shadow-md hover:shadow-[#25D366]/40 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">Chat on WhatsApp</p>
                    <p className="text-white/80 text-xs">+91 {PHONE_NUMBER} · Usually replies in minutes</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-60 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Call */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="group flex items-center gap-4 px-5 py-4 bg-[#2BBCD4] hover:bg-[#1A94AA] text-white rounded-2xl transition-all duration-300 shadow-md hover:shadow-[#2BBCD4]/40 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">Call Us Directly</p>
                    <p className="text-white/80 text-xs">+91 {PHONE_NUMBER} · Mon–Sat, 9AM–7PM</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-60 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:raj8nov@yahoo.com"
                  className="group flex items-center gap-4 px-5 py-4 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">Send an Email</p>
                    <p className="text-gray-400 text-xs">raj8nov@yahoo.com</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-30 group-hover:opacity-60 group-hover:translate-x-1 transition-all">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Footer note */}
              <p className="text-center text-xs text-gray-400 mt-4">
                We typically respond within a few minutes during working hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal animation keyframe */}
      <style jsx global>{`
        @keyframes modalIn {
          0% { opacity: 0; transform: scale(0.85) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  )
}
