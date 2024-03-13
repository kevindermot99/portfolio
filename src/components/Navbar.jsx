import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import memoji from "../assets/me/memoji.jpeg"
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className='bg-white bg-opacity-70 backdrop-blur-xl px-7 py-5 h-fit w-full flex items-center justify-between'>
            <div className='flex items-center justify-center gap-4'>
                <h1 className='text-lg font-bold '>mboni kevin</h1>
                <ul>
                    <Link className='text-sm font-medium capitalize py-3 px-3 hover:bg-gray-100 rounded-lg'>Projects</Link>
                    <Link className='text-sm font-medium capitalize py-3 px-3 hover:bg-gray-100 rounded-lg'>About</Link>
                    <Link className='text-sm font-medium capitalize py-3 px-3 hover:bg-gray-100 rounded-lg'>Contact</Link>
                </ul>
            </div>

            <div className='flex gap-3 items-center justify-center'>
                <FaGithub className='text-3xl text-black cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar