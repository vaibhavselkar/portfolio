'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink, MapPin, Phone, Globe, Calendar } from 'lucide-react'
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
      icon: <Globe size={24} />,
      label: 'Portfolio',
      value: 'vaibhavselkar.info',
      href: 'https://vaibhavselkar.info',
      color: 'from-purple-500 to-pink-500',
      delay: 0.3,
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9552027990',
      href: 'tel:+919552027990',
      color: 'from-green-500 to-emerald-500',
      delay: 0.4,
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Wardha, India',
      href: '#',
      color: 'from-orange-500 to-red-500',
      delay: 0.5,
    },
  ]

  const quickLinks = [
    {
      title: 'Sanghamitra EdTech',
      description: 'AI-driven learning platform for Indian classrooms',
      href: 'https://sanghamitra.com',
      icon: <ExternalLink size={16} />
    },
    {
      title: 'DeskExam',
      description: 'Academic document platform for students and teachers',
      href: 'https://deskexam.com',
      icon: <ExternalLink size={16} />
    },
    {
      title: 'Resume',
      description: 'Download my professional resume',
      href: 'mailto:vaibhavselkar.tech@gmail.com',
      icon: <ExternalLink size={16} />
    }
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/30 to-slate-950 border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let's Build Something Impactful</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing product design work or partnership opportunities. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
              className="glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${method.color} bg-clip-padding text-white mb-4 group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{method.label}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors break-all text-sm">
                {method.value}
              </p>
              {method.href !== '#' && (
                <div className="flex items-center text-purple-400 group-hover:text-pink-400 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  Connect
                  <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{link.title}</h4>
                    <p className="text-sm text-gray-400">{link.description}</p>
                  </div>
                  <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                    {link.icon}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to build something great?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I specialize in building scalable SaaS platforms, AI-integrated products, and full-stack solutions 
              that solve real business problems. Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:vaibhavselkar.tech@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/vaibhav-selkar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/10 transition-all text-lg"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-purple-500/10">
          {/* Footer Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
                <span>Based in Wardha, India</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="flex items-center gap-2">
                <span>Open to remote opportunities</span>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Product Engineer & Co-Founder with expertise in AI integration, full-stack development, 
              and building scalable systems that drive business growth.
            </p>
            <div className="flex items-center justify-center gap-6 pt-4">
              <a
                href="https://github.com/vaibhavselkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-purple-500/10"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/vaibhav-selkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-purple-500/10"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:vaibhavselkar.tech@gmail.com"
                className="text-gray-400 hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-purple-500/10"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
