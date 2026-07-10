import { Link } from 'wouter'

function ShieldedExamScreen() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-sm" aria-hidden>
      {/* faint certificate outline behind */}
      <rect x="90" y="40" width="140" height="110" rx="4" stroke="#3a4a7a" strokeWidth="1" opacity="0.5" />
      <path d="M108 62h100M108 78h100M108 94h70" stroke="#3a4a7a" strokeWidth="1" opacity="0.4" />

      {/* exam screen */}
      <rect x="70" y="90" width="120" height="80" rx="4" fill="#0a1128" stroke="#7c9cff" strokeWidth="1.5" />
      <path d="M70 105h120" stroke="#7c9cff" strokeWidth="1" opacity="0.6" />
      <circle cx="80" cy="97.5" r="2" fill="#7c9cff" />
      <circle cx="87" cy="97.5" r="2" fill="#7c9cff" />
      <rect x="82" y="115" width="70" height="6" rx="2" fill="rgba(124,156,255,0.3)" />
      <rect x="82" y="127" width="90" height="6" rx="2" fill="rgba(124,156,255,0.2)" />
      <rect x="82" y="139" width="50" height="6" rx="2" fill="rgba(124,156,255,0.2)" />

      {/* transparent shield over screen */}
      <path
        d="M160 60l38 16v34c0 24-16 40-38 48-22-8-38-24-38-48V76l38-16z"
        fill="rgba(94,234,212,0.06)"
        stroke="#5eead4"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M148 128l9 9 17-17" stroke="#5eead4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SecureAssessmentsFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-royal-700">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-royal/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            TRUSTED ASSESSMENT EXPERIENCE
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Secure Assessments. Trusted Certification Outcomes.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">
            CertiByt combines certification delivery with security-focused assessment controls
            to support trusted skill validation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/certifications"
              className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-royal shadow-glow transition-colors hover:bg-white/90"
            >
              Explore Certifications
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-cyan-glow hover:text-cyan-glow"
            >
              How It Works
            </Link>
          </div>
        </div>

        <ShieldedExamScreen />
      </div>
    </section>
  )
}
