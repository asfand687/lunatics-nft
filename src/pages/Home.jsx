import React from 'react'
import Hero from '../components/Hero'
import Vault from '../components/Vault'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="App overflow-y-hidden h-screen">
      <div className="absolute top-0 left-0 w-full hamburger">
        <Navbar classes="w-full bg-transparent max-w-[1400px] hamburger" />
      </div>
      <Hero />
      <Vault />
    </div>
  );
}

export default Home