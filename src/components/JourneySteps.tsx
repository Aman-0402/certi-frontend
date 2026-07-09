type Step = {
  number: string
  title: string
  desc: string
  icon: 'choose' | 'assess' | 'prove' | 'earn'
}

const STEPS: Step[] = [
  { number: '01', title: 'Choose Certification', desc: 'Explore professional certification programs that align with your career goals.', icon: 'choose' },
  { number: '02', title: 'Take Secure Assessment', desc: 'Attempt the exam in a secure and AI-monitored environment.', icon: 'assess' },
  { number: '03', title: 'Prove Your Skills', desc: 'Your performance is evaluated against industry standards.', icon: 'prove' },
  { number: '04', title: 'Earn Your Certificate', desc: 'Receive a digitally verifiable certificate that showcases your achievement.', icon: 'earn' },
]

function StepIcon({ icon }: { icon: Step['icon'] }) {
  const common = { className: 'h-9 w-9 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const

  if (icon === 'choose') {
    return (
      <svg {...common}>
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h5M8 11.5h8M8 15h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'assess') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="9.5" y="11" width="5" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.3 11V9.6a1.7 1.7 0 0 1 3.4 0V11" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }
  if (icon === 'prove') {
    return (
      <svg {...common}>
        <path d="M4 19V13M9.5 19V9M15 19v-6M20 19V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 12l5.5-4.5L15 10.5l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="6" y="3.5" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 7.5h6M9 10.5h6M9 13.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="17" cy="18" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M15.6 18l1 1 1.8-1.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function JourneySteps() {
  return (
    <section className="border-t border-navy/10 bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-16">
        <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
          Your Journey to a Verified Credential
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-start">
              {i < STEPS.length - 1 && (
                <svg
                  className="absolute -right-3 top-11 hidden h-4 w-8 text-royal/40 lg:block"
                  viewBox="0 0 32 16"
                  fill="none"
                  aria-hidden
                >
                  <path d="M0 8h26M20 2l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-royal/10">
                <StepIcon icon={step.icon} />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm font-bold text-royal">{step.number}</span>
                <h3 className="text-base font-bold text-navy">{step.title}</h3>
              </div>

              <p className="mt-2 text-sm text-navy/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
