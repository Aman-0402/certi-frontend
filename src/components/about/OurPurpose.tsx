function SkillToCertificateFlow() {
  return (
    <svg viewBox="0 0 260 80" fill="none" className="mx-auto w-full max-w-xs" aria-hidden>
      <path d="M40 40h180" stroke="#2255ff" strokeWidth="1.4" strokeDasharray="4 4" opacity="0.4" />

      <g>
        <circle cx="40" cy="40" r="22" fill="rgba(34,85,255,0.06)" stroke="#2255ff" strokeWidth="1.4" />
        <path d="M40 30l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10v-6l8-4z" stroke="#2255ff" strokeWidth="1.3" strokeLinejoin="round" />
      </g>

      <g>
        <circle cx="130" cy="40" r="22" fill="rgba(34,85,255,0.06)" stroke="#2255ff" strokeWidth="1.4" />
        <rect x="120" y="30" width="20" height="16" rx="1.6" stroke="#2255ff" strokeWidth="1.2" />
        <path d="M125 38l3 3 7-6" stroke="#2255ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g>
        <circle cx="220" cy="40" r="22" fill="rgba(34,85,255,0.06)" stroke="#2255ff" strokeWidth="1.4" />
        <rect x="210" y="29" width="20" height="18" rx="1.4" stroke="#2255ff" strokeWidth="1.2" />
        <path d="M214 34h12M214 38h12M214 42h8" stroke="#2255ff" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function OurPurpose() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">Why CertiByt Exists</h2>

        <div className="mt-4 flex justify-center">
          <SkillToCertificateFlow />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <p className="text-2xl font-bold leading-snug text-navy sm:text-3xl">
            Skills Deserve More Than Claims. They Deserve Verification.
          </p>

          <div className="flex flex-col gap-4 text-navy/60">
            <p>
              Professional skills are increasingly developed across universities, training
              institutes, workplaces, and independent learning journeys.
            </p>
            <p>
              CertiByt exists to provide a secure certification infrastructure where candidates
              can demonstrate their knowledge through structured assessments and earn credentials
              that can be verified online.
            </p>
            <p className="font-semibold text-navy">
              Our focus is simple: make professional certification more accessible, secure, and
              trustworthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
