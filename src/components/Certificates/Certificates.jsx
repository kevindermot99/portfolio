import React, { useEffect, useState } from "react";
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

function Certificates({ setShowCerts }) {
  const certificates = [
    {
      proof: "./certificates/sorwazini.jpg",
      from: [
        "ALU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xpCuzcYvX8XpYqJnHLpblzGtZ24B5MQCvaAQ4nD9qQvT5N8J01Zdwlj-XKWNasw5B7U&usqp=CAU",
      ],
      desc: "We won most inovative idea pitching completition.",
      type: ["All", "Soft Skills"],
    },
    {
      proof: "./certificates/abbp.png",
      from: [
        "Afrikan Baby Book Project",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tafhJVYOixyiJpXzXToh1d5ROu9cpRcPYg&s",
      ],
      desc: "We won most inovative idea pitching completition.",
      type: ["All", "Technical"],
    },
  ];

  const handleClose = () => {
    setTimeout(() => {
      setShowCerts(false)
    }, 1000);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        // Perform the desired action
        console.log('Esc key pressed!');
      }
    };

    // Attach the event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const certificateFilters = ["All", "Technical", "Soft Skills", "Education"];
  const [type, setType] = useState("All");
  return (
    <div className="fixed top-0 left-0 bg-white dark:bg-body_dark w-full h-full z-20 p-8 max-lg:p-5 overflow-y-auto text-dark_color dark:text-light_color">
      <div className="w-full flex items-center justify-end">
        <button
          onClick={handleClose}
          className="text-dark_color dark:text-light_color dark:bg-card_color_dark peer bg-[#f2f2f2] active:bg-stone-200 dark:active:bg-[#35353a] w-[44px] min-w-[44px] h-auto flex items-center justify-center text-xl aspect-square rounded-full"
        >
          <LuX className="" />
        </button>
      </div>
      <Reveal
        triggerOnce
        damping={0.3}
        cascade={0.3}
        duration={500}
        keyframes={customAnimation}
      >
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
          {certificates
            .filter((holder) => holder.type.includes(type))
            .map((certificate, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 break-inside-avoid"
              >
                <a
                  href={certificate.proof}
                  target="_blank"
                  className="w-full h-[340px] select-none bg-card_color_light dark:bg-card_color_dark rounded-3xl py-16 px-12 overflow-clip"
                >
                  <img
                    src={certificate.proof}
                    className="w-full min-h-full object-cover rounded-md"
                  />
                </a>
                <div className="flex gap-3 items-center">
                  {/* logo */}
                  <div className="h-auto w-[45px] aspect-square bg-card_color_light dark:bg-card_color_dark rounded-xl overflow-hidden">
                    <img
                      src={certificate.from[1]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-base font-Custom_m leading-4">
                    {certificate.from[0]}
                  </h1>
                </div>
              </div>
            ))}
          {certificates.filter((holder) => holder.type.includes(type)).length <
            1 && (
            <>
              <h1 className="text-sm text-dark_color/70 dark:text-light_color/70">
                No achievements to display in this category yet.
              </h1>
            </>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default Certificates;
