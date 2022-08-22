import React from 'react'

const PageTitle = ({ title, classes }) => {
  return (
    <div className={`absolute font-heading top-[570px] uppercase w-xl text-7xl py-6 font-bold text-white transform -rotate-90 ${classes}`}>
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle