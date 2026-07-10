import { motion } from 'framer-motion'
import heroImg from '../../assets/world.webp'
import type { CertCategory } from '../../data/certifications'

const CATEGORY_OPTIONS: CertCategory[] = [
  'Programming',
  'Data Science',
  'Artificial Intelligence',
  'Web Development',
  'Cloud Computing',
  'Cybersecurity',
  'DevOps',
  'Business & Analytics',
]

export default function CatalogHero({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: {
  search: string
  onSearchChange: (value: string) => void
  category: CertCategory | 'All'
  onCategoryChange: (value: CertCategory | 'All') => void
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-royal/5">
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[55%_45%] lg:px-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold tracking-wide text-royal">
            GLOBAL CERTIFICATION CATALOG
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Explore{' '}
            <span className="bg-gradient-to-r from-royal to-royal-700 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-navy/60">
            Discover professional certification programs designed to help you validate your
            skills, demonstrate your expertise, and earn a digitally verifiable credential.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/40" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search certifications, skills, or domains..."
                className="w-full rounded-xl border border-navy/10 bg-white py-4 pl-12 pr-4 text-sm text-navy shadow-sm outline-none transition-shadow focus:border-royal/40 focus:shadow-md"
              />
            </div>

            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value as CertCategory | 'All')}
              className="rounded-xl border border-navy/10 bg-white px-4 py-4 text-sm font-medium text-navy shadow-sm outline-none transition-shadow focus:border-royal/40 focus:shadow-md sm:w-56"
            >
              <option value="All">All Categories</option>
              {CATEGORY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full"
        >
          <div aria-hidden className="absolute inset-0 rounded-full bg-royal/25 blur-3xl" />
          <motion.img
            src={heroImg}
            alt=""
            aria-hidden
            className="relative aspect-square w-full rounded-3xl object-cover shadow-glow"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
