import { Link } from 'wouter'
import { motion } from 'framer-motion'

const TRUST_POINTS = ['Institutional Collaboration', 'Secure Certification Delivery', 'Verifiable Digital Credentials']

function CollaborationIllustration() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-md" aria-hidden>
      <g stroke="#5eead4" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.65">
        <path d="M160 130 L60 60" />
        <path d="M160 130 L260 60" />
        <path d="M160 130 L160 220" />
      </g>

      <circle cx="160" cy="130" r="42" fill="rgba(94,234,212,0.1)" stroke="#5eead4" strokeWidth="1.5" />
      <rect x="139" y="111" width="42" height="38" rx="3" fill="#0a1128" stroke="#5eead4" strokeWidth="1.5" />
      <path d="M147 121h26M147 130h26M147 139h16" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="176" cy="141" r="6.5" fill="#0a1128" stroke="#5eead4" strokeWidth="1.3" />
      <path d="M173 141l1.8 1.8 3.5-3.5" stroke="#5eead4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* university */}
      <g>
        <circle cx="60" cy="60" r="26" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M48 68V52l12-6 12 6v16" stroke="#7c9cff" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="46" cy="76" r="5" fill="#0a1128" stroke="#5eead4" strokeWidth="1" />
      </g>

      {/* training */}
      <g>
        <circle cx="260" cy="60" r="26" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <rect x="248" y="50" width="24" height="14" rx="1.6" stroke="#7c9cff" strokeWidth="1.3" />
        <path d="M246 70h28" stroke="#7c9cff" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="274" cy="76" r="5" fill="#0a1128" stroke="#5eead4" strokeWidth="1" />
      </g>

      {/* corporate */}
      <g>
        <circle cx="160" cy="220" r="26" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <rect x="147" y="207" width="12" height="26" stroke="#7c9cff" strokeWidth="1.3" />
        <rect x="161" y="200" width="12" height="33" stroke="#7c9cff" strokeWidth="1.3" />
        <circle cx="146" cy="200" r="5" fill="#0a1128" stroke="#5eead4" strokeWidth="1" />
      </g>
    </svg>
  )
}

export default function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            CERTIFICATION PARTNERSHIP
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Partner With CertiByt to Create More{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">
              Certification Opportunities
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-navy/60">
            Join the CertiByt certification ecosystem and connect your students, learners,
            employees, or professional communities with secure assessments and digitally
            verifiable credentials.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#enquiry-form"
              className="rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Start Partnership Enquiry
            </a>
            <Link
              href="/certifications"
              className="rounded-lg border border-royal/40 px-7 py-3.5 text-sm font-medium text-royal transition-colors hover:bg-royal/5"
            >
              Explore Certifications
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <span key={point} className="flex items-center gap-2 text-sm font-medium text-navy/60">
                <svg className="h-4 w-4 text-royal" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <CollaborationIllustration />
        </motion.div>
      </div>
    </section>
  )
}
