import React from 'react'
import NavigationBar from '../components/listing/navigation/NavigationBar'
import Sidebar from '../components/listing/sidebar/Sidebar'
import Listing from '../components/listing/Listing'
import MiniSidebar from '../components/listing/sidebar/MiniSidebar'


const AdminListing = () => {
  return (
    <div className=' h-full flex'>
      <Sidebar className="hidden lg:block"/>
      <MiniSidebar className="lg:hidden"/>
      <div className='w-full '>
        <NavigationBar/>
        <Listing/>
      </div>
    </div>
  )
}

export default AdminListing