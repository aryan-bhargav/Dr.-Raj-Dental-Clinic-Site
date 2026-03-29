'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - CTA */}
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Smile Matters<br />
              <span className="text-[#2BBCD4]">Connect With Us Today</span>
            </h2>
          </div>

          {/* Right - Newsletter form */}
          <div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Join our newsletter to receive the latest oral health tips, special offers and clinic updates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-3 p-4 bg-[#2BBCD4]/10 rounded-2xl text-[#2BBCD4] font-semibold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2BBCD4] focus:ring-2 focus:ring-[#2BBCD4]/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#2BBCD4] text-white rounded-full text-sm font-semibold hover:bg-[#1A94AA] transition-colors shadow-lg shadow-[#2BBCD4]/30 hover:shadow-[#2BBCD4]/50 hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
