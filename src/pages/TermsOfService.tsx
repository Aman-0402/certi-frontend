const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By accessing or using the CertiByt platform, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.',
    ],
  },
  {
    title: '2. Eligibility & Accounts',
    body: [
      'You must provide accurate information when creating an account or submitting an enquiry, and you are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.',
    ],
  },
  {
    title: '3. Certifications & Assessments',
    body: [
      'CertiByt provides secure professional assessments and digitally verifiable credentials. Certifications are issued only upon successful completion of the applicable assessment requirements.',
      'You agree not to attempt to circumvent assessment security controls, share exam content, or misrepresent your identity during an assessment.',
    ],
  },
  {
    title: '4. Organization Partnerships',
    body: [
      'Organizations may submit a partnership enquiry to explore providing certification opportunities to their students, trainees, or employees. Submitting an enquiry is a request for review only and does not create an organization account, grant platform access, or constitute an agreement until confirmed by our team.',
    ],
  },
  {
    title: '5. Digital Credentials & Verification',
    body: [
      'Digital certificates issued through CertiByt are intended to be independently verifiable. You agree not to alter, forge, or misrepresent a certificate or its verification status.',
    ],
  },
  {
    title: '6. Acceptable Use',
    body: [
      'You agree not to misuse the platform, including attempting unauthorized access, disrupting service availability, or using the platform for unlawful purposes.',
    ],
  },
  {
    title: '7. Intellectual Property',
    body: [
      'The CertiByt platform, including its content, branding, and assessment materials, is owned by CertiByt or its licensors and is protected by applicable intellectual property laws.',
    ],
  },
  {
    title: '8. Disclaimers',
    body: [
      'The platform is provided "as is" without warranties of any kind. While we take reasonable measures to maintain assessment security and platform reliability, we do not guarantee uninterrupted or error-free service.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    body: [
      'To the extent permitted by law, CertiByt is not liable for indirect, incidental, or consequential damages arising from your use of the platform.',
    ],
  },
  {
    title: '10. Changes to These Terms',
    body: [
      'We may update these Terms of Service from time to time. Continued use of the platform after changes take effect constitutes acceptance of the revised terms.',
    ],
  },
  {
    title: '11. Contact Us',
    body: [
      'If you have questions about these Terms of Service, contact us at legal@certibyt.com or through our Contact page.',
    ],
  },
]

export default function TermsOfService() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
        <div className="relative mx-auto max-w-[1000px] px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            LEGAL
          </span>
          <h1 className="mx-auto mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">Terms of Service</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-navy/60">
            These terms govern your access to and use of the CertiByt certification platform.
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
