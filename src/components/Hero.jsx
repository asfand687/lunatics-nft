import React, { useEffect, useRef, useState } from 'react'
import Clouds from '../assets/clouds.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vault from './Vault';

const Hero = () => {
  const slider = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const scroll = (e) => {

    if (slider === null)
      return 0;

    if (e.wheelDelta > 0) {
      slider.current.slickNext()
    } else {
      slider.current.slickPrev()
    }
  }

  const settings = {
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    centerPadding: '50px',
    dots: true,
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
    <div className="h-screen overflow-hidden">
      <Slider {...settings} ref={slider}>
        <section
          className="snap-center h-screen text-white hero-bg flex items-end relative w-full">
          <img className={`hidden md:block absolute -bottom-80 w-full z-10 transition-opacity ease-in-out delay-500 duration-1000 ${currentSlide === 0 ? "opacity-80" : 'opacity-0'}`} src={Clouds} alt="clouds" />
        </section>

        <section
          className="snap-start  scrollPad md:h-screen text-white flex items-end  hero-bg second relative w-full">
          <img className={`hidden md:block absolute -bottom-80 w-full z-10 transition-opacity ease-in-out delay-500 duration-1000 ${currentSlide === 1 ? "opacity-80" : 'opacity-0'}`} src={Clouds} alt="clouds" />
        </section>

        <section className="snap-center h-screen md:h-screen text-white hero-bg third relative w-full">
        </section>

        <Vault />
      </Slider>
    </div>
  )
}

export default Hero