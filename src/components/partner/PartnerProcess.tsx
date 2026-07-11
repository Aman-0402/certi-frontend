import { useState } from 'react'
import { motion } from 'framer-motion'

const INFO_CARDS = [
  {
    number: '01',
    title: 'Partnership Enquiry',
    desc: 'Tell us about your organization and the certification opportunities you want to provide.',
    icon: 'form',
  },
  {
    number: '02',
    title: 'Certification Planning',
    desc: 'Our team reviews your organization, candidate requirements, and relevant certification programs.',
    icon: 'plan',
  },
  {
    number: '03',
    title: 'Program Access',
    desc: 'Your organization receives access to selected certification opportunities and candidate vouchers.',
    icon: 'access',
  },
  {
    number: '04',
    title: 'Candidate Success',
    desc: 'Candidates complete secure assessments and successful candidates can receive digitally verifiable credentials.',
    icon: 'success',
  },
] as const

const FEATURE_CARDS = [
  { title: 'Partnership Request', icon: 'form', pos: 'left-[26%] top-[14%]' },
  { title: 'Collaboration Approval', icon: 'handshake', pos: 'left-[74%] top-[14%]' },
  { title: 'Certification Access', icon: 'voucher', pos: 'left-[26%] top-[86%]' },
  { title: 'Verified Credential', icon: 'trophy', pos: 'left-[74%] top-[86%]' },
] as const

const FEATURE_ANCHOR: Record<(typeof FEATURE_CARDS)[number]['title'], { x: number; y: number }> = {
  'Partnership Request': { x: 26, y: 14 },
  'Collaboration Approval': { x: 74, y: 14 },
  'Certification Access': { x: 26, y: 86 },
  'Verified Credential': { x: 74, y: 86 },
}

function CardIcon({ icon, className = 'h-5 w-5' }: { icon: string; className?: string }) {
  const common = { className: `${className} text-royal`, viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'form') {
    return (
      <svg {...common}>
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'handshake') {
    return (
      <svg {...common}>
        <path d="M3 12l4-4 4 2 3-3 4 2 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10l3 5 2-1M17 9l-3 5-2-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
  if (icon === 'trophy') {
    return (
      <svg {...common}>
        <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7 5H4v1.5A3 3 0 0 0 7 9.5M17 5h3v1.5a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 13v3.5M9 20h6M10 16.5h4v3.5h-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'plan') {
    return (
      <svg {...common}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 2.5v3M16 2.5v3M3.5 9.5h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 14l2.3 2.3L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
  if (icon === 'success') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.5 12.3l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'org') {
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
      <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 18c0.7-3 2.4-4.6 4.5-4.6s3.8 1.6 4.5 4.6M12 18c0.6-2.6 2.1-4 4-4s3.4 1.4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function SideCard({
  side,
  title,
  items,
  icon,
  active,
}: {
  side: 'left' | 'right'
  title: string
  items: string[]
  icon: string
  active: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ rotate: side === 'left' ? -1.5 : 1.5 }}
      className={`absolute top-1/2 z-20 hidden w-[168px] rounded-[22px] border bg-white/80 p-4 shadow-[0_18px_40px_-18px_rgba(34,85,255,0.28)] backdrop-blur-xl transition-colors duration-300 sm:flex sm:w-[190px] sm:flex-col ${
        side === 'left' ? 'left-0' : 'right-0'
      } ${active ? 'border-royal/50' : 'border-royal/10'}`}
      style={{ y: '-50%' }}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
          active ? 'bg-royal/20' : 'bg-royal/10'
        }`}
      >
        <CardIcon icon={icon} />
      </span>
      <h3 className="mt-3 text-sm font-bold text-navy">{title}</h3>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-1.5 text-xs text-navy/60">
            <span className="h-1 w-1 rounded-full bg-royal/50" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function CollaborationHub() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="relative mx-auto h-[200px] max-w-3xl sm:h-[440px] lg:h-[460px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/[0.06] blur-3xl sm:h-[440px] sm:w-[440px]"
      />

      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-glow/50"
          style={{ left: `${12 + i * 11}%`, top: `${15 + ((i * 19) % 70)}%` }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="bridge-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2255ff" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#5eead4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#2255ff" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="hub-spoke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2255ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        <motion.line
          x1={20}
          y1={50}
          x2={80}
          y2={50}
          stroke="url(#bridge-line)"
          strokeWidth={0.5}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.circle
          r={0.8}
          fill="#5eead4"
          initial={{ cx: 20, cy: 50, opacity: 0 }}
          animate={{ cx: [20, 80], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, delay: 1.2, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
        />

        {FEATURE_CARDS.map((card, i) => (
          <motion.line
            key={card.title}
            x1={50}
            y1={50}
            x2={FEATURE_ANCHOR[card.title].x}
            y2={FEATURE_ANCHOR[card.title].y}
            stroke="url(#hub-spoke)"
            strokeWidth={0.35}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: active === i ? 1 : 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      <SideCard side="left" title="Organization" items={['Training Institute', 'University', 'Enterprise']} icon="org" active={active !== null} />
      <SideCard side="right" title="Candidates" items={['Learners', 'Employees', 'Candidates']} icon="learners" active={active !== null} />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="absolute left-1/2 top-1/2 z-10"
        style={{ x: '-50%', y: '-50%' }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex h-24 w-24 items-center justify-center rounded-full border border-royal/20 bg-white/70 shadow-[0_20px_50px_-16px_rgba(34,85,255,0.4)] backdrop-blur-xl sm:h-28 sm:w-28"
        >
          <motion.div
            aria-hidden
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full shadow-[0_0_34px_10px_rgba(34,85,255,0.3)]"
          />
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-1.5 rounded-full border border-dashed border-royal/25"
          />
          <svg viewBox="0 0 24 24" fill="none" className="relative h-9 w-9 text-royal sm:h-10 sm:w-10">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="5" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="19" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="19" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.4" />
            <path d="M9.6 10.4L6.3 7.3M14.4 10.4l3.3-3.1M9.6 13.6l-3.3 3.1M14.4 13.6l3.3 3.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </motion.div>
        <p className="mt-3 text-center text-[10px] font-bold tracking-wide text-royal/70">CERTIBYT PLATFORM</p>
      </motion.div>

      {FEATURE_CARDS.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          className={`absolute z-20 hidden w-[150px] -translate-x-1/2 -translate-y-1/2 cursor-default items-center gap-2 rounded-2xl border bg-white/85 p-3 shadow-[0_14px_30px_-14px_rgba(10,17,40,0.25)] backdrop-blur-md transition-colors duration-300 sm:flex ${card.pos} ${
            active === i ? 'border-royal/50' : 'border-royal/10'
          }`}
          style={{ x: '-50%', y: '-50%' }}
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
              active === i ? 'bg-royal/20' : 'bg-royal/10'
            }`}
          >
            <CardIcon icon={card.icon} className="h-4 w-4" />
          </motion.span>
          <p className="text-[11px] font-bold leading-tight text-navy">{card.title}</p>
        </motion.div>
      ))}
    </div>
  )
}

