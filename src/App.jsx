import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes >
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App