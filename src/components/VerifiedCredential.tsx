import { motion } from 'framer-motion'
import credentialImg from '../assets/verified-credential.webp'

const CREDENTIAL_FEATURES = [
  { title: 'Verified Credential', desc: 'Authentic & Verified', icon: 'verified' },
  { title: 'Credential ID', desc: 'Unique Credential Identity', icon: 'id' },
  { title: 'Public Verification', desc: 'Anyone Can Verify', icon: 'globe' },
  { title: 'Share & Download', desc: 'Downloadable PDF Certificate', icon: 'download' },
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f4f8ff] py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[48%_52%] lg:items-center lg:gap-x-10 lg:gap-y-6 lg:px-16">
        {/* heading + intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-1 lg:col-start-1 lg:row-start-1"
        >
          <h2 className="text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
            More Than a Certificate.
            <br />
            A <span className="text-royal">Credential</span> That Can Be{' '}
            <span className="text-royal">Verified.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-navy/60">
            Every CertiByt credential carries a unique identity and can be publicly verified by
            anyone, anywhere.
          </p>
        </motion.div>

        {/* certificate verification visual */}
        <div className="relative order-2 flex items-center justify-center py-6 lg:order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:py-0">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              backgroundImage: 'radial-gradient(#2255ff 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              opacity: 0.06,
            }}
          />
          <div aria-hidden className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-royal/10 blur-3xl" />

          {[0, 1].map((ring) => (
            <motion.div
              key={ring}
              aria-hidden
              className="pointer-events-none absolute rounded-full border border-royal/20"
              style={{ height: 260 + ring * 70, width: 260 + ring * 70 }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: ring * 0.6 }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24, rotateY: -18, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateY: -8, rotateX: 4 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full max-w-sm"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-8deg) rotateX(4deg)' }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_30px_60px_-15px_rgba(10,17,40,0.35)]">
                <img src={credentialImg} alt="CertiByt digital certificate" loading="lazy" className="w-full" />

                <motion.div
                  aria-hidden
                  className="absolute inset-x-0 h-16 bg-gradient-to-b from-cyan-glow/0 via-cyan-glow/25 to-cyan-glow/0"
                  animate={{ top: ['-15%', '105%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                />
              </div>

              {/* verified shield badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                className="absolute -right-5 -top-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-royal shadow-glow"
              >
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-royal"
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                />
                <svg className="relative h-8 w-8 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>

              {/* floating status card */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                animate={{ y: [0, -6, 0] }}
                className="absolute -bottom-5 -left-6 flex items-center gap-2 rounded-xl border border-royal/10 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur-sm"
                style={{ transform: 'translateZ(40px)' }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-royal/10">
                  <svg className="h-3.5 w-3.5 text-royal" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-xs font-bold text-navy">Credential Verified</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* feature grid */}
        <div className="order-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-3 lg:col-start-1 lg:row-start-2">
          {CREDENTIAL_FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-royal/15 bg-royal/[0.04] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-royal/40 hover:shadow-[0_10px_28px_-8px_rgba(34,85,255,0.25)]"
            >
              <div className="relative inline-flex">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-cyan-glow/0 blur-md transition-all duration-300 group-hover:bg-cyan-glow/40"
                />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-royal/10">
                  <CredentialIcon icon={f.icon} />
                </div>
              </div>
              <p className="mt-3 text-sm font-bold text-navy">{f.title}</p>
              <p className="mt-0.5 text-xs text-navy/50">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
