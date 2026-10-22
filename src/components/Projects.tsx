import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
import { projects } from '../data/portfolio'

// ── Tag colour map ─────────────────────────────────────────────────────────────
const tagColor: Record<string, string> = {
  'HACKATHON — 5TH PLACE': 'text-amber-400',
  'LIVE PRODUCT': 'text-indigo-400',
  'ASSISTIVE TECH': 'text-emerald-400',
  'FULL-STACK': 'text-sky-400',
  'AI / HEALTHCARE': 'text-rose-400',
  RESEARCH: 'text-violet-400',
}

// ── Animated bezier arc SVG ────────────────────────────────────────────────────
function ArcIndicator({
  count,
  active,
  itemHeight,
}: {
  count: number
  active: number
  itemHeight: number
}) {
  const totalH = count * itemHeight
  const cy = (active + 0.5) * itemHeight      // center-y of active item
  const bulge = 44                             // how far the arc bows left

  // A smooth bezier arc centred on the active row
  const topY = Math.max(0, cy - itemHeight * 1.5)
  const botY = Math.min(totalH, cy + itemHeight * 1.5)

  const d = [
    `M 50 0`,
    `L 50 ${topY}`,
    `C 50 ${cy - 30}, ${50 - bulge} ${cy - 10}, ${50 - bulge} ${cy}`,
    `C ${50 - bulge} ${cy + 10}, 50 ${cy + 30}, 50 ${botY}`,
    `L 50 ${totalH}`,
  ].join(' ')

  return (
    <svg
      viewBox={`0 0 50 ${totalH}`}
      width={50}
      height={totalH}
      fill="none"
      className="absolute left-0 top-0 pointer-events-none"
      aria-hidden
    >
      {/* Track */}
      <line x1="50" y1="0" x2="50" y2={totalH} stroke="#1e2740" strokeWidth="1.5" />
      {/* Animated arc */}
      <motion.path
        d={d}
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        animate={{ d }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      />
      {/* Active dot */}
      <motion.circle
        cx={50 - bulge}
        cy={cy}
        r="4"
        fill="#6366f1"
        animate={{ cy }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      />
    </svg>
  )
}

// ── Main Projects section ──────────────────────────────────────────────────────
export function Projects() {
  const [active, setActive] = useState(0)
  const ITEM_H = 72   // px height per project row in the list
  const listRef = useRef<HTMLDivElement>(null)

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') setActive((p) => Math.min(p + 1, projects.length - 1))
      if (e.key === 'ArrowUp') setActive((p) => Math.max(p - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const project = projects[active]

  return (
    <section id="projects" className="section-pad bg-[#0f1320]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="text-xs font-mono tracking-[0.25em] text-indigo-400 uppercase mb-2">
            03 // SELECTED_WORKS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Selected Works<span className="text-indigo-500">.</span>
          </h2>
        </motion.div>

        {/* ── Split panel ── */}
        <div className="grid lg:grid-cols-[1fr_auto_320px] gap-0 min-h-[480px] items-start">

          {/* ── LEFT: Project detail ── */}
          <div className="lg:pr-12 xl:pr-20 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Number + tag */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl font-black text-indigo-500 font-mono leading-none">
                    {project.number}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase border border-current px-2 py-0.5 rounded-sm"
                    style={{ color: tagColor[project.tag] ?? '#818cf8' }}>
                    {project.tag}
                  </span>
                  {project.highlight && (
                    <span className="text-[10px] font-semibold text-amber-400 bg-amber-900/20 border border-amber-800/30 px-2 py-0.5 rounded-sm">
                      🏆 Hackathon
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-lg">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-400 max-w-lg">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-sm bg-indigo-500 rotate-45" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech stack — dot separated like the reference */}
                <p className="text-xs text-slate-500 font-mono mb-6 tracking-wide">
                  {project.tech.join(' · ')}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
                    >
                      <GithubIcon size={15} />
                      Source Code
                      <ArrowRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
                    >
                      Live Demo
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {!project.sourceUrl && !project.demoUrl && (
                    <span className="text-xs text-slate-600 italic">Private / no public link</span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── CENTER: Arc divider ── */}
          <div
            className="hidden lg:block relative self-stretch"
            style={{ width: 50, minHeight: projects.length * ITEM_H }}
          >
            <ArcIndicator count={projects.length} active={active} itemHeight={ITEM_H} />
          </div>

          {/* ── RIGHT: Project name list ── */}
          <div
            ref={listRef}
            className="lg:pl-6 flex flex-col"
            style={{ gap: 0 }}
            role="listbox"
            aria-label="Projects"
          >
            {projects.map((p, i) => {
              const isActive = i === active
              return (
                <button
                  key={p.number}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  style={{ height: ITEM_H }}
                  className={`flex items-center gap-3 text-left w-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 group ${
                    isActive ? '' : 'hover:opacity-70'
                  }`}
                >
                  {/* Arrow indicator */}
                  <motion.span
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-indigo-400 flex-shrink-0 text-base font-bold"
                    aria-hidden
                  >
                    →
                  </motion.span>

                  {/* Project name */}
                  <motion.span
                    animate={{
                      fontSize: isActive ? '1.35rem' : '1rem',
                      fontWeight: isActive ? 800 : 400,
                      color: isActive ? '#e2e8f0' : '#475569',
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="leading-tight tracking-tight whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{ display: 'block' }}
                  >
                    {p.title}
                  </motion.span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Mobile fallback: simple card list ── */}
        <div className="lg:hidden mt-8 space-y-3 text-sm text-slate-500 text-center">
          <p>Use the list above to browse projects, or scroll on a larger screen for the interactive panel view.</p>
        </div>

      </div>
    </section>
  )
}
