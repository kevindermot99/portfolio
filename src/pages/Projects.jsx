import React, { useEffect, useState } from 'react'
import { Greetings, Situation } from '../data'
import Navbar from '../components/Navbar'

function Projects() {

    return (
        <div className=' overflow-clip'>
            <Navbar />

            <section className='hero flex items-center justify-center flex-col my-10 pt-10 pb-16 sticky top-[110px] -z-[2] overflow-clip'>
                <h1 className='text-5xl text-black font-bold mb-2'>{Greetings}!</h1>
                <p className='text-sm text-black max-w-[600px] text-center '>{Situation}</p>
            </section>

            <section className='w-full bg-white'>
                <div className=' w-full max-w-[1150px] grid grid-cols-2 gap-4 m-auto px-3'>
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
                </div>
            </section>

            <section>
                <p></p>
            </section>

        </div>
    )
}

export default Projects