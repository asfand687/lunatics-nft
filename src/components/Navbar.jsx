import React, { useState } from 'react'
import Logo from '../assets/logo-white.svg'
import { Link } from 'react-router-dom'
import Drawer from './Drawer'

const Navbar = ({ classes, border }) => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav className={`${classes} px-4 mx-auto`}>
      <section className={`lg:text-white flex pb-4 justify-between items-center ${border}`}>
        <div className="flex relative z-50 justify-between items-center md:block">
          <Link to="/"><img className="w-8" src={Logo} alt="logo" /></Link>
        </div>
        <button className={`relative z-50 hamburger ${showDrawer ? "" : "space-y-1"}`} onClick={() => setShowDrawer(!showDrawer)}>
          <div className={`bg-white w-8 h-1 transition-transform duration-300 ease-in-out ${showDrawer ? "transform rotate-45" : ""}`}></div>
          <div className={`bg-white w-8 h-1 transition-transform duration-300 ease-in-out ${showDrawer ? "transform -translate-y-1 -rotate-45" : ""}`}></div>
          <div className={`bg-white w-8 h-1 transition-transform duration-300 ease-in-out ${showDrawer ? "transform -translate-y-2 -rotate-45" : ""}`}></div>
        </button>
      </section>
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </nav>
  )
}

export default Navbar