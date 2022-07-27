import React, { useState } from 'react'
import Slider from './Slick'
import { AnimatePresence, motion } from 'framer-motion'
import VaultVideo from '../assets/vault.mp4'
import ReactPlayer from 'react-player'

const Vault = () => {
  const [showVault, setShowVault] = useState(false)
  const [playVideo, setPlayVideo] = useState(false)
  const [hideText, setHideText] = useState(false)

  const handleSubmit = () => {
    setPlayVideo(true)
    setHideText(true)
  }

  return (
    <>
      <section className="bg-black">
        <AnimatePresence exitBeforeEnter>
          {
            !showVault &&
            <>
              <motion.section exit={{ opacity: 0, transition: { duration: 0.5, ease: 'circInOut' } }} className="z-0 h-full">
                <section className={`h-full w-full  transform transition-all ease-out z-10`}>
                  <article className={`absolute md:pl-20 z-10 bg-black bg-opacity-50 w-full h-full flex items-center space-y-6 md:space-y-0 transition-opacity duration-1000 ease-in-out ${hideText && 'opacity-0'}`}>
                    <div className="max-w-xl text-white">
                      <h2 className="text-4xl md:text-5xl font-medium">Enter Your Email To Gain Access To The Vault</h2>
                      <h3 className="text-2xl md:text-3xl font-light">Get Added To Our Email List</h3>
                      <div className="relative">
                        <input className="w-full text-lg bg-gray-200 rounded-3xl p-4 outline-none border border-transparent focus:border-gray-400" placeholder='example@gmail.com' />
                        <button onClick={handleSubmit} className="bg-[#0300AD] font-sans h-[55px] font-semibold tracking-wide uppercase w-[100px] rounded-3xl text-white absolute top-[3px] right-[5px] hover:opacity-80">Submit</button>
                      </div>
                    </div>
                  </article>
                  <ReactPlayer
                    className="relative video z-0"
                    url={VaultVideo}
                    playing={playVideo}
                    loop={false}
                    width="100%"
                    height="100%"
                    onEnded={() => setShowVault(true)}
                  />
                </section>
              </motion.section >
            </>
          }
          {
            showVault &&
            <motion.section
              className={`relative z-10`}
            >
              <Slider />
            </motion.section>
          }
        </AnimatePresence>
      </section>
    </>
  )
}

export default Vault