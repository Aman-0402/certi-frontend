import { Link } from 'wouter'
import { motion } from 'framer-motion'
import type { Certification } from '../../data/certifications'
import CertIcon from './CertIcon'

function MetaIcon({ path }: { path: string }) {
  return (
    <svg className="h-4 w-4 text-navy/40" viewBox="0 0 24 24" fill="none">
      <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function CertCard({ cert }: { cert: Certification }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="flex flex-col rounded-[20px] border border-royal/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl"
        style={{ backgroundColor: `${cert.color}1a` }}
      >
        <CertIcon icon={cert.icon} className="h-9 w-9" />
      </div>

      <span className="mt-5 text-xs font-bold tracking-wide text-royal">{cert.category.toUpperCase()}</span>
      <h3 className="mt-1.5 text-lg font-bold leading-snug text-navy">{cert.title}</h3>
      <p className="mt-2 text-sm text-navy/55">{cert.description}</p>

      <div className="mt-5 flex flex-col gap-2 border-t border-navy/10 pt-5">
        <div className="flex items-center gap-2 text-sm text-navy/60">
          <MetaIcon path="M9 11l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
          {cert.questions} Questions
        </div>
        <div className="flex items-center gap-2 text-sm text-navy/60">
          <MetaIcon path="M12 7v5l3 3M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
          {cert.minutes} Minutes
        </div>
        <div className="flex items-center gap-2 text-sm text-navy/60">
          <MetaIcon path="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          Secure Assessment
        </div>
        <div className="flex items-center gap-2 text-sm text-navy/60">
          <MetaIcon path="M4 6h16M4 12h10M4 18h6" />
          {cert.level} Level
        </div>
      </div>

      {cert.certificateIncluded && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-royal/5 px-3 py-2 text-xs font-semibold text-royal">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Digital Certificate Included
        </div>
      )}

      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-navy">&#8377;{cert.price.toLocaleString('en-IN')}</p>
          <p className="text-xs text-navy/45">One-time certification fee</p>
        </div>
      </div>

      <Link
        href={`/certifications/${cert.slug}`}
        className="mt-4 rounded-lg bg-royal py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-royal-600"
      >
        View Certification
      </Link>
      <Link
        href={`/certifications/${cert.slug}`}
        className="mt-2 text-center text-xs font-semibold text-royal/80 hover:text-royal"
      >
        View exam details &rarr;
      </Link>
    </motion.div>
  )
}
