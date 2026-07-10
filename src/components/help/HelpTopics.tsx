import { useState } from 'react'
import { HELP_TOPICS } from '../../data/helpTopics'
import type { HelpTopic } from '../../data/helpTopics'

function TopicIcon({ icon }: { icon: HelpTopic['icon'] }) {
  const common = { className: 'h-7 w-7 text-royal', viewBox: '0 0 24 24', fill: 'none' } as const
  if (icon === 'certificate-play') {
    return (
      <svg {...common}>
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h8M8 11.5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10.5 15.5l4 2.2-4 2.2z" fill="currentColor" stroke="currentColor" strokeWidth="0.6" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === 'voucher') {
    return (
      <svg {...common}>
        <rect x="3.5" y="7" width="17" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 7v10" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
        <circle cx="14.5" cy="12" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    )
  }
  if (icon === 'laptop') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 19h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1" opacity="0" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HelpTopics({ search }: { search: string }) {
  const [openCards, setOpenCards] = useState<Set<string>>(new Set())
  const [openArticle, setOpenArticle] = useState<string | null>(null)

  const query = search.trim().toLowerCase()

  const filteredTopics = HELP_TOPICS.map((topic) => {
    if (!query) return { topic, articles: topic.articles }
    const articles = topic.articles.filter(
      (a) => a.question.toLowerCase().includes(query) || a.answer.toLowerCase().includes(query),
    )
    const matchesTopic = topic.title.toLowerCase().includes(query) || topic.desc.toLowerCase().includes(query)
    return { topic, articles: matchesTopic ? topic.articles : articles }
  }).filter(({ topic, articles }) => !query || articles.length > 0 || topic.title.toLowerCase().includes(query))

  function toggleCard(id: string) {
    setOpenCards((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Find the Help You Need</h2>
          <p className="mt-4 text-navy/60">Choose a topic to quickly find answers and guidance.</p>
        </div>

        {filteredTopics.length === 0 ? (
          <p className="mt-14 text-center text-navy/50">No help articles match your search.</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTopics.map(({ topic, articles }) => {
              const isOpen = openCards.has(topic.id) || Boolean(query)
              return (
                <div
                  key={topic.id}
                  className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <TopicIcon icon={topic.icon} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy">{topic.title}</h3>
                  <p className="mt-2 text-sm text-navy/60">{topic.desc}</p>

                  {isOpen && (
                    <div className="mt-4 flex flex-col gap-1 border-t border-navy/10 pt-4">
                      {articles.map((article) => {
                        const key = `${topic.id}:${article.question}`
                        const expanded = openArticle === key
                        return (
                          <div key={key}>
                            <button
                              type="button"
                              onClick={() => setOpenArticle(expanded ? null : key)}
                              className="flex w-full items-center justify-between gap-2 py-1.5 text-left text-sm font-medium text-navy/80 hover:text-royal"
                            >
                              {article.question}
                              <svg
                                className={`h-3.5 w-3.5 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`}
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                            {expanded && <p className="pb-2 text-xs leading-relaxed text-navy/55">{article.answer}</p>}
                          </div>
                        )
                      })}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleCard(topic.id)}
                    className="mt-4 self-start text-sm font-semibold text-royal hover:text-royal-600"
                  >
                    {isOpen ? 'Hide Help' : 'View Help'}
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
