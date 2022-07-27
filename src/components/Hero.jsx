import React from 'react'
import Clouds from '../assets/clouds-01.png'
import { useInView } from 'react-intersection-observer'


const Hero = () => {
  const [ref, inView] = useInView()
  const [ref2, inView2] = useInView()

  return (
    <>
      <section
        ref={ref}
        className="h-[70vh] md:h-screen text-white hero-bg relative w-full">
        <img className={`hidden md:block relative pt-20 z-10 transition-opacity ease-in-out duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`} src={Clouds} alt="clouds" />
      </section>

      <section
        ref={ref2}
        className="h-[70vh] md:h-screen text-white hero-bg second relative w-full">
        <img className={`hidden md:block relative pt-20 z-10 transition-opacity ease-in-out duration-300 ${inView2 ? 'opacity-100' : 'opacity-0'}`} src={Clouds} alt="clouds" />
      </section>

      <section className="h-[70vh] md:h-screen text-white hero-bg third relative w-full">
      </section>
    </>
  )
}

export default Hero