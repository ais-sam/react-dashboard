import React from 'react'
import Buttons from './Buttons'
import Links from './Links'
import Logo from './Logo'
import { FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="border-b border-b-db-gray">
        <div className="hidden lg:container md:flex items-center justify-between py-5">
          <div className="flex gap-10 items-center">
            <Logo />
            <Links />
          </div>
          <Buttons />
        </div>
      </div>
      <button onClick={()=>navigate("/")} className="mt-6 mr-10 md:hidden p-1  bg-[#98989870] rounded-full flex items-center justify-center text-white ml-auto">
        <FaTimes className='text-white text-sm'/>
      </button>
    </>
  );
}

export default Navbar