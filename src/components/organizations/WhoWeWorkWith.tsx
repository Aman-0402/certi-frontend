import { Link } from 'wouter'

const AUDIENCES = [
  {
    title: 'Universities & Colleges',
    desc: 'Provide students with professional certification opportunities that help validate their skills and knowledge.',
    button: 'For Academic Institutions',
    href: '/organizations/universities',
    icon: 'academic',
  },
  {
    title: 'Training Institutes',
    desc: 'Extend your training programs with secure assessments and digitally verifiable certification credentials.',
    button: 'For Training Providers',
    href: '/organizations/training-institutes',
    icon: 'institute',
  },
  {
    title: 'Corporate Organizations',
    desc: 'Assess professional knowledge and provide trusted certification opportunities across teams and talent programs.',
    button: 'For Corporates',
    href: '/organizations/corporate',
    icon: 'corporate',
  },
] as const

function AudienceIcon({ icon }: { icon: (typeof AUDIENCES)[number]['icon'] }) {
  const common = { className: 'h-8 w-8 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'academic') {
    return (
      <svg {...common}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5M21 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'institute') {
    return (
      <svg {...common}>
        <path d="M5 21V10l7-4 7 4v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 21h18M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="4" y="7" width="7" height="14" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="3" width="7" height="18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.5 11h2M6.5 15h2M15.5 7h2M15.5 11h2M15.5 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export default function WhoWeWorkWith() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Built for Organizations That Develop Talent</h2>
          <p className="mt-4 text-navy/60">
            CertiByt helps organizations provide structured certification opportunities through a
            secure and scalable digital platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-royal/10">
                <AudienceIcon icon={a.icon} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm text-navy/60">{a.desc}</p>
              <Link href={a.href} className="mt-6 text-sm font-semibold text-royal hover:text-royal-600">
                {a.button} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
