import React, { useRef } from 'react'
import HeroImg2 from '../assets/about-001.svg'
import HeroImg from '../assets/about-002.svg'

const AboutHero = () => {
  const imageRef1 = useRef(null)
  const handleMouseMove = (e, refName) => {
    const { x, y } = refName.current.getBoundingClientRect()
    document.querySelector('.radial').style.top = `calc(${e.clientY - y}px)`
    document.querySelector('.radial').style.left = `calc(${e.clientX - x}px)`
  }
  return (
    <section className="w-full text-white pt-24 py-16 lg:max-w-[1400px] 2xl:max-w-full px-4 mx-auto mb-2">
      <div className="flex flex-col lg:flex-row lg:space-x-20">
        <article className="flex-[2] border border-gray-300 rounded-xl p-[6px]">
          <div className="border border-gray-300 rounded-xl p-8 h-full">
            <div>
              <div className="spotify overflow-hidden relative filter hover:grayscale transition-all ease-in-out duration-500">
                <div className={`absolute w-48 h-48 rounded-full radial`}></div>
                <img ref={imageRef1} onMouseMove={(e) => handleMouseMove(e, imageRef1)} className="w-full" src={HeroImg} alt="Company Overview" />
              </div>
              <h2 className="text-2xl font-heading py-4 lg:py-2">Company Overview</h2>
              <p>
                A collection of 7,777 unique LUNATICS built to go beyond the digital space that will unlock numerous benefits for our community, starting with our WEB3 launch pad, exclusive events, merchandise, holders’ utility (DAO) and much more as we progress through our journey. With Lunatics, our goal is to build an organic community that will bring focus on most decisions for the project to shape and drive the project going forward. We plan to set goals that go beyond the NFT space and to set a top standard for the fine art community.
              </p>
            </div>
          </div>
        </article>
        <article className="flex-[2] border border-gray-300 rounded-xl p-[6px]">
          <div className="border border-gray-300 rounded-xl p-8 h-full">
            <div>
              <img className="w-full" src={HeroImg2} alt="Artist Overview" />
              <h2 className="text-2xl font-heading py-4 lg:py-2">Artist Overview</h2>
              <p>
                While being an intriguing and elusive character, Christopher Lizarraga’s work has a unique and recognizable image. The artist’s influences are complex and highly sophisticated seeing as Lizarraga has developed a painting technique that incorporates elements of Latin American Cubism, combined with his inspiration from his beloved street art of Los Angeles. The artist’s work continues to garner international attention as one of the most exciting artists of the street art community.
              </p>
            </div>
          </div>
        </article>
        <article className="w-12"></article>
      </div>
    </section>
  )
}

export default AboutHero