import { motion } from 'framer-motion'
import type { Step } from './types'

export default function JourneyVertical({ steps }: { steps: Step[] }) {
  return (
    <div className="relative bg-[#F8FAFF] px-6 py-16 sm:px-10">
      <div className="relative mx-auto max-w-lg">
        <div aria-hidden className="absolute left-9 top-2 h-[calc(100%-1rem)] w-[3px] rounded-full bg-navy/10" />

        <div className="flex flex-col gap-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative flex gap-5"
            >
              {i < steps.length - 1 && (
                <motion.div
                  aria-hidden
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 + 0.2 }}
                  style={{ transformOrigin: 'top' }}
                  className="absolute left-9 top-2 h-[calc(100%+3.5rem)] w-[3px] rounded-full bg-gradient-to-b from-royal to-cyan-glow/50"
                />
              )}

              <div className="relative shrink-0">
                <span className="absolute -left-2.5 -top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan-glow text-[11px] font-bold text-white shadow-glow">
                  {step.number}
                </span>
                <div className="flex h-20 w-20 items-center justify-center rounded-[18px] border border-white/70 bg-white/60 p-3 shadow-[0_8px_24px_-8px_rgba(34,85,255,0.3)] backdrop-blur-xl">
                  <img src={step.image} alt="" className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="flex-1 rounded-[22px] border border-[rgba(37,99,235,0.14)] bg-gradient-to-b from-white to-[#f3f7ff] p-5 shadow-sm">
                <h3 className="text-base font-bold leading-snug text-navy">{step.title}</h3>
                <div className="mt-2 h-0.5 w-8 rounded-full bg-royal/60" />
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center text-lg font-bold text-navy"
        >
          Your skills. Assessed.{' '}
          <span className="bg-gradient-to-r from-royal to-cyan-glow bg-clip-text text-transparent">Verified.</span> Recognized.
        </motion.p>
      </div>
    </div>
  )
}
