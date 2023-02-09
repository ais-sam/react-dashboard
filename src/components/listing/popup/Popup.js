import React from 'react'
import DeleteAdminCard from './DeleteAdminCard'
import NewAdminForm from './NewAdminForm'
import SuccessfulCreationCard from './SuccessfulCreationCard'
import { useListing } from '../../../contexts/ListingContext'

const Popup = () => {
  const {open,setOpen,action} = useListing()
  if (open) {
    return (
  
      <div className='absolute w-full -top-10 left-0 bg-blur bg-[#ffffff] z-10'>
          <div className='absolute h-full w-full left-0 top-0' onClick={()=>setOpen(false)}></div>
          {action === "add" && <NewAdminForm/>}
          {action === "delete" && <DeleteAdminCard/>}
          {action === "success" && <SuccessfulCreationCard/>}
      </div>
    )
  }
}

export default Popup