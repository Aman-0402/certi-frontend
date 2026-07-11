import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto max-w-[1600px] px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            GET IN TOUCH
          </span>
          <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Contact{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">Our Team</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-navy/60">
            Have a question about certifications, partnerships, or your account? Send us a
            message and our team will get back to you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
