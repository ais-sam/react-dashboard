import React from 'react'
import { BiPlus } from "react-icons/bi";


const Button = ({className,text,onClick}) => {
  if(text=="Add New User"){
    return <button type='button' onClick={onClick} className={`${className} px-5 py-[10px] text-sm rounded text-white capitalize`}><span className='flex items-center'><BiPlus className='text-lg font-extrabold mr-2'/> {text}</span></button>
  } 
  else {
    return <button type='button' onClick={onClick} className={`${className} px-6 py-[9px] text-sm rounded text-white capitalize`}>{text}</button>
  }
    
  
}

export default Button