import React, { useEffect, useState } from "react";
import {
  HeroText,
  MyLocation,
  Promising,
  ProjectSection,
  ServicesSection,
} from "../data";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { TbArrowCurveLeft } from "react-icons/tb";
import { MdArrowRightAlt, MdOutlineErrorOutline } from "react-icons/md";
import { RxSpaceBetweenVertically } from "react-icons/rx";
import { PiSelectionPlusDuotone } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { RiSignalWifiErrorLine } from "react-icons/ri";

function Home() {
  const today = new Date();

  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-dark-body text-black/90 dark:text-white/80  ">
      <Navbar />
      {/* light */}
      <div className="w-[700px] aspect-square rounded-full bg-gradient-to-br from-stone-800/20 to-transparent dark:from-stone-200/10 blur-[90px] absolute left-[-240px] top-[-250px] z-0"></div>

      {/* Hero */}
      <section className="animateZoom flex items-start justify-end flex-col gap-2 py-10 px-20 max-md:px-10 min-h-svh max-h-[800px] select-none">
        <p className="text-base opacity-50 z-10">{MyLocation}</p>
        <h1 className="text-[70px] leading-[75px] text-transparent bg-clip-text bg-gradient-to-br max-w-[600px] from-black dark:from-white to-stone-700/70 dark:to-black/80 font-semibold tracking-tight z-10 ">
          {HeroText}
        </h1>
        <p className="self-end text-base font-normal select-none capitalize">
          <s className="opacity-50 ">{Promising.no}</s>
          &nbsp;
          <span className="text-orange-400">{Promising.yes}.</span>
        </p>
      </section>

      {/* Projects */}
      <section className="bg-stone-100 dark:bg-stone-800/20 wifull min-h-svh flex items-start justify-strat flex-col gap-2 py-16 px-20 max-md:px-10 ">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 mb-6 max-md:gap-5">
          <h1 className="text-[37px] leading-[41px] text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
            <span className="font-medium text-base text-orange-400">
              Work &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;{" "}
            </span>
            <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
              {ProjectSection.title}
            </span>
          </h1>
          <p className="text-base leading-6 opacity-50">
            {ProjectSection.favorite}
          </p>
        </div>

        <div className="grid grid-cols-2 w-full h-fit gap-16 max-md:gap-5">
          <div className="bg-stone-200 w-full h-[400px] rounded-xl "></div>
          <div className="bg-stone-200 w-full h-[400px] rounded-xl "></div>
          <div className="bg-stone-200 w-full h-[400px] rounded-xl "></div>
          <div className="bg-stone-200 w-full h-[400px] rounded-xl "></div>
        </div>

        <div className="w-full h-fit py-6 flex items-center justify-center mt-5">
          <Link
            to="/"
            className={`w-fit relative text-base transition hover:opacity-60 font-medium capitalize text-black/90 dark:text-white/80  select-none flex items-center justify-start gap-[2px]`}
          >
            More projects
            <MdArrowRightAlt className="text-lg -rotate-45" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className=" wifull min-h-svh flex items-start justify-strat flex-col gap-6 py-16 px-20 max-md:px-10 ">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 mb-6 max-md:gap-5">
          <h1 className="text-[37px] leading-[41px] text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
            <span className="font-medium text-base text-orange-400">
              Services &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;{" "}
            </span>
            <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
              {ServicesSection.title}
            </span>
          </h1>
          <p className="text-base leading-6 opacity-50">
            {ServicesSection.explanation}
          </p>
        </div>

        <div className="w-full h-fit flex gap-6 mt-6">
          <div className="group w-1/2 h-[210px] ring-1 ring-stone-300/70 dark:ring-stone-700/30 transition hover:bg-stone-300/30 dark:hover:bg-stone-700/20 rounded-2xl p-8 flex flex-col items-start justify-between relative overflow-clip">
            {/* element */}
            <div className="text-stone-400 dark:text-stone-700 absolute right-0 top-0 h-full min-w-[100px] translate-x-5 group-hover:translate-x-0 -rotate-[7deg] group-hover:-rotate-[10deg] bg-stone-100/0 p-5 flex items-center justify-center flex-col gap-3 -z-0 opacity-40 transition duration-300 group-hover:opacity-100 ">
              <div className="h-[60px] w-[200px] rounded-xl ring-1 ring-stone-400 dark:ring-stone-700 relative p-5 flex items-center justify-start">
                <span className="absolute bottom-[-2px] left-[-2px] h-[20px] w-[20px] border-b-[3px] border-l-[3px] border-orange-500 rounded-bl-2xl "></span>
                <span className="absolute top-[-2px] right-[-2px] h-[20px] w-[20px] border-t-[3px] border-r-[3px] border-orange-500 rounded-tr-2xl "></span>
                <PiSelectionPlusDuotone className="text-3xl cursor-pointer transition group-hover:text-orange-500" />
              </div>
              <div className="w-full flex items-center justify-center">
                <RxSpaceBetweenVertically className=" text-xl" />
              </div>
              <div className="h-[60px] w-[230px] rounded-xl ring-1 ring-stone-400 dark:ring-stone-700 relative p-5 flex items-center justify-end">
                <span className="absolute bottom-[-2px] left-[-2px] h-[20px] w-[20px] border-b-[3px] border-l-[3px] border-orange-500 rounded-bl-2xl "></span>
                <span className="absolute top-[-2px] right-[-2px] h-[20px] w-[20px] border-t-[3px] border-r-[3px] border-orange-500 rounded-tr-2xl "></span>
                <PiSelectionPlusDuotone className="text-4xl cursor-pointer transition group-hover:text-orange-500" />
              </div>
            </div>
            {/* content */}
            <div className="font-bold text-[40px] text-black/20 dark:text-white/30 group-hover:text-orange-500 transition z-10">
              01
            </div>
            <div className="flex flex-col items-start justify-start z-10">
              <h1 className="text-2xl font-medium tracking-tight capitalize ">
                Front-end Development
              </h1>
              <p className="opacity-50 text-base leading-6">
                With React js, Next js or Figma
              </p>
            </div>
          </div>
          <div className="group w-1/2 h-[210px] ring-1 ring-stone-300/70 dark:ring-stone-700/30 transition hover:bg-stone-300/30 dark:hover:bg-stone-700/20 rounded-2xl p-8 flex flex-col items-start justify-between relative overflow-clip">
            {/* element */}
            <div className="text-stone-400 dark:text-stone-700 absolute right-0 top-0 h-full min-w-[100px] translate-x-5 group-hover:translate-x-0 -rotate-[7deg] group-hover:-rotate-[10deg] bg-stone-100/0 p-5 flex items-center justify-center flex-col gap-3 -z-0 opacity-40 transition duration-300 group-hover:opacity-100 ">
              <div className="h-[60px] w-[210px] rounded-xl ring-1 group-hover:text-black/90 dark:group-hover:text-white/60 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 transition dark:hover:bg-stone-800 cursor-pointer relative py-2 px-4 flex items-center justify-start gap-2 overflow-clip">
                <GoShieldCheck className="text-orange-500 text-2xl min-h-fit " />
                <div className="flex flex-col items-start justify-start max-w-[80%]">
                  <h1 className="text-sm font-medium line-clamp-1">
                    Request Completed
                  </h1>
                  <p className="line-clamp-1 text-xs ">
                    Your request has been successfully processed
                  </p>
                </div>
              </div>
              <div className="h-[60px] w-[210px] -translate-x-11 rounded-xl ring-1 group-hover:text-black/90 dark:group-hover:text-white/60 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 transition dark:hover:bg-stone-800 cursor-pointer relative py-2 px-4 flex items-center justify-start gap-2 overflow-clip">
                <MdOutlineErrorOutline className="text-orange-500 text-2xl min-h-fit " />
                <div className="flex flex-col items-start justify-start max-w-[80%]">
                  <h1 className="text-sm font-medium line-clamp-1">
                    Oops! Bad Gateway
                  </h1>
                  <p className="line-clamp-1 text-xs ">
                    Something went wrong on the server side
                  </p>
                </div>
              </div>
              <div className="h-[60px] w-[210px] rounded-xl ring-1 group-hover:text-black/90 dark:group-hover:text-white/60 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 transition dark:hover:bg-stone-800 cursor-pointer relative py-2 px-4 flex items-center justify-start gap-2 overflow-clip">
                <RiSignalWifiErrorLine className="text-orange-500 text-2xl min-h-fit " />
                <div className="flex flex-col items-start justify-start max-w-[80%]">
                  <h1 className="text-sm font-medium line-clamp-1">
                    Connection Issue
                  </h1>
                  <p className="line-clamp-1 text-xs ">
                    We’re having trouble reaching the database
                  </p>
                </div>
              </div>
              <div className="h-[60px] w-[210px] -translate-x-11 rounded-xl ring-1 group-hover:text-black/90 dark:group-hover:text-white/60 ring-stone-400 dark:ring-stone-700 hover:bg-stone-300/40 transition dark:hover:bg-stone-800 cursor-pointer relative py-2 px-4 flex items-center justify-start gap-2 overflow-clip">
                <GoShieldCheck className="text-orange-500 text-2xl min-h-fit " />
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
            <div className="font-bold text-[40px] text-black/20 dark:text-white/30 group-hover:text-orange-500 transition">
              02
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-2xl font-medium tracking-tight capitalize ">
                back-end development
              </h1>
              <p className="opacity-50 text-base leading-6">
                with Node js, Express js or Next js
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex gap-6">
          <div className="group w-full h-[210px] ring-1 ring-stone-300/70 dark:ring-stone-700/30 transition hover:bg-stone-300/30 dark:hover:bg-stone-700/20 rounded-2xl p-8 flex flex-col items-start justify-between relative overflow-clip">
            {/* element */}
            <div className="text-stone-400 dark:text-stone-700 absolute right-0 top-0 h-full min-w-[100px] translate-x-5 group-hover:translate-x-0 -rotate-[7deg] group-hover:-rotate-[10deg] bg-stone-100/0 p-5 flex items-center justify-center flex-col gap-3 -z-0 opacity-40 transition duration-300 group-hover:opacity-100 ">
              <div className="h-[60px] w-[200px] rounded-xl ring-1 ring-stone-400 dark:ring-stone-700 relative p-5 flex items-center justify-start">
                <span className="absolute bottom-[-2px] left-[-2px] h-[20px] w-[20px] border-b-[3px] border-l-[3px] border-orange-500 rounded-bl-2xl "></span>
                <span className="absolute top-[-2px] right-[-2px] h-[20px] w-[20px] border-t-[3px] border-r-[3px] border-orange-500 rounded-tr-2xl "></span>
                <PiSelectionPlusDuotone className="text-3xl cursor-pointer hover:text-orange-500" />
              </div>
              <div className="w-full flex items-center justify-center">
                <RxSpaceBetweenVertically className=" text-xl" />
              </div>
              <div className="h-[60px] w-[230px] rounded-xl ring-1 ring-stone-400 dark:ring-stone-700 relative p-5 flex items-center justify-end">
                <span className="absolute bottom-[-2px] left-[-2px] h-[20px] w-[20px] border-b-[3px] border-l-[3px] border-orange-500 rounded-bl-2xl "></span>
                <span className="absolute top-[-2px] right-[-2px] h-[20px] w-[20px] border-t-[3px] border-r-[3px] border-orange-500 rounded-tr-2xl "></span>
                <PiSelectionPlusDuotone className="text-4xl cursor-pointer hover:text-orange-500" />
              </div>
            </div>
            {/* content */}
            <div className="font-bold text-[40px] text-black/20 dark:text-white/30 group-hover:text-orange-500 transition">
              03
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-2xl font-medium tracking-tight ">Support</h1>
              <p className="opacity-50 text-base leading-6">
                Ongoing Technical Support for Debugging and Project Maintenance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
