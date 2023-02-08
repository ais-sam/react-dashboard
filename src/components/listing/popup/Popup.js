import React from 'react'
import DeleteAdminCard from './DeleteAdminCard'
import NewAdminForm from './NewAdminForm'
const Popup = () => {
  return (
    <div className='absolute w-full -top-10 left-0 bg-blur bg-[#ffffff] z-10'>
        {/* <NewAdminForm/> */}
        <DeleteAdminCard/>
    </div>

  )
}

export default Popup