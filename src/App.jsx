import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testmonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Program/>
    <About/>
    <Gallery/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App