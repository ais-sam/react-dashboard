import React from 'react'
import Button from '../global/Button'
import success from "../../assets/icons/success.png"
const SuccessfulSubscriptionCard = () => {
  return (
    <div className='p-8 rounded-[20px] max-w-[375px] md:border md:border-d-fb-gray text-center'>
      {/* Checkmark */}
      <div className='relative mb-3 w-fit mx-auto'>
        <img src={success}/>
      </div>

      {/* message */}
      <div className='mb-7'>
        <h3 className='capitalize text-d-text-black font-semibold text-center mb-2'>awesome</h3>
        <p className='text-d-st-gray text-[13px] leading-8 md:leading-6 px-12 md:px-11'>
        Thanks for your subscription Please check your email address and confirme your account
        </p>
      </div>

      {/* Button */}
      <Button className="bg-d-blue" text="sign in"/>
    </div>
  )
}

export default SuccessfulSubscriptionCard