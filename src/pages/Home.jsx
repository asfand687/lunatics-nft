import React from 'react'
import Affiliates from '../components/Affiliates';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Vault from '../components/Vault';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Affiliates />
      <Vault />
      <Footer />
    </div>
  );
}

export default Home