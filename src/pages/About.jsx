import React from 'react'
import SectionTitle from '../components/SectionTitle'
import AboutHero from '../components/AboutHero'
import CompanySection from '../components/CompanySection'

const About = () => {
  return (
    <section>
      <SectionTitle text={"About"} />
      <AboutHero />
      <CompanySection />
    </section>

  )
}

export default About