import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Partner With CertiByt',
    desc: 'Your university or college joins the CertiByt certification ecosystem.',
    icon: 'building',
  },
  {
    number: '02',
    title: 'Provide Certification Access',
    desc: 'Certification vouchers are provided for selected certification programs.',
    icon: 'voucher',
  },
  {
    number: '03',
    title: 'Students Take Secure Assessments',
    desc: "Students complete their certification exams through CertiByt's secure assessment environment.",
    icon: 'laptop',
  },
  {
    number: '04',
    title: 'Students Earn Verifiable Credentials',
    desc: 'Successful candidates receive digitally verifiable CertiByt certificates when the selected certification is configured to issue a certificate.',
    icon: 'certificate',
  },
] as const

function StepIcon({ icon }: { icon: (typeof STEPS)[number]['icon'] }) {
  const common = { className: 'h-7 w-7 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'building') {
    return (
      <svg {...common}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
        <path d="M2.5 19h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="10" r="3" fill="white" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10.7 10l.9.9 1.7-1.9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 11.5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="16" r="2.6" fill="white" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.6 16l1 1 1.8-1.8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Connector({ delay }: { delay: number }) {
  return (
    <div
      aria-hidden
      className="absolute left-[calc(50%+2.75rem)] right-[calc(-50%+2.75rem)] top-[60px] hidden h-1 overflow-visible lg:block"
    >
      <div className="h-full w-full rounded-full bg-navy/10" />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        className="absolute inset-0 h-full rounded-full bg-gradient-to-r from-royal to-cyan-glow shadow-[0_0_8px_1px_rgba(34,85,255,0.5)]"
      />
      <motion.div
        aria-hidden
        className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-glow shadow-[0_0_12px_3px_rgba(94,234,212,0.8)]"
        animate={{ left: ['0%', '94%'] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: delay + 0.7 }}
      />
    </div>
  )
}

export default function CollaborationProcess() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            HOW PARTNERSHIP WORKS
          </span>
          <h2 className="mt-5 text-2xl font-bold text-navy sm:text-3xl">
            A Simple <span className="text-royal">Certification Collaboration</span> Model
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/60">
            CertiByt provides the certification infrastructure while your institution connects
            students with professional certification opportunities.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative flex"
            >
              {i < STEPS.length - 1 && <Connector delay={i * 0.15} />}

              {/* mobile/tablet vertical connector */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-9 top-[5.5rem] h-[calc(100%+2.5rem)] w-[3px] bg-gradient-to-b from-royal to-cyan-glow/60 sm:hidden"
                />
              )}

              <div className="relative flex w-full flex-col items-start rounded-[22px] border border-navy/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-royal/40 group-hover:shadow-[0_12px_32px_-8px_rgba(34,85,255,0.25)]">
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-cyan-glow/30 blur-lg transition-opacity duration-300 group-hover:opacity-100 opacity-60"
                  />
                  <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-[0_0_0_1px_rgba(34,85,255,0.08),0_8px_20px_-6px_rgba(34,85,255,0.25)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <StepIcon icon={step.icon} />
                  </div>
                </div>

                <span className="mt-5 text-xs font-bold tracking-wide text-royal">STEP {step.number}</span>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-navy/60">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
