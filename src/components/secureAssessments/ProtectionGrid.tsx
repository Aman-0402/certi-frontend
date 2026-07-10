import { motion } from 'framer-motion'

const ITEMS = [
  {
    title: 'Fullscreen Protection',
    desc: 'Fullscreen activity is monitored during the certification assessment to help maintain exam focus.',
    icon: 'monitor',
  },
  {
    title: 'Tab Activity Monitoring',
    desc: 'Tab switching and examination-window activity can be detected during an active assessment.',
    icon: 'tab',
  },
  {
    title: 'Secure Exam Session',
    desc: 'Exam timing, answers, and assessment progress are maintained throughout the certification session.',
    icon: 'session',
  },
  {
    title: 'AI-Assisted Proctoring',
    desc: 'When enabled for an assessment, camera-based monitoring can support examination integrity.',
    icon: 'camera',
  },
] as const

function ProtectionIcon({ icon }: { icon: (typeof ITEMS)[number]['icon'] }) {
  const common = { className: 'h-7 w-7 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'monitor') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 19h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9.5" y="8" width="5" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10.3 8V6.6a1.7 1.7 0 0 1 3.4 0V8" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }
  if (icon === 'tab') {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="14" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 9h17" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 14l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'session') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 9v3.5l2.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="3" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 10l4-2.5v9L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="10" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function ProtectionGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 text-center sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
          Security Throughout the Assessment
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-navy/60">
          Multiple assessment controls work together to help maintain a secure and controlled
          certification environment.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col items-center rounded-[20px] border border-navy/10 bg-white p-6 text-center shadow-sm hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <ProtectionIcon icon={item.icon} />
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
