import React from 'react'
import ReactPlayer from 'react-player'
import Video from '../assets/hero.mp4'

const Hero = () => {
  return (
    <section className="w-full max-w-[1300px] mx-auto px-4 h-[50vh] md:h-[80vh] ">
      <ReactPlayer
        width="100%"
        height="100%"
        url={Video}
        muted
        playing={true}
        controls={true}
        loop={true}
      />
    </section>
  )
}

export default Hero