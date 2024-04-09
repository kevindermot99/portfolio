import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { NavNames } from '../data';

function Navbar() {

    const location = useLocation()

    return (
        <div className='bg-white bg-opacity-95 backdrop-blur-lg px-7 py-5 h-fit w-full flex items-center justify-between sticky top-0 z-10'>
            <div className='flex items-center justify-center gap-1'>
                <h1 className='text-xl font-bold cursor-default mr-10 '>{NavNames}</h1>

                <Link to="/" className={`${location.pathname === '/' && 'bg-stone-200  indicator pointer-events-none'} relative text-sm font-medium capitalize py-3 min-w-[90px] flex justify-center items-center px-4 hover:bg-stone-100 rounded-lg `}>
                    Projects
                </Link>
                <Link to="/about" className={`${location.pathname == '/about' && 'bg-stone-200  indicator pointer-events-none'} relative text-sm font-medium capitalize py-3 min-w-[90px] flex justify-center items-center px-4 hover:bg-stone-100 rounded-lg `}>
                    About
                </Link>
                <Link to="/contact" className={`${location.pathname == '/contact' && 'bg-stone-200  indicator pointer-events-none'} relative text-sm font-medium capitalize py-3 min-w-[90px] flex justify-center items-center px-4 hover:bg-stone-100 rounded-lg `}>
                    Contact
                </Link>
                <Link to="/mycv" className={` relative text-sm font-medium capitalize py-3 min-w-[90px] flex justify-center items-center px-4 hover:bg-stone-100 rounded-lg `}>
                    My CV
                </Link>


            </div>

            <div className='flex gap-3 items-center justify-center'>
                <FaGithub className='text-3xl text-black cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar