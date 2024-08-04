import React, { useEffect, useState } from "react";
import {
  HeroText,
  MiniIntro,
  Promising,
  ProjectSection,
  ServicesSection,
} from "../data";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { MdArrowRightAlt, MdOutlineErrorOutline, MdWorkHistory } from "react-icons/md";
import { RxSpaceBetweenVertically } from "react-icons/rx";
import { PiSelectionPlusDuotone } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { RiServiceFill, RiSignalWifiErrorLine } from "react-icons/ri";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import { Feedback, Projects } from "../content/data";
import Heading from "../components/Heading";
import { FaComments, FaDraftingCompass } from "react-icons/fa";
import { TbNewSection } from "react-icons/tb";
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";

function Home() {
  const today = new Date();
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

  return (
    <>
      <div className="wrapper w-full overflow-clip bg-light-body dark:bg-dark-body text-black/90 dark:text-white/80 relative  ">
        <Navbar />
        {/* light */}
        <div className="w-[700px] h-auto aspect-square rounded-full bg-gradient-to-br from-stone-800/20 to-transparent dark:from-stone-200/10 blur-[90px] absolute left-[-240px] top-[-250px] z-0"></div>

        {/* Hero */}
        <section className="animateZoom flex items-start justify-end flex-col gap-2 py-10 px-20 max-md:px-5 min-h-svh max-h-[800px]">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}
            className="flex items-start justify-end flex-col gap-2 w-full"
          >
            <p className="text-base opacity-70 z-10">Hello, I'm Kevin, a 21-year-old from Rwanda, and I am a</p>
            <h1 className="text-[65px] leading-[70px] max-md:text-[45px] max-md:leading-[50px] text-transparent bg-clip-text bg-gradient-to-br max-w-[600px] from-black dark:from-white to-stone-700/70 dark:to-white/10 font-semibold tracking-tight z-10 ">
              Full-Stack Developer.
            </h1>
            <p className="self-end max-md:self-start text-base font-medium">
              <span className="opacity-70">I Value: </span>
              <s className="opacity-70 ">{Promising.no}</s>
              &nbsp;
              <span className="text-main-color">{Promising.yes}.</span>
            </p>
          </Reveal>
        </section>

        {/* Projects */}
        <section className="bg-stone-100 dark:bg-stone-800/20 w-full h-fit flex items-start justify-strat flex-col gap-2 py-16 px-20 max-md:px-5 ">

          <Heading
            Icon={<MdWorkHistory />}
            SectionName={`Recent Work `}
            Title={ProjectSection.title}
            Desc={ProjectSection.favorite}
          />
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-7">
            <Reveal
              keyframes={customAnimation}
              triggerOnce
              duration={800}
              cascade
              damping={0.1}
              className="flex items-start justify-end flex-col gap-2 w-full"
            >
              {Projects.slice(0, 2).map((project, index) => (
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

          <div className="w-full h-fit py-6 flex items-center justify-center mt-5">
            <Link
              to="/work"
              className={`w-fit relative text-base transition hover:opacity-60 font-medium capitalize text-black/90 dark:text-white/80  select-none flex items-center justify-start gap-[2px]`}
            >
              More projects
              <MdArrowRightAlt className="text-lg -rotate-45" />
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className=" w-full h-fit flex items-start justify-start flex-col gap-6 py-16 px-20 max-md:px-5 -z-0 ">

          <Heading
            Icon={<RiServiceFill />}
            SectionName={`Services`}
            Title={ServicesSection.title}
            Desc={ServicesSection.explanation}
          />

          <div className="w-full h-fit flex max-md:flex-col gap-6 max-md:gap-5">
            {/* 01 */}
            <div className="group w-1/2 max-md:w-full h-[210px] max-md:h-fit ring-1 ring-stone-300/70 dark:ring-stone-700/30 transition  bg-stone-300/30 dark:bg-stone-700/20 rounded-2xl p-8 max-md:p-5 flex flex-col items-start justify-between relative overflow-clip">
              {/* element */}
              <div className="max-md:hidden text-stone-400 dark:text-stone-700 absolute right-0 top-0 h-full min-w-[100px] -rotate-[10deg] bg-stone-100/0 p-5 flex items-center justify-center flex-col gap-3 -z-0  ">
                <div className="h-[60px] w-[200px] rounded-xl ring-1 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 dark:hover:bg-stone-800 transition relative p-5 flex items-center justify-start">
                  <span className="absolute bottom-[-2px] left-[-2px] h-[20px] w-[20px] border-b-[3px] border-l-[3px] border-main-color rounded-bl-2xl "></span>
                  <span className="absolute top-[-2px] right-[-2px] h-[20px] w-[20px] border-t-[3px] border-r-[3px] border-main-color rounded-tr-2xl "></span>
                  <PiSelectionPlusDuotone className="text-3xl cursor-pointer transition hover:scale-110 text-main-color" />
                </div>
                <div className="w-full flex items-center justify-center">
                  <RxSpaceBetweenVertically className=" text-xl" />
                </div>
                <div className="h-[60px] w-[230px] rounded-xl ring-1 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 dark:hover:bg-stone-800 transition relative p-5 flex items-center justify-end">
                  <span className="absolute bottom-[-2px] left-[-2px] h-[20px] w-[20px] border-b-[3px] border-l-[3px] border-main-color rounded-bl-2xl "></span>
                  <span className="absolute top-[-2px] right-[-2px] h-[20px] w-[20px] border-t-[3px] border-r-[3px] border-main-color rounded-tr-2xl "></span>
                  <PiSelectionPlusDuotone className="text-4xl cursor-pointer transition hover:scale-110 text-main-color" />
                </div>
              </div>
              {/* content */}
              <div className="font-bold text-[40px] text-main-color transition z-10">
                01
              </div>
              <div className="flex flex-col items-start justify-start z-10 md:backdrop-blur-md rounded-lg overflow-clip pr-5 ">
                <h1 className="text-2xl font-medium tracking-tight ">
                  Front-end Development
                </h1>
                <p className="opacity-70 text-base leading-6">
                  With React js, Next js or Figma
                </p>
              </div>
            </div>
            {/* 02 */}
            <div className="group w-1/2 max-md:w-full h-[210px] max-md:h-fit ring-1 ring-stone-300/70 dark:ring-stone-700/30 transition bg-stone-300/30 dark:bg-stone-700/20 rounded-2xl p-8 max-md:p-5 flex flex-col items-start justify-between relative overflow-clip">
              {/* element */}
              <div className="max-md:hidden text-stone-400 dark:text-stone-700 absolute right-0 top-0 h-full min-w-[100px] -rotate-[10deg] bg-stone-100/0 p-5 flex items-center justify-center flex-col gap-3 -z-0 ">
                <div className="h-[60px] w-[210px] rounded-xl ring-1 text-black/90 dark:text-white/60 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 transition dark:hover:bg-stone-800 cursor-pointer relative py-2 px-4 flex items-center justify-start gap-2 overflow-clip">
                  <MdOutlineErrorOutline className="text-main-color text-2xl min-h-fit " />
                  <div className="flex flex-col items-start justify-start max-w-[80%]">
                    <h1 className="text-sm font-medium line-clamp-1">
                      Oops! Bad Gateway
                    </h1>
                    <p className="line-clamp-1 text-xs ">
                      Something went wrong on the server side
                    </p>
                  </div>
                </div>
                <div className="h-[60px] w-[210px] -translate-x-11 rounded-xl ring-1 text-black/90 dark:text-white/60 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 transition dark:hover:bg-stone-800 cursor-pointer relative py-2 px-4 flex items-center justify-start gap-2 overflow-clip">
                  <GoShieldCheck className="text-main-color text-2xl min-h-fit " />
                  <div className="flex flex-col items-start justify-start max-w-[80%]">
                    <h1 className="text-sm font-medium line-clamp-1">
                      Request Completed
                    </h1>
                    <p className="line-clamp-1 text-xs ">
                      Your request has been successfully processed
                    </p>
                  </div>
                </div>
                <div className="h-[60px] w-[210px] rounded-xl ring-1 text-black/90 dark:text-white/60 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 transition dark:hover:bg-stone-800 cursor-pointer relative py-2 px-4 flex items-center justify-start gap-2 overflow-clip">
                  <RiSignalWifiErrorLine className="text-main-color text-2xl min-h-fit " />
                  <div className="flex flex-col items-start justify-start max-w-[80%]">
                    <h1 className="text-sm font-medium line-clamp-1">
                      Connection Issue
                    </h1>
                    <p className="line-clamp-1 text-xs ">
                      We’re having trouble reaching the database
                    </p>
                  </div>
                </div>
                <div className="h-[60px] w-[210px] -translate-x-11 rounded-xl ring-1 text-black/90 dark:text-white/60 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 transition dark:hover:bg-stone-800 cursor-pointer relative py-2 px-4 flex items-center justify-start gap-2 overflow-clip">
                  <GoShieldCheck className="text-main-color text-2xl min-h-fit " />
                  <div className="flex flex-col items-start justify-start max-w-[80%]">
                    <h1 className="text-sm font-medium line-clamp-1">
                      Request Completed
                    </h1>
                    <p className="line-clamp-1 text-xs ">
                      Your request has been successfully processed
                    </p>
                  </div>
                </div>
              </div>
              {/* content */}
              <div className="font-bold text-[40px] text-main-color transition">
                02
              </div>
              <div className="flex flex-col items-start justify-start z-10 md:backdrop-blur-md rounded-lg overflow-clip pr-5">
                <h1 className="text-2xl font-medium tracking-tight ">
                  back-end development
                </h1>
                <p className="opacity-70 text-base leading-6">
                  With Node js, Express js or Next js
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex gap-6">
            {/* 03 */}
            <div className="group w-full h-[210px] max-md:h-fit ring-1 ring-stone-300/70 dark:ring-stone-700/30 transition bg-stone-300/30 dark:bg-stone-700/20 rounded-2xl p-8 max-md:p-5 flex flex-col items-start justify-between relative overflow-clip">
              {/* element */}
              <div className="max-md:hidden text-stone-400 dark:text-stone-700 absolute right-0 top-0 h-full min-w-[100px] -rotate-[10deg] bg-stone-100/0 p-5 flex items-center justify-center flex-col gap-3 -z-0 ">
                <div className="min-h-[50px] w-[280px] rounded-xl ring-1 transition ring-stone-400 dark:ring-stone-700 relative p-2 flex items-center justify-center gap-2">
                  <div className="ring-1 ring-stone-400 dark:ring-stone-700 h-8 w-8 min-w-8 rounded-full flex items-center justify-center text-xs text-black/90 dark:text-white/60">
                    MK
                  </div>
                  <div className="w-full h-fit rounded-md bg-stone-300/60 dark:bg-stone-800/60 text-black/60 dark:text-white/40 p-2 px-3 font-mono text-sm">
                    <span className="text-main-color">{`useEffect`}</span>
                    {` (() => {},[]); `}
                  </div>
                </div>
                <div className="min-h-[50px] min-w-[280px] rounded-xl -translate-x-24 ring-1 transition ring-stone-400 dark:ring-stone-700 relative p-2 flex items-center justify-center gap-2">
                  <div className="ring-1 ring-stone-400 dark:ring-stone-700 h-8 w-8 min-w-8 rounded-full flex items-center justify-center text-xs text-black/90 dark:text-white/60">
                    MK
                  </div>
                  <div className="w-full h-fit rounded-md bg-stone-300/60 dark:bg-stone-800/60 text-black/60 dark:text-white/40 p-2 px-3 font-mono text-sm">
                    <span className="text-main-color">{`function`}</span>
                    {` myFunction = () => {}; `}
                  </div>
                </div>
                <div className="min-h-[50px] min-w-[280px] rounded-xl ring-1 transition ring-stone-400 dark:ring-stone-700 relative p-2 flex items-center justify-center gap-2">
                  <div className="ring-1 ring-stone-400 dark:ring-stone-700 h-8 w-8 min-w-8 rounded-full flex items-center justify-center text-xs text-black/90 dark:text-white/60">
                    MK
                  </div>
                  <div className="w-full h-fit rounded-md bg-stone-300/60 dark:bg-stone-800/60 text-black/60 dark:text-white/40 p-2 px-3 font-mono text-sm">
                    <span className="text-main-color">{`import`}</span>
                    {` example from '.example.png' `}
                  </div>
                </div>
              </div>
              {/* content */}
              <div className="font-bold text-[40px]  text-main-color transition">
                03
              </div>
              <div className="flex flex-col items-start justify-start z-10 md:backdrop-blur-md rounded-lg overflow-clip pr-5">
                <h1 className="text-2xl font-medium tracking-tight ">
                  Support
                </h1>
                <p className="opacity-70 text-base leading-6">
                  Ongoing technical support for debugging and project
                  maintenance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section className=" w-full h-fit flex items-start justify-start flex-col gap-6 py-16 px-20 max-md:px-5 -z-0 ">

          <Heading
            Icon={<FaComments />}
            SectionName={`Feedback & Stars`}
            Title={'What People Think'}
            Desc={'Here are the thoughts and feedback from others about my projects. Their insights have been crucial in helping me refine and improve my work'}
          />

          <div className="w-full h-fit grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3">
            {Feedback.map((comment, index) => (
              <div className="w-full bg-white dark:bg-stone-700/20 p-4 rounded-2xl shadow-sm flex flex-col items-start justify-between">
                <div className="w-full h-fit flex flex-col">
                  <div className="w-full flex items-start justify-between">
                    <div className="flex flex-col">
                      <h1 className="text-sm font-bold line-clamp-1">{comment.person}</h1>
                      <p className="text-xs opacity-50 dark:opacity-70 font-medium pb-1 ">{comment.role}</p>
                      {/* 5 */}
                      {comment.stars === 5 && (
                        <div className="flex items-center gap-0 text-main-color/80">
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                        </div>
                      )}
                      {/* 4 */}
                      {comment.stars === 4 && (
                        <div className="flex items-center gap-0 text-main-color/80">
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarOutline className="empty" />
                        </div>
                      )}
                      {/* 3 */}
                      {comment.stars === 3 && (
                        <div className="flex items-center gap-0 text-main-color/80">
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarOutline className="empty" />
                          <TiStarOutline className="empty" />
                        </div>
                      )}
                      {/* 2 */}
                      {comment.stars === 2 && (
                        <div className="flex items-center gap-0 text-main-color/80">
                          <TiStarFullOutline className="full" />
                          <TiStarFullOutline className="full" />
                          <TiStarOutline className="empty" />
                          <TiStarOutline className="empty" />
                          <TiStarOutline className="empty" />
                        </div>
                      )}
                      {/* 1 */}
                      {comment.stars === 1 && (
                        <div className="flex items-center gap-0 text-main-color/80">
                          <TiStarFullOutline className="full" />
                          <TiStarOutline className="empty" />
                          <TiStarOutline className="empty" />
                          <TiStarOutline className="empty" />
                          <TiStarOutline className="empty" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs opacity-50 dark:opacity-70 font-medium whitespace-nowrap ">{comment.date}</p>
                  </div>
                  <p className="pt-3 text-sm font-medium ">{comment.comemnt}</p>
                </div>
                <div className="bg-stone-200/70 dark:bg-stone-700/20 w-full px-3 py-2 mt-3 rounded-xl flex flex-col">
                  <h1 className="text-xs font-medium opacity-50 dark:opacity-70">Commented on Project</h1>
                  <div className="flex items-start gap-2 py-1">
                    <div className="h-full w-[3px] rounded-xl bg-main-color"></div>
                    <Link to={'/'} className="text-sm font-medium hover:underline">{comment.project}</Link>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </section>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
