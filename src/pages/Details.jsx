import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ProjectModel } from '../data'
import { RiScreenshotLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';


function Details({ isVisible }) {

    const { id } = useParams();
    const res = ProjectModel.find(findthis)
    function findthis(project) {
        return project.id === id;
    }


    const [copied, setcopied] = useState(false)

    function copylink() {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
        setcopied(true)
        setTimeout(() => {
            setcopied(false)
        }, 2000);
    }

    const h3 = 'font-semibold text-lg mt-3 ';
    const p = 'text-base font-normal mb-7 leading-relaxed  ';

    if (!res) {
        return <div>Item not found!</div>
    }
    return (
        <div className=' wrapper pb-28'>
            <Navbar />

            <div className='w-full relative '>

                <div className='w-full h-[65vh] max-h-[600px] relative overflow-clip'>
                    <img src={res.thumbnail} className='animateZoom w-full h-full object-cover select-none' />
                    <div className='flex justify-between items-center overflow-clip py-4 absolute z-0  bottom-0 w-full px-7'>
                        <button className='text-xl p-2 bg-white bg-opacity-10 backdrop-blur-sm text-white hover:scale-105 shadow-sm rounded-xl' title='Screenshots'><RiScreenshotLine /></button>
                        <p className='font-medium text-sm text-white text-opacity-40 max-sm:hidden '>~ {res.slogan} ~</p>
                        <button className='text-xl p-2 bg-white bg-opacity-10 backdrop-blur-sm text-white hover:scale-105 shadow-sm outline-none rounded-xl' title='Share' onClick={copylink}><IoShareSocialOutline /></button>
                    </div>
                </div>

                <div className='w-full px-7 max-w-[1200px] m-auto'>
                    <div className='flex items-center justify-between mt-10'>
                        <span>
                            <h1 className='text-3xl font-bold'>{res.title}</h1>
                            <p className='text-base font-normal  '>{res.slogan}</p>
                        </span>


                        <a href={res.liveDemoLink} target='_blank' className='font-medium text-base text-white bg-blue-500 px-10 py-3 rounded-lg transition hover:opacity-90'>Live Demo</a>
                    </div>



                    <h3 className={h3}>
                        Technologies Used:
                    </h3>
                    <div className='flex gap-3 overflow-clip flex-wrap mb-8 mt-2'>
                        {res.technologies.map((tech, index) => (
                            <img src={tech.icon} title={tech.name} key={index} className='h-12 bg-gray-100 p-2 rounded-lg' />
                        ))}
                    </div>

                    <h3 className={h3}>
                        About: {res.title}
                    </h3>

                    <p className={p}>
                        {res.description}
                    </p>

                    <h3 className={h3}>
                        Project Role:
                    </h3>
                    <p className={p}>
                        {res.role}
                    </p>

                    <h3 className={h3}>
                        Project Duration:
                    </h3>
                    <p className={p}>
                        {res.duration}
                    </p>

                    <h3 className={h3}>
                        Source Code:
                    </h3>
                    <a href="#" target='_blank' className='text-base font-medium underline transition hover:text-blue-400 text-blue-500'>
                        {res.linkSourceCode}
                    </a>


                </div>

            </div>


            <div className={`fixed left-0 right-0 top-4 z-10 m-auto w-fit bg-gray-100 rounded-xl p-3 flex items-center justify-start transition-all   ${copied ? ' opacity-100 scale-100' : ' opacity-0 scale-0'}`} id='copied'>
                <IoCheckmarkOutline className='text-xl text-green-600' />
                <p className='text-sm px-1 font-medium text-gray-500'>
                    Link Copied
                </p>
            </div>
        </div>
    )
}

export default Details