import { Link } from 'wouter'
import dataVisual from '../../assets/data-science-visual.webp'
import type { Certification } from '../../data/certifications'

export default function FeaturedBanner({ cert }: { cert: Certification }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-royal/10 bg-gradient-to-br from-royal/10 via-cyan-glow/10 to-white p-8 backdrop-blur-sm sm:p-12">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-royal shadow-sm">
            FEATURED CERTIFICATION
          </span>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-navy sm:text-3xl">
            Advance Your Career with {cert.title.replace(' Professional', '')} Certification
          </h2>
          <p className="mt-4 max-w-lg text-navy/60">{cert.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[`${cert.questions} Questions`, `${cert.minutes} Minutes`, 'Secure Assessment', 'Digital Certificate'].map((chip) => (
              <span key={chip} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-navy/70 shadow-sm">
                {chip}
              </span>
            ))}
          </div>

          <Link
            href={`/certifications/${cert.slug}`}
            className="mt-8 inline-block rounded-lg bg-royal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-royal-600"
          >
            Explore {cert.category} Certification
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-0 rounded-full bg-royal/20 blur-3xl" />
          <img src={dataVisual} alt="" aria-hidden className="relative w-full rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
