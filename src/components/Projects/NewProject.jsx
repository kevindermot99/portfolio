import React from "react";
import { ProjectTypes } from "./Types";

function NewProject() {
  return (
    <div className="w-full h-full flex items-start flex-col break-inside-avoid">
      <div className="w-full h-[312px] border-[2px] border-dashed border-dark_color_weak/50 dark:border-card_color_light/10 text-base text-dark_color/40 dark:text-light_color_weak rounded-3xl flex items-center justify-center overflow-hidden break-inside-avoid">
        <p className="px-4 py-2 rounded-xl bg-white dark:bg-body_dark">New project soon..</p>
      </div>
      <p className="px-2 text-[13px] py-1 text-dark_color/40 dark:text-light_color_weak">
        Jan 27, 2025
      </p>
    </div>
  );
}

export default NewProject;
