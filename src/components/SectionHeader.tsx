import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-px bg-indigo-500/30 ${center ? 'max-w-xs mx-auto' : 'max-w-xs'}`} />
    </motion.div>
  )
}
