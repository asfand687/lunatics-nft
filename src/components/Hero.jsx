import React,{useEffect, useRef, useState} from 'react'
import Clouds from '../assets/clouds.png'
import { useInView } from 'react-intersection-observer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const slider = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const scroll = (e) => {

    if (slider === null)
        return 0;

    if(e.wheelDelta > 0) {
      slider.current.slickNext()
    } else {
      window.scroll(0,0)
      slider.current.slickPrev()
    }
  }


  const settings = {
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    vertical: true,
    centerPadding: '50px',
    beforeChange: (prev, next) => {
      setCurrentSlide(next)
    }
  }

  console.log(currentSlide)
 
  useEffect(() => {
    window.addEventListener("wheel", scroll,true);

    return () => {
        window.removeEventListener("wheel", scroll, true);
    };
  }, [])

  return (
    <div>
      <Slider {...settings} ref={slider}>
      <section
        className="snap-center h-screen text-white hero-bg flex items-end relative w-full">
        
      </section>

      <section
        className="snap-start scrollPad md:h-screen text-white flex items-end  hero-bg second relative w-full">
        
      </section>

      <section className="snap-center h-screen md:h-screen text-white hero-bg third relative w-full">
      </section>
    </Slider>
    </div>
  )
}

export default Hero