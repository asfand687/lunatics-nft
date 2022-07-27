import React from 'react'
import Clouds from '../assets/clouds.png'
import { useInView } from 'react-intersection-observer'


const Hero = () => {
  const [ref, inView] = useInView()
  const [ref2, inView2] = useInView()

  return (
    <>
      <section
        ref={ref}
        className="h-[70vh] md:h-screen text-white hero-bg flex items-end relative w-full">
        <img className={`hidden md:block relative -bottom-56 h-[350px] w-full z-10 transition-opacity ease-in-out duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`} src={Clouds} alt="clouds" />
      </section>

      <section
        ref={ref2}
        className="h-[70vh] md:h-screen text-white flex items-end  hero-bg second relative w-full">
        <img className={`hidden md:block relative -bottom-56 h-[350px] w-full z-10 transition-opacity ease-in-out duration-300 ${inView2 ? 'opacity-100' : 'opacity-0'}`} src={Clouds} alt="clouds" />
      </section>

      <section className="h-[70vh] md:h-screen text-white hero-bg third relative w-full">
      </section>
    </>
  )
}

export default Hero