import React, { useState } from 'react'
import arrowIcon from "../../../assets/icons/arrow.png"
import Submenu from './Submenu'

const MenuItem = ({name,icon,arrow,mini}) => {
  const active = name =="Humane Resources" && "bg-[#FFFFFF52] rounded-[4px] text-white"
  const [open,setOpen] = useState(false)

  const handleClick = ()=>{
    if (active) {
      setOpen(prev=>!prev)
    }
  }
  if (!mini) {
    return (
      <div onClick={handleClick} className={`${open && "bg-[#FFFFFF52] pb-2 rounded-[4px]"}`}>
        <button className={`w-full flex items-center justify-between mb-4 p-2   ${name =="Humane Resources" && !open ? "bg-[#FFFFFF52] rounded-[4px] text-white" :name =="Humane Resources"? "text-white" : "text-d-side-p-gray"}`}>
            <div className='flex items-center gap-6'>
                <img src={icon} className="w-5"/>
                <span className=' text-xs'>{name}</span>
            </div>
                
            {arrow && <img src={arrowIcon} className="w-8"/>}
        </button>
        {(name === "Humane Resources") && open && <Submenu/>}
      </div>
    )
  }

  return (
    <button className={`w-full flex items-center justify-center mb-4 p-2   ${active || "text-d-side-p-gray"}`}>
        <div className='flex items-center gap-6'>
            <img src={icon} className="w-5"/>
        </div>
    </button>
  )
}

export default MenuItem