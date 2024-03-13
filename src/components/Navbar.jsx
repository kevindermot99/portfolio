import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import memoji from "../assets/me/memoji.jpeg"

function Navbar() {
    
  return (
    <div className='bg-white bg-opacity-70 backdrop-blur-xl px-7 py-2 h-fit w-full flex items-center justify-between'>
        <img src={memoji} className="h-10 rounded-full" />

        <h1 className='text-xl font-bold'>mboni Kevin</h1>
        
        <div className='flex gap-3 items-center justify-center'>
            <FaGithub className='text-3xl text-black cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar