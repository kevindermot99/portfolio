import React from "react";
import Navbar from "../components/Navbar";
import { ProjectSection } from "../data";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function Work() {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-dark-body text-black/90 dark:text-white/80  ">
      <Navbar />

      {/* Projects */}
      <section className="w-full h-fit flex items-start justify-strat flex-col gap-2 py-20 px-20 max-md:px-5 pt-32 ">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-20 max-md:mb-10 max-md:gap-5">
          <Fade
            triggerOnce
          >
            <h1 className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7  text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
              <span className="font-medium text-base text-main-color">
                Work &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;{" "}
              </span>
              <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
                Every Project is Born from a Blank Canvas
              </span>
            </h1>
          </Fade>
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
            <ProjectContainer
              name={"SpaceX"}
              duration={"3 months"}
              img={
                "https://cdn.dribbble.com/userupload/15801193/file/original-629f42554a13b7940fdfd6df79306fd8.png?resize=320x240&vertical=center"
              }
            />
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
