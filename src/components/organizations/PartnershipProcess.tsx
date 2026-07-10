const STEPS = [
  {
    number: '01',
    title: 'Partner With CertiByt',
    desc: 'Register your organization and begin the certification collaboration process.',
  },
  {
    number: '02',
    title: 'Provide Candidate Access',
    desc: "Receive certification vouchers and provide exam access to your selected candidates.",
  },
  {
    number: '03',
    title: 'Candidates Take Secure Assessments',
    desc: "Candidates complete certification exams through CertiByt's secure assessment environment.",
  },
  {
    number: '04',
    title: 'Candidates Earn Verifiable Credentials',
    desc: 'Successful candidates receive eligible digital certificates that can be publicly verified.',
  },
] as const

const FLOW_NODES = [
  { label: 'Organization', icon: 'org' },
  { label: 'Candidates', icon: 'candidates' },
  { label: 'Secure Assessment', icon: 'assessment' },
  { label: 'Certificate', icon: 'certificate' },
] as const

function FlowIcon({ icon }: { icon: (typeof FLOW_NODES)[number]['icon'] }) {
  const common = { className: 'h-6 w-6 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'org') {
    return (
      <svg {...common}>
        <rect x="4" y="7" width="7" height="14" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="3" width="7" height="18" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (icon === 'candidates') {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 20c.8-3.2 3-5 5.5-5s4.7 1.8 5.5 5M15 20c.4-2.3 1.6-3.8 3.5-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'assessment') {
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

export default function PartnershipProcess() {
  return (
    <section className="bg-royal/5">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">A Simple Certification Collaboration Model</h2>
          <p className="mt-4 text-navy/60">
            CertiByt provides the certification infrastructure while your organization connects
            candidates with certification opportunities.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
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
