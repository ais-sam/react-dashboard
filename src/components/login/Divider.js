import React from 'react'

const Divider = ({horizontal}) => {
  if (!horizontal) {
    return (
      <div className='flex items-center gap-3 mt-8'>
            <span className='w-full h-[1px] bg-d-fd-gray translate-y-1'></span>
            <span className='text-d-or-black text-base'>Or</span>
            <span className='w-full h-[1px] bg-d-fd-gray translate-y-1'></span>
      </div>
    ) 
  }
  return ( <span className='w-8 h-1 bg-d-fd2-gray rounded block mt-10'></span>)
}

export default Divider