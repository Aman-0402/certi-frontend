import { Link } from 'wouter'
import ctaImg from '../../assets/partner-final-cta.webp'

export default function PartnerFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img src={ctaImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/70 sm:bg-gradient-to-l sm:from-navy/85 sm:via-navy/30 sm:to-transparent" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="ml-auto max-w-lg text-left">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            BUILD WITH CERTIBYT
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Let's Create Trusted Certification Opportunities Together
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Connect your organization with CertiByt and provide candidates access to secure
            assessments and verifiable professional credentials.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#enquiry-form"
              className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-royal shadow-glow transition-colors hover:bg-white/90"
            >
              Start Partnership Enquiry
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-cyan-glow hover:text-cyan-glow"
            >
              Contact CertiByt
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
