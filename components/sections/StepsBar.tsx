'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  { label: 'Initial Consultation', value: 85 },
  { label: 'Care Planning', value: 70 },
  { label: 'Treatment Process', value: 90 },
  { label: 'Follow-up Care', value: 60 },
]

export default function StepsBar() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-white border-b border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col gap-3">
              <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">{step.label}</span>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2BBCD4] rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${step.value}%` : '0%',
                    transitionDelay: `${i * 0.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}