import { Link } from 'wouter'
import credentialImg from '../../assets/verified-credential.webp'

const ITEMS = [
  { title: 'Unique Credential ID', desc: 'Every certificate receives an individual verification identity.' },
  { title: 'Publicly Verifiable', desc: 'Anyone can verify certificate authenticity through CertiByt.' },
  { title: 'Digital Access', desc: 'Preview and access your certificate digitally.' },
  { title: 'Professional Credential', desc: 'Showcase your achievement across your professional network.' },
]

export default function CertificatePreview() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div className="relative mx-auto w-full max-w-lg">
          <div aria-hidden className="absolute inset-0 rounded-3xl bg-royal/10 blur-2xl" />
          <img
            src={credentialImg}
            alt="Digital certificate and global verification"
            loading="lazy"
            className="relative w-full rounded-2xl border border-navy/10 shadow-sm"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Earn a Credential You Can Share and Verify
          </h2>
          <p className="mt-4 max-w-lg text-lg text-navy/60">
            Successfully complete your certification assessment and receive a professional
            digital certificate with a unique credential identity.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-navy">{item.title}</p>
                <p className="mt-1 text-sm text-navy/55">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/verify"
            className="mt-8 inline-block rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
          >
            Verify a Certificate
          </Link>
        </div>
      </div>
    </section>
  )
}
