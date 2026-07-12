import { Link } from 'wouter'
import ctaBg from '../../assets/corporate-partnership-cta.webp'

export default function CorporatePartnershipCTA() {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-navy sm:min-h-[620px]">
      <img
        src={ctaBg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto flex min-h-[520px] max-w-[1600px] items-center px-6 py-20 sm:min-h-[620px] sm:px-10 lg:px-16 lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            CORPORATE CERTIFICATION PARTNERSHIP
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.55)] sm:text-4xl">
            Build a Workforce With Skills That Can Be Verified
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/70 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
            Partner with CertiByt to connect your teams with secure professional assessments and
            digitally verifiable certification opportunities.
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

          <p className="mt-8 text-sm font-medium text-white/50 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            Technology Teams &middot; Professional Departments &middot; Workforce Development
          </p>
        </div>
      </div>
    </section>
  )
}
