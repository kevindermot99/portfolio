import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes >
          <Route path='/' element={<Projects />}></Route>
          <Route path='/about' element={<Projects />}></Route>
          <Route path='/contact' element={<Projects />}></Route>
          <Route path='/mycv' element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App