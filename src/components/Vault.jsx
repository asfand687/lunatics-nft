import React, { useState } from 'react'
import Slider from './Slick'
import { AnimatePresence, motion } from 'framer-motion'
import VaultVideo from '../assets/desktop.mp4'
import VaultVideoMobile from '../assets/mobile.mp4'
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
            <motion.section exit={{ opacity: 0, transition: { duration: 0.5, delay: 2, ease: 'circInOut' } }} className="z-0 h-[110vh]">
              <section className={`h-full w-full transform transition-all ease-out z-10`}>
                <article className={`absolute uppercase z-10 bg-black bg-opacity-50 w-full h-full flex items-center space-y-6 md:space-y-0 transition-opacity duration-1000 ease-in-out vault-text px-4 ${hideText && 'opacity-0'}`}>
                  <div className="max-w-[40rem] text-white">
                    <h2 className="text-4xl font-medium tracking-[-0.1em]  pb-8">Enter Your Email To <br /> Gain Access To The Vault</h2>
                    <h3 className="text-2xl md:text-3xl tracking-[-0.1em]  pb-4 ">Get Added To Our Email List</h3>
                    <div className="relative">
                      <input className="lg:w-[30rem] text-lg bg-gray-200 lg:rounded-3xl px-4 py-2 outline-none border border-transparent focus:border-gray-400" placeholder='example@gmail.com' />
                      <button onClick={handleSubmit} className="bg-black font-sans h-[47px] font-semibold tracking-wide w-[100px] uppercase lg:w-[120px] lg:rounded-3xl text-white absolute top-0 right-8 lg:right-0 hover:opacity-80">Submit</button>
                    </div>
                  </div>
                </article>
                <ReactPlayer
                  className="hidden lg:block relative video z-0"
                  url={VaultVideo}
                  playing={playVideo}
                  loop={false}
                  width="100%"
                  height="100%"
                  onEnded={() => setShowVault(true)}
                />
                <ReactPlayer
                  className="block lg:hidden relative video z-0"
                  url={VaultVideoMobile}
                  playing={playVideo}
                  loop={false}
                  width="100%"
                  height="100%"
                  onEnded={() => setShowVault(true)}
                />
              </section>
            </motion.section >
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