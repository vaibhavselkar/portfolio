'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageSquare, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'vaibhavselkar.tech@gmail.com',
      href: 'mailto:vaibhavselkar.tech@gmail.com',
      color: 'from-red-500 to-pink-500',
      delay: 0,
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vaibhav-selkar',
      href: 'https://linkedin.com/in/vaibhav-selkar',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1,
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/vaibhavselkar',
      href: 'https://github.com/vaibhavselkar',
      color: 'from-slate-600 to-slate-400',
      delay: 0.2,
    },
    {
      icon: <MessageSquare size={24} />,
      label: 'Schedule Call',
      value: 'Let\'s discuss your project',
      href: '#',
      color: 'from-purple-500 to-pink-500',
      delay: 0.3,
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/30 to-slate-950 border-t border-purple-500/10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let's Build Something Impactful</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Open to discussing projects, collaborations, or just sharing ideas. Reach out through any channel below.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: method.delay }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${method.color} bg-clip-padding text-white mb-4 group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{method.label}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors break-all text-sm">
                {method.value}
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-pink-400 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                Connect
                <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="mailto:vaibhavselkar.tech@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-purple-500/10">
          {/* Footer Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
              <span>Based in Wardha, India</span>
              <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
            </div>
            <p className="text-gray-500 text-sm">
              Building the future, one system at a time. Always learning. Always shipping.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href="https://github.com/vaibhavselkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vaibhav-selkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vaibhavselkar.tech@gmail.com"
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
