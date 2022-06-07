import React, { useState } from 'react'
import '../App.css'
import SliderPic1 from '../assets/slider-001.svg'
import SliderPic2 from '../assets/slider-002.svg'
import SliderPic3 from '../assets/slider-003.svg'
import SliderPic4 from '../assets/slider-004.svg'
import SliderPic5 from '../assets/slider-005.svg'
import SliderPic6 from '../assets/slider-006.svg'
import SliderPic7 from '../assets/slider-007.svg'
import SliderPic8 from '../assets/slider-008.svg'
import SliderPic9 from '../assets/slider-009.svg'
import SliderPic10 from '../assets/slider-010.svg'
import SliderPic11 from '../assets/slider-011.svg'
import Marker1 from '../assets/marker-001.svg'
import Marker2 from '../assets/marker-002.svg'
import Marker3 from '../assets/marker-003.svg'
import Marker4 from '../assets/marker-004.svg'
import Marker5 from '../assets/marker-005.svg'
import Marker6 from '../assets/marker-006.svg'
import Marker7 from '../assets/marker-007.svg'
import Marker8 from '../assets/marker-008.svg'
import Marker9 from '../assets/marker-009.svg'
import Marker10 from '../assets/marker-010.svg'
import Marker11 from '../assets/marker-011.svg'
import ArrowLeft from '../assets/arrow-narrow-left.svg'
import ArrowRight from '../assets/arrow-narrow-right.svg'
import Slider from "react-slick";
import Shadow from '../assets/shadow.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'



const sliderData = [
  {
    id: 1,
    img: SliderPic1,
    marker: Marker1,
    title: "Piece One",
    markerText: "001",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 2,
    img: SliderPic2,
    marker: Marker2,
    title: "Piece Two",
    markerText: "002",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 3,
    img: SliderPic3,
    marker: Marker3,
    title: "Piece Three",
    markerText: "003",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 4,
    img: SliderPic4,
    marker: Marker4,
    title: "Piece Four",
    markerText: "004",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  }, {
    id: 5,
    img: SliderPic5,
    marker: Marker5,
    title: "Piece Five",
    markerText: "005",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 6,
    img: SliderPic6,
    marker: Marker6,
    title: "Piece Six",
    markerText: "006",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 7,
    img: SliderPic7,
    marker: Marker7,
    title: "Piece Seven",
    markerText: "007",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 8,
    img: SliderPic8,
    marker: Marker8,
    title: "Piece Eight",
    markerText: "008",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  }, {
    id: 9,
    img: SliderPic9,
    marker: Marker9,
    title: "Piece Nine",
    markerText: "009",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 10,
    img: SliderPic10,
    marker: Marker10,
    title: "Piece Ten",
    markerText: "010",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 11,
    img: SliderPic11,
    marker: Marker11,
    title: "Piece Eleven",
    markerText: "011",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
]

const Slick = () => {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute top-[50%] z-10 right-0 bg-white rounded-full transition-opacity ease-in p-2 hover:opacity-90 cursor-pointer" onClick={onClick}>
        <img src={ArrowRight} alt="next" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute top-[50%] z-10 left-0 bg-white rounded-full transition-opacity ease-in p-2 hover:opacity-90 cursor-pointer" onClick={onClick}>
        <img src={ArrowLeft} alt="next" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 10,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    nextArrow: <NextArrow className="text-black" />,
    prevArrow: <PrevArrow className="text-black" />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="bg-black">
      <div className="px-6 lg:block">
        <Slider {...settings}>
          {sliderData.map((slider, idx) => (
            <div key={slider.id} className={`px-4 ${idx === imageIndex ? "" : "opacity-30"}`} >
              <div className="flex flex-col items-center lg:flex-row space-x-6 py-14">
                <article className={` relative`}>
                  {idx === imageIndex && (
                    <img className={`absolute z-50  left-1/2 transform -translate-x-1/2 hidden ${idx === imageIndex ? "animate-pulse -top-14 scale-125 block" : ""}`} src={Shadow} alt="shadow" />
                  )}
                  <motion.img animate={{ scale: idx === imageIndex ? 1 : 0.9 }} transition={{ delay: 0.2, ease: 'easeInOut' }} className="w-[250px] h-[330px] relative z-10" src={slider.img} alt="nft" />
                </article>
                <article className="flex-1 flex flex-col items-start">
                  <img className="w-20 h-20 " src={slider.marker} alt={slider.title} />
                  <motion.div initial={{ opacity: 0.4 }} animate={{ opacity: idx === imageIndex ? 1 : 0.4 }} transition={{ delay: 0.5, ease: 'circIn' }}>
                    <h2 className="text-white pt-4">{slider.title}</h2>
                    <p className="text-white text-justify text-[12px] max-w-[300px]">{slider.description}</p>
                  </motion.div>
                </article>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Slick