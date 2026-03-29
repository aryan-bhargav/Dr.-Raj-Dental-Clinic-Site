'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image';
import team2 from '../../assets/team2.png';
import testimonialLogo from "../../assets/testimonial.jpg"
const testimonials = [
  {
    quote: "We deliver personalized dental treatments modern technology and gentle care ensuring healthy confident smiles for every patient.",
    name: 'Savannah Nguyen',
    role: 'Medical Assistant',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  },
  {
    quote: "The team at Dr. Raj Dental Clinic made me feel so comfortable. My smile has never looked better and the care was exceptional!",
    name: 'Amit sharma',
    role: 'Happy Patient',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
]

const diagnosticsData = [
  { label: 'May', value: 90, color: '#2BBCD4' },
  { label: 'Apr', value: 65, color: '#7AD8E8' },
  { label: 'Mar', value: 80, color: '#2BBCD4' },
]

export default function WhyChoose() {
  const [visible, setVisible] = useState(false)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const t = testimonials[testimonialIdx]

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden" id="testimonial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Why Choose<br />
            <span className="text-[#2BBCD4]">Precision Dental?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className={`flex flex-col gap-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Diagnostics card */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-3xl font-bold text-gray-900 mb-1">98%</p>
              <p className="text-xs text-gray-500 mb-5">Reliable Oral Health Diagnostics</p>
              <div className="space-y-3">
                {diagnosticsData.map((d, i) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <div className="flex-1 h-8 bg-gray-200 rounded-lg overflow-hidden">
                      <div
                        className="h-full rounded-lg transition-all duration-1000"
                        style={{
                          width: visible ? `${d.value}%` : '0%',
                          backgroundColor: d.color,
                          transitionDelay: `${i * 200 + 400}ms`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient image */}
            <div className="relative rounded-2xl overflow-hidden h-48 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
                alt="Happy dental patient"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Rewards card */}
            <div className="bg-[#2BBCD4] rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full bg-white/30 border-2 border-white overflow-hidden">
                      <img
                        src={`https://randomuser.me/api/portraits/thumb/${i % 2 === 0 ? 'women' : 'men'}/${i * 10}.jpg`}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = '' }}
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold">3.5K+ join the smiles</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <span className="text-xs font-semibold">Rewards</span>
              </div>
              <p className="text-sm leading-relaxed text-white/90">
                Maintain your preventive care streak and earn exclusive whitening and cosmetic rewards.
              </p>
            </div>
          </div>

          {/* Center: Scrollable dental image */}
          <div className={`relative rounded-2xl overflow-hidden min-h-[500px] bg-gray-200 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&q=80"
              alt="Dental care"
              className="w-full h-full object-cover"
            />
            {/* Navigation */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-[#2BBCD4] flex items-center justify-center text-white hover:bg-[#1A94AA] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              </button>
              <button
                onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              </button>
            </div>

            {/* Incomplete oral card */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-sm font-medium">Complete Oral Care Solutions</p>
            </div>
          </div>

          {/* Right: Testimonials */}
          <div className={`flex flex-col gap-6 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Avatar nav */}
            <div className="flex items-start justify-between">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gray-200 shadow-md">
                <Image
                  src={testimonialLogo}
                  alt={t.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-[#2BBCD4] flex items-center justify-center text-white hover:bg-[#1A94AA] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                </button>
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                </button>
              </div>
            </div>

            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Testimonial</span>
            </div>

            {/* Quote */}
            <blockquote className="relative">
              <span className="text-6xl text-[#2BBCD4]/20 font-serif leading-none block mb-2">"</span>
              <p
                key={testimonialIdx}
                className="text-gray-700 leading-relaxed transition-all duration-500"
              >
                <span className="font-semibold text-gray-900">We deliver personalized dental treatments </span>
                <span className="text-[#2BBCD4] font-semibold">modern </span>
                {t.quote.replace('We deliver personalized dental treatments modern technology and gentle care ensuring healthy confident smiles for every patient.', 'technology and gentle care ensuring healthy confident smiles for every patient.')}
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-4">
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>

            {/* Year / Happy patients */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Happy Patients</p>
                  <p className="text-sm font-semibold text-gray-700">2,000+ served</p>
                </div>
                <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                  <Image
                    src={team2}
                    alt="Happy patient"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
