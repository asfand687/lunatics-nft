import React from 'react'
import AboutHero from '../components/AboutHero'
import CompanySection from '../components/CompanySection'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <section>
      <Navbar classes="w-full py-4 bg-[#0300AD]" />
      <AboutHero />
      <CompanySection />
    </section>

  )
}

export default About