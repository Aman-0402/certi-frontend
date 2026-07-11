import { useState } from 'react'
import { motion } from 'framer-motion'

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

const SOURCE_Y = [22, 50, 78]
const BADGES = ['Verified Credential', 'Secure Assessment', 'Digital Verification'] as const

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

function GatewayVisual({ active }: { active: number }) {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-xl sm:h-[420px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/[0.06] blur-3xl sm:h-[380px] sm:w-[380px]"
      />

      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-glow/50"
          style={{ left: `${14 + i * 13}%`, top: `${12 + ((i * 21) % 76)}%` }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="gw-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2255ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {SOURCE_Y.map((y, i) => (
          <motion.line
            key={i}
            x1={12}
            y1={y}
            x2={50}
            y2={50}
            stroke="url(#gw-line)"
            strokeWidth={active === i ? 0.6 : 0.35}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: active === i ? 1 : 0.55 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: 'easeInOut' }}
          />
        ))}
        <motion.line
          x1={50}
          y1={50}
          x2={88}
          y2={50}
          stroke="url(#gw-line)"
          strokeWidth={0.6}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}
        />

        {SOURCE_Y.map((y, i) => (
          <motion.circle
            key={`p-${i}`}
            r={0.7}
            fill="#5eead4"
            initial={{ cx: 12, cy: y, opacity: 0 }}
            animate={{ cx: [12, 50], cy: [y, 50], opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 1 + i * 0.5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
          />
        ))}
        <motion.circle
          r={0.8}
          fill="#2255ff"
          initial={{ cx: 50, cy: 50, opacity: 0 }}
          animate={{ cx: [50, 88], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, delay: 2.6, repeat: Infinity, repeatDelay: 2.9, ease: 'easeInOut' }}
        />
      </svg>

      {AUDIENCES.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
          className={`absolute z-10 flex h-11 w-11 items-center justify-center rounded-full border bg-white/85 shadow-sm backdrop-blur-md transition-colors duration-300 ${
            active === i ? 'border-royal/50' : 'border-royal/10'
          }`}
          style={{ left: '12%', top: `${SOURCE_Y[i]}%`, x: '-50%', y: '-50%' }}
        >
          <AudienceIcon icon={a.icon} className="h-5 w-5" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute left-1/2 top-1/2 z-20"
        style={{ x: '-50%', y: '-50%' }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex h-20 w-20 items-center justify-center rounded-full border border-royal/20 bg-white/70 shadow-[0_20px_50px_-16px_rgba(34,85,255,0.4)] backdrop-blur-xl sm:h-24 sm:w-24"
        >
          <motion.div
            aria-hidden
            animate={{ opacity: [0.3, 0.75, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full shadow-[0_0_30px_8px_rgba(34,85,255,0.35)]"
          />
          <svg viewBox="0 0 24 24" fill="none" className="relative h-9 w-9 text-royal sm:h-10 sm:w-10">
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <p className="mt-2 text-center text-[10px] font-bold tracking-wide text-royal/70">CERTIBYT HUB</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute z-10 flex h-14 w-14 items-center justify-center rounded-full border border-royal/20 bg-white/85 shadow-sm backdrop-blur-md"
        style={{ left: '88%', top: '50%', x: '-50%', y: '-50%' }}
      >
        <AudienceIcon icon="candidate" className="h-6 w-6" />
      </motion.div>

      {BADGES.map((b, i) => (
        <motion.div
          key={b}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 1.1 + i * 0.15 }}
          className="absolute z-10 hidden items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 shadow-[0_10px_20px_-10px_rgba(34,85,255,0.35)] backdrop-blur-md sm:flex"
          style={{ left: `${68 + i * 2}%`, top: `${10 + i * 12}%` }}
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            className="flex items-center gap-1.5"
          >
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan-glow">
              <svg className="h-2 w-2 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="whitespace-nowrap text-[10px] font-semibold text-navy">{b}</span>
          </motion.span>
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

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[40%_60%] lg:gap-10 lg:px-16">
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

          <motion.a
            href="#enquiry-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -3 }}
            className="mt-6 flex items-center justify-between gap-4 rounded-[20px] border border-royal/15 bg-gradient-to-br from-royal/5 to-cyan-glow/5 p-5 shadow-sm backdrop-blur-xl transition-colors hover:border-royal/30"
          >
            <div>
              <p className="text-sm font-bold text-navy">Ready to Partner?</p>
              <p className="mt-0.5 text-xs text-navy/55">Fill out the enquiry form below.</p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-royal to-cyan-glow px-4 py-2.5 text-sm font-semibold text-white shadow-glow">
              Start Partnership
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.a>
        </div>

        <GatewayVisual active={active} />
      </div>
    </section>
  )
}
