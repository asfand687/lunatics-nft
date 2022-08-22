import React from 'react'
import Logo from '../assets/logo-black.svg'
import Youtube from '../assets/youtube.svg'
import Instagram from '../assets/insta.svg'
import Twitter from '../assets/twitter.svg'
import { ReactComponent as Lunatics } from '../assets/lunatics-sticker.svg'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 text-sm">
      <div className="w-full max-w-[1400px] px-4  mx-auto flex flex-col md:flex-row md:justify-between md:items-start">
        <article className="hidden md:flex flex-1 flex-col  md:max-w-[380px] text-base">
          <Lunatics />
          <p className="text-base font-light pt-2 leading-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolores dolorem et aperiam? Bconsectetur adipisci recusandae repellat?</p>
        </article>

        <article className="w-full flex lg:space-x-4 md:max-w-[560px] 2xl:max-w-[750px] text-left">
          <img className="md:mx-auto w-8" src={Logo} alt="logo white" />
          <p className="leading-4 font-light hidden md:block pt-1">Lunatics is a registered trademark of Lunatics Inc. All Rights Reserved. Lunatics All logos are registered trademarks of their respective owners. All contents of this document, unless otherwise credited, are copyright © 2022 Lunatics Inc.</p>
        </article>

        <article className="flex-1 md:flex md:max-w-[350px] justify-end md:space-x-4">
          <div className="md:text-left">
            <h2 className="md:hidden border-b border-white pb-2 w-32 pt-4 mb-4">Legal</h2>
            <article className="tracking-tighter">
              <p>Terms Of Service</p>
            </article>
            <article>
              <p>Legal Overview</p>
            </article>
            <article>
              <p>Privacy Policy</p>
            </article>
          </div>
          <div className="md:space-x-0 text-left">
            <h2 className="md:hidden border-b border-white pb-2 w-32 pt-4 mb-4">Follow Us</h2>
            <article className="inline-block md:block">
              <div>
                <span className="hidden md:inline">
                  Instagram
                </span>
                <img className="md:hidden" src={Instagram} alt="Insta Logo" />
              </div>
            </article>
            <article className="inline-block md:block">
              <div>
                <span className="hidden md:inline">
                  Twitter
                </span>
                <img className="md:hidden mx-4" src={Twitter} alt="Twitter Logo" />
              </div>
            </article>
            <article className="inline-block md:block">
              <div>
                <span className="hidden md:inline">
                  Email
                </span>
                <img className="md:hidden" src={Youtube} alt="Youtube Logo" />
              </div>
            </article>
          </div>
        </article>

      </div>
    </footer>
  )
}

export default Footer