import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function JourneyHero() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          color: '#0a1128',
        }}
      />
      <div className="relative mx-auto max-w-[1600px] px-6 pb-0 pt-24 text-center sm:px-10 lg:px-16">
        <h1 className="flex flex-wrap items-center justify-center gap-x-4 overflow-hidden text-5xl font-extrabold sm:text-6xl">
          <motion.span
            initial={{ y: 70, opacity: 0, filter: 'blur(10px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-navy"
          >
            How It
          </motion.span>
          <motion.span
            initial={{ y: 70, opacity: 0, filter: 'blur(10px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-r from-royal to-cyan-glow bg-clip-text text-transparent"
          >
            Works
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg text-navy/60"
        >
          CertiByt makes professional certification simple, secure, and globally verifiable.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 h-1 rounded-full bg-royal"
        />
      </div>
    </section>
  )
}
