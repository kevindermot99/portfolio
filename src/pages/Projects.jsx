import React, { useEffect, useState } from 'react'
import { Greetings, Situation, ProjectModel } from '../data'    
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Projects() {

    const today = new Date();

    return (
        <div className='wrapper overflow-clip bg-stone-100  '>
            <Navbar />

            <section className=' flex items-center justify-center flex-col gap-4 py-10 '>
                <div src="" className='flex items-center justify-center' >
                    <div className="h-16 aspect-square rounded-full bg-gradient-to-br from-stone-300 to-stone-100 translate-x-8 "></div>
                    <div className="h-20 aspect-square rounded-full bg-gradient-to-br from-stone-300 to-stone-100 z-10 -translate-y-1 "></div>
                    <div className="h-16 aspect-square rounded-full bg-gradient-to-br from-stone-300 to-stone-100 -translate-x-8 "></div>
                </div>
                <h1 className='text-[60px] leading-[60px] text-black font-extrabold mb-2 tracking-tighter'>{Greetings}</h1>
                <p className='text-sm text-black max-w-[600px] text-center tracking-tight '>{Situation}</p>
            </section>

            <section className='w-full'>
                <p className='text-sm text-black mt-4 pb-4 text-center tracking-tight'>My Projects</p>
                <div className='gridRespo w-full m-auto px-3 overflow-clip'>
                    {ProjectModel.map((project) => (
                        <Link to={`/details/${project.id}`} key={project.id} className={` group rounded-sm h-[180px] w-full overflow-clip flex items-center justify-center bg-gradient-to-br from-stone-300 to-stone-100  `} >
                            <img src={project.thumbnail} className='h-14  object-cover group-hover:scale-105 transition duration-500' alt="" />
                        </Link>
                    ))}
                    
                    
                </div>
            </section>

            <section className='mt-6 flex justify-center items-center px-3 pt-16 pb-6'>
                <p className='text-sm text-black py-5 text-center tracking-tight'>Started 2020 - {today.getFullYear()}</p>
            </section>

        </div>
    )
}

export default Projects