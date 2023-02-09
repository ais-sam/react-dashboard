import React from 'react'

const NavigationLinks = () => {
  return (
    <div className='ml-4 mt-5 flex items-center gap-9 text-md text-[15px] text-d-admin-m-gray'>
        <button className='w-8 font-semibold pb-4 text-d-admin-blue border-b-2 border-b-d-admin-blue'>All</button>
        <button className='pb-4'>Blocked</button>
        <button className='pb-4'>Paused</button>
    </div>
  )
}

export default NavigationLinks