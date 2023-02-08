import React from 'react'

const TableDataCell = ({children}) => {
  return (
    <td className="text-[13px] text-d-dark-blue font-light px-1 py-6 whitespace-nowrap">
          {children}
    </td>
  )
}

export default TableDataCell