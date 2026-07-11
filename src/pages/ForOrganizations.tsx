import { Link } from 'wouter'
import { motion } from 'framer-motion'

const ORG_TYPES = [
  {
    title: 'Universities & Colleges',
    desc: 'Collaborate with CertiByt to provide your students access to secure professional assessments and digitally verifiable certifications.',
    link: 'Explore for Universities',
    href: '/organizations/universities',
    icon: 'university',
  },
  {
    title: 'Training Institutes',
    desc: 'Extend your training programs with secure, verifiable professional certifications that add credibility to every course you deliver.',
    link: 'Explore for Training Institutes',
    href: '/organizations/training-institutes',
    icon: 'training',
  },
  {
    title: 'Corporate Organizations',
    desc: 'Support professional skill validation and certification opportunities across your employees and teams.',
    link: 'Explore for Corporate Teams',
    href: '/organizations/corporate',
    icon: 'corporate',
  },
] as const

function OrgIcon({ icon }: { icon: (typeof ORG_TYPES)[number]['icon'] }) {
  const common = { className: 'h-8 w-8 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'university') {
    return (
      <svg {...common}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="3.5" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="20.5" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    )
  }
  if (icon === 'training') {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 20c1.3-4.2 4-6.5 7.5-6.5s6.2 2.3 7.5 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 8.3l2 2 3.5-3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="4" y="7" width="7" height="14" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="3" width="7" height="18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="9" r="3.6" fill="#fff" stroke="currentColor" strokeWidth="1.3" />
      <path d="M15 9l1.2 1.2 2-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ForOrganizations() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
        <div className="relative mx-auto max-w-[1600px] px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
              FOR ORGANIZATIONS
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Bring{' '}
              <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">
                Certification Opportunities
              </span>{' '}
              to Your Community
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-navy/60">
              Whichever kind of organization you run, CertiByt gives you a secure certification
              infrastructure to extend to your students, trainees, or employees.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ORG_TYPES.map((org) => (
              <motion.div
                key={org.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col rounded-[24px] border border-navy/10 bg-white p-8 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-royal/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <OrgIcon icon={org.icon} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">{org.title}</h3>
                <p className="mt-3 flex-1 text-sm text-navy/60">{org.desc}</p>
                <Link href={org.href} className="mt-6 text-sm font-semibold text-royal hover:text-royal-600">
                  {org.link} &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy">
        <div className="relative mx-auto max-w-[1600px] px-6 py-16 text-center sm:px-10 lg:px-16">
          <h2 className="mx-auto max-w-xl text-2xl font-bold text-white sm:text-3xl">
            Ready to Become a Certification Partner?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Tell us about your organization and we&apos;ll help you get started with CertiByt.
          </p>
          <div className="mt-8">
            <Link
              href="/organizations/partner"
              className="inline-block rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-royal shadow-glow transition-colors hover:bg-white/90"
            >
              Become a Certification Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
