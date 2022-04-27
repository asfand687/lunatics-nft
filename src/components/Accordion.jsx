import React, { useState } from 'react'
import Marker from './Marker'
import Chevron from '../assets/chevron-down.svg'

const Accordion = ({ faq }) => {
  const [show, setShow] = useState(faq.open)
  return (
    <div key={faq.id} >
      <h2 onClick={() => setShow(!show)} className="bg-gray-200 border border-gray-400 p-4 flex space-x-4"><img className="cursor-pointer" src={Chevron} alt="chevron" /><span>{faq.title}</span></h2>
      {
        show && (
          <article className="flex space-x-6 py-8">
            <Marker number={faq.id} />
            <div className="flex-1">
              <h2 className="text-3xl font-medium pb-4">
                {faq.title}
              </h2>
              <p className="text-lg font-light">{faq.description}</p>
            </div>
          </article>
        )
      }
    </div>
  )
}

export default Accordion