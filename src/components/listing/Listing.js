import React from 'react'
import FiltersBar from './FiltersBar'
import Pagination from './Pagination'
import Table from './table/Table'

const Linsting = () => {
  return (
    <div className='bg-d-tb-blue p-8'>
        <div className='bg-white p-4 rounded-2xl shadow-listing'>
          <FiltersBar/>
          <Table/>
          <Pagination/>
        </div>
    </div>
  )
}

export default Linsting