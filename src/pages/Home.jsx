import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { LuArrowDown, LuGithub, LuLinkedin } from 'react-icons/lu'

function Home() {
  return (
    <div className='h-svh max-w-screen-xl mx-auto flex p-10 max-md:p-5 text-text-color text-sm'>
      <div className='w-[40%] h-full space-y-1'>
        <div className='w-[120px] h-auto aspect-square rounded-full overflow-hidden mb-3'>
          <img src="https://i.pinimg.com/736x/50/27/ca/5027caf6daf0e8b5b04537c9f57c880b.jpg" className="min-h-full w-full object-cover" />
        </div>
        <h1 className='text-2xl font-bold '>Kevin K. Mbonimpaye</h1>
        <p className='text-text-color-50'>Fullstack Web Developer</p>
        <p className='text-text-color-50'>21 years old</p>
        <p className='text-text-color-50'>📍Kigali, Rwanda 🇷🇼</p>
        <div className='flex items-center py-2 gap-2  '>
          <button className='h-[35px] cursor-pointer active:scale-95 pr-4 pl-3 text-sm font-medium rounded-lg bg-main-color text-white flex gap-1 items-center'>
          <LuArrowDown className='text-base'/>
            Resume
          </button>
          <button className='h-[35px] cursor-pointer active:scale-95 px-3 text-lg rounded-lg bg-container-color text-text-color-50 flex gap-1 items-center'>
          <FaGithub />
          </button>
          <button className='h-[35px] cursor-pointer active:scale-95 px-3 text-lg rounded-lg bg-container-color text-text-color-50 flex gap-1 items-center'>
          <HiOutlineMail />
          </button>
          <button className='h-[35px] cursor-pointer active:scale-95 px-3 text-lg rounded-lg bg-container-color text-text-color-50 flex gap-1 items-center'>
          <FaLinkedin />
          </button>
        </div>
      </div>
      <div className='w-auto flex-1 h-full space-y-1'>
      <h1 className='text-xl font-bold '>About Me</h1>
      <p className='text-text-color-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, repellendus sequi rem doloremque dolores quos debitis? Dicta nemo eos accusamus. Assumenda tempore natus suscipit aliquam provident cum aut maiores sint?</p>
      <h1 className='text-xl font-bold pt-5'>Skilled in</h1>

      </div>
    </div>
  )
}

export default Home