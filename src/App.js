import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Affiliates from './components/Affiliates'
import Vault from './components/Vault'
import Footer from './components/Footer'

function App() {
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

export default App;
