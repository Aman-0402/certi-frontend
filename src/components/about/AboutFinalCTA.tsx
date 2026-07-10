import { Link } from 'wouter'
import { motion } from 'framer-motion'

export default function AboutFinalCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 text-center sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
          Be Part of the CertiByt Certification Ecosystem
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-navy/60">
          Whether you want to validate your skills or create certification opportunities for
          your candidates, CertiByt gives you a place to begin.
        </p>

        <div className="relative mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 items-center justify-center lg:flex"
          >
            <svg className="h-16 w-16 text-royal/30" viewBox="0 0 24 24" fill="none">
              <path d="M0 12h9M15 12h9" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-royal/20 bg-white shadow-glow"
            >
              <svg className="h-7 w-7 text-royal" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>

          <div className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8 text-left shadow-sm">
            <h3 className="text-xl font-bold text-navy">Get Certified</h3>
            <p className="mt-3 flex-1 text-sm text-navy/60">
              Explore professional certifications and earn a digitally verifiable credential.
            </p>
            <Link
              href="/certifications"
              className="mt-6 self-start rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Explore Certifications
            </Link>
          </div>

          <div className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8 text-left shadow-sm">
            <h3 className="text-xl font-bold text-navy">Partner With CertiByt</h3>
            <p className="mt-3 flex-1 text-sm text-navy/60">
              Collaborate with CertiByt to provide certification opportunities to students,
              learners, or professional teams.
            </p>
            <Link
              href="/organizations/partner"
              className="mt-6 self-start rounded-lg border border-royal/40 px-6 py-3 text-sm font-medium text-royal transition-colors hover:bg-royal/5"
            >
              Become a Certification Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
