import React, { useState } from 'react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { TbBuildingPavilon } from "react-icons/tb"


const AccountSelection = () => {
  const [organization,setOrganization] = useState(true)
  const [account,setAccount] = useState(false)
  
  const selectAccount = ()=>{
    setAccount(true)
    setOrganization(false)
  }

  const selectOrganization = ()=>{
    setOrganization(true)
    setAccount(false)
  }
  
  
  return (
    <div className='hidden md:flex md:justify-between md:gap-8 mb-4'>

        <label onClick={selectOrganization} className={`cursor-pointer flex-1 relative border ${organization ? "border-d-blue": "border-d-p-gray"} py-2 px-4 rounded-[10px]`}>
            <input checked={organization} type="radio" className='absolute right-1 top-1 w-3'/>
            <div className='mt-4 flex flex-col items-center px-7 pb-4'>
            <HiOutlineBuildingOffice2 className='text-2xl text-d-back-black'/>
            <span className='text-[11px] text-d-fas-black block mt-1'>Organization Account</span>
            </div>
        </label>


        <label onClick={selectAccount} className={`cursor-pointer flex-1 relative border py-2 px-4 rounded-[10px] ${account ? "border-d-blue": "border-d-p-gray"}`}>
            <input checked={account} type="radio" className='absolute right-1 top-1 w-3'/>
            <div className='mt-4 flex flex-col items-center px-7 pb-4'>
            <TbBuildingPavilon className='text-2xl text-d-p-gray '/>
            <span className='text-[11px] text-d-fas-black block'>Privat Account</span>
            </div>
        </label>
</div>
  )
}

export default AccountSelection