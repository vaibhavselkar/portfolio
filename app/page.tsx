'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Metrics from '@/components/metrics'
import Projects from '@/components/projects'
import TechStack from '@/components/tech-stack'
import Timeline from '@/components/timeline'
import Contact from '@/components/contact'
import FloatingOrbs from '@/components/floating-orbs'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-white">
      <FloatingOrbs />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Metrics />
        <Projects />
        <TechStack />
        <Timeline />
        <Contact />
      </main>
    </div>
  )
}
