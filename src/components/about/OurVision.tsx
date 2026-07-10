const PRINCIPLES = ['Secure Assessment', 'Trusted Credentials', 'Public Verification']

function VisionIllustration() {
  return (
    <svg viewBox="0 0 320 260" fill="none" className="mx-auto w-full max-w-sm" aria-hidden>
      <g stroke="#5eead4" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.6">
        <path d="M160 110 L70 60" />
        <path d="M160 110 L250 60" />
        <path d="M160 110 L60 170" />
        <path d="M160 110 L260 170" />
        <path d="M160 110 L160 220" />
      </g>

      <rect x="138" y="90" width="44" height="40" rx="3" fill="#0a1128" stroke="#5eead4" strokeWidth="1.6" />
      <path d="M146 101h28M146 110h28M146 119h18" stroke="#5eead4" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="176" cy="122" r="6.5" fill="#0a1128" stroke="#5eead4" strokeWidth="1.3" />
      <path d="M173 122l1.8 1.8 3.5-3.5" stroke="#5eead4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

      {[
        [70, 60],
        [250, 60],
        [60, 170],
        [260, 170],
        [160, 220],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="12" fill="rgba(255,255,255,0.06)" stroke="#7c9cff" strokeWidth="1.3" />
      ))}
    </svg>
  )
}

export default function OurVision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-royal-700">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-royal/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            OUR VISION
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            A Connected World of Trusted Digital Credentials
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">
            Our vision is to build a certification ecosystem where individuals can prove their
            professional knowledge and organizations can provide trusted certification
            opportunities through secure digital infrastructure.
          </p>
          <p className="mt-4 max-w-lg text-white/50">
            We believe credentials should be easy to access, difficult to misuse, and simple for
            anyone to verify.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {PRINCIPLES.map((p) => (
              <span key={p} className="flex items-center gap-2 text-sm font-medium text-white/70">
                <svg className="h-4 w-4 text-cyan-glow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </span>
            ))}
          </div>
        </div>

        <VisionIllustration />
      </div>
    </section>
  )
}
