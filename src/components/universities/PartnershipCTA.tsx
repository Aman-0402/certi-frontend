import { Link } from 'wouter'

function CertificateOverBuilding() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-sm" aria-hidden>
      <path
        d="M40 220 L40 150 L90 150 L90 120 L130 120 L130 150 L180 150 L180 100 L230 100 L230 150 L280 150 L280 220 Z"
        fill="rgba(255,255,255,0.06)"
        stroke="#7c9cff"
        strokeWidth="1.3"
      />
      <path d="M60 150v20M100 150v20M150 120v20M200 150v20M250 150v20" stroke="#7c9cff" strokeWidth="1" opacity="0.5" />

      <g stroke="#5eead4" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.7">
        <path d="M160 100 L100 60" />
        <path d="M160 100 L220 60" />
        <path d="M160 100 L160 40" />
      </g>

      <circle cx="100" cy="60" r="18" fill="#0a1128" stroke="#5eead4" strokeWidth="1.4" />
      <circle cx="220" cy="60" r="18" fill="#0a1128" stroke="#5eead4" strokeWidth="1.4" />
      <circle cx="160" cy="40" r="18" fill="#0a1128" stroke="#5eead4" strokeWidth="1.4" />

      <g>
        <rect x="140" y="72" width="40" height="36" rx="3" fill="#0a1128" stroke="#5eead4" strokeWidth="1.6" />
        <path d="M147 82h26M147 90h26M147 98h16" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="176" cy="100" r="6" fill="#0a1128" stroke="#5eead4" strokeWidth="1.3" />
        <path d="M173.5 100l1.7 1.7 3.3-3.3" stroke="#5eead4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default function PartnershipCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-royal to-navy">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            CERTIFICATION PARTNERSHIP
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Create More Certification Opportunities for Your Students
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">
            Join CertiByt as an institutional certification partner and connect your students
            with secure assessments and verifiable professional credentials.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/organizations/partner"
              className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-royal shadow-glow transition-colors hover:bg-white/90"
            >
              Become a Certification Partner
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-cyan-glow hover:text-cyan-glow"
            >
              Talk to Our Team
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-white/40">
            Universities &middot; Colleges &middot; Higher Education Institutions
          </p>
        </div>

        <CertificateOverBuilding />
      </div>
    </section>
  )
}
