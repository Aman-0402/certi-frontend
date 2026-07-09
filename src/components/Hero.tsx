import heroImg from '../assets/Global network and digital certification 2.png'

const FEATURES = [
  { title: 'Secure Assessments', desc: 'AI-proctored & monitored', icon: 'shield' },
  { title: 'Public Verification', desc: 'Anyone, anywhere', icon: 'user' },
  { title: 'Digital Credentials', desc: 'Trusted & shareable', icon: 'badge' },
] as const

function FeatureIcon({ icon }: { icon: (typeof FEATURES)[number]['icon'] }) {
  const common = { className: 'h-6 w-6 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'user') {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 20c1.2-3.5 4-5.5 7-5.5s5.8 2 7 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9h6M9 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent sm:via-30% sm:to-60%"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-16 pt-28 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-[1.15] text-navy sm:text-5xl lg:text-6xl">
            Prove Your Skills.
            <br />
            Earn Credentials That <span className="text-royal">Travel With You.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-navy/60">
            Take secure professional assessments and earn digitally verifiable
            certificates built for a connected world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/certifications"
              className="rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Explore Certifications
            </a>
            <a
              href="/verify"
              className="rounded-lg border border-royal/40 bg-white/70 px-7 py-3.5 text-sm font-medium text-royal backdrop-blur-sm transition-colors hover:bg-royal/5"
            >
              Verify a Certificate
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <FeatureIcon icon={f.icon} />
                <div>
                  <p className="text-base font-semibold text-navy">{f.title}</p>
                  <p className="text-sm text-navy/50">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
