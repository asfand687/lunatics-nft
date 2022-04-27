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
    items: 1,
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
    <Carousel responsive={responsive} autoPlay={false} shouldResetAutoplay={false} centerMode>
      {
        sliderData.map(item => (
          <article key={item.id} className="bg-[#282828]" >
            <div className="flex flex-col lg:flex-row ipad:items-center justify-center items-center">
              <div className=''>
                <div className="w-full lg:flex-1 p-8 relative py-24 justify-center items-center">
                  <img className="hidden lg:block absolute z-30 top-0 left-0" src={Shadow} alt="shadow" />
                  <img className="w-full ipad:mx-0 lg:mx-auto lg:max-w-[500px]" src={item.img} alt={item.title} />
                </div>
                <div className="flex-1 px-6 lg:h-full text-white w-full">
                  <div className="lg:h-[456px] flex lg:block pb-20">
                    <div className="lg:block">
                      <Marker classes="hidden lg:block" number={item.markerText} />
                      <h3 className="text-4xl lg:py-4 font-bold order-1">{item.title}</h3>
                      <p className="lg:hidden text-justify pt-6 w-full lg:max-w-[400px]">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <Marker classes="lg:hidden" number={item.markerText} />
                      <p className="hidden lg:block text-justify pt-2 w-full lg:max-w-[400px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))
      }

    </Carousel >
  )
}

export default Slider