import { Link } from 'wouter'

function CertificateWithIdCard() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-sm" aria-hidden>
      <g stroke="#5eead4" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5">
        <path d="M60 60 L140 100" />
        <path d="M260 60 L180 100" />
        <path d="M60 200 L140 150" />
        <path d="M260 200 L180 150" />
      </g>
      {[
        [60, 60],
        [260, 60],
        [60, 200],
        [260, 200],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" fill="rgba(94,234,212,0.08)" stroke="#5eead4" strokeWidth="1.2" />
          <path
            d={`M${cx - 4} ${cy}l2.5 2.5L${cx + 4} ${cy - 4}`}
            stroke="#5eead4"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {/* certificate */}
      <rect x="120" y="70" width="80" height="90" rx="4" fill="#0a1128" stroke="#7c9cff" strokeWidth="1.6" />
      <path d="M132 88h56M132 98h56M132 108h36" stroke="#7c9cff" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="160" cy="135" r="14" fill="#0a1128" stroke="#5eead4" strokeWidth="1.6" />
      <path d="M154 135l4 4 8-8" stroke="#5eead4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* ID card beside it */}
      <rect x="205" y="140" width="56" height="36" rx="3" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.3" />
      <circle cx="217" cy="153" r="5" stroke="#7c9cff" strokeWidth="1.1" />
      <path d="M228 149h22M228 155h22M228 161h14" stroke="#7c9cff" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

export default function CredentialsFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-royal-700">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-royal/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            VERIFIABLE DIGITAL CREDENTIALS
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Earn a Credential That Can Be Verified
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">
            Explore professional certifications, demonstrate your knowledge through secure
            assessments, and earn an eligible CertiByt digital credential.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/certifications"
              className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-royal shadow-glow transition-colors hover:bg-white/90"
            >
              Explore Certifications
            </Link>
            <Link
              href="/verify"
              className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-cyan-glow hover:text-cyan-glow"
            >
              Verify a Certificate
            </Link>
          </div>
        </div>

        <CertificateWithIdCard />
      </div>
    </section>
  )
}
