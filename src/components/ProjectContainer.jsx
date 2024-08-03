import React, { useState } from "react";
import { GoArrowRight, GoLinkExternal, GoLock } from "react-icons/go";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

function ProjectContainer({ img, name, desc, tech, url, color }) {
  const techArray = Array.isArray(tech) ? tech : [];
  // const [url, setUrl] = useState('')
  return (
    <div className="group w-full max-w-[2000px] rounded-3xl ring-1 ring-stone-400/40 dark:ring-stone-600/40 p-2 dark:bg-stone-700/5">
      <div className="w-full rounded-2xl ring-1 ring-transparent px-5 pt-5 bg-stone-200 dark:bg-stone-800/30 group-hover:ring-transparent flex flex-col overflow-clip relative">
        {/* light */}
        <div className={` transition-opacity ease-in-out duration-500 opacity-0 group-hover:opacity-100 absolute top-[-300px] left-0 right-0 mx-auto -z-0 blur-3xl rounded-full w-full h-[600px]`} style={{ backgroundColor: color}}>

        </div>

        {/* title */}
        <div className="flex items-center justify-between mb-0 gap-10 p-4 min-h-fit z-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl tracking-tight font-medium opacity-100" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.1)' }}>{name}</h1>
            <h1 className="text-sm leading-5 opacity-70 ">{desc}</h1>
          </div>
          <Link to={url} target="_blank" className="flex items-center bg-stone-400/40 dark:bg-dark-body/90 rounded-full min-w-fit p-3 transition duration-300 active:scale-90">
            <GoArrowRight className="text-2xl" />
          </Link>
        </div>

        {/* image */}
        <div className="w-full flex items-center justify-center px-4 transition duration-300 translate-y-5 group-hover:translate-y-0">
          <img src={img} className="rounded-t-xl w-full h-fit dark:opacity-90" />
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
