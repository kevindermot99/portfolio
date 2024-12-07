import React from "react";
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

function Achievements() {
  return (
    <div className="fixed top-0 left-0 bg-white dark:bg-body_dark w-full h-full z-20 p-8 max-lg:p-5 overflow-y-auto text-dark_color dark:text-light_color">
      <Reveal duration={500} keyframes={customAnimation}>
        <div className="w-full flex items-center justify-end">
          <button className="text-dark_color dark:text-light_color dark:bg-card_color_dark peer bg-[#f2f2f2] active:bg-stone-200 dark:active:bg-[#35353a] w-[44px] min-w-[44px] h-auto flex items-center justify-center text-xl aspect-square rounded-full">
            <LuX className="" />
          </button>
        </div>
        {/* hero */}
        <div className="w-full h-fit flex flex-col items-start justify-start py-[30px]">
            <h1 className="font-Custom_b text-5xl tracking-tight">Achievements</h1>
        </div>
      </Reveal>
    </div>
  );
}

export default Achievements;
