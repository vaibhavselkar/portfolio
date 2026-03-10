'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Database, Cloud, Zap, Rocket } from 'lucide-react'

interface TechCategory {
  name: string
  color: string
  icon: React.ReactNode
  skills: string[]
  description: string
}

const techCategories: TechCategory[] = [
  {
    name: 'AI & Generative AI',
    color: 'from-purple-500 to-pink-500',
    icon: <Brain className="w-6 h-6" />,
    skills: ['Claude AI', 'Cline', 'RAG Pipelines', 'LLM Integration', 'Vector Databases', 'Prompt Engineering', 'ChromaDB'],
    description: 'Integrating large language models into production software with RAG pipelines and vector embeddings'
  },
  {
    name: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    icon: <Code className="w-6 h-6" />,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'ShadCN UI', 'Framer Motion'],
    description: 'Building complete frontend applications with modern frameworks and excellent user experiences'
  },
  {
    name: 'Backend & Infrastructure',
    color: 'from-green-500 to-emerald-500',
    icon: <Database className="w-6 h-6" />,
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'Flask', 'REST APIs', 'JWT Authentication', 'Multi-tenant Architecture'],
    description: 'Architecting production backend systems with security, performance, and scalability in mind'
  },
  {
    name: 'Cloud & DevOps',
    color: 'from-orange-500 to-red-500',
    icon: <Cloud className="w-6 h-6" />,
    skills: ['AWS EC2', 'Vercel', 'GitHub Actions', 'CI/CD Pipelines', 'Docker', 'Load Balancing', 'Autoscaling'],
    description: 'Setting up reliable infrastructure with automated deployment and monitoring'
  },
  {
    name: 'Databases & Data',
    color: 'from-indigo-500 to-purple-500',
    icon: <Zap className="w-6 h-6" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Redis', 'Data Modeling', 'Query Optimization'],
    description: 'Working with both relational and non-relational databases for optimal performance'
  },
  {
    name: 'Product & Strategy',
    color: 'from-pink-500 to-rose-500',
    icon: <Rocket className="w-6 h-6" />,
    skills: ['Product Management', 'Roadmapping', 'Agile/Scrum', 'UX Research', 'KPI Analysis', 'Market Validation', 'PRD Writing'],
    description: 'Product management from concept through delivery with data-driven decision making'
  },
]

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive skill set developed through building 6 products across 6 different industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-white bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 bg-slate-800/50 border border-purple-500/30 rounded-lg text-gray-300 text-sm hover:border-purple-400 hover:text-purple-300 transition-all group-hover:bg-slate-700/50"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-2xl border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Real-World Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">66%</div>
              <div className="text-sm text-gray-400">API Latency Reduction</div>
              <div className="text-xs text-gray-500 mt-1">420ms → 140ms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">28%</div>
              <div className="text-sm text-gray-400">Signups Increase</div>
              <div className="text-xs text-gray-500 mt-1">Improved onboarding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime Achievement</div>
              <div className="text-xs text-gray-500 mt-1">Autoscaling infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">85%</div>
              <div className="text-sm text-gray-400">Test Coverage</div>
              <div className="text-xs text-gray-500 mt-1">60% fewer defects</div>
            </div>
          </div>
        </motion.div>

        {/* Tools & Development Environment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">Development Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git & GitHub', 'Postman', 'Figma', 'Jira', 'Notion', 'Asana', 'Canva', 'Tableau', 'VS Code'].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium text-gray-300 border border-purple-500/30 rounded-full hover:bg-purple-500/10 hover:text-purple-300 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
