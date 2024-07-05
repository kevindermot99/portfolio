import React from 'react'
import { GoLock } from "react-icons/go";

function ProjectContainer() {
  return (
    <div className="bg-stone-200 dark:bg-stone-800/50 w-full h-fit rounded-xl transition duration-300 hover:shadow-xl hover:shadow-stone-200 dark:hover:shadow-transparent hover:-translate-y-1 cursor-pointer px-1 overflow-clip flex flex-col">
        {/* Address bar */}
        <div className='h-[30px] w-full flex items-center py-1 justify-center'>
            <div className='min-w-[170px] w-[50%] h-full bg-white/80 dark:bg-stone-800/70 rounded-3xl relative flex items-center justify-center gap-1 px-10'>
                <GoLock className='text-xs' />
                <p className='font-light text-xs truncate'>gerayo.onrender.com</p>
            </div>
        </div>
        <div className='h-full aspect-video w-full bg-white/80 dark:bg-stone-800/40 rounded-lg mb-1'></div>
    </div>
  )
}

export default ProjectContainer