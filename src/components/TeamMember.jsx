import React from 'react'

const TeamMember = ({ reverse, img, heading, description }) => {
  return (
    <article className={`flex flex-col md:flex-row w-full justify-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="flex-1 flex justify-center md:px-4">
        <img className="w-full max-w-[450px]" src={img} alt="team member" />
      </div>
      <div className={`flex-1 relative  pt-4 md:pt-0 flex flex-col justify-center ${reverse ? "md:items-end" : "md:items-start"}`}>
        <h2 className="text-3xl px-4 md:px-0 font-medium pb-8">{heading}</h2>
        <p className={`text-lg px-4 md:px-0 max-w-[500px] leading-7 ${reverse ? "md:text-right" : "md:text-left"}`}>
          {description}
        </p>
      </div>
      <div className='md:hidden ml-4 w-32 pt-8 border-b border-black'></div>
    </article>
  )
}

export default TeamMember