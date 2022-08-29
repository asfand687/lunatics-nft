import React, { useEffect, useRef, useState } from 'react'
import Clouds from '../assets/clouds.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vault from './Vault';
import {motion} from 'framer-motion'

const Hero = () => {
  const slider = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const scroll = (e) => {

    if (slider === null)
      return 0;

    if (e.wheelDelta < 0) {
      slider.current.slickNext()
    } else {
      slider.current.slickPrev()
    }
  }

  const settings = {
    className: "h-[88vh]",
    vertical: true,
    speed: 800,
    slidesToShow: 1,    
    dots: true,
    infinite: false,
    beforeChange: (prev, next) => {
      setCurrentSlide(next)
    },
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          height: "150px",
          width: "50px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  }



  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, [])

  return (
    <div className="overflow-hidden">
      <Slider {...settings} ref={slider}>
        <section>
        <motion.section
          className={`h-[88vh] text-white hero-bg flex items-end relative w-full transition-opacity duration-1000 delay-100 ${currentSlide === 0 ? 'opacity-100': 'opacity-0'}`}>
          <img className={`hidden md:block absolute -bottom-80 w-full z-10 transition-opacity ease-in-out delay-500 duration-1000 ${currentSlide === 0 ? "opacity-80" : 'opacity-0'}`} src={Clouds} alt="clouds" />
        </motion.section>
        </section>

        <section>
        <motion.section
          className={`h-[88vh] text-white flex items-end  hero-bg second relative w-full transition-opacity duration-1000 delay-100 ${currentSlide === 1 ? 'opacity-100': 'opacity-0'}`}>
          <img className={`hidden md:block absolute -bottom-80 w-full z-10 transition-opacity ease-in-out delay-500 duration-1000 ${currentSlide === 1 ? "opacity-80" : 'opacity-0'}`} src={Clouds} alt="clouds" />
        </motion.section>
        </section>

        <section>
        <motion.section className={`h-[88vh] text-white hero-bg third relative w-full transition-opacity duration-1000 delay-100 ${currentSlide === 2 ? 'opacity-100': 'opacity-0'}`}>
        </motion.section>
        </section>

        <Vault/>
      </Slider>
    </div>
  )
}

export default Hero