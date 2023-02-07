import React from 'react'
import { FaRegBell } from "react-icons/fa";
import avatar from "../../assets/icons/avatar.png"
import arrow from "../../assets/icons/admin-arrow.png"
import Bell from './Bell';
import Avatar from './Avatar';
const NavigationBar = () => {
  return (
    <div className='py-4 px-4 text-d-admin-blue'>
      {/* title + avatar */}
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl '>Humane Resources / <span className='font-semibold'>Admin Users</span></h2>
        {/* avatar */}
        <div className="flex items-center gap-2">
          <Bell/>
          <Avatar/>
          <button><img src={arrow} className="w-5"/></button>
        </div>
      </div>

      {/* menu */}
      <div className='ml-4 mt-5 flex items-center gap-7 text-md text-[15px] text-d-admin-m-gray'>
        <button className='w-8 font-semibold pb-2 text-d-admin-blue border-b-2 border-b-d-admin-blue'>All</button>
        <button className='pb-2'>Blocked</button>
        <button className='pb-2'>Paused</button>
      </div>
    </div>
  )
}

export default NavigationBar