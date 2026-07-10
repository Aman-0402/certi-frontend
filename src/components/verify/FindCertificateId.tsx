import credentialImg from '../../assets/verified-credential.webp'

export default function FindCertificateId() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Where Can I Find My Certificate ID?</h2>
          <p className="mt-4 max-w-md text-navy/60">
            Your Certificate ID is printed on your CertiByt digital certificate. Enter the
            complete ID exactly as displayed to verify the credential.
          </p>
          <p className="mt-4 text-sm text-navy/45">Certificate IDs may contain letters, numbers, and hyphens.</p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <img src={credentialImg} alt="Sample CertiByt certificate" loading="lazy" className="w-full rounded-2xl border border-navy/10 shadow-sm" />

          <div className="pointer-events-none absolute bottom-[12%] left-[8%] w-[42%]">
            <div className="rounded-md border-2 border-royal shadow-[0_0_0_4px_rgba(34,85,255,0.15)]" style={{ aspectRatio: '4 / 1' }} />
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-royal px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
              &uarr; Certificate ID
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
