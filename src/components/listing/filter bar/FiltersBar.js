import React from 'react'
import FilterList from './FilterList'
import ListingActions from './ListingActions'


const FiltersBar = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-3 px-4">
      <FilterList />
      <ListingActions />
    </div>
  );
}

export default FiltersBar