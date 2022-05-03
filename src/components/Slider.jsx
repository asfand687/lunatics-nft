import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Shadow from '../assets/shadow.png'
import Marker from './Marker'
import SliderPic1 from '../assets/slider-001-min.png'
import SliderPic2 from '../assets/slider-002-min.png'
import SliderPic3 from '../assets/slider-003-min.png'
import SliderPic4 from '../assets/slider-004-min.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const sliderData = [
  {
    id: 1,
    img: SliderPic1,
    title: "Piece One",
    markerText: "001",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 2,
    img: SliderPic2,
    title: "Piece Two",
    markerText: "002",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 3,
    img: SliderPic3,
    title: "Piece Three",
    markerText: "003",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
  {
    id: 4,
    img: SliderPic4,
    title: "Piece Four",
    markerText: "004",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, deserunt. Veniam, expedita, consequatur nesciunt consectetur voluptates, doloremque fugiat perspiciatis mollitia nostrum magni perferendis rem? Soluta?"
  },
]

const Slider = () => {
  return (
    <div className="bg-[#282828] w-full lg:max-w-[1300px] 2xl:max-w-full 2xl:mx-[3%] px-4 py-16">
      <Carousel responsive={responsive} autoPlay={false} shouldResetAutoplay={false} centerMode>
        {
          sliderData.map((item, idx) => (
            <article className="flex space-x-4" key={item.id}  >
              <img className="w-60" src={item.img} />
              <div>
                <Marker number={item.id} classes="mt-2" small />
                <h2 className="text-base">{item.title}</h2>
                <p className="text-[12px] max-w-[220px] leading-4">{item.description}</p>
              </div>
            </article>
          ))
        }
      </Carousel >
    </div>
  )
}

export default Slider