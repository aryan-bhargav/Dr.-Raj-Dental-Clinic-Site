'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/logoT.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'Hospital Tour', href: '#clinictour' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Enquiry', href: '#enquiry' }
]

const servicesDropdown = [
  'General Medicine',
  'Pediatrics / Child Care',
  'Orthopedics',
  'Gynecology & Obstetrics',
  'Cardiology',
  'Dermatology',
  'ENT Specialist',
  'Physiotherapy',
  'Health Checkup Packages',
]

// 👇 Replace with your actual WhatsApp number (with country code, no + or spaces)
const WHATSAPP_NUMBER = '919953070999'
const WHATSAPP_MESSAGE = 'Hello! I would like to book a medical appointment at Mukta Medicare.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [openDropdown, setOpenDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3'
        : 'bg-transparent/10 py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src={Logo} alt="Mukta Medicare" width={150} height={50} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const baseClass = `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeLink === link.label
              ? 'bg-white text-gray-900 shadow-sm'
              : scrolled
                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                : 'text-white/80 hover:text-white hover:bg-white/10'
              }`

            if (link.label === 'Services') {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  {/* SAME pill style */}
                  <button
                    className={baseClass}
                    onClick={() => setActiveLink(link.label)}
                  >
                    {link.label} ▾
                  </button>

                  {/* Dropdown */}
                  {openDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-sm overflow-hidden">
                      {servicesDropdown.map((item, index) => (
                        <a
                          key={index}
                          href="#services"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            // 👇 ALL other links untouched
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={baseClass}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-medium text-sm hover:bg-[#1ebe5d] transition-all duration-300 shadow-sm hover:shadow-[#25D366]/40 hover:shadow-md group"
          >
            {/* WhatsApp SVG Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Book a Call Button */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-medium text-sm hover:bg-[#2BBCD4] hover:text-white transition-all duration-300 shadow-sm"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 
  ${menuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    className="px-4 py-3 text-left w-full text-sm font-medium text-gray-700"
                  >
                    Services ▾
                  </button>

                  {openDropdown && (
                    <div className="pl-4">
                      {servicesDropdown.map((item, index) => (
                        <a
                          key={index}
                          href="#services"
                          className="block px-4 py-2 text-sm text-gray-600"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label)
                  setMenuOpen(false)
                }}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700"
              >
                {link.label}
              </a>
            )
          })}

          {/* Mobile WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-medium text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>

          {/* Mobile Book a Call */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center px-4 py-3 rounded-xl bg-[#2BBCD4] text-white font-medium text-sm"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  )
}