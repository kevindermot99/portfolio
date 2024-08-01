import React from "react";
import { GoLinkExternal, GoLock } from "react-icons/go";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

function ProjectContainer({ img, name, duration, logo, tech }) {
  const techArray = Array.isArray(tech) ? tech : [];
  return (
    <div className="flex flex-col items-start justify-start relative w-full max-w-[340px]">
      {/* external link icon */}
      {/* <Link
        to={`/`}
        className="absolute top-2 right-2 flex items-center justify-center h-auto w-auto p-1 rounded-md shadow-lg bg-white dark:bg-stone-600/40 dark:backdrop-blur-md z-20 group"
      >
        <TbExternalLink className="dark:opacity-85 transition" />
        <span className="text-xs font-medium transition-all ease-in-out duration-500 max-w-0 overflow-clip whitespace-nowrap group-hover:max-w-xs">
          Live view
        </span>
      </Link> */}
      {/* image */}
      <div className="group h-fit max-md:h-fit w-full shadow-md cursor-pointer bg-white/80 dark:bg-stone-800/40 rounded-xl mb-1 overflow-clip relative">
        {/* technologies */}
        <div className="absolute top-0 left-0 w-full h-full p-2 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 translate-y-[200px] group-hover:translate-y-0 bg-gradient-to-t from-black/40 to-transparent flex items-end z-10">
          <div className="flex flex-wrap items-end justify-start h-fit gap-1">
            {techArray.map((techItem, index) => (
              <h1 key={index} className="text-xs text-dark-body/80 font-semibold bg-light-body h-[25px] px-3 flex items-center justify-center rounded-full shadow-lg w-fit">
                {techItem}
              </h1>
            ))}
            
          </div>
        </div>
        <img src={img} className="dark:opacity-90 h-full w-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      {/* Details */}
      <div className="flex justify-between items-center w-full mt-1 gap-6 max-md:gap-5">
        <h1 className="text-[17px] z-10 flex items-center gap-2 ">
          <span className="h-[25px] w-auto aspect-square rounded-full flex">
            <img src={logo} className="w-full h-full" />
          </span>
          <span className="bg-clip-text bg-gradient-to-br text-transparent font-semibold tracking-tight max-w-[400px] from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
            {name}
          </span>
        </h1>
        <p className="text-[13px] leading-6 opacity-70 font-medium">
          built in {duration}
        </p>
      </div>
    </div>
  );
}

export default ProjectContainer;
