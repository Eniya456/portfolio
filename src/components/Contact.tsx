import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { personal } from '../data/portfolio'

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${personal.email}`,
    display: personal.email,
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: personal.linkedin,
    display: 'linkedin.com/in/eniya-v-986aba304',
    external: true,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: personal.github,
    display: 'github.com/Eniya456',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    href: undefined as string | undefined,
    display: personal.location,
    external: false,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-[#0f1320]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="I'm actively looking for internship opportunities. Feel free to reach out!"
          center
        />

        <div className="max-w-2xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactItems.map(({ icon: Icon, label, href, display, external }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-surface p-4 hover:border-indigo-800/40 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-900/30 border border-indigo-800/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-slate-300 hover:text-indigo-300 transition-colors truncate block"
                      >
                        {display}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300 truncate">{display}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="text-center"
          >
            <p className="text-slate-400 text-sm mb-5">
              Prefer to reach out directly? Send me an email and I'll respond within 24 hours.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500 shadow-lg shadow-indigo-900/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send size={15} />
              Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
