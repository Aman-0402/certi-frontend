const STEPS = [
  {
    number: '01',
    title: 'Secure Exam Access',
    desc: 'Candidates enter the assessment using valid certification access.',
  },
  {
    number: '02',
    title: 'Assessment Controls Activate',
    desc: 'Configured exam security and monitoring controls begin with the assessment session.',
  },
  {
    number: '03',
    title: 'Activity & Progress Are Maintained',
    desc: 'Exam activity, timing, and answers are handled throughout the active assessment.',
  },
  {
    number: '04',
    title: 'Secure Submission',
    desc: 'The completed assessment is submitted for result evaluation and certification processing.',
  },
] as const

const FLOW_NODES = [
  { label: 'Access Credential', icon: 'credential' },
  { label: 'Locked Exam', icon: 'laptop' },
  { label: 'Security Shield', icon: 'shield' },
  { label: 'Verified Submission', icon: 'certificate' },
] as const

function FlowIcon({ icon }: { icon: (typeof FLOW_NODES)[number]['icon'] }) {
  const common = { className: 'h-6 w-6 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'credential') {
    return (
      <svg {...common}>
        <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6.5 16c.6-1.6 1.6-2.3 2.5-2.3s1.9.7 2.5 2.3M14 10h4M14 13h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'laptop') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 19h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9.5" y="8" width="5" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10.3 8V6.6a1.7 1.7 0 0 1 3.4 0V8" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }
  if (icon === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function AssessmentJourney() {
  return (
    <section className="bg-royal/5">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Protection From Exam Start to Submission</h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
          {FLOW_NODES.map((node, i) => (
            <div key={node.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-royal/10">
                  <FlowIcon icon={node.icon} />
                </div>
                <span className="text-xs font-semibold text-navy/70">{node.label}</span>
              </div>
              {i < FLOW_NODES.length - 1 && (
                <svg className="h-4 w-6 text-royal/40" viewBox="0 0 24 16" fill="none">
                  <path d="M0 8h18M13 3l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < STEPS.length - 1 && (
                <svg className="absolute -right-4 top-6 hidden h-4 w-8 text-royal/40 lg:block" viewBox="0 0 32 16" fill="none" aria-hidden>
                  <path d="M0 8h26M20 2l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <span className="text-sm font-bold text-royal">{step.number}</span>
              <h3 className="mt-2 text-base font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-navy/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
