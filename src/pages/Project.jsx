import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ProjectModel } from '../data'
import { IoChevronBack } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useState } from 'react'
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

    if (!res) {
        return <div>Item not found!</div>
    }
    return (
        <div>
            {/* <Navbar /> */}

            <div className='w-full relative px-7 max-w-[1200px] m-auto'>
                <div className='flex justify-between items-center py-4'>
                <Link to="/" className='text-xl p-2 bg-gray-200 hover:scale-105 shadow-sm rounded-xl'><IoChevronBack /></Link>
                <p className='font-medium text-base '>{res.title}</p>
                <button className='text-xl p-2 bg-gray-200 hover:scale-105 shadow-sm outline-none rounded-xl ' onClick={copylink}><IoShareSocialOutline /></button>
                </div>

                <div className='w-full h-[300px] rounded-xl bg-gray-200 relative overflow-clip'>
                    <img src={res.thumbnail} className='w-full h-full object-cover' />
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