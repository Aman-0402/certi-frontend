import { useState } from 'react'
import { motion } from 'framer-motion'

const LAYERS = [
  {
    icon: 'access',
    title: 'Secure Exam Access',
    desc: 'Candidates enter the assessment using valid, verified certification credentials.',
    angle: 'top',
  },
  {
    icon: 'locked',
    title: 'Locked Assessment Environment',
    desc: 'Configured exam security and monitoring controls lock down the assessment session.',
    angle: 'left',
  },
  {
    icon: 'monitor',
    title: 'Activity & Progress Monitoring',
    desc: 'Exam activity, timing, and answers are continuously monitored and preserved.',
    angle: 'right',
  },
  {
    icon: 'submit',
    title: 'Secure Submission',
    desc: 'The completed assessment is submitted for result evaluation and certification processing.',
    angle: 'bottom',
  },
] as const

const RING_PCT = [44, 62, 80, 98]
const RING_DURATION = [34, 46, 58, 70]

const CARD_POSITION: Record<(typeof LAYERS)[number]['angle'], string> = {
  top: 'left-1/2 top-[27%]',
  left: 'left-[19%] top-1/2',
  right: 'left-[91%] top-1/2',
  bottom: 'left-1/2 top-[99%]',
}

function LayerIcon({ icon, className = 'h-4 w-4' }: { icon: (typeof LAYERS)[number]['icon']; className?: string }) {
  const common = { className: `${className} text-royal`, viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'access') {
    return (
      <svg {...common}>
        <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6.5 16c.6-1.6 1.6-2.3 2.5-2.3s1.9.7 2.5 2.3M14 10h4M14 13h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'locked') {
    return (
      <svg {...common}>
        <rect x="5" y="10.5" width="14" height="9.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      </svg>
    )
  }
  if (icon === 'monitor') {
    return (
      <svg {...common}>
        <path d="M2 12c2.2-4 5.7-6 10-6s7.8 2 10 6c-2.2 4-5.7 6-10 6s-7.8-2-10-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 12.3l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SecurityFortress({ active, setActive }: { active: number | null; setActive: (i: number | null) => void }) {
  return (
    <div className="relative mx-auto flex items-center justify-center py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/[0.05] blur-3xl sm:h-[500px] sm:w-[500px]"
      />
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 text-royal opacity-[0.04] sm:h-[360px] sm:w-[360px]"
      >
        <path d="M12 2l8 3v7c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V5l8-3z" stroke="currentColor" strokeWidth="0.6" strokeLinejoin="round" />
      </svg>

      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-glow/50"
          style={{ left: `${8 + i * 11}%`, top: `${10 + ((i * 17) % 80)}%` }}
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]"
      >
        {RING_PCT.map((pct, i) => (
          <motion.div
            key={pct}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-300 ${
              active === i ? 'border-royal/60' : 'border-royal/15'
            }`}
            style={{ width: `${pct}%`, height: `${pct}%`, x: '-50%', y: '-50%' }}
          >
            <motion.div
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: RING_DURATION[i], repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <span
                className={`absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow transition-opacity duration-300 ${
                  active === i ? 'opacity-100 shadow-[0_0_10px_3px_rgba(94,234,212,0.8)]' : 'opacity-60'
                }`}
              />
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute left-1/2 top-1/2 z-10"
          style={{ x: '-50%', y: '-50%' }}
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-royal/20 bg-white/70 shadow-[0_20px_50px_-18px_rgba(34,85,255,0.4)] backdrop-blur-xl sm:h-24 sm:w-24"
          >
            <motion.div
              aria-hidden
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-[24px] shadow-[0_0_30px_8px_rgba(34,85,255,0.3)]"
            />
            <svg viewBox="0 0 24 24" fill="none" className="relative h-10 w-10 text-royal sm:h-12 sm:w-12">
              <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span className="absolute -left-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border border-royal/20 bg-white shadow-sm">
              <LayerIcon icon="monitor" className="h-3.5 w-3.5" />
            </span>
            <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border border-royal/20 bg-white shadow-sm">
              <LayerIcon icon="locked" className="h-3.5 w-3.5" />
            </span>
            <span className="absolute -bottom-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan-glow shadow-sm">
              <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.div>
        </motion.div>

        {LAYERS.map((layer, i) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`absolute z-20 hidden w-[170px] cursor-default items-center gap-2 rounded-2xl border bg-white/85 p-3 shadow-[0_14px_30px_-14px_rgba(10,17,40,0.25)] backdrop-blur-md transition-colors duration-300 sm:flex ${CARD_POSITION[layer.angle]} ${
              active === i ? 'border-royal/50' : 'border-royal/10'
            }`}
            style={{ x: '-50%', y: '-50%' }}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                active === i ? 'bg-royal/20' : 'bg-royal/10'
              }`}
            >
              <LayerIcon icon={layer.icon} />
            </span>
            <p className="text-[11px] font-bold leading-tight text-navy">{layer.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default function AssessmentJourney() {
  const [active, setActive] = useState<number | null>(null)

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
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-royal/[0.06] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[340px] w-[340px] rounded-full bg-cyan-glow/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            ASSESSMENT SECURITY
          </span>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-navy sm:text-3xl">
            <span className="bg-gradient-to-r from-royal to-cyan-glow bg-clip-text text-transparent">Protection</span>{' '}
            From Exam Start to{' '}
            <span className="bg-gradient-to-r from-royal to-cyan-glow bg-clip-text text-transparent">Submission</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-navy/60">
            Every assessment session is protected by multiple layered security controls
            throughout the entire examination lifecycle.
          </p>
        </motion.div>

        <SecurityFortress active={active} setActive={setActive} />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`relative overflow-hidden rounded-[24px] border bg-white/70 p-6 shadow-[0_18px_40px_-20px_rgba(34,85,255,0.18)] backdrop-blur-xl transition-all duration-300 ${
                active === i ? 'border-royal/50 -translate-y-1 shadow-[0_22px_45px_-16px_rgba(34,85,255,0.32)]' : 'border-royal/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-royal/70">0{i + 1}</span>
                <span
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    active === i ? 'bg-cyan-glow shadow-[0_0_8px_2px_rgba(94,234,212,0.7)]' : 'bg-royal/20'
                  }`}
                />
              </div>
              <span
                className={`mt-4 flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${
                  active === i ? 'bg-royal/20' : 'bg-royal/10'
                }`}
              >
                <LayerIcon icon={layer.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">{layer.title}</h3>
              <p className="mt-2 text-sm text-navy/60">{layer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
