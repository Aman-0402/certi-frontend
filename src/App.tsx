import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Certifications from './components/Certifications'
import JourneySteps from './components/JourneySteps'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Certifications />
      <JourneySteps />
    </div>
  )
}

export default App
