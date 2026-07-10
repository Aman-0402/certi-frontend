import { Link } from 'wouter'
import { motion } from 'framer-motion'
import heroImg from '../../assets/partner-hero.webp'

const TRUST_POINTS = ['Institutional Collaboration', 'Secure Certification Delivery', 'Verifiable Digital Credentials']

export default function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            CERTIFICATION PARTNERSHIP
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Partner With CertiByt to Create More{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">
              Certification Opportunities
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-navy/60">
            Join the CertiByt certification ecosystem and connect your students, learners,
            employees, or professional communities with secure assessments and digitally
            verifiable credentials.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#enquiry-form"
              className="rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Start Partnership Enquiry
            </a>
            <Link
              href="/certifications"
              className="rounded-lg border border-royal/40 px-7 py-3.5 text-sm font-medium text-royal transition-colors hover:bg-royal/5"
            >
              Explore Certifications
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <span key={point} className="flex items-center gap-2 text-sm font-medium text-navy/60">
                <svg className="h-4 w-4 text-royal" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div aria-hidden className="absolute inset-0 rounded-full bg-royal/20 blur-3xl" />
          <img
            src={heroImg}
            alt="Certification opportunities"
            className="relative w-full rounded-2xl border border-navy/10 shadow-glow"
          />
        </motion.div>
      </div>
    </section>
  )
}
