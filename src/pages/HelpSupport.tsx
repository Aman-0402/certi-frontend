import { useState } from 'react'
import HelpHero from '../components/help/HelpHero'
import HelpTopics from '../components/help/HelpTopics'
import ContactSupport from '../components/help/ContactSupport'

export default function HelpSupport() {
  const [search, setSearch] = useState('')

  return (
    <>
      <HelpHero search={search} onChange={setSearch} />
      <HelpTopics search={search} />
      <ContactSupport />
    </>
  )
}
