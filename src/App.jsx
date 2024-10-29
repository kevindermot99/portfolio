import "./App.css";
import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
