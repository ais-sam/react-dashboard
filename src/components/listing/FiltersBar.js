import React from 'react'
import FilterList from './FilterList'
import ListingActions from './ListingActions'


const FiltersBar = () => {
  return (
    <div className="flex items-center justify-between">
      <FilterList />
      <ListingActions />
    </div>
  );
}

export default FiltersBar