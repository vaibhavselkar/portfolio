'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface MetricProps {
  value: string | number
  label: string
  suffix?: string
  delay: number
}

function AnimatedMetric({ value, label, suffix = '', delay }: MetricProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof value === 'string') {
        setDisplayValue(parseInt(value) || 0)
      } else {
        setDisplayValue(value)
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="glass p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group cursor-default"
    >
      <div className="text-5xl sm:text-6xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
        {displayValue}
        {suffix}
      </div>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  )
}

export default function Metrics() {
  const metrics = [
    { value: 66, label: 'API Latency Reduction', suffix: '%', delay: 0 },
    { value: 28, label: 'User Adoption Increase', suffix: '%', delay: 0.1 },
    { value: 99.9, label: 'System Uptime', suffix: '%', delay: 0.2 },
    { value: 85, label: 'Test Coverage', suffix: '%', delay: 0.3 },
    { value: 60, label: 'Production Defect Reduction', suffix: '%', delay: 0.4 },
    { value: 45, label: 'Faster Release Cycles', suffix: '%', delay: 0.5 },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-purple-500/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Impact Metrics</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Data-driven improvements that moved the needle on what matters most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <AnimatedMetric
              key={index}
              value={metric.value}
              label={metric.label}
              suffix={metric.suffix}
              delay={metric.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
