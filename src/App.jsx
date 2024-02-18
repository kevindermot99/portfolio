import './App.css'
import Ui from './pages/ui'
import memoji from '../public/memoji.jpeg'

// icons
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

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
    

    </>
  )
}

export default App
