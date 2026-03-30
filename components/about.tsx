'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Code, Rocket, Brain, Users, Database } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const highlights = [
    'Co-Founder & AI Product Engineer at Sanghamitra',
    'Built 6 products across 6 different industries',
    'AI integration expert (Claude AI, Cline, RAG)',
    'Full-stack development (React, Node.js, Python)',
    'Multi-tenant SaaS architecture',
    'Data-driven product decisions',
    'Performance optimization specialist',
    'Solo builder of complex platforms',
  ]

  const achievements = [
    { label: 'API Latency Reduction', value: '66%', icon: '⚡' },
    { label: 'Signups Increase', value: '28%', icon: '📈' },
    { label: 'Uptime Achievement', value: '99.9%', icon: '🛡️' },
    { label: 'Test Coverage', value: '85%', icon: '🧪' },
    { label: 'Production Defects', value: '-60%', icon: '🔧' },
    { label: 'Release Cycles', value: '-45%', icon: '🚀' },
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

  const skillCategories = [
    {
      title: 'AI & Generative AI',
      skills: ['Claude AI', 'Cline', 'RAG Pipelines', 'LLM Integration', 'Vector Databases', 'Prompt Engineering'],
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'ShadCN UI'],
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Backend & Infrastructure',
      skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'AWS EC2', 'Vercel'],
      icon: <Database className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Product & Strategy',
      skills: ['Product Management', 'Roadmapping', 'Agile/Scrum', 'UX Research', 'KPI Analysis', 'Market Validation'],
      icon: <Rocket className="w-6 h-6 text-orange-400" />
    }
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Vaibhav Selkar</h2>
          <p className="text-xl text-gray-300 mb-2">Product Engineer & Co-Founder</p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20">
              <Image
                src="/images/team-vaibhav.jpg"
                alt="Vaibhav Selkar"
                width={400}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-purple-400">📧</span>
                <span>vaibhavselkar.tech@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-purple-400">📱</span>
                <span>+91 9552027990</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/in/vaibhav-selkar" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/vaibhavselkar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://vaibhavselkar.info" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Portfolio
                </a>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am a product engineer and co-founder who builds systems that run businesses. My default response to seeing a problem is to open a laptop and make something. I have built six products across six different industries — EdTech, pharma supply chain, academic tools, catering, electrical contracting, and AI-powered exam generation — most of them solo, all of them from scratch.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I joined Sanghamitra Tech as one of three founding members at day zero. There was no codebase, no process, no team structure, and no blueprint. I designed the workflow, made product and engineering decisions simultaneously, integrated AI at every layer of the product, and shipped a working platform that serves real classrooms in India.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I work best in ambiguity, with limited resources, on problems worth solving. I use Claude AI and Cline as daily tools — not shortcuts, but force multipliers that let me move at a pace most teams cannot match. I do not wait for the right conditions to build. I build to create the right conditions.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-lg border border-purple-500/20 text-center"
                >
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <div className="text-lg font-bold text-white">{achievement.value}</div>
                  <div className="text-xs text-gray-400">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl border border-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Products Built */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Products Built</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
              { name: 'Sanghamitra EdTech', status: 'Live', role: 'AI Product Engineer (Team Product)', tech: 'React, Node.js, Python, AI/LLM' },
              { name: 'PharmaFlow', status: 'In Development', role: 'Solo Builder', tech: 'Next.js, TypeScript, Supabase' },
              { name: 'DeskExam', status: 'Live', role: 'Solo Builder', tech: 'Next.js, React, TypeScript, Google API' },
              { name: 'CaterConnect India', status: 'Built', role: 'Solo Builder', tech: 'React, Node.js, MongoDB' },
              { name: 'Kapil Electricals', status: 'Live', role: 'Client Project', tech: 'Next.js 16, React 19, TypeScript' },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">{product.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    product.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{product.role}</p>
                <p className="text-xs text-gray-500">{product.tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 glass p-4 rounded-lg border border-purple-500/20"
            >
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{highlight}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
