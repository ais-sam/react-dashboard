import React from 'react'
import FiltersBar from './FiltersBar'
import Pagination from './Pagination'
import Popup from './Popup'
import Table from './table/Table'

const Linsting = () => {
  return (
    <div className='bg-d-tb-blue p-8 relative'>
        <div className='bg-white py-4 rounded-2xl shadow-listing'>
          <FiltersBar/>
          <Table/>
          <Pagination/>
          <Popup/>
        </div>
    </div>
  )
}

export default Linsting