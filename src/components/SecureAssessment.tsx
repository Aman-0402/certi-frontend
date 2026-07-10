import assessmentImg from '../assets/secure-assessment.webp'

const PROCTORING_FEATURES = [
  { title: 'AI-Assisted Proctoring', desc: 'Detect suspicious behavior in real-time', icon: 'ai' },
  { title: 'Fullscreen Protection', desc: 'Prevent tab-switching and screen exit', icon: 'fullscreen' },
  { title: 'Tab Activity Monitoring', desc: 'Detect unauthorized navigation', icon: 'activity' },
  { title: 'Auto-Saved Answers', desc: 'Your progress is saved automatically', icon: 'save' },
] as const

function ProctoringIcon({ icon }: { icon: (typeof PROCTORING_FEATURES)[number]['icon'] }) {
  const common = { className: 'h-5 w-5 text-cyan-glow', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'ai') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'fullscreen') {
    return (
      <svg {...common}>
        <path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'activity') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="12" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 12l2.5 2.5L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SecureAssessment() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        src={assessmentImg}
        alt="Secure online exam in a modern workspace"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/10 sm:via-navy/60 sm:to-transparent" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Certification Integrity Starts With Secure Assessment
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/60">
            Our advanced proctoring and monitoring systems ensure a fair, secure and trustworthy
            examination experience for every candidate.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            {PROCTORING_FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  <ProctoringIcon icon={f.icon} />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{f.title}</p>
                  <p className="text-sm text-white/50">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
