'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Animated Name */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white">Building Scalable</span>
            <br />
            <span className="gradient-text">Systems.</span>
            <br />
            <span className="text-white">Shipping Impactful</span>
            <br />
            <span className="gradient-text">Products.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Product-focused software engineer blending backend architecture, AI integration, and data-driven product strategy. Currently shipping SaaS platforms at Sanghamitra.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 group"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://blobs.vusercontent.net/blob/Resume-RahATy4XEsieTN6vDWFflE5NJ0e9Ff.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
          <Link
            href="#contact"
            className="px-8 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto mt-16"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">66%</div>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">API Latency ↓</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">28%</div>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">User Adoption ↑</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">99.9%</div>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">Uptime</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
