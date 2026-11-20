
// import Footer from '../Footer'
import './App.css'

// import Header from './components/Header'
import Work from './Work'
import Features from './Features'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Pricing from './Pricing'
import Blog from './Blog'
import Integration from './Integration'
import Casestudies from './components/Casestudies'
import Contact from './Contact'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/integration' element={<Integration/>} />
          <Route path='/casestudies' element={<Casestudies/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>


      {/* <Footer /> */}
    </>
  )
}

export default App

