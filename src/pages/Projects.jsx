import React, { useEffect, useState } from 'react'
import { Greetings, Situation, ProjectModel } from '../data'    
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

function Projects() {

    const today = new Date();

    return (
        <div className=' overflow-clip'>
            <Navbar />

            <section className='hero flex items-center justify-center flex-col mt-10 pt-10 pb-10 sticky top-[110px] -z-[2] overflow-clip'>
                <h1 className='text-5xl text-black font-bold mb-2'>{Greetings}!</h1>
                <p className='text-sm text-black max-w-[600px] text-center '>{Situation}</p>
            </section>

            <section className='w-full bg-white'>
                <div className=' w-full max-w-[1000px] grid grid-cols-2 gap-4 m-auto px-3'>
                    {ProjectModel.map((project) => (
                        <Link to={`/project/${project.id}`} key={project.id} className='w-[100%] h-[250px] bg-orange-400 rounded-md' >
                            
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