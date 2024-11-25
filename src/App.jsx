import "./App.css";
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";
import About from "./pages/About";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<UnderConstruction />} />
          <Route path="*" element={<UnderConstruction />} />
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
