import React from 'react'
import HeroImg from '../assets/about-001.svg'

const AboutHero = () => {
  return (
    <section className="w-full py-16 lg:max-w-[1300px] 2xl:max-w-full 2xl:mx-[3%] px-4 mx-auto flex flex-col lg:flex-row-reverse justify-between mb-2">
      <div className="order-2 lg:order-1 flex-1 ">
        <img className="px-8 w-full lg:w-[450px]" src={HeroImg} alt="hero" />
      </div>
      <div className="pb-8 lg:pb-0 order-1 lg:order-2 flex-1 px-6">
        <h2 className="text-4xl w-full">Atrist Vision</h2>
        <p className="w-full  text-lg lg:max-w-[450px] pt-8 font-jost leading-6">While being an intriguing and elusive character, Christopher Lizarraga’s work has a unique and recognizable image. The artist’s influences are complex and highly sophisticated seeing as Lizarraga has developed a
          painting technique that incorporates elements of Latin American Cubism, combined with his inspiration from his
          beloved street art of Los Angeles. The artist’s work continues to garner international attention as one of the
          most exciting artists of the street art community.</p>
      </div>
    </section>
  )
}

export default AboutHero