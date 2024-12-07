import React, { useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import SC from "../Special/SC";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function Gerayo() {
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
        className={`flex flex-col gap-2 select-none pointer-events-none group-hover:scale-75 group-hover:translate-y-[-105px] transition-all duration-500 saturate-0 group-hover:saturate-100`}
      >
        <div className="flex items-center gap-1 ">
          <FaLocationDot className="text-4xl transition-all duration-500 text-dark_color/45 dark:text-light_color/45 group-hover:text-[#399e5a]" />
          <h1 className=" font-bold text-4xl transition-all duration-500 tracking-wide font-Inter text-dark_color/45 dark:text-light_color group-hover:text-[#399e5a]">
            gerayo
          </h1>
        </div>
      </div>
      {/* screenshot 1 */}
      <div
        className={`w-full select-none pointer-events-none flex items-start justify-between gap-0 h-fit px-3 opacity-0 group-hover:opacity-100 absolute left-0 right-0 mx-auto top-[100%] group-hover:top-[33%] delay-150 transition-all duration-500 ease-in-out overflow-x-auto invisible_scroll`}
      >
        <div
          className={`w-full bg-white dark:bg-[#37373b] rounded-2xl flex items-start justify-between gap-0 h-fit p-3 overflow-x-auto invisible_scroll`}
        >
          <div className="w-full flex flex-col text-base pr-3 whitespace-nowrap text-dark_color dark:text-light_color">
            <span className="text-sm text-dark_color_weak dark:text-light_color/45">
              from
            </span>
            <span>Kigali</span>
          </div>
          <div className="w-fit text-right flex-col text-sm whitespace-nowrap text-dark_color_weak dark:text-light_color/45">
            DT 06:00 am
          </div>
        </div>
      </div>
      <div
        className={`w-full select-none pointer-events-none flex items-start justify-between gap-0 h-fit px-3 opacity-0 group-hover:opacity-100 absolute left-0 right-0 mx-auto top-[100%] group-hover:top-[58%] delay-150 transition-all duration-500 ease-in-out overflow-x-auto invisible_scroll`}
      >
        <div
          className={`w-full bg-white dark:bg-[#37373b] rounded-2xl flex items-start justify-between gap-0 h-fit p-3 overflow-x-auto invisible_scroll`}
        >
          <div className="w-full flex flex-col text-base pr-3 whitespace-nowrap text-dark_color dark:text-light_color">
            <span className="text-sm text-dark_color_weak dark:text-light_color/45">
              to
            </span>
            <span>Gisenyi</span>
          </div>
          <div className="w-fit text-right flex-col text-sm whitespace-nowrap text-dark_color_weak dark:text-light_color/45">
            AT 03:30 pm
          </div>
        </div>
      </div>
      {/* screenshot 2 */}
      <div
        className={`w-[100%] px-3 h-fit opacity-0 group-hover:opacity-100 absolute left-0 right-0 mx-auto top-[100%] group-hover:top-[83%] delay-300 transition-all duration-500 ease-in-out`}
      >
        <div className="w-full h-[40px] rounded-2xl bg-[#348850] dark:bg-[#245a36] text-sm text-white flex items-center justify-center pointer-events-none select-none">
          Pay 2,100 rwf
        </div>
      </div>
    </Link>
  );
}

export default Gerayo;
