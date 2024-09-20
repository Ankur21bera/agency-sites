import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import './App.css'
import Services from './Components/Services'
import Cat from './Components/Cat'
import CaseStudies from './Components/CaseStudies'
import WorkingProcess from './Components/WorkingProcess'
import Team from './Components/Team'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Cat/>
      <CaseStudies/>
      <WorkingProcess/>
      <Team/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
