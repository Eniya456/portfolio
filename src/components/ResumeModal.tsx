import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Download, ExternalLink, X, Eye, CheckCircle2 } from 'lucide-react'
import { personal } from '../data/portfolio'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const handleDownload = () => {
    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 3000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#0f1320] border border-[#1e2740] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e2740] bg-[#0a0d14]/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    Eniya V — Curriculum Vitae
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      PDF Document
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    B.Tech CSE @ SRMIST | Software Engineering, AI/ML, Full-Stack
                  </p>
                </div>
              </div>

              {/* Action buttons in header */}
              <div className="flex items-center gap-2">
                <a
                  href={personal.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-300 hover:text-white bg-[#151b2e] border border-[#1e2740] hover:border-slate-600 transition-colors"
                >
                  <ExternalLink size={13} />
                  Open in New Tab
                </a>
                <a
                  href={personal.resumeFile}
                  download="Eniya_V_Resume.pdf"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-900/30 transition-colors"
                >
                  {downloadSuccess ? (
                    <>
                      <CheckCircle2 size={14} className="text-emerald-300" />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      Download PDF
                    </>
                  )}
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Resume Preview Body */}
            <div className="relative flex-1 min-h-[500px] bg-[#07090e] p-2 sm:p-4 overflow-hidden flex flex-col">
              <iframe
                src={`${personal.resumeFile}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Eniya V Resume Preview"
                className="w-full flex-1 rounded-lg border border-[#1e2740]/60 bg-white shadow-inner"
              />
            </div>

            {/* Footer with summary and direct link */}
            <div className="px-6 py-3 border-t border-[#1e2740] bg-[#0a0d14]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
              <span className="flex items-center gap-1.5">
                <Eye size={14} className="text-indigo-400" />
                Live document preview. Also available for instant offline reading.
              </span>
              <div className="flex items-center gap-3">
                <span className="text-slate-500">File: Eniya_V_Resume.pdf</span>
                <a
                  href={personal.resumeFile}
                  download="Eniya_V_Resume.pdf"
                  onClick={handleDownload}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2 flex items-center gap-1"
                >
                  <Download size={12} /> Direct Download
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
