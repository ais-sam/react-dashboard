import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";

const TableHeaderElement = ({value}) => {
  return (
    <th scope="col" className="text-xs font-medium px-1 py-4 text-left">
        {value}
        {value !=="Actions" && <MdOutlineArrowDropDown className='inline ml-4 text-lg'/>}
    </th>
  )
}

export default TableHeaderElement