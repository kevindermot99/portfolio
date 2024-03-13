import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App