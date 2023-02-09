import React from 'react'
import Avatar from './Avatar'
import Bell from './Bell'
import { MdKeyboardArrowDown } from "react-icons/md";

const NavigationButtons = () => {
  return (
    <div className="flex items-center gap-2">
    <Bell/>
    <Avatar/>
    <button><MdKeyboardArrowDown className='text-#6F6F6F text-lg'/></button>
  </div>
  )
}

export default NavigationButtons