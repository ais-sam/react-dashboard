import React from 'react'
import SuccessfulSubscriptionCard from '../components/register/SuccessfulSubscriptionCard'

const SuccessfulRegistration = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex items-center justify-center h-full'>
        <SuccessfulSubscriptionCard/>
      </div>
    </div>
  )
}

export default SuccessfulRegistration