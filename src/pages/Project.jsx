import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ProjectModel } from '../data'
import { IoChevronBack } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';

function Project() {

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

    const h3 ='font-semibold text-lg mt-3 ';
    const p ='text-base font-light mb-7 leading-relaxed  ';

    if (!res) {
        return <div>Item not found!</div>
    }
    return (
        <div className='pb-20'>
            {/* <Navbar /> */}

            <div className='w-full relative px-7 max-w-[1200px] m-auto'>
                
                <div className='flex justify-between items-center py-4'>
                    <Link to="/" className='text-xl p-2 bg-gray-200 hover:scale-105 shadow-sm rounded-xl'><IoChevronBack /></Link>
                    <p className='font-medium text-base '>{res.title}</p>
                    <button className='text-xl p-2 bg-gray-200 hover:scale-105 shadow-sm outline-none rounded-xl ' onClick={copylink}><IoShareSocialOutline /></button>
                </div>

                <div className='w-full h-[300px] rounded-xl relative overflow-clip'>
                    <img src={res.thumbnail} className='w-full h-full object-cover' />
                </div>

                <div className='w-full'>
                    <div className='flex items-center justify-between mt-10'>
                        <h1 className='text-3xl font-bold'>{res.title}</h1>
                        <a href={res.liveDemoLink} className='font-medium text-base text-white bg-blue-500 px-10 py-3 rounded-lg transition hover:opacity-90'>Live Demo</a>
                    </div>
                    
                    <h3 className={h3}>
                        Technologies Used:
                    </h3>
                    <div className='flex gap-3 overflow-clip flex-wrap mb-8 mt-2'>
                        {res.technologies.map((tech, index) => (
                            <img src={tech.icon} title={tech.name} className='h-12 bg-gray-100 p-2 rounded-lg'/>
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

                    <h3 className={h3}>Source Code:</h3>
                    <a href="#" target='_blank' className='text-base font-medium underline transition hover:text-blue-400 text-blue-500'>
                        {res.linkSourceCode}
                    </a>
                
                
                </div>

            </div>


            <div className={`fixed left-0 right-0 bottom-4 m-auto w-fit bg-gray-200 rounded-xl p-3 flex items-center justify-start transition-all   ${copied ? ' opacity-100 scale-100' : ' opacity-0 scale-0'}`} id='copied'>
                <IoCheckmarkOutline className='text-xl text-green-600' />
                <p className='text-sm px-1 font-medium text-gray-500'>
                    Link Copied
                </p>
            </div>
        </div>
    )
}

export default Project