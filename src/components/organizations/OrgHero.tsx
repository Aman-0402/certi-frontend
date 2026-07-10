import { Link } from 'wouter'
import { motion } from 'framer-motion'
import heroImg from '../../assets/org-hero.webp'

export default function OrgHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <img src={heroImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 sm:via-white/70 sm:to-transparent" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            FOR ORGANIZATIONS
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Bring Trusted Certification Opportunities to Your Candidates
          </h1>

          <p className="mt-5 text-lg text-navy/60">
            Partner with CertiByt to deliver secure certification assessments and digitally
            verifiable credentials to your students, learners, or professionals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/organizations/partner"
              className="rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Become a Certification Partner
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-royal/40 bg-white/80 px-7 py-3.5 text-sm font-medium text-royal backdrop-blur-sm transition-colors hover:bg-royal/5"
            >
              Talk to Our Team
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-navy/45">
            Universities &amp; Colleges &middot; Training Institutes &middot; Corporate Organizations
          </p>
        </motion.div>
      </div>
    </section>
  )
}
