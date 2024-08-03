import React from "react";
import Navbar from "../components/Navbar";
import { ProjectSection, ServicesSection } from "../data";
import { MdArrowRightAlt, MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TbExternalLink } from "react-icons/tb";
import { Projects } from "../content/data";
import { HiBadgeCheck } from "react-icons/hi";
import { FaCompassDrafting } from "react-icons/fa6";
import { FaDraftingCompass } from "react-icons/fa";

function Work() {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(4px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-dark-body text-black/90 dark:text-white/80  ">
      <Navbar />



      {/* Functional Projects */}
      <section className="w-full h-fit flex items-start justify-strat flex-col gap-2 px-20 max-md:px-5 pt-32 max-md:pt-20 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 max-md:grid-cols-1 gap-2 mb-6 max-md:gap-5">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}>
            <h1 className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7 flex flex-col text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
              <span className="font-medium text-lg text-main-color flex items-center gap-1">
                <FaDraftingCompass />
                My Work
              </span>
              <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
                Projects & Contributions
              </span>
            </h1>
            <p className="text-base leading-6 opacity-70">
              Take a look at the projects I've crafted and those I've collaborated on.
            </p>
          </Reveal>
        </div>

        <div className="w-full grid grid-cols-2 max-lg:grid-cols-1">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}
            className="p-3"
          >
            {Projects.map((project, index) => (
              <ProjectContainer
                name={project.name}
                desc={project.desc}
                img={project.cover}
                tech={project.tech}
                url={project.url}
                color={project.color}
              />
            ))}
          </Reveal>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Work;
