import { motion } from 'framer-motion'

const ITEMS = [
  {
    title: 'Secure Assessment',
    desc: 'Complete your certification exam through a security-focused assessment environment.',
    icon: 'shield',
  },
  {
    title: 'Skill Validation',
    desc: 'Demonstrate your knowledge through structured professional assessments.',
    icon: 'check',
  },
  {
    title: 'Digital Credential',
    desc: 'Receive a professional digital certificate after successfully meeting certification requirements.',
    icon: 'certificate',
  },
  {
    title: 'Public Verification',
    desc: 'Allow employers and institutions to independently verify your credential.',
    icon: 'globe',
  },
] as const

function TrustIcon({ icon }: { icon: (typeof ITEMS)[number]['icon'] }) {
  const common = { className: 'h-7 w-7 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'check') {
    return (
      <svg {...common}>
        <path d="M4 19V13M9.5 19V9M15 19v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 12l5.5-4.5L15 10.5l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'certificate') {
    return (
      <svg {...common}>
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function TrustGrid() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-6 py-20 text-center sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
          Certifications Built Around Trust and Skill Validation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-navy/60">
          CertiByt combines secure assessments with digitally verifiable credentials to help
          candidates demonstrate their professional knowledge with confidence.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col items-center rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <TrustIcon icon={item.icon} />
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
