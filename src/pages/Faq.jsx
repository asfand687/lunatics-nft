import Navbar from '../components/Navbar'
import { ReactComponent as FaqTitle } from '../assets/faq-title.svg'
import Footer from '../components/Footer'


const Faq = () => {

  return (
    <div className="overflow-x-hidden">
      <Navbar classes="w-full max-w-[1400px] 2xl:w-full py-1 bg-black" border="border-b border-white"/>
      <section className="px-4 max-w-[1400px] mx-auto">
        <FaqTitle className="hidden lg:block w-full"/>
        <h1 className="lg:hidden font-heading text-[10rem] text-white text-center tracking-wider font-black">FAQ</h1>
      </section>
      <div className="w-full pt-4 pb-10 lg:pb-32 text-white lg:max-w-[1400px] px-4 mx-auto space-y-8 lg:space-y-14">
        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">1</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">2</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">3</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">4</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">5</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center">
              <p className="max-w-4xl p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.
              </p>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default Faq