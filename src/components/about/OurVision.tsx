import bgImg from '../../assets/our-vision-bg.webp'

const PRINCIPLES = ['Secure Assessment', 'Trusted Credentials', 'Public Verification']

export default function OurVision() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img src={bgImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20 sm:via-navy/60 sm:to-transparent" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="max-w-lg">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-glow">
            OUR VISION
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            A Connected World of Trusted Digital Credentials
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Our vision is to build a certification ecosystem where individuals can prove their
            professional knowledge and organizations can provide trusted certification
            opportunities through secure digital infrastructure.
          </p>
          <p className="mt-4 text-white/50">
            We believe credentials should be easy to access, difficult to misuse, and simple for
            anyone to verify.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {PRINCIPLES.map((p) => (
              <span key={p} className="flex items-center gap-2 text-sm font-medium text-white/70">
                <svg className="h-4 w-4 text-cyan-glow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
