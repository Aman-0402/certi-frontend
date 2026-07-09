import assessmentImg from '../assets/secure-assessment.webp'
import credentialImg from '../assets/verified-credential.webp'

const PROCTORING_FEATURES = [
  { title: 'AI-Assisted Proctoring', desc: 'Detect suspicious behavior in real-time', icon: 'ai' },
  { title: 'Fullscreen Protection', desc: 'Prevent tab-switching and screen exit', icon: 'fullscreen' },
  { title: 'Tab Activity Monitoring', desc: 'Detect unauthorized navigation', icon: 'activity' },
  { title: 'Auto-Saved Answers', desc: 'Your progress is saved automatically', icon: 'save' },
] as const

const CREDENTIAL_FEATURES = [
  { title: 'Verified Credential', desc: 'Authentic & Verified', icon: 'verified' },
  { title: 'Credential ID', desc: 'CB-DS-2025-5A7F9C', icon: 'id' },
  { title: 'Public Verification', desc: 'Anyone can verify', icon: 'globe' },
  { title: 'Share & Download', desc: 'PDF Certificate', icon: 'download' },
] as const

function ProctoringIcon({ icon }: { icon: (typeof PROCTORING_FEATURES)[number]['icon'] }) {
  const common = { className: 'h-5 w-5 text-cyan-glow', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'ai') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'fullscreen') {
    return (
      <svg {...common}>
        <path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'activity') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="12" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 12l2.5 2.5L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CredentialIcon({ icon }: { icon: (typeof CREDENTIAL_FEATURES)[number]['icon'] }) {
  const common = { className: 'h-5 w-5 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'verified') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'id') {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="10.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.5 15.5c.6-1.4 1.6-2 2.5-2s1.9.6 2.5 2M14 9.5h4M14 12.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'globe') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 12h17M12 3.5c2.5 2.3 4 5.3 4 8.5s-1.5 6.2-4 8.5c-2.5-2.3-4-5.3-4-8.5s1.5-6.2 4-8.5z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Integrity() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative overflow-hidden bg-navy">
        <img
          src={assessmentImg}
          alt="Secure online exam in a modern workspace"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />

        <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <h2 className="max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
            Certification Integrity Starts With Secure Assessment
          </h2>
          <p className="mt-4 max-w-sm text-white/60">
            Our advanced proctoring and monitoring systems ensure a fair, secure and trustworthy
            examination experience for every candidate.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {PROCTORING_FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <ProctoringIcon icon={f.icon} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="text-sm text-white/50">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex flex-col px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
            More Than a Certificate.
            <br />
            A Credential That Can Be Verified.
          </h2>
          <p className="mt-4 max-w-md text-navy/60">
            Every CertiByt credential carries a unique identity and can be publicly verified by
            anyone, anywhere.
          </p>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
            <img
              src={credentialImg}
              alt="Digital certificate and global verification"
              loading="lazy"
              className="w-full max-w-md rounded-xl border border-navy/10 shadow-sm lg:w-3/5"
            />

            <div className="flex flex-1 flex-col gap-5">
              {CREDENTIAL_FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-royal/10">
                    <CredentialIcon icon={f.icon} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{f.title}</p>
                    <p className="text-sm text-navy/50">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
