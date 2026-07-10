import { Link } from 'wouter'

function ConvergingPaths() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-sm" aria-hidden>
      <g stroke="#5eead4" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.65">
        <path d="M55 65 Q120 100 160 130" />
        <path d="M265 65 Q200 100 160 130" />
        <path d="M160 220 Q160 175 160 130" />
      </g>

      <circle cx="160" cy="130" r="42" fill="rgba(94,234,212,0.1)" stroke="#5eead4" strokeWidth="1.5" />
      <rect x="139" y="111" width="42" height="38" rx="3" fill="#0a1128" stroke="#5eead4" strokeWidth="1.5" />
      <path d="M147 121h26M147 130h26M147 139h16" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="176" cy="141" r="6.5" fill="#0a1128" stroke="#5eead4" strokeWidth="1.3" />
      <path d="M173 141l1.8 1.8 3.5-3.5" stroke="#5eead4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

      <g>
        <circle cx="55" cy="65" r="24" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M44 72V58l11-5 11 5v14" stroke="#7c9cff" strokeWidth="1.3" strokeLinejoin="round" />
      </g>

      <g>
        <circle cx="265" cy="65" r="24" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <rect x="254" y="56" width="22" height="13" rx="1.5" stroke="#7c9cff" strokeWidth="1.2" />
        <path d="M252 74h26" stroke="#7c9cff" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      <g>
        <circle cx="160" cy="220" r="24" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <rect x="149" y="209" width="10" height="22" stroke="#7c9cff" strokeWidth="1.2" />
        <rect x="161" y="203" width="10" height="28" stroke="#7c9cff" strokeWidth="1.2" />
      </g>
    </svg>
  )
}

export default function PartnerFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-royal-700">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-royal/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            BUILD WITH CERTIBYT
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Let's Create Trusted Certification Opportunities Together
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">
            Connect your organization with CertiByt and provide candidates access to secure
            assessments and verifiable professional credentials.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#enquiry-form"
              className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-royal shadow-glow transition-colors hover:bg-white/90"
            >
              Start Partnership Enquiry
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-cyan-glow hover:text-cyan-glow"
            >
              Contact CertiByt
            </Link>
          </div>
        </div>

        <ConvergingPaths />
      </div>
    </section>
  )
}
