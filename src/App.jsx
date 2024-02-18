import './App.css'
import Ui from './pages/ui'
import memoji from '../public/memoji.jpeg'

function App() {

  return (
    <>
    <div className="navbar">
      <div className="n-memoji">
        <img src={memoji} alt="" />
      </div>
      <div className="n-links">
      <span>UI\UX</span>
        <span>Fullstack</span>
      </div>
      <div className="n-menu"></div>
    </div>
    <Ui />
    </>
  )
}

export default App
