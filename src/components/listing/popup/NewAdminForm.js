import React from 'react'
import Button from '../../global/Button'
import Input from '../../global/Input'
import { IoClose } from "react-icons/io5";
const NewAdminForm = () => {
  return (
    <div className='bg-white w-[660px] rounded-[20px] p-12  absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 overflow-hidden'>
        
        <div className='flex items-center justify-between bg-[#F8F8F8] absolute top-0 w-full left-0 p-2 px-4 '>
            <h4 className='text-[#5B5B5B] text-lg font-normal'>New Admin user</h4>
            <button className='w-5 h-5 bg-white rounded-full flex items-center justify-center'><IoClose className='text-[#B4B4B4] text-sm'/></button>
        </div>

        <form>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col md:flex-row md:gap-6'>
                <Input admin="first" type="text" label="first name"/>
                <Input admin="last" type="text" label="last name"/>
              </div>
              <Input type="email" label="email"/>
              <Input admin={true} type="tel" label="phone number"/>
              <Input type="text" label="admin user role"/>

            </div>

            <div className='flex flex-wrap md:justify-end gap-4 mt-32 md:mt-16'>
              <Button className='flex-1 md:flex-grow-0 border border-d-back-black md:border-none text-d-back-black' text="cancel"/>
              <Button className="bg-[#08C874] flex-1 md:flex-grow-0 md:flex-auto" text="create"/>
            </div>
    
    
          </form>
        </div>
  )
}

export default NewAdminForm