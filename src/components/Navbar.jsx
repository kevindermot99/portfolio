import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation()
  const linkStyle = `w-[110px] h-[43px] font-semibold flex items-center justify-center gap-2 rounded-full`
  return (
    <div className="sticky top-10 left-0 right-0 mx-auto z-30 bg-white/80 backdrop-blur-md w-[90%] max-w-fit p-[5px] ring-1 ring-stone-200 shadow-lg rounded-full flex items-center justify-center">
      {/* link */}
      <Link
        className={` ${linkStyle} ${location.pathname === '/' ? 'bg-navbar_active_link' : 'text-black/40'} `}
        to={"/"}
      >
        Home
      </Link>
      {/* link */}
      <Link
        className={`${linkStyle} ${location.pathname === '/about' ? 'bg-navbar_active_link' : 'text-black/40'} `}
        to={"/about"}
      >
        About
      </Link>
      {/* link */}
      <Link
        className={`${linkStyle} ${location.pathname === '/work' ? 'bg-navbar_active_link' : 'text-black/40'} `}
        to={"/"}
      >
        <span className="h-2 aspect-square rounded-full bg-orange-500"></span>
        Work
      </Link>
      {/* link */}
      <Link
        className={`${linkStyle} ${location.pathname === '/contact' ? 'bg-navbar_active_link' : 'text-black/40'} `}
        to={"/"}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
