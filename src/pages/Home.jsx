import React, { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { LuArrowUp, LuArrowUpRight } from "react-icons/lu";
import Upfront from "../components/Projects/Upfront";
import Countify from "../components/Projects/Countify";
import NewProject from "../components/Projects/NewProject";
import Gerayo from "../components/Projects/Gerayo";

const customAnimation = keyframes`
from{
  transform: TranslateY(90px);
  opacity: 0;
  filter: blur(4px);
}
to{
  transform: TranslateY(0px);
  opacity: 1;
  filter: blur(0px);
}
`;

function Home() {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // window.scrollTo(0, 0);
    }, 1000);
    document.body.classList.add("no_scroll");
    setTimeout(() => {
      setShowLoading(false);
      document.body.classList.remove("no_scroll");
    }, 3000);
  }, []);
  return (
    <>
      {/* Loading screen */}
      {/* {showLoading && <LoadingScreen />} */}
      {/* content */}
      {!false && (
        <div
          id="content"
          className="w-full h-svh flex relative pl-[250px] pr-11"
        >
          {/* navbar */}
          <Navbar />
          <div className="w-full h-fit relative">
            <Reveal duration={500} triggerOnce keyframes={customAnimation}>
              <div id="intro" className="w-full h-svh xl:max-h-[1000px] px-11 pb-8 flex items-center justify-center relative">
                <Intro />
              </div>
              <div className="w-full max-w-[1400px] mx-auto h-fit relative">
                
                <div
                  id="projects"
                  className="w-full h-fit min-h-[600px] mb-10 px-11 py-0 relative grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1"
                >
                  <Upfront />
                  <Countify />
                  <Gerayo />
                  <NewProject />
                </div>
                <div
                  id="background"
                  className="w-full h-[700px] border-b-[1px] border-stone-200 px-11 py-8 relative"
                >
                  Background
                </div>
              </div>
              <div
                id="about"
                className="w-full h-[700px] border-b-[1px] border-stone-200 px-11 py-8 relative"
              >
                about
              </div>
              <div
                id="contact"
                className="w-full h-[700px] border-b-[1px] border-stone-200 px-11 py-8 relative"
              >
                contact
              </div>
            </Reveal>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
