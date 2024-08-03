import React, { useState } from "react";
import { GoLinkExternal, GoLock } from "react-icons/go";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

function ProjectContainer({ img, name, duration, logo, tech, url }) {
  const techArray = Array.isArray(tech) ? tech : [];
  return (
    <a href={url} target="_blank" className="flex flex-col items-start justify-start gap-6 relative w-full" >
      {/* Details */}
      <div className="flex justify-between items-end w-full mt-1 gap-5">
        <h1 className="z-10 flex flex-col text-black/90 dark:text-white gap-3 ">
          <span className="leading-3 text-2xl font-medium">{name}</span>
          <span className="font-normal opacity-60 text-sm">May 5, 2023 </span>
          {/* <div className="flex flex-wrap items-end justify-start h-fit gap-3">
              {techArray.map((techItem, index) => (
                <h1 key={index} className="text-sm text-dark-body/60 dark:text-white/60 font-normal ring-1 ring-black/20 h-[30px] dark:ring-white/20 px-3 flex items-center justify-center rounded-full w-fit">
                  {techItem}
                </h1>
              ))}

            </div> */}
        </h1>
        <p className="text-base leading-6 opacity-70 font-normal max-w-[50%] text-justify">
          Projects that not only React-based apps to full stack web apps.
        </p>
      </div>

      <div className="">
        <img src={img} className="dark:opacity-90 h-full w-full object-cover rounded-xl transition duration-500" />
      </div>

    </a>
  );
}

export default ProjectContainer;
