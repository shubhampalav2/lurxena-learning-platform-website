import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import './App.css'
import RouteConfiguration from './Routing/RouteConfiguration'
import Header from './Components/Header'

function AppFrame() {
  const { pathname } = useLocation()
  const isSignup = pathname === '/signup'

  return (
    <div className="app-shell">
      {<Header />}
      <RouteConfiguration />
      {<footer className="footer"><span>© 2025 Lurxena</span><span>Learn without limits.</span></footer>}
    </div>
  )
}

function App() {
  return <Router><AppFrame /></Router>
}

export default App
