import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Mail, Sparkles, Award } from 'lucide-react'
import { personal, highlights } from '../data/portfolio'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Ambient radial glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(139,92,246,0.3) 50%, transparent 75%)',
        }}
        aria-hidden
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)',
        }}
        aria-hidden
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Status pill */}
        <motion.div variants={item} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-xs text-indigo-300 font-medium shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Open to Internships &amp; Roles 2026–2027</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4"
        >
          {personal.name}
        </motion.h1>

        {/* Role Headline with Clean Delimiters */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-medium text-slate-300 mb-6 max-w-2xl mx-auto"
        >
          <span className="text-indigo-400 font-semibold">Computer Science Engineer</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-200">Software Developer</span>
          <span className="text-slate-600">|</span>
          <span className="text-violet-400 font-semibold">AI/ML Enthusiast</span>
        </motion.div>

        {/* Concise Professional Bio */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          {personal.intro}
        </motion.p>

        {/* CTA Actions Group */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14"
        >
          {/* Primary Action */}
          <button
            onClick={() => handleScroll('#projects')}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 border border-indigo-400/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Projects
            <ArrowRight size={16} />
          </button>

          {/* Contact Action */}
          <button
            onClick={() => handleScroll('#contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl text-slate-300 hover:text-white bg-[#151b2e] hover:bg-[#1a223a] border border-[#1e2740] hover:border-slate-600 transition-all duration-200"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>

        {/* Clean Metric Highlight Cards */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto"
        >
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0f1320]/80 border border-[#1e2740]/80 hover:border-indigo-500/40 backdrop-blur-sm transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400 group-hover:scale-105 transition-transform">
                {i === 0 ? <Sparkles size={17} /> : <Award size={17} />}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono tracking-wider uppercase text-slate-400 font-semibold mb-0.5">
                  {h.label}
                </p>
                <p className="text-sm font-bold text-slate-100 truncate">
                  {h.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Smooth Scroll indicator */}
        <motion.button
          variants={item}
          onClick={() => handleScroll('#about')}
          className="mt-14 inline-flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors mx-auto"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  )
}
