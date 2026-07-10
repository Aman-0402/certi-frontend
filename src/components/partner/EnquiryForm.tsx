import { useState } from 'react'
import { Link } from 'wouter'

const ORG_TYPES = ['University', 'College', 'Training Institute', 'Corporate Organization', 'Other Organization']
const CANDIDATE_RANGES = ['Less than 50', '50–200', '200–500', '500–1,000', '1,000+']
const CERT_INTERESTS = [
  'Programming',
  'Data Science',
  'Artificial Intelligence',
  'Web Development',
  'Cloud Computing',
  'Cybersecurity',
  'DevOps',
  'Business & Analytics',
  'Multiple Certification Domains',
]

const LEFT_AUDIENCES = [
  { title: 'For Universities & Colleges', desc: 'Student certification opportunities.' },
  { title: 'For Training Institutes', desc: 'Certification access for trained learners.' },
  { title: 'For Corporate Organizations', desc: 'Professional skill validation for teams.' },
]

type FormState = {
  orgName: string
  orgType: string
  fullName: string
  email: string
  phone: string
  website: string
  candidateRange: string
  interests: string[]
  requirements: string
  authorized: boolean
}

const INITIAL_STATE: FormState = {
  orgName: '',
  orgType: '',
  fullName: '',
  email: '',
  phone: '',
  website: '',
  candidateRange: '',
  interests: [],
  requirements: '',
  authorized: false,
}

function toggleInterest(interests: string[], value: string): string[] {
  return interests.includes(value) ? interests.filter((v) => v !== value) : [...interests, value]
}

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [interestError, setInterestError] = useState(false)
  const [authError, setAuthError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const hasInterest = form.interests.length > 0
    const isAuthorized = form.authorized

    setInterestError(!hasInterest)
    setAuthError(!isAuthorized)

    if (!hasInterest || !isAuthorized) return

    setSubmitted(true)
  }

  return (
    <section id="enquiry-form" className="bg-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div>
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            LET'S COLLABORATE
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Start Your Certification Partnership Journey
          </h2>
          <p className="mt-5 max-w-lg text-lg text-navy/60">
            Tell us about your organization and how you would like to provide certification
            opportunities to your candidates. Our partnership team will review your enquiry and
            connect with you.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {LEFT_AUDIENCES.map((a) => (
              <div key={a.title} className="border-l-2 border-royal/30 pl-4">
                <p className="text-sm font-semibold text-navy">{a.title}</p>
                <p className="mt-1 text-sm text-navy/55">{a.desc}</p>
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
              <h3 className="mt-5 text-xl font-bold text-navy">Partnership Enquiry Received</h3>
              <p className="mt-3 max-w-sm text-sm text-navy/60">
                Thank you for your interest in partnering with CertiByt. Our team will review
                your organization details and contact you regarding the next steps.
              </p>
              <Link
                href="/certifications"
                className="mt-6 rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
              >
                Explore Certifications
              </Link>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold text-navy">Partnership Enquiry</h3>
              <p className="mt-1 text-sm text-navy/55">Complete the form and our team will review your request.</p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div>
                  <label htmlFor="orgName" className="text-sm font-medium text-navy">Organization Name</label>
                  <input
                    id="orgName"
                    required
                    value={form.orgName}
                    onChange={(e) => setForm({ ...form, orgName: e.target.value })}
                    placeholder="Enter your organization name"
                    className="mt-1.5 w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="orgType" className="text-sm font-medium text-navy">Organization Type</label>
                  <select
                    id="orgType"
                    required
                    value={form.orgType}
                    onChange={(e) => setForm({ ...form, orgType: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  >
                    <option value="" disabled>Select organization type</option>
                    {ORG_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="text-sm font-medium text-navy">Your Full Name</label>
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
                    <label htmlFor="email" className="text-sm font-medium text-navy">Official Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="mt-1.5 w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-navy">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Enter your contact number"
                      className="mt-1.5 w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="text-sm font-medium text-navy">
                      Organization Website <span className="font-normal text-navy/40">(optional)</span>
                    </label>
                    <input
                      id="website"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      placeholder="Enter organization website"
                      className="mt-1.5 w-full rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="candidateRange" className="text-sm font-medium text-navy">Estimated Number of Candidates</label>
                  <select
                    id="candidateRange"
                    required
                    value={form.candidateRange}
                    onChange={(e) => setForm({ ...form, candidateRange: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  >
                    <option value="" disabled>Select a range</option>
                    {CANDIDATE_RANGES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <fieldset>
                  <legend className="text-sm font-medium text-navy">Certification Interest</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {CERT_INTERESTS.map((interest) => {
                      const checked = form.interests.includes(interest)
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, interests: toggleInterest(form.interests, interest) })
                            setInterestError(false)
                          }}
                          aria-pressed={checked}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                            checked
                              ? 'border-royal bg-royal/10 text-royal'
                              : 'border-navy/15 text-navy/60 hover:border-royal/30'
                          }`}
                        >
                          {interest}
                        </button>
                      )
                    })}
                  </div>
                  {interestError && (
                    <p className="mt-2 text-xs font-medium text-red-500">Select at least one certification interest.</p>
                  )}
                </fieldset>

                <div>
                  <label htmlFor="requirements" className="text-sm font-medium text-navy">
                    Tell Us About Your Certification Requirements
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    value={form.requirements}
                    onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                    placeholder="Tell us about your candidates, certification requirements, or collaboration goals..."
                    className="mt-1.5 w-full resize-none rounded-lg border border-navy/15 px-3.5 py-2.5 text-sm text-navy outline-none transition-shadow focus:border-royal/40 focus:shadow-sm"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2.5 text-sm text-navy/70">
                    <input
                      type="checkbox"
                      checked={form.authorized}
                      onChange={(e) => {
                        setForm({ ...form, authorized: e.target.checked })
                        setAuthError(false)
                      }}
                      className="mt-0.5 h-4 w-4 rounded accent-royal"
                    />
                    I confirm that I am authorized to submit this enquiry on behalf of the organization.
                  </label>
                  {authError && (
                    <p className="mt-2 text-xs font-medium text-red-500">Please confirm authorization to submit.</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-lg bg-royal py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
                >
                  Submit Partnership Enquiry
                </button>

                <p className="text-center text-xs text-navy/45">
                  Your information will only be used to review and respond to your partnership enquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
