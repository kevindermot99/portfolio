import './App.css'
import Ui from './pages/ui'
import memoji from '../public/memoji.jpeg'
import me1 from '../public/me1.jpeg'
import me2 from '../public/m2.jpeg'
import { useEffect, useRef, useState } from 'react';

// icons
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

function App() {

  const [mBox, setmBox] = useState(false);
  const memojiRef = useRef(null);

  const handleMbox = () => {
    setmBox(true)
  }

  const handleclickOutslideMbox = (event) => {
    if (!memojiRef.current.contains(event.target)) {
      setmBox(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleclickOutslideMbox)

    return () => {
      document.addEventListener("click", handleclickOutslideMbox)
    }
  }, [])

  return (
    <div className='wrapper'>
      <div className="bubble1"></div>
      <div className="bubble2"></div>


      {/* navbar */}
      <div className="navbar">

        <div className={`n-memoji ${mBox ? 'active' : ''}`} onClick={handleMbox} ref={memojiRef}>
          <img src={memoji} alt="" />
          <div className="n-memoji-box">
            
          </div>
        </div>

        <div className="n-links">
          <span>UI\UX</span>
          <span>Full Stack</span>
          <span>About me</span>
          <span><a href="#">My CV</a></span>
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
        <p>Full stack developer and am currently pursuing a Bachelor's degree in Software Engineering at <a href="https://www.alueducation.com" target='_blank'>ALU</a>. For further information about my academic background, check the <a href="#"> about me</a> page.</p>
      </div>


      <div className="home"></div>
    </div>
  )
}

export default App
