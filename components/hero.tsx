'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Code, Rocket, Brain } from 'lucide-react'
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
        className="max-w-5xl mx-auto text-center"
      >
        {/* Animated Name */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-slate-900">Vaibhav</span>
            <br />
            <span className="gradient-text">Selkar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 mb-4">Product Engineer & Co-Founder</p>
          <p className="text-sm text-slate-500 mb-8">Building systems that run businesses | AI Integration Expert | Full-Stack Developer</p>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          I build products that solve real problems. From EdTech platforms serving classrooms across India to AI-powered exam generators and supply chain solutions, I've built 6 products across 6 different industries. My approach: identify the problem, design the solution, and ship it fast.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="#about"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-400/40 transition-all flex items-center gap-2 group"
          >
            View My Story
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:vaibhavselkar.tech@gmail.com"
            className="px-8 py-3 border border-purple-400 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all flex items-center gap-2"
          >
            <Download size={20} />
            Contact Me
          </a>
          <Link
            href="#products"
            className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            See Products
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-16"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">6</div>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">Products Built</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">66%</div>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">API Latency ↓</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">28%</div>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">Signups ↑</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">99.9%</div>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">Uptime</p>
          </div>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 mt-12 text-slate-500"
        >
          <div className="flex items-center gap-2">
            <Code size={20} />
            <span className="text-sm">React/Node.js</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain size={20} />
            <span className="text-sm">AI/ML</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket size={20} />
            <span className="text-sm">Product</span>
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