const MOBILE_STACK = [
  { title: 'Organization', desc: 'Training Institute · University · Enterprise', icon: 'org' },
  { title: 'Candidates', desc: 'Learners · Employees · Candidates', icon: 'learners' },
  { title: 'Partnership Request', desc: 'Submit your organization details to get started.', icon: 'form' },
  { title: 'Collaboration Approval', desc: 'Our team reviews and approves the partnership.', icon: 'handshake' },
  { title: 'Certification Access', desc: 'Receive certification programs and candidate vouchers.', icon: 'voucher' },
  { title: 'Verified Credential', desc: 'Candidates earn digitally verifiable credentials.', icon: 'trophy' },
] as const

function MobileStack() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:hidden">
      {MOBILE_STACK.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="flex items-center gap-3 rounded-2xl border border-royal/10 bg-white/80 p-4 shadow-sm backdrop-blur-md"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal/10">
            <CardIcon icon={item.icon} className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-bold text-navy">{item.title}</p>
            <p className="mt-0.5 text-xs text-navy/60">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function PartnerProcess() {
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
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-[380px] w-[380px] rounded-full bg-royal/[0.06] blur-3xl" />
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
            PARTNERSHIP JOURNEY
          </span>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-navy sm:text-3xl">
            A Simple Path to{' '}
            <span className="bg-gradient-to-r from-royal to-cyan-glow bg-clip-text text-transparent">
              Certification Partnership
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-navy/60">
            From partnership enquiry to certification delivery, CertiByt provides the
            infrastructure required to support your candidates.
          </p>
        </motion.div>

        <CollaborationHub />
        <MobileStack />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[22px] border border-royal/10 bg-white/70 p-6 shadow-[0_18px_40px_-20px_rgba(34,85,255,0.18)] backdrop-blur-xl transition-colors duration-300 hover:border-royal/40"
            >
              <div
                aria-hidden
                className="absolute inset-x-6 top-0 h-[3px] scale-x-0 rounded-full bg-gradient-to-r from-royal to-cyan-glow transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 transition-colors duration-300 group-hover:bg-royal/20">
                  <CardIcon icon={card.icon} />
                </span>
                <span className="text-sm font-bold text-royal/70">{card.number}</span>
              </div>
              <h3 className="mt-4 text-base font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm text-navy/60">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
