import React from 'react'
import Navbar from '../components/Navbar'
import Phases from '../components/Phases'
import PageTitle from '../components/PageTitle'

const Roadmap = () => {
  return (
    <section>
      <Navbar classes="w-full py-1 bg-black max-w-[1400px]" />
      <PageTitle title="Roadmap" classes="-left-16" />
      <Phases />
    </section>
  )
}

export default Roadmap