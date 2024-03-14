import React, { useEffect, useState } from 'react'
import { Greetings, Situation } from '../data'
import Navbar from '../components/Navbar'

function Projects() {

    const today = new Date();

    return (
        <div className=' overflow-clip'>
            <Navbar />

            <section className='hero flex items-center justify-center flex-col my-10 pt-10 pb-16 sticky top-[110px] -z-[2] overflow-clip'>
                <h1 className='text-5xl text-black font-bold mb-2'>{Greetings}!</h1>
                <p className='text-sm text-black max-w-[600px] text-center '>{Situation}</p>
            </section>

            <section className='w-full bg-white'>
                <div className=' w-full max-w-[1000px] grid grid-cols-2 gap-4 m-auto px-3'>
                    <div className='w-[100%] h-[280px] bg-orange-400'>

                    </div>
                    <div className='w-[100%] h-[280px] bg-purple-400'>

                    </div>

                    <div className='w-[100%] h-[280px] bg-red-400'>

                    </div>
                    <div className='w-[100%] h-[280px] bg-lime-400'>

                    </div>

                    <div className='w-[100%] h-[280px] bg-amber-400'>

                    </div>
                    <div className='w-[100%] h-[280px] bg-slate-400'>

                    </div>
                </div>
            </section>

            <section className='mt-6 flex justify-center items-center px-3 pt-28 pb-10'>
                <p className='font-light text-base text-black'>i started Web dev in 2020 - {today.getFullYear()}</p>
            </section>

        </div>
    )
}

export default Projects