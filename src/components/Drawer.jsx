import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Drawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <div className={`w-56 shadow-2xl z-50 bg-white fixed transition-all duration-200 ease-in-out top-0 h-screen p-4 ${showDrawer ? 'left-0' : '-left-full'}`}>
      <div onClick={() => setShowDrawer(false)} className="flex flex-row-reverse font-sans  cursor-pointer">
        <span className='px-2 cursor-pointer font-sans'>X</span>
      </div>
      <Link to="/"><img className="w-10 mx-auto" src={Logo} alt="Logo" /></Link>

      <div className="flex flex-col mt-10 space-y-6">
        <Link to="/about">
          About
        </Link>
        <Link to="/roadmap">
          Roadmap
        </Link>
        <Link to="/team">
          Meet The Team
        </Link>
        <Link to="/faq">
          FAQ
        </Link>
      </div>
    </div>
  )
}

export default Drawer