import { useRef } from 'react'
import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Monitor,
  Activity,
  FileCheck2,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Lock,
  Award,
  BadgeCheck,
  Trophy,
} from 'lucide-react'

const INK = '#0F172A'
const PRIMARY = '#2563EB'
const SECONDARY = '#3B82F6'
const TINT = '#EEF4FF'

const headingWords = ['Your', 'Certification', 'Achievement,', 'Digitally', 'Recognized']

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const STAGES = [
  { icon: Monitor, title: 'Assessment', desc: 'Secure online exam session.', badge: 'In Progress' },
  { icon: Activity, title: 'Verified Result', desc: 'Result checked against the pass criteria.', badge: 'Verified' },
  { icon: FileCheck2, title: 'Digital Certificate', desc: 'A verifiable credential is generated.', badge: 'Issued' },
  { icon: Globe2, title: 'Global Verification', desc: 'Anyone can confirm it is authentic.', badge: 'Live' },
]

const MINI_STEPS = [
  { number: '01', icon: Monitor, title: 'Assessment', desc: 'Complete your secure online certification.' },
  { number: '02', icon: Trophy, title: 'Qualification', desc: 'Meet certification requirements.' },
  { number: '03', icon: Award, title: 'Credential', desc: 'Receive a verifiable digital certificate.' },
  { number: '04', icon: Globe2, title: 'Verification', desc: 'Share with employers instantly.' },
]

