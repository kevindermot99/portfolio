import React, { useState } from "react";
import { GoArrowRight, GoLinkExternal, GoLock } from "react-icons/go";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

function ProjectContainer({ img, name, desc, tech, url, color }) {
  const techArray = Array.isArray(tech) ? tech : [];
  // const [url, setUrl] = useState('')
  return (
    <div className="group w-full rounded-2xl ring-1 ring-transparent px-5 pt-5 max-md:px-1 max-md:pt-1 bg-white/60 dark:bg-stone-800/30 group-hover:ring-transparent flex flex-col overflow-clip relative shadow-xl">
      {/* title */}
      <div className="flex items-center justify-between max-md:justify-start max-md:items-start max-md:flex-col mb-0 gap-10 max-md:gap-3 p-4 min-h-fit z-10">
        <div className="flex flex-col gap-1">
          <h1
            className="text-2xl tracking-tight font-medium opacity-100"
            style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.1)" }}
          >
            {name}
          </h1>
          <h1 className="text-sm leading-5 opacity-70 ">{desc}</h1>
        </div>
        <Link
          to={url}
          target="_blank"
          title="Live Preview"
          className="group flex items-center bg-stone-400/40 dark:bg-dark-body/50 rounded-full min-w-fit p-3 hover:scale-110 transition duration-300 active:scale-90"
        >
          <GoArrowRight className="text-2xl " />
        </Link>
      </div>

      {/* image */}
      <div className="w-full flex items-center justify-center px-4 transition duration-500 md:translate-y-5 md:group-hover:translate-y-2 z-10 md:group-hover:scale-105">
        <img src={img} className="rounded-t-xl w-full h-fit dark:opacity-90 shadow-2xl" />
      </div>
    </div>
  );
}

export default ProjectContainer;
