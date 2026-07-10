import { motion } from 'framer-motion'
import heroImg from '../../assets/world.webp'

export default function CatalogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto grid max-w-[1600px] items-start gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[55%_45%] lg:px-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            GLOBAL CERTIFICATION CATALOG
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Explore{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-navy/60">
            Discover professional certification programs designed to help you validate your
            skills, demonstrate your expertise, and earn a digitally verifiable credential.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full"
        >
          <div aria-hidden className="absolute inset-0 rounded-full bg-royal/25 blur-3xl" />
          <motion.img
            src={heroImg}
            alt=""
            aria-hidden
            className="relative aspect-video w-full rounded-3xl object-cover shadow-glow"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