export default function CredentialJourney() {
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
      className="relative isolate overflow-hidden bg-white py-[140px]"
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

      {/* static blobs + light ray */}
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

        {/* cursor glow */}
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
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
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
            When certification requirements are successfully met, eligible candidates can receive
            a digital credential that becomes part of the CertiByt certification ecosystem.
          </motion.p>
        </motion.div>

        {/* timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="relative mt-24 grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
        >
          <ConnectorLine reduced={reduced} />

          {STAGES.map((stage, i) => (
            <motion.div key={stage.title} variants={fadeUp} transition={{ duration: 0.6 }}>
              <StageCard stage={stage} index={i} reduced={reduced} />
            </motion.div>
          ))}
        </motion.div>

        {/* certificate preview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative mt-28 flex justify-center"
        >
          <CertificatePreview reduced={reduced} />
        </motion.div>

        {/* mini cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="mt-28 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {MINI_STEPS.map((step) => (
            <motion.div key={step.number} variants={fadeUp} transition={{ duration: 0.6 }}>
              <MiniCard step={step} reduced={reduced} />
            </motion.div>
          ))}
        </motion.div>
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

/* ---------- connector line ---------- */

function ConnectorLine({ reduced }: { reduced: boolean }) {
  const segments: [number, number][] = [
    [12.5, 37.5],
    [37.5, 62.5],
    [62.5, 87.5],
  ]

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-0 top-[-30px] hidden w-full lg:block"
      width="100%"
      height="4"
      viewBox="0 0 100 4"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="credJourneyLine" x1="0" y1="0" x2="1" y2="0">
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
          stroke="url(#credJourneyLine)"
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
          animate={{ cx: [12.5, 37.5, 62.5, 87.5, 12.5], opacity: [1, 1, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', times: [0, 0.28, 0.56, 0.84, 1] }}
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
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-[28px]"
        style={{ boxShadow: `0 0 0 2px ${SECONDARY}55, 0 0 30px 4px ${SECONDARY}33` }}
        initial={{ opacity: 0 }}
        animate={reduced ? undefined : { opacity: [0, 0.9, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 7, delay: index * 2 }}
      />
      <GlassPanel className="flex h-full flex-col items-center gap-3 px-6 py-9 text-center">
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
        <span
          className="mt-1 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold"
          style={{ background: TINT, color: PRIMARY }}
        >
          {stage.badge}
        </span>
      </GlassPanel>
    </motion.div>
  )
}

/* ---------- certificate preview ---------- */

const QR_PATTERN = [
  [1, 1, 0, 1, 0],
  [0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 1, 1, 1, 0],
]

function CertificatePreview({ reduced }: { reduced: boolean }) {
  const tilt = useTilt(reduced, 5)

  return (
    <motion.div
      ref={tilt.ref}
      onMouseEnter={tilt.onEnter}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      style={tilt.style}
      className="relative w-full max-w-lg"
    >
      {/* floating decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        <FloatingBadge Icon={ShieldCheck} className="-left-10 top-4" reduced={reduced} duration={5.5} />
        <FloatingBadge Icon={CheckCircle2} className="-right-8 top-10" reduced={reduced} duration={6} delay={0.5} />
        <FloatingBadge Icon={Award} className="-left-6 bottom-8" reduced={reduced} duration={6.5} delay={1} />
        <FloatingBadge Icon={Sparkles} className="-right-12 bottom-16" reduced={reduced} duration={5} delay={0.3} />
        <FloatingBadge Icon={Lock} className="left-1/2 -top-10" reduced={reduced} duration={7} delay={0.8} />
      </div>

      <motion.div
        className="relative overflow-hidden rounded-[28px] p-8 sm:p-10"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.85), ${TINT})`,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: `1px solid rgba(255,255,255,0.7)`,
          boxShadow: '0 30px 90px rgba(37,99,235,0.18)',
        }}
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* hologram sheen */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-1/3"
          style={{ background: `linear-gradient(100deg, transparent, ${SECONDARY}22, transparent)` }}
          animate={reduced ? undefined : { left: ['-40%', '120%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
        />

        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">CertiByt</p>
            <p className="mt-1 text-2xl font-bold" style={{ color: INK }}>
              Certificate
            </p>
          </div>
          <motion.div
            className="flex h-11 w-11 items-center justify-center rounded-full"
            style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`, boxShadow: '0 10px 25px rgba(37,99,235,0.4)' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.3 }}
          >
            <BadgeCheck className="h-5 w-5 text-white" />
          </motion.div>
        </div>

        <div
          className="relative mt-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-extrabold tracking-wide"
          style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`, color: 'white' }}
        >
          VERIFIED
        </div>

        <p className="relative mt-5 text-sm text-slate-500">Awarded to</p>
        <p className="relative text-lg font-bold" style={{ color: INK }}>
          Priya Sharma
        </p>
        <p className="relative text-sm text-slate-500">Data Science Professional</p>

        <div className="relative mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-slate-400">Digital Signature</p>
            <svg viewBox="0 0 100 24" className="mt-1 h-6 w-24">
              <motion.path
                d="M2 18 C 12 4, 20 22, 30 10 S 48 20, 58 8 S 76 18, 96 6"
                fill="none"
                stroke={PRIMARY}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: reduced ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
            </svg>
          </div>

          <motion.div
            className="grid shrink-0 grid-cols-5 gap-[3px] rounded-md p-2"
            style={{ background: 'white' }}
            animate={reduced ? undefined : { opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {QR_PATTERN.map((row, ri) =>
              row.map((on, ci) => (
                <span
                  key={`${ri}-${ci}`}
                  className="h-[5px] w-[5px] rounded-[1px]"
                  style={{ background: on ? INK : 'transparent' }}
                />
              )),
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function FloatingBadge({
  Icon,
  className,
  reduced,
  duration,
  delay = 0,
}: {
  Icon: typeof ShieldCheck
  className: string
  reduced: boolean
  duration: number
  delay?: number
}) {
  return (
    <motion.div
      className={`absolute flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 shadow-md ${className}`}
      animate={reduced ? undefined : { y: [0, -12, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <Icon className="h-5 w-5" style={{ color: PRIMARY }} strokeWidth={1.75} />
    </motion.div>
  )
}

/* ---------- mini cards ---------- */

function MiniCard({ step, reduced }: { step: (typeof MINI_STEPS)[number]; reduced: boolean }) {
  const tilt = useTilt(reduced, 6)
  const Icon = step.icon

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
      <GlassPanel className="flex h-full flex-col gap-3 p-7">
        <div className="flex items-center justify-between">
          <span className="text-sm font-extrabold" style={{ color: PRIMARY }}>
            {step.number}
          </span>
          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background: TINT }}
            whileHover={reduced ? undefined : { rotate: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Icon className="h-5 w-5" style={{ color: PRIMARY }} strokeWidth={1.75} />
          </motion.div>
        </div>
        <p className="text-base font-bold" style={{ color: INK }}>
          {step.title}
        </p>
        <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
      </GlassPanel>
    </motion.div>
  )
}
