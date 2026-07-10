import { Link } from 'wouter'
import { motion } from 'framer-motion'

const AUDIENCES = [
  {
    title: 'Universities & Colleges',
    desc: 'Connect students with professional certification opportunities across relevant skill domains.',
    link: 'For Universities & Colleges',
    href: '/organizations/universities',
    icon: 'academic',
  },
  {
    title: 'Training Institutes',
    desc: 'Extend your training ecosystem with secure certification assessments and verifiable credentials.',
    link: 'For Training Institutes',
    href: '/organizations/training-institutes',
    icon: 'institute',
  },
  {
    title: 'Corporate Organizations',
    desc: 'Validate professional knowledge and provide certification opportunities across employees and teams.',
    link: 'For Corporate Organizations',
    href: '/organizations/corporate',
    icon: 'corporate',
  },
] as const

function AudienceIcon({ icon }: { icon: (typeof AUDIENCES)[number]['icon'] }) {
  const common = { className: 'h-8 w-8 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'academic') {
    return (
      <svg {...common}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5M21 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'institute') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 19h19M9 9l1.6 1.6L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="4" y="7" width="7" height="14" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="3" width="7" height="18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export default function WhoCanPartner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Built for Organizations That Develop and Validate Skills</h2>
          <p className="mt-4 text-navy/60">
            CertiByt collaborates with organizations looking to provide professional
            certification opportunities to their students, learners, and teams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <motion.div
              key={a.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-[0_0_28px_0_rgba(34,85,255,0.14)]"
            >
              <motion.div
                whileHover={{ rotate: 6 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-royal/10"
              >
                <AudienceIcon icon={a.icon} />
              </motion.div>
              <h3 className="mt-6 text-lg font-bold text-navy">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm text-navy/60">{a.desc}</p>
              <Link href={a.href} className="mt-6 text-sm font-semibold text-royal hover:text-royal-600">
                {a.link} &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
