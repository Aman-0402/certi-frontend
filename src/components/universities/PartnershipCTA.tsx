import { Link } from 'wouter'
import ctaImg from '../../assets/university-partnership-cta.webp'

export default function PartnershipCTA() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img src={ctaImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/10 sm:via-navy/55 sm:to-transparent" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="max-w-lg">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            CERTIFICATION PARTNERSHIP
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Create More Certification Opportunities for Your Students
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Join CertiByt as an institutional certification partner and connect your students
            with secure assessments and verifiable professional credentials.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/organizations/partner"
              className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-royal shadow-glow transition-colors hover:bg-white/90"
            >
              Become a Certification Partner
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-cyan-glow hover:text-cyan-glow"
            >
              Talk to Our Team
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-white/40">
            Universities &middot; Colleges &middot; Higher Education Institutions
          </p>
        </div>
      </div>
    </section>
  )
}
