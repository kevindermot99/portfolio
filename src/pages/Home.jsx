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
import {
  MdArrowRightAlt,
  MdOutlineErrorOutline,
  MdWorkHistory,
} from "react-icons/md";
import { RxSpaceBetweenVertically } from "react-icons/rx";
import { PiSelectionPlusDuotone } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { RiServiceFill, RiSignalWifiErrorLine } from "react-icons/ri";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import { Feedback, Projects, workedOn } from "../content/data";
import Heading from "../components/Heading";
import { FaComments, FaDraftingCompass } from "react-icons/fa";
import { TbNewSection } from "react-icons/tb";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import pfp from "../assets/me/pfp.jpeg";
import bubbleBlack from "../assets/particles/bubble-black.png";
import bubbleWhite from "../assets/particles/bubble-white.png";
import Marquee from "react-fast-marquee";
import BookCall from "../components/BookCall";

function Home() {
  const [booking, setBooking] = useState(false);
  const today = new Date();
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
    filter: blur(4px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  const handleBook = () => {
    setBooking(true);
  };

  const handleBookCancel = () => {
    setBooking(false);
  };

  return (
    <div className="max-w-[1900px] mx-auto overflow-clip relative bg-light-body dark:bg-dark-body">
      {/* light */}
      {/* <div className="w-[700px] h-auto aspect-square rounded-full 2xl:hidden bg-stone-200/30 dark:bg-stone-200/10 blur-[90px] absolute right-[-240px] top-[0px] z-0"></div> */}
      {/* booking modal */}
      {booking && (
            <BookCall handleBookCancel={handleBookCancel} />
      )}
      <div className="wrapper w-full  text-black/90 dark:text-white/80 relative  ">
        <Navbar />

        {/* Hero */}
        <section className=" flex items-center justify-center flex-col pt-28 px-20 max-md:px-5 h-full max-h-[1200px] max-lg:h-fit max-lg:max-h-fit">
          <Reveal
            keyframes={customAnimation}
            triggerOnce
            duration={800}
            cascade
            damping={0.1}
            className="flex items-center justify-center flex-col w-full"
          >
            <div className="relative mb-3">
              <div className="h-[70px] w-fit aspect-square overflow-hidden mt-10 mb-2 rounded-[50px] shadow-xl relative">
                <img src={pfp} className="h-full w-full object-cover" />
              </div>
            </div>
            <h1 className="font-bold text-xl whitespace-nowrap font-IndieFlower text-black dark:text-white text-center w-full max-w-[660px] opacity-60 whitespace-break-spaces">
              Hi, I'm Kevin. a Full stack Web Developer, on a mission of
            </h1>
            <h1 className="max-w-[900px] text-[60px] leading-[65px] font-PlusJakartaSans mb-2 pb-3 max-md:text-[45px] text-text-black dark:text-text-white font-extrabold z-10 text-center ">
              Delivering world-class development for Web Apps
            </h1>
            <p className=" max-md:self-start text-lg font-normal max-w-[600px] opacity-90 text-center">
              I build web apps with a modern user experience and deliver real
              results for businesses.
            </p>
            <button
              onClick={handleBook}
              className="bg-text-black shadow-xl mt-5 text-sm p-2 pr-3 transition hover:scale-110 rounded-2xl text-text-white font-medium flex items-center justify-center gap-2"
            >
              <div className="flex items-center justify-center gap-1">
                <img src={pfp} className="h-[30px] rounded-full" />
                <span className="text-lg">+</span>
                <div className="h-[30px] aspect-square rounded-full bg-blue-700 text-text-white flex items-center justify-center text-xs">
                  You
                </div>
              </div>
              Let's do a quick 10 min call
            </button>
          </Reveal>
        </section>
        {/* work on/at */}
        <div className="flex flex-col items-center justify-center overflow-hidden text-text-black dark:text-text-white py-20">
          <div className="w-full max-w-[1600px] mx-auto relative flex flex-col items-center justify-center">
            {/* edges */}
            <div className="absolute top-0 left-0 z-10 w-[120px] max-md:w-[20px] h-full bg-gradient-to-r from-light-body dark:from-dark-body to-transparent"></div>
            <div className="absolute top-0 right-0 z-10 w-[120px] max-md:w-[20px] h-full bg-gradient-to-l from-light-body dark:from-dark-body to-transparent"></div>
            <p className=" max-md:self-start text-sm pb-5 font-medium max-w-[600px] opacity-70 text-center w-full">
              Worked on
            </p>
            <Marquee pauseOnHover="true" speed={15} autoFill className="w-full">
              {/* First set of logos */}
              {workedOn.map((project, index) => (
                <div className="w-full px-5 flex items-center justify-center gap-1">
                  <img
                    src={project.logoBlack}
                    className={`h-5 opacity-35 dark:hidden ${
                      project.name === "Outside" && "p-[1px]"
                    }`}
                  />
                  <img
                    src={project.logoWhite}
                    className={`h-5 opacity-35 hidden dark:flex ${
                      project.name === "Outside" && "p-[1px]"
                    }`}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

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
                  Frontend Development
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
                  backend development
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
        <section className=" w-full h-fit flex items-start justify-start flex-col gap-6 py-16 max-md:pt-0 px-20 max-md:px-5 -z-0 ">
          <Heading
            Icon={<FaComments />}
            SectionName={`Feedback & Stars`}
            Title={"What People Think"}
            Desc={
              "Here are the thoughts and feedback from others about my projects. Their insights have been crucial in helping me refine and improve my work"
            }
          />

          <div className="w-full h-fit grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3">
            {Feedback.map((comment, index) => (
              <div className="w-full bg-white dark:bg-stone-700/20 p-4 rounded-2xl shadow-sm flex flex-col items-start justify-between">
                <div className="w-full h-fit flex flex-col">
                  <div className="w-full flex items-start justify-between">
                    <div className="flex flex-col">
                      <h1 className="text-sm font-bold line-clamp-1">
                        {comment.person}
                      </h1>
                      <p className="text-xs opacity-50 dark:opacity-70 font-medium pb-1 ">
                        {comment.role}
                      </p>
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
                    <p className="text-xs opacity-50 dark:opacity-70 font-medium whitespace-nowrap ">
                      {comment.date}
                    </p>
                  </div>
                  <p className="pt-3 text-sm font-medium ">{comment.comemnt}</p>
                </div>
                <div className="bg-stone-200/70 dark:bg-stone-700/20 w-full px-3 py-2 mt-3 rounded-xl flex flex-col">
                  <h1 className="text-xs font-medium opacity-50 dark:opacity-70">
                    Commented on Project
                  </h1>
                  <div className="flex items-start gap-2 py-1">
                    <div className="h-full w-[3px] rounded-xl bg-main-color"></div>
                    <Link
                      to={"/"}
                      className="text-sm font-medium hover:underline"
                    >
                      {comment.project}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
