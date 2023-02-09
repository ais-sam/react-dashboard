import React, { useState } from 'react';
import TableDataCell from './TableDataCell';

import { BiDotsVerticalRounded } from "react-icons/bi";
import ActionsButtons from './ActionsButtons';
import Status from './Status';

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

        <ActionsButtons/>

        <TableDataCell>
          <button>
            <BiDotsVerticalRounded className='-ml-5 translate-y-1  text-xl  text-[#B4B4B4]'/>
          </button>
        </TableDataCell>
    </tr>

    </>
    
  
  )
}

export default TableRow