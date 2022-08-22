import Navbar from '../components/Navbar'
import { ReactComponent as FAQ01 } from '../assets/faq-marker001.svg'
import { ReactComponent as FAQ02 } from '../assets/faq-marker002.svg'
import { ReactComponent as FAQ03 } from '../assets/faq-marker003.svg'
import { ReactComponent as FAQ04 } from '../assets/faq-marker004.svg'
import { ReactComponent as FAQ05 } from '../assets/faq-marker005.svg'
import { ReactComponent as FaqTitle } from '../assets/faq-title.svg'


const Faq = () => {

  return (
    <div className="overflow-x-hidden">
      <Navbar classes="w-full py-1 bg-black" />
      <section className="px-4 max-w-[1400px] mx-auto">
        <FaqTitle className="w-full" />
      </section>
      <div className="w-full pt-4 pb-32 text-white lg:max-w-[1400px] 2xl:max-w-full px-4 lg:px-8 mx-auto space-y-14">
        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="w-52 border rounded-lg border-gray-200 text-[150px] font-bold flex justify-center items-center leading-snug font-heading">1</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="w-52 border rounded-lg border-gray-200 text-[150px] font-bold flex justify-center items-center leading-snug font-heading">2</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="w-52 border rounded-lg border-gray-200 text-[150px] font-bold flex justify-center items-center leading-snug font-heading">3</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="w-52 border rounded-lg border-gray-200 text-[150px] font-bold flex justify-center items-center leading-snug font-heading">4</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="w-52 border rounded-lg border-gray-200 text-[150px] font-bold flex justify-center items-center leading-snug font-heading">5</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

      </div>
    </div>
  )
}

export default Faq