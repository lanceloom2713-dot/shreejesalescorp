import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Header from './component/header'
import Hero from './component/hero'
import About from './component/aboutus'
import Choose from './component/choose'
import Footer from './component/footer'
import Serve from './component/serve'
import ProductCategories from './component/category'
import Contact from './component/contactus.jsx'
import Home from './component/home.jsx'

function App() {

  return (
    <Router>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductCategories />} />
        <Route path="/serve" element={<Serve />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </Router>
  )
}

export default App