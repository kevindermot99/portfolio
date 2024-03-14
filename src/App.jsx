import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Project from './pages/Project'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Projects />}></Route>
          <Route path='/about' element={<Projects />}></Route>
          <Route path='/contact' element={<Projects />}></Route>
          <Route path='/mycv' element={<Projects />}></Route>
          <Route path='/mycv' element={<Projects />}></Route>
          <Route path='/project/:id' element={<Project />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App