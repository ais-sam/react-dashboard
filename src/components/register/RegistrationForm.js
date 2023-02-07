import React from 'react'
import Input from '../login/Input'
import Button from '../global/Button'
import Select from '../global/Select'
import personal from "../../assets/icons/personal.png"
import account from "../../assets/icons/account.png"

const RegistrationForm = ({step}) => {
  switch (step) {
    case "one":
      return (
        <div className='max-w-lg p-4'>
           {/* icon */}
           <div className='relative mb-3 w-fit mx-auto'>
            <img src={personal}/>
          </div>
    
          {/* Step title */}
          <h1 className='text-center d-text-black font-semibold text-[22px] mb-6'>Personal information</h1>
        
        {/* progress */}
        <div className='flex justify-center gap-2 mb-6'>
            <span className='h-2 w-8 bg-d-blue rounded-full'></span>
            <span className='h-2 w-2 bg-d-p-gray rounded-full'></span>
        </div>
    
        {/* Form */}
        <form>
            {/* Inputs */}
            <div className='flex flex-col gap-6'>
              <Input type="text" label="first name"/>
              <Input type="text" label="last name"/>
              <Input type="email" label="email"/>
              <Input type="tel" label="phone number"/>
            </div>
    
           
    
            {/* Buttons */}
            <div className='flex flex-wrap gap-4 mt-32'>
              <Button className='flex-1 border border-d-back-black text-d-back-black' text="back"/>
              <Button className="bg-d-blue flex-1" text="next step"/>
            </div>
    
    
          </form>
        </div>
      )
      case "two":
      return (
        <div className='max-w-lg p-4 mt-32'>
            {/* icon */}
          <div className='relative mb-3 w-fit mx-auto'>
            <img src={account}/>
          </div>
    
          {/* Step title */}
          <h1 className='text-center d-text-black font-semibold text-[22px] mb-6'>Account information</h1>
        
        {/* progress */}
        <div className='flex justify-center gap-2 mb-6'>
            <span className='h-2 w-2 bg-d-p-gray rounded-full'></span>
            <span className='h-2 w-8 bg-d-blue rounded-full'></span>
        </div>
    
        {/* Form */}
        <form>
            {/* Inputs */}
            <div className='flex flex-col gap-6'>
              <Input type="text" label="organization name"/>
              <Select label="last country"/>
              <Input type="email" label="Proffesional Email"/>
              <Input type="text" label="Address"/>
              <div className='flex items-center justify-between gap-5'>
                <Select className="flex-1" label="city"/>
                <Select className="flex-1" label="state"/>
              </div>
              <Input type="text" label="zip code" className="w-1/2"/>
            </div>
    
           
    
            {/* Buttons */}
            <div className='flex flex-wrap gap-4 mt-32'>
              <Button className='flex-1 border border-d-back-black text-d-back-black' text="back"/>
              <Button className="bg-d-blue flex-1" text="next step"/>
            </div>
    
    
          </form>
        </div>
      )
      break;
  
    default:
      break;
  }
 
}

export default RegistrationForm