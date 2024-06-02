import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { NavNames } from "../data";
import { FaFileLines } from "react-icons/fa6";

function Navbar() {
  const location = useLocation();

  return (
    <div className="bg-stone-100/80 dark:bg-[#0a0a0a]/90 backdrop-blur-md px-7 py-3 h-fit w-full flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center justify-center gap-1">
        <h1 className="text-xl font-bold cursor-default mr-10 text-black/90 dark:text-white/90 ">{NavNames}</h1>

        <Link
          to="/"
          className={`${
            location.pathname === "/" && " bg-stone-200 dark:bg-stone-600/20 pointer-events-none"
          } relative text-sm font-medium capitalize text-black/90 dark:text-white/90 py-2 min-w-[90px] flex justify-center items-center px-4 rounded-full select-none`}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname == "/about" && "bg-stone-200 dark:bg-stone-600/20 pointer-events-none"
          } relative text-sm font-medium capitalize text-black/90 dark:text-white/90 py-2 min-w-[90px] flex justify-center items-center px-4 rounded-full select-none`}
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname == "/contact" &&
            "bg-stone-200 dark:bg-stone-600/20 pointer-events-none"
          } relative text-sm font-medium capitalize text-black/90 dark:text-white/90 py-2 min-w-[90px] flex justify-center items-center px-4 rounded-full select-none`}
        >
          Contact Me
        </Link>
      </div>

      <div className="flex gap-3 items-center justify-center">
        <a href="/" className="flex items-center gap-2 justify-start bg-stone-200 dark:bg-stone-600/20  py-2 px-4 rounded-full ">
          <FaFileLines className="text-md text-blue-600/80 " />
          <p className="text-sm text-black max-w-[600px] text-center tracking-tight capitalize font-medium text-black/90 dark:text-white/90 ">My CV</p>
        </a>
        <FaGithub className="text-3xl text-black/90 dark:text-white/90 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
