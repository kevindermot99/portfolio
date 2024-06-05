import React, { useEffect, useState } from "react";
import { Greetings, AboutMe, ProjectModel } from "../data";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Projects() {
  const today = new Date();

  return (
    <div className="wrapper overflow-clip bg-stone-100 dark:bg-[#0a0a0a]   ">
      <Navbar />

      <section className=" flex items-center justify-center flex-col gap-4 py-16 ">
        <div src="" className="flex items-center justify-center">
          <div className="h-16 aspect-square rounded-full bg-gradient-to-br from-stone-300 dark:from-stone-500/30 dark:to-transparent to-stone-100 translate-x-8 "></div>
          <div className="h-20 aspect-square rounded-full bg-gradient-to-br from-stone-300 dark:from-stone-500/30 dark:to-transparent to-stone-100 z-10 -translate-y-1 shadow "></div>
          <div className="h-16 aspect-square rounded-full bg-gradient-to-br from-stone-300 dark:from-stone-500/30 dark:to-transparent to-stone-100 -translate-x-8 "></div>
        </div>
        <h1 className="text-[60px] leading-[60px] text-transparent bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-500/70 dark:to-white/60 font-extrabold mb-2 tracking-tighter">
          {Greetings}
        </h1>
        <p className="text-sm text-black/90 dark:text-white/90 max-w-[500px] text-center tracking-tight font-medium ">
          {AboutMe}
        </p>
      </section>

      <section className="w-full">
        <p className=" text-black/90 dark:text-white/90 mt-4 px-4 pb-8 flex items-center justify-start flex-col max-w-[1200px] mx-auto ">
          <span className="text-2xl font-bold tracking-tighter">
            Project Portfolio
          </span>
          <span className="text-sm font-medium text-black/90 dark:text-white/90 max-w-[300px] mt-1 text-center tracking-tight">
            I have successfully completed and contributed to a total of{" "}
            {ProjectModel.length} projects.
          </span>
        </p>
        <div className="gridRespo w-full m-auto px-3 overflow-clip">
          {ProjectModel.map((project, index) => (
            <div className="w-full h-fit mb-3">
              <Link
                to={`/`}
                key={index}
                className={` group w-full overflow-clip flex items-center justify-center bg-gradient-to-br from-stone-300 to-stone-100 dark:from-stone-900/40 relative `}
              >
                <div className="absolute top-0 left-0 w-full h-full z-10 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-black/40 to-black/20 flex items-start justify-end flex-col p-4  "></div>
                <img
                  src={project.thumbnail}
                  className="h-full w-full aspect-video object-cover group-hover:scale-105 transition dark:opacity-85 duration-300"
                  alt=""
                />
              </Link>
              <div className="py-2">
                <h1 className="text-[12px] capitalize font-medium text-black/60 dark:text-white/60 tracking-tight w-full ">
                  {project.type}
                </h1>
                <h1 className="text-xl font-bold text-black/90 dark:text-white/90 tracking-tight w-full ">
                  {project.title}
                </h1>
                <div className="w-full">
                  <h1 className="text-sm font-medium text-black/60 dark:text-white/60 tracking-tight flex items-center justify-between w-full ">
                    {project.description}
                  </h1>
                  <div className="flex items-start justify-start flex-wrap gap-1 w-full my-2">
                    {project.technologies.map((tech, index) => (
                      <h1
                        key={index}
                        className="py-1 px-3 bg-stone-400/20 dark:bg-stone-600/10 rounded-full text-black/70 dark:text-white/90 text-xs font-medium"
                      >
                        {tech}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 flex justify-center items-center px-3">
        <p className="text-xs text-black/90 dark:text-white/80 py-5 text-center tracking-tight">
          Started 2020 - {today.getFullYear()}
        </p>
      </section>
    </div>
  );
}

export default Projects;
