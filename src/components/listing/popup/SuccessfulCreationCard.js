import React from 'react'
import Button from '../../global/Button'
import success from "../../../assets/icons/success.png"
import { useListing } from '../../../contexts/ListingContext'

const SuccessfulCreationCard = () => {
  const {setOpen} = useListing()
  return (
    <div className='z-50 text-center bg-white w-[375px] rounded-[20px] p-12  absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 overflow-hidden'>
      
      <div className='relative mb-4 w-fit mx-auto'>
            <img src={success}/>
      </div>


      <div className='mb-7'>
        <h4 className='capitalize text-d-text-black font-semibold text-center mb-2 text-xl'>Created Successfully</h4>
        <p className='text-d-st-gray text-[13px] px-4'>
        Admin user has been successfully created
        </p>
      </div>

      <Button onClick={()=>setOpen(false)} className="bg-db-green mt-3" text="got it"/>
    </div>

  )
}

export default SuccessfulCreationCard