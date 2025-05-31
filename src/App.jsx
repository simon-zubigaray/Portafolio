import './App.css'
import Nav from './components/Nav';
import Presentacion from './components/Presentacion';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import "./i18n";

function App() {

  return (
    <div className='App' id='App'>
      <Nav></Nav>
      <Presentacion></Presentacion>
      <AboutMe></AboutMe>
      <Technologies></Technologies>
      <Carousel></Carousel>
      <SoftSkills></SoftSkills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
