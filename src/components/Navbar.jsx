import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MyNames } from "../data";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import ResumePDF from "../assets/Kevin's Resume.pdf"
import MKLogo from '../assets/logo.png'
import { LuVideo } from "react-icons/lu";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // open resume
  const handleOpenPdf = () => {
    window.open(ResumePDF, '_blank');
    setMobileMenu(false)
  };

  return (
    <div className="w-full h-fit bg-red-400 relative">
      {/* mobile menu overlay */}
      <div onClick={() => setMobileMenu(false)} className={`w-full h-full bg-dark-body/30 dark:bg-dark-body/60 fixed top-0 left z-40 transition-all duration-300 ease-in-out ${mobileMenu ? 'visible opacity-100' : 'invisible opacity-0 '}`}></div>
      {/* mobile menu */}
      <div className={`w-full min-h-[400px] h-fit bg-light-body dark:bg-stone-800 fixed top-0 left-0 z-40 p-7 flex-col gap-5  transition-all duration-300 ease-in-out flex ${mobileMenu ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-full opacity-0 '}`}>
        <button onClick={() => setMobileMenu(false)} className="self-end text-2xl p-2 transition active:scale-75">
          <IoMdClose />
        </button>
        <Link
          to="/"
          className={`relative text-md transition hover:text-main-color font-medium capitalize text-black/90 dark:text-white/80 select-none w-fit py-2 `}
        >
          Home
        </Link>
        <Link
          to="/work"
          className={`relative text-md transition hover:text-main-color font-medium capitalize text-black/90 dark:text-white/80 select-none w-fit py-2 `}
        >
          work
        </Link>
        <Link
          to="/about"
          className={`relative text-md transition hover:text-main-color font-medium capitalize text-black/90 dark:text-white/80 select-none w-fit py-2`}
        >
          About
        </Link>
        <button
          onClick={handleOpenPdf}
          className={` relative text-md transition opacity-70 hover:opacity-100 hover:text-main-color font-medium capitalize text-black/90 dark:text-white select-none flex items-center justify-start gap-[2px] w-full`}
        >
          My Resume
          <MdArrowRightAlt className="text-xl -rotate-45" />
        </button>
      </div>

      {/* Pc menu */}
      <div
        className={`py-2 px-3 h-fit w-full max-md:max-w-[95%] max-w-[600px] mx-auto flex items-center justify-between fixed top-4 left-0 right-0 z-20 transition-colors duration-300 rounded-[20px] bg-[#f0f0f0d2] dark:bg-text-black/80 backdrop-blur-xl ${scrolled ? "" : ""
          }`}
      >
        <a href={`/`} className="flex items-baseline justify-center gap-1 cursor-pointer px-2">
          <h1 className="text-3xl pb-1 font-medium mr-10 text-black/90 dark:text-white select-none font-LeckerliOne ">
            {MyNames}
          </h1>
        </a>

        <div className="flex gap-2 items-center justify-center max-md:hidden">
          <Link
            to="/"
            className={` relative text-sm transition hover:bg-stone-300/70 dark:hover:bg-stone-700/50 px-3 py-2 rounded-xl  font-semibold capitalize select-none ${location.pathname === '/' ? '' : 'text-black/90 dark:text-white/80'}`}
          >
            Home
          </Link>

          <Link
            to="/work"
            className={` relative text-sm transition hover:bg-stone-300/70 dark:hover:bg-stone-700/50 px-3 py-2 rounded-xl  font-semibold capitalize select-none ${location.pathname === '/work' ? '' : 'text-black/90 dark:text-white/80'}`}
          >
            work
          </Link>

          <Link
            to="/about"
            className={` relative text-sm transition hover:bg-stone-300/70 dark:hover:bg-stone-700/50 px-3 py-2 rounded-xl  font-semibold capitalize select-none ${location.pathname === '/about' ? '' : 'text-black/90 dark:text-white/80'}`}
          >
            About
          </Link>
        </div>
        <button
              onClick={handleOpenPdf}
              className={` h-[35px] w-fit pl-4 pr-2 rounded-xl shadow-xl relative text-sm transition font-medium capitalize bg-main-color text-text-white dark:bg-white dark:text-text-black select-none flex max-md:hidden items-center justify-start gap-[2px] hover:scale-105 `}
          >
            My Resume
            <MdArrowRightAlt className="text-lg -rotate-45" />
          </button>
        <button onClick={() => setMobileMenu(true)} className="p-2 bg-stone-300/60 dark:bg-stone-800 transition active:scale-75 hidden max-md:flex  rounded-xl">
          <HiOutlineMenuAlt3 className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
