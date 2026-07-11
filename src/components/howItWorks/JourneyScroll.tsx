import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import type { Step } from './types'

const PARTICLE_COUNT = 10

function BackgroundLayers({ scrollYProgress }: { scrollYProgress: import('framer-motion').MotionValue<number> }) {
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -45])
  const glowX = useTransform(scrollYProgress, [0, 1], ['5%', '85%'])

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          y: gridY,
          backgroundImage: 'radial-gradient(#2255ff 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          opacity: 0.05,
        }}
        className="pointer-events-none absolute inset-0"
      />
      <motion.div
        aria-hidden
        style={{ left: glowX }}
        className="pointer-events-none absolute top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/10 blur-3xl"
      />
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-glow/40"
          style={{ left: `${8 + i * 8.5}%`, bottom: '-2%' }}
          animate={{ y: [0, -700], opacity: [0, 0.6, 0] }}
          transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.7, ease: 'linear' }}
        />
      ))}
    </>
  )
}

function StepColumn({ step, index, isActive }: { step: Step; index: number; isActive: boolean }) {
  const isFinal = index === 4

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative" style={{ perspective: 900 }}>
        <motion.div
          animate={{
            scale: isActive ? (isFinal ? 1.12 : 1.05) : 0.88,
            opacity: isActive ? 1 : 0.32,
            y: isActive ? -20 : 0,
            rotateY: isActive ? [0, 8, -3, 0] : 0,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative"
        >
          <div
            aria-hidden
            className={`absolute -inset-3 rounded-[26px] bg-royal/20 blur-xl transition-opacity duration-500 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <motion.div
            animate={isActive ? { y: 0 } : { y: [0, -5, 0] }}
            transition={isActive ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className={`relative flex h-24 w-24 items-center justify-center rounded-[20px] border bg-white/50 p-4 shadow-[0_8px_30px_-10px_rgba(34,85,255,0.35)] backdrop-blur-xl transition-colors duration-500 ${
              isActive ? 'border-cyan-glow/50' : 'border-white/60'
            }`}
          >
            <img
              src={step.image}
              alt=""
              className={`h-full w-full object-contain transition-all duration-500 ${isActive ? '' : 'opacity-70 grayscale'}`}
            />

            {isFinal && isActive && (
              <>
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  initial={{ x: '-120%' }}
                  animate={{ x: '120%' }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
                />
                {Array.from({ length: 6 }).map((_, p) => (
                  <motion.div
                    key={p}
                    aria-hidden
                    className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-glow"
                    style={{ left: '50%', top: '50%' }}
                    initial={{ x: 0, y: 0, opacity: 0.9, scale: 1 }}
                    animate={{
                      x: Math.cos((p / 6) * Math.PI * 2) * 42,
                      y: Math.sin((p / 6) * Math.PI * 2) * 42,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                ))}
              </>
            )}
          </motion.div>

          <motion.span
            animate={{ scale: isActive ? [1, 1.35, 1] : 1 }}
            transition={{ duration: 0.5 }}
            className={`absolute -top-3 -left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-glow transition-colors duration-500 ${
              isActive ? 'bg-gradient-to-br from-royal to-cyan-glow' : 'bg-navy/40'
            }`}
          >
            {step.number}
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.35,
          scale: isActive ? 1 : 0.92,
          y: isActive ? -8 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`relative mt-6 w-full max-w-[210px] rounded-[24px] border bg-gradient-to-b from-white to-[#f3f7ff] p-5 text-center shadow-[0_18px_40px_-16px_rgba(10,17,40,0.18)] transition-colors duration-500 ${
          isActive ? 'border-[rgba(37,99,235,0.35)] shadow-[0_20px_45px_-14px_rgba(34,85,255,0.35)]' : 'border-[rgba(37,99,235,0.12)]'
        }`}
      >
        <div
          aria-hidden
          className={`absolute inset-x-6 top-0 h-[3px] rounded-full bg-gradient-to-r from-royal to-cyan-glow transition-opacity duration-500 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <motion.h3
          animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 6, filter: isActive ? 'blur(0px)' : 'blur(0px)' }}
          transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
          className="text-sm font-bold leading-snug text-navy"
        >
          {step.title}
        </motion.h3>
        <motion.div
          animate={{ width: isActive ? 32 : 20, opacity: isActive ? 1 : 0.4 }}
          transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
          className="mx-auto mt-2 h-0.5 rounded-full bg-royal/60"
        />
        <motion.p
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10, filter: isActive ? 'blur(0px)' : 'blur(4px)' }}
          transition={{ duration: 0.45, delay: isActive ? 0.3 : 0 }}
          className="mt-3 text-xs leading-relaxed text-navy/60"
        >
          {step.desc}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default function JourneyScroll({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const particleLeft = useTransform(scrollYProgress, [0, 1], ['1%', '99%'])
  const taglineOpacity = useTransform(scrollYProgress, [0.88, 0.97], [0, 1])
  const taglineY = useTransform(scrollYProgress, [0.88, 0.97], [16, 0])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.round(v * (steps.length - 1))))
    setActiveStep(idx)
  })

  return (
    <div ref={containerRef} className="relative" style={{ height: '360vh' }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-[#F8FAFF] pb-24">
        <BackgroundLayers scrollYProgress={scrollYProgress} />

        <div className="relative mx-auto w-full max-w-[1600px] px-16">
          <div className="relative grid grid-cols-5 gap-6">
            <div aria-hidden className="pointer-events-none absolute left-[10%] right-[10%] top-12 h-[2px] rounded-full bg-navy/10" />
            <motion.div
              aria-hidden
              style={{ width: lineWidth }}
              className="pointer-events-none absolute left-[10%] top-12 h-[2px] max-w-[80%] rounded-full bg-gradient-to-r from-royal to-cyan-glow shadow-[0_0_10px_1px_rgba(34,85,255,0.5)]"
            />
            <motion.div
              aria-hidden
              style={{ left: particleLeft }}
              className="pointer-events-none absolute top-12 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow shadow-[0_0_14px_4px_rgba(94,234,212,0.8)]"
            />

            {steps.map((step, i) => (
              <StepColumn key={step.number} step={step} index={i} isActive={activeStep === i} />
            ))}
          </div>
        </div>

        <motion.div
          style={{ opacity: taglineOpacity, y: taglineY }}
          className="pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-xl font-bold text-navy sm:text-2xl">
            Your skills. Assessed.{' '}
            <span className="bg-gradient-to-r from-royal to-cyan-glow bg-clip-text text-transparent">Verified.</span> Recognized.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
