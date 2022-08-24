import React from 'react'
import Clouds from '../assets/clouds.png'
import { useInView } from 'react-intersection-observer'


const Hero = () => {
  const [ref, inView] = useInView({})
  const [ref2, inView2] = useInView({
    threshold: 0.5
  })

  return (
    <div className="snap-y snap-mandatory overflow-scroll no-scrollbar h-[100vh]">
      <section
        ref={ref}
        className="snap-center h-[900vh] md:h-screen text-white hero-bg flex items-end relative w-full">
        <img className={`hidden md:block relative top-96  w-full z-10 transition-opacity ease-in-out duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`} src={Clouds} alt="clouds" />
      </section>

      <section
        ref={ref2}
        className="snap-end h-[900vh] md:h-screen text-white flex items-end  hero-bg second relative w-full">
        <img className={`hidden md:block relative top-96  w-full z-10 transition-opacity ease-in-out duration-300 ${inView2 ? 'opacity-100' : 'opacity-0'}`} src={Clouds} alt="clouds" />
      </section>

      <section className="snap-center h-[110vh] md:h-screen text-white hero-bg third relative w-full">
      </section>
    </div>
  )
}

export default Hero