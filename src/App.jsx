import './App.css'
import Ui from './pages/ui'
import memoji from '../public/memoji.jpeg'
import { useEffect } from 'react';

// icons
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

function App() {

  return (
    <div className='wrapper'>
      <div className="bubble1"></div>
      <div className="bubble2"></div>


      {/* navbar */}
      <div className="navbar">

        <div className="n-memoji">
          <img src={memoji} alt="" />
          <div className="n-memoji-box">
            
          </div>
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
        <p><SlLocationPin /> Kigali, Rwanda </p>
        <p>I am currently pursuing a Bachelor's degree in Software Engineering at <a href="https://www.alueducation.com" target='_blank'>ALU</a>. For further information about my academic background, check this page <a href="#"> about me</a></p>
        {/* <p>I'm curently at <a href="#">ALU</a> taking Bachelors of Software Engineering, for more info <a href="#">About Me.</a></p> */}
      </div>


      <div className="home"></div>
    </div>
  )
}

export default App
