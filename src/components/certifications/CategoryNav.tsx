import { CATEGORIES } from '../../data/certifications'
import type { CertCategory } from '../../data/certifications'
import CertIcon from './CertIcon'

export default function CategoryNav({
  active,
  onSelect,
}: {
  active: CertCategory | 'All'
  onSelect: (category: CertCategory | 'All') => void
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Browse by Category</h2>
            <p className="mt-2 max-w-xl text-navy/60">
              Find certifications based on the skills and professional domains you want to validate.
            </p>
          </div>

          <select
            value={active}
            onChange={(e) => onSelect(e.target.value as CertCategory | 'All')}
            aria-label="Filter by category"
            className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm font-medium text-navy shadow-sm outline-none transition-shadow focus:border-royal/40 focus:shadow-md sm:w-56"
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.label} value={cat.label}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.label
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => onSelect(isActive ? 'All' : cat.label)}
                className={`flex w-40 shrink-0 flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-colors ${
                  isActive
                    ? 'border-royal bg-royal/5'
                    : 'border-navy/10 bg-white hover:border-royal/30 hover:bg-royal/5'
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-royal/10">
                  <CertIcon icon={cat.icon} className="h-6 w-6 text-royal" />
                </div>
                <span className="text-sm font-semibold text-navy">{cat.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
