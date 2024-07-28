import React from "react";
import { GoLock } from "react-icons/go";

function ProjectContainer() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="bg-stone-200 dark:bg-stone-800/50 w-full h-fit rounded-xl transition duration-300 hover:shadow-xl hover:shadow-stone-200 dark:hover:shadow-transparent hover:-translate-y-1 cursor-pointer px-1 overflow-clip flex flex-col">
        {/* Address bar */}
        <div className="h-[30px] w-full flex items-center py-1 justify-center">
          <div className="min-w-[170px] w-[50%] h-full bg-white/80 dark:bg-stone-800/70 rounded-3xl relative flex items-center justify-center gap-1 px-10">
            <GoLock className="text-xs" />
            <p className="font-light text-xs truncate">gerayo.onrender.com</p>
          </div>
        </div>
        <div className="h-full aspect-video w-full bg-white/80 dark:bg-stone-800/40 rounded-lg mb-1"></div>
      </div>
      <div className="flex justify-between items-center w-full px-2 mt-1 gap-6 max-md:gap-5">
        <h1 className="text-[27px] leading-[41px] max-md:text-[27px] max-md:leading-7  text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
          <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
            Gerayo
          </span>
        </h1>
        <p className="text-base leading-6 opacity-50">Built in 23 weeks</p>
      </div>
      <p className="text-base leading-5 opacity-50 px-2">
        an online platform where society can buy bus tickets onkine to go in
        different provinces within the rwandan country
      </p>
      <p className="text-sm leading-5 opacity-70 px-2 pt-3 flex items-center justify-start flex-wrap gap-2">
      <span className="bg-white/80 dark:bg-stone-800/70 py-[7px] px-5 rounded-full">React JS</span>
      <span className="bg-white/80 dark:bg-stone-800/70 py-[7px] px-5 rounded-full">React JS</span>
      <span className="bg-white/80 dark:bg-stone-800/70 py-[7px] px-5 rounded-full">React JS</span>
      <span className="bg-white/80 dark:bg-stone-800/70 py-[7px] px-5 rounded-full">React JS</span>
      </p>
    </div>
  );
}

export default ProjectContainer;
