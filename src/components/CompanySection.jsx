import React from 'react'
import HeroImg from '../assets/about-002.svg'

const CompanySection = () => {
  return (
    <section className="w-full py-16 lg:max-w-[1300px] 2xl:max-w-full px-4 mx-auto flex flex-col lg:flex-row justify-center mb-2">
      <div className="order-2 lg:order-1 flex-1 2xl:flex 2xl:justify-center">
        <img className="px-8 w-full lg:w-[450px]" src={HeroImg} alt="hero" />
      </div>
      <div className="pb-8 lg:pb-0 order-1 lg:order-2 flex-1 px-6 lg:flex lg:flex-col lg:items-center">
        <h2 className="text-3xl lg:w-[450px]">Company Overview</h2>
        <p className="w-full  text-lg lg:max-w-[450px] pt-8 font-jost leading-6">A collection of 7,777 unique LUNATICS built to go beyond the digital space that will unlock numerous benefits for our community, starting with our WEB3 launch pad, exclusive events, merchandise, holders’ utility (DAO) and much more as we progress through our journey. With Lunatics, our goal is to build an organic community that will bring focus on most decisions for the project to shape and drive the project
          going forward. We plan to set goals that go beyond the NFT space and to set a top standard for the fine art community.</p>
      </div>
    </section>
  )
}

export default CompanySection