import React from 'react'
import { FaRegBell } from "react-icons/fa";

const Bell = () => {
  return (
    <div className='relative'>
        <span className='absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-d-admin-green border- border-2 border-white'></span>
        <FaRegBell className='text-2xl'/>
    </div>
  )
}

export default Bell