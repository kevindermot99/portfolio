import React, { useEffect, useState } from 'react'
import { Greetings, Situation, ProjectModel } from '../data'    
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Projects() {

    const today = new Date();

    return (
        <div className='wrapper overflow-clip'>
            <Navbar />

            <section className='hero flex items-center justify-center flex-col mt-10 pt-10 pb-10 sticky top-[110px] -z-[2] overflow-clip'>
                <h1 className='text-5xl text-black font-bold mb-2'>{Greetings}!</h1>
                <p className='text-sm text-black max-w-[600px] text-center '>{Situation}</p>
            </section>

            <section className='w-full bg-white'>
                <p className='text-center py-5 capitalize'>~ my Work ~</p>
                <div className=' w-full max-w-[1000px] grid grid-cols-2 gap-1 m-auto px-3 overflow-clip'>
                    {ProjectModel.map((project) => (
                        <Link to={`/details/${project.id}`} key={project.id} className='group w-[100%] rounded-sm h-[250px] overflow-clip' >
                            <img src={project.thumbnail} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' alt="" />
                        </Link>
                    ))}
                    
                    
                </div>
            </section>

            <section className='mt-6 flex justify-center items-center px-3 pt-16 pb-6'>
                <p className='font-medium text-sm text-black'>Started 2020 - {today.getFullYear()}</p>
            </section>

        </div>
    )
}

export default Projects