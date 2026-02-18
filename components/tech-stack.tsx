'use client'

import { motion } from 'framer-motion'

interface TechCategory {
  name: string
  color: string
  skills: string[]
}

const techCategories: TechCategory[] = [
  {
    name: 'Backend',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Node.js', 'Express.js', 'Flask', 'Python', 'REST APIs', 'JWT Auth'],
  },
  {
    name: 'Frontend',
    color: 'from-purple-500 to-pink-500',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  },
  {
    name: 'Databases',
    color: 'from-green-500 to-emerald-500',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Data Caching'],
  },
  {
    name: 'DevOps & Cloud',
    color: 'from-orange-500 to-red-500',
    skills: ['AWS EC2', 'Vercel', 'GitHub Actions', 'CI/CD', 'Docker', 'Load Balancing'],
  },
  {
    name: 'AI & Data',
    color: 'from-pink-500 to-rose-500',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Data Analysis', 'ML Integration'],
  },
  {
    name: 'Product & Tools',
    color: 'from-indigo-500 to-purple-500',
    skills: ['Agile/Scrum', 'PRD Writing', 'KPI Analysis', 'Figma', 'Notion', 'JIRA'],
  },
]

export default function TechStack() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build scalable, reliable systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              {/* Category Header */}
              <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-bold text-sm mb-4`}>
                {category.name}
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
                    className="px-3 py-1 bg-slate-800/50 border border-purple-500/30 rounded-lg text-gray-300 text-sm hover:border-purple-400 hover:text-purple-300 transition-all group-hover:bg-slate-700/50"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-2xl border border-purple-500/20 text-center"
        >
          <p className="text-gray-300 text-lg mb-4">
            <span className="text-white font-semibold">Specialization:</span> Building production-grade SaaS platforms with focus on performance optimization, 
            reliable infrastructure, and data-driven product decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Multi-tenant Architecture', 'API Optimization', 'CI/CD Automation', 'System Scalability', 'AI Integration', 'Product-Driven Engineering'].map((specialty, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium text-purple-300 border border-purple-500/30 rounded-full hover:bg-purple-500/10 transition-colors"
              >
                {specialty}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
