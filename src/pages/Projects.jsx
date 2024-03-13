import React, { useEffect, useState } from 'react'
import { Greetings, NameAndLocation } from '../data'
import Navbar from '../components/Navbar'

function Projects() {

    return (
        <div>
            <Navbar />

            <section className='flex items-center justify-center flex-col my-5 '>
                <h1 className='text-5xl text-black font-bold mb-2'>{Greetings}!</h1>
                <p className='text-sm text-black '>{NameAndLocation}</p>
            </section>

            <section className='w-full max-w-[1100px] grid grid-cols-2 gap-2 m-auto pt-10'>
                <div className='w-[100%] h-[300px] bg-orange-500'>

                </div>
                <div className='w-[100%] h-[300px] bg-purple-500'>

                </div>

                <div className='w-[100%] h-[300px] bg-red-500'>

                </div>
                <div className='w-[100%] h-[300px] bg-lime-500'>

                </div>

                <div className='w-[100%] h-[300px] bg-amber-500'>

                </div>
                <div className='w-[100%] h-[300px] bg-violet-500'>

                </div>
            </section>
        </div>
    )
}

export default Projects