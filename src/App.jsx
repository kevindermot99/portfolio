import './App.css'
import Ui from './pages/ui'
import memoji from '../public/memoji.jpeg'

// icons
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

function App() {

  return (
    <>
    {/* navbar */}
    <div className="navbar">
      <div className="n-memoji">
        <img src={memoji} alt="" />
      </div>
      <div className="n-links">
        <span>UI\UX</span>
        <span>Full Stack</span>
        <span>skills</span>
        <span>About me</span>
      </div>
      <div className="n-socials">
        <a href="#"><FaGithub /></a>
        <a href="#"><SiGmail /></a>
        <a href="#"><IoLogoWhatsapp />  </a>
      </div>
    </div>
    
    <div className="hero">
      <h1>Hi, I'm Kevin.</h1>
      <p><SlLocationPin /> Kigali, Rwanda</p>
      <p>I'm curently at <a href="#">ALU</a> taking Bachelors of Software Engineering, for more info <a href="#">About Me.</a></p>
    </div>
    </>
  )
}

export default App
