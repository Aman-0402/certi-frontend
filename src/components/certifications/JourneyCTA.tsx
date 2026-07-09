import { Link } from 'wouter'
import journeyBg from '../../assets/journey-bg.webp'

const STEPS = ['Choose Certification', 'Get Exam Access', 'Take Secure Assessment', 'Earn Certificate']

export default function JourneyCTA() {
  return (
    <section className="relative overflow-hidden bg-white">
      <img src={journeyBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 text-center sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-xl text-3xl font-bold text-navy sm:text-4xl">Ready to Prove Your Skills?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-navy/60">
          Choose a professional certification, complete a secure assessment, and earn your
          digitally verifiable CertiByt credential.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {STEPS.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                {step}
              </span>
              {i < STEPS.length - 1 && (
                <svg className="h-4 w-4 text-royal/50" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
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
            How Certification Works
          </Link>
        </div>
      </div>
    </section>
  )
}
