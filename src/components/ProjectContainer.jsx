import React from "react";
import { GoLinkExternal, GoLock } from "react-icons/go";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

function ProjectContainer({ img, name, duration }) {
  return (
    <div className="flex flex-col items-start justify-start relative">
      {/* external link icon */}
      <Link
        to={`/`}
        className="absolute top-2 right-2 flex items-center justify-center h-auto w-auto p-1 rounded-md shadow-lg bg-white dark:bg-stone-600/40 dark:backdrop-blur-md z-10 group"
      >
        <TbExternalLink className="dark:opacity-85 transition" />
        <span className="text-xs font-medium transition-all ease-in-out duration-500 max-w-0 overflow-clip whitespace-nowrap group-hover:max-w-xs">
          Live view
        </span>
      </Link>
      {/* image */}
      <div className="h-[200px] max-md:h-fit w-full shadow-md cursor-pointer bg-white/80 dark:bg-stone-800/40 rounded-xl mb-1 overflow-clip">
        <img src={img} className="dark:opacity-90 h-full w-full object-cover" />
      </div>
      {/* Details */}
      <div className="flex justify-between items-center w-full mt-1 gap-6 max-md:gap-5">
        <h1 className="text-[17px] z-10 flex items-center gap-2 ">
          <span className="h-[25px] w-auto aspect-square rounded-full bg-blue-500 flex"></span>
          <span className="bg-clip-text bg-gradient-to-br text-transparent font-semibold tracking-tight max-w-[400px] from-black dark:from-white to-stone-800/70 dark:to-stone-400/80">
            {name}
          </span>
        </h1>
        <p className="text-[13px] leading-6 opacity-50 font-medium">
          built in {duration}
        </p>
      </div>
    </div>
  );
}

export default ProjectContainer;
