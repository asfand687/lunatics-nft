import React, { useState } from 'react'
import Cog from '../assets/chrome_bank_door 1.svg'
import Slider from './Slick'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const Vault = () => {
  const [showVault, setshowVault] = useState(false)

  return (
    <>
      <SectionTitle text={"Into The Vault"} />
      <AnimatePresence exitBeforeEnter>
        {
          !showVault &&
          <motion.section exit={{ opacity: 0, transition: { duration: 1 } }} className="z-0">
            <section className={`mt-14 mb-10 w-full max-w-[1300px] mx-auto flex flex-col px-4 md:flex-row md:space-x-6 transform transition-all ease-out ${showVault ? 'translate-y-full hidden' : 'translate-y-0'}`}>
              <article className='flex-1 space-y-6 md:space-y-0'>
                <h2 className="text-4xl md:text-5xl font-medium">Enter Your Email To Gain Access To The Vault</h2>
                <h3 className="text-2xl md:text-3xl font-light py-10">Get Added To Our Email List</h3>
                <div className="relative">
                  <input className="w-full text-lg bg-gray-200 rounded-3xl p-4 outline-none border border-transparent focus:border-gray-400" placeholder='example@gmail.com' />
                  <button onClick={() => setshowVault(true)} className="bg-[#0300AD] font-sans h-[55px] font-semibold tracking-wide uppercase w-[100px] rounded-3xl text-white absolute top-[3px] right-[5px] hover:opacity-80">Submit</button>
                </div>
              </article>
              <article className="flex-1 pt-10 px-4 md:pt-0">
                <img src={Cog} alt="cog" />
              </article>
            </section>
          </motion.section >
        }
      </AnimatePresence>
      {
        showVault &&
        <motion.section
          className={` height-[100vh] relative z-10 transition-all ease-in-out transform ${showVault ? 'translate-y-0' : 'translate-y-full'}`}
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            bounce: 30,
            duration: 1
          }}
        >
          <Slider />
        </motion.section>
      }
    </>
  )
}

export default Vault