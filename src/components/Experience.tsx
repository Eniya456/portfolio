import { motion } from 'framer-motion'
import { Briefcase, FlaskConical, Monitor } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { experiences, type Experience } from '../data/portfolio'

const typeConfig: Record<
  Experience['type'],
  { icon: typeof Briefcase; color: string; bg: string; border: string }
> = {
  intern: {
    icon: Briefcase,
    color: 'text-indigo-400',
    bg: 'bg-indigo-900/30',
    border: 'border-indigo-800/40',
  },
  research: {
    icon: FlaskConical,
    color: 'text-violet-400',
    bg: 'bg-violet-900/30',
    border: 'border-violet-800/40',
  },
  virtual: {
    icon: Monitor,
    color: 'text-sky-400',
    bg: 'bg-sky-900/30',
    border: 'border-sky-800/40',
  },
}

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Worked"
          subtitle="Internships, research positions, and industry training."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1e2740] hidden sm:block" aria-hidden />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const cfg = typeConfig[exp.type]
              const Icon = cfg.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative sm:pl-16"
                >
                  {/* Icon dot */}
                  <div
                    className={`absolute left-0 top-5 w-10 h-10 rounded-full ${cfg.bg} border ${cfg.border} flex items-center justify-center hidden sm:flex`}
                    aria-hidden
                  >
                    <Icon size={18} className={cfg.color} />
                  </div>

                  <div className="card-surface p-6 hover:border-indigo-800/40 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`sm:hidden w-7 h-7 rounded-full ${cfg.bg} border ${cfg.border} flex items-center justify-center`}>
                            <Icon size={14} className={cfg.color} />
                          </div>
                          <h3 className="text-slate-100 font-semibold text-base">{exp.role}</h3>
                        </div>
                        <p className={`text-sm font-medium ${cfg.color}`}>{exp.company}</p>
                      </div>
                      <span className="flex-shrink-0 text-xs text-slate-500 bg-[#151b2e] border border-[#1e2740] px-3 py-1 rounded-full self-start">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-slate-400">
                          <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-indigo-500" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
