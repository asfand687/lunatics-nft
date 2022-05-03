import React from 'react'

const SectionTitle = ({ text }) => {
  return (
    <div className="bg-[#0300AD] w-screen">
      <h2 className='w-full bg-[#0300AD] lg:max-w-[1300px] 2xl:max-w-full 2xl:mx-[3%] mx-auto text-4xl font-bold text-white p-4'>{text}</h2>
    </div>
  )
}

export default SectionTitle