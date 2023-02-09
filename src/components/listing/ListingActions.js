import React from 'react';
import Button from '../global/Button';
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbFilter } from "react-icons/tb";
import ActionButton from './ActionButton';
import { useListing } from '../../contexts/ListingContext';

const ListingActions = () => {
  const {setOpen,setAction} = useListing()
  const addUser = ()=>{
    setOpen(true)
    setAction("add")
  }
  return (
    <div className='flex items-center gap-3'>

        <div className='flex items-center gap-3'>
          <ActionButton><HiOutlineSearch className='text-d-action-gray'/></ActionButton>
          <ActionButton><TbFilter className='text-d-action-gray'/></ActionButton>
          <ActionButton><MdOutlineFileDownload className='text-d-action-gray'/></ActionButton>
        </div>
        
        <Button onClick={addUser} className="bg-d-action-blue text-xs" text="Add New User"/>
    </div>
  )
}

export default ListingActions