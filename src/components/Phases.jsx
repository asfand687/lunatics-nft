import React from 'react'
import { ReactComponent as ProgressComplete } from '../assets/progress-complete.svg'
import { ReactComponent as ProgressPending } from '../assets/progress-pending.svg'

const Phases = () => {
  return (
    <div className="w-full pb-32 lg:max-w-[1400px] px-4 lg:px-8 mx-auto">
      <h1 className="font-muse text-5xl py-6 md:py-16 font-bold">Roadmap</h1>
      <section className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6 font-muse">
        <article className="flex-1">
          <ProgressComplete className="hidden lg:block" />
          <h2 className="text-4xl py-6 pb-10 font-muse font-normal hidden lg:block">Phase 1</h2>
          <div className=" py-2 space-y-10 h-full">
            <article>
              <h2 className="text-2xl font-bold pb-6 lg:hidden block">Phase 1</h2>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">Off The Walls</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                Plan and collaborate using strategic partnerships with distinguished person-
                alities across many avenues including trusted individuals within the NFT community, celebrities, artists, influencers and other NFT projects.
              </p>
            </article>

            <article>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">LUNATICS Store</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                Signature Lunatics merchandise to be launched for our community, pre-mint. This merchandise brings utility to 1,000 lucky participants to gain VIP whitelist access through the purchase of merchandise. Profits to be allocated to community wallet pre-mint.
              </p>
            </article>

            <article>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">3D Collectibles</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                Fine art is incredible. Why not have something to physically show off? Our
                community will have a say which LUNATICS come to life. We will have regular drops with each collection being limited to increase its value and uniqueness for our community members.
              </p>
            </article>
          </div>
        </article>

        <article className="flex-1">
          <div className="lg:px-6">
            <ProgressComplete className="hidden lg:block" />
            <h2 className="text-4xl py-6 pb-10 font-muse font-normal hidden lg:block">Phase 2</h2>
          </div>
          <div className="py-2 lg:border-x lg:px-6 lg:h-[1064px] lg:border-[#0300AD] space-y-10">
            <article>
              <h2 className="text-2xl font-bold pb-6 lg:hidden block">Phase 2</h2>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">Gen 2 Collection Utility</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                Our next collection drop will be HUGE! All of our holders will have early whitelist spots and FREE NFTs for this collection. You don’t want to miss this.
              </p>
            </article>

            <article>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">Launchpad</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                LUNATICS holders will gain early access to new and upcoming NFT projects, Whitelist spots, even free NFT airdrops. Depending on the upcoming NFT projects we have coming, this may be a monthly, or even a weekly event!
              </p>
            </article>

            <article>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">Event Access</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                We believe that we have something special when it comes to our art and utilities, and we hope to bridge the gap between both WEB2 and WEB3 art communities. How will we do so? By hosting exclusive events with some of the world’s most talented artists, musicians, and personalities – all exclusively and complimentary to our holders.
              </p>
            </article>
          </div>
        </article>

        <article className="flex-1">
          <div className="lg:px-6">
            <ProgressPending className="hidden lg:block" />
            <h2 className="text-4xl py-6 pb-10 font-muse font-normal hidden lg:block">Phase 3</h2>
          </div>
          <div className="py-2 space-y-10">
            <article>
              <h2 className="text-2xl font-bold pb-6 lg:hidden block">Phase 3</h2>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">Lunatics Dao</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                The Lunatics DAO will be curated and developed to allow our new community on deciding the direction of the Lunatics, its ecosystem, and its future to continue developing the WEB3 and NFT industry. A decided secondary sales percentage will go into the community vault which will be used in any area the DAO sees fit to continue expanding the Lunatics. Each Lunatics holder will be granted voting power within the ecosystem, allowing for a truly decentralized project.
              </p>
            </article>

            <article>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">World Of Metaverse</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                Lunatics will shift itself into the Metaverse developing an art museum of its own. The museum is set to host and collaborate with major brand names, artists and even NFT projects. The best part? Passive income for ALL Lunatics’ holders as we navigate advertising revenue and admission fees for the museum.
              </p>
            </article>

            <article>
              <h2 className="text-muse text-xl lg:text-3xl font-normal pb-8">$FAMM</h2>
              <p className="text-base lg:text-lg  leading-9 tracking-[-1.5%]">
                Creation of the $FAMM (Fine Art Museum Of The Metaverse) governance token for staking. Your native governance tokens could be used for attributes in our World of Metaverse, swap $FAMM for ETH or use it to purchase from our store.
              </p>
            </article>
          </div>
        </article>
      </section >
    </div>
  )
}

export default Phases