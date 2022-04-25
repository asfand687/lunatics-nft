import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Roadmap from './pages/Roadmap'
import Team from './pages/Team'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/faq' exact element={<Faq />} />
        <Route path='/roadmap' exact element={<Roadmap />} />
        <Route path='/team' exact element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
