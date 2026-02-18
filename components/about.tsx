'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const highlights = [
    'Led 5-member cross-functional team',
    'Architected multi-tenant SaaS platforms',
    'Integrated AI modules with Flask',
    'Mastered full SDLC ownership',
    'Data-informed product decisions',
    'NotebookLM for structured research',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Engineer. Product Thinker. Builder.</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-xl overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20">
              <Image
                src="/images/team-vaibhav.jpg"
                alt="Vaibhav Selkar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <p className="text-base text-gray-300 leading-relaxed">
              I transitioned from hardware and consumer product development to building scalable SaaS platforms. 
              My journey combines mechanical engineering fundamentals with software architecture—understanding how to 
              take ideas from concept to production at scale.
            </p>

            <p className="text-base text-gray-300 leading-relaxed">
              At Sanghamitra, I own the full software development lifecycle. From gathering product requirements and 
              architecting backend systems to shipping features and driving adoption, I've learned to make data-informed 
              decisions that move the needle on metrics that matter.
            </p>

            <p className="text-base text-gray-300 leading-relaxed">
              My technical toolkit spans Node.js and Express for backend architecture, React for frontend experiences, 
              and Python with Flask for AI integration. I'm obsessed with performance optimization, reliable infrastructure, 
              and building products that users actually love.
            </p>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass p-6 rounded-xl border border-purple-500/20">
              <div className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">Product Development</div>
              <div className="text-xl font-bold text-white mb-2">Hardware to Software</div>
              <p className="text-gray-400 text-sm">3+ years managing hardware product lifecycle at scale, from design validation to manufacturing optimization.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass p-6 rounded-xl border border-purple-500/20">
              <div className="text-sm font-semibold text-pink-400 uppercase tracking-wide mb-2">Engineering</div>
              <div className="text-xl font-bold text-white mb-2">Full-Stack Product Engineer</div>
              <p className="text-gray-400 text-sm">Building production SaaS platforms. Architecting multi-tenant systems, implementing CI/CD pipelines, owning reliability.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass p-6 rounded-xl border border-purple-500/20">
              <div className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">Product Strategy</div>
              <div className="text-xl font-bold text-white mb-2">Data-Driven Decision Making</div>
              <p className="text-gray-400 text-sm">KPI analysis, market validation, UX research, and structured documentation using tools like NotebookLM.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300">{highlight}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
