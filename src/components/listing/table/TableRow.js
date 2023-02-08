import React from 'react'
import TableDataCell from './TableDataCell'

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Status from './Status';

const TableRow = ({user}) => {
  const infos = Object.keys(user)
  return (
    <tr className="border-b py-20"> 
          <TableDataCell><input type="checkbox" className='rounded-full bg-red-500 border border-green-600'/></TableDataCell>

        {infos.slice(1).map(el=>{
          if (el === "status") {
            return <TableDataCell><Status status={user[el]}/></TableDataCell>
          }
          return <TableDataCell>{user[el]}</TableDataCell>
        })} 

        <TableDataCell>
          <div className='flex gap-4 text-lg text-[#B4B4B4]'>
            <button className='hover:text-[#9BA1FF]'><FaRegEdit/></button>
            <button className='hover:text-d-red'><RiDeleteBinLine/></button>
          </div>
        </TableDataCell>
        <TableDataCell><button><BiDotsVerticalRounded className='-ml-3 text-xl text-[#B4B4B4]'/></button></TableDataCell>


    </tr>
  )
}

export default TableRow