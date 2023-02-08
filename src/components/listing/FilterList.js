import React from 'react'
import Filter from './Filter'
import { filters } from '../../constants'
const FilterList = () => {
  return (
    <div className='flex items-center gap-3'>
        {filters.map(filter=><Filter key={filter.id} {...filter}/>)}
    </div>
  )
}

export default FilterList