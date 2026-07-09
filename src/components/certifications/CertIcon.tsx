import type { CertIcon as CertIconType } from '../../data/certifications'

export default function CertIcon({ icon, className = 'h-7 w-7' }: { icon: CertIconType; className?: string }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none' } as const

  if (icon === 'java') {
    return (
      <svg {...common}>
        <path d="M9 15c-1 1.5 0 3 3 3s4-1 4-2.3-1.3-1.9-3-2.3M8 19c-1 .3-1.5.9-1 1.5.6.7 3 .8 5-.2M7 6c-1.3 1.3-.5 2.6 1 3.6-1 .6-1.8 1.4-.5 2.4M13 3c1 1 .3 2-.3 2.7-.9 1-.9 1.8.3 2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'data') {
    return (
      <svg {...common}>
        <path d="M4 20V10M9.5 20V4M15 20v-7M20 20V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 12l5.5-4L15 11l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'ai') {
    return (
      <svg {...common}>
        <path d="M12 4a3 3 0 0 0-3 3v.3A3 3 0 0 0 7 10v1a3 3 0 0 0 0 6 3 3 0 0 0 3 3M12 4a3 3 0 0 1 3 3v.3A3 3 0 0 1 17 10v1a3 3 0 0 1 0 6 3 3 0 0 1-3 3M12 4v16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'web') {
    return (
      <svg {...common}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 9 7 12l2.5 3M14.5 9 17 12l-2.5 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'cloud') {
    return (
      <svg {...common}>
        <path d="M7 18a4 4 0 0 1-.7-7.94 5 5 0 0 1 9.6-1.9A4.5 4.5 0 0 1 17.5 18H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'security') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'devops') {
    return (
      <svg {...common}>
        <path d="M8 12a4 4 0 1 1 4 4M16 12a4 4 0 1 1-4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="8" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="16" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M4 19V13M9.5 19V9M15 19v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 12l5.5-4.5L15 10.5l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
