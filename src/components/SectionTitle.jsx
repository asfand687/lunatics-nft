import React from 'react'

const SectionTitle = ({ text }) => {
  return (
    <div className="bg-[#0300AD]">
      <h2 className='w-full bg-[#0300AD] lg:max-w-[1300px] 2xl:max-w-full mx-auto uppercase text-5xl font-bold text-white pt-4 pb-3'>{text}</h2>
    </div>
  )
}

export default SectionTitle