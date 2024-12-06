import React from "react";
import { TbStack } from "react-icons/tb";
import SC from "../Special/SC";

function UpfrontCard() {
  const userEmail = "me@example.com";
  const collaborations = [
    "hpetter@example.com",
    "michaelj@example.com",
    "kellys@example.com",
    "sarahw@example.com",
    "johnb@example.com",
    "emilyr@example.com",
    "davids@example.com",
  ];
  return (
    <div className="group z-10 relative w-full h-fit">
      <div
        className={`group cursor-pointer w-full h-full p-4 rounded-xl custom_shadow bg-white dark:bg-[#37373b] pointer-events-none dark:text-[#b8b8b8] text-dark_color flex flex-col relative `}
      >
        <h1 className="font-normal text-base leading-7 line-clamp-1">
          Website Redesign for Client X
        </h1>
        <p className="line-clamp-1 leading-4 text-sm font-normal text-dark_color/70 dark:text-[#b8b8b8]/70 min-h-[15px]">
          Redesign the home page to match the modern branding and improve UX
        </p>
        <div className="flex items-center justify-start mt-3">
          <div
            title={userEmail}
            className="h-7 w-auto aspect-square rounded-full flex items-center justify-center bg-blue-500 text-white text-base font-semibold ring-[3px] ring-white dark:ring-[#37373b] uppercase"
          >
            {userEmail.charAt(0)}
          </div>
          {collaborations.slice(0, 2).map((collab, index) => (
            <div
              key={index}
              title={collab}
              className="h-7 w-auto aspect-square rounded-full flex items-center justify-center bg-purple-600 text-white text-base font-semibold ml-[-5px] ring-[3px] ring-white dark:ring-[#37373b] uppercase"
            >
              {collab.charAt(0)}
            </div>
          ))}
          {collaborations.length > 3 && (
            <div className="flex items-center justify-center text-sm text-text-color/70 px-[2px] font-medium font-Inter ml-1">
              +{collaborations.length - 3}
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 py-3">
          <h1 className="text-sm">100<SC char={'%'} /></h1>
          <div
            className="flex w-full h-1.5 bg-sky-600 rounded-full overflow-hidden"
          >
            {/* <div
              className={`flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 ${getProgressClasses(
                project.progress
              )} ${project.progressClass}`}
            ></div> */}
          </div>
          <h1 className="text-sm">100<SC char={'%'} /></h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="w-full flex items-center justify-start text-xs gap-1 font-medium text-text-color/70 dark:text-[#b8b8b8]">
            <TbStack className="text-xl" />
            23 Boards
          </p>
          <p className="w-full flex items-start justify-end text-xs font-medium text-text-color/70 dark:text-[#b8b8b8]">
            Dec 22, 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpfrontCard;
