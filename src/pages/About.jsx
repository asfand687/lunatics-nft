import React from 'react'
import AboutHero from '../components/AboutHero'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <section>
      <Navbar classes="w-full py-1 bg-[#0300AD]" />
      <AboutHero />
    </section>

  )
}

export default About