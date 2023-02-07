import React from 'react'
import google from "../../assets/icons/google.png"
import arrowIcon from "../../assets/icons/arrow.png"
const MenuItem = ({name,icon,arrow}) => {
    const active = name =="Humane Resources" && "bg-[#FFFFFF52] rounded-[4px] text-white"
  return (
    <button className={`w-full flex items-center justify-between mb-4 p-1   ${active || "text-d-side-p-gray"}`}>
        <div className='flex items-center gap-6'>
            <img src={icon} className="w-5"/>
            <span className=' text-xs'>{name}</span>
        </div>
            
        {arrow && <img src={arrowIcon} className="w-8"/>}
    </button>
  )
}

export default MenuItem