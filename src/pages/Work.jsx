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

            <ProjectContainer
              name={"InvestorGraph"}
              duration={"15 days"}
              img={
                "https://cdn.dribbble.com/userupload/10876856/file/original-9daa79240100c14c9a7193efa7fa746d.png?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"NFTX"}
              duration={"2 months"}
              img={
                "https://cdn.dribbble.com/userupload/9645187/file/original-ce677efb2717f79d9aa0161985326088.png?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"InsideHome"}
              duration={"4 months"}
              img={
                "https://cdn.dribbble.com/userupload/10471938/file/original-2e30b00c968752ab0a1ee42d8a9cd2fa.jpg?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"SaveIt"}
              duration={"1 month"}
              img={
                "https://cdn.dribbble.com/userupload/9784250/file/original-1100bc42ac6b83a633f7e0b0463792bb.png?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"Expensensor"}
              duration={"4 months"}
              img={
                "https://cdn.dribbble.com/userupload/13724215/file/original-4f0c6e43a41ae26badcd7c6a2c736ebb.png?crop=281x63-2165x1476&resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"MyBag"}
              duration={"2 motnhs"}
              img={
                "https://cdn.dribbble.com/userupload/14242666/file/still-846073c229981e24a86a3b8d1572d322.gif?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"Remoty"}
              duration={"4 months"}
              img={
                "https://cdn.dribbble.com/userupload/14900913/file/still-b58c7dfa669ede68d7945c220660e112.png?resize=320x240&vertical=center"
              }
            />
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

            <ProjectContainer
              name={"InvestorGraph"}
              duration={"15 days"}
              img={
                "https://cdn.dribbble.com/userupload/10876856/file/original-9daa79240100c14c9a7193efa7fa746d.png?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"NFTX"}
              duration={"2 months"}
              img={
                "https://cdn.dribbble.com/userupload/9645187/file/original-ce677efb2717f79d9aa0161985326088.png?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"InsideHome"}
              duration={"4 months"}
              img={
                "https://cdn.dribbble.com/userupload/10471938/file/original-2e30b00c968752ab0a1ee42d8a9cd2fa.jpg?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"SaveIt"}
              duration={"1 month"}
              img={
                "https://cdn.dribbble.com/userupload/9784250/file/original-1100bc42ac6b83a633f7e0b0463792bb.png?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"Expensensor"}
              duration={"4 months"}
              img={
                "https://cdn.dribbble.com/userupload/13724215/file/original-4f0c6e43a41ae26badcd7c6a2c736ebb.png?crop=281x63-2165x1476&resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"MyBag"}
              duration={"2 motnhs"}
              img={
                "https://cdn.dribbble.com/userupload/14242666/file/still-846073c229981e24a86a3b8d1572d322.gif?resize=320x240&vertical=center"
              }
            />
            <ProjectContainer
              name={"Remoty"}
              duration={"4 months"}
              img={
                "https://cdn.dribbble.com/userupload/14900913/file/still-b58c7dfa669ede68d7945c220660e112.png?resize=320x240&vertical=center"
              }
            />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Work;
