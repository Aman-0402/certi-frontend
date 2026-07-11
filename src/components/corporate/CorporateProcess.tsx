import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const JOURNEY = [
  {
    step: '01',
    title: 'Select Certifications',
    desc: 'Choose certification programs aligned with the skills and domains relevant to your teams.',
    icon: 'select',
  },
  {
    step: '02',
    title: 'Provide Team Access',
    desc: 'Distribute certification access to selected employees through controlled certification vouchers.',
    icon: 'access',
  },
  {
    step: '03',
    title: 'Employees Complete Assessments',
    desc: "Team members complete their certification exams through CertiByt's security-focused assessment environment.",
    icon: 'assess',
  },
  {
    step: '04',
    title: 'Verified Professional Credentials',
    desc: 'Successful candidates can receive digitally verifiable professional credentials.',
    icon: 'verified',
  },
] as const

function JourneyIcon({ icon }: { icon: (typeof JOURNEY)[number]['icon'] }) {
  const common = { className: 'h-5 w-5 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'select') {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.5 12.3l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'access') {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 19c0.8-3.5 2.9-5.4 5.5-5.4s4.7 1.9 5.5 5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16.5 8h4M18.5 6v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'assess') {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 19h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8.5 10.3l1.8 1.8L15 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 12.3l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CertificationJourney() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[28px] border border-royal/10 bg-white/70 p-7 shadow-[0_25px_60px_-24px_rgba(34,85,255,0.22)] backdrop-blur-xl transition-colors duration-300 hover:border-royal/40 sm:p-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(#2255ff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.05,
        }}
      />

      <div className="relative flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal/10 text-royal transition-shadow duration-300 group-hover:shadow-[0_0_14px_2px_rgba(34,85,255,0.35)]">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
            <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-sm font-bold tracking-wide text-navy">Certification Journey</h3>
      </div>

      <div className="relative mt-8 flex flex-col gap-8">
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ transformOrigin: 'top' }}
          className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-[2px] rounded-full bg-gradient-to-b from-royal via-royal/50 to-cyan-glow/40"
        />
        <motion.div
          aria-hidden
          className="absolute left-[15px] h-2.5 w-2.5 rounded-full bg-cyan-glow shadow-[0_0_10px_3px_rgba(94,234,212,0.7)]"
          initial={{ top: '0%', opacity: 0 }}
          whileInView={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
        />

        {JOURNEY.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
            className="relative flex gap-5 pl-1"
          >
            <motion.div
              initial={{ scale: 0.6, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.15, type: 'spring', stiffness: 160, damping: 14 }}
              className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-royal/20 bg-white shadow-sm transition-all duration-300 group-hover:border-royal/40"
            >
              <JourneyIcon icon={item.icon} />
            </motion.div>

            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-wide text-royal/70">STEP {item.step}</span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15, type: 'spring', stiffness: 200, damping: 12 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan-glow"
                >
                  <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </div>
              <h4 className="mt-1 text-sm font-bold text-navy">{item.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-navy/60">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const MODULES = [
  {
    key: 'employees',
    label: 'Employee Management',
    sub: '128 active employees',
    icon: 'employees',
    className: 'left-[4%] top-[2%] w-[92%] sm:left-[2%] sm:top-[4%] sm:w-[46%]',
  },
  {
    key: 'assignment',
    label: 'Certification Assignment',
    sub: '6 programs assigned',
    icon: 'assignment',
    className: 'left-[4%] top-[19%] w-[92%] sm:left-auto sm:right-[2%] sm:top-[0%] sm:w-[46%]',
  },
  {
    key: 'assessment',
    label: 'Secure Assessment',
    sub: 'Proctored & encrypted',
    icon: 'assessment',
    className: 'left-[4%] top-[36%] w-[92%] sm:left-[12%] sm:top-[42%] sm:w-[46%]',
  },
  {
    key: 'credential',
    label: 'Verified Credential',
    sub: 'Blockchain-secured',
    icon: 'credential',
    className: 'left-[4%] top-[53%] w-[92%] sm:left-auto sm:right-[0%] sm:top-[46%] sm:w-[48%]',
  },
  {
    key: 'live',
    label: 'Live Verification',
    sub: 'Status: Online',
    icon: 'live',
    className: 'left-[4%] top-[70%] w-[92%] sm:left-[6%] sm:top-[80%] sm:w-[38%]',
  },
] as const

const ANCHORS: Record<(typeof MODULES)[number]['key'], { x: number; y: number }> = {
  employees: { x: 28, y: 10 },
  assignment: { x: 73, y: 8 },
  assessment: { x: 39, y: 50 },
  credential: { x: 76, y: 55 },
  live: { x: 29, y: 87 },
}

const CONNECTIONS: [(typeof MODULES)[number]['key'], (typeof MODULES)[number]['key']][] = [
  ['employees', 'assignment'],
  ['employees', 'assessment'],
  ['assignment', 'assessment'],
  ['assessment', 'credential'],
  ['assessment', 'live'],
]

function ModuleIcon({ icon }: { icon: (typeof MODULES)[number]['icon'] }) {
  const common = { className: 'h-4 w-4 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'employees') {
    return (
      <svg {...common}>
        <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 18c0.7-3 2.4-4.6 4.5-4.6s3.8 1.6 4.5 4.6M12 18c0.6-2.6 2.1-4 4-4s3.4 1.4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'assignment') {
    return (
      <svg {...common}>
        <rect x="4" y="3.5" width="16" height="17" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'assessment') {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 19h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'credential') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.5 12.3l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  )
}

const NOTIFICATIONS = [
  { text: 'Assessment Completed', className: 'left-[-4%] top-[30%] sm:left-[0%]', delay: 0.9 },
  { text: 'Credential Issued', className: 'right-[-4%] top-[62%] sm:right-[0%]', delay: 1.2 },
  { text: 'Verification Successful', className: 'left-[8%] top-[68%] sm:left-[14%]', delay: 1.5 },
] as const

function ControlCenter() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(my, { stiffness: 60, damping: 20 })
  const rotateY = useSpring(mx, { stiffness: 60, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px * 6)
    my.set(py * -6)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1400 }}
      className="relative"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-royal/[0.07] blur-3xl"
      />
      <div aria-hidden className="pointer-events-none absolute left-[10%] top-0 h-72 w-72 rounded-full bg-cyan-glow/10 blur-3xl" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative min-h-[620px] w-full rounded-[28px] border border-royal/10 bg-white/60 shadow-[0_30px_80px_-30px_rgba(34,85,255,0.28)] backdrop-blur-xl sm:min-h-[460px] lg:min-h-[560px]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[28px]"
          style={{
            backgroundImage: 'radial-gradient(#2255ff 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            opacity: 0.05,
          }}
        />

        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          {CONNECTIONS.map(([a, b], i) => {
            const from = ANCHORS[a]
            const to = ANCHORS[b]
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#ccc-line)"
                strokeWidth={0.4}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: 'easeInOut' }}
              />
            )
          })}
          <defs>
            <linearGradient id="ccc-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2255ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#5eead4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {CONNECTIONS.map(([a, b], i) => {
            const from = ANCHORS[a]
            const to = ANCHORS[b]
            return (
              <motion.circle
                key={`pulse-${a}-${b}`}
                r={0.7}
                fill="#5eead4"
                initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                animate={{ cx: [from.x, to.x], cy: [from.y, to.y], opacity: [0, 1, 0] }}
                transition={{ duration: 2, delay: 1.5 + i * 0.4, repeat: Infinity, repeatDelay: CONNECTIONS.length * 0.6, ease: 'easeInOut' }}
              />
            )
          })}
        </svg>

        {MODULES.map((mod, i) => (
          <motion.div
            key={mod.key}
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
            whileHover={{ y: -4 }}
            className={`absolute rounded-2xl border border-royal/10 bg-white/80 p-3.5 shadow-[0_14px_30px_-12px_rgba(10,17,40,0.18)] backdrop-blur-md transition-colors duration-300 hover:border-royal/40 sm:p-4 ${mod.className}`}
            style={{ transform: 'translateZ(20px)' }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-royal/10">
                <ModuleIcon icon={mod.icon} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-bold text-navy sm:text-xs">{mod.label}</p>
                <p className="truncate text-[10px] text-navy/50">{mod.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {NOTIFICATIONS.map((n, i) => (
          <motion.div
            key={n.text}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: n.delay }}
            className={`absolute z-10 hidden items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 shadow-[0_10px_25px_-10px_rgba(34,85,255,0.35)] backdrop-blur-md sm:flex ${n.className}`}
            style={{ transform: 'translateZ(40px)' }}
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              className="flex items-center gap-1.5"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan-glow">
                <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="whitespace-nowrap text-[11px] font-semibold text-navy">{n.text}</span>
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function CorporateProcess() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          color: '#0a1128',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-royal/[0.06] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-glow/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            FOR ENTERPRISES
          </span>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-navy sm:text-3xl">
            A Simple Way to Validate{' '}
            <span className="bg-gradient-to-r from-royal to-cyan-glow bg-clip-text text-transparent">
              Professional Skills
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-navy/60">
            CertiByt provides the assessment and credential infrastructure your organization
            needs to connect teams with professional certification opportunities.
          </p>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[40%_60%] lg:gap-8">
          <CertificationJourney />
          <ControlCenter />
        </div>
      </div>
    </section>
  )
}
