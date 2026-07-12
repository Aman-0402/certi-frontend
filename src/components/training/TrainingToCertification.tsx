import { useRef } from 'react'
import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { GraduationCap, Users, Ticket, ShieldCheck, FileBadge2, Building2 } from 'lucide-react'

const INK = '#0F172A'
const PRIMARY = '#2563EB'
const SECONDARY = '#3B82F6'
const TINT = '#EEF4FF'

const headingWords = ['Connect', 'Your', 'Training', 'Programs', 'With', 'Certification', 'Opportunities']

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const STAGES = [
  { icon: GraduationCap, title: 'Training Institute', desc: 'Deliver your skill development and professional training programs.' },
  { icon: Users, title: 'Learner Enrollment', desc: 'Give eligible learners access to selected CertiByt certifications.' },
  { icon: Ticket, title: 'Certification Voucher', desc: 'Issue a certification voucher for the chosen assessment.' },
  { icon: ShieldCheck, title: 'Secure Assessment', desc: "Candidates complete exams through CertiByt's secure environment." },
  { icon: FileBadge2, title: 'Digital Credential', desc: 'Successful candidates receive a digitally verifiable certificate.' },
  { icon: Building2, title: 'Employer Verification', desc: 'Employers independently verify the credential in seconds.' },
]

export default function TrainingToCertification() {
  const reduced = !!useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const sectionRect = useRef<DOMRect | null>(null)
  const rafPending = useRef(false)

  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const glowX = useSpring(mx, { stiffness: 35, damping: 20 })
  const glowY = useSpring(my, { stiffness: 35, damping: 20 })
  const glowLeft = useTransform(glowX, (v) => `${v}%`)
  const glowTop = useTransform(glowY, (v) => `${v}%`)

  function handleEnter() {
    if (sectionRef.current) sectionRect.current = sectionRef.current.getBoundingClientRect()
  }
  function handleMove(e: ReactMouseEvent<HTMLElement>) {
    if (reduced) return
    const clientX = e.clientX
    const clientY = e.clientY
    if (rafPending.current) return
    rafPending.current = true
    requestAnimationFrame(() => {
      rafPending.current = false
      const rect = sectionRect.current
      if (!rect) return
      mx.set(((clientX - rect.left) / rect.width) * 100)
      my.set(((clientY - rect.top) / rect.height) * 100)
    })
  }

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      className="relative isolate overflow-hidden bg-white py-[120px]"
    >
      {/* grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 30%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 30%, black 40%, transparent 90%)',
        }}
      />

      {/* static blobs + cursor glow + static particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-10 h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${PRIMARY}1c, transparent 70%)` }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${SECONDARY}1e, transparent 70%)` }}
        />
        <div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 opacity-[0.15]"
          style={{ background: `linear-gradient(to bottom, transparent, ${PRIMARY}, transparent)` }}
        />
        <motion.div
          className="absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ left: glowLeft, top: glowTop, background: `radial-gradient(circle, ${PRIMARY}18, transparent 65%)` }}
        />
        {STATIC_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: PRIMARY, opacity: p.opacity }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: INK }}
          >
            {headingWords.map((word, i) => (
              <motion.span
                key={word + i}
                variants={reduced ? undefined : wordVariants}
                transition={{ duration: 0.8 }}
                className={`inline-block${i < headingWords.length - 1 ? ' mr-[0.28em]' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-[700px] text-lg leading-[1.8] text-slate-500"
          >
            Your institute focuses on developing skills. CertiByt provides the secure
            certification assessment and digital credential infrastructure.
          </motion.p>
        </motion.div>

        {/* workflow rows */}
        <div className="mt-24 flex flex-col gap-14">
          <WorkflowRow stages={STAGES.slice(0, 3)} startIndex={0} reduced={reduced} />
          <WorkflowRow stages={STAGES.slice(3, 6)} startIndex={3} reduced={reduced} />
        </div>
      </div>
    </section>
  )
}

const STATIC_PARTICLES = [
  { left: '18%', top: '20%', size: 5, opacity: 0.28 },
  { left: '32%', top: '72%', size: 4, opacity: 0.22 },
  { left: '68%', top: '18%', size: 6, opacity: 0.24 },
  { left: '84%', top: '64%', size: 4, opacity: 0.2 },
  { left: '50%', top: '88%', size: 3, opacity: 0.26 },
]

/* ---------- shared chrome ---------- */

function GlassPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[28px] ${className}`}
      style={{
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.6)',
        boxShadow: '0 30px 80px rgba(37,99,235,0.12)',
      }}
    >
      {children}
    </div>
  )
}

function GradientBorder({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="absolute inset-[-40%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: `conic-gradient(from 0deg, ${PRIMARY}, ${TINT}, ${SECONDARY}, ${TINT}, ${PRIMARY})` }}
      animate={reduced ? undefined : { rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
    />
  )
}

function useTilt(reduced: boolean, strength = 6) {
  const ref = useRef<HTMLDivElement>(null)
  const rect = useRef<DOMRect | null>(null)
  const rafPending = useRef(false)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const springRx = useSpring(rx, { stiffness: 220, damping: 22 })
  const springRy = useSpring(ry, { stiffness: 220, damping: 22 })

  function onEnter() {
    if (ref.current) rect.current = ref.current.getBoundingClientRect()
  }
  function onMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (reduced) return
    const clientX = e.clientX
    const clientY = e.clientY
    if (rafPending.current) return
    rafPending.current = true
    requestAnimationFrame(() => {
      rafPending.current = false
      const r = rect.current
      if (!r) return
      const px = (clientX - r.left) / r.width - 0.5
      const py = (clientY - r.top) / r.height - 0.5
      ry.set(px * strength)
      rx.set(-py * strength)
    })
  }
  function onLeave() {
    rx.set(0)
    ry.set(0)
  }

  return { ref, onEnter, onMove, onLeave, style: { rotateX: springRx, rotateY: springRy, transformPerspective: 1200 } }
}

/* ---------- workflow row ---------- */

function WorkflowRow({
  stages,
  startIndex,
  reduced,
}: {
  stages: typeof STAGES
  startIndex: number
  reduced: boolean
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
      className="relative grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-3 sm:gap-x-8"
    >
      <ConnectorLine reduced={reduced} delayOffset={startIndex * 0.6} />

      {stages.map((stage, i) => (
        <motion.div key={stage.title} variants={fadeUp} transition={{ duration: 0.6 }}>
          <StageCard stage={stage} index={startIndex + i} reduced={reduced} />
        </motion.div>
      ))}
    </motion.div>
  )
}

function ConnectorLine({ reduced, delayOffset = 0 }: { reduced: boolean; delayOffset?: number }) {
  const segments: [number, number][] = [
    [16.5, 50],
    [50, 83.5],
  ]

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-0 top-[-30px] hidden w-full sm:block"
      width="100%"
      height="4"
      viewBox="0 0 100 4"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`trainFlowLine${delayOffset}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={PRIMARY} />
          <stop offset="100%" stopColor={SECONDARY} />
        </linearGradient>
      </defs>
      {segments.map(([x1, x2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={2}
          x2={x2}
          y2={2}
          stroke={`url(#trainFlowLine${delayOffset})`}
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: reduced ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
        />
      ))}
      {!reduced && (
        <motion.circle
          r={1.8}
          fill={SECONDARY}
          animate={{ cx: [16.5, 50, 83.5, 16.5], opacity: [1, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', times: [0, 0.4, 0.8, 1], delay: delayOffset }}
          cy={2}
          style={{ filter: `drop-shadow(0 0 3px ${SECONDARY})` }}
        />
      )}
    </svg>
  )
}

/* ---------- stage card ---------- */

function StageCard({ stage, index, reduced }: { stage: (typeof STAGES)[number]; index: number; reduced: boolean }) {
  const tilt = useTilt(reduced, 6)
  const Icon = stage.icon

  return (
    <motion.div
      ref={tilt.ref}
      onMouseEnter={tilt.onEnter}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      whileHover={reduced ? undefined : { scale: 1.04, y: -6 }}
      style={tilt.style}
      className="group relative h-full overflow-hidden rounded-[28px] p-[1px] transition-shadow duration-300"
    >
      <GradientBorder reduced={reduced} />
      <GlassPanel className="flex h-full flex-col items-center gap-3 px-6 py-9 text-center">
        <span
          className="absolute left-6 top-6 text-xs font-extrabold"
          style={{ color: PRIMARY }}
        >
          0{index + 1}
        </span>
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: TINT }}
          whileHover={reduced ? undefined : { rotate: 8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Icon className="h-7 w-7" style={{ color: PRIMARY }} strokeWidth={1.75} />
        </motion.div>
        <p className="text-base font-bold" style={{ color: INK }}>
          {stage.title}
        </p>
        <p className="text-xs leading-relaxed text-slate-500">{stage.desc}</p>
      </GlassPanel>
    </motion.div>
  )
}
