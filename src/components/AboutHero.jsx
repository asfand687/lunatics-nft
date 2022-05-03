import React from 'react'
import HeroImg from '../assets/about-001.png'

const AboutHero = () => {
  return (
    <section className="w-full py-16 lg:max-w-[1300px] 2xl:max-w-full 2xl:mx-[3%] px-4 mx-auto flex flex-col lg:flex-row justify-between mb-2">
      <div className="order-2 lg:order-1 flex-1 ">
        <img className="px-8 w-full lg:w-[450px]" src={HeroImg} alt="hero" />
      </div>
      <div className="pb-8 lg:pb-0 order-1 lg:order-2 flex-1 px-6">
        <h2 className="text-4xl w-full">Atrist Vision</h2>
        <p className="w-full  text-lg lg:max-w-[450px] pt-8 font-jost leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.</p>
      </div>
    </section>
  )
}

export default AboutHero