import React from 'react'
import Logo from '../assets/logo-black.svg'
import Youtube from '../assets/youtube.svg'
import Instagram from '../assets/insta.svg'
import Twitter from '../assets/twitter.svg'
import { ReactComponent as Lunatics } from '../assets/lunatics-sticker.svg'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-2 text-xs">
      <div className="w-full max-w-[1400px] px-4  mx-auto flex flex-col md:flex-row md:justify-center md:items-center">
        <article className="hidden md:flex flex-1 flex-col text-xs">
          <Lunatics />
          <p className="text-xs font-light leading-4 max-w-[350px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolores dolorem et aperiam? Bconsectetur adipisci recusandae repellat?</p>
        </article>

        <article className="w-full flex flex-1 lg:space-x-4 text-left">
          <img className="md:mx-auto w-6" src={Logo} alt="logo white" />
          <p className="leading-4 font-light hidden md:block pt-1">Lunatics is a registered trademark of Lunatics Inc. All Rights Reserved. Lunatics All logos are registered trademarks of their respective owners. All contents of this document, unless otherwise credited, are copyright © 2022 Lunatics Inc.</p>
        </article>

        <article className="flex-1 md:flex md:max-w-[350px] justify-end md:space-x-4">
          <div className="md:text-left text-xs">
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
                  <a href="https://www.instagram.com/lunaticsnft/">
                    Instagram
                  </a>
                </span>
                <a href="https://www.instagram.com/lunaticsnft/">
                  <img className="md:hidden" src={Instagram} alt="Insta Logo" />
                </a>
              </div>
            </article>
            <article className="inline-block md:block">
              <div>
                <span className="hidden md:inline">
                  <a href="https://mobile.twitter.com/lunaticsnft">
                    Twitter
                  </a>
                </span>
                <a href="https://mobile.twitter.com/lunaticsnft">
                  <img className="md:hidden" src={Twitter} alt="Twitter" />
                </a>
              </div>
            </article>
            <article className="inline-block md:block">
              <div>
                <span className="hidden md:inline">
                  <a href="mailto:info@thelunatics.io">
                    Email
                  </a>
                </span>
                <a href="mailto:info@thelunatics.io">
                  <img className="md:hidden" src={Youtube} alt="Youtube Logo" />
                </a>
              </div>
            </article>
          </div>
        </article>

      </div>
    </footer>
  )
}

export default Footer