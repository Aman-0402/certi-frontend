import { Link } from 'wouter'
import { motion } from 'framer-motion'

const AUDIENCES = [
  {
    title: 'For Individuals',
    desc: 'Explore professional certifications, complete secure assessments, and earn digitally verifiable credentials.',
    link: 'Explore Certifications',
    href: '/certifications',
    icon: 'individual',
  },
  {
    title: 'For Institutions',
    desc: 'Connect students and learners with professional certification opportunities across relevant skill domains.',
    link: 'For Organizations',
    href: '/organizations',
    icon: 'institution',
  },
  {
    title: 'For Corporate Teams',
    desc: 'Support professional skill validation and certification opportunities across employees and teams.',
    link: 'Corporate Certifications',
    href: '/organizations/corporate',
    icon: 'corporate',
  },
] as const

function AudienceIcon({ icon }: { icon: (typeof AUDIENCES)[number]['icon'] }) {
  const common = { className: 'h-8 w-8 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'individual') {
    return (
      <svg {...common}>
        <circle cx="10" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 20c1-4.5 3.8-7 6-7s5 2.5 6 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="18" cy="17" r="4.2" fill="#fff" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16.3 17l1.1 1.1 2.1-2.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'institution') {
    return (
      <svg {...common}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="3.5" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="20.5" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
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

export default function WhatWereBuilding() {
  return (
    <section className="bg-royal/5">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">One Certification Ecosystem. Multiple Opportunities.</h2>
          <p className="mt-4 text-navy/60">
            CertiByt brings candidates and organizations together through a unified digital
            certification ecosystem.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <motion.div
              key={a.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col rounded-[24px] border border-navy/10 bg-white p-8 shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-royal/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <AudienceIcon icon={a.icon} />
              </div>
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
