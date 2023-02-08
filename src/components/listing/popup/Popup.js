import React from 'react'
import DeleteAdminCard from './DeleteAdminCard'
import NewAdminForm from './NewAdminForm'
import SuccessfulCreationCard from './SuccessfulCreationCard'
const Popup = () => {
  return (
    <div className='absolute w-full -top-10 left-0 bg-blur bg-[#ffffff] z-10'>
        {/* <NewAdminForm/> */}
        {/* <DeleteAdminCard/> */}
        <SuccessfulCreationCard/>
    </div>

  )
}

export default Popup