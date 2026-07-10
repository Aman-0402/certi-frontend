import { Link } from 'wouter'

function ConnectionIllustration() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-sm" aria-hidden>
      <g stroke="#5eead4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
        <path d="M160 130 L60 60" />
        <path d="M160 130 L260 60" />
        <path d="M160 130 L160 220" />
      </g>

      <circle cx="160" cy="130" r="40" fill="rgba(94,234,212,0.12)" stroke="#5eead4" strokeWidth="1.5" />
      <rect x="140" y="112" width="40" height="36" rx="3" fill="#0a1128" stroke="#5eead4" strokeWidth="1.4" />
      <path d="M147 122h26M147 130h26M147 138h16" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="176" cy="140" r="6" fill="#0a1128" stroke="#5eead4" strokeWidth="1.3" />
      <path d="M173.5 140l1.7 1.7 3.3-3.3" stroke="#5eead4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

      <g>
        <circle cx="60" cy="60" r="26" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M48 68V52l12-6 12 6v16" stroke="#7c9cff" strokeWidth="1.4" strokeLinejoin="round" />
      </g>

      <g>
        <circle cx="260" cy="60" r="26" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M248 46l12-6 12 6v22h-24z" stroke="#7c9cff" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M252 68v-8h4v8M264 68v-8h4v8" stroke="#7c9cff" strokeWidth="1.2" />
      </g>

      <g>
        <circle cx="160" cy="220" r="26" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <rect x="147" y="207" width="12" height="26" stroke="#7c9cff" strokeWidth="1.3" />
        <rect x="161" y="200" width="12" height="33" stroke="#7c9cff" strokeWidth="1.3" />
      </g>
    </svg>
  )
}

export default function PartnerCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-royal-700">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-royal/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Bring Trusted Certification Opportunities to Your Candidates
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">
            Join CertiByt's certification ecosystem and create new opportunities for students,
            learners, and professionals to validate their skills.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/organizations/partner"
              className="rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Become a Certification Partner
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-cyan-glow hover:text-cyan-glow"
            >
              Contact Our Team
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-white/40">
            Universities &middot; Colleges &middot; Training Institutes &middot; Corporate Organizations
          </p>
        </div>

        <ConnectionIllustration />
      </div>
    </section>
  )
}
