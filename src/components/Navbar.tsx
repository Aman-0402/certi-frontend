import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'wouter'
import logo from '../assets/light_themeee.png'

type DropdownItem = { label: string; href: string }
type DropdownKey = 'organizations' | 'resources'

const DROPDOWNS: Record<DropdownKey, DropdownItem[]> = {
  organizations: [
    { label: 'Universities & Colleges', href: '/organizations/universities' },
    { label: 'Training Institutes', href: '/organizations/training-institutes' },
    { label: 'Corporate Organizations', href: '/organizations/corporate' },
    { label: 'Become a Certification Partner', href: '/organizations/partner' },
  ],
  resources: [
    { label: 'Secure Assessments', href: '/resources/secure-assessments' },
    { label: 'Digital Credentials', href: '/resources/digital-credentials' },
    { label: 'Help & Support', href: '/resources/help' },
  ],
}

const DROPDOWN_LABELS: Record<DropdownKey, string> = {
  organizations: 'For Organizations',
  resources: 'Resources',
}

function NavDropdown({
  id,
  open,
  onToggle,
  onClose,
}: {
  id: DropdownKey
  open: boolean
  onToggle: (id: DropdownKey) => void
  onClose: () => void
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-navy/80 transition-colors hover:text-royal"
      >
        {DROPDOWN_LABELS[id]}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-64 rounded-xl border border-navy/10 bg-white/90 p-2 shadow-glow backdrop-blur-lg">
          {DROPDOWNS[id].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block rounded-lg px-3 py-2 text-sm text-navy/80 transition-colors hover:bg-royal/10 hover:text-royal"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  const toggleDropdown = (id: DropdownKey) => setOpenDropdown((current) => (current === id ? null : id))
  const closeDropdown = () => setOpenDropdown(null)

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-royal ${location === path ? 'text-royal' : 'text-navy/80'}`

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-navy/10 bg-white/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Certibyt" className="h-8 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/certifications" className={navLinkClass('/certifications')}>
            Certifications
          </Link>
          <NavDropdown id="organizations" open={openDropdown === 'organizations'} onToggle={toggleDropdown} onClose={closeDropdown} />
          <Link href="/how-it-works" className={navLinkClass('/how-it-works')}>
            How It Works
          </Link>
          <Link href="/verify" className={navLinkClass('/verify')}>
            Verify Certificate
          </Link>
          <Link href="/about" className={navLinkClass('/about')}>
            About Us
          </Link>
          <NavDropdown id="resources" open={openDropdown === 'resources'} onToggle={toggleDropdown} onClose={closeDropdown} />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/sign-in"
            className="rounded-lg border border-royal/40 bg-white/90 px-4 py-2 text-sm font-medium text-royal shadow-sm backdrop-blur-sm transition-colors hover:bg-royal/5"
          >
            Sign In
          </Link>
          <Link
            href="/get-certified"
            className="rounded-lg bg-royal px-4 py-2 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
          >
            Get Certified
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy/15 text-navy/80 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-navy/10 bg-white/95 px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <Link href="/certifications" className="block px-1 py-3 text-sm font-medium text-navy/80">Certifications</Link>
          {(Object.keys(DROPDOWNS) as DropdownKey[]).map((key) => (
            <div key={key} className="border-b border-navy/5 py-2">
              <p className="px-1 py-2 text-sm font-semibold text-navy">{DROPDOWN_LABELS[key]}</p>
              {DROPDOWNS[key].map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-navy/70 hover:text-royal">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/how-it-works" className="block px-1 py-3 text-sm font-medium text-navy/80">How It Works</Link>
          <Link href="/verify" className="block px-1 py-3 text-sm font-medium text-navy/80">Verify Certificate</Link>
          <Link href="/about" className="block px-1 py-3 text-sm font-medium text-navy/80">About Us</Link>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/sign-in" className="rounded-lg border border-royal/40 px-4 py-2 text-center text-sm font-medium text-royal">
              Sign In
            </Link>
            <Link href="/get-certified" className="rounded-lg bg-royal px-4 py-2 text-center text-sm font-semibold text-white shadow-glow">
              Get Certified
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
