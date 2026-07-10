import { useEffect } from 'react'
import { Route, Router, Switch, useLocation } from 'wouter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import CertificationsCatalog from './pages/CertificationsCatalog'
import Universities from './pages/Universities'
import TrainingInstitutes from './pages/TrainingInstitutes'
import CorporateOrganizations from './pages/CorporateOrganizations'
import ComingSoon from './pages/ComingSoon'

const COMING_SOON_ROUTES: { path: string; title: string }[] = [
  { path: '/certifications/categories', title: 'Certification Categories' },
  { path: '/certifications/featured', title: 'Featured Certifications' },
  { path: '/certifications/:slug', title: 'Certification Details' },
  { path: '/organizations', title: 'For Organizations' },
  { path: '/contact', title: 'Contact Our Team' },
  { path: '/organizations/partner', title: 'Become a Certification Partner' },
  { path: '/resources/secure-assessments', title: 'Secure Assessments' },
  { path: '/resources/digital-credentials', title: 'Digital Credentials' },
  { path: '/resources/verification', title: 'Certificate Verification' },
  { path: '/resources/help', title: 'Help & Support' },
  { path: '/verify', title: 'Verify Certificate' },
  { path: '/about', title: 'About Us' },
  { path: '/sign-in', title: 'Sign In' },
  { path: '/get-certified', title: 'Get Certified' },
  { path: '/privacy', title: 'Privacy Policy' },
  { path: '/terms', title: 'Terms of Service' },
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
          <Route path="/organizations/universities" component={Universities} />
          <Route path="/organizations/training-institutes" component={TrainingInstitutes} />
          <Route path="/organizations/corporate" component={CorporateOrganizations} />
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
