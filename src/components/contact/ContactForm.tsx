import { useState } from 'react'
import { Link } from 'wouter'

const CONTACT_INFO = [
  {
    title: 'General Enquiries',
    desc: 'hello@certibyt.com',
    icon: 'mail',
  },
  {
    title: 'Partnerships',
    desc: 'partnerships@certibyt.com',
    icon: 'handshake',
  },
  {
    title: 'Support',
    desc: 'support@certibyt.com',
    icon: 'support',
  },
] as const

const REASON_OPTIONS = [
  'General Enquiry',
  'Certification Partnership',
  'Certification Support',
  'Media & Press',
  'Careers',
  'Other',
]

function InfoIcon({ icon }: { icon: (typeof CONTACT_INFO)[number]['icon'] }) {
  const common = { className: 'h-5 w-5 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'mail') {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'handshake') {
    return (
      <svg {...common}>
        <path d="M3 12l4-4 4 2 3-3 4 2 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10l3 5 2-1M17 9l-3 5-2-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type FormState = {
  fullName: string
  email: string
  reason: string
  subject: string
  message: string
}

const INITIAL_STATE: FormState = {
  fullName: '',
  email: '',
  reason: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            CONTACT DETAILS
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-navy sm:text-4xl">
            We'd Love to Hear From You
          </h2>
          <p className="mt-5 max-w-lg text-lg text-navy/60">
            Whether you're exploring certifications, considering a partnership, or need help
            with your account, reach out and our team will respond as soon as possible.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {CONTACT_INFO.map((info) => (
              <div key={info.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/10">
                  <InfoIcon icon={info.icon} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{info.title}</p>
                  <p className="mt-1 text-sm text-navy/55">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-navy/10 bg-white/80 p-6 shadow-glow backdrop-blur-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal/10">
                <svg className="h-7 w-7 text-royal" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">Message Sent</h3>
              <p className="mt-3 max-w-sm text-sm text-navy/60">
                Thank you for reaching out to CertiByt. Our team will review your message and
                get back to you shortly.
              </p>
              <Link
                href="/"
                onClick={() => {
                  setSubmitted(false)
                  setForm(INITIAL_STATE)
                }}
                className="mt-6 rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold text-navy">Send a Message</h3>
              <p className="mt-1 text-sm text-navy/55">Fill out the form and we'll be in touch.</p>

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
                      className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
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
                      className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="text-sm font-medium text-navy">Reason for Contact</label>
                  <select
                    id="reason"
                    required
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  >
                    <option value="" disabled>Select a reason</option>
                    {REASON_OPTIONS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-navy">Subject</label>
                  <input
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Briefly describe your message"
                    className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-navy">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="mt-1.5 w-full resize-none rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-lg bg-royal py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
                >
                  Send Message
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
