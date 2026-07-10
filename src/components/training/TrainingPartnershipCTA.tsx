import { Link } from 'wouter'

function SkillsAroundCertificate() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-sm" aria-hidden>
      <g stroke="#5eead4" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.65">
        <path d="M160 110 L55 60" />
        <path d="M160 110 L265 60" />
        <path d="M160 110 L45 150" />
        <path d="M160 110 L275 150" />
        <path d="M160 110 L160 210" />
      </g>

      {/* certificate */}
      <rect x="138" y="90" width="44" height="40" rx="3" fill="#0a1128" stroke="#5eead4" strokeWidth="1.6" />
      <path d="M146 101h28M146 110h28M146 119h18" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="176" cy="122" r="6" fill="#0a1128" stroke="#5eead4" strokeWidth="1.3" />
      <path d="M173.5 122l1.7 1.7 3.3-3.3" stroke="#5eead4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* code */}
      <g>
        <circle cx="55" cy="60" r="18" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M50 55l-4 5 4 5M60 55l4 5-4 5" stroke="#7c9cff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* data */}
      <g>
        <circle cx="265" cy="60" r="18" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M258 66V56M265 66V52M272 66v-8" stroke="#7c9cff" strokeWidth="1.4" strokeLinecap="round" />
      </g>

      {/* AI */}
      <g>
        <circle cx="45" cy="150" r="18" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <circle cx="45" cy="150" r="3" fill="#7c9cff" />
        <circle cx="38" cy="144" r="2" fill="#7c9cff" />
        <circle cx="52" cy="144" r="2" fill="#7c9cff" />
        <circle cx="38" cy="156" r="2" fill="#7c9cff" />
        <circle cx="52" cy="156" r="2" fill="#7c9cff" />
        <path d="M45 150l-7-6M45 150l7-6M45 150l-7 6M45 150l7 6" stroke="#7c9cff" strokeWidth="1" />
      </g>

      {/* cloud */}
      <g>
        <circle cx="275" cy="150" r="18" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M267 155a5 5 0 0 1-.6-10 6.2 6.2 0 0 1 11.9-2.2 5.4 5.4 0 0 1 1.7 10.2z" stroke="#7c9cff" strokeWidth="1.2" strokeLinejoin="round" />
      </g>

      {/* cybersecurity */}
      <g>
        <circle cx="160" cy="210" r="18" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.4" />
        <path d="M160 202l7 3v5c0 4-3 6.5-7 8-4-1.5-7-4-7-8v-5l7-3z" stroke="#7c9cff" strokeWidth="1.2" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default function TrainingPartnershipCTA() {
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
            Give Your Learners More Ways to Prove Their Skills
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">
            Become a CertiByt certification partner and connect your learners with secure
            professional assessments and verifiable digital credentials.
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
            Skill Development &middot; Technical Training &middot; Professional Learning
          </p>
        </div>

        <SkillsAroundCertificate />
      </div>
    </section>
  )
}
