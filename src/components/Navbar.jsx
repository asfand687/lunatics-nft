import React, { useState } from 'react'
import Logo from '../assets/logo-white.svg'
import { ReactComponent as Hamburger } from '../assets/bars.svg'
import { Link } from 'react-router-dom'
import Drawer from './Drawer'

const Navbar = ({ classes }) => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav className={`${classes}`}>
      <section className="lg:text-white px-4 lg:px-8 flex justify-between items-center">
        <div className="flex relative z-50 justify-between items-center md:block">
          <Link to="/"><img className="w-8" src={Logo} alt="logo" /></Link>
        </div>
        <div className="relative z-50" onClick={() => setShowDrawer(!showDrawer)}><Hamburger className="cursor-pointer" src={Hamburger} alt="Hamburger icon" /></div>
      </section>
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </nav>
  )
}

export default Navbar