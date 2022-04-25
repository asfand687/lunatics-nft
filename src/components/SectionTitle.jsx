import React from 'react'

const SectionTitle = ({ text }) => {
  return (
    <div className="bg-[#0300AD]">
      <h2 className='w-full max-w-[1300px] mx-auto text-4xl font-bold text-white p-4'>{text}</h2>
    </div>
  )
}

export default SectionTitle