import React from 'react'
import FiltersBar from './FiltersBar'
import Pagination from './Pagination'
import Popup from './popup/Popup'
import Table from './table/Table'
import { ListingContextProvider } from '../../contexts/ListingContext'

const Linsting = () => {

  return (
    <ListingContextProvider>
      <div className='bg-d-tb-blue p-8 relative'>
          <div className='bg-white py-4 rounded-2xl shadow-listing'>
            <FiltersBar/>
            <Table/>
            <Pagination/>
            <Popup/>
          </div>
      </div>
    </ListingContextProvider>
  )
}

export default Linsting