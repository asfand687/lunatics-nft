import React from 'react'
import Navbar from '../components/Navbar'
import TeamSection from '../components/TeamSection'

const Team = () => {
  return (
    <div>
      <Navbar classes="w-full max-w-[1400px] 2xl:w-full py-1 bg-black" border="border-b border-white"/>
      <TeamSection />
    </div>
  )
}

export default Team