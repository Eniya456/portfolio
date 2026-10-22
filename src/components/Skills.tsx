import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { Tag } from './Tag'
import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-[#0f1320]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Skills"
          title="What I Work With"
          subtitle="Organized by domain — no arbitrary proficiency bars, just honest groupings."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-surface p-5 hover:border-indigo-800/40 transition-colors group"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
