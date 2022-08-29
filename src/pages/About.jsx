import React from 'react'
import AboutHero from '../components/AboutHero'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import TeamSection from '../components/TeamSection'

const About = () => {
  return (
    <section>
      <Navbar classes="w-full max-w-[1400px] 2xl:w-full py-1 bg-black" border="border-b border-white"/>
      <PageTitle title="About Us" classes="-right-40 2xl:-right-24 top-[650px] text-7xl hidden lg:block" />
      <AboutHero />
      <TeamSection />
      <Footer />
    </section>

  )
}

export default About