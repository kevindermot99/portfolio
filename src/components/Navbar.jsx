import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MyNames } from "../data";
import { MdArrowRightAlt } from "react-icons/md";

function Navbar() {
  const location = useLocation();

  return (
    <div className="bg-light-body/80 dark:bg-[#0a0a0a]/90 backdrop-blur-md px-20 max-md:px-10 py-4 h-fit w-full flex items-center justify-between fixed top-0 left-0 z-20">
      <div className="flex items-center justify-center gap-1">
        <h1 className="text-xl font-bold cursor-default mr-10 text-black/90 dark:text-white/90 select-none ">
          {MyNames}
        </h1>
      </div>

      <div className="flex gap-6 items-center justify-center">
        <Link
          to="/"
          className={` relative text-sm transition hover:opacity-60 font-medium capitalize text-black/90 dark:text-white select-none`}
        >
          Home
        </Link>

        <Link
          to="/"
          className={` relative text-sm transition hover:opacity-60 font-medium capitalize text-black/90 dark:text-white select-none`}
        >
          work
        </Link>

        <Link
          to="/"
          className={` relative text-sm transition hover:opacity-60 font-medium capitalize text-black/90 dark:text-white select-none`}
        >
          About
        </Link>

        <Link
          to="/"
          className={` relative text-sm transition opacity-50 hover:opacity-100 font-medium capitalize text-black/90 dark:text-white select-none flex items-center justify-start gap-[2px]`}
        >
          Open Cv
          <MdArrowRightAlt className="text-lg -rotate-45" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
