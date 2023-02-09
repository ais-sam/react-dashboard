import React from 'react'
import warning from "../../../assets/icons/warning.png"
import Button from '../../global/Button'
import { useListing } from '../../../contexts/ListingContext'

const DeleteAdminCard = () => {
  const {setOpen} = useListing()

  return (
    <div className='z-50 bg-white w-[375px] rounded-[20px] p-12  absolute top-1/2 -translate-y-[340px] left-1/2 -translate-x-1/2 overflow-hidden'>
        <img src={warning} className="w-[70px] mx-auto"/>

        <div className='text-center mt-3'>
            <h4 className='text-xl text-d-text-black mb-2 font-semibold'>Delete Admin !</h4>
            <p className='text-[13px] text-[#00000066] py-2 px-2'>Are you sure you wanna delete this admin user</p>
            <input placeholder='( Admin user name here )' className='px-1 w-52 focus:outline-none focus:placeholder:text-transparent placeholder:text-center placeholder:text-black placeholder:text-[13px] text-[13px] text-center'/>
        </div>

        <div className='text-center mt-5'>
            <Button onClick={()=>setOpen(false)} text="Cancel" className="text-d-admin-m-gray mr-4"/>
            <Button onClick={()=>setOpen(false)} text="Delete" className="bg-d-red px-8" />
        </div>
    </div>
  )
}

export default DeleteAdminCard