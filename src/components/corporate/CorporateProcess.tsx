const STEPS = [
  {
    number: '01',
    title: 'Select Certifications',
    desc: 'Choose certification programs aligned with the skills and domains relevant to your teams.',
  },
  {
    number: '02',
    title: 'Provide Team Access',
    desc: 'Distribute certification access to selected employees through controlled certification vouchers.',
  },
  {
    number: '03',
    title: 'Employees Complete Secure Assessments',
    desc: "Team members complete their certification exams through CertiByt's security-focused assessment environment.",
  },
  {
    number: '04',
    title: 'Recognize Verified Skills',
    desc: 'Successful candidates can receive digitally verifiable professional credentials.',
  },
] as const

const FLOW_NODES = [
  { label: 'Corporate Team', icon: 'org' },
  { label: 'Certification Access', icon: 'voucher' },
  { label: 'Secure Assessment', icon: 'laptop' },
  { label: 'Verified Certificate', icon: 'certificate' },
] as const

function FlowIcon({ icon }: { icon: (typeof FLOW_NODES)[number]['icon'] }) {
  const common = { className: 'h-6 w-6 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'org') {
    return (
      <svg {...common}>
        <rect x="4" y="7" width="7" height="14" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="3" width="7" height="18" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.5 11h2M6.5 15h2M15.5 7h2M15.5 11h2M15.5 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'voucher') {
    return (
      <svg {...common}>
        <rect x="3.5" y="7" width="17" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 7v10" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
        <circle cx="14.5" cy="12" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    )
  }
  if (icon === 'laptop') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 19h19M9 9l1.6 1.6L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

export default function CorporateProcess() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">A Simple Way to Validate Professional Skills</h2>
          <p className="mt-4 text-navy/60">
            CertiByt provides the assessment and credential infrastructure your organization
            needs to connect teams with professional certification opportunities.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-navy/10 bg-royal/5 p-6">
          {FLOW_NODES.map((node, i) => (
            <div key={node.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 hover:scale-110 hover:rotate-6">
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
