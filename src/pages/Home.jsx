import React, { useEffect, useState } from "react";
import { HeroText, MyLocation, Promising } from "../data";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { TbArrowCurveLeft } from "react-icons/tb";

function Home() {
  const today = new Date();

  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-[#0a0a0a] text-black/90 dark:text-white/80  ">
      <Navbar />
      {/* light */}
      <div className="w-[700px] aspect-square rounded-full bg-gradient-to-br from-stone-800/20 to-transparent dark:from-stone-200/10 blur-[90px] absolute left-[-240px] top-[-250px] z-0"></div>

      <section className=" flex items-start justify-end flex-col gap-2 py-10 px-20 max-md:px-10 h-svh max-h-[800px]  select-none">
        <p className="text-base opacity-50 z-10">{MyLocation}</p>
        <h1 className="text-[70px] leading-[75px] text-transparent bg-clip-text bg-gradient-to-br max-w-[600px] from-black dark:from-white to-stone-700/70 dark:to-black/80 font-semibold tracking-tight z-10 ">
          {HeroText}
        </h1>
        <p className="self-end text-base font-medium  select-none capitalize">
          <s className="opacity-50 ">{Promising.no}</s>&nbsp; {Promising.yes}.
        </p>
      </section>
    </div>
  );
}

export default Home;
