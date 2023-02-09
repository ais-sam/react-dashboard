import React from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";

const Filter = ({type,value}) => {
  return (
    <button className='flex items-center outline-none p-3 rounded-md bg-d-filter-blue text-xs text-d-ft-gray'>
        <span>{type} : </span>
        <span>{value}</span>
        <RiArrowDropDownFill className='ml-2 text-lg'/>
    </button>
  )
}

export default Filter