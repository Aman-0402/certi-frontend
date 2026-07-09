type Cert = {
  title: string
  category: string
  questions: number
  minutes: number
  price: number
  icon: 'java' | 'data' | 'ai' | 'web' | 'cloud' | 'security'
  color: string
}

const CERTS: Cert[] = [
  { title: 'Java Programming Professional', category: 'Programming', questions: 60, minutes: 90, price: 999, icon: 'java', color: '#e11d48' },
  { title: 'Data Science Professional', category: 'Data Science', questions: 50, minutes: 75, price: 1499, icon: 'data', color: '#2255ff' },
  { title: 'Artificial Intelligence Professional', category: 'AI & Machine Learning', questions: 60, minutes: 90, price: 1799, icon: 'ai', color: '#14b8a6' },
  { title: 'Web Development Professional', category: 'Web Development', questions: 60, minutes: 90, price: 999, icon: 'web', color: '#f97316' },
  { title: 'Cloud Computing Professional', category: 'Cloud Computing', questions: 50, minutes: 75, price: 1299, icon: 'cloud', color: '#2255ff' },
  { title: 'Cybersecurity Professional', category: 'Cybersecurity', questions: 60, minutes: 90, price: 1299, icon: 'security', color: '#16a34a' },
]

function CertIcon({ icon, color }: { icon: Cert['icon']; color: string }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', style: { color } } as const
  const cls = 'h-8 w-8'

  if (icon === 'java') {
    return (
      <svg {...common} className={cls}>
        <path d="M9 15c-1 1.5 0 3 3 3s4-1 4-2.3-1.3-1.9-3-2.3M8 19c-1 .3-1.5.9-1 1.5.6.7 3 .8 5-.2M7 6c-1.3 1.3-.5 2.6 1 3.6-1 .6-1.8 1.4-.5 2.4M13 3c1 1 .3 2-.3 2.7-.9 1-.9 1.8.3 2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'data') {
    return (
      <svg {...common} className={cls}>
        <path d="M4 20V10M9.5 20V4M15 20v-7M20 20V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 12l5.5-4L15 11l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'ai') {
    return (
      <svg {...common} className={cls}>
        <path d="M12 4a3 3 0 0 0-3 3v.3A3 3 0 0 0 7 10v1a3 3 0 0 0 0 6 3 3 0 0 0 3 3M12 4a3 3 0 0 1 3 3v.3A3 3 0 0 1 17 10v1a3 3 0 0 1 0 6 3 3 0 0 1-3 3M12 4v16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'web') {
    return (
      <svg {...common} className={cls}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 9 7 12l2.5 3M14.5 9 17 12l-2.5 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'cloud') {
    return (
      <svg {...common} className={cls}>
        <path d="M7 18a4 4 0 0 1-.7-7.94 5 5 0 0 1 9.6-1.9A4.5 4.5 0 0 1 17.5 18H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common} className={cls}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Certifications() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Explore Professional Certifications</h2>
            <p className="mt-2 max-w-xl text-navy/60">
              Choose a certification, prove your expertise through a secure assessment, and earn a
              verifiable digital credential.
            </p>
          </div>
          <a href="/certifications" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-royal hover:text-royal-600">
            View All Certifications
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.slice(0, 4).map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-glow"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${cert.color}1a` }}
              >
                <CertIcon icon={cert.icon} color={cert.color} />
              </div>

              <h3 className="mt-4 text-base font-bold leading-snug text-navy">{cert.title}</h3>
              <p className="mt-1 text-sm font-medium text-royal">{cert.category}</p>

              <p className="mt-3 text-sm text-navy/50">
                {cert.questions} Questions &middot; {cert.minutes} Minutes
                <br />
                Secure Assessment
              </p>

              <p className="mt-4 text-xl font-bold text-navy">&#8377;{cert.price.toLocaleString('en-IN')}</p>

              <a
                href={`/certifications/${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="mt-4 rounded-lg bg-royal py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-royal-600"
              >
                View Certification
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
