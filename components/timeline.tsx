'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Rocket, Brain, Code, Users } from 'lucide-react'

interface TimelineEvent {
  type: 'work' | 'education' | 'achievement'
  title: string
  organization: string
  date: string
  description: string
  highlights?: string[]
  delay: number
  icon?: React.ReactNode
}

const timelineEvents: TimelineEvent[] = [
  {
    type: 'work',
    title: 'Co-Founder & AI Product Engineer',
    organization: 'Sanghamitra EdTech',
    date: 'Apr 2024 – Present',
    description: 'Built India\'s AI-driven EdTech platform from day zero. Designed workflows, made product and engineering decisions simultaneously, and integrated AI at every layer.',
    highlights: [
      'Co-founded with 3 founding members - designed entire workflow and infrastructure',
      '66% API latency reduction (420ms → 140ms) through optimization',
      '28% increase in new-user signups via improved onboarding flow',
      '99.9% uptime with stateless autoscaling and load-balanced deployments',
      '85% test coverage, 60% reduction in production defects',
      '45% faster release cycles through CI/CD automation',
      '70% feature adoption increase, 10+ hours/week teacher efficiency gain',
      'Multi-tenant SaaS architecture serving 10+ classrooms, 20+ students per session',
      'AI integration across writing feedback, quiz generation, and assessment framework'
    ],
    delay: 0,
    icon: <Brain className="w-6 h-6" />
  },
  {
    type: 'work',
    title: 'Product Development Manager',
    organization: 'Sanghamitra Business Incubator',
    date: 'Mar 2021 – Mar 2024',
    description: 'Managed full product lifecycle for physical consumer products - water filters, air coolers. Transitioned from hardware to software product development.',
    highlights: [
      'Led product development from concept through prototyping, testing, manufacturing, and market launch',
      'Analyzed product performance, testing results, and customer feedback for design improvements',
      'Conducted regional sales research across Wardha and Hyderabad for market insights',
      'Established Sanghamitra\'s Hyderabad presence from scratch - location, office, marketing materials',
      'Designed and executed Water Quality Awareness Program at Primary Health Care Centre',
      'Organized week-long summer school covering math, English, robotics, and computer knowledge',
      'Built foundation for transitioning into software product development'
    ],
    delay: 0.2,
    icon: <Rocket className="w-6 h-6" />
  },
  {
    type: 'education',
    title: 'Diploma in Data Science and Programming',
    organization: 'Indian Institute of Technology, Madras',
    date: 'Sep 2024 – Present',
    description: 'Advanced studies in data science, machine learning, statistical analysis, and programming.',
    highlights: ['GPA: 8.75', 'Building formal foundations on practical experience'],
    delay: 0.4,
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    type: 'education',
    title: 'Applied Data Science Lab',
    organization: 'WorldQuant University',
    date: 'Feb 2023 – Aug 2023',
    description: 'Rigorous applied data science program focused on real-world projects and machine learning workflows.',
    highlights: ['Built and deployed ML models', 'Worked with large datasets', 'Full data science workflow'],
    delay: 0.6,
    icon: <Brain className="w-6 h-6" />
  },
  {
    type: 'achievement',
    title: '6 Products Built Across 6 Industries',
    organization: 'Solo Projects & Co-Founding',
    date: '2021 – Present',
    description: 'Built diverse products solving real problems across multiple industries.',
    highlights: [
      'Sanghamitra EdTech Platform - AI-driven learning system',
      'EduRAG - AI exam paper generator with RAG pipeline',
      'PharmaFlow - Pharmaceutical supply chain management',
      'DeskExam - Academic document platform',
      'CaterConnect India - Catering marketplace',
      'Kapil Electricals - Professional business website'
    ],
    delay: 0.8,
    icon: <Code className="w-6 h-6" />
  },
  {
    type: 'education',
    title: 'Bachelor of Science',
    organization: 'Bajaj College of Science, Wardha',
    date: 'Jul 2017 – Dec 2020',
    description: 'Foundation in science, analytical thinking, research methodology, and data analysis.',
    highlights: ['Microbiology, Botany, Chemistry', 'Developed analytical and research skills'],
    delay: 1.0,
    icon: <GraduationCap className="w-6 h-6" />
  },
]

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-xl text-gray-300 mb-4">From hardware product development to AI-driven software platforms</p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
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
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white relative z-10 ${
                    event.type === 'achievement' ? 'ring-4 ring-purple-300/30' : ''
                  }`}>
                    {event.icon || (event.type === 'work' ? (
                      <Briefcase size={20} />
                    ) : (
                      <GraduationCap size={20} />
                    ))}
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
                        <span className={`font-bold mt-0.5 flex-shrink-0 ${
                          event.type === 'work' ? 'text-purple-400' :
                          event.type === 'education' ? 'text-blue-400' :
                          'text-green-400'
                        }`}>•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="glass p-6 rounded-xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
            <div className="text-sm text-gray-400">Products Built</div>
          </div>
          <div className="glass p-6 rounded-xl border border-purple-500/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
            <div className="text-sm text-gray-400">Industries Served</div>
          </div>
          <div className="glass p-6 rounded-xl border border-purple-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="glass p-6 rounded-xl border border-purple-500/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">1000+</div>
            <div className="text-sm text-gray-400">Users Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
