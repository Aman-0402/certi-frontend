import { useEffect, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react'
import { Link } from 'wouter'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import {
  ShieldCheck,
  Activity,
  BadgeCheck,
  QrCode,
  Search,
  CheckCircle2,
  Sparkles,
  Lock,
  Globe2,
  GraduationCap,
  Building2,
  Landmark,
  ArrowRight,
} from 'lucide-react'

const INK = '#0F172A'
const PRIMARY = '#2563EB'
const SECONDARY = '#3B82F6'
const TINT = '#EEF4FF'

const headingWords = ['Certifications', 'Built', 'Around', 'Trust', 'and', 'Skill', 'Validation']

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const ORG_TYPES = [
  { label: 'Universities', icon: GraduationCap },
  { label: 'Training Institutes', icon: Landmark },
  { label: 'Corporate Organizations', icon: Building2 },
  { label: 'Global Partners', icon: Globe2 },
]

export default function TrustGrid() {
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

      {/* soft gradient blobs + light rays */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-0 h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${PRIMARY}1c, transparent 70%)` }}
        />
        <div
          className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${SECONDARY}20, transparent 70%)` }}
        />
        <div
          className="absolute bottom-[-160px] left-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${PRIMARY}16, transparent 70%)` }}
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

        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: PRIMARY, opacity: p.opacity }}
          />
        ))}
      </div>

      {/* floating decorative icons */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        <FloatingIcon Icon={ShieldCheck} className="left-[6%] top-[14%]" reduced={reduced} duration={6.5} />
        <FloatingIcon Icon={BadgeCheck} className="right-[7%] top-[10%]" reduced={reduced} duration={7} delay={0.5} />
        <FloatingIcon Icon={CheckCircle2} className="left-[10%] bottom-[12%]" reduced={reduced} duration={6} delay={1} />
        <FloatingIcon Icon={Sparkles} className="right-[9%] bottom-[30%]" reduced={reduced} duration={5.5} delay={0.3} />
        <FloatingIcon Icon={Lock} className="right-[4%] top-[45%]" reduced={reduced} duration={7.5} delay={0.8} />
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
            CertiByt combines secure assessments with digitally verifiable credentials to help
            candidates demonstrate their professional knowledge with confidence.
          </motion.p>
        </motion.div>

        {/* bento showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } } }}
          className="mt-20 flex flex-col gap-8"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
            <FeaturedCard reduced={reduced} />
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <SkillValidationCard reduced={reduced} />
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <DigitalCredentialCard reduced={reduced} />
            </motion.div>
          </div>

          <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
            <PublicVerificationCard reduced={reduced} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const PARTICLES = [
  { left: '20%', top: '22%', size: 5, opacity: 0.3, duration: 5, delay: 0 },
  { left: '35%', top: '70%', size: 4, opacity: 0.24, duration: 6, delay: 0.7 },
  { left: '65%', top: '20%', size: 6, opacity: 0.26, duration: 5.5, delay: 0.4 },
  { left: '82%', top: '60%', size: 4, opacity: 0.2, duration: 6.5, delay: 1.1 },
  { left: '48%', top: '85%', size: 3, opacity: 0.3, duration: 4.5, delay: 0.2 },
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
      <Icon className="h-7 w-7" style={{ color: PRIMARY }} strokeWidth={1.5} opacity={0.16} />
    </motion.div>
  )
}

/* ---------- shared card chrome ---------- */

function GlassPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[28px] ${className}`}
      style={{
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.55)',
        boxShadow: '0 25px 80px rgba(37,99,235,0.12)',
      }}
    >
      {children}
    </div>
  )
}

function GradientBorder({ reduced, hoverOnly = true }: { reduced: boolean; hoverOnly?: boolean }) {
  return (
    <motion.div
      className={`absolute inset-[-40%] transition-opacity duration-300 ${hoverOnly ? 'opacity-0 group-hover:opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
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

/* ---------- Featured Card: Secure Assessment ---------- */

function FeaturedCard({ reduced }: { reduced: boolean }) {
  const tilt = useTilt(reduced, 3)

  return (
    <motion.div
      ref={tilt.ref}
      onMouseEnter={tilt.onEnter}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      whileHover={reduced ? undefined : { scale: 1.015, y: -4 }}
      style={tilt.style}
      className="group relative overflow-hidden rounded-[28px] p-[1px] transition-shadow duration-300"
    >
      <GradientBorder reduced={reduced} />
      <GlassPanel className="grid grid-cols-1 items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
        {/* visual */}
        <div className="relative mx-auto flex h-[280px] w-full max-w-md items-center justify-center">
          <div
            aria-hidden
            className="absolute h-56 w-56 rounded-full blur-2xl"
            style={{ background: `radial-gradient(circle, ${PRIMARY}30, transparent 70%)` }}
          />
          <motion.div
            className="relative flex h-32 w-32 items-center justify-center rounded-[28px]"
            style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`, boxShadow: '0 20px 50px rgba(37,99,235,0.35)' }}
            animate={reduced ? undefined : { scale: [1, 1.04, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ShieldCheck className="h-16 w-16 text-white" strokeWidth={1.5} />
          </motion.div>

          {/* mini dashboard mockup */}
          <div
            className="absolute -bottom-2 -left-4 w-40 rounded-2xl border border-white/60 bg-white/85 p-3 shadow-lg backdrop-blur-md sm:-left-8"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Live Monitoring</p>
            <svg viewBox="0 0 100 32" className="mt-2 h-8 w-full">
              <motion.path
                d="M0 24 L15 18 L30 22 L45 10 L60 14 L75 6 L100 12"
                fill="none"
                stroke={PRIMARY}
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: reduced ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3 }}
              />
            </svg>
          </div>

          <motion.div
            className="absolute -top-2 right-2 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 shadow-md sm:right-4"
            animate={reduced ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BadgeCheck className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
            <span className="text-[11px] font-semibold text-slate-600">AI Verified</span>
          </motion.div>

          <motion.div
            className="absolute bottom-8 right-0 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 shadow-md"
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          >
            <Lock className="h-3.5 w-3.5" style={{ color: SECONDARY }} />
            <span className="text-[11px] font-semibold text-slate-600">Identity Check</span>
          </motion.div>
        </div>

        {/* content */}
        <div className="text-center lg:text-left">
          <span
            className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide"
            style={{ background: TINT, color: PRIMARY }}
          >
            FEATURED
          </span>
          <h3 className="mt-5 text-2xl font-bold sm:text-3xl" style={{ color: INK }}>
            Secure Assessment
          </h3>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-500 lg:mx-0">
            Enterprise-grade online assessments with AI-powered security, browser monitoring,
            identity verification, and anti-cheating technology.
          </p>
          <Link
            href="/resources/secure-assessments"
            className="group/btn mt-7 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(37,99,235,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`, ['--tw-ring-color' as string]: PRIMARY }}
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

/* ---------- Skill Validation ---------- */

function SkillValidationCard({ reduced }: { reduced: boolean }) {
  const tilt = useTilt(reduced, 6)
  const bars = [0.4, 0.65, 0.5, 0.85, 0.7]

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
      <GlassPanel className="flex h-full flex-col gap-4 p-8">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: TINT }}
          whileHover={reduced ? undefined : { rotate: 8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Activity className="h-7 w-7" style={{ color: PRIMARY }} strokeWidth={1.75} />
        </motion.div>

        <h3 className="text-lg font-bold" style={{ color: INK }}>
          Skill Validation
        </h3>
        <p className="text-sm leading-relaxed text-slate-500">
          Demonstrate your knowledge through structured professional assessments.
        </p>

        <div className="relative mt-2 flex h-20 items-end gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="h-full flex-1 rounded-t-md"
              style={{ background: `linear-gradient(to top, ${PRIMARY}, ${SECONDARY})`, transformOrigin: 'bottom' }}
              initial={{ scaleY: reduced ? h : 0 }}
              whileInView={{ scaleY: h }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
            />
          ))}
          <motion.span
            className="absolute -top-2 right-0 rounded-full px-2.5 py-1 text-[11px] font-bold"
            style={{ background: TINT, color: PRIMARY }}
            animate={reduced ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            98% Pass Rate
          </motion.span>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

/* ---------- Digital Credential ---------- */

function DigitalCredentialCard({ reduced }: { reduced: boolean }) {
  const tilt = useTilt(reduced, 6)

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
      <GlassPanel className="flex h-full flex-col gap-4 p-8">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: TINT }}
          whileHover={reduced ? undefined : { rotate: 8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <BadgeCheck className="h-7 w-7" style={{ color: PRIMARY }} strokeWidth={1.75} />
        </motion.div>

        <h3 className="text-lg font-bold" style={{ color: INK }}>
          Digital Credential
        </h3>
        <p className="text-sm leading-relaxed text-slate-500">
          Receive a professional digital certificate after successfully meeting certification
          requirements.
        </p>

        <motion.div
          className="relative mt-2 flex items-center gap-3 overflow-hidden rounded-2xl border border-white/70 p-3"
          style={{ background: `linear-gradient(135deg, ${TINT}, #ffffff)` }}
          animate={reduced ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 h-8"
            style={{ background: `linear-gradient(to bottom, transparent, ${SECONDARY}25, transparent)` }}
            animate={reduced ? undefined : { y: ['-2rem', '6rem'] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
          />
          <div className="grid grid-cols-4 gap-[3px]">
            {QR_PATTERN.map((row, ri) =>
              row.map((on, ci) => (
                <span
                  key={`${ri}-${ci}`}
                  className="h-[5px] w-[5px] rounded-[1px]"
                  style={{ background: on ? PRIMARY : 'transparent' }}
                />
              )),
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold" style={{ color: INK }}>
              CertiByt Certified
            </p>
            <p className="text-[10px] text-slate-400">CB-DS-2025-5A7F9C</p>
          </div>
          <BadgeCheck className="h-5 w-5 shrink-0" style={{ color: PRIMARY }} />
        </motion.div>
      </GlassPanel>
    </motion.div>
  )
}

const QR_PATTERN = [
  [1, 1, 0, 1],
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 0],
]

/* ---------- Public Verification (wide) ---------- */

const STATS = [
  { value: 50000, suffix: '+', label: 'Certificates Issued' },
  { value: 300, suffix: '+', label: 'Organizations' },
]

function useCountUp(target: number, active: boolean, duration = 1.6) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let raf: number
    function step(ts: number) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return value
}

function StatCounter({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, active)
  return (
    <div className="text-center sm:text-left">
      <p className="text-3xl font-extrabold sm:text-4xl" style={{ color: PRIMARY }}>
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
    </div>
  )
}

function PublicVerificationCard({ reduced }: { reduced: boolean }) {
  const tilt = useTilt(reduced, 3)
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.6 })

  return (
    <motion.div
      ref={tilt.ref}
      onMouseEnter={tilt.onEnter}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      whileHover={reduced ? undefined : { scale: 1.01, y: -3 }}
      style={tilt.style}
      className="group relative overflow-hidden rounded-[28px] p-[1px] transition-shadow duration-300"
    >
      <GradientBorder reduced={reduced} />
      <GlassPanel className="grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <span
            className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide"
            style={{ background: TINT, color: PRIMARY }}
          >
            PUBLIC VERIFICATION
          </span>
          <h3 className="mt-5 text-2xl font-bold sm:text-3xl" style={{ color: INK }}>
            Verify Any Credential, Instantly
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
            Allow employers and institutions to independently verify your credential — publicly,
            in seconds, anywhere in the world.
          </p>

          <div className="mt-7 flex items-center gap-3 rounded-2xl border border-navy/10 bg-white/80 p-2 pl-4 shadow-sm">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="flex-1 truncate text-sm text-slate-400">e.g. CB-DS-2025-5A7F9C</span>
            <Link
              href="/verify"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`, ['--tw-ring-color' as string]: PRIMARY }}
            >
              Verify
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {ORG_TYPES.map((org) => (
              <span
                key={org.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-500"
              >
                <org.icon className="h-3.5 w-3.5" style={{ color: PRIMARY }} />
                {org.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div className="relative mx-auto w-full max-w-xs rounded-2xl border border-white/70 bg-white/85 p-5 shadow-lg">
            <motion.div
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.3 }}
            >
              <CheckCircle2 className="h-5 w-5" />
            </motion.div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Verification Result</p>
            <p className="mt-2 text-base font-bold" style={{ color: INK }}>
              Aman Raj
            </p>
            <p className="text-xs text-slate-400">Data Science Professional</p>
            <div className="mt-3 flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: TINT }}>
              <QrCode className="h-4 w-4" style={{ color: PRIMARY }} />
              <span className="text-[11px] font-semibold" style={{ color: PRIMARY }}>
                Authentic &amp; Verified
              </span>
            </div>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={statsInView} />
            ))}
            <div className="col-span-2 text-center sm:text-left">
              <p className="flex items-center justify-center gap-2 text-lg font-extrabold sm:justify-start" style={{ color: PRIMARY }}>
                <Globe2 className="h-5 w-5" />
                Global
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500">Verification, anywhere</p>
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
