import './App.css'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './ScrollToTop'
import Work from './pages/Work'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <HashRouter>
        <ScrollToTop />
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/work' element={<Work />}></Route>
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App