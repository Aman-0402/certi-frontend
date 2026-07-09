import { Route, Switch } from 'wouter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
