import { motion } from 'framer-motion'

export default function VerifyHero({
  certId,
  onChange,
  onSubmit,
}: {
  certId: string
  onChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          color: '#0a1128',
        }}
      />

      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute -left-10 top-1/3 h-64 w-64 text-royal opacity-[0.08]"
      >
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 text-royal opacity-[0.07]"
      >
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1" />
        <path d="M8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <div className="relative mx-auto max-w-[1000px] px-6 py-20 text-center sm:px-10 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            PUBLIC CERTIFICATE VERIFICATION
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">Verify</span> a CertiByt
            Certificate
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-navy/60">
            Enter the Certificate ID shown on your CertiByt certificate to verify its
            authenticity and view credential details.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-navy/10 bg-white p-6 text-left shadow-glow sm:p-8"
          >
            <label htmlFor="certId" className="text-sm font-semibold text-navy">
              Certificate ID
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="certId"
                value={certId}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter your Certificate ID"
                className="w-full flex-1 rounded-lg border border-navy/15 bg-white px-4 py-3.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
              >
                Verify Certificate
              </button>
            </div>
            <p className="mt-3 text-xs text-navy/45">
              Enter the Certificate ID exactly as shown on the certificate, e.g. CB-DS-2025-5A7F9C
            </p>
          </form>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-navy/45">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="10" width="14" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Public verification &middot; No sign in required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
