import React, { useEffect, useState } from 'react'
import { Greetings, NameAndLocation } from '../data'
import Navbar from '../components/Navbar'

function Projects() {

    return (
        <section>
            <Navbar />
            <div className='flex items-center justify-center flex-col my-5 '>
                <h1 className='text-5xl text-black font-bold mb-2'>{Greetings}!</h1>
                <p className='text-sm text-black'>{NameAndLocation}</p>
            </div>

        </section>
    )
}

export default Projects