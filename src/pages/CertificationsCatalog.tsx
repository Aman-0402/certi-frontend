import { useMemo, useState } from 'react'
import { CERTIFICATIONS } from '../data/certifications'
import type { CertCategory } from '../data/certifications'
import CatalogHero from '../components/certifications/CatalogHero'
import CategoryNav from '../components/certifications/CategoryNav'
import FilterSidebar from '../components/certifications/FilterSidebar'
import type { Filters } from '../components/certifications/FilterSidebar'
import CertCard from '../components/certifications/CertCard'
import FeaturedBanner from '../components/certifications/FeaturedBanner'
import TrustGrid from '../components/certifications/TrustGrid'
import CertificatePreview from '../components/certifications/CertificatePreview'
import JourneyCTA from '../components/certifications/JourneyCTA'

type SortOption = 'popular' | 'newest' | 'price-low' | 'price-high' | 'duration'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'popular', label: 'Popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'duration', label: 'Exam Duration' },
]

function matchesDuration(minutes: number, durations: Filters['durations']) {
  if (durations.length === 0) return true
  return durations.some((d) => {
    if (d === 'up-to-60') return minutes <= 60
    if (d === '60-90') return minutes > 60 && minutes <= 90
    return minutes > 90
  })
}

function matchesPrice(price: number, prices: Filters['prices']) {
  if (prices.length === 0) return true
  return prices.some((p) => {
    if (p === 'free') return price === 0
    if (p === 'under-1000') return price > 0 && price < 1000
    if (p === '1000-2000') return price >= 1000 && price <= 2000
    return price > 2000
  })
}

export default function CertificationsCatalog() {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<Filters>({ category: 'All', levels: [], durations: [], prices: [] })
  const [sort, setSort] = useState<SortOption>('popular')
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const setCategory = (category: CertCategory | 'All') => setFilters((f) => ({ ...f, category }))

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    const result = CERTIFICATIONS.filter((cert) => {
      const matchesQuery =
        query.length === 0 ||
        cert.title.toLowerCase().includes(query) ||
        cert.category.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query)

      const matchesCategory = filters.category === 'All' || cert.category === filters.category
      const matchesLevel = filters.levels.length === 0 || filters.levels.includes(cert.level)

      return (
        matchesQuery &&
        matchesCategory &&
        matchesLevel &&
        matchesDuration(cert.minutes, filters.durations) &&
        matchesPrice(cert.price, filters.prices)
      )
    })

    const sorted = [...result]
    if (sort === 'newest') sorted.reverse()
    if (sort === 'price-low') sorted.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') sorted.sort((a, b) => b.price - a.price)
    if (sort === 'duration') sorted.sort((a, b) => a.minutes - b.minutes)

    return sorted
  }, [search, filters, sort])

  const featured = CERTIFICATIONS.find((c) => c.featured) ?? CERTIFICATIONS[0]
  const firstBatch = filtered.slice(0, 6)
  const secondBatch = filtered.slice(6)

  return (
    <>
      <CatalogHero search={search} onSearchChange={setSearch} />
      <CategoryNav active={filters.category} onSelect={setCategory} />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-10 lg:flex-row">
            <FilterSidebar filters={filters} onChange={setFilters} />

            <div className="flex-1">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-navy sm:text-3xl">Professional Certifications</h2>
                  <p className="mt-1 text-sm text-navy/55">Showing {filtered.length} certifications</p>
                </div>

                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-sm text-navy/60">
                    Sort by:
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value as SortOption)}
                      className="rounded-lg border border-navy/10 bg-white px-3 py-2 text-sm font-medium text-navy outline-none focus:border-royal/40"
                    >
                      {SORT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="flex items-center gap-1 rounded-lg border border-navy/10 bg-white p-1">
                    <button
                      type="button"
                      onClick={() => setView('grid')}
                      aria-label="Grid view"
                      aria-pressed={view === 'grid'}
                      className={`rounded-md p-1.5 ${view === 'grid' ? 'bg-royal/10 text-royal' : 'text-navy/40 hover:text-navy'}`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => setView('list')}
                      aria-label="List view"
                      aria-pressed={view === 'list'}
                      className={`rounded-md p-1.5 ${view === 'list' ? 'bg-royal/10 text-royal' : 'text-navy/40 hover:text-navy'}`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {filtered.length === 0 ? (
                <p className="mt-16 text-center text-navy/50">
                  No certifications match your filters. Try adjusting your search.
                </p>
              ) : (
                <>
                  <div
                    className={`mt-8 grid grid-cols-1 gap-6 ${
                      view === 'grid' ? 'sm:grid-cols-2 xl:grid-cols-3' : ''
                    }`}
                  >
                    {firstBatch.map((cert) => (
                      <CertCard key={cert.slug} cert={cert} />
                    ))}
                  </div>

                  {secondBatch.length > 0 && (
                    <>
                      <div className="my-12">
                        <FeaturedBanner cert={featured} />
                      </div>
                      <div
                        className={`grid grid-cols-1 gap-6 ${
                          view === 'grid' ? 'sm:grid-cols-2 xl:grid-cols-3' : ''
                        }`}
                      >
                        {secondBatch.map((cert) => (
                          <CertCard key={cert.slug} cert={cert} />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <TrustGrid />
      <CertificatePreview />
      <JourneyCTA />
    </>
  )
}
