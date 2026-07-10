import { Link } from 'wouter'
import { motion } from 'framer-motion'
import examImg from '../../assets/secure-assessment.webp'

const TRUST_POINTS = ['Secure Exam Sessions', 'Activity Monitoring', 'Assessment Protection']
const FLOATING_BADGES = ['Fullscreen Active', 'Activity Monitored', 'Secure Session', 'Camera Monitoring']

export default function SecureAssessmentsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            SECURE ASSESSMENT TECHNOLOGY
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Certification Assessments{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">
              Built for Integrity
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-navy/60">
            CertiByt provides a security-focused assessment environment designed to protect
            certification integrity and support fair examination experiences.
          </p>

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

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/certifications"
              className="rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Explore Certifications
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-lg border border-royal/40 px-7 py-3.5 text-sm font-medium text-royal transition-colors hover:bg-royal/5"
            >
              How It Works
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
          <img src={examImg} alt="" aria-hidden className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-glow" />

          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {FLOATING_BADGES.map((badge, i) => (
              <span
                key={badge}
                className={`absolute flex items-center gap-1.5 rounded-full border border-navy/10 bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm ${
                  i === 0
                    ? 'left-2 top-6'
                    : i === 1
                      ? 'right-2 top-1/4'
                      : i === 2
                        ? 'bottom-8 left-4'
                        : 'bottom-2 right-6'
                }`}
              >
                <svg className="h-3.5 w-3.5 text-royal" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
