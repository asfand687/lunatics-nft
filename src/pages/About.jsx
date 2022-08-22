import React from 'react'
import AboutHero from '../components/AboutHero'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import TeamSection from '../components/TeamSection'

const About = () => {
  return (
    <section>
      <Navbar classes="w-full py-1 bg-black" />
      <PageTitle title="About Us" classes="-right-8" />
      <AboutHero />
      <TeamSection />
    </section>

  )
}

export default About