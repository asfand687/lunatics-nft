import React from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="App overflow-y-hidden h-screen">
      <div className="absolute top-0 left-0 w-full hamburger">
        <Navbar classes="w-full bg-transparent max-w-[1400px] hamburger" />
      </div>
      <Hero />
      <Footer/>
    </div>
  );
}

export default Home