import { motion } from 'framer-motion'

const ITEMS = [
  {
    step: '01 ACCESS',
    title: 'Certification Access',
    desc: 'Provide students access to professional certifications across multiple skill domains.',
    icon: 'access',
  },
  {
    step: '02 ASSESS',
    title: 'Secure Assessments',
    desc: 'Deliver certification exams through a security-focused assessment environment.',
    icon: 'assess',
  },
  {
    step: '03 DISTRIBUTE',
    title: 'Voucher-Based Distribution',
    desc: 'Manage and distribute certification access to selected students through vouchers.',
    icon: 'voucher',
  },
  {
    step: '04 VERIFY',
    title: 'Verifiable Certificates',
    desc: 'Successful candidates can receive digital credentials that can be independently verified online.',
    icon: 'verify',
  },
] as const

function NodeIcon({ icon }: { icon: (typeof ITEMS)[number]['icon'] }) {
  const common = { className: 'h-8 w-8 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'access') {
    return (
      <svg {...common}>
        <path d="M7 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7 21h10M15 12h2M4 21h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'assess') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 19h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="10" r="3" fill="white" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10.7 10l.9.9 1.7-1.9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
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
  return (
    <svg {...common}>
      <rect x="6" y="3.5" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 8h6M9 11h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="18.5" r="3.3" fill="white" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.6 18.5l1 1 1.8-1.8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Connector({ delay }: { delay: number }) {
  return (
    <div
      aria-hidden
      className="absolute left-[calc(50%+3.25rem)] right-[calc(-50%+3.25rem)] top-[52px] hidden h-1 overflow-visible lg:block"
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
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: delay + 0.8 }}
      />
    </div>
  )
}

export default function WhyCertiByt() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8ff] py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 text-center sm:px-10 lg:px-16">
        <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
          CERTIFICATION INFRASTRUCTURE
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
          Built for <span className="text-royal">Institutional Certification</span> Delivery
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-navy/55">
          CertiByt provides the infrastructure institutions need to deliver professional
          certification opportunities.
        </p>

        <div className="relative mt-12 overflow-hidden rounded-[32px] border border-royal/10 bg-white/60 p-8 shadow-[0_20px_50px_-20px_rgba(34,85,255,0.15)] backdrop-blur-sm sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(#2255ff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.05,
            }}
          />

          <div className="relative grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-6">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15, type: 'spring', stiffness: 120, damping: 14 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-center text-center"
              >
                {i < ITEMS.length - 1 && <Connector delay={i * 0.15} />}

                {i < ITEMS.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-[46px] top-[104px] h-[calc(100%+2.5rem)] w-[3px] bg-gradient-to-b from-royal to-cyan-glow/60 sm:hidden"
                  />
                )}

                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-royal/70">{item.step}</span>

                <div className="relative mt-4">
                  <div
                    aria-hidden
                    className="absolute inset-0 scale-125 rounded-full bg-royal/10 blur-md transition-transform duration-300 group-hover:scale-150"
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-2 rounded-full border border-royal/15 transition-all duration-300 group-hover:-inset-3 group-hover:border-cyan-glow/40"
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-4 rounded-full border border-royal/10 transition-all duration-300 group-hover:-inset-5"
                  />
                  <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/70 bg-white/90 shadow-[0_8px_24px_-8px_rgba(34,85,255,0.3)] backdrop-blur-md transition-shadow duration-300 group-hover:shadow-[0_10px_32px_-6px_rgba(34,85,255,0.45)]">
                    <NodeIcon icon={item.icon} />
                  </div>
                </div>

                <h3 className="mt-5 text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm text-navy/55">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
