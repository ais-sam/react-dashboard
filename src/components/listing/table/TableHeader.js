import React from 'react'
import { tableHeaders } from '../../../constants'
import TableHeaderElement from './TableHeaderElement'
import { MdOutlineArrowDropDown } from "react-icons/md";

const TableHeader = () => {
  return (
    <thead className="text-d-dark-blue">

        <tr className=''>
          <th scope="col" className="text-xs font-medium px-1 py-4 text-left"></th>
          {tableHeaders.map(el=><TableHeaderElement key={el.id} value={el.value}/>)}
          
        </tr>
    </thead>
  )
}

export default TableHeader