import React from 'react'

const PaginationButton = ({className,children,active}) => {
  return (
    <button className={`${className} text-xs p-1 w-6 h-6  rounded-md flex items-center justify-center ${active ? "text-white bg-d-dark-blue" : "bg-[#EEEEEE] text-[#585858]" }`}>{children}</button>
  )
}

export default PaginationButton