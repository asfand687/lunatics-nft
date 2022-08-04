import React from 'react'
import HeroImg2 from '../assets/about-001.svg'
import HeroImg from '../assets/about-002.svg'

const AboutHero = () => {
  return (
    <section className="w-full py-16 lg:max-w-[1450px] 2xl:max-w-full px-4 mx-auto flex flex-col lg:flex-row justify-between mb-2 min-h-[62vh] lg:gap-x-8">
      <article className="flex-1">
        <div className="max-w-[500px] mx-auto">
          <img src={HeroImg} alt="Company Overview" />
          <h2 className="text-2xl font-muse py-4 lg:py-8">Company Overview</h2>
          <p className="font-jost">
            A collection of 7,777 unique LUNATICS built to go beyond the digital space that will unlock numerous benefits for our community, starting with our WEB3 launch pad, exclusive events, merchandise, holders’ utility (DAO) and much more as we progress through our journey. With Lunatics, our goal is to build an organic community that will bring focus on most decisions for the project to shape and drive the project going forward. We plan to set goals that go beyond the NFT space and to set a top standard for the fine art community.
          </p>
        </div>
      </article>
      <article className="flex-1">
        <div className="max-w-[500px] mx-auto">
          <img src={HeroImg2} alt="Artist Overview" />
          <h2 className="text-2xl font-muse py-4 lg:py-8">Artist Overview</h2>
          <p className="font-jost">
            While being an intriguing and elusive character, Christopher Lizarraga’s work has a unique and recognizable image. The artist’s influences are complex and highly sophisticated seeing as Lizarraga has developed a painting technique that incorporates elements of Latin American Cubism, combined with his inspiration from his beloved street art of Los Angeles. The artist’s work continues to garner international attention as one of the most exciting artists of the street art community.
          </p>
        </div>
      </article>
    </section>
  )
}

export default AboutHero