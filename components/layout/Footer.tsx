import Link from 'next/link'

const footerLinks = {
  company: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Dentist', href: '#' },
  ],
  resources: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Blog', href: '#blog' },
    { label: 'Faq', href: '#' },
    { label: '404 Error', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms and Conditions', href: '#' },
    { label: 'License', href: '#' },
    { label: 'Instruction', href: '#' },
  ],
}

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.95 29 29 0 00.46-5.25 29 29 0 00-.46-5.48z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 relative overflow-hidden">
      {/* Big watermark logo */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden h-40 opacity-5">
        <span className="text-[12rem] font-black text-gray-900 leading-none">dentora</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Contact column */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
              WED LOVE TO HELP YOU WITH EASE
            </p>
            <a
              href="mailto:hellodentora@gmail.com"
              className="text-xl font-bold text-gray-900 underline underline-offset-4 hover:text-[#2BBCD4] transition-colors block mb-6"
            >
              raj8nov@yahoo.com
            </a>
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">Follow Us</p>
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#2BBCD4] hover:text-white hover:border-[#2BBCD4] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-600 hover:text-[#2BBCD4] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">Resources</p>
            <ul className="space-y-3">
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-600 hover:text-[#2BBCD4] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">Legal</p>
            <ul className="space-y-3">
              {footerLinks.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-600 hover:text-[#2BBCD4] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>©2026 All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
