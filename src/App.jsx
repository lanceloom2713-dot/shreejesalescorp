import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Header from './component/header'
import Footer from './component/footer'

import Home from './component/home.jsx'
import About from './component/aboutus'
import ProductCategories from './component/category'
import Serve from './component/serve'
import Contact from './component/contactus.jsx'

function App() {

  return (
    <Router>

      <Header />

      {/* Main content pushed below fixed navbar */}
      <main className="pt-20">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductCategories />} />
          <Route path="/serve" element={<Serve />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </main>

      <Footer />

    </Router>
  )
}

export default App