import { useState } from 'react'
import { Link } from 'wouter'

const SUPPORT_TOPICS = [
  { title: 'Certification Support', desc: 'Questions about certification access or exam availability.' },
  { title: 'Assessment Support', desc: 'Help with secure exam sessions or technical assessment issues.' },
  { title: 'Certificate Support', desc: 'Assistance with digital certificates and verification.' },
]

const SUPPORT_TOPIC_OPTIONS = [
  'Certification & Exam Access',
  'Voucher Issue',
  'Assessment Issue',
  'Digital Certificate',
  'Certificate Verification',
  'Account Issue',
  'Other',
]

function SupportIllustration() {
  return (
    <svg viewBox="0 0 260 200" fill="none" className="mx-auto w-full max-w-xs" aria-hidden>
      <g stroke="#2255ff" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4">
        <path d="M130 100 L60 55" />
        <path d="M130 100 L200 55" />
        <path d="M130 100 L130 165" />
      </g>

      <circle cx="130" cy="100" r="30" fill="rgba(34,85,255,0.06)" stroke="#2255ff" strokeWidth="1.4" />
      <path d="M130 88l9 4v9c0 6-4 9.5-9 11.5-5-2-9-5.5-9-11.5v-9l9-4z" stroke="#2255ff" strokeWidth="1.2" strokeLinejoin="round" />

      <g>
        <circle cx="60" cy="55" r="16" fill="rgba(34,85,255,0.06)" stroke="#2255ff" strokeWidth="1.2" />
        <rect x="52" y="47" width="16" height="12" rx="1.4" stroke="#2255ff" strokeWidth="1" />
      </g>
      <g>
        <circle cx="200" cy="55" r="16" fill="rgba(34,85,255,0.06)" stroke="#2255ff" strokeWidth="1.2" />
        <rect x="193" y="47" width="14" height="16" rx="2" stroke="#2255ff" strokeWidth="1" />
        <path d="M197 51h6M197 55h6" stroke="#2255ff" strokeWidth="0.9" strokeLinecap="round" />
      </g>
      <g>
        <circle cx="130" cy="165" r="16" fill="rgba(34,85,255,0.06)" stroke="#2255ff" strokeWidth="1.2" />
        <rect x="122" y="158" width="16" height="10" rx="1.4" stroke="#2255ff" strokeWidth="1" />
        <path d="M126 158v-2" stroke="#2255ff" strokeWidth="1" strokeDasharray="1.5 1.5" />
      </g>
    </svg>
  )
}

type FormState = {
  fullName: string
  email: string
  topic: string
  certOrVoucher: string
  subject: string
  message: string
}

const INITIAL_STATE: FormState = {
  fullName: '',
  email: '',
  topic: '',
  certOrVoucher: '',
  subject: '',
  message: '',
}

export default function ContactSupport() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            NEED MORE HELP?
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-navy sm:text-4xl">Still Need Assistance?</h2>
          <p className="mt-5 max-w-lg text-lg text-navy/60">
            If you couldn't find the answer you need, send us a support request and provide the
            details of the issue you're experiencing.
          </p>

          <div className="mt-8">
            <SupportIllustration />
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {SUPPORT_TOPICS.map((t) => (
              <div key={t.title} className="border-l-2 border-royal/30 pl-4">
                <p className="text-sm font-semibold text-navy">{t.title}</p>
                <p className="mt-1 text-sm text-navy/55">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal/10">
                <svg className="h-7 w-7 text-royal" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">Support Request Received</h3>
              <p className="mt-3 max-w-sm text-sm text-navy/60">
                Thank you for contacting CertiByt Support. Your request has been received and
                will be reviewed by our support team.
              </p>
              <Link
                href="/resources/help"
                onClick={() => {
                  setSubmitted(false)
                  setForm(INITIAL_STATE)
                }}
                className="mt-6 rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
              >
                Back to Help Center
              </Link>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold text-navy">Contact Support</h3>
              <p className="mt-1 text-sm text-navy/55">Tell us how we can help.</p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="text-sm font-medium text-navy">Full Name</label>
                    <input
                      id="fullName"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="mt-1.5 w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-navy">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="mt-1.5 w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="text-sm font-medium text-navy">Support Topic</label>
                  <select
                    id="topic"
                    required
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  >
                    <option value="" disabled>Select a topic</option>
                    {SUPPORT_TOPIC_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="certOrVoucher" className="text-sm font-medium text-navy">
                    Certificate ID or Voucher Code <span className="font-normal text-navy/40">(optional)</span>
                  </label>
                  <input
                    id="certOrVoucher"
                    value={form.certOrVoucher}
                    onChange={(e) => setForm({ ...form, certOrVoucher: e.target.value })}
                    placeholder="Enter Certificate ID or Voucher Code"
                    className="mt-1.5 w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-navy">Subject</label>
                  <input
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Briefly describe your issue"
                    className="mt-1.5 w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-navy">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us more about the issue you're experiencing..."
                    className="mt-1.5 w-full resize-none rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-lg bg-royal py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
                >
                  Submit Support Request
                </button>

                <p className="text-center text-xs text-navy/45">
                  Please do not include passwords or sensitive payment information in your message.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
