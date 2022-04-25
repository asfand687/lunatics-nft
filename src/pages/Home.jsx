import React from 'react'
import Affiliates from '../components/Affiliates'
import Hero from '../components/Hero'
import Vault from '../components/Vault'

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Affiliates />
      <Vault />
    </div>
  );
}

export default Home