import { Link } from 'wouter'
import platformImg from '../../assets/org-platform.webp'

const FEATURES = [
  'Candidate Management',
  'Voucher Access',
  'Secure Assessments',
  'Results & Analytics',
  'Digital Certificates',
  'Certification Monitoring',
]

export default function Platform() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div className="relative mx-auto w-full max-w-xl">
          <div aria-hidden className="absolute inset-0 rounded-3xl bg-royal/10 blur-2xl" />
          <img
            src={platformImg}
            alt="CertiByt certification management platform"
            loading="lazy"
            className="relative w-full rounded-2xl border border-navy/10 shadow-sm"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Everything You Need to Deliver Certification Opportunities
          </h2>
          <p className="mt-4 max-w-lg text-lg text-navy/60">
            Manage certification access, candidates, assessments, results, and digital credentials
            through one unified organization platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {FEATURES.map((f) => (
              <span key={f} className="rounded-full border border-navy/10 bg-royal/5 px-4 py-2 text-sm font-medium text-navy/75">
                {f}
              </span>
            ))}
          </div>

          <Link
            href="/organizations/partner"
            className="mt-8 inline-block rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
          >
            Explore Partnership
          </Link>
        </div>
      </div>
    </section>
  )
}
