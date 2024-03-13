import React, { useEffect, useState } from 'react'
import { Greetings, NameAndLocation } from '../data'
import Navbar from '../components/Navbar'
import Dock from '../components/Dock'

function Projects() {

    return (
        <div>
            <Navbar />
            <Dock />

            <section className='flex items-center justify-center flex-col my-5 '>
                <h1 className='text-5xl text-black font-bold mb-2'>{Greetings}!</h1>
                <p className='text-sm text-black max-w-[600px] text-center '>{NameAndLocation}</p>
            </section>

            <section className='w-full max-w-[1150px] grid grid-cols-2 gap-1 m-auto p-10'>
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