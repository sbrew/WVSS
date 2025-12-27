import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Volunteer from './components/Volunteer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TrailsPage from './components/TrailsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><Home /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/riding-areas" element={<TrailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App