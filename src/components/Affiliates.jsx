import React from 'react'
import { ReactComponent as Hofa } from '../assets/hofa.svg'

const Affiliates = () => {
  return (
    <section className="w-full max-w-[1300px] mx-auto my-6 flex flex-col items-center">
      <h2 className="text-4xl font-light pb-12">Our Affiliates</h2>
      <Hofa />
    </section>
  )
}

export default Affiliates