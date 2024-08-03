import React from "react";
import Navbar from "../components/Navbar";
import { ProjectSection } from "../data";
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
      <section className="w-full h-fit flex items-start justify-strat flex-col gap-2 px-20 max-md:px-5 pt-32 max-md:pt-20 max-w-[1800px] mx-auto ">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-16 max-md:mb-5 max-md:gap-5">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}>
            <div className="text-[60px] leading-[68px] max-md:text-[27px] max-md:leading-7 text-transparent font-semibold tracking-tight z-10 max-w-[700px] ">
              <p className="font-medium text-lg text-main-color flex items-center gap-1 max-md:pb-2 pb-1">
                <FaDraftingCompass />
                My Work
              </p>
              <p className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-700/70 dark:to-black/80">
                Projects, Solutions & Designs
              </p>
            </div>
            {/* <p className="text-base leading-6 opacity-70 text-justify max-md:pt-0">
              Projects that not only look great but also some of them works and This includes everything functional React-based apps to full stack web apps that perform as intended.
            </p> */}
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
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Work;
