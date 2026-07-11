const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly, such as your name, email address, organization details, and certification or assessment activity when you register, enroll in a certification, or submit an enquiry.',
      'We also collect limited technical information automatically, such as browser type, device information, and usage data, to help us maintain and improve the platform.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'We use collected information to provide and operate the CertiByt platform, deliver certification assessments, issue and verify digital credentials, and communicate with you about your account or enquiries.',
      'We may also use aggregated, non-identifying data to understand platform usage and improve our services.',
    ],
  },
  {
    title: '3. Partnership & Organization Enquiries',
    body: [
      'When an organization submits a certification partnership enquiry, we use the submitted details solely to review the enquiry and respond. Submitting a partnership enquiry does not automatically create an organization account or grant platform access.',
    ],
  },
  {
    title: '4. Information Sharing',
    body: [
      'We do not sell your personal information. We may share information with service providers who help us operate the platform (such as hosting and email delivery), and only to the extent necessary for them to perform those services.',
      'We may disclose information if required by law or to protect the rights, safety, or property of CertiByt, our users, or the public.',
    ],
  },
  {
    title: '5. Data Security',
    body: [
      'We use reasonable technical and organizational measures to protect your information, including secure assessment environments and access controls. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '6. Data Retention',
    body: [
      'We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.',
    ],
  },
  {
    title: '7. Your Choices',
    body: [
      'You may request access to, correction of, or deletion of your personal information by contacting our team. Some information may be retained where required for legal, security, or record-keeping purposes.',
    ],
  },
  {
    title: '8. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Material changes will be reflected by updating the "last updated" date on this page.',
    ],
  },
  {
    title: '9. Contact Us',
    body: [
      'If you have questions about this Privacy Policy or how we handle your information, contact us at privacy@certibyt.com or through our Contact page.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
        <div className="relative mx-auto max-w-[1000px] px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            LEGAL
          </span>
          <h1 className="mx-auto mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-navy/60">
            This policy explains how CertiByt collects, uses, and protects your information
            across our certification platform.
          </p>
          <p className="mt-4 text-sm font-medium text-navy/40">Last updated: July 11, 2026</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-navy">{section.title}</h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((para, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-navy/65">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
