import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Drawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <div className={` rounded-lg shadow-2xl z-50 bg-white fixed transition-all duration-200 ease-in-out top-20 p-4 ${showDrawer ? 'right-0' : '-right-full'}`}>
      <div onClick={() => setShowDrawer(false)} className="flex flex-row-reverse font-sans cursor-pointer">
        <span className='px-2 cursor-pointer font-sans'><AiOutlineClose className="text-2xl" /></span>
      </div>

      <div className="flex items-center text-lg font-medium flex-col space-y-2">
        <Link onClick={() => setShowDrawer(!showDrawer)} to="/about">
          About
        </Link>
        <Link onClick={() => setShowDrawer(!showDrawer)} to="/roadmap">
          Roadmap
        </Link>
        <Link onClick={() => setShowDrawer(!showDrawer)} to="/team">
          Meet The Team
        </Link>
        <Link onClick={() => setShowDrawer(!showDrawer)} to="/faq">
          FAQ
        </Link>
        <div className="space-y-4 flex flex-col items-center">
          <button className="w-48 py-1 bg-[#0300AD] hover:opacity-90 transition-opacity ease-in-out duration-300 text-white rounded-full font-muse text-lg font-medium">
            Mint
          </button>
          <button className="w-48 py-1 bg-[#0300AD] hover:opacity-90 transition-opacity ease-in-out duration-300 text-white rounded-full font-muse text-lg font-medium">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer