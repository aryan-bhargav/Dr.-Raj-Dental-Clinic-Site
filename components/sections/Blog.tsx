'use client'

import { useEffect, useRef, useState } from 'react'

const blogPosts = [
  {
    id: 1,
    category: 'Preventive Care',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&q=80',
    author: 'Sarah Johnson',
    authorPhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
    readTime: '10 Min read',
    date: 'March 12, 2026',
    title: 'The Importance of Routine Health Checkups',
  },
  {
    id: 2,
    category: 'General Health',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    author: 'Nataly Birch',
    authorPhoto: 'https://randomuser.me/api/portraits/women/65.jpg',
    readTime: '10 Min read',
    date: 'March 12, 2026',
    title: "Important signs that indicate it's time to visit a doctor",
  },
  {
    id: 3,
    category: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b3f6361?w=600&q=80',
    author: 'Cody Fisher',
    authorPhoto: 'https://randomuser.me/api/portraits/men/22.jpg',
    readTime: '6 Min read',
    date: 'March 12, 2026',
    title: 'Essential Child Healthcare Tips for Parents',
  },
]

export default function Blog() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" ref={ref} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div>
            <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase block mb-3">Our Insights</span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Advanced Medical Care Ensures<br />
              <span className="text-gray-400">Precision Comfort And Long</span><br />
              Lasting Healthy Lives.
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-3 flex-shrink-0 self-start sm:self-auto"
          >
            <div className="w-14 h-14 rounded-full bg-[#2BBCD4] flex items-center justify-center text-white group-hover:bg-[#1A94AA] transition-colors shadow-lg shadow-[#2BBCD4]/30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-900 [writing-mode:vertical-rl] rotate-180">Read More Blog</span>
          </a>
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Author + date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                      <img src={post.authorPhoto} alt={post.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.readTime}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">· {post.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#2BBCD4] transition-colors">
                  {post.title}
                </h3>

                {/* Read more */}
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#2BBCD4] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}