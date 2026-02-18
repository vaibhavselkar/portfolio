'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

interface TimelineEvent {
  type: 'work' | 'education'
  title: string
  organization: string
  date: string
  description: string
  highlights?: string[]
  delay: number
}

const timelineEvents: TimelineEvent[] = [
  {
    type: 'work',
    title: 'Software Engineer / Product Manager',
    organization: 'Sanghamitra Business Incubator',
    date: 'Apr 2024 – Present',
    description: 'Leading full delivery of SaaS platforms with focus on architecture and product-market fit.',
    highlights: [
      'Architected multi-tenant backend systems with Node.js + Express',
      'Implemented JWT authentication and security protocols',
      'Integrated Python-based AI modules using Flask servers',
      'Engineered automated testing framework (40% UX improvement)',
      'Optimized API logic reducing latency by 66% (420ms → 140ms)',
      'Launched onboarding flow increasing signups by 28%',
      'Maintained 99.9% uptime through autoscaling and load balancing',
      'Expanded test coverage to 85%, reducing production defects by 60%',
      'Automated CI/CD with GitHub Actions, reducing release time by 45%',
    ],
    delay: 0,
  },
  {
    type: 'work',
    title: 'Product Development Associate / Manager',
    organization: 'Sanghamitra Business Incubator',
    date: 'Mar 2021 – Mar 2024',
    description: 'End-to-end product development from concept to market release, covering hardware and software.',
    highlights: [
      'Coordinated full product lifecycle for consumer products',
      'Analyzed product performance and customer feedback',
      'Collaborated with engineering teams on efficiency optimization',
      'Conducted regional market research and sales analysis',
      'Strengthened product-market fit through customer insights',
    ],
    delay: 0.2,
  },
  {
    type: 'education',
    title: 'Diploma in Data Science and Programming',
    organization: 'Indian Institute of Technology, Madras',
    date: 'Sep 2024 – Present',
    description: 'Advanced studies in data science, algorithms, and programming fundamentals.',
    highlights: ['GPA: 8.75', 'Focus on ML and data analysis'],
    delay: 0.4,
  },
  {
    type: 'education',
    title: 'Applied Data Science Lab',
    organization: 'WorldQuant University',
    date: 'Feb 2023 – Aug 2023',
    description: 'Intensive program in applied data science and statistical analysis.',
    delay: 0.6,
  },
  {
    type: 'education',
    title: 'Bachelor of Science',
    organization: 'Bajaj College of Science, Wardha',
    date: 'Jul 2017 – Dec 2020',
    description: 'Foundation in science and analytical thinking.',
    delay: 0.8,
  },
]

export default function Timeline() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-purple-500 before:to-transparent md:before:left-1/2 md:before:translate-x-[-50%]">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: event.delay }}
              viewport={{ once: true }}
              className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-0 top-6 w-16 h-16 md:static md:flex md:justify-center">
                <div className="flex items-center justify-center w-16 h-16">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white relative z-10">
                    {event.type === 'work' ? (
                      <Briefcase size={20} />
                    ) : (
                      <GraduationCap size={20} />
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="ml-24 md:ml-0 glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-purple-300 font-medium">{event.organization}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">{event.date}</span>
                </div>

                <p className="text-gray-300 mb-4">{event.description}</p>

                {event.highlights && event.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-purple-400 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
