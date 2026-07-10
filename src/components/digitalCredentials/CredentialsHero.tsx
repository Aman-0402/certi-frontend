import { Link } from 'wouter'
import { motion } from 'framer-motion'
import credentialImg from '../../assets/verified-credential.webp'

const TRUST_POINTS = ['Unique Certificate ID', 'Publicly Verifiable', 'Digital Certificate Access']
const FLOATING_BADGES = ['Verified', 'Credential ID', 'QR Verification', 'Shield Checked']

export default function CredentialsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            DIGITAL CREDENTIALS
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Professional Credentials Built to Be{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">
              Shared and Verified
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-navy/60">
            CertiByt digital credentials provide candidates with a professional record of their
            certification achievement that can be accessed digitally and independently verified
            online.
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
              href="/verify"
              className="rounded-lg border border-royal/40 px-7 py-3.5 text-sm font-medium text-royal transition-colors hover:bg-royal/5"
            >
              Verify Certificate
            </Link>
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
            src={credentialImg}
            alt="CertiByt digital certificate"
            className="relative w-full rounded-2xl border border-navy/10 shadow-glow"
          />

          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {FLOATING_BADGES.map((badge, i) => (
              <span
                key={badge}
                className={`absolute flex items-center gap-1.5 rounded-full border border-navy/10 bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm ${
                  i === 0
                    ? 'left-0 top-4 -translate-x-1/4'
                    : i === 1
                      ? 'right-0 top-1/4 translate-x-1/4'
                      : i === 2
                        ? 'bottom-4 left-0 -translate-x-1/4'
                        : 'bottom-1/4 right-0 translate-x-1/4'
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
