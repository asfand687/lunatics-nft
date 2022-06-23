import React from 'react'
import { ReactComponent as Hofa } from '../assets/hofa.svg'

const Affiliates = () => {
  return (
    <section className="affiliates relative">
      <div className="w-full  flex justify-between max-w-[1300px] mx-auto py-12">
        <h2 className="text-4xl font-light">Our<br /> Affiliates</h2>
        <Hofa />
      </div>
    </section>
  )
}

export default Affiliates