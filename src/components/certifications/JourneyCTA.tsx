import { useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { Link } from 'wouter'
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { BookOpenCheck, KeyRound, ShieldCheck, Award, ArrowRight, Sparkles, BadgeCheck, CheckCircle2 } from 'lucide-react'

const INK = '#0F172A'
const PRIMARY = '#2563EB'
const SECONDARY = '#3B82F6'
const TINT = '#EEF4FF'

type Step = {
  icon: typeof BookOpenCheck
  title: string
  description: string
}

const STEPS: Step[] = [
  { icon: BookOpenCheck, title: 'Choose Certification', description: 'Pick the credential that matches your role.' },
  { icon: KeyRound, title: 'Get Exam Access', description: 'Instant, secure access to your exam session.' },
  { icon: ShieldCheck, title: 'Take Secure Assessment', description: 'Proctored, tamper-proof online assessment.' },
  { icon: Award, title: 'Earn Certificate', description: 'A verifiable credential, issued in minutes.' },
]

const headingLine1 = ['Ready', 'to']
const headingLine2 = ['Prove', 'Your', 'Skills?']

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function JourneyCTA() {
  const reduced = !!useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const glowX = useSpring(mx, { stiffness: 40, damping: 20 })
  const glowY = useSpring(my, { stiffness: 40, damping: 20 })
  const glowLeft = useTransform(glowX, (v) => `${v}%`)
  const glowTop = useTransform(glowY, (v) => `${v}%`)
  const sectionRect = useRef<DOMRect | null>(null)
  const rafPending = useRef(false)

  function handleSectionEnter() {
    if (sectionRef.current) sectionRect.current = sectionRef.current.getBoundingClientRect()
  }

  function handleSectionMouseMove(e: ReactMouseEvent<HTMLElement>) {
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
      onMouseEnter={handleSectionEnter}
      onMouseMove={handleSectionMouseMove}
      className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-white py-24 sm:min-h-[800px] sm:py-32"
    >
      {/* animated grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 90%)',
        }}
      />

      {/* static soft radial gradients + blobs (opacity/scale pulse only, never blurred + translating) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${PRIMARY}22, transparent 70%)` }}
        />
        <motion.div
          className="absolute -right-24 top-10 h-[380px] w-[380px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${SECONDARY}22, transparent 70%)` }}
          animate={reduced ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-140px] left-1/3 h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${PRIMARY}18, transparent 70%)` }}
          animate={reduced ? undefined : { opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* cursor-following glow (no filter:blur so it never re-triggers layout paint of a blurred region) */}
        <motion.div
          className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: glowLeft,
            top: glowTop,
            background: `radial-gradient(circle, ${PRIMARY}1f, transparent 65%)`,
          }}
        />

        {/* drifting particles: translate-only loops */}
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: PRIMARY, opacity: p.opacity }}
            animate={reduced ? undefined : { y: [0, -18, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}
      </div>

      {/* floating decorative icons */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        <FloatingIcon Icon={ShieldCheck} className="left-[8%] top-[18%]" reduced={reduced} duration={6} />
        <FloatingIcon Icon={BadgeCheck} className="right-[10%] top-[22%]" reduced={reduced} duration={7} delay={0.6} />
        <FloatingIcon Icon={CheckCircle2} className="left-[14%] bottom-[16%]" reduced={reduced} duration={6.5} delay={1.1} />
        <FloatingIcon Icon={Sparkles} className="right-[14%] bottom-[20%]" reduced={reduced} duration={5.5} delay={0.3} />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative mx-auto w-full max-w-[1400px] px-6 text-center sm:px-10 lg:px-16"
      >
        {/* heading */}
        <motion.h2
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          style={{ color: INK }}
        >
          <span className="block">
            {headingLine1.map((word, i) => (
              <motion.span
                key={word + i}
                variants={reduced ? undefined : wordVariants}
                transition={{ duration: 0.8 }}
                className={`inline-block${i < headingLine1.length - 1 ? ' mr-[0.28em]' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block">
            {headingLine2.map((word, i) => (
              <motion.span
                key={word + i}
                variants={reduced ? undefined : wordVariants}
                transition={{ duration: 0.8 }}
                className={`inline-block bg-clip-text text-transparent${i < headingLine2.length - 1 ? ' mr-[0.28em]' : ''}`}
                style={{ backgroundImage: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})` }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h2>

        {/* subtitle */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 max-w-[700px] text-lg leading-[1.8] text-slate-500"
        >
          Choose a professional certification, complete a secure assessment, and earn your
          digitally verifiable CertiByt credential.
        </motion.p>

        {/* timeline */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="relative mt-20 grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-x-8"
        >
          {/* connector line, desktop only */}
          <svg
            aria-hidden
            className="pointer-events-none absolute left-0 top-[-30px] hidden w-full lg:block"
            width="100%"
            height="4"
            viewBox="0 0 100 4"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="journeyLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={PRIMARY} />
                <stop offset="100%" stopColor={SECONDARY} stopOpacity={0.3} />
              </linearGradient>
            </defs>
            {[
              [12.5, 37.5],
              [37.5, 62.5],
              [62.5, 87.5],
            ].map(([x1, x2], i) => (
              <g key={i}>
                <motion.line
                  x1={x1}
                  y1={2}
                  x2={x2}
                  y2={2}
                  stroke="url(#journeyLine)"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  initial={{ pathLength: reduced ? 1 : 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                />
                {!reduced && (
                  <motion.circle
                    r={1.6}
                    fill={SECONDARY}
                    animate={{ cx: [x1, x2], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: i * 0.5, repeatDelay: 0.3 }}
                    cy={2}
                  />
                )}
              </g>
            ))}
          </svg>

          {STEPS.map((step, i) => (
            <motion.div key={step.title} variants={fadeUp} transition={{ duration: 0.6 }}>
              <TimelineCard step={step} index={i} reduced={!!reduced} />
            </motion.div>
          ))}
        </motion.div>

        {/* buttons */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="w-full sm:w-auto">
            <PrimaryButton />
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="w-full sm:w-auto">
            <SecondaryButton />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

const PARTICLES = [
  { left: '18%', top: '30%', size: 5, opacity: 0.3, duration: 5, delay: 0 },
  { left: '30%', top: '65%', size: 4, opacity: 0.25, duration: 6, delay: 0.8 },
  { left: '68%', top: '28%', size: 6, opacity: 0.28, duration: 5.5, delay: 0.4 },
  { left: '80%', top: '62%', size: 4, opacity: 0.22, duration: 6.5, delay: 1.2 },
  { left: '50%', top: '18%', size: 3, opacity: 0.3, duration: 4.5, delay: 0.2 },
]

function FloatingIcon({
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
      className={`absolute ${className}`}
      animate={reduced ? undefined : { y: [0, -14, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <Icon className="h-7 w-7" style={{ color: PRIMARY }} strokeWidth={1.5} opacity={0.18} />
    </motion.div>
  )
}

function TimelineCard({ step, index, reduced }: { step: Step; index: number; reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const cardRect = useRef<DOMRect | null>(null)
  const rafPending = useRef(false)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const springRx = useSpring(rx, { stiffness: 220, damping: 22 })
  const springRy = useSpring(ry, { stiffness: 220, damping: 22 })

  function handleEnter() {
    if (ref.current) cardRect.current = ref.current.getBoundingClientRect()
  }

  function handleMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (reduced) return
    const clientX = e.clientX
    const clientY = e.clientY
    if (rafPending.current) return
    rafPending.current = true
    requestAnimationFrame(() => {
      rafPending.current = false
      const rect = cardRect.current
      if (!rect) return
      const px = (clientX - rect.left) / rect.width - 0.5
      const py = (clientY - rect.top) / rect.height - 0.5
      ry.set(px * 8)
      rx.set(-py * 8)
    })
  }
  function handleLeave() {
    rx.set(0)
    ry.set(0)
  }

  const Icon = step.icon

  return (
    <div className="relative pt-6">
      {/* floating numbered node */}
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: `conic-gradient(from 0deg, ${PRIMARY}, ${SECONDARY}, transparent, ${PRIMARY})` }}
            animate={reduced ? undefined : { rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          <div
            className="absolute inset-[1.5px] flex items-center justify-center rounded-full bg-white text-xs font-bold"
            style={{ color: PRIMARY }}
          >
            0{index + 1}
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={reduced ? undefined : { scale: 1.05, y: -6 }}
        style={{ rotateX: springRx, rotateY: springRy, transformPerspective: 900 }}
        className="group relative overflow-hidden rounded-[24px] p-[1px] transition-shadow duration-300"
      >
        {/* animated gradient border */}
        <motion.div
          className="absolute inset-[-40%] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `conic-gradient(from 0deg, ${PRIMARY}, ${TINT}, ${SECONDARY}, ${TINT}, ${PRIMARY})` }}
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        <div
          className="relative flex h-full flex-col items-center gap-3 rounded-[23px] px-6 py-9 text-center"
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 20px 60px rgba(37,99,235,0.12)',
          }}
        >
          <motion.div
            className="flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ background: TINT }}
            whileHover={reduced ? undefined : { rotate: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Icon className="h-7 w-7" style={{ color: PRIMARY }} strokeWidth={1.75} />
          </motion.div>
          <p className="text-base font-bold" style={{ color: INK }}>
            {step.title}
          </p>
          <p className="text-xs leading-relaxed text-slate-500">{step.description}</p>
        </div>
      </motion.div>
    </div>
  )
}

function PrimaryButton() {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const idRef = useRef(0)

  function handleClick(e: ReactMouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const id = idRef.current++
    setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }])
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650)
  }

  return (
    <Link
      href="/certifications"
      onClick={handleClick}
      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(37,99,235,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto"
      style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`, ['--tw-ring-color' as string]: PRIMARY }}
    >
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40"
          style={{ left: r.x, top: r.y, width: 10, height: 10, marginLeft: -5, marginTop: -5 }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 12, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      Explore Certifications
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}

function SecondaryButton() {
  return (
    <Link
      href="/how-it-works"
      className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl border px-8 py-4 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto"
      style={{
        color: PRIMARY,
        borderColor: `${PRIMARY}40`,
        background: 'rgba(255,255,255,0.6)',
        ['--tw-ring-color' as string]: PRIMARY,
      }}
    >
      How Certification Works
      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  )
}
