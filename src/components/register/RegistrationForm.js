import React from 'react'
import Input from '../login/Input'
import Button from '../global/Button'
import Select from '../global/Select'
import personal from "../../assets/icons/personal.png"
import account from "../../assets/icons/account.png"
import organisation from "../../assets/icons/organisation.png"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbBuildingPavilon } from "react-icons/tb";


const RegistrationForm = ({step}) => {
  switch (step) {
    case "one":
      return (
        <div className=' max-w-4xl md:mt-48  md:flex md:border md:border-d-fb-gray md:rounded-[20px]'>
          {/* ========== Form info =================*/}
        <div className='basis-2/5 hidden md:flex md:flex-col md:items-center md:py-12 md:px-8 border-r border-r-d-fb-gray '>
          {/* progress */}
        <div className='flex justify-center gap-4'>
            <span className='h-[6px] w-8 bg-d-blue rounded-full'></span>
            <span className='h-[6px] w-[6px] bg-d-p-gray rounded-full'></span>
        </div>

        {/* devider */}
        <span className='w-8 h-1 bg-d-fd2-gray rounded block mt-10'></span>

        {/* text + icon*/}
        <div className='mt-14'>
          <img src={personal} className="w-16 mx-auto mb-4"/>
          {/* text */}
          <div className='text-center'>
            <h3 className='text-d-fts-black text-sm font-normal mb-3'>Personal information</h3>
            <p className='text-d-st-gray text-[13px] leading-7'>Fill out the form on the left you can always edit the data later in the setting menu.</p>
          </div>
        </div>

        {/* devider */}
        <span className='w-8 h-1 bg-d-fd2-gray rounded block mt-auto'></span>
        </div>
          {/*================ Form ==================*/}
        <div className=' p-4 md:p-12'>
           {/* icon */}
           <div className='relative mb-3 w-fit mx-auto md:hidden'>
            <img src={personal}/>
          </div>
    
          {/* Step title */}
          <h1 className='text-center md:text-start d-text-black font-semibold md:font-normal text-[22px] md:text-xl mb-6 md:mb-10'>Personal information</h1>
        
        {/* progress */}
        <div className='flex justify-center gap-4 mb-6 md:hidden'>
            <span className='h-[6px] w-8 bg-d-blue rounded-full'></span>
            <span className='h-[6px] w-[6px] bg-d-p-gray rounded-full'></span>
        </div>
    
        {/* Form */}
        <form>
            {/* Inputs */}
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col md:flex-row md:gap-6'>
                <Input type="text" label="first name"/>
                <Input type="text" label="last name"/>
              </div>
              <Input type="email" label="email"/>
              <Input type="tel" label="phone number"/>
            </div>
    
           
    
            {/* Buttons */}
            <div className='flex flex-wrap md:justify-end gap-4 mt-32 md:mt-16'>
              <Button className='flex-1 md:flex-grow-0 border border-d-back-black md:border-none text-d-back-black' text="back"/>
              <Button className="bg-d-blue flex-1 md:flex-grow-0 md:flex-auto" text="next step"/>
            </div>
    
    
          </form>
        </div>
        </div>
      )
      case "two":
      return (

        <div className=' max-w-4xl md:mt-48  md:flex md:border md:border-d-fb-gray md:rounded-[20px]'>
        {/* ========== Form info =================*/}
      <div className='md:py-12  basis-3/5 hidden md:flex md:flex-col md:items-center md:py- md:px-8 border-r border-r-d-fb-gray '>
        {/* progress */}
      <div className='flex justify-center gap-4'>
          <span className='h-[6px] w-[6px] bg-d-p-gray rounded-full'></span>
          <span className='h-[6px] w-8 bg-d-blue rounded-full'></span>
      </div>

      {/* devider */}
      <span className='w-8 h-1 bg-d-fd2-gray rounded block mt-10'></span>

      {/* text + icon*/}
      <div className='mt-32'>
        <img src={account} className="w-16 mx-auto mb-4 "/>
        {/* text */}
        <div className='text-center'>
          <h3 className='text-d-fts-black text-sm font-normal mb-3'>Account information</h3>
          <p className='text-d-st-gray text-[13px] leading-7'>Fill out the form on the left you can always edit the data later in the setting menu.</p>
        </div>
      </div>

      {/* devider */}
      <span className='w-8 h-1 bg-d-fd2-gray rounded block mt-auto'></span>
      </div>
        {/*================ Form ==================*/}
        <div className='p-4 mt-32 md:mt-0 md:p-12'>
            {/* icon */}
          <div className='relative mb-3 w-fit mx-auto md:hidden'>
            <img src={account}/>
          </div>
    
          {/* Step title */}
          <h1 className='text-center md:text-start d-text-black font-semibold md:font-normal text-[22px] md:text-xl mb-6 md:mb-10'>Account information</h1>
        
        {/* Account selection */}
        <div className='hidden md:flex md:justify-between md:gap-8 mb-3'>
          {/* organisation account */}
          <label className='flex-1 relative border border-d-blue py-2 px-4 rounded-[10px]'>
            <input type="radio" className='absolute right-1 top-1 w-3'/>
            <div className='mt-4 flex flex-col items-center px-7 pb-4'>
              <HiOutlineBuildingOffice2 className='text-2xl text-d-back-black'/>
              <span className='text-[11px] text-d-fas-black block mt-1'>Organization Account</span>
            </div>
          </label>
          {/* profile account */}
          <label className='flex-1 relative border border-d-p-gray py-2 px-4 rounded-[10px]'>
            <input type="radio" className='absolute right-1 top-1 w-3'/>
            <div className='mt-4 flex flex-col items-center px-7 pb-4'>
              <TbBuildingPavilon className='text-2xl text-d-p-gray '/>
              <span className='text-[11px] text-d-fas-black block'>Privat Account</span>
            </div>
          </label>
        </div>
        {/* progress */}
        <div className='flex justify-center gap-4 mb-6 md:hidden'>
            <span className='h-[6px] w-[6px] bg-d-p-gray rounded-full'></span>
            <span className='h-[6px] w-8 bg-d-blue rounded-full'></span>
        </div>
    
        {/* Form */}
        <form>
            {/* Inputs */}
            <div className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row md:gap-6'>
              <Input className="md:flex-1" type="text" label="organization name"/>
              <Select className="md:flex-1" label="last country"/>
            </div>
              <Input type="email" label="Proffesional Email"/>
              <Input type="text" label="Address"/>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                <Select className="" label="city"/>
                <Select className="" label="state"/>
                <Input type="text" label="zip code" className=""/>
              </div>
            </div>
    
           
    
            {/* Buttons */}
            <div className='flex flex-wrap md:justify-end gap-4 mt-32 md:mt-16'>
              <Button className='flex-1 md:flex-grow-0 border border-d-back-black md:border-none text-d-back-black' text="back"/>
              <Button className="bg-d-blue flex-1 md:flex-grow-0 md:flex-auto" text="next step"/>
            </div>
    
    
          </form>
        </div>
      </div>

        
      )
      break;
  
    default:
      break;
  }
 
}

export default RegistrationForm