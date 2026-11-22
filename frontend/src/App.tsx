import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import RouteConfiguration from './Routing/RouteConfiguration';
import Header from './Components/Header';


function App() {



  return (
    <div className="app-shell">

      <Router>
        <Header />
        <RouteConfiguration />
      </Router>



      <footer className="footer"><span>© 2025 Lurxena</span><span>Learn without limits.</span></footer>
    </div>
  )
}

export default App
