import React from 'react'
import Hero from '../components/Hero'
import Vault from '../components/Vault'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="App">
      <Navbar classes="w-full absolute left-10 top-0 z-40 bg-transparent" />
      <Hero />
      <Vault />
    </div>
  );
}

export default Home