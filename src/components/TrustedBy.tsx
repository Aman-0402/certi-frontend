const ITEMS = [
  { label: 'Universities', icon: 'university' },
  { label: 'Colleges', icon: 'college' },
  { label: 'Training Institutes', icon: 'institute' },
  { label: 'Corporate Organizations', icon: 'corporate' },
  { label: 'Government & NGOs', icon: 'government' },
  { label: 'Global Partners', icon: 'globe' },
] as const

function TrustIcon({ icon }: { icon: (typeof ITEMS)[number]['icon'] }) {
  const common = { className: 'h-7 w-7 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const

  if (icon === 'globe') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 12h17M12 3.5c2.5 2.3 4 5.3 4 8.5s-1.5 6.2-4 8.5c-2.5-2.3-4-5.3-4-8.5s1.5-6.2 4-8.5z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (icon === 'college') {
    return (
      <svg {...common}>
        <path d="M4 10h16M6 10v9M10 10v9M14 10v9M18 10v9M3 19h18M12 3l9 5H3l9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'institute') {
    return (
      <svg {...common}>
        <path d="M5 21V9l4-3 4 3v12M13 21V6l4-2 4 2v15" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'corporate') {
    return (
      <svg {...common}>
        <rect x="4" y="7" width="8" height="14" stroke="currentColor" strokeWidth="1.6" />
        <rect x="12" y="3" width="8" height="18" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 11h2M7 15h2M15 7h2M15 11h2M15 15h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'government') {
    return (
      <svg {...common}>
        <path d="M4 10h16M4 21h16M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 5H3l9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M4 10h16M6 10v9M10 10v9M14 10v9M18 10v9M3 19h18M12 3l9 5H3l9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export default function TrustedBy() {
  return (
    <section className="border-t border-navy/10 bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16">
        <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
          Trusted by Institutions, Organizations &amp; Professionals
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-4 gap-y-8">
          {ITEMS.map((item, i) => (
            <div key={item.label} className="flex items-center">
              {i > 0 && <span className="mr-4 hidden h-8 w-px bg-navy/15 sm:block lg:mr-6" aria-hidden />}
              <div className="flex items-center gap-3">
                <TrustIcon icon={item.icon} />
                <span className="text-base font-semibold text-navy/80 lg:text-lg">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
