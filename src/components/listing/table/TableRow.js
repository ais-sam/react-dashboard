import React, {useState} from 'react'
import TableDataCell from './TableDataCell'

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Status from './Status';
import TableRowEdit from './TableRowEdit';

const TableRow = ({user}) => {
  const [select,setSelect] = useState(false)
  const infos = Object.keys(user)

  const selectUser = ()=>{
    setSelect(prev=>!prev)
  }
  return (
    <>
    <tr className={`border-b relative ${select && "bg-[#F1F2F459]  border-l-[3px] border-l-[#0066FF]"}`}> 
        <TableDataCell><input onClick={selectUser} checked={select} type="checkbox" className='rounded-full bg-red-500 border border-green-600 ml-4'/></TableDataCell>

        {infos.slice(1).map(el=>{
          if (el === "status") {
            return <TableDataCell><Status status={user[el]}/></TableDataCell>
          }
          return <TableDataCell>{user[el]}</TableDataCell>
        })} 

        <TableDataCell>
          <div className='flex gap-4 text-lg text-[#B4B4B4]'>
            <button className='hover:text-d-light-blue'><FaRegEdit/></button>
            <button className='hover:text-d-red'><RiDeleteBinLine/></button>
          </div>
        </TableDataCell>

        <TableDataCell>
          <button>
            <BiDotsVerticalRounded className='-ml-3 text-xl text-[#B4B4B4]'/>
          </button>
        </TableDataCell>
    {/* <TableRowEdit user={user}/> */}
    </tr>

    </>
    
  
  )
}

export default TableRow