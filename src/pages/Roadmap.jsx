import React from 'react'
import Navbar from '../components/Navbar'
import Phases from '../components/Phases'
import PageTitle from '../components/PageTitle'

const Roadmap = () => {
  return (
    <section>
      <Navbar classes="w-full py-1 bg-black" />
      <PageTitle title="Roadmap" classes="-left-32" />
      <Phases />
    </section>
  )
}

export default Roadmap