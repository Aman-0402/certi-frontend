import { Route, Switch } from 'wouter'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Switch>
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
