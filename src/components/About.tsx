import { motion } from 'framer-motion'
import { GraduationCap, Code, Brain, Database, FlaskConical, TestTube } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

const interests = [
  { icon: Code, label: 'Software Engineering' },
  { icon: Brain, label: 'AI / ML' },
  { icon: Database, label: 'Backend Systems' },
  { icon: Database, label: 'Data Analytics' },
  { icon: TestTube, label: 'Testing & QA' },
  { icon: FlaskConical, label: 'Research' },
]

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Building, Learning, Shipping"
          subtitle="A snapshot of who I am and what I'm working towards."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I'm a <strong className="text-slate-200">B.Tech Computer Science and Engineering</strong> student at{' '}
              <strong className="text-slate-200">SRM Institute of Science and Technology</strong> (2023–2027),
              maintaining a CGPA of <strong className="text-indigo-400">9.29 / 10</strong>.
            </p>
            <p>
              My work spans full-stack web development, AI/ML pipelines, data processing,
              and research-oriented projects. I've interned at{' '}
              <strong className="text-slate-200">NIT Tiruchirappalli</strong> as a summer research intern
              and at <strong className="text-slate-200">NoviTech R&D</strong> working on ML and data analytics.
            </p>
            <p>
              I enjoy the engineering side of software — debugging complex systems, designing clean APIs,
              building robust test suites, and understanding how things break. I co-founded{' '}
              <strong className="text-slate-200">TripSwipe</strong>, a live travel-booking platform,
              and competed at <strong className="text-slate-200">QTHack04</strong>, placing 5th in the
              Quantum Systems Track.
            </p>
            <p>
              I'm actively looking for internship opportunities in software engineering, AI/ML,
              data analytics, and full-stack development.
            </p>
          </motion.div>

          {/* Education card + interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Education card */}
            <div className="card-surface p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-900/40 border border-indigo-800/40 flex items-center justify-center">
                <GraduationCap size={20} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Education</p>
                <p className="text-slate-100 font-semibold">B.Tech Computer Science & Engineering</p>
                <p className="text-slate-400 text-sm">SRM Institute of Science and Technology</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-xs text-slate-500">2023 – 2027</span>
                  <span className="text-xs text-indigo-400 font-semibold">CGPA 9.29 / 10</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card-surface p-5">
              <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">Areas of Interest</p>
              <div className="grid grid-cols-2 gap-2.5">
                {interests.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#151b2e] border border-[#1e2740] hover:border-indigo-800/50 transition-colors"
                  >
                    <Icon size={14} className="text-indigo-400 flex-shrink-0" />
                    <span className="text-xs text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
