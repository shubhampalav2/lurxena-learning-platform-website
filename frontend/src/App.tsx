import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RouteConfiguration from './Routing/RouteConfiguration'
import Header from './Components/Header'
import Footer from './Components/Footer'

function AppFrame() {


  return (
    <div className="app-shell">
      <Header />
      <RouteConfiguration />
      <Footer />
    </div>
  )
}

function App() {
  return <Router><AppFrame /></Router>
}

export default App
