import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { PiCertificateBold } from "react-icons/pi";
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
    <div className="fixed top-0 left-0 bg-white dark:bg-body_dark w-full h-full z-20 p-8 max-lg:p-5 overflow-y-auto">
      <Reveal duration={500} keyframes={customAnimation}>
        <div className="w-full flex items-center justify-end">
          <button className="text-dark_color dark:text-light_color dark:bg-card_color_dark peer bg-[#f2f2f2] active:bg-stone-200 dark:active:bg-[#35353a] w-[44px] min-w-[44px] h-auto flex items-center justify-center text-2xl aspect-square rounded-full">
            <PiCertificateBold className="" />
          </button>
        </div>
      </Reveal>
    </div>
  );
}

export default Achievements;
