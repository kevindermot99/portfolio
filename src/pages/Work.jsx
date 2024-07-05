import React from "react";
import Navbar from "../components/Navbar";
import { ProjectSection } from "../data";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";

function Work() {
  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-dark-body text-black/90 dark:text-white/80  ">
      <Navbar />

      {/* Projects */}
      <section className="w-full h-fit flex items-start justify-strat flex-col gap-2 py-20 px-20 max-md:px-5 pt-32 ">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-20 max-md:mb-10 max-md:gap-5">
          <h1 className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7  text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
            <span className="font-medium text-base text-main-color">
              Work &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;{" "}
            </span>
            <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
              Every Project is Born from a Blank Canvas
            </span>
          </h1>
        </div>

        <div className="gridRespo">
         <ProjectContainer />
         <ProjectContainer />
         <ProjectContainer />
         <ProjectContainer />
         <ProjectContainer />
         <ProjectContainer />
         <ProjectContainer />
         <ProjectContainer />
        </div>

      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Work;
