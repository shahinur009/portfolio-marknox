import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Hero from './section/Hero/Hero'
import Projects from './section/Projects/Projects'
import Skills from './section/Skills/Skills'
import Contact from './section/Contact/Contact'
import Footer from './section/footer/Footer'

function App() {

  return (
    <>
      <Hero></Hero>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
