import React from 'react'
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import PaginationButton from './PaginationButton';
import { pagination } from '../../../constants';


const Pagination = () => {

  const Buttons = ()=>{
   return(
    pagination.map(el=>{
      if (el.value === "left") {
        return <PaginationButton key={el.id} active = {el.active}><RiArrowDropLeftLine className='text-2xl'/></PaginationButton>
      } else if(el.value === "right") {
        return <PaginationButton key={el.id} active = {el.active}><RiArrowDropRightLine className='text-2xl'/></PaginationButton>
      } else{
        return <PaginationButton key={el.id} active = {el.active}>{el.value}</PaginationButton>
      }
    })
   ) 
  }
  
  return (
    <div className='flex items-center justify-center gap-3 py-6'>
    {Buttons()}
    </div>
  )
}

export default Pagination