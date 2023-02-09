import React from 'react'

const ActionButton = ({children}) => {
  return (
    <button className='rounded-[4px] flex items-center justify-center bg-d-act-gray p-2'>
        {children}
    </button>
    )
}

export default ActionButton