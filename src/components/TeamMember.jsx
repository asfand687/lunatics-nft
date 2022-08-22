import React from 'react'

const TeamMember = ({ img, heading, description }) => {
  return (
    <article className={`flex flex-col justify-center`}>
      <div className="flex-1 flex justify-center ">
        <div className="border border-gray-300 rounded-xl p-[6px]">
          <div className="border border-gray-300 rounded-xl p-8">
            <img className="w-full" src={img} alt="team member" />
          </div>
        </div>
      </div>
      <div className={`flex-1 relative  pt-4 md:pt-0 flex flex-col justify-center `}>
        <h2 className="text-4xl px-4 md:px-0 font-heading uppercase font-medium py-4">{heading}</h2>
        <p className={`text-lg px-4 md:px-0 leading-7`}>
          {description}
        </p>
      </div>
      <div className='md:hidden ml-4 w-32 pt-8 border-b border-black'></div>
    </article>
  )
}

export default TeamMember