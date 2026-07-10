import { Link } from 'wouter'

function CredentialNetwork() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-sm" aria-hidden>
      {/* faint building silhouette, far background */}
      <path
        d="M20 230 L20 170 L60 170 L60 140 L90 140 L90 170 L130 170 L130 110 L170 110 L170 170 L210 170 L210 150 L250 150 L250 170 L290 170 L290 230 Z"
        fill="rgba(255,255,255,0.03)"
        stroke="#3a4a7a"
        strokeWidth="1"
      />

      <g stroke="#5eead4" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.6">
        <path d="M160 110 L70 70" />
        <path d="M160 110 L250 70" />
        <path d="M160 110 L160 190" />
      </g>

      {/* certificate */}
      <rect x="138" y="90" width="44" height="40" rx="3" fill="#0a1128" stroke="#5eead4" strokeWidth="1.6" />
      <path d="M146 101h28M146 110h28M146 119h18" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="176" cy="122" r="6" fill="#0a1128" stroke="#5eead4" strokeWidth="1.3" />
      <path d="M173.5 122l1.7 1.7 3.3-3.3" stroke="#5eead4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* profile node 1 - Verified */}
      <g>
        <circle cx="70" cy="70" r="18" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <circle cx="70" cy="65" r="5" stroke="#7c9cff" strokeWidth="1.3" />
        <path d="M62 78c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke="#7c9cff" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="80" cy="58" r="6" fill="#0a1128" stroke="#5eead4" strokeWidth="1.1" />
        <path d="M77.5 58l1.7 1.7 3.3-3.3" stroke="#5eead4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* profile node 2 - Certified */}
      <g>
        <circle cx="250" cy="70" r="18" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <circle cx="250" cy="65" r="5" stroke="#7c9cff" strokeWidth="1.3" />
        <path d="M242 78c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke="#7c9cff" strokeWidth="1.3" strokeLinecap="round" />
        <rect x="258" y="52" width="10" height="8" rx="1.5" fill="#0a1128" stroke="#5eead4" strokeWidth="1" />
      </g>

      {/* profile node 3 - Skill Validated */}
      <g>
        <circle cx="160" cy="190" r="18" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <circle cx="160" cy="185" r="5" stroke="#7c9cff" strokeWidth="1.3" />
        <path d="M152 198c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke="#7c9cff" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M167 178l2 2 4-4" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default function CorporatePartnershipCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-royal-700">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-royal/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            CORPORATE CERTIFICATION PARTNERSHIP
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Build a Workforce With Skills That Can Be Verified
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">
            Partner with CertiByt to connect your teams with secure professional assessments and
            digitally verifiable certification opportunities.
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
            Technology Teams &middot; Professional Departments &middot; Workforce Development
          </p>
        </div>

        <CredentialNetwork />
      </div>
    </section>
  )
}
