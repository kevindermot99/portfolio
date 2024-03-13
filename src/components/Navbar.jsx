import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavLinks, NavNames } from '../data';

function Navbar() {

    return (
        <div className='bg-white bg-opacity-70 backdrop-blur-xl px-7 py-5 h-fit w-full flex items-center justify-between'>
            <div className='flex items-center justify-center gap-4'>
                <h1 className='text-xl font-bold cursor-default '>{NavNames}</h1>
                <ul>
                    {NavLinks.map((link, index) => (
                        <Link to={link.location} className='text-sm font-medium capitalize py-3 px-3 hover:bg-gray-100 rounded-lg' key={index}>
                            {link.title}
                        </Link>
                    ))}
                    
                </ul>
            </div>

            <div className='flex gap-3 items-center justify-center'>
                <FaGithub className='text-3xl text-black cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar