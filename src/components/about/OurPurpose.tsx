import { motion, useMotionValue, useSpring } from 'framer-motion'

const STAGES = [
  {
    step: '01',
    title: 'Skills Are Everywhere',
    desc: 'Professional skills are increasingly developed across universities, training institutes, workplaces, and independent learning journeys.',
    icon: 'nodes',
  },
  {
    step: '02',
    title: 'Knowledge Needs Proof',
    desc: "CertiByt exists to provide a secure certification infrastructure where candidates can demonstrate their knowledge through structured assessments and earn credentials that can be verified online.",
    icon: 'shield',
  },
  {
    step: '03',
    title: 'Certification Should Be Trusted',
    desc: 'Our focus is simple: make professional certification more accessible, secure, and trustworthy.',
    icon: 'verified',
  },
] as const

function StageIcon({ icon }: { icon: (typeof STAGES)[number]['icon'] }) {
  const common = { className: 'h-5 w-5 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'nodes') {
    return (
      <svg {...common}>
        <circle cx="6" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8.3L10.3 16M16 8.3L13.7 16M8.4 7h7.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 8v5.5l3 1.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 12.3l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function OurPurpose() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const parallaxX = useSpring(mx, { stiffness: 40, damping: 20 })
  const parallaxY = useSpring(my, { stiffness: 40, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 14)
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 14)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#f4f8ff] py-20"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-royal/[0.06] blur-3xl"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            OUR PURPOSE
          </span>
          <h2 className="mt-5 text-2xl font-bold text-navy sm:text-3xl">
            Why <span className="text-royal">CertiByt</span> Exists
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-royal to-cyan-glow shadow-[0_0_10px_1px_rgba(34,85,255,0.4)]"
          />
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          {/* left: editorial statement */}
          <div className="relative">
            <motion.svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              style={{ x: parallaxX, y: parallaxY }}
              className="pointer-events-none absolute -left-6 -top-10 h-40 w-40 text-royal opacity-[0.05] sm:-left-10 sm:-top-16 sm:h-72 sm:w-72 lg:h-96 lg:w-96"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <path d="M12 2l8 3v7c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V5l8-3z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
              <path d="M8.5 12.3l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>

            <div className="relative flex gap-5">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ transformOrigin: 'top' }}
                className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-royal to-cyan-glow"
              />

              <motion.p
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl font-bold leading-snug text-navy sm:text-4xl"
              >
                Skills Deserve More Than Claims.
                <br />
                They Deserve{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-royal drop-shadow-[0_0_18px_rgba(34,85,255,0.35)]"
                >
                  Verification.
                </motion.span>
              </motion.p>
            </div>
          </div>

          {/* right: purpose card */}
          <motion.div
            initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[26px] border border-royal/10 bg-white/70 p-8 shadow-[0_20px_50px_-20px_rgba(34,85,255,0.18)] backdrop-blur-sm sm:p-10"
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

            <div className="relative flex flex-col gap-10">
              <motion.div
                aria-hidden
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ transformOrigin: 'top' }}
                className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-[2px] rounded-full bg-gradient-to-b from-royal to-cyan-glow/50"
              />
              <motion.div
                aria-hidden
                className="absolute left-[15px] h-2.5 w-2.5 rounded-full bg-cyan-glow shadow-[0_0_10px_3px_rgba(94,234,212,0.7)]"
                initial={{ top: '0%', opacity: 0 }}
                whileInView={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.6, delay: 0.9, ease: 'easeInOut' }}
              />

              {STAGES.map((stage, i) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                  className="group relative flex gap-5 pl-1"
                >
                  <motion.div
                    initial={{ scale: 0.6, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.15, type: 'spring', stiffness: 160, damping: 14 }}
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-royal/20 bg-white shadow-sm transition-all duration-300 group-hover:border-royal/50 group-hover:shadow-[0_0_14px_2px_rgba(34,85,255,0.3)]"
                  >
                    <StageIcon icon={stage.icon} />
                  </motion.div>

                  <div className="pt-1.5">
                    <span className="text-xs font-bold tracking-wide text-royal/70">STAGE {stage.step}</span>
                    <h3 className="mt-1 text-base font-bold text-navy">{stage.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${i === 2 ? 'font-semibold text-navy' : 'text-navy/60'}`}>
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
