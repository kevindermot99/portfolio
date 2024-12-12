import React from "react";
import { ProjectTypes } from "./Types";

function NewProject() {
  return (
    <div className="w-full h-full flex items-start flex-col break-inside-avoid">
      <div className="w-full h-full border-[2px] border-dashed border-dark_color_weak dark:border-card_color_light/10 text-base text-dark_color dark:text-light_color_weak rounded-3xl flex items-center justify-center overflow-hidden break-inside-avoid">
        New project soon..
      </div>
      <div className="px-2 bg-red-400 h-[30px] text-[13px] py-1 text-dark_color/40 dark:text-light_color_weak">
      </div>
    </div>
  );
}

export default NewProject;
