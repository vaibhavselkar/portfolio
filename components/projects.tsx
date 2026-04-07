'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Users, Rocket, Database, Code, Smartphone, Zap, IndianRupee } from 'lucide-react'

interface Project {
  title: string
  description: string
  highlights: string[]
  icon: ReactNode
  tags: string[]
  status: 'Live' | 'In Development' | 'Built'
  link?: string
  delay: number
}

const projects: Project[] = [
  {
    title: 'Sanghamitra EdTech Platform',
    description: 'AI-driven EdTech platform serving real classrooms across India. Team product where I serve as AI Product Engineer.',
    highlights: [
      '66% API latency reduction (420ms → 140ms)',
      '28% increase in new-user signups',
      '99.9% uptime with autoscaling infrastructure',
      '85% test coverage, 60% fewer production defects',
      '45% faster release cycles with CI/CD automation',
      '70% feature adoption increase',
      '10+ classrooms, 20+ students per session',
      '10+ hours/week teacher workflow efficiency',
    ],
    icon: <Users className="w-6 h-6" />,
    tags: ['React', 'Node.js', 'Python', 'Flask', 'MongoDB', 'PostgreSQL', 'AWS EC2', 'AI/LLM'],
    status: 'Live',
    link: 'https://sanghamitra.com',
    delay: 0,
  },
  {
    title: 'PharmaFlow',
    description: 'Pharmaceutical supply chain management platform connecting pharmacies, distributors, delivery agents, and administrators.',
    highlights: [
      'Multi-stakeholder dashboard system',
      'Real-time order tracking and fulfillment',
      'Salt-based medicine substitute search',
      'Inventory management for distributors',
      'Revenue and analytics monitoring',
    ],
    icon: <Database className="w-6 h-6" />,
    tags: ['Next.js', 'TypeScript', 'React', 'Supabase', 'ShadCN UI', 'Tailwind CSS'],
    status: 'In Development',
    delay: 0.2,
  },
  {
    title: 'DeskExam',
    description: 'AI-powered academic platform combining document processing, a LaTeX editor with live preview, and a RAG-based exam generation system for structured content creation and evaluation workflows.',
    highlights: [
      'RAG pipeline for intelligent exam paper generation',
      'Vector search with ChromaDB over academic documents',
      'LLM-driven feedback and content generation (Gemini API)',
      'LaTeX equation editor with real-time preview',
      'Intelligent document handling and transformation',
      'End-to-end academic workflow from upload to evaluation',
    ],
    icon: <Code className="w-6 h-6" />,
    tags: ['Node.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'ChromaDB', 'Gemini API'],
    status: 'Live',
    link: 'https://deskexam.com',
    delay: 0.3,
  },
  {
    title: 'CaterConnect India',
    description: 'Catering marketplace for Wardha, Maharashtra - digital platform for event catering services.',
    highlights: [
      'Custom menu building with real-time pricing',
      'Multi-caterer quote comparison',
      'Digital enquiry system for caterers',
      'Professional online presence for local businesses',
      'Scalable architecture for other cities',
    ],
    icon: <Smartphone className="w-6 h-6" />,
    tags: ['React', 'Node.js', 'MongoDB'],
    status: 'Built',
    link: 'https://vaibhavselkar-mymenu.vercel.app/',
    delay: 0.4,
  },
  {
    title: 'Kapil Electricals Website',
    description: 'Professional electrical contracting and solar solutions company website with lead generation and client management.',
    highlights: [
      'Auto-rotating hero with crossfade transitions',
      'Interactive project gallery with categories',
      'Customer review system for solar solutions',
      'Multi-channel contact system',
      'Certifications and compliance display',
      'SEO optimized with semantic HTML',
    ],
    icon: <Zap className="w-6 h-6" />,
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Radix UI', 'React Hook Form', 'Zod'],
    status: 'Live',
    delay: 0.5,
  },
  {
    title: 'ManageCash',
    description: 'Full-stack multi-tenant SaaS for Indian retail shops — replacing paper cashbooks with a unified dashboard for cash flow, customer wallets, inventory, and staff payroll.',
    highlights: [
      'Customer wallet ledgers with credit/debit passbook per account',
      'Inventory & purchase management with automatic stock updates',
      'Staff salary payroll built into the same dashboard',
      'Real-time dashboard with trend charts, donut breakdown & daily P&L',
      'Atomic deletes — reverses wallet balances, stock & mirror transactions across 6 collections',
      'Optimistic UI with 10-second undo-on-delete (no blocking modals)',
      'WhatsApp payment notifications for customers',
      'Multi-role access (Admin / Staff) with JWT auth',
    ],
    icon: <IndianRupee className="w-6 h-6" />,
    tags: ['React', 'Fastify', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    status: 'Live',
    link: 'https://managecash.in',
    delay: 0.6,
  },
]

function ProjectCard({ project }: { project: Project }) {
  const cardClass =
    'group glass p-8 rounded-2xl border border-purple-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 flex flex-col h-full'

  const inner = (
    <>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 group-hover:text-pink-600 transition-colors">
            {project.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text transition-all">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${
                  project.status === 'Live'
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : project.status === 'In Development'
                    ? 'bg-amber-100 text-amber-700 border border-amber-200'
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}
              >
                {project.status}
                {project.link && <ExternalLink className="w-3 h-3" />}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

      {/* Highlights */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Achievements</h4>
        <ul className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
              <span className="text-purple-500 font-bold mt-0.5">→</span>
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
            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200 group-hover:bg-purple-100 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center text-purple-600 group-hover:text-pink-600 transition-colors font-medium text-sm">
          <Rocket className="w-4 h-4 mr-2" />
          <span>Solo Builder</span>
        </div>
        {project.link ? (
          <div className="flex items-center gap-1 text-xs text-purple-500 group-hover:text-pink-500 transition-colors font-medium">
            Visit Site <ExternalLink className="w-3 h-3" />
          </div>
        ) : (
          <div className="text-xs text-slate-400">Built from scratch</div>
        )}
      </div>
    </>
  )

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {inner}
      </a>
    )
  }

  return <div className={cardClass}>{inner}</div>
}

export default function Projects() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Products Built</h2>
          <p className="text-xl text-slate-600 mb-4">
            6 products across 6 different industries - from solo projects to co-founding ventures
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl text-slate-700 mb-8">Industries Served</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['EdTech', 'Pharmaceutical', 'Academic', 'Catering', 'Electrical Contracting', 'AI/ML'].map(
              (industry, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white rounded-full text-slate-600 text-sm border border-slate-200 shadow-sm"
                >
                  {industry}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
