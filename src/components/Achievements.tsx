import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Award, Maximize2 } from 'lucide-react'
import { certificates } from '../data/portfolio'

export function Achievements() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIdx])

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % certificates.length)
  }

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const current = certificates[activeIdx]

  return (
    <section id="achievements" className="section-pad relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] pointer-events-none rounded-full blur-[140px] opacity-15 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${current.color} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-xs font-mono tracking-[0.25em] text-slate-400 uppercase mb-2">
            05 // SECURITY_CLEARANCE
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Certifications<span className="text-indigo-500">.</span>
          </h2>
        </motion.div>

        {/* Showcase Stage (Left: Stacked Detail Card, Right: Authentic Certificate Image Display) */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-10 min-h-[460px]">
          {/* Left Column: Stacked Badge Card (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Fake stack depth layers */}
              <div className="absolute inset-x-6 -bottom-5 h-24 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl transform scale-[0.90] blur-[1px] pointer-events-none -z-20" />
              <div className="absolute inset-x-3 -bottom-2.5 h-24 bg-[#0d121f] border border-slate-800 rounded-2xl shadow-xl transform scale-[0.96] pointer-events-none -z-10" />

              {/* Active Foreground Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full bg-[#111625] border border-slate-700/60 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-xl"
                  style={{
                    boxShadow: `0 20px 40px -15px ${current.color}18`,
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 inset-x-0 h-1 transition-colors duration-500"
                    style={{ backgroundColor: current.color }}
                  />

                  {/* Code & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-slate-400">
                      {current.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 size={11} />
                      {current.status}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{
                        backgroundColor: `${current.color}20`,
                        border: `1px solid ${current.color}40`,
                        color: current.color,
                      }}
                    >
                      <Award size={28} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                        {current.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1 font-medium">
                        {current.issuer}
                        {current.platform && (
                          <span className="text-slate-500 font-normal"> · {current.platform}</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Skills / Topics */}
                  <div className="mb-6">
                    <p className="text-[10px] font-mono tracking-wider uppercase text-slate-500 mb-2">
                      Verified Competencies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {current.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-lg font-mono bg-[#161d31] border border-slate-700/50 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      Issued: {current.date}
                    </span>
                    {current.credentialUrl && (
                      <a
                        href={current.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                        style={{ color: current.color }}
                      >
                        Verify Credential <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Actual Certificate Image Display (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full max-w-xl group relative rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl bg-slate-950"
                style={{
                  boxShadow: `0 25px 50px -12px ${current.color}25`,
                }}
              >
                {/* Certificate Tag Pill Overlay */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-900/90 text-white shadow-lg border border-slate-700/60 backdrop-blur-md">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>{current.code}</span>
                  </div>
                </div>

                {/* Enlarge Trigger */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px] cursor-zoom-in"
                  aria-label="Enlarge certificate image"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold border border-slate-700 shadow-xl">
                    <Maximize2 size={14} /> View Full Certificate
                  </span>
                </button>

                {/* Actual Certificate Image */}
                <div className="w-full aspect-[4/3] bg-white flex items-center justify-center p-1 sm:p-2 overflow-hidden">
                  <img
                    src={current.imagePath}
                    alt={`${current.title} Certificate`}
                    className="w-full h-full object-contain rounded-lg shadow-sm"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation (Left/Right Arrows + Dots) */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[#151b2e] border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {certificates.map((c, i) => {
              const isActive = i === activeIdx
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 bg-indigo-500 shadow-sm shadow-indigo-500/50' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Jump to certificate ${i + 1}`}
                />
              )
            })}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#151b2e] border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
            aria-label="Next certificate"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Quick Selection Pills Bar (Matching reference design) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {certificates.map((cert, index) => {
            const isSelected = index === activeIdx
            return (
              <button
                key={cert.id}
                onClick={() => setActiveIdx(index)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500'
                    : 'bg-[#0f1320] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cert.color }}
                />
                <span className="truncate max-w-[220px]">{cert.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.imagePath}
                alt={current.title}
                className="w-full h-auto max-h-[82vh] object-contain rounded-lg"
              />
              <div className="mt-3 flex items-center justify-between text-slate-800 text-xs px-2">
                <span className="font-semibold">{current.title} — {current.issuer}</span>
                {current.credentialUrl && (
                  <a
                    href={current.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    Open Official Credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
