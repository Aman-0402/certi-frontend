import { motion } from 'framer-motion'
import credentialImg from '../../assets/verified-credential.webp'
import type { VerifiedCertificate } from '../../data/certificates'

export default function VerificationResult({
  status,
  data,
  onReset,
}: {
  status: 'verified' | 'not-found'
  data: VerifiedCertificate | null
  onReset: () => void
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-16">
        {status === 'verified' && data ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-navy/10 bg-white p-8 shadow-glow lg:grid-cols-2 lg:p-12"
          >
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-royal/10">
                <svg className="h-9 w-9 text-royal" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-navy">Certificate Verified</h2>
              <p className="mt-2 text-sm text-navy/60">
                This certificate is authentic and has been verified through CertiByt.
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">Certificate Holder</dt>
                  <dd className="mt-1 text-base font-semibold text-navy">{data.holder}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">Certification Name</dt>
                  <dd className="mt-1 text-base font-semibold text-navy">{data.certificationName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">Certificate ID</dt>
                  <dd className="mt-1 text-base font-semibold text-navy">{data.id}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">Issue Date</dt>
                  <dd className="mt-1 text-base font-semibold text-navy">{data.issueDate}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">Certificate Status</dt>
                  <dd className="mt-1 text-base font-semibold text-royal">{data.status}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-lg bg-royal/5 px-4 py-3 text-sm font-medium text-royal">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Authentic
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Active
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Publicly Verifiable
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={credentialImg}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
                >
                  View Certificate
                </a>
                <button
                  type="button"
                  onClick={onReset}
                  className="rounded-lg border border-royal/40 px-6 py-3 text-sm font-medium text-royal transition-colors hover:bg-royal/5"
                >
                  Verify Another Certificate
                </button>
              </div>
            </div>

            <img
              src={credentialImg}
              alt="Verified CertiByt certificate"
              loading="lazy"
              className="w-full rounded-2xl border border-navy/10 shadow-sm"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-md rounded-2xl border border-navy/10 bg-white p-10 text-center shadow-sm"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
              <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="mt-5 text-xl font-bold text-navy">Certificate Not Found</h2>
            <p className="mt-2 text-sm text-navy/60">
              We couldn't find a CertiByt certificate matching the Certificate ID you entered.
            </p>
            <p className="mt-3 text-xs text-navy/45">Check the Certificate ID and try again.</p>
            <button
              type="button"
              onClick={onReset}
              className="mt-6 rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
