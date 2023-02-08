import React from 'react'
import google from "../../assets/icons/google.png"
import arrowIcon from "../../assets/icons/arrow.png"

const MenuItem = ({name,icon,arrow,mini}) => {
  const active = name =="Humane Resources" && "bg-[#FFFFFF52] rounded-[4px] text-white"
  if (!mini) {
    return (
      <button className={`w-full flex items-center justify-between mb-4 p-2   ${active || "text-d-side-p-gray"}`}>
          <div className='flex items-center gap-6'>
              <img src={icon} className="w-5"/>
              <span className=' text-xs'>{name}</span>
          </div>
              
          {arrow && <img src={arrowIcon} className="w-8"/>}
      </button>
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