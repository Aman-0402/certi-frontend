import { Link } from 'wouter'
import { motion } from 'framer-motion'
import heroImg from '../../assets/about-hero.webp'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            ABOUT CERTIBYT
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Building a More{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">Trusted Future</span> for{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">Professional Certification</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-navy/60">
            CertiByt is a digital certification platform built to connect individuals and
            organizations with secure professional assessments and digitally verifiable
            credentials.
          </p>
          <p className="mt-4 max-w-lg text-navy/55">
            We are creating a certification ecosystem where skills can be assessed securely,
            achievements can be recognized digitally, and credentials can be independently
            verified.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/certifications"
              className="rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Explore Certifications
            </Link>
            <Link
              href="/organizations/partner"
              className="rounded-lg border border-royal/40 px-7 py-3.5 text-sm font-medium text-royal transition-colors hover:bg-royal/5"
            >
              Partner With CertiByt
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full"
        >
          <div aria-hidden className="absolute inset-0 rounded-full bg-royal/20 blur-3xl" />
          <img src={heroImg} alt="CertiByt certification ecosystem" className="relative w-full rounded-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
