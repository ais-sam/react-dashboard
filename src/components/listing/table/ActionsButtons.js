import React from 'react'
import RowActionButton from './RowActionButton'
import TableDataCell from './TableDataCell'

const ActionsButtons = () => {
  return (
    <TableDataCell>
          <div className='flex gap-4 text-lg text-[#B4B4B4]'>
            <RowActionButton type="edit"/>
            <RowActionButton type="delete"/>
          </div>
    </TableDataCell>
  )
}

export default ActionsButtons