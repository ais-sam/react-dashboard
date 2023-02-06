import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SuccessfulSubscriptionCard from '../components/register/SuccessfulSubscriptionCard'

const SuccessfulRegistration = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <div className='flex items-center justify-center h-full'>
        <SuccessfulSubscriptionCard/>
      </div>
    </div>
  )
}

export default SuccessfulRegistration