import React, { useEffect, useState } from "react";
import { HeroText, AboutMe, ProjectModel } from "../data";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const today = new Date();

  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-[#0a0a0a] ">
      <Navbar />

      <section className=" flex items-start justify-end flex-col gap-4 py-20 px-20 max-md:px-10 h-svh select-none">
        
        <h1 className="text-[90px] leading-[95px] text-transparent bg-clip-text bg-gradient-to-br max-w-[800px] from-black dark:from-white to-stone-500/50 dark:to-white/60 font-extrabold tracking-tight ">
          {HeroText}
        </h1>
      </section>

    </div>
  );
}

export default Home;
