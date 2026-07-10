import { motion } from 'framer-motion'

const ITEMS = [
  {
    title: 'Multi-Domain Certifications',
    desc: 'Connect learners with professional certifications across programming, data, AI, cloud, cybersecurity, and other skill domains.',
    icon: 'stack',
  },
  {
    title: 'Secure Assessment Delivery',
    desc: 'Certification exams are delivered through a security-focused assessment environment.',
    icon: 'shield',
  },
  {
    title: 'Voucher-Based Candidate Access',
    desc: 'Provide selected learners with controlled certification access through vouchers.',
    icon: 'voucher',
  },
  {
    title: 'Verifiable Digital Certificates',
    desc: 'Successful candidates can receive professional digital credentials that can be independently verified online.',
    icon: 'certificate',
  },
] as const

function BenefitIcon({ icon }: { icon: (typeof ITEMS)[number]['icon'] }) {
  const common = { className: 'h-7 w-7 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'stack') {
    return (
      <svg {...common}>
        <path d="M12 4l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 12l8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
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

export default function WhyTrainingInstitutes() {
  return (
    <section className="bg-royal/5">
      <div className="mx-auto max-w-[1600px] px-6 py-20 text-center sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
          Add Certification Opportunities to Your Training Ecosystem
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col items-center rounded-[20px] border border-navy/10 bg-white p-6 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
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
