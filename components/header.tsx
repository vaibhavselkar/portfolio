'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.jpg"
            alt="Vaibhav Selkar"
            width={48}
            height={48}
            className="rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          />
          <div>
            <div className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Vaibhav Selkar</div>
            <div className="text-xs text-gray-400">Product Engineer & Co-Founder</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-purple-300 transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/vaibhav-selkar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vaibhavselkar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-purple-300 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-purple-500/20 md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-purple-300 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-purple-500/20">
                <a
                  href="https://linkedin.com/in/vaibhav-selkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/vaibhavselkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
