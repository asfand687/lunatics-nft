import Navbar from '../components/Navbar'
import { ReactComponent as FAQ01 } from '../assets/faq-marker001.svg'
import { ReactComponent as FAQ02 } from '../assets/faq-marker002.svg'
import { ReactComponent as FAQ03 } from '../assets/faq-marker003.svg'
import { ReactComponent as FAQ04 } from '../assets/faq-marker004.svg'
import { ReactComponent as FAQ05 } from '../assets/faq-marker005.svg'

const Faq = () => {

  return (
    <div className="overflow-x-hidden">
      <Navbar classes="w-full py-1 bg-[#0300AD]" />
      <div className="w-full pt-16 pb-32 lg:max-w-[1450px] 2xl:max-w-full px-4 lg:px-8 mx-auto font-muse space-y-14">
        <div className="flex justify-center">
          <h1 className="font-muse text-5xl py-6 font-bold">FAQ</h1>
          <div className='w-[950px] hidden md:block'></div>
        </div>
        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-end">
          <FAQ01 />
          <p className="text-lg max-w-[950px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
          </p>
        </article>
        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-end">
          <FAQ02 />
          <p className="text-lg max-w-[950px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
          </p>
        </article>
        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-end">
          <FAQ03 />
          <p className="text-lg max-w-[950px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
          </p>
        </article>
        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-end">
          <FAQ04 />
          <p className="text-lg max-w-[950px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
          </p>
        </article>
        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-end">
          <FAQ05 />
          <p className="text-lg max-w-[950px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Faq