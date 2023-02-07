import React from 'react'
import Filter from './Filter'
import FilterList from './FilterList'
import FiltersBar from './FiltersBar'
import ListingActions from './ListingActions'

const Linsting = () => {
  return (
    <div className='bg-d-tb-blue p-8'>
        <div className='bg-white p-4 rounded-2xl shadow-listing'>
          {/* Filter bar */}
          <FiltersBar/>
          {/* TAble */}
          <div></div>
          {/* pagination */}
          <div></div>
        </div>
    </div>
  )
}

export default Linsting