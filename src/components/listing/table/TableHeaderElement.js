import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";

const TableHeaderElement = ({value}) => {
  return (
    <th scope="col" className="text-xs font-medium px-1 py-4 text-left">
        {value}
        {value !=="Actions" && <MdOutlineArrowDropDown className='inline ml-2'/>}
    </th>
  )
}

export default TableHeaderElement