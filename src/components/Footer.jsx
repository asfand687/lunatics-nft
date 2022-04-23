import React from 'react'
import Logo from '../assets/logo-white.svg'
import Youtube from '../assets/youtube.svg'
import Instagram from '../assets/insta.svg'
import Twitter from '../assets/twitter.svg'

const Footer = () => {
  return (
    <footer className="bg-[#0300AD] text-white py-10 px-4">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row md:justify-between">
        <article className="hidden md:block flex-1">
          <h2 className="font-bold font-sans text-3xl">Lunatics</h2>
          <p className="text-lg font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolores dolorem et aperiam? Bconsectetur adipisci recusandae repellat?</p>
        </article>
        <article className="flex-1 text-center">
          <img className="md:mx-auto" src={Logo} alt="logo white" />
          <p className="tracking-wide hidden md:block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolores dolorem et aperiam? Bconsectetur adipisci recusandae repellat?</p>
        </article>
        <article className="flex-1 md:flex justify-end md:space-x-6 items-center">
          <div className="md:text-right">
            <h2 className="md:hidden border-b border-white pb-2 w-32 pt-4 mb-4">Legal</h2>
            <article>
              <a href="#">Terms Of Service</a>
            </article>
            <article>
              <a href="#">Legal Overview</a>
            </article>
            <article>
              <a href="#">Privacy Policy</a>
            </article>
          </div>
          <div className="md:space-x-0 text-left">
            <h2 className="md:hidden border-b border-white pb-2 w-32 pt-4 mb-4">Follow Us</h2>
            <article className="inline-block md:block">
              <a href="#">
                <span className="hidden md:inline">
                  Instagram
                </span>
                <img className="md:hidden" src={Instagram} alt="Insta Logo" />
              </a>
            </article>
            <article className="inline-block md:block">
              <a href="#">
                <span className="hidden md:inline">
                  Twitter
                </span>
                <img className="md:hidden mx-4" src={Twitter} alt="Twitter Logo" />
              </a>
            </article>
            <article className="inline-block md:block">
              <a href="#">
                <span className="hidden md:inline">
                  Email
                </span>
                <img className="md:hidden" src={Youtube} alt="Youtube Logo" />
              </a>
            </article>
          </div>
        </article>

      </div>
    </footer>
  )
}

export default Footer