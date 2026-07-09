import logo from '../assets/dark_themeee.png'

const COLUMNS = [
  {
    title: 'Certifications',
    links: [
      { label: 'Explore Certifications', href: '/certifications' },
      { label: 'Certification Categories', href: '/certifications/categories' },
      { label: 'Featured Certifications', href: '/certifications/featured' },
    ],
  },
  {
    title: 'For Organizations',
    links: [
      { label: 'Universities & Colleges', href: '/organizations/universities' },
      { label: 'Training Institutes', href: '/organizations/training-institutes' },
      { label: 'Corporate Organizations', href: '/organizations/corporate' },
      { label: 'Become a Certification Partner', href: '/organizations/partner' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Secure Assessments', href: '/resources/secure-assessments' },
      { label: 'Digital Credentials', href: '/resources/digital-credentials' },
      { label: 'Certificate Verification', href: '/resources/verification' },
      { label: 'Help & Support', href: '/resources/help' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Verify Certificate', href: '/verify' },
      { label: 'About Us', href: '/about' },
    ],
  },
]

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
] as const

function SocialIcon({ icon }: { icon: (typeof SOCIALS)[number]['icon'] }) {
  const common = { className: 'h-4.5 w-4.5', viewBox: '0 0 24 24', fill: 'currentColor' } as const
  if (icon === 'linkedin') {
    return (
      <svg {...common}>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.77V21h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.5-2.26 3.1V21H9z" />
      </svg>
    )
  }
  if (icon === 'twitter') {
    return (
      <svg {...common}>
        <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 0 1-1.9.1c.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2z"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <img src={logo} alt="Certibyt" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Secure, verifiable digital certifications trusted by institutions and professionals
              worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-royal hover:text-white"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/50 transition-colors hover:text-cyan-glow">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} CertiByt. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="/privacy" className="hover:text-cyan-glow">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-glow">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
