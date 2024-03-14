import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ProjectModel } from '../data'
import { IoChevronBack } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useState } from 'react'

function Project() {
    const { id } = useParams();
    const res = ProjectModel.find(findthis)
    function findthis(project) {
        return project.id === id;
    }

    const [copied, setcopied] = useState(false)

    function copylink() {
        setcopied(true)
        setTimeout(() => {
            setcopied(false)
        }, 2000);
    }

    if (!res) {
        return <div>Item not found!</div>
    }
    return (
        <div className='max-w-[1200px] m-auto'>
            <div className=' relative flex justify-between items-center py-3'>
                <Link to="/" className='text-xl p-2 bg-gray-100 hover:bg-gray-200 rounded-xl'><IoChevronBack /></Link>
                <button className='text-xl p-2 bg-gray-100 hover:bg-gray-200 outline-none rounded-xl' onClick={copylink}><IoShareSocialOutline /></button>
                <div className={`absolute right-0 -bottom-[40px] bg-gray-100 rounded-xl p-3 flex items-center justify-start transition-all   ${copied ? ' opacity-100 scale-100' : ' opacity-0 scale-0'}`} id='copied'>
                    <IoCheckmarkOutline className='text-xl text-green-600' />
                    <p className='text-sm px-1 font-medium text-gray-500'>
                        Link Copied
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project