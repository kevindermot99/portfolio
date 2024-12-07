import React, { useState } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { PiCertificateBold } from "react-icons/pi";
import { LuX } from "react-icons/lu";
const customAnimation = keyframes`
from{
  transform: TranslateY(90px);
  opacity: 0;
  filter: blur(4px);
}
to{
  transform: TranslateY(0px);
  opacity: 1;
  filter: blur(0px);
}
`;

function Certificates() {
  const certificateFilters = ["All", "Technical", "Soft Skills", "Education"];
  const [type, setType] = useState("All");
  return (
    <div className="fixed top-0 left-0 bg-white dark:bg-body_dark w-full h-full z-20 p-8 max-lg:p-5 overflow-y-auto text-dark_color dark:text-light_color">
      <Reveal triggerOnce duration={500} keyframes={customAnimation}>
        <div className="w-full flex items-center justify-end">
          <button className="text-dark_color dark:text-light_color dark:bg-card_color_dark peer bg-[#f2f2f2] active:bg-stone-200 dark:active:bg-[#35353a] w-[44px] min-w-[44px] h-auto flex items-center justify-center text-xl aspect-square rounded-full">
            <LuX className="" />
          </button>
        </div>
        {/* head */}
        <div className="w-full h-fit flex flex-col items-start justify-start gap-6 py-[30px]">
          <h1 className="text-5xl font-Custom_b tracking-tight">
            Certificates
          </h1>
          <div className="flex items-center justify-start gap-6">
            {certificateFilters.map((filter, index) => (
              <h1
                onClick={() => setType(filter)}
                key={index}
                className={`border-b-[2px] cursor-pointer hover:text-dark_color dark:hover:text-light_color transition-all duration-200 select-none ${
                  type === filter
                    ? "text-dark_color dark:text-light_color border-dark_color dark:border-light_color"
                    : "text-dark_color_weak dark:text-light_color_weak border-transparent"
                }`}
              >
                {filter}
              </h1>
            ))}
          </div>
        </div>
        {/* body */}
        <div className="w-full columns-4 max-2xl:columns-3 max-xl:columns-2 max-md:columns-1 content-start space-y-4 ">
          {[...Array(8)].map((_, index) => (
            <div className="flex flex-col gap-4">
              <div className="w-full h-[340px] bg-card_color_light dark:bg-card_color_dark rounded-3xl break-inside-avoid"></div>
              <div className="flex gap-2">
                {/* logo */}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default Certificates;