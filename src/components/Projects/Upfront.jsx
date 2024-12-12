import React, { useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import UpfrontCard from "./UpfrontCard";
import { Link } from "react-router-dom";
import { ProjectTypes } from "./Types";

function Upfront() {
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
    <div className="flex items-start flex-col">
      <Link
        to="https://upfront.onrender.com/"
        target="_blank"
        className="w-full h-[312px] bg-[#f2f2f2] dark:bg-card_color_dark/30 dark:hover:bg-card_color_dark/70 transition group  rounded-3xl relative flex items-center justify-center flex-col overflow-hidden"
      >
        <div
          className={`flex flex-col gap-2 select-none pointer-events-none xl:group-hover:scale-75 max-xl:scale-75 xl:group-hover:translate-y-[-105px] max-xl:translate-y-[-105px] transition-all duration-500 xl:saturate-0 xl:group-hover:saturate-100`}
        >
          <div className="flex items-center gap-2 ">
            <img src="./project_logos/upfront.png" className="h-12 transition-all duration-500 xl:opacity-70 xl:group-hover:opacity-100" />
            <h1 className="font-Inter font-bold text-4xl text-dark_color dark:text-light_color xl:text-dark_color/45 xl:dark:text-light_color/45 xl:group-hover:text-dark_color xl:dark:group-hover:text-light_color transition-all duration-500 ">
              Upfront.
            </h1>
          </div>
        </div>
        {/* screenshot 1 */}
        <div
          className={`w-[85%] z-0 h-fit p-3 absolute left-0 right-0 mx-auto xl:top-[100%] xl:group-hover:top-[25%] top-[25%] delay-150 transition-all duration-500 ease-in-out`}
        >
          <UpfrontCard />
        </div>
        {/* screenshot 2 */}
        <div
          className={`w-[100%] z-10 h-fit p-3 xl:opacity-0 xl:group-hover:opacity-100 absolute left-0 right-0 select-none pointer-events-none mx-auto xl:top-[100%] xl:group-hover:top-[35%] top-[35%] delay-300 transition-all duration-500 ease-in-out`}
        >
          <UpfrontCard />
        </div>
      </Link>

      <p className="px-2 text-[13px] py-1 text-dark_color/40 dark:text-light_color_weak">{ProjectTypes.Professional}</p>
    </div>
  );
}

export default Upfront;
