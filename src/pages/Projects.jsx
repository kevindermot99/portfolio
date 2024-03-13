import React, { useEffect, useState } from 'react'
import { Greetings, NameAndLocation } from '../data'
import Navbar from '../components/Navbar'

function Projects() {

    return (
        <div>
            <Navbar />

            <section className='flex items-center justify-center flex-col my-10 '>
                <h1 className='text-5xl text-black font-bold mb-2'>{Greetings}!</h1>
                <p className='text-sm text-black max-w-[600px] text-center '>{NameAndLocation}</p>
            </section>

            <section className='w-full max-w-[1150px] grid grid-cols-2 gap-1 m-auto p-5'>
                <div className='w-[100%] h-[300px] bg-orange-400'>

                </div>
                <div className='w-[100%] h-[300px] bg-purple-400'>

                </div>

                <div className='w-[100%] h-[300px] bg-red-400'>

                </div>
                <div className='w-[100%] h-[300px] bg-lime-400'>

                </div>

                <div className='w-[100%] h-[300px] bg-amber-400'>

                </div>
                <div className='w-[100%] h-[300px] bg-slate-400'>

                </div>
            </section>
        </div>
    )
}

export default Projects