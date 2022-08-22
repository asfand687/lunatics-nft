import React, { useState } from 'react'
import Logo from '../assets/logo-white.svg'
import { Link } from 'react-router-dom'
import Drawer from './Drawer'

const Navbar = ({ classes }) => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav className={`${classes} px-4 mx-auto`}>
      <section className="lg:text-white flex pb-4 justify-between items-center border-b border-white ">
        <div className="flex relative z-50 justify-between items-center md:block">
          <Link to="/"><img className="w-8" src={Logo} alt="logo" /></Link>
        </div>
        <div className={`relative z-50 ${showDrawer ? "" : "space-y-2"}`} onClick={() => setShowDrawer(!showDrawer)}>
          <div className={`bg-white w-12 h-1 transition-transform duration-300 ease-in-out ${showDrawer ? "transform rotate-45" : ""}`}></div>
          <div className={`bg-white w-12 h-1 transition-transform duration-300 ease-in-out ${showDrawer ? "transform -translate-y-1 -rotate-45" : ""}`}></div>
          <div className={`bg-white w-12 h-1 transition-transform duration-300 ease-in-out ${showDrawer ? "transform -translate-y-2 -rotate-45" : ""}`}></div>
        </div>
      </section>
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </nav>
  )
}

export default Navbar