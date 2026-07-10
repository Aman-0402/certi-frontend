import { Link } from 'wouter'
import { motion } from 'framer-motion'

function EcosystemIllustration() {
  return (
    <svg viewBox="0 0 320 280" fill="none" className="mx-auto w-full max-w-md" aria-hidden>
      <g stroke="#5eead4" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.6">
        <path d="M160 140 L55 70" />
        <path d="M160 140 L265 70" />
        <path d="M160 140 L45 210" />
        <path d="M160 140 L275 210" />
      </g>

      <circle cx="160" cy="140" r="42" fill="rgba(94,234,212,0.1)" stroke="#5eead4" strokeWidth="1.5" />
      <rect x="139" y="121" width="42" height="38" rx="3" fill="#0a1128" stroke="#5eead4" strokeWidth="1.5" />
      <path d="M147 131h26M147 140h26M147 149h16" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="176" cy="151" r="6.5" fill="#0a1128" stroke="#5eead4" strokeWidth="1.3" />
      <path d="M173 151l1.8 1.8 3.5-3.5" stroke="#5eead4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* candidate profile */}
      <g>
        <circle cx="55" cy="70" r="22" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <circle cx="55" cy="64" r="6" stroke="#7c9cff" strokeWidth="1.3" />
        <path d="M45 80c1.8-5 5.5-7.5 10-7.5s8.2 2.5 10 7.5" stroke="#7c9cff" strokeWidth="1.3" strokeLinecap="round" />
      </g>

      {/* university */}
      <g>
        <circle cx="265" cy="70" r="22" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M254 78V64l11-5 11 5v14" stroke="#7c9cff" strokeWidth="1.3" strokeLinejoin="round" />
      </g>

      {/* training */}
      <g>
        <circle cx="45" cy="210" r="22" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <rect x="33" y="200" width="24" height="14" rx="1.6" stroke="#7c9cff" strokeWidth="1.2" />
        <path d="M31 220h28" stroke="#7c9cff" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* corporate */}
      <g>
        <circle cx="275" cy="210" r="22" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <rect x="264" y="200" width="9" height="20" stroke="#7c9cff" strokeWidth="1.1" />
        <rect x="275" y="194" width="9" height="26" stroke="#7c9cff" strokeWidth="1.1" />
      </g>
    </svg>
  )
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            ABOUT CERTIBYT
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Building a More{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">Trusted Future</span> for{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">Professional Certification</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-navy/60">
            CertiByt is a digital certification platform built to connect individuals and
            organizations with secure professional assessments and digitally verifiable
            credentials.
          </p>
          <p className="mt-4 max-w-lg text-navy/55">
            We are creating a certification ecosystem where skills can be assessed securely,
            achievements can be recognized digitally, and credentials can be independently
            verified.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/certifications"
              className="rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Explore Certifications
            </Link>
            <Link
              href="/organizations/partner"
              className="rounded-lg border border-royal/40 px-7 py-3.5 text-sm font-medium text-royal transition-colors hover:bg-royal/5"
            >
              Partner With CertiByt
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <EcosystemIllustration />
        </motion.div>
      </div>
    </section>
  )
}
