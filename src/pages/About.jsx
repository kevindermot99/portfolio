import React from "react";
import Navbar from "../components/Navbar";
import { ProjectSection } from "../data";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import { FaCss3Alt, FaGit, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-dark-body text-black/90 dark:text-white/80  ">
      <Navbar />

      {/* Projects */}
      <section className="w-full h-fit grid grid-cols-2 max-md:grid-cols-1 gap-10 py-20 px-20 max-md:px-5 pt-32 ">
        <div className="">picture</div>
        <div className="flex flex-col gap-4 mb-20 max-md:mb-10 max-md:gap-5">
          <Fade duration={800} cascade damping={0.1} triggerOnce>
            <h1 className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7  text-transparent font-semibold tracking-tight z-10 max-w-full ">
              <span className="font-medium text-base text-main-color">
                My Story &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;{" "}
              </span>
              <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
                From Simple Beginnings to Real Solutions
              </span>
            </h1>
            <div className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7 text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
              <p className="font-medium text-lg max-md:text-base text-main-color flex items-center gap-1 max-md:pb-2">
                <HiBadgeCheck />
                My Story
              </p>
              <p className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
              From Simple Beginnings to Real Solutions
              </p>
            </div>
            <p className="text-base leading-6 max-w-full text-justify text-black/70 dark:text-white/40">
              I've always been passionate about creating something with the help
              of technology that people can use to serve them. Early in 2020, I
              stumbled upon HTML and CSS. I started with simple login forms and
              improved as time flew by. Eventually, I moved on to JavaScript,
              then React, and Next.js and as of today, I have skills to bring
              almost any idea that comes to my mind to life.
            </p>
            <p className="text-base leading-6 max-w-full text-justify text-black/70 dark:text-white/40">
              I created several projects during this journey, and I'm sure some of them are solution to certain real-world problems. What I want to show is that I can create
              solutions to real world problems.
            </p>
            <p className="text-base leading-6 max-w-full text-justify text-black/70 dark:text-white/40">
              Currently pursuing my Bachelor's degree in Software Engineering at
              the African Leadership University (ALU) 2024 - 2027.
            </p>
            <p className="text-base max-w-full text-justify text-black/70 dark:text-white/40">
              I'm skilled in:
            </p>
            <div className="flex flex-wrap items-center justify-start gap-6 text-black/70 dark:text-white/50 text-xl">
              <FaReact />
              <FaCss3Alt />
              <SiTailwindcss className="text-2xl" />
              <FaHtml5 />
              <BiLogoPhp className="text-4xl" />
              <SiMongodb />
              <SiNextdotjs className="text-base" />
              <FaGit className="text-xl" />
              <IoLogoJavascript />
              <FaNode className="text-4xl" />
            </div>
          </Fade>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
