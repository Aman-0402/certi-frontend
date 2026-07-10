import credentialImg from '../assets/verified-credential.webp'

const CREDENTIAL_FEATURES = [
  { title: 'Verified Credential', desc: 'Authentic & Verified', icon: 'verified' },
  { title: 'Credential ID', desc: 'CB-DS-2025-5A7F9C', icon: 'id' },
  { title: 'Public Verification', desc: 'Anyone can verify', icon: 'globe' },
  { title: 'Share & Download', desc: 'PDF Certificate', icon: 'download' },
] as const

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

export default function VerifiedCredential() {
  return (
    <section className="grid grid-cols-1 bg-white lg:grid-cols-2">
      <div className="order-2 min-h-[320px] bg-[#dce6fa] lg:order-1 lg:min-h-full">
        <img
          src={credentialImg}
          alt="Digital certificate and global verification"
          loading="lazy"
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="order-1 flex flex-col justify-center px-6 py-16 sm:px-10 lg:order-2 lg:px-16 lg:py-24">
        <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
          More Than a Certificate.
          <br />
          A Credential That Can Be Verified.
        </h2>
        <p className="mt-5 max-w-lg text-lg text-navy/60">
          Every CertiByt credential carries a unique identity and can be publicly verified by
          anyone, anywhere.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {CREDENTIAL_FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-royal/10 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <CredentialIcon icon={f.icon} />
              </div>
              <div>
                <p className="text-base font-semibold text-navy">{f.title}</p>
                <p className="text-sm text-navy/50">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
