import React from 'react'
import NavigationBar from '../components/listing/NavigationBar'
import Sidebar from '../components/listing/Sidebar'
import Table from '../components/listing/Table'
const AdminListing = () => {
  return (
    <div className=' h-full flex'>
      <Sidebar/>
      <div>
        <NavigationBar/>
        <Table/>
      </div>
    </div>
  )
}

export default AdminListing