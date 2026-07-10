import { motion } from 'framer-motion'

const POPULAR_TOPICS = ['Exam Access', 'Vouchers', 'Certificates', 'Verification']

export default function HelpHero({
  search,
  onChange,
}: {
  search: string
  onChange: (value: string) => void
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute -right-12 top-10 h-72 w-72 text-royal opacity-[0.07]"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
        <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="12" cy="17" r="0.6" fill="currentColor" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute -left-12 bottom-0 h-64 w-64 text-royal opacity-[0.06]"
      >
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="relative mx-auto max-w-[900px] px-6 py-20 text-center sm:px-10 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            CERTIBYT SUPPORT
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            How Can We <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">Help You?</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-navy/60">
            Find answers to common questions or contact the CertiByt support team for assistance
            with certifications, assessments, vouchers, and digital credentials.
          </p>

          <div className="relative mx-auto mt-8 max-w-xl">
            <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/40" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Search for help..."
              className="w-full rounded-xl border border-navy/10 bg-white py-4 pl-12 pr-4 text-sm text-navy shadow-glow outline-none transition-shadow focus:border-royal/40"
            />
          </div>

          <p className="mt-5 text-sm text-navy/45">
            Popular topics:{' '}
            {POPULAR_TOPICS.map((t, i) => (
              <span key={t}>
                {i > 0 && ' · '}
                <button type="button" onClick={() => onChange(t)} className="font-medium text-navy/60 hover:text-royal">
                  {t}
                </button>
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
