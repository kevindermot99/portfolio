import React from 'react'
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(4px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Heading({Icon, SectionName, Title, Desc }) {
    return (
        <div className="grid grid-cols-1 max-md:grid-cols-1 gap-2 mb-6 max-md:gap-5">
            <Reveal
                keyframes={customAnimation}
                triggerOnce
                duration={800}
                cascade
                damping={0.1}>
                <h1 className="text-[37px] leading-[41px] max-md:text-[27px] max-md:leading-7 flex flex-col text-transparent font-semibold tracking-tight z-10 max-w-[400px] ">
                    <span className="font-medium text-lg text-main-color flex items-center gap-1">
                        {Icon}
                        {SectionName}
                    </span>
                    <span className="bg-clip-text bg-gradient-to-br from-black dark:from-white to-stone-800/70 dark:to-stone-400/80 ">
                        {Title}
                    </span>
                </h1>
                <p className="text-base leading-6 opacity-70 max-w-[600px] ">
                    {Desc}
                </p>
            </Reveal>
        </div>
    )
}

export default Heading