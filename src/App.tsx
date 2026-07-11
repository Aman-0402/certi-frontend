import { useEffect } from 'react'
import { Route, Router, Switch, useLocation } from 'wouter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import CertificationsCatalog from './pages/CertificationsCatalog'
import ForOrganizations from './pages/ForOrganizations'
import Universities from './pages/Universities'
import TrainingInstitutes from './pages/TrainingInstitutes'
import CorporateOrganizations from './pages/CorporateOrganizations'
import PartnerEnquiry from './pages/PartnerEnquiry'
import VerifyCertificate from './pages/VerifyCertificate'
import About from './pages/About'
import SecureAssessments from './pages/SecureAssessments'
import DigitalCredentials from './pages/DigitalCredentials'
import HelpSupport from './pages/HelpSupport'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ComingSoon from './pages/ComingSoon'

const COMING_SOON_ROUTES: { path: string; title: string }[] = [
  { path: '/certifications/categories', title: 'Certification Categories' },
  { path: '/certifications/featured', title: 'Featured Certifications' },
  { path: '/certifications/:slug', title: 'Certification Details' },
  { path: '/sign-in', title: 'Sign In' },
  { path: '/get-certified', title: 'Get Certified' },
]

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

function AppShell() {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/certifications" component={CertificationsCatalog} />
          <Route path="/organizations" component={ForOrganizations} />
          <Route path="/organizations/universities" component={Universities} />
          <Route path="/organizations/training-institutes" component={TrainingInstitutes} />
          <Route path="/organizations/corporate" component={CorporateOrganizations} />
          <Route path="/organizations/partner" component={PartnerEnquiry} />
          <Route path="/verify" component={VerifyCertificate} />
          <Route path="/about" component={About} />
          <Route path="/resources/secure-assessments" component={SecureAssessments} />
          <Route path="/resources/digital-credentials" component={DigitalCredentials} />
          <Route path="/resources/help" component={HelpSupport} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfService} />
          {COMING_SOON_ROUTES.map((route) => (
            <Route key={route.path} path={route.path}>
              <ComingSoon title={route.title} />
            </Route>
          ))}
          <Route>
            <ComingSoon title="Page Not Found" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router base={BASE}>
      <AppShell />
    </Router>
  )
}

export default App
