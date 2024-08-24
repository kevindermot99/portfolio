import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ProjectSection } from "../data";
import { MdArrowRightAlt, MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import { FaCss3Alt, FaGit, FaHtml5, FaMedal, FaNode, FaReact } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { HiMiniPuzzlePiece, HiOutlinePuzzlePiece } from "react-icons/hi2";
import imageOfMe from '../assets/me/portrait.jpg'
import { HiBadgeCheck } from "react-icons/hi";
import Heading from "../components/Heading";
import { Achievements } from "../content/data";

function About() {
  const [image, setImage] = useState("");
  const [act, setAct] = useState("");
  const [showImageFull, setShowImageFull] = useState(false);

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(4px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  const showImage = (url, act) => {
    setImage(url);
    setAct(act);
    setShowImageFull(true);
  };
  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-dark-body text-black/90 dark:text-white/80 relative ">
      <Navbar />

      {/* full screen image */}
      <div
        className={`fixed top-0 left-0 w-full h-full max-h-svh flex flex-col items-center justify-center px-5 transition-all ${showImageFull ? "visible z-30 " : "invisible "
          }`}
      >
        <div
          onClick={() => setShowImageFull(false)}
          className={`absolute top-0 left-0 bg-black/10 w-full h-full backdrop-blur-md transition-all ease-linear ${showImageFull ? "opacity-100 " : "opacity-0 "
            } `}
        ></div>
        <img
          src={image}
          className={` max-h-[80%] brightness-[110%] dark:brightness-95 min-w-[300px] max-w-[80%] object-cover shadow rounded-xl z-10 select-none transition-all ease-linear ${showImageFull ? "opacity-100" : "opacity-0 scale-95  "
            }`}
        />
        <p
          className={` mt-[20px] w-fit bg-white/80 dark:bg-stone-800/70 rounded-2xl shadow-lg py-2 px-4 text-sm backdrop-blur-sm text-dark-body-color font-medium transition-all ease-in-out ${showImageFull
              ? " opacity-100 delay-200"
              : "opacity-0 -translate-y-3 scale-90"
            } `}
        >
          {act}
        </p>
      </div>

      {/* Projects */}
      <section className="w-full h-fit grid grid-cols-2 max-lg:grid-cols-1 gap-10 py-0 px-20 max-md:px-5 pt-32 max-md:pt-[75px] max-w-[1900px] mx-auto ">
        <div className="w-full h-fit flex items-start justify-end">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}>
            <div className="w-full h-full 2xl:max-w-[500px] overflow-clip rounded-md">
              <img src={imageOfMe} loading="lazy" className="w-full h-full opacity-85" />
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col gap-4 mb-20 max-md:mb-10 max-md:gap-5">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}>
            <div className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7 text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
              <p className="font-medium text-lg max-md:text-base text-main-color flex items-center gap-1 max-md:pb-2">
                <HiMiniPuzzlePiece />
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
              Currently pursuing my Bachelor's degree in Software Engineering at ALU (African Leadership University), 2024 to 2027.
            </p>
            {/* <p className="text-base max-w-full text-justify text-black/70 dark:text-white/40">
              I'm skilled in:
            </p>
            <div className="flex flex-wrap items-center justify-start gap-2 text-black/70 dark:text-white/70 text-xl max-w-[700px]">
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <FaReact className="text-base" />
                <p className="text-black/70 dark:text-white/50">React JS</p>
              </span>
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <FaCss3Alt className="text-lg" />
                <p className="text-black/70 dark:text-white/50">Css</p>
              </span>
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <SiTailwindcss className="text-xl" />
                <p className="text-black/70 dark:text-white/50">Tailwind Css</p>
              </span>
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <FaHtml5 className="text-lg" />
                <p className="text-black/70 dark:text-white/50">Html</p>
              </span>
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <SiMongodb className="text-lg" />
                <p className="text-black/70 dark:text-white/50">MongoDB</p>
              </span>
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <SiNextdotjs className="text-base" />
                <p className="text-black/70 dark:text-white/50">Next JS</p>
              </span>
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <FaGit className="text-lg" />
                <p className="text-black/70 dark:text-white/50">Git & Github</p>
              </span>
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <IoLogoJavascript />
                <p className="text-black/70 dark:text-white/50">Javascript</p>
              </span>
              <span className="flex-1 flex items-center whitespace-nowrap gap-1 text-xs font-medium bg-stone-600/10 h-[40px] max-w-[200px] px-4 rounded-xl ">
                <FaNode className="text-3xl" />
                <p className="text-black/70 dark:text-white/50">Node JS</p>
              </span>
            </div> */}
          </Reveal>
        </div>
      </section>

      <section className=" w-full h-fit flex items-start justify-strat flex-col gap-2 py-10 px-20 max-md:px-5 ">

        {/* achivements  */}
        <Heading
          Icon={<FaMedal />}
          SectionName={`Achievements `}
          Title={'Milestones & Triumphs'}
          Desc={`Check out the certificates and achievements that highlight my journey and growth in tech, and each one reflects the hard work and dedication I've put into reaching new heights.`}
        />

        <div className="grid grid-cols-5 max-lg:grid-cols-1 gap-7">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}
            className="flex items-start justify-end flex-col gap-2 w-full"
          >
            {Achievements.map((ach, index) => (
              <div key={index} className="flex flex-col w-full h-fit">
                <div onClick={() => showImage(ach.image, ach.description)} className="h-fit min-h-[100px] w-full cursor-pointer shadow-lg rounded-xl">
                  <img src={ach.image} className=" h-full w-full rounded-xl brightness-110" />
                </div>
                <h1 className="text-base font-medium pt-2">{ach.title}</h1>
                <p className="text-sm opacity-70 ">{ach.date}</p>
                {/* <p className="text-sm leading-5 pt-2 text-justify">{ach.description}</p> */}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
