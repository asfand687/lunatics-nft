import React from 'react'
import Navbar from '../components/Navbar'
import Phases from '../components/Phases'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'

const Roadmap = () => {
  return (
    <section>
      <Navbar classes="w-full max-w-[1400px] 2xl:w-full py-1 bg-black" border="border-b border-white"/>
      <PageTitle title="Roadmap" classes="lg:-left-52 2xl:-left-32 top-[400px] text-8xl" />
      <Phases />
      <Footer />
    </section>
  )
}

export default Roadmap