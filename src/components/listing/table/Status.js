import React from 'react'

const Status = ({status}) => {
  return (
    <span className={`w-16 block text-xs capitalize py-[2px] text-center  rounded-[4px]  ${status === "active" ? "bg-[#08C87424] text-db-green" :"bg-[#D4D4D5] text-[#7B7B7B]"}`}>{status}</span>
  )
}

export default Status