import React from 'react'

const PageTitle = ({ title, classes }) => {
  return (
    <div className={`absolute font-heading uppercase w-xl py-6 font-bold text-white transform -rotate-90 ${classes}`}>
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle