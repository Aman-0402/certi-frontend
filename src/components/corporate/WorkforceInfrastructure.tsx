import { motion } from 'framer-motion'

const ITEMS = [
  {
    title: 'Team Certification Access',
    desc: 'Provide selected employees and professional teams access to relevant certification programs.',
    icon: 'team',
  },
  {
    title: 'Secure Skill Assessments',
    desc: 'Validate professional knowledge through security-focused online certification assessments.',
    icon: 'shield',
  },
  {
    title: 'Controlled Voucher Distribution',
    desc: 'Manage certification access through organization-specific voucher allocation.',
    icon: 'voucher',
  },
  {
    title: 'Verifiable Professional Credentials',
    desc: 'Successful candidates can receive digital certificates that employers and institutions can independently verify.',
    icon: 'certificate',
  },
] as const

function BenefitIcon({ icon }: { icon: (typeof ITEMS)[number]['icon'] }) {
  const common = { className: 'h-7 w-7 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'team') {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.5" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 20c.8-3.2 3-5 5.5-5s4.7 1.8 5.5 5M15.5 20c.4-2.3 1.6-3.8 3.5-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 11.5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.8 16l.9.9 1.7-1.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function WorkforceInfrastructure() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-6 py-20 text-center sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
          Certification Infrastructure for Modern Organizations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-navy/60">
          Support professional skill validation across employees, departments, and teams through
          one secure certification ecosystem.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center rounded-[20px] border border-navy/10 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-[0_0_24px_0_rgba(34,85,255,0.12)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal/10">
                <BenefitIcon icon={item.icon} />
              </div>
              <p className="mt-4 text-base font-bold text-navy">{item.title}</p>
              <p className="mt-2 text-sm text-navy/55">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
