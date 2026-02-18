'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Users, Zap, Database } from 'lucide-react'

interface Project {
  title: string
  description: string
  highlights: string[]
  icon: React.ReactNode
  tags: string[]
  delay: number
}

const projects: Project[] = [
  {
    title: 'Ed-Tech Platform',
    description: 'Multi-tenant learning system serving teachers and students with real-time analytics and insights.',
    highlights: [
      '70% feature adoption increase',
      '10+ classrooms supported',
      '99.9% uptime maintained',
      'Admin dashboards with KPIs',
    ],
    icon: <Users className="w-6 h-6" />,
    tags: ['Node.js', 'React', 'MongoDB', 'JWT Auth'],
    delay: 0,
  },
  {
    title: 'Billing Application',
    description: 'Retail billing system with printer integration and intelligent inventory management for multi-tenant operations.',
    highlights: [
      '35% checkout time reduction',
      '40% fewer billing errors',
      '500+ invoices/day',
      'Real-time inventory sync',
    ],
    icon: <Database className="w-6 h-6" />,
    tags: ['Express', 'PostgreSQL', 'Redis Cache', 'Printer API'],
    delay: 0.1,
  },
  {
    title: 'Expense Tracking App',
    description: 'Internal finance system for budget compliance, category-wise reporting, and audit trails.',
    highlights: [
      '30% faster audits',
      '20% overspending reduction',
      'Budget compliance tracking',
      'Multi-department support',
    ],
    icon: <Zap className="w-6 h-6" />,
    tags: ['Node.js', 'React', 'Analytics', 'Reports'],
    delay: 0.2,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center mb-6 text-purple-300 group-hover:text-pink-300 transition-colors">
                {project.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{project.description}</p>

              {/* Highlights */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-purple-400 font-bold mt-0.5">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 group-hover:bg-purple-500/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center text-purple-400 group-hover:text-pink-400 transition-colors font-medium text-sm">
                Learn more
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
