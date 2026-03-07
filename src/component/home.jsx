import { useState } from 'react'
import Header from './header'
import Hero from './hero'
import About from './aboutus'
import Choose from './choose'
import Footer from './footer'
import Serve from './serve'
import ProductCategories from './category'
import Contact from './contactus.jsx'

function home() {

  return (
    <>
      {/* <Header /> */}
      <Hero />
      <ProductCategories />
      <About />
      <Choose />
      <Serve/>
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default home
