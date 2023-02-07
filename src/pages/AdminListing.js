import React from 'react'
import NavigationBar from '../components/listing/NavigationBar'
import Sidebar from '../components/listing/Sidebar'
import Listing from '../components/listing/Listing'
const AdminListing = () => {
  return (
    <div className=' h-full flex'>
      <Sidebar/>
      <div className='flex-1'>
        <NavigationBar/>
        <Listing/>
      </div>
    </div>
  )
}

export default AdminListing