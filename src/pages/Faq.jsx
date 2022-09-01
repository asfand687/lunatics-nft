import Navbar from '../components/Navbar'
import { ReactComponent as FaqTitle } from '../assets/faq-title.svg'
import Footer from '../components/Footer'


const Faq = () => {

  return (
    <div className="overflow-x-hidden">
      <Navbar classes="w-full lg:max-w-[1125px] 2xl:max-w-[1400px] 2xl:w-full py-1 bg-black" border="border-b border-white" />
      <section className="px-4 w-full  lg:max-w-[1125px] 2xl:max-w-[1400px] mx-auto">
        <FaqTitle className="hidden lg:block w-full lg:max-w-[1125px] 2xl:max-w-[1400px] mx-auto" />
        <h1 className="block lg:hidden font-heading text-[6rem] md:text-[15rem] text-white text-center tracking-wider font-black">FAQ</h1>
      </section>
      <div className="w-full pt-4 pb-10 lg:pb-32 text-white  lg:max-w-[1125px] 2xl:max-w-[1400px] px-4 mx-auto space-y-8 lg:space-y-14">
        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">1</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center p-2">
              <article className="space-y-4 text-center">
                <h2 className="font-semibold text-xl">When is the Mint Date?</h2>
                <div className="space-y-2">
                  <p className="max-w-4xl">
                    PRESALE - November 1st, 2022 1PM EST
                  </p>
                  <p>
                    PUBLIC SALE - November 1st, 2022 4PM EST
                  </p>
                </div>
              </article>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">2</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center p-2">
              <article className="space-y-4 text-center">
                <h2 className="font-semibold text-xl">What Is The Collection Size?</h2>
                <div className="space-y-2">
                  <p className="max-w-4xl">
                    7,777
                  </p>
                </div>
              </article>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">3</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center p-2">
              <article className="space-y-4 text-center">
                <h2 className="font-semibold text-xl">What Is The Mint Price?</h2>
                <div className="space-y-2">
                  <p className="max-w-4xl">
                    WHITELIST - 10 SOL
                  </p>
                  <p>
                    PUBLIC - 15 SOL
                  </p>
                </div>
              </article>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">4</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center p-2">
              <article className="space-y-4 text-center">
                <h2 className="font-semibold text-xl">How Many Can I Mint?</h2>
                <div className="space-y-2">
                  <p className="max-w-4xl">
                    Presale: 2 mints per wallet; eligible members are those given allowlist roles.
                  </p>
                  <p>
                    Public: 1 mint per wallet.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-8 lg:items-stretch">
          <div className="p-[6px] rounded-[0.7rem] border border-white">
            <div className="lg:w-52 border rounded-lg border-gray-200 text-7xl lg:text-[150px] font-bold flex justify-center items-center leading-snug font-heading">5</div>
          </div>
          <div className="flex-1 p-[6px] border border-gray-200 rounded-lg">
            <div className="rounded-lg border border-gray-200 h-full flex justify-center items-center p-2">
              <article className="space-y-4 text-center">
                <h2 className="font-semibold text-xl">Will Your Smart Contact Be Gas Efficient?</h2>
                <div className="space-y-2">
                  <p className="max-w-4xl">
                    Could you picture it any other way?
                  </p>
                </div>
              </article>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default Faq