import React from "react";
import Navbar from "../components/Navbar";
import { ProjectSection } from "../data";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TbExternalLink } from "react-icons/tb";
import { Projects } from "../content/data";
import { HiBadgeCheck } from "react-icons/hi";
import { FaCompassDrafting } from "react-icons/fa6";

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
      <section className="w-full h-fit flex items-start justify-strat flex-col gap-2 px-20 max-md:px-5 pt-32 max-md:pt-20 max-w-[1800px] mx-auto ">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-20 max-md:mb-5 max-md:gap-5">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}>
            <div className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7 text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
              <p className="font-medium text-lg max-md:text-base text-main-color flex items-center gap-1 max-md:pb-2">
                <HiBadgeCheck />
                Completed
              </p>
              <p className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
                Complete and Functional Projects
              </p>
            </div>
            <p className="text-base leading-6 opacity-70 text-justify pt-7 max-md:pt-0">
              Projects that not only look great but also works. This includes everything from full stack web apps to functional React-based apps that perform as intended.
            </p>
          </Reveal>
        </div>

        <div className="gridRespo">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}
          >
            {Projects.map((project, index) => (
              <ProjectContainer
                name={project.name}
                duration={project.duration}
                img={project.cover}
                logo={project.logo}
                tech={project.tech}
                url={project.url}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Front-end Projects */}
      <section className="w-full h-fit flex items-start justify-strat flex-col gap-2 px-20 max-md:px-5 pt-32 max-md:pt-10 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-20 max-md:mb-10 max-md:gap-5">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}>
            <div className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7 text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
              <p className="font-medium text-lg max-md:text-base text-main-color flex items-center gap-1 max-md:pb-2">
                <FaCompassDrafting />
                Concepts
              </p>
              <p className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
                Front-End Design Concepts and Ideas
              </p>
            </div>
            <p className="text-base leading-6 opacity-70 text-justify pt-7 max-md:pt-0">
              In my free time, I enjoy stepping away from Visual Studio Code to try to be creative through imagination and sketching
            </p>
          </Reveal>
        </div>

        <div className="gridRespo">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}
            className="flex items-start justify-end flex-col gap-2 w-full"
          >
            {Projects.map((project, index) => (
              <ProjectContainer
                name={project.name}
                duration={project.duration}
                img={project.cover}
                logo={project.logo}
                tech={project.tech}
                url={project.url}
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
