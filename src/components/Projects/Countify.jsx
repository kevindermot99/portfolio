import React, { useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import SC from "../Special/SC";
import { Link } from "react-router-dom";
import { RiUploadCloud2Line } from "react-icons/ri";

function Countify() {
  const [animate, setAnimate] = useState(false);
  const [animateGoUp, setAnimateGoUp] = useState(false);

  const startAnimation = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimateGoUp(true);
    }, 300); // Delay goUp animation slightly
  };

  const stopAnimation = () => {
    setAnimate(false);
    setAnimateGoUp(false);
  };

  return (
    <Link
      to="https://countify.onrender.com/#/app/counter"
      target="_blank"
      className="w-full h-[312px] bg-[#f2f2f2] dark:bg-card_color_dark transition group break-inside-avoid rounded-3xl relative flex items-center justify-center flex-col overflow-hidden"
    >
      <div
        className={`flex flex-col gap-2 select-none pointer-events-none xl:group-hover:scale-75 scale-75 xl:group-hover:translate-y-[-105px] group-hover:translate-y-[-105px] transition-all duration-500 `}
      >
        <div className="flex items-center gap-2 ">
          <img
            src="./project_logos/countify.png"
            className="h-12 transition-all duration-500 "
          />
          <h1 className=" font-bold text-3xl text-dark_color dark:text-light_color tracking-wide">
            Countify
          </h1>
        </div>
      </div>
      {/* screenshot 1 */}
      <div
        className={`w-[100%] select-none pointer-events-none h-fit px-3 xl:opacity-0 xl:group-hover:opacity-100 absolute left-0 right-0 mx-auto xl:top-[100%] xl:group-hover:top-[35%] top-[35%] delay-150 transition-all duration-500 ease-in-out`}
      >
        <div
          className={`w-full bg-white dark:bg-[#37373b] rounded-2xl flex items-start justify-between gap-0 h-fit p-3 overflow-x-auto invisible_scroll`}
        >
          <div className="w-full flex flex-col text-sm pr-3 border-r-[1px] dark:border-[#65656e] whitespace-nowrap text-dark_color dark:text-light_color">
            <span>Words</span>
            <span>639</span>
          </div>
          <div className="w-full flex flex-col text-sm px-3 border-r-[1px] dark:border-[#65656e] whitespace-nowrap text-dark_color dark:text-light_color">
            <span>Characters</span>
            <span>
              5<SC char="," />
              116
            </span>
          </div>
          <div className="w-full flex flex-col text-sm pl-3 whitespace-nowrap text-dark_color dark:text-light_color">
            <span>Lines</span>
            <span>102</span>
          </div>
        </div>
      </div>
      {/* screenshot 2 */}
      <div
        className={`w-full select-none pointer-events-none flex items-start justify-between gap-0 h-fit px-3 xl:opacity-0 xl:group-hover:opacity-100 absolute left-0 right-0 mx-auto xl:top-[100%] xl:group-hover:top-[59%] top-[59%] delay-150 transition-all duration-500 ease-in-out overflow-x-auto invisible_scroll`}
      >
        <div
          className={`w-full bg-white dark:bg-[#37373b] rounded-2xl flex items-start justify-between gap-0 h-fit p-3 overflow-x-auto invisible_scroll`}
        >
          <div className="w-full flex flex-col text-sm pr-3 border-r-[1px] dark:border-[#65656e] whitespace-nowrap text-dark_color dark:text-light_color">
            <span>Sentences</span>
            <span>53</span>
          </div>
          <div className="w-full flex flex-col text-sm px-3 whitespace-nowrap text-dark_color dark:text-light_color">
            <span>Whitespaces</span>
            <span>788</span>
          </div>
        </div>
      </div>
      {/* screenshot 3 */}
      <div
        className={`w-[100%] px-3 h-fit xl:opacity-0 xl:group-hover:opacity-100 absolute left-0 right-0 mx-auto xl:top-[100%] xl:group-hover:top-[83%] top-[83%] delay-300 transition-all duration-500 ease-in-out`}
      >
        <div className="w-full h-[40px] rounded-2xl bg-stone-400/40 dark:bg-[#37373b] text-sm text-dark_color dark:text-light_color flex items-center justify-center gap-2 pointer-events-none select-none">
          <RiUploadCloud2Line className="text-base" />
          Updload PDF
        </div>
      </div>
    </Link>
  );
}

export default Countify;
