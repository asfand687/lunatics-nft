import React, { useState } from 'react'
import Drawer from './Drawer'
import Logo from '../assets/logo.svg'
import Hamburger from '../assets/bars.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav className="w-full max-w-[1300px] px-4 mx-auto flex justify-between items-center mb-2">
      <div className="md:hidden flex-1"></div>
      <div className="flex-1 flex justify-between items-center md:block">
        <Link to="/"><img className="w-10" src={Logo} alt="logo" /></Link>
        <div className="md:hidden flex-1"></div>
        <div className="md:hidden"><img onClick={() => setShowDrawer(!showDrawer)} className="cursor-pointer" src={Hamburger} alt="Hamburger icon" /></div>
      </div>

      <div className="hidden md:flex space-x-6">
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
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </nav>
  )
}

export default Navbar