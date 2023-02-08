import React from 'react'
import Filter from './Filter'
import FilterList from './FilterList'
import FiltersBar from './FiltersBar'
import ListingActions from './ListingActions'
import Pagination from './Pagination'

const Linsting = () => {
  return (
    <div className='bg-d-tb-blue p-8'>
        <div className='bg-white p-4 rounded-2xl shadow-listing'>
          {/* Filter bar */}
          <FiltersBar/>
          {/* TAble */}
          <div></div>
          {/* pagination */}
          <Pagination/>
        </div>
    </div>
  )
}

export default Linsting