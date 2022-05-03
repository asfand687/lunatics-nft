import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Video from '../assets/hero.mp4'

const Hero = () => {
  const [mute, setMute] = useState(true)
  const [showMute, setShowMute] = useState(false)
  return (
    <section onMouseEnter={() => setShowMute(true)} onMouseLeave={() => setShowMute(false)} className="w-full lg:max-w-[1300px] 2xl:max-w-full 2xl:mx-[3%] mx-auto px-4 h-[50vh] md:h-[80vh] ">
      <div onClick={() => setMute(!mute)} className={`absolute z-20 cursor-pointer right-[15%] bottom-[80px] transition-opacity ease-in-out duration-300 text-white ${showMute ? "opacity-100" : "opacity-0"}`}>{mute ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>)}</div>
      <ReactPlayer
        className="relative z-10"
        width="100%"
        height="100%"
        url={Video}
        playing={true}
        muted={mute}
        loop={true}
      />
    </section>

  )
}

export default Hero