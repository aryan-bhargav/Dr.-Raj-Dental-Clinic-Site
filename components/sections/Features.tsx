'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image';
import team2 from '../../assets/team2.png';

export default function Features() {

  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          const timer = setTimeout(() => setProgress(60), 500)
          observer.disconnect()
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section tag */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase block mb-3">Feature Treatment</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 max-w-md leading-tight">
            Advanced Dental Care for a Healthier Smile
          </h2>
          <p className="text-gray-500 mt-4 max-w-md text-sm leading-relaxed">
            Join hundreds of patients achieving healthier, brighter smiles through expert dental care and personalized treatments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Clinic image + stats card */}
          <div className={`flex flex-col gap-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Patient image */}
            <div className="relative rounded-2xl overflow-hidden h-48 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1728342057953-94bfad8f0e7e"
                alt="Patient at dentist"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-400 tracking-wider uppercase mb-4">Thousands Trust Us for Smiles!</p>
              <div className="space-y-3">
                <div>
                  <span className="text-3xl font-bold text-gray-900">98%</span>
                  <span className="text-sm text-gray-500 ml-2">Satisfaction Rate</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-900">2k+</span>
                  <span className="text-sm text-gray-500 ml-2">Smiles Transformed</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-900">4.9★</span>
                  <span className="text-sm text-gray-500 ml-2">Customer Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Large clinic image with overlay card */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
                alt="Dental clinic"
                className="w-full h-full object-cover"
              />
              {/* Overlay stats card */}
              <div className="absolute bottom-4 right-4 bg-white rounded-2xl p-4 shadow-lg min-w-[180px]">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Average Treatment Time</p>
                    <p className="text-2xl font-bold text-gray-900">40 <span className="text-sm font-normal">Mins</span></p>
                  </div>
                  <div className="text-xs text-[#2BBCD4] font-semibold">60%</div>
                </div>
                {/* Mini progress bars */}
                <div className="space-y-1.5">
                  {[60, 40, 75, 50, 85, 45, 65].map((w, i) => (
                    <div key={i} className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2BBCD4] rounded-full transition-all duration-1000"
                        style={{ width: visible ? `${w}%` : '0%', transitionDelay: `${i * 100 + 500}ms` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400">Recommended Checkups</p>
                  <p className="text-lg font-bold text-gray-900">2 <span className="text-sm font-normal">Visits/Year</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Doctor card + appointment */}
          <div className={`flex flex-col gap-6 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Doctor info */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Dr. Daniel Carter</h3>
                  <p className="text-sm text-gray-500">Lead Dental Specialist</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-semibold text-gray-700">4.9</span>
                    <span className="text-xs text-gray-400">(45+ reviews)</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-4 py-2 bg-[#2BBCD4] text-white rounded-full text-xs font-semibold hover:bg-[#1A94AA] transition-colors"
                >
                  Book
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Join hundreds of patients achieving healthier, brighter smiles through expert dental care and personalized treatments.
              </p>
            </div>

            {/* Doctor image - video call style */}
            <div className="relative rounded-2xl overflow-hidden h-64 bg-blue-50">
              <Image
                src={team2}
                alt="Dr. Raj Dental Clinic"
                width={480}
                height={480}
                className="w-full h-full object-cover object-top"
              />
              {/* Video call controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg hover:bg-red-600 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-700 shadow-lg hover:bg-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="13" height="10" rx="2" /><path d="M22 7l-7 5 7 5V7z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-700 shadow-lg hover:bg-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
