import { useState } from 'react'
import { motion } from 'framer-motion'
import EnquiryForm from './EnquiryForm'

const AUDIENCES = [
  {
    icon: 'university',
    title: 'Universities & Colleges',
    tag: 'Student Certification Programs',
  },
  {
    icon: 'institute',
    title: 'Training Institutes',
    tag: 'Transform Training into Verified Credentials',
  },
  {
    icon: 'enterprise',
    title: 'Corporate Organizations',
    tag: 'Validate Employee Skills',
  },
] as const

function AudienceIcon({ icon, className = 'h-6 w-6' }: { icon: string; className?: string }) {
  const common = { className: `${className} text-royal`, viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'university') {
    return (
      <svg {...common}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'institute') {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 20c1.3-4.2 4-6.5 7.5-6.5s6.2 2.3 7.5 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 8.3l2 2 3.5-3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'enterprise') {
    return (
      <svg {...common}>
        <rect x="4" y="7" width="7" height="14" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="3" width="7" height="18" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.5 11h2M6.5 15h2M15.5 7h2M15.5 11h2M15.5 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20c1-4.5 3.8-7 8-7s7 2.5 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function AudienceCards({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div className="mt-10 flex flex-col gap-4">
      {AUDIENCES.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -3 }}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
          tabIndex={0}
          className={`group relative flex cursor-default items-center gap-4 overflow-hidden rounded-[20px] border-l-4 bg-white/70 p-5 shadow-[0_16px_36px_-20px_rgba(34,85,255,0.22)] backdrop-blur-xl transition-all duration-300 ${
            active === i ? 'border-l-royal shadow-[0_20px_45px_-16px_rgba(34,85,255,0.35)]' : 'border-l-royal/20'
          }`}
        >
          <motion.span
            animate={{ rotate: active === i ? -6 : 0, scale: active === i ? 1.08 : 1 }}
            transition={{ duration: 0.3 }}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
              active === i ? 'bg-royal/20 shadow-[0_0_16px_2px_rgba(34,85,255,0.3)]' : 'bg-royal/10'
            }`}
          >
            <AudienceIcon icon={a.icon} />
          </motion.span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-navy">{a.title}</h3>
            <p className="mt-0.5 truncate text-xs text-navy/55">{a.tag}</p>
          </div>
          <motion.svg
            animate={{ x: active === i ? 3 : 0, opacity: active === i ? 1 : 0.4 }}
            transition={{ duration: 0.3 }}
            className="h-4 w-4 shrink-0 text-royal"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>
      ))}
    </div>
  )
}

export default function PartnershipGateway() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          color: '#0a1128',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-royal/[0.06] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-cyan-glow/[0.08] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-14 px-6 sm:px-10 lg:grid-cols-[40%_60%] lg:gap-10 lg:px-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal"
          >
            LET'S COLLABORATE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-bold leading-tight text-navy sm:text-4xl"
          >
            Start Your{' '}
            <span className="bg-gradient-to-r from-royal to-cyan-glow bg-clip-text text-transparent">
              Certification Partnership
            </span>{' '}
            Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-navy/60"
          >
            Tell us about your organization and how you would like to provide certification
            opportunities to your candidates. Our partnership team will review your enquiry and
            connect with you.
          </motion.p>

          <AudienceCards active={active} setActive={setActive} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <EnquiryForm />
        </motion.div>
      </div>
    </section>
  )
}
