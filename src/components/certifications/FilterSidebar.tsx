import { CATEGORIES } from '../../data/certifications'
import type { CertCategory, CertLevel } from '../../data/certifications'

export type DurationFilter = 'up-to-60' | '60-90' | '90-plus'
export type PriceFilter = 'free' | 'under-1000' | '1000-2000' | 'above-2000'

export type Filters = {
  category: CertCategory | 'All'
  levels: CertLevel[]
  durations: DurationFilter[]
  prices: PriceFilter[]
}

const LEVELS: CertLevel[] = ['Beginner', 'Intermediate', 'Advanced', 'Professional']
const DURATIONS: { value: DurationFilter; label: string }[] = [
  { value: 'up-to-60', label: 'Up to 60 Minutes' },
  { value: '60-90', label: '60–90 Minutes' },
  { value: '90-plus', label: '90+ Minutes' },
]
const PRICES: { value: PriceFilter; label: string }[] = [
  { value: 'free', label: 'Free' },
  { value: 'under-1000', label: 'Under ₹1,000' },
  { value: '1000-2000', label: '₹1,000 – ₹2,000' },
  { value: 'above-2000', label: 'Above ₹2,000' },
]

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export default function FilterSidebar({
  filters,
  onChange,
}: {
  filters: Filters
  onChange: (filters: Filters) => void
}) {
  const clearAll = () =>
    onChange({ category: 'All', levels: [], durations: [], prices: [] })

  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:h-fit lg:w-[260px]">
      <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
        <h3 className="text-base font-bold text-navy">Filter Certifications</h3>

        <div className="mt-6">
          <p className="text-sm font-semibold text-navy">Category</p>
          <div className="mt-3 flex flex-col gap-2.5">
            <label className="flex items-center gap-2.5 text-sm text-navy/70">
              <input
                type="radio"
                name="category"
                checked={filters.category === 'All'}
                onChange={() => onChange({ ...filters, category: 'All' })}
                className="h-4 w-4 accent-royal"
              />
              All Certifications
            </label>
            {CATEGORIES.map((cat) => (
              <label key={cat.label} className="flex items-center gap-2.5 text-sm text-navy/70">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === cat.label}
                  onChange={() => onChange({ ...filters, category: cat.label })}
                  className="h-4 w-4 accent-royal"
                />
                {cat.label}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-navy/10 pt-6">
          <p className="text-sm font-semibold text-navy">Certification Level</p>
          <div className="mt-3 flex flex-col gap-2.5">
            {LEVELS.map((level) => (
              <label key={level} className="flex items-center gap-2.5 text-sm text-navy/70">
                <input
                  type="checkbox"
                  checked={filters.levels.includes(level)}
                  onChange={() => onChange({ ...filters, levels: toggle(filters.levels, level) })}
                  className="h-4 w-4 rounded accent-royal"
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-navy/10 pt-6">
          <p className="text-sm font-semibold text-navy">Exam Duration</p>
          <div className="mt-3 flex flex-col gap-2.5">
            {DURATIONS.map((d) => (
              <label key={d.value} className="flex items-center gap-2.5 text-sm text-navy/70">
                <input
                  type="checkbox"
                  checked={filters.durations.includes(d.value)}
                  onChange={() => onChange({ ...filters, durations: toggle(filters.durations, d.value) })}
                  className="h-4 w-4 rounded accent-royal"
                />
                {d.label}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-navy/10 pt-6">
          <p className="text-sm font-semibold text-navy">Price Range</p>
          <div className="mt-3 flex flex-col gap-2.5">
            {PRICES.map((p) => (
              <label key={p.value} className="flex items-center gap-2.5 text-sm text-navy/70">
                <input
                  type="checkbox"
                  checked={filters.prices.includes(p.value)}
                  onChange={() => onChange({ ...filters, prices: toggle(filters.prices, p.value) })}
                  className="h-4 w-4 rounded accent-royal"
                />
                {p.label}
              </label>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={clearAll}
          className="mt-6 w-full rounded-lg border border-navy/10 py-2.5 text-sm font-semibold text-navy/60 transition-colors hover:border-royal/30 hover:text-royal"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  )
}
