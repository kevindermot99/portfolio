import React from "react";
import Navbar from "../components/Navbar";
import { ProjectSection } from "../data";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import { FaCss3Alt, FaGit, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

function NotFound() {
  return (
    <div className="wrapper overflow-clip bg-light-body dark:bg-dark-body text-black/90 dark:text-white/80  ">
      {/* <Navbar /> */}
        <div className="flex items-center justify-center flex-col w-full h-fit min-h-svh p-10">
            <h1 className="font-extrabold text-[100px] leading-[110px] text-black/15 tracking-tight">404</h1>
            <p className="font-medium text-black/50 tracking-tight">Page not found, <a href="/" className="text-black hover:underline">Go to Home</a></p>
        </div>
    </div>
  );
}

export default NotFound;
